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
const api_1 = require("../api");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const api = new api_1.ValorantApi();
    // const agents = await api.agents.getAgents();
    // console.log('Agents =>', agents.status);
    // const buddies = await api.buddies.buddyLevels();
    // console.log('Buddies =>', buddies.status);
    // console.dir(buddies, { depth: null });
    // const bundles = await api.bundles.getBundles();
    // console.log('Bundles =>', bundles.status);
    // console.dir(bundles, { depth: null });
    // const ceremonies = await api.ceremonies.getCeremonies();
    // console.log('Ceremonies =>', ceremonies.status);
    // console.dir(ceremonies, { depth: null });
    // const competitiveTiers = await api.competitiveTiers.getCompetitiveTiers();
    // console.log('Competitive tiers =>', competitiveTiers.status);
    // console.dir(competitiveTiers, { depth: null });
    // const contentTiers = await api.contentTiers.getContentTiers();
    // console.log('Content tiers =>', contentTiers.status);
    // console.dir(contentTiers, { depth: null });
    // const contracts = await api.contracts.getContracts();
    // console.log('Contracts =>', contracts.status);
    // console.dir(contracts, { depth: null });
    // const currencies = await api.currencies.getCurrencies();
    // console.log('Currencies =>', currencies.status);
    // console.dir(currencies, { depth: null });
    // const events = await api.events.getEvents();
    // console.log('Events =>', events.status);
    // console.dir(events, { depth: null });
    // const gamemodes = await api.gamemodes.gamemodeEquippables();
    // console.log('Gamemodes =>', gamemodes.status);
    // console.dir(gamemodes, { depth: null });
    // const gears = await api.gears.getGears();
    // console.log('Gears =>', gears.status);
    // console.dir(gears, { depth: null });
    // const levelBorders = await api.levelBorders.getLevelBorders();
    // console.log('Level borders =>', levelBorders.status);
    // console.dir(levelBorders, { depth: null });
    // const maps = await api.maps.getMaps();
    // console.log('Maps =>', maps.status);
    // console.dir(maps, { depth: null });
    // const playerCards = await api.playerCards.getPlayerCards();
    // console.log('Player cards =>', playerCards.status);
    // console.dir(playerCards, { depth: null });
    // const playerTitles = await api.playerTitles.getPlayerTitles();
    // console.log('Player titles =>', playerTitles.status);
    // console.dir(playerTitles, { depth: null });
    // const seasons = await api.seasons.getCompetitiveSeasons();
    // console.log('Seasons =>', seasons.status);
    // console.dir(seasons, { depth: null });
    // const sprays = await api.sprays.getSprayLevels();
    // console.log('Sprays =>', sprays.status);
    // console.dir(sprays, { depth: null });
    // const themes = await api.themes.getThemes();
    // console.log('Themes =>', themes.status);
    // console.dir(themes, { depth: null });
    // const weapons = await api.weapons.getWeaponSkinLevels();
    // console.log('Weapons =>', weapons.status);
    // console.dir(weapons, { depth: null });
    const version = yield api.version.getVersion();
    console.log('Version =>', version);
    console.dir(version, { depth: null });
    return;
}))();
