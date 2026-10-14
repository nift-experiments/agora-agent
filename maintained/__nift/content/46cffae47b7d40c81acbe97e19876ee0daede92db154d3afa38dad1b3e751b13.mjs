import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AudioVolumeInfo",
  description: "表示用户的音量信息。"
};
export let _markdown = `

<a id="class_audiovolumeinfo__prototype" />

\`\`\`java
public static class AudioVolumeInfo {
  public int uid;
  public int volume;
  public int vad;
  public double voicePitch;
}
\`\`\`

<a id="class_audiovolumeinfo__parameters" />

## 属性 [#属性]

### \`uid\` [#uid]

用户 ID。

* 在本地用户的回调中， uid 为 0。
* 在远端用户的回调中， uid 为瞬时音量最大的远端用户 ID。

### \`volume\` [#volume]

用户的音量，取值范围为 0（最低）到 255（最高）。如果本地用户开启了音频采集并调用 [muteLocalAudioStream](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_mutelocalaudiostream) 进行静音，则该值表示本地采集音频信号的音量值。调用 \`startAudioMixing\` 后，该值表示混音后的音量值。

### \`vad\` [#vad]

注：

* vad 参数不会上报远端用户的语音活动状态。在远端用户的回调中，该值始终为 1。
* 使用该参数时，必须在调用 enableAudioVolumeIndication 时将 reportVad 设置为 true。

本地用户的语音活动状态：

* 0：未说话；
* 1：正在说话。

### \`voicePitch\` [#voicepitch]

本地用户的语音音高，取值范围为 0.0 到 4000.0。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    \`voicePitch\` 参数不会上报远端用户的语音音高。在远端用户回调中，该值始终为 0.0。
  </CalloutDescription>
</CalloutContainer>
`;
export let structuredData = {
  contents: [{
    heading: "uid",
    content: "用户 ID。"
  }, {
    heading: "uid",
    content: "在本地用户的回调中， uid 为 0。"
  }, {
    heading: "uid",
    content: "在远端用户的回调中， uid 为瞬时音量最大的远端用户 ID。"
  }, {
    heading: "volume",
    content: "用户的音量，取值范围为 0（最低）到 255（最高）。如果本地用户开启了音频采集并调用 muteLocalAudioStream 进行静音，则该值表示本地采集音频信号的音量值。调用 `startAudioMixing` 后，该值表示混音后的音量值。"
  }, {
    heading: "vad",
    content: "注："
  }, {
    heading: "vad",
    content: "vad 参数不会上报远端用户的语音活动状态。在远端用户的回调中，该值始终为 1。"
  }, {
    heading: "vad",
    content: "使用该参数时，必须在调用 enableAudioVolumeIndication 时将 reportVad 设置为 true。"
  }, {
    heading: "vad",
    content: "本地用户的语音活动状态："
  }, {
    heading: "vad",
    content: "0：未说话；"
  }, {
    heading: "vad",
    content: "1：正在说话。"
  }, {
    heading: "voicepitch",
    content: "本地用户的语音音高，取值范围为 0.0 到 4000.0。"
  }, {
    heading: "voicepitch",
    content: "`voicePitch` 参数不会上报远端用户的语音音高。在远端用户回调中，该值始终为 0.0。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "uid",
    content: "`uid`"
  }, {
    id: "volume",
    content: "`volume`"
  }, {
    id: "vad",
    content: "`vad`"
  }, {
    id: "voicepitch",
    content: "`voicePitch`"
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
  url: "#uid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
  })
}, {
  depth: 3,
  url: "#volume",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "volume"
    })
  })
}, {
  depth: 3,
  url: "#vad",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "vad"
    })
  })
}, {
  depth: 3,
  url: "#voicepitch",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "voicePitch"
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
      id: "class_audiovolumeinfo__prototype"
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
              children: " AudioVolumeInfo"
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
              children: " uid;"
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
              children: " volume;"
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
              children: " vad;"
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
              children: " double"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " voicePitch;"
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
      id: "class_audiovolumeinfo__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "uid",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户 ID。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "在本地用户的回调中， uid 为 0。"
      }), `
`, _jsx(_components.li, {
        children: "在远端用户的回调中， uid 为瞬时音量最大的远端用户 ID。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "volume",
      children: _jsx(_components.code, {
        children: "volume"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用户的音量，取值范围为 0（最低）到 255（最高）。如果本地用户开启了音频采集并调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_mutelocalaudiostream",
        children: "muteLocalAudioStream"
      }), " 进行静音，则该值表示本地采集音频信号的音量值。调用 ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " 后，该值表示混音后的音量值。"]
    }), `
`, _jsx(_components.h3, {
      id: "vad",
      children: _jsx(_components.code, {
        children: "vad"
      })
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "vad 参数不会上报远端用户的语音活动状态。在远端用户的回调中，该值始终为 1。"
      }), `
`, _jsx(_components.li, {
        children: "使用该参数时，必须在调用 enableAudioVolumeIndication 时将 reportVad 设置为 true。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "本地用户的语音活动状态："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：未说话；"
      }), `
`, _jsx(_components.li, {
        children: "1：正在说话。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "voicepitch",
      children: _jsx(_components.code, {
        children: "voicePitch"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地用户的语音音高，取值范围为 0.0 到 4000.0。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "voicePitch"
          }), " 参数不会上报远端用户的语音音高。在远端用户回调中，该值始终为 0.0。"]
        })
      })]
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
