import { ValorantApi } from "..";
import { GetWeaponSkinChromasResponse, GetWeaponSkinLevelsResponse, GetWeaponSkinsResponse, GetWeaponsResponse, WeaponByUuidResponse, WeaponSkinByUuidResponse, WeaponSkinChromaByUuidResponse, WeaponSkinLevelByUuidResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";
export declare class Weapons {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getWeapons(options?: GetRequestOptions): Promise<GetWeaponsResponse>;
    getWeaponSkins(options?: GetRequestOptions): Promise<GetWeaponSkinsResponse>;
    getWeaponSkinChromas(options?: GetRequestOptions): Promise<GetWeaponSkinChromasResponse>;
    getWeaponSkinLevels(options?: GetRequestOptions): Promise<GetWeaponSkinLevelsResponse>;
    weaponByUuid(options: GetRequestByUuidOptions): Promise<WeaponByUuidResponse>;
    weaponSkinByUuid(options: GetRequestByUuidOptions): Promise<WeaponSkinByUuidResponse>;
    weaponSkinChromaByUuid(options: GetRequestByUuidOptions): Promise<WeaponSkinChromaByUuidResponse>;
    weaponSkinLevelByUuid(options: GetRequestByUuidOptions): Promise<WeaponSkinLevelByUuidResponse>;
}
