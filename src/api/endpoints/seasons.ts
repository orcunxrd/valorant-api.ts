import { ValorantApi } from "..";
import { CompetitiveSeasonByUuidResponse, GetCompetitiveSeasonsResponse, GetSeasonsResponse, SeasonByUuidResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";

export class Seasons {
    public core: ValorantApi;

    constructor(core: ValorantApi) {
        this.core = core;
    }

    async getSeasons(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetSeasonsResponse>({
            url: 'https://valorant-api.com/v1/seasons',
            method: 'GET',
            params: options
        })
    }

    async getCompetitiveSeasons(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetCompetitiveSeasonsResponse>({
            url: 'https://valorant-api.com/v1/seasons/competitive',
            method: 'GET',
            params: options
        })
    }

    async seasonByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<SeasonByUuidResponse>({
            url: `https://valorant-api.com/v1/seasons/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }

    async competitiveSeasonByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<CompetitiveSeasonByUuidResponse>({
            url: `https://valorant-api.com/v1/seasons/competitive/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }
}