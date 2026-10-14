import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "ExternalVideoSourceType",
  description: "外部视频帧的编码类型。"
};
export let _markdown = `

<a id="enum_externalvideosourcetype__parameters" />

## 枚举值 [#枚举值]

### \`VIDEO_FRAME\` [#video_frame]

（0）：未编码的视频帧。

### \`ENCODED_VIDEO_FRAME\` [#encoded_video_frame]

（1）：已编码的视频帧。
`;
export let structuredData = {
  contents: [{
    heading: "video_frame",
    content: "（0）：未编码的视频帧。"
  }, {
    heading: "encoded_video_frame",
    content: "（1）：已编码的视频帧。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "video_frame",
    content: "`VIDEO_FRAME`"
  }, {
    id: "encoded_video_frame",
    content: "`ENCODED_VIDEO_FRAME`"
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
  url: "#video_frame",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "VIDEO_FRAME"
    })
  })
}, {
  depth: 3,
  url: "#encoded_video_frame",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ENCODED_VIDEO_FRAME"
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
      id: "enum_externalvideosourcetype__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "video_frame",
      children: _jsx(_components.code, {
        children: "VIDEO_FRAME"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：未编码的视频帧。"
    }), `
`, _jsx(_components.h3, {
      id: "encoded_video_frame",
      children: _jsx(_components.code, {
        children: "ENCODED_VIDEO_FRAME"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：已编码的视频帧。"
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
