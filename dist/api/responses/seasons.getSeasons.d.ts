interface DataArray {
    uuid: string;
    displayName: string;
    type: any;
    startTime: string;
    endTime: string;
    parentUuid: any;
    assetPath: string;
}
export interface GetSeasonsResponse {
    status: number;
    data: Array<DataArray>;
}
export {};
