interface BordersItem {
    uuid: string;
    level: number;
    winsRequired: number;
    displayIcon: string;
    smallIcon: any;
    assetPath: string;
}
interface DataItem {
    uid: string;
    startTime: string;
    endTime: string;
    seasonUuid: string;
    competitiveTiersUuid: string;
    borders: Array<BordersItem>;
    assetPath: string;
}
export interface GetCompetitiveSeasonsResponse {
    status: number;
    data: Array<DataItem>;
}
export {};
