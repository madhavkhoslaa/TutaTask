import { TutaErrors } from "../../Errors/enum";

export class ValidaionResponse<T> {
  message: string;
  status: any;
  constructor(message: string, success: TutaErrors) {
    this.message = message;
    this.status = TutaErrors;
  }
}
