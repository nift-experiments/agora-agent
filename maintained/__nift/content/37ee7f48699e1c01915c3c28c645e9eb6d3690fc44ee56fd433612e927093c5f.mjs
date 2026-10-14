import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "LocalTranscoderConfiguration",
  description: "用于配置本地客户端的视频合图。"
};
export let _markdown = `

<a id="class_localtranscoderconfiguration__prototype" />

\`\`\`java
public class LocalTranscoderConfiguration {
  public ArrayList<TranscodingVideoStream> transcodingVideoStreams;
  public boolean syncWithPrimaryCamera;
  public VideoEncoderConfiguration videoOutputConfiguration;
}
\`\`\`

<a id="class_localtranscoderconfiguration__parameters" />

## 属性 [#属性]

### \`transcodingVideoStreams\` [#transcodingvideostreams]

本地视频合图所用的视频流。详见 [TranscodingVideoStream](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-transcodingvideostream)。

### \`syncWithPrimaryCamera\` [#syncwithprimarycamera]

是否使用主摄像头采集的视频帧的时间戳作为合图后视频帧的时间戳。

* true：（默认）使用采集帧的时间戳作为合图帧的时间戳。
* false：不使用采集帧的时间戳，而是使用构建合图帧的时间戳。

### \`videoOutputConfiguration\` [#videooutputconfiguration]

本地视频合图后输出的视频流的编码参数配置。详见 [VideoEncoderConfiguration](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videoencoderconfiguration)。
`;
export let structuredData = {
  contents: [{
    heading: "transcodingvideostreams",
    content: "本地视频合图所用的视频流。详见 TranscodingVideoStream。"
  }, {
    heading: "syncwithprimarycamera",
    content: "是否使用主摄像头采集的视频帧的时间戳作为合图后视频帧的时间戳。"
  }, {
    heading: "syncwithprimarycamera",
    content: "true：（默认）使用采集帧的时间戳作为合图帧的时间戳。"
  }, {
    heading: "syncwithprimarycamera",
    content: "false：不使用采集帧的时间戳，而是使用构建合图帧的时间戳。"
  }, {
    heading: "videooutputconfiguration",
    content: "本地视频合图后输出的视频流的编码参数配置。详见 VideoEncoderConfiguration。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "transcodingvideostreams",
    content: "`transcodingVideoStreams`"
  }, {
    id: "syncwithprimarycamera",
    content: "`syncWithPrimaryCamera`"
  }, {
    id: "videooutputconfiguration",
    content: "`videoOutputConfiguration`"
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
  url: "#transcodingvideostreams",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "transcodingVideoStreams"
    })
  })
}, {
  depth: 3,
  url: "#syncwithprimarycamera",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "syncWithPrimaryCamera"
    })
  })
}, {
  depth: 3,
  url: "#videooutputconfiguration",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoOutputConfiguration"
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
      id: "class_localtranscoderconfiguration__prototype"
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
              children: " LocalTranscoderConfiguration"
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
              children: "TranscodingVideoStream"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "> transcodingVideoStreams;"
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
              children: " syncWithPrimaryCamera;"
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
              children: " VideoEncoderConfiguration videoOutputConfiguration;"
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
      id: "class_localtranscoderconfiguration__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "transcodingvideostreams",
      children: _jsx(_components.code, {
        children: "transcodingVideoStreams"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["本地视频合图所用的视频流。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-transcodingvideostream",
        children: "TranscodingVideoStream"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "syncwithprimarycamera",
      children: _jsx(_components.code, {
        children: "syncWithPrimaryCamera"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否使用主摄像头采集的视频帧的时间戳作为合图后视频帧的时间戳。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：（默认）使用采集帧的时间戳作为合图帧的时间戳。"
      }), `
`, _jsx(_components.li, {
        children: "false：不使用采集帧的时间戳，而是使用构建合图帧的时间戳。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "videooutputconfiguration",
      children: _jsx(_components.code, {
        children: "videoOutputConfiguration"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["本地视频合图后输出的视频流的编码参数配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videoencoderconfiguration",
        children: "VideoEncoderConfiguration"
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
