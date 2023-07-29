interface DataObject {
    uuid: string;
    charmLevel: number;
    displayName: string;
    displayIcon: string;
    assetPath: string;
}
export interface BuddyLevelByUuidResponse {
    status: number;
    data: DataObject;
}
export {};
