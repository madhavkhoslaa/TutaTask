import { Logger } from "tslog";
import { Results } from "../../../Errors/enum";
import { AbstractStep } from "../../Step/base";
import { IStep } from "../../Step/impl";
import { CacheService } from "../../../Services/CacheService/CacheService";

const logger = new Logger({ name: "cacheCheck" });

export class cacheCheck extends AbstractStep implements IStep {
  constructor(nextStep: IStep | null, isLast: boolean) {
    super(nextStep);
    logger.info(`${this} is instantiated`);
    this.nextStep = nextStep;
    this.isLast = isLast;
  }
  next(data: string, chainResult: string[]): string[] {
    try {
      logger.info("Doing cache check");
      const cache = CacheService.getInstance();
      if (cache.containsKey(data)) {
        logger.info("cache is used");
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
