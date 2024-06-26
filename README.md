a little walkthrough the code

1. how do we validate a URL 
we make a mental model of rules that we apply mostly linearly on a observable URL. That is what I have done in my approach, applying rules on a observable if it passes certain rules

2. What are the rules for validating a URL ? 
    1. Check if the result has already been cached before 
    2. Validate local checks to be polite to the server 
    3. If the result has not been cached already before we send it to the server
    At any point in our flow we do not care where the validation is being done from

3. Design used
    1. Chain of responsibilities
        Every step in the validation process either resolves(fails) the validation or sends the validation to the next step where it can be failed again or passed to the next rule

```
export abstract class AbstractStep {
  isLast: boolean = false;
  nextStep: IStep | null;
  constructor(nextStep: IStep | null) {
    this.nextStep = nextStep;
  }
}

export interface IStep {
  next(data: string, chainResult: string[]): string[];
}
```

each step is separated from other step and steps are chained together to make a validation rule chain like this. This way we can create a list of rules in order of importance and add new rules easily by implementing a new step(by extending and implementing step interface and abstract class)
![diagram](https://i.imgur.com/H9DtFWL.png)
```
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
```
here we first do a cache check, then a local on browser validation, in the end we do a server validation and cache it. 
This approach for having rules is extensible and new rules can be added , removed and order change easily.

`src/ValidateFramework/Steps` are the concrete class definations for each validation step

`src/ValidationFlowBuilder` is the construction + instantiation of out steps(This instantiates the chain of rules in the order we want to implement)

`The validation chain returns a list of step validations`
## services in the codebase
1. Cache servive
2. Regex service
3. Mock API call service(This mocks an api call to the server and does a simple regex to check if a string refers to a folder or a file)
## How to run ?
`just execute run_and_build.sh`
