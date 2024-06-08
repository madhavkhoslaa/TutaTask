"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractStep = void 0;
class AbstractStep {
    constructor(nextStep) {
        this.isLast = false;
        this.nextStep = nextStep;
    }
}
exports.AbstractStep = AbstractStep;
