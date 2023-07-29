import type { ValorantApi } from "..";
import { GetBundlesResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";
export declare class Bundles {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getBundles(options?: GetRequestOptions): Promise<GetBundlesResponse>;
    bundleByUuid(options: GetRequestByUuidOptions): Promise<any>;
}
