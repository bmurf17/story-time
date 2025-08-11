type FieldType = "text" | "number" | "boolean" | "date" | "array" | "object";

interface PredefinedField {
  name: string;
  type: FieldType;
  required?: boolean;
  defaultValue?: any;
}

interface CustomField {
  name: string;
  type: FieldType;
  value: any;
  createdAt: Date;
  createdBy: string;
}

interface CharacterTab {
  name: string;
  predefinedFields: PredefinedField[];
  customFields?: CustomField[];
}

interface BasicInfo {
  name: string;
  pronouns: string;
  species: string;
  occupation: string;
  height: string;
  weight: string;
  age: string;
  class: string;
  level: number;
}

interface Skills {
  dexterity: number;
  wisdom: number;
  intelligence: number;
  charisma: number;
  perception: number;
  constitution: number;
}

interface CharacterDocument {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  img: string;
  basicInfo: BasicInfo;

  skills: Skills;

  customFields: {
    [categoryName: string]: {
      [fieldName: string]: {
        value: any;
        type: FieldType;
        createdAt: Date;
        createdBy: string;
      };
    };
  };

  // Optional: Store the tab structure if you want it per-character
  tabStructure?: CharacterTab[];
}

const isValidFieldType = (type: string): type is FieldType => {
  return ["text", "number", "boolean", "date", "array", "object"].includes(
    type
  );
};

const validateFieldValue = (value: any, type: FieldType): boolean => {
  switch (type) {
    case "text":
      return typeof value === "string";
    case "number":
      return typeof value === "number" && !isNaN(value);
    case "boolean":
      return typeof value === "boolean";
    case "date":
      return value instanceof Date || !isNaN(Date.parse(value));
    case "array":
      return Array.isArray(value);
    case "object":
      return (
        typeof value === "object" && value !== null && !Array.isArray(value)
      );
    default:
      return false;
  }
};

const characterTabs: CharacterTab[] = [
  {
    name: "Basic Info",
    predefinedFields: [
      { name: "name", type: "text", required: true },
      { name: "pronouns", type: "text" },
      { name: "species", type: "text" },
      { name: "occupation", type: "text" },
      { name: "height", type: "text" },
      { name: "weight", type: "text" },
      { name: "age", type: "text" },
    ],
  },
  {
    name: "Skills",
    predefinedFields: [
      { name: "dexterity", type: "number", defaultValue: 10 },
      { name: "wisdom", type: "number", defaultValue: 10 },
      { name: "intelligence", type: "number", defaultValue: 10 },
      { name: "charisma", type: "number", defaultValue: 10 },
      { name: "perception", type: "number", defaultValue: 10 },
      { name: "constitution", type: "number", defaultValue: 10 },
    ],
  },
];

class CharacterService {
  static createNewCharacter(
    createdBy: string,
    basicInfo: BasicInfo,
    skills: Skills,
    img: string
  ): Omit<CharacterDocument, "id"> {
    return {
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy,
      basicInfo: basicInfo,
      skills: skills,
      customFields: {},
      img: img,
    };
  }

  static addCustomField(
    character: CharacterDocument,
    category: string,
    fieldName: string,
    value: any,
    type: FieldType,
    createdBy: string
  ): CharacterDocument {
    if (!validateFieldValue(value, type)) {
      throw new Error(`Invalid value for field type ${type}`);
    }

    if (!character.customFields[category]) {
      character.customFields[category] = {};
    }

    character.customFields[category][fieldName] = {
      value,
      type,
      createdAt: new Date(),
      createdBy,
    };

    character.updatedAt = new Date();
    return character;
  }

  static getAllFieldsForCategory(
    character: CharacterDocument,
    categoryName: string,
    tabStructure: CharacterTab[]
  ) {
    const tab = tabStructure.find((t) => t.name === categoryName);
    const predefinedFields = tab?.predefinedFields || [];
    const customFields = character.customFields[categoryName] || {};

    return {
      predefined: predefinedFields,
      custom: Object.entries(customFields).map(([name, data]) => ({
        name,
        ...data,
      })),
    };
  }
}

export type {
  CharacterDocument,
  CharacterTab,
  CustomField,
  PredefinedField,
  FieldType,
};

export {
  characterTabs,
  CharacterService,
  validateFieldValue,
  isValidFieldType,
};
