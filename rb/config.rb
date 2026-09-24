# VisitorFrequenciesLucerneCh SDK configuration

module VisitorFrequenciesLucerneChConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "VisitorFrequenciesLucerneCh",
        "slug" => "visitor-frequencies-lucerne-ch",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://data.stadtluzern.ch",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "search" => {},
        },
      },
      "entity" => {
        "search" => {
          "fields" => [
            {
              "name" => "datasetid",
              "title" => "Datasetid",
              "type" => "`$STRING`",
              "short" => "Dataset identifier",
            },
            {
              "name" => "fields",
              "title" => "Fields",
              "type" => "`$OBJECT`",
              "short" => "Record data fields",
            },
            {
              "name" => "geometry",
              "title" => "Geometry",
              "type" => "`$OBJECT`",
              "short" => "GeoJSON geometry object",
            },
            {
              "name" => "record_timestamp",
              "title" => "Record Timestamp",
              "type" => "`$STRING`",
              "short" => "Record creation timestamp",
              "format" => "date-time",
            },
            {
              "name" => "recordid",
              "title" => "Recordid",
              "type" => "`$STRING`",
              "short" => "Unique record identifier",
            },
          ],
          "name" => "search",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/records/1.0/search/",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "records",
                    },
                    {
                      "lit" => "1.0",
                    },
                    {
                      "lit" => "search",
                    },
                  ],
                  "parts" => [
                    "api",
                    "records",
                    "1.0",
                    "search",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "dataset",
                        "orig" => "dataset",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => "besucherfrequenzen-im-offentlichen-raum",
                      },
                      {
                        "name" => "exclude",
                        "orig" => "exclude",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "json",
                      },
                      {
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "refine",
                        "orig" => "refine",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "row",
                        "orig" => "row",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 10,
                      },
                      {
                        "name" => "sort",
                        "orig" => "sort",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "start",
                        "orig" => "start",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 0,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "dataset",
                      "exclude",
                      "format",
                      "q",
                      "refine",
                      "row",
                      "sort",
                      "start",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    VisitorFrequenciesLucerneChFeatures.make_feature(name)
  end
end
