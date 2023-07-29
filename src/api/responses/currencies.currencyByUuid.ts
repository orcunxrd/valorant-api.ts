interface DataObject {
    uuid: string;
    displayName: string;
    displayNameSingular: string;
    displayIcon: string;
    largeIcon: string;
    assetPath: string;
}

export interface CurrencyByUuidResponse {
    status: number;
    data: DataObject;
}