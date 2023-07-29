interface DataArray {
    uuid: string;
    displayName: string;
    devName: string;
    rank: number;
    juiceValue: number;
    juiceCost: number;
    highlightColor: string;
    displayIcon: string;
    assetPath: string;
}
export interface GetContentTiersResponse {
    status: number;
    data: Array<DataArray>;
}
export {};
