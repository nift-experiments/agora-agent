import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "VIDEO_EFFECT_NODE_ID",
  description: "视频特效节点类型。"
};
export let _markdown = `

<a id="enum_videoeffectnodeid__detailed_desc" />

### \`自从\` [#自从]

自 v4.6.0 版本新增。

<a id="enum_videoeffectnodeid__parameters" />

## 枚举值 [#枚举值]

### \`BEAUTY\` [#beauty]

（1）：美颜特效节点。

### \`STYLE_MAKEUP\` [#style_makeup]

（2）：风格妆特效节点。

### \`FILTER\` [#filter]

（4）：滤镜特效节点。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "beauty",
    content: "（1）：美颜特效节点。"
  }, {
    heading: "style_makeup",
    content: "（2）：风格妆特效节点。"
  }, {
    heading: "filter",
    content: "（4）：滤镜特效节点。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "beauty",
    content: "`BEAUTY`"
  }, {
    id: "style_makeup",
    content: "`STYLE_MAKEUP`"
  }, {
    id: "filter",
    content: "`FILTER`"
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
  url: "#beauty",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "BEAUTY"
    })
  })
}, {
  depth: 3,
  url: "#style_makeup",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "STYLE_MAKEUP"
    })
  })
}, {
  depth: 3,
  url: "#filter",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "FILTER"
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
      id: "enum_videoeffectnodeid__detailed_desc"
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
      id: "enum_videoeffectnodeid__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "beauty",
      children: _jsx(_components.code, {
        children: "BEAUTY"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：美颜特效节点。"
    }), `
`, _jsx(_components.h3, {
      id: "style_makeup",
      children: _jsx(_components.code, {
        children: "STYLE_MAKEUP"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：风格妆特效节点。"
    }), `
`, _jsx(_components.h3, {
      id: "filter",
      children: _jsx(_components.code, {
        children: "FILTER"
      })
    }), `
`, _jsx(_components.p, {
      children: "（4）：滤镜特效节点。"
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
