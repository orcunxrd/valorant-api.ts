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
exports.Ceremony = void 0;
class Ceremony {
    constructor(core) {
        this.core = core;
    }
    getCeremonies(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.core.request.send({
                url: 'https://valorant-api.com/v1/ceremonies',
                method: 'GET',
                params: options
            });
        });
    }
    ceremonyByUuid(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.core.request.send({
                url: `https://valorant-api.com/v1/ceremonies/${options.uuid}`,
                method: 'GET',
                params: options
            });
        });
    }
}
exports.Ceremony = Ceremony;
