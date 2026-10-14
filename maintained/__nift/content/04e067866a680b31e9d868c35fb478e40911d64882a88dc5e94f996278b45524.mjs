import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "PreloadState",
  description: "PreloadState 表示音乐资源的加载状态。"
};
export let _markdown = `

<a id="class_preloadstate_android__prototype" />

\`\`\`java
class PreloadState {
    public static final int PRELOAD_STATE_COMPLETED = 0;
    public static final int PRELOAD_STATE_FAILED = 1;
    public static final int PRELOAD_STATE_PRELOADING = 2;
    public static final int PRELOAD_STATE_REMOVED = 3;
  }
\`\`\`

<a id="class_preloadstate_android__parameters" />

## 属性 [#属性]

### \`PRELOAD_STATE_COMPLETED\` [#preload_state_completed]

0：音乐资源加载完成。

### \`PRELOAD_STATE_FAILED\` [#preload_state_failed]

1：音乐资源加载失败。

### \`PRELOAD_STATE_PRELOADING\` [#preload_state_preloading]

2：音乐资源加载中。

### \`PRELOAD_STATE_REMOVED\` [#preload_state_removed]

3：已移除缓存的音乐资源。
`;
export let structuredData = {
  contents: [{
    heading: "preload_state_completed",
    content: "0：音乐资源加载完成。"
  }, {
    heading: "preload_state_failed",
    content: "1：音乐资源加载失败。"
  }, {
    heading: "preload_state_preloading",
    content: "2：音乐资源加载中。"
  }, {
    heading: "preload_state_removed",
    content: "3：已移除缓存的音乐资源。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "preload_state_completed",
    content: "`PRELOAD_STATE_COMPLETED`"
  }, {
    id: "preload_state_failed",
    content: "`PRELOAD_STATE_FAILED`"
  }, {
    id: "preload_state_preloading",
    content: "`PRELOAD_STATE_PRELOADING`"
  }, {
    id: "preload_state_removed",
    content: "`PRELOAD_STATE_REMOVED`"
  }]
};
export let toc = [{
  depth: 2,
  url: "#属性",
  title: _jsx(_Fragment, {
    children: "属性"
  })
}, {
  depth: 3,
  url: "#preload_state_completed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PRELOAD_STATE_COMPLETED"
    })
  })
}, {
  depth: 3,
  url: "#preload_state_failed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PRELOAD_STATE_FAILED"
    })
  })
}, {
  depth: 3,
  url: "#preload_state_preloading",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PRELOAD_STATE_PRELOADING"
    })
  })
}, {
  depth: 3,
  url: "#preload_state_removed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PRELOAD_STATE_REMOVED"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_preloadstate_android__prototype"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " PreloadState"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " final"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " PRELOAD_STATE_COMPLETED "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " final"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " PRELOAD_STATE_FAILED "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " final"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " PRELOAD_STATE_PRELOADING "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 2"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " final"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " PRELOAD_STATE_REMOVED "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 3"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  }"
            })
          })]
        })
      })
    }), `
`, _jsx("a", {
      id: "class_preloadstate_android__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "preload_state_completed",
      children: _jsx(_components.code, {
        children: "PRELOAD_STATE_COMPLETED"
      })
    }), `
`, _jsx(_components.p, {
      children: "0：音乐资源加载完成。"
    }), `
`, _jsx(_components.h3, {
      id: "preload_state_failed",
      children: _jsx(_components.code, {
        children: "PRELOAD_STATE_FAILED"
      })
    }), `
`, _jsx(_components.p, {
      children: "1：音乐资源加载失败。"
    }), `
`, _jsx(_components.h3, {
      id: "preload_state_preloading",
      children: _jsx(_components.code, {
        children: "PRELOAD_STATE_PRELOADING"
      })
    }), `
`, _jsx(_components.p, {
      children: "2：音乐资源加载中。"
    }), `
`, _jsx(_components.h3, {
      id: "preload_state_removed",
      children: _jsx(_components.code, {
        children: "PRELOAD_STATE_REMOVED"
      })
    }), `
`, _jsx(_components.p, {
      children: "3：已移除缓存的音乐资源。"
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
