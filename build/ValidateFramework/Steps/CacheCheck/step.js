"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheCheck = void 0;
const enum_1 = require("../../../Errors/enum");
const base_1 = require("../../Step/base");
const CacheService_1 = require("../../../Services/CacheService/CacheService");
class cacheCheck extends base_1.AbstractStep {
    constructor(nextStep, isLast) {
        super(nextStep);
        this.nextStep = nextStep;
        this.isLast = isLast;
    }
    next(data, chainResult) {
        try {
            const cache = CacheService_1.CacheService.getInstance();
            if (cache.containsKey(data)) {
                const res = cache.get(data);
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
    }
}
exports.cacheCheck = cacheCheck;
