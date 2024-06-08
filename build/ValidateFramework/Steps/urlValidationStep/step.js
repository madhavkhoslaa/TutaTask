"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlValidationStep = void 0;
const base_1 = require("../../Step/base");
const enum_1 = require("../../../Errors/enum");
const RegexService_1 = require("../../../Services/RegexService/RegexService");
class UrlValidationStep extends base_1.AbstractStep {
    constructor(nextStep, isLast) {
        super(nextStep);
        this.nextStep = nextStep;
        this.isLast = isLast;
    }
    next(data, chainResult) {
        try {
            // The code only validates FTP URLS right now
            const isValidUrl = this.validateHTTP(data);
            if (isValidUrl && this.isLast != true) {
                // Happy flow
                chainResult.push(enum_1.Results.GOOD_URL_VALIDATION.toString());
                return this.nextStep.next(data, chainResult);
            }
            else if (isValidUrl && this.isLast == true) {
                // Happy flow
                chainResult.push(enum_1.Results.GOOD_URL_VALIDATION.toString());
                return chainResult;
            }
            chainResult.push(enum_1.Results.BAD_INPUT.toString());
            return chainResult;
        }
        catch (e) {
            chainResult.push(enum_1.Results.SERVER_ERROR.toString());
            return chainResult;
        }
    }
    validateHTTP(text) {
        const urlRegex = "^(https?|ftp):\\/\\/" + // Protocol
            "([a-zA-Z0-9]+\\.)+[a-zA-Z]{2,}" + // Domain name
            "(:\\d+)?" + // Port (optional)
            "(\\/\\S*)?$"; // Path (optional)
        return RegexService_1.RegexService.validateOne(urlRegex, text);
    }
}
exports.UrlValidationStep = UrlValidationStep;
