"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FetchPokedex;

function FetchPokedex(limit) {
  fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=".concat(limit)).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res.result;
  })["catch"](function (err) {
    console.error("Error while charging a Pokemon", err);
  });
}