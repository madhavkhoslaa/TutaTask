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
exports.CacheUpdate = void 0;
var enum_1 = require("../../../Errors/enum");
var CacheService_1 = require("../../../Services/CacheService/CacheService");
var base_1 = require("../../Step/base");
// Your other code...
var CacheUpdate = /** @class */ (function (_super) {
    __extends(CacheUpdate, _super);
    function CacheUpdate(nextStep, isLast) {
        var _this = _super.call(this, nextStep) || this;
        _this.nextStep = nextStep;
        _this.isLast = isLast;
        return _this;
    }
    CacheUpdate.prototype.next = function (data, chainResult) {
        try {
            var cache = CacheService_1.CacheService.getInstance();
            // Update cache with new data
            cache.set(data, chainResult);
            chainResult.push(enum_1.Results.CACHE_UPDATED.toString());
            if (this.isLast) {
                return chainResult;
            }
            // Pass data to next step
            return this.nextStep.next(data, chainResult);
        }
        catch (e) {
            chainResult.push(enum_1.Results.CACHE_UPDATE_ERROR.toString());
            return chainResult;
        }
    };
    return CacheUpdate;
}(base_1.AbstractStep));
exports.CacheUpdate = CacheUpdate;
