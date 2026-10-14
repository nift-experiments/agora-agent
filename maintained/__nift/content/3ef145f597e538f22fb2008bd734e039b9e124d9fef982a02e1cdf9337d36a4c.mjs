import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "MixedAudioStream",
  description: "用于设置本地混音的音频流来源。"
};
export let _markdown = `

<a id="class_mixedaudiostream__prototype" />

\`\`\`java
public static class MixedAudioStream {
  public int remoteUserUid;
  public String channelId;
  public Constants.AudioSourceType sourceType;
  public int trackId;
}
\`\`\`

<a id="class_mixedaudiostream__parameters" />

## 属性 [#属性]

### \`remoteUserUid\` [#remoteuseruid]

远端用户 ID。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    仅当本地混音音频流的来源类型为 \`AUDIO_SOURCE_REMOTE_USER\` 时需要设置该参数。
  </CalloutDescription>
</CalloutContainer>

### \`channelId\` [#channelid]

频道名。该字符串长度不得超过 64 字节。支持的字符共 89 个：小写英文字母 a 到 z、大写英文字母 A 到 Z、数字 0 到 9，以及以下符号：!、#、$、%、&、(、)、+、-、:、;、\\<、=、.、>、?、@、\\[、]、^、\\_、\\{、}、|、\\~、,。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    仅当本地混音音频流的来源类型为 \`AUDIO_SOURCE_REMOTE_CHANNEL\` 或 \`AUDIO_SOURCE_REMOTE_USER\` 时需要设置该参数。
  </CalloutDescription>
</CalloutContainer>

### \`sourceType\` [#sourcetype]

音频源类型，详见 [AudioSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-audiosourcetype)。

### \`trackId\` [#trackid]

音频轨道 ID。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    仅当本地混音音频流的来源类型为 \`AUDIO_SOURCE_CUSTOM\` 时需要设置该参数。请设置为 [createCustomAudioTrack](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack) 返回的自定义音频轨道 ID。
  </CalloutDescription>
</CalloutContainer>
`;
export let structuredData = {
  contents: [{
    heading: "remoteuseruid",
    content: "远端用户 ID。"
  }, {
    heading: "remoteuseruid",
    content: "仅当本地混音音频流的来源类型为 `AUDIO_SOURCE_REMOTE_USER` 时需要设置该参数。"
  }, {
    heading: "channelid",
    content: "频道名。该字符串长度不得超过 64 字节。支持的字符共 89 个：小写英文字母 a 到 z、大写英文字母 A 到 Z、数字 0 到 9，以及以下符号：!、#、$、%、&、(、)、+、-、:、;、\\<、=、.、>、?、@、\\[、]、^、\\_、\\{、}、|、\\~、,。"
  }, {
    heading: "channelid",
    content: "仅当本地混音音频流的来源类型为 `AUDIO_SOURCE_REMOTE_CHANNEL` 或 `AUDIO_SOURCE_REMOTE_USER` 时需要设置该参数。"
  }, {
    heading: "sourcetype",
    content: "音频源类型，详见 AudioSourceType。"
  }, {
    heading: "trackid",
    content: "音频轨道 ID。"
  }, {
    heading: "trackid",
    content: "仅当本地混音音频流的来源类型为 `AUDIO_SOURCE_CUSTOM` 时需要设置该参数。请设置为 createCustomAudioTrack 返回的自定义音频轨道 ID。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "remoteuseruid",
    content: "`remoteUserUid`"
  }, {
    id: "channelid",
    content: "`channelId`"
  }, {
    id: "sourcetype",
    content: "`sourceType`"
  }, {
    id: "trackid",
    content: "`trackId`"
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
  url: "#remoteuseruid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "remoteUserUid"
    })
  })
}, {
  depth: 3,
  url: "#channelid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channelId"
    })
  })
}, {
  depth: 3,
  url: "#sourcetype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sourceType"
    })
  })
}, {
  depth: 3,
  url: "#trackid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "trackId"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
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
      id: "class_mixedaudiostream__prototype"
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
              children: " MixedAudioStream"
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
              children: " remoteUserUid;"
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
              children: " String channelId;"
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
              children: " Constants.AudioSourceType sourceType;"
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
              children: " trackId;"
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
      id: "class_mixedaudiostream__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "remoteuseruid",
      children: _jsx(_components.code, {
        children: "remoteUserUid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户 ID。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["仅当本地混音音频流的来源类型为 ", _jsx(_components.code, {
            children: "AUDIO_SOURCE_REMOTE_USER"
          }), " 时需要设置该参数。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "channelid",
      children: _jsx(_components.code, {
        children: "channelId"
      })
    }), `
`, _jsx(_components.p, {
      children: "频道名。该字符串长度不得超过 64 字节。支持的字符共 89 个：小写英文字母 a 到 z、大写英文字母 A 到 Z、数字 0 到 9，以及以下符号：!、#、$、%、&、(、)、+、-、:、;、<、=、.、>、?、@、[、]、^、_、{、}、|、~、,。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["仅当本地混音音频流的来源类型为 ", _jsx(_components.code, {
            children: "AUDIO_SOURCE_REMOTE_CHANNEL"
          }), " 或 ", _jsx(_components.code, {
            children: "AUDIO_SOURCE_REMOTE_USER"
          }), " 时需要设置该参数。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "sourcetype",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音频源类型，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-audiosourcetype",
        children: "AudioSourceType"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "trackid",
      children: _jsx(_components.code, {
        children: "trackId"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频轨道 ID。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["仅当本地混音音频流的来源类型为 ", _jsx(_components.code, {
            children: "AUDIO_SOURCE_CUSTOM"
          }), " 时需要设置该参数。请设置为 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack",
            children: "createCustomAudioTrack"
          }), " 返回的自定义音频轨道 ID。"]
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
