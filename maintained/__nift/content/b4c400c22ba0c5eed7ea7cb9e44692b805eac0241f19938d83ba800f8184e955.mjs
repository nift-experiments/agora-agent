import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Call custom tools",
  description: "Let the LLM call your own HTTPS endpoints as tools during a conversation."
};
export let _markdown = `

To look up data or take action in your systems, you can set up a Conversational AI agent to use custom tools through your own HTTPS endpoints.

When the LLM needs a tool call, it generates the tool's parameters from the conversation. The Conversational AI Engine validates those parameters, makes one synchronous request to your endpoint, and returns the result to the LLM so it can continue generating a response. Only the LLM's reply is sent to TTS, never the raw HTTP response.

Common use cases include:

* **Looking up business data**: Query order status, account balances, or inventory from your own systems.
* **Performing actions**: Create a support ticket, schedule an appointment, or update a record.
* **Grounding responses**: Pull current, business-specific information into the conversation without retraining the model.

## Understand the tech [#understand-the-tech]

Each custom tool declares a \`function\` block with a name, description, and a JSON Schema for its parameters. It also declares a \`server\` block that describes the HTTPS request the Conversational AI Engine sends once the LLM has generated valid parameters. Tool calling supports only synchronous \`GET\` and \`POST\` requests to a single endpoint per tool.

Custom tools, [MCP tools](mcp-tools), built-in tools, and model-native tools all share one tool namespace. Names are not case-sensitive. An agent can expose at most 32 tools to the LLM. If tool names conflict or the limit is exceeded, the agent fails to start.

MLLM agents support custom tools as well. Declare them in \`mllm.tools\`, which takes the same tool definitions as \`llm.tools\`, so the rest of this page applies to both. For an MLLM agent, read \`llm.tools\` as \`mllm.tools\` and the LLM as the MLLM.

The following aren't supported:

* \`PUT\`, \`PATCH\`, or \`DELETE\` requests, automatic retries, or following HTTP redirects.
* Asynchronous tools, callbacks, polling, or stored/reusable tool references.
* OAuth token exchange, dynamic request signing, or mTLS for authenticating to your endpoint.

## Prerequisites [#prerequisites]

* Implemented the basic logic for interacting with a conversational AI agent by following the [quickstart](../../get-started/quickstart).
* A text LLM or MLLM that supports function calling. Custom LLMs and Dify aren't supported.
* An HTTPS endpoint your agent can call to fulfill the tool.

## Implementation [#implementation]

You declare tools when creating the agent, using either an Agora Agents SDK or the [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-tools) REST API.

### Configure a GET tool [#configure-a-get-tool]

The following example configures a \`GET\` tool that looks up order status:

<Tabs defaultValue="python" groupId="ai-sdk-language">
  <TabsList>
    <TabsTrigger value="python">
      Python SDK
    </TabsTrigger>

    <TabsTrigger value="typescript">
      TypeScript SDK
    </TabsTrigger>

    <TabsTrigger value="go">
      Go SDK
    </TabsTrigger>

    <TabsTrigger value="rest-api">
      REST API
    </TabsTrigger>
  </TabsList>

  <TabsContent value="python">
    \`\`\`python
    from agora_agent import OpenAI

    # ... other agent configuration ...
    .with_llm(OpenAI(
        api_key='your-llm-api-key',
        model='gpt-4o-mini',
        base_url='https://api.openai.com/v1/chat/completions',
        template_variables={
            'api_key': 'Bearer your-order-service-key',
        },
        tools=[
            {
                'type': 'function',
                'function': {
                    'name': 'getOrderStatus',
                    'description': "Get the shipping status for a customer's order by order ID.",
                    'parameters': {
                        'type': 'object',
                        'properties': {
                            'order_id': {
                                'type': 'string',
                                'description': 'The order ID, for example ORD-10293.',
                            },
                        },
                        'required': ['order_id'],
                        'additionalProperties': False,
                    },
                },
                'execution': {'mode': 'sync'},
                'server': {
                    'method': 'GET',
                    'url': 'https://api.example.com/orders/{{args.order_id}}/status',
                    'headers': {
                        'Authorization': '{{template_variables.api_key}}',
                    },
                    'timeout_ms': 5000,
                },
            },
        ],
    ))
    .with_tools(True)
    # ... continue with .with_tts() and .create_session() ...
    \`\`\`
  </TabsContent>

  <TabsContent value="typescript">
    \`\`\`typescript
    import { OpenAI, type LlmTool } from 'agora-agents';

    const orderStatusTool: LlmTool = {
      type: 'function',
      function: {
        name: 'getOrderStatus',
        description: "Get the shipping status for a customer's order by order ID.",
        parameters: {
          type: 'object',
          properties: {
            order_id: {
              type: 'string',
              description: 'The order ID, for example ORD-10293.',
            },
          },
          required: ['order_id'],
          additionalProperties: false,
        },
      },
      execution: { mode: 'sync' },
      server: {
        method: 'GET',
        url: 'https://api.example.com/orders/{{args.order_id}}/status',
        headers: {
          Authorization: '{{template_variables.api_key}}',
        },
        timeout_ms: 5000,
      },
    };

    // ... other agent configuration ...
    .withLlm(new OpenAI({
      apiKey: 'your-llm-api-key',
      model: 'gpt-4o-mini',
      url: 'https://api.openai.com/v1/chat/completions',
      templateVariables: {
        api_key: 'Bearer your-order-service-key',
      },
      tools: [orderStatusTool],
    }))
    .withTools(true)
    // ... continue with .withTts() and .createSession() ...
    \`\`\`
  </TabsContent>

  <TabsContent value="go">
    \`\`\`go
    orderStatusTool := &Agora.LlmTool{
        Function: &Agora.LlmToolFunction{
            Name:        "getOrderStatus",
            Description: Agora.String("Get the shipping status for a customer's order by order ID."),
            Parameters: &Agora.LlmToolFunctionParameters{
                Properties: map[string]interface{}{
                    "order_id": map[string]interface{}{
                        "type":        "string",
                        "description": "The order ID, for example ORD-10293.",
                    },
                },
                Required: []string{"order_id"},
            },
        },
        Execution: &Agora.LlmToolExecution{
            Mode: Agora.LlmToolExecutionModeSync.Ptr(),
        },
        Server: &Agora.LlmToolServer{
            Method: Agora.LlmToolServerMethodGet,
            URL:    "https://api.example.com/orders/{{args.order_id}}/status",
            Headers: map[string]string{
                "Authorization": "{{template_variables.api_key}}",
            },
            TimeoutMs: Agora.Int(5000),
        },
    }

    // ... other agent configuration ...
    .WithLlm(
        vendors.NewOpenAI(vendors.OpenAIOptions{
            APIKey:  "your-llm-api-key",
            Model:   "gpt-4o-mini",
            BaseURL: "https://api.openai.com/v1/chat/completions",
            TemplateVariables: map[string]string{
                "api_key": "Bearer your-order-service-key",
            },
            Tools: []*Agora.LlmTool{orderStatusTool},
        }),
    )
    .WithTools(true)
    // ... continue with .WithTts() and .CreateSession() ...
    \`\`\`
  </TabsContent>

  <TabsContent value="rest-api">
    \`\`\`json
    {
      "properties": {
        "advanced_features": {
          "enable_tools": true
        },
        "llm": {
          "url": "https://api.openai.com/v1/chat/completions",
          "api_key": "your-llm-api-key",
          "params": { "model": "gpt-4o-mini" },
          "template_variables": {
            "api_key": "Bearer your-order-service-key"
          },
          "tools": [
            {
              "type": "function",
              "function": {
                "name": "getOrderStatus",
                "description": "Get the shipping status for a customer's order by order ID.",
                "parameters": {
                  "type": "object",
                  "properties": {
                    "order_id": {
                      "type": "string",
                      "description": "The order ID, for example ORD-10293."
                    }
                  },
                  "required": ["order_id"],
                  "additionalProperties": false
                }
              },
              "execution": {
                "mode": "sync"
              },
              "server": {
                "method": "GET",
                "url": "https://api.example.com/orders/{{args.order_id}}/status",
                "headers": {
                  "Authorization": "{{template_variables.api_key}}"
                },
                "timeout_ms": 5000
              }
            }
          ]
        }
      }
    }
    \`\`\`
  </TabsContent>
</Tabs>

To create the agent, enable tool calling. With the REST API, set \`properties.advanced_features.enable_tools\` to \`true\`. With an Agora Agents SDK, call \`with_tools(True)\` (Python), \`withTools(true)\` (TypeScript), or \`WithTools(true)\` (Go). If you don't enable tool calling, the engine doesn't expose tools to the model and never calls their endpoints.

Once this is configured, a user can ask something like "What's the status of order ORD-10293?" After the model generates \`order_id\`, the engine sends:

\`\`\`http
GET https://api.example.com/orders/ORD-10293/status
Authorization: Bearer your-order-service-key
\`\`\`

**Field reference**

Use the following fields to configure tool calling:

<Tabs defaultValue="python" groupId="ai-sdk-language">
  <TabsList>
    <TabsTrigger value="python">
      Python SDK
    </TabsTrigger>

    <TabsTrigger value="typescript">
      TypeScript SDK
    </TabsTrigger>

    <TabsTrigger value="go">
      Go SDK
    </TabsTrigger>

    <TabsTrigger value="rest-api">
      REST API
    </TabsTrigger>
  </TabsList>

  <TabsContent value="python">
    Configure tools using the \`tools\` parameter on the LLM vendor class, and enable tool calling with \`with_tools(True)\`. Each tool can be a dictionary or an \`LlmToolConfig\` object.

    | Parameter                      | Required            | Description                                                                                                                                                   |
    | ------------------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`tools\`                        | No                  | The custom tool array on the LLM vendor class.                                                                                                                |
    | \`with_tools(True)\`             | Yes                 | Enables calling both custom tools and MCP tools.                                                                                                              |
    | \`tools[].type\`                 | Yes                 | Fixed as \`function\`.                                                                                                                                          |
    | \`tools[].function\`             | Yes                 | The tool definition visible to the model, including its name, description, and parameter schema.                                                              |
    | \`tools[].function.name\`        | Yes                 | Must start with a letter, contain only letters and numbers, and be no more than 64 characters long. Can't use the \`mcp\` prefix or the value \`ragsearch_tool\`. |
    | \`tools[].function.description\` | Yes                 | Explains the tool's purpose, when to call it, and what it returns. Don't include secrets.                                                                     |
    | \`tools[].function.parameters\`  | Yes                 | A JSON Schema object. The root \`type\` must be \`object\`. Passed using OpenAI's non-strict function-calling mode.                                               |
    | \`tools[].execution.mode\`       | No                  | Defaults to \`sync\` when omitted. Only \`sync\` is supported.                                                                                                    |
    | \`tools[].server.method\`        | Yes                 | Only \`GET\` and \`POST\` are supported. A \`GET\` tool can't include \`body\`.                                                                                       |
    | \`tools[].server.url\`           | Yes                 | An absolute HTTPS URL. The path and query parameters can use template variables.                                                                              |
    | \`tools[].server.headers\`       | No                  | Up to 32 entries. Can't use \`{{args.<name>}}\`; pass authentication only as a complete header value.                                                           |
    | \`tools[].server.body\`          | Optional for \`POST\` | \`POST\` only, supports nested JSON. Template placeholders must be complete, not concatenated with other text.                                                  |
    | \`tools[].server.timeout_ms\`    | No                  | Defaults to \`10000\`, in the range \`1000\` to \`100000\`.                                                                                                         |
  </TabsContent>

  <TabsContent value="typescript">
    Configure tools using the \`tools\` option on the LLM vendor class, and enable tool calling with \`withTools(true)\`.

    | Parameter                      | Required            | Description                                                                                                                                                   |
    | ------------------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`tools\`                        | No                  | The custom tool array on the LLM vendor class, of type \`LlmTool[]\`.                                                                                           |
    | \`withTools(true)\`              | Yes                 | Enables calling both custom tools and MCP tools.                                                                                                              |
    | \`tools[].type\`                 | Yes                 | Fixed as \`function\`.                                                                                                                                          |
    | \`tools[].function\`             | Yes                 | The tool definition visible to the model, including its name, description, and parameter schema.                                                              |
    | \`tools[].function.name\`        | Yes                 | Must start with a letter, contain only letters and numbers, and be no more than 64 characters long. Can't use the \`mcp\` prefix or the value \`ragsearch_tool\`. |
    | \`tools[].function.description\` | Yes                 | Explains the tool's purpose, when to call it, and what it returns. Don't include secrets.                                                                     |
    | \`tools[].function.parameters\`  | Yes                 | A JSON Schema object. The root \`type\` must be \`object\`. Passed using OpenAI's non-strict function-calling mode.                                               |
    | \`tools[].execution.mode\`       | No                  | Defaults to \`sync\` when omitted. Only \`sync\` is supported.                                                                                                    |
    | \`tools[].server.method\`        | Yes                 | Only \`GET\` and \`POST\` are supported. A \`GET\` tool can't include \`body\`.                                                                                       |
    | \`tools[].server.url\`           | Yes                 | An absolute HTTPS URL. The path and query parameters can use template variables.                                                                              |
    | \`tools[].server.headers\`       | No                  | Up to 32 entries. Can't use \`{{args.<name>}}\`; pass authentication only as a complete header value.                                                           |
    | \`tools[].server.body\`          | Optional for \`POST\` | \`POST\` only, supports nested JSON. Template placeholders must be complete, not concatenated with other text.                                                  |
    | \`tools[].server.timeout_ms\`    | No                  | Defaults to \`10000\`, in the range \`1000\` to \`100000\`.                                                                                                         |
  </TabsContent>

  <TabsContent value="go">
    Configure tools using the \`Tools\` field on the LLM vendor options, and enable tool calling with \`WithTools(true)\`.

    | Parameter                     | Required            | Description                                                                                                                                                   |
    | ----------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`Tools\`                       | No                  | The custom tool array on the LLM vendor options, of type \`[]*Agora.LlmTool\`.                                                                                  |
    | \`WithTools(true)\`             | Yes                 | Enables calling both custom tools and MCP tools.                                                                                                              |
    | \`LlmTool.Function\`            | Yes                 | The tool definition visible to the model, including its name, description, and parameter schema.                                                              |
    | \`LlmToolFunction.Name\`        | Yes                 | Must start with a letter, contain only letters and numbers, and be no more than 64 characters long. Can't use the \`mcp\` prefix or the value \`ragsearch_tool\`. |
    | \`LlmToolFunction.Description\` | Yes                 | Explains the tool's purpose, when to call it, and what it returns. Don't include secrets.                                                                     |
    | \`LlmToolFunction.Parameters\`  | Yes                 | A JSON Schema object with \`Properties\` and \`Required\`. The SDK serializes the root type as \`object\`. Passed using OpenAI's non-strict function-calling mode.  |
    | \`LlmToolExecution.Mode\`       | No                  | Defaults to \`sync\` when omitted. Only \`Agora.LlmToolExecutionModeSync\` is supported.                                                                          |
    | \`LlmToolServer.Method\`        | Yes                 | Accepts \`Agora.LlmToolServerMethodGet\` or \`Agora.LlmToolServerMethodPost\`. A \`GET\` tool can't include \`Body\`.                                                 |
    | \`LlmToolServer.URL\`           | Yes                 | An absolute HTTPS URL. The path and query parameters can use template variables.                                                                              |
    | \`LlmToolServer.Headers\`       | No                  | Up to 32 entries. Can't use \`{{args.<name>}}\`; pass authentication only as a complete header value.                                                           |
    | \`LlmToolServer.Body\`          | Optional for \`POST\` | \`POST\` only, supports nested JSON. Template placeholders must be complete, not concatenated with other text.                                                  |
    | \`LlmToolServer.TimeoutMs\`     | No                  | Defaults to \`10000\`, in the range \`1000\` to \`100000\`.                                                                                                         |
  </TabsContent>

  <TabsContent value="rest-api">
    Configure tools in the \`properties.llm.tools\` array, and set \`properties.advanced_features.enable_tools\` to \`true\`.

    | Parameter                                   | Required            | Description                                                                                                                                                   |
    | ------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`properties.advanced_features.enable_tools\` | Yes                 | Set to \`true\` so the agent can expose custom tools and MCP tools to the model. If omitted or \`false\`, the agent doesn't call any tool endpoints.              |
    | \`properties.llm.tools\`                      | No                  | The custom tool array. Custom tools, MCP tools, built-in tools, and model-native tools share one model-visible tool namespace.                                |
    | \`tools[].type\`                              | Yes                 | Fixed as \`function\`.                                                                                                                                          |
    | \`tools[].function\`                          | Yes                 | The tool definition visible to the model, including its name, description, and parameter schema.                                                              |
    | \`tools[].function.name\`                     | Yes                 | Must start with a letter, contain only letters and numbers, and be no more than 64 characters long. Can't use the \`mcp\` prefix or the value \`ragsearch_tool\`. |
    | \`tools[].function.description\`              | Yes                 | Explains the tool's purpose, when to call it, and what it returns. Don't include secrets.                                                                     |
    | \`tools[].function.parameters\`               | Yes                 | A JSON Schema object. The root \`type\` must be \`object\`. Passed using OpenAI's non-strict function-calling mode.                                               |
    | \`tools[].execution\`                         | No                  | Defaults to \`{ "mode": "sync" }\` when omitted. Only \`sync\` is supported.                                                                                      |
    | \`tools[].server\`                            | Yes                 | The actual HTTP request configuration.                                                                                                                        |
    | \`tools[].server.method\`                     | Yes                 | Only \`GET\` and \`POST\` are supported. A \`GET\` tool can't include \`body\`.                                                                                       |
    | \`tools[].server.url\`                        | Yes                 | An absolute HTTPS URL. The path and query parameters can use template variables.                                                                              |
    | \`tools[].server.headers\`                    | No                  | Up to 32 entries. Can't use \`{{args.<name>}}\`; pass authentication only as a complete header value.                                                           |
    | \`tools[].server.body\`                       | Optional for \`POST\` | \`POST\` only, supports nested JSON. Template placeholders must be complete, not concatenated with other text.                                                  |
    | \`tools[].server.timeout_ms\`                 | No                  | Defaults to \`10000\`, in the range \`1000\` to \`100000\`.                                                                                                         |
  </TabsContent>
</Tabs>

<CalloutContainer type="info">
  <CalloutDescription>
    Even if tool calling isn't enabled, any tools you declare are still validated for field type, size, template syntax, and duplicate names.
  </CalloutDescription>
</CalloutContainer>

### Configure a POST tool [#configure-a-post-tool]

Use a \`POST\` tool to perform actions, such as creating a ticket or sending a message. A request body can only be used with \`POST\`; configuring one for a \`GET\` tool causes validation to fail. The following example sends a confirmed delivery address to a phone number:

<Tabs defaultValue="python" groupId="ai-sdk-language">
  <TabsList>
    <TabsTrigger value="python">
      Python SDK
    </TabsTrigger>

    <TabsTrigger value="typescript">
      TypeScript SDK
    </TabsTrigger>

    <TabsTrigger value="go">
      Go SDK
    </TabsTrigger>

    <TabsTrigger value="rest-api">
      REST API
    </TabsTrigger>
  </TabsList>

  <TabsContent value="python">
    \`\`\`python
    sms_tool = {
        'type': 'function',
        'function': {
            'name': 'sendFollowUpSms',
            'description': "Send the customer's confirmed delivery address to a phone number. Only call this after the customer has confirmed both the address and the phone number.",
            'parameters': {
                'type': 'object',
                'properties': {
                    'phone_number': {
                        'type': 'string',
                        'description': 'The recipient phone number, in E.164 format.',
                    },
                    'address': {
                        'type': 'string',
                        'description': "The customer's confirmed delivery address.",
                    },
                },
                'required': ['phone_number', 'address'],
                'additionalProperties': False,
            },
        },
        'execution': {'mode': 'sync'},
        'server': {
            'method': 'POST',
            'url': 'https://api.example.com/messages/sms',
            'headers': {
                'Authorization': '{{template_variables.api_key}}',
                'Content-Type': 'application/json',
            },
            'body': {
                'to': '{{args.phone_number}}',
                'message': '{{args.address}}',
                'idempotency_key': '{{tool_call_id}}',
            },
            'timeout_ms': 10000,
        },
    }

    # ... other agent configuration ...
    .with_llm(OpenAI(
        api_key='your-llm-api-key',
        model='gpt-4o-mini',
        base_url='https://api.openai.com/v1/chat/completions',
        template_variables={
            'api_key': 'Bearer your-messaging-service-key',
        },
        tools=[sms_tool],
    ))
    .with_tools(True)
    # ... continue with .with_tts() and .create_session() ...
    \`\`\`
  </TabsContent>

  <TabsContent value="typescript">
    \`\`\`typescript
    const smsTool: LlmTool = {
      type: 'function',
      function: {
        name: 'sendFollowUpSms',
        description:
          "Send the customer's confirmed delivery address to a phone number. Only call this after the customer has confirmed both the address and the phone number.",
        parameters: {
          type: 'object',
          properties: {
            phone_number: {
              type: 'string',
              description: 'The recipient phone number, in E.164 format.',
            },
            address: {
              type: 'string',
              description: "The customer's confirmed delivery address.",
            },
          },
          required: ['phone_number', 'address'],
          additionalProperties: false,
        },
      },
      execution: { mode: 'sync' },
      server: {
        method: 'POST',
        url: 'https://api.example.com/messages/sms',
        headers: {
          Authorization: '{{template_variables.api_key}}',
          'Content-Type': 'application/json',
        },
        body: {
          to: '{{args.phone_number}}',
          message: '{{args.address}}',
          idempotency_key: '{{tool_call_id}}',
        },
        timeout_ms: 10000,
      },
    };

    // ... other agent configuration ...
    .withLlm(new OpenAI({
      apiKey: 'your-llm-api-key',
      model: 'gpt-4o-mini',
      url: 'https://api.openai.com/v1/chat/completions',
      templateVariables: {
        api_key: 'Bearer your-messaging-service-key',
      },
      tools: [smsTool],
    }))
    .withTools(true)
    // ... continue with .withTts() and .createSession() ...
    \`\`\`
  </TabsContent>

  <TabsContent value="go">
    \`\`\`go
    smsTool := &Agora.LlmTool{
        Function: &Agora.LlmToolFunction{
            Name:        "sendFollowUpSms",
            Description: Agora.String("Send the customer's confirmed delivery address to a phone number. Only call this after the customer has confirmed both the address and the phone number."),
            Parameters: &Agora.LlmToolFunctionParameters{
                Properties: map[string]interface{}{
                    "phone_number": map[string]interface{}{
                        "type":        "string",
                        "description": "The recipient phone number, in E.164 format.",
                    },
                    "address": map[string]interface{}{
                        "type":        "string",
                        "description": "The customer's confirmed delivery address.",
                    },
                },
                Required: []string{"phone_number", "address"},
            },
        },
        Execution: &Agora.LlmToolExecution{
            Mode: Agora.LlmToolExecutionModeSync.Ptr(),
        },
        Server: &Agora.LlmToolServer{
            Method: Agora.LlmToolServerMethodPost,
            URL:    "https://api.example.com/messages/sms",
            Headers: map[string]string{
                "Authorization": "{{template_variables.api_key}}",
                "Content-Type":  "application/json",
            },
            Body: map[string]interface{}{
                "to":              "{{args.phone_number}}",
                "message":         "{{args.address}}",
                "idempotency_key": "{{tool_call_id}}",
            },
            TimeoutMs: Agora.Int(10000),
        },
    }

    // ... other agent configuration ...
    .WithLlm(
        vendors.NewOpenAI(vendors.OpenAIOptions{
            APIKey:  "your-llm-api-key",
            Model:   "gpt-4o-mini",
            BaseURL: "https://api.openai.com/v1/chat/completions",
            TemplateVariables: map[string]string{
                "api_key": "Bearer your-messaging-service-key",
            },
            Tools: []*Agora.LlmTool{smsTool},
        }),
    )
    .WithTools(true)
    // ... continue with .WithTts() and .CreateSession() ...
    \`\`\`
  </TabsContent>

  <TabsContent value="rest-api">
    The following JSON shows only the \`POST\` tool entry in the \`properties.llm.tools\` array:

    \`\`\`json
    {
      "type": "function",
      "function": {
        "name": "sendFollowUpSms",
        "description": "Send the customer's confirmed delivery address to a phone number. Only call this after the customer has confirmed both the address and the phone number.",
        "parameters": {
          "type": "object",
          "properties": {
            "phone_number": {
              "type": "string",
              "description": "The recipient phone number, in E.164 format."
            },
            "address": {
              "type": "string",
              "description": "The customer's confirmed delivery address."
            }
          },
          "required": ["phone_number", "address"],
          "additionalProperties": false
        }
      },
      "execution": {
        "mode": "sync"
      },
      "server": {
        "method": "POST",
        "url": "https://api.example.com/messages/sms",
        "headers": {
          "Authorization": "{{template_variables.api_key}}",
          "Content-Type": "application/json"
        },
        "body": {
          "to": "{{args.phone_number}}",
          "message": "{{args.address}}",
          "idempotency_key": "{{tool_call_id}}"
        },
        "timeout_ms": 10000
      }
    }
    \`\`\`
  </TabsContent>
</Tabs>

\`{{tool_call_id}}\` is the system-generated ID correlating this tool call. You can pass it to your own service to correlate logs or detect a repeated call, but passing it alone doesn't stop your service from processing the same request twice, and Agora doesn't automatically retry requests. Your service is still responsible for handling duplicate requests and unknown outcomes.

**Field reference**

\`function\` and \`execution\` are the same as for a \`GET\` tool. The following fields are specific to a \`POST\` tool's server configuration:

<Tabs defaultValue="python" groupId="ai-sdk-language">
  <TabsList>
    <TabsTrigger value="python">
      Python SDK
    </TabsTrigger>

    <TabsTrigger value="typescript">
      TypeScript SDK
    </TabsTrigger>

    <TabsTrigger value="go">
      Go SDK
    </TabsTrigger>

    <TabsTrigger value="rest-api">
      REST API
    </TabsTrigger>
  </TabsList>

  <TabsContent value="python">
    | Parameter                   | Required | Description                                                                                                                      |
    | --------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
    | \`tools[].server.method\`     | Yes      | Fixed as \`POST\`.                                                                                                                 |
    | \`tools[].server.url\`        | Yes      | An absolute HTTPS URL. The path and query parameters can use template variables.                                                 |
    | \`tools[].server.headers\`    | No       | Configure authentication and \`Content-Type\`. Can't use \`{{args.<name>}}\`; pass authentication only as a complete header value.   |
    | \`tools[].server.body\`       | No       | The \`POST\` request body. Supports nested JSON. Values can be constants or complete template placeholders, not concatenated text. |
    | \`tools[].server.timeout_ms\` | No       | Defaults to \`10000\`, in the range \`1000\` to \`100000\`.                                                                            |
  </TabsContent>

  <TabsContent value="typescript">
    | Parameter                   | Required | Description                                                                                                                      |
    | --------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
    | \`tools[].server.method\`     | Yes      | Fixed as \`POST\`.                                                                                                                 |
    | \`tools[].server.url\`        | Yes      | An absolute HTTPS URL. The path and query parameters can use template variables.                                                 |
    | \`tools[].server.headers\`    | No       | Configure authentication and \`Content-Type\`. Can't use \`{{args.<name>}}\`; pass authentication only as a complete header value.   |
    | \`tools[].server.body\`       | No       | The \`POST\` request body. Supports nested JSON. Values can be constants or complete template placeholders, not concatenated text. |
    | \`tools[].server.timeout_ms\` | No       | Defaults to \`10000\`, in the range \`1000\` to \`100000\`.                                                                            |
  </TabsContent>

  <TabsContent value="go">
    | Parameter                 | Required | Description                                                                                                                      |
    | ------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
    | \`LlmToolServer.Method\`    | Yes      | Fixed as \`Agora.LlmToolServerMethodPost\`.                                                                                        |
    | \`LlmToolServer.URL\`       | Yes      | An absolute HTTPS URL. The path and query parameters can use template variables.                                                 |
    | \`LlmToolServer.Headers\`   | No       | Configure authentication and \`Content-Type\`. Can't use \`{{args.<name>}}\`; pass authentication only as a complete header value.   |
    | \`LlmToolServer.Body\`      | No       | The \`POST\` request body. Supports nested JSON. Values can be constants or complete template placeholders, not concatenated text. |
    | \`LlmToolServer.TimeoutMs\` | No       | Defaults to \`10000\`, in the range \`1000\` to \`100000\`.                                                                            |
  </TabsContent>

  <TabsContent value="rest-api">
    | Parameter                   | Required | Description                                                                                                                      |
    | --------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
    | \`tools[].server.method\`     | Yes      | Fixed as \`POST\`.                                                                                                                 |
    | \`tools[].server.url\`        | Yes      | An absolute HTTPS URL. The path and query parameters can use template variables.                                                 |
    | \`tools[].server.headers\`    | No       | Configure authentication and \`Content-Type\`. Can't use \`{{args.<name>}}\`; pass authentication only as a complete header value.   |
    | \`tools[].server.body\`       | No       | The \`POST\` request body. Supports nested JSON. Values can be constants or complete template placeholders, not concatenated text. |
    | \`tools[].server.timeout_ms\` | No       | Defaults to \`10000\`, in the range \`1000\` to \`100000\`.                                                                            |
  </TabsContent>
</Tabs>

For \`POST\` tools that change data or trigger an action:

* State the conditions for calling the tool in its description and in your system prompt, such as requiring the user to confirm first.
* Perform the final authorization check on your own server. Don't rely on the LLM's judgment alone.
* Only have the agent tell the user the request succeeded after your endpoint returns a \`2xx\` status.
* If a request has already been sent, a user interruption doesn't guarantee the remote action is canceled or rolled back.

### Configure template variables [#configure-template-variables]

Template variables let you fill an HTTP request with either LLM-generated parameters or fixed values known when you create the agent. The following example puts a tenant ID in a header and a customer ID in the request body:

<Tabs defaultValue="python" groupId="ai-sdk-language">
  <TabsList>
    <TabsTrigger value="python">
      Python SDK
    </TabsTrigger>

    <TabsTrigger value="typescript">
      TypeScript SDK
    </TabsTrigger>

    <TabsTrigger value="go">
      Go SDK
    </TabsTrigger>

    <TabsTrigger value="rest-api">
      REST API
    </TabsTrigger>
  </TabsList>

  <TabsContent value="python">
    \`\`\`python
    profile_tool = {
        'type': 'function',
        'function': {
            'name': 'getCustomerProfile',
            'description': "Look up the current customer's profile.",
            'parameters': {
                'type': 'object',
                'properties': {},
                'additionalProperties': False,
            },
        },
        'execution': {'mode': 'sync'},
        'server': {
            'method': 'POST',
            'url': 'https://api.example.com/customers/profile',
            'headers': {
                'X-Tenant-ID': '{{template_variables.tenant_id}}',
            },
            'body': {
                'customer_id': '{{template_variables.customer_id}}',
            },
        },
    }

    # ... other agent configuration ...
    .with_llm(OpenAI(
        api_key='your-llm-api-key',
        model='gpt-4o-mini',
        base_url='https://api.openai.com/v1/chat/completions',
        template_variables={
            'tenant_id': 'acme-corp',
            'customer_id': 'cust-4471',
        },
        tools=[profile_tool],
    ))
    .with_tools(True)
    # ... continue with .with_tts() and .create_session() ...
    \`\`\`
  </TabsContent>

  <TabsContent value="typescript">
    \`\`\`typescript
    const profileTool: LlmTool = {
      type: 'function',
      function: {
        name: 'getCustomerProfile',
        description: "Look up the current customer's profile.",
        parameters: { type: 'object', properties: {}, additionalProperties: false },
      },
      execution: { mode: 'sync' },
      server: {
        method: 'POST',
        url: 'https://api.example.com/customers/profile',
        headers: {
          'X-Tenant-ID': '{{template_variables.tenant_id}}',
        },
        body: {
          customer_id: '{{template_variables.customer_id}}',
        },
      },
    };

    // ... other agent configuration ...
    .withLlm(new OpenAI({
      apiKey: 'your-llm-api-key',
      model: 'gpt-4o-mini',
      url: 'https://api.openai.com/v1/chat/completions',
      templateVariables: {
        tenant_id: 'acme-corp',
        customer_id: 'cust-4471',
      },
      tools: [profileTool],
    }))
    .withTools(true)
    // ... continue with .withTts() and .createSession() ...
    \`\`\`
  </TabsContent>

  <TabsContent value="go">
    \`\`\`go
    profileTool := &Agora.LlmTool{
        Function: &Agora.LlmToolFunction{
            Name:        "getCustomerProfile",
            Description: Agora.String("Look up the current customer's profile."),
            Parameters: &Agora.LlmToolFunctionParameters{
                Properties: map[string]interface{}{},
            },
        },
        Execution: &Agora.LlmToolExecution{
            Mode: Agora.LlmToolExecutionModeSync.Ptr(),
        },
        Server: &Agora.LlmToolServer{
            Method: Agora.LlmToolServerMethodPost,
            URL:    "https://api.example.com/customers/profile",
            Headers: map[string]string{
                "X-Tenant-ID": "{{template_variables.tenant_id}}",
            },
            Body: map[string]interface{}{
                "customer_id": "{{template_variables.customer_id}}",
            },
        },
    }

    // ... other agent configuration ...
    .WithLlm(
        vendors.NewOpenAI(vendors.OpenAIOptions{
            APIKey:  "your-llm-api-key",
            Model:   "gpt-4o-mini",
            BaseURL: "https://api.openai.com/v1/chat/completions",
            TemplateVariables: map[string]string{
                "tenant_id":   "acme-corp",
                "customer_id": "cust-4471",
            },
            Tools: []*Agora.LlmTool{profileTool},
        }),
    )
    .WithTools(true)
    // ... continue with .WithTts() and .CreateSession() ...
    \`\`\`
  </TabsContent>

  <TabsContent value="rest-api">
    \`\`\`json
    {
      "properties": {
        "llm": {
          "template_variables": {
            "tenant_id": "acme-corp",
            "customer_id": "cust-4471"
          },
          "tools": [
            {
              "type": "function",
              "function": {
                "name": "getCustomerProfile",
                "description": "Look up the current customer's profile.",
                "parameters": {
                  "type": "object",
                  "properties": {},
                  "additionalProperties": false
                }
              },
              "execution": {
                "mode": "sync"
              },
              "server": {
                "method": "POST",
                "url": "https://api.example.com/customers/profile",
                "headers": {
                  "X-Tenant-ID": "{{template_variables.tenant_id}}"
                },
                "body": {
                  "customer_id": "{{template_variables.customer_id}}"
                }
              }
            }
          ]
        }
      }
    }
    \`\`\`
  </TabsContent>
</Tabs>

**Field reference**

<Tabs defaultValue="python" groupId="ai-sdk-language">
  <TabsList>
    <TabsTrigger value="python">
      Python SDK
    </TabsTrigger>

    <TabsTrigger value="typescript">
      TypeScript SDK
    </TabsTrigger>

    <TabsTrigger value="go">
      Go SDK
    </TabsTrigger>

    <TabsTrigger value="rest-api">
      REST API
    </TabsTrigger>
  </TabsList>

  <TabsContent value="python">
    | Parameter                          | Description                                                                                      |
    | ---------------------------------- | ------------------------------------------------------------------------------------------------ |
    | \`template_variables\`               | Fixed string values known when the agent is created, set on the LLM vendor class.                |
    | \`server.headers\` and \`server.body\` | Read a fixed value with \`{{template_variables.<name>}}\`.                                         |
    | \`server.body\`                      | Can also use \`{{args.<name>}}\` and \`{{tool_call_id}}\`, which don't require \`template_variables\`. |
  </TabsContent>

  <TabsContent value="typescript">
    | Parameter                          | Description                                                                                     |
    | ---------------------------------- | ----------------------------------------------------------------------------------------------- |
    | \`templateVariables\`                | Fixed string values known when the agent is created, set on the LLM vendor class.               |
    | \`server.headers\` and \`server.body\` | Read a fixed value with \`{{template_variables.<name>}}\`.                                        |
    | \`server.body\`                      | Can also use \`{{args.<name>}}\` and \`{{tool_call_id}}\`, which don't require \`templateVariables\`. |
  </TabsContent>

  <TabsContent value="go">
    | Parameter                                        | Description                                                                                     |
    | ------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
    | \`TemplateVariables\`                              | Fixed string values known when the agent is created, set on the LLM vendor options.             |
    | \`LlmToolServer.Headers\` and \`LlmToolServer.Body\` | Read a fixed value with \`{{template_variables.<name>}}\`.                                        |
    | \`LlmToolServer.Body\`                             | Can also use \`{{args.<name>}}\` and \`{{tool_call_id}}\`, which don't require \`TemplateVariables\`. |
  </TabsContent>

  <TabsContent value="rest-api">
    | Parameter                                          | Description                                                                                      |
    | -------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
    | \`properties.llm.template_variables\`                | Fixed string values known when the agent is created.                                             |
    | \`properties.llm.tools[].server.headers\` and \`body\` | Read a fixed value with \`{{template_variables.<name>}}\`.                                         |
    | \`properties.llm.tools[].server.body\`               | Can also use \`{{args.<name>}}\` and \`{{tool_call_id}}\`, which don't require \`template_variables\`. |
  </TabsContent>
</Tabs>

Keep the following rules in mind when using template variables:

* Placeholders are substituted once; they aren't expanded recursively.
* A template must reference a complete variable. Concatenating text, such as \`order-{{args.order_id}}\`, isn't supported.
* Nested fields, array indexes, and shorthand forms like \`{{name}}\` aren't supported.
* \`{{args.<name>}}\` can't be used in headers.
* Header names, the HTTP method, and the URL's scheme, host, and port can't be templated.
* Variables used in the URL path and query parameters are encoded for their respective part of the URL. A variable can't inject a new host, path segment, or query key.
* If a variable doesn't exist, is \`null\`, or has a type that doesn't fit its target location, the tool call fails without calling your endpoint.
* Always pass authentication information as a complete header value. Don't put it in the URL, request body, tool parameters, or tool description.

## Reference [#reference]

The following reference material covers the tool parameter schema, response handling, configuration limits, and common issues.

### Parameter schema [#parameter-schema]

A tool's parameters use JSON Schema and are passed to the LLM using OpenAI's non-strict function-calling mode. The root must be \`object\`, with parameters typically declared under \`properties\`. For details, see [OpenAI's Function Calling guide](https://platform.openai.com/docs/guides/function-calling).

\`\`\`json
{
  "type": "object",
  "properties": {
    "order_id": {
      "type": "string",
      "description": "The order ID."
    },
    "include_items": {
      "type": "boolean",
      "description": "Whether to also return line-item details."
    },
    "region": {
      "type": "string",
      "enum": ["us", "eu"],
      "description": "The order's region."
    }
  },
  "required": ["order_id"],
  "additionalProperties": false
}
\`\`\`

\`additionalProperties: false\` in this example only demonstrates disallowing undeclared parameters. It isn't required, and setting it doesn't itself enable strict mode. To allow extra parameters, omit this field or set it to \`true\`.

Practical rules:

* Common JSON Schema types are supported: \`object\`, \`array\`, \`string\`, \`integer\`, \`number\`, \`boolean\`, and \`null\`.
* Standard JSON Schema keywords relevant to tool parameters are supported, such as \`type\`, \`description\`, \`enum\`, \`properties\`, \`required\`, \`additionalProperties\`, and \`items\`. The actual effect depends on your LLM's function-calling support.
* The root \`type\` must be \`object\`. Declare array elements with \`items\`.
* Don't add optional parameters to \`required\`. If you omit \`additionalProperties\`, extra properties are allowed per JSON Schema semantics. Set it to \`false\` explicitly to disallow undeclared parameters.
* Don't rely on a specific model's support for advanced keywords such as \`$ref\`, \`$defs\`, \`format\`, \`pattern\`, range constraints, or composition schemas. Confirm compatibility with your LLM before using them.
* The serialized schema size is capped at 64 KiB.

### Response and runtime behavior [#response-and-runtime-behavior]

The Conversational AI Engine passes your endpoint's response back to the LLM. The exact behavior depends on the response status and content:

| Endpoint result                                                  | Tool result                                                          | Conversation behavior                                                                         |
| ---------------------------------------------------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Non-empty \`2xx\`, valid JSON                                      | JSON is parsed, then serialized back to a string                     | The model generates a reply based on the full result                                          |
| Non-empty \`2xx\`, UTF-8 text                                      | The raw text is used                                                 | The model generates a reply based on the full result                                          |
| Empty \`2xx\`, such as \`204\`                                       | Reported as success, result is \`[]\`                                  | The model continues based on the success result                                               |
| Non-\`2xx\`, valid JSON                                            | Reported as failed; JSON is parsed, then serialized back to a string | The full response is still returned to the model, but it shouldn't claim the action succeeded |
| Non-\`2xx\`, UTF-8 text                                            | Reported as failed; the raw text is used                             | The full response is still returned to the model, but it shouldn't claim the action succeeded |
| Non-\`2xx\`, empty body                                            | Reported as failed, result is \`[]\`                                   | The model gets a failure result and shouldn't claim the action succeeded                      |
| \`3xx\`                                                            | Reported as failed, following the non-\`2xx\` rules                    | The engine doesn't follow \`Location\` or forward the request to the redirect target            |
| Timeout, network error, or parameter/template validation failure | Reported as failed                                                   | The request isn't retried automatically                                                       |
| Response over 1 MiB or not valid, safe UTF-8 text                | Reported as failed                                                   | The partial response isn't passed to the model                                                |

A few other runtime behaviors to keep in mind:

* If a single model response submits multiple tool calls, the engine runs them concurrently. One call failing doesn't block the others.
* The engine waits for every submitted call to reach a final result or error before starting the next LLM turn, and writes the results back in the order the model returned them.
* Interrupting the agent stops its current response, but it doesn't cancel an in-flight HTTP request or guarantee that the remote action is rolled back.
* While waiting for a tool call, the agent uses your existing [filler words](../shape-the-conversation/filler-words) configuration. Custom tools don't add a separate, tool-specific filler word trigger.
* Only the model's final generated text is sent to TTS, never the raw tool response.

### Security and configuration limits [#security-and-configuration-limits]

* The request URL must be an absolute HTTPS URL. Usernames and passwords in the URL aren't supported.
* Header values are treated as sensitive: they aren't passed to the model, and aren't written to regular logs, subtitles, or TTS output. OAuth token exchange, dynamic request signing, mTLS, and reusable credential resources aren't provided.
* The final rendered URL is capped at 8192 UTF-8 bytes: each path variable at 1024 bytes, and each query variable at 4096 bytes.
* Headers are capped at 32 entries, totaling up to 16 KiB.
* The request body is \`POST\` only. Both the configured value and the rendered result are capped at 64 KiB.
* The request timeout defaults to \`10000\` ms, in the range \`1000\` to \`100000\`.
* A non-empty response body can't exceed 1 MiB. Extracting specific fields, JSONPath, or custom truncation aren't supported.
* Custom tools, MCP tools, built-in tools, and model-native tools share one namespace. Tool names must start with a letter, contain only letters and numbers, and be no more than 64 characters, and comparisons aren't case-sensitive.
* Tool names can't use the \`mcp\` prefix or the value \`ragsearch_tool\`. After discovery and filtering, the engine exposes at most 32 tools to the model.
* Stored tools, asynchronous tasks, callbacks, polling, automatic retries, \`PUT\`/\`PATCH\`/\`DELETE\`, and configurable serial tool scheduling aren't supported.

### Troubleshooting [#troubleshooting]

If a custom tool isn't behaving as expected, start with these checks.

| Symptom                                                           | Check                                                                                                                                                                                                |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The model never calls the tool                                    | Check that \`enable_tools\` is set to \`true\`, the tool description explains when to call it and what it returns, and the current LLM supports function calling.                                        |
| Agent creation fails                                              | Check that the tool type is \`function\`, the parameters' root type is \`object\`, the request method is \`GET\` or \`POST\`, and no tool name is duplicated.                                                |
| Your endpoint never receives a request                            | Check that \`server\` is a sibling of \`function\` rather than nested inside it, the URL is an absolute HTTPS URL, the referenced template variables exist, and \`body\` isn't configured on a \`GET\` tool. |
| A header doesn't contain the model's parameter                    | Check for \`{{args.<name>}}\` in a header. Headers don't support it; use a fixed value directly, or use \`template_variables\` or \`tool_call_id\` instead.                                                |
| Your endpoint returns a parameter validation error                | Check the body field names, parameter types, and \`Content-Type\`. Template placeholders in the request body can't be concatenated with other text.                                                    |
| The tool call times out                                           | Check your endpoint's response time against \`timeout_ms\`. Timed-out calls aren't retried automatically.                                                                                              |
| Your endpoint returns success, but the model can't use the result | Confirm your endpoint returned a \`2xx\` status. A non-empty response must be safe UTF-8 text under 1 MiB. The engine doesn't support extracting specific fields from a JSON response.                 |
| A \`POST\` action runs more than once                               | Use \`tool_call_id\` to correlate the call on your side, and handle duplicate requests in your own service. Don't assume Agora will roll back or retry the request for you.                            |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To look up data or take action in your systems, you can set up a Conversational AI agent to use custom tools through your own HTTPS endpoints."
  }, {
    heading: undefined,
    content: "When the LLM needs a tool call, it generates the tool's parameters from the conversation. The Conversational AI Engine validates those parameters, makes one synchronous request to your endpoint, and returns the result to the LLM so it can continue generating a response. Only the LLM's reply is sent to TTS, never the raw HTTP response."
  }, {
    heading: undefined,
    content: "Common use cases include:"
  }, {
    heading: undefined,
    content: "**Looking up business data**: Query order status, account balances, or inventory from your own systems."
  }, {
    heading: undefined,
    content: "**Performing actions**: Create a support ticket, schedule an appointment, or update a record."
  }, {
    heading: undefined,
    content: "**Grounding responses**: Pull current, business-specific information into the conversation without retraining the model."
  }, {
    heading: "understand-the-tech",
    content: "Each custom tool declares a `function` block with a name, description, and a JSON Schema for its parameters. It also declares a `server` block that describes the HTTPS request the Conversational AI Engine sends once the LLM has generated valid parameters. Tool calling supports only synchronous `GET` and `POST` requests to a single endpoint per tool."
  }, {
    heading: "understand-the-tech",
    content: "Custom tools, MCP tools, built-in tools, and model-native tools all share one tool namespace. Names are not case-sensitive. An agent can expose at most 32 tools to the LLM. If tool names conflict or the limit is exceeded, the agent fails to start."
  }, {
    heading: "understand-the-tech",
    content: "MLLM agents support custom tools as well. Declare them in `mllm.tools`, which takes the same tool definitions as `llm.tools`, so the rest of this page applies to both. For an MLLM agent, read `llm.tools` as `mllm.tools` and the LLM as the MLLM."
  }, {
    heading: "understand-the-tech",
    content: "The following aren't supported:"
  }, {
    heading: "understand-the-tech",
    content: "`PUT`, `PATCH`, or `DELETE` requests, automatic retries, or following HTTP redirects."
  }, {
    heading: "understand-the-tech",
    content: "Asynchronous tools, callbacks, polling, or stored/reusable tool references."
  }, {
    heading: "understand-the-tech",
    content: "OAuth token exchange, dynamic request signing, or mTLS for authenticating to your endpoint."
  }, {
    heading: "prerequisites",
    content: "Implemented the basic logic for interacting with a conversational AI agent by following the quickstart."
  }, {
    heading: "prerequisites",
    content: "A text LLM or MLLM that supports function calling. Custom LLMs and Dify aren't supported."
  }, {
    heading: "prerequisites",
    content: "An HTTPS endpoint your agent can call to fulfill the tool."
  }, {
    heading: "implementation",
    content: "You declare tools when creating the agent, using either an Agora Agents SDK or the Start a conversational AI agent REST API."
  }, {
    heading: "configure-a-get-tool",
    content: "The following example configures a `GET` tool that looks up order status:"
  }, {
    heading: "configure-a-get-tool",
    content: "To create the agent, enable tool calling. With the REST API, set `properties.advanced_features.enable_tools` to `true`. With an Agora Agents SDK, call `with_tools(True)` (Python), `withTools(true)` (TypeScript), or `WithTools(true)` (Go). If you don't enable tool calling, the engine doesn't expose tools to the model and never calls their endpoints."
  }, {
    heading: "configure-a-get-tool",
    content: 'Once this is configured, a user can ask something like "What\'s the status of order ORD-10293?" After the model generates `order_id`, the engine sends:'
  }, {
    heading: "configure-a-get-tool",
    content: "**Field reference**"
  }, {
    heading: "configure-a-get-tool",
    content: "Use the following fields to configure tool calling:"
  }, {
    heading: "configure-a-get-tool",
    content: "Configure tools using the `tools` parameter on the LLM vendor class, and enable tool calling with `with_tools(True)`. Each tool can be a dictionary or an `LlmToolConfig` object."
  }, {
    heading: "configure-a-get-tool",
    content: "Parameter"
  }, {
    heading: "configure-a-get-tool",
    content: "Required"
  }, {
    heading: "configure-a-get-tool",
    content: "Description"
  }, {
    heading: "configure-a-get-tool",
    content: "`tools`"
  }, {
    heading: "configure-a-get-tool",
    content: "No"
  }, {
    heading: "configure-a-get-tool",
    content: "The custom tool array on the LLM vendor class."
  }, {
    heading: "configure-a-get-tool",
    content: "`with_tools(True)`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "Enables calling both custom tools and MCP tools."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].type`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "Fixed as `function`."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].function`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "The tool definition visible to the model, including its name, description, and parameter schema."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].function.name`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "Must start with a letter, contain only letters and numbers, and be no more than 64 characters long. Can't use the `mcp` prefix or the value `ragsearch_tool`."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].function.description`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "Explains the tool's purpose, when to call it, and what it returns. Don't include secrets."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].function.parameters`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "A JSON Schema object. The root `type` must be `object`. Passed using OpenAI's non-strict function-calling mode."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].execution.mode`"
  }, {
    heading: "configure-a-get-tool",
    content: "No"
  }, {
    heading: "configure-a-get-tool",
    content: "Defaults to `sync` when omitted. Only `sync` is supported."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].server.method`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "Only `GET` and `POST` are supported. A `GET` tool can't include `body`."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].server.url`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "An absolute HTTPS URL. The path and query parameters can use template variables."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].server.headers`"
  }, {
    heading: "configure-a-get-tool",
    content: "No"
  }, {
    heading: "configure-a-get-tool",
    content: "Up to 32 entries. Can't use `{{args.<name>}}`; pass authentication only as a complete header value."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].server.body`"
  }, {
    heading: "configure-a-get-tool",
    content: "Optional for `POST`"
  }, {
    heading: "configure-a-get-tool",
    content: "`POST` only, supports nested JSON. Template placeholders must be complete, not concatenated with other text."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].server.timeout_ms`"
  }, {
    heading: "configure-a-get-tool",
    content: "No"
  }, {
    heading: "configure-a-get-tool",
    content: "Defaults to `10000`, in the range `1000` to `100000`."
  }, {
    heading: "configure-a-get-tool",
    content: "Configure tools using the `tools` option on the LLM vendor class, and enable tool calling with `withTools(true)`."
  }, {
    heading: "configure-a-get-tool",
    content: "Parameter"
  }, {
    heading: "configure-a-get-tool",
    content: "Required"
  }, {
    heading: "configure-a-get-tool",
    content: "Description"
  }, {
    heading: "configure-a-get-tool",
    content: "`tools`"
  }, {
    heading: "configure-a-get-tool",
    content: "No"
  }, {
    heading: "configure-a-get-tool",
    content: "The custom tool array on the LLM vendor class, of type `LlmTool[]`."
  }, {
    heading: "configure-a-get-tool",
    content: "`withTools(true)`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "Enables calling both custom tools and MCP tools."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].type`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "Fixed as `function`."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].function`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "The tool definition visible to the model, including its name, description, and parameter schema."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].function.name`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "Must start with a letter, contain only letters and numbers, and be no more than 64 characters long. Can't use the `mcp` prefix or the value `ragsearch_tool`."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].function.description`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "Explains the tool's purpose, when to call it, and what it returns. Don't include secrets."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].function.parameters`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "A JSON Schema object. The root `type` must be `object`. Passed using OpenAI's non-strict function-calling mode."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].execution.mode`"
  }, {
    heading: "configure-a-get-tool",
    content: "No"
  }, {
    heading: "configure-a-get-tool",
    content: "Defaults to `sync` when omitted. Only `sync` is supported."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].server.method`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "Only `GET` and `POST` are supported. A `GET` tool can't include `body`."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].server.url`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "An absolute HTTPS URL. The path and query parameters can use template variables."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].server.headers`"
  }, {
    heading: "configure-a-get-tool",
    content: "No"
  }, {
    heading: "configure-a-get-tool",
    content: "Up to 32 entries. Can't use `{{args.<name>}}`; pass authentication only as a complete header value."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].server.body`"
  }, {
    heading: "configure-a-get-tool",
    content: "Optional for `POST`"
  }, {
    heading: "configure-a-get-tool",
    content: "`POST` only, supports nested JSON. Template placeholders must be complete, not concatenated with other text."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].server.timeout_ms`"
  }, {
    heading: "configure-a-get-tool",
    content: "No"
  }, {
    heading: "configure-a-get-tool",
    content: "Defaults to `10000`, in the range `1000` to `100000`."
  }, {
    heading: "configure-a-get-tool",
    content: "Configure tools using the `Tools` field on the LLM vendor options, and enable tool calling with `WithTools(true)`."
  }, {
    heading: "configure-a-get-tool",
    content: "Parameter"
  }, {
    heading: "configure-a-get-tool",
    content: "Required"
  }, {
    heading: "configure-a-get-tool",
    content: "Description"
  }, {
    heading: "configure-a-get-tool",
    content: "`Tools`"
  }, {
    heading: "configure-a-get-tool",
    content: "No"
  }, {
    heading: "configure-a-get-tool",
    content: "The custom tool array on the LLM vendor options, of type `[]*Agora.LlmTool`."
  }, {
    heading: "configure-a-get-tool",
    content: "`WithTools(true)`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "Enables calling both custom tools and MCP tools."
  }, {
    heading: "configure-a-get-tool",
    content: "`LlmTool.Function`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "The tool definition visible to the model, including its name, description, and parameter schema."
  }, {
    heading: "configure-a-get-tool",
    content: "`LlmToolFunction.Name`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "Must start with a letter, contain only letters and numbers, and be no more than 64 characters long. Can't use the `mcp` prefix or the value `ragsearch_tool`."
  }, {
    heading: "configure-a-get-tool",
    content: "`LlmToolFunction.Description`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "Explains the tool's purpose, when to call it, and what it returns. Don't include secrets."
  }, {
    heading: "configure-a-get-tool",
    content: "`LlmToolFunction.Parameters`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "A JSON Schema object with `Properties` and `Required`. The SDK serializes the root type as `object`. Passed using OpenAI's non-strict function-calling mode."
  }, {
    heading: "configure-a-get-tool",
    content: "`LlmToolExecution.Mode`"
  }, {
    heading: "configure-a-get-tool",
    content: "No"
  }, {
    heading: "configure-a-get-tool",
    content: "Defaults to `sync` when omitted. Only `Agora.LlmToolExecutionModeSync` is supported."
  }, {
    heading: "configure-a-get-tool",
    content: "`LlmToolServer.Method`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "Accepts `Agora.LlmToolServerMethodGet` or `Agora.LlmToolServerMethodPost`. A `GET` tool can't include `Body`."
  }, {
    heading: "configure-a-get-tool",
    content: "`LlmToolServer.URL`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "An absolute HTTPS URL. The path and query parameters can use template variables."
  }, {
    heading: "configure-a-get-tool",
    content: "`LlmToolServer.Headers`"
  }, {
    heading: "configure-a-get-tool",
    content: "No"
  }, {
    heading: "configure-a-get-tool",
    content: "Up to 32 entries. Can't use `{{args.<name>}}`; pass authentication only as a complete header value."
  }, {
    heading: "configure-a-get-tool",
    content: "`LlmToolServer.Body`"
  }, {
    heading: "configure-a-get-tool",
    content: "Optional for `POST`"
  }, {
    heading: "configure-a-get-tool",
    content: "`POST` only, supports nested JSON. Template placeholders must be complete, not concatenated with other text."
  }, {
    heading: "configure-a-get-tool",
    content: "`LlmToolServer.TimeoutMs`"
  }, {
    heading: "configure-a-get-tool",
    content: "No"
  }, {
    heading: "configure-a-get-tool",
    content: "Defaults to `10000`, in the range `1000` to `100000`."
  }, {
    heading: "configure-a-get-tool",
    content: "Configure tools in the `properties.llm.tools` array, and set `properties.advanced_features.enable_tools` to `true`."
  }, {
    heading: "configure-a-get-tool",
    content: "Parameter"
  }, {
    heading: "configure-a-get-tool",
    content: "Required"
  }, {
    heading: "configure-a-get-tool",
    content: "Description"
  }, {
    heading: "configure-a-get-tool",
    content: "`properties.advanced_features.enable_tools`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "Set to `true` so the agent can expose custom tools and MCP tools to the model. If omitted or `false`, the agent doesn't call any tool endpoints."
  }, {
    heading: "configure-a-get-tool",
    content: "`properties.llm.tools`"
  }, {
    heading: "configure-a-get-tool",
    content: "No"
  }, {
    heading: "configure-a-get-tool",
    content: "The custom tool array. Custom tools, MCP tools, built-in tools, and model-native tools share one model-visible tool namespace."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].type`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "Fixed as `function`."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].function`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "The tool definition visible to the model, including its name, description, and parameter schema."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].function.name`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "Must start with a letter, contain only letters and numbers, and be no more than 64 characters long. Can't use the `mcp` prefix or the value `ragsearch_tool`."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].function.description`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "Explains the tool's purpose, when to call it, and what it returns. Don't include secrets."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].function.parameters`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "A JSON Schema object. The root `type` must be `object`. Passed using OpenAI's non-strict function-calling mode."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].execution`"
  }, {
    heading: "configure-a-get-tool",
    content: "No"
  }, {
    heading: "configure-a-get-tool",
    content: 'Defaults to `{ "mode": "sync" }` when omitted. Only `sync` is supported.'
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].server`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "The actual HTTP request configuration."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].server.method`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "Only `GET` and `POST` are supported. A `GET` tool can't include `body`."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].server.url`"
  }, {
    heading: "configure-a-get-tool",
    content: "Yes"
  }, {
    heading: "configure-a-get-tool",
    content: "An absolute HTTPS URL. The path and query parameters can use template variables."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].server.headers`"
  }, {
    heading: "configure-a-get-tool",
    content: "No"
  }, {
    heading: "configure-a-get-tool",
    content: "Up to 32 entries. Can't use `{{args.<name>}}`; pass authentication only as a complete header value."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].server.body`"
  }, {
    heading: "configure-a-get-tool",
    content: "Optional for `POST`"
  }, {
    heading: "configure-a-get-tool",
    content: "`POST` only, supports nested JSON. Template placeholders must be complete, not concatenated with other text."
  }, {
    heading: "configure-a-get-tool",
    content: "`tools[].server.timeout_ms`"
  }, {
    heading: "configure-a-get-tool",
    content: "No"
  }, {
    heading: "configure-a-get-tool",
    content: "Defaults to `10000`, in the range `1000` to `100000`."
  }, {
    heading: "configure-a-get-tool",
    content: "Even if tool calling isn't enabled, any tools you declare are still validated for field type, size, template syntax, and duplicate names."
  }, {
    heading: "configure-a-post-tool",
    content: "Use a `POST` tool to perform actions, such as creating a ticket or sending a message. A request body can only be used with `POST`; configuring one for a `GET` tool causes validation to fail. The following example sends a confirmed delivery address to a phone number:"
  }, {
    heading: "configure-a-post-tool",
    content: "The following JSON shows only the `POST` tool entry in the `properties.llm.tools` array:"
  }, {
    heading: "configure-a-post-tool",
    content: "`{{tool_call_id}}` is the system-generated ID correlating this tool call. You can pass it to your own service to correlate logs or detect a repeated call, but passing it alone doesn't stop your service from processing the same request twice, and Agora doesn't automatically retry requests. Your service is still responsible for handling duplicate requests and unknown outcomes."
  }, {
    heading: "configure-a-post-tool",
    content: "**Field reference**"
  }, {
    heading: "configure-a-post-tool",
    content: "`function` and `execution` are the same as for a `GET` tool. The following fields are specific to a `POST` tool's server configuration:"
  }, {
    heading: "configure-a-post-tool",
    content: "Parameter"
  }, {
    heading: "configure-a-post-tool",
    content: "Required"
  }, {
    heading: "configure-a-post-tool",
    content: "Description"
  }, {
    heading: "configure-a-post-tool",
    content: "`tools[].server.method`"
  }, {
    heading: "configure-a-post-tool",
    content: "Yes"
  }, {
    heading: "configure-a-post-tool",
    content: "Fixed as `POST`."
  }, {
    heading: "configure-a-post-tool",
    content: "`tools[].server.url`"
  }, {
    heading: "configure-a-post-tool",
    content: "Yes"
  }, {
    heading: "configure-a-post-tool",
    content: "An absolute HTTPS URL. The path and query parameters can use template variables."
  }, {
    heading: "configure-a-post-tool",
    content: "`tools[].server.headers`"
  }, {
    heading: "configure-a-post-tool",
    content: "No"
  }, {
    heading: "configure-a-post-tool",
    content: "Configure authentication and `Content-Type`. Can't use `{{args.<name>}}`; pass authentication only as a complete header value."
  }, {
    heading: "configure-a-post-tool",
    content: "`tools[].server.body`"
  }, {
    heading: "configure-a-post-tool",
    content: "No"
  }, {
    heading: "configure-a-post-tool",
    content: "The `POST` request body. Supports nested JSON. Values can be constants or complete template placeholders, not concatenated text."
  }, {
    heading: "configure-a-post-tool",
    content: "`tools[].server.timeout_ms`"
  }, {
    heading: "configure-a-post-tool",
    content: "No"
  }, {
    heading: "configure-a-post-tool",
    content: "Defaults to `10000`, in the range `1000` to `100000`."
  }, {
    heading: "configure-a-post-tool",
    content: "Parameter"
  }, {
    heading: "configure-a-post-tool",
    content: "Required"
  }, {
    heading: "configure-a-post-tool",
    content: "Description"
  }, {
    heading: "configure-a-post-tool",
    content: "`tools[].server.method`"
  }, {
    heading: "configure-a-post-tool",
    content: "Yes"
  }, {
    heading: "configure-a-post-tool",
    content: "Fixed as `POST`."
  }, {
    heading: "configure-a-post-tool",
    content: "`tools[].server.url`"
  }, {
    heading: "configure-a-post-tool",
    content: "Yes"
  }, {
    heading: "configure-a-post-tool",
    content: "An absolute HTTPS URL. The path and query parameters can use template variables."
  }, {
    heading: "configure-a-post-tool",
    content: "`tools[].server.headers`"
  }, {
    heading: "configure-a-post-tool",
    content: "No"
  }, {
    heading: "configure-a-post-tool",
    content: "Configure authentication and `Content-Type`. Can't use `{{args.<name>}}`; pass authentication only as a complete header value."
  }, {
    heading: "configure-a-post-tool",
    content: "`tools[].server.body`"
  }, {
    heading: "configure-a-post-tool",
    content: "No"
  }, {
    heading: "configure-a-post-tool",
    content: "The `POST` request body. Supports nested JSON. Values can be constants or complete template placeholders, not concatenated text."
  }, {
    heading: "configure-a-post-tool",
    content: "`tools[].server.timeout_ms`"
  }, {
    heading: "configure-a-post-tool",
    content: "No"
  }, {
    heading: "configure-a-post-tool",
    content: "Defaults to `10000`, in the range `1000` to `100000`."
  }, {
    heading: "configure-a-post-tool",
    content: "Parameter"
  }, {
    heading: "configure-a-post-tool",
    content: "Required"
  }, {
    heading: "configure-a-post-tool",
    content: "Description"
  }, {
    heading: "configure-a-post-tool",
    content: "`LlmToolServer.Method`"
  }, {
    heading: "configure-a-post-tool",
    content: "Yes"
  }, {
    heading: "configure-a-post-tool",
    content: "Fixed as `Agora.LlmToolServerMethodPost`."
  }, {
    heading: "configure-a-post-tool",
    content: "`LlmToolServer.URL`"
  }, {
    heading: "configure-a-post-tool",
    content: "Yes"
  }, {
    heading: "configure-a-post-tool",
    content: "An absolute HTTPS URL. The path and query parameters can use template variables."
  }, {
    heading: "configure-a-post-tool",
    content: "`LlmToolServer.Headers`"
  }, {
    heading: "configure-a-post-tool",
    content: "No"
  }, {
    heading: "configure-a-post-tool",
    content: "Configure authentication and `Content-Type`. Can't use `{{args.<name>}}`; pass authentication only as a complete header value."
  }, {
    heading: "configure-a-post-tool",
    content: "`LlmToolServer.Body`"
  }, {
    heading: "configure-a-post-tool",
    content: "No"
  }, {
    heading: "configure-a-post-tool",
    content: "The `POST` request body. Supports nested JSON. Values can be constants or complete template placeholders, not concatenated text."
  }, {
    heading: "configure-a-post-tool",
    content: "`LlmToolServer.TimeoutMs`"
  }, {
    heading: "configure-a-post-tool",
    content: "No"
  }, {
    heading: "configure-a-post-tool",
    content: "Defaults to `10000`, in the range `1000` to `100000`."
  }, {
    heading: "configure-a-post-tool",
    content: "Parameter"
  }, {
    heading: "configure-a-post-tool",
    content: "Required"
  }, {
    heading: "configure-a-post-tool",
    content: "Description"
  }, {
    heading: "configure-a-post-tool",
    content: "`tools[].server.method`"
  }, {
    heading: "configure-a-post-tool",
    content: "Yes"
  }, {
    heading: "configure-a-post-tool",
    content: "Fixed as `POST`."
  }, {
    heading: "configure-a-post-tool",
    content: "`tools[].server.url`"
  }, {
    heading: "configure-a-post-tool",
    content: "Yes"
  }, {
    heading: "configure-a-post-tool",
    content: "An absolute HTTPS URL. The path and query parameters can use template variables."
  }, {
    heading: "configure-a-post-tool",
    content: "`tools[].server.headers`"
  }, {
    heading: "configure-a-post-tool",
    content: "No"
  }, {
    heading: "configure-a-post-tool",
    content: "Configure authentication and `Content-Type`. Can't use `{{args.<name>}}`; pass authentication only as a complete header value."
  }, {
    heading: "configure-a-post-tool",
    content: "`tools[].server.body`"
  }, {
    heading: "configure-a-post-tool",
    content: "No"
  }, {
    heading: "configure-a-post-tool",
    content: "The `POST` request body. Supports nested JSON. Values can be constants or complete template placeholders, not concatenated text."
  }, {
    heading: "configure-a-post-tool",
    content: "`tools[].server.timeout_ms`"
  }, {
    heading: "configure-a-post-tool",
    content: "No"
  }, {
    heading: "configure-a-post-tool",
    content: "Defaults to `10000`, in the range `1000` to `100000`."
  }, {
    heading: "configure-a-post-tool",
    content: "For `POST` tools that change data or trigger an action:"
  }, {
    heading: "configure-a-post-tool",
    content: "State the conditions for calling the tool in its description and in your system prompt, such as requiring the user to confirm first."
  }, {
    heading: "configure-a-post-tool",
    content: "Perform the final authorization check on your own server. Don't rely on the LLM's judgment alone."
  }, {
    heading: "configure-a-post-tool",
    content: "Only have the agent tell the user the request succeeded after your endpoint returns a `2xx` status."
  }, {
    heading: "configure-a-post-tool",
    content: "If a request has already been sent, a user interruption doesn't guarantee the remote action is canceled or rolled back."
  }, {
    heading: "configure-template-variables",
    content: "Template variables let you fill an HTTP request with either LLM-generated parameters or fixed values known when you create the agent. The following example puts a tenant ID in a header and a customer ID in the request body:"
  }, {
    heading: "configure-template-variables",
    content: "**Field reference**"
  }, {
    heading: "configure-template-variables",
    content: "Parameter"
  }, {
    heading: "configure-template-variables",
    content: "Description"
  }, {
    heading: "configure-template-variables",
    content: "`template_variables`"
  }, {
    heading: "configure-template-variables",
    content: "Fixed string values known when the agent is created, set on the LLM vendor class."
  }, {
    heading: "configure-template-variables",
    content: "`server.headers` and `server.body`"
  }, {
    heading: "configure-template-variables",
    content: "Read a fixed value with `{{template_variables.<name>}}`."
  }, {
    heading: "configure-template-variables",
    content: "`server.body`"
  }, {
    heading: "configure-template-variables",
    content: "Can also use `{{args.<name>}}` and `{{tool_call_id}}`, which don't require `template_variables`."
  }, {
    heading: "configure-template-variables",
    content: "Parameter"
  }, {
    heading: "configure-template-variables",
    content: "Description"
  }, {
    heading: "configure-template-variables",
    content: "`templateVariables`"
  }, {
    heading: "configure-template-variables",
    content: "Fixed string values known when the agent is created, set on the LLM vendor class."
  }, {
    heading: "configure-template-variables",
    content: "`server.headers` and `server.body`"
  }, {
    heading: "configure-template-variables",
    content: "Read a fixed value with `{{template_variables.<name>}}`."
  }, {
    heading: "configure-template-variables",
    content: "`server.body`"
  }, {
    heading: "configure-template-variables",
    content: "Can also use `{{args.<name>}}` and `{{tool_call_id}}`, which don't require `templateVariables`."
  }, {
    heading: "configure-template-variables",
    content: "Parameter"
  }, {
    heading: "configure-template-variables",
    content: "Description"
  }, {
    heading: "configure-template-variables",
    content: "`TemplateVariables`"
  }, {
    heading: "configure-template-variables",
    content: "Fixed string values known when the agent is created, set on the LLM vendor options."
  }, {
    heading: "configure-template-variables",
    content: "`LlmToolServer.Headers` and `LlmToolServer.Body`"
  }, {
    heading: "configure-template-variables",
    content: "Read a fixed value with `{{template_variables.<name>}}`."
  }, {
    heading: "configure-template-variables",
    content: "`LlmToolServer.Body`"
  }, {
    heading: "configure-template-variables",
    content: "Can also use `{{args.<name>}}` and `{{tool_call_id}}`, which don't require `TemplateVariables`."
  }, {
    heading: "configure-template-variables",
    content: "Parameter"
  }, {
    heading: "configure-template-variables",
    content: "Description"
  }, {
    heading: "configure-template-variables",
    content: "`properties.llm.template_variables`"
  }, {
    heading: "configure-template-variables",
    content: "Fixed string values known when the agent is created."
  }, {
    heading: "configure-template-variables",
    content: "`properties.llm.tools[].server.headers` and `body`"
  }, {
    heading: "configure-template-variables",
    content: "Read a fixed value with `{{template_variables.<name>}}`."
  }, {
    heading: "configure-template-variables",
    content: "`properties.llm.tools[].server.body`"
  }, {
    heading: "configure-template-variables",
    content: "Can also use `{{args.<name>}}` and `{{tool_call_id}}`, which don't require `template_variables`."
  }, {
    heading: "configure-template-variables",
    content: "Keep the following rules in mind when using template variables:"
  }, {
    heading: "configure-template-variables",
    content: "Placeholders are substituted once; they aren't expanded recursively."
  }, {
    heading: "configure-template-variables",
    content: "A template must reference a complete variable. Concatenating text, such as `order-{{args.order_id}}`, isn't supported."
  }, {
    heading: "configure-template-variables",
    content: "Nested fields, array indexes, and shorthand forms like `{{name}}` aren't supported."
  }, {
    heading: "configure-template-variables",
    content: "`{{args.<name>}}` can't be used in headers."
  }, {
    heading: "configure-template-variables",
    content: "Header names, the HTTP method, and the URL's scheme, host, and port can't be templated."
  }, {
    heading: "configure-template-variables",
    content: "Variables used in the URL path and query parameters are encoded for their respective part of the URL. A variable can't inject a new host, path segment, or query key."
  }, {
    heading: "configure-template-variables",
    content: "If a variable doesn't exist, is `null`, or has a type that doesn't fit its target location, the tool call fails without calling your endpoint."
  }, {
    heading: "configure-template-variables",
    content: "Always pass authentication information as a complete header value. Don't put it in the URL, request body, tool parameters, or tool description."
  }, {
    heading: "reference",
    content: "The following reference material covers the tool parameter schema, response handling, configuration limits, and common issues."
  }, {
    heading: "parameter-schema",
    content: "A tool's parameters use JSON Schema and are passed to the LLM using OpenAI's non-strict function-calling mode. The root must be `object`, with parameters typically declared under `properties`. For details, see OpenAI's Function Calling guide."
  }, {
    heading: "parameter-schema",
    content: "`additionalProperties: false` in this example only demonstrates disallowing undeclared parameters. It isn't required, and setting it doesn't itself enable strict mode. To allow extra parameters, omit this field or set it to `true`."
  }, {
    heading: "parameter-schema",
    content: "Practical rules:"
  }, {
    heading: "parameter-schema",
    content: "Common JSON Schema types are supported: `object`, `array`, `string`, `integer`, `number`, `boolean`, and `null`."
  }, {
    heading: "parameter-schema",
    content: "Standard JSON Schema keywords relevant to tool parameters are supported, such as `type`, `description`, `enum`, `properties`, `required`, `additionalProperties`, and `items`. The actual effect depends on your LLM's function-calling support."
  }, {
    heading: "parameter-schema",
    content: "The root `type` must be `object`. Declare array elements with `items`."
  }, {
    heading: "parameter-schema",
    content: "Don't add optional parameters to `required`. If you omit `additionalProperties`, extra properties are allowed per JSON Schema semantics. Set it to `false` explicitly to disallow undeclared parameters."
  }, {
    heading: "parameter-schema",
    content: "Don't rely on a specific model's support for advanced keywords such as `$ref`, `$defs`, `format`, `pattern`, range constraints, or composition schemas. Confirm compatibility with your LLM before using them."
  }, {
    heading: "parameter-schema",
    content: "The serialized schema size is capped at 64 KiB."
  }, {
    heading: "response-and-runtime-behavior",
    content: "The Conversational AI Engine passes your endpoint's response back to the LLM. The exact behavior depends on the response status and content:"
  }, {
    heading: "response-and-runtime-behavior",
    content: "Endpoint result"
  }, {
    heading: "response-and-runtime-behavior",
    content: "Tool result"
  }, {
    heading: "response-and-runtime-behavior",
    content: "Conversation behavior"
  }, {
    heading: "response-and-runtime-behavior",
    content: "Non-empty `2xx`, valid JSON"
  }, {
    heading: "response-and-runtime-behavior",
    content: "JSON is parsed, then serialized back to a string"
  }, {
    heading: "response-and-runtime-behavior",
    content: "The model generates a reply based on the full result"
  }, {
    heading: "response-and-runtime-behavior",
    content: "Non-empty `2xx`, UTF-8 text"
  }, {
    heading: "response-and-runtime-behavior",
    content: "The raw text is used"
  }, {
    heading: "response-and-runtime-behavior",
    content: "The model generates a reply based on the full result"
  }, {
    heading: "response-and-runtime-behavior",
    content: "Empty `2xx`, such as `204`"
  }, {
    heading: "response-and-runtime-behavior",
    content: "Reported as success, result is `[]`"
  }, {
    heading: "response-and-runtime-behavior",
    content: "The model continues based on the success result"
  }, {
    heading: "response-and-runtime-behavior",
    content: "Non-`2xx`, valid JSON"
  }, {
    heading: "response-and-runtime-behavior",
    content: "Reported as failed; JSON is parsed, then serialized back to a string"
  }, {
    heading: "response-and-runtime-behavior",
    content: "The full response is still returned to the model, but it shouldn't claim the action succeeded"
  }, {
    heading: "response-and-runtime-behavior",
    content: "Non-`2xx`, UTF-8 text"
  }, {
    heading: "response-and-runtime-behavior",
    content: "Reported as failed; the raw text is used"
  }, {
    heading: "response-and-runtime-behavior",
    content: "The full response is still returned to the model, but it shouldn't claim the action succeeded"
  }, {
    heading: "response-and-runtime-behavior",
    content: "Non-`2xx`, empty body"
  }, {
    heading: "response-and-runtime-behavior",
    content: "Reported as failed, result is `[]`"
  }, {
    heading: "response-and-runtime-behavior",
    content: "The model gets a failure result and shouldn't claim the action succeeded"
  }, {
    heading: "response-and-runtime-behavior",
    content: "`3xx`"
  }, {
    heading: "response-and-runtime-behavior",
    content: "Reported as failed, following the non-`2xx` rules"
  }, {
    heading: "response-and-runtime-behavior",
    content: "The engine doesn't follow `Location` or forward the request to the redirect target"
  }, {
    heading: "response-and-runtime-behavior",
    content: "Timeout, network error, or parameter/template validation failure"
  }, {
    heading: "response-and-runtime-behavior",
    content: "Reported as failed"
  }, {
    heading: "response-and-runtime-behavior",
    content: "The request isn't retried automatically"
  }, {
    heading: "response-and-runtime-behavior",
    content: "Response over 1 MiB or not valid, safe UTF-8 text"
  }, {
    heading: "response-and-runtime-behavior",
    content: "Reported as failed"
  }, {
    heading: "response-and-runtime-behavior",
    content: "The partial response isn't passed to the model"
  }, {
    heading: "response-and-runtime-behavior",
    content: "A few other runtime behaviors to keep in mind:"
  }, {
    heading: "response-and-runtime-behavior",
    content: "If a single model response submits multiple tool calls, the engine runs them concurrently. One call failing doesn't block the others."
  }, {
    heading: "response-and-runtime-behavior",
    content: "The engine waits for every submitted call to reach a final result or error before starting the next LLM turn, and writes the results back in the order the model returned them."
  }, {
    heading: "response-and-runtime-behavior",
    content: "Interrupting the agent stops its current response, but it doesn't cancel an in-flight HTTP request or guarantee that the remote action is rolled back."
  }, {
    heading: "response-and-runtime-behavior",
    content: "While waiting for a tool call, the agent uses your existing filler words configuration. Custom tools don't add a separate, tool-specific filler word trigger."
  }, {
    heading: "response-and-runtime-behavior",
    content: "Only the model's final generated text is sent to TTS, never the raw tool response."
  }, {
    heading: "security-and-configuration-limits",
    content: "The request URL must be an absolute HTTPS URL. Usernames and passwords in the URL aren't supported."
  }, {
    heading: "security-and-configuration-limits",
    content: "Header values are treated as sensitive: they aren't passed to the model, and aren't written to regular logs, subtitles, or TTS output. OAuth token exchange, dynamic request signing, mTLS, and reusable credential resources aren't provided."
  }, {
    heading: "security-and-configuration-limits",
    content: "The final rendered URL is capped at 8192 UTF-8 bytes: each path variable at 1024 bytes, and each query variable at 4096 bytes."
  }, {
    heading: "security-and-configuration-limits",
    content: "Headers are capped at 32 entries, totaling up to 16 KiB."
  }, {
    heading: "security-and-configuration-limits",
    content: "The request body is `POST` only. Both the configured value and the rendered result are capped at 64 KiB."
  }, {
    heading: "security-and-configuration-limits",
    content: "The request timeout defaults to `10000` ms, in the range `1000` to `100000`."
  }, {
    heading: "security-and-configuration-limits",
    content: "A non-empty response body can't exceed 1 MiB. Extracting specific fields, JSONPath, or custom truncation aren't supported."
  }, {
    heading: "security-and-configuration-limits",
    content: "Custom tools, MCP tools, built-in tools, and model-native tools share one namespace. Tool names must start with a letter, contain only letters and numbers, and be no more than 64 characters, and comparisons aren't case-sensitive."
  }, {
    heading: "security-and-configuration-limits",
    content: "Tool names can't use the `mcp` prefix or the value `ragsearch_tool`. After discovery and filtering, the engine exposes at most 32 tools to the model."
  }, {
    heading: "security-and-configuration-limits",
    content: "Stored tools, asynchronous tasks, callbacks, polling, automatic retries, `PUT`/`PATCH`/`DELETE`, and configurable serial tool scheduling aren't supported."
  }, {
    heading: "troubleshooting",
    content: "If a custom tool isn't behaving as expected, start with these checks."
  }, {
    heading: "troubleshooting",
    content: "Symptom"
  }, {
    heading: "troubleshooting",
    content: "Check"
  }, {
    heading: "troubleshooting",
    content: "The model never calls the tool"
  }, {
    heading: "troubleshooting",
    content: "Check that `enable_tools` is set to `true`, the tool description explains when to call it and what it returns, and the current LLM supports function calling."
  }, {
    heading: "troubleshooting",
    content: "Agent creation fails"
  }, {
    heading: "troubleshooting",
    content: "Check that the tool type is `function`, the parameters' root type is `object`, the request method is `GET` or `POST`, and no tool name is duplicated."
  }, {
    heading: "troubleshooting",
    content: "Your endpoint never receives a request"
  }, {
    heading: "troubleshooting",
    content: "Check that `server` is a sibling of `function` rather than nested inside it, the URL is an absolute HTTPS URL, the referenced template variables exist, and `body` isn't configured on a `GET` tool."
  }, {
    heading: "troubleshooting",
    content: "A header doesn't contain the model's parameter"
  }, {
    heading: "troubleshooting",
    content: "Check for `{{args.<name>}}` in a header. Headers don't support it; use a fixed value directly, or use `template_variables` or `tool_call_id` instead."
  }, {
    heading: "troubleshooting",
    content: "Your endpoint returns a parameter validation error"
  }, {
    heading: "troubleshooting",
    content: "Check the body field names, parameter types, and `Content-Type`. Template placeholders in the request body can't be concatenated with other text."
  }, {
    heading: "troubleshooting",
    content: "The tool call times out"
  }, {
    heading: "troubleshooting",
    content: "Check your endpoint's response time against `timeout_ms`. Timed-out calls aren't retried automatically."
  }, {
    heading: "troubleshooting",
    content: "Your endpoint returns success, but the model can't use the result"
  }, {
    heading: "troubleshooting",
    content: "Confirm your endpoint returned a `2xx` status. A non-empty response must be safe UTF-8 text under 1 MiB. The engine doesn't support extracting specific fields from a JSON response."
  }, {
    heading: "troubleshooting",
    content: "A `POST` action runs more than once"
  }, {
    heading: "troubleshooting",
    content: "Use `tool_call_id` to correlate the call on your side, and handle duplicate requests in your own service. Don't assume Agora will roll back or retry the request for you."
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implementation",
    content: "Implementation"
  }, {
    id: "configure-a-get-tool",
    content: "Configure a GET tool"
  }, {
    id: "configure-a-post-tool",
    content: "Configure a POST tool"
  }, {
    id: "configure-template-variables",
    content: "Configure template variables"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "parameter-schema",
    content: "Parameter schema"
  }, {
    id: "response-and-runtime-behavior",
    content: "Response and runtime behavior"
  }, {
    id: "security-and-configuration-limits",
    content: "Security and configuration limits"
  }, {
    id: "troubleshooting",
    content: "Troubleshooting"
  }]
};
export let toc = [{
  depth: 2,
  url: "#understand-the-tech",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#configure-a-get-tool",
  title: _jsx(_Fragment, {
    children: "Configure a GET tool"
  })
}, {
  depth: 3,
  url: "#configure-a-post-tool",
  title: _jsx(_Fragment, {
    children: "Configure a POST tool"
  })
}, {
  depth: 3,
  url: "#configure-template-variables",
  title: _jsx(_Fragment, {
    children: "Configure template variables"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#parameter-schema",
  title: _jsx(_Fragment, {
    children: "Parameter schema"
  })
}, {
  depth: 3,
  url: "#response-and-runtime-behavior",
  title: _jsx(_Fragment, {
    children: "Response and runtime behavior"
  })
}, {
  depth: 3,
  url: "#security-and-configuration-limits",
  title: _jsx(_Fragment, {
    children: "Security and configuration limits"
  })
}, {
  depth: 3,
  url: "#troubleshooting",
  title: _jsx(_Fragment, {
    children: "Troubleshooting"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, Tabs, TabsContent, TabsList, TabsTrigger } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!Tabs)
    _missingMdxReference("Tabs", true);
  if (!TabsContent)
    _missingMdxReference("TabsContent", true);
  if (!TabsList)
    _missingMdxReference("TabsList", true);
  if (!TabsTrigger)
    _missingMdxReference("TabsTrigger", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "To look up data or take action in your systems, you can set up a Conversational AI agent to use custom tools through your own HTTPS endpoints."
    }), `
`, _jsx(_components.p, {
      children: "When the LLM needs a tool call, it generates the tool's parameters from the conversation. The Conversational AI Engine validates those parameters, makes one synchronous request to your endpoint, and returns the result to the LLM so it can continue generating a response. Only the LLM's reply is sent to TTS, never the raw HTTP response."
    }), `
`, _jsx(_components.p, {
      children: "Common use cases include:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Looking up business data"
        }), ": Query order status, account balances, or inventory from your own systems."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Performing actions"
        }), ": Create a support ticket, schedule an appointment, or update a record."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Grounding responses"
        }), ": Pull current, business-specific information into the conversation without retraining the model."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsxs(_components.p, {
      children: ["Each custom tool declares a ", _jsx(_components.code, {
        children: "function"
      }), " block with a name, description, and a JSON Schema for its parameters. It also declares a ", _jsx(_components.code, {
        children: "server"
      }), " block that describes the HTTPS request the Conversational AI Engine sends once the LLM has generated valid parameters. Tool calling supports only synchronous ", _jsx(_components.code, {
        children: "GET"
      }), " and ", _jsx(_components.code, {
        children: "POST"
      }), " requests to a single endpoint per tool."]
    }), `
`, _jsxs(_components.p, {
      children: ["Custom tools, ", _jsx(_components.a, {
        href: "mcp-tools",
        children: "MCP tools"
      }), ", built-in tools, and model-native tools all share one tool namespace. Names are not case-sensitive. An agent can expose at most 32 tools to the LLM. If tool names conflict or the limit is exceeded, the agent fails to start."]
    }), `
`, _jsxs(_components.p, {
      children: ["MLLM agents support custom tools as well. Declare them in ", _jsx(_components.code, {
        children: "mllm.tools"
      }), ", which takes the same tool definitions as ", _jsx(_components.code, {
        children: "llm.tools"
      }), ", so the rest of this page applies to both. For an MLLM agent, read ", _jsx(_components.code, {
        children: "llm.tools"
      }), " as ", _jsx(_components.code, {
        children: "mllm.tools"
      }), " and the LLM as the MLLM."]
    }), `
`, _jsx(_components.p, {
      children: "The following aren't supported:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "PUT"
        }), ", ", _jsx(_components.code, {
          children: "PATCH"
        }), ", or ", _jsx(_components.code, {
          children: "DELETE"
        }), " requests, automatic retries, or following HTTP redirects."]
      }), `
`, _jsx(_components.li, {
        children: "Asynchronous tools, callbacks, polling, or stored/reusable tool references."
      }), `
`, _jsx(_components.li, {
        children: "OAuth token exchange, dynamic request signing, or mTLS for authenticating to your endpoint."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Implemented the basic logic for interacting with a conversational AI agent by following the ", _jsx(_components.a, {
          href: "../../get-started/quickstart",
          children: "quickstart"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "A text LLM or MLLM that supports function calling. Custom LLMs and Dify aren't supported."
      }), `
`, _jsx(_components.li, {
        children: "An HTTPS endpoint your agent can call to fulfill the tool."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsxs(_components.p, {
      children: ["You declare tools when creating the agent, using either an Agora Agents SDK or the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-tools",
        children: "Start a conversational AI agent"
      }), " REST API."]
    }), `
`, _jsx(_components.h3, {
      id: "configure-a-get-tool",
      children: "Configure a GET tool"
    }), `
`, _jsxs(_components.p, {
      children: ["The following example configures a ", _jsx(_components.code, {
        children: "GET"
      }), " tool that looks up order status:"]
    }), `
`, _jsxs(Tabs, {
      defaultValue: "python",
      groupId: "ai-sdk-language",
      persist: true,
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "python",
          children: "Python SDK"
        }), _jsx(TabsTrigger, {
          value: "typescript",
          children: "TypeScript SDK"
        }), _jsx(TabsTrigger, {
          value: "go",
          children: "Go SDK"
        }), _jsx(TabsTrigger, {
          value: "rest-api",
          children: "REST API"
        })]
      }), _jsx(TabsContent, {
        value: "python",
        children: _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "from"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " agora_agent "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "import"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " OpenAI"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "# ... other agent configuration ..."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".with_llm(OpenAI("
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    api_key"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'your-llm-api-key'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    model"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'gpt-4o-mini'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    base_url"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'https://api.openai.com/v1/chat/completions'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    template_variables"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "        'api_key'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'Bearer your-order-service-key'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    tools"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "["
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "            'type'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'function'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "            'function'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "                'name'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'getOrderStatus'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "                'description'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: `"Get the shipping status for a customer's order by order ID."`
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "                'parameters'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "                    'type'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'object'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "                    'properties'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "                        'order_id'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "                            'type'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'string'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "                            'description'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'The order ID, for example ORD-10293.'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                        },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                    },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "                    'required'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": ["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'order_id'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "],"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "                    'additionalProperties'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "False"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "            'execution'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'mode'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'sync'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "},"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "            'server'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "                'method'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'GET'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "                'url'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'https://api.example.com/orders/"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "{{"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "args.order_id"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "}}"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "/status'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "                'headers'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "                    'Authorization'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "{{"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "template_variables.api_key"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "}}"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "                'timeout_ms'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "5000"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    ],"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "))"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".with_tools("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "True"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "# ... continue with .with_tts() and .create_session() ..."
                })
              })]
            })
          })
        })
      }), _jsx(TabsContent, {
        value: "typescript",
        children: _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "import"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " { OpenAI, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "type"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " LlmTool } "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "from"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'agora-agents'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " orderStatusTool"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " LlmTool"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  type: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'function'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  function: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    name: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'getOrderStatus'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    description: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: `"Get the shipping status for a customer's order by order ID."`
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    parameters: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      type: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'object'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      properties: {"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        order_id: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "          type: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'string'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "          description: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'The order ID, for example ORD-10293.'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      required: ["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'order_id'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "],"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      additionalProperties: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "false"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  execution: { mode: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'sync'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " },"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  server: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    method: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'GET'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    url: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'https://api.example.com/orders/{{args.order_id}}/status'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    headers: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      Authorization: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'{{template_variables.api_key}}'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    timeout_ms: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "5000"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "};"
                })
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// ... other agent configuration ..."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "withLlm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " OpenAI"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  apiKey: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'your-llm-api-key'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  model: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'gpt-4o-mini'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  url: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'https://api.openai.com/v1/chat/completions'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  templateVariables: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    api_key: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'Bearer your-order-service-key'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  tools: [orderStatusTool],"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}))"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "withTools"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "true"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// ... continue with .withTts() and .createSession() ..."
                })
              })]
            })
          })
        })
      }), _jsx(TabsContent, {
        value: "go",
        children: _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "orderStatusTool "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " &"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "LlmTool"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    Function: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "LlmToolFunction"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Name:        "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"getOrderStatus"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Description: Agora."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "String"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: `"Get the shipping status for a customer's order by order ID."`
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "),"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Parameters: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "LlmToolFunctionParameters"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            Properties: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "map"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "interface"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{}{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '                "order_id"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "map"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "interface"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{}{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '                    "type"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ":        "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"string"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '                    "description"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"The order ID, for example ORD-10293."'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            Required: []"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"order_id"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "},"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    Execution: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "LlmToolExecution"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Mode: Agora.LlmToolExecutionModeSync."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Ptr"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(),"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    Server: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "LlmToolServer"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Method: Agora.LlmToolServerMethodGet,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        URL:    "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"https://api.example.com/orders/{{args.order_id}}/status"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Headers: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "map"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '            "Authorization"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"{{template_variables.api_key}}"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        TimeoutMs: Agora."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "5000"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "),"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}"
                })
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// ... other agent configuration ..."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "WithLlm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    vendors."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "NewOpenAI"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "vendors"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "OpenAIOptions"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        APIKey:  "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"your-llm-api-key"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Model:   "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"gpt-4o-mini"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        BaseURL: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"https://api.openai.com/v1/chat/completions"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        TemplateVariables: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "map"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '            "api_key"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"Bearer your-order-service-key"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Tools: []"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "*"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "LlmTool"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{orderStatusTool},"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    }),"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "WithTools"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "true"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// ... continue with .WithTts() and .CreateSession() ..."
                })
              })]
            })
          })
        })
      }), _jsx(TabsContent, {
        value: "rest-api",
        children: _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "properties"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "advanced_features"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "enable_tools"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "true"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "llm"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "url"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"https://api.openai.com/v1/chat/completions"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "api_key"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"your-llm-api-key"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "params"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": { "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '"model"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"gpt-4o-mini"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " },"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "template_variables"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '        "api_key"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"Bearer your-order-service-key"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "tools"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": ["
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '          "type"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"function"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '          "function"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '            "name"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"getOrderStatus"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '            "description"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: `"Get the shipping status for a customer's order by order ID."`
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '            "parameters"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '              "type"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"object"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '              "properties"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '                "order_id"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '                  "type"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"string"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '                  "description"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"The order ID, for example ORD-10293."'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "              },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '              "required"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": ["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"order_id"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "],"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '              "additionalProperties"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "false"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "          },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '          "execution"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '            "mode"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"sync"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "          },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '          "server"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '            "method"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"GET"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '            "url"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"https://api.example.com/orders/{{args.order_id}}/status"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '            "headers"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '              "Authorization"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"{{template_variables.api_key}}"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '            "timeout_ms"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "5000"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "          }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      ]"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}"
                })
              })]
            })
          })
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["To create the agent, enable tool calling. With the REST API, set ", _jsx(_components.code, {
        children: "properties.advanced_features.enable_tools"
      }), " to ", _jsx(_components.code, {
        children: "true"
      }), ". With an Agora Agents SDK, call ", _jsx(_components.code, {
        children: "with_tools(True)"
      }), " (Python), ", _jsx(_components.code, {
        children: "withTools(true)"
      }), " (TypeScript), or ", _jsx(_components.code, {
        children: "WithTools(true)"
      }), " (Go). If you don't enable tool calling, the engine doesn't expose tools to the model and never calls their endpoints."]
    }), `
`, _jsxs(_components.p, {
      children: [`Once this is configured, a user can ask something like "What's the status of order ORD-10293?" After the model generates `, _jsx(_components.code, {
        children: "order_id"
      }), ", the engine sends:"]
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "GET"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.example.com/orders/ORD-10293/status"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Authorization:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Bearer"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " your-order-service-key"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Field reference"
      })
    }), `
`, _jsx(_components.p, {
      children: "Use the following fields to configure tool calling:"
    }), `
`, _jsxs(Tabs, {
      defaultValue: "python",
      groupId: "ai-sdk-language",
      persist: true,
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "python",
          children: "Python SDK"
        }), _jsx(TabsTrigger, {
          value: "typescript",
          children: "TypeScript SDK"
        }), _jsx(TabsTrigger, {
          value: "go",
          children: "Go SDK"
        }), _jsx(TabsTrigger, {
          value: "rest-api",
          children: "REST API"
        })]
      }), _jsxs(TabsContent, {
        value: "python",
        children: [_jsxs(_components.p, {
          children: ["Configure tools using the ", _jsx(_components.code, {
            children: "tools"
          }), " parameter on the LLM vendor class, and enable tool calling with ", _jsx(_components.code, {
            children: "with_tools(True)"
          }), ". Each tool can be a dictionary or an ", _jsx(_components.code, {
            children: "LlmToolConfig"
          }), " object."]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Parameter"
              }), _jsx(_components.th, {
                children: "Required"
              }), _jsx(_components.th, {
                children: "Description"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsx(_components.td, {
                children: "The custom tool array on the LLM vendor class."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "with_tools(True)"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsx(_components.td, {
                children: "Enables calling both custom tools and MCP tools."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].type"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsxs(_components.td, {
                children: ["Fixed as ", _jsx(_components.code, {
                  children: "function"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].function"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsx(_components.td, {
                children: "The tool definition visible to the model, including its name, description, and parameter schema."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].function.name"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsxs(_components.td, {
                children: ["Must start with a letter, contain only letters and numbers, and be no more than 64 characters long. Can't use the ", _jsx(_components.code, {
                  children: "mcp"
                }), " prefix or the value ", _jsx(_components.code, {
                  children: "ragsearch_tool"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].function.description"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsx(_components.td, {
                children: "Explains the tool's purpose, when to call it, and what it returns. Don't include secrets."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].function.parameters"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsxs(_components.td, {
                children: ["A JSON Schema object. The root ", _jsx(_components.code, {
                  children: "type"
                }), " must be ", _jsx(_components.code, {
                  children: "object"
                }), ". Passed using OpenAI's non-strict function-calling mode."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].execution.mode"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["Defaults to ", _jsx(_components.code, {
                  children: "sync"
                }), " when omitted. Only ", _jsx(_components.code, {
                  children: "sync"
                }), " is supported."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.method"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsxs(_components.td, {
                children: ["Only ", _jsx(_components.code, {
                  children: "GET"
                }), " and ", _jsx(_components.code, {
                  children: "POST"
                }), " are supported. A ", _jsx(_components.code, {
                  children: "GET"
                }), " tool can't include ", _jsx(_components.code, {
                  children: "body"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.url"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsx(_components.td, {
                children: "An absolute HTTPS URL. The path and query parameters can use template variables."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.headers"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["Up to 32 entries. Can't use ", _jsx(_components.code, {
                  children: "{{args.<name>}}"
                }), "; pass authentication only as a complete header value."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.body"
                })
              }), _jsxs(_components.td, {
                children: ["Optional for ", _jsx(_components.code, {
                  children: "POST"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "POST"
                }), " only, supports nested JSON. Template placeholders must be complete, not concatenated with other text."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.timeout_ms"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["Defaults to ", _jsx(_components.code, {
                  children: "10000"
                }), ", in the range ", _jsx(_components.code, {
                  children: "1000"
                }), " to ", _jsx(_components.code, {
                  children: "100000"
                }), "."]
              })]
            })]
          })]
        })]
      }), _jsxs(TabsContent, {
        value: "typescript",
        children: [_jsxs(_components.p, {
          children: ["Configure tools using the ", _jsx(_components.code, {
            children: "tools"
          }), " option on the LLM vendor class, and enable tool calling with ", _jsx(_components.code, {
            children: "withTools(true)"
          }), "."]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Parameter"
              }), _jsx(_components.th, {
                children: "Required"
              }), _jsx(_components.th, {
                children: "Description"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["The custom tool array on the LLM vendor class, of type ", _jsx(_components.code, {
                  children: "LlmTool[]"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "withTools(true)"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsx(_components.td, {
                children: "Enables calling both custom tools and MCP tools."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].type"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsxs(_components.td, {
                children: ["Fixed as ", _jsx(_components.code, {
                  children: "function"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].function"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsx(_components.td, {
                children: "The tool definition visible to the model, including its name, description, and parameter schema."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].function.name"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsxs(_components.td, {
                children: ["Must start with a letter, contain only letters and numbers, and be no more than 64 characters long. Can't use the ", _jsx(_components.code, {
                  children: "mcp"
                }), " prefix or the value ", _jsx(_components.code, {
                  children: "ragsearch_tool"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].function.description"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsx(_components.td, {
                children: "Explains the tool's purpose, when to call it, and what it returns. Don't include secrets."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].function.parameters"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsxs(_components.td, {
                children: ["A JSON Schema object. The root ", _jsx(_components.code, {
                  children: "type"
                }), " must be ", _jsx(_components.code, {
                  children: "object"
                }), ". Passed using OpenAI's non-strict function-calling mode."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].execution.mode"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["Defaults to ", _jsx(_components.code, {
                  children: "sync"
                }), " when omitted. Only ", _jsx(_components.code, {
                  children: "sync"
                }), " is supported."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.method"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsxs(_components.td, {
                children: ["Only ", _jsx(_components.code, {
                  children: "GET"
                }), " and ", _jsx(_components.code, {
                  children: "POST"
                }), " are supported. A ", _jsx(_components.code, {
                  children: "GET"
                }), " tool can't include ", _jsx(_components.code, {
                  children: "body"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.url"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsx(_components.td, {
                children: "An absolute HTTPS URL. The path and query parameters can use template variables."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.headers"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["Up to 32 entries. Can't use ", _jsx(_components.code, {
                  children: "{{args.<name>}}"
                }), "; pass authentication only as a complete header value."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.body"
                })
              }), _jsxs(_components.td, {
                children: ["Optional for ", _jsx(_components.code, {
                  children: "POST"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "POST"
                }), " only, supports nested JSON. Template placeholders must be complete, not concatenated with other text."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.timeout_ms"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["Defaults to ", _jsx(_components.code, {
                  children: "10000"
                }), ", in the range ", _jsx(_components.code, {
                  children: "1000"
                }), " to ", _jsx(_components.code, {
                  children: "100000"
                }), "."]
              })]
            })]
          })]
        })]
      }), _jsxs(TabsContent, {
        value: "go",
        children: [_jsxs(_components.p, {
          children: ["Configure tools using the ", _jsx(_components.code, {
            children: "Tools"
          }), " field on the LLM vendor options, and enable tool calling with ", _jsx(_components.code, {
            children: "WithTools(true)"
          }), "."]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Parameter"
              }), _jsx(_components.th, {
                children: "Required"
              }), _jsx(_components.th, {
                children: "Description"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "Tools"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["The custom tool array on the LLM vendor options, of type ", _jsx(_components.code, {
                  children: "[]*Agora.LlmTool"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "WithTools(true)"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsx(_components.td, {
                children: "Enables calling both custom tools and MCP tools."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "LlmTool.Function"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsx(_components.td, {
                children: "The tool definition visible to the model, including its name, description, and parameter schema."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "LlmToolFunction.Name"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsxs(_components.td, {
                children: ["Must start with a letter, contain only letters and numbers, and be no more than 64 characters long. Can't use the ", _jsx(_components.code, {
                  children: "mcp"
                }), " prefix or the value ", _jsx(_components.code, {
                  children: "ragsearch_tool"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "LlmToolFunction.Description"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsx(_components.td, {
                children: "Explains the tool's purpose, when to call it, and what it returns. Don't include secrets."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "LlmToolFunction.Parameters"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsxs(_components.td, {
                children: ["A JSON Schema object with ", _jsx(_components.code, {
                  children: "Properties"
                }), " and ", _jsx(_components.code, {
                  children: "Required"
                }), ". The SDK serializes the root type as ", _jsx(_components.code, {
                  children: "object"
                }), ". Passed using OpenAI's non-strict function-calling mode."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "LlmToolExecution.Mode"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["Defaults to ", _jsx(_components.code, {
                  children: "sync"
                }), " when omitted. Only ", _jsx(_components.code, {
                  children: "Agora.LlmToolExecutionModeSync"
                }), " is supported."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "LlmToolServer.Method"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsxs(_components.td, {
                children: ["Accepts ", _jsx(_components.code, {
                  children: "Agora.LlmToolServerMethodGet"
                }), " or ", _jsx(_components.code, {
                  children: "Agora.LlmToolServerMethodPost"
                }), ". A ", _jsx(_components.code, {
                  children: "GET"
                }), " tool can't include ", _jsx(_components.code, {
                  children: "Body"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "LlmToolServer.URL"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsx(_components.td, {
                children: "An absolute HTTPS URL. The path and query parameters can use template variables."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "LlmToolServer.Headers"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["Up to 32 entries. Can't use ", _jsx(_components.code, {
                  children: "{{args.<name>}}"
                }), "; pass authentication only as a complete header value."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "LlmToolServer.Body"
                })
              }), _jsxs(_components.td, {
                children: ["Optional for ", _jsx(_components.code, {
                  children: "POST"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "POST"
                }), " only, supports nested JSON. Template placeholders must be complete, not concatenated with other text."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "LlmToolServer.TimeoutMs"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["Defaults to ", _jsx(_components.code, {
                  children: "10000"
                }), ", in the range ", _jsx(_components.code, {
                  children: "1000"
                }), " to ", _jsx(_components.code, {
                  children: "100000"
                }), "."]
              })]
            })]
          })]
        })]
      }), _jsxs(TabsContent, {
        value: "rest-api",
        children: [_jsxs(_components.p, {
          children: ["Configure tools in the ", _jsx(_components.code, {
            children: "properties.llm.tools"
          }), " array, and set ", _jsx(_components.code, {
            children: "properties.advanced_features.enable_tools"
          }), " to ", _jsx(_components.code, {
            children: "true"
          }), "."]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Parameter"
              }), _jsx(_components.th, {
                children: "Required"
              }), _jsx(_components.th, {
                children: "Description"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "properties.advanced_features.enable_tools"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsxs(_components.td, {
                children: ["Set to ", _jsx(_components.code, {
                  children: "true"
                }), " so the agent can expose custom tools and MCP tools to the model. If omitted or ", _jsx(_components.code, {
                  children: "false"
                }), ", the agent doesn't call any tool endpoints."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "properties.llm.tools"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsx(_components.td, {
                children: "The custom tool array. Custom tools, MCP tools, built-in tools, and model-native tools share one model-visible tool namespace."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].type"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsxs(_components.td, {
                children: ["Fixed as ", _jsx(_components.code, {
                  children: "function"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].function"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsx(_components.td, {
                children: "The tool definition visible to the model, including its name, description, and parameter schema."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].function.name"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsxs(_components.td, {
                children: ["Must start with a letter, contain only letters and numbers, and be no more than 64 characters long. Can't use the ", _jsx(_components.code, {
                  children: "mcp"
                }), " prefix or the value ", _jsx(_components.code, {
                  children: "ragsearch_tool"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].function.description"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsx(_components.td, {
                children: "Explains the tool's purpose, when to call it, and what it returns. Don't include secrets."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].function.parameters"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsxs(_components.td, {
                children: ["A JSON Schema object. The root ", _jsx(_components.code, {
                  children: "type"
                }), " must be ", _jsx(_components.code, {
                  children: "object"
                }), ". Passed using OpenAI's non-strict function-calling mode."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].execution"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["Defaults to ", _jsx(_components.code, {
                  children: '{ "mode": "sync" }'
                }), " when omitted. Only ", _jsx(_components.code, {
                  children: "sync"
                }), " is supported."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsx(_components.td, {
                children: "The actual HTTP request configuration."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.method"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsxs(_components.td, {
                children: ["Only ", _jsx(_components.code, {
                  children: "GET"
                }), " and ", _jsx(_components.code, {
                  children: "POST"
                }), " are supported. A ", _jsx(_components.code, {
                  children: "GET"
                }), " tool can't include ", _jsx(_components.code, {
                  children: "body"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.url"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsx(_components.td, {
                children: "An absolute HTTPS URL. The path and query parameters can use template variables."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.headers"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["Up to 32 entries. Can't use ", _jsx(_components.code, {
                  children: "{{args.<name>}}"
                }), "; pass authentication only as a complete header value."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.body"
                })
              }), _jsxs(_components.td, {
                children: ["Optional for ", _jsx(_components.code, {
                  children: "POST"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "POST"
                }), " only, supports nested JSON. Template placeholders must be complete, not concatenated with other text."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.timeout_ms"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["Defaults to ", _jsx(_components.code, {
                  children: "10000"
                }), ", in the range ", _jsx(_components.code, {
                  children: "1000"
                }), " to ", _jsx(_components.code, {
                  children: "100000"
                }), "."]
              })]
            })]
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Even if tool calling isn't enabled, any tools you declare are still validated for field type, size, template syntax, and duplicate names."
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "configure-a-post-tool",
      children: "Configure a POST tool"
    }), `
`, _jsxs(_components.p, {
      children: ["Use a ", _jsx(_components.code, {
        children: "POST"
      }), " tool to perform actions, such as creating a ticket or sending a message. A request body can only be used with ", _jsx(_components.code, {
        children: "POST"
      }), "; configuring one for a ", _jsx(_components.code, {
        children: "GET"
      }), " tool causes validation to fail. The following example sends a confirmed delivery address to a phone number:"]
    }), `
`, _jsxs(Tabs, {
      defaultValue: "python",
      groupId: "ai-sdk-language",
      persist: true,
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "python",
          children: "Python SDK"
        }), _jsx(TabsTrigger, {
          value: "typescript",
          children: "TypeScript SDK"
        }), _jsx(TabsTrigger, {
          value: "go",
          children: "Go SDK"
        }), _jsx(TabsTrigger, {
          value: "rest-api",
          children: "REST API"
        })]
      }), _jsx(TabsContent, {
        value: "python",
        children: _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "sms_tool "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "    'type'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'function'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "    'function'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "        'name'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'sendFollowUpSms'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "        'description'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: `"Send the customer's confirmed delivery address to a phone number. Only call this after the customer has confirmed both the address and the phone number."`
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "        'parameters'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "            'type'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'object'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "            'properties'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "                'phone_number'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "                    'type'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'string'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "                    'description'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'The recipient phone number, in E.164 format.'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "                'address'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "                    'type'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'string'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "                    'description'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: `"The customer's confirmed delivery address."`
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "            'required'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": ["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'phone_number'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'address'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "],"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "            'additionalProperties'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "False"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "    'execution'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'mode'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'sync'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "},"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "    'server'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "        'method'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'POST'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "        'url'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'https://api.example.com/messages/sms'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "        'headers'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "            'Authorization'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "{{"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "template_variables.api_key"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "}}"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "            'Content-Type'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'application/json'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "        'body'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "            'to'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "{{"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "args.phone_number"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "}}"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "            'message'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "{{"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "args.address"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "}}"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "            'idempotency_key'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "{{"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "tool_call_id"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "}}"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "        'timeout_ms'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "10000"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}"
                })
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "# ... other agent configuration ..."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".with_llm(OpenAI("
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    api_key"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'your-llm-api-key'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    model"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'gpt-4o-mini'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    base_url"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'https://api.openai.com/v1/chat/completions'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    template_variables"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "        'api_key'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'Bearer your-messaging-service-key'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    tools"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "[sms_tool],"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "))"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".with_tools("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "True"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "# ... continue with .with_tts() and .create_session() ..."
                })
              })]
            })
          })
        })
      }), _jsx(TabsContent, {
        value: "typescript",
        children: _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " smsTool"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " LlmTool"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  type: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'function'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  function: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    name: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'sendFollowUpSms'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    description:"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: `      "Send the customer's confirmed delivery address to a phone number. Only call this after the customer has confirmed both the address and the phone number."`
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    parameters: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      type: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'object'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      properties: {"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        phone_number: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "          type: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'string'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "          description: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'The recipient phone number, in E.164 format.'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        address: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "          type: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'string'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "          description: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: `"The customer's confirmed delivery address."`
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      required: ["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'phone_number'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'address'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "],"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      additionalProperties: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "false"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  execution: { mode: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'sync'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " },"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  server: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    method: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'POST'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    url: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'https://api.example.com/messages/sms'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    headers: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      Authorization: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'{{template_variables.api_key}}'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "      'Content-Type'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'application/json'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    body: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      to: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'{{args.phone_number}}'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      message: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'{{args.address}}'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      idempotency_key: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'{{tool_call_id}}'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    timeout_ms: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "10000"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "};"
                })
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// ... other agent configuration ..."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "withLlm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " OpenAI"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  apiKey: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'your-llm-api-key'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  model: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'gpt-4o-mini'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  url: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'https://api.openai.com/v1/chat/completions'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  templateVariables: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    api_key: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'Bearer your-messaging-service-key'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  tools: [smsTool],"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}))"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "withTools"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "true"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// ... continue with .withTts() and .createSession() ..."
                })
              })]
            })
          })
        })
      }), _jsx(TabsContent, {
        value: "go",
        children: _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "smsTool "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " &"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "LlmTool"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    Function: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "LlmToolFunction"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Name:        "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"sendFollowUpSms"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Description: Agora."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "String"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: `"Send the customer's confirmed delivery address to a phone number. Only call this after the customer has confirmed both the address and the phone number."`
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "),"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Parameters: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "LlmToolFunctionParameters"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            Properties: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "map"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "interface"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{}{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '                "phone_number"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "map"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "interface"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{}{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '                    "type"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ":        "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"string"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '                    "description"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"The recipient phone number, in E.164 format."'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '                "address"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "map"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "interface"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{}{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '                    "type"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ":        "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"string"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '                    "description"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: `"The customer's confirmed delivery address."`
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            Required: []"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"phone_number"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"address"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "},"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    Execution: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "LlmToolExecution"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Mode: Agora.LlmToolExecutionModeSync."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Ptr"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(),"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    Server: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "LlmToolServer"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Method: Agora.LlmToolServerMethodPost,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        URL:    "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"https://api.example.com/messages/sms"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Headers: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "map"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '            "Authorization"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"{{template_variables.api_key}}"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '            "Content-Type"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ":  "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"application/json"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Body: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "map"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "interface"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{}{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '            "to"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ":              "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"{{args.phone_number}}"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '            "message"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ":         "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"{{args.address}}"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '            "idempotency_key"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"{{tool_call_id}}"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        TimeoutMs: Agora."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "10000"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "),"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}"
                })
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// ... other agent configuration ..."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "WithLlm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    vendors."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "NewOpenAI"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "vendors"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "OpenAIOptions"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        APIKey:  "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"your-llm-api-key"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Model:   "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"gpt-4o-mini"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        BaseURL: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"https://api.openai.com/v1/chat/completions"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        TemplateVariables: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "map"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '            "api_key"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"Bearer your-messaging-service-key"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Tools: []"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "*"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "LlmTool"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{smsTool},"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    }),"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "WithTools"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "true"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// ... continue with .WithTts() and .CreateSession() ..."
                })
              })]
            })
          })
        })
      }), _jsxs(TabsContent, {
        value: "rest-api",
        children: [_jsxs(_components.p, {
          children: ["The following JSON shows only the ", _jsx(_components.code, {
            children: "POST"
          }), " tool entry in the ", _jsx(_components.code, {
            children: "properties.llm.tools"
          }), " array:"]
        }), _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "type"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"function"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "function"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "name"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"sendFollowUpSms"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "description"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: `"Send the customer's confirmed delivery address to a phone number. Only call this after the customer has confirmed both the address and the phone number."`
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "parameters"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "type"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"object"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "properties"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '        "phone_number"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '          "type"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"string"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '          "description"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"The recipient phone number, in E.164 format."'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '        "address"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '          "type"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"string"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '          "description"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: `"The customer's confirmed delivery address."`
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "required"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": ["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"phone_number"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"address"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "],"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "additionalProperties"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "false"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "execution"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "mode"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"sync"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "server"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "method"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"POST"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "url"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"https://api.example.com/messages/sms"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "headers"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "Authorization"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"{{template_variables.api_key}}"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "Content-Type"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"application/json"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "body"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "to"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"{{args.phone_number}}"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "message"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"{{args.address}}"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "idempotency_key"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"{{tool_call_id}}"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "timeout_ms"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "10000"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}"
                })
              })]
            })
          })
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "{{tool_call_id}}"
      }), " is the system-generated ID correlating this tool call. You can pass it to your own service to correlate logs or detect a repeated call, but passing it alone doesn't stop your service from processing the same request twice, and Agora doesn't automatically retry requests. Your service is still responsible for handling duplicate requests and unknown outcomes."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Field reference"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "function"
      }), " and ", _jsx(_components.code, {
        children: "execution"
      }), " are the same as for a ", _jsx(_components.code, {
        children: "GET"
      }), " tool. The following fields are specific to a ", _jsx(_components.code, {
        children: "POST"
      }), " tool's server configuration:"]
    }), `
`, _jsxs(Tabs, {
      defaultValue: "python",
      groupId: "ai-sdk-language",
      persist: true,
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "python",
          children: "Python SDK"
        }), _jsx(TabsTrigger, {
          value: "typescript",
          children: "TypeScript SDK"
        }), _jsx(TabsTrigger, {
          value: "go",
          children: "Go SDK"
        }), _jsx(TabsTrigger, {
          value: "rest-api",
          children: "REST API"
        })]
      }), _jsx(TabsContent, {
        value: "python",
        children: _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Parameter"
              }), _jsx(_components.th, {
                children: "Required"
              }), _jsx(_components.th, {
                children: "Description"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.method"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsxs(_components.td, {
                children: ["Fixed as ", _jsx(_components.code, {
                  children: "POST"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.url"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsx(_components.td, {
                children: "An absolute HTTPS URL. The path and query parameters can use template variables."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.headers"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["Configure authentication and ", _jsx(_components.code, {
                  children: "Content-Type"
                }), ". Can't use ", _jsx(_components.code, {
                  children: "{{args.<name>}}"
                }), "; pass authentication only as a complete header value."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.body"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["The ", _jsx(_components.code, {
                  children: "POST"
                }), " request body. Supports nested JSON. Values can be constants or complete template placeholders, not concatenated text."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.timeout_ms"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["Defaults to ", _jsx(_components.code, {
                  children: "10000"
                }), ", in the range ", _jsx(_components.code, {
                  children: "1000"
                }), " to ", _jsx(_components.code, {
                  children: "100000"
                }), "."]
              })]
            })]
          })]
        })
      }), _jsx(TabsContent, {
        value: "typescript",
        children: _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Parameter"
              }), _jsx(_components.th, {
                children: "Required"
              }), _jsx(_components.th, {
                children: "Description"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.method"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsxs(_components.td, {
                children: ["Fixed as ", _jsx(_components.code, {
                  children: "POST"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.url"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsx(_components.td, {
                children: "An absolute HTTPS URL. The path and query parameters can use template variables."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.headers"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["Configure authentication and ", _jsx(_components.code, {
                  children: "Content-Type"
                }), ". Can't use ", _jsx(_components.code, {
                  children: "{{args.<name>}}"
                }), "; pass authentication only as a complete header value."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.body"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["The ", _jsx(_components.code, {
                  children: "POST"
                }), " request body. Supports nested JSON. Values can be constants or complete template placeholders, not concatenated text."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.timeout_ms"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["Defaults to ", _jsx(_components.code, {
                  children: "10000"
                }), ", in the range ", _jsx(_components.code, {
                  children: "1000"
                }), " to ", _jsx(_components.code, {
                  children: "100000"
                }), "."]
              })]
            })]
          })]
        })
      }), _jsx(TabsContent, {
        value: "go",
        children: _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Parameter"
              }), _jsx(_components.th, {
                children: "Required"
              }), _jsx(_components.th, {
                children: "Description"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "LlmToolServer.Method"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsxs(_components.td, {
                children: ["Fixed as ", _jsx(_components.code, {
                  children: "Agora.LlmToolServerMethodPost"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "LlmToolServer.URL"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsx(_components.td, {
                children: "An absolute HTTPS URL. The path and query parameters can use template variables."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "LlmToolServer.Headers"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["Configure authentication and ", _jsx(_components.code, {
                  children: "Content-Type"
                }), ". Can't use ", _jsx(_components.code, {
                  children: "{{args.<name>}}"
                }), "; pass authentication only as a complete header value."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "LlmToolServer.Body"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["The ", _jsx(_components.code, {
                  children: "POST"
                }), " request body. Supports nested JSON. Values can be constants or complete template placeholders, not concatenated text."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "LlmToolServer.TimeoutMs"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["Defaults to ", _jsx(_components.code, {
                  children: "10000"
                }), ", in the range ", _jsx(_components.code, {
                  children: "1000"
                }), " to ", _jsx(_components.code, {
                  children: "100000"
                }), "."]
              })]
            })]
          })]
        })
      }), _jsx(TabsContent, {
        value: "rest-api",
        children: _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Parameter"
              }), _jsx(_components.th, {
                children: "Required"
              }), _jsx(_components.th, {
                children: "Description"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.method"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsxs(_components.td, {
                children: ["Fixed as ", _jsx(_components.code, {
                  children: "POST"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.url"
                })
              }), _jsx(_components.td, {
                children: "Yes"
              }), _jsx(_components.td, {
                children: "An absolute HTTPS URL. The path and query parameters can use template variables."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.headers"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["Configure authentication and ", _jsx(_components.code, {
                  children: "Content-Type"
                }), ". Can't use ", _jsx(_components.code, {
                  children: "{{args.<name>}}"
                }), "; pass authentication only as a complete header value."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.body"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["The ", _jsx(_components.code, {
                  children: "POST"
                }), " request body. Supports nested JSON. Values can be constants or complete template placeholders, not concatenated text."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "tools[].server.timeout_ms"
                })
              }), _jsx(_components.td, {
                children: "No"
              }), _jsxs(_components.td, {
                children: ["Defaults to ", _jsx(_components.code, {
                  children: "10000"
                }), ", in the range ", _jsx(_components.code, {
                  children: "1000"
                }), " to ", _jsx(_components.code, {
                  children: "100000"
                }), "."]
              })]
            })]
          })]
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For ", _jsx(_components.code, {
        children: "POST"
      }), " tools that change data or trigger an action:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "State the conditions for calling the tool in its description and in your system prompt, such as requiring the user to confirm first."
      }), `
`, _jsx(_components.li, {
        children: "Perform the final authorization check on your own server. Don't rely on the LLM's judgment alone."
      }), `
`, _jsxs(_components.li, {
        children: ["Only have the agent tell the user the request succeeded after your endpoint returns a ", _jsx(_components.code, {
          children: "2xx"
        }), " status."]
      }), `
`, _jsx(_components.li, {
        children: "If a request has already been sent, a user interruption doesn't guarantee the remote action is canceled or rolled back."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "configure-template-variables",
      children: "Configure template variables"
    }), `
`, _jsx(_components.p, {
      children: "Template variables let you fill an HTTP request with either LLM-generated parameters or fixed values known when you create the agent. The following example puts a tenant ID in a header and a customer ID in the request body:"
    }), `
`, _jsxs(Tabs, {
      defaultValue: "python",
      groupId: "ai-sdk-language",
      persist: true,
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "python",
          children: "Python SDK"
        }), _jsx(TabsTrigger, {
          value: "typescript",
          children: "TypeScript SDK"
        }), _jsx(TabsTrigger, {
          value: "go",
          children: "Go SDK"
        }), _jsx(TabsTrigger, {
          value: "rest-api",
          children: "REST API"
        })]
      }), _jsx(TabsContent, {
        value: "python",
        children: _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "profile_tool "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "    'type'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'function'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "    'function'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "        'name'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'getCustomerProfile'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "        'description'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: `"Look up the current customer's profile."`
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "        'parameters'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "            'type'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'object'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "            'properties'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {},"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "            'additionalProperties'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "False"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "    'execution'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'mode'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'sync'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "},"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "    'server'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "        'method'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'POST'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "        'url'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'https://api.example.com/customers/profile'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "        'headers'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "            'X-Tenant-ID'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "{{"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "template_variables.tenant_id"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "}}"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "        'body'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "            'customer_id'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "{{"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "template_variables.customer_id"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "}}"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}"
                })
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "# ... other agent configuration ..."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".with_llm(OpenAI("
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    api_key"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'your-llm-api-key'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    model"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'gpt-4o-mini'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    base_url"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'https://api.openai.com/v1/chat/completions'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    template_variables"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "        'tenant_id'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'acme-corp'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "        'customer_id'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'cust-4471'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    tools"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "[profile_tool],"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "))"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".with_tools("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "True"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "# ... continue with .with_tts() and .create_session() ..."
                })
              })]
            })
          })
        })
      }), _jsx(TabsContent, {
        value: "typescript",
        children: _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " profileTool"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " LlmTool"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  type: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'function'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  function: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    name: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'getCustomerProfile'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    description: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: `"Look up the current customer's profile."`
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    parameters: { type: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'object'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", properties: {}, additionalProperties: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "false"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " },"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  execution: { mode: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'sync'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " },"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  server: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    method: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'POST'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    url: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'https://api.example.com/customers/profile'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    headers: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "      'X-Tenant-ID'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'{{template_variables.tenant_id}}'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    body: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      customer_id: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'{{template_variables.customer_id}}'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "};"
                })
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// ... other agent configuration ..."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "withLlm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " OpenAI"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  apiKey: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'your-llm-api-key'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  model: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'gpt-4o-mini'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  url: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'https://api.openai.com/v1/chat/completions'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  templateVariables: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    tenant_id: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'acme-corp'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    customer_id: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'cust-4471'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  tools: [profileTool],"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}))"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "withTools"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "true"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// ... continue with .withTts() and .createSession() ..."
                })
              })]
            })
          })
        })
      }), _jsx(TabsContent, {
        value: "go",
        children: _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "profileTool "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " &"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "LlmTool"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    Function: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "LlmToolFunction"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Name:        "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"getCustomerProfile"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Description: Agora."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "String"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: `"Look up the current customer's profile."`
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "),"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Parameters: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "LlmToolFunctionParameters"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            Properties: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "map"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "interface"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{}{},"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    Execution: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "LlmToolExecution"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Mode: Agora.LlmToolExecutionModeSync."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Ptr"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(),"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    Server: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "LlmToolServer"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Method: Agora.LlmToolServerMethodPost,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        URL:    "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"https://api.example.com/customers/profile"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Headers: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "map"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '            "X-Tenant-ID"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"{{template_variables.tenant_id}}"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Body: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "map"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "interface"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{}{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '            "customer_id"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"{{template_variables.customer_id}}"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}"
                })
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// ... other agent configuration ..."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "WithLlm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    vendors."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "NewOpenAI"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "vendors"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "OpenAIOptions"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        APIKey:  "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"your-llm-api-key"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Model:   "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"gpt-4o-mini"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        BaseURL: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"https://api.openai.com/v1/chat/completions"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        TemplateVariables: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "map"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '            "tenant_id"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ":   "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"acme-corp"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '            "customer_id"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"cust-4471"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Tools: []"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "*"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "LlmTool"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{profileTool},"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    }),"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "WithTools"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "true"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// ... continue with .WithTts() and .CreateSession() ..."
                })
              })]
            })
          })
        })
      }), _jsx(TabsContent, {
        value: "rest-api",
        children: _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "properties"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "llm"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "template_variables"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '        "tenant_id"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"acme-corp"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '        "customer_id"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"cust-4471"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "tools"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": ["
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '          "type"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"function"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '          "function"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '            "name"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"getCustomerProfile"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '            "description"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: `"Look up the current customer's profile."`
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '            "parameters"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '              "type"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"object"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '              "properties"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {},"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '              "additionalProperties"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "false"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "          },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '          "execution"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '            "mode"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"sync"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "          },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '          "server"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '            "method"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"POST"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '            "url"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"https://api.example.com/customers/profile"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '            "headers"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '              "X-Tenant-ID"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"{{template_variables.tenant_id}}"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '            "body"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '              "customer_id"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"{{template_variables.customer_id}}"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "          }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      ]"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}"
                })
              })]
            })
          })
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Field reference"
      })
    }), `
`, _jsxs(Tabs, {
      defaultValue: "python",
      groupId: "ai-sdk-language",
      persist: true,
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "python",
          children: "Python SDK"
        }), _jsx(TabsTrigger, {
          value: "typescript",
          children: "TypeScript SDK"
        }), _jsx(TabsTrigger, {
          value: "go",
          children: "Go SDK"
        }), _jsx(TabsTrigger, {
          value: "rest-api",
          children: "REST API"
        })]
      }), _jsx(TabsContent, {
        value: "python",
        children: _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Parameter"
              }), _jsx(_components.th, {
                children: "Description"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "template_variables"
                })
              }), _jsx(_components.td, {
                children: "Fixed string values known when the agent is created, set on the LLM vendor class."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "server.headers"
                }), " and ", _jsx(_components.code, {
                  children: "server.body"
                })]
              }), _jsxs(_components.td, {
                children: ["Read a fixed value with ", _jsx(_components.code, {
                  children: "{{template_variables.<name>}}"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "server.body"
                })
              }), _jsxs(_components.td, {
                children: ["Can also use ", _jsx(_components.code, {
                  children: "{{args.<name>}}"
                }), " and ", _jsx(_components.code, {
                  children: "{{tool_call_id}}"
                }), ", which don't require ", _jsx(_components.code, {
                  children: "template_variables"
                }), "."]
              })]
            })]
          })]
        })
      }), _jsx(TabsContent, {
        value: "typescript",
        children: _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Parameter"
              }), _jsx(_components.th, {
                children: "Description"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "templateVariables"
                })
              }), _jsx(_components.td, {
                children: "Fixed string values known when the agent is created, set on the LLM vendor class."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "server.headers"
                }), " and ", _jsx(_components.code, {
                  children: "server.body"
                })]
              }), _jsxs(_components.td, {
                children: ["Read a fixed value with ", _jsx(_components.code, {
                  children: "{{template_variables.<name>}}"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "server.body"
                })
              }), _jsxs(_components.td, {
                children: ["Can also use ", _jsx(_components.code, {
                  children: "{{args.<name>}}"
                }), " and ", _jsx(_components.code, {
                  children: "{{tool_call_id}}"
                }), ", which don't require ", _jsx(_components.code, {
                  children: "templateVariables"
                }), "."]
              })]
            })]
          })]
        })
      }), _jsx(TabsContent, {
        value: "go",
        children: _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Parameter"
              }), _jsx(_components.th, {
                children: "Description"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "TemplateVariables"
                })
              }), _jsx(_components.td, {
                children: "Fixed string values known when the agent is created, set on the LLM vendor options."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "LlmToolServer.Headers"
                }), " and ", _jsx(_components.code, {
                  children: "LlmToolServer.Body"
                })]
              }), _jsxs(_components.td, {
                children: ["Read a fixed value with ", _jsx(_components.code, {
                  children: "{{template_variables.<name>}}"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "LlmToolServer.Body"
                })
              }), _jsxs(_components.td, {
                children: ["Can also use ", _jsx(_components.code, {
                  children: "{{args.<name>}}"
                }), " and ", _jsx(_components.code, {
                  children: "{{tool_call_id}}"
                }), ", which don't require ", _jsx(_components.code, {
                  children: "TemplateVariables"
                }), "."]
              })]
            })]
          })]
        })
      }), _jsx(TabsContent, {
        value: "rest-api",
        children: _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Parameter"
              }), _jsx(_components.th, {
                children: "Description"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "properties.llm.template_variables"
                })
              }), _jsx(_components.td, {
                children: "Fixed string values known when the agent is created."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "properties.llm.tools[].server.headers"
                }), " and ", _jsx(_components.code, {
                  children: "body"
                })]
              }), _jsxs(_components.td, {
                children: ["Read a fixed value with ", _jsx(_components.code, {
                  children: "{{template_variables.<name>}}"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "properties.llm.tools[].server.body"
                })
              }), _jsxs(_components.td, {
                children: ["Can also use ", _jsx(_components.code, {
                  children: "{{args.<name>}}"
                }), " and ", _jsx(_components.code, {
                  children: "{{tool_call_id}}"
                }), ", which don't require ", _jsx(_components.code, {
                  children: "template_variables"
                }), "."]
              })]
            })]
          })]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "Keep the following rules in mind when using template variables:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Placeholders are substituted once; they aren't expanded recursively."
      }), `
`, _jsxs(_components.li, {
        children: ["A template must reference a complete variable. Concatenating text, such as ", _jsx(_components.code, {
          children: "order-{{args.order_id}}"
        }), ", isn't supported."]
      }), `
`, _jsxs(_components.li, {
        children: ["Nested fields, array indexes, and shorthand forms like ", _jsx(_components.code, {
          children: "{{name}}"
        }), " aren't supported."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "{{args.<name>}}"
        }), " can't be used in headers."]
      }), `
`, _jsx(_components.li, {
        children: "Header names, the HTTP method, and the URL's scheme, host, and port can't be templated."
      }), `
`, _jsx(_components.li, {
        children: "Variables used in the URL path and query parameters are encoded for their respective part of the URL. A variable can't inject a new host, path segment, or query key."
      }), `
`, _jsxs(_components.li, {
        children: ["If a variable doesn't exist, is ", _jsx(_components.code, {
          children: "null"
        }), ", or has a type that doesn't fit its target location, the tool call fails without calling your endpoint."]
      }), `
`, _jsx(_components.li, {
        children: "Always pass authentication information as a complete header value. Don't put it in the URL, request body, tool parameters, or tool description."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "The following reference material covers the tool parameter schema, response handling, configuration limits, and common issues."
    }), `
`, _jsx(_components.h3, {
      id: "parameter-schema",
      children: "Parameter schema"
    }), `
`, _jsxs(_components.p, {
      children: ["A tool's parameters use JSON Schema and are passed to the LLM using OpenAI's non-strict function-calling mode. The root must be ", _jsx(_components.code, {
        children: "object"
      }), ", with parameters typically declared under ", _jsx(_components.code, {
        children: "properties"
      }), ". For details, see ", _jsx(_components.a, {
        href: "https://platform.openai.com/docs/guides/function-calling",
        children: "OpenAI's Function Calling guide"
      }), "."]
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "type"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"object"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "properties"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "order_id"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "type"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"string"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "description"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"The order ID."'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "include_items"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "type"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"boolean"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "description"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"Whether to also return line-item details."'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "region"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "type"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"string"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "enum"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"us"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"eu"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "description"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: `"The order's region."`
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "required"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"order_id"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "additionalProperties"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "false"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "additionalProperties: false"
      }), " in this example only demonstrates disallowing undeclared parameters. It isn't required, and setting it doesn't itself enable strict mode. To allow extra parameters, omit this field or set it to ", _jsx(_components.code, {
        children: "true"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "Practical rules:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Common JSON Schema types are supported: ", _jsx(_components.code, {
          children: "object"
        }), ", ", _jsx(_components.code, {
          children: "array"
        }), ", ", _jsx(_components.code, {
          children: "string"
        }), ", ", _jsx(_components.code, {
          children: "integer"
        }), ", ", _jsx(_components.code, {
          children: "number"
        }), ", ", _jsx(_components.code, {
          children: "boolean"
        }), ", and ", _jsx(_components.code, {
          children: "null"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Standard JSON Schema keywords relevant to tool parameters are supported, such as ", _jsx(_components.code, {
          children: "type"
        }), ", ", _jsx(_components.code, {
          children: "description"
        }), ", ", _jsx(_components.code, {
          children: "enum"
        }), ", ", _jsx(_components.code, {
          children: "properties"
        }), ", ", _jsx(_components.code, {
          children: "required"
        }), ", ", _jsx(_components.code, {
          children: "additionalProperties"
        }), ", and ", _jsx(_components.code, {
          children: "items"
        }), ". The actual effect depends on your LLM's function-calling support."]
      }), `
`, _jsxs(_components.li, {
        children: ["The root ", _jsx(_components.code, {
          children: "type"
        }), " must be ", _jsx(_components.code, {
          children: "object"
        }), ". Declare array elements with ", _jsx(_components.code, {
          children: "items"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Don't add optional parameters to ", _jsx(_components.code, {
          children: "required"
        }), ". If you omit ", _jsx(_components.code, {
          children: "additionalProperties"
        }), ", extra properties are allowed per JSON Schema semantics. Set it to ", _jsx(_components.code, {
          children: "false"
        }), " explicitly to disallow undeclared parameters."]
      }), `
`, _jsxs(_components.li, {
        children: ["Don't rely on a specific model's support for advanced keywords such as ", _jsx(_components.code, {
          children: "$ref"
        }), ", ", _jsx(_components.code, {
          children: "$defs"
        }), ", ", _jsx(_components.code, {
          children: "format"
        }), ", ", _jsx(_components.code, {
          children: "pattern"
        }), ", range constraints, or composition schemas. Confirm compatibility with your LLM before using them."]
      }), `
`, _jsx(_components.li, {
        children: "The serialized schema size is capped at 64 KiB."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "response-and-runtime-behavior",
      children: "Response and runtime behavior"
    }), `
`, _jsx(_components.p, {
      children: "The Conversational AI Engine passes your endpoint's response back to the LLM. The exact behavior depends on the response status and content:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Endpoint result"
          }), _jsx(_components.th, {
            children: "Tool result"
          }), _jsx(_components.th, {
            children: "Conversation behavior"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["Non-empty ", _jsx(_components.code, {
              children: "2xx"
            }), ", valid JSON"]
          }), _jsx(_components.td, {
            children: "JSON is parsed, then serialized back to a string"
          }), _jsx(_components.td, {
            children: "The model generates a reply based on the full result"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["Non-empty ", _jsx(_components.code, {
              children: "2xx"
            }), ", UTF-8 text"]
          }), _jsx(_components.td, {
            children: "The raw text is used"
          }), _jsx(_components.td, {
            children: "The model generates a reply based on the full result"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["Empty ", _jsx(_components.code, {
              children: "2xx"
            }), ", such as ", _jsx(_components.code, {
              children: "204"
            })]
          }), _jsxs(_components.td, {
            children: ["Reported as success, result is ", _jsx(_components.code, {
              children: "[]"
            })]
          }), _jsx(_components.td, {
            children: "The model continues based on the success result"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["Non-", _jsx(_components.code, {
              children: "2xx"
            }), ", valid JSON"]
          }), _jsx(_components.td, {
            children: "Reported as failed; JSON is parsed, then serialized back to a string"
          }), _jsx(_components.td, {
            children: "The full response is still returned to the model, but it shouldn't claim the action succeeded"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["Non-", _jsx(_components.code, {
              children: "2xx"
            }), ", UTF-8 text"]
          }), _jsx(_components.td, {
            children: "Reported as failed; the raw text is used"
          }), _jsx(_components.td, {
            children: "The full response is still returned to the model, but it shouldn't claim the action succeeded"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["Non-", _jsx(_components.code, {
              children: "2xx"
            }), ", empty body"]
          }), _jsxs(_components.td, {
            children: ["Reported as failed, result is ", _jsx(_components.code, {
              children: "[]"
            })]
          }), _jsx(_components.td, {
            children: "The model gets a failure result and shouldn't claim the action succeeded"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "3xx"
            })
          }), _jsxs(_components.td, {
            children: ["Reported as failed, following the non-", _jsx(_components.code, {
              children: "2xx"
            }), " rules"]
          }), _jsxs(_components.td, {
            children: ["The engine doesn't follow ", _jsx(_components.code, {
              children: "Location"
            }), " or forward the request to the redirect target"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Timeout, network error, or parameter/template validation failure"
          }), _jsx(_components.td, {
            children: "Reported as failed"
          }), _jsx(_components.td, {
            children: "The request isn't retried automatically"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Response over 1 MiB or not valid, safe UTF-8 text"
          }), _jsx(_components.td, {
            children: "Reported as failed"
          }), _jsx(_components.td, {
            children: "The partial response isn't passed to the model"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "A few other runtime behaviors to keep in mind:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If a single model response submits multiple tool calls, the engine runs them concurrently. One call failing doesn't block the others."
      }), `
`, _jsx(_components.li, {
        children: "The engine waits for every submitted call to reach a final result or error before starting the next LLM turn, and writes the results back in the order the model returned them."
      }), `
`, _jsx(_components.li, {
        children: "Interrupting the agent stops its current response, but it doesn't cancel an in-flight HTTP request or guarantee that the remote action is rolled back."
      }), `
`, _jsxs(_components.li, {
        children: ["While waiting for a tool call, the agent uses your existing ", _jsx(_components.a, {
          href: "../shape-the-conversation/filler-words",
          children: "filler words"
        }), " configuration. Custom tools don't add a separate, tool-specific filler word trigger."]
      }), `
`, _jsx(_components.li, {
        children: "Only the model's final generated text is sent to TTS, never the raw tool response."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "security-and-configuration-limits",
      children: "Security and configuration limits"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The request URL must be an absolute HTTPS URL. Usernames and passwords in the URL aren't supported."
      }), `
`, _jsx(_components.li, {
        children: "Header values are treated as sensitive: they aren't passed to the model, and aren't written to regular logs, subtitles, or TTS output. OAuth token exchange, dynamic request signing, mTLS, and reusable credential resources aren't provided."
      }), `
`, _jsx(_components.li, {
        children: "The final rendered URL is capped at 8192 UTF-8 bytes: each path variable at 1024 bytes, and each query variable at 4096 bytes."
      }), `
`, _jsx(_components.li, {
        children: "Headers are capped at 32 entries, totaling up to 16 KiB."
      }), `
`, _jsxs(_components.li, {
        children: ["The request body is ", _jsx(_components.code, {
          children: "POST"
        }), " only. Both the configured value and the rendered result are capped at 64 KiB."]
      }), `
`, _jsxs(_components.li, {
        children: ["The request timeout defaults to ", _jsx(_components.code, {
          children: "10000"
        }), " ms, in the range ", _jsx(_components.code, {
          children: "1000"
        }), " to ", _jsx(_components.code, {
          children: "100000"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "A non-empty response body can't exceed 1 MiB. Extracting specific fields, JSONPath, or custom truncation aren't supported."
      }), `
`, _jsx(_components.li, {
        children: "Custom tools, MCP tools, built-in tools, and model-native tools share one namespace. Tool names must start with a letter, contain only letters and numbers, and be no more than 64 characters, and comparisons aren't case-sensitive."
      }), `
`, _jsxs(_components.li, {
        children: ["Tool names can't use the ", _jsx(_components.code, {
          children: "mcp"
        }), " prefix or the value ", _jsx(_components.code, {
          children: "ragsearch_tool"
        }), ". After discovery and filtering, the engine exposes at most 32 tools to the model."]
      }), `
`, _jsxs(_components.li, {
        children: ["Stored tools, asynchronous tasks, callbacks, polling, automatic retries, ", _jsx(_components.code, {
          children: "PUT"
        }), "/", _jsx(_components.code, {
          children: "PATCH"
        }), "/", _jsx(_components.code, {
          children: "DELETE"
        }), ", and configurable serial tool scheduling aren't supported."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), `
`, _jsx(_components.p, {
      children: "If a custom tool isn't behaving as expected, start with these checks."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Symptom"
          }), _jsx(_components.th, {
            children: "Check"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "The model never calls the tool"
          }), _jsxs(_components.td, {
            children: ["Check that ", _jsx(_components.code, {
              children: "enable_tools"
            }), " is set to ", _jsx(_components.code, {
              children: "true"
            }), ", the tool description explains when to call it and what it returns, and the current LLM supports function calling."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Agent creation fails"
          }), _jsxs(_components.td, {
            children: ["Check that the tool type is ", _jsx(_components.code, {
              children: "function"
            }), ", the parameters' root type is ", _jsx(_components.code, {
              children: "object"
            }), ", the request method is ", _jsx(_components.code, {
              children: "GET"
            }), " or ", _jsx(_components.code, {
              children: "POST"
            }), ", and no tool name is duplicated."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Your endpoint never receives a request"
          }), _jsxs(_components.td, {
            children: ["Check that ", _jsx(_components.code, {
              children: "server"
            }), " is a sibling of ", _jsx(_components.code, {
              children: "function"
            }), " rather than nested inside it, the URL is an absolute HTTPS URL, the referenced template variables exist, and ", _jsx(_components.code, {
              children: "body"
            }), " isn't configured on a ", _jsx(_components.code, {
              children: "GET"
            }), " tool."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "A header doesn't contain the model's parameter"
          }), _jsxs(_components.td, {
            children: ["Check for ", _jsx(_components.code, {
              children: "{{args.<name>}}"
            }), " in a header. Headers don't support it; use a fixed value directly, or use ", _jsx(_components.code, {
              children: "template_variables"
            }), " or ", _jsx(_components.code, {
              children: "tool_call_id"
            }), " instead."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Your endpoint returns a parameter validation error"
          }), _jsxs(_components.td, {
            children: ["Check the body field names, parameter types, and ", _jsx(_components.code, {
              children: "Content-Type"
            }), ". Template placeholders in the request body can't be concatenated with other text."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "The tool call times out"
          }), _jsxs(_components.td, {
            children: ["Check your endpoint's response time against ", _jsx(_components.code, {
              children: "timeout_ms"
            }), ". Timed-out calls aren't retried automatically."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Your endpoint returns success, but the model can't use the result"
          }), _jsxs(_components.td, {
            children: ["Confirm your endpoint returned a ", _jsx(_components.code, {
              children: "2xx"
            }), " status. A non-empty response must be safe UTF-8 text under 1 MiB. The engine doesn't support extracting specific fields from a JSON response."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["A ", _jsx(_components.code, {
              children: "POST"
            }), " action runs more than once"]
          }), _jsxs(_components.td, {
            children: ["Use ", _jsx(_components.code, {
              children: "tool_call_id"
            }), " to correlate the call on your side, and handle duplicate requests in your own service. Don't assume Agora will roll back or retry the request for you."]
          })]
        })]
      })]
    })]
  });
}
export default function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
