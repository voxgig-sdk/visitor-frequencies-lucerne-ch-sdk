package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "VisitorFrequenciesLucerneCh",
			"slug": "visitor-frequencies-lucerne-ch",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://data.stadtluzern.ch",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"search": map[string]any{},
			},
		},
		"entity": map[string]any{
			"search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "datasetid",
						"short": "Dataset identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fields",
						"short": "Record data fields",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "geometry",
						"short": "GeoJSON geometry object",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "record_timestamp",
						"short": "Record creation timestamp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "recordid",
						"short": "Unique record identifier",
						"type": "`$STRING`",
					},
				},
				"name": "search",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "besucherfrequenzen-im-offentlichen-raum",
											"kind": "query",
											"name": "dataset",
											"orig": "dataset",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "exclude",
											"orig": "exclude",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "refine",
											"orig": "refine",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "row",
											"orig": "row",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/records/1.0/search/",
								"parts": []any{
									"api",
									"records",
									"1.0",
									"search",
								},
								"select": map[string]any{
									"exist": []any{
										"dataset",
										"exclude",
										"format",
										"q",
										"refine",
										"row",
										"sort",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
