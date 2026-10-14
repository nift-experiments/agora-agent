import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "TEN logging API",
  description: "Use the TEN logging API to view logs from extensions written in different languages in one unified output."
};
export let _markdown = `

The TEN Framework supports running extensions developed in different languages within the same process. This creates the need to view logs from all extensions in a unified format, which makes debugging easier.

To support this, the \`ten_env\` provides a logging API. Within each extension callback, you can access an instance of \`ten_env\` and use it to output logs. This allows logs from extensions written in different languages to appear in a single, consistent output.

The logging API takes two primary parameters: the log level and the message. For convenience, the API also includes simplified variants that require only the message.

The example shows the unified log output for extensions written in multiple languages:

![Unified log output for multi-language extensions](https://assets-docs.agora.io/images/ten-framework/log.png)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The TEN Framework supports running extensions developed in different languages within the same process. This creates the need to view logs from all extensions in a unified format, which makes debugging easier."
  }, {
    heading: undefined,
    content: "To support this, the `ten_env` provides a logging API. Within each extension callback, you can access an instance of `ten_env` and use it to output logs. This allows logs from extensions written in different languages to appear in a single, consistent output."
  }, {
    heading: undefined,
    content: "The logging API takes two primary parameters: the log level and the message. For convenience, the API also includes simplified variants that require only the message."
  }, {
    heading: undefined,
    content: "The example shows the unified log output for extensions written in multiple languages:"
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    img: "img",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The TEN Framework supports running extensions developed in different languages within the same process. This creates the need to view logs from all extensions in a unified format, which makes debugging easier."
    }), `
`, _jsxs(_components.p, {
      children: ["To support this, the ", _jsx(_components.code, {
        children: "ten_env"
      }), " provides a logging API. Within each extension callback, you can access an instance of ", _jsx(_components.code, {
        children: "ten_env"
      }), " and use it to output logs. This allows logs from extensions written in different languages to appear in a single, consistent output."]
    }), `
`, _jsx(_components.p, {
      children: "The logging API takes two primary parameters: the log level and the message. For convenience, the API also includes simplified variants that require only the message."
    }), `
`, _jsx(_components.p, {
      children: "The example shows the unified log output for extensions written in multiple languages:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/log.png",
        alt: "Unified log output for multi-language extensions"
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
