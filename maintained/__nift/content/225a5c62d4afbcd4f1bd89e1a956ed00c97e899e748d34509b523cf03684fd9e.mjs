import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "FAQs",
  description: "Most frequently asked questions about Flexible Classroom"
};
export let _markdown = `

Find answers to the most frequently asked questions by following the links below:

* [Why can't I upload courseware?](/en/api-reference/faq/integration/cant_upload_courseware)
* [What should I do if the class recording fails?](/en/api-reference/faq/integration/recording_fails)
* [How does Flexible Classroom support multiple languages?](/en/api-reference/faq/integration/multi_language_support)
* [How to end a class?](/en/api-reference/faq/integration/stop_class)
* [How to deal with audio and video related issues?](/en/api-reference/faq/quality/audio_video_issues_in_classroom)
* [What are some common mistakes in integrating and using Flexible Classroom?](/en/api-reference/faq/integration/common_mistakes_flexible_classroom)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Find answers to the most frequently asked questions by following the links below:"
  }, {
    heading: undefined,
    content: "Why can't I upload courseware?"
  }, {
    heading: undefined,
    content: "What should I do if the class recording fails?"
  }, {
    heading: undefined,
    content: "How does Flexible Classroom support multiple languages?"
  }, {
    heading: undefined,
    content: "How to end a class?"
  }, {
    heading: undefined,
    content: "How to deal with audio and video related issues?"
  }, {
    heading: undefined,
    content: "What are some common mistakes in integrating and using Flexible Classroom?"
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Find answers to the most frequently asked questions by following the links below:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/faq/integration/cant_upload_courseware",
          children: "Why can't I upload courseware?"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/faq/integration/recording_fails",
          children: "What should I do if the class recording fails?"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/faq/integration/multi_language_support",
          children: "How does Flexible Classroom support multiple languages?"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/faq/integration/stop_class",
          children: "How to end a class?"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/faq/quality/audio_video_issues_in_classroom",
          children: "How to deal with audio and video related issues?"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/faq/integration/common_mistakes_flexible_classroom",
          children: "What are some common mistakes in integrating and using Flexible Classroom?"
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
