import { ValorantApi } from "..";
import { GetSprayLevelsResponse, GetSpraysResponse, SprayByUuidResponse, SprayLevelByUuidResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";

export class Sprays {
    public core: ValorantApi;

    constructor(core: ValorantApi) {
        this.core = core;
    }

    async getSprays(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetSpraysResponse>({
            url: 'https://valorant-api.com/v1/sprays',
            method: 'GET',
            params: options
        })
    }

    async getSprayLevels(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetSprayLevelsResponse>({
            url: 'https://valorant-api.com/v1/sprays/levels',
            method: 'GET',
            params: options
        })
    }

    async sprayByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<SprayByUuidResponse>({
            url: `https://valorant-api.com/v1/sprays/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }

    async sprayLevelByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<SprayLevelByUuidResponse>({
            url: `https://valorant-api.com/v1/sprays/levels/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }
}