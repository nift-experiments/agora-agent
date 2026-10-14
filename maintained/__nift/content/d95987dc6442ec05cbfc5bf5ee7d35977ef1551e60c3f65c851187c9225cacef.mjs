import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "LeaveChannelOptions",
  description: "用于设置离开频道时的相关选项。"
};
export let _markdown = `

<a id="class_leavechanneloptions__prototype" />

\`\`\`java
public class LeaveChannelOptions {
  public boolean stopAudioMixing;
  public boolean stopAllEffect;
  public boolean stopMicrophoneRecording;
}
\`\`\`

<a id="class_leavechanneloptions__parameters" />

## 属性 [#属性]

### \`stopAudioMixing\` [#stopaudiomixing]

离开频道时是否停止播放和混音音乐文件。

* true：（默认）停止播放和混音音乐文件。
* false：不停止播放和混音音乐文件。

### \`stopAllEffect\` [#stopalleffect]

离开频道时是否停止播放所有音效。

* true：（默认）停止播放所有音效。
* false：不停止播放任何音效。

### \`stopMicrophoneRecording\` [#stopmicrophonerecording]

离开频道时是否停止麦克风录制。

* true：（默认）停止麦克风录制。
* false：不停止麦克风录制。
`;
export let structuredData = {
  contents: [{
    heading: "stopaudiomixing",
    content: "离开频道时是否停止播放和混音音乐文件。"
  }, {
    heading: "stopaudiomixing",
    content: "true：（默认）停止播放和混音音乐文件。"
  }, {
    heading: "stopaudiomixing",
    content: "false：不停止播放和混音音乐文件。"
  }, {
    heading: "stopalleffect",
    content: "离开频道时是否停止播放所有音效。"
  }, {
    heading: "stopalleffect",
    content: "true：（默认）停止播放所有音效。"
  }, {
    heading: "stopalleffect",
    content: "false：不停止播放任何音效。"
  }, {
    heading: "stopmicrophonerecording",
    content: "离开频道时是否停止麦克风录制。"
  }, {
    heading: "stopmicrophonerecording",
    content: "true：（默认）停止麦克风录制。"
  }, {
    heading: "stopmicrophonerecording",
    content: "false：不停止麦克风录制。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "stopaudiomixing",
    content: "`stopAudioMixing`"
  }, {
    id: "stopalleffect",
    content: "`stopAllEffect`"
  }, {
    id: "stopmicrophonerecording",
    content: "`stopMicrophoneRecording`"
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
  url: "#stopaudiomixing",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "stopAudioMixing"
    })
  })
}, {
  depth: 3,
  url: "#stopalleffect",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "stopAllEffect"
    })
  })
}, {
  depth: 3,
  url: "#stopmicrophonerecording",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "stopMicrophoneRecording"
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_leavechanneloptions__prototype"
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
              children: " LeaveChannelOptions"
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
              children: " stopAudioMixing;"
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
              children: " stopAllEffect;"
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
              children: " stopMicrophoneRecording;"
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
      id: "class_leavechanneloptions__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "stopaudiomixing",
      children: _jsx(_components.code, {
        children: "stopAudioMixing"
      })
    }), `
`, _jsx(_components.p, {
      children: "离开频道时是否停止播放和混音音乐文件。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：（默认）停止播放和混音音乐文件。"
      }), `
`, _jsx(_components.li, {
        children: "false：不停止播放和混音音乐文件。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "stopalleffect",
      children: _jsx(_components.code, {
        children: "stopAllEffect"
      })
    }), `
`, _jsx(_components.p, {
      children: "离开频道时是否停止播放所有音效。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：（默认）停止播放所有音效。"
      }), `
`, _jsx(_components.li, {
        children: "false：不停止播放任何音效。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "stopmicrophonerecording",
      children: _jsx(_components.code, {
        children: "stopMicrophoneRecording"
      })
    }), `
`, _jsx(_components.p, {
      children: "离开频道时是否停止麦克风录制。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：（默认）停止麦克风录制。"
      }), `
`, _jsx(_components.li, {
        children: "false：不停止麦克风录制。"
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
