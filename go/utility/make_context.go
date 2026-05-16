package utility

import "github.com/voxgig-sdk/visitor-frequencies-lucerne-ch-sdk/core"

func makeContextUtil(ctxmap map[string]any, basectx *core.Context) *core.Context {
	return core.NewContext(ctxmap, basectx)
}
