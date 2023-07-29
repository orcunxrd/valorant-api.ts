import { ValorantApi } from "..";
import { GetMapsResponse, MapByUuidResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";
export declare class Maps {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getMaps(options?: GetRequestOptions): Promise<GetMapsResponse>;
    mapByUuid(options: GetRequestByUuidOptions): Promise<MapByUuidResponse>;
}
