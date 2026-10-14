import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "PlayerEvent",
  description: "媒体播放器事件类型。"
};
export let _markdown = `

<a id="enum_rteplayerevent__detailed_desc" />

### \`自从\` [#自从]

自 v4.4.0 版本新增。

<a id="enum_rteplayerevent__parameters" />

## 枚举值 [#枚举值]

### \`SEEK_BEGIN\` [#seek_begin]

（0）：开始跳转到指定播放位置。

### \`SEEK_COMPLETE\` [#seek_complete]

（1）：跳转到指定播放位置完成。

### \`SEEK_ERROR\` [#seek_error]

（2）：跳转到指定播放位置时发生错误。

### \`BUFFER_LOW\` [#buffer_low]

（3）：当前缓冲数据不足，无法支持播放。

### \`BUFFER_RECOVER\` [#buffer_recover]

（4）：当前缓冲数据刚好足以支持播放。

### \`FREEZE_START\` [#freeze_start]

（5）：音频或视频发生卡顿。

### \`FREEZE_STOP\` [#freeze_stop]

（6）：音频或视频卡顿结束。

### \`ONE_LOOP_PLAYBACK_COMPLETED\` [#one_loop_playback_completed]

（7）：单次循环播放完成。

### \`AUTHENTICATION_WILL_EXPIRE\` [#authentication_will_expire]

（8）：Token 即将过期。收到该事件后，需要重新生成新的 Token，并通过 [openWithUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl) 更新 URL。

### \`ABR_FALLBACK_TO_AUDIO_ONLY_LAYER\` [#abr_fallback_to_audio_only_layer]

（9）：由于网络问题，从接收音视频流降级为仅接收远端音频流。

### \`ABR_RECOVER_FROM_AUDIO_ONLY_LAYER\` [#abr_recover_from_audio_only_layer]

（10）：网络恢复后，从仅接收远端音频流恢复为接收音视频流。

### \`SWITCH_BEGIN\` [#switch_begin]

（11）：开始切换到新 URL。

### \`SWITCH_COMPLETE\` [#switch_complete]

（12）：切换到新 URL 完成。

### \`SWITCH_ERROR\` [#switch_error]

（13）：切换到新 URL 时发生错误。

### \`FIRST_DISPLAYED\` [#first_displayed]

（14）：首帧视频已显示。

### \`REACH_CACHE_FILE_MAX_COUNT\` [#reach_cache_file_max_count]

（15）：缓存文件数量达到上限。

### \`REACH_CACHE_FILE_MAX_SIZE\` [#reach_cache_file_max_size]

（16）：缓存文件大小达到上限。

### \`TRY_OPEN_START\` [#try_open_start]

（17）：开始尝试打开新 URL。

### \`TRY_OPEN_SUCCEED\` [#try_open_succeed]

（18）：成功打开新 URL。

### \`TRY_OPEN_FAILED\` [#try_open_failed]

（19）：打开新 URL 失败。

### \`AUDIO_TRACK_CHANGED\` [#audio_track_changed]

（20）：当前音轨发生变化。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "seek_begin",
    content: "（0）：开始跳转到指定播放位置。"
  }, {
    heading: "seek_complete",
    content: "（1）：跳转到指定播放位置完成。"
  }, {
    heading: "seek_error",
    content: "（2）：跳转到指定播放位置时发生错误。"
  }, {
    heading: "buffer_low",
    content: "（3）：当前缓冲数据不足，无法支持播放。"
  }, {
    heading: "buffer_recover",
    content: "（4）：当前缓冲数据刚好足以支持播放。"
  }, {
    heading: "freeze_start",
    content: "（5）：音频或视频发生卡顿。"
  }, {
    heading: "freeze_stop",
    content: "（6）：音频或视频卡顿结束。"
  }, {
    heading: "one_loop_playback_completed",
    content: "（7）：单次循环播放完成。"
  }, {
    heading: "authentication_will_expire",
    content: "（8）：Token 即将过期。收到该事件后，需要重新生成新的 Token，并通过 openWithUrl 更新 URL。"
  }, {
    heading: "abr_fallback_to_audio_only_layer",
    content: "（9）：由于网络问题，从接收音视频流降级为仅接收远端音频流。"
  }, {
    heading: "abr_recover_from_audio_only_layer",
    content: "（10）：网络恢复后，从仅接收远端音频流恢复为接收音视频流。"
  }, {
    heading: "switch_begin",
    content: "（11）：开始切换到新 URL。"
  }, {
    heading: "switch_complete",
    content: "（12）：切换到新 URL 完成。"
  }, {
    heading: "switch_error",
    content: "（13）：切换到新 URL 时发生错误。"
  }, {
    heading: "first_displayed",
    content: "（14）：首帧视频已显示。"
  }, {
    heading: "reach_cache_file_max_count",
    content: "（15）：缓存文件数量达到上限。"
  }, {
    heading: "reach_cache_file_max_size",
    content: "（16）：缓存文件大小达到上限。"
  }, {
    heading: "try_open_start",
    content: "（17）：开始尝试打开新 URL。"
  }, {
    heading: "try_open_succeed",
    content: "（18）：成功打开新 URL。"
  }, {
    heading: "try_open_failed",
    content: "（19）：打开新 URL 失败。"
  }, {
    heading: "audio_track_changed",
    content: "（20）：当前音轨发生变化。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "seek_begin",
    content: "`SEEK_BEGIN`"
  }, {
    id: "seek_complete",
    content: "`SEEK_COMPLETE`"
  }, {
    id: "seek_error",
    content: "`SEEK_ERROR`"
  }, {
    id: "buffer_low",
    content: "`BUFFER_LOW`"
  }, {
    id: "buffer_recover",
    content: "`BUFFER_RECOVER`"
  }, {
    id: "freeze_start",
    content: "`FREEZE_START`"
  }, {
    id: "freeze_stop",
    content: "`FREEZE_STOP`"
  }, {
    id: "one_loop_playback_completed",
    content: "`ONE_LOOP_PLAYBACK_COMPLETED`"
  }, {
    id: "authentication_will_expire",
    content: "`AUTHENTICATION_WILL_EXPIRE`"
  }, {
    id: "abr_fallback_to_audio_only_layer",
    content: "`ABR_FALLBACK_TO_AUDIO_ONLY_LAYER`"
  }, {
    id: "abr_recover_from_audio_only_layer",
    content: "`ABR_RECOVER_FROM_AUDIO_ONLY_LAYER`"
  }, {
    id: "switch_begin",
    content: "`SWITCH_BEGIN`"
  }, {
    id: "switch_complete",
    content: "`SWITCH_COMPLETE`"
  }, {
    id: "switch_error",
    content: "`SWITCH_ERROR`"
  }, {
    id: "first_displayed",
    content: "`FIRST_DISPLAYED`"
  }, {
    id: "reach_cache_file_max_count",
    content: "`REACH_CACHE_FILE_MAX_COUNT`"
  }, {
    id: "reach_cache_file_max_size",
    content: "`REACH_CACHE_FILE_MAX_SIZE`"
  }, {
    id: "try_open_start",
    content: "`TRY_OPEN_START`"
  }, {
    id: "try_open_succeed",
    content: "`TRY_OPEN_SUCCEED`"
  }, {
    id: "try_open_failed",
    content: "`TRY_OPEN_FAILED`"
  }, {
    id: "audio_track_changed",
    content: "`AUDIO_TRACK_CHANGED`"
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
  url: "#seek_begin",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "SEEK_BEGIN"
    })
  })
}, {
  depth: 3,
  url: "#seek_complete",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "SEEK_COMPLETE"
    })
  })
}, {
  depth: 3,
  url: "#seek_error",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "SEEK_ERROR"
    })
  })
}, {
  depth: 3,
  url: "#buffer_low",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "BUFFER_LOW"
    })
  })
}, {
  depth: 3,
  url: "#buffer_recover",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "BUFFER_RECOVER"
    })
  })
}, {
  depth: 3,
  url: "#freeze_start",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "FREEZE_START"
    })
  })
}, {
  depth: 3,
  url: "#freeze_stop",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "FREEZE_STOP"
    })
  })
}, {
  depth: 3,
  url: "#one_loop_playback_completed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ONE_LOOP_PLAYBACK_COMPLETED"
    })
  })
}, {
  depth: 3,
  url: "#authentication_will_expire",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AUTHENTICATION_WILL_EXPIRE"
    })
  })
}, {
  depth: 3,
  url: "#abr_fallback_to_audio_only_layer",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ABR_FALLBACK_TO_AUDIO_ONLY_LAYER"
    })
  })
}, {
  depth: 3,
  url: "#abr_recover_from_audio_only_layer",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ABR_RECOVER_FROM_AUDIO_ONLY_LAYER"
    })
  })
}, {
  depth: 3,
  url: "#switch_begin",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "SWITCH_BEGIN"
    })
  })
}, {
  depth: 3,
  url: "#switch_complete",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "SWITCH_COMPLETE"
    })
  })
}, {
  depth: 3,
  url: "#switch_error",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "SWITCH_ERROR"
    })
  })
}, {
  depth: 3,
  url: "#first_displayed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "FIRST_DISPLAYED"
    })
  })
}, {
  depth: 3,
  url: "#reach_cache_file_max_count",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "REACH_CACHE_FILE_MAX_COUNT"
    })
  })
}, {
  depth: 3,
  url: "#reach_cache_file_max_size",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "REACH_CACHE_FILE_MAX_SIZE"
    })
  })
}, {
  depth: 3,
  url: "#try_open_start",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "TRY_OPEN_START"
    })
  })
}, {
  depth: 3,
  url: "#try_open_succeed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "TRY_OPEN_SUCCEED"
    })
  })
}, {
  depth: 3,
  url: "#try_open_failed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "TRY_OPEN_FAILED"
    })
  })
}, {
  depth: 3,
  url: "#audio_track_changed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AUDIO_TRACK_CHANGED"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "enum_rteplayerevent__detailed_desc"
    }), `
