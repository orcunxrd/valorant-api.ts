import { ValorantApi } from "..";
import { GetCurrenciesResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";

export class Currencies {
    public core: ValorantApi;

    constructor(core: ValorantApi) {
        this.core = core;
    }

    async getCurrencies(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetCurrenciesResponse>({
            url: 'https://valorant-api.com/v1/currencies',
            method: 'GET',
            params: options
        })
    }

    async currencyByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send({
            url: `https://valorant-api.com/v1/currencies/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }
}