# VisitorFrequenciesLucerneCh SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module VisitorFrequenciesLucerneChFeatures
  def self.make_feature(name)
    case name
    when "base"
      VisitorFrequenciesLucerneChBaseFeature.new
    when "ratelimit"
      VisitorFrequenciesLucerneChRatelimitFeature.new
    when "retry"
      VisitorFrequenciesLucerneChRetryFeature.new
    when "test"
      VisitorFrequenciesLucerneChTestFeature.new
    when "timeout"
      VisitorFrequenciesLucerneChTimeoutFeature.new
    else
      VisitorFrequenciesLucerneChBaseFeature.new
    end
  end
end
