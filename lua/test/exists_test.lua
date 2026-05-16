-- ProjectName SDK exists test

local sdk = require("visitor-frequencies-lucerne-ch_sdk")

describe("VisitorFrequenciesLucerneChSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
