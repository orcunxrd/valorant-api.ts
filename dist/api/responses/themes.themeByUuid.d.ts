interface DataObject {
    uuid: string;
    displayName: string;
    displayIcon: any;
    storeFeaturedImage: any;
    assetPath: string;
}
export interface ThemeByUuidResponse {
    status: number;
    data: DataObject;
}
export {};
