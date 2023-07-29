import { ValorantApi } from "..";
interface GetBuddiesOptions {
    language?: string;
}
interface BuddyLevelsOptions {
    language?: string;
}
interface BuddyByUuidOptions {
    uuid: string;
    language?: string;
}
interface BuddyLevelByUuidOptions {
    uuid: string;
    language?: string;
}
export declare class Buddy {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getBuddies(options?: GetBuddiesOptions): Promise<any>;
    buddyLevels(options?: BuddyLevelsOptions): Promise<any>;
    buddyByUuid(options: BuddyByUuidOptions): Promise<any>;
    buddyLevelByUuid(options: BuddyLevelByUuidOptions): Promise<any>;
}
export {};
