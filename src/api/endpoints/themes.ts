import { ValorantApi } from "..";
import { GetThemesResponse, ThemeByUuidResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";

export class Themes {
    public core: ValorantApi;

    constructor(core: ValorantApi) {
        this.core = core;
    }

    async getThemes(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetThemesResponse>({
            url: 'https://valorant-api.com/v1/themes',
            method: 'GET',
            params: options
        })
    }

    async themeByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<ThemeByUuidResponse>({
            url: `https://valorant-api.com/v1/themes/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }
}