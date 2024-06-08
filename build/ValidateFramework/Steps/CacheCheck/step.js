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
exports.cacheCheck = void 0;
var enum_1 = require("../../../Errors/enum");
var base_1 = require("../../Step/base");
var CacheService_1 = require("../../../Services/CacheService/CacheService");
var cacheCheck = /** @class */ (function (_super) {
    __extends(cacheCheck, _super);
    function cacheCheck(nextStep, isLast) {
        var _this = _super.call(this, nextStep) || this;
        _this.nextStep = nextStep;
        _this.isLast = isLast;
        return _this;
    }
    cacheCheck.prototype.next = function (data, chainResult) {
        try {
            var cache = CacheService_1.CacheService.getInstance();
            if (cache.containsKey(data)) {
                var res = cache.get(data);
                res.unshift(enum_1.Results.CACHE_USED.toString());
                return cache.get(data);
            }
            //   chainResult.push(Results.CACHE_NOT_USED.toString());
            return this.nextStep.next(data, chainResult);
        }
        catch (e) {
            chainResult.push(enum_1.Results.VALIDATION_STEP_ERROR.toString());
            return chainResult;
        }
    };
    return cacheCheck;
}(base_1.AbstractStep));
exports.cacheCheck = cacheCheck;
