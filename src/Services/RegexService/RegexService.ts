export class RegexService {
  static validateOne(regex: string, textString: string): boolean {
    const regExp = new RegExp(regex);
    return regExp.test(textString);
  }
}
