import { ValorantApi } from "..";
import { GetPlayerCardsResponse, PlayerCardByUuidResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";

export class PlayerCards {
    public core: ValorantApi;

    constructor(core: ValorantApi) {
        this.core = core;
    }

    async getPlayerCards(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetPlayerCardsResponse>({
            url: 'https://valorant-api.com/v1/playercards',
            method: 'GET',
            params: options
        })
    }

    async playerCardByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<PlayerCardByUuidResponse>({
            url: `https://valorant-api.com/v1/playercards/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }
}