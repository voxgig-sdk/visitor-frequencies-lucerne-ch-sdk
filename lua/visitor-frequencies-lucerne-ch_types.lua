-- Typed models for the VisitorFrequenciesLucerneCh SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Search
---@field datasetid? string
---@field fields? table
---@field geometry? table
---@field record_timestamp? string
---@field recordid? string

---@class SearchListMatch
---@field dataset string
---@field exclude? string
---@field format? string
---@field q? string
---@field refine? string
---@field row? number
---@field sort? string
---@field start? number

local M = {}

return M
