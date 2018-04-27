"use strict";
exports.__esModule = true;
var scoreManager_1 = require("./scoreManager");
var score = /** @class */ (function () {
    function score() {
        this.count = 0;
    }
    score.prototype.init = function (start) {
        this.count = start;
        this.Manager = scoreManager_1["default"].getInstance();
        this.Manager.init(this.count);
    };
    score.getInstance = function () {
        if (!score._instance) {
            score._instance = new score();
        }
        return this._instance;
    };
    return score;
}());
exports["default"] = score;
