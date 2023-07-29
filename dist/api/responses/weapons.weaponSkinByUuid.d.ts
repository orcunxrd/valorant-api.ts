interface SkinChromas {
    uuid: string;
    displayName: string;
    displayIcon: any;
    fullRender: string;
    swatch: any;
    streamedVideo: any;
    assetPath: string;
}
interface SkinLevels {
    uuid: string;
    displayName: string;
    levelItem: any;
    displayIcon: string;
    streamedVideo: any;
    assetPath: string;
}
interface DataObject {
    uuid: string;
    displayName: string;
    themeUuid: string;
    contentTierUuid: string;
    displayIcon: string;
    wallpaper: any;
    assetPath: string;
    chromas: Array<SkinChromas>;
    levels: Array<SkinLevels>;
}
export interface WeaponSkinByUuidResponse {
    status: number;
    data: DataObject;
}
export {};
