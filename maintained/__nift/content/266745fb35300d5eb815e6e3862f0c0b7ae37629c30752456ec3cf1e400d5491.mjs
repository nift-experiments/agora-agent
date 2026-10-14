import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "EchoTestConfiguration",
  description: "用于配置音视频通话回路测试。"
};
export let _markdown = `

<a id="class_echotestconfiguration__prototype" />

\`\`\`java
public class EchoTestConfiguration {
  public SurfaceView view = null;
  public boolean enableAudio = true;
  public boolean enableVideo = true;
  public String token = null;
  public String channelId = null;
  public int intervalInSeconds = 2;
}
\`\`\`

<a id="class_echotestconfiguration__parameters" />

## 属性 [#属性]

### \`view\` [#view]

用于渲染本地用户视频的视图。该参数仅适用于测试视频设备的场景，即当 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 为 true 时有效。详见 \`SurfaceView\`。

### \`enableAudio\` [#enableaudio]

是否启用音频设备进行回路测试：

* true：（默认）启用音频设备。要测试音频设备，请将此参数设置为 true。
* false：不启用音频设备。

### \`enableVideo\` [#enablevideo]

是否启用视频设备进行回路测试：

* true：（默认）启用视频设备。要测试视频设备，请将此参数设置为 true。
* false：不启用视频设备。

### \`token\` [#token]

用于保障音视频通话回路测试安全的动态密钥（Token）。如果你未在声网控制台启用 App Certificate，可不传此参数；如果你已启用 App Certificate，必须传入 Token。生成 Token 时使用的 \`uid\` 必须为 0xFFFFFFFF，使用的频道名必须与用于识别各回路测试的频道名一致。

### \`channelId\` [#channelid]

用于标识每次音视频通话回路测试的频道名。为确保回路测试正常运行，当同一个项目（App ID）的用户在不同设备上进行音视频通话回路测试时，所传入的频道名不能相同。

### \`intervalInSeconds\` [#intervalinseconds]

设置返回音视频回路测试结果的时间间隔或延迟，单位为秒。取值范围为 \\[2, 10]，默认值为 2。

* 对于音频回路测试，根据设置的时间间隔返回测试结果。
* 对于视频回路测试，视频会短时间内显示，之后延迟逐步增加，直到达到你设定的值。
`;
export let structuredData = {
  contents: [{
    heading: "view",
    content: "用于渲染本地用户视频的视图。该参数仅适用于测试视频设备的场景，即当 enableVideo 为 true 时有效。详见 `SurfaceView`。"
  }, {
    heading: "enableaudio",
    content: "是否启用音频设备进行回路测试："
  }, {
    heading: "enableaudio",
    content: "true：（默认）启用音频设备。要测试音频设备，请将此参数设置为 true。"
  }, {
    heading: "enableaudio",
    content: "false：不启用音频设备。"
  }, {
    heading: "enablevideo",
    content: "是否启用视频设备进行回路测试："
  }, {
    heading: "enablevideo",
    content: "true：（默认）启用视频设备。要测试视频设备，请将此参数设置为 true。"
  }, {
    heading: "enablevideo",
    content: "false：不启用视频设备。"
  }, {
    heading: "token",
    content: "用于保障音视频通话回路测试安全的动态密钥（Token）。如果你未在声网控制台启用 App Certificate，可不传此参数；如果你已启用 App Certificate，必须传入 Token。生成 Token 时使用的 `uid` 必须为 0xFFFFFFFF，使用的频道名必须与用于识别各回路测试的频道名一致。"
  }, {
    heading: "channelid",
    content: "用于标识每次音视频通话回路测试的频道名。为确保回路测试正常运行，当同一个项目（App ID）的用户在不同设备上进行音视频通话回路测试时，所传入的频道名不能相同。"
  }, {
    heading: "intervalinseconds",
    content: "设置返回音视频回路测试结果的时间间隔或延迟，单位为秒。取值范围为 \\[2, 10]，默认值为 2。"
  }, {
    heading: "intervalinseconds",
    content: "对于音频回路测试，根据设置的时间间隔返回测试结果。"
  }, {
    heading: "intervalinseconds",
    content: "对于视频回路测试，视频会短时间内显示，之后延迟逐步增加，直到达到你设定的值。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "view",
    content: "`view`"
  }, {
    id: "enableaudio",
    content: "`enableAudio`"
  }, {
    id: "enablevideo",
    content: "`enableVideo`"
  }, {
    id: "token",
    content: "`token`"
  }, {
    id: "channelid",
    content: "`channelId`"
  }, {
    id: "intervalinseconds",
    content: "`intervalInSeconds`"
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
  url: "#view",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "view"
    })
  })
}, {
  depth: 3,
  url: "#enableaudio",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enableAudio"
    })
  })
}, {
  depth: 3,
  url: "#enablevideo",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enableVideo"
    })
  })
}, {
  depth: 3,
  url: "#token",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "token"
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
  url: "#intervalinseconds",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "intervalInSeconds"
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
      id: "class_echotestconfiguration__prototype"
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
              children: " EchoTestConfiguration"
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
              children: " SurfaceView view "
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
              children: " null"
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
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " enableAudio "
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " enableVideo "
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
              children: " String token "
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
              children: " null"
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
              children: " String channelId "
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
              children: " null"
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
              children: " intervalInSeconds "
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
      id: "class_echotestconfiguration__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "view",
      children: _jsx(_components.code, {
        children: "view"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用于渲染本地用户视频的视图。该参数仅适用于测试视频设备的场景，即当 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 为 true 时有效。详见 ", _jsx(_components.code, {
        children: "SurfaceView"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "enableaudio",
      children: _jsx(_components.code, {
        children: "enableAudio"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用音频设备进行回路测试："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：（默认）启用音频设备。要测试音频设备，请将此参数设置为 true。"
      }), `
`, _jsx(_components.li, {
        children: "false：不启用音频设备。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "enablevideo",
      children: _jsx(_components.code, {
        children: "enableVideo"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用视频设备进行回路测试："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：（默认）启用视频设备。要测试视频设备，请将此参数设置为 true。"
      }), `
`, _jsx(_components.li, {
        children: "false：不启用视频设备。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "token",
      children: _jsx(_components.code, {
        children: "token"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用于保障音视频通话回路测试安全的动态密钥（Token）。如果你未在声网控制台启用 App Certificate，可不传此参数；如果你已启用 App Certificate，必须传入 Token。生成 Token 时使用的 ", _jsx(_components.code, {
        children: "uid"
      }), " 必须为 0xFFFFFFFF，使用的频道名必须与用于识别各回路测试的频道名一致。"]
    }), `
`, _jsx(_components.h3, {
      id: "channelid",
      children: _jsx(_components.code, {
        children: "channelId"
      })
    }), `
`, _jsx(_components.p, {
      children: "用于标识每次音视频通话回路测试的频道名。为确保回路测试正常运行，当同一个项目（App ID）的用户在不同设备上进行音视频通话回路测试时，所传入的频道名不能相同。"
    }), `
`, _jsx(_components.h3, {
      id: "intervalinseconds",
      children: _jsx(_components.code, {
        children: "intervalInSeconds"
      })
    }), `
`, _jsx(_components.p, {
      children: "设置返回音视频回路测试结果的时间间隔或延迟，单位为秒。取值范围为 [2, 10]，默认值为 2。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "对于音频回路测试，根据设置的时间间隔返回测试结果。"
      }), `
`, _jsx(_components.li, {
        children: "对于视频回路测试，视频会短时间内显示，之后延迟逐步增加，直到达到你设定的值。"
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
