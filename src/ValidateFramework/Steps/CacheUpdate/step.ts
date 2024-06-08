import { Results } from "../../../Errors/enum";
import { CacheService } from "../../../Services/CacheService/CacheService";
import { AbstractStep } from "../../Step/base";
import { IStep } from "../../Step/impl";

// Your other code...
export class CacheUpdate extends AbstractStep implements IStep {
  constructor(nextStep: IStep | null, isLast: boolean) {
    super(nextStep);
    this.nextStep = nextStep;
    this.isLast = isLast;
  }

  next(data: string, chainResult: string[]): string[] {
    try {
      const cache = CacheService.getInstance();
      // Update cache with new data
      cache.set(data, chainResult);
      chainResult.push(Results.CACHE_UPDATED.toString());
      if (this.isLast) {
        return chainResult;
      }
      // Pass data to next step
      return this.nextStep!.next(data, chainResult);
    } catch (e) {
      chainResult.push(Results.CACHE_UPDATE_ERROR.toString());
      return chainResult;
    }
  }
}
