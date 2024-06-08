"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractStep = void 0;
var AbstractStep = /** @class */ (function () {
    function AbstractStep(nextStep) {
        this.isLast = false;
        this.nextStep = nextStep;
    }
    return AbstractStep;
}());
exports.AbstractStep = AbstractStep;
