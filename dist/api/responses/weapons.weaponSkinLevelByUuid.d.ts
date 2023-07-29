interface DataObject {
    uuid: string;
    displayName: string;
    levelItem: any;
    displayIcon: string;
    streamedVideo: any;
    assetPath: string;
}
export interface WeaponSkinLevelByUuidResponse {
    status: number;
    data: DataObject;
}
export {};
