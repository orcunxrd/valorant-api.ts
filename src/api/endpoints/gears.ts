import { ValorantApi } from "..";
import { GetGearsResponse, GearByUuidResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";

export class Gears {
    public core: ValorantApi;

    constructor(core: ValorantApi) {
        this.core = core;
    }

    async getGears(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetGearsResponse>({
            url: 'https://valorant-api.com/v1/gear',
            method: 'GET',
            params: options
        })
    }

    async gearByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<GearByUuidResponse>({
            url: `https://valorant-api.com/v1/gear/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }
}