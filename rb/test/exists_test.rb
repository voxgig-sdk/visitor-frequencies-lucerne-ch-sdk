# VisitorFrequenciesLucerneCh SDK exists test

require "minitest/autorun"
require_relative "../VisitorFrequenciesLucerneCh_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = VisitorFrequenciesLucerneChSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
