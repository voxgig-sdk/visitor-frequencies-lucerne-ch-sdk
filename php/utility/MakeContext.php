<?php
declare(strict_types=1);

// VisitorFrequenciesLucerneCh SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class VisitorFrequenciesLucerneChMakeContext
{
    public static function call(array $ctxmap, ?VisitorFrequenciesLucerneChContext $basectx): VisitorFrequenciesLucerneChContext
    {
        return new VisitorFrequenciesLucerneChContext($ctxmap, $basectx);
    }
}
