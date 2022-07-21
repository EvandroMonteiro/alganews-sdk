import CustomError, { ErrorType } from "../CustomError";

export default class BusinessError extends CustomError {
  static type: ErrorType = "BusinessError" as ErrorType
}