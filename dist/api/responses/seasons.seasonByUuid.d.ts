interface DataObject {
    uuid: string;
    displayName: string;
    type: any;
    startTime: string;
    endTime: string;
    parentUuid: any;
    assetPath: string;
}
export interface SeasonByUuidResponse {
    status: number;
    data: DataObject;
}
export {};
