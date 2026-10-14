import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "ScreenScenarioType",
  description: "屏幕共享场景类型。"
};
export let _markdown = `

<a id="enum_screenscenariotype__parameters" />

## 枚举值 [#枚举值]

### \`SCREEN_SCENARIO_DOCUMENT\` [#screen_scenario_document]

（1）：文档场景。优先保证屏幕共享的视频质量，并降低接收端的共享视频延迟。适用于共享文档、幻灯片和表格的场景。

### \`SCREEN_SCENARIO_GAMING\` [#screen_scenario_gaming]

（2）：游戏场景。优先保证屏幕共享的流畅性。适用于共享游戏的场景。

### \`SCREEN_SCENARIO_VIDEO\` [#screen_scenario_video]

（3）：视频场景。优先保证屏幕共享的流畅性。适用于共享电影或直播视频的场景。
`;
export let structuredData = {
  contents: [{
    heading: "screen_scenario_document",
    content: "（1）：文档场景。优先保证屏幕共享的视频质量，并降低接收端的共享视频延迟。适用于共享文档、幻灯片和表格的场景。"
  }, {
    heading: "screen_scenario_gaming",
    content: "（2）：游戏场景。优先保证屏幕共享的流畅性。适用于共享游戏的场景。"
  }, {
    heading: "screen_scenario_video",
    content: "（3）：视频场景。优先保证屏幕共享的流畅性。适用于共享电影或直播视频的场景。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "screen_scenario_document",
    content: "`SCREEN_SCENARIO_DOCUMENT`"
  }, {
    id: "screen_scenario_gaming",
    content: "`SCREEN_SCENARIO_GAMING`"
  }, {
    id: "screen_scenario_video",
    content: "`SCREEN_SCENARIO_VIDEO`"
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
  url: "#screen_scenario_document",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "SCREEN_SCENARIO_DOCUMENT"
    })
  })
}, {
  depth: 3,
  url: "#screen_scenario_gaming",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "SCREEN_SCENARIO_GAMING"
    })
  })
}, {
  depth: 3,
  url: "#screen_scenario_video",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "SCREEN_SCENARIO_VIDEO"
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
      id: "enum_screenscenariotype__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "screen_scenario_document",
      children: _jsx(_components.code, {
        children: "SCREEN_SCENARIO_DOCUMENT"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：文档场景。优先保证屏幕共享的视频质量，并降低接收端的共享视频延迟。适用于共享文档、幻灯片和表格的场景。"
    }), `
`, _jsx(_components.h3, {
      id: "screen_scenario_gaming",
      children: _jsx(_components.code, {
        children: "SCREEN_SCENARIO_GAMING"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：游戏场景。优先保证屏幕共享的流畅性。适用于共享游戏的场景。"
    }), `
`, _jsx(_components.h3, {
      id: "screen_scenario_video",
      children: _jsx(_components.code, {
        children: "SCREEN_SCENARIO_VIDEO"
      })
    }), `
`, _jsx(_components.p, {
      children: "（3）：视频场景。优先保证屏幕共享的流畅性。适用于共享电影或直播视频的场景。"
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
