# VisitorFrequenciesLucerneCh SDK

Live pedestrian and visitor counts from sensors in public spaces around the city of Lucerne, Switzerland

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Visitor Frequencies Lucerne (CH)

This SDK wraps the **Visitor Frequencies Lucerne** API, an open-data feed published by the [City of Lucerne](https://www.stadtluzern.ch/) (Stadt Luzern) as part of its open government data initiative at `data.stadtluzern.ch`. It surfaces near real-time foot-traffic measurements from sensors placed at public locations around the Swiss city.

What you get from the API:

- Visitor / pedestrian frequency readings from multiple sensor locations across Lucerne
- A simple `search` style query interface for retrieving the latest sensor data

Operational notes: the upstream endpoint expects an API key embedded in the request URL. CORS is enabled, and no explicit rate limits are published. Licence terms are not stated on the catalogue page — check the `data.stadtluzern.ch` portal for the applicable terms of use before redistributing the data.

## Try it

**TypeScript**
```bash
npm install visitor-frequencies-lucerne-ch
```

**Python**
```bash
pip install visitor-frequencies-lucerne-ch-sdk
```

**PHP**
```bash
composer require voxgig/visitor-frequencies-lucerne-ch-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/visitor-frequencies-lucerne-ch-sdk/go
```

**Ruby**
```bash
gem install visitor-frequencies-lucerne-ch-sdk
```

**Lua**
```bash
luarocks install visitor-frequencies-lucerne-ch-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { VisitorFrequenciesLucerneChSDK } from 'visitor-frequencies-lucerne-ch'

const client = new VisitorFrequenciesLucerneChSDK({})

// List all searchs
const searchs = await client.Search().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o visitor-frequencies-lucerne-ch-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "visitor-frequencies-lucerne-ch": {
      "command": "/abs/path/to/visitor-frequencies-lucerne-ch-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Search** | Query interface for retrieving live visitor / pedestrian frequency readings from the city's sensor network. | `/api/records/1.0/search/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from visitorfrequencieslucernech_sdk import VisitorFrequenciesLucerneChSDK

client = VisitorFrequenciesLucerneChSDK({})

# List all searchs
searchs, err = client.Search(None).list(None, None)
```

### PHP

```php
<?php
require_once 'visitorfrequencieslucernech_sdk.php';

$client = new VisitorFrequenciesLucerneChSDK([]);

// List all searchs
[$searchs, $err] = $client->Search(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/visitor-frequencies-lucerne-ch-sdk/go"

client := sdk.NewVisitorFrequenciesLucerneChSDK(map[string]any{})

// List all searchs
searchs, err := client.Search(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "VisitorFrequenciesLucerneCh_sdk"

client = VisitorFrequenciesLucerneChSDK.new({})

# List all searchs
searchs, err = client.Search(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("visitor-frequencies-lucerne-ch_sdk")

local client = sdk.new({})

-- List all searchs
local searchs, err = client:Search(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = VisitorFrequenciesLucerneChSDK.test()
const result = await client.Search().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = VisitorFrequenciesLucerneChSDK.test(None, None)
result, err = client.Search(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = VisitorFrequenciesLucerneChSDK::test(null, null);
[$result, $err] = $client->Search(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Search(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = VisitorFrequenciesLucerneChSDK.test(nil, nil)
result, err = client.Search(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Search(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Visitor Frequencies Lucerne (CH)

- Upstream: [https://data.stadtluzern.ch](https://data.stadtluzern.ch)
- API docs: [https://freepublicapis.com/visitor-frequencies-lucerne-ch](https://freepublicapis.com/visitor-frequencies-lucerne-ch)

---

Generated from the Visitor Frequencies Lucerne (CH) OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
