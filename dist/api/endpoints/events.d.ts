import { ValorantApi } from "..";
import { EventByUuidResponse, GetEventsResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";
export declare class Events {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getEvents(options?: GetRequestOptions): Promise<GetEventsResponse>;
    eventByUuid(options: GetRequestByUuidOptions): Promise<EventByUuidResponse>;
}
