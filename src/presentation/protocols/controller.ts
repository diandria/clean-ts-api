import { HttpRequest, HttpResponse } from './http'

export interface Controller {
  handle (httpResquest: HttpRequest): HttpResponse
}
