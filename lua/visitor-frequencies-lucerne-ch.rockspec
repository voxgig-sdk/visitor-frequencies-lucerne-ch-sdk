package = "voxgig-sdk-visitor-frequencies-lucerne-ch"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/visitor-frequencies-lucerne-ch-sdk.git",
  tag = "lua/v0.0.1",
  dir = "visitor-frequencies-lucerne-ch-sdk/lua"
}
description = {
  summary = "Unofficial generated Lua SDK for the Visitor Frequencies Lucerne (CH) public API. Not affiliated with or endorsed by the upstream API provider.",
  homepage = "https://github.com/voxgig-sdk/visitor-frequencies-lucerne-ch-sdk",
  issues_url = "https://github.com/voxgig-sdk/visitor-frequencies-lucerne-ch-sdk/issues",
  license = "MIT",
  labels = { "voxgig", "sdk", "generated-sdk", "openapi", "api-client", "visitor-frequencies-lucerne-ch" }
}
dependencies = {
  "lua >= 5.3",
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
