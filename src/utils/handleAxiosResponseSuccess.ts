import { AxiosResponse } from "axios";

export default function handleAxiosResponseSuccess<T>(
  response: AxiosResponse<T>
): AxiosResponse<T> {
  return response
}