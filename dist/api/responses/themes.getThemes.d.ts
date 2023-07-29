interface DataItem {
    uuid: string;
    displayName: string;
    displayIcon: any;
    storeFeaturedImage: any;
    assetPath: string;
}
export interface GetThemesResponse {
    status: number;
    data: Array<DataItem>;
}
export {};
