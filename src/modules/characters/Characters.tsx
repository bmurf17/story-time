import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../firebase-config";
import TabViewOfObjects from "../../shared/TabViewOfObjects";
import { Categories } from "../../shared/types/Categories";

import { CharacterDocument } from "../../shared/types/Character";
import { useQuery } from "@tanstack/react-query";

const transformCharacterToPost = (character: CharacterDocument) => ({
  id: character.id,
  title: character.basicInfo.name || "Unnamed Character",
  date: character.createdAt.toLocaleDateString(),
  description: `${character.basicInfo.species || "Unknown Species"} - ${
    character.basicInfo.occupation || "No Occupation"
  }`,
  img: character.img,
});

const fetchCharacters = async (): Promise<CharacterDocument[]> => {
  try {
    const charactersRef = collection(db, "characters");
    const q = query(charactersRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: new Date(),
      updatedAt: new Date(),
    })) as CharacterDocument[];
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};

export default function Character() {
  const {
    data: characters = [],
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
    staleTime: 10 * 60 * 1000,
    gcTime: 20 * 60 * 1000,
  });

  const transformedCharacters = characters.map(transformCharacterToPost);

  const categories: Categories = {
    "List View": transformedCharacters,
    "Grid View": transformedCharacters,
    "Map View": transformedCharacters,
  };

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
    <div className="w-full px-2 sm:px-0">
      <TabViewOfObjects categories={categories} createLink="/createCharacter" />
    </div>
  );
}
