import { ValorantApi } from "..";
interface GetContentTiersOptions {
    language?: string;
}
interface ContentByUuidOptions {
    uuid: string;
    language?: string;
}
export declare class Content {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getContentTiers(options?: GetContentTiersOptions): Promise<any>;
    contentByUuid(options: ContentByUuidOptions): Promise<any>;
}
export {};
