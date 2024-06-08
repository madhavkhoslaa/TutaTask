"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicFlow = void 0;
const step_1 = require("../ValidateFramework/Steps/CacheCheck/step");
const step_2 = require("../ValidateFramework/Steps/CacheUpdate/step");
const step_3 = require("../ValidateFramework/Steps/serverPollTest/step");
const step_4 = require("../ValidateFramework/Steps/urlValidationStep/step");
class BasicFlow {
    static flow() {
        let chain = [];
        const cacheUpdate = new step_2.CacheUpdate(null, true);
        const serverPollTest = new step_3.ServerPollTest(cacheUpdate, false);
        const urlVal = new step_4.UrlValidationStep(serverPollTest, false);
        const root = new step_1.cacheCheck(urlVal, false);
        return root;
    }
}
exports.BasicFlow = BasicFlow;
