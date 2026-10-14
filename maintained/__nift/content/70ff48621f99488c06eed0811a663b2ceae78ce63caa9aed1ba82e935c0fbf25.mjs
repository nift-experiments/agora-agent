import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "MediaPlayerPreloadEvent",
  description: "媒体资源预加载过程中的事件。"
};
export let _markdown = `

<a id="enum_playerpreloadevent__parameters" />

## 枚举值 [#枚举值]

### \`PLAYER_PRELOAD_EVENT_BEGIN\` [#player_preload_event_begin]

（0）：开始预加载媒体资源。

### \`PLAYER_PRELOAD_EVENT_COMPLETE\` [#player_preload_event_complete]

（1）：媒体资源预加载完成。

### \`PLAYER_PRELOAD_EVENT_ERROR\` [#player_preload_event_error]

（2）：预加载媒体资源时发生错误。
`;
export let structuredData = {
  contents: [{
    heading: "player_preload_event_begin",
    content: "（0）：开始预加载媒体资源。"
  }, {
    heading: "player_preload_event_complete",
    content: "（1）：媒体资源预加载完成。"
  }, {
    heading: "player_preload_event_error",
    content: "（2）：预加载媒体资源时发生错误。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "player_preload_event_begin",
    content: "`PLAYER_PRELOAD_EVENT_BEGIN`"
  }, {
    id: "player_preload_event_complete",
    content: "`PLAYER_PRELOAD_EVENT_COMPLETE`"
  }, {
    id: "player_preload_event_error",
    content: "`PLAYER_PRELOAD_EVENT_ERROR`"
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
  url: "#player_preload_event_begin",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_PRELOAD_EVENT_BEGIN"
    })
  })
}, {
  depth: 3,
  url: "#player_preload_event_complete",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_PRELOAD_EVENT_COMPLETE"
    })
  })
}, {
  depth: 3,
  url: "#player_preload_event_error",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_PRELOAD_EVENT_ERROR"
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
      id: "enum_playerpreloadevent__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "player_preload_event_begin",
      children: _jsx(_components.code, {
        children: "PLAYER_PRELOAD_EVENT_BEGIN"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：开始预加载媒体资源。"
    }), `
`, _jsx(_components.h3, {
      id: "player_preload_event_complete",
      children: _jsx(_components.code, {
        children: "PLAYER_PRELOAD_EVENT_COMPLETE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：媒体资源预加载完成。"
    }), `
`, _jsx(_components.h3, {
      id: "player_preload_event_error",
      children: _jsx(_components.code, {
        children: "PLAYER_PRELOAD_EVENT_ERROR"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：预加载媒体资源时发生错误。"
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
