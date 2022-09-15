const fetch = require("node-fetch");
const baseURL = "https://api.wynncraft.com/";

module.exports = async () => {
  let res = await fetch(`${baseURL}public_api.php?action=guildList`);
  if (res.ok) {
    let data = await res.json();

    return data.guilds;
  } else {
    throw await res.json();
  }
};
