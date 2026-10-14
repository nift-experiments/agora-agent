import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "LastmileProbeOneWayResult",
  description: "上行或下行 Last-mile 网络测试结果。"
};
export let _markdown = `

<a id="class_lastmileprobeonewayresult__prototype" />

\`\`\`java
public static class LastmileProbeOneWayResult {
  public int packetLossRate;
  public int jitter;
  public int availableBandwidth;
}
\`\`\`

<a id="class_lastmileprobeonewayresult__parameters" />

## 属性 [#属性]

### \`packetLossRate\` [#packetlossrate]

丢包率（%）。

### \`jitter\` [#jitter]

网络抖动（毫秒）。

### \`availableBandwidth\` [#availablebandwidth]

预估的可用带宽（bps）。
`;
export let structuredData = {
  contents: [{
    heading: "packetlossrate",
    content: "丢包率（%）。"
  }, {
    heading: "jitter",
    content: "网络抖动（毫秒）。"
  }, {
    heading: "availablebandwidth",
    content: "预估的可用带宽（bps）。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "packetlossrate",
    content: "`packetLossRate`"
  }, {
    id: "jitter",
    content: "`jitter`"
  }, {
    id: "availablebandwidth",
    content: "`availableBandwidth`"
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
  url: "#packetlossrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "packetLossRate"
    })
  })
}, {
  depth: 3,
  url: "#jitter",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "jitter"
    })
  })
}, {
  depth: 3,
  url: "#availablebandwidth",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "availableBandwidth"
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
      id: "class_lastmileprobeonewayresult__prototype"
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
              children: "public"
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
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " LastmileProbeOneWayResult"
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
              children: "  public"
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
              children: " packetLossRate;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
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
              children: " jitter;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
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
              children: " availableBandwidth;"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx("a", {
      id: "class_lastmileprobeonewayresult__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "packetlossrate",
      children: _jsx(_components.code, {
        children: "packetLossRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "丢包率（%）。"
    }), `
`, _jsx(_components.h3, {
      id: "jitter",
      children: _jsx(_components.code, {
        children: "jitter"
      })
    }), `
`, _jsx(_components.p, {
      children: "网络抖动（毫秒）。"
    }), `
`, _jsx(_components.h3, {
      id: "availablebandwidth",
      children: _jsx(_components.code, {
        children: "availableBandwidth"
      })
    }), `
`, _jsx(_components.p, {
      children: "预估的可用带宽（bps）。"
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
