import { ValorantApi } from "..";
interface GetCurrenciesOptions {
    language?: string;
}
interface CurrencyByUuidOptions {
    uuid: string;
    language?: string;
}
export declare class Currency {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getCurrencies(options?: GetCurrenciesOptions): Promise<any>;
    currencyByUuid(options: CurrencyByUuidOptions): Promise<any>;
}
export {};
