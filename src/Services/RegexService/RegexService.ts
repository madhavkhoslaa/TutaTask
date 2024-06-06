import { Logger } from "tslog";

const logger = new Logger({ name: "RegexService" });
export class RegexService {
  static validateOne(regex: string, textString: string): boolean {
    logger.info(`Running ${regex} for ${textString}`);
    const regExp = new RegExp(regex);
    return regExp.test(textString);
  }
}
