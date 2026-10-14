import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "MediaPlayerState",
  description: "播放状态。"
};
export let _markdown = `

<a id="enum_mediaplayerstate__parameters" />

## 枚举值 [#枚举值]

### \`PLAYER_STATE_UNKNOWN\` [#player_state_unknown]

（-1）：播放器状态未知。

### \`PLAYER_STATE_IDLE\` [#player_state_idle]

（0）：默认状态。打开媒体资源前或停止播放后，播放器处于该状态。

### \`PLAYER_STATE_OPENING\` [#player_state_opening]

（1）：正在打开媒体资源。

### \`PLAYER_STATE_OPEN_COMPLETED\` [#player_state_open_completed]

（2）：媒体资源打开成功。

### \`PLAYER_STATE_PLAYING\` [#player_state_playing]

（3）：正在播放媒体资源。

### \`PLAYER_STATE_PAUSED\` [#player_state_paused]

（4）：播放已暂停。

### \`PLAYER_STATE_PLAYBACK_COMPLETED\` [#player_state_playback_completed]

（5）：播放已完成。

### \`PLAYER_STATE_PLAYBACK_ALL_LOOPS_COMPLETED\` [#player_state_playback_all_loops_completed]

（6）：循环播放已完成。

### \`PLAYER_STATE_STOPPED\` [#player_state_stopped]

（7）：播放已停止。

### \`PLAYER_STATE_FAILED\` [#player_state_failed]

（100）：播放媒体资源失败。
`;
export let structuredData = {
  contents: [{
    heading: "player_state_unknown",
    content: "（-1）：播放器状态未知。"
  }, {
    heading: "player_state_idle",
    content: "（0）：默认状态。打开媒体资源前或停止播放后，播放器处于该状态。"
  }, {
    heading: "player_state_opening",
    content: "（1）：正在打开媒体资源。"
  }, {
    heading: "player_state_open_completed",
    content: "（2）：媒体资源打开成功。"
  }, {
    heading: "player_state_playing",
    content: "（3）：正在播放媒体资源。"
  }, {
    heading: "player_state_paused",
    content: "（4）：播放已暂停。"
  }, {
    heading: "player_state_playback_completed",
    content: "（5）：播放已完成。"
  }, {
    heading: "player_state_playback_all_loops_completed",
    content: "（6）：循环播放已完成。"
  }, {
    heading: "player_state_stopped",
    content: "（7）：播放已停止。"
  }, {
    heading: "player_state_failed",
    content: "（100）：播放媒体资源失败。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "player_state_unknown",
    content: "`PLAYER_STATE_UNKNOWN`"
  }, {
    id: "player_state_idle",
    content: "`PLAYER_STATE_IDLE`"
  }, {
    id: "player_state_opening",
    content: "`PLAYER_STATE_OPENING`"
  }, {
    id: "player_state_open_completed",
    content: "`PLAYER_STATE_OPEN_COMPLETED`"
  }, {
    id: "player_state_playing",
    content: "`PLAYER_STATE_PLAYING`"
  }, {
    id: "player_state_paused",
    content: "`PLAYER_STATE_PAUSED`"
  }, {
    id: "player_state_playback_completed",
    content: "`PLAYER_STATE_PLAYBACK_COMPLETED`"
  }, {
    id: "player_state_playback_all_loops_completed",
    content: "`PLAYER_STATE_PLAYBACK_ALL_LOOPS_COMPLETED`"
  }, {
    id: "player_state_stopped",
    content: "`PLAYER_STATE_STOPPED`"
  }, {
    id: "player_state_failed",
    content: "`PLAYER_STATE_FAILED`"
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
  url: "#player_state_unknown",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_STATE_UNKNOWN"
    })
  })
}, {
  depth: 3,
  url: "#player_state_idle",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_STATE_IDLE"
    })
  })
}, {
  depth: 3,
  url: "#player_state_opening",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_STATE_OPENING"
    })
  })
}, {
  depth: 3,
  url: "#player_state_open_completed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_STATE_OPEN_COMPLETED"
    })
  })
}, {
  depth: 3,
  url: "#player_state_playing",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_STATE_PLAYING"
    })
  })
}, {
  depth: 3,
  url: "#player_state_paused",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_STATE_PAUSED"
    })
  })
}, {
  depth: 3,
  url: "#player_state_playback_completed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_STATE_PLAYBACK_COMPLETED"
    })
  })
}, {
  depth: 3,
  url: "#player_state_playback_all_loops_completed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_STATE_PLAYBACK_ALL_LOOPS_COMPLETED"
    })
  })
}, {
  depth: 3,
  url: "#player_state_stopped",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_STATE_STOPPED"
    })
  })
}, {
  depth: 3,
  url: "#player_state_failed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_STATE_FAILED"
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
      id: "enum_mediaplayerstate__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "player_state_unknown",
      children: _jsx(_components.code, {
        children: "PLAYER_STATE_UNKNOWN"
      })
    }), `
`, _jsx(_components.p, {
      children: "（-1）：播放器状态未知。"
    }), `
`, _jsx(_components.h3, {
      id: "player_state_idle",
      children: _jsx(_components.code, {
        children: "PLAYER_STATE_IDLE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：默认状态。打开媒体资源前或停止播放后，播放器处于该状态。"
    }), `
`, _jsx(_components.h3, {
      id: "player_state_opening",
      children: _jsx(_components.code, {
        children: "PLAYER_STATE_OPENING"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：正在打开媒体资源。"
    }), `
`, _jsx(_components.h3, {
      id: "player_state_open_completed",
      children: _jsx(_components.code, {
        children: "PLAYER_STATE_OPEN_COMPLETED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：媒体资源打开成功。"
    }), `
`, _jsx(_components.h3, {
      id: "player_state_playing",
      children: _jsx(_components.code, {
        children: "PLAYER_STATE_PLAYING"
      })
    }), `
`, _jsx(_components.p, {
      children: "（3）：正在播放媒体资源。"
    }), `
`, _jsx(_components.h3, {
      id: "player_state_paused",
      children: _jsx(_components.code, {
        children: "PLAYER_STATE_PAUSED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（4）：播放已暂停。"
    }), `
`, _jsx(_components.h3, {
      id: "player_state_playback_completed",
      children: _jsx(_components.code, {
        children: "PLAYER_STATE_PLAYBACK_COMPLETED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（5）：播放已完成。"
    }), `
`, _jsx(_components.h3, {
      id: "player_state_playback_all_loops_completed",
      children: _jsx(_components.code, {
        children: "PLAYER_STATE_PLAYBACK_ALL_LOOPS_COMPLETED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（6）：循环播放已完成。"
    }), `
`, _jsx(_components.h3, {
      id: "player_state_stopped",
      children: _jsx(_components.code, {
        children: "PLAYER_STATE_STOPPED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（7）：播放已停止。"
    }), `
`, _jsx(_components.h3, {
      id: "player_state_failed",
      children: _jsx(_components.code, {
        children: "PLAYER_STATE_FAILED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（100）：播放媒体资源失败。"
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
