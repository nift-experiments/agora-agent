import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "RESTful authentication",
  description: "Set up authentication for RESTful communication between your app and Agora."
};
export let _markdown = `

The Speech-to-Text REST APIs use Basic HTTP authentication. Each request must include an \`Authorization\` header built from your Agora customer ID and customer secret.

## Recommended pattern [#recommended-pattern]

* Store customer credentials on the server.
* Generate the Basic Auth credential by Base64-encoding the \`customer_id:customer_secret\` string.
* Send the encoded value in the \`Authorization: Basic <credential>\` request header.
* Keep all REST calls on the server side and avoid exposing secrets in clients.

## Related pages [#related-pages]

* [Overview](index)
* [Start a Real-time STT agent](join)
* [Query the task status](query)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Speech-to-Text REST APIs use Basic HTTP authentication. Each request must include an `Authorization` header built from your Agora customer ID and customer secret."
  }, {
    heading: "recommended-pattern",
    content: "Store customer credentials on the server."
  }, {
    heading: "recommended-pattern",
    content: "Generate the Basic Auth credential by Base64-encoding the `customer_id:customer_secret` string."
  }, {
    heading: "recommended-pattern",
    content: "Send the encoded value in the `Authorization: Basic <credential>` request header."
  }, {
    heading: "recommended-pattern",
    content: "Keep all REST calls on the server side and avoid exposing secrets in clients."
  }, {
    heading: "related-pages",
    content: "Overview"
  }, {
    heading: "related-pages",
    content: "Start a Real-time STT agent"
  }, {
    heading: "related-pages",
    content: "Query the task status"
  }],
  headings: [{
    id: "recommended-pattern",
    content: "Recommended pattern"
  }, {
    id: "related-pages",
    content: "Related pages"
  }]
};
export let toc = [{
  depth: 2,
  url: "#recommended-pattern",
  title: _jsx(_Fragment, {
    children: "Recommended pattern"
  })
}, {
  depth: 2,
  url: "#related-pages",
  title: _jsx(_Fragment, {
    children: "Related pages"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["The Speech-to-Text REST APIs use Basic HTTP authentication. Each request must include an ", _jsx(_components.code, {
        children: "Authorization"
      }), " header built from your Agora customer ID and customer secret."]
    }), `
`, _jsx(_components.h2, {
      id: "recommended-pattern",
      children: "Recommended pattern"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Store customer credentials on the server."
      }), `
`, _jsxs(_components.li, {
        children: ["Generate the Basic Auth credential by Base64-encoding the ", _jsx(_components.code, {
          children: "customer_id:customer_secret"
        }), " string."]
      }), `
`, _jsxs(_components.li, {
        children: ["Send the encoded value in the ", _jsx(_components.code, {
          children: "Authorization: Basic <credential>"
        }), " request header."]
      }), `
`, _jsx(_components.li, {
        children: "Keep all REST calls on the server side and avoid exposing secrets in clients."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "related-pages",
      children: "Related pages"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "index",
          children: "Overview"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "join",
          children: "Start a Real-time STT agent"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "query",
          children: "Query the task status"
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
