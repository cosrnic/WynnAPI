const fetch = require("node-fetch");
const baseURL = "https://api.wynncraft.com/";

module.exports = async (ingredient) => {
  let res = await fetch(`${baseURL}v2/ingredient/get/${ingredient}`);
  if (res.ok) {
    let data = await res.json();

    return data.data[0];
  } else {
    throw await res.json();
  }
};
