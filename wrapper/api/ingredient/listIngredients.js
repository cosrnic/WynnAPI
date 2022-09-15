const fetch = require("node-fetch");
const baseURL = "https://api.wynncraft.com/";

module.exports = async () => {
  let res = await fetch(`${baseURL}v2/ingredient/list`);
  if (res.ok) {
    let data = await res.json();

    return data.data;
  } else {
    throw await res.json();
  }
};
