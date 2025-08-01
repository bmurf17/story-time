export interface BaseModel {
  id: number;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  lastModifiedBy: string;
  archivedDate?: Date;
  archivedBy?: string;
}

export interface BaseProjectModel extends BaseModel {
  projectId: number;
}