`, _jsx(_components.h3, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "enum_rteplayerevent__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "seek_begin",
      children: _jsx(_components.code, {
        children: "SEEK_BEGIN"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：开始跳转到指定播放位置。"
    }), `
`, _jsx(_components.h3, {
      id: "seek_complete",
      children: _jsx(_components.code, {
        children: "SEEK_COMPLETE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：跳转到指定播放位置完成。"
    }), `
`, _jsx(_components.h3, {
      id: "seek_error",
      children: _jsx(_components.code, {
        children: "SEEK_ERROR"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：跳转到指定播放位置时发生错误。"
    }), `
`, _jsx(_components.h3, {
      id: "buffer_low",
      children: _jsx(_components.code, {
        children: "BUFFER_LOW"
      })
    }), `
`, _jsx(_components.p, {
      children: "（3）：当前缓冲数据不足，无法支持播放。"
    }), `
`, _jsx(_components.h3, {
      id: "buffer_recover",
      children: _jsx(_components.code, {
        children: "BUFFER_RECOVER"
      })
    }), `
`, _jsx(_components.p, {
      children: "（4）：当前缓冲数据刚好足以支持播放。"
    }), `
`, _jsx(_components.h3, {
      id: "freeze_start",
      children: _jsx(_components.code, {
        children: "FREEZE_START"
      })
    }), `
