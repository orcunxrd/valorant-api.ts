import { ValorantApi } from "..";
import { EventByUuidResponse, GetEventsResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";

export class Events {
    public core: ValorantApi;

    constructor(core: ValorantApi) {
        this.core = core;
    }

    async getEvents(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetEventsResponse>({
            url: 'https://valorant-api.com/v1/events',
            method: 'GET',
            params: options
        })
    }

    async eventByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<EventByUuidResponse>({
            url: `https://valorant-api.com/v1/events/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }
}