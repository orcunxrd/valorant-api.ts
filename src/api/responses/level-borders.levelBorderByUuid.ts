interface DataObject {
    uuid: string;
    startingLevel: number;
    levelNumberAppearance: string;
    smallPlayerCardAppearance: string;
    assetPath: string;
}

export interface LevelBorderByUuidResponse {
    status: number;
    data: DataObject;
}