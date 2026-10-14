import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AudioParams",
  description: "用于设置音频数据格式。"
};
export let _markdown = `

<a id="class_audioparams__prototype" />

\`\`\`java
public class AudioParams {
  public int sampleRate = 0;
  public int channel = 0;
  public int mode = Constants.RAW_AUDIO_FRAME_OP_MODE_READ_ONLY;
  public int samplesPerCall = 0;
}
\`\`\`

<a id="class_audioparams__detailed_desc" />

你可以在以下接口中传入 [AudioParams](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioparams) 对象，以设置对应回调的数据格式：

* getRecordAudioParams：设置 onRecordAudioFrame 回调的数据格式。
* getPlaybackAudioParams：设置 onPlaybackAudioFrame 回调的数据格式。
* getMixedAudioParams：设置 onMixedAudioFrame 回调的数据格式。
* getEarMonitoringAudioParams：设置 onEarMonitoringAudioFrame 回调的数据格式。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    SDK 会通过 [AudioParams](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioparams) 中的 \`samplesPerCall\`、 \`sampleRate\` 和 \`channel\` 参数计算采样间隔，并按该间隔触发 [onRecordAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onrecordaudioframe)、 [onPlaybackAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe)、 [onMixedAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onmixedaudioframe) 和 [onEarMonitoringAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onearmonitoringaudioframe) 回调。 采样间隔（秒） = \`samplesPerCall\` /（\`sampleRate\` × \`channel\` ）。 确保采样间隔 ≥ 0.01 秒。
  </CalloutDescription>
</CalloutContainer>

<a id="class_audioparams__parameters" />

## 属性 [#属性]

### \`sampleRate\` [#samplerate]

音频采样率（Hz），可设置为以下值：

* 8000。
* （默认）16000。
* 32000。
* 44100。
* 48000。

### \`channel\` [#channel]

音频声道数，可设置为以下值：

* 1：（默认）单声道。
* 2：立体声。

### \`mode\` [#mode]

音频数据的使用模式，可设置为以下值：

* RAW\\_AUDIO\\_FRAME\\_OP\\_MODE\\_READ\\_ONLY （0）：只读模式，例如用户通过声网 SDK 获取数据后进行媒体流推送。
* RAW\\_AUDIO\\_FRAME\\_OP\\_MODE\\_READ\\_WRITE （2）：读写模式，例如用户拥有自定义音频特效处理模块并进行音频预处理，如变声。

### \`samplesPerCall\` [#samplespercall]

每个回调中包含的采样数，例如用于媒体推送时设置为 1024。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "你可以在以下接口中传入 AudioParams 对象，以设置对应回调的数据格式："
  }, {
    heading: undefined,
    content: "getRecordAudioParams：设置 onRecordAudioFrame 回调的数据格式。"
  }, {
    heading: undefined,
    content: "getPlaybackAudioParams：设置 onPlaybackAudioFrame 回调的数据格式。"
  }, {
    heading: undefined,
    content: "getMixedAudioParams：设置 onMixedAudioFrame 回调的数据格式。"
  }, {
    heading: undefined,
    content: "getEarMonitoringAudioParams：设置 onEarMonitoringAudioFrame 回调的数据格式。"
  }, {
    heading: undefined,
    content: "SDK 会通过 AudioParams 中的 `samplesPerCall`、 `sampleRate` 和 `channel` 参数计算采样间隔，并按该间隔触发 onRecordAudioFrame、 onPlaybackAudioFrame、 onMixedAudioFrame 和 onEarMonitoringAudioFrame 回调。 采样间隔（秒） = `samplesPerCall` /（`sampleRate` × `channel` ）。 确保采样间隔 ≥ 0.01 秒。"
  }, {
    heading: "samplerate",
    content: "音频采样率（Hz），可设置为以下值："
  }, {
    heading: "samplerate",
    content: "8000。"
  }, {
    heading: "samplerate",
    content: "（默认）16000。"
  }, {
    heading: "samplerate",
    content: "32000。"
  }, {
    heading: "samplerate",
    content: "44100。"
  }, {
    heading: "samplerate",
    content: "48000。"
  }, {
    heading: "channel",
    content: "音频声道数，可设置为以下值："
  }, {
    heading: "channel",
    content: "1：（默认）单声道。"
  }, {
    heading: "channel",
    content: "2：立体声。"
  }, {
    heading: "mode",
    content: "音频数据的使用模式，可设置为以下值："
  }, {
    heading: "mode",
    content: "RAW\\_AUDIO\\_FRAME\\_OP\\_MODE\\_READ\\_ONLY （0）：只读模式，例如用户通过声网 SDK 获取数据后进行媒体流推送。"
  }, {
    heading: "mode",
    content: "RAW\\_AUDIO\\_FRAME\\_OP\\_MODE\\_READ\\_WRITE （2）：读写模式，例如用户拥有自定义音频特效处理模块并进行音频预处理，如变声。"
  }, {
    heading: "samplespercall",
    content: "每个回调中包含的采样数，例如用于媒体推送时设置为 1024。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "samplerate",
    content: "`sampleRate`"
  }, {
    id: "channel",
    content: "`channel`"
  }, {
    id: "mode",
    content: "`mode`"
  }, {
    id: "samplespercall",
    content: "`samplesPerCall`"
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
  url: "#samplerate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sampleRate"
    })
  })
}, {
  depth: 3,
  url: "#channel",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channel"
    })
  })
}, {
  depth: 3,
  url: "#mode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mode"
    })
  })
}, {
  depth: 3,
  url: "#samplespercall",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerCall"
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
      id: "class_audioparams__prototype"
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
              children: " AudioParams"
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
              children: " channel "
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
              children: " mode "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Constants.RAW_AUDIO_FRAME_OP_MODE_READ_ONLY;"
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
              children: " samplesPerCall "
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
      id: "class_audioparams__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以在以下接口中传入 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioparams",
        children: "AudioParams"
      }), " 对象，以设置对应回调的数据格式："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "getRecordAudioParams：设置 onRecordAudioFrame 回调的数据格式。"
      }), `
