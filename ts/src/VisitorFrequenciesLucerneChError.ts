
import { Context } from './Context'


class VisitorFrequenciesLucerneChError extends Error {

  isVisitorFrequenciesLucerneChError = true

  sdk = 'VisitorFrequenciesLucerneCh'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  VisitorFrequenciesLucerneChError
}

