<?php
declare(strict_types=1);

// VisitorFrequenciesLucerneCh SDK utility: feature_add

class VisitorFrequenciesLucerneChFeatureAdd
{
    public static function call(VisitorFrequenciesLucerneChContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
