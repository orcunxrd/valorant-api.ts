interface DataObject {
    uuid: string;
    displayName: string;
    shortDisplayName: string;
    startTime: string;
    endTime: string;
    assetPath: string;
}

export interface EventByUuidResponse {
    status: number;
    data: DataObject;
}