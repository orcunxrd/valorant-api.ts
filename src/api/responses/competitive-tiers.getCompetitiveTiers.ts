interface TiersArray {
    tier: number,
    tierName: string,
    division: string,
    divisionName: string,
    color: string,
    backgroundColor: string,
    smallIcon: string,
    largeIcon: string,
    rankTriangleDownIcon: any,
    rankTriangleUpIcon: any
}

interface EpisodesArray {
    uuid: string;
    assetObjectName: string;
    tiers: Array<TiersArray>;
    assetPath: string;
}

export interface GetCompetitiveTiersResponse {
    status: number;
    data: Array<EpisodesArray>;
}