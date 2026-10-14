import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Custom Tools",
  description: "Create reusable HTTP tools, test them, and attach them to agents."
};
export let _markdown = `

Custom Tools let your agent call your own HTTP endpoints during a conversation. Create the tool once in **Integrations**, then attach it to any agent in the same project.

Use Custom Tools when you already have an HTTP API and want your agent to call it directly.

* Use a **Knowledge Base** for document retrieval.
* Use an **MCP server** when you already expose tools through MCP.
* Use a **Connector** when a built-in integration such as HubSpot is available.

## Prerequisites [#prerequisites]

* An API reachable over \`http\` or \`https\`.
* A host URL that is not \`localhost\` or a private or internal network address.

## Create a custom tool [#create-a-custom-tool]

1. In the navigation sidebar, select **Integrations**.
2. Switch to the **Custom Tools** tab.
3. Select **Add Custom Tool**.
4. Fill in the tool settings in the **New Custom HTTP Tool** panel.

![New custom tool UI](https://assets-docs.agora.io/images/console/new-custom-tool.png)

## Configure the request [#configure-the-request]

* **Name** (required): Display name for the tool.
* **Description**: Optional notes describing what the tool does.
* **Method**: \`GET\`, \`POST\`, \`PUT\`, \`PATCH\`, or \`DELETE\`. Defaults to \`GET\`.
* **Timeout (ms)**: Maximum wait time for the request. Defaults to \`30000\`.
* **Request URL** (required): Target endpoint. Supports placeholders such as \`https://api.example.com/items/{{id}}\`.

### HTTP headers [#http-headers]

Static headers for authentication and configuration.

* Sensitive header names such as \`Authorization\`, \`api-key\`, \`token\`, \`secret\`, and \`cookie\` are treated as secrets.
* Sensitive values are encrypted, and saved values display as \`***\` in the UI.
* Put static secrets in headers, not in URL query parameters.

### Query parameters [#query-parameters]

Query string values appended to the URL. You can use placeholders, for example:

\`\`\`
status={{ticket_status}}
limit={{page_size}}
\`\`\`

## Configure function calling [#configure-function-calling]

This section tells the LLM when and how to call your tool.

* **Function name** (required): Runtime tool name. Use letters, numbers, and \`_\`. Must start with a letter or \`_\`.

* **Function description** (required): Explains when the agent should call the tool.

* **Parameters (JSON Schema)** (required): A JSON Schema object that defines the allowed input fields. For example:

  \`\`\`json
  {
    "type": "object",
    "properties": {
      "order_id": { "type": "string" },
      "include_history": { "type": "boolean" }
    },
    "required": ["order_id"]
  }
  \`\`\`

* **Body template (JSON)**: An optional JSON payload sent in the request body. Defaults to \`{}\`. For example:

  \`\`\`json
  {
    "order_id": "{{order_id}}",
    "include_history": "{{include_history}}"
  }
  \`\`\`

## Placeholder rules [#placeholder-rules]

Custom Tools support placeholders in:

* Request URL path
* HTTP headers
* Query parameters
* Body template

Rules:

* Placeholder names must match parameter names from &#x2A;*Parameters (JSON Schema)**.
* Host names cannot contain placeholders.
* Unknown placeholders are rejected when you save the tool.
* Malformed placeholders such as \`{{ bad-name }}\` are rejected.

## Test the tool [#test-the-tool]

After saving, use the tool test action in **Integrations** to run a request with sample inputs.

Check that:

* The request reaches the correct endpoint.
* Auth headers work as expected.
* The response body contains only the data you want the agent to see.
* The timeout is long enough for normal responses.

## Attach the tool to an agent [#attach-the-tool-to-an-agent]

Creating a Custom Tool does not make it available to an agent automatically.

1. In the navigation sidebar, select **Agents**.
2. Select your agent from the list.
3. From the **Action** menu, select **Edit Agent**.
4. Go to the **Actions** tab.
5. Under **Custom Tools**, select **Add Custom Tools**.
6. Select one or more tools.
7. Save the agent.

After you attach the custom tool, the LLM can call the tool during test sessions and production conversations.

## Prompting tips [#prompting-tips]

Put usage guidance in your system prompt. For example:

\`\`\`
Use \`lookup_order\` when the user asks about order status. Always confirm the order ID before calling the tool.
\`\`\`

## Troubleshooting [#troubleshooting]

| Issue                        | Solution                                                                          |
| ---------------------------- | --------------------------------------------------------------------------------- |
| Tool save fails              | Check the JSON schema, function name format, and placeholder names.               |
| Tool test fails immediately  | Check the URL scheme and public reachability.                                     |
| Request rejected by your API | Check auth headers, body shape, and query parameters.                             |
| Agent never calls the tool   | Improve the function description and system prompt so the tool's intent is clear. |

## Next steps [#next-steps]

* [Manage integrations](integrations): Manage reusable resources for your workspace
* [Customize your agent](customize-agent): Attach Custom Tools from the Actions tab
* [Test your agent](test-agent): Verify tool calling behavior end to end
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Custom Tools let your agent call your own HTTP endpoints during a conversation. Create the tool once in **Integrations**, then attach it to any agent in the same project."
  }, {
    heading: undefined,
    content: "Use Custom Tools when you already have an HTTP API and want your agent to call it directly."
  }, {
    heading: undefined,
    content: "Use a **Knowledge Base** for document retrieval."
  }, {
    heading: undefined,
    content: "Use an **MCP server** when you already expose tools through MCP."
  }, {
    heading: undefined,
    content: "Use a **Connector** when a built-in integration such as HubSpot is available."
  }, {
    heading: "prerequisites",
    content: "An API reachable over `http` or `https`."
  }, {
    heading: "prerequisites",
    content: "A host URL that is not `localhost` or a private or internal network address."
  }, {
    heading: "create-a-custom-tool",
    content: "In the navigation sidebar, select **Integrations**."
  }, {
    heading: "create-a-custom-tool",
    content: "Switch to the **Custom Tools** tab."
  }, {
    heading: "create-a-custom-tool",
    content: "Select **Add Custom Tool**."
  }, {
    heading: "create-a-custom-tool",
    content: "Fill in the tool settings in the **New Custom HTTP Tool** panel."
  }, {
    heading: "configure-the-request",
    content: "**Name** (required): Display name for the tool."
  }, {
    heading: "configure-the-request",
    content: "**Description**: Optional notes describing what the tool does."
  }, {
    heading: "configure-the-request",
    content: "**Method**: `GET`, `POST`, `PUT`, `PATCH`, or `DELETE`. Defaults to `GET`."
  }, {
    heading: "configure-the-request",
    content: "**Timeout (ms)**: Maximum wait time for the request. Defaults to `30000`."
  }, {
    heading: "configure-the-request",
    content: "**Request URL** (required): Target endpoint. Supports placeholders such as `https://api.example.com/items/{{id}}`."
  }, {
    heading: "http-headers",
    content: "Static headers for authentication and configuration."
  }, {
    heading: "http-headers",
    content: "Sensitive header names such as `Authorization`, `api-key`, `token`, `secret`, and `cookie` are treated as secrets."
  }, {
    heading: "http-headers",
    content: "Sensitive values are encrypted, and saved values display as `***` in the UI."
  }, {
    heading: "http-headers",
    content: "Put static secrets in headers, not in URL query parameters."
  }, {
    heading: "query-parameters",
    content: "Query string values appended to the URL. You can use placeholders, for example:"
  }, {
    heading: "configure-function-calling",
    content: "This section tells the LLM when and how to call your tool."
  }, {
    heading: "configure-function-calling",
    content: "**Function name** (required): Runtime tool name. Use letters, numbers, and `_`. Must start with a letter or `_`."
  }, {
    heading: "configure-function-calling",
    content: "**Function description** (required): Explains when the agent should call the tool."
  }, {
    heading: "configure-function-calling",
    content: "**Parameters (JSON Schema)** (required): A JSON Schema object that defines the allowed input fields. For example:"
  }, {
    heading: "configure-function-calling",
    content: "**Body template (JSON)**: An optional JSON payload sent in the request body. Defaults to `{}`. For example:"
  }, {
    heading: "placeholder-rules",
    content: "Custom Tools support placeholders in:"
  }, {
    heading: "placeholder-rules",
    content: "Request URL path"
  }, {
    heading: "placeholder-rules",
    content: "HTTP headers"
  }, {
    heading: "placeholder-rules",
    content: "Query parameters"
  }, {
    heading: "placeholder-rules",
    content: "Body template"
  }, {
    heading: "placeholder-rules",
    content: "Rules:"
  }, {
    heading: "placeholder-rules",
    content: "Placeholder names must match parameter names from &#x2A;*Parameters (JSON Schema)**."
  }, {
    heading: "placeholder-rules",
    content: "Host names cannot contain placeholders."
  }, {
    heading: "placeholder-rules",
    content: "Unknown placeholders are rejected when you save the tool."
  }, {
    heading: "placeholder-rules",
    content: "Malformed placeholders such as `{{ bad-name }}` are rejected."
  }, {
    heading: "test-the-tool",
    content: "After saving, use the tool test action in **Integrations** to run a request with sample inputs."
  }, {
    heading: "test-the-tool",
    content: "Check that:"
  }, {
    heading: "test-the-tool",
    content: "The request reaches the correct endpoint."
  }, {
    heading: "test-the-tool",
    content: "Auth headers work as expected."
  }, {
    heading: "test-the-tool",
    content: "The response body contains only the data you want the agent to see."
  }, {
    heading: "test-the-tool",
    content: "The timeout is long enough for normal responses."
  }, {
    heading: "attach-the-tool-to-an-agent",
    content: "Creating a Custom Tool does not make it available to an agent automatically."
  }, {
    heading: "attach-the-tool-to-an-agent",
    content: "In the navigation sidebar, select **Agents**."
  }, {
    heading: "attach-the-tool-to-an-agent",
    content: "Select your agent from the list."
  }, {
    heading: "attach-the-tool-to-an-agent",
    content: "From the **Action** menu, select **Edit Agent**."
  }, {
    heading: "attach-the-tool-to-an-agent",
    content: "Go to the **Actions** tab."
  }, {
    heading: "attach-the-tool-to-an-agent",
    content: "Under **Custom Tools**, select **Add Custom Tools**."
  }, {
    heading: "attach-the-tool-to-an-agent",
    content: "Select one or more tools."
  }, {
    heading: "attach-the-tool-to-an-agent",
    content: "Save the agent."
  }, {
    heading: "attach-the-tool-to-an-agent",
    content: "After you attach the custom tool, the LLM can call the tool during test sessions and production conversations."
  }, {
    heading: "prompting-tips",
    content: "Put usage guidance in your system prompt. For example:"
  }, {
    heading: "troubleshooting",
    content: "Issue"
  }, {
    heading: "troubleshooting",
    content: "Solution"
  }, {
    heading: "troubleshooting",
    content: "Tool save fails"
  }, {
    heading: "troubleshooting",
    content: "Check the JSON schema, function name format, and placeholder names."
  }, {
    heading: "troubleshooting",
    content: "Tool test fails immediately"
  }, {
    heading: "troubleshooting",
    content: "Check the URL scheme and public reachability."
  }, {
    heading: "troubleshooting",
    content: "Request rejected by your API"
  }, {
    heading: "troubleshooting",
    content: "Check auth headers, body shape, and query parameters."
  }, {
    heading: "troubleshooting",
    content: "Agent never calls the tool"
  }, {
    heading: "troubleshooting",
    content: "Improve the function description and system prompt so the tool's intent is clear."
  }, {
    heading: "next-steps",
    content: "Manage integrations: Manage reusable resources for your workspace"
  }, {
    heading: "next-steps",
    content: "Customize your agent: Attach Custom Tools from the Actions tab"
  }, {
    heading: "next-steps",
    content: "Test your agent: Verify tool calling behavior end to end"
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "create-a-custom-tool",
    content: "Create a custom tool"
  }, {
    id: "configure-the-request",
    content: "Configure the request"
  }, {
    id: "http-headers",
    content: "HTTP headers"
  }, {
    id: "query-parameters",
    content: "Query parameters"
  }, {
    id: "configure-function-calling",
    content: "Configure function calling"
  }, {
    id: "placeholder-rules",
    content: "Placeholder rules"
  }, {
    id: "test-the-tool",
    content: "Test the tool"
  }, {
    id: "attach-the-tool-to-an-agent",
    content: "Attach the tool to an agent"
  }, {
    id: "prompting-tips",
    content: "Prompting tips"
  }, {
    id: "troubleshooting",
    content: "Troubleshooting"
  }, {
    id: "next-steps",
    content: "Next steps"
  }]
};
export let toc = [{
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#create-a-custom-tool",
  title: _jsx(_Fragment, {
    children: "Create a custom tool"
  })
}, {
  depth: 2,
  url: "#configure-the-request",
  title: _jsx(_Fragment, {
    children: "Configure the request"
  })
}, {
  depth: 3,
  url: "#http-headers",
  title: _jsx(_Fragment, {
    children: "HTTP headers"
  })
}, {
  depth: 3,
  url: "#query-parameters",
  title: _jsx(_Fragment, {
    children: "Query parameters"
  })
}, {
  depth: 2,
  url: "#configure-function-calling",
  title: _jsx(_Fragment, {
    children: "Configure function calling"
  })
}, {
  depth: 2,
  url: "#placeholder-rules",
  title: _jsx(_Fragment, {
    children: "Placeholder rules"
  })
}, {
  depth: 2,
  url: "#test-the-tool",
  title: _jsx(_Fragment, {
    children: "Test the tool"
  })
}, {
  depth: 2,
  url: "#attach-the-tool-to-an-agent",
  title: _jsx(_Fragment, {
    children: "Attach the tool to an agent"
  })
}, {
  depth: 2,
  url: "#prompting-tips",
  title: _jsx(_Fragment, {
    children: "Prompting tips"
  })
}, {
  depth: 2,
  url: "#troubleshooting",
  title: _jsx(_Fragment, {
    children: "Troubleshooting"
  })
}, {
  depth: 2,
  url: "#next-steps",
  title: _jsx(_Fragment, {
    children: "Next steps"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
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
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["Custom Tools let your agent call your own HTTP endpoints during a conversation. Create the tool once in ", _jsx(_components.strong, {
        children: "Integrations"
      }), ", then attach it to any agent in the same project."]
    }), `
`, _jsx(_components.p, {
      children: "Use Custom Tools when you already have an HTTP API and want your agent to call it directly."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Use a ", _jsx(_components.strong, {
          children: "Knowledge Base"
        }), " for document retrieval."]
      }), `
`, _jsxs(_components.li, {
        children: ["Use an ", _jsx(_components.strong, {
          children: "MCP server"
        }), " when you already expose tools through MCP."]
      }), `
`, _jsxs(_components.li, {
        children: ["Use a ", _jsx(_components.strong, {
          children: "Connector"
        }), " when a built-in integration such as HubSpot is available."]
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
        children: ["An API reachable over ", _jsx(_components.code, {
          children: "http"
        }), " or ", _jsx(_components.code, {
          children: "https"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["A host URL that is not ", _jsx(_components.code, {
          children: "localhost"
        }), " or a private or internal network address."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "create-a-custom-tool",
      children: "Create a custom tool"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
          children: "Integrations"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Switch to the ", _jsx(_components.strong, {
          children: "Custom Tools"
        }), " tab."]
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Add Custom Tool"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Fill in the tool settings in the ", _jsx(_components.strong, {
          children: "New Custom HTTP Tool"
        }), " panel."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/new-custom-tool.png",
        alt: "New custom tool UI"
      })
    }), `
`, _jsx(_components.h2, {
      id: "configure-the-request",
      children: "Configure the request"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Name"
        }), " (required): Display name for the tool."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Description"
        }), ": Optional notes describing what the tool does."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Method"
        }), ": ", _jsx(_components.code, {
          children: "GET"
        }), ", ", _jsx(_components.code, {
          children: "POST"
        }), ", ", _jsx(_components.code, {
          children: "PUT"
        }), ", ", _jsx(_components.code, {
          children: "PATCH"
        }), ", or ", _jsx(_components.code, {
          children: "DELETE"
        }), ". Defaults to ", _jsx(_components.code, {
          children: "GET"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Timeout (ms)"
        }), ": Maximum wait time for the request. Defaults to ", _jsx(_components.code, {
          children: "30000"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Request URL"
        }), " (required): Target endpoint. Supports placeholders such as ", _jsx(_components.code, {
          children: "https://api.example.com/items/{{id}}"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "http-headers",
      children: "HTTP headers"
    }), `
`, _jsx(_components.p, {
      children: "Static headers for authentication and configuration."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Sensitive header names such as ", _jsx(_components.code, {
          children: "Authorization"
        }), ", ", _jsx(_components.code, {
          children: "api-key"
        }), ", ", _jsx(_components.code, {
          children: "token"
        }), ", ", _jsx(_components.code, {
          children: "secret"
        }), ", and ", _jsx(_components.code, {
          children: "cookie"
        }), " are treated as secrets."]
      }), `
`, _jsxs(_components.li, {
        children: ["Sensitive values are encrypted, and saved values display as ", _jsx(_components.code, {
          children: "***"
        }), " in the UI."]
      }), `
`, _jsx(_components.li, {
        children: "Put static secrets in headers, not in URL query parameters."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "query-parameters",
      children: "Query parameters"
    }), `
`, _jsx(_components.p, {
      children: "Query string values appended to the URL. You can use placeholders, for example:"
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
              children: "status={{ticket_status}}"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "limit={{page_size}}"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "configure-function-calling",
      children: "Configure function calling"
    }), `
`, _jsx(_components.p, {
      children: "This section tells the LLM when and how to call your tool."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Function name"
          }), " (required): Runtime tool name. Use letters, numbers, and ", _jsx(_components.code, {
            children: "_"
          }), ". Must start with a letter or ", _jsx(_components.code, {
            children: "_"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Function description"
          }), " (required): Explains when the agent should call the tool."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Parameters (JSON Schema)"
          }), " (required): A JSON Schema object that defines the allowed input fields. For example:"]
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
                  children: ": { "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '"type"'
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
                  children: '    "include_history"'
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
                  children: '"type"'
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
                  children: " }"
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
                  children: "]"
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
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Body template (JSON)"
          }), ": An optional JSON payload sent in the request body. Defaults to ", _jsx(_components.code, {
            children: "{}"
          }), ". For example:"]
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
                  children: '  "order_id"'
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
                  children: '"{{order_id}}"'
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
                  children: '  "include_history"'
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
                  children: '"{{include_history}}"'
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
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "placeholder-rules",
      children: "Placeholder rules"
    }), `
`, _jsx(_components.p, {
      children: "Custom Tools support placeholders in:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Request URL path"
      }), `
`, _jsx(_components.li, {
        children: "HTTP headers"
      }), `
`, _jsx(_components.li, {
        children: "Query parameters"
      }), `
`, _jsx(_components.li, {
        children: "Body template"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Rules:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Placeholder names must match parameter names from ", _jsx(_components.strong, {
          children: "Parameters (JSON Schema)"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Host names cannot contain placeholders."
      }), `
`, _jsx(_components.li, {
        children: "Unknown placeholders are rejected when you save the tool."
      }), `
`, _jsxs(_components.li, {
        children: ["Malformed placeholders such as ", _jsx(_components.code, {
          children: "{{ bad-name }}"
        }), " are rejected."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "test-the-tool",
      children: "Test the tool"
    }), `
`, _jsxs(_components.p, {
      children: ["After saving, use the tool test action in ", _jsx(_components.strong, {
        children: "Integrations"
      }), " to run a request with sample inputs."]
    }), `
`, _jsx(_components.p, {
      children: "Check that:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The request reaches the correct endpoint."
      }), `
`, _jsx(_components.li, {
        children: "Auth headers work as expected."
      }), `
`, _jsx(_components.li, {
        children: "The response body contains only the data you want the agent to see."
      }), `
`, _jsx(_components.li, {
        children: "The timeout is long enough for normal responses."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "attach-the-tool-to-an-agent",
      children: "Attach the tool to an agent"
    }), `
`, _jsx(_components.p, {
      children: "Creating a Custom Tool does not make it available to an agent automatically."
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
          children: "Agents"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Select your agent from the list."
      }), `
`, _jsxs(_components.li, {
        children: ["From the ", _jsx(_components.strong, {
          children: "Action"
        }), " menu, select ", _jsx(_components.strong, {
          children: "Edit Agent"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Go to the ", _jsx(_components.strong, {
          children: "Actions"
        }), " tab."]
      }), `
`, _jsxs(_components.li, {
        children: ["Under ", _jsx(_components.strong, {
          children: "Custom Tools"
        }), ", select ", _jsx(_components.strong, {
          children: "Add Custom Tools"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Select one or more tools."
      }), `
`, _jsx(_components.li, {
        children: "Save the agent."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "After you attach the custom tool, the LLM can call the tool during test sessions and production conversations."
    }), `
`, _jsx(_components.h2, {
      id: "prompting-tips",
      children: "Prompting tips"
    }), `
`, _jsx(_components.p, {
      children: "Put usage guidance in your system prompt. For example:"
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
        children: _jsx(_components.code, {
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "Use `lookup_order` when the user asks about order status. Always confirm the order ID before calling the tool."
            })
          })
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Issue"
          }), _jsx(_components.th, {
            children: "Solution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Tool save fails"
          }), _jsx(_components.td, {
            children: "Check the JSON schema, function name format, and placeholder names."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Tool test fails immediately"
          }), _jsx(_components.td, {
            children: "Check the URL scheme and public reachability."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Request rejected by your API"
          }), _jsx(_components.td, {
            children: "Check auth headers, body shape, and query parameters."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Agent never calls the tool"
          }), _jsx(_components.td, {
            children: "Improve the function description and system prompt so the tool's intent is clear."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "next-steps",
      children: "Next steps"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "integrations",
          children: "Manage integrations"
        }), ": Manage reusable resources for your workspace"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "customize-agent",
          children: "Customize your agent"
        }), ": Attach Custom Tools from the Actions tab"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "test-agent",
          children: "Test your agent"
        }), ": Verify tool calling behavior end to end"]
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
