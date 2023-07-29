import { ValorantApi } from "..";
import { GetLevelBordersResponse, LevelBorderByUuidResponse } from "../responses";
import { GetRequestByUuidOptions } from "../types";

export class LevelBorders {
    public core: ValorantApi;

    constructor(core: ValorantApi) {
        this.core = core;
    }

    async getLevelBorders() {
        return await this.core.request.send<GetLevelBordersResponse>({
            url: 'https://valorant-api.com/v1/levelborders',
            method: 'GET'
        })
    }

    async levelBorderByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<LevelBorderByUuidResponse>({
            url: `https://valorant-api.com/v1/levelborders/${options.uuid}`,
            method: 'GET'
        })
    }
}