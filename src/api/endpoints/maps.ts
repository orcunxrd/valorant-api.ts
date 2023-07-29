import { ValorantApi } from "..";
import { GetMapsResponse, MapByUuidResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";

export class Maps {
    public core: ValorantApi;

    constructor(core: ValorantApi) {
        this.core = core;
    }

    async getMaps(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetMapsResponse>({
            url: 'https://valorant-api.com/v1/maps',
            method: 'GET',
            params: options
        })
    }

    async mapByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<MapByUuidResponse>({
            url: `https://valorant-api.com/v1/maps/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }
}