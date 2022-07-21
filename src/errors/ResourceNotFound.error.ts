import CustomError, { ErrorType } from "../CustomError";

export default class ResourceNotFoundError extends CustomError {
  static type: ErrorType = "ResourceNotFoundError" as ErrorType
}