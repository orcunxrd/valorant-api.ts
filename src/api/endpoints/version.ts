import { ValorantApi } from "..";
import { GetVersionResponse } from "../responses";

export class Version {
    public core: ValorantApi;

    constructor(core: ValorantApi) {
        this.core = core;
    }

    async getVersion() {
        return await this.core.request.send<GetVersionResponse>({
            url: 'https://valorant-api.com/v1/version',
            method: 'GET'
        })
    }
}