package core

type VisitorFrequenciesLucerneChError struct {
	IsVisitorFrequenciesLucerneChError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewVisitorFrequenciesLucerneChError(code string, msg string, ctx *Context) *VisitorFrequenciesLucerneChError {
	return &VisitorFrequenciesLucerneChError{
		IsVisitorFrequenciesLucerneChError: true,
		Sdk:              "VisitorFrequenciesLucerneCh",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *VisitorFrequenciesLucerneChError) Error() string {
	return e.Msg
}
