import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Speech-to-Text Overview",
  description: "Real-time transcription, translation, and caption recording using the Speech-to-Text REST API."
};
export let _markdown = `

The Speech-to-Text REST API provides server-side access to real-time transcription, translation, and caption recording. Start and manage transcription agents that join your RTC channels and output captions from your backend.

## API basics [#api-basics]

All requests are sent to the host \`api.agora.io\`.

* **Authentication**: All APIs require [Basic Auth](authentication) for authentication.
* **Request**: Refer to the respective API examples.
* **Response**: The response content is in JSON format.
* **Base URL**: \`https://api.agora.io/api/speech-to-text/v1/projects/<appid>\` where \`<appid>\` is the Agora app ID for your project.

## REST APIs [#rest-apis]

* [Start a Real-time STT agent](join): Creates and starts a transcription task that joins the specified RTC channel.
* [Query the task status](query): Retrieves the status of a transcription task.
* [Stop a Real-time STT agent](leave): Stops a running transcription task.
* [Update task configuration](update): Updates the configuration of a running transcription task.
* [List Real-time STT agents](list): Retrieves the list of transcription tasks for the project.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Speech-to-Text REST API provides server-side access to real-time transcription, translation, and caption recording. Start and manage transcription agents that join your RTC channels and output captions from your backend."
  }, {
    heading: "api-basics",
    content: "All requests are sent to the host `api.agora.io`."
  }, {
    heading: "api-basics",
    content: "**Authentication**: All APIs require Basic Auth for authentication."
  }, {
    heading: "api-basics",
    content: "**Request**: Refer to the respective API examples."
  }, {
    heading: "api-basics",
    content: "**Response**: The response content is in JSON format."
  }, {
    heading: "api-basics",
    content: "**Base URL**: `https://api.agora.io/api/speech-to-text/v1/projects/<appid>` where `<appid>` is the Agora app ID for your project."
  }, {
    heading: "rest-apis",
    content: "Start a Real-time STT agent: Creates and starts a transcription task that joins the specified RTC channel."
  }, {
    heading: "rest-apis",
    content: "Query the task status: Retrieves the status of a transcription task."
  }, {
    heading: "rest-apis",
    content: "Stop a Real-time STT agent: Stops a running transcription task."
  }, {
    heading: "rest-apis",
    content: "Update task configuration: Updates the configuration of a running transcription task."
  }, {
    heading: "rest-apis",
    content: "List Real-time STT agents: Retrieves the list of transcription tasks for the project."
  }],
  headings: [{
    id: "api-basics",
    content: "API basics"
  }, {
    id: "rest-apis",
    content: "REST APIs"
  }]
};
export let toc = [{
  depth: 2,
  url: "#api-basics",
  title: _jsx(_Fragment, {
    children: "API basics"
  })
}, {
  depth: 2,
  url: "#rest-apis",
  title: _jsx(_Fragment, {
    children: "REST APIs"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The Speech-to-Text REST API provides server-side access to real-time transcription, translation, and caption recording. Start and manage transcription agents that join your RTC channels and output captions from your backend."
    }), `
`, _jsx(_components.h2, {
      id: "api-basics",
      children: "API basics"
    }), `
`, _jsxs(_components.p, {
      children: ["All requests are sent to the host ", _jsx(_components.code, {
        children: "api.agora.io"
      }), "."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Authentication"
        }), ": All APIs require ", _jsx(_components.a, {
          href: "authentication",
          children: "Basic Auth"
        }), " for authentication."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Request"
        }), ": Refer to the respective API examples."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Response"
        }), ": The response content is in JSON format."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Base URL"
        }), ": ", _jsx(_components.code, {
          children: "https://api.agora.io/api/speech-to-text/v1/projects/<appid>"
        }), " where ", _jsx(_components.code, {
          children: "<appid>"
        }), " is the Agora app ID for your project."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "rest-apis",
      children: "REST APIs"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "join",
          children: "Start a Real-time STT agent"
        }), ": Creates and starts a transcription task that joins the specified RTC channel."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "query",
          children: "Query the task status"
        }), ": Retrieves the status of a transcription task."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "leave",
          children: "Stop a Real-time STT agent"
        }), ": Stops a running transcription task."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "update",
          children: "Update task configuration"
        }), ": Updates the configuration of a running transcription task."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "list",
          children: "List Real-time STT agents"
        }), ": Retrieves the list of transcription tasks for the project."]
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
