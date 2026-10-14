import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AudioTrackConfig",
  description: "用于配置自定义音频轨道。"
};
export let _markdown = `

<a id="class_audiotrackconfig__prototype" />

\`\`\`java
public class AudioTrackConfig {
  public boolean enableLocalPlayback;
  public boolean enableAudioProcessing;
}
\`\`\`

<a id="class_audiotrackconfig__parameters" />

## 属性 [#属性]

### \`enableLocalPlayback\` [#enablelocalplayback]

是否启用本地音频播放设备：

* true：（默认）启用本地音频播放设备。
* false：不启用本地音频播放设备。

### \`enableAudioProcessing\` [#enableaudioprocessing]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该参数仅对自定义音频采集中的 \`AUDIO_TRACK_DIRECT\` 类型生效。
  </CalloutDescription>
</CalloutContainer>

是否启用音频处理模块：

* true：启用音频处理模块，应用回声消除（AEC）、噪声抑制（ANS）和自动增益控制（AGC）效果。
* false：（默认）不启用音频处理模块。
`;
export let structuredData = {
  contents: [{
    heading: "enablelocalplayback",
    content: "是否启用本地音频播放设备："
  }, {
    heading: "enablelocalplayback",
    content: "true：（默认）启用本地音频播放设备。"
  }, {
    heading: "enablelocalplayback",
    content: "false：不启用本地音频播放设备。"
  }, {
    heading: "enableaudioprocessing",
    content: "该参数仅对自定义音频采集中的 `AUDIO_TRACK_DIRECT` 类型生效。"
  }, {
    heading: "enableaudioprocessing",
    content: "是否启用音频处理模块："
  }, {
    heading: "enableaudioprocessing",
    content: "true：启用音频处理模块，应用回声消除（AEC）、噪声抑制（ANS）和自动增益控制（AGC）效果。"
  }, {
    heading: "enableaudioprocessing",
    content: "false：（默认）不启用音频处理模块。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "enablelocalplayback",
    content: "`enableLocalPlayback`"
  }, {
    id: "enableaudioprocessing",
    content: "`enableAudioProcessing`"
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
  url: "#enablelocalplayback",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enableLocalPlayback"
    })
  })
}, {
  depth: 3,
  url: "#enableaudioprocessing",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enableAudioProcessing"
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
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_audiotrackconfig__prototype"
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
              children: " AudioTrackConfig"
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
              children: " enableLocalPlayback;"
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
              children: " enableAudioProcessing;"
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
      id: "class_audiotrackconfig__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "enablelocalplayback",
      children: _jsx(_components.code, {
        children: "enableLocalPlayback"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用本地音频播放设备："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：（默认）启用本地音频播放设备。"
      }), `
`, _jsx(_components.li, {
        children: "false：不启用本地音频播放设备。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "enableaudioprocessing",
      children: _jsx(_components.code, {
        children: "enableAudioProcessing"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["该参数仅对自定义音频采集中的 ", _jsx(_components.code, {
            children: "AUDIO_TRACK_DIRECT"
          }), " 类型生效。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "是否启用音频处理模块："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用音频处理模块，应用回声消除（AEC）、噪声抑制（ANS）和自动增益控制（AGC）效果。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不启用音频处理模块。"
      }), `
`]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
