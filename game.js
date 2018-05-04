"use strict";
exports.__esModule = true;
var score_1 = require("./score");
var game = /** @class */ (function () {
    function game() {
        this._score = score_1["default"].getInstance();
        for (var i = 0; i <= 20; i++) {
            this._score.Manager.increase();
            console.log(this._score.count);
        }
    }
    return game;
}());
exports["default"] = game;
