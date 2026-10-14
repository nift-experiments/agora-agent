import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "PlayerState",
  description: "媒体播放器的状态。"
};
export let _markdown = `

<a id="enum_rteplayerstate__detailed_desc" />

### \`自从\` [#自从]

自 v4.4.0 版本新增。

<a id="enum_rteplayerstate__parameters" />

## 枚举值 [#枚举值]

### \`IDLE\` [#idle]

（0）：空闲状态。

### \`OPENING\` [#opening]

（1）：正在打开 URL 资源。调用 [openWithUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl) 后会返回该状态码。

### \`OPEN_COMPLETED\` [#open_completed]

（2）：已成功打开 URL 资源。 [openWithUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl) 成功打开资源后会返回该状态码。

### \`PLAYING\` [#playing]

（3）：正在播放。

### \`PAUSED\` [#paused]

（4）：播放已暂停。成功调用 [pause](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_pause_player) 后会返回该状态码。

### \`PLAYBACK_COMPLETED\` [#playback_completed]

（5）：播放已完成。

### \`STOPPED\` [#stopped]

（6）：播放已停止。成功调用 [stop](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_stop_player) 后会返回该状态码。

### \`FAILED\` [#failed]

（7）：播放失败。发生内部错误时会返回该状态码。收到该状态后需先调用 [stop](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_stop_player)，再调用 [openWithUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl) 重新打开资源。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "idle",
    content: "（0）：空闲状态。"
  }, {
    heading: "opening",
    content: "（1）：正在打开 URL 资源。调用 openWithUrl 后会返回该状态码。"
  }, {
    heading: "open_completed",
    content: "（2）：已成功打开 URL 资源。 openWithUrl 成功打开资源后会返回该状态码。"
  }, {
    heading: "playing",
    content: "（3）：正在播放。"
  }, {
    heading: "paused",
    content: "（4）：播放已暂停。成功调用 pause 后会返回该状态码。"
  }, {
    heading: "playback_completed",
    content: "（5）：播放已完成。"
  }, {
    heading: "stopped",
    content: "（6）：播放已停止。成功调用 stop 后会返回该状态码。"
  }, {
    heading: "failed",
    content: "（7）：播放失败。发生内部错误时会返回该状态码。收到该状态后需先调用 stop，再调用 openWithUrl 重新打开资源。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "idle",
    content: "`IDLE`"
  }, {
    id: "opening",
    content: "`OPENING`"
  }, {
    id: "open_completed",
    content: "`OPEN_COMPLETED`"
  }, {
    id: "playing",
    content: "`PLAYING`"
  }, {
    id: "paused",
    content: "`PAUSED`"
  }, {
    id: "playback_completed",
    content: "`PLAYBACK_COMPLETED`"
  }, {
    id: "stopped",
    content: "`STOPPED`"
  }, {
    id: "failed",
    content: "`FAILED`"
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
  url: "#idle",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "IDLE"
    })
  })
}, {
  depth: 3,
  url: "#opening",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "OPENING"
    })
  })
}, {
  depth: 3,
  url: "#open_completed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "OPEN_COMPLETED"
    })
  })
}, {
  depth: 3,
  url: "#playing",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYING"
    })
  })
}, {
  depth: 3,
  url: "#paused",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PAUSED"
    })
  })
}, {
  depth: 3,
  url: "#playback_completed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYBACK_COMPLETED"
    })
  })
}, {
  depth: 3,
  url: "#stopped",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "STOPPED"
    })
  })
}, {
  depth: 3,
  url: "#failed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "FAILED"
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
      id: "enum_rteplayerstate__detailed_desc"
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
      id: "enum_rteplayerstate__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "idle",
      children: _jsx(_components.code, {
        children: "IDLE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：空闲状态。"
    }), `
`, _jsx(_components.h3, {
      id: "opening",
      children: _jsx(_components.code, {
        children: "OPENING"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（1）：正在打开 URL 资源。调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl",
        children: "openWithUrl"
      }), " 后会返回该状态码。"]
    }), `
`, _jsx(_components.h3, {
      id: "open_completed",
      children: _jsx(_components.code, {
        children: "OPEN_COMPLETED"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（2）：已成功打开 URL 资源。 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl",
        children: "openWithUrl"
      }), " 成功打开资源后会返回该状态码。"]
    }), `
`, _jsx(_components.h3, {
      id: "playing",
      children: _jsx(_components.code, {
        children: "PLAYING"
      })
    }), `
`, _jsx(_components.p, {
      children: "（3）：正在播放。"
    }), `
`, _jsx(_components.h3, {
      id: "paused",
      children: _jsx(_components.code, {
        children: "PAUSED"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（4）：播放已暂停。成功调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_pause_player",
        children: "pause"
      }), " 后会返回该状态码。"]
    }), `
`, _jsx(_components.h3, {
      id: "playback_completed",
      children: _jsx(_components.code, {
        children: "PLAYBACK_COMPLETED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（5）：播放已完成。"
    }), `
`, _jsx(_components.h3, {
      id: "stopped",
      children: _jsx(_components.code, {
        children: "STOPPED"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（6）：播放已停止。成功调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_stop_player",
        children: "stop"
      }), " 后会返回该状态码。"]
    }), `
`, _jsx(_components.h3, {
      id: "failed",
      children: _jsx(_components.code, {
        children: "FAILED"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（7）：播放失败。发生内部错误时会返回该状态码。收到该状态后需先调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_stop_player",
        children: "stop"
      }), "，再调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl",
        children: "openWithUrl"
      }), " 重新打开资源。"]
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
