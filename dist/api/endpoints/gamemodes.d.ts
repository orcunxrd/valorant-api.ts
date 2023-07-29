import { ValorantApi } from "..";
import { GamemodeByUuidResponse, GamemodeEquippableByUuidResponse, GamemodeEquippablesResponse, GetGamemodesResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";
export declare class Gamemodes {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getGamemodes(options?: GetRequestOptions): Promise<GetGamemodesResponse>;
    gamemodeEquippables(options?: GetRequestOptions): Promise<GamemodeEquippablesResponse>;
    gamemodeByUuid(options: GetRequestByUuidOptions): Promise<GamemodeByUuidResponse>;
    gamemodeEquippableByUuid(options: GetRequestByUuidOptions): Promise<GamemodeEquippableByUuidResponse>;
}
