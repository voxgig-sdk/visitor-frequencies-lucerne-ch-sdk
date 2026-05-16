package voxgigvisitorfrequencieslucernechsdk

import (
	"github.com/voxgig-sdk/visitor-frequencies-lucerne-ch-sdk/core"
	"github.com/voxgig-sdk/visitor-frequencies-lucerne-ch-sdk/entity"
	"github.com/voxgig-sdk/visitor-frequencies-lucerne-ch-sdk/feature"
	_ "github.com/voxgig-sdk/visitor-frequencies-lucerne-ch-sdk/utility"
)

// Type aliases preserve external API.
type VisitorFrequenciesLucerneChSDK = core.VisitorFrequenciesLucerneChSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type VisitorFrequenciesLucerneChEntity = core.VisitorFrequenciesLucerneChEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type VisitorFrequenciesLucerneChError = core.VisitorFrequenciesLucerneChError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewSearchEntityFunc = func(client *core.VisitorFrequenciesLucerneChSDK, entopts map[string]any) core.VisitorFrequenciesLucerneChEntity {
		return entity.NewSearchEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewVisitorFrequenciesLucerneChSDK = core.NewVisitorFrequenciesLucerneChSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
