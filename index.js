"use strict";
exports.__esModule = true;
var score_1 = require("./score");
var game_1 = require("./game");
var _score = score_1["default"].getInstance();
_score.init(13);
new game_1["default"]();
