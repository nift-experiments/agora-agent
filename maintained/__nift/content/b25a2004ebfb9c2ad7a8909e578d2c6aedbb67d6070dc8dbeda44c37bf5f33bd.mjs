import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "LastmileProbeConfig",
  description: "用于配置 Last-mile 网络测试。"
};
export let _markdown = `

<a id="class_lastmileprobeconfig__prototype" />

\`\`\`java
public class LastmileProbeConfig {
  public boolean probeUplink;
  public boolean probeDownlink;
  public int expectedUplinkBitrate;
  public int expectedDownlinkBitrate;
}
\`\`\`

<a id="class_lastmileprobeconfig__parameters" />

## 属性 [#属性]

### \`probeUplink\` [#probeuplink]

是否测试上行网络。

* true：测试上行网络。
* false：不测试上行网络。例如，在 LIVE\\_BROADCASTING 频道场景中，观众通常无需测试上行网络。

### \`probeDownlink\` [#probedownlink]

是否测试下行网络。

* true：测试下行网络。
* false：不测试下行网络。

### \`expectedUplinkBitrate\` [#expecteduplinkbitrate]

本地用户期望的最大上行码率（bps）。取值范围为 \\[100000, 5000000]。建议参考 [setVideoEncoderConfiguration](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_setvideoencoderconfiguration) 设置该值。

### \`expectedDownlinkBitrate\` [#expecteddownlinkbitrate]

本地用户期望的最大下行码率（bps）。取值范围为 \\[100000, 5000000]。
`;
export let structuredData = {
  contents: [{
    heading: "probeuplink",
    content: "是否测试上行网络。"
  }, {
    heading: "probeuplink",
    content: "true：测试上行网络。"
  }, {
    heading: "probeuplink",
    content: "false：不测试上行网络。例如，在 LIVE\\_BROADCASTING 频道场景中，观众通常无需测试上行网络。"
  }, {
    heading: "probedownlink",
    content: "是否测试下行网络。"
  }, {
    heading: "probedownlink",
    content: "true：测试下行网络。"
  }, {
    heading: "probedownlink",
    content: "false：不测试下行网络。"
  }, {
    heading: "expecteduplinkbitrate",
    content: "本地用户期望的最大上行码率（bps）。取值范围为 \\[100000, 5000000]。建议参考 setVideoEncoderConfiguration 设置该值。"
  }, {
    heading: "expecteddownlinkbitrate",
    content: "本地用户期望的最大下行码率（bps）。取值范围为 \\[100000, 5000000]。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "probeuplink",
    content: "`probeUplink`"
  }, {
    id: "probedownlink",
    content: "`probeDownlink`"
  }, {
    id: "expecteduplinkbitrate",
    content: "`expectedUplinkBitrate`"
  }, {
    id: "expecteddownlinkbitrate",
    content: "`expectedDownlinkBitrate`"
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
  url: "#probeuplink",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "probeUplink"
    })
  })
}, {
  depth: 3,
  url: "#probedownlink",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "probeDownlink"
    })
  })
}, {
  depth: 3,
  url: "#expecteduplinkbitrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "expectedUplinkBitrate"
    })
  })
}, {
  depth: 3,
  url: "#expecteddownlinkbitrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "expectedDownlinkBitrate"
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
      id: "class_lastmileprobeconfig__prototype"
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
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " LastmileProbeConfig"
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
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " probeUplink;"
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
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " probeDownlink;"
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
              children: " expectedUplinkBitrate;"
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
              children: " expectedDownlinkBitrate;"
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
      id: "class_lastmileprobeconfig__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "probeuplink",
      children: _jsx(_components.code, {
        children: "probeUplink"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否测试上行网络。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：测试上行网络。"
      }), `
`, _jsx(_components.li, {
        children: "false：不测试上行网络。例如，在 LIVE_BROADCASTING 频道场景中，观众通常无需测试上行网络。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "probedownlink",
      children: _jsx(_components.code, {
        children: "probeDownlink"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否测试下行网络。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：测试下行网络。"
      }), `
`, _jsx(_components.li, {
        children: "false：不测试下行网络。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "expecteduplinkbitrate",
      children: _jsx(_components.code, {
        children: "expectedUplinkBitrate"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["本地用户期望的最大上行码率（bps）。取值范围为 [100000, 5000000]。建议参考 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_setvideoencoderconfiguration",
        children: "setVideoEncoderConfiguration"
      }), " 设置该值。"]
    }), `
`, _jsx(_components.h3, {
      id: "expecteddownlinkbitrate",
      children: _jsx(_components.code, {
        children: "expectedDownlinkBitrate"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地用户期望的最大下行码率（bps）。取值范围为 [100000, 5000000]。"
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
