import { ValorantApi } from "..";
interface GetGamemodesOptions {
    language?: string;
}
interface GamemodeEquippablesOptions {
    language?: string;
}
interface GamemodeByUuidOptions {
    uuid: string;
    language?: string;
}
interface GamemodeEquippableByUuidOptions {
    uuid: string;
    language?: string;
}
export declare class Gamemode {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getGamemodes(options?: GetGamemodesOptions): Promise<any>;
    gamemodeEquippables(options?: GamemodeEquippablesOptions): Promise<any>;
    gamemodeByUuid(options: GamemodeByUuidOptions): Promise<any>;
    gamemodeEquippableByUuid(options: GamemodeEquippableByUuidOptions): Promise<any>;
}
export {};
