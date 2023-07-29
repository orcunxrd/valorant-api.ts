import { ValorantApi } from "..";
import { ContentByUuidResponse, GetContentTiersResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";
export declare class ContentTiers {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getContentTiers(options?: GetRequestOptions): Promise<GetContentTiersResponse>;
    contentByUuid(options: GetRequestByUuidOptions): Promise<ContentByUuidResponse>;
}
