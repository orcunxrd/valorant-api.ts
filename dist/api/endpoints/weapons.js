"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapons = void 0;
class Weapons {
    constructor(core) {
        this.core = core;
    }
    getWeapons(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.core.request.send({
                url: 'https://valorant-api.com/v1/weapons',
                method: 'GET',
                params: options
            });
        });
    }
    getWeaponSkins(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.core.request.send({
                url: 'https://valorant-api.com/v1/weapons/skins',
                method: 'GET',
                params: options
            });
        });
    }
    getWeaponSkinChromas(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.core.request.send({
                url: 'https://valorant-api.com/v1/weapons/skinchromas',
                method: 'GET',
                params: options
            });
        });
    }
    getWeaponSkinLevels(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.core.request.send({
                url: 'https://valorant-api.com/v1/weapons/skinlevels',
                method: 'GET',
                params: options
            });
        });
    }
    weaponByUuid(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.core.request.send({
                url: `https://valorant-api.com/v1/weapons/${options.uuid}`,
                method: 'GET',
                params: options
            });
        });
    }
    weaponSkinByUuid(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.core.request.send({
                url: `https://valorant-api.com/v1/weapons/skins/${options.uuid}`,
                method: 'GET',
                params: options
            });
        });
    }
    weaponSkinChromaByUuid(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.core.request.send({
                url: `https://valorant-api.com/v1/weapons/skinchromas/${options.uuid}`,
                method: 'GET',
                params: options
            });
        });
    }
    weaponSkinLevelByUuid(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.core.request.send({
                url: `https://valorant-api.com/v1/weapons/skinchromas/${options.uuid}`,
                method: 'GET',
                params: options
            });
        });
    }
}
exports.Weapons = Weapons;
