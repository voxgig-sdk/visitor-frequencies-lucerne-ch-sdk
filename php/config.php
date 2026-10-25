<?php
declare(strict_types=1);

// VisitorFrequenciesLucerneCh SDK configuration

class VisitorFrequenciesLucerneChConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "VisitorFrequenciesLucerneCh",
                "slug" => "visitor-frequencies-lucerne-ch",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'now' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://data.stadtluzern.ch",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "search" => [],
                ],
            ],
            "entity" => [
        'search' => [
          'fields' => [
            [
              'name' => 'datasetid',
              'title' => 'Datasetid',
              'type' => '`$STRING`',
              'short' => 'Dataset identifier',
            ],
            [
              'name' => 'fields',
              'title' => 'Fields',
              'type' => '`$OBJECT`',
              'short' => 'Record data fields',
            ],
            [
              'name' => 'geometry',
              'title' => 'Geometry',
              'type' => '`$OBJECT`',
              'short' => 'GeoJSON geometry object',
            ],
            [
              'name' => 'record_timestamp',
              'title' => 'Record Timestamp',
              'type' => '`$STRING`',
              'short' => 'Record creation timestamp',
              'format' => 'date-time',
            ],
            [
              'name' => 'recordid',
              'title' => 'Recordid',
              'type' => '`$STRING`',
              'short' => 'Unique record identifier',
            ],
          ],
          'name' => 'search',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/records/1.0/search/',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'records',
                    ],
                    [
                      'lit' => '1.0',
                    ],
                    [
                      'lit' => 'search',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'records',
                    '1.0',
                    'search',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'dataset',
                        'orig' => 'dataset',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => 'besucherfrequenzen-im-offentlichen-raum',
                      ],
                      [
                        'name' => 'exclude',
                        'orig' => 'exclude',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'json',
                      ],
                      [
                        'name' => 'q',
                        'orig' => 'q',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'refine',
                        'orig' => 'refine',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'row',
                        'orig' => 'rows',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 10,
                      ],
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'start',
                        'orig' => 'start',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 0,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'dataset',
                    ],
                  ],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return VisitorFrequenciesLucerneChFeatures::make_feature($name);
    }
}
