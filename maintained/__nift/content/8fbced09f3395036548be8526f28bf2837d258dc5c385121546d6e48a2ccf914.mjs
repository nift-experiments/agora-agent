import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Connect your own TTS service",
  description: "Integrate a custom text-to-speech (TTS) service into Agora's Conversational AI Engine."
};
export let _markdown = `

By integrating a custom text-to-speech (TTS) service, you can use a self-built, privately deployed, or third-party TTS service as the speech synthesis module for your conversational AI agent. This page explains how to prepare an HTTP service compatible with the OpenAI TTS protocol, and how to connect it using the Agent SDK's \`GenericTTS\` vendor or directly through the REST API's \`generic_http\` TTS configuration.

## Understand the tech [#understand-the-tech]

The Agent SDK constructs your custom TTS configuration through \`GenericTTS\`. When you start an agent session, the SDK serializes this configuration to \`tts.vendor = "generic_http"\`, and Agora's Conversational AI Engine sends an HTTP request to your TTS service whenever it needs to synthesize speech. If you call the REST API directly instead of using the SDK, you can configure the same \`generic_http\` TTS vendor without \`GenericTTS\`.

## Prerequisites [#prerequisites]

Before you begin, ensure that you have:

* Implemented the basic logic for interacting with a conversational AI agent. See the [quickstart](../../get-started/quickstart).
* Prepared a TTS HTTP service that Agora's Conversational AI Engine can reach.
* Confirmed your TTS service supports HTTP/1.1 or later.
* Confirmed your TTS service can return audio data in PCM format.
* If you're using the Agent SDK, installed a version that supports \`GenericTTS\`: Go and TypeScript SDK v2.4.0 or later, or Python SDK v2.4.1 or later.

<CalloutContainer type="success">
  <CalloutTitle>
    Best practices
  </CalloutTitle>

  <CalloutDescription>
    Use HTTPS for your TTS service in production.
  </CalloutDescription>
</CalloutContainer>

<CalloutContainer type="warning">
  <CalloutTitle>
    Caution
  </CalloutTitle>

  <CalloutDescription>
    \`GenericTTS\` only supports HTTP and HTTPS endpoints. Passing a \`ws://\` or \`wss://\` address causes the SDK to throw an error when constructing the TTS vendor.
  </CalloutDescription>
</CalloutContainer>

## Implementation [#implementation]

Take the following steps to connect your custom TTS service to Agora's Conversational AI Engine.

### Prepare your TTS service interface [#prepare-your-tts-service-interface]

Your TTS service must provide an HTTP interface compatible with the OpenAI TTS protocol. The basic requirements are:

* **Request method**: \`POST\`
* **Request path**: \`/audio/speech\`
* **Request headers**: Authentication via an \`Authorization: Bearer <api_key>\` header
* **Request body**: JSON
* **Response body**: A stream of PCM audio data

Example request body:

\`\`\`json
{
  "model": "your-tts-model",
  "input": "Welcome to Agora's Conversational AI service.",
  "voice": "alloy",
  "speed": 1.0,
  "sample_rate": 16000,
  "response_format": "pcm",
  "instructions": "calm"
}
\`\`\`

Request body fields:

| Field             | Type    | Description                                                                                                            |
| ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| \`input\`           | String  | The text to synthesize. Agora's Conversational AI Engine automatically populates this field from the agent's response. |
| \`model\`           | String  | The TTS model name. Omit this field if your TTS service doesn't distinguish between models.                            |
| \`voice\`           | String  | The voice name. Omit this field if your TTS service doesn't distinguish between voices.                                |
| \`speed\`           | Number  | The speech rate.                                                                                                       |
| \`sample_rate\`     | Integer | The sample rate, in Hz, of the output audio. Default: \`16000\`.                                                         |
| \`response_format\` | String  | The output audio format. Default: \`pcm\`. Only \`pcm\` is supported.                                                      |
| \`instructions\`    | String  | Instructions for voice style, emotion, or other playback directives.                                                   |

<CalloutContainer type="info">
  <CalloutTitle>
    Info
  </CalloutTitle>

  <CalloutDescription>
    If your TTS service doesn't support multiple sample rates, make sure the sample rate of the audio it returns matches the \`sample_rate\` you configure in the next step.
  </CalloutDescription>
</CalloutContainer>

### Verify your TTS service's response [#verify-your-tts-services-response]

Use \`curl\` to confirm your TTS service returns a valid PCM audio stream:

\`\`\`bash
curl --request POST \\
  --url https://your-tts-service.example.com/v1/audio/speech \\
  --header 'Authorization: Bearer <your_tts_api_key>' \\
  --header 'Content-Type: application/json' \\
  --data '{
    "model": "your-tts-model",
    "input": "Welcome to the Agora Conversational AI service.",
    "voice": "alloy",
    "speed": 1.0,
    "sample_rate": 16000,
    "response_format": "pcm"
  }' \\
  --output test.pcm
\`\`\`

When the request succeeds, your service should stream the synthesized PCM audio back using HTTP chunked transfer encoding.

If a request fails, your TTS service should return a standard HTTP error status code along with a JSON error body, for example:

\`\`\`json
{
  "error": {
    "message": "Incorrect API key provided.",
    "type": "invalid_request_error",
    "param": null,
    "code": "invalid_api_key"
  }
}
\`\`\`

### Configure the agent to use your custom TTS service [#configure-the-agent-to-use-your-custom-tts-service]

The following examples show \`sttVendor\`/\`stt_vendor\` and \`llmVendor\`/\`llm_vendor\` as placeholders for STT and LLM vendors you've already configured — select the services that fit your use case. The examples focus on connecting your custom TTS service using \`GenericTTS\`.

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
    from agora_agent import Agent, GenericTTS

    # client is your configured Agora client
    agent = (
        Agent(client)
        .with_stt(stt_vendor)  # configure your STT vendor
        .with_llm(llm_vendor)  # configure your LLM vendor
        .with_tts(GenericTTS(
            url='https://your-tts-service.example.com/v1/audio/speech',
            headers={
                'Authorization': 'Bearer <your_tts_api_key>',
            },
            model='your-tts-model',
            voice='alloy',
            speed=1.0,
            sample_rate=16000,
            response_format='pcm',
            instruction='calm',
        ))
    )
    \`\`\`
  </TabsContent>

  <TabsContent value="typescript">
    \`\`\`typescript
    import { Agent, GenericTTS } from 'agora-agents';

    // client is your configured Agora client
    const agent = new Agent({ client })
      .withStt(sttVendor) // configure your STT vendor
      .withLlm(llmVendor) // configure your LLM vendor
      .withTts(new GenericTTS({
        url: 'https://your-tts-service.example.com/v1/audio/speech',
        headers: {
          Authorization: 'Bearer <your_tts_api_key>',
        },
        model: 'your-tts-model',
        voice: 'alloy',
        speed: 1.0,
        sampleRate: 16000,
        responseFormat: 'pcm',
        instruction: 'calm',
      }));
    \`\`\`
  </TabsContent>

  <TabsContent value="go">
    \`\`\`go
    import (
        "github.com/AgoraIO/agora-agents-go/v2/agentkit"
        "github.com/AgoraIO/agora-agents-go/v2/agentkit/vendors"
    )

    // client is your configured Agora client
    speed := 1.0
    sampleRate := vendors.SampleRate16kHz
    agent := agentkit.NewAgent(client).
      WithStt(sttVendor). // configure your STT vendor
      WithLlm(llmVendor). // configure your LLM vendor
      WithTts(
        vendors.NewGenericTTS(vendors.GenericTTSOptions{
            URL: "https://your-tts-service.example.com/v1/audio/speech",
            Headers: map[string]string{
                "Authorization": "Bearer <your_tts_api_key>",
            },
            Model:          "your-tts-model",
            Voice:          "alloy",
            Speed:          &speed,
            SampleRate:     &sampleRate,
            ResponseFormat: "pcm",
            Instruction:    "calm",
        }),
    )
    \`\`\`
  </TabsContent>

  <TabsContent value="rest-api">
    Use the following \`tts\` configuration in your request:

    \`\`\`json
    {
      "tts": {
        "vendor": "generic_http",
        "url": "https://your-tts-service.example.com/v1/audio/speech",
        "headers": {
          "Authorization": "Bearer <your_tts_api_key>"
        },
        "params": {
          "model": "your-tts-model",
          "voice": "alloy",
          "speed": 1.0,
          "sample_rate": 16000,
          "response_format": "pcm",
          "instructions": "calm",
          "enable_request_id": false
        }
      }
    }
    \`\`\`
  </TabsContent>
</Tabs>

\`generic_http\` configuration reference:

| Field                          | Type    | Required | Default | Description                                                                                                                                                                 |
| ------------------------------ | ------- | -------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`tts.vendor\`                   | String  | Yes      | -       | Set to \`generic_http\` to use a custom TTS service.                                                                                                                          |
| \`tts.url\`                      | String  | Yes      | -       | The TTS service address. Must be compatible with the OpenAI TTS protocol.                                                                                                   |
| \`tts.headers\`                  | Object  | No       | -       | Request headers to include when calling the TTS service, typically used to configure \`Authorization\`.                                                                       |
| \`tts.params\`                   | Object  | No       | -       | TTS request parameters. In addition to the fields listed below, \`params\` supports other fields as needed. The system passes them through to the TTS service.                |
| \`tts.params.api_key\`           | String  | No       | -       | The API key used to authenticate with the TTS service. If set, the system automatically includes \`Authorization: Bearer <api_key>\` when calling the TTS service.            |
| \`tts.params.model\`             | String  | No       | -       | The TTS model name.                                                                                                                                                         |
| \`tts.params.voice\`             | String  | No       | -       | The voice name. Omit this parameter if your TTS service doesn't support multiple voices.                                                                                    |
| \`tts.params.speed\`             | Number  | No       | -       | The speech rate.                                                                                                                                                            |
| \`tts.params.sample_rate\`       | Integer | No       | \`16000\` | The sample rate, in Hz, of the output audio. If your TTS service doesn't support multiple sample rates, make sure the sample rate of the returned audio matches this value. |
| \`tts.params.response_format\`   | String  | No       | \`pcm\`   | The output audio format. Only \`pcm\` is supported.                                                                                                                           |
| \`tts.params.instructions\`      | String  | No       | -       | Instructions for voice style, emotion, or other playback directives.                                                                                                        |
| \`tts.params.enable_request_id\` | Boolean | No       | \`false\` | Whether to include \`request_id\`, \`request_seq_id\`, and \`request_end\` in the TTS request body.                                                                               |

For the exact field names in each Agent SDK language, see the \`GenericTTS\` reference for [Go](/en/api-reference/api-ref/server-sdk/go#newgenerictts), [Python](/en/api-reference/api-ref/server-sdk/python#generictts), and [TypeScript](/en/api-reference/api-ref/server-sdk/typescript#generictts), or the full parameter reference at [Generic TTS](../../models/tts/generic-http).

<CalloutContainer type="info">
  <CalloutTitle>
    Info
  </CalloutTitle>

  <CalloutDescription>
    Provide at least one of \`tts.headers.Authorization\` or \`tts.params.api_key\`. If you provide both, the system uses \`tts.headers.Authorization\`.
  </CalloutDescription>
</CalloutContainer>

After configuring \`GenericTTS\`, continue with \`create_session()\`/\`createSession()\`/\`CreateSession()\` and \`session.start()\` as shown in the [quickstart](../../get-started/quickstart).

### Receive request identifiers on demand [#receive-request-identifiers-on-demand]

If your TTS service needs to distinguish between multiple requests within the same playback turn, pass \`enable_request_id\` as an additional parameter:

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
    GenericTTS(
        # ... other options ...
        additional_params={
            'enable_request_id': True,
        },
    )
    \`\`\`
  </TabsContent>

  <TabsContent value="typescript">
    \`\`\`typescript
    new GenericTTS({
      // ... other options ...
      additionalParams: {
        enable_request_id: true,
      },
    });
    \`\`\`
  </TabsContent>

  <TabsContent value="go">
    \`\`\`go
    vendors.GenericTTSOptions{
        // ... other options ...
        AdditionalParams: map[string]interface{}{
            "enable_request_id": true,
        },
    }
    \`\`\`
  </TabsContent>

  <TabsContent value="rest-api">
    \`\`\`json
    "tts": {
      "vendor": "generic_http",
      "params": {
        "enable_request_id": true
      }
    }
    \`\`\`
  </TabsContent>
</Tabs>

When enabled, the system includes the following fields in the request body it sends to your TTS service:

| Field            | Type    | Description                                                                      |
| ---------------- | ------- | -------------------------------------------------------------------------------- |
| \`request_id\`     | String  | A unique identifier for this TTS request.                                        |
| \`request_seq_id\` | Integer | The request sequence number within the current playback turn, starting from \`0\`. |
| \`request_end\`    | Boolean | Whether this is the last request in the current playback turn.                   |

## Reference [#reference]

* [Quickstart](../../get-started/quickstart)
* SDK API Reference
  * [Go: NewGenericTTS](/en/api-reference/api-ref/server-sdk/go#newgenerictts)
  * [Python: GenericTTS](/en/api-reference/api-ref/server-sdk/python#generictts)
  * [TypeScript: GenericTTS](/en/api-reference/api-ref/server-sdk/typescript#generictts)
* [Generic TTS](../../models/tts/generic-http)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "By integrating a custom text-to-speech (TTS) service, you can use a self-built, privately deployed, or third-party TTS service as the speech synthesis module for your conversational AI agent. This page explains how to prepare an HTTP service compatible with the OpenAI TTS protocol, and how to connect it using the Agent SDK's `GenericTTS` vendor or directly through the REST API's `generic_http` TTS configuration."
  }, {
    heading: "understand-the-tech",
    content: 'The Agent SDK constructs your custom TTS configuration through `GenericTTS`. When you start an agent session, the SDK serializes this configuration to `tts.vendor = "generic_http"`, and Agora\'s Conversational AI Engine sends an HTTP request to your TTS service whenever it needs to synthesize speech. If you call the REST API directly instead of using the SDK, you can configure the same `generic_http` TTS vendor without `GenericTTS`.'
  }, {
    heading: "prerequisites",
    content: "Before you begin, ensure that you have:"
  }, {
    heading: "prerequisites",
    content: "Implemented the basic logic for interacting with a conversational AI agent. See the quickstart."
  }, {
    heading: "prerequisites",
    content: "Prepared a TTS HTTP service that Agora's Conversational AI Engine can reach."
  }, {
    heading: "prerequisites",
    content: "Confirmed your TTS service supports HTTP/1.1 or later."
  }, {
    heading: "prerequisites",
    content: "Confirmed your TTS service can return audio data in PCM format."
  }, {
    heading: "prerequisites",
    content: "If you're using the Agent SDK, installed a version that supports `GenericTTS`: Go and TypeScript SDK v2.4.0 or later, or Python SDK v2.4.1 or later."
  }, {
    heading: "prerequisites",
    content: "Use HTTPS for your TTS service in production."
  }, {
    heading: "prerequisites",
    content: "`GenericTTS` only supports HTTP and HTTPS endpoints. Passing a `ws://` or `wss://` address causes the SDK to throw an error when constructing the TTS vendor."
  }, {
    heading: "implementation",
    content: "Take the following steps to connect your custom TTS service to Agora's Conversational AI Engine."
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "Your TTS service must provide an HTTP interface compatible with the OpenAI TTS protocol. The basic requirements are:"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "**Request method**: `POST`"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "**Request path**: `/audio/speech`"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "**Request headers**: Authentication via an `Authorization: Bearer <api_key>` header"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "**Request body**: JSON"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "**Response body**: A stream of PCM audio data"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "Example request body:"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "Request body fields:"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "Field"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "Type"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "Description"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "`input`"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "String"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "The text to synthesize. Agora's Conversational AI Engine automatically populates this field from the agent's response."
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "`model`"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "String"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "The TTS model name. Omit this field if your TTS service doesn't distinguish between models."
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "`voice`"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "String"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "The voice name. Omit this field if your TTS service doesn't distinguish between voices."
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "`speed`"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "Number"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "The speech rate."
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "`sample_rate`"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "Integer"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "The sample rate, in Hz, of the output audio. Default: `16000`."
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "`response_format`"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "String"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "The output audio format. Default: `pcm`. Only `pcm` is supported."
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "`instructions`"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "String"
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "Instructions for voice style, emotion, or other playback directives."
  }, {
    heading: "prepare-your-tts-service-interface",
    content: "If your TTS service doesn't support multiple sample rates, make sure the sample rate of the audio it returns matches the `sample_rate` you configure in the next step."
  }, {
    heading: "verify-your-tts-services-response",
    content: "Use `curl` to confirm your TTS service returns a valid PCM audio stream:"
  }, {
    heading: "verify-your-tts-services-response",
    content: "When the request succeeds, your service should stream the synthesized PCM audio back using HTTP chunked transfer encoding."
  }, {
    heading: "verify-your-tts-services-response",
    content: "If a request fails, your TTS service should return a standard HTTP error status code along with a JSON error body, for example:"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "The following examples show `sttVendor`/`stt_vendor` and `llmVendor`/`llm_vendor` as placeholders for STT and LLM vendors you've already configured — select the services that fit your use case. The examples focus on connecting your custom TTS service using `GenericTTS`."
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "Use the following `tts` configuration in your request:"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "`generic_http` configuration reference:"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "Field"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "Type"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "Required"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "Default"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "Description"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "`tts.vendor`"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "String"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "Yes"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "-"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "Set to `generic_http` to use a custom TTS service."
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "`tts.url`"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "String"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "Yes"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "-"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "The TTS service address. Must be compatible with the OpenAI TTS protocol."
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "`tts.headers`"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "Object"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "No"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "-"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "Request headers to include when calling the TTS service, typically used to configure `Authorization`."
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "`tts.params`"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "Object"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "No"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "-"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "TTS request parameters. In addition to the fields listed below, `params` supports other fields as needed. The system passes them through to the TTS service."
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "`tts.params.api_key`"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "String"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "No"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "-"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "The API key used to authenticate with the TTS service. If set, the system automatically includes `Authorization: Bearer <api_key>` when calling the TTS service."
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "`tts.params.model`"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "String"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "No"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "-"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "The TTS model name."
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "`tts.params.voice`"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "String"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "No"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "-"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "The voice name. Omit this parameter if your TTS service doesn't support multiple voices."
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "`tts.params.speed`"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "Number"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "No"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "-"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "The speech rate."
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "`tts.params.sample_rate`"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "Integer"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "No"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "`16000`"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "The sample rate, in Hz, of the output audio. If your TTS service doesn't support multiple sample rates, make sure the sample rate of the returned audio matches this value."
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "`tts.params.response_format`"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "String"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "No"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "`pcm`"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "The output audio format. Only `pcm` is supported."
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "`tts.params.instructions`"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "String"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "No"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "-"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "Instructions for voice style, emotion, or other playback directives."
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "`tts.params.enable_request_id`"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "Boolean"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "No"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "`false`"
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "Whether to include `request_id`, `request_seq_id`, and `request_end` in the TTS request body."
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "For the exact field names in each Agent SDK language, see the `GenericTTS` reference for Go, Python, and TypeScript, or the full parameter reference at Generic TTS."
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "Provide at least one of `tts.headers.Authorization` or `tts.params.api_key`. If you provide both, the system uses `tts.headers.Authorization`."
  }, {
    heading: "configure-the-agent-to-use-your-custom-tts-service",
    content: "After configuring `GenericTTS`, continue with `create_session()`/`createSession()`/`CreateSession()` and `session.start()` as shown in the quickstart."
  }, {
    heading: "receive-request-identifiers-on-demand",
    content: "If your TTS service needs to distinguish between multiple requests within the same playback turn, pass `enable_request_id` as an additional parameter:"
  }, {
    heading: "receive-request-identifiers-on-demand",
    content: "When enabled, the system includes the following fields in the request body it sends to your TTS service:"
  }, {
    heading: "receive-request-identifiers-on-demand",
    content: "Field"
  }, {
    heading: "receive-request-identifiers-on-demand",
    content: "Type"
  }, {
    heading: "receive-request-identifiers-on-demand",
    content: "Description"
  }, {
    heading: "receive-request-identifiers-on-demand",
    content: "`request_id`"
  }, {
    heading: "receive-request-identifiers-on-demand",
    content: "String"
  }, {
    heading: "receive-request-identifiers-on-demand",
    content: "A unique identifier for this TTS request."
  }, {
    heading: "receive-request-identifiers-on-demand",
    content: "`request_seq_id`"
  }, {
    heading: "receive-request-identifiers-on-demand",
    content: "Integer"
  }, {
    heading: "receive-request-identifiers-on-demand",
    content: "The request sequence number within the current playback turn, starting from `0`."
  }, {
    heading: "receive-request-identifiers-on-demand",
    content: "`request_end`"
  }, {
    heading: "receive-request-identifiers-on-demand",
    content: "Boolean"
  }, {
    heading: "receive-request-identifiers-on-demand",
    content: "Whether this is the last request in the current playback turn."
  }, {
    heading: "reference",
    content: "Quickstart"
  }, {
    heading: "reference",
    content: "SDK API Reference"
  }, {
    heading: "reference",
    content: "Go: NewGenericTTS"
  }, {
    heading: "reference",
    content: "Python: GenericTTS"
  }, {
    heading: "reference",
    content: "TypeScript: GenericTTS"
  }, {
    heading: "reference",
    content: "Generic TTS"
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
    id: "prepare-your-tts-service-interface",
    content: "Prepare your TTS service interface"
  }, {
    id: "verify-your-tts-services-response",
    content: "Verify your TTS service's response"
  }, {
    id: "configure-the-agent-to-use-your-custom-tts-service",
    content: "Configure the agent to use your custom TTS service"
  }, {
    id: "receive-request-identifiers-on-demand",
    content: "Receive request identifiers on demand"
  }, {
    id: "reference",
    content: "Reference"
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
  url: "#prepare-your-tts-service-interface",
  title: _jsx(_Fragment, {
    children: "Prepare your TTS service interface"
  })
}, {
  depth: 3,
  url: "#verify-your-tts-services-response",
  title: _jsx(_Fragment, {
    children: "Verify your TTS service's response"
  })
}, {
  depth: 3,
  url: "#configure-the-agent-to-use-your-custom-tts-service",
  title: _jsx(_Fragment, {
    children: "Configure the agent to use your custom TTS service"
  })
}, {
  depth: 3,
  url: "#receive-request-identifiers-on-demand",
  title: _jsx(_Fragment, {
    children: "Receive request identifiers on demand"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
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
  }, { CalloutContainer, CalloutDescription, CalloutTitle, Tabs, TabsContent, TabsList, TabsTrigger } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  if (!Tabs)
    _missingMdxReference("Tabs", true);
  if (!TabsContent)
    _missingMdxReference("TabsContent", true);
  if (!TabsList)
    _missingMdxReference("TabsList", true);
  if (!TabsTrigger)
    _missingMdxReference("TabsTrigger", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["By integrating a custom text-to-speech (TTS) service, you can use a self-built, privately deployed, or third-party TTS service as the speech synthesis module for your conversational AI agent. This page explains how to prepare an HTTP service compatible with the OpenAI TTS protocol, and how to connect it using the Agent SDK's ", _jsx(_components.code, {
        children: "GenericTTS"
      }), " vendor or directly through the REST API's ", _jsx(_components.code, {
        children: "generic_http"
      }), " TTS configuration."]
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsxs(_components.p, {
      children: ["The Agent SDK constructs your custom TTS configuration through ", _jsx(_components.code, {
        children: "GenericTTS"
      }), ". When you start an agent session, the SDK serializes this configuration to ", _jsx(_components.code, {
        children: 'tts.vendor = "generic_http"'
      }), ", and Agora's Conversational AI Engine sends an HTTP request to your TTS service whenever it needs to synthesize speech. If you call the REST API directly instead of using the SDK, you can configure the same ", _jsx(_components.code, {
        children: "generic_http"
      }), " TTS vendor without ", _jsx(_components.code, {
        children: "GenericTTS"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "Before you begin, ensure that you have:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Implemented the basic logic for interacting with a conversational AI agent. See the ", _jsx(_components.a, {
          href: "../../get-started/quickstart",
          children: "quickstart"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Prepared a TTS HTTP service that Agora's Conversational AI Engine can reach."
      }), `
`, _jsx(_components.li, {
        children: "Confirmed your TTS service supports HTTP/1.1 or later."
      }), `
`, _jsx(_components.li, {
        children: "Confirmed your TTS service can return audio data in PCM format."
      }), `
`, _jsxs(_components.li, {
        children: ["If you're using the Agent SDK, installed a version that supports ", _jsx(_components.code, {
          children: "GenericTTS"
        }), ": Go and TypeScript SDK v2.4.0 or later, or Python SDK v2.4.1 or later."]
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "success",
      children: [_jsx(CalloutTitle, {
        children: "Best practices"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Use HTTPS for your TTS service in production."
        })
      })]
    }), `
`, _jsxs(CalloutContainer, {
      type: "warning",
      children: [_jsx(CalloutTitle, {
        children: "Caution"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "GenericTTS"
          }), " only supports HTTP and HTTPS endpoints. Passing a ", _jsx(_components.code, {
            children: "ws://"
          }), " or ", _jsx(_components.code, {
            children: "wss://"
          }), " address causes the SDK to throw an error when constructing the TTS vendor."]
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsx(_components.p, {
      children: "Take the following steps to connect your custom TTS service to Agora's Conversational AI Engine."
    }), `
`, _jsx(_components.h3, {
      id: "prepare-your-tts-service-interface",
      children: "Prepare your TTS service interface"
    }), `
`, _jsx(_components.p, {
      children: "Your TTS service must provide an HTTP interface compatible with the OpenAI TTS protocol. The basic requirements are:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Request method"
        }), ": ", _jsx(_components.code, {
          children: "POST"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Request path"
        }), ": ", _jsx(_components.code, {
          children: "/audio/speech"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Request headers"
        }), ": Authentication via an ", _jsx(_components.code, {
          children: "Authorization: Bearer <api_key>"
        }), " header"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Request body"
        }), ": JSON"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Response body"
        }), ": A stream of PCM audio data"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Example request body:"
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
              children: '  "model"'
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
              children: '"your-tts-model"'
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
              children: '  "input"'
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
              children: `"Welcome to Agora's Conversational AI service."`
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
              children: '  "voice"'
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
              children: '"alloy"'
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
              children: '  "speed"'
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
              children: "1.0"
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
              children: '  "sample_rate"'
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
              children: "16000"
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
              children: '  "response_format"'
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
              children: '"pcm"'
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
              children: '  "instructions"'
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
              children: '"calm"'
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
`, _jsx(_components.p, {
      children: "Request body fields:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Field"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "input"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The text to synthesize. Agora's Conversational AI Engine automatically populates this field from the agent's response."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "model"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The TTS model name. Omit this field if your TTS service doesn't distinguish between models."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "voice"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The voice name. Omit this field if your TTS service doesn't distinguish between voices."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "speed"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The speech rate."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "sample_rate"
            })
          }), _jsx(_components.td, {
            children: "Integer"
          }), _jsxs(_components.td, {
            children: ["The sample rate, in Hz, of the output audio. Default: ", _jsx(_components.code, {
              children: "16000"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "response_format"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: ["The output audio format. Default: ", _jsx(_components.code, {
              children: "pcm"
            }), ". Only ", _jsx(_components.code, {
              children: "pcm"
            }), " is supported."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "instructions"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "Instructions for voice style, emotion, or other playback directives."
          })]
        })]
      })]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Info"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If your TTS service doesn't support multiple sample rates, make sure the sample rate of the audio it returns matches the ", _jsx(_components.code, {
            children: "sample_rate"
          }), " you configure in the next step."]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "verify-your-tts-services-response",
      children: "Verify your TTS service's response"
    }), `
`, _jsxs(_components.p, {
      children: ["Use ", _jsx(_components.code, {
        children: "curl"
      }), " to confirm your TTS service returns a valid PCM audio stream:"]
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
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --request"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " POST"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --url"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://your-tts-service.example.com/v1/audio/speech"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --header"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'Authorization: Bearer <your_tts_api_key>'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --header"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'Content-Type: application/json'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " '{"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "model": "your-tts-model",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "input": "Welcome to the Agora Conversational AI service.",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "voice": "alloy",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "speed": 1.0,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "sample_rate": 16000,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "response_format": "pcm"'
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  }'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --output"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " test.pcm"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "When the request succeeds, your service should stream the synthesized PCM audio back using HTTP chunked transfer encoding."
    }), `
`, _jsx(_components.p, {
      children: "If a request fails, your TTS service should return a standard HTTP error status code along with a JSON error body, for example:"
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
              children: '  "error"'
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
              children: '    "message"'
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
              children: '"Incorrect API key provided."'
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
              children: '    "type"'
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
              children: '"invalid_request_error"'
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
              children: '    "param"'
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
              children: "null"
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
              children: '    "code"'
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
              children: '"invalid_api_key"'
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
    }), `
`, _jsx(_components.h3, {
      id: "configure-the-agent-to-use-your-custom-tts-service",
      children: "Configure the agent to use your custom TTS service"
    }), `
`, _jsxs(_components.p, {
      children: ["The following examples show ", _jsx(_components.code, {
        children: "sttVendor"
      }), "/", _jsx(_components.code, {
        children: "stt_vendor"
      }), " and ", _jsx(_components.code, {
        children: "llmVendor"
      }), "/", _jsx(_components.code, {
        children: "llm_vendor"
      }), " as placeholders for STT and LLM vendors you've already configured — select the services that fit your use case. The examples focus on connecting your custom TTS service using ", _jsx(_components.code, {
        children: "GenericTTS"
      }), "."]
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
                  children: " Agent, GenericTTS"
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
                  children: "# client is your configured Agora client"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agent "
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
                  children: " ("
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    Agent(client)"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    .with_stt(stt_vendor)  "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "# configure your STT vendor"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    .with_llm(llm_vendor)  "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "# configure your LLM vendor"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    .with_tts(GenericTTS("
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "        url"
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
                  children: "'https://your-tts-service.example.com/v1/audio/speech'"
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
                  children: "        headers"
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
                  children: "'Bearer <your_tts_api_key>'"
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
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "        model"
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
                  children: "'your-tts-model'"
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
                  children: "        voice"
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
                  children: "'alloy'"
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
                  children: "        speed"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "1.0"
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
                  children: "        sample_rate"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "16000"
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
                  children: "        response_format"
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
                  children: "'pcm'"
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
                  children: "        instruction"
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
                  children: "'calm'"
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
                  children: "    ))"
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
                  children: " { Agent, GenericTTS } "
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
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// client is your configured Agora client"
                })
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
                  children: " agent"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " Agent"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({ client })"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  ."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "withStt"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(sttVendor) "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// configure your STT vendor"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  ."
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
                  children: "(llmVendor) "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// configure your LLM vendor"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  ."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "withTts"
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
                  children: " GenericTTS"
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
                  children: "    url: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'https://your-tts-service.example.com/v1/audio/speech'"
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
                  children: "'Bearer <your_tts_api_key>'"
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
                  children: "    model: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'your-tts-model'"
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
                  children: "    voice: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'alloy'"
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
                  children: "    speed: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "1.0"
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
                  children: "    sampleRate: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "16000"
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
                  children: "    responseFormat: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'pcm'"
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
                  children: "    instruction: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'calm'"
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
                  children: "  }));"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "import"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ("
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "github.com/AgoraIO/agora-agents-go/v2/agentkit"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "github.com/AgoraIO/agora-agents-go/v2/agentkit/vendors"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
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
                  children: "// client is your configured Agora client"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "speed "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 1.0"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "sampleRate "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " vendors.SampleRate16kHz"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agent "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " agentkit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "NewAgent"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(client)."
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  WithStt"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(sttVendor). "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// configure your STT vendor"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  WithLlm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(llmVendor). "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// configure your LLM vendor"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  WithTts"
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
                  children: "NewGenericTTS"
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
                  children: "GenericTTSOptions"
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
                  children: "        URL: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"https://your-tts-service.example.com/v1/audio/speech"'
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
                  children: '"Bearer <your_tts_api_key>"'
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
                  children: "        Model:          "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"your-tts-model"'
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
                  children: "        Voice:          "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"alloy"'
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
                  children: "        Speed:          "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "speed,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        SampleRate:     "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "sampleRate,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        ResponseFormat: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"pcm"'
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
                  children: "        Instruction:    "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"calm"'
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
              })]
            })
          })
        })
      }), _jsxs(TabsContent, {
        value: "rest-api",
        children: [_jsxs(_components.p, {
          children: ["Use the following ", _jsx(_components.code, {
            children: "tts"
          }), " configuration in your request:"]
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
                  children: '  "tts"'
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
                  children: '    "vendor"'
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
                  children: '"generic_http"'
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
                  children: '"https://your-tts-service.example.com/v1/audio/speech"'
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
                  children: '"Bearer <your_tts_api_key>"'
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
                  children: '    "params"'
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
                  children: '      "model"'
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
                  children: '"your-tts-model"'
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
                  children: '      "voice"'
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
                  children: '"alloy"'
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
                  children: '      "speed"'
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
                  children: "1.0"
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
                  children: '      "sample_rate"'
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
                  children: "16000"
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
                  children: '      "response_format"'
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
                  children: '"pcm"'
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
                  children: '      "instructions"'
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
                  children: '"calm"'
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
                  children: '      "enable_request_id"'
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
        children: "generic_http"
      }), " configuration reference:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Field"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Default"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "tts.vendor"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsxs(_components.td, {
            children: ["Set to ", _jsx(_components.code, {
              children: "generic_http"
            }), " to use a custom TTS service."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "tts.url"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsx(_components.td, {
            children: "The TTS service address. Must be compatible with the OpenAI TTS protocol."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "tts.headers"
            })
          }), _jsx(_components.td, {
            children: "Object"
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsxs(_components.td, {
            children: ["Request headers to include when calling the TTS service, typically used to configure ", _jsx(_components.code, {
              children: "Authorization"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "tts.params"
            })
          }), _jsx(_components.td, {
            children: "Object"
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsxs(_components.td, {
            children: ["TTS request parameters. In addition to the fields listed below, ", _jsx(_components.code, {
              children: "params"
            }), " supports other fields as needed. The system passes them through to the TTS service."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "tts.params.api_key"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsxs(_components.td, {
            children: ["The API key used to authenticate with the TTS service. If set, the system automatically includes ", _jsx(_components.code, {
              children: "Authorization: Bearer <api_key>"
            }), " when calling the TTS service."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "tts.params.model"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsx(_components.td, {
            children: "The TTS model name."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "tts.params.voice"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsx(_components.td, {
            children: "The voice name. Omit this parameter if your TTS service doesn't support multiple voices."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "tts.params.speed"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsx(_components.td, {
            children: "The speech rate."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "tts.params.sample_rate"
            })
          }), _jsx(_components.td, {
            children: "Integer"
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "16000"
            })
          }), _jsx(_components.td, {
            children: "The sample rate, in Hz, of the output audio. If your TTS service doesn't support multiple sample rates, make sure the sample rate of the returned audio matches this value."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "tts.params.response_format"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "pcm"
            })
          }), _jsxs(_components.td, {
            children: ["The output audio format. Only ", _jsx(_components.code, {
              children: "pcm"
            }), " is supported."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "tts.params.instructions"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsx(_components.td, {
            children: "Instructions for voice style, emotion, or other playback directives."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "tts.params.enable_request_id"
            })
          }), _jsx(_components.td, {
            children: "Boolean"
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "false"
            })
          }), _jsxs(_components.td, {
            children: ["Whether to include ", _jsx(_components.code, {
              children: "request_id"
            }), ", ", _jsx(_components.code, {
              children: "request_seq_id"
            }), ", and ", _jsx(_components.code, {
              children: "request_end"
            }), " in the TTS request body."]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For the exact field names in each Agent SDK language, see the ", _jsx(_components.code, {
        children: "GenericTTS"
      }), " reference for ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/server-sdk/go#newgenerictts",
        children: "Go"
      }), ", ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/server-sdk/python#generictts",
        children: "Python"
      }), ", and ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/server-sdk/typescript#generictts",
        children: "TypeScript"
      }), ", or the full parameter reference at ", _jsx(_components.a, {
        href: "../../models/tts/generic-http",
        children: "Generic TTS"
      }), "."]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Info"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Provide at least one of ", _jsx(_components.code, {
            children: "tts.headers.Authorization"
          }), " or ", _jsx(_components.code, {
            children: "tts.params.api_key"
          }), ". If you provide both, the system uses ", _jsx(_components.code, {
            children: "tts.headers.Authorization"
          }), "."]
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["After configuring ", _jsx(_components.code, {
        children: "GenericTTS"
      }), ", continue with ", _jsx(_components.code, {
        children: "create_session()"
      }), "/", _jsx(_components.code, {
        children: "createSession()"
      }), "/", _jsx(_components.code, {
        children: "CreateSession()"
      }), " and ", _jsx(_components.code, {
        children: "session.start()"
      }), " as shown in the ", _jsx(_components.a, {
        href: "../../get-started/quickstart",
        children: "quickstart"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "receive-request-identifiers-on-demand",
      children: "Receive request identifiers on demand"
    }), `
`, _jsxs(_components.p, {
      children: ["If your TTS service needs to distinguish between multiple requests within the same playback turn, pass ", _jsx(_components.code, {
        children: "enable_request_id"
      }), " as an additional parameter:"]
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "GenericTTS("
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    # ... other options ..."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    additional_params"
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
                  children: "        'enable_request_id'"
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
                  children: "True"
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
                  children: ")"
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
                  children: "new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " GenericTTS"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // ... other options ..."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  additionalParams: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    enable_request_id: "
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
                  children: "});"
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
                  children: "GenericTTSOptions"
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // ... other options ..."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    AdditionalParams: "
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
                  children: '        "enable_request_id"'
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
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"tts"'
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
                  children: '  "vendor"'
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
                  children: '"generic_http"'
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
                  children: '  "params"'
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
                  children: '    "enable_request_id"'
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
      children: "When enabled, the system includes the following fields in the request body it sends to your TTS service:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Field"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "request_id"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "A unique identifier for this TTS request."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "request_seq_id"
            })
          }), _jsx(_components.td, {
            children: "Integer"
          }), _jsxs(_components.td, {
            children: ["The request sequence number within the current playback turn, starting from ", _jsx(_components.code, {
              children: "0"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "request_end"
            })
          }), _jsx(_components.td, {
            children: "Boolean"
          }), _jsx(_components.td, {
            children: "Whether this is the last request in the current playback turn."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../get-started/quickstart",
          children: "Quickstart"
        })
      }), `
`, _jsxs(_components.li, {
        children: ["SDK API Reference", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/server-sdk/go#newgenerictts",
              children: "Go: NewGenericTTS"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/server-sdk/python#generictts",
              children: "Python: GenericTTS"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/server-sdk/typescript#generictts",
              children: "TypeScript: GenericTTS"
            })
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../models/tts/generic-http",
          children: "Generic TTS"
        })
      }), `
`]
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
