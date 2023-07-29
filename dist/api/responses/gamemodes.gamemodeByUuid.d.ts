interface DataObject {
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
export interface GamemodeByUuidResponse {
    status: number;
    data: DataObject;
}
export {};
