const fetch = require("node-fetch");
const baseURL = "https://api.wynncraft.com/";

module.exports = async (item) => {
  let res = await fetch(
    `${baseURL}public_api.php?action=itemDB&search=${item}`
  );
  if (res.ok) {
    let data = await res.json();

    return data.items;
  } else {
    throw await res.json();
  }
};
