"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RandomId;

function RandomId(j, max) {
  var arrayTemp = [];

  for (var i = 0; i < j; i++) {
    var poke = Math.floor(Math.random() * max) + 1;
    arrayTemp.push(poke);
  }

  console.log(arrayTemp);
  return arrayTemp;
}