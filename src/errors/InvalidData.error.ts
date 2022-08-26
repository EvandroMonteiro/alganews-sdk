import CustomError, { ErrorType } from "../CustomError";

export default class InvalidDataError extends CustomError {
  static type: ErrorType = "InvalidDataError" as ErrorType;
}
