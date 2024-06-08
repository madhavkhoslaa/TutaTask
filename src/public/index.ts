import { BasicFlow } from "../ValidationFlowBuilder/Flow";

export const validate = (data: string) => {
    const validator = BasicFlow.flow();
    const res = validator.next(data, []);
    return res;
};

export function handleInput() {
    const textBox = document.getElementById("textBox") as HTMLInputElement | null;
    const resultDisplay = document.getElementById("validationResult") as HTMLDivElement | null;

    if (textBox !== null && resultDisplay !== null) {
        const textBoxValue = textBox.value;
        const result = validate(textBoxValue);
        resultDisplay.textContent = "Validation result: " + result; // Update the content of the result display
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const textBox = document.getElementById("textBox") as HTMLInputElement | null;
    if (textBox !== null) {
        textBox.addEventListener("input", handleInput); // Add event listener for input event
    }
});
