<?php
declare(strict_types=1);

// VisitorFrequenciesLucerneCh SDK utility: prepare_method

class VisitorFrequenciesLucerneChPrepareMethod
{
    private const METHOD_MAP = [
        'create' => 'POST',
        'update' => 'PUT',
        'load' => 'GET',
        'list' => 'GET',
        'remove' => 'DELETE',
        'patch' => 'PATCH',
    ];

    public static function call(VisitorFrequenciesLucerneChContext $ctx): string
    {
        return self::METHOD_MAP[$ctx->op->name] ?? 'GET';
    }
}
