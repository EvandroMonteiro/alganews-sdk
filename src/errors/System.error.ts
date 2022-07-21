import CustomError, { ErrorType } from "../CustomError";

export default class SystemError extends CustomError {
  static type: ErrorType = "SystemError" as ErrorType
}