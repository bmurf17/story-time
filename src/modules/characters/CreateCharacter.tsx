import { Tab } from "@headlessui/react";
import { useState, useEffect, useMemo } from "react";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";

import Spotlight from "../../shared/Spotlight";
import { db } from "../../../firebase-config";
import { FieldType, CharacterDocument } from "../../shared/types/Character";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface DynamicTab {
  name: string;
  fields: { [key: string]: FieldType }[];
  isCustomCategory?: boolean;
}

export default function CreateCharacter() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { charId } = useParams<{ charId?: string }>();
  const isEditing = Boolean(charId);

  const [formData, setFormData] = useState<{
    basicInfo: { [key: string]: string };
    skills: { [key: string]: number };
    customFields: { [category: string]: { [field: string]: any } };
    img: string;
  }>({
    basicInfo: {
      Name: "",
      Pronouns: "",
      Species: "",
      Occupation: "",
      Height: "",
      Weight: "",
      Age: "",
    },
    skills: {
      Dexterity: 10,
      Wisdom: 10,
      Intelligence: 10,
      Charisma: 10,
      Perception: 10,
      Constitution: 10,
    },
    customFields: {},
    img: "https://preview.redd.it/somebody-help-i-cant-stop-drawing-fabian-aramais-seacaster-v0-eod5jztt4erd1.jpeg?auto=webp&s=f071c6f022d6d093c89be09b0b659c17b3dc52c7",
  });

  const {
    data: existingCharacter,
    isLoading: isLoadingCharacter,
    error: loadError,
  } = useQuery({
    queryKey: ["character", charId],
    queryFn: async () => {
      if (!charId) return null;

      const docRef = doc(db, "characters", charId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
          createdAt: new Date(),
          updatedAt: new Date(),
        } as CharacterDocument & { id: string };
      } else {
        throw new Error("Character not found");
      }
    },
    enabled: isEditing,
  });

  useEffect(() => {
    if (existingCharacter && isEditing) {
      setFormData({
        basicInfo: {
          Name: existingCharacter.basicInfo?.name || "",
          Pronouns: existingCharacter.basicInfo?.pronouns || "",
          Species: existingCharacter.basicInfo?.species || "",
          Occupation: existingCharacter.basicInfo?.occupation || "",
          Height: existingCharacter.basicInfo?.height || "",
          Weight: existingCharacter.basicInfo?.weight || "",
          Age: existingCharacter.basicInfo?.age || "",
        },
        skills: {
          Dexterity: existingCharacter.skills?.dexterity || 10,
          Wisdom: existingCharacter.skills?.wisdom || 10,
          Intelligence: existingCharacter.skills?.intelligence || 10,
          Charisma: existingCharacter.skills?.charisma || 10,
          Perception: existingCharacter.skills?.perception || 10,
          Constitution: existingCharacter.skills?.constitution || 10,
        },
        img: existingCharacter.img,
        customFields: Object.fromEntries(
          Object.entries(existingCharacter.customFields || {}).map(
            ([category, fields]) => [
              category,
              Object.fromEntries(
                Object.entries(fields).map(([fieldName, fieldData]) => [
                  fieldName,
                  fieldData.value,
                ])
              ),
            ]
          )
        ),
      });
    }
  }, [existingCharacter, isEditing]);

  const categories = useMemo((): DynamicTab[] => {
    const baseTabs: DynamicTab[] = [
      {
        name: "Basic Info",
        fields: [
          { Name: "text" },
          { Pronouns: "text" },
          { Species: "text" },
          { Occupation: "text" },
          { Height: "text" },
          { Weight: "text" },
          { Age: "text" },
          { Level: "number" },
          { Class: "text" },
        ],
      },
      {
        name: "Skills",
        fields: [
          { Dexterity: "number" },
          { Wisdom: "number" },
          { Intelligence: "number" },
          { Charisma: "number" },
          { Perception: "number" },
          { Constitution: "number" },
        ],
      },
    ];

    if (existingCharacter?.customFields) {
      const customTabs = Object.entries(existingCharacter.customFields).map(
        ([categoryName, fields]) => ({
          name: categoryName,
          fields: Object.entries(fields).map(([fieldName, fieldData]) => ({
            [fieldName]: fieldData.type as FieldType,
          })),
          isCustomCategory: true,
        })
      );

      return [...baseTabs, ...customTabs];
    }

    return baseTabs;
  }, [existingCharacter]);

  const spotlightFields = useMemo(() => {
    const fields = new Map<string, string>();

    categories.forEach((category) => {
      if (category.name === "Basic Info") {
        category.fields.forEach((field) => {
          const [fieldName, fieldType] = Object.entries(field)[0];
          var lowerCaseName = fieldName.toLowerCase();
          if (
            lowerCaseName === "name" ||
            fieldName.toLowerCase() === "species" ||
            fieldName.toLowerCase() === "occupation" ||
            fieldName.toLowerCase() === "class" ||
            fieldName.toLowerCase() === "level"
          ) {
            fields.set(fieldName, fieldType);
          }
        });
      }
    });

    return fields;
  }, [categories]);

  const saveCharacterMutation = useMutation({
    mutationFn: async (characterData: Omit<CharacterDocument, "id">) => {
      if (isEditing && charId) {
        const docRef = doc(db, "characters", charId);
        await updateDoc(docRef, {
          ...characterData,
          updatedAt: new Date(),
        });
        return charId;
      } else {
        const charactersRef = collection(db, "characters");
        const docRef = await addDoc(charactersRef, characterData);
        return docRef.id;
      }
    },
    onSuccess: (characterId) => {
      queryClient.invalidateQueries({ queryKey: ["characters"] });

      if (isEditing) {
        queryClient.invalidateQueries({ queryKey: ["character", charId] });
      }

      navigate("/characters");

      console.log(
        `Character ${isEditing ? "updated" : "created"} with ID:`,
        characterId
      );
    },
    onError: (error) => {
      console.error(
        `Error ${isEditing ? "updating" : "creating"} character:`,
        error
      );
    },
  });

  const handleInputChange = (
    category: string,
    fieldName: string,
    value: string,
    fieldType: FieldType = "text"
  ) => {
    if (category === "Basic Info") {
      setFormData((prev) => ({
        ...prev,
        basicInfo: {
          ...prev.basicInfo,
          [fieldName]: value,
        },
      }));
    } else if (category === "Skills") {
    } else {
      setFormData((prev) => ({
        ...prev,
        customFields: {
          ...prev.customFields,
          [category]: {
            ...prev.customFields[category],
            [fieldName]:
              fieldType === "number"
                ? parseInt(value) || 0
                : fieldType === "boolean"
                ? value === "true"
                : value,
          },
        },
      }));
    }
  };

  const handleSave = async () => {
    try {
      const transformedCustomFields = Object.fromEntries(
        Object.entries(formData.customFields).map(([category, fields]) => [
          category,
          Object.fromEntries(
            Object.entries(fields).map(([fieldName, value]) => {
              const fieldType =
                existingCharacter?.customFields?.[category]?.[fieldName]
                  ?.type || "text";

              return [
                fieldName,
                {
                  value,
                  type: fieldType,
                  createdAt:
                    existingCharacter?.customFields?.[category]?.[fieldName]
                      ?.createdAt || new Date(),
                  createdBy:
                    existingCharacter?.customFields?.[category]?.[fieldName]
                      ?.createdBy || "current-user-id",
                },
              ];
            })
          ),
        ])
      );

      const characterData: Omit<CharacterDocument, "id"> = {
        createdAt: isEditing ? existingCharacter!.createdAt : new Date(),
        updatedAt: new Date(),
        createdBy: isEditing ? existingCharacter!.createdBy : "current-user-id", //Todo:replace with user id
        basicInfo: {
          name: formData.basicInfo.Name,
          pronouns: formData.basicInfo.Pronouns,
          species: formData.basicInfo.Species,
          occupation: formData.basicInfo.Occupation,
          height: formData.basicInfo.Height,
          weight: formData.basicInfo.Weight,
          age: formData.basicInfo.Age,
          class: formData.basicInfo.Class,
          level: +formData.basicInfo.level,
        },
        skills: {
          dexterity: formData.skills.Dexterity,
          wisdom: formData.skills.Wisdom,
          intelligence: formData.skills.Intelligence,
          charisma: formData.skills.Charisma,
          perception: formData.skills.Perception,
          constitution: formData.skills.Constitution,
        },
        customFields: transformedCustomFields,
        img: formData.img,
      };

      await saveCharacterMutation.mutateAsync(characterData);
    } catch (error) {
      console.error(
        `Error ${isEditing ? "updating" : "saving"} character:`,
        error
      );
    }
  };

  const getCurrentFieldValue = (
    categoryName: string,
    fieldName: string
  ): string | number => {
    if (categoryName === "Basic Info") {
      return formData.basicInfo[fieldName] || "";
    } else if (categoryName === "Skills") {
      return formData.skills[fieldName] || 10;
    } else {
      return formData.customFields[categoryName]?.[fieldName] || "";
    }
  };

  const addCustomField = (
    categoryName: string,
    fieldName: string,
    fieldType: FieldType = "text"
  ) => {
    setFormData((prev) => ({
      ...prev,
      customFields: {
        ...prev.customFields,
        [categoryName]: {
          ...prev.customFields[categoryName],
          [fieldName]:
            fieldType === "number" ? 0 : fieldType === "boolean" ? false : "",
        },
      },
    }));
  };

  if (isEditing && isLoadingCharacter) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
        <span className="ml-4">Loading character...</span>
      </div>
    );
  }

  if (isEditing && loadError) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <p>Error loading character: {loadError.message}</p>
        <button
          onClick={() => navigate("/characters")}
          className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Back to Characters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <Spotlight fields={spotlightFields} img={formData.img} />
      </div>

      <div className="col-span-9">
        <div className="rounded overflow-hidden shadow-lg bg-slate-200 p-4">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {isEditing
                ? `Edit Character: ${
                    formData.basicInfo.Name || "Unnamed Character"
                  }`
                : "Create New Character"}
            </h2>
            {isEditing && Object.keys(formData.customFields).length > 0 && (
              <p className="text-sm text-gray-600 mt-1">
                This character has custom fields in:{" "}
                {Object.keys(formData.customFields).join(", ")}
              </p>
            )}
          </div>

          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 flex-wrap">
              {categories.map((category) => (
                <Tab
                  key={category.name}
                  className={({ selected }) =>
                    classNames(
                      "rounded-lg py-2.5 px-3 text-sm font-medium leading-5 mb-1",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white text-blue-700 shadow"
                        : category.isCustomCategory
                        ? "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  {category.name}
                  {category.isCustomCategory && (
                    <span className="ml-1 text-xs opacity-75">(Custom)</span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {categories.map((category, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "focus:outline-none focus:ring-2"
                  )}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {category.fields.map((field) => {
                      const [key, fieldType] = Object.entries(field)[0];
                      const currentValue = getCurrentFieldValue(
                        category.name,
                        key
                      );

                      return (
                        <div key={key} className="flex items-center">
                          <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                              {key}
                              {category.isCustomCategory && (
                                <span className="text-xs text-green-600 block">
                                  ({fieldType})
                                </span>
                              )}
                            </label>
                          </div>
                          <div className="md:w-2/3">
                            {fieldType === "boolean" ? (
                              <select
                                className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                value={currentValue.toString()}
                                onChange={(e) =>
                                  handleInputChange(
                                    category.name,
                                    key,
                                    e.target.value,
                                    fieldType
                                  )
                                }
                              >
                                <option value="false">False</option>
                                <option value="true">True</option>
                              </select>
                            ) : (
                              <input
                                className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id={key + fieldType}
                                type={
                                  fieldType === "number" ? "number" : "text"
                                }
                                value={currentValue}
                                onChange={(e) =>
                                  handleInputChange(
                                    category.name,
                                    key,
                                    e.target.value,
                                    fieldType
                                  )
                                }
                                placeholder={
                                  fieldType === "number"
                                    ? "10"
                                    : `Enter ${key.toLowerCase()}`
                                }
                              />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          <div className="flex gap-4">
            <button
              onClick={handleSave}
              disabled={saveCharacterMutation.isPending}
              className={`rounded-md text-white p-4 flex-1 m-4 ${
                saveCharacterMutation.isPending
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-400 hover:bg-blue-500 hover:cursor-pointer"
              }`}
            >
              {saveCharacterMutation.isPending
                ? isEditing
                  ? "Updating..."
                  : "Saving..."
                : isEditing
                ? "Update Character"
                : "Save Character"}
            </button>

            <button
              onClick={() => navigate("/characters")}
              className="rounded-md bg-gray-400 hover:bg-gray-500 text-white p-4 flex-1 m-4"
            >
              Cancel
            </button>
          </div>

          {saveCharacterMutation.isError && (
            <div className="mx-4 mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              Error {isEditing ? "updating" : "saving"} character. Please try
              again.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
