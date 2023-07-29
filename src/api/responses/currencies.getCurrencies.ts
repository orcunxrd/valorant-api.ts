interface DataArray {
    uuid: string;
    displayName: string;
    displayNameSingular: string;
    displayIcon: string;
    largeIcon: string;
    assetPath: string;
}

export interface GetCurrenciesResponse {
    status: number;
    data: Array<DataArray>;
}