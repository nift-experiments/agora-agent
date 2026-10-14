import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "LocalAudioMixerConfiguration",
  description: "用于配置本地音频混音。"
};
export let _markdown = `

<a id="class_localaudiomixerconfiguration__prototype" />

\`\`\`java
public class LocalAudioMixerConfiguration {
  public ArrayList<MixedAudioStream> audioInputStreams;
  public boolean syncWithLocalMic;
}
\`\`\`

<a id="class_localaudiomixerconfiguration__parameters" />

## 属性 [#属性]

### \`audioInputStreams\` [#audioinputstreams]

本地混音的音频流来源，详见 [MixedAudioStream](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-mixedaudiostream)。

### \`syncWithLocalMic\` [#syncwithlocalmic]

混音后音频流是否使用本地麦克风采集音频帧的时间戳。

* true：（默认）是。若希望所有本地采集的音频流同步处理，建议设置为该值。
* false：否。SDK 使用混音时生成的音频帧时间戳。
`;
export let structuredData = {
  contents: [{
    heading: "audioinputstreams",
    content: "本地混音的音频流来源，详见 MixedAudioStream。"
  }, {
    heading: "syncwithlocalmic",
    content: "混音后音频流是否使用本地麦克风采集音频帧的时间戳。"
  }, {
    heading: "syncwithlocalmic",
    content: "true：（默认）是。若希望所有本地采集的音频流同步处理，建议设置为该值。"
  }, {
    heading: "syncwithlocalmic",
    content: "false：否。SDK 使用混音时生成的音频帧时间戳。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "audioinputstreams",
    content: "`audioInputStreams`"
  }, {
    id: "syncwithlocalmic",
    content: "`syncWithLocalMic`"
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
  url: "#audioinputstreams",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "audioInputStreams"
    })
  })
}, {
  depth: 3,
  url: "#syncwithlocalmic",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "syncWithLocalMic"
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
      id: "class_localaudiomixerconfiguration__prototype"
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
              children: " LocalAudioMixerConfiguration"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ArrayList<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "MixedAudioStream"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "> audioInputStreams;"
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
              children: " syncWithLocalMic;"
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
      id: "class_localaudiomixerconfiguration__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "audioinputstreams",
      children: _jsx(_components.code, {
        children: "audioInputStreams"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["本地混音的音频流来源，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-mixedaudiostream",
        children: "MixedAudioStream"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "syncwithlocalmic",
      children: _jsx(_components.code, {
        children: "syncWithLocalMic"
      })
    }), `
`, _jsx(_components.p, {
      children: "混音后音频流是否使用本地麦克风采集音频帧的时间戳。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：（默认）是。若希望所有本地采集的音频流同步处理，建议设置为该值。"
      }), `
`, _jsx(_components.li, {
        children: "false：否。SDK 使用混音时生成的音频帧时间戳。"
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
