const fetch = require("node-fetch");
const baseURL = "https://api.wynncraft.com/";

module.exports = async (type, timeframe) => {
  if (timeframe === undefined) timeframe = 0;
  let res = await fetch(
    `${baseURL}public_api.php?action=statsLeaderboard&type=${type}&timeframe=${timeframe}`
  );
  if (res.ok) {
    let data = await res.json();

    return data.data;
  } else {
    throw await res.json();
  }
};
