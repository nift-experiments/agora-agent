import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "MediaPlayerEvent",
  description: "媒体播放器事件。"
};
export let _markdown = `

<a id="enum_mediaplayerevent__parameters" />

## 枚举值 [#枚举值]

### \`PLAYER_EVENT_UNKNOWN\` [#player_event_unknown]

（-1）：未知事件。

### \`PLAYER_EVENT_SEEK_BEGIN\` [#player_event_seek_begin]

（0）：开始跳转到新的播放位置。

### \`PLAYER_EVENT_SEEK_COMPLETE\` [#player_event_seek_complete]

（1）：完成跳转到新的播放位置。

### \`PLAYER_EVENT_SEEK_ERROR\` [#player_event_seek_error]

（2）：跳转到新的播放位置时发生错误。

### \`PLAYER_EVENT_AUDIO_TRACK_CHANGED\` [#player_event_audio_track_changed]

（5）：音轨已更改。

### \`PLAYER_EVENT_BUFFER_LOW\` [#player_event_buffer_low]

（6）：缓冲数据不足，无法支持播放。

### \`PLAYER_EVENT_BUFFER_RECOVER\` [#player_event_buffer_recover]

（7）：缓冲数据刚好足以支持播放。

### \`PLAYER_EVENT_FREEZE_START\` [#player_event_freeze_start]

（8）：播放卡顿。

### \`PLAYER_EVENT_FREEZE_STOP\` [#player_event_freeze_stop]

（9）：播放恢复流畅。

### \`PLAYER_EVENT_SWITCH_BEGIN\` [#player_event_switch_begin]

（10）：开始切换媒体资源。

### \`PLAYER_EVENT_SWITCH_COMPLETE\` [#player_event_switch_complete]

（11）：媒体资源切换完成。

### \`PLAYER_EVENT_SWITCH_ERROR\` [#player_event_switch_error]

（12）：媒体资源切换失败。

### \`PLAYER_EVENT_FIRST_DISPLAYED\` [#player_event_first_displayed]

（13）：首帧视频已渲染。

### \`PLAYER_EVENT_REACH_CACHE_FILE_MAX_COUNT\` [#player_event_reach_cache_file_max_count]

（14）：缓存的媒体文件数量达到上限。

### \`PLAYER_EVENT_REACH_CACHE_FILE_MAX_SIZE\` [#player_event_reach_cache_file_max_size]

（15）：缓存的媒体文件总大小达到上限。

### \`PLAYER_EVENT_TRY_OPEN_START\` [#player_event_try_open_start]

（16）：开始重试打开媒体。

### \`PLAYER_EVENT_TRY_OPEN_SUCCEED\` [#player_event_try_open_succeed]

（17）：重试打开媒体成功。

### \`PLAYER_EVENT_TRY_OPEN_FAILED\` [#player_event_try_open_failed]

（18）：重试打开媒体失败。
`;
export let structuredData = {
  contents: [{
    heading: "player_event_unknown",
    content: "（-1）：未知事件。"
  }, {
    heading: "player_event_seek_begin",
    content: "（0）：开始跳转到新的播放位置。"
  }, {
    heading: "player_event_seek_complete",
    content: "（1）：完成跳转到新的播放位置。"
  }, {
    heading: "player_event_seek_error",
    content: "（2）：跳转到新的播放位置时发生错误。"
  }, {
    heading: "player_event_audio_track_changed",
    content: "（5）：音轨已更改。"
  }, {
    heading: "player_event_buffer_low",
    content: "（6）：缓冲数据不足，无法支持播放。"
  }, {
    heading: "player_event_buffer_recover",
    content: "（7）：缓冲数据刚好足以支持播放。"
  }, {
    heading: "player_event_freeze_start",
    content: "（8）：播放卡顿。"
  }, {
    heading: "player_event_freeze_stop",
    content: "（9）：播放恢复流畅。"
  }, {
    heading: "player_event_switch_begin",
    content: "（10）：开始切换媒体资源。"
  }, {
    heading: "player_event_switch_complete",
    content: "（11）：媒体资源切换完成。"
  }, {
    heading: "player_event_switch_error",
    content: "（12）：媒体资源切换失败。"
  }, {
    heading: "player_event_first_displayed",
    content: "（13）：首帧视频已渲染。"
  }, {
    heading: "player_event_reach_cache_file_max_count",
    content: "（14）：缓存的媒体文件数量达到上限。"
  }, {
    heading: "player_event_reach_cache_file_max_size",
    content: "（15）：缓存的媒体文件总大小达到上限。"
  }, {
    heading: "player_event_try_open_start",
    content: "（16）：开始重试打开媒体。"
  }, {
    heading: "player_event_try_open_succeed",
    content: "（17）：重试打开媒体成功。"
  }, {
    heading: "player_event_try_open_failed",
    content: "（18）：重试打开媒体失败。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "player_event_unknown",
    content: "`PLAYER_EVENT_UNKNOWN`"
  }, {
    id: "player_event_seek_begin",
    content: "`PLAYER_EVENT_SEEK_BEGIN`"
  }, {
    id: "player_event_seek_complete",
    content: "`PLAYER_EVENT_SEEK_COMPLETE`"
  }, {
    id: "player_event_seek_error",
    content: "`PLAYER_EVENT_SEEK_ERROR`"
  }, {
    id: "player_event_audio_track_changed",
    content: "`PLAYER_EVENT_AUDIO_TRACK_CHANGED`"
  }, {
    id: "player_event_buffer_low",
    content: "`PLAYER_EVENT_BUFFER_LOW`"
  }, {
    id: "player_event_buffer_recover",
    content: "`PLAYER_EVENT_BUFFER_RECOVER`"
  }, {
    id: "player_event_freeze_start",
    content: "`PLAYER_EVENT_FREEZE_START`"
  }, {
    id: "player_event_freeze_stop",
    content: "`PLAYER_EVENT_FREEZE_STOP`"
  }, {
    id: "player_event_switch_begin",
    content: "`PLAYER_EVENT_SWITCH_BEGIN`"
  }, {
    id: "player_event_switch_complete",
    content: "`PLAYER_EVENT_SWITCH_COMPLETE`"
  }, {
    id: "player_event_switch_error",
    content: "`PLAYER_EVENT_SWITCH_ERROR`"
  }, {
    id: "player_event_first_displayed",
    content: "`PLAYER_EVENT_FIRST_DISPLAYED`"
  }, {
    id: "player_event_reach_cache_file_max_count",
    content: "`PLAYER_EVENT_REACH_CACHE_FILE_MAX_COUNT`"
  }, {
    id: "player_event_reach_cache_file_max_size",
    content: "`PLAYER_EVENT_REACH_CACHE_FILE_MAX_SIZE`"
  }, {
    id: "player_event_try_open_start",
    content: "`PLAYER_EVENT_TRY_OPEN_START`"
  }, {
    id: "player_event_try_open_succeed",
    content: "`PLAYER_EVENT_TRY_OPEN_SUCCEED`"
  }, {
    id: "player_event_try_open_failed",
    content: "`PLAYER_EVENT_TRY_OPEN_FAILED`"
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
  url: "#player_event_unknown",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_EVENT_UNKNOWN"
    })
  })
}, {
  depth: 3,
  url: "#player_event_seek_begin",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_EVENT_SEEK_BEGIN"
    })
  })
}, {
  depth: 3,
  url: "#player_event_seek_complete",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_EVENT_SEEK_COMPLETE"
    })
  })
}, {
  depth: 3,
  url: "#player_event_seek_error",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_EVENT_SEEK_ERROR"
    })
  })
}, {
  depth: 3,
  url: "#player_event_audio_track_changed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_EVENT_AUDIO_TRACK_CHANGED"
    })
  })
}, {
  depth: 3,
  url: "#player_event_buffer_low",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_EVENT_BUFFER_LOW"
    })
  })
}, {
  depth: 3,
  url: "#player_event_buffer_recover",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_EVENT_BUFFER_RECOVER"
    })
  })
}, {
  depth: 3,
  url: "#player_event_freeze_start",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_EVENT_FREEZE_START"
    })
  })
}, {
  depth: 3,
  url: "#player_event_freeze_stop",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_EVENT_FREEZE_STOP"
    })
  })
}, {
  depth: 3,
  url: "#player_event_switch_begin",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_EVENT_SWITCH_BEGIN"
    })
  })
}, {
  depth: 3,
  url: "#player_event_switch_complete",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_EVENT_SWITCH_COMPLETE"
    })
  })
}, {
  depth: 3,
  url: "#player_event_switch_error",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_EVENT_SWITCH_ERROR"
    })
  })
}, {
  depth: 3,
  url: "#player_event_first_displayed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_EVENT_FIRST_DISPLAYED"
    })
  })
}, {
  depth: 3,
  url: "#player_event_reach_cache_file_max_count",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_EVENT_REACH_CACHE_FILE_MAX_COUNT"
    })
  })
}, {
  depth: 3,
  url: "#player_event_reach_cache_file_max_size",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_EVENT_REACH_CACHE_FILE_MAX_SIZE"
    })
  })
}, {
  depth: 3,
  url: "#player_event_try_open_start",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_EVENT_TRY_OPEN_START"
    })
  })
}, {
  depth: 3,
  url: "#player_event_try_open_succeed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_EVENT_TRY_OPEN_SUCCEED"
    })
  })
}, {
  depth: 3,
  url: "#player_event_try_open_failed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_EVENT_TRY_OPEN_FAILED"
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
      id: "enum_mediaplayerevent__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "player_event_unknown",
      children: _jsx(_components.code, {
        children: "PLAYER_EVENT_UNKNOWN"
      })
    }), `
`, _jsx(_components.p, {
      children: "（-1）：未知事件。"
    }), `
`, _jsx(_components.h3, {
      id: "player_event_seek_begin",
      children: _jsx(_components.code, {
        children: "PLAYER_EVENT_SEEK_BEGIN"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：开始跳转到新的播放位置。"
    }), `
`, _jsx(_components.h3, {
      id: "player_event_seek_complete",
      children: _jsx(_components.code, {
        children: "PLAYER_EVENT_SEEK_COMPLETE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：完成跳转到新的播放位置。"
    }), `
`, _jsx(_components.h3, {
      id: "player_event_seek_error",
      children: _jsx(_components.code, {
        children: "PLAYER_EVENT_SEEK_ERROR"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：跳转到新的播放位置时发生错误。"
    }), `
`, _jsx(_components.h3, {
      id: "player_event_audio_track_changed",
      children: _jsx(_components.code, {
        children: "PLAYER_EVENT_AUDIO_TRACK_CHANGED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（5）：音轨已更改。"
    }), `
`, _jsx(_components.h3, {
      id: "player_event_buffer_low",
      children: _jsx(_components.code, {
        children: "PLAYER_EVENT_BUFFER_LOW"
      })
    }), `
`, _jsx(_components.p, {
      children: "（6）：缓冲数据不足，无法支持播放。"
    }), `
`, _jsx(_components.h3, {
      id: "player_event_buffer_recover",
      children: _jsx(_components.code, {
        children: "PLAYER_EVENT_BUFFER_RECOVER"
      })
    }), `
`, _jsx(_components.p, {
      children: "（7）：缓冲数据刚好足以支持播放。"
    }), `
`, _jsx(_components.h3, {
      id: "player_event_freeze_start",
      children: _jsx(_components.code, {
        children: "PLAYER_EVENT_FREEZE_START"
      })
    }), `
`, _jsx(_components.p, {
      children: "（8）：播放卡顿。"
    }), `
`, _jsx(_components.h3, {
      id: "player_event_freeze_stop",
      children: _jsx(_components.code, {
        children: "PLAYER_EVENT_FREEZE_STOP"
      })
    }), `
`, _jsx(_components.p, {
      children: "（9）：播放恢复流畅。"
    }), `
`, _jsx(_components.h3, {
      id: "player_event_switch_begin",
      children: _jsx(_components.code, {
        children: "PLAYER_EVENT_SWITCH_BEGIN"
      })
    }), `
`, _jsx(_components.p, {
      children: "（10）：开始切换媒体资源。"
    }), `
`, _jsx(_components.h3, {
      id: "player_event_switch_complete",
      children: _jsx(_components.code, {
        children: "PLAYER_EVENT_SWITCH_COMPLETE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（11）：媒体资源切换完成。"
    }), `
`, _jsx(_components.h3, {
      id: "player_event_switch_error",
      children: _jsx(_components.code, {
        children: "PLAYER_EVENT_SWITCH_ERROR"
      })
    }), `
`, _jsx(_components.p, {
      children: "（12）：媒体资源切换失败。"
    }), `
`, _jsx(_components.h3, {
      id: "player_event_first_displayed",
      children: _jsx(_components.code, {
        children: "PLAYER_EVENT_FIRST_DISPLAYED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（13）：首帧视频已渲染。"
    }), `
`, _jsx(_components.h3, {
      id: "player_event_reach_cache_file_max_count",
      children: _jsx(_components.code, {
        children: "PLAYER_EVENT_REACH_CACHE_FILE_MAX_COUNT"
      })
    }), `
`, _jsx(_components.p, {
      children: "（14）：缓存的媒体文件数量达到上限。"
    }), `
`, _jsx(_components.h3, {
      id: "player_event_reach_cache_file_max_size",
      children: _jsx(_components.code, {
        children: "PLAYER_EVENT_REACH_CACHE_FILE_MAX_SIZE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（15）：缓存的媒体文件总大小达到上限。"
    }), `
`, _jsx(_components.h3, {
      id: "player_event_try_open_start",
      children: _jsx(_components.code, {
        children: "PLAYER_EVENT_TRY_OPEN_START"
      })
    }), `
`, _jsx(_components.p, {
      children: "（16）：开始重试打开媒体。"
    }), `
`, _jsx(_components.h3, {
      id: "player_event_try_open_succeed",
      children: _jsx(_components.code, {
        children: "PLAYER_EVENT_TRY_OPEN_SUCCEED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（17）：重试打开媒体成功。"
    }), `
`, _jsx(_components.h3, {
      id: "player_event_try_open_failed",
      children: _jsx(_components.code, {
        children: "PLAYER_EVENT_TRY_OPEN_FAILED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（18）：重试打开媒体失败。"
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
