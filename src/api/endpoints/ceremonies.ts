import { ValorantApi } from "..";
import { CeremonyByUuidResponse, GetCeremoniesResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";

export class Ceremonies {
    public core: ValorantApi;

    constructor(core: ValorantApi) {
        this.core = core;
    }

    async getCeremonies(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetCeremoniesResponse>({
            url: 'https://valorant-api.com/v1/ceremonies',
            method: 'GET',
            params: options
        })
    }

    async ceremonyByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<CeremonyByUuidResponse>({
            url: `https://valorant-api.com/v1/ceremonies/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }
}