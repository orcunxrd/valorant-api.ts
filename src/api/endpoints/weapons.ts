import { ValorantApi } from "..";
import { GetWeaponSkinChromasResponse, GetWeaponSkinLevelsResponse, GetWeaponSkinsResponse, GetWeaponsResponse, WeaponByUuidResponse, WeaponSkinByUuidResponse, WeaponSkinChromaByUuidResponse, WeaponSkinLevelByUuidResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";

export class Weapons {
    public core: ValorantApi;

    constructor(core: ValorantApi) {
        this.core = core;
    }

    async getWeapons(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetWeaponsResponse>({
            url: 'https://valorant-api.com/v1/weapons',
            method: 'GET',
            params: options
        })
    }

    async getWeaponSkins(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetWeaponSkinsResponse>({
            url: 'https://valorant-api.com/v1/weapons/skins',
            method: 'GET',
            params: options
        })
    }

    async getWeaponSkinChromas(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetWeaponSkinChromasResponse>({
            url: 'https://valorant-api.com/v1/weapons/skinchromas',
            method: 'GET',
            params: options
        })
    }

    async getWeaponSkinLevels(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetWeaponSkinLevelsResponse>({
            url: 'https://valorant-api.com/v1/weapons/skinlevels',
            method: 'GET',
            params: options
        })
    }

    async weaponByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<WeaponByUuidResponse>({
            url: `https://valorant-api.com/v1/weapons/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }

    async weaponSkinByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<WeaponSkinByUuidResponse>({
            url: `https://valorant-api.com/v1/weapons/skins/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }

    async weaponSkinChromaByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<WeaponSkinChromaByUuidResponse>({
            url: `https://valorant-api.com/v1/weapons/skinchromas/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }

    async weaponSkinLevelByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<WeaponSkinLevelByUuidResponse>({
            url: `https://valorant-api.com/v1/weapons/skinchromas/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }
}