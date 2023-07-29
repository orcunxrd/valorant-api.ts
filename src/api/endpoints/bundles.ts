import type { ValorantApi } from "..";
import { GetBundlesResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";

export class Bundles {
    core: ValorantApi;

    constructor(core: ValorantApi) {
        this.core = core;
    }

    async getBundles(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetBundlesResponse>({
            url: 'https://valorant-api.com/v1/bundles',
            method: 'GET',
            params: options
        })
    }

    async bundleByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send({
            url: `https://valorant-api.com/v1/bundles/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }
}