import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AudioCaptureParameters",
  description: "用于配置共享屏幕流的音频参数。"
};
export let _markdown = `

<a id="class_screenaudioparameters__prototype" />

\`\`\`java
public static class AudioCaptureParameters {
    public int sampleRate = 16000;
    public int channels = 2;
    public int captureSignalVolume = 100;
    public boolean allowCaptureCurrentApp = true;
  }
\`\`\`

<a id="class_screenaudioparameters__detailed_desc" />

### \`自从\` [#自从]

自 v3.7.0 版本新增。

仅当 \`captureAudio\` 为 true 时生效。

<a id="class_screenaudioparameters__parameters" />

## 属性 [#属性]

### \`sampleRate\` [#samplerate]

音频采样率（Hz）。默认值为 16000。

### \`channels\` [#channels]

音频声道数。默认值为 2，表示立体声。

### \`captureSignalVolume\` [#capturesignalvolume]

采集的系统音频音量，取值范围为 \\[0, 100]。默认值为 100。

### \`allowCaptureCurrentApp\` [#allowcapturecurrentapp]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该参数仅用于设置是否采集当前 App 的音频，不能控制采集到的 App 音频是否发布到频道中。你需要在调用 \`joinChannel\` 或 [updateChannelMediaOptions](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_updatechannelmediaoptions) 时通过 \`options\` 参数设置。
  </CalloutDescription>
</CalloutContainer>

是否采集当前 App 的音频：

* true：（默认）采集当前 App 的音频。
* false：不采集当前 App 的音频。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v3.7.0 版本新增。"
  }, {
    heading: "自从",
    content: "仅当 `captureAudio` 为 true 时生效。"
  }, {
    heading: "samplerate",
    content: "音频采样率（Hz）。默认值为 16000。"
  }, {
    heading: "channels",
    content: "音频声道数。默认值为 2，表示立体声。"
  }, {
    heading: "capturesignalvolume",
    content: "采集的系统音频音量，取值范围为 \\[0, 100]。默认值为 100。"
  }, {
    heading: "allowcapturecurrentapp",
    content: "该参数仅用于设置是否采集当前 App 的音频，不能控制采集到的 App 音频是否发布到频道中。你需要在调用 `joinChannel` 或 updateChannelMediaOptions 时通过 `options` 参数设置。"
  }, {
    heading: "allowcapturecurrentapp",
    content: "是否采集当前 App 的音频："
  }, {
    heading: "allowcapturecurrentapp",
    content: "true：（默认）采集当前 App 的音频。"
  }, {
    heading: "allowcapturecurrentapp",
    content: "false：不采集当前 App 的音频。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "属性",
    content: "属性"
  }, {
    id: "samplerate",
    content: "`sampleRate`"
  }, {
    id: "channels",
    content: "`channels`"
  }, {
    id: "capturesignalvolume",
    content: "`captureSignalVolume`"
  }, {
    id: "allowcapturecurrentapp",
    content: "`allowCaptureCurrentApp`"
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
  url: "#属性",
  title: _jsx(_Fragment, {
    children: "属性"
  })
}, {
  depth: 3,
  url: "#samplerate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sampleRate"
    })
  })
}, {
  depth: 3,
  url: "#channels",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channels"
    })
  })
}, {
  depth: 3,
  url: "#capturesignalvolume",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "captureSignalVolume"
    })
  })
}, {
  depth: 3,
  url: "#allowcapturecurrentapp",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "allowCaptureCurrentApp"
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
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_screenaudioparameters__prototype"
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
              children: " AudioCaptureParameters"
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
              children: " sampleRate "
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
              children: " 16000"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " channels "
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " captureSignalVolume "
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
              children: " 100"
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
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " allowCaptureCurrentApp "
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
              children: " true"
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
      id: "class_screenaudioparameters__detailed_desc"
    }), `
`, _jsx(_components.h3, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.7.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["仅当 ", _jsx(_components.code, {
        children: "captureAudio"
      }), " 为 true 时生效。"]
    }), `
`, _jsx("a", {
      id: "class_screenaudioparameters__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "samplerate",
      children: _jsx(_components.code, {
        children: "sampleRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频采样率（Hz）。默认值为 16000。"
    }), `
`, _jsx(_components.h3, {
      id: "channels",
      children: _jsx(_components.code, {
        children: "channels"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频声道数。默认值为 2，表示立体声。"
    }), `
`, _jsx(_components.h3, {
      id: "capturesignalvolume",
      children: _jsx(_components.code, {
        children: "captureSignalVolume"
      })
    }), `
`, _jsx(_components.p, {
      children: "采集的系统音频音量，取值范围为 [0, 100]。默认值为 100。"
    }), `
`, _jsx(_components.h3, {
      id: "allowcapturecurrentapp",
      children: _jsx(_components.code, {
        children: "allowCaptureCurrentApp"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["该参数仅用于设置是否采集当前 App 的音频，不能控制采集到的 App 音频是否发布到频道中。你需要在调用 ", _jsx(_components.code, {
            children: "joinChannel"
          }), " 或 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_updatechannelmediaoptions",
            children: "updateChannelMediaOptions"
          }), " 时通过 ", _jsx(_components.code, {
            children: "options"
          }), " 参数设置。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "是否采集当前 App 的音频："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：（默认）采集当前 App 的音频。"
      }), `
`, _jsx(_components.li, {
        children: "false：不采集当前 App 的音频。"
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
