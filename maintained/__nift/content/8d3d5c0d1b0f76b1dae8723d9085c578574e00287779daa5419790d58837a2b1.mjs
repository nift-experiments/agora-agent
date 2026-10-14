import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "PlayerUpdatedInfo",
  description: "封装媒体播放器的相关信息。"
};
export let _markdown = `

<a id="class_playerupdatedinfo__prototype" />

\`\`\`java
public class PlayerUpdatedInfo {
  public String internalPlayerUuid;
  public String deviceId;
  public long videoHeight;
  public long videoWidth;
  public long audioSampleRate;
  public long audioChannels;
  public long audioBitsPerSample;
}
\`\`\`

<a id="class_playerupdatedinfo__parameters" />

## 属性 [#属性]

### \`deviceId\` [#deviceid]

设备 ID。

### \`videoHeight\` [#videoheight]

视频高度，单位为像素。

### \`videoWidth\` [#videowidth]

视频宽度，单位为像素。

### \`audioSampleRate\` [#audiosamplerate]

音频采样率，单位为 Hz。

### \`audioChannels\` [#audiochannels]

音频通道数。

### \`audioBitsPerSample\` [#audiobitspersample]

每个音频采样点的位数。
`;
export let structuredData = {
  contents: [{
    heading: "deviceid",
    content: "设备 ID。"
  }, {
    heading: "videoheight",
    content: "视频高度，单位为像素。"
  }, {
    heading: "videowidth",
    content: "视频宽度，单位为像素。"
  }, {
    heading: "audiosamplerate",
    content: "音频采样率，单位为 Hz。"
  }, {
    heading: "audiochannels",
    content: "音频通道数。"
  }, {
    heading: "audiobitspersample",
    content: "每个音频采样点的位数。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "deviceid",
    content: "`deviceId`"
  }, {
    id: "videoheight",
    content: "`videoHeight`"
  }, {
    id: "videowidth",
    content: "`videoWidth`"
  }, {
    id: "audiosamplerate",
    content: "`audioSampleRate`"
  }, {
    id: "audiochannels",
    content: "`audioChannels`"
  }, {
    id: "audiobitspersample",
    content: "`audioBitsPerSample`"
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
  url: "#deviceid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "deviceId"
    })
  })
}, {
  depth: 3,
  url: "#videoheight",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoHeight"
    })
  })
}, {
  depth: 3,
  url: "#videowidth",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoWidth"
    })
  })
}, {
  depth: 3,
  url: "#audiosamplerate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "audioSampleRate"
    })
  })
}, {
  depth: 3,
  url: "#audiochannels",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "audioChannels"
    })
  })
}, {
  depth: 3,
  url: "#audiobitspersample",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "audioBitsPerSample"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_playerupdatedinfo__prototype"
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
              children: " PlayerUpdatedInfo"
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
              children: " String internalPlayerUuid;"
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
              children: " String deviceId;"
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
              children: " long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " videoHeight;"
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
              children: " long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " videoWidth;"
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
              children: " long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " audioSampleRate;"
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
              children: " long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " audioChannels;"
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
              children: " long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " audioBitsPerSample;"
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
      id: "class_playerupdatedinfo__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "deviceid",
      children: _jsx(_components.code, {
        children: "deviceId"
      })
    }), `
`, _jsx(_components.p, {
      children: "设备 ID。"
    }), `
`, _jsx(_components.h3, {
      id: "videoheight",
      children: _jsx(_components.code, {
        children: "videoHeight"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频高度，单位为像素。"
    }), `
`, _jsx(_components.h3, {
      id: "videowidth",
      children: _jsx(_components.code, {
        children: "videoWidth"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频宽度，单位为像素。"
    }), `
`, _jsx(_components.h3, {
      id: "audiosamplerate",
      children: _jsx(_components.code, {
        children: "audioSampleRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频采样率，单位为 Hz。"
    }), `
`, _jsx(_components.h3, {
      id: "audiochannels",
      children: _jsx(_components.code, {
        children: "audioChannels"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频通道数。"
    }), `
`, _jsx(_components.h3, {
      id: "audiobitspersample",
      children: _jsx(_components.code, {
        children: "audioBitsPerSample"
      })
    }), `
`, _jsx(_components.p, {
      children: "每个音频采样点的位数。"
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
