import axios, { AxiosInstance, AxiosResponse } from "axios"
import handleAxiosResponseError from "./utils/handleAxiosResponseError"
import handleAxiosResponseSuccess from "./utils/handleAxiosResponseSuccess"

const Http: AxiosInstance = axios.create()

class Service {
  protected static Http: AxiosInstance = Http
  protected static getData: <T>(res: AxiosResponse<T, any>) => T = getData
}

function getData<T>(res: AxiosResponse<T>): T {
  return res.data
}

Http.defaults.baseURL = "http://localhost:8080"

Http.interceptors.response.use(
  handleAxiosResponseSuccess,
  handleAxiosResponseError
)

export default Service