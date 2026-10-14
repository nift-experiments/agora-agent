import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AudioSampleRateType",
  description: "音频采样率（Hz）。"
};
export let _markdown = `

<a id="enum_audiosampleratetype__parameters" />

## 枚举值 [#枚举值]

### \`TYPE_32000\` [#type_32000]

（32000）：32 kHz。

### \`TYPE_44100\` [#type_44100]

（44100）：44.1 kHz（默认）。

### \`TYPE_48000\` [#type_48000]

（48000）：48 kHz。
`;
export let structuredData = {
  contents: [{
    heading: "type_32000",
    content: "（32000）：32 kHz。"
  }, {
    heading: "type_44100",
    content: "（44100）：44.1 kHz（默认）。"
  }, {
    heading: "type_48000",
    content: "（48000）：48 kHz。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "type_32000",
    content: "`TYPE_32000`"
  }, {
    id: "type_44100",
    content: "`TYPE_44100`"
  }, {
    id: "type_48000",
    content: "`TYPE_48000`"
  }]
};
export let toc = [{
  depth: 2,
  url: "#枚举值",
  title: _jsx(_Fragment, {
    children: "枚举值"
  })
}, {
  depth: 3,
  url: "#type_32000",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "TYPE_32000"
    })
  })
}, {
  depth: 3,
  url: "#type_44100",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "TYPE_44100"
    })
  })
}, {
  depth: 3,
  url: "#type_48000",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "TYPE_48000"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "enum_audiosampleratetype__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "type_32000",
      children: _jsx(_components.code, {
        children: "TYPE_32000"
      })
    }), `
`, _jsx(_components.p, {
      children: "（32000）：32 kHz。"
    }), `
`, _jsx(_components.h3, {
      id: "type_44100",
      children: _jsx(_components.code, {
        children: "TYPE_44100"
      })
    }), `
`, _jsx(_components.p, {
      children: "（44100）：44.1 kHz（默认）。"
    }), `
`, _jsx(_components.h3, {
      id: "type_48000",
      children: _jsx(_components.code, {
        children: "TYPE_48000"
      })
    }), `
`, _jsx(_components.p, {
      children: "（48000）：48 kHz。"
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
