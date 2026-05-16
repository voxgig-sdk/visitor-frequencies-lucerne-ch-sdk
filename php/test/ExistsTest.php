<?php
declare(strict_types=1);

// VisitorFrequenciesLucerneCh SDK exists test

require_once __DIR__ . '/../visitorfrequencieslucernech_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = VisitorFrequenciesLucerneChSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
