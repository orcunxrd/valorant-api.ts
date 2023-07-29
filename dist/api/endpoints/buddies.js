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
exports.Buddies = void 0;
class Buddies {
    constructor(core) {
        this.core = core;
    }
    getBuddies(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.core.request.send({
                url: 'https://valorant-api.com/v1/buddies',
                method: 'GET',
                params: options
            });
        });
    }
    buddyLevels(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.core.request.send({
                url: 'https://valorant-api.com/v1/buddies/levels',
                method: 'GET',
                params: options
            });
        });
    }
    buddyByUuid(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.core.request.send({
                url: `https://valorant-api.com/v1/buddies/${options.uuid}`,
                method: 'GET',
                params: options
            });
        });
    }
    buddyLevelByUuid(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.core.request.send({
                url: `https://valorant-api.com/v1/buddies/levels/${options.uuid}`,
                method: 'GET',
                params: options
            });
        });
    }
}
exports.Buddies = Buddies;
