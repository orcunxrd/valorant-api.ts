import { ValorantApi } from "..";
import { GamemodeByUuidResponse, GamemodeEquippableByUuidResponse, GamemodeEquippablesResponse, GetGamemodesResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";

export class Gamemodes {
    public core: ValorantApi;

    constructor(core: ValorantApi) {
        this.core = core;
    }

    async getGamemodes(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetGamemodesResponse>({
            url: 'https://valorant-api.com/v1/gamemodes',
            method: 'GET',
            params: options
        })
    }

    async gamemodeEquippables(options: GetRequestOptions = {}) {
        return await this.core.request.send<GamemodeEquippablesResponse>({
            url: 'https://valorant-api.com/v1/gamemodes/equippables',
            method: 'GET',
            params: options
        })
    }

    async gamemodeByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<GamemodeByUuidResponse>({
            url: `https://valorant-api.com/v1/gamemodes/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }

    async gamemodeEquippableByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<GamemodeEquippableByUuidResponse>({
            url: `https://valorant-api.com/v1/gamemodes/equippables/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }
}