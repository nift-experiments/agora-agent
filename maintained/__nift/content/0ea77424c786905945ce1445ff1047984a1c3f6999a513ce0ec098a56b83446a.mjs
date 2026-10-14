import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "MultipathType",
  description: "多路径传输使用的网络路径类型。"
};
export let _markdown = `

<a id="enum_multipathtype__detailed_desc" />

### \`自从\` [#自从]

自 v4.6.0 版本新增。

<a id="enum_multipathtype__parameters" />

## 枚举值 [#枚举值]

### \`MULTIPATH_TYPE_LAN\` [#multipath_type_lan]

（0）：局域网类型，表示数据通过局域网传输，适用于高速、低延迟的连接。

### \`MULTIPATH_TYPE_WIFI\` [#multipath_type_wifi]

（1）：Wi-Fi 类型，表示数据通过 Wi-Fi 网络传输，适用于无线连接且延迟适中的场景。

### \`MULTIPATH_TYPE_MOBILE\` [#multipath_type_mobile]

（2）：移动网络类型，表示数据通过移动网络传输，适用于延迟较高且连接不稳定的场景。

### \`MULTIPATH_TYPE_UNKNOWN\` [#multipath_type_unknown]

（99）：未知类型，表示未识别的路径类型，可用于错误处理或回退场景。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "multipath_type_lan",
    content: "（0）：局域网类型，表示数据通过局域网传输，适用于高速、低延迟的连接。"
  }, {
    heading: "multipath_type_wifi",
    content: "（1）：Wi-Fi 类型，表示数据通过 Wi-Fi 网络传输，适用于无线连接且延迟适中的场景。"
  }, {
    heading: "multipath_type_mobile",
    content: "（2）：移动网络类型，表示数据通过移动网络传输，适用于延迟较高且连接不稳定的场景。"
  }, {
    heading: "multipath_type_unknown",
    content: "（99）：未知类型，表示未识别的路径类型，可用于错误处理或回退场景。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "multipath_type_lan",
    content: "`MULTIPATH_TYPE_LAN`"
  }, {
    id: "multipath_type_wifi",
    content: "`MULTIPATH_TYPE_WIFI`"
  }, {
    id: "multipath_type_mobile",
    content: "`MULTIPATH_TYPE_MOBILE`"
  }, {
    id: "multipath_type_unknown",
    content: "`MULTIPATH_TYPE_UNKNOWN`"
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
  url: "#multipath_type_lan",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MULTIPATH_TYPE_LAN"
    })
  })
}, {
  depth: 3,
  url: "#multipath_type_wifi",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MULTIPATH_TYPE_WIFI"
    })
  })
}, {
  depth: 3,
  url: "#multipath_type_mobile",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MULTIPATH_TYPE_MOBILE"
    })
  })
}, {
  depth: 3,
  url: "#multipath_type_unknown",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MULTIPATH_TYPE_UNKNOWN"
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
      id: "enum_multipathtype__detailed_desc"
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
      id: "enum_multipathtype__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "multipath_type_lan",
      children: _jsx(_components.code, {
        children: "MULTIPATH_TYPE_LAN"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：局域网类型，表示数据通过局域网传输，适用于高速、低延迟的连接。"
    }), `
`, _jsx(_components.h3, {
      id: "multipath_type_wifi",
      children: _jsx(_components.code, {
        children: "MULTIPATH_TYPE_WIFI"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：Wi-Fi 类型，表示数据通过 Wi-Fi 网络传输，适用于无线连接且延迟适中的场景。"
    }), `
`, _jsx(_components.h3, {
      id: "multipath_type_mobile",
      children: _jsx(_components.code, {
        children: "MULTIPATH_TYPE_MOBILE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：移动网络类型，表示数据通过移动网络传输，适用于延迟较高且连接不稳定的场景。"
    }), `
`, _jsx(_components.h3, {
      id: "multipath_type_unknown",
      children: _jsx(_components.code, {
        children: "MULTIPATH_TYPE_UNKNOWN"
      })
    }), `
`, _jsx(_components.p, {
      children: "（99）：未知类型，表示未识别的路径类型，可用于错误处理或回退场景。"
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
