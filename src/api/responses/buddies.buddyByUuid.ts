interface LevelsArray {
    uuid: string,
    charmLevel: number,
    displayName: string,
    displayIcon: string,
    assetPath: string
}

interface DataObject {
    uuid: string,
    displayName: string,
    isHiddenIfNotOwned: boolean,
    themeUuid: any,
    displayIcon: string,
    assetPath: string,
    levels: Array<LevelsArray>
}

export interface BuddyByUuidResponse {
    status: number;
    data: DataObject;
}