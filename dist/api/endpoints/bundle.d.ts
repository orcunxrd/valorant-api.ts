import type { ValorantApi } from "..";
interface GetBundlesOptions {
    language?: string;
}
interface BundleByUuidOptions {
    uuid: string;
    language?: string;
}
export declare class Bundle {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getBundles(options?: GetBundlesOptions): Promise<any>;
    bundleByUuid(options: BundleByUuidOptions): Promise<any>;
}
export {};
