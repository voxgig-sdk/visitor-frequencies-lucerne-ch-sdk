

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { VisitorFrequenciesLucerneChSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('SearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VISITOR_FREQUENCIES_LUCERNE_CH_TEST_LIVE=TRUE.
  afterEach(liveDelay('VISITOR_FREQUENCIES_LUCERNE_CH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VisitorFrequenciesLucerneChSDK.test()
    const ent = testsdk.Search()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VISITOR_FREQUENCIES_LUCERNE_CH_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"datasetid","req":false,"short":"Dataset identifier","type":"`$STRING`","index$":0},{"active":true,"name":"fields","req":false,"short":"Record data fields","type":"`$OBJECT`","index$":1},{"active":true,"name":"geometry","req":false,"short":"GeoJSON geometry object","type":"`$OBJECT`","index$":2},{"active":true,"format":"date-time","name":"record_timestamp","req":false,"short":"Record creation timestamp","type":"`$STRING`","index$":3},{"active":true,"name":"recordid","req":false,"short":"Unique record identifier","type":"`$STRING`","index$":4}],"name":"search","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"besucherfrequenzen-im-offentlichen-raum","kind":"query","name":"dataset","orig":"dataset","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"exclude","orig":"exclude","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"json","kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"q","orig":"q","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"refine","orig":"refine","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"example":10,"kind":"query","name":"row","orig":"row","reqd":false,"type":"`$INTEGER`","index$":5},{"active":true,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"example":0,"kind":"query","name":"start","orig":"start","reqd":false,"type":"`$INTEGER`","index$":7}]},"contract":{"id":"GET /api/records/1.0/search/","json":"{\"operationId\":\"getVisitorFrequencies\",\"parameters\":[{\"description\":\"Dataset identifier for visitor frequencies\",\"in\":\"query\",\"name\":\"dataset\",\"required\":true,\"schema\":{\"default\":\"besucherfrequenzen-im-offentlichen-raum\",\"type\":\"string\"}},{\"description\":\"Number of records to return\",\"in\":\"query\",\"name\":\"rows\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":10000,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Starting record number for pagination\",\"in\":\"query\",\"name\":\"start\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"Sort field and direction\",\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Full-text search query\",\"in\":\"query\",\"name\":\"q\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Refine results by field values\",\"in\":\"query\",\"name\":\"refine\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Exclude results by field values\",\"in\":\"query\",\"name\":\"exclude\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Response format\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"csv\",\"xml\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"nhits\":{\"description\":\"Total number of records available\",\"type\":\"integer\"},\"parameters\":{\"description\":\"Query parameters used for the request\",\"properties\":{\"dataset\":{\"type\":\"string\"},\"format\":{\"type\":\"string\"},\"rows\":{\"type\":\"integer\"},\"start\":{\"type\":\"integer\"}},\"type\":\"object\"},\"records\":{\"description\":\"Array of visitor frequency records\",\"items\":{\"properties\":{\"datasetid\":{\"description\":\"Dataset identifier\",\"type\":\"string\"},\"fields\":{\"description\":\"Record data fields\",\"properties\":{\"frequency\":{\"description\":\"Visitor count\",\"type\":\"integer\"},\"geopoint\":{\"description\":\"Geographic coordinates [lat, lon]\",\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"location\":{\"description\":\"Location name in Lucerne\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp of the measurement\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},\"geometry\":{\"description\":\"GeoJSON geometry object\",\"type\":\"object\"},\"record_timestamp\":{\"description\":\"Record creation timestamp\",\"format\":\"date-time\",\"type\":\"string\"},\"recordid\":{\"description\":\"Unique record identifier\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with visitor frequency data\"},\"400\":{\"description\":\"Bad request - Invalid parameters\"},\"404\":{\"description\":\"Dataset not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/records/1.0/search/","segments":[{"lit":"api"},{"lit":"records"},{"lit":"1.0"},{"lit":"search"}],"select":{"exist":["dataset","exclude","format","q","refine","row","sort","start"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"search","name__orig":"search","Name":"Search","name_":"search","name-":"search","NAME":"SEARCH","index$":0}, {"active":true,"entity":"search","key$":"BasicSearchFlow","kind":"basic","name":"BasicSearchFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"search_ref01"}}],"index$":0}]}, 'Search')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let search_ref01_data = Object.values(setup.data.existing.search)[0] as any

    // LIST
    const search_ref01_ent = client.Search()
    const search_ref01_match: any = {}

    const search_ref01_list = (await search_ref01_ent.list(search_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/search/SearchTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = VisitorFrequenciesLucerneChSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['search01','search02','search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VISITOR_FREQUENCIES_LUCERNE_CH_TEST_SEARCH_ENTID': idmap,
    'VISITOR_FREQUENCIES_LUCERNE_CH_TEST_LIVE': 'FALSE',
    'VISITOR_FREQUENCIES_LUCERNE_CH_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['VISITOR_FREQUENCIES_LUCERNE_CH_TEST_SEARCH_ENTID']

  const live = 'TRUE' === env.VISITOR_FREQUENCIES_LUCERNE_CH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VISITOR_FREQUENCIES_LUCERNE_CH_TEST_SEARCH_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new VisitorFrequenciesLucerneChSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
