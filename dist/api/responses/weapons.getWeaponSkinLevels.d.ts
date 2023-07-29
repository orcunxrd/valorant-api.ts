interface DataItem {
    uuid: string;
    displayName: string;
    levelItem: any;
    displayIcon: string;
    streamedVideo: any;
    assetPath: string;
}
export interface GetWeaponSkinLevelsResponse {
    status: number;
    data: Array<DataItem>;
}
export {};
