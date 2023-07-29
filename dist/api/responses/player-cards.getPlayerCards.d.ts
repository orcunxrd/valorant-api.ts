interface DataArray {
    uuid: string;
    displayName: string;
    isHiddenIfNotOwned: boolean;
    themeUuid: any;
    displayIcon: string;
    smallArt: string;
    wideArt: string;
    largeArt: string;
    assetPath: string;
}
export interface GetPlayerCardsResponse {
    status: number;
    data: Array<DataArray>;
}
export {};
