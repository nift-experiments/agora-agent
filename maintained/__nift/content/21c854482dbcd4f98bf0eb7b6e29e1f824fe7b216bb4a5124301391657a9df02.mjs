import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "MEDIA_TRACE_EVENT",
  description: "媒体帧的渲染状态。"
};
export let _markdown = `

<a id="enum_mediatraceevent__parameters" />

## 枚举值 [#枚举值]

### \`MEDIA_TRACE_EVENT_VIDEO_RENDERED\` [#media_trace_event_video_rendered]

（0）：视频帧已渲染。

### \`MEDIA_TRACE_EVENT_VIDEO_DECODED\` [#media_trace_event_video_decoded]

（1）：视频帧已解码。
`;
export let structuredData = {
  contents: [{
    heading: "media_trace_event_video_rendered",
    content: "（0）：视频帧已渲染。"
  }, {
    heading: "media_trace_event_video_decoded",
    content: "（1）：视频帧已解码。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "media_trace_event_video_rendered",
    content: "`MEDIA_TRACE_EVENT_VIDEO_RENDERED`"
  }, {
    id: "media_trace_event_video_decoded",
    content: "`MEDIA_TRACE_EVENT_VIDEO_DECODED`"
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
  url: "#media_trace_event_video_rendered",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MEDIA_TRACE_EVENT_VIDEO_RENDERED"
    })
  })
}, {
  depth: 3,
  url: "#media_trace_event_video_decoded",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MEDIA_TRACE_EVENT_VIDEO_DECODED"
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
      id: "enum_mediatraceevent__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "media_trace_event_video_rendered",
      children: _jsx(_components.code, {
        children: "MEDIA_TRACE_EVENT_VIDEO_RENDERED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：视频帧已渲染。"
    }), `
`, _jsx(_components.h3, {
      id: "media_trace_event_video_decoded",
      children: _jsx(_components.code, {
        children: "MEDIA_TRACE_EVENT_VIDEO_DECODED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：视频帧已解码。"
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
