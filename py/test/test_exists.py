# ProjectName SDK exists test

import pytest
from visitorfrequencieslucernech_sdk import VisitorFrequenciesLucerneChSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = VisitorFrequenciesLucerneChSDK.test(None, None)
        assert testsdk is not None
