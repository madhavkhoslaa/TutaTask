"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegexService = void 0;
var RegexService = /** @class */ (function () {
    function RegexService() {
    }
    RegexService.validateOne = function (regex, textString) {
        var regExp = new RegExp(regex);
        return regExp.test(textString);
    };
    return RegexService;
}());
exports.RegexService = RegexService;
