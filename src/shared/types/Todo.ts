import { BaseProjectModel } from "./BaseType";

export interface Todo extends BaseProjectModel {
  complete: boolean;
  task: string;
}

export const tempTodos: Todo[] = [
  {
    createdBy: "Brendan Murphy",
    createdAt: new Date(),
    id: 1,
    lastModifiedBy: "Brendan Murphy",
    updatedAt: new Date(),
    projectId: 1,
    complete: true,
    task: "First Todo",
  },
  {
    createdBy: "Brendan Murphy",
    createdAt: new Date(),
    id: 2,
    lastModifiedBy: "Brendan Murphy",
    updatedAt: new Date(),
    projectId: 1,
    complete: false,
    task: "Second Todo",
  },
];
