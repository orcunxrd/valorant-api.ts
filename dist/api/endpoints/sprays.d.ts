import { ValorantApi } from "..";
import { GetSprayLevelsResponse, GetSpraysResponse, SprayByUuidResponse, SprayLevelByUuidResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";
export declare class Sprays {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getSprays(options?: GetRequestOptions): Promise<GetSpraysResponse>;
    getSprayLevels(options?: GetRequestOptions): Promise<GetSprayLevelsResponse>;
    sprayByUuid(options: GetRequestByUuidOptions): Promise<SprayByUuidResponse>;
    sprayLevelByUuid(options: GetRequestByUuidOptions): Promise<SprayLevelByUuidResponse>;
}
