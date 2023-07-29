import { ValorantApi } from "..";
import { ContentByUuidResponse, GetContentTiersResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";

export class ContentTiers {
    public core: ValorantApi;

    constructor(core: ValorantApi) {
        this.core = core;
    }

    async getContentTiers(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetContentTiersResponse>({
            url: 'https://valorant-api.com/v1/contenttiers',
            method: 'GET',
            params: options
        })
    }

    async contentByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<ContentByUuidResponse>({
            url: `https://valorant-api.com/v1/contenttiers/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }
}