"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheService = void 0;
class CacheService {
    constructor() {
        this.cache = new Map();
    }
    static getInstance() {
        if (!CacheService.instance) {
            CacheService.instance = new CacheService();
        }
        return CacheService.instance;
    }
    set(key, value) {
        this.cache.set(key, value);
    }
    containsKey(key) {
        return this.cache.has(key);
    }
    get(key) {
        return this.cache.get(key);
    }
}
exports.CacheService = CacheService;
