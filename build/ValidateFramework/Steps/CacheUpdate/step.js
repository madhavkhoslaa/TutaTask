"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheUpdate = void 0;
const enum_1 = require("../../../Errors/enum");
const CacheService_1 = require("../../../Services/CacheService/CacheService");
const base_1 = require("../../Step/base");
// Your other code...
class CacheUpdate extends base_1.AbstractStep {
    constructor(nextStep, isLast) {
        super(nextStep);
        this.nextStep = nextStep;
        this.isLast = isLast;
    }
    next(data, chainResult) {
        try {
            const cache = CacheService_1.CacheService.getInstance();
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
    }
}
exports.CacheUpdate = CacheUpdate;
