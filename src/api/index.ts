import { Request } from "./core";
import { Agents, Buddies, Bundles, Ceremonies, CompetitiveTiers, ContentTiers, Contracts, Currencies, Events, Gamemodes, Gears, LevelBorders, Maps, PlayerCards, PlayerTitles, Seasons, Sprays, Themes, Version, Weapons } from "./endpoints";

class ValorantApi {
  public request = new Request(this);
  public agents = new Agents(this);
  public buddies = new Buddies(this);
  public bundles = new Bundles(this);
  public ceremonies = new Ceremonies(this);
  public competitiveTiers = new CompetitiveTiers(this);
  public contentTiers = new ContentTiers(this);
  public contracts = new Contracts(this);
  public currencies = new Currencies(this);
  public events = new Events(this);
  public gamemodes = new Gamemodes(this);
  public gears = new Gears(this);
  public levelBorders = new LevelBorders(this);
  public maps = new Maps(this);
  public playerCards = new PlayerCards(this);
  public playerTitles = new PlayerTitles(this);
  public seasons = new Seasons(this);
  public sprays = new Sprays(this);
  public themes = new Themes(this);
  public weapons = new Weapons(this);
  public version = new Version(this);
}

export { ValorantApi };