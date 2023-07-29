import { ValorantApi } from "..";
import { CompetitiveTierByUuidResponse, GetCompetitiveTiersResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";

export class CompetitiveTiers {
    public core: ValorantApi;

    constructor(core: ValorantApi) {
        this.core = core;
    }

    async getCompetitiveTiers(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetCompetitiveTiersResponse>({
            url: 'https://valorant-api.com/v1/competitivetiers',
            method: 'GET',
            params: options
        })
    }

    async competitiveTierByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<CompetitiveTierByUuidResponse>({
            url: `https://valorant-api.com/v1/competitivetiers/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }
}