import { ValorantApi } from "..";
import { GetLevelBordersResponse, LevelBorderByUuidResponse } from "../responses";
import { GetRequestByUuidOptions } from "../types";
export declare class LevelBorders {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getLevelBorders(): Promise<GetLevelBordersResponse>;
    levelBorderByUuid(options: GetRequestByUuidOptions): Promise<LevelBorderByUuidResponse>;
}
