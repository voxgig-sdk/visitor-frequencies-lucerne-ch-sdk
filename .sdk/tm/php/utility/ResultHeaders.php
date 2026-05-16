<?php
declare(strict_types=1);

// VisitorFrequenciesLucerneCh SDK utility: result_headers

class VisitorFrequenciesLucerneChResultHeaders
{
    public static function call(VisitorFrequenciesLucerneChContext $ctx): ?VisitorFrequenciesLucerneChResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
