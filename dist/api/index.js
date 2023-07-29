"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValorantApi = void 0;
const core_1 = require("./core");
const endpoints_1 = require("./endpoints");
class ValorantApi {
    constructor() {
        this.request = new core_1.Request(this);
        this.agents = new endpoints_1.Agents(this);
        this.buddies = new endpoints_1.Buddies(this);
        this.bundles = new endpoints_1.Bundles(this);
        this.ceremonies = new endpoints_1.Ceremonies(this);
        this.competitiveTiers = new endpoints_1.CompetitiveTiers(this);
        this.contentTiers = new endpoints_1.ContentTiers(this);
        this.contracts = new endpoints_1.Contracts(this);
        this.currencies = new endpoints_1.Currencies(this);
        this.events = new endpoints_1.Events(this);
        this.gamemodes = new endpoints_1.Gamemodes(this);
        this.gears = new endpoints_1.Gears(this);
        this.levelBorders = new endpoints_1.LevelBorders(this);
        this.maps = new endpoints_1.Maps(this);
        this.playerCards = new endpoints_1.PlayerCards(this);
        this.playerTitles = new endpoints_1.PlayerTitles(this);
        this.seasons = new endpoints_1.Seasons(this);
        this.sprays = new endpoints_1.Sprays(this);
        this.themes = new endpoints_1.Themes(this);
        this.weapons = new endpoints_1.Weapons(this);
        this.version = new endpoints_1.Version(this);
    }
}
exports.ValorantApi = ValorantApi;
