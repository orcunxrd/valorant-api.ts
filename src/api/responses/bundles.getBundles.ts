interface DataArray {
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

export interface GetBundlesResponse {
    status: number;
    data: Array<DataArray>;
}