`, _jsx(_components.p, {
      children: "（5）：音频或视频发生卡顿。"
    }), `
`, _jsx(_components.h3, {
      id: "freeze_stop",
      children: _jsx(_components.code, {
        children: "FREEZE_STOP"
      })
    }), `
`, _jsx(_components.p, {
      children: "（6）：音频或视频卡顿结束。"
    }), `
`, _jsx(_components.h3, {
      id: "one_loop_playback_completed",
      children: _jsx(_components.code, {
        children: "ONE_LOOP_PLAYBACK_COMPLETED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（7）：单次循环播放完成。"
    }), `
`, _jsx(_components.h3, {
      id: "authentication_will_expire",
      children: _jsx(_components.code, {
        children: "AUTHENTICATION_WILL_EXPIRE"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（8）：Token 即将过期。收到该事件后，需要重新生成新的 Token，并通过 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl",
        children: "openWithUrl"
      }), " 更新 URL。"]
    }), `
`, _jsx(_components.h3, {
      id: "abr_fallback_to_audio_only_layer",
      children: _jsx(_components.code, {
        children: "ABR_FALLBACK_TO_AUDIO_ONLY_LAYER"
      })
    }), `
`, _jsx(_components.p, {
      children: "（9）：由于网络问题，从接收音视频流降级为仅接收远端音频流。"
    }), `
