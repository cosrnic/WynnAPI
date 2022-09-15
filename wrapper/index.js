/*

 a88888b.                              oo          
d8'   `88                                          
88        .d8888b. .d8888b. 88d8b.d8b. dP .d8888b. 
88        88'  `88 Y8ooooo. 88'`88'`88 88 88'  `"" 
Y8.   .88 88.  .88       88 88  88  88 88 88.  ... 
 Y88888P' `88888P' `88888P' dP  dP  dP dP `88888P' 

FYI: This code is probably not the best since I'm
fairly new to JS. Sorry in advance!

*/

// player
const getPlayer = require("./api/player/getPlayer");
const searchPlayer = require("./api/player/searchPlayer");

// ingredient
const getIngredient = require("./api/ingredient/getIngredient");
const listIngredients = require("./api/ingredient/listIngredients");
const searchIngredients = require("./api/ingredient/searchIngredients");

// item
const searchItems = require("./api/item/searchItems");
const getItemsFromCategory = require("./api/item/searchItemsFromCategory");

// guild
const getGuild = require("./api/guild/getGuild");
const listGuilds = require("./api/guild/listGuilds");

// network
const serverList = require("./api/network/serverList");
const playerSum = require("./api/network/playerSum");

// territory
const listTerritories = require("./api/territory/listTerritories");

// leaderboard
const leaderboards = require("./api/leaderboard/leaderboards");

class WynnAPI {
  // player
  getPlayer(input) {
    return getPlayer(input);
  }
  searchPlayer(input) {
    return searchPlayer(input);
  }

  // ingredient
  getIngredient(input) {
    return getIngredient(input);
  }
  listIngredients() {
    return listIngredients();
  }
  searchIngredients(query, args) {
    return searchIngredients(query, args);
  }

  // item
  getItemsFromCategory(input) {
    return getItemsFromCategory(input);
  }
  searchItems(input) {
    return searchItems(input);
  }

  // guilds
  getGuild(input) {
    return getGuild(input);
  }
  listGuilds() {
    return listGuilds();
  }

  // network
  serverList() {
    return serverList();
  }
  playerSum() {
    return playerSum();
  }

  // territory
  listTerritories() {
    return listTerritories();
  }

  // leaderboard
  leaderboards(type, timeframe) {
    return leaderboards(type, timeframe);
  }
}

module.exports = WynnAPI;
