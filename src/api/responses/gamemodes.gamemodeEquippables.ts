interface DataArray {
    uuid: string;
    displayName: string;
    category: string;
    displayIcon: string;
    killStreamIcon: string;
    assetPath: string;
}

export interface GamemodeEquippablesResponse {
    status: number;
    data: Array<DataArray>;
}