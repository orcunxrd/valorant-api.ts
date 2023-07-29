interface DataItem {
    uuid: string;
    displayName: string;
    displayIcon: any;
    fullRender: string;
    swatch: any;
    streamedVideo: any;
    assetPath: string;
}

export interface GetWeaponSkinChromasResponse {
    status: number;
    data: Array<DataItem>;
}