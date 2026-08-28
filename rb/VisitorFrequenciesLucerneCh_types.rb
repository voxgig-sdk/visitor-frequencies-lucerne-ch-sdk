# frozen_string_literal: true

# Typed models for the VisitorFrequenciesLucerneCh SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Search entity data model.
#
# @!attribute [rw] datasetid
#   @return [String, nil]
#
# @!attribute [rw] fields
#   @return [Hash, nil]
#
# @!attribute [rw] geometry
#   @return [Hash, nil]
#
# @!attribute [rw] record_timestamp
#   @return [String, nil]
#
# @!attribute [rw] recordid
#   @return [String, nil]
Search = Struct.new(
  :datasetid,
  :fields,
  :geometry,
  :record_timestamp,
  :recordid,
  keyword_init: true
)

# Request payload for Search#list.
#
# @!attribute [rw] dataset
#   @return [String]
#
# @!attribute [rw] exclude
#   @return [String, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] refine
#   @return [String, nil]
#
# @!attribute [rw] row
#   @return [Integer, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
#
# @!attribute [rw] start
#   @return [Integer, nil]
SearchListMatch = Struct.new(
  :dataset,
  :exclude,
  :format,
  :q,
  :refine,
  :row,
  :sort,
  :start,
  keyword_init: true
)

