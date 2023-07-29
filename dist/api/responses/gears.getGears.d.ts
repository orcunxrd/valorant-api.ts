interface DataArray {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
    assetPath: string;
    shopData: {
        cost: number;
        category: string;
        categoryText: string;
        gridPosition: any;
        canBeTrashed: boolean;
        image: any;
        newImage: string;
        newImage2: any;
        assetPath: string;
    };
}
export interface GetGearsResponse {
    status: number;
    data: Array<DataArray>;
}
export {};
