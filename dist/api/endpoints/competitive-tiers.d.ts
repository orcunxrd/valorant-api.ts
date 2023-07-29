import { ValorantApi } from "..";
import { CompetitiveTierByUuidResponse, GetCompetitiveTiersResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";
export declare class CompetitiveTiers {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getCompetitiveTiers(options?: GetRequestOptions): Promise<GetCompetitiveTiersResponse>;
    competitiveTierByUuid(options: GetRequestByUuidOptions): Promise<CompetitiveTierByUuidResponse>;
}
