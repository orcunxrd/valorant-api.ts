interface DataObject {
    uuid: string;
    displayName: string;
    assetPath: string;
}
export interface CeremonyByUuidResponse {
    status: number;
    data: DataObject;
}
export {};
