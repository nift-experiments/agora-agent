import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "VideoMirrorMode",
  description: "视频镜像模式。"
};
export let _markdown = `

<a id="enum_rtevideomirrormode__detailed_desc" />

### \`自从\` [#自从]

自 v4.4.0 版本新增。

<a id="enum_rtevideomirrormode__parameters" />

## 枚举值 [#枚举值]

### \`AUTO\` [#auto]

（0）：由 SDK 决定是否开启镜像模式。

* 本地视频视图镜像模式：使用前置摄像头时，默认开启；使用后置摄像头时，默认关闭。
* 远端用户视图镜像模式：默认关闭。

### \`ENABLED\` [#enabled]

（1）：开启镜像模式。

### \`DISABLED\` [#disabled]

（2）：关闭镜像模式。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "auto",
    content: "（0）：由 SDK 决定是否开启镜像模式。"
  }, {
    heading: "auto",
    content: "本地视频视图镜像模式：使用前置摄像头时，默认开启；使用后置摄像头时，默认关闭。"
  }, {
    heading: "auto",
    content: "远端用户视图镜像模式：默认关闭。"
  }, {
    heading: "enabled",
    content: "（1）：开启镜像模式。"
  }, {
    heading: "disabled",
    content: "（2）：关闭镜像模式。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "auto",
    content: "`AUTO`"
  }, {
    id: "enabled",
    content: "`ENABLED`"
  }, {
    id: "disabled",
    content: "`DISABLED`"
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
  url: "#auto",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AUTO"
    })
  })
}, {
  depth: 3,
  url: "#enabled",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ENABLED"
    })
  })
}, {
  depth: 3,
  url: "#disabled",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "DISABLED"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "enum_rtevideomirrormode__detailed_desc"
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
      id: "enum_rtevideomirrormode__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "auto",
      children: _jsx(_components.code, {
        children: "AUTO"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：由 SDK 决定是否开启镜像模式。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "本地视频视图镜像模式：使用前置摄像头时，默认开启；使用后置摄像头时，默认关闭。"
      }), `
`, _jsx(_components.li, {
        children: "远端用户视图镜像模式：默认关闭。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "enabled",
      children: _jsx(_components.code, {
        children: "ENABLED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：开启镜像模式。"
    }), `
`, _jsx(_components.h3, {
      id: "disabled",
      children: _jsx(_components.code, {
        children: "DISABLED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：关闭镜像模式。"
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
