# VisitorFrequenciesLucerneCh SDK utility: feature_add
module VisitorFrequenciesLucerneChUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
