import { ValorantApi } from "..";
import { CompetitiveSeasonByUuidResponse, GetCompetitiveSeasonsResponse, GetSeasonsResponse, SeasonByUuidResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";
export declare class Seasons {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getSeasons(options?: GetRequestOptions): Promise<GetSeasonsResponse>;
    getCompetitiveSeasons(options?: GetRequestOptions): Promise<GetCompetitiveSeasonsResponse>;
    seasonByUuid(options: GetRequestByUuidOptions): Promise<SeasonByUuidResponse>;
    competitiveSeasonByUuid(options: GetRequestByUuidOptions): Promise<CompetitiveSeasonByUuidResponse>;
}
