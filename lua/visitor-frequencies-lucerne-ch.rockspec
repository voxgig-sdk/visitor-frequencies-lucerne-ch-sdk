package = "voxgig-sdk-visitor-frequencies-lucerne-ch"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/visitor-frequencies-lucerne-ch-sdk.git"
}
description = {
  summary = "VisitorFrequenciesLucerneCh SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["visitor-frequencies-lucerne-ch_sdk"] = "visitor-frequencies-lucerne-ch_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