`, _jsx(_components.h3, {
      id: "abr_recover_from_audio_only_layer",
      children: _jsx(_components.code, {
        children: "ABR_RECOVER_FROM_AUDIO_ONLY_LAYER"
      })
    }), `
`, _jsx(_components.p, {
      children: "（10）：网络恢复后，从仅接收远端音频流恢复为接收音视频流。"
    }), `
`, _jsx(_components.h3, {
      id: "switch_begin",
      children: _jsx(_components.code, {
        children: "SWITCH_BEGIN"
      })
    }), `
`, _jsx(_components.p, {
      children: "（11）：开始切换到新 URL。"
    }), `
`, _jsx(_components.h3, {
      id: "switch_complete",
      children: _jsx(_components.code, {
        children: "SWITCH_COMPLETE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（12）：切换到新 URL 完成。"
    }), `
`, _jsx(_components.h3, {
      id: "switch_error",
      children: _jsx(_components.code, {
        children: "SWITCH_ERROR"
      })
    }), `
`, _jsx(_components.p, {
      children: "（13）：切换到新 URL 时发生错误。"
    }), `
`, _jsx(_components.h3, {
      id: "first_displayed",
      children: _jsx(_components.code, {
        children: "FIRST_DISPLAYED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（14）：首帧视频已显示。"
    }), `
`, _jsx(_components.h3, {
      id: "reach_cache_file_max_count",
      children: _jsx(_components.code, {
        children: "REACH_CACHE_FILE_MAX_COUNT"
      })
    }), `
`, _jsx(_components.p, {
      children: "（15）：缓存文件数量达到上限。"
    }), `
`, _jsx(_components.h3, {
      id: "reach_cache_file_max_size",
      children: _jsx(_components.code, {
        children: "REACH_CACHE_FILE_MAX_SIZE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（16）：缓存文件大小达到上限。"
    }), `
`, _jsx(_components.h3, {
      id: "try_open_start",
      children: _jsx(_components.code, {
        children: "TRY_OPEN_START"
      })
    }), `
`, _jsx(_components.p, {
      children: "（17）：开始尝试打开新 URL。"
    }), `
`, _jsx(_components.h3, {
      id: "try_open_succeed",
      children: _jsx(_components.code, {
        children: "TRY_OPEN_SUCCEED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（18）：成功打开新 URL。"
    }), `
`, _jsx(_components.h3, {
      id: "try_open_failed",
      children: _jsx(_components.code, {
        children: "TRY_OPEN_FAILED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（19）：打开新 URL 失败。"
    }), `
`, _jsx(_components.h3, {
      id: "audio_track_changed",
      children: _jsx(_components.code, {
        children: "AUDIO_TRACK_CHANGED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（20）：当前音轨发生变化。"
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
