"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('SearchEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VISITOR_FREQUENCIES_LUCERNE_CH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VISITOR_FREQUENCIES_LUCERNE_CH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.VisitorFrequenciesLucerneChSDK.test();
        const ent = testsdk.Search();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VISITOR_FREQUENCIES_LUCERNE_CH_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'search.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "datasetid": { "a": true, "h": "Datasetid", "n": "datasetid", "r": false, "sh": "Dataset identifier", "t": "`$STRING`", "key$": "datasetid", "index$": 0 }, "fields": { "a": true, "h": "Fields", "n": "fields", "r": false, "sh": "Record data fields", "t": "`$OBJECT`", "key$": "fields", "index$": 1 }, "geometry": { "a": true, "h": "Geometry", "n": "geometry", "r": false, "sh": "GeoJSON geometry object", "t": "`$OBJECT`", "key$": "geometry", "index$": 2 }, "record_timestamp": { "a": true, "fo": "date-time", "h": "Record Timestamp", "n": "record_timestamp", "r": false, "sh": "Record creation timestamp", "t": "`$STRING`", "key$": "record_timestamp", "index$": 3 }, "recordid": { "a": true, "h": "Recordid", "n": "recordid", "r": false, "sh": "Unique record identifier", "t": "`$STRING`", "key$": "recordid", "index$": 4 } }, "name": "search", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/records/1.0/search/", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "besucherfrequenzen-im-offentlichen-raum", "k": "query", "n": "dataset", "or": "dataset", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "exclude", "or": "exclude", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "json", "k": "query", "n": "format", "or": "format", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "q", "or": "q", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "refine", "or": "refine", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "ex": 10, "k": "query", "n": "row", "or": "row", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "ex": 0, "k": "query", "n": "start", "or": "start", "r": false, "t": "`$INTEGER`", "index$": 7 }] }, "k": "http", "m": "GET", "o": "/api/records/1.0/search/", "q": { "exist": ["dataset", "exclude", "format", "q", "refine", "row", "sort", "start"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "records" }, { "lit": "1.0" }, { "lit": "search" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "search", "name__orig": "search", "Name": "Search", "name_": "search", "name-": "search", "NAME": "SEARCH", "index$": 0 }, { "active": true, "entity": "search", "key$": "BasicSearchFlow", "kind": "basic", "name": "BasicSearchFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "search_ref01" } }], "index$": 0 }] }, 'Search', { "GET /api/records/1.0/search/": { "protocol": "http", "operationId": "getVisitorFrequencies", "responses": { "200": { "description": "Successful response with visitor frequency data", "content": { "application/json": { "schema": { "type": "object", "properties": { "nhits": { "description": "Total number of records available", "key$": "nhits", "type": "integer" }, "parameters": { "description": "Query parameters used for the request", "key$": "parameters", "properties": { "dataset": { "type": "string" }, "format": { "type": "string" }, "rows": { "type": "integer" }, "start": { "type": "integer" } }, "type": "object" }, "records": { "description": "Array of visitor frequency records", "items": { "properties": { "datasetid": { "description": "Dataset identifier", "type": "string", "key$": "datasetid" }, "fields": { "description": "Record data fields", "properties": { "frequency": { "description": "Visitor count", "type": "integer" }, "geopoint": { "description": "Geographic coordinates [lat, lon]", "items": { "type": "number" }, "type": "array" }, "location": { "description": "Location name in Lucerne", "type": "string" }, "timestamp": { "description": "Timestamp of the measurement", "format": "date-time", "type": "string" } }, "type": "object", "key$": "fields" }, "geometry": { "description": "GeoJSON geometry object", "type": "object", "key$": "geometry" }, "record_timestamp": { "description": "Record creation timestamp", "format": "date-time", "type": "string", "key$": "record_timestamp" }, "recordid": { "description": "Unique record identifier", "type": "string", "key$": "recordid" } }, "type": "object", "index$": 0 }, "key$": "records", "type": "array" } } } } } }, "400": { "description": "Bad request - Invalid parameters" }, "404": { "description": "Dataset not found" }, "500": { "description": "Internal server error" } }, "parameters": [{ "name": "dataset", "in": "query", "description": "Dataset identifier for visitor frequencies", "required": true, "schema": { "type": "string", "default": "besucherfrequenzen-im-offentlichen-raum" }, "index$": 0 }, { "name": "rows", "in": "query", "description": "Number of records to return", "required": false, "schema": { "type": "integer", "default": 10, "minimum": 1, "maximum": 10000 }, "index$": 1 }, { "name": "start", "in": "query", "description": "Starting record number for pagination", "required": false, "schema": { "type": "integer", "default": 0, "minimum": 0 }, "index$": 2 }, { "name": "sort", "in": "query", "description": "Sort field and direction", "required": false, "schema": { "type": "string" }, "index$": 3 }, { "name": "q", "in": "query", "description": "Full-text search query", "required": false, "schema": { "type": "string" }, "index$": 4 }, { "name": "refine", "in": "query", "description": "Refine results by field values", "required": false, "schema": { "type": "string" }, "index$": 5 }, { "name": "exclude", "in": "query", "description": "Exclude results by field values", "required": false, "schema": { "type": "string" }, "index$": 6 }, { "name": "format", "in": "query", "description": "Response format", "required": false, "schema": { "type": "string", "enum": ["json", "csv", "xml"], "default": "json" }, "index$": 7 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let search_ref01_data = Object.values(setup.data.existing.search)[0];
        // LIST
        const search_ref01_ent = client.Search();
        const search_ref01_match = {};
        const search_ref01_list = (await search_ref01_ent.list(search_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/search/SearchTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.VisitorFrequenciesLucerneChSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['search01', 'search02', 'search03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VISITOR_FREQUENCIES_LUCERNE_CH_TEST_SEARCH_ENTID': idmap,
        'VISITOR_FREQUENCIES_LUCERNE_CH_TEST_LIVE': 'FALSE',
        'VISITOR_FREQUENCIES_LUCERNE_CH_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['VISITOR_FREQUENCIES_LUCERNE_CH_TEST_SEARCH_ENTID'];
    const live = 'TRUE' === env.VISITOR_FREQUENCIES_LUCERNE_CH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VISITOR_FREQUENCIES_LUCERNE_CH_TEST_SEARCH_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.VisitorFrequenciesLucerneChSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.VISITOR_FREQUENCIES_LUCERNE_CH_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=SearchEntity.test.js.map