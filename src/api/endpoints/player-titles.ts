import { ValorantApi } from "..";
import { GetPlayerTitlesResponse, PlayerTitleByUuidResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";

export class PlayerTitles {
    public core: ValorantApi;

    constructor(core: ValorantApi) {
        this.core = core;
    }

    async getPlayerTitles(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetPlayerTitlesResponse>({
            url: 'https://valorant-api.com/v1/playertitles',
            method: 'GET',
            params: options
        })
    }

    async playerTitleByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<PlayerTitleByUuidResponse>({
            url: `https://valorant-api.com/v1/playertitles/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }
}