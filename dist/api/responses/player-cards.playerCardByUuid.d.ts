interface DataObject {
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
export interface PlayerCardByUuidResponse {
    status: number;
    data: DataObject;
}
export {};
