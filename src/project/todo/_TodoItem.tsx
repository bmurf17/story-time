import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { Todo } from "../../shared/types/Todo";

interface Props {
  todo: Todo;
}

export function TodoItem({ todo }: Props) {
  const queryClient = useQueryClient();

  const toggleCheckboxMutation = useMutation({
    mutationFn: async (updateTodo: Omit<Todo, "id">) => {
      const todosRef = doc(db, "todos", todo.id.toString());
      await updateDoc(todosRef, updateTodo);
      return todo.id;
    },
    onSuccess: (todoId) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      console.log(`Todo updated with ID:`, todoId);
    },
    onError: (error) => {
      console.error(`Error updating todo:`, error);
    },
  });

  const handleToggle = async () => {
    const { id, ...todoWithoutId } = todo;
    const updatedTodo = {
      ...todoWithoutId,
      complete: !todo.complete,
    };
    await toggleCheckboxMutation.mutateAsync(updatedTodo);
  };

  return (
    <div className="rounded overflow-hidden shadow-lg bg-slate-200">
      <div className="px-6 py-4 flex ">
        <div className="flex items-center ">
          <input
            type="checkbox"
            name="todoCheckbox"
            checked={todo.complete}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 focus:ring-2"
            onChange={handleToggle}
          />

          <div className="ms-2 text-xl font-medium text-gray-900 mb-1">
            {todo.task}
          </div>
        </div>
      </div>
    </div>
  );
}
