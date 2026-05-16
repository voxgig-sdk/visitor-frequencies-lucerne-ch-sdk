<?php
declare(strict_types=1);

// VisitorFrequenciesLucerneCh SDK utility: result_body

class VisitorFrequenciesLucerneChResultBody
{
    public static function call(VisitorFrequenciesLucerneChContext $ctx): ?VisitorFrequenciesLucerneChResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
