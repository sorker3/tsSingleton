"use strict";
exports.__esModule = true;
var score_1 = require("./score");
var scoreManager = /** @class */ (function () {
    function scoreManager() {
    }
    scoreManager.prototype.init = function () {
        this._score = score_1["default"].getInstance();
    };
    scoreManager.prototype.increase = function () {
        this._score.count++;
    };
    scoreManager.getInstance = function () {
        if (scoreManager._instance) {
            scoreManager._instance = new scoreManager();
        }
        return scoreManager._instance;
    };
    return scoreManager;
}());
exports["default"] = scoreManager;
