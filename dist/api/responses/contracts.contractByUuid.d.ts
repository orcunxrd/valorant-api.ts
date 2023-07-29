interface LevelsArray {
    reward: {
        type: string;
        uuid: string;
        amount: number;
        isHighlighted: boolean;
    };
    xp: number;
    vpCost: number;
    isPurchasableWithVP: boolean;
    doughCost: number;
    isPurchasableWithDough: boolean;
}
interface ChaptersArray {
    isEpilogue: boolean;
    levels: Array<LevelsArray>;
    freeRewards: any;
}
interface ContentObject {
    relationType: string;
    relationUuid: string;
    chapters: Array<ChaptersArray>;
    premiumRewardScheduleUuid: any;
    premiumVPCost: number;
}
interface DataObject {
    uuid: string;
    displayName: string;
    displayIcon: any;
    shipIt: boolean;
    freeRewardScheduleUuid: string;
    content: ContentObject;
    assetPath: string;
}
export interface ContractByUuidResponse {
    status: number;
    data: DataObject;
}
export {};
