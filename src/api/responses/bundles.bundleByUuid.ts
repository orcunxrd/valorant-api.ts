interface DataObject {
    uuid: string,
    displayName: string,
    displayNameSubText: any,
    description: string,
    extraDescription: any,
    promoDescription: any,
    useAdditionalContext: boolean,
    displayIcon: string,
    displayIcon2: string,
    verticalPromoImage: string,
    assetPath: string
}

export interface BundleByUuidResponse {
    status: number;
    data: DataObject;
}