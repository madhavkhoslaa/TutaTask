import { AbstractStep } from "../../Step/base";
import { IStep } from "../../Step/impl";
import { Results } from "../../../Errors/enum";
import { RegexService } from "../../../Services/RegexService/RegexService";

export class UrlValidationStep extends AbstractStep implements IStep {
  constructor(nextStep: IStep | null, isLast: boolean) {
    super(nextStep);
    this.nextStep = nextStep;
    this.isLast = isLast;
  }
  next(data: string, chainResult: string[]): string[] {
    try {
      // The code only validates FTP URLS right now
      const isValidUrl = this.validateHTTP(data);
      if (isValidUrl && this.isLast != true) {
        // Happy flow
        chainResult.push(Results.GOOD_URL_VALIDATION.toString());
        return this.nextStep!.next(data, chainResult);
      } else if (isValidUrl && this.isLast == true) {
        // Happy flow
        chainResult.push(Results.GOOD_URL_VALIDATION.toString());
        return chainResult;
      }
      chainResult.push(Results.BAD_INPUT.toString());
      return chainResult;
    } catch (e) {
      chainResult.push(Results.SERVER_ERROR.toString());
      return chainResult;
    }
  }
  validateHTTP(text: string): boolean {
    const urlRegex: string =
      "^(https?|ftp):\\/\\/" + // Protocol
      "([a-zA-Z0-9]+\\.)+[a-zA-Z]{2,}" + // Domain name
      "(:\\d+)?" + // Port (optional)
      "(\\/\\S*)?$"; // Path (optional)
    return RegexService.validateOne(urlRegex, text);
  }
}
