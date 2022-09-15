const fetch = require("node-fetch");
const baseURL = "https://api.wynncraft.com/";
const playtimeMultipler = 4.7;

module.exports = async (username) => {
  let res = await fetch(`${baseURL}v2/player/${username}/stats`);
  if (res.ok) {
    let data = await res.json();
    data.data[0].meta.playtime = data.data[0].meta.playtime * playtimeMultipler;
    for (var i = 0; i < data.data[0].classes.length; i++) {
      data.data[0].classes[i].playtime =
        data.data[0].classes[i].playtime * playtimeMultipler;
    }

    return data.data[0];
  } else {
    throw await res.json();
  }
};
