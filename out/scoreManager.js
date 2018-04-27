"use strict";
exports.__esModule = true;
var score_1 = require("./score");
var scoreManager = /** @class */ (function () {
    function scoreManager() {
        this.count = 0;
    }
    scoreManager.prototype.init = function (count) {
        this._score = score_1["default"].getInstance();
        this.count = this._score.count;
    };
    scoreManager.prototype.increase = function () {
        this.count++;
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
