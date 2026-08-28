// Typed models for the VisitorFrequenciesLucerneCh SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Search {
  datasetid?: string
  fields?: Record<string, any>
  geometry?: Record<string, any>
  record_timestamp?: string
  recordid?: string
}

export interface SearchListMatch {
  dataset: string
  exclude?: string
  format?: string
  q?: string
  refine?: string
  row?: number
  sort?: string
  start?: number
}

