import { Results } from "../../../Errors/enum";
import { AbstractStep } from "../../Step/base";
import { IStep } from "../../Step/impl";
import { FTPMockService } from "../../../Services/FTPMockService/FTPMockService";


export class ServerPollTest extends AbstractStep implements IStep {
  constructor(nextStep: IStep | null, isLast: boolean) {
    super(nextStep);
    this.nextStep = nextStep;
    this.isLast = isLast;
  }
  next(data: string, chainResult: string[]): string[] {
    try {
      const isFolder = FTPMockService.isFolder(data);
      if (isFolder) {
        chainResult.push(Results.SFTP_FOLDER.toString());
      } else {
        chainResult.push(Results.SFTP_FILE.toString());
      }
      if (this.isLast) {
        return chainResult;
      }
      return this.nextStep!.next(data, chainResult);
    } catch (e) {
      chainResult.push(Results.VALIDATION_STEP_ERROR.toString());
      return chainResult;
    }
  }
}
