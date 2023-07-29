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
exports.Gamemodes = void 0;
class Gamemodes {
    constructor(core) {
        this.core = core;
    }
    getGamemodes(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.core.request.send({
                url: 'https://valorant-api.com/v1/gamemodes',
                method: 'GET',
                params: options
            });
        });
    }
    gamemodeEquippables(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.core.request.send({
                url: 'https://valorant-api.com/v1/gamemodes/equippables',
                method: 'GET',
                params: options
            });
        });
    }
    gamemodeByUuid(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.core.request.send({
                url: `https://valorant-api.com/v1/gamemodes/${options.uuid}`,
                method: 'GET',
                params: options
            });
        });
    }
    gamemodeEquippableByUuid(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.core.request.send({
                url: `https://valorant-api.com/v1/gamemodes/equippables/${options.uuid}`,
                method: 'GET',
                params: options
            });
        });
    }
}
exports.Gamemodes = Gamemodes;
