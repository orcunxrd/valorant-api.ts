import { ValorantApi } from "..";
import { GetVersionResponse } from "../responses";
export declare class Version {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getVersion(): Promise<GetVersionResponse>;
}
