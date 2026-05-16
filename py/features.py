# VisitorFrequenciesLucerneCh SDK feature factory

from feature.base_feature import VisitorFrequenciesLucerneChBaseFeature
from feature.test_feature import VisitorFrequenciesLucerneChTestFeature


def _make_feature(name):
    features = {
        "base": lambda: VisitorFrequenciesLucerneChBaseFeature(),
        "test": lambda: VisitorFrequenciesLucerneChTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
