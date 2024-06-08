"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleInput = exports.validate = void 0;
const Flow_1 = require("../ValidationFlowBuilder/Flow");
const validate = (data) => {
    const validator = Flow_1.BasicFlow.flow();
    const res = validator.next(data, []);
    return res;
};
exports.validate = validate;
function handleInput() {
    const textBox = document.getElementById("textBox");
    if (textBox !== null) {
        const textBoxValue = textBox.value;
        const result = (0, exports.validate)(textBoxValue);
        console.log("Validation result: ", result);
    }
}
exports.handleInput = handleInput;
