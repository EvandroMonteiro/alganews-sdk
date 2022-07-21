import CustomError, { ErrorType } from "../CustomError"

export default class ForbiddenError extends CustomError {
  static type: ErrorType = "ForbiddenError" as ErrorType
}