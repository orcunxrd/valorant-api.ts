interface DataObject {
    uuid: string;
    displayName: string;
    displayIcon: any;
    fullRender: string;
    swatch: any;
    streamedVideo: any;
    assetPath: string;
}
export interface WeaponSkinChromaByUuidResponse {
    status: number;
    data: DataObject;
}
export {};
