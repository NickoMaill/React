"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RandomId;

function RandomId(max) {
  for (var i = 0; i < 3; i++) {
    var poke = Math.floor(Math.random() * max) + 1;
    return poke;
  }
}