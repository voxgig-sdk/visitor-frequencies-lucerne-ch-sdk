-- VisitorFrequenciesLucerneCh SDK error

local VisitorFrequenciesLucerneChError = {}
VisitorFrequenciesLucerneChError.__index = VisitorFrequenciesLucerneChError


function VisitorFrequenciesLucerneChError.new(code, msg, ctx)
  local self = setmetatable({}, VisitorFrequenciesLucerneChError)
  self.is_sdk_error = true
  self.sdk = "VisitorFrequenciesLucerneCh"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function VisitorFrequenciesLucerneChError:error()
  return self.msg
end


function VisitorFrequenciesLucerneChError:__tostring()
  return self.msg
end


return VisitorFrequenciesLucerneChError
