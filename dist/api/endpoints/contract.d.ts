import { ValorantApi } from "..";
interface GetContractsOptions {
    language?: string;
}
interface ContractByUuidOptions {
    uuid: string;
    language?: string;
}
export declare class Contract {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getContracts(options?: GetContractsOptions): Promise<any>;
    contractByUuid(options: ContractByUuidOptions): Promise<any>;
}
export {};
