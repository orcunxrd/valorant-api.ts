interface DataArray {
    uuid: string;
    displayName: string;
    shortDisplayName: string;
    startTime: string;
    endTime: string;
    assetPath: string;
}

export interface GetEventsResponse {
    status: number;
    data: Array<DataArray>;
}