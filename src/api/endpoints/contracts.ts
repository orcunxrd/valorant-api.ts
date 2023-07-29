import { ValorantApi } from "..";
import { ContractByUuidResponse, GetContractsResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";

export class Contracts {
    public core: ValorantApi;

    constructor(core: ValorantApi) {
        this.core = core;
    }

    async getContracts(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetContractsResponse>({
            url: 'https://valorant-api.com/v1/contracts',
            method: 'GET',
            params: options
        })
    }

    async contractByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<ContractByUuidResponse>({
            url: `https://valorant-api.com/v1/contracts/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }
}