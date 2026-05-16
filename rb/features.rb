# VisitorFrequenciesLucerneCh SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module VisitorFrequenciesLucerneChFeatures
  def self.make_feature(name)
    case name
    when "base"
      VisitorFrequenciesLucerneChBaseFeature.new
    when "test"
      VisitorFrequenciesLucerneChTestFeature.new
    else
      VisitorFrequenciesLucerneChBaseFeature.new
    end
  end
end
