const fetch = require("node-fetch");
const baseURL = "https://api.wynncraft.com/";
const playtimeMultipler = 4.7;

module.exports = async (username) => {
  let res = await fetch(
    `${baseURL}public_api.php?action=statsSearch&search=${username}`
  );
  if (res.ok) {
    let data = await res.json();

    return data.players;
  } else {
    throw await res.json();
  }
};
