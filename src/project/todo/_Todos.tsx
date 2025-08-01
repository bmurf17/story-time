import { Todo } from "../../shared/types/Todo";
import ColumnHeader from "../../shared/ColumnHeader";
import { TodoItem } from "./_TodoItem";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { useQuery } from "@tanstack/react-query";

const fetchTodos = async (): Promise<Todo[]> => {
  try {
    const charactersRef = collection(db, "todos");
    const q = query(charactersRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: new Date(),
      updatedAt: new Date(),
    })) as unknown as Todo[];
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

export default function Todos() {
  const {
    data: todos = [],
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 10 * 60 * 1000,
    gcTime: 20 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <div className="w-full px-2 sm:px-0">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full px-2 sm:px-0">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>
            Error loading characters: {error?.message || "Something went wrong"}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <ColumnHeader columnTitle="Pending Todos" />
      {todos.map((todo: Todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
