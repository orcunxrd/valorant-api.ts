import { ValorantApi } from "..";
import { GetGearsResponse, GearByUuidResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";
export declare class Gears {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getGears(options?: GetRequestOptions): Promise<GetGearsResponse>;
    gearByUuid(options: GetRequestByUuidOptions): Promise<GearByUuidResponse>;
}
