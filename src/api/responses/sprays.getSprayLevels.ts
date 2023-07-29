interface DataItem {
    uuid: string;
    sprayLevel: number;
    displayName: string;
    displayIcon: string;
    assetPath: string;
}

export interface GetSprayLevelsResponse {
    status: number;
    data: Array<DataItem>;
}