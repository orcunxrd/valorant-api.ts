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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
const got_1 = __importDefault(require("got"));
class Request {
    constructor(core) {
        this.core = core;
    }
    send(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!options.url || !options.method) {
                throw new Error('Missing request requirements');
            }
            const requestOptions = {
                url: options.url,
                method: options.method,
                searchParams: options.params,
                body: options.body
            };
            const response = yield (0, got_1.default)(requestOptions);
            try {
                return JSON.parse(response.body);
            }
            catch (error) {
                throw new Error('JSON parse error');
            }
        });
    }
}
exports.Request = Request;
