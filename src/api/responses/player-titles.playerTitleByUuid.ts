interface DataObject {
    uuid: string;
    displayName: string;
    titleText: string;
    isHiddenIfNotOwned: boolean;
    assetPath: string;
}

export interface PlayerTitleByUuidResponse {
    status: number;
    data: DataObject;
}