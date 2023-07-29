import { ValorantApi } from "..";
import { ContractByUuidResponse, GetContractsResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";
export declare class Contracts {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getContracts(options?: GetRequestOptions): Promise<GetContractsResponse>;
    contractByUuid(options: GetRequestByUuidOptions): Promise<ContractByUuidResponse>;
}
