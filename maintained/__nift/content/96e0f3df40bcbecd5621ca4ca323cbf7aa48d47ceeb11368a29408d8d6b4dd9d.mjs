import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "COMPRESSION_PREFERENCE",
  description: "视频编码的压缩偏好。"
};
export let _markdown = `

<a id="enum_compressionpreference__parameters" />

## 枚举值 [#枚举值]

### \`PREFER_COMPRESSION_AUTO\` [#prefer_compression_auto]

（-1）：（默认）自动模式。SDK 会根据设置的视频场景自动选择 PREFER\\_LOW\\_LATENCY 或 PREFER\\_QUALITY，以实现最佳用户体验。

### \`PREFER_LOW_LATENCY\` [#prefer_low_latency]

（0）：低延迟优先。SDK 会压缩视频帧以降低延迟，适用于对流畅性要求较高且可接受视频质量降低的场景。

### \`PREFER_QUALITY\` [#prefer_quality]

（1）：高质量优先。SDK 会在保持视频质量的同时压缩视频帧，适用于对视频质量要求较高的场景。
`;
export let structuredData = {
  contents: [{
    heading: "prefer_compression_auto",
    content: "（-1）：（默认）自动模式。SDK 会根据设置的视频场景自动选择 PREFER\\_LOW\\_LATENCY 或 PREFER\\_QUALITY，以实现最佳用户体验。"
  }, {
    heading: "prefer_low_latency",
    content: "（0）：低延迟优先。SDK 会压缩视频帧以降低延迟，适用于对流畅性要求较高且可接受视频质量降低的场景。"
  }, {
    heading: "prefer_quality",
    content: "（1）：高质量优先。SDK 会在保持视频质量的同时压缩视频帧，适用于对视频质量要求较高的场景。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "prefer_compression_auto",
    content: "`PREFER_COMPRESSION_AUTO`"
  }, {
    id: "prefer_low_latency",
    content: "`PREFER_LOW_LATENCY`"
  }, {
    id: "prefer_quality",
    content: "`PREFER_QUALITY`"
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
  url: "#prefer_compression_auto",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PREFER_COMPRESSION_AUTO"
    })
  })
}, {
  depth: 3,
  url: "#prefer_low_latency",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PREFER_LOW_LATENCY"
    })
  })
}, {
  depth: 3,
  url: "#prefer_quality",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PREFER_QUALITY"
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
      id: "enum_compressionpreference__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "prefer_compression_auto",
      children: _jsx(_components.code, {
        children: "PREFER_COMPRESSION_AUTO"
      })
    }), `
`, _jsx(_components.p, {
      children: "（-1）：（默认）自动模式。SDK 会根据设置的视频场景自动选择 PREFER_LOW_LATENCY 或 PREFER_QUALITY，以实现最佳用户体验。"
    }), `
`, _jsx(_components.h3, {
      id: "prefer_low_latency",
      children: _jsx(_components.code, {
        children: "PREFER_LOW_LATENCY"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：低延迟优先。SDK 会压缩视频帧以降低延迟，适用于对流畅性要求较高且可接受视频质量降低的场景。"
    }), `
`, _jsx(_components.h3, {
      id: "prefer_quality",
      children: _jsx(_components.code, {
        children: "PREFER_QUALITY"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：高质量优先。SDK 会在保持视频质量的同时压缩视频帧，适用于对视频质量要求较高的场景。"
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
