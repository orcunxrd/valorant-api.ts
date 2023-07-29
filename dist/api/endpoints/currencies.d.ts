import { ValorantApi } from "..";
import { GetCurrenciesResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";
export declare class Currencies {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getCurrencies(options?: GetRequestOptions): Promise<GetCurrenciesResponse>;
    currencyByUuid(options: GetRequestByUuidOptions): Promise<any>;
}
