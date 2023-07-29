import { ValorantApi } from "..";
import { GetPlayerCardsResponse, PlayerCardByUuidResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";
export declare class PlayerCards {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getPlayerCards(options?: GetRequestOptions): Promise<GetPlayerCardsResponse>;
    playerCardByUuid(options: GetRequestByUuidOptions): Promise<PlayerCardByUuidResponse>;
}
