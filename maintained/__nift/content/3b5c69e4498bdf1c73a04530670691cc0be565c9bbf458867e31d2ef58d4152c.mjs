import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "MediaPlayerReason",
  description: "媒体播放器状态变更的原因。"
};
export let _markdown = `

<a id="enum_mediaplayerreason__parameters" />

## 枚举值 [#枚举值]

### \`PLAYER_REASON_NONE\` [#player_reason_none]

（0）：无错误。

### \`PLAYER_REASON_INVALID_ARGUMENTS\` [#player_reason_invalid_arguments]

（-1）：参数无效。

### \`PLAYER_REASON_INTERNAL\` [#player_reason_internal]

（-2）：内部错误。

### \`PLAYER_REASON_NO_RESOURCE\` [#player_reason_no_resource]

（-3）：资源不足。

### \`PLAYER_REASON_INVALID_MEDIA_SOURCE\` [#player_reason_invalid_media_source]

（-4）：媒体资源无效。

### \`PLAYER_REASON_UNKNOWN_STREAM_TYPE\` [#player_reason_unknown_stream_type]

（-5）：媒体流类型未知。

### \`PLAYER_REASON_OBJ_NOT_INITIALIZED\` [#player_reason_obj_not_initialized]

（-6）：对象未初始化。

### \`PLAYER_REASON_CODEC_NOT_SUPPORTED\` [#player_reason_codec_not_supported]

（-7）：不支持的编解码器。

### \`PLAYER_REASON_VIDEO_RENDER_FAILED\` [#player_reason_video_render_failed]

（-8）：渲染器无效。

### \`PLAYER_REASON_INVALID_STATE\` [#player_reason_invalid_state]

（-9）：播放器内部状态错误。

### \`PLAYER_REASON_URL_NOT_FOUND\` [#player_reason_url_not_found]

（-10）：找不到媒体资源的 URL。

### \`PLAYER_REASON_INVALID_CONNECTION_STATE\` [#player_reason_invalid_connection_state]

（-11）：播放器与声网服务器之间的连接状态无效。

### \`PLAY_REASON_SRC_BUFFER_UNDERFLOW\` [#play_reason_src_buffer_underflow]

（-12）：播放缓冲区不足。

### \`PLAYER_REASON_INTERRUPTED\` [#player_reason_interrupted]

（-13）：播放被中断。

### \`PLAYER_REASON_NOT_SUPPORTED\` [#player_reason_not_supported]

（-14）：SDK 不支持调用的方法。

### \`PLAYER_REASON_TOKEN_EXPIRED\` [#player_reason_token_expired]

（-15）：媒体资源的鉴权信息已过期。

### \`PLAYER_REASON_IP_EXPIRED\` [#player_reason_ip_expired]

（-16）：IP 已过期。

### \`PLAYER_REASON_UNKNOWN\` [#player_reason_unknown]

（-17）：未知错误。
`;
export let structuredData = {
  contents: [{
    heading: "player_reason_none",
    content: "（0）：无错误。"
  }, {
    heading: "player_reason_invalid_arguments",
    content: "（-1）：参数无效。"
  }, {
    heading: "player_reason_internal",
    content: "（-2）：内部错误。"
  }, {
    heading: "player_reason_no_resource",
    content: "（-3）：资源不足。"
  }, {
    heading: "player_reason_invalid_media_source",
    content: "（-4）：媒体资源无效。"
  }, {
    heading: "player_reason_unknown_stream_type",
    content: "（-5）：媒体流类型未知。"
  }, {
    heading: "player_reason_obj_not_initialized",
    content: "（-6）：对象未初始化。"
  }, {
    heading: "player_reason_codec_not_supported",
    content: "（-7）：不支持的编解码器。"
  }, {
    heading: "player_reason_video_render_failed",
    content: "（-8）：渲染器无效。"
  }, {
    heading: "player_reason_invalid_state",
    content: "（-9）：播放器内部状态错误。"
  }, {
    heading: "player_reason_url_not_found",
    content: "（-10）：找不到媒体资源的 URL。"
  }, {
    heading: "player_reason_invalid_connection_state",
    content: "（-11）：播放器与声网服务器之间的连接状态无效。"
  }, {
    heading: "play_reason_src_buffer_underflow",
    content: "（-12）：播放缓冲区不足。"
  }, {
    heading: "player_reason_interrupted",
    content: "（-13）：播放被中断。"
  }, {
    heading: "player_reason_not_supported",
    content: "（-14）：SDK 不支持调用的方法。"
  }, {
    heading: "player_reason_token_expired",
    content: "（-15）：媒体资源的鉴权信息已过期。"
  }, {
    heading: "player_reason_ip_expired",
    content: "（-16）：IP 已过期。"
  }, {
    heading: "player_reason_unknown",
    content: "（-17）：未知错误。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "player_reason_none",
    content: "`PLAYER_REASON_NONE`"
  }, {
    id: "player_reason_invalid_arguments",
    content: "`PLAYER_REASON_INVALID_ARGUMENTS`"
  }, {
    id: "player_reason_internal",
    content: "`PLAYER_REASON_INTERNAL`"
  }, {
    id: "player_reason_no_resource",
    content: "`PLAYER_REASON_NO_RESOURCE`"
  }, {
    id: "player_reason_invalid_media_source",
    content: "`PLAYER_REASON_INVALID_MEDIA_SOURCE`"
  }, {
    id: "player_reason_unknown_stream_type",
    content: "`PLAYER_REASON_UNKNOWN_STREAM_TYPE`"
  }, {
    id: "player_reason_obj_not_initialized",
    content: "`PLAYER_REASON_OBJ_NOT_INITIALIZED`"
  }, {
    id: "player_reason_codec_not_supported",
    content: "`PLAYER_REASON_CODEC_NOT_SUPPORTED`"
  }, {
    id: "player_reason_video_render_failed",
    content: "`PLAYER_REASON_VIDEO_RENDER_FAILED`"
  }, {
    id: "player_reason_invalid_state",
    content: "`PLAYER_REASON_INVALID_STATE`"
  }, {
    id: "player_reason_url_not_found",
    content: "`PLAYER_REASON_URL_NOT_FOUND`"
  }, {
    id: "player_reason_invalid_connection_state",
    content: "`PLAYER_REASON_INVALID_CONNECTION_STATE`"
  }, {
    id: "play_reason_src_buffer_underflow",
    content: "`PLAY_REASON_SRC_BUFFER_UNDERFLOW`"
  }, {
    id: "player_reason_interrupted",
    content: "`PLAYER_REASON_INTERRUPTED`"
  }, {
    id: "player_reason_not_supported",
    content: "`PLAYER_REASON_NOT_SUPPORTED`"
  }, {
    id: "player_reason_token_expired",
    content: "`PLAYER_REASON_TOKEN_EXPIRED`"
  }, {
    id: "player_reason_ip_expired",
    content: "`PLAYER_REASON_IP_EXPIRED`"
  }, {
    id: "player_reason_unknown",
    content: "`PLAYER_REASON_UNKNOWN`"
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
  url: "#player_reason_none",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_REASON_NONE"
    })
  })
}, {
  depth: 3,
  url: "#player_reason_invalid_arguments",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_REASON_INVALID_ARGUMENTS"
    })
  })
}, {
  depth: 3,
  url: "#player_reason_internal",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_REASON_INTERNAL"
    })
  })
}, {
  depth: 3,
  url: "#player_reason_no_resource",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_REASON_NO_RESOURCE"
    })
  })
}, {
  depth: 3,
  url: "#player_reason_invalid_media_source",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_REASON_INVALID_MEDIA_SOURCE"
    })
  })
}, {
  depth: 3,
  url: "#player_reason_unknown_stream_type",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_REASON_UNKNOWN_STREAM_TYPE"
    })
  })
}, {
  depth: 3,
  url: "#player_reason_obj_not_initialized",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_REASON_OBJ_NOT_INITIALIZED"
    })
  })
}, {
  depth: 3,
  url: "#player_reason_codec_not_supported",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_REASON_CODEC_NOT_SUPPORTED"
    })
  })
}, {
  depth: 3,
  url: "#player_reason_video_render_failed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_REASON_VIDEO_RENDER_FAILED"
    })
  })
}, {
  depth: 3,
  url: "#player_reason_invalid_state",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_REASON_INVALID_STATE"
    })
  })
}, {
  depth: 3,
  url: "#player_reason_url_not_found",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_REASON_URL_NOT_FOUND"
    })
  })
}, {
  depth: 3,
  url: "#player_reason_invalid_connection_state",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_REASON_INVALID_CONNECTION_STATE"
    })
  })
}, {
  depth: 3,
  url: "#play_reason_src_buffer_underflow",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAY_REASON_SRC_BUFFER_UNDERFLOW"
    })
  })
}, {
  depth: 3,
  url: "#player_reason_interrupted",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_REASON_INTERRUPTED"
    })
  })
}, {
  depth: 3,
  url: "#player_reason_not_supported",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_REASON_NOT_SUPPORTED"
    })
  })
}, {
  depth: 3,
  url: "#player_reason_token_expired",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_REASON_TOKEN_EXPIRED"
    })
  })
}, {
  depth: 3,
  url: "#player_reason_ip_expired",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_REASON_IP_EXPIRED"
    })
  })
}, {
  depth: 3,
  url: "#player_reason_unknown",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_REASON_UNKNOWN"
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
      id: "enum_mediaplayerreason__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "player_reason_none",
      children: _jsx(_components.code, {
        children: "PLAYER_REASON_NONE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：无错误。"
    }), `
`, _jsx(_components.h3, {
      id: "player_reason_invalid_arguments",
      children: _jsx(_components.code, {
        children: "PLAYER_REASON_INVALID_ARGUMENTS"
      })
    }), `
`, _jsx(_components.p, {
      children: "（-1）：参数无效。"
    }), `
`, _jsx(_components.h3, {
      id: "player_reason_internal",
      children: _jsx(_components.code, {
        children: "PLAYER_REASON_INTERNAL"
      })
    }), `
`, _jsx(_components.p, {
      children: "（-2）：内部错误。"
    }), `
`, _jsx(_components.h3, {
      id: "player_reason_no_resource",
      children: _jsx(_components.code, {
        children: "PLAYER_REASON_NO_RESOURCE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（-3）：资源不足。"
    }), `
`, _jsx(_components.h3, {
      id: "player_reason_invalid_media_source",
      children: _jsx(_components.code, {
        children: "PLAYER_REASON_INVALID_MEDIA_SOURCE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（-4）：媒体资源无效。"
    }), `
`, _jsx(_components.h3, {
      id: "player_reason_unknown_stream_type",
      children: _jsx(_components.code, {
        children: "PLAYER_REASON_UNKNOWN_STREAM_TYPE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（-5）：媒体流类型未知。"
    }), `
`, _jsx(_components.h3, {
      id: "player_reason_obj_not_initialized",
      children: _jsx(_components.code, {
        children: "PLAYER_REASON_OBJ_NOT_INITIALIZED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（-6）：对象未初始化。"
    }), `
`, _jsx(_components.h3, {
      id: "player_reason_codec_not_supported",
      children: _jsx(_components.code, {
        children: "PLAYER_REASON_CODEC_NOT_SUPPORTED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（-7）：不支持的编解码器。"
    }), `
`, _jsx(_components.h3, {
      id: "player_reason_video_render_failed",
      children: _jsx(_components.code, {
        children: "PLAYER_REASON_VIDEO_RENDER_FAILED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（-8）：渲染器无效。"
    }), `
`, _jsx(_components.h3, {
      id: "player_reason_invalid_state",
      children: _jsx(_components.code, {
        children: "PLAYER_REASON_INVALID_STATE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（-9）：播放器内部状态错误。"
    }), `
`, _jsx(_components.h3, {
      id: "player_reason_url_not_found",
      children: _jsx(_components.code, {
        children: "PLAYER_REASON_URL_NOT_FOUND"
      })
    }), `
`, _jsx(_components.p, {
      children: "（-10）：找不到媒体资源的 URL。"
    }), `
`, _jsx(_components.h3, {
      id: "player_reason_invalid_connection_state",
      children: _jsx(_components.code, {
        children: "PLAYER_REASON_INVALID_CONNECTION_STATE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（-11）：播放器与声网服务器之间的连接状态无效。"
    }), `
`, _jsx(_components.h3, {
      id: "play_reason_src_buffer_underflow",
      children: _jsx(_components.code, {
        children: "PLAY_REASON_SRC_BUFFER_UNDERFLOW"
      })
    }), `
`, _jsx(_components.p, {
      children: "（-12）：播放缓冲区不足。"
    }), `
`, _jsx(_components.h3, {
      id: "player_reason_interrupted",
      children: _jsx(_components.code, {
        children: "PLAYER_REASON_INTERRUPTED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（-13）：播放被中断。"
    }), `
`, _jsx(_components.h3, {
      id: "player_reason_not_supported",
      children: _jsx(_components.code, {
        children: "PLAYER_REASON_NOT_SUPPORTED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（-14）：SDK 不支持调用的方法。"
    }), `
`, _jsx(_components.h3, {
      id: "player_reason_token_expired",
      children: _jsx(_components.code, {
        children: "PLAYER_REASON_TOKEN_EXPIRED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（-15）：媒体资源的鉴权信息已过期。"
    }), `
`, _jsx(_components.h3, {
      id: "player_reason_ip_expired",
      children: _jsx(_components.code, {
        children: "PLAYER_REASON_IP_EXPIRED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（-16）：IP 已过期。"
    }), `
`, _jsx(_components.h3, {
      id: "player_reason_unknown",
      children: _jsx(_components.code, {
        children: "PLAYER_REASON_UNKNOWN"
      })
    }), `
`, _jsx(_components.p, {
      children: "（-17）：未知错误。"
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
