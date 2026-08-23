
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
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
     test:     {
      "options": {
        "active": false
      }
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
          "short": "Dataset identifier",
          "type": "`$STRING`"
        },
        {
          "name": "fields",
          "short": "Record data fields",
          "type": "`$OBJECT`"
        },
        {
          "name": "geometry",
          "short": "GeoJSON geometry object",
          "type": "`$OBJECT`"
        },
        {
          "name": "record_timestamp",
          "short": "Record creation timestamp",
          "type": "`$STRING`"
        },
        {
          "name": "recordid",
          "short": "Unique record identifier",
          "type": "`$STRING`"
        }
      ],
      "name": "search",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "besucherfrequenzen-im-offentlichen-raum",
                    "kind": "query",
                    "name": "dataset",
                    "orig": "dataset",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "exclude",
                    "orig": "exclude",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "json",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "refine",
                    "orig": "refine",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "row",
                    "orig": "row",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/records/1.0/search/",
              "parts": [
                "api",
                "records",
                "1.0",
                "search"
              ],
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
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
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
  config
}

