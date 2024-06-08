"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlValidationStep = void 0;
var base_1 = require("../../Step/base");
var enum_1 = require("../../../Errors/enum");
var RegexService_1 = require("../../../Services/RegexService/RegexService");
var UrlValidationStep = /** @class */ (function (_super) {
    __extends(UrlValidationStep, _super);
    function UrlValidationStep(nextStep, isLast) {
        var _this = _super.call(this, nextStep) || this;
        _this.nextStep = nextStep;
        _this.isLast = isLast;
        return _this;
    }
    UrlValidationStep.prototype.next = function (data, chainResult) {
        try {
            // The code only validates FTP URLS right now
            var isValidUrl = this.validateHTTP(data);
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
    };
    UrlValidationStep.prototype.validateHTTP = function (text) {
        var urlRegex = "^(https?|ftp):\\/\\/" + // Protocol
            "([a-zA-Z0-9]+\\.)+[a-zA-Z]{2,}" + // Domain name
            "(:\\d+)?" + // Port (optional)
            "(\\/\\S*)?$"; // Path (optional)
        return RegexService_1.RegexService.validateOne(urlRegex, text);
    };
    return UrlValidationStep;
}(base_1.AbstractStep));
exports.UrlValidationStep = UrlValidationStep;
