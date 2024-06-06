import { Results } from "../../Errors/enum";

export interface IStep {
  next(data: string, chainResult: string[]): string[];
}
