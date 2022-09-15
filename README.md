# WynnAPI

## Introduction
This is an API Wrapper for the Wynncraft API, the docs can be found [here](https://docs.wynncraft.com). Please read the docs before reporting any issues.

## Installing
Installing with npm:
```bash
npm i wynnapi
```

## Getting Started

### Basics

Creating a class:
```js
const WynnAPI = require("wynnapi");
const wynn = new WynnAPI();
wynn.getPlayer("Player").then((player) => console.log(player));
```

Alternatively you can just call functions directly like this:
```js
const WynnAPI = require("wynnapi");
new WynnAPI().getPlayer("Player").then((player) => console.log(player));
```
You can also do this:
```js
async function function() { 
  const player = await wynn.getPlayer("0xCosmic");
  console.log(player);
}

function();
```

### Examples
Examples can be found in the `examples` folder.

### Response Codes
Response Codes and their meanings can be found [here](https://docs.wynncraft.com/Overview/RESPONSES.html).