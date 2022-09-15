# WynnAPI

## Introduction
This is an API Wrapper for the Wynncraft API, the docs can be found [here](https://docs.wynncraft.com). Please read the docs before reporting any issues.

## Installing
Installing with npm:
```bash
npm i @cosrnic/wynnapi
```

## Getting Started

### Basics

Creating a class:
```js
const WynnAPI = require("wynnapi");
const wynn = new WynnAPI();
wynn.getPlayer("Player");
```

Alternatively you can just call functions directly like this:
```js
const WynnAPI = require("wynnapi");
WynnAPI().getPlayer("Player");
```

### Example
Examples will be in the examples folder, they are currently a work in progress!