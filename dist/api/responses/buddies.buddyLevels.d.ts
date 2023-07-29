interface DataArray {
    uuid: string;
    charmLevel: number;
    displayName: string;
    displayIcon: string;
    assetPath: string;
}
export interface BuddyLevelsResponse {
    status: number;
    data: Array<DataArray>;
}
export {};
