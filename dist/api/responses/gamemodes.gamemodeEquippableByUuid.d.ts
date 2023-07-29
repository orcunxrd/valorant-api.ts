interface DataObject {
    uuid: string;
    displayName: string;
    category: string;
    displayIcon: string;
    killStreamIcon: string;
    assetPath: string;
}
export interface GamemodeEquippableByUuidResponse {
    status: number;
    data: DataObject;
}
export {};
