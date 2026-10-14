import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "MultipathMode",
  description: "多网络路径的数据传输模式。"
};
export let _markdown = `

<a id="enum_multipathmode__detailed_desc" />

### \`自从\` [#自从]

自 v4.6.0 版本新增。

<a id="enum_multipathmode__parameters" />

## 枚举值 [#枚举值]

### \`MULTIPATH_MODE_DUPLICATE\` [#multipath_mode_duplicate]

（0）：冗余发送模式，数据同时通过多条路径发送，提升传输的冗余性和可靠性。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "multipath_mode_duplicate",
    content: "（0）：冗余发送模式，数据同时通过多条路径发送，提升传输的冗余性和可靠性。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "multipath_mode_duplicate",
    content: "`MULTIPATH_MODE_DUPLICATE`"
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
  url: "#multipath_mode_duplicate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MULTIPATH_MODE_DUPLICATE"
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
      id: "enum_multipathmode__detailed_desc"
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
      id: "enum_multipathmode__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "multipath_mode_duplicate",
      children: _jsx(_components.code, {
        children: "MULTIPATH_MODE_DUPLICATE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：冗余发送模式，数据同时通过多条路径发送，提升传输的冗余性和可靠性。"
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
