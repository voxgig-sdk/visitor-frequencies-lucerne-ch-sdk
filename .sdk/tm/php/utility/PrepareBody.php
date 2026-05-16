<?php
declare(strict_types=1);

// VisitorFrequenciesLucerneCh SDK utility: prepare_body

class VisitorFrequenciesLucerneChPrepareBody
{
    public static function call(VisitorFrequenciesLucerneChContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
