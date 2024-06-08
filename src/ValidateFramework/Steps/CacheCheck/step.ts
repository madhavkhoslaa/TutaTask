import { Results } from "../../../Errors/enum";
import { AbstractStep } from "../../Step/base";
import { IStep } from "../../Step/impl";
import { CacheService } from "../../../Services/CacheService/CacheService";


export class cacheCheck extends AbstractStep implements IStep {
  constructor(nextStep: IStep | null, isLast: boolean) {
    super(nextStep);
    this.nextStep = nextStep;
    this.isLast = isLast;
  }
  next(data: string, chainResult: string[]): string[] {
    try {
      const cache = CacheService.getInstance();
      if (cache.containsKey(data)) {
        const res = cache.get(data);
        res.unshift(Results.CACHE_USED.toString());
        return cache.get(data);
      }
      //   chainResult.push(Results.CACHE_NOT_USED.toString());
      return this.nextStep!.next(data, chainResult);
    } catch (e) {
      chainResult.push(Results.VALIDATION_STEP_ERROR.toString());
      return chainResult;
    }
  }
}
