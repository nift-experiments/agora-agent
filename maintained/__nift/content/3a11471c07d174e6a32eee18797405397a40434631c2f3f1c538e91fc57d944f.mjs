import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "VideoCodecType",
  description: "输出视频所使用的编解码器类型。"
};
export let _markdown = `

<a id="enum_videocodectypeforstream__detailed_desc" />

### \`自从\` [#自从]

自 v3.2.0 版本新增。

<a id="enum_videocodectypeforstream__parameters" />

## 枚举值 [#枚举值]

### \`H264\` [#h264]

（1）：（默认）使用 H.264 编解码器。

### \`H265\` [#h265]

（2）：使用 H.265 编解码器。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v3.2.0 版本新增。"
  }, {
    heading: "h264",
    content: "（1）：（默认）使用 H.264 编解码器。"
  }, {
    heading: "h265",
    content: "（2）：使用 H.265 编解码器。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "h264",
    content: "`H264`"
  }, {
    id: "h265",
    content: "`H265`"
  }]
};
export let toc = [{
  depth: 3,
  url: "#自从",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 2,
  url: "#枚举值",
  title: _jsx(_Fragment, {
    children: "枚举值"
  })
}, {
  depth: 3,
  url: "#h264",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "H264"
    })
  })
}, {
  depth: 3,
  url: "#h265",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "H265"
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
      id: "enum_videocodectypeforstream__detailed_desc"
    }), `
`, _jsx(_components.h3, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.2.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "enum_videocodectypeforstream__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "h264",
      children: _jsx(_components.code, {
        children: "H264"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：（默认）使用 H.264 编解码器。"
    }), `
`, _jsx(_components.h3, {
      id: "h265",
      children: _jsx(_components.code, {
        children: "H265"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：使用 H.265 编解码器。"
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
