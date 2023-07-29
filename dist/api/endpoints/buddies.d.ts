import { ValorantApi } from "..";
import { BuddyByUuidResponse, BuddyLevelByUuidResponse, BuddyLevelsResponse, GetBuddiesResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";
export declare class Buddies {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getBuddies(options?: GetRequestOptions): Promise<GetBuddiesResponse>;
    buddyLevels(options?: GetRequestOptions): Promise<BuddyLevelsResponse>;
    buddyByUuid(options: GetRequestByUuidOptions): Promise<BuddyByUuidResponse>;
    buddyLevelByUuid(options: GetRequestByUuidOptions): Promise<BuddyLevelByUuidResponse>;
}
