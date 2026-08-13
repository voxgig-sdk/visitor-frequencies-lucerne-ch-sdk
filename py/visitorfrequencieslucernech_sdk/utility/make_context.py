# VisitorFrequenciesLucerneCh SDK utility: make_context

from visitorfrequencieslucernech_sdk.core.context import VisitorFrequenciesLucerneChContext


def make_context_util(ctxmap, basectx):
    return VisitorFrequenciesLucerneChContext(ctxmap, basectx)
