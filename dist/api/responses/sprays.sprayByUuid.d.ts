interface LevelsItem {
    uuid: string;
    sprayLevel: number;
    displayName: string;
    displayIcon: string;
    assetPath: string;
}
interface DataObject {
    uuid: string;
    displayName: string;
    category: any;
    themeUuid: any;
    isNullSpray: boolean;
    displayIcon: string;
    fullIcon: string;
    fullTransparentIcon: string;
    animationPng: any;
    animationGif: any;
    assetPath: string;
    levels: Array<LevelsItem>;
}
export interface SprayByUuidResponse {
    status: number;
    data: DataObject;
}
export {};
