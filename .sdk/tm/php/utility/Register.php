<?php
declare(strict_types=1);

// VisitorFrequenciesLucerneCh SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

VisitorFrequenciesLucerneChUtility::setRegistrar(function (VisitorFrequenciesLucerneChUtility $u): void {
    $u->clean = [VisitorFrequenciesLucerneChClean::class, 'call'];
    $u->done = [VisitorFrequenciesLucerneChDone::class, 'call'];
    $u->make_error = [VisitorFrequenciesLucerneChMakeError::class, 'call'];
    $u->feature_add = [VisitorFrequenciesLucerneChFeatureAdd::class, 'call'];
    $u->feature_hook = [VisitorFrequenciesLucerneChFeatureHook::class, 'call'];
    $u->feature_init = [VisitorFrequenciesLucerneChFeatureInit::class, 'call'];
    $u->fetcher = [VisitorFrequenciesLucerneChFetcher::class, 'call'];
    $u->make_fetch_def = [VisitorFrequenciesLucerneChMakeFetchDef::class, 'call'];
    $u->make_context = [VisitorFrequenciesLucerneChMakeContext::class, 'call'];
    $u->make_options = [VisitorFrequenciesLucerneChMakeOptions::class, 'call'];
    $u->make_request = [VisitorFrequenciesLucerneChMakeRequest::class, 'call'];
    $u->make_response = [VisitorFrequenciesLucerneChMakeResponse::class, 'call'];
    $u->make_result = [VisitorFrequenciesLucerneChMakeResult::class, 'call'];
    $u->make_point = [VisitorFrequenciesLucerneChMakePoint::class, 'call'];
    $u->make_spec = [VisitorFrequenciesLucerneChMakeSpec::class, 'call'];
    $u->make_url = [VisitorFrequenciesLucerneChMakeUrl::class, 'call'];
    $u->param = [VisitorFrequenciesLucerneChParam::class, 'call'];
    $u->prepare_auth = [VisitorFrequenciesLucerneChPrepareAuth::class, 'call'];
    $u->prepare_body = [VisitorFrequenciesLucerneChPrepareBody::class, 'call'];
    $u->prepare_headers = [VisitorFrequenciesLucerneChPrepareHeaders::class, 'call'];
    $u->prepare_method = [VisitorFrequenciesLucerneChPrepareMethod::class, 'call'];
    $u->prepare_params = [VisitorFrequenciesLucerneChPrepareParams::class, 'call'];
    $u->prepare_path = [VisitorFrequenciesLucerneChPreparePath::class, 'call'];
    $u->prepare_query = [VisitorFrequenciesLucerneChPrepareQuery::class, 'call'];
    $u->result_basic = [VisitorFrequenciesLucerneChResultBasic::class, 'call'];
    $u->result_body = [VisitorFrequenciesLucerneChResultBody::class, 'call'];
    $u->result_headers = [VisitorFrequenciesLucerneChResultHeaders::class, 'call'];
    $u->transform_request = [VisitorFrequenciesLucerneChTransformRequest::class, 'call'];
    $u->transform_response = [VisitorFrequenciesLucerneChTransformResponse::class, 'call'];
});
