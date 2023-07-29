interface DataArray {
    uuid: string,
    displayName: string,
    assetPath: string
}

export interface GetCeremoniesResponse {
    status: number;
    data: Array<DataArray>;
}