import { BasicFlow } from "../ValidationFlowBuilder/Flow";

export const validate = (data: string) => {
    const validator = BasicFlow.flow();
    const res = validator.next(data, []);
    return res;
};

export function handleInput() {
    const textBox = document.getElementById("textBox") as HTMLInputElement | null;
    if (textBox !== null) {
        const textBoxValue = textBox.value;
        const result = validate(textBoxValue);
        console.log("Validation result: ", result);
    }
}
