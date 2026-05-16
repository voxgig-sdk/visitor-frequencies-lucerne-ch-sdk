# VisitorFrequenciesLucerneCh SDK utility: make_context
require_relative '../core/context'
module VisitorFrequenciesLucerneChUtilities
  MakeContext = ->(ctxmap, basectx) {
    VisitorFrequenciesLucerneChContext.new(ctxmap, basectx)
  }
end
