import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Agora skills",
  description: "Use Agora skills with AI coding assistants to build with Agora faster."
};
export let _markdown = `

Agora skills are structured reference files that help AI coding assistants generate product-aware Agora code without guessing.

Skills include the [Agora MCP server](./mcp.mdx), which provides live access to the latest Agora documentation.

## Installation [#installation]

\`\`\`bash
npx skills add github:AgoraIO/skills
\`\`\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora skills are structured reference files that help AI coding assistants generate product-aware Agora code without guessing."
  }, {
    heading: undefined,
    content: "Skills include the Agora MCP server, which provides live access to the latest Agora documentation."
  }],
  headings: [{
    id: "installation",
    content: "Installation"
  }]
};
export let toc = [{
  depth: 2,
  url: "#installation",
  title: _jsx(_Fragment, {
    children: "Installation"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agora skills are structured reference files that help AI coding assistants generate product-aware Agora code without guessing."
    }), `
`, _jsxs(_components.p, {
      children: ["Skills include the ", _jsx(_components.a, {
        href: "./mcp.mdx",
        children: "Agora MCP server"
      }), ", which provides live access to the latest Agora documentation."]
    }), `
`, _jsx(_components.h2, {
      id: "installation",
      children: "Installation"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "npx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " skills"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " add"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " github:AgoraIO/skills"
            })]
          })
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
