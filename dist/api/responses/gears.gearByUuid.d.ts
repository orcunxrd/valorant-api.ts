interface DataObject {
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
export interface GearByUuidResponse {
    status: number;
    data: DataObject;
}
export {};
