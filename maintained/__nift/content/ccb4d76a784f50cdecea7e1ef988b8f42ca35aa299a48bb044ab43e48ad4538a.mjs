import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "LastmileProbeResult",
  description: "表示上下行 Last-mile 网络探测的结果。"
};
export let _markdown = `

<a id="class_lastmileproberesult__prototype" />

\`\`\`java
public static class LastmileProbeResult {
  public static class LastmileProbeOneWayResult {
    public int packetLossRate;
    public int jitter;
    public int availableBandwidth;
  }
  public short state;
  public int rtt;
  public LastmileProbeOneWayResult uplinkReport = new LastmileProbeOneWayResult();
  public LastmileProbeOneWayResult downlinkReport = new LastmileProbeOneWayResult();
}
\`\`\`

<a id="class_lastmileproberesult__parameters" />

## 属性 [#属性]

### \`state\` [#state]

Last-mile 网络探测的状态，包括：

* LASTMILE\\_PROBE\\_RESULT\\_COMPLETE (1)：探测完成。
* LASTMILE\\_PROBE\\_RESULT\\_INCOMPLETE\\_NO\\_BWE (2)：探测未完成，因未进行带宽预测，可能是测试资源暂时受限。
* LASTMILE\\_PROBE\\_RESULT\\_UNAVAILABLE (3)：未进行探测，可能由于网络状况较差。

### \`rtt\` [#rtt]

往返时延，单位为毫秒。

### \`uplinkReport\` [#uplinkreport]

上行 Last-mile 网络探测结果，详见 [LastmileProbeOneWayResult](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-lastmileprobeonewayresult)。

### \`downlinkReport\` [#downlinkreport]

下行 Last-mile 网络探测结果，详见 [LastmileProbeOneWayResult](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-lastmileprobeonewayresult)。
`;
export let structuredData = {
  contents: [{
    heading: "state",
    content: "Last-mile 网络探测的状态，包括："
  }, {
    heading: "state",
    content: "LASTMILE\\_PROBE\\_RESULT\\_COMPLETE (1)：探测完成。"
  }, {
    heading: "state",
    content: "LASTMILE\\_PROBE\\_RESULT\\_INCOMPLETE\\_NO\\_BWE (2)：探测未完成，因未进行带宽预测，可能是测试资源暂时受限。"
  }, {
    heading: "state",
    content: "LASTMILE\\_PROBE\\_RESULT\\_UNAVAILABLE (3)：未进行探测，可能由于网络状况较差。"
  }, {
    heading: "rtt",
    content: "往返时延，单位为毫秒。"
  }, {
    heading: "uplinkreport",
    content: "上行 Last-mile 网络探测结果，详见 LastmileProbeOneWayResult。"
  }, {
    heading: "downlinkreport",
    content: "下行 Last-mile 网络探测结果，详见 LastmileProbeOneWayResult。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "state",
    content: "`state`"
  }, {
    id: "rtt",
    content: "`rtt`"
  }, {
    id: "uplinkreport",
    content: "`uplinkReport`"
  }, {
    id: "downlinkreport",
    content: "`downlinkReport`"
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
  url: "#state",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "state"
    })
  })
}, {
  depth: 3,
  url: "#rtt",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rtt"
    })
  })
}, {
  depth: 3,
  url: "#uplinkreport",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uplinkReport"
    })
  })
}, {
  depth: 3,
  url: "#downlinkreport",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "downlinkReport"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_lastmileproberesult__prototype"
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
              children: " LastmileProbeResult"
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
              children: "    public"
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
              children: "    public"
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
              children: "    public"
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
              children: "  }"
            })
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
              children: " short"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " state;"
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
              children: " rtt;"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " LastmileProbeOneWayResult uplinkReport "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " new"
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
              children: "();"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " LastmileProbeOneWayResult downlinkReport "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " new"
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
              children: "();"
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
      id: "class_lastmileproberesult__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "state",
      children: _jsx(_components.code, {
        children: "state"
      })
    }), `
`, _jsx(_components.p, {
      children: "Last-mile 网络探测的状态，包括："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "LASTMILE_PROBE_RESULT_COMPLETE (1)：探测完成。"
      }), `
`, _jsx(_components.li, {
        children: "LASTMILE_PROBE_RESULT_INCOMPLETE_NO_BWE (2)：探测未完成，因未进行带宽预测，可能是测试资源暂时受限。"
      }), `
`, _jsx(_components.li, {
        children: "LASTMILE_PROBE_RESULT_UNAVAILABLE (3)：未进行探测，可能由于网络状况较差。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "rtt",
      children: _jsx(_components.code, {
        children: "rtt"
      })
    }), `
`, _jsx(_components.p, {
      children: "往返时延，单位为毫秒。"
    }), `
`, _jsx(_components.h3, {
      id: "uplinkreport",
      children: _jsx(_components.code, {
        children: "uplinkReport"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["上行 Last-mile 网络探测结果，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-lastmileprobeonewayresult",
        children: "LastmileProbeOneWayResult"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "downlinkreport",
      children: _jsx(_components.code, {
        children: "downlinkReport"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["下行 Last-mile 网络探测结果，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-lastmileprobeonewayresult",
        children: "LastmileProbeOneWayResult"
      }), "。"]
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
