"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheService = void 0;
var CacheService = /** @class */ (function () {
    function CacheService() {
        this.cache = new Map();
    }
    CacheService.getInstance = function () {
        if (!CacheService.instance) {
            CacheService.instance = new CacheService();
        }
        return CacheService.instance;
    };
    CacheService.prototype.set = function (key, value) {
        this.cache.set(key, value);
    };
    CacheService.prototype.containsKey = function (key) {
        return this.cache.has(key);
    };
    CacheService.prototype.get = function (key) {
        return this.cache.get(key);
    };
    return CacheService;
}());
exports.CacheService = CacheService;
