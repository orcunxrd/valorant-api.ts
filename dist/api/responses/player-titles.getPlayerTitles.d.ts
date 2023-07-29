interface DataArray {
    uuid: string;
    displayName: string;
    titleText: string;
    isHiddenIfNotOwned: boolean;
    assetPath: string;
}
export interface GetPlayerTitlesResponse {
    status: number;
    data: Array<DataArray>;
}
export {};
