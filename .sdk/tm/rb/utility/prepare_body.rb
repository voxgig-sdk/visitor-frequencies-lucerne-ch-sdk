# VisitorFrequenciesLucerneCh SDK utility: prepare_body
require_relative 'media'
module VisitorFrequenciesLucerneChUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return VisitorFrequenciesLucerneChUtilities.raw_body(ctx.reqdata) if VisitorFrequenciesLucerneChUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
