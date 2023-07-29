interface DataObject {
    uuid: string;
    displayName: string;
    devName: string;
    rank: number;
    juiceValue: number;
    juiceCost: number;
    highlightColor: string;
    displayIcon: string;
    assetPath: string;
}
export interface ContentByUuidResponse {
    status: number;
    data: DataObject;
}
export {};
