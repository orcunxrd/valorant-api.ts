interface LevelsItem {
    uuid: string;
    sprayLevel: number;
    displayName: string;
    displayIcon: string;
    assetPath: string;
}

interface DataItem {
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

export interface GetSpraysResponse {
    status: number;
    data: Array<DataItem>;
}