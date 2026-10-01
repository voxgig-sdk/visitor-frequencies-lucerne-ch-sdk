import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "search",
    "accessor": "Search",
    "op": "list",
    "method": "GET",
    "path": "/api/records/1.0/search/",
    "args": [],
    "select": {
      "dataset": "v1",
      "exclude": "v1",
      "format": "v1",
      "q": "v1",
      "refine": "v1",
      "row": "v1",
      "sort": "v1",
      "start": "v1"
    },
    "headers": [],
    "query": [
      "dataset",
      "rows",
      "start",
      "sort",
      "q",
      "refine",
      "exclude",
      "format"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "nhits": 1,
      "parameters": {
        "dataset": "x",
        "format": "x",
        "rows": 1,
        "start": 1
      },
      "records": [
        {
          "datasetid": "x",
          "fields": {
            "frequency": 1,
            "geopoint": [
              1
            ],
            "location": "x",
            "timestamp": "2026-01-01T00:00:00Z"
          },
          "geometry": {},
          "record_timestamp": "2026-01-01T00:00:00Z",
          "recordid": "x"
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
