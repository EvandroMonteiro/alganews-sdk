import CustomError, { ErrorType } from "../CustomError";

export default class InvalidParameterError extends CustomError {
  static type: ErrorType = "InvalidParameterError" as ErrorType
}