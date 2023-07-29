import { ValorantApi } from "..";
import { GetPlayerTitlesResponse, PlayerTitleByUuidResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";
export declare class PlayerTitles {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getPlayerTitles(options?: GetRequestOptions): Promise<GetPlayerTitlesResponse>;
    playerTitleByUuid(options: GetRequestByUuidOptions): Promise<PlayerTitleByUuidResponse>;
}
