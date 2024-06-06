import { BasicFlow } from "./ValidationFlowBuilder/Flow";

const data = BasicFlow.flow();
const testString = "ftp://ftp.example.com/folder/image";
const res = data.next(testString, []);
console.log({ res });
const res2 = data.next(testString, []);
console.log({ res2 });
