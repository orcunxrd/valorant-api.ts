interface BordersItem {
    uuid: string;
    level: number;
    winsRequired: number;
    displayIcon: string;
    smallIcon: any;
    assetPath: string;
}
interface DataObject {
    uid: string;
    startTime: string;
    endTime: string;
    seasonUuid: string;
    competitiveTiersUuid: string;
    borders: Array<BordersItem>;
    assetPath: string;
}
export interface CompetitiveSeasonByUuidResponse {
    status: number;
    data: DataObject;
}
export {};
