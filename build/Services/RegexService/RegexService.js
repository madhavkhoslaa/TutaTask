"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegexService = void 0;
class RegexService {
    static validateOne(regex, textString) {
        const regExp = new RegExp(regex);
        return regExp.test(textString);
    }
}
exports.RegexService = RegexService;
