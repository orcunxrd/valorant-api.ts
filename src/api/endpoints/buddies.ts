import { ValorantApi } from "..";
import { BuddyByUuidResponse, BuddyLevelByUuidResponse, BuddyLevelsResponse, GetBuddiesResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";

export class Buddies {
    public core: ValorantApi;

    constructor(core: ValorantApi) {
        this.core = core;
    }

    async getBuddies(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetBuddiesResponse>({
            url: 'https://valorant-api.com/v1/buddies',
            method: 'GET',
            params: options
        })
    }

    async buddyLevels(options: GetRequestOptions = {}) {
        return await this.core.request.send<BuddyLevelsResponse>({
            url: 'https://valorant-api.com/v1/buddies/levels',
            method: 'GET',
            params: options
        })
    }

    async buddyByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<BuddyByUuidResponse>({
            url: `https://valorant-api.com/v1/buddies/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }

    async buddyLevelByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<BuddyLevelByUuidResponse>({
            url: `https://valorant-api.com/v1/buddies/levels/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }
}