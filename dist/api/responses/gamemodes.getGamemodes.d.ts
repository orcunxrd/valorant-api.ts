interface DataArray {
    uuid: string;
    displayName: string;
    duration: string;
    allowsMatchTimeouts: boolean;
    isTeamVoiceAllowed: boolean;
    isMinimapHidden: boolean;
    orbCount: number;
    roundsPerHalf: number;
    teamRoles: any;
    gameFeatureOverrides: any;
    gameRuleBoolOverrides: any;
    displayIcon: string;
    assetPath: string;
}
export interface GetGamemodesResponse {
    status: number;
    data: Array<DataArray>;
}
export {};
