import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "MediaStreamType",
  description: "媒体流类型。"
};
export let _markdown = `

<a id="enum_mediastreamtype__parameters" />

## 枚举值 [#枚举值]

### \`STREAM_TYPE_UNKNOWN\` [#stream_type_unknown]

（0）：未知类型。

### \`STREAM_TYPE_VIDEO\` [#stream_type_video]

（1）：视频流。

### \`STREAM_TYPE_AUDIO\` [#stream_type_audio]

（2）：音频流。

### \`STREAM_TYPE_SUBTITLE\` [#stream_type_subtitle]

（3）：字幕流。
`;
export let structuredData = {
  contents: [{
    heading: "stream_type_unknown",
    content: "（0）：未知类型。"
  }, {
    heading: "stream_type_video",
    content: "（1）：视频流。"
  }, {
    heading: "stream_type_audio",
    content: "（2）：音频流。"
  }, {
    heading: "stream_type_subtitle",
    content: "（3）：字幕流。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "stream_type_unknown",
    content: "`STREAM_TYPE_UNKNOWN`"
  }, {
    id: "stream_type_video",
    content: "`STREAM_TYPE_VIDEO`"
  }, {
    id: "stream_type_audio",
    content: "`STREAM_TYPE_AUDIO`"
  }, {
    id: "stream_type_subtitle",
    content: "`STREAM_TYPE_SUBTITLE`"
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
  url: "#stream_type_unknown",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "STREAM_TYPE_UNKNOWN"
    })
  })
}, {
  depth: 3,
  url: "#stream_type_video",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "STREAM_TYPE_VIDEO"
    })
  })
}, {
  depth: 3,
  url: "#stream_type_audio",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "STREAM_TYPE_AUDIO"
    })
  })
}, {
  depth: 3,
  url: "#stream_type_subtitle",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "STREAM_TYPE_SUBTITLE"
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
      id: "enum_mediastreamtype__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "stream_type_unknown",
      children: _jsx(_components.code, {
        children: "STREAM_TYPE_UNKNOWN"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：未知类型。"
    }), `
`, _jsx(_components.h3, {
      id: "stream_type_video",
      children: _jsx(_components.code, {
        children: "STREAM_TYPE_VIDEO"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：视频流。"
    }), `
`, _jsx(_components.h3, {
      id: "stream_type_audio",
      children: _jsx(_components.code, {
        children: "STREAM_TYPE_AUDIO"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：音频流。"
    }), `
`, _jsx(_components.h3, {
      id: "stream_type_subtitle",
      children: _jsx(_components.code, {
        children: "STREAM_TYPE_SUBTITLE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（3）：字幕流。"
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
