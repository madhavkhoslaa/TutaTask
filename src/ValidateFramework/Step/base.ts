import { IStep } from "./impl";

export abstract class AbstractStep {
  isLast: boolean = false;
  nextStep: IStep | null;
  constructor(nextStep: IStep | null) {
    this.nextStep = nextStep;
  }
}
