import { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { Todo } from "../shared/types/Todo";

export default function NavTodo() {
  const [taskDescription, setTaskDescription] = useState("");
  const queryClient = useQueryClient();

  const saveTodoMutation = useMutation({
    mutationFn: async (todo: Omit<Todo, "id">) => {
      const todosRef = collection(db, "todos");
      const docRef = await addDoc(todosRef, todo);
      return docRef.id;
    },
    onSuccess: (todo) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      console.log(`Todo created with ID:`, todo);
      setTaskDescription("");
    },
    onError: (error) => {
      console.error(`Error creating todo:`, error);
    },
  });

  const handleSave = async (close: () => void) => {
    try {
      const todoData: Omit<Todo, "id"> = {
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: "current-user-id",
        complete: false,
        task: taskDescription,
        projectId: 1,
        lastModifiedBy: "current-user-id",
      };

      await saveTodoMutation.mutateAsync(todoData);
      close();
    } catch (error) {
      console.error(`Error saving todo:`, error);
    }
  };

  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "text-white" : "text-white/90"}
                group inline-flex items-center rounded-md bg-gray-900 text-white px-3 py-2 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
          >
            <span>Add a Todo</span>
            <ChevronDownIcon
              className={`${open ? "text-purple-300" : "text-purple-300/70"}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-purple-300/80`}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-3/4 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 border-gray-800 border-4">
              <div className="flex flex-col gap-4 bg-slate-200 rounded-md p-4 relative">
                {/* Close button */}
                <button
                  onClick={close}
                  className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-300 transition-colors"
                  aria-label="Close"
                >
                  <XMarkIcon className="h-5 w-5 text-gray-500" />
                </button>

                <div className="md:flex md:items-center mt-6  p-4 mx-4">
                  <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-0 pr-4">
                      Description
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="description"
                      type="text"
                      value={taskDescription}
                      onChange={(e) => setTaskDescription(e.target.value)}
                      placeholder="Enter task description"
                    />
                  </div>
                </div>

                <button
                  onClick={() => handleSave(close)}
                  disabled={
                    saveTodoMutation.isPending || !taskDescription.trim()
                  }
                  className={`rounded-md text-white p-4 flex-1 m-4 mt-0 ${
                    saveTodoMutation.isPending || !taskDescription.trim()
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-400 hover:bg-blue-500 hover:cursor-pointer"
                  }`}
                >
                  {saveTodoMutation.isPending ? "Saving..." : "Save Todo"}
                </button>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
