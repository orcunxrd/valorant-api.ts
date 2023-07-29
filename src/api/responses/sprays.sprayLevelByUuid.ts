interface DataObject {
    uuid: string;
    sprayLevel: number;
    displayName: string;
    displayIcon: string;
    assetPath: string;
}

export interface SprayLevelByUuidResponse {
    status: number;
    data: DataObject;
}