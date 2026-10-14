import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "ScreenCaptureParameters",
  description: "用于配置屏幕共享功能。"
};
export let _markdown = `

<a id="class_screencaptureparameters2__prototype" />

\`\`\`java
public class ScreenCaptureParameters {
  public boolean captureAudio = false;
  public VideoCaptureParameters videoCaptureParameters = new VideoCaptureParameters();
  public boolean captureVideo = true;
  public AudioCaptureParameters audioCaptureParameters = new AudioCaptureParameters();
}
\`\`\`

<a id="class_screencaptureparameters2__detailed_desc" />

### \`自从\` [#自从]

自 v3.7.0 版本新增。

<a id="class_screencaptureparameters2__parameters" />

## 属性 [#属性]

### \`captureAudio\` [#captureaudio]

注：

* 由于系统限制，系统音频的采集仅适用于 Android API 等级 29 及以上（即 Android 10 及以上版本）。
* 为提高屏幕共享系统音频采集的成功率，请确保已调用 setAudioScenario 方法并将音频场景设置为 AUDIO\\_SCENARIO\\_GAME\\_STREAMING。

设置是否在屏幕共享过程中采集系统音频：

* true：采集系统音频。
* false：（默认）不采集系统音频。

### \`videoCaptureParameters\` [#videocaptureparameters]

共享屏幕视频流的视频采集参数。详见 [VideoCaptureParameters](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-screenvideoparameters)。

### \`captureVideo\` [#capturevideo]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    由于系统限制，屏幕采集仅适用于 Android API 等级 21 及以上，即 Android 5 及以上版本。
  </CalloutDescription>
</CalloutContainer>

设置在屏幕共享过程中是否采集屏幕内容：

* true：（默认）采集屏幕。
* false：不采集屏幕。

### \`audioCaptureParameters\` [#audiocaptureparameters]

共享屏幕音频流的音频采集参数。详见 [AudioCaptureParameters](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-screenaudioparameters)。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v3.7.0 版本新增。"
  }, {
    heading: "captureaudio",
    content: "注："
  }, {
    heading: "captureaudio",
    content: "由于系统限制，系统音频的采集仅适用于 Android API 等级 29 及以上（即 Android 10 及以上版本）。"
  }, {
    heading: "captureaudio",
    content: "为提高屏幕共享系统音频采集的成功率，请确保已调用 setAudioScenario 方法并将音频场景设置为 AUDIO\\_SCENARIO\\_GAME\\_STREAMING。"
  }, {
    heading: "captureaudio",
    content: "设置是否在屏幕共享过程中采集系统音频："
  }, {
    heading: "captureaudio",
    content: "true：采集系统音频。"
  }, {
    heading: "captureaudio",
    content: "false：（默认）不采集系统音频。"
  }, {
    heading: "videocaptureparameters",
    content: "共享屏幕视频流的视频采集参数。详见 VideoCaptureParameters。"
  }, {
    heading: "capturevideo",
    content: "由于系统限制，屏幕采集仅适用于 Android API 等级 21 及以上，即 Android 5 及以上版本。"
  }, {
    heading: "capturevideo",
    content: "设置在屏幕共享过程中是否采集屏幕内容："
  }, {
    heading: "capturevideo",
    content: "true：（默认）采集屏幕。"
  }, {
    heading: "capturevideo",
    content: "false：不采集屏幕。"
  }, {
    heading: "audiocaptureparameters",
    content: "共享屏幕音频流的音频采集参数。详见 AudioCaptureParameters。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "属性",
    content: "属性"
  }, {
    id: "captureaudio",
    content: "`captureAudio`"
  }, {
    id: "videocaptureparameters",
    content: "`videoCaptureParameters`"
  }, {
    id: "capturevideo",
    content: "`captureVideo`"
  }, {
    id: "audiocaptureparameters",
    content: "`audioCaptureParameters`"
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
  url: "#captureaudio",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "captureAudio"
    })
  })
}, {
  depth: 3,
  url: "#videocaptureparameters",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoCaptureParameters"
    })
  })
}, {
  depth: 3,
  url: "#capturevideo",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "captureVideo"
    })
  })
}, {
  depth: 3,
  url: "#audiocaptureparameters",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "audioCaptureParameters"
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
      id: "class_screencaptureparameters2__prototype"
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
              children: " ScreenCaptureParameters"
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
              children: " captureAudio "
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
              children: " false"
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
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " VideoCaptureParameters videoCaptureParameters "
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
              children: " VideoCaptureParameters"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " captureVideo "
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
              children: " AudioCaptureParameters audioCaptureParameters "
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
              children: " AudioCaptureParameters"
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
      id: "class_screencaptureparameters2__detailed_desc"
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
`, _jsx("a", {
      id: "class_screencaptureparameters2__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "captureaudio",
      children: _jsx(_components.code, {
        children: "captureAudio"
      })
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "由于系统限制，系统音频的采集仅适用于 Android API 等级 29 及以上（即 Android 10 及以上版本）。"
      }), `
`, _jsx(_components.li, {
        children: "为提高屏幕共享系统音频采集的成功率，请确保已调用 setAudioScenario 方法并将音频场景设置为 AUDIO_SCENARIO_GAME_STREAMING。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "设置是否在屏幕共享过程中采集系统音频："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：采集系统音频。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不采集系统音频。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "videocaptureparameters",
      children: _jsx(_components.code, {
        children: "videoCaptureParameters"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["共享屏幕视频流的视频采集参数。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-screenvideoparameters",
        children: "VideoCaptureParameters"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "capturevideo",
      children: _jsx(_components.code, {
        children: "captureVideo"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "由于系统限制，屏幕采集仅适用于 Android API 等级 21 及以上，即 Android 5 及以上版本。"
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "设置在屏幕共享过程中是否采集屏幕内容："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：（默认）采集屏幕。"
      }), `
`, _jsx(_components.li, {
        children: "false：不采集屏幕。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "audiocaptureparameters",
      children: _jsx(_components.code, {
        children: "audioCaptureParameters"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["共享屏幕音频流的音频采集参数。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-screenaudioparameters",
        children: "AudioCaptureParameters"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
