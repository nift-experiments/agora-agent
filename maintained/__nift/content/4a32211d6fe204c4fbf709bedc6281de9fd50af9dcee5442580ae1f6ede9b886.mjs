import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Optimize transcription quality and cost",
  description: "Optimize real-time STT transcription quality and cost"
};
export let _markdown = `

To optimize transcription quality and reduce costs, specify only one source language per STT agent or task. This approach avoids additional language identification fees and provides the most accurate results.

* **Single-language channel**

  If all users in a channel speak the same language, start one STT agent or task that subscribes to all relevant UIDs.

* **Multi-language channel**

  If users in a channel speak different languages, start a separate STT agent or task for each source language.

* **Multilingual speaker**

  If a user speaks multiple languages, creating one STT agent or task per language will not capture their speech effectively. Instead, start a dedicated STT agent or task for that UID to handle language-specific transcription and translation.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To optimize transcription quality and reduce costs, specify only one source language per STT agent or task. This approach avoids additional language identification fees and provides the most accurate results."
  }, {
    heading: undefined,
    content: "**Single-language channel**"
  }, {
    heading: undefined,
    content: "If all users in a channel speak the same language, start one STT agent or task that subscribes to all relevant UIDs."
  }, {
    heading: undefined,
    content: "**Multi-language channel**"
  }, {
    heading: undefined,
    content: "If users in a channel speak different languages, start a separate STT agent or task for each source language."
  }, {
    heading: undefined,
    content: "**Multilingual speaker**"
  }, {
    heading: undefined,
    content: "If a user speaks multiple languages, creating one STT agent or task per language will not capture their speech effectively. Instead, start a dedicated STT agent or task for that UID to handle language-specific transcription and translation."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "To optimize transcription quality and reduce costs, specify only one source language per STT agent or task. This approach avoids additional language identification fees and provides the most accurate results."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Single-language channel"
          })
        }), `
`, _jsx(_components.p, {
          children: "If all users in a channel speak the same language, start one STT agent or task that subscribes to all relevant UIDs."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Multi-language channel"
          })
        }), `
`, _jsx(_components.p, {
          children: "If users in a channel speak different languages, start a separate STT agent or task for each source language."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Multilingual speaker"
          })
        }), `
`, _jsx(_components.p, {
          children: "If a user speaks multiple languages, creating one STT agent or task per language will not capture their speech effectively. Instead, start a dedicated STT agent or task for that UID to handle language-specific transcription and translation."
        }), `
`]
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
