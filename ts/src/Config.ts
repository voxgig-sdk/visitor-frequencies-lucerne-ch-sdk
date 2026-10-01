
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'VisitorFrequenciesLucerneCh',
        slug: "visitor-frequencies-lucerne-ch",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://data.stadtluzern.ch",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        search: {
        },
  
    }
  }


  entity = {
    "search": {
      "fields": [
        {
          "name": "datasetid",
          "title": "Datasetid",
          "type": "`$STRING`",
          "short": "Dataset identifier"
        },
        {
          "name": "fields",
          "title": "Fields",
          "type": "`$OBJECT`",
          "short": "Record data fields"
        },
        {
          "name": "geometry",
          "title": "Geometry",
          "type": "`$OBJECT`",
          "short": "GeoJSON geometry object"
        },
        {
          "name": "record_timestamp",
          "title": "Record Timestamp",
          "type": "`$STRING`",
          "short": "Record creation timestamp",
          "format": "date-time"
        },
        {
          "name": "recordid",
          "title": "Recordid",
          "type": "`$STRING`",
          "short": "Unique record identifier"
        }
      ],
      "name": "search",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/records/1.0/search/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "records"
                },
                {
                  "lit": "1.0"
                },
                {
                  "lit": "search"
                }
              ],
              "parts": [
                "api",
                "records",
                "1.0",
                "search"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "dataset",
                    "orig": "dataset",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "besucherfrequenzen-im-offentlichen-raum"
                  },
                  {
                    "name": "exclude",
                    "orig": "exclude",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "json"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "refine",
                    "orig": "refine",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "row",
                    "orig": "rows",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 0
                  }
                ]
              },
              "select": {
                "exist": [
                  "dataset",
                  "exclude",
                  "format",
                  "q",
                  "refine",
                  "row",
                  "sort",
                  "start"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

