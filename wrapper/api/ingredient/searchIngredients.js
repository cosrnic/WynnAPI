const fetch = require("node-fetch");
const baseURL = "https://api.wynncraft.com/";

module.exports = async (query, args) => {
  let res = await fetch(`${baseURL}v2/ingredient/search/${query}/${args}`);
  if (res.ok) {
    let data = await res.json();

    return data.data;
  } else {
    throw await res.json();
  }
};
