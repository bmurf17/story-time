import { BaseProjectModel } from './BaseType';

export interface Todo extends BaseProjectModel {
    done: boolean;
    description: string;
}

export const tempTodos: Todo[] = [
    {
        createdBy: "Brendan Murphy",
        createdDate: new Date(),
        id: 1,
        lastModifiedBy: "Brendan Murphy",
        lastModifiedDate: new Date(),
        projectId: 1,
        done: true,
        description: "First Todo"
    },
    {
        createdBy: "Brendan Murphy",
        createdDate: new Date(),
        id: 1,
        lastModifiedBy: "Brendan Murphy",
        lastModifiedDate: new Date(),
        projectId: 1,
        done: false,
        description: "Second Todo"
    },
]