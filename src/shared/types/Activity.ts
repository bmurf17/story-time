import { BaseProjectModel } from "./BaseType";

export interface Activity extends BaseProjectModel {
  tableTouched: string;
  rowTouched: number;
  action: string;
}

export const tempActivities: Activity[] = [
  {
    createdBy: "Brendan Murphy",
    createdAt: new Date(),
    id: 1,
    lastModifiedBy: "Brendan Murphy",
    updatedAt: new Date(),
    projectId: 1,
    rowTouched: 1,
    tableTouched: "Characters",
    action: "Created",
  },
];
