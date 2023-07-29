interface AbilitiesArray {
    slot: string,
    displayName: string,
    description: string,
    displayIcon: string
}

interface DataArray {
    uuid: string,
    displayName: string,
    description: string,
    developerName: string,
    characterTags: any,
    displayIcon: string,
    displayIconSmall: string,
    bustPortrait: string,
    fullPortrait: string,
    fullPortraitV2: string,
    killfeedPortrait: string,
    background: string,
    backgroundGradientColors: Array<any>,
    assetPath: string,
    isFullPortraitRightFacing: boolean,
    isPlayableCharacter: boolean,
    isAvailableForTest: boolean,
    isBaseContent: boolean,
    role: {
        uuid: string,
        displayName: string,
        description: string,
        displayIcon: string,
        assetPath: string
    },
    abilities: Array<AbilitiesArray>;
    voiceLine: {
        minDuration: number,
        maxDuration: number,
        mediaList: Array<any>
    }
}

export interface GetAgentsResponse {
    status: number;
    data: Array<DataArray>;
}