import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Update task configuration",
  description: "Initiate a request to update the transcription task configuration."
};
export let _markdown = `

<CalloutContainer type="warning">
  <CalloutDescription>
    Real-Time STT API versions v5.x and v6.x are deprecated since June 2025 and will reach end-of-life on June 11, 2026. Use the v7 REST API for new projects.
  </CalloutDescription>
</CalloutContainer>

## Endpoint [#endpoint]

* Method: \`PATCH\`

* Endpoint: \`https://api.agora.io/v1/projects/{appId}/rtsc/speech-to-text/tasks/{taskId}\`

Use this endpoint to update the configuration of a Real-Time STT task.

## Request [#request]

### Path parameters [#path-parameters]

**\`appId\`** Type: \`string\` Required

The App ID of the project

**\`taskId\`** Type: \`string\` Required

The unique identifier of the Real-Time STT task you received in the response body of the [start](start) method.

### Query parameters [#query-parameters]

**\`builderToken\`** Type: \`string\` Required

The \`tokenName\` value you obtained in the response body of the [\`acquire\`](acquire) method.

**\`sequenceId\`** Type: \`integer\` Required

The sequence number of \`update\` requests. The integer value must be greater than or equal to 0. Ensure that the \`sequenceId\` of the next \`update\` request is greater than the value you specified for the previous request. The parameter ensures that Agora updates the transcription task according to the latest configuration you specified.

**\`updateMask\`** Type: \`string\` Required

The specified update configuration item. To update multiple fields, use a comma separator. For example: \`updateMask=languages,rtcConfig.subscribeAudioUids,translateConfig.enable,translateConfig.languages\`.

### Request body [#request-body]

\`APPLICATION/JSON\`

#### BODY [#body]

**\`languages\`** Type: \`array[string]\` Optional

The transcription languages to recognize. You can specify a maximum of 2 languages. Refer to [Supported Languages](/en/realtime-media/speech-to-text/reference/supported-languages) for details.

**\`rtcConfig\`** Type: \`object\` Optional

**\`subscribeAudioUids\`** Type: \`array[string]\` Optional

The user IDs of the audio streams you want to subscribe to. Specify this parameter only if you need to subscribe to specific users. To subscribe to audio streams of all users, use \`["all"]\`. Maximum array length: 3.

**\`translateConfig\`** Type: \`object\` Optional

**\`enable\`** Type: \`boolean\` Optional

Whether to translate the transcribed text:

* \`true\`: Translate.
* \`false\`: Do not translate.\\
  If you enabled translation when calling \`start\`, you can turn it off by setting \`enable\` to \`false\`. If you did not enable translation, you can turn it on by setting \`enable\` to \`true\` and specifying \`languages\`.

**\`languages\`** Type: \`array\` Optional

The translation languages array. You can specify a maximum of 2 different source languages. The source language and target language must be different, otherwise an error is reported.\\&#xA;Each array item is an object with:
&#x2A;*\`source\`** Type: \`string\` Required

The source language for translation. Refer to [Supported Languages](/en/realtime-media/speech-to-text/reference/supported-languages) for details.

**\`target\`** Type: \`array[string]\` Required

The target languages for translation. You can specify a maximum of 5 target languages for each source language. Refer to [Supported Languages](/en/realtime-media/speech-to-text/reference/supported-languages) for details.

## Response [#response]

* If the returned status code is \`200\`, the request was successful. The response body contains the result of the request.

  #### OK [#ok]

**\`taskId\`** Type: \`string\` Required

The unique identifier of this transcription task.

**\`createTs\`** Type: \`integer\` Required

The Unix timestamp (in seconds) when the transcription task was created.

**\`status\`** Type: \`string\` Required

The current status of the transcription task:

* \`IDLE\`: Task not initialized

* \`PREPARING\`: Task has received an initialization request

* \`PREPARED\`: Task initialization completed

* \`STARTING\`: Task is beginning to start

* \`CREATED\`: Task startup partially completed

* \`STARTED\`: Task startup fully completed

* \`IN_PROGRESS\`: Task is currently running

* \`STOPPING\`: Task is in the process of being paused

* \`STOPPED\`: Task has been terminated

* \`FAILURE_STOP\`: Task termination failed

* If the returned status code is not \`200\`, the request failed. Refer to \`message\` field to understand the possible reasons for failure.

#### Non-200 [#non-200]

**\`message\`** Type: \`string\`

The reason why the request failed.

## Authorization [#authorization]

This endpoint requires [Basic Auth](../authentication).

## Request example [#request-example]

<CodeBlockTabs defaultValue="curl">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="curl">
      curl
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="python">
      Python
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="nodejs">
      Node.js
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="curl">
    \`\`\`bash
          curl --request PATCH \\
            --url 'https://api.agora.io/v1/projects/:appId/rtsc/speech-to-text/tasks/:taskId?builderToken=your_builder_token&sequenceId=your_sequence_id&updateMask=your_update_mask' \\
            --header 'Authorization: Basic <credentials>'
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="python">
    \`\`\`python
        import requests

        url = "https://api.agora.io/v1/projects/:appId/rtsc/speech-to-text/tasks/:taskId?builderToken=your_builder_token&sequenceId=your_sequence_id&updateMask=your_update_mask"

        headers = {"Authorization": "Basic <credentials>"}

        response = requests.request("PATCH", url, headers=headers)

        print(response.text)
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="nodejs">
    \`\`\`js
        const url = 'https://api.agora.io/v1/projects/:appId/rtsc/speech-to-text/tasks/:taskId?builderToken=your_builder_token&sequenceId=your_sequence_id&updateMask=your_update_mask';
        const options = {method: 'PATCH', headers: {Authorization: 'Basic <credentials>'}};

        fetch(url, options)
          .then(res => res.json())
          .then(json => console.log(json))
          .catch(err => console.error(err));
    \`\`\`
  </CodeBlockTab>
</CodeBlockTabs>

## Response example [#response-example]

### 200 [#200]

\`\`\`json
    {
      "tokenName": "The value of the builder token you use to call other methods.",
      "createTs": null,
      "instanceId": "The \`instanceId\` you specified in the request."
    }
\`\`\`

### Non-200 [#non-200-1]

\`\`\`json
    {
      "message": "The reason why the request failed.",
    }
\`\`\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Real-Time STT API versions v5.x and v6.x are deprecated since June 2025 and will reach end-of-life on June 11, 2026. Use the v7 REST API for new projects."
  }, {
    heading: "endpoint",
    content: "Method: `PATCH`"
  }, {
    heading: "endpoint",
    content: "Endpoint: `https://api.agora.io/v1/projects/{appId}/rtsc/speech-to-text/tasks/{taskId}`"
  }, {
    heading: "endpoint",
    content: "Use this endpoint to update the configuration of a Real-Time STT task."
  }, {
    heading: "path-parameters",
    content: "**`appId`** Type: `string` Required"
  }, {
    heading: "path-parameters",
    content: "The App ID of the project"
  }, {
    heading: "path-parameters",
    content: "**`taskId`** Type: `string` Required"
  }, {
    heading: "path-parameters",
    content: "The unique identifier of the Real-Time STT task you received in the response body of the start method."
  }, {
    heading: "query-parameters",
    content: "**`builderToken`** Type: `string` Required"
  }, {
    heading: "query-parameters",
    content: "The `tokenName` value you obtained in the response body of the `acquire` method."
  }, {
    heading: "query-parameters",
    content: "**`sequenceId`** Type: `integer` Required"
  }, {
    heading: "query-parameters",
    content: "The sequence number of `update` requests. The integer value must be greater than or equal to 0. Ensure that the `sequenceId` of the next `update` request is greater than the value you specified for the previous request. The parameter ensures that Agora updates the transcription task according to the latest configuration you specified."
  }, {
    heading: "query-parameters",
    content: "**`updateMask`** Type: `string` Required"
  }, {
    heading: "query-parameters",
    content: "The specified update configuration item. To update multiple fields, use a comma separator. For example: `updateMask=languages,rtcConfig.subscribeAudioUids,translateConfig.enable,translateConfig.languages`."
  }, {
    heading: "request-body",
    content: "`APPLICATION/JSON`"
  }, {
    heading: "body",
    content: "**`languages`** Type: `array[string]` Optional"
  }, {
    heading: "body",
    content: "The transcription languages to recognize. You can specify a maximum of 2 languages. Refer to Supported Languages for details."
  }, {
    heading: "body",
    content: "**`rtcConfig`** Type: `object` Optional"
  }, {
    heading: "body",
    content: "**`subscribeAudioUids`** Type: `array[string]` Optional"
  }, {
    heading: "body",
    content: 'The user IDs of the audio streams you want to subscribe to. Specify this parameter only if you need to subscribe to specific users. To subscribe to audio streams of all users, use `["all"]`. Maximum array length: 3.'
  }, {
    heading: "body",
    content: "**`translateConfig`** Type: `object` Optional"
  }, {
    heading: "body",
    content: "**`enable`** Type: `boolean` Optional"
  }, {
    heading: "body",
    content: "Whether to translate the transcribed text:"
  }, {
    heading: "body",
    content: "`true`: Translate."
  }, {
    heading: "body",
    content: "`false`: Do not translate.\\\nIf you enabled translation when calling `start`, you can turn it off by setting `enable` to `false`. If you did not enable translation, you can turn it on by setting `enable` to `true` and specifying `languages`."
  }, {
    heading: "body",
    content: "**`languages`** Type: `array` Optional"
  }, {
    heading: "body",
    content: "The translation languages array. You can specify a maximum of 2 different source languages. The source language and target language must be different, otherwise an error is reported.\\&#xA;Each array item is an object with:\n&#x2A;*`source`** Type: `string` Required"
  }, {
    heading: "body",
    content: "The source language for translation. Refer to Supported Languages for details."
  }, {
    heading: "body",
    content: "**`target`** Type: `array[string]` Required"
  }, {
    heading: "body",
    content: "The target languages for translation. You can specify a maximum of 5 target languages for each source language. Refer to Supported Languages for details."
  }, {
    heading: "response",
    content: "If the returned status code is `200`, the request was successful. The response body contains the result of the request."
  }, {
    heading: "ok",
    content: "**`taskId`** Type: `string` Required"
  }, {
    heading: "ok",
    content: "The unique identifier of this transcription task."
  }, {
    heading: "ok",
    content: "**`createTs`** Type: `integer` Required"
  }, {
    heading: "ok",
    content: "The Unix timestamp (in seconds) when the transcription task was created."
  }, {
    heading: "ok",
    content: "**`status`** Type: `string` Required"
  }, {
    heading: "ok",
    content: "The current status of the transcription task:"
  }, {
    heading: "ok",
    content: "`IDLE`: Task not initialized"
  }, {
    heading: "ok",
    content: "`PREPARING`: Task has received an initialization request"
  }, {
    heading: "ok",
    content: "`PREPARED`: Task initialization completed"
  }, {
    heading: "ok",
    content: "`STARTING`: Task is beginning to start"
  }, {
    heading: "ok",
    content: "`CREATED`: Task startup partially completed"
  }, {
    heading: "ok",
    content: "`STARTED`: Task startup fully completed"
  }, {
    heading: "ok",
    content: "`IN_PROGRESS`: Task is currently running"
  }, {
    heading: "ok",
    content: "`STOPPING`: Task is in the process of being paused"
  }, {
    heading: "ok",
    content: "`STOPPED`: Task has been terminated"
  }, {
    heading: "ok",
    content: "`FAILURE_STOP`: Task termination failed"
  }, {
    heading: "ok",
    content: "If the returned status code is not `200`, the request failed. Refer to `message` field to understand the possible reasons for failure."
  }, {
    heading: "non-200",
    content: "**`message`** Type: `string`"
  }, {
    heading: "non-200",
    content: "The reason why the request failed."
  }, {
    heading: "authorization",
    content: "This endpoint requires Basic Auth."
  }],
  headings: [{
    id: "endpoint",
    content: "Endpoint"
  }, {
    id: "request",
    content: "Request"
  }, {
    id: "path-parameters",
    content: "Path parameters"
  }, {
    id: "query-parameters",
    content: "Query parameters"
  }, {
    id: "request-body",
    content: "Request body"
  }, {
    id: "body",
    content: "BODY"
  }, {
    id: "response",
    content: "Response"
  }, {
    id: "ok",
    content: "OK"
  }, {
    id: "non-200",
    content: "Non-200"
  }, {
    id: "authorization",
    content: "Authorization"
  }, {
    id: "request-example",
    content: "Request example"
  }, {
    id: "response-example",
    content: "Response example"
  }, {
    id: "200",
    content: "200"
  }, {
    id: "non-200-1",
    content: "Non-200"
  }]
};
export let toc = [{
  depth: 2,
  url: "#endpoint",
  title: _jsx(_Fragment, {
    children: "Endpoint"
  })
}, {
  depth: 2,
  url: "#request",
  title: _jsx(_Fragment, {
    children: "Request"
  })
}, {
  depth: 3,
  url: "#path-parameters",
  title: _jsx(_Fragment, {
    children: "Path parameters"
  })
}, {
  depth: 3,
  url: "#query-parameters",
  title: _jsx(_Fragment, {
    children: "Query parameters"
  })
}, {
  depth: 3,
  url: "#request-body",
  title: _jsx(_Fragment, {
    children: "Request body"
  })
}, {
  depth: 4,
  url: "#body",
  title: _jsx(_Fragment, {
    children: "BODY"
  })
}, {
  depth: 2,
  url: "#response",
  title: _jsx(_Fragment, {
    children: "Response"
  })
}, {
  depth: 4,
  url: "#ok",
  title: _jsx(_Fragment, {
    children: "OK"
  })
}, {
  depth: 4,
  url: "#non-200",
  title: _jsx(_Fragment, {
    children: "Non-200"
  })
}, {
  depth: 2,
  url: "#authorization",
  title: _jsx(_Fragment, {
    children: "Authorization"
  })
}, {
  depth: 2,
  url: "#request-example",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 2,
  url: "#response-example",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 3,
  url: "#200",
  title: _jsx(_Fragment, {
    children: "200"
  })
}, {
  depth: 3,
  url: "#non-200-1",
  title: _jsx(_Fragment, {
    children: "Non-200"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CodeBlockTab)
    _missingMdxReference("CodeBlockTab", true);
  if (!CodeBlockTabs)
    _missingMdxReference("CodeBlockTabs", true);
  if (!CodeBlockTabsList)
    _missingMdxReference("CodeBlockTabsList", true);
  if (!CodeBlockTabsTrigger)
    _missingMdxReference("CodeBlockTabsTrigger", true);
  return _jsxs(_Fragment, {
    children: [_jsx(CalloutContainer, {
      type: "warning",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Real-Time STT API versions v5.x and v6.x are deprecated since June 2025 and will reach end-of-life on June 11, 2026. Use the v7 REST API for new projects."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "endpoint",
      children: "Endpoint"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Method: ", _jsx(_components.code, {
            children: "PATCH"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Endpoint: ", _jsx(_components.code, {
            children: "https://api.agora.io/v1/projects/{appId}/rtsc/speech-to-text/tasks/{taskId}"
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Use this endpoint to update the configuration of a Real-Time STT task."
    }), `
`, _jsx(_components.h2, {
      id: "request",
      children: "Request"
    }), `
`, _jsx(_components.h3, {
      id: "path-parameters",
      children: "Path parameters"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: _jsx(_components.code, {
          children: "appId"
        })
      }), " Type: ", _jsx(_components.code, {
        children: "string"
      }), " Required"]
    }), `
`, _jsx(_components.p, {
      children: "The App ID of the project"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: _jsx(_components.code, {
          children: "taskId"
        })
      }), " Type: ", _jsx(_components.code, {
        children: "string"
      }), " Required"]
    }), `
`, _jsxs(_components.p, {
      children: ["The unique identifier of the Real-Time STT task you received in the response body of the ", _jsx(_components.a, {
        href: "start",
        children: "start"
      }), " method."]
    }), `
`, _jsx(_components.h3, {
      id: "query-parameters",
      children: "Query parameters"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: _jsx(_components.code, {
          children: "builderToken"
        })
      }), " Type: ", _jsx(_components.code, {
        children: "string"
      }), " Required"]
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "tokenName"
      }), " value you obtained in the response body of the ", _jsx(_components.a, {
        href: "acquire",
        children: _jsx(_components.code, {
          children: "acquire"
        })
      }), " method."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: _jsx(_components.code, {
          children: "sequenceId"
        })
      }), " Type: ", _jsx(_components.code, {
        children: "integer"
      }), " Required"]
    }), `
`, _jsxs(_components.p, {
      children: ["The sequence number of ", _jsx(_components.code, {
        children: "update"
      }), " requests. The integer value must be greater than or equal to 0. Ensure that the ", _jsx(_components.code, {
        children: "sequenceId"
      }), " of the next ", _jsx(_components.code, {
        children: "update"
      }), " request is greater than the value you specified for the previous request. The parameter ensures that Agora updates the transcription task according to the latest configuration you specified."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: _jsx(_components.code, {
          children: "updateMask"
        })
      }), " Type: ", _jsx(_components.code, {
        children: "string"
      }), " Required"]
    }), `
`, _jsxs(_components.p, {
      children: ["The specified update configuration item. To update multiple fields, use a comma separator. For example: ", _jsx(_components.code, {
        children: "updateMask=languages,rtcConfig.subscribeAudioUids,translateConfig.enable,translateConfig.languages"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "request-body",
      children: "Request body"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.code, {
        children: "APPLICATION/JSON"
      })
    }), `
`, _jsx(_components.h4, {
      id: "body",
      children: "BODY"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: _jsx(_components.code, {
          children: "languages"
        })
      }), " Type: ", _jsx(_components.code, {
        children: "array[string]"
      }), " Optional"]
    }), `
`, _jsxs(_components.p, {
      children: ["The transcription languages to recognize. You can specify a maximum of 2 languages. Refer to ", _jsx(_components.a, {
        href: "/en/realtime-media/speech-to-text/reference/supported-languages",
        children: "Supported Languages"
      }), " for details."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: _jsx(_components.code, {
          children: "rtcConfig"
        })
      }), " Type: ", _jsx(_components.code, {
        children: "object"
      }), " Optional"]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: _jsx(_components.code, {
          children: "subscribeAudioUids"
        })
      }), " Type: ", _jsx(_components.code, {
        children: "array[string]"
      }), " Optional"]
    }), `
`, _jsxs(_components.p, {
      children: ["The user IDs of the audio streams you want to subscribe to. Specify this parameter only if you need to subscribe to specific users. To subscribe to audio streams of all users, use ", _jsx(_components.code, {
        children: '["all"]'
      }), ". Maximum array length: 3."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: _jsx(_components.code, {
          children: "translateConfig"
        })
      }), " Type: ", _jsx(_components.code, {
        children: "object"
      }), " Optional"]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: _jsx(_components.code, {
          children: "enable"
        })
      }), " Type: ", _jsx(_components.code, {
        children: "boolean"
      }), " Optional"]
    }), `
`, _jsx(_components.p, {
      children: "Whether to translate the transcribed text:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "true"
        }), ": Translate."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "false"
        }), ": Do not translate.", _jsx(_components.br, {}), `
`, "If you enabled translation when calling ", _jsx(_components.code, {
          children: "start"
        }), ", you can turn it off by setting ", _jsx(_components.code, {
          children: "enable"
        }), " to ", _jsx(_components.code, {
          children: "false"
        }), ". If you did not enable translation, you can turn it on by setting ", _jsx(_components.code, {
          children: "enable"
        }), " to ", _jsx(_components.code, {
          children: "true"
        }), " and specifying ", _jsx(_components.code, {
          children: "languages"
        }), "."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: _jsx(_components.code, {
          children: "languages"
        })
      }), " Type: ", _jsx(_components.code, {
        children: "array"
      }), " Optional"]
    }), `
`, _jsxs(_components.p, {
      children: ["The translation languages array. You can specify a maximum of 2 different source languages. The source language and target language must be different, otherwise an error is reported.", _jsx(_components.br, {}), `
`, `Each array item is an object with:
`, _jsx(_components.strong, {
        children: _jsx(_components.code, {
          children: "source"
        })
      }), " Type: ", _jsx(_components.code, {
        children: "string"
      }), " Required"]
    }), `
`, _jsxs(_components.p, {
      children: ["The source language for translation. Refer to ", _jsx(_components.a, {
        href: "/en/realtime-media/speech-to-text/reference/supported-languages",
        children: "Supported Languages"
      }), " for details."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: _jsx(_components.code, {
          children: "target"
        })
      }), " Type: ", _jsx(_components.code, {
        children: "array[string]"
      }), " Required"]
    }), `
`, _jsxs(_components.p, {
      children: ["The target languages for translation. You can specify a maximum of 5 target languages for each source language. Refer to ", _jsx(_components.a, {
        href: "/en/realtime-media/speech-to-text/reference/supported-languages",
        children: "Supported Languages"
      }), " for details."]
    }), `
`, _jsx(_components.h2, {
      id: "response",
      children: "Response"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If the returned status code is ", _jsx(_components.code, {
            children: "200"
          }), ", the request was successful. The response body contains the result of the request."]
        }), `
`, _jsx(_components.h4, {
          id: "ok",
          children: "OK"
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: _jsx(_components.code, {
          children: "taskId"
        })
      }), " Type: ", _jsx(_components.code, {
        children: "string"
      }), " Required"]
    }), `
`, _jsx(_components.p, {
      children: "The unique identifier of this transcription task."
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: _jsx(_components.code, {
          children: "createTs"
        })
      }), " Type: ", _jsx(_components.code, {
        children: "integer"
      }), " Required"]
    }), `
`, _jsx(_components.p, {
      children: "The Unix timestamp (in seconds) when the transcription task was created."
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: _jsx(_components.code, {
          children: "status"
        })
      }), " Type: ", _jsx(_components.code, {
        children: "string"
      }), " Required"]
    }), `
`, _jsx(_components.p, {
      children: "The current status of the transcription task:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "IDLE"
          }), ": Task not initialized"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "PREPARING"
          }), ": Task has received an initialization request"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "PREPARED"
          }), ": Task initialization completed"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "STARTING"
          }), ": Task is beginning to start"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "CREATED"
          }), ": Task startup partially completed"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "STARTED"
          }), ": Task startup fully completed"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "IN_PROGRESS"
          }), ": Task is currently running"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "STOPPING"
          }), ": Task is in the process of being paused"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "STOPPED"
          }), ": Task has been terminated"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "FAILURE_STOP"
          }), ": Task termination failed"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If the returned status code is not ", _jsx(_components.code, {
            children: "200"
          }), ", the request failed. Refer to ", _jsx(_components.code, {
            children: "message"
          }), " field to understand the possible reasons for failure."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "non-200",
      children: "Non-200"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: _jsx(_components.code, {
          children: "message"
        })
      }), " Type: ", _jsx(_components.code, {
        children: "string"
      })]
    }), `
`, _jsx(_components.p, {
      children: "The reason why the request failed."
    }), `
`, _jsx(_components.h2, {
      id: "authorization",
      children: "Authorization"
    }), `
`, _jsxs(_components.p, {
      children: ["This endpoint requires ", _jsx(_components.a, {
        href: "../authentication",
        children: "Basic Auth"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "request-example",
      children: "Request example"
    }), `
`, _jsxs(CodeBlockTabs, {
      defaultValue: "curl",
      children: [_jsxs(CodeBlockTabsList, {
        children: [_jsx(CodeBlockTabsTrigger, {
          value: "curl",
          children: "curl"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "python",
          children: "Python"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "nodejs",
          children: "Node.js"
        })]
      }), _jsx(CodeBlockTab, {
        value: "curl",
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
            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "      curl"
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
                  children: " PATCH"
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
                  children: "        --url"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'https://api.agora.io/v1/projects/:appId/rtsc/speech-to-text/tasks/:taskId?builderToken=your_builder_token&sequenceId=your_sequence_id&updateMask=your_update_mask'"
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
                  children: "        --header"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'Authorization: Basic <credentials>'"
                })]
              })]
            })
          })
        })
      }), _jsx(CodeBlockTab, {
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
                  children: "    import"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " requests"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    url "
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
                  children: ' "https://api.agora.io/v1/projects/:appId/rtsc/speech-to-text/tasks/:taskId?builderToken=your_builder_token&sequenceId=your_sequence_id&updateMask=your_update_mask"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    headers "
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
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"Authorization"'
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
                  children: '"Basic <credentials>"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    response "
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
                  children: " requests.request("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"PATCH"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", url, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "headers"
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
                  children: "headers)"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    print"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(response.text)"
                })]
              })]
            })
          })
        })
      }), _jsx(CodeBlockTab, {
        value: "nodejs",
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
            icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " url"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'https://api.agora.io/v1/projects/:appId/rtsc/speech-to-text/tasks/:taskId?builderToken=your_builder_token&sequenceId=your_sequence_id&updateMask=your_update_mask'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " options"
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
                  children: " {method: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'PATCH'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", headers: {Authorization: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'Basic <credentials>'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}};"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "    fetch"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(url, options)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      ."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "then"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "res"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " =>"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " res."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "json"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "())"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      ."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "then"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "json"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " =>"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " console."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "log"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(json))"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      ."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "catch"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "err"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " =>"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " console."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "error"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(err));"
                })]
              })]
            })
          })
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "response-example",
      children: "Response example"
    }), `
`, _jsx(_components.h3, {
      id: "200",
      children: "200"
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
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "tokenName"'
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
              children: '"The value of the builder token you use to call other methods."'
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
              children: '      "createTs"'
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
              children: '      "instanceId"'
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
              children: '"The `instanceId` you specified in the request."'
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
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "non-200-1",
      children: "Non-200"
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
              children: "    {"
            })
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
              children: '"The reason why the request failed."'
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
              children: "    }"
            })
          })]
        })
      })
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
