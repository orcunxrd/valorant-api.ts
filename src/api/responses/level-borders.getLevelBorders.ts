interface DataArray {
    uuid: string;
    startingLevel: number;
    levelNumberAppearance: string;
    smallPlayerCardAppearance: string;
    assetPath: string;
}

export interface GetLevelBordersResponse {
    status: number;
    data: Array<DataArray>;
}