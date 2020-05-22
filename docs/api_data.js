define({ "api": [
  {
    "name": "checkOTAUsed",
    "group": "Accounts",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "checkOTAUsed",
    "version": "1.1.1",
    "description": "<p>Check whether the OTA address is used. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": "<p>The OTA address.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"checkOTAUsed\",\"params\":{\"chainType\":\"WAN\", \"image\":\"xxxxxxx\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.checkOTAUsed(\"WAN\", \"xxxxxxx\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.checkOTAUsed(\"WAN\", \"xxxxxxx\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Accounts"
  },
  {
    "name": "getBalance",
    "group": "Accounts",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getBalance",
    "version": "1.1.1",
    "description": "<p>Get balance for a single address. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code> and <code>'ETH'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>The account being queried.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getBalance\",\"params\":{\"address\": \"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\",\"chainType\":\"WAN\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getBalance('WAN', '0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c', (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getBalance('WAN', '0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c');\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"10000000000000000000000\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Accounts"
  },
  {
    "name": "getMultiBalances",
    "group": "Accounts",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getMultiBalances",
    "version": "1.1.1",
    "description": "<p>Get balance for multiple Addresses in a single call. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code> and <code>'ETH'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "addressArray",
            "description": "<p>An array of addresses being queried.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getMultiBalances\",\"params\":{\"address\": [\"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\",\"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2d\"],\"chainType\":\"WAN\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getMultiBalances('WAN', [\"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\",\"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2d\"], (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getMultiBalances('WAN', [\"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\",\"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2d\"]);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": " {\n  \"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\": \"10000000000000000000000\",\n  \"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2d\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Accounts"
  },
  {
    "name": "getNonce",
    "group": "Accounts",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getNonce",
    "version": "1.1.1",
    "description": "<p>Get the nonce of an account. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code> and <code>'ETH'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>The account being queried.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getNonce\",\"params\":{\"address\": \"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\",\"chainType\":\"WAN\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getNonce(\"WAN\", \"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getNonce(\"WAN\", \"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"0x0\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Accounts"
  },
  {
    "name": "getNonceIncludePending",
    "group": "Accounts",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getNonceIncludePending",
    "version": "1.1.1",
    "description": "<p>Get the pending nonce of an account. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code> and <code>'ETH'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>The account being queried.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getNonceIncludePending\",\"params\":{\"address\": \"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\",\"chainType\":\"WAN\"}, \"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getNonceIncludePending(\"WAN\", \"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getNonceIncludePending(\"WAN\", \"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"0x0\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Accounts"
  },
  {
    "name": "getUTXO",
    "group": "Accounts",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getUTXO",
    "version": "1.1.1",
    "description": "<p>Get the detail BTC UTXO info for BTC. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain name that you want to search, should be <code>&quot;BTC&quot;</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "minconf",
            "description": "<p>The min confirm number of BTC UTXO, usually 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "maxconf",
            "description": "<p>The max confirm number of BTC UTXO, usually the confirmed blocks you want to wait for the UTXO.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "address",
            "description": "<p>The address array that you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getUTXO\",\"params\":{\"chainType\":\"BTC\", \"minconf\":0, \"maxconf\":100, \"address\":[\"n35aUMToGvxJhYm7QVMtyBL83PTDKzPC1R\"]},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getUTXO('BTC', 0, 100, [\"n35aUMToGvxJhYm7QVMtyBL83PTDKzPC1R\"], (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getUTXO('BTC', 0, 100, [\"n35aUMToGvxJhYm7QVMtyBL83PTDKzPC1R\"]);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "  [{\n     \"txid\": \"302588f81dc5ad7972d3affc781adc6eb326227a6feda53a990e9b98b715edcc\",\n     \"vout\": 0,\n     \"address\": \"n35aUMToGvxJhYm7QVMtyBL83PTDKzPC1R\",\n     \"account\": \"\",\n     \"scriptPubKey\": \"76a914ec8626d9aa394317659a45cfcbd1f0762126c5e888ac\",\n     \"amount\": 0.079,\n     \"confirmations\": 16,\n     \"spendable\": false,\n     \"solvable\": false,\n     \"safe\": true,\n     \"value\": 0.079\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Accounts"
  },
  {
    "name": "importAddress",
    "group": "Accounts",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "importAddress",
    "version": "1.1.1",
    "description": "<p>Send a <code>'import address'</code> command to BTC. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain name that you want to search, should be <code>&quot;BTC&quot;</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>The BTC account address you want to import to the node to scan transactions.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"importAddress\",\"params\":{\"chainType\":\"BTC\",\"address\":\"mmmmmsdfasdjflaksdfasdf\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.importAddress(\"BTC\", \"mmmmmsdfasdjflaksdfasdf\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.importAddress(\"BTC\", \"mmmmmsdfasdjflaksdfasdf\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"success\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Accounts"
  },
  {
    "name": "getBlockByHash",
    "group": "Blocks",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getBlockByHash",
    "version": "1.1.1",
    "description": "<p>Get the block information about a block by block hash on certain chain. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain name that you want to search, should be <code>&quot;WAN&quot;</code> or <code>&quot;ETH&quot;</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "blockHash",
            "description": "<p>The blockHash you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getBlockByHash\",\"params\":{\"chainType\":\"WAN\", \"blockHash\":\"0xeb3b437d765d4da9210481c2dd612fa9d0c51e0e83120ee7f573ed9d6296e9a8\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getBlockByHash(\"WAN\", \"0xeb3b437d765d4da9210481c2dd612fa9d0c51e0e83120ee7f573ed9d6296e9a8\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getBlockByHash(\"WAN\", \"0xeb3b437d765d4da9210481c2dd612fa9d0c51e0e83120ee7f573ed9d6296e9a8\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n    \"size\": 727,\n    \"timestamp\": 1522575814,\n    \"transactions\": [\"0x4dcfc82728b5a9307f249ac095c8e6fcc436db4f85a094a0c5a457255c20f80f\"],\n    \"uncles\": [],\n    \"difficulty\": \"5812826\",\n    \"extraData\": \"0xd783010004846765746887676f312e392e32856c696e75780000000000000000de43ad982c5ccfa922f701d9ac91d47ceaaeeea7e1cc092b1ff6c3c5dcce70a07cf5a79886ff0cc02254ec0de51f1a6881a69a38cd2866a5c0dddbe0dd0f2ce301\",\n    \"gasLimit\": 4712388,\n    \"gasUsed\": 21000,\n    \"hash\": \"0xeb3b437d765d4da9210481c2dd612fa9d0c51e0e83120ee7f573ed9d6296e9a8\",\n    \"logsBloom\": \"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\",\n    \"miner\": \"0x321a210c019790308abb948360d144e7e00b7dc5\",\n    \"mixHash\": \"0x691299af763a758e94200545b8a5fe9d4f2cedbbfea031a1bbc540cbde4631d1\",\n    \"nonce\": \"0x2c8dd099eda5b188\",\n    \"number\": 670731,\n    \"parentHash\": \"0xd907820c7a46ba668a7e5bda8c6a23ec250877b853a85d8343688337f967b2d9\",\n    \"receiptsRoot\": \"0x056b23fbba480696b65fe5a59b8f2148a1299103c4f57df839233af2cf4ca2d2\",\n    \"sha3Uncles\": \"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347\",\n    \"stateRoot\": \"0xafbfae425a7fed863662f88d64819132079b43ac4d85988ab6cce7f9342348af\",\n    \"totalDifficulty\": \"3610551057115\",\n    \"transactionsRoot\": \"0x96fc902544191c38f1c9a2725ea2ae29e34246fb4e95728f3e72added7c9574b\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Blocks"
  },
  {
    "name": "getBlockByNumber",
    "group": "Blocks",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getBlockByNumber",
    "version": "1.1.1",
    "description": "<p>Get the block information about a block by block number on certain chain. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain name that you want to search, should be <code>&quot;WAN&quot;</code> or <code>&quot;ETH&quot;</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "blockNumber",
            "description": "<p>The blockNumber you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getBlockByNumber\",\"params\":{\"chainType\":\"WAN\", \"blockNumber\":\"670731\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getBlockByNumber(\"WAN\", \"670731\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getBlockByNumber(\"WAN\", \"670731\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n    \"size\": 727,\n    \"timestamp\": 1522575814,\n    \"transactions\": [\"0x4dcfc82728b5a9307f249ac095c8e6fcc436db4f85a094a0c5a457255c20f80f\"],\n    \"uncles\": [],\n    \"difficulty\": \"5812826\",\n    \"extraData\": \"0xd783010004846765746887676f312e392e32856c696e75780000000000000000de43ad982c5ccfa922f701d9ac91d47ceaaeeea7e1cc092b1ff6c3c5dcce70a07cf5a79886ff0cc02254ec0de51f1a6881a69a38cd2866a5c0dddbe0dd0f2ce301\",\n    \"gasLimit\": 4712388,\n    \"gasUsed\": 21000,\n    \"hash\": \"0xeb3b437d765d4da9210481c2dd612fa9d0c51e0e83120ee7f573ed9d6296e9a8\",\n    \"logsBloom\": \"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\",\n    \"miner\": \"0x321a210c019790308abb948360d144e7e00b7dc5\",\n    \"mixHash\": \"0x691299af763a758e94200545b8a5fe9d4f2cedbbfea031a1bbc540cbde4631d1\",\n    \"nonce\": \"0x2c8dd099eda5b188\",\n    \"number\": 670731,\n    \"parentHash\": \"0xd907820c7a46ba668a7e5bda8c6a23ec250877b853a85d8343688337f967b2d9\",\n    \"receiptsRoot\": \"0x056b23fbba480696b65fe5a59b8f2148a1299103c4f57df839233af2cf4ca2d2\",\n    \"sha3Uncles\": \"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347\",\n    \"stateRoot\": \"0xafbfae425a7fed863662f88d64819132079b43ac4d85988ab6cce7f9342348af\",\n    \"totalDifficulty\": \"3610551057115\",\n    \"transactionsRoot\": \"0x96fc902544191c38f1c9a2725ea2ae29e34246fb4e95728f3e72added7c9574b\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Blocks"
  },
  {
    "name": "getBlockNumber",
    "group": "Blocks",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getBlockNumber",
    "version": "1.1.1",
    "description": "<p>Get the current latest block number. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain name that you want to search, should be <code>&quot;WAN&quot;</code> or <code>&quot;ETH&quot;</code> or <code>&quot;BTC&quot;</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getBlockNumber\",\"params\":{\"chainType\":\"WAN\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getBlockNumber(\"WAN\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getBlockNumber(\"WAN\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"119858\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Blocks"
  },
  {
    "name": "getBlockTransactionCount",
    "group": "Blocks",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getBlockTransactionCount",
    "version": "1.1.1",
    "description": "<p>Get the number of transaction in a given block by block number or block hash on certain chain. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain name that you want to search, should be <code>&quot;WAN&quot;</code> or <code>&quot;ETH&quot;</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "blockHashOrBlockNumber",
            "description": "<p>The blockHash or the blockNumber you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getBlockTransactionCount\",\"params\":{\"chainType\":\"WAN\", \"blockNumber\":\"670731\"},\"id\":1}\nor\n{\"jsonrpc\":\"2.0\",\"method\":\"getBlockTransactionCount\",\"params\":{\"chainType\":\"WAN\", \"blockHash\":\"0xeb3b437d765d4da9210481c2dd612fa9d0c51e0e83120ee7f573ed9d6296e9a8\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getBlockTransactionCount(\"WAN\", \"0xeb3b437d765d4da9210481c2dd612fa9d0c51e0e83120ee7f573ed9d6296e9a8\", (err, result) => {\n// apiTest.getBlockTransactionCount(\"WAN\", \"670731\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getBlockTransactionCount(\"WAN\", \"0xeb3b437d765d4da9210481c2dd612fa9d0c51e0e83120ee7f573ed9d6296e9a8\");\n// let result = await apiTest.getBlockTransactionCount(\"WAN\", \"670731\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "1",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Blocks"
  },
  {
    "name": "callScFunc",
    "group": "Contracts",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "callScFunc",
    "version": "1.1.1",
    "description": "<p>Call the specific public function of one contract on certain chain. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code> and <code>'ETH'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "scAddr",
            "description": "<p>The token contract address for the specified token.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the specific contract public function.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "args",
            "description": "<p>The parameters array a of the specific contract public function.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "abi",
            "description": "<p>The abi of the specific contract.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"callScFunc\",\"params\":{\"chainType\": \"WAN\", \"scAddr\": \"0x55ba61f4da3166487a804bccde7ee4015f609f45\", \"name\": \"getPriAddress\", \"args\": [], \"abi\": [/The Abi of the contracts/]},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.callScFunc(\"WAN\", \"0x55ba61f4da3166487a804bccde7ee4015f609f45\", \"getPriAddress\", [], [/The Abi of the contracts/]), (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.callScFunc(\"WAN\", \"0x55ba61f4da3166487a804bccde7ee4015f609f45\", \"getPriAddress\", [], [/The Abi of the contracts/]);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"0x8cc420e422b3fa1c416a14fc600b3354e3312524\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Contracts"
  },
  {
    "name": "getScMap",
    "group": "Contracts",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getScMap",
    "version": "1.1.1",
    "description": "<p>Get the specific public map value of one contract on certain chain. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code> and <code>'ETH'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "scAddr",
            "description": "<p>The token contract address for the specified token.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the specific contract public map.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "key",
            "description": "<p>The key of parameter of the specific contract public map.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "abi",
            "description": "<p>The abi of the specific contract.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getScMap\",\"params\":{\"chainType\": \"WAN\", \"scAddr\": \"0x55ba61f4da3166487a804bccde7ee4015f609f45\", \"name\": \"mapAddr\", \"key\": \"\", \"abi\": [/The Abi of the contracts/]},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getScMap(\"WAN\", \"0x55ba61f4da3166487a804bccde7ee4015f609f45\", \"mapAddr\", \"key\", [/The Abi of the contracts/], (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getScMap(\"WAN\", \"0x55ba61f4da3166487a804bccde7ee4015f609f45\", \"mapAddr\", \"key\", [/The Abi of the contracts/]);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"0x2ecb855170c941f239ffe3495f3e07cceabd8421\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Contracts"
  },
  {
    "name": "getScOwner",
    "group": "Contracts",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getScOwner",
    "version": "1.1.1",
    "description": "<p>Get the owner of the specified contract from the specified chain. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code> and <code>'ETH'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "scAddr",
            "description": "<p>The token contract address for the specified token.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getScOwner\",\"params\":{\"chainType\":\"WAN\", \"scAddr\": \"0x59adc38f0b3f64fb542b50e3e955e7a8c1eb3e3b\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getScOwner('WAN', '0x59adc38f0b3f64fb542b50e3e955e7a8c1eb3e3b', (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getScOwner('WAN', '0x59adc38f0b3f64fb542b50e3e955e7a8c1eb3e3b');\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"0xbb8703ca8226f411811dd16a3f1a2c1b3f71825d\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Contracts"
  },
  {
    "name": "getScVar",
    "group": "Contracts",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getScVar",
    "version": "1.1.1",
    "description": "<p>Get the specific public parameter value of one contract on certain chain. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code> and <code>'ETH'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "scAddr",
            "description": "<p>The token contract address for the specified token.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the specific contract parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "abi",
            "description": "<p>The abi of the specific contract.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getScVar\",\"params\":{\"chainType\": \"WAN\", \"scAddr\": \"0x55ba61f4da3166487a804bccde7ee4015f609f45\", \"name\": \"addr\", \"abi\": [/The Abi of the contracts/]},\"id\":1}",
          "type": "string"
        },
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTransByAddress\",\"params\":{\"chainType\":\"WAN\", \"address\":\"0xbb9003ca8226f411811dd16a3f1a2c1b3f71825d\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getScVar(\"WAN\", \"0x55ba61f4da3166487a804bccde7ee4015f609f45\", \"addr\", [/The Abi of the contracts/], (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getScVar(\"WAN\", \"0x55ba61f4da3166487a804bccde7ee4015f609f45\", \"addr\", [/The Abi of the contracts/]);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"0x2ecb855170c941f239ffe3495f3e07cceabd8421\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Contracts"
  },
  {
    "name": "getChainInfo",
    "group": "CrossChain",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getChainInfo",
    "version": "1.1.1",
    "description": "<p>Returns an object containing various details about the blockchain. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'EOS'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getChainInfo\",\"params\":{\"chainType\":\"EOS\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getChainInfo(\"EOS\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await getChainInfo(\"EOS\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n   server_version: 'aa60b9ca',\n   chain_id: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473',\n   head_block_num: 84031197,\n   last_irreversible_block_num: 84030870,\n   last_irreversible_block_id: '05023596ebe1b775a39a0ab380a0fd95bf435fbe9eccbf2b3e38c44a0cdc6a0d',\n   head_block_id: '050236dd683c4f98c9f5965910bf941d67b8fe6469a149114a3f0053779461da',\n   head_block_time: '2020-04-02T11:35:25.000',\n   head_block_producer: 'five.cartel',\n   virtual_block_cpu_limit: 500000000,\n   virtual_block_net_limit: 524288000,\n   block_cpu_limit: 499990,\n   block_net_limit: 524288,\n   server_version_string: 'v2.0.2',\n   fork_db_head_block_num: 84031197,\n   fork_db_head_block_id: '050236dd683c4f98c9f5965910bf941d67b8fe6469a149114a3f0053779461da',\n   server_full_version_string: 'v2.0.2-aa60b9caf9b7e2bd2411bb199c0c1d9fd8f085d5'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "CrossChain"
  },
  {
    "name": "getCoin2WanRatio",
    "group": "CrossChain",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getCoin2WanRatio",
    "version": "1.1.1",
    "description": "<p>Coin exchange ratio,such as 1 ETH to 880 WANs in ICO period, the precision is 10000, the ratio is 880*precision = 880,0000. The ratio would be changed according to the market value ratio periodically. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "crossChain",
            "description": "<p>The cross-chain native coin name that you want to search, should be <code>&quot;ETH&quot;</code> or <code>&quot;BTC&quot;</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getCoin2WanRatio\",\"params\":{\"crossChain\":\"ETH\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getCoin2WanRatio('ETH', (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getCoin2WanRatio('ETH');\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"20\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "CrossChain"
  },
  {
    "name": "getRegTokens",
    "group": "CrossChain",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getRegTokens",
    "version": "1.1.1",
    "description": "<p>Get the information of tokens which are supported for cross-chain ability. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "crossChain",
            "description": "<p>The cross-chain name that you want to search, should be <code>&quot;ETH&quot;</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getRegTokens\",\"params\":{\"crossChain\":\"ETH\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getRegTokens(\"ETH\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getRegTokens(\"ETH\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[\n  {\n    \"tokenOrigAddr\": \"0x54950025d1854808b09277fe082b54682b11a50b\",\n    \"tokenWanAddr\": \"0x67f3de547c7f3bc77095686a9e7fe49397e59cdf\",\n    \"ratio\": \"15000000\",\n    \"minDeposit\": \"10000000000000000000\",\n    \"origHtlc\": \"0x149f1650f0ff097bca88118b83ed58fb1cfc68ef\",\n    \"wanHtlc\": \"0x27feb1785f61504619a105faa00f57c49cc4d9c3\",\n    \"withdrawDelayTime\": \"259200\",\n    \"tokenHash\": \"0xe6bb4913c8cfb38d44a01360bb7874c58812e14b9154543bb67783e611e0475b\",\n    \"name\": \"Wanchain MKR Crosschain Token\",\n    \"symbol\": \"MKR\",\n    \"decimals\": \"18\",\n    \"iconData\": \"/9j/4AAQ...\",\n    \"iconType\": \"jpg\"\n  },\n  {\n    \"tokenOrigAddr\": \"0xdbf193627ee704d38495c2f5eb3afc3512eafa4c\",\n    \"tokenWanAddr\": \"0xda16e66820a3c64c34f2b35da3f5e1d1742274cb\",\n    \"ratio\": \"20000\",\n    \"minDeposit\": \"10000000000000000000\",\n    \"origHtlc\": \"0x149f1650f0ff097bca88118b83ed58fb1cfc68ef\",\n    \"wanHtlc\": \"0x27feb1785f61504619a105faa00f57c49cc4d9c3\",\n    \"withdrawDelayTime\": \"259200\",\n    \"tokenHash\": \"0x0cfee48dd8c8e32ad342c0f4ee723df9c2818d02734e28897ad0295bb458d4bc\",\n    \"name\": \"Wanchain SAI Crosschain Token\",\n    \"symbol\": \"SAI\",\n    \"decimals\": \"18\",\n    \"iconData\": \"/9j/4AAQ...\",\n    \"iconType\": \"jpg\"\n  },\n ... ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "CrossChain"
  },
  {
    "name": "getStoremanGroups",
    "group": "CrossChain",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getStoremanGroups",
    "version": "1.1.1",
    "description": "<p>Get the detailed cross-chain storemanGroup info for one cross-chain native coin, like the quota, etc. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "crossChain",
            "description": "<p>The cross-chain name that you want to search, should be <code>&quot;ETH&quot;</code> or <code>&quot;BTC&quot;</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getStoremanGroups\",\"params\":{\"crossChain\":\"ETH\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getStoremanGroups('ETH', (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getStoremanGroups('ETH');\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "  [{\n     \"wanAddress\": \"0x06daa9379cbe241a84a65b217a11b38fe3b4b063\",\n     \"ethAddress\": \"0x41623962c5d44565de623d53eb677e0f300467d2\",\n     \"deposit\": \"128000000000000000000000\",\n     \"txFeeRatio\": \"10\",\n     \"quota\": \"400000000000000000000\",\n     \"inboundQuota\": \"290134198386719012352\",\n     \"outboundQuota\": \"85607176846820246993\",\n     \"receivable\": \"80000000000000000\",\n     \"payable\": \"24178624766460740655\",\n     \"debt\": \"109785801613280987648\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "CrossChain"
  },
  {
    "name": "getToken2WanRatio",
    "group": "CrossChain",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getToken2WanRatio",
    "version": "1.1.1",
    "description": "<p>Token exchange ratio,such as 1 token to 880 WANs, the precision is 10000, the ratio is 880*precision = 880,0000. The ratio would be changed accoring to the market value ratio periodically. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "crossChain",
            "description": "<p>The cross-chain name that you want to search, should be <code>&quot;ETH&quot;</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tokenScAddr",
            "description": "<p>The token contract address for the specified token.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getToken2WanRatio\",\"params\":{\"crossChain\":\"ETH\", \"tokenScAddr\":\"0x00f58d6d585f84b2d7267940cede30ce2fe6eae8\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getToken2WanRatio(\"ETH\", \"0x00f58d6d585f84b2d7267940cede30ce2fe6eae8\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getToken2WanRatio(\"ETH\", \"0x00f58d6d585f84b2d7267940cede30ce2fe6eae8\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"3000\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "CrossChain"
  },
  {
    "name": "getTokenStoremanGroups",
    "group": "CrossChain",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTokenStoremanGroups",
    "version": "1.1.1",
    "description": "<p>Get the detail cross-chain storemanGroup info for one specific token contract, like the quota, etc. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "crossChain",
            "description": "<p>The cross-chain name that you want to search, should be <code>&quot;ETH&quot;</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tokenScAddr",
            "description": "<p>The token contract address for the specified token.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTokenStoremanGroups\",\"params\":{\"crossChain\":\"ETH\", \"tokenScAddr\":\"0x00f58d6d585f84b2d7267940cede30ce2fe6eae8\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getTokenStoremanGroups('ETH', '0x00f58d6d585f84b2d7267940cede30ce2fe6eae8', (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getTokenStoremanGroups('ETH', '0x00f58d6d585f84b2d7267940cede30ce2fe6eae8');\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[{\n   \"tokenOrigAddr\": \"0xdbf193627ee704d38495c2f5eb3afc3512eafa4c\",\n   \"smgWanAddr\": \"0x765854f97f7a3b6762240c329331a870b65edd96\",\n   \"smgOrigAddr\": \"0x38b6c9a1575c90ceabbfe31b204b6b3a3ce4b3d9\",\n   \"wanDeposit\": \"5000000000000000000000\",\n   \"quota\": \"10000000000000000000000\",\n   \"txFeeRatio\": \"1\",\n   \"inboundQuota\": \"9999500000000000000000\",\n   \"outboundQuota\": \"500000000000000000\",\n   \"receivable\": \"0\",\n   \"payable\": \"0\",\n   \"debt\": \"500000000000000000\"\n }]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "CrossChain"
  },
  {
    "name": "getAbi",
    "group": "EOS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getAbi",
    "version": "1.1.1",
    "description": "<p>Retrieves the ABI for a contract based on its account name. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'EOS'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "scAddr",
            "description": "<p>contract account name.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getAbi\",\"params\":{\"chainType\":\"EOS\",\"scAddr\":\"wanchainhtlc\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getAbi(\"EOS\", \"wanchainhtlc\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await getAbi(\"EOS\", \"wanchainhtlc\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "  { \"version\": \"eosio::abi/1.1\",\n\t\t\t  \"types\": [ { \"new_type_name\": \"time_t\", \"type\": \"uint32\" } ],\n\t\t\t  \"structs\":\n\t\t\t   [ { \"name\": \"asset_t\", \"base\": \"\", \"fields\": [\"Array\"] },\n\t\t\t     { \"name\": \"debt_t\", \"base\": \"\", \"fields\": [\"Array\"] },\n\t\t\t     { \"name\": \"fee_t\", \"base\": \"\", \"fields\": [\"Array\"] },\n\t\t\t     { \"name\": \"inlock\", \"base\": \"\", \"fields\": [\"Array\"] },\n\t\t\t     { \"name\": \"inredeem\", \"base\": \"\", \"fields\": [\"Array\"] },\n\t\t\t     { \"name\": \"inrevoke\", \"base\": \"\", \"fields\": [\"Array\"] },\n\t\t\t     { \"name\": \"lockdebt\", \"base\": \"\", \"fields\": [\"Array\"] },\n\t\t\t     { \"name\": \"num64_t\", \"base\": \"\", \"fields\": [\"Array\"] },\n\t\t\t     { \"name\": \"outlock\", \"base\": \"\", \"fields\": [\"Array\"] },\n\t\t\t     { \"name\": \"outredeem\", \"base\": \"\", \"fields\": [\"Array\"] },\n\t\t\t     { \"name\": \"outrevoke\", \"base\": \"\", \"fields\": [\"Array\"] },\n\t\t\t     { \"name\": \"pk_t\", \"base\": \"\", \"fields\": [\"Array\"] },\n\t\t\t     { \"name\": \"redeemdebt\", \"base\": \"\", \"fields\": [\"Array\"] },\n\t\t\t     { \"name\": \"regsig\", \"base\": \"\", \"fields\": [\"Array\"] },\n\t\t\t     { \"name\": \"revokedebt\", \"base\": \"\", \"fields\": [\"Array\"] },\n\t\t\t     { \"name\": \"setratio\", \"base\": \"\", \"fields\": [\"Array\"] },\n\t\t\t     { \"name\": \"signature_t\", \"base\": \"\", \"fields\": [\"Array\"] },\n\t\t\t     { \"name\": \"transfer_t\", \"base\": \"\", \"fields\": [\"Array\"] },\n\t\t\t     { \"name\": \"unregsig\", \"base\": \"\", \"fields\": [\"Array\"] },\n\t\t\t     { \"name\": \"updatesig\", \"base\": \"\", \"fields\": [\"Array\"] },\n\t\t\t     { \"name\": \"withdraw\", \"base\": \"\", \"fields\": [\"Array\"] } ],\n\t\t\t  \"actions\":\n\t\t\t   [ { \"name\": \"inlock\", \"type\": \"inlock\", \"ricardian_contract\": \"\" },\n\t\t\t     { \"name\": \"inredeem\", \"type\": \"inredeem\", \"ricardian_contract\": \"\" },\n\t\t\t     { \"name\": \"inrevoke\", \"type\": \"inrevoke\", \"ricardian_contract\": \"\" },\n\t\t\t     { \"name\": \"lockdebt\", \"type\": \"lockdebt\", \"ricardian_contract\": \"\" },\n\t\t\t     { \"name\": \"outlock\", \"type\": \"outlock\", \"ricardian_contract\": \"\" },\n\t\t\t     { \"name\": \"outredeem\", \"type\": \"outredeem\", \"ricardian_contract\": \"\" },\n\t\t\t     { \"name\": \"outrevoke\", \"type\": \"outrevoke\", \"ricardian_contract\": \"\" },\n\t\t\t     { \"name\": \"redeemdebt\",\n\t\t\t       \"type\": \"redeemdebt\",\n\t\t\t       \"ricardian_contract\": \"\" },\n\t\t\t     { \"name\": \"regsig\", \"type\": \"regsig\", \"ricardian_contract\": \"\" },\n\t\t\t     { \"name\": \"revokedebt\",\n\t\t\t       \"type\": \"revokedebt\",\n\t\t\t       \"ricardian_contract\": \"\" },\n\t\t\t     { \"name\": \"setratio\", \"type\": \"setratio\", \"ricardian_contract\": \"\" },\n\t\t\t     { \"name\": \"unregsig\", \"type\": \"unregsig\", \"ricardian_contract\": \"\" },\n\t\t\t     { \"name\": \"updatesig\", \"type\": \"updatesig\", \"ricardian_contract\": \"\" },\n\t\t\t     { \"name\": \"withdraw\", \"type\": \"withdraw\", \"ricardian_contract\": \"\" } ],\n\t\t\t  \"tables\":\n\t\t\t   [ { \"name\": \"assets\",\n\t\t\t       \"index_type\": \"i64\",\n\t\t\t       \"key_names\": [],\n\t\t\t       \"key_types\": [],\n\t\t\t       \"type\": \"asset_t\" },\n\t\t\t     { \"name\": \"debts\",\n\t\t\t       \"index_type\": \"i64\",\n\t\t\t       \"key_names\": [],\n\t\t\t       \"key_types\": [],\n\t\t\t       \"type\": \"debt_t\" },\n\t\t\t     { \"name\": \"fees\",\n\t\t\t       \"index_type\": \"i64\",\n\t\t\t       \"key_names\": [],\n\t\t\t       \"key_types\": [],\n\t\t\t       \"type\": \"fee_t\" },\n\t\t\t     { \"name\": \"longlongs\",\n\t\t\t       \"index_type\": \"i64\",\n\t\t\t       \"key_names\": [],\n\t\t\t       \"key_types\": [],\n\t\t\t       \"type\": \"num64_t\" },\n\t\t\t     { \"name\": \"pks\",\n\t\t\t       \"index_type\": \"i64\",\n\t\t\t       \"key_names\": [],\n\t\t\t       \"key_types\": [],\n\t\t\t       \"type\": \"pk_t\" },\n\t\t\t     { \"name\": \"signer\",\n\t\t\t       \"index_type\": \"i64\",\n\t\t\t       \"key_names\": [],\n\t\t\t       \"key_types\": [],\n\t\t\t       \"type\": \"signature_t\" },\n\t\t\t     { \"name\": \"transfers\",\n\t\t\t       \"index_type\": \"i64\",\n\t\t\t       \"key_names\": [],\n\t\t\t       \"key_types\": [],\n\t\t\t       \"type\": \"transfer_t\" } ],\n\t\t\t  \"ricardian_clauses\": [],\n\t\t\t  \"error_messages\": [],\n\t\t\t  \"abi_extensions\": [],\n\t\t\t  \"variants\": [] }",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "EOS"
  },
  {
    "name": "getAccountInfo",
    "group": "EOS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getAccountInfo",
    "version": "1.1.1",
    "description": "<p>Returns an object containing various details about a specific account on the blockchain. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'EOS'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>The account code.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getAccountInfo\",\"params\":{\"chainType\":\"EOS\",\"address\":\"aarontestnet\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getAccountInfo(\"EOS\", \"aarontestnet\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await getAccountInfo(\"EOS\", \"aarontestnet\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n   account_name: 'aarontestnet',\n   head_block_num: 84039011,\n   head_block_time: '2020-04-02T12:40:32.000',\n   privileged: false,\n   last_code_update: '1970-01-01T00:00:00.000',\n   created: '2019-04-22T03:47:11.500',\n   core_liquid_balance: '148.3494 EOS',\n   ram_quota: 7517,\n   net_weight: 340000,\n   cpu_weight: 2230000,\n   net_limit: { used: 520, available: 2188721, max: 2189241 },\n   cpu_limit: { used: 935, available: 13184853, max: 13185788 },\n   ram_usage: 3894,\n   permissions:\n   [ { perm_name: 'active', parent: 'owner', required_auth: [Object] },\n   { perm_name: 'owner', parent: '', required_auth: [Object] } ],\n   total_resources:\n   {\n     owner: 'aarontestnet',\n     net_weight: '34.0000 EOS',\n     cpu_weight: '223.0000 EOS',\n     ram_bytes: 6117\n   },\n   self_delegated_bandwidth:\n   {\n     from: 'aarontestnet',\n     to: 'aarontestnet',\n     net_weight: '24.0000 EOS',\n     cpu_weight: '73.0000 EOS'\n   },\n   refund_request: null,\n   voter_info:\n   {\n     owner: 'aarontestnet',\n     proxy: '',\n     producers: [],\n     staked: 2010000,\n     last_vote_weight: '0.00000000000000000',\n     proxied_vote_weight: '0.00000000000000000',\n     is_proxy: 0,\n     flags1: 0,\n     reserved2: 0,\n     reserved3: '0'\n   },\n   rex_info: null\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "EOS"
  },
  {
    "name": "getAccounts",
    "group": "EOS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getAccounts",
    "version": "1.1.1",
    "description": "<p>Returns an array containing account names which is related to the public key, or owned by the given account. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'EOS'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "addressOrPublicKey",
            "description": "<p>The account name or the public key.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getAccounts\",\"params\":{\"chainType\":\"EOS\",\"publicKey\":\"EOS6yEsFdisRXLpk4xg4AEnYJDW5bLrjwBDoHNREsDsxcwFEncErK\"},\"id\":1}\nor\n{\"jsonrpc\":\"2.0\",\"method\":\"getAccounts\",\"params\":{\"chainType\":\"EOS\",\"address\":\"aarontestnet\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getAccounts(\"EOS\", \"EOS6yEsFdisRXLpk4xg4AEnYJDW5bLrjwBDoHNREsDsxcwFEncErK\", (err, result) => {\n// apiTest.getAccounts(\"EOS\", \"aarontestnet\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await getAccounts(\"EOS\", \"EOS6yEsFdisRXLpk4xg4AEnYJDW5bLrjwBDoHNREsDsxcwFEncErK\");\n// let result = await getAccounts(\"EOS\", \"aarontestnet\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[\n  \"wanchainbbbb\",\n  \"wanchainaaaa\"\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "EOS"
  },
  {
    "name": "getActions",
    "group": "EOS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getActions",
    "version": "1.1.1",
    "description": "<p>Returns an array of actions based on notified account.. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'EOS'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>account name you want to query.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "options",
            "description": "<p>Optional, the filter for actions. <br>  <strong>For eosjs 16.0.0</strong>: <br>    <code>pos</code> - An int32 that is absolute sequence positon, -1 is the end/last action. <br>    <code>offset</code> - The number of actions relative to pos, negative numbers return [pos-offset,pos), positive numbers return [pos,pos+offset). <br>  <strong>For eosjs 20</strong>: <br>    <code>filter</code> - The string for code::name filter. <br>    <code>skip</code> - The number to skip [n] actions (pagination). <br>    <code>limit</code> - The number to limit of [n] actions per page. <br>    <code>sort</code> - The string to sort direction. <br>    <code>after</code> - The string to filter after specified date (ISO8601). <br>    <code>before</code> - The string to filter before specified date (ISO8601). <br>    <code>transfer_to</code> - The string to transfer filter to. <br>    <code>transfer_from</code> - The string to transfer filter from. <br>    <code>transfer_symbol</code> - The string to transfer filter symbol. <br>    <code>act_name</code> - The string for act name. <br>    <code>act_account</code> - The string for act account.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getActions\",\"params\":{\"chainType\":\"EOS\",\"address\":\"wanchainhtlc\",\"options\":{\"filter\":\"wanchainhtlc:outlock\",\"limit\":2}},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getActions(\"EOS\", \"wanchainhtlc\", {filter: \"wanchainhtlc:outlock\", limit: 2}, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await getActions(\"EOS\", \"wanchainhtlc\", {filter: \"wanchainhtlc:outlock\", limit: 2});\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": " [\n   {\n     act: { authorization: [Array],\n     data: [Object],\n     account: 'wanchainhtlc',\n     name: 'outlock'\n   },\n   cpu_usage_us: 504,\n   net_usage_words: 65,\n   account_ram_deltas: [ [Object] ],\n   global_sequence: 564872608,\n   '@timestamp': '2020-02-20T03:19:58.500',\n   block_num: 76739261,\n   producer: 'eight.cartel',\n   trx_id: '20bd931ce948c57614f9c6b617532f806a59314ebfe0cacea13be461e0806034',\n   action_ordinal: 1,\n   creator_action_ordinal: 0,\n   notified: [ 'wanchainhtlc' ]\n },\n ... ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "EOS"
  },
  {
    "name": "getBandwidthPrice",
    "group": "EOS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getBandwidthPrice",
    "version": "1.1.1",
    "description": "<p>Returns an object containing net/cpu price(cpu in ms/EOS, net in KB/EOS) by provide one producer's account. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'EOS'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>one producer's account.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getBandwidthPrice\",\"params\":{\"chainType\":\"EOS\",\"address\":\"junglesweden\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getBandwidthPrice(\"EOS\", \"junglesweden\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await getBandwidthPrice(\"EOS\", \"junglesweden\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n      \"net\": \"0.005301073461471487\",\n      \"cpu\": \"0.005637367015436455\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "EOS"
  },
  {
    "name": "getRamPrice",
    "group": "EOS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getRamPrice",
    "version": "1.1.1",
    "description": "<p>Returns ram price(in KB/EOS). <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'EOS'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getRamPrice\",\"params\":{\"chainType\":\"EOS\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getRamPrice(\"EOS\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await getRamPrice(\"EOS\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"0.05022503944229491\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "EOS"
  },
  {
    "name": "getRawAbi",
    "group": "EOS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getRawAbi",
    "version": "1.1.1",
    "description": "<p>Returns an object containing buffer ABI for a contract based on its account name. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'EOS'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "scAddr",
            "description": "<p>contract account name.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getRawAbi\",\"params\":{\"chainType\":\"EOS\",\"scAddr\":\"wanchainhtlc\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getRawAbi(\"EOS\", \"wanchainhtlc\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await getRawAbi(\"EOS\", \"wanchainhtlc\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n      \"0\": 14,\n      \"1\": 101,\n      \"2\": 111,\n      \"3\": 115,\n      \"…\": \"...\",\n      \"1557\": 0\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "EOS"
  },
  {
    "name": "getRawCodeAndAbi",
    "group": "EOS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getRawCodeAndAbi",
    "version": "1.1.1",
    "description": "<p>Retrieves raw code and ABI for a contract based on account name. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'EOS'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "scAddr",
            "description": "<p>contract account name.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getRawCodeAndAbi\",\"params\":{\"chainType\":\"EOS\",\"scAddr\":\"wanchainhtlc\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getRawCodeAndAbi(\"EOS\", \"wanchainhtlc\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await getRawCodeAndAbi(\"EOS\", \"wanchainhtlc\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n      \"account_name\": \"wanchainhtlc\",\n      \"wasm\": \"...\",\n      \"abi\": \"...\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "EOS"
  },
  {
    "name": "getRequiredKeys",
    "group": "EOS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getRequiredKeys",
    "version": "1.1.1",
    "description": "<p>Returns the required keys needed to sign a transaction. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'EOS'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "txArgs",
            "description": "<p>Optional, transaction arguments. <br>  <code>expiration</code> - required string (DateTime) ^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}$ Time that transaction must be confirmed by. <br>  <code>ref_block_num</code> - required integer. <br>  <code>ref_block_prefix</code> - required integer. <br>  <code>max_net_usage_words</code> - required string or integer (WholeNumber) A whole number. <br>  <code>max_cpu_usage_ms</code> - required string or integer (WholeNumber) A whole number. <br>  <code>delay_sec</code> - required integer. <br>  <code>context_free_actions</code> - required Array of objects (Action). <br>  <code>actions</code> - required Array of objects (Action). <br>  <code>transaction_extensions</code> - Array of Array of integers or strings (Extension). <br>  <code>available_keys</code> - Array of strings (PublicKey) Provide the available keys.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getRequiredKeys\",\"params\":{\"chainType\":\"EOS\",\"txArgs\":{\"transaction\":{\"expiration\":\"2020-04-03T06:06:41\",\"ref_block_num\":15105,\"ref_block_prefix\":2116318876,\"max_net_usage_words\":\"\",\"max_cpu_usage_ms\":\"\",\"delay_sec\":0,\"context_free_actions\":[],\"actions\":[{\"account\":\"eosio.token\",\"name\":\"transfer\",\"authorization\":[{\"actor\":\"cuiqiangtest\",\"permission\":\"active\"}],\"data\":\"90D5CC58E549AF3180626ED39986A6E1010000000000000004454F530000000000\"}],\"transaction_extensions\":[]},\"available_keys\":[\"EOS7MiJnddv2dHhjS82i9SQWMpjLoBbxP1mmpDmwn6ALGz4mpkddv\"]},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getRequiredKeys(\"EOS\", {\"transaction\":{\"expiration\":\"2020-04-03T06:06:41\",\"ref_block_num\":15105,\"ref_block_prefix\":2116318876,\"max_net_usage_words\":\"\",\"max_cpu_usage_ms\":\"\",\"delay_sec\":0,\"context_free_actions\":[],\"actions\":[{\"account\":\"eosio.token\",\"name\":\"transfer\",\"authorization\":[{\"actor\":\"cuiqiangtest\",\"permission\":\"active\"}],\"data\":\"90D5CC58E549AF3180626ED39986A6E1010000000000000004454F530000000000\"}],\"transaction_extensions\":[]},\"available_keys\":[\"EOS7MiJnddv2dHhjS82i9SQWMpjLoBbxP1mmpDmwn6ALGz4mpkddv\"]}, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await getRequiredKeys(\"EOS\", {\"transaction\":{\"expiration\":\"2020-04-03T06:06:41\",\"ref_block_num\":15105,\"ref_block_prefix\":2116318876,\"max_net_usage_words\":\"\",\"max_cpu_usage_ms\":\"\",\"delay_sec\":0,\"context_free_actions\":[],\"actions\":[{\"account\":\"eosio.token\",\"name\":\"transfer\",\"authorization\":[{\"actor\":\"cuiqiangtest\",\"permission\":\"active\"}],\"data\":\"90D5CC58E549AF3180626ED39986A6E1010000000000000004454F530000000000\"}],\"transaction_extensions\":[]},\"available_keys\":[\"EOS7MiJnddv2dHhjS82i9SQWMpjLoBbxP1mmpDmwn6ALGz4mpkddv\"]});\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "['PUB_K1_69X3383RzBZj41k73CSjUNXM5MYGpnDxyPnWUKPEtYQmVzqTY7']",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "EOS"
  },
  {
    "name": "getResource",
    "group": "EOS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getResource",
    "version": "1.1.1",
    "description": "<p>Returns an object containing rows from the specified table eosio.table.global. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'EOS'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getResource\",\"params\":{\"chainType\":\"EOS\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getResource(\"EOS\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await getResource(\"EOS\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n      \"max_block_net_usage\": 524288,\n      \"target_block_net_usage_pct\": 1000,\n      \"max_transaction_net_usage\": 524287,\n      \"base_per_transaction_net_usage\": 12,\n      \"net_usage_leeway\": 500,\n      \"context_free_discount_net_usage_num\": 20,\n      \"context_free_discount_net_usage_den\": 100,\n      \"max_block_cpu_usage\": 500000,\n      \"target_block_cpu_usage_pct\": 10,\n      \"max_transaction_cpu_usage\": 200000,\n      \"min_transaction_cpu_usage\": 10,\n      \"max_transaction_lifetime\": 3600,\n      \"deferred_trx_expiration_window\": 600,\n      \"max_transaction_delay\": 3888000,\n      \"max_inline_action_size\": 524287,\n      \"max_inline_action_depth\": 16,\n      \"max_authority_depth\": 6,\n      \"max_ram_size\": \"68719476736\",\n      \"total_ram_bytes_reserved\": \"31287726990\",\n      \"total_ram_stake\": \"8358873421\",\n      \"last_producer_schedule_update\": \"2020-04-05T13:19:05.500\",\n      \"last_pervote_bucket_fill\": \"2020-04-05T13:12:01.000\",\n      \"pervote_bucket\": 2472797114,\n      \"perblock_bucket\": \"2207987466943\",\n      \"total_unpaid_blocks\": 13819603,\n      \"total_activated_stake\": \"2480152949826\",\n      \"thresh_activated_stake_time\": \"2018-11-23T17:21:01.000\",\n      \"last_producer_schedule_size\": 21,\n      \"total_producer_vote_weight\": \"460825067195145191424.00000000000000000\",\n      \"last_name_close\": \"2020-04-04T13:37:20.500\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "EOS"
  },
  {
    "name": "getResourcePrice",
    "group": "EOS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getResourcePrice",
    "version": "1.1.1",
    "description": "<p>Returns an object containing net/cpu/ram price(cpu in ms/EOS, net/ram in KB/EOS) by provide one producer's account. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'EOS'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>one producer's account.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getResourcePrice\",\"params\":{\"chainType\":\"EOS\",\"address\":\"junglesweden\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getResourcePrice(\"EOS\", \"junglesweden\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await getResourcePrice(\"EOS\", \"junglesweden\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n      \"net\": \"0.005301073461471487\",\n      \"cpu\": \"0.005637367015436455\",\n      \"ram\": \"0.050223917691993435\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "EOS"
  },
  {
    "name": "getStats",
    "group": "EOS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getStats",
    "version": "1.1.1",
    "description": "<p>Returns an object with one member labeled as the symbol you requested, the object has three members: supply (Symbol), max_supply (Symbol) and issuer (Name). <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'EOS'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tokenScAddr",
            "description": "<p>EOS contract code.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "symbol",
            "description": "<p>A string representation of an EOSIO symbol.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getCurrencyStats\",\"params\":{\"chainType\":\"EOS\",\"tokenScAddr\":\"eosio.token\",\"symbol\":\"EOS\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getStats(\"EOS\", \"eosio.token\", \"EOS\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await getStats(\"EOS\", \"eosio.token\", \"EOS\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n    \"supply\": \"10756688680.6257 EOS\",\n    \"max_supply\": \"100000000000.0000 EOS\",\n    \"issuer\": \"eosio\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "EOS"
  },
  {
    "name": "getTableRows",
    "group": "EOS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTableRows",
    "version": "1.1.1",
    "description": "<p>Returns an object containing rows from the specified table. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'EOS'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "scAddr",
            "description": "<p>The name of the smart contract that controls the provided table.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "scope",
            "description": "<p>The account to which this data belongs.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "table",
            "description": "<p>The name of the table to query.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTableRows\",\"params\":{\"chainType\":\"EOS\",\"scAddr\":\"wanchainhtlc\",\"scope\":\"wanchainhtlc\",\"table\":\"transfers\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getTableRows(\"EOS\", \"wanchainhtlc\", \"wanchainhtlc\", \"transfers\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await getTableRows(\"EOS\", \"wanchainhtlc\", \"wanchainhtlc\", \"transfers\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n       \"rows\": [\n           {\n               \"id\": 0,\n               \"pid\": 0,\n               \"quantity\": \"5.0000 EOS\",\n               \"user\": \"cuiqiangtest\",\n               \"lockedTime\": 7200,\n               \"beginTime\": \"2019-12-26T13:59:24\",\n               \"status\": \"inlock\",\n               \"xHash\": \"e4b7be8900393ef6b09a172a21be3b4f1b814ff580dbaeba130484fa99b2da7c\",\n               \"wanAddr\": \"25f2845ad9da78ebaa0e077404d35933f75422b8\",\n               \"account\": \"eosio.token\"\n           },\n           {\n               \"id\": 1,\n               \"pid\": 0,\n               \"quantity\": \"5.0000 EOS\",\n               \"user\": \"cuiqiangtest\",\n               \"lockedTime\": 7200,\n               \"beginTime\": \"2019-12-30T12:23:25\",\n               \"status\": \"inlock\",\n               \"xHash\": \"2be3dee75ddc370d301e55fb74644bab9b1bac9883cb92c4c57a35f4543ce8f6\",\n               \"wanAddr\": \"25f2845ad9da78ebaa0e077404d35933f75422b8\",\n               \"account\": \"eosio.token\"\n           }\n       ],\n       \"more\": true,\n       \"next_key\": \"3\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "EOS"
  },
  {
    "name": "getTotalStaked",
    "group": "EOS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTotalStaked",
    "version": "1.1.1",
    "description": "<p>Returns current 'EOS' stake amount. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'EOS'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTotalStaked\",\"params\":{\"chainType\":\"EOS\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getTotalStaked(\"EOS\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await getTotalStaked(\"EOS\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"2868049208.8674 EOS\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "EOS"
  },
  {
    "name": "getTotalStakedPercent",
    "group": "EOS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTotalStakedPercent",
    "version": "1.1.1",
    "description": "<p>Returns an object with current 'EOS' stake info, the object has three members: totalStaked, totalSup and staked percent. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'EOS'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTotalStakedPercent\",\"params\":{\"chainType\":\"EOS\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getTotalStakedPercent(\"EOS\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await getTotalStakedPercent(\"EOS\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n       \"totalStaked\": 2868049208.8674,\n       \"totalSup\": 10757681325.5591,\n       \"percent\": 0.266604774957706\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "EOS"
  },
  {
    "name": "getTotalSupply",
    "group": "EOS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTotalSupply",
    "version": "1.1.1",
    "description": "<p>Returns an object with one member labeled as 'EOS' you requested, the object has three members: supply (Symbol), max_supply (Symbol) and issuer (Name). <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'EOS'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTotalSupply\",\"params\":{\"chainType\":\"EOS\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getTotalSupply(\"EOS\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await getTotalSupply(\"EOS\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n      \"supply\": \"10757681325.5591 EOS\",\n      \"max_supply\": \"100000000000.0000 EOS\",\n      \"issuer\": \"eosio\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "EOS"
  },
  {
    "name": "packTransaction",
    "group": "EOS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "packTransaction",
    "version": "1.1.1",
    "description": "<p>Returns an object with serializedTransaction(buffer) and empty signatures for the given actions with blocksBehind and expireSeconds. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'EOS'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "tx",
            "description": "<p>The transaction to be packed. <br>  <code>actions</code> - required Array of objects (Action). <br>  <code>blocksBehind</code> - Optional, default is 3. <br>  <code>expireSeconds</code> - Optional, default is 30. <br> If <code>blocksBehind</code> and <code>expireSeconds</code> are set, the block <code>blocksBehind</code> the head block retrieved from JsonRpc's <code>get_info</code> is set as the reference block and the transaction header is serialized using this reference block and the expiration field.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"packTransaction\",\"params\":{\"chainType\":\"EOS\",\"tx\":{\"actions\":[{\"account\":\"eosio\",\"name\":\"delegatebw\",\"authorization\":[{\"actor\":\"aarontestnet\",\"permission\":\"active\"}],\"data\":{\"from\":\"aarontestnet\",\"receiver\":\"aarontestnet\",\"stake_net_quantity\":\"0.0001 EOS\",\"stake_cpu_quantity\":\"0.0001 EOS\",\"transfer\":false}}]}},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.packTransaction(\"EOS\", {\n          \"actions\": [\n              {\n                  \"account\": \"eosio\",\n                  \"name\": \"delegatebw\",\n                  \"authorization\": [\n                      {\n                          \"actor\": \"aarontestnet\",\n                          \"permission\": \"active\"\n                      }\n                  ],\n                  \"data\": {\n                      \"from\": \"aarontestnet\",\n                      \"receiver\": \"aarontestnet\",\n                      \"stake_net_quantity\": \"0.0001 EOS\",\n                      \"stake_cpu_quantity\": \"0.0001 EOS\",\n                      \"transfer\": false\n                  }\n              }\n          ]\n      }, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await packTransaction(\"EOS\", {\n          \"actions\": [\n              {\n                  \"account\": \"eosio\",\n                  \"name\": \"delegatebw\",\n                  \"authorization\": [\n                      {\n                          \"actor\": \"aarontestnet\",\n                          \"permission\": \"active\"\n                      }\n                  ],\n                  \"data\": {\n                      \"from\": \"aarontestnet\",\n                      \"receiver\": \"aarontestnet\",\n                      \"stake_net_quantity\": \"0.0001 EOS\",\n                      \"stake_cpu_quantity\": \"0.0001 EOS\",\n                      \"transfer\": false\n                  }\n              }\n          ]\n      });\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n        \"serializedTransaction\": {\n            \"0\": 177,\n            \"1\": 226,\n            \"2\": 138,\n            \"3\": 94,\n            \"4\": 122,\n            \"5\": 95,\n            \"...\": \"...\",\n            \"98\": 0\n        },\n        \"signatures\": []\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "EOS"
  },
  {
    "name": "getScEvent",
    "group": "Events",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getScEvent",
    "version": "1.1.1",
    "description": "<p>Get smart contract event log via topics. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code> and <code>'ETH'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>The contract address.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "topics",
            "description": "<p>An array of string values which must each appear in the log entries. The order is important, if you want to leave topics out use null, e.g. [null, '0x00...'].</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "option",
            "description": "<p>An object value which describes the range between fromBlock and toBlock. <br>  <code>fromBlock</code> - The number of the earliest block (latest may be given to mean the most recent, block). By default 0. <br>  <code>toBlock</code> - The number of the latest block (latest may be given to mean the most recent, block). By default latest.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getScEvent\",\"params\":{\"chainType\":\"WAN\", \"address\": \"0xda5b90dc89be59365ec44f3f2d7af8b6700d1167\", \"topics\": [\"0xa4345d0839b39e5a6622a55c68bd8f83ac8a68fad252a8363a2c09dbaf85c793\", \"0x0000000000000000000000000000000000000000000000000000000000000000\"]},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getScEvent('WAN', '0xda5b90dc89be59365ec44f3f2d7af8b6700d1167', [\"0xa4345d0839b39e5a6622a55c68bd8f83ac8a68fad252a8363a2c09dbaf85c793\", \"0x0000000000000000000000000000000000000000000000000000000000000000\"], (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getScEvent('WAN', '0xda5b90dc89be59365ec44f3f2d7af8b6700d1167', [\"0xa4345d0839b39e5a6622a55c68bd8f83ac8a68fad252a8363a2c09dbaf85c793\", \"0x0000000000000000000000000000000000000000000000000000000000000000\"]);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[{\n     \"address\": \"0xda5b90dc89be59365ec44f3f2d7af8b6700d1167\",\n     \"topics\": [\"0xa4345d0839b39e5a6622a55c68bd8f83ac8a68fad252a8363a2c09dbaf85c793\", \"0x0000000000000000000000000000000000000000000000000000000000000000\"],\n     \"data\": \"0x54657374206d6573736167650000000000000000000000000000000000000000\",\n     \"blockNumber\": 1121916,\n     \"transactionHash\": \"0x6bdd2acf6e946be40e2b3a39d3aaadd6d615d59c89730196870f640990a57cbe\",\n     \"transactionIndex\": 0,\n     \"blockHash\": \"0xedda83000829f7d0a0820a7bdf2103a3142a70c404f78fd1dfc7751dc007f5a2\",\n     \"logIndex\": 0,\n     \"removed\": false\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Events"
  },
  {
    "name": "monitorEvent",
    "group": "Events",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "monitorEvent",
    "version": "1.1.1",
    "description": "<p>Subscribe to a smart contract event monitor. The server will push the event to the subscriber when the event occurs. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code> and <code>'ETH'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>The contract address.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "topics",
            "description": "<p>Array of values which must each appear in the log entries. The order is important, if you want to leave topics out use null, e.g. [null, '0x00...'].</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"monitorEvent\",\"params\":{\"chainType\":\"WAN\", \"address\": \"0x0d18157D85c93A86Ca194DB635336E43B1Ffbd26\", \"topics\": [\"0x685c13adbbf429a7b274e90887dad988c5f9d0490c6fbedb07b03b388a1683c7\"]},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.monitorEvent('WAN', '0x0d18157D85c93A86Ca194DB635336E43B1Ffbd26', [\"0x685c13adbbf429a7b274e90887dad988c5f9d0490c6fbedb07b03b388a1683c7\"], (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.monitorEvent('WAN', '0x0d18157D85c93A86Ca194DB635336E43B1Ffbd26', [\"0x685c13adbbf429a7b274e90887dad988c5f9d0490c6fbedb07b03b388a1683c7\"]);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[{\n      \"address\": \"0x0d18157d85c93a86ca194db635336e43b1ffbd26\",\n      \"topics\": [\"0x685c13adbbf429a7b274e90887dad988c5f9d0490c6fbedb07b03b388a1683c7\", \"0x0000000000000000000000000d18157d85c93a86ca194db635336e43b1ffbd26\"],\n      \"data\": \"0xf124b8ff25fd9c5e4f4e555232840d6a0fb89f4eb9e507ee15b5eff1336de212\",\n      \"blockNumber\": 685211,\n      \"transactionHash\": \"0xf5889525629718bc39cc26909012f1502826e2241d6f169ac6c229328d38245b\",\n      \"transactionIndex\": 0,\n      \"blockHash\": \"0x6b673291fe79e06323766d0966430cafd0baec742ec7532a10be74018ba1d785\",\n      \"logIndex\": 0,\n      \"removed\": false\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Events"
  },
  {
    "name": "getActivity",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getActivity",
    "version": "1.1.1",
    "description": "<p>Get the activity information of the specified epoch. For historical epochs the values are fixed, while the current epoch will update the latest current values in real time. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "epochID",
            "description": "<p>The epochID you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getActivity\",\"params\":{\"chainType\":\"WAN\", \"epochID\":18102},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getActivity(\"WAN\", 18102, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getActivity(\"WAN\", 18102);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n  \"epLeader\":\n  [\n    \"0x28c12c7b51860b9d5aec3a0ceb63c6e187c00aac\",\n    \"0x1a95e85e8ffcfd28eb61ee53a542dc98c57b337a\",\n    \"0x46530055144fe9365eaae87ba623e2f91cd7eff2\",\n    \"0x0e92d125ba28852a11428fcb63b6f0e44a52962f\",\n    \"0xee1ad9c4f9d81f900221e95ee04246b6254b0c6f\",\n    \"0xb58230a7923a6a1941016aa1682e212def899ed1\",\n    \"0xb9d6c1a6e52119026cb5d2a82457f5fd6bc7e0c9\",\n    \"0xdfd7aa554653ca236c197ad746edc2954ca172df\",\n    \"0x1b7740df685f9d34773d5a2aba6ab3a2c1407f40\",\n    \"0xdfd7aa554653ca236c197ad746edc2954ca172df\",\n    \"0x266ddcfdbe3ded75e0e511e6356bca052b221c6b\",\n    \"0x1ae5a38b4a5ca0aefbb1c17fd27073ab00fd2a3f\",\n    \"0x2866bca06ff1d6afe52298f9fc759ea9b80f6902\",\n    \"0xf0e02c3640020f083a314547ae99483aa2c7cd01\",\n    \"0x2a6e8c39d4e9f9152958649fc5dbdb9c68cfcb0b\",\n    \"0x0081a626fecff225cd87d3f23c0dd47a9fe243ac\",\n    \"0x1a95e85e8ffcfd28eb61ee53a542dc98c57b337a\",\n    \"0x1a95e85e8ffcfd28eb61ee53a542dc98c57b337a\",\n    \"0x1a95e85e8ffcfd28eb61ee53a542dc98c57b337a\",\n    \"0xdfd7aa554653ca236c197ad746edc2954ca172df\",\n    \"0x2a6e8c39d4e9f9152958649fc5dbdb9c68cfcb0b\",\n    \"0xa3fb8f5e1fadfe104e4b1da91e8d96aab52faaf3\",\n    \"0x4bf9fd7308d0849a62c3a7dd71c5190e57c28756\",\n    \"0x85dae7e5c7b433a1682c54eee63adf63d835d272\"\n  ],\n  \"epActivity\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n  \"rpLeader\":\n  [\n    \"0x89a7588529eb7aaea0a229f2dfbb277b15649969\",\n    \"0x3dabf8331afbc553a1e458e37a6c9c819c452d55\",\n    \"0x010ee9abdf364972ac8d279ab96fd1d167a4d830\",\n    \"0x7815f56468915a08edb505fffa9d376ad21a9617\",\n    \"0x2c72d7a8c02752fcfafbaea5a63c53056cfaf547\",\n    \"0x9ce4664e9d7346869797b7d9fc8c7a0212d5ff44\",\n    \"0xbdada4f58d17ce602cb0d2db2a55c3e4f47e397f\",\n    \"0xa923ac48439add7124763b3682f4505044c81ae3\",\n    \"0xf1d6ffc8a2276b7e0784973a1a07a26e75200edd\",\n    \"0x5e165460b15f02d84a67f81b29517671989d2492\",\n    \"0x8289e2141c10832e7c9b108317eae0dec2011c67\",\n    \"0xb019a99f0653973ddb2d983a26e0970587d08447\",\n    \"0x8289e2141c10832e7c9b108317eae0dec2011c67\",\n    \"0xa4ebf5bbb131179b69bbf33319257728cdada5cf\",\n    \"0x3dabf8331afbc553a1e458e37a6c9c819c452d55\",\n    \"0x5e165460b15f02d84a67f81b29517671989d2492\",\n    \"0xa4539e1bdffceb3557ffb81f87a92e2159f6d637\",\n    \"0x7815f56468915a08edb505fffa9d376ad21a9617\",\n    \"0xa4626e2bb450204c4b34bcc7525e585e8f678c0d\",\n    \"0xf90cc528e5f4811c8c1f1a69b990b9a58039f7cf\",\n    \"0x1a95e85e8ffcfd28eb61ee53a542dc98c57b337a\",\n    \"0x46530055144fe9365eaae87ba623e2f91cd7eff2\",\n    \"0x93c8ea0326ef334bdc3011e74cd1a6d78ce0594d\",\n    \"0x57dca45124e253bfa93d7571b43555a861c7455f\",\n    \"0x2c72d7a8c02752fcfafbaea5a63c53056cfaf547\"\n  ],\n  \"rpActivity\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n  \"sltLeader\":[],\n  \"slBlocks\":[],\n  \"slActivity\":0,\n  \"slCtrlCount\":0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getCurrentEpochInfo",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getCurrentEpochInfo",
    "version": "1.1.1",
    "description": "<p>Get the current epoch info. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getCurrentEpochInfo\",\"params\":{\"chainType\":\"WAN\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getCurrentEpochInfo(\"WAN\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getCurrentEpochInfo(\"WAN\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n  \"blockNumber\": 3938057,\n  \"slotId\": 5661,\n  \"epochId\": 18102\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getCurrentStakerInfo",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getCurrentStakerInfo",
    "version": "1.1.1",
    "description": "<p>Returns an array with information on each of the current validators. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getCurrentStakerInfo\",\"params\":{\"chainType\":\"WAN\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getCurrentStakerInfo(\"WAN\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getCurrentStakerInfo(\"WAN\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[\n  {\n    \"address\": \"0xa4626e2bb450204c4b34bcc7525e585e8f678c0d\",\n    \"pubSec256\": \"0x04b7bf8d3868333f70a30041423c7db204b80b9be2e585c344cf3f391cbf77b17fd14f3058d4475d546355bf8c2709ed9ecf5f0cee9d021c90988af0e8cf52001b\",\n    \"pubBn256\": \"0x289787688eb80c1e223375a71f8d17110d638a9143afa190dc11b3c1e64cf92b21feb02ab7a1dcb31892210dfda458aff890fe9e7508292099ae6256f197b325\",\n    \"amount\": \"0xa968163f0a57b400000\",\n    \"votingPower\": \"0x297116712be7b468800000\",\n    \"lockEpochs\": 7,\n    \"maxFeeRate\": 1500,\n    \"nextLockEpochs\": 7,\n    \"from\": \"0xdbb2d6199457d11288f0097659bcec24738e158f\",\n    \"stakingEpoch\": 0,\n    \"feeRate\": 1500,\n    \"feeRateChangedEpoch\": 0,\n    \"clients\":\n    [\n      {\n        \"address\": \"0xfcc3736dc29bf9af7556fcc1dea10b53edaab51d\",\n        \"amount\": \"0x56bc75e2d63100000\",\n        \"votingPower\": \"0x1537da569da5bca00000\",\n        \"quitEpoch\": 18071\n      }\n    ],\n    \"partners\": []\n  },\n  ... ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getDelegatorIncentive",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getDelegatorIncentive",
    "version": "1.1.1",
    "description": "<p>Get the identified delegator rewards over a specified range of epochs. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>The delegator address you want to query.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "options",
            "description": "<p>Optional. <br>  <code>from</code> - The number that starting epochID you want to query. <br>  <code>to</code> - The number that ending epochID you want to query.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getDelegatorIncentive\",\"params\":{\"chainType\":\"WAN\", \"address\":\"0xa6de4408d9003ee992b5dc0e1bf27968e48727dc\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getDelegatorIncentive(\"WAN\", \"0xa6de4408d9003ee992b5dc0e1bf27968e48727dc\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getDelegatorIncentive(\"WAN\", \"0xa6de4408d9003ee992b5dc0e1bf27968e48727dc\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[\n  {\n    \"address\": \"0x6fcfcd4719f110e77bef0633d31cc046616b4b34\",\n    \"amount\": \"0x3217e1b255185bf07\",\n    \"epochId\": 18088\n  },\n  {\n    \"address\": \"0x6fcfcd4719f110e77bef0633d31cc046616b4b34\",\n    \"amount\": \"0x19029a8c0503573f2\",\n    \"epochId\": 18090\n  },\n  {\n    \"address\": \"0x6fcfcd4719f110e77bef0633d31cc046616b4b34\",\n    \"amount\": \"0x1902ee870d0bbf9fc\",\n    \"epochId\": 18091\n  },\n  {\n    \"address\": \"0xdfd7aa554653ca236c197ad746edc2954ca172df\",\n    \"amount\": \"0x2e2c02cc97b59ff49\",\n    \"epochId\": 18091\n  },\n  {\n    \"address\": \"0x4bf9fd7308d0849a62c3a7dd71c5190e57c28756\",\n    \"amount\": \"0xd9861c084d353afe\",\n    \"epochId\": 18091\n  },\n  {\n    \"address\": \"0x93c8ea0326ef334bdc3011e74cd1a6d78ce0594d\",\n    \"amount\": \"0xa4d86dec9cf006aa\",\n    \"epochId\": 18091\n  },\n  ... ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getDelegatorStakeInfo",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getDelegatorStakeInfo",
    "version": "1.1.1",
    "description": "<p>Get the identified delegator's staking info. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>The delegator address you want to query.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getDelegatorStakeInfo\",\"params\":{\"chainType\":\"WAN\", \"address\":\"0xa6de4408d9003ee992b5dc0e1bf27968e48727dc\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getDelegatorStakeInfo(\"WAN\", \"0xa6de4408d9003ee992b5dc0e1bf27968e48727dc\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getDelegatorStakeInfo(\"WAN\", \"0xa6de4408d9003ee992b5dc0e1bf27968e48727dc\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[\n  {\n    \"address\": \"0x6fcfcd4719f110e77bef0633d31cc046616b4b34\",\n    \"amount\": \"0xa968163f0a57b400000\",\n    \"quitEpoch\": 0\n  },\n  {\n    \"address\": \"0xdfd7aa554653ca236c197ad746edc2954ca172df\",\n    \"amount\": \"0x3f870857a3e0e3800000\",\n    \"quitEpoch\": 0\n  },\n  {\n    \"address\": \"0x4bf9fd7308d0849a62c3a7dd71c5190e57c28756\",\n    \"amount\": \"0xa968163f0a57b400000\",\n    \"quitEpoch\": 0\n  },\n  {\n    \"address\": \"0x93c8ea0326ef334bdc3011e74cd1a6d78ce0594d\",\n    \"amount\": \"0xa968163f0a57b400000\",\n    \"quitEpoch\": 0\n  },\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getDelegatorSupStakeInfo",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getDelegatorSupStakeInfo",
    "version": "1.1.1",
    "description": "<p>Get the specified delegator's supplementary information. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string/array",
            "optional": false,
            "field": "address",
            "description": "<p>The delegator's address you want to query.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getDelegatorSupStakeInfo\",\"params\":{\"chainType\":\"WAN\", \"address\":[\"0xc45089dfcf6308d80b377b0a6ffc8bd314273ce0\"]},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getDelegatorSupStakeInfo(\"WAN\", [\"0xc45089dfcf6308d80b377b0a6ffc8bd314273ce0\"], (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getDelegatorSupStakeInfo(\"WAN\", [\"0xc45089dfcf6308d80b377b0a6ffc8bd314273ce0\"]);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[\n  {\n    \"address\": \"0xc45089dfcf6308d80b377b0a6ffc8bd314273ce0\",\n    \"vAddress\": \"0x1a95e85e8ffcfd28eb61ee53a542dc98c57b337a\",\n    \"delegateIn\": 3788629,\n    \"delegateInTimestamp\": 1563190930\n  },\n  {\n    \"address\": \"0xc45089dfcf6308d80b377b0a6ffc8bd314273ce0\",\n    \"vAddress\": \"0x1e1e954883d02fba32fa1f7d0d6314156aa2a4e8\",\n    \"delegateIn\": 3788635,\n    \"delegateInTimestamp\": 1563190970\n  },\n  ... ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getDelegatorTotalIncentive",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getDelegatorTotalIncentive",
    "version": "1.1.1",
    "description": "<p>Get the identified delegator's total incentives. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>The delegator's address you want to query.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "options",
            "description": "<p>Optional. <br>  <code>validatorAddress</code> - The validator's address you want to query. <br>  <code>from</code> - The number that starting epochID you want to query. <br>  <code>to</code> - The number that ending epochID you want to query.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getDelegatorTotalIncentive\",\"params\":{\"chainType\":\"WAN\", \"address\":\"0xa6de4408d9003ee992b5dc0e1bf27968e48727dc\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getDelegatorTotalIncentive(\"WAN\", \"0xa6de4408d9003ee992b5dc0e1bf27968e48727dc\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getDelegatorTotalIncentive(\"WAN\", \"0xa6de4408d9003ee992b5dc0e1bf27968e48727dc\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[\n  {\n    \"address\": \"0x1a95e85e8ffcfd28eb61ee53a542dc98c57b337a\",\n    \"amount\": \"233401766511923724414\",\n    \"minEpochId\": 18080,\n    \"epochCount\": 6\n  },\n  {\n    \"address\": \"0x4bf9fd7308d0849a62c3a7dd71c5190e57c28756\",\n    \"amount\": \"516430866915939128625\",\n    \"minEpochId\": 18088,\n    \"epochCount\": 12\n  },\n  {\n    \"address\": \"0x6fcfcd4719f110e77bef0633d31cc046616b4b34\",\n    \"amount\": \"662440812840446730555\",\n    \"minEpochId\": 18088,\n    \"epochCount\": 10\n  },\n  {\n    \"address\": \"0x93c8ea0326ef334bdc3011e74cd1a6d78ce0594d\",\n    \"amount\": \"514597535375473288151\",\n    \"minEpochId\": 18088,\n    \"epochCount\": 13\n  },\n  {\n    \"address\": \"0xdfd7aa554653ca236c197ad746edc2954ca172df\",\n    \"amount\": \"6.026970402596349056462e+21\",\n    \"minEpochId\": 18082,\n    \"epochCount\": 20\n  },\n  ... ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getEpochID",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getEpochID",
    "version": "1.1.1",
    "description": "<p>Get the current Epoch ID. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getEpochID\",\"params\":{\"chainType\":\"WAN\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getEpochID(\"WAN\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getEpochID(\"WAN\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "18102",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getEpochIDByTime",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getEpochIDByTime",
    "version": "1.1.1",
    "description": "<p>Calculates the Epoch ID according to the time. Enter the UTC time in seconds to get the corresponding Epoch ID. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "time",
            "description": "<p>The UTC time seconds you want to query.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getEpochIDByTime\",\"params\":{\"chainType\":\"WAN\", \"time\":1564550000},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getEpochIDByTime(\"WAN\", 1564550000, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getEpochIDByTime(\"WAN\", 1564550000);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "18108",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getEpochIncentiveBlockNumber",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getEpochIncentiveBlockNumber",
    "version": "1.1.1",
    "description": "<p>Get the block number which contains the incentives transactions for the specified epoch. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "epochID",
            "description": "<p>The epochID you want to query.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getEpochIncentiveBlockNumber\",\"params\":{\"chainType\":\"WAN\", \"epochID\":18106},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getEpochIncentiveBlockNumber(\"WAN\", 18106, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getEpochIncentiveBlockNumber(\"WAN\", 18106);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "4003788",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getEpochIncentivePayDetail",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getEpochIncentivePayDetail",
    "version": "1.1.1",
    "description": "<p>Get the reward information of the specified epoch, enter epochID, and reward payment details (including RNP reward, EL reward and chunk reward) will be returned for all the verification nodes and clients working in the epoch. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "epochID",
            "description": "<p>The epochID you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getEpochIncentivePayDetail\",\"params\":{\"chainType\":\"WAN\", \"epochID\":18101},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getEpochIncentivePayDetail(\"WAN\", 18101, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getEpochIncentivePayDetail(\"WAN\", 18101);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[\n  {\n    \"delegators\": [\n      {\n        \"address\": \"0x81ad5c65a815f8dc28e0fd1d17ac4fa38f8a6838\",\n        \"incentive\": \"0x78b093af02e111\",\n        \"type\": \"delegator\"\n      },\n      {\n        \"address\": \"0x4e6b5f1abdd517739889334df047113bd736c546\",\n        \"incentive\": \"0x13afa1b719d597636\",\n        \"type\": \"delegator\"\n      },\n      ... ...\n      {\n        \"address\": \"0x8bf12b4cd3b41d40b2adfdf2857b2077d4194a44\",\n        \"incentive\": \"0x1922a4583a858b0\",\n        \"type\": \"delegator\"\n      },\n      {\n        \"address\": \"0x51253d40bb113827781de47e5a2d41f41924431d\",\n        \"incentive\": \"0x28376d59f73c11\",\n        \"type\": \"delegator\"\n      }\n    ],\n    \"address\": \"0xa4626e2bb450204c4b34bcc7525e585e8f678c0d\",\n    \"stakeInFromAddr\": \"0xdbb2d6199457d11288f0097659bcec24738e158f\",\n    \"incentive\": \"0xaf6f730467435b9f\",\n    \"type\": \"validator\"\n  },\n  ... ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getEpochLeadersByEpochID",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getEpochLeadersByEpochID",
    "version": "1.1.1",
    "description": "<p>Get the public key list of the epoch leaders of the specified EpochID with the input parameter as EpochID. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "epochID",
            "description": "<p>The epochID you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getEpochLeadersByEpochID\",\"params\":{\"chainType\":\"WAN\", \"epochID\":18102},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getEpochLeadersByEpochID(\"WAN\", 18102, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getEpochLeadersByEpochID(\"WAN\", 18102);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n  \"000000\": \"046c0979fbcd38b7887076db6b08adbbaae45189ac4239d2c06749b634dbeaafdf2b229b6c4eda1ab6ede7e46cbd9ab3ac35df1ac2a6f650bac39fd8474d85524e\",\n  \"000001\": \"04dac7b023f0e9fb5be91b48e5d546b2f2eb91029705f6055c24b3c804a49cf83f7cd584a96346ca42a94a02456444b7df4e280d2726971bf267f8182341ff81b9\",\n  \"000002\": \"042b7d4be32d25769472ea7c8d432bbad5abee051c048e4de425e6feb288fde6f33a16269e4e85fbda4f857a7d5eca8d33793b9249c83517a3214b64475cd50176\",\n  ... ...\n  \"000047\": \"046351650f15b8de869d89c572dc093000794e75e7f4a7c9f10e9b35f24694fa7555c143e4c4dd4548c0d06be2b2e6c536b37acf0c0ad4806e6c48f23ade4e4d9a\",\n  \"000048\": \"04fdb485b566c2ddb40e2f4341b1e5746479a7c45e3d8101b1360b8bdba6206deee520ceecc9e9897e3b05b53e3ffa6fa659bef47c384984c0bc021a843df10847\",\n  \"000049\": \"04fdb485b566c2ddb40e2f4341b1e5746479a7c45e3d8101b1360b8bdba6206deee520ceecc9e9897e3b05b53e3ffa6fa659bef47c384984c0bc021a843df10847\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getEpochStakeOut",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getEpochStakeOut",
    "version": "1.1.1",
    "description": "<p>Get the record of stake out transactions for the specified epoch. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "epochID",
            "description": "<p>The epochID you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getEpochStakeOut\",\"params\":{\"chainType\":\"WAN\", \"epochID\":18106},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getEpochStakeOut(\"WAN\", 18106, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getEpochStakeOut(\"WAN\", 18106);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[\n  {\n    \"address\": \"0x74b7505ef4ee4a4783f446df8964b6cdd4c61843\",\n    \"amount\": \"0x8f1d5c1cae3740000\"\n  },\n  ... ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getLeaderGroupByEpochID",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getLeaderGroupByEpochID",
    "version": "1.1.1",
    "description": "<p>Get the Epoch Leader and Random Number Proposer addresses and public key lists in the specified epoch. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "epochID",
            "description": "<p>The epochID you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getLeaderGroupByEpochID\",\"params\":{\"chainType\":\"WAN\", \"epochID\":18102},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getLeaderGroupByEpochID(\"WAN\", 18102, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getLeaderGroupByEpochID(\"WAN\", 18102);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[\n  {\n    \"pubBn256\": \"0x0342c5f001e6970037de3d9de692cb89284435df28e63657f88c8e99893be7960006f8cf93c699856ff8aeffcd64531ce0071cdf09a38d043b33bbbf4cd469ed\",\n    \"pubSec256\": \"0x046c0979fbcd38b7887076db6b08adbbaae45189ac4239d2c06749b634dbeaafdf2b229b6c4eda1ab6ede7e46cbd9ab3ac35df1ac2a6f650bac39fd8474d85524e\",\n    \"secAddr\": \"0x28c12c7b51860b9d5aec3a0ceb63c6e187c00aac\",\n    \"type\": 0\n  },\n  {\n    \"pubBn256\": \"0x093e87d8f1cf8d967be90fc841b73180e8185e480e5b1937c5bd0bf5b47288500598f33d4142bf226b2c8ddaf7358c3093423efdeb1b0a74bfba9d5749ecdf9c\",\n    \"pubSec256\": \"0x04dac7b023f0e9fb5be91b48e5d546b2f2eb91029705f6055c24b3c804a49cf83f7cd584a96346ca42a94a02456444b7df4e280d2726971bf267f8182341ff81b9\",\n    \"secAddr\": \"0x1a95e85e8ffcfd28eb61ee53a542dc98c57b337a\",\n    \"type\": 0\n  },\n  {\n    \"pubBn256\": \"0x00e0c4fae08f124f7a8fe82988a385d9723bea14c8a6e2996a684846ae8d0d4e27abedb7d2f7150bd42ba830e960774b873de74b1d91d7c5ea1ba349a849e575\",\n    \"pubSec256\": \"0x047aa28ac3bf36c51e7781984e2843bdb78bf7d78e3e3f2fe5522581e8f94725749d81b6f2dd3068a02f95b9dddb5e3a97f9c6e22edf5a78e25339c3c94aeb31f1\",\n    \"secAddr\": \"0x57dca45124e253bfa93d7571b43555a861c7455f\",\n    \"type\": 1\n  },\n  {\n    \"pubBn256\": \"0x2094589617397846c5125cf5922ba993643c401998ae8817d5005fe21245f4bc0fbb25158c54446757d2b03d89da10d7dfbbaa23afa38c6e87115dcebe2a8e4d\",\n    \"pubSec256\": \"0x04428597d2d6ab60894c592951337243424637c8b65cc0057215f481dcb78b3e96268365c9bac17bc32b6c08e2c135ca231f636653040f995e8d4e03f6d4b8d812\",\n    \"secAddr\": \"0x2c72d7a8c02752fcfafbaea5a63c53056cfaf547\",\n    \"type\": 1\n  },\n  ... ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getMaxBlockNumber",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getMaxBlockNumber",
    "version": "1.1.1",
    "description": "<p>Get the highest block number of the specified epoch ID(s). <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "number/array",
            "optional": false,
            "field": "epochID",
            "description": "<p>The epochID(s) you want to query.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getMaxBlockNumber\",\"params\":{\"chainType\":\"WAN\", \"epochID\":[18102, 18101]},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getMaxBlockNumber(\"WAN\", [18102, 18101], (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getMaxBlockNumber(\"WAN\", [18102, 18101]);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[\n  {\n    \"epochId\": 18102,\n    \"blockNumber\": 3938057,\n  },\n  {\n    \"epochId\": 18101,\n    \"blockNumber\": 3933152,\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getMaxStableBlkNumber",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getMaxStableBlkNumber",
    "version": "1.1.1",
    "description": "<p>Get the current highest stable block number (no rollback). <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getMaxStableBlkNumber\",\"params\":{\"chainType\":\"WAN\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getMaxStableBlkNumber(\"WAN\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getMaxStableBlkNumber(\"WAN\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "4018017",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getPosInfo",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getPosInfo",
    "version": "1.1.1",
    "description": "<p>Returns the epoch ID and block number when the switch from POW to the POS protocol occurred. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getPosInfo\",\"params\":{\"chainType\":\"WAN\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getPosInfo(\"WAN\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getPosInfo(\"WAN\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n  \"firstBlockNumber\": 3560000,\n  \"firstEpochId\": 18078\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getRandom",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getRandom",
    "version": "1.1.1",
    "description": "<p>Get the random number of the queried epochID and block number. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "epochID",
            "description": "<p>The epochID you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "blockNumber",
            "description": "<p>The blockNumber you want to search. If blockNumber is -1, use the latest block.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getRandom\",\"params\":{\"chainType\":\"WAN\", \"epochID\":18102, \"blockNumber\":-1},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getRandom(\"WAN\", 18102, -1, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getRandom(\"WAN\", 18102, -1);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"0x3a4277627fa45c3bf691014d79c05da2427f8eb115a076b71af7690cdb3a0b5e\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getRandomProposersByEpochID",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getRandomProposersByEpochID",
    "version": "1.1.1",
    "description": "<p>Gets Random Number Proposer public keys of the specified epoch. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "epochID",
            "description": "<p>The epochID you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getRandomProposersByEpochID\",\"params\":{\"chainType\":\"WAN\", \"epochID\":18102},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getRandomProposersByEpochID(\"WAN\", 18102, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getRandomProposersByEpochID(\"WAN\", 18102);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n  \"000000\": \"29e0660fe921282b2d64c6adaf0b24945eee6d9fcdb419c39f84a551ed44151d27f786e5df7abcff94bbed2cbc2791bc76db21b5be469874be181e4fa234fb3e\",\n  \"000001\": \"26a70d685549ffe982df0d66a88f36ac3fca6e488bf69eb6de62a37b97f3f56e2b6b56f47e817c01225ad5549f1ca9751dc1f65559f1a81639c6a4126c9df3ce\",\n  \"000002\": \"21f4f0c4da56206685e94354acba851aab7dc7c090898f6bbb1fc42df986764b055f09e97ceb4c90976a1219ab749dd0b008d47f9c18b962a6056e66de8d858f\",\n  ... ...\n  \"000022\": \"1c96a7abf1424d0c5316fc74eb39022648062fc88997896bdeae70c4e008b3700136608e2ab653c037d144979403061d3247d6298bfdf0b26c9829db3175531e\",\n  \"000023\": \"00e0c4fae08f124f7a8fe82988a385d9723bea14c8a6e2996a684846ae8d0d4e27abedb7d2f7150bd42ba830e960774b873de74b1d91d7c5ea1ba349a849e575\",\n  \"000024\": \"2094589617397846c5125cf5922ba993643c401998ae8817d5005fe21245f4bc0fbb25158c54446757d2b03d89da10d7dfbbaa23afa38c6e87115dcebe2a8e4d\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getSlotActivity",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getSlotActivity",
    "version": "1.1.1",
    "description": "<p>Get the slot leader activity information of the specified epoch. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "epochID",
            "description": "<p>The epochID you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getSlotActivity\",\"params\":{\"chainType\":\"WAN\", \"epochID\":18102},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getSlotActivity(\"WAN\", 18102, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getSlotActivity(\"WAN\", 18102);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n  \"sltLeader\":\n  [\n    \"0xdf24acd01f69d93ad440c8e9ccf5ac6a32d672d4\",\n    \"0x3628bf135f36c6e26a824ec9152885505f3fbc2a\",\n    \"0xeb55839c891286d4d5bb11737fca1136797eaf83\",\n    \"0x2c72d7a8c02752fcfafbaea5a63c53056cfaf547\",\n    \"0xee1ad9c4f9d81f900221e95ee04246b6254b0c6f\",\n    \"0xcd54e0c35b122860d8fe2eb41f2e8e3e79c085ba\",\n    \"0x46530055144fe9365eaae87ba623e2f91cd7eff2\",\n    \"0x375369561dd38fd1a8c93cade745443558fff0bb\",\n    \"0xda8fa1aee77709d37f59fb96afd4cf10ccaeb6ce\",\n    \"0x57dca45124e253bfa93d7571b43555a861c7455f\",\n    \"0x2866bca06ff1d6afe52298f9fc759ea9b80f6902\",\n    \"0xbee03f252dfd38f4f8d10d0664fb50c36526a611\",\n    \"0x0081a626fecff225cd87d3f23c0dd47a9fe243ac\",\n    \"0x1a95e85e8ffcfd28eb61ee53a542dc98c57b337a\",\n    \"0x6273ce1f6f32e129f295f138d6e4ba6f0e19333e\"\n  ],\n  \"slBlocks\": [336, 1085, 359, 671, 693, 366, 349, 53, 74, 70, 364, 347, 339, 337, 339],\n  \"slActivity\": 0.8467013888888889,\n  \"slCtrlCount\": 8849\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getSlotCount",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getSlotCount",
    "version": "1.1.1",
    "description": "<p>Returns the total number of slots in an epoch. This is a constant. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getSlotCount\",\"params\":{\"chainType\":\"WAN\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getSlotCount(\"WAN\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getSlotCount(\"WAN\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "17280",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getSlotID",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getSlotID",
    "version": "1.1.1",
    "description": "<p>Get the current epoch slot ID. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getSlotID\",\"params\":{\"chainType\":\"WAN\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getSlotID(\"WAN\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getSlotID(\"WAN\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "2541",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getSlotTime",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getSlotTime",
    "version": "1.1.1",
    "description": "<p>Get the time span of a slot in seconds. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getSlotTime\",\"params\":{\"chainType\":\"WAN\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getSlotTime(\"WAN\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getSlotTime(\"WAN\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "5",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getStakerInfo",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getStakerInfo",
    "version": "1.1.1",
    "description": "<p>Returns an array of validator information for all validators in the specified block number. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "blockNumber",
            "description": "<p>The blockNumber you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getStakerInfo\",\"params\":{\"chainType\":\"WAN\", \"blockNumber\":3496619},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getStakerInfo(\"WAN\", 3496619, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getStakerInfo(\"WAN\", 3496619);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[\n  {\n    \"address\": \"0xa4626e2bb450204c4b34bcc7525e585e8f678c0d\",\n    \"pubSec256\": \"0x04b7bf8d3868333f70a30041423c7db204b80b9be2e585c344cf3f391cbf77b17fd14f3058d4475d546355bf8c2709ed9ecf5f0cee9d021c90988af0e8cf52001b\",\n    \"pubBn256\": \"0x289787688eb80c1e223375a71f8d17110d638a9143afa190dc11b3c1e64cf92b21feb02ab7a1dcb31892210dfda458aff890fe9e7508292099ae6256f197b325\",\n    \"amount\": \"0xa968163f0a57b400000\",\n    \"votingPower\": \"0x297116712be7b468800000\",\n    \"lockEpochs\": 7,\n    \"maxFeeRate\": 1500,\n    \"nextLockEpochs\": 7,\n    \"from\": \"0xdbb2d6199457d11288f0097659bcec24738e158f\",\n    \"stakingEpoch\": 0,\n    \"feeRate\": 1500,\n    \"feeRateChangedEpoch\": 0,\n    \"clients\":\n    [\n      {\n        \"address\": \"0xfcc3736dc29bf9af7556fcc1dea10b53edaab51d\",\n        \"amount\": \"0x56bc75e2d63100000\",\n        \"votingPower\": \"0x1537da569da5bca00000\",\n        \"quitEpoch\": 18071\n      }\n    ],\n    \"partners\": []\n  },\n  ... ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getTimeByEpochID",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTimeByEpochID",
    "version": "1.1.1",
    "description": "<p>Returns the specified epoch's start time in UTC time seconds. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "epochID",
            "description": "<p>The epochID you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTimeByEpochID\",\"params\":{\"chainType\":\"WAN\", \"epochID\":18108},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getTimeByEpochID(\"WAN\", 18108, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getTimeByEpochID(\"WAN\", 18108);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "1564531200",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getValidatorActivity",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getValidatorActivity",
    "version": "1.1.1",
    "description": "<p>Get the validator activity information of the Epoch Leaders and Random Number Proposers of the specified epoch. Returns null for the current Epoch or future Epochs. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "epochID",
            "description": "<p>The epochID you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getValidatorActivity\",\"params\":{\"chainType\":\"WAN\", \"epochID\":18102},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getValidatorActivity(\"WAN\", 18102, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getValidatorActivity(\"WAN\", 18102);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n  \"epLeader\":\n  [\n    \"0x880d861a8bb6909885bbc65f9fc255bbd11a5825\",\n    \"0xc7afae3c9e99af27fe3eaa10f6ec73cd2dbe003b\",\n    \"0x882c9c16c05496d7b5374840936aec1af2a16553\",\n    \"0x54945447375e25d03033099c540f0998dfa4152d\",\n    \"0x71d063d48ac747dd9ef455cc5a58272c04660983\",\n    \"0xd5551afd5c976a8eaac478f438f51aea4547eda9\",\n    \"0xdfd7aa554653ca236c197ad746edc2954ca172df\",\n    \"0x2c72d7a8c02752fcfafbaea5a63c53056cfaf547\",\n    \"0x73494477f3a099415348cd33e3d46a07f4052600\",\n    \"0x847437144ab96c6c499cdee9edc4d64032d06c86\",\n    \"0x0b80f69fcb2564479058e4d28592e095828d24aa\",\n    \"0x54945447375e25d03033099c540f0998dfa4152d\",\n    \"0x742d898d2ee28a338f03af79c47762a908281a6a\",\n    \"0x93c8ea0326ef334bdc3011e74cd1a6d78ce0594d\",\n    \"0x5c1f00ff943de649519ff1ff35ac5b4c62b90964\",\n    \"0x2a6e8c39d4e9f9152958649fc5dbdb9c68cfcb0b\",\n    \"0xc46b1935326ba2423a9f4bbabf97f74d47f37d59\",\n    \"0xbeb30b68160d845593f01aeb6ad9b6e3cc2e3277\",\n    \"0x3daddc5a590808694eb1b732636a70194ad3d98e\",\n    \"0x266ddcfdbe3ded75e0e511e6356bca052b221c6b\",\n    \"0xb9d6c1a6e52119026cb5d2a82457f5fd6bc7e0c9\",\n    \"0xb44a825eb3f0539f6593ea05740c9f2686973f3c\",\n    \"0xa4539e1bdffceb3557ffb81f87a92e2159f6d637\",\n    \"0xb64b60ba915bc16dc71ea59c9950c1538dcead9c\"\n  ],\n  \"epActivity\":[0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0],\n  \"rpLeader\":\n  [\n    \"0xee1ad9c4f9d81f900221e95ee04246b6254b0c6f\",\n    \"0xaadb06ebb95f165155f12a38bdcb092ac66e0344\",\n    \"0xdfd7aa554653ca236c197ad746edc2954ca172df\",\n    \"0x4bf9fd7308d0849a62c3a7dd71c5190e57c28756\",\n    \"0xb44a825eb3f0539f6593ea05740c9f2686973f3c\",\n    \"0x3628bf135f36c6e26a824ec9152885505f3fbc2a\",\n    \"0x2866bca06ff1d6afe52298f9fc759ea9b80f6902\",\n    \"0x0b80f69fcb2564479058e4d28592e095828d24aa\",\n    \"0x46530055144fe9365eaae87ba623e2f91cd7eff2\",\n    \"0x36fad9acaf51a13527375b1ffc3d5a749153efdb\",\n    \"0xf8fff523fb1450942dd2cd2b29837eaec2c4c860\",\n    \"0x71d063d48ac747dd9ef455cc5a58272c04660983\",\n    \"0x1b7740df685f9d34773d5a2aba6ab3a2c1407f40\",\n    \"0xb58230a7923a6a1941016aa1682e212def899ed1\",\n    \"0x54945447375e25d03033099c540f0998dfa4152d\",\n    \"0x742d898d2ee28a338f03af79c47762a908281a6a\",\n    \"0x85bbe8f965b1719f7089ee9912e7c9b10fe0a999\",\n    \"0xbee03f252dfd38f4f8d10d0664fb50c36526a611\",\n    \"0x2f13896d55ea42b58578cd835064233f8e80a929\",\n    \"0xf543da34477455ccd0ce9b153baaf344cefd9413\",\n    \"0xef09644a88ace467475c2f333f7bb8ffc9427452\",\n    \"0x0adc1b8d04d3856b394c8a170fbaea68589c4de6\",\n    \"0xaadb06ebb95f165155f12a38bdcb092ac66e0344\",\n    \"0x38550ef70511ff71924c4b58220b54e65720384f\",\n    \"0xda8fa1aee77709d37f59fb96afd4cf10ccaeb6ce\"\n  ],\n  \"rpActivity\":[1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getValidatorInfo",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getValidatorInfo",
    "version": "1.1.1",
    "description": "<p>Get the specified validator info by the validator address. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>The validator address you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getValidatorInfo\",\"params\":{\"chainType\":\"WAN\", \"address\":\"0xda8fa1aee77709d37f59fb96afd4cf10ccaeb6ce\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getValidatorInfo(\"WAN\", \"0xda8fa1aee77709d37f59fb96afd4cf10ccaeb6ce\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getValidatorInfo(\"WAN\", \"0xda8fa1aee77709d37f59fb96afd4cf10ccaeb6ce\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n  \"address\": \"0xda8fa1aee77709d37f59fb96afd4cf10ccaeb6ce\",\n  \"amount\": \"5.01e+22\",\n  \"feeRate\": 1500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getValidatorStakeInfo",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getValidatorStakeInfo",
    "version": "1.1.1",
    "description": "<p>Get the specified validator staking info by the validator owner's address. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>The validator owner address you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getValidatorStakeInfo\",\"params\":{\"chainType\":\"WAN\", \"address\":\"0x086b4cfadfd9f232b068c2e8263d608baee85163\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getValidatorStakeInfo(\"WAN\", \"0x086b4cfadfd9f232b068c2e8263d608baee85163\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getValidatorStakeInfo(\"WAN\", \"0x086b4cfadfd9f232b068c2e8263d608baee85163\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[\n  {\n    \"partners\": [],\n    \"address\": \"0xda8fa1aee77709d37f59fb96afd4cf10ccaeb6ce\",\n    \"pubSec256\": \"0x04c5b937557d0f5f4d75831d746fc0197cba50c5a98cb901e941956240d45ea374c6ba5919bc3e57de69f9813f99f6658dc86433b6d1156298cbf2b7087429dcc1\",\n    \"pubBn256\": \"0x0effcb9cb449235ff25108e0d8968b24a52402f4c6a8c67e4c0c71ac2558369d1ccd2e2f5b90613ef05d0594b675a5b7326dce01304f3c0c0b35f5bdc4a7f930\",\n    \"amount\": \"0xa9bed2b4ed2de500000\",\n    \"votingPower\": \"0x2a4544f88e102dc6c00000\",\n    \"lockEpochs\": 10,\n    \"nextLockEpochs\": 10,\n    \"from\": \"0x086b4cfadfd9f232b068c2e8263d608baee85163\",\n    \"stakingEpoch\": 18098,\n    \"feeRate\": 1500,\n    \"clients\":\n    [\n      {\n        \"address\": \"0xf99a8bc18061812e09652f5855908e35d034154b\",\n        \"amount\": \"0x3635c9adc5dea00000\",\n        \"votingPower\": \"0xd42e876228795e400000\",\n        \"quitEpoch\": 0\n      },\n      {\n        \"address\": \"0xa078ecadd6011a0d8df127cb0be12b03f2db0599\",\n        \"amount\": \"0x3635c9adc5dea00000\",\n        \"votingPower\": \"0xd42e876228795e400000\",\n        \"quitEpoch\": 0\n      },\n      {\n        \"address\": \"0xa373c8e5cbbe161cebbaa5d44f991cd265dcf87d\",\n        \"amount\": \"0x431cb388cb7d980000\",\n        \"votingPower\": \"0x106ae56b56c7994f00000\",\n        \"quitEpoch\": 0\n      },\n      {\n        \"address\": \"0xe57fcb59c510354b414b2c982ae1ddc4b0f3d329\",\n        \"amount\": \"0x3635c9adc5dea00000\",\n        \"votingPower\": \"0xd42e876228795e400000\",\n        \"quitEpoch\": 0\n      },\n      ... ...\n    ],\n    \"maxFeeRate\": 1500,\n    \"feeRateChangedEpoch\": 18098\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getValidatorSupStakeInfo",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getValidatorSupStakeInfo",
    "version": "1.1.1",
    "description": "<p>Get supplementary information for the specified validator. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string/array",
            "optional": false,
            "field": "address",
            "description": "<p>The validator address you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getValidatorSupStakeInfo\",\"params\":{\"chainType\":\"WAN\", \"address\":[\"0x158bae682e6278a16d09d7c7311074585d38b54d\",\"0x85dae7e5c7b433a1682c54eee63adf63d835d272\"]},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getValidatorSupStakeInfo(\"WAN\", [\"0x158bae682e6278a16d09d7c7311074585d38b54d\",\"0x85dae7e5c7b433a1682c54eee63adf63d835d272\"], (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getValidatorSupStakeInfo(\"WAN\", [\"0x158bae682e6278a16d09d7c7311074585d38b54d\",\"0x85dae7e5c7b433a1682c54eee63adf63d835d272\"]);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[\n  {\n    \"address\": \"0x158bae682e6278a16d09d7c7311074585d38b54d\",\n    \"stakeIn\": 3778078,\n    \"stakeInTimestamp\": 1563134885\n  },\n  {\n    \"address\": \"0x85dae7e5c7b433a1682c54eee63adf63d835d272\",\n    \"stakeIn\": 3905210,\n    \"stakeInTimestamp\": 1563848135\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getValidatorTotalIncentive",
    "group": "POS",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getValidatorTotalIncentive",
    "version": "1.1.1",
    "description": "<p>Get the specified validator's total incentives. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string/array",
            "optional": false,
            "field": "address",
            "description": "<p>The validator address you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "options",
            "description": "<p>Optional. <br>  <code>from</code> - The number that begin epochID you want to search. <br>  <code>to</code> - The number that end epochID you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getValidatorTotalIncentive\",\"params\":{\"chainType\":\"WAN\", \"address\":\"0xda8fa1aee77709d37f59fb96afd4cf10ccaeb6ce\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getValidatorTotalIncentive(\"WAN\", \"0xda8fa1aee77709d37f59fb96afd4cf10ccaeb6ce\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getValidatorTotalIncentive(\"WAN\", \"0xda8fa1aee77709d37f59fb96afd4cf10ccaeb6ce\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[\n  {\n    \"address\": \"0xda8fa1aee77709d37f59fb96afd4cf10ccaeb6ce\",\n     \"amount\": \"1.828058184231574257465e+21\",\n     \"minEpochId\": 18080,\n     \"epochCount\": 21\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "POS"
  },
  {
    "name": "getOTAMixSet",
    "group": "PrivateTrans",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getOTAMixSet",
    "version": "1.1.1",
    "description": "<p>Returns an array about OTA mix set. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "otaAddress",
            "description": "<p>OtaAddress</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "number",
            "description": "<p>privateTx:ringSize.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>Optional, the chain being queried. Currently supports <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getOTAMixSet\",\"params\":{\"otaAddress\":\"0x02539dD49A75d6Cf4c5cc857bc87BC3836E74F1c845A08eC5E009A4dCa59D47C7c0298697d22cfa7d35A670B45C3531ea9D3aAc39E58c929d440Ac1392BDeB8926e7\",\"number\":8},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getOTAMixSet(\"0x02539dD49A75d6Cf4c5cc857bc87BC3836E74F1c845A08eC5E009A4dCa59D47C7c0298697d22cfa7d35A670B45C3531ea9D3aAc39E58c929d440Ac1392BDeB8926e7\", 8, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getOTAMixSet(\"0x02539dD49A75d6Cf4c5cc857bc87BC3836E74F1c845A08eC5E009A4dCa59D47C7c0298697d22cfa7d35A670B45C3531ea9D3aAc39E58c929d440Ac1392BDeB8926e7\", 8);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[ '0x02a0ab76c74fc379743bdc958d806c9062f3fc68b097fe8e91453d7324f7ae648702a20af02d1fe495036b38ab8c44b5676c1c0158f0057b6500150374b6f19ab2ba',\n'0x020317c92daac5ad9cc5377bc4f493197772e9459fb737e1c26c7e6f030f21b7d002c5d50ef420e818f58c87a3f57cb1167adf268911021e9d0c3cf9aea7e06ac1ad',\n'0x02c6fa830d978e20bff8e993356d3456aa6c6f1dab966d20953bac55b7526ab0f203719139be2bc3660a8841fcf3d34d9043693e48b6cfebeaa4447cb1d72f809139',\n'0x03039ca6d4c95e75b7b6e131bf2af3d84b8d1807c34ed04fc637e57e45f5b590e503db2ce78d660ed6e230feb4ea91d8f7662315731d625d4a7d771cf82b686fb0a9',\n'0x03f0ee5da723151435e287a616e4502642315c9ed933569402ad0f838db0fd597a0325b3cb82275a6aa6cc1f1edc9675fc7201f5e9e589a34ed676f4400f2a081129',\n'0x038b3c1fada7710a519c4bb7929c8d08a8e9e17fcf7ea510043d00a6844a06155c02ec1e571a8f3a1471461cf74ecc4568d4009a3fc910c29c30bfdfb05f79924b12',\n'0x036d369b2a0e4fbd0e270c5d78e8fc53c1b0f1d58878f1a106812380325493fec3020f00e39b4e76169433289f92ee0fea44e1e0f26b87420c6f897489f6975621b6',\n'0x03bf32510e236f8bafd3127a3598f9c36f60612371f798ed766214183d1d2c3f1b027de375bc1112030300b843172f39031a735fc626f76e823e6b3e0367d89b269d' ]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "PrivateTrans"
  },
  {
    "name": "fetchService",
    "group": "Service",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "fetchService",
    "version": "1.1.1",
    "description": "<p>Fetch service API by the native http. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "srvType",
            "description": "<p>The service type.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "funcName",
            "description": "<p>The service URI.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>The http request method as string. Currently supports <code>'GET'</code> and <code>'POST'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "options",
            "description": "<p>Optional, the arguments passing to service API.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"fetchService\",\"params\":{\"srvType\":\"bp\", \"funcName\":\"getAddress\", \"type\":\"POST\", \"options\":{}},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.fetchService(\"bp\", \"getAddress\", \"POST\", {}, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.fetchService(\"bp\", \"getAddress\", \"POST\", {});\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n  \"name\": \"test\",\n  \"address\":\"0x3786038ef9c2f659772c6c2ee8402bdfdc511bb5\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Service"
  },
  {
    "name": "fetchSpecialService",
    "group": "Service",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "fetchSpecialService",
    "version": "1.1.1",
    "description": "<p>Fetch the special service API by the native http. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "url",
            "description": "<p>The special service request url absolutely.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>The http request method as string. Currently supports <code>'GET'</code> and <code>'POST'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "options",
            "description": "<p>The arguments passing to service API.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"fetchSpecialService\",\"params\":{\"url\":\"https://xxx.com:443/getAddress\", \"type\":\"POST\", \"options\":{}},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.fetchSpecialService(\"https://xxx.com:443/getAddress\", \"POST\", {}, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.fetchSpecialService(\"https://xxx.com:443/getAddress\", \"POST\", {});\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n  \"name\": \"test\",\n  \"address\":\"0x3786038ef9c2f659772c6c2ee8402bdfdc511bb5\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Service"
  },
  {
    "name": "getRegisteredAds",
    "group": "Service",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getRegisteredAds",
    "version": "1.1.1",
    "description": "<p>Get records of registered advertisements information. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "options",
            "description": "<p>Optional. <br>  <code>name</code> - The advertisement name you want to search. <br>  <code>after</code> - The timestamp after you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getRegisteredAds\",\"params\":{\"after\":######},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getRegisteredAds(######, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getRegisteredAds(######);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[\n  {\n    \"name\": \"test\",\n    \"iconData\": \"iVBORw0KGgoAAAGG ... ...\",\n    \"iconType\": \"png\",\n    \"url\": \"https://test.io/\",\n    \"updatedAt\": 1563780893497\n  },\n  ... ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Service"
  },
  {
    "name": "getRegisteredDapp",
    "group": "Service",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getRegisteredDapp",
    "version": "1.1.1",
    "description": "<p>Get records of registered Dapps information. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "options",
            "description": "<p>Optional. <br>  <code>chainType</code> - The chain type being queried. Currently supports <code>'WAN'</code>. <br>  <code>url</code> - The URL being queried. <br>  <code>language</code> - The supported language being queried. <br>  <code>name</code> - The name being fuzzy queried. <br>  <code>after</code> - The timestamp after you want to search. <br>  <code>pageIndex</code> - The page index you want to search. If you want to query with the <code>pageIndex</code>, <code>page</code> is needed. <br>  <code>page</code> - The page size you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getRegisteredDapp\",\"params\":{\"after\":1577155812700, \"platform\":[\"desktop\"]},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getRegisteredDapp({after:1577155812700, platform:[\"desktop\"]}, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getRegisteredDapp({after:1577155812700, platform:[\"desktop\"]});\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[\n  {\n    \"langInfo\": [\n      {\n        \"language\": \"en\",\n        \"name\": \"WRDEX\",\n        \"summary\": \"A Crosschain Dex in wanchain.\",\n        \"detail\": \"A Crosschain Dex in wanchain.\"\n      },\n      {\n        \"language\": \"zh\",\n        \"name\": \"WRDEX\",\n        \"summary\": \"一款万维链上基于链下撮合链上结算原理的去中心化交易所。\",\n        \"detail\": \"一款万维链上基于链下撮合链上结算原理的去中心化交易所。\"\n      }\n    ],\n    \"url\": \"https://exchange.wrdex.io\",\n    \"chainType\": \"wan\",\n    \"type\": \"Exchange\",\n    \"creator\": \"rivex.io\",\n    \"creatorWebsite\": \"https://wrdex.io\",\n    \"scAddress\": [\n      \"0x8786038ef9c2f659772c6c2ee8402bdfdc511bb8\"\n    ],\n    \"iconType\": \"jpg\",\n    \"iconData\": \"/9j/4AAQSkZJRgABAQEBLAEsA ... ...\",\n    \"updatedAt\": 1586226464996\n  },\n  ... ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Service"
  },
  {
    "name": "getRegisteredOrigToken",
    "group": "Service",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getRegisteredOrigToken",
    "version": "1.1.1",
    "description": "<p>Get records of registered tokens information of original chain. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "options",
            "description": "<p>Optional. <br>  <code>tokenScAddr</code> - The token account of <code>'WAN'</code> chain. <br>  <code>after</code> - The timestamp after you want to search. <br>  <code>pageIndex</code> - The page index you want to search. If you want to query with the <code>pageIndex</code>, <code>page</code> is needed. <br>  <code>page</code> - The page size you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getRegisteredOrigToken\",\"params\":{\"chainType\":\"WAN\", \"after\":1577155812700},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getRegisteredOrigToken(\"WAN\", {after:1577155812700}, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getRegisteredOrigToken(\"WAN\", {after:1577155812700});\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[\n    \"tokenScAddr\": \"0xc6f4465a6a521124c8e3096b62575c157999d361\",\n    \"iconType\": \"jpg\",\n    \"iconData\": \"/9j/4AAQSkZJRgABAQEBLAEsA ... ...\",\n    \"updatedAt\": :1589512354784\n  },\n  ... ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Service"
  },
  {
    "name": "getRegisteredToken",
    "group": "Service",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getRegisteredToken",
    "version": "1.1.1",
    "description": "<p>Get records of registered tokens information. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "tokenOrigAccount",
            "description": "<p>The token account of original chain.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "after",
            "description": "<p>The timestamp after you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getRegisteredToken\",\"params\":{\"after\":1577155812700},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getRegisteredToken(1577155812700, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getRegisteredToken(1577155812700);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[\n  {\n    \"tokenOrigAccount\": \"0x00f58d6d585f84b2d7267940cede30ce2fe6eae8\",\n    \"decimals\": 18,\n    \"deposit\": \"10000000000000000000\",\n    \"iconData\": \"/9j/4AAQSkZJ ... ...\",\n    \"iconType\": \"jpg\",\n    \"name\": \"Wanchain ZRX Crosschain Token\",\n    \"symbol\": \"ZRX\",\n    \"token2WanRatio\": \"20000\",\n    \"tokenWanAddr\": \"0x2a4359d8b84b270eb112b54273439ac538f32733\",\n    \"updatedAt\": 1577155812722,\n    \"withDrawDelayTime\": \"259200\"\n  },\n  ... ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Service"
  },
  {
    "name": "getRegisteredValidator",
    "group": "Service",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getRegisteredValidator",
    "version": "1.1.1",
    "description": "<p>Get records of registered validators information. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "address",
            "description": "<p>The validator address you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "after",
            "description": "<p>The timestamp after you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getRegisteredValidator\",\"params\":{\"after\":1503780889497},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getRegisteredValidator(1503780889497, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getRegisteredValidator(1503780889497);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[\n  {\n    \"address\": \"0x17d47c6ac4f72d43420f5e9533b526b2dee626a6\",\n    \"name\": \"MatPool\",\n    \"iconData\": \"iVBORw0KGgoAAAANSUhEUgAAAEwAAABQCAYAAACzg5PLAAAABGd ... ...\",\n    \"iconType\": \"png\",\n    \"url\": \"https://matpool.io/\",\n    \"updatedAt\": 1563780889497\n  },\n  ... ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Service"
  },
  {
    "name": "getGasPrice",
    "group": "Status",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getGasPrice",
    "version": "1.1.1",
    "description": "<p>Get the current gas price in wei as bigNumber type. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code> and <code>'ETH'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getGasPrice\",\"params\":{\"chainType\":\"WAN\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getGasPrice('WAN', (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getGasPrice('WAN');\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"180000000000\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Status"
  },
  {
    "name": "getMultiTokenBalance",
    "group": "Tokens",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getMultiTokenBalance",
    "version": "1.1.1",
    "description": "<p>Gets token balance for multiple addresses of specified token on Wanchain in a single call. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code> and <code>'ETH'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "addressArray",
            "description": "<p>An array of addresses being queried.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tokenScAddr",
            "description": "<p>The token contract address for specified token. I.e., If chainType is <code>'WAN'</code>, it should be the token address for <code>&quot;WETH&quot;</code> or <code>&quot;WBTC&quot;</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getMultiTokenBalance\",\"params\":{\"address\": [\"0xfac95c16da814d24cc64b3186348afecf527324f\",\"0xfac95c16da814d24cc64b3186348afecf527324e\"],\"tokenScAddr\" : \"0x63eed4943abaac5f43f657d8eec098ca6d6a546e\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getMultiTokenBalance(\"WAN\", [\"0xfac95c16da814d24cc64b3186348afecf527324f\",\"0xfac95c16da814d24cc64b3186348afecf527324e\"], \"0x63eed4943abaac5f43f657d8eec098ca6d6a546e\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getMultiTokenBalance(\"WAN\", [\"0xfac95c16da814d24cc64b3186348afecf527324f\",\"0xfac95c16da814d24cc64b3186348afecf527324e\"], \"0x63eed4943abaac5f43f657d8eec098ca6d6a546e\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": " {\n  \"0xfac95c16da814d24cc64b3186348afecf527324f\": \"10000000000000000000000\",\n  \"0xfac95c16da814d24cc64b3186348afecf527324e\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Tokens"
  },
  {
    "name": "getMultiTokenInfo",
    "group": "Tokens",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getMultiTokenInfo",
    "version": "1.1.1",
    "description": "<p>Get the information for multiple tokens. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code> and <code>'ETH'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "tokenScAddrArray",
            "description": "<p>The token address array for the tokens that you want to query.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getMultiTokenInfo\",\"params\":{\"tokenScAddrArray\":[\"0xc5bc855056d99ef4bda0a4ae937065315e2ae11a\",\"0x7017500899433272b4088afe34c04d742d0ce7df\"],\"chainType\":\"ETH\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getMultiTokenInfo(\"ETH\", [\"0xc5bc855056d99ef4bda0a4ae937065315e2ae11a\",\"0x7017500899433272b4088afe34c04d742d0ce7df\"], (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getMultiTokenInfo(\"ETH\", [\"0xc5bc855056d99ef4bda0a4ae937065315e2ae11a\",\"0x7017500899433272b4088afe34c04d742d0ce7df\"]);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n   \"0xc5bc855056d99ef4bda0a4ae937065315e2ae11a\": {\n     \"symbol\": \"WCT\",\n     \"decimals\": \"18\"\n   },\n   \"0x7017500899433272b4088afe34c04d742d0ce7df\": {\n     \"symbol\": \"WCT_One\",\n     \"decimals\": \"18\"\n   }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Tokens"
  },
  {
    "name": "getTokenAllowance",
    "group": "Tokens",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTokenAllowance",
    "version": "1.1.1",
    "description": "<p>Get the token allowance for one specific account on one contract for one specific spender account on a certain chain. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code> and <code>'ETH'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tokenScAddr",
            "description": "<p>The token contract address for the specified token.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ownerAddr",
            "description": "<p>The owner address on the specified contract.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "spenderAddr",
            "description": "<p>The spender address on the specified contract.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTokenAllowance\",\"params\":{\"chainType\":\"ETH\", \"tokenScAddr\":\"0xc5bc855056d99ef4bda0a4ae937065315e2ae11a\", \"ownerAddr\":\"0xc27ecd85faa4ae80bf5e28daf91b605db7be1ba8\", \"spenderAddr\":\"0xcdc96fea7e2a6ce584df5dc22d9211e53a5b18b1\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getTokenAllowance(\"ETH\", \"0xc5bc855056d99ef4bda0a4ae937065315e2ae11a\", \"0xc27ecd85faa4ae80bf5e28daf91b605db7be1ba8\", \"0xcdc96fea7e2a6ce584df5dc22d9211e53a5b18b1\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getTokenAllowance(\"ETH\", \"0xc5bc855056d99ef4bda0a4ae937065315e2ae11a\", \"0xc27ecd85faa4ae80bf5e28daf91b605db7be1ba8\", \"0xcdc96fea7e2a6ce584df5dc22d9211e53a5b18b1\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"999999999999980000000000000\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Tokens"
  },
  {
    "name": "getTokenBalance",
    "group": "Tokens",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTokenBalance",
    "version": "1.1.1",
    "description": "<p>Get token balance for a single address of a specified token on Wanchain. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code> and <code>'ETH'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>The account being queried.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tokenScAddr",
            "description": "<p>The token contract address for specified token. I.e., If chainType is <code>'WAN'</code>, it should be the token address for <code>&quot;WETH&quot;</code> or <code>&quot;WBTC&quot;</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTokenBalance\",\"params\":{\"address\": \"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\",\"tokenScAddr\" : \"0x63eed4943abaac5f43f657d8eec098ca6d6a546e\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getTokenBalance(\"WAN\", \"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\", \"0x63eed4943abaac5f43f657d8eec098ca6d6a546e\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getTokenBalance(\"WAN\", \"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\", \"0x63eed4943abaac5f43f657d8eec098ca6d6a546e\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"10000000000000000000000\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Tokens"
  },
  {
    "name": "getTokenInfo",
    "group": "Tokens",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTokenInfo",
    "version": "1.1.1",
    "description": "<p>Get the info of token contract, like symbol and decimals, on certain chain. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code> and <code>'ETH'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tokenScAddr",
            "description": "<p>The token contract address for the specified token.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTokenInfo\",\"params\":{\"chainType\":\"ETH\", \"tokenScAddr\":\"0xc5bc855056d99ef4bda0a4ae937065315e2ae11a\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getTokenInfo(\"ETH\", \"0xc5bc855056d99ef4bda0a4ae937065315e2ae11a\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getTokenInfo(\"ETH\", \"0xc5bc855056d99ef4bda0a4ae937065315e2ae11a\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": " {\n  \"symbol\": \"WCT\",\n  \"decimals\": \"18\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Tokens"
  },
  {
    "name": "getTokenSupply",
    "group": "Tokens",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTokenSupply",
    "version": "1.1.1",
    "description": "<p>Get total amount of certain token on Wanchain. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code> and <code>'ETH'</code>, default: <code>'WAN'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tokenScAddr",
            "description": "<p>The token contract address for the specified token.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTokenSupply\",\"params\":{\"tokenScAddr\" : \"0x63eed4943abaac5f43f657d8eec098ca6d6a546e\"},\"id\":1}\nor\n{\"jsonrpc\":\"2.0\",\"method\":\"getTokenSupply\",\"params\":{\"chainType\":\"WAN\", \"tokenScAddr\" : \"0x63eed4943abaac5f43f657d8eec098ca6d6a546e\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getTokenSupply(\"WAN\", \"0x63eed4943abaac5f43f657d8eec098ca6d6a546e\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getTokenSupply(\"WAN\", \"0x63eed4943abaac5f43f657d8eec098ca6d6a546e\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"30000000000000000000000\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Tokens"
  },
  {
    "name": "estimateGas",
    "group": "Transaction",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "estimateGas",
    "version": "1.1.1",
    "description": "<p>Executes a message call or transaction and returns the amount of the gas used. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code> or <code>'ETH'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "txObject",
            "description": "<p>The transaction object see web3.eth.sendTransaction, with the difference that for calls the from property is optional as well.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"estimateGas\",\"params\":{\"chainType\":\"WAN\",\"from\":\"0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe\",\"to\":\"0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe\",\"value\":\"1000000000000000\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.estimateGas(\"WAN\", {from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe',\n    to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',\n    value: '1000000000000000'}, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.estimateGas(\"WAN\", {from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe',\n    to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',\n    value: '1000000000000000'});\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "21000",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Transaction"
  },
  {
    "name": "getTransByAddress",
    "group": "Transactions",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTransByAddress",
    "version": "1.1.1",
    "description": "<p>Get transaction information via the specified address on certain chain. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain name that you want to search, should be <code>&quot;WAN&quot;</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>The account's address that you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTransByAddress\",\"params\":{\"chainType\":\"WAN\", \"address\":\"0xbb9003ca8226f411811dd16a3f1a2c1b3f71825d\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getTransByAddress(\"WAN\", \"0xbb9003ca8226f411811dd16a3f1a2c1b3f71825d\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getTransByAddress(\"WAN\", \"0xbb9003ca8226f411811dd16a3f1a2c1b3f71825d\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[{\n    \"blockNumber\": 1004796,\n    \"gas\": 90000,\n    \"nonce\": 505,\n    \"transactionIndex\": 0,\n    \"txType\": \"0x1\",\n    \"blockHash\": \"0x604e45aa6b67b1957ba793e534878d94bfbacd38eed2eb51990de097595a334e\",\n    \"from\": \"0xbb9003ca8226f411811dd16a3f1a2c1b3f71825d\",\n    \"gasPrice\": \"180000000000\",\n    \"hash\": \"0x353545658d513ff4fe1db9b0f979a24a831ae0949b37bc1afefc8179fc29b358\",\n    \"input\": \"0x\",\n    \"to\": \"0x8fbc408bef86476e3098dc539762d4021092bbde\",\n    \"value\": \"100000000000000000000\",\n    \"v\": \"0x2a\",\n    \"r\": \"0xbe8f287930782cff4d2e12e4a55c46765b610b88d13bc1a060a4565f3316e933\",\n    \"s\": \"0x7a297e96c54fffd124833462e03725ea8d168465d34a3e577afbaa9d05a99cd0\"\n  }, {\n    \"blockNumber\": 1004818,\n    \"gas\": 21000,\n    \"nonce\": 0,\n    \"transactionIndex\": 0,\n    \"txType\": \"0x1\",\n    \"blockHash\": \"0xbb5769654036fdb768ede5b1a172298d408808e7dcb78a82b3c8d5ef32fc67cb\",\n    \"from\": \"0x8fbc408bef86476e3098dc539762d4021092bbde\",\n    \"gasPrice\": \"200000000000\",\n    \"hash\": \"0xee3371655a53e6d413c3b9d570fee8852989554989fde51136cf3b9c672e272d\",\n    \"input\": \"0x\",\n    \"to\": \"0xc68b75ca4e4bf0b71e3594452a5e47b11d287724\",\n    \"value\": \"1000000000000000000\",\n    \"v\": \"0x2a\",\n    \"r\": \"0x4341dcd4156050b664b9c977644756201a6357c7b12e5db86b370a38b1ed6dfb\",\n    \"s\": \"0x43b380fc67394e8b9483af97f5de067ef6617b17cfaa75517f07ec8d166f3c65\"\n  }]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Transactions"
  },
  {
    "name": "getTransByAddressBetweenBlocks",
    "group": "Transactions",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTransByAddressBetweenBlocks",
    "version": "1.1.1",
    "description": "<p>Get transaction information via the specified address between the specified startBlockNo and endBlockNo on certain chain. <br>Comments: <br>    if no startBlockNo given, startBlockNo will be set to 0; <br>    if no endBlockNo given, endBlockNo will be set to the newest blockNumber. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain name that you want to search, should be <code>&quot;WAN&quot;</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>The account's address that you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "startBlockNo",
            "description": "<p>The startBlockNo that you want to search from.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "endBlockNo",
            "description": "<p>The endBlockNo that you want to search to.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTransByAddressBetweenBlocks\",\"params\":{\"chainType\":\"WAN\", \"address\":\"0xbb9003ca8226f411811dd16a3f1a2c1b3f71825d\", \"startBlockNo\":984119, \"endBlockNo\":984120},\"id\":1}",
          "type": "string"
        },
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTransByAddress\",\"params\":{\"chainType\":\"WAN\", \"address\":\"0xbb9003ca8226f411811dd16a3f1a2c1b3f71825d\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getTransByAddressBetweenBlocks(\"WAN\", \"0xbb9003ca8226f411811dd16a3f1a2c1b3f71825d\", 984119, 984120, (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getTransByAddressBetweenBlocks(\"WAN\", \"0xbb9003ca8226f411811dd16a3f1a2c1b3f71825d\", 984119, 984120);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[{\n    \"blockNumber\": 984119,\n    \"gas\": 4700000,\n    \"nonce\": 407,\n    \"transactionIndex\": 0,\n    \"txType\": \"0x1\",\n    \"blockHash\": \"0xdf59acacabe8c1b64ca6ff611c629069731d9dae60f4b0cc753c4a0571ea7f27\",\n    \"from\": \"0xbb9003ca8226f411811dd16a3f1a2c1b3f71825d\",\n    \"gasPrice\": \"180000000000\",\n    \"hash\": \"0xf4610446d836b95d577ba723e1df55258e4f602cfa26d5ada3b50fa2fe82b469\",\n    \"input\": \"0x6060604052341561000f57600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506102d78061005e6000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630900f01014610067578063445df0ac146100a05780638da5cb5b146100c9578063fdacd5761461011e575b600080fd5b341561007257600080fd5b61009e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610141565b005b34156100ab57600080fd5b6100b3610220565b6040518082815260200191505060405180910390f35b34156100d457600080fd5b6100dc610226565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561012957600080fd5b61013f600480803590602001909190505061024b565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561021c578190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b151561020b57600080fd5b5af1151561021857600080fd5b5050505b5050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102a857806001819055505b505600a165627a7a72305820de682f89b485041a9206a7304a95a151cd2363297029280359a4ca996dcaeda20029\",\n    \"to\": null,\n    \"value\": \"0\",\n    \"v\": \"0x29\",\n    \"r\": \"0xd14dfde02e305a945e6a09b6dbd5fe1f1bd5a6dc0721c15f72732aa10a3829b3\",\n    \"s\": \"0x56923b20a15f02633295b415ae52161529d560580dfcd62a97bc394c841bea37\"\n  }]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Transactions"
  },
  {
    "name": "getTransByBlock",
    "group": "Transactions",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTransByBlock",
    "version": "1.1.1",
    "description": "<p>Get transaction information in a given block by block number or block hash on certain chain. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain name that you want to search, should be <code>&quot;WAN&quot;</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "blockHashOrBlockNumber",
            "description": "<p>The blockHash or the blockNumber you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTransByBlock\",\"params\":{\"chainType\":\"WAN\", \"blockNumber\":\"984133\"},\"id\":1}\nor\n{\"jsonrpc\":\"2.0\",\"method\":\"getTransByBlock\",\"params\":{\"chainType\":\"WAN\", \"blockHash\":\"0xaa0fc2a8a868566f2e4888b2942ec05c47c2254e8b81e43d3ea87420a09126c2\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getTransByBlock(\"WAN\", \"0xc18c4bdf0d40c4bb2f34f0273eaf4dc674171fbf33c3301127e1d4c85c574ebe\", (err, result) => {\n// apiTest.getTransByBlock(\"WAN\", \"984133\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getTransByBlock(\"WAN\", \"0xc18c4bdf0d40c4bb2f34f0273eaf4dc674171fbf33c3301127e1d4c85c574ebe\");\n//let result = await apiTest.getTransByBlock(\"WAN\", \"984133\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "[{\n    \"blockNumber\": 984133,\n    \"gas\": 4700000,\n    \"nonce\": 414,\n    \"transactionIndex\": 0,\n    \"txType\": \"0x1\",\n    \"blockHash\": \"0xaa0fc2a8a868566f2e4888b2942ec05c47c2254e8b81e43d3ea87420a09126c2\",\n    \"from\": \"0xbb9003ca8226f411811dd16a3f1a2c1b3f71825d\",\n    \"gasPrice\": \"180000000000\",\n    \"hash\": \"0x2c6dee69c9cc5676484d80d173d683802a4f761d5785a694b4262fbf39dff8fe\",\n    \"input\": \"0xfdacd5760000000000000000000000000000000000000000000000000000000000000002\",\n    \"to\": \"0x92e8ae701cd081ae8f0cb03dcae2e57b9b261667\",\n    \"value\": \"0\",\n    \"v\": \"0x29\",\n    \"r\": \"0x1c1ad7e8ee64fc284adce0910d6f811933af327b20cb8adba392a1b24a15054f\",\n    \"s\": \"0x690785383bed28c9a951b30329a066cb78062f63febf5aa1ca7e7ef62a2108cb\"\n  }]",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Transactions"
  },
  {
    "name": "getTransactionConfirm",
    "group": "Transactions",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTransactionConfirm",
    "version": "1.1.1",
    "description": "<p>Get the transaction mined result on certain chain. When the receipt not existed, return directly with 'no receipt was found'; If receipt existed, the receipt will be returned after confirm-block-number blocks. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code> and <code>'ETH'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "waitBlocks",
            "description": "<p>The confirm-block-number you want to set.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "txHash",
            "description": "<p>The txHash you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTransactionConfirm\",\"params\":{\"chainType\":\"WAN\", \"waitBlocks\": 6, \"txHash\": \"0xd2a5b1f403594dbc881e466d46a4cac3d6cf202476b1277876f0b24923d032da\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getTransactionConfirm(\"WAN\", 6, \"0xd2a5b1f403594dbc881e466d46a4cac3d6cf202476b1277876f0b24923d032da\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getTransactionConfirm(\"WAN\", 6, \"0xd2a5b1f403594dbc881e466d46a4cac3d6cf202476b1277876f0b24923d032da\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n    \"blockHash\": \"0xcb76ea6649d801cc45294f4d0858bad1ca0c2b169b20c4beae2852c57a7f69c9\",\n    \"blockNumber\": 1137680,\n    \"contractAddress\": null,\n    \"cumulativeGasUsed\": 29572,\n    \"from\": \"0xed1baf7289c0acef52db0c18e1198768eb06247e\",\n    \"gasUsed\": 29572,\n    \"logs\": [{\n      \"address\": \"0xda5b90dc89be59365ec44f3f2d7af8b6700d1167\",\n      \"topics\": [\"0xa4345d0839b39e5a6622a55c68bd8f83ac8a68fad252a8363a2c09dbaf85c793\", \"0x0000000000000000000000000000000000000000000000000000000000000005\"],\n      \"data\": \"0x54657374206d6573736167650000000000000000000000000000000000000000\",\n      \"blockNumber\": 1137680,\n      \"transactionHash\": \"0xd2a5b1f403594dbc881e466d46a4cac3d6cf202476b1277876f0b24923d032da\",\n      \"transactionIndex\": 0,\n      \"blockHash\": \"0xcb76ea6649d801cc45294f4d0858bad1ca0c2b169b20c4beae2852c57a7f69c9\",\n      \"logIndex\": 0,\n      \"removed\": false\n    }],\n    \"logsBloom\": \"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000001000000800000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000200000000000\",\n    \"status\": \"0x1\",\n    \"to\": \"0xda5b90dc89be59365ec44f3f2d7af8b6700d1167\",\n    \"transactionHash\": \"0xd2a5b1f403594dbc881e466d46a4cac3d6cf202476b1277876f0b24923d032da\",\n    \"transactionIndex\": 0\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Transactions"
  },
  {
    "name": "getTransactionReceipt",
    "group": "Transactions",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTransactionReceipt",
    "version": "1.1.1",
    "description": "<p>Get the receipt of a transaction by transaction hash on certain chain. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain being queried. Currently supports <code>'WAN'</code> and <code>'ETH'</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "txHash",
            "description": "<p>The txHash you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTransactionReceipt\",\"params\":{\"chainType\":\"WAN\", \"txHash\":\"0xc18c4bdf0d40c4bb2f34f0273eaf4dc674171fbf33c3301127e1d4c85c574ebe\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getTransactionReceipt(\"WAN\", \"0xc18c4bdf0d40c4bb2f34f0273eaf4dc674171fbf33c3301127e1d4c85c574ebe\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getTransactionReceipt(\"WAN\", \"0xc18c4bdf0d40c4bb2f34f0273eaf4dc674171fbf33c3301127e1d4c85c574ebe\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n    \"logs\": [],\n    \"blockHash\": \"0x18198d5e42859067db405c9144306f7da87210a8604aac66ef6759b14a199d6b\",\n    \"blockNumber\": 2548378,\n    \"contractAddress\": null,\n    \"cumulativeGasUsed\": 21000,\n    \"from\": \"0xdcfffcbb1edc98ebbc5c7a6b3b700a6748eca3b0\",\n    \"gasUsed\": 21000,\n    \"logsBloom\": \"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\",\n    \"status\": \"0x1\",\n    \"to\": \"0x157908807e95f864284e84cc5d307ce6f3574532\",\n    \"transactionHash\": \"0xc18c4bdf0d40c4bb2f34f0273eaf4dc674171fbf33c3301127e1d4c85c574ebe\",\n    \"transactionIndex\": 0\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Transactions"
  },
  {
    "name": "getTxInfo",
    "group": "Transactions",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTxInfo",
    "version": "1.1.1",
    "description": "<p>Get the transaction detail via txHash on certain chain. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain name that you want to search, should be <code>&quot;WAN&quot;</code> or <code>&quot;ETH&quot;</code> or <code>&quot;BTC&quot;</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "txHash",
            "description": "<p>The txHash you want to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "options",
            "description": "<p>Optional. <br>  <code>format</code> - Whether to get the serialized or decoded transaction, in this case, the <code>chainType</code> should be <code>&quot;BTC&quot;</code>: <br>     Set to <code>false</code> (the default) to return the serialized transaction as hex. <br>     Set to <code>true</code> to return a decoded transaction.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTxInfo\",\"params\":{\"chainType\":\"WAN\", \"txHash\":\"0xd2a5b1f403594dbc881e466d46a4cac3d6cf202476b1277876f0b24923d032da\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.getTxInfo(\"WAN\", \"0xd2a5b1f403594dbc881e466d46a4cac3d6cf202476b1277876f0b24923d032da\", (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.getTxInfo(\"WAN\", \"0xd2a5b1f403594dbc881e466d46a4cac3d6cf202476b1277876f0b24923d032da\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n    \"txType\": \"0x1\",\n    \"blockHash\": \"0xcb76ea6649d801cc45294f4d0858bad1ca0c2b169b20c4beae2852c57a7f69c9\",\n    \"blockNumber\": 1137680,\n    \"from\": \"0xed1baf7289c0acef52db0c18e1198768eb06247e\",\n    \"gas\": 1000000,\n    \"gasPrice\": \"320000000000\",\n    \"hash\": \"0xd2a5b1f403594dbc881e466d46a4cac3d6cf202476b1277876f0b24923d032da\",\n    \"input\": \"0x642b273754657374206d6573736167650000000000000000000000000000000000000000\",\n    \"nonce\": 26,\n    \"to\": \"0xda5b90dc89be59365ec44f3f2d7af8b6700d1167\",\n    \"transactionIndex\": 0,\n    \"value\": \"0\",\n    \"v\": \"0x1b\",\n    \"r\": \"0xe3a5a5d73d0b6512676723bc4bab4f7ffe01476f8cbc9631976890e175d487ac\",\n    \"s\": \"0x3a79e17290fe2a9f4e5b5c5431eb322882729d68ca0d736c5d9b1f3285c9169e\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Transactions"
  },
  {
    "name": "sendRawTransaction",
    "group": "Transactions",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "sendRawTransaction",
    "version": "1.1.1",
    "description": "<p>Submit a pre-signed transaction for broadcast to certain chain. <br><br><strong>Returns:</strong> <br><font color=&#39;blue&#39;>«Promise,undefined»</font> Returns undefined if used with callback or a promise otherwise.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>The chain name that you want to search, should be <code>&quot;WAN&quot;</code> or <code>&quot;ETH&quot;</code> or <code>&quot;BTC&quot;</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "signedTx",
            "description": "<p>The signedTx you want to send.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "callback",
            "description": "<p>Optional, the callback will receive two parameters: <br>  <code>err</code> - If an error occurred. <br>  <code>result</code> - The saved result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"sendRawTransaction\",\"params\":{\"chainType\":\"WAN\", \"signedTx\":\"0xf86e0109852e90edd000832dc6c0946ed9c11cbd8a6ae8355fa62ebca48493da572661880de0b6b3a7640000801ca0bd349ec9f51dd171eb5c59df9a6b8c5656eacb6793bed945a7ec69135f191abfa0359da11e8a4fdd51b52a8752ac32f9125d168441546d011406736bce67b8a356\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example callback usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\napiTest.sendRawTransaction('WAN', '0xf86e0109852e90edd000832dc6c0946ed9c11cbd8a6ae8355fa62ebca48493da572661880de0b6b3a7640000801ca0bd349ec9f51dd171eb5c59df9a6b8c5656eacb6793bed945a7ec69135f191abfa0359da11e8a4fdd51b52a8752ac32f9125d168441546d011406736bce67b8a356', (err, result) => {\n  console.log(\"Result is \", result);\n  apiTest.close();\n});",
        "type": "nodejs"
      },
      {
        "title": "Example promise usage:",
        "content": "const ApiInstance = require('iwan-sdk');\nlet apiTest = new ApiInstance(YOUR-API-KEY, YOUR-SECRET-KEY);\nlet result = await apiTest.sendRawTransaction('WAN', '0xf86e0109852e90edd000832dc6c0946ed9c11cbd8a6ae8355fa62ebca48493da572661880de0b6b3a7640000801ca0bd349ec9f51dd171eb5c59df9a6b8c5656eacb6793bed945a7ec69135f191abfa0359da11e8a4fdd51b52a8752ac32f9125d168441546d011406736bce67b8a356');\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "nodejs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"0x4dcfc82728b5a9307f249ac095c8e6fcc436db4f85a094a0c5a457255c20f80f\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/apis/apiInstance.js",
    "groupTitle": "Transactions"
  }
] });
