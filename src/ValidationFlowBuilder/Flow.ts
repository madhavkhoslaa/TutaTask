import { cacheCheck } from "../ValidateFramework/Steps/CacheCheck/step";
import { CacheUpdate } from "../ValidateFramework/Steps/CacheUpdate/step";
import { ServerPollTest } from "../ValidateFramework/Steps/serverPollTest/step";
import { UrlValidationStep } from "../ValidateFramework/Steps/urlValidationStep/step";

export class BasicFlow {
  static flow() {
    let chain = [];
    const cacheUpdate = new CacheUpdate(null, true);
    const serverPollTest = new ServerPollTest(cacheUpdate, false);
    const urlVal = new UrlValidationStep(serverPollTest, false);
    const root = new cacheCheck(urlVal, false);
    return root;
  }
}
