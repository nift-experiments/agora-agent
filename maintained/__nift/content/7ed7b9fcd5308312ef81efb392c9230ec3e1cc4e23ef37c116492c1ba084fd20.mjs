import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Overview",
  description: "Create and manage Cloud Transcoding tasks using RESTful APIs."
};
export let _markdown = `

Agora Cloud Transcoding transcodes media streams on Agora servers and outputs the result to an RTC channel. Send HTTPS requests from your business server to manage transcoding tasks and templates.

## API basics [#api-basics]

* **Authentication**: All APIs require [Basic Auth](authentication).
* **Request**: Request bodies use JSON.
* **Response**: Response bodies use JSON.
* **Base URL**: \`https://api.sd-rtn.com\`

<CalloutContainer type="info">
  <CalloutDescription>
    The Cloud Transcoding REST API supports HTTPS only. Requests over plain HTTP are not supported.
  </CalloutDescription>
</CalloutContainer>

## REST APIs [#rest-apis]

* [Acquire a builder token](acquire): Retrieve a builder token before creating a task.
* [Create a cloud transcoding task](create): Start transcoding by creating a task.
* [Query the status of a task](query): Check the status of a Cloud Transcoding task.
* [Update a cloud transcoding task](update): Update an existing task.
* [Destroy a cloud transcoding task](destroy): Destroy a Cloud Transcoding task.
* [Create or update a transcoding template](template-create): Create or update a transcoding template.
* [Query transcoding templates](template-query): Query all transcoding template configurations under an App ID.
* [Query message notification server IP](ncs-query-ip): Get message notification server IP addresses for firewall whitelisting.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora Cloud Transcoding transcodes media streams on Agora servers and outputs the result to an RTC channel. Send HTTPS requests from your business server to manage transcoding tasks and templates."
  }, {
    heading: "api-basics",
    content: "**Authentication**: All APIs require Basic Auth."
  }, {
    heading: "api-basics",
    content: "**Request**: Request bodies use JSON."
  }, {
    heading: "api-basics",
    content: "**Response**: Response bodies use JSON."
  }, {
    heading: "api-basics",
    content: "**Base URL**: `https://api.sd-rtn.com`"
  }, {
    heading: "api-basics",
    content: "The Cloud Transcoding REST API supports HTTPS only. Requests over plain HTTP are not supported."
  }, {
    heading: "rest-apis",
    content: "Acquire a builder token: Retrieve a builder token before creating a task."
  }, {
    heading: "rest-apis",
    content: "Create a cloud transcoding task: Start transcoding by creating a task."
  }, {
    heading: "rest-apis",
    content: "Query the status of a task: Check the status of a Cloud Transcoding task."
  }, {
    heading: "rest-apis",
    content: "Update a cloud transcoding task: Update an existing task."
  }, {
    heading: "rest-apis",
    content: "Destroy a cloud transcoding task: Destroy a Cloud Transcoding task."
  }, {
    heading: "rest-apis",
    content: "Create or update a transcoding template: Create or update a transcoding template."
  }, {
    heading: "rest-apis",
    content: "Query transcoding templates: Query all transcoding template configurations under an App ID."
  }, {
    heading: "rest-apis",
    content: "Query message notification server IP: Get message notification server IP addresses for firewall whitelisting."
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agora Cloud Transcoding transcodes media streams on Agora servers and outputs the result to an RTC channel. Send HTTPS requests from your business server to manage transcoding tasks and templates."
    }), `
`, _jsx(_components.h2, {
      id: "api-basics",
      children: "API basics"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Authentication"
        }), ": All APIs require ", _jsx(_components.a, {
          href: "authentication",
          children: "Basic Auth"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Request"
        }), ": Request bodies use JSON."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Response"
        }), ": Response bodies use JSON."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Base URL"
        }), ": ", _jsx(_components.code, {
          children: "https://api.sd-rtn.com"
        })]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "The Cloud Transcoding REST API supports HTTPS only. Requests over plain HTTP are not supported."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "rest-apis",
      children: "REST APIs"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "acquire",
          children: "Acquire a builder token"
        }), ": Retrieve a builder token before creating a task."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "create",
          children: "Create a cloud transcoding task"
        }), ": Start transcoding by creating a task."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "query",
          children: "Query the status of a task"
        }), ": Check the status of a Cloud Transcoding task."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "update",
          children: "Update a cloud transcoding task"
        }), ": Update an existing task."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "destroy",
          children: "Destroy a cloud transcoding task"
        }), ": Destroy a Cloud Transcoding task."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "template-create",
          children: "Create or update a transcoding template"
        }), ": Create or update a transcoding template."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "template-query",
          children: "Query transcoding templates"
        }), ": Query all transcoding template configurations under an App ID."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "ncs-query-ip",
          children: "Query message notification server IP"
        }), ": Get message notification server IP addresses for firewall whitelisting."]
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
