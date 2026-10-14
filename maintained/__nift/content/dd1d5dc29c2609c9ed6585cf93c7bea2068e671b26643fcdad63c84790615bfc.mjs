import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "StreamFallbackOptions",
  description: "网络较差时的音视频流回退处理选项。"
};
export let _markdown = `

<a id="enum_streamfallbackoptions__parameters" />

## 枚举值 [#枚举值]

### \`STREAM_FALLBACK_OPTION_DISABLED\` [#stream_fallback_option_disabled]

（0）：不进行音视频流回退处理，无法保证音视频质量。

### \`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW\` [#stream_fallback_option_video_stream_low]

（1）：仅接收低质量（低分辨率、低码率）的视频流。

### \`STREAM_FALLBACK_OPTION_AUDIO_ONLY\` [#stream_fallback_option_audio_only]

（2）：当网络较差时，优先接收视频小流；若网络极差导致无法显示视频，则回退为仅接收音频流。

### \`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_1\` [#stream_fallback_option_video_stream_layer_1]

（3）：当网络较差且存在多质量层级视频流时，接收来自 \`VIDEO_STREAM_LAYER_1\` 的视频流。

### \`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_2\` [#stream_fallback_option_video_stream_layer_2]

（4）：当网络较差且存在多质量层级视频流时，接收来自 \`VIDEO_STREAM_LAYER_2\` 的视频流。

### \`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_3\` [#stream_fallback_option_video_stream_layer_3]

（5）：当网络较差且存在多质量层级视频流时，接收来自 \`VIDEO_STREAM_LAYER_3\` 的视频流。

### \`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_4\` [#stream_fallback_option_video_stream_layer_4]

（6）：当网络较差且存在多质量层级视频流时，接收来自 \`VIDEO_STREAM_LAYER_4\` 的视频流。

### \`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_5\` [#stream_fallback_option_video_stream_layer_5]

（7）：当网络较差且存在多质量层级视频流时，接收来自 \`VIDEO_STREAM_LAYER_5\` 的视频流。

### \`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_6\` [#stream_fallback_option_video_stream_layer_6]

（8）：当网络较差且存在多质量层级视频流时，接收来自 \`VIDEO_STREAM_LAYER_6\` 的视频流。
`;
export let structuredData = {
  contents: [{
    heading: "stream_fallback_option_disabled",
    content: "（0）：不进行音视频流回退处理，无法保证音视频质量。"
  }, {
    heading: "stream_fallback_option_video_stream_low",
    content: "（1）：仅接收低质量（低分辨率、低码率）的视频流。"
  }, {
    heading: "stream_fallback_option_audio_only",
    content: "（2）：当网络较差时，优先接收视频小流；若网络极差导致无法显示视频，则回退为仅接收音频流。"
  }, {
    heading: "stream_fallback_option_video_stream_layer_1",
    content: "（3）：当网络较差且存在多质量层级视频流时，接收来自 `VIDEO_STREAM_LAYER_1` 的视频流。"
  }, {
    heading: "stream_fallback_option_video_stream_layer_2",
    content: "（4）：当网络较差且存在多质量层级视频流时，接收来自 `VIDEO_STREAM_LAYER_2` 的视频流。"
  }, {
    heading: "stream_fallback_option_video_stream_layer_3",
    content: "（5）：当网络较差且存在多质量层级视频流时，接收来自 `VIDEO_STREAM_LAYER_3` 的视频流。"
  }, {
    heading: "stream_fallback_option_video_stream_layer_4",
    content: "（6）：当网络较差且存在多质量层级视频流时，接收来自 `VIDEO_STREAM_LAYER_4` 的视频流。"
  }, {
    heading: "stream_fallback_option_video_stream_layer_5",
    content: "（7）：当网络较差且存在多质量层级视频流时，接收来自 `VIDEO_STREAM_LAYER_5` 的视频流。"
  }, {
    heading: "stream_fallback_option_video_stream_layer_6",
    content: "（8）：当网络较差且存在多质量层级视频流时，接收来自 `VIDEO_STREAM_LAYER_6` 的视频流。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "stream_fallback_option_disabled",
    content: "`STREAM_FALLBACK_OPTION_DISABLED`"
  }, {
    id: "stream_fallback_option_video_stream_low",
    content: "`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW`"
  }, {
    id: "stream_fallback_option_audio_only",
    content: "`STREAM_FALLBACK_OPTION_AUDIO_ONLY`"
  }, {
    id: "stream_fallback_option_video_stream_layer_1",
    content: "`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_1`"
  }, {
    id: "stream_fallback_option_video_stream_layer_2",
    content: "`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_2`"
  }, {
    id: "stream_fallback_option_video_stream_layer_3",
    content: "`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_3`"
  }, {
    id: "stream_fallback_option_video_stream_layer_4",
    content: "`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_4`"
  }, {
    id: "stream_fallback_option_video_stream_layer_5",
    content: "`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_5`"
  }, {
    id: "stream_fallback_option_video_stream_layer_6",
    content: "`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_6`"
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
  url: "#stream_fallback_option_disabled",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "STREAM_FALLBACK_OPTION_DISABLED"
    })
  })
}, {
  depth: 3,
  url: "#stream_fallback_option_video_stream_low",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW"
    })
  })
}, {
  depth: 3,
  url: "#stream_fallback_option_audio_only",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "STREAM_FALLBACK_OPTION_AUDIO_ONLY"
    })
  })
}, {
  depth: 3,
  url: "#stream_fallback_option_video_stream_layer_1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_1"
    })
  })
}, {
  depth: 3,
  url: "#stream_fallback_option_video_stream_layer_2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_2"
    })
  })
}, {
  depth: 3,
  url: "#stream_fallback_option_video_stream_layer_3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_3"
    })
  })
}, {
  depth: 3,
  url: "#stream_fallback_option_video_stream_layer_4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_4"
    })
  })
}, {
  depth: 3,
  url: "#stream_fallback_option_video_stream_layer_5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_5"
    })
  })
}, {
  depth: 3,
  url: "#stream_fallback_option_video_stream_layer_6",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_6"
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
      id: "enum_streamfallbackoptions__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "stream_fallback_option_disabled",
      children: _jsx(_components.code, {
        children: "STREAM_FALLBACK_OPTION_DISABLED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：不进行音视频流回退处理，无法保证音视频质量。"
    }), `
`, _jsx(_components.h3, {
      id: "stream_fallback_option_video_stream_low",
      children: _jsx(_components.code, {
        children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：仅接收低质量（低分辨率、低码率）的视频流。"
    }), `
`, _jsx(_components.h3, {
      id: "stream_fallback_option_audio_only",
      children: _jsx(_components.code, {
        children: "STREAM_FALLBACK_OPTION_AUDIO_ONLY"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：当网络较差时，优先接收视频小流；若网络极差导致无法显示视频，则回退为仅接收音频流。"
    }), `
`, _jsx(_components.h3, {
      id: "stream_fallback_option_video_stream_layer_1",
      children: _jsx(_components.code, {
        children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_1"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（3）：当网络较差且存在多质量层级视频流时，接收来自 ", _jsx(_components.code, {
        children: "VIDEO_STREAM_LAYER_1"
      }), " 的视频流。"]
    }), `
`, _jsx(_components.h3, {
      id: "stream_fallback_option_video_stream_layer_2",
      children: _jsx(_components.code, {
        children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_2"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（4）：当网络较差且存在多质量层级视频流时，接收来自 ", _jsx(_components.code, {
        children: "VIDEO_STREAM_LAYER_2"
      }), " 的视频流。"]
    }), `
`, _jsx(_components.h3, {
      id: "stream_fallback_option_video_stream_layer_3",
      children: _jsx(_components.code, {
        children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_3"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（5）：当网络较差且存在多质量层级视频流时，接收来自 ", _jsx(_components.code, {
        children: "VIDEO_STREAM_LAYER_3"
      }), " 的视频流。"]
    }), `
`, _jsx(_components.h3, {
      id: "stream_fallback_option_video_stream_layer_4",
      children: _jsx(_components.code, {
        children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_4"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（6）：当网络较差且存在多质量层级视频流时，接收来自 ", _jsx(_components.code, {
        children: "VIDEO_STREAM_LAYER_4"
      }), " 的视频流。"]
    }), `
`, _jsx(_components.h3, {
      id: "stream_fallback_option_video_stream_layer_5",
      children: _jsx(_components.code, {
        children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_5"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（7）：当网络较差且存在多质量层级视频流时，接收来自 ", _jsx(_components.code, {
        children: "VIDEO_STREAM_LAYER_5"
      }), " 的视频流。"]
    }), `
`, _jsx(_components.h3, {
      id: "stream_fallback_option_video_stream_layer_6",
      children: _jsx(_components.code, {
        children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_6"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（8）：当网络较差且存在多质量层级视频流时，接收来自 ", _jsx(_components.code, {
        children: "VIDEO_STREAM_LAYER_6"
      }), " 的视频流。"]
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
