import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "RESTful authentication",
  description: "Set up authentication for Media Gateway RESTful API calls."
};
export let _markdown = `

Media Gateway RESTful APIs require server-side authentication. Use the same
authentication scheme described in the product reference and pass the generated
\`Authorization\` header with each request.

## HTTP Basic authentication [#http-basic-authentication]

Every time you send an HTTP request, pass a credential in the \`Authorization\`
request header.

Basic authentication is an HTTP authentication scheme. To use it, send requests
with an \`Authorization\` header that contains \`Basic\`, followed by a space and a
base64-encoded \`username:password\` string.

\`\`\`text
Authorization: Basic ZGVtbzpwQDU1dzByZA==
\`\`\`

## HTTP HMAC authentication [#http-hmac-authentication]

Every time you send an HTTP request, pass an API key in the \`Authorization\`
request header.

\`\`\`text
Authorization: 123
\`\`\`

## Related pages [#related-pages]

* [Overview](index.mdx)
* [Create streaming key](create-streaming-key)
* [Query streaming list](query-streaming-list)
* [Create or reset template](create-reset-template)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Media Gateway RESTful APIs require server-side authentication. Use the same\nauthentication scheme described in the product reference and pass the generated\n`Authorization` header with each request."
  }, {
    heading: "http-basic-authentication",
    content: "Every time you send an HTTP request, pass a credential in the `Authorization`\nrequest header."
  }, {
    heading: "http-basic-authentication",
    content: "Basic authentication is an HTTP authentication scheme. To use it, send requests\nwith an `Authorization` header that contains `Basic`, followed by a space and a\nbase64-encoded `username:password` string."
  }, {
    heading: "http-hmac-authentication",
    content: "Every time you send an HTTP request, pass an API key in the `Authorization`\nrequest header."
  }, {
    heading: "related-pages",
    content: "Overview"
  }, {
    heading: "related-pages",
    content: "Create streaming key"
  }, {
    heading: "related-pages",
    content: "Query streaming list"
  }, {
    heading: "related-pages",
    content: "Create or reset template"
  }],
  headings: [{
    id: "http-basic-authentication",
    content: "HTTP Basic authentication"
  }, {
    id: "http-hmac-authentication",
    content: "HTTP HMAC authentication"
  }, {
    id: "related-pages",
    content: "Related pages"
  }]
};
export let toc = [{
  depth: 2,
  url: "#http-basic-authentication",
  title: _jsx(_Fragment, {
    children: "HTTP Basic authentication"
  })
}, {
  depth: 2,
  url: "#http-hmac-authentication",
  title: _jsx(_Fragment, {
    children: "HTTP HMAC authentication"
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
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: [`Media Gateway RESTful APIs require server-side authentication. Use the same
authentication scheme described in the product reference and pass the generated
`, _jsx(_components.code, {
        children: "Authorization"
      }), " header with each request."]
    }), `
`, _jsx(_components.h2, {
      id: "http-basic-authentication",
      children: "HTTP Basic authentication"
    }), `
`, _jsxs(_components.p, {
      children: ["Every time you send an HTTP request, pass a credential in the ", _jsx(_components.code, {
        children: "Authorization"
      }), `
request header.`]
    }), `
`, _jsxs(_components.p, {
      children: [`Basic authentication is an HTTP authentication scheme. To use it, send requests
with an `, _jsx(_components.code, {
        children: "Authorization"
      }), " header that contains ", _jsx(_components.code, {
        children: "Basic"
      }), `, followed by a space and a
base64-encoded `, _jsx(_components.code, {
        children: "username:password"
      }), " string."]
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
          children: _jsxs(_components.span, {
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
              children: " Basic"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ZGVtbzpwQDU1dzByZA=="
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "http-hmac-authentication",
      children: "HTTP HMAC authentication"
    }), `
`, _jsxs(_components.p, {
      children: ["Every time you send an HTTP request, pass an API key in the ", _jsx(_components.code, {
        children: "Authorization"
      }), `
request header.`]
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
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Authorization:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 123"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "related-pages",
      children: "Related pages"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "index.mdx",
          children: "Overview"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "create-streaming-key",
          children: "Create streaming key"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "query-streaming-list",
          children: "Query streaming list"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "create-reset-template",
          children: "Create or reset template"
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
