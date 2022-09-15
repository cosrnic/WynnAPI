const fetch = require("node-fetch");
const baseURL = "https://api.wynncraft.com/";

module.exports = async (category) => {
  let res = await fetch(
    `${baseURL}public_api.php?action=itemDB&category=${category}`
  );
  if (res.ok) {
    let data = await res.json();

    return data.items;
  } else {
    throw await res.json();
  }
};
