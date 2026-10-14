import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "VIDEO_EFFECT_ACTION",
  description: "对视频特效节点执行的操作类型。"
};
export let _markdown = `

<a id="enum_videoeffectaction__detailed_desc" />

### \`自从\` [#自从]

自 v4.6.0 版本新增。

<a id="enum_videoeffectaction__parameters" />

## 枚举值 [#枚举值]

### \`SAVE\` [#save]

（1）：保存当前视频特效节点的参数。

### \`RESET\` [#reset]

（2）：重置视频特效节点为默认参数。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "save",
    content: "（1）：保存当前视频特效节点的参数。"
  }, {
    heading: "reset",
    content: "（2）：重置视频特效节点为默认参数。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "save",
    content: "`SAVE`"
  }, {
    id: "reset",
    content: "`RESET`"
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
  url: "#save",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "SAVE"
    })
  })
}, {
  depth: 3,
  url: "#reset",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "RESET"
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
      id: "enum_videoeffectaction__detailed_desc"
    }), `
`, _jsx(_components.h3, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "enum_videoeffectaction__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "save",
      children: _jsx(_components.code, {
        children: "SAVE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：保存当前视频特效节点的参数。"
    }), `
`, _jsx(_components.h3, {
      id: "reset",
      children: _jsx(_components.code, {
        children: "RESET"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：重置视频特效节点为默认参数。"
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
