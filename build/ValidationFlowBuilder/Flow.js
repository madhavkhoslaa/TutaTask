"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicFlow = void 0;
var step_1 = require("../ValidateFramework/Steps/CacheCheck/step");
var step_2 = require("../ValidateFramework/Steps/CacheUpdate/step");
var step_3 = require("../ValidateFramework/Steps/serverPollTest/step");
var step_4 = require("../ValidateFramework/Steps/urlValidationStep/step");
var BasicFlow = /** @class */ (function () {
    function BasicFlow() {
    }
    BasicFlow.flow = function () {
        var chain = [];
        var cacheUpdate = new step_2.CacheUpdate(null, true);
        var serverPollTest = new step_3.ServerPollTest(cacheUpdate, false);
        var urlVal = new step_4.UrlValidationStep(serverPollTest, false);
        var root = new step_1.cacheCheck(urlVal, false);
        return root;
    };
    return BasicFlow;
}());
exports.BasicFlow = BasicFlow;
