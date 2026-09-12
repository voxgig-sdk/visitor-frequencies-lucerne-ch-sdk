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
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
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
              "short" => "Dataset identifier",
              "type" => "`$STRING`",
            },
            {
              "name" => "fields",
              "short" => "Record data fields",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "geometry",
              "short" => "GeoJSON geometry object",
              "type" => "`$OBJECT`",
            },
            {
              "format" => "date-time",
              "name" => "record_timestamp",
              "short" => "Record creation timestamp",
              "type" => "`$STRING`",
            },
            {
              "name" => "recordid",
              "short" => "Unique record identifier",
              "type" => "`$STRING`",
            },
          ],
          "name" => "search",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "besucherfrequenzen-im-offentlichen-raum",
                        "kind" => "query",
                        "name" => "dataset",
                        "orig" => "dataset",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "exclude",
                        "orig" => "exclude",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "refine",
                        "orig" => "refine",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 10,
                        "kind" => "query",
                        "name" => "row",
                        "orig" => "row",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "sort",
                        "orig" => "sort",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 0,
                        "kind" => "query",
                        "name" => "start",
                        "orig" => "start",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
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
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "api",
                    "records",
                    "1.0",
                    "search",
                  ],
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