`, _jsx(_components.li, {
        children: "getPlaybackAudioParams：设置 onPlaybackAudioFrame 回调的数据格式。"
      }), `
`, _jsx(_components.li, {
        children: "getMixedAudioParams：设置 onMixedAudioFrame 回调的数据格式。"
      }), `
`, _jsx(_components.li, {
        children: "getEarMonitoringAudioParams：设置 onEarMonitoringAudioFrame 回调的数据格式。"
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["SDK 会通过 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioparams",
            children: "AudioParams"
          }), " 中的 ", _jsx(_components.code, {
            children: "samplesPerCall"
          }), "、 ", _jsx(_components.code, {
            children: "sampleRate"
          }), " 和 ", _jsx(_components.code, {
            children: "channel"
          }), " 参数计算采样间隔，并按该间隔触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onrecordaudioframe",
            children: "onRecordAudioFrame"
          }), "、 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe",
            children: "onPlaybackAudioFrame"
          }), "、 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onmixedaudioframe",
            children: "onMixedAudioFrame"
          }), " 和 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onearmonitoringaudioframe",
            children: "onEarMonitoringAudioFrame"
          }), " 回调。 采样间隔（秒） = ", _jsx(_components.code, {
            children: "samplesPerCall"
          }), " /（", _jsx(_components.code, {
            children: "sampleRate"
          }), " × ", _jsx(_components.code, {
            children: "channel"
          }), " ）。 确保采样间隔 ≥ 0.01 秒。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "class_audioparams__parameters"
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
      children: "音频采样率（Hz），可设置为以下值："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "8000。"
      }), `
`, _jsx(_components.li, {
        children: "（默认）16000。"
      }), `
`, _jsx(_components.li, {
        children: "32000。"
      }), `
`, _jsx(_components.li, {
        children: "44100。"
      }), `
`, _jsx(_components.li, {
        children: "48000。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "channel",
      children: _jsx(_components.code, {
        children: "channel"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频声道数，可设置为以下值："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：（默认）单声道。"
      }), `
`, _jsx(_components.li, {
        children: "2：立体声。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "mode",
      children: _jsx(_components.code, {
        children: "mode"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频数据的使用模式，可设置为以下值："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "RAW_AUDIO_FRAME_OP_MODE_READ_ONLY （0）：只读模式，例如用户通过声网 SDK 获取数据后进行媒体流推送。"
      }), `
`, _jsx(_components.li, {
        children: "RAW_AUDIO_FRAME_OP_MODE_READ_WRITE （2）：读写模式，例如用户拥有自定义音频特效处理模块并进行音频预处理，如变声。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "samplespercall",
      children: _jsx(_components.code, {
        children: "samplesPerCall"
      })
    }), `
`, _jsx(_components.p, {
      children: "每个回调中包含的采样数，例如用于媒体推送时设置为 1024。"
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
