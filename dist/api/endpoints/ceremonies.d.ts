import { ValorantApi } from "..";
import { CeremonyByUuidResponse, GetCeremoniesResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";
export declare class Ceremonies {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getCeremonies(options?: GetRequestOptions): Promise<GetCeremoniesResponse>;
    ceremonyByUuid(options: GetRequestByUuidOptions): Promise<CeremonyByUuidResponse>;
}
