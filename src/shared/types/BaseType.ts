export interface BaseModel {
    id: number;
    createdDate: Date;
    createdBy: string;
    lastModifiedDate: Date;
    lastModifiedBy: string;
    archivedDate?: Date;
    archivedBy?: string;
}

export interface BaseProjectModel extends BaseModel {
    projectId: number;

}