import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "VIDEO_CODEC_TYPE",
  description: "视频编解码器类型。"
};
export let _markdown = `

<a id="enum_videocodectype__parameters" />

## 枚举值 [#枚举值]

### \`VIDEO_CODEC_NONE\` [#video_codec_none]

（0）：（默认）未指定的编解码器格式。SDK 会根据当前视频流的分辨率和设备性能自动匹配合适的编解码器格式。

### \`VIDEO_CODEC_VP8\` [#video_codec_vp8]

（1）：标准 VP8 编解码器。

### \`VIDEO_CODEC_H264\` [#video_codec_h264]

（2）：标准 H.264 编解码器。

### \`VIDEO_CODEC_H265\` [#video_codec_h265]

（3）：标准 H.265 编解码器。

### \`VIDEO_CODEC_GENERIC\` [#video_codec_generic]

（6）：通用类型。用于传输原始视频数据，例如加密的视频帧。SDK 会在回调中返回此类型的视频帧，需由用户自行解码和渲染。

### \`VIDEO_CODEC_VP9\` [#video_codec_vp9]

（13）：VP9 编解码器。

### \`VIDEO_CODEC_GENERIC_JPEG\` [#video_codec_generic_jpeg]

（20）：通用 JPEG 编解码器。该类型占用的计算资源最少，适用于 IoT 设备。
`;
export let structuredData = {
  contents: [{
    heading: "video_codec_none",
    content: "（0）：（默认）未指定的编解码器格式。SDK 会根据当前视频流的分辨率和设备性能自动匹配合适的编解码器格式。"
  }, {
    heading: "video_codec_vp8",
    content: "（1）：标准 VP8 编解码器。"
  }, {
    heading: "video_codec_h264",
    content: "（2）：标准 H.264 编解码器。"
  }, {
    heading: "video_codec_h265",
    content: "（3）：标准 H.265 编解码器。"
  }, {
    heading: "video_codec_generic",
    content: "（6）：通用类型。用于传输原始视频数据，例如加密的视频帧。SDK 会在回调中返回此类型的视频帧，需由用户自行解码和渲染。"
  }, {
    heading: "video_codec_vp9",
    content: "（13）：VP9 编解码器。"
  }, {
    heading: "video_codec_generic_jpeg",
    content: "（20）：通用 JPEG 编解码器。该类型占用的计算资源最少，适用于 IoT 设备。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "video_codec_none",
    content: "`VIDEO_CODEC_NONE`"
  }, {
    id: "video_codec_vp8",
    content: "`VIDEO_CODEC_VP8`"
  }, {
    id: "video_codec_h264",
    content: "`VIDEO_CODEC_H264`"
  }, {
    id: "video_codec_h265",
    content: "`VIDEO_CODEC_H265`"
  }, {
    id: "video_codec_generic",
    content: "`VIDEO_CODEC_GENERIC`"
  }, {
    id: "video_codec_vp9",
    content: "`VIDEO_CODEC_VP9`"
  }, {
    id: "video_codec_generic_jpeg",
    content: "`VIDEO_CODEC_GENERIC_JPEG`"
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
  url: "#video_codec_none",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "VIDEO_CODEC_NONE"
    })
  })
}, {
  depth: 3,
  url: "#video_codec_vp8",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "VIDEO_CODEC_VP8"
    })
  })
}, {
  depth: 3,
  url: "#video_codec_h264",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "VIDEO_CODEC_H264"
    })
  })
}, {
  depth: 3,
  url: "#video_codec_h265",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "VIDEO_CODEC_H265"
    })
  })
}, {
  depth: 3,
  url: "#video_codec_generic",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "VIDEO_CODEC_GENERIC"
    })
  })
}, {
  depth: 3,
  url: "#video_codec_vp9",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "VIDEO_CODEC_VP9"
    })
  })
}, {
  depth: 3,
  url: "#video_codec_generic_jpeg",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "VIDEO_CODEC_GENERIC_JPEG"
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
      id: "enum_videocodectype__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "video_codec_none",
      children: _jsx(_components.code, {
        children: "VIDEO_CODEC_NONE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：（默认）未指定的编解码器格式。SDK 会根据当前视频流的分辨率和设备性能自动匹配合适的编解码器格式。"
    }), `
`, _jsx(_components.h3, {
      id: "video_codec_vp8",
      children: _jsx(_components.code, {
        children: "VIDEO_CODEC_VP8"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：标准 VP8 编解码器。"
    }), `
`, _jsx(_components.h3, {
      id: "video_codec_h264",
      children: _jsx(_components.code, {
        children: "VIDEO_CODEC_H264"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：标准 H.264 编解码器。"
    }), `
`, _jsx(_components.h3, {
      id: "video_codec_h265",
      children: _jsx(_components.code, {
        children: "VIDEO_CODEC_H265"
      })
    }), `
`, _jsx(_components.p, {
      children: "（3）：标准 H.265 编解码器。"
    }), `
`, _jsx(_components.h3, {
      id: "video_codec_generic",
      children: _jsx(_components.code, {
        children: "VIDEO_CODEC_GENERIC"
      })
    }), `
`, _jsx(_components.p, {
      children: "（6）：通用类型。用于传输原始视频数据，例如加密的视频帧。SDK 会在回调中返回此类型的视频帧，需由用户自行解码和渲染。"
    }), `
`, _jsx(_components.h3, {
      id: "video_codec_vp9",
      children: _jsx(_components.code, {
        children: "VIDEO_CODEC_VP9"
      })
    }), `
`, _jsx(_components.p, {
      children: "（13）：VP9 编解码器。"
    }), `
`, _jsx(_components.h3, {
      id: "video_codec_generic_jpeg",
      children: _jsx(_components.code, {
        children: "VIDEO_CODEC_GENERIC_JPEG"
      })
    }), `
`, _jsx(_components.p, {
      children: "（20）：通用 JPEG 编解码器。该类型占用的计算资源最少，适用于 IoT 设备。"
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
