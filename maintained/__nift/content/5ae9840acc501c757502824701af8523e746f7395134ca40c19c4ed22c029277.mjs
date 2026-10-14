import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "VideoCaptureParameters",
  description: "配置共享屏幕的视频参数。"
};
export let _markdown = `

<a id="class_screenvideoparameters__prototype" />

\`\`\`java
public static class VideoCaptureParameters {
    public int bitrate = 0;
    public int framerate = 15;
    public int width = 1280;
    public int height = 720;
    public int contentHint = Constants.SCREEN_CAPTURE_CONTENT_HINT_MOTION;
  }
\`\`\`

<a id="class_screenvideoparameters__detailed_desc" />

### \`自从\` [#自从]

自 v3.7.0 版本新增。

仅当参数 \`captureVideo\` 为 true 时可用。

<a id="class_screenvideoparameters__parameters" />

## 属性 [#属性]

### \`bitrate\` [#bitrate]

视频编码码率（单位：Kbps）。

### \`framerate\` [#framerate]

视频编码帧率（单位：fps），默认值为 15。

### \`width\` [#width]

注： 屏幕共享流的计费基于此参数值。当不传入该参数时，声网按 1280 × 720 收费；传入该参数时，声网按设置值计费。 该参数不代表输出视频的旋转方向，设置方向详见 [ORIENTATION\\_MODE](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-orientationmode)。 是否支持 720p 或更高分辨率取决于设备性能，如设备不支持，则帧率可能低于设置值。 在文档共享（\`SCREEN_SCENARIO_DOCUMENT\` ）场景中设置编码分辨率时，建议如下：

* 追求最佳画质：建议编码分辨率与采集分辨率一致；
* 平衡画质、带宽和系统性能：
  * 若采集分辨率大于 1920 × 1080，编码分辨率建议不小于 1920 × 1080；
  * 若采集分辨率小于 1920 × 1080，编码分辨率建议不小于 1280 × 720。

视频编码分辨率的宽度（单位：px），默认值为 1280。如果宽高比与屏幕不一致，SDK 会按以下规则调整：以 1280 × 720 的宽高为例：

* 当屏幕宽高均小于设定值时，使用屏幕原始分辨率。例如，屏幕为 640 × 360，则编码分辨率使用 640 × 360；
* 当屏幕宽或高高于设定值时，SDK 会在不超过设定值的范围内，保持屏幕宽高比例调整分辨率。例如，屏幕为 2000 × 1500，则编码分辨率使用 960 × 720。

### \`height\` [#height]

注： 屏幕共享流的计费基于此参数值。当不传入该参数时，声网按 1280 × 720 收费；传入该参数时，声网按设置值计费。 该参数不代表输出视频的旋转方向，设置方向详见 [ORIENTATION\\_MODE](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-orientationmode)。 是否支持 720p 或更高分辨率取决于设备性能，如设备不支持，则帧率可能低于设置值。 在文档共享（\`SCREEN_SCENARIO_DOCUMENT\` ）场景中设置编码分辨率时，建议如下：

* 追求最佳画质：建议编码分辨率与采集分辨率一致；
* 平衡画质、带宽和系统性能：
  * 若采集分辨率大于 1920 × 1080，编码分辨率建议不小于 1920 × 1080；
  * 若采集分辨率小于 1920 × 1080，编码分辨率建议不小于 1280 × 720。

视频编码分辨率的高度（单位：px），默认值为 720。如果宽高比与屏幕不一致，SDK 会按以下规则调整：以 1280 × 720 的宽高为例：

* 当屏幕宽高均小于设定值时，使用屏幕原始分辨率。例如，屏幕为 640 × 360，则编码分辨率使用 640 × 360；
* 当屏幕宽或高高于设定值时，SDK 会在不超过设定值的范围内，保持屏幕宽高比例调整分辨率。例如，屏幕为 2000 × 1500，则编码分辨率使用 960 × 720。

### \`contentHint\` [#contenthint]

共享屏幕场景下的内容提示选项：

* SCREEN\\_CAPTURE\\_CONTENT\\_HINT\\_NONE （0）：默认值，无内容提示；
* SCREEN\\_CAPTURE\\_CONTENT\\_HINT\\_MOTION （1）：运动内容，适用于偏重流畅度或共享影片、视频和游戏；
* SCREEN\\_CAPTURE\\_CONTENT\\_HINT\\_DETAILS （2）：静态内容，适用于偏重清晰度或共享图片、PPT 或文本内容。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v3.7.0 版本新增。"
  }, {
    heading: "自从",
    content: "仅当参数 `captureVideo` 为 true 时可用。"
  }, {
    heading: "bitrate",
    content: "视频编码码率（单位：Kbps）。"
  }, {
    heading: "framerate",
    content: "视频编码帧率（单位：fps），默认值为 15。"
  }, {
    heading: "width",
    content: "注： 屏幕共享流的计费基于此参数值。当不传入该参数时，声网按 1280 × 720 收费；传入该参数时，声网按设置值计费。 该参数不代表输出视频的旋转方向，设置方向详见 ORIENTATION\\_MODE。 是否支持 720p 或更高分辨率取决于设备性能，如设备不支持，则帧率可能低于设置值。 在文档共享（`SCREEN_SCENARIO_DOCUMENT` ）场景中设置编码分辨率时，建议如下："
  }, {
    heading: "width",
    content: "追求最佳画质：建议编码分辨率与采集分辨率一致；"
  }, {
    heading: "width",
    content: "平衡画质、带宽和系统性能："
  }, {
    heading: "width",
    content: "若采集分辨率大于 1920 × 1080，编码分辨率建议不小于 1920 × 1080；"
  }, {
    heading: "width",
    content: "若采集分辨率小于 1920 × 1080，编码分辨率建议不小于 1280 × 720。"
  }, {
    heading: "width",
    content: "视频编码分辨率的宽度（单位：px），默认值为 1280。如果宽高比与屏幕不一致，SDK 会按以下规则调整：以 1280 × 720 的宽高为例："
  }, {
    heading: "width",
    content: "当屏幕宽高均小于设定值时，使用屏幕原始分辨率。例如，屏幕为 640 × 360，则编码分辨率使用 640 × 360；"
  }, {
    heading: "width",
    content: "当屏幕宽或高高于设定值时，SDK 会在不超过设定值的范围内，保持屏幕宽高比例调整分辨率。例如，屏幕为 2000 × 1500，则编码分辨率使用 960 × 720。"
  }, {
    heading: "height",
    content: "注： 屏幕共享流的计费基于此参数值。当不传入该参数时，声网按 1280 × 720 收费；传入该参数时，声网按设置值计费。 该参数不代表输出视频的旋转方向，设置方向详见 ORIENTATION\\_MODE。 是否支持 720p 或更高分辨率取决于设备性能，如设备不支持，则帧率可能低于设置值。 在文档共享（`SCREEN_SCENARIO_DOCUMENT` ）场景中设置编码分辨率时，建议如下："
  }, {
    heading: "height",
    content: "追求最佳画质：建议编码分辨率与采集分辨率一致；"
  }, {
    heading: "height",
    content: "平衡画质、带宽和系统性能："
  }, {
    heading: "height",
    content: "若采集分辨率大于 1920 × 1080，编码分辨率建议不小于 1920 × 1080；"
  }, {
    heading: "height",
    content: "若采集分辨率小于 1920 × 1080，编码分辨率建议不小于 1280 × 720。"
  }, {
    heading: "height",
    content: "视频编码分辨率的高度（单位：px），默认值为 720。如果宽高比与屏幕不一致，SDK 会按以下规则调整：以 1280 × 720 的宽高为例："
  }, {
    heading: "height",
    content: "当屏幕宽高均小于设定值时，使用屏幕原始分辨率。例如，屏幕为 640 × 360，则编码分辨率使用 640 × 360；"
  }, {
    heading: "height",
    content: "当屏幕宽或高高于设定值时，SDK 会在不超过设定值的范围内，保持屏幕宽高比例调整分辨率。例如，屏幕为 2000 × 1500，则编码分辨率使用 960 × 720。"
  }, {
    heading: "contenthint",
    content: "共享屏幕场景下的内容提示选项："
  }, {
    heading: "contenthint",
    content: "SCREEN\\_CAPTURE\\_CONTENT\\_HINT\\_NONE （0）：默认值，无内容提示；"
  }, {
    heading: "contenthint",
    content: "SCREEN\\_CAPTURE\\_CONTENT\\_HINT\\_MOTION （1）：运动内容，适用于偏重流畅度或共享影片、视频和游戏；"
  }, {
    heading: "contenthint",
    content: "SCREEN\\_CAPTURE\\_CONTENT\\_HINT\\_DETAILS （2）：静态内容，适用于偏重清晰度或共享图片、PPT 或文本内容。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "属性",
    content: "属性"
  }, {
    id: "bitrate",
    content: "`bitrate`"
  }, {
    id: "framerate",
    content: "`framerate`"
  }, {
    id: "width",
    content: "`width`"
  }, {
    id: "height",
    content: "`height`"
  }, {
    id: "contenthint",
    content: "`contentHint`"
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
  url: "#bitrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "bitrate"
    })
  })
}, {
  depth: 3,
  url: "#framerate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "framerate"
    })
  })
}, {
  depth: 3,
  url: "#width",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "width"
    })
  })
}, {
  depth: 3,
  url: "#height",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "height"
    })
  })
}, {
  depth: 3,
  url: "#contenthint",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "contentHint"
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
      id: "class_screenvideoparameters__prototype"
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
              children: " VideoCaptureParameters"
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
              children: " bitrate "
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
              children: " framerate "
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
              children: " 15"
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
              children: " width "
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
              children: " 1280"
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
              children: " height "
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
              children: " 720"
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
              children: " contentHint "
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
              children: " Constants.SCREEN_CAPTURE_CONTENT_HINT_MOTION;"
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
      id: "class_screenvideoparameters__detailed_desc"
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
      children: ["仅当参数 ", _jsx(_components.code, {
        children: "captureVideo"
      }), " 为 true 时可用。"]
    }), `
`, _jsx("a", {
      id: "class_screenvideoparameters__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "bitrate",
      children: _jsx(_components.code, {
        children: "bitrate"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频编码码率（单位：Kbps）。"
    }), `
`, _jsx(_components.h3, {
      id: "framerate",
      children: _jsx(_components.code, {
        children: "framerate"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频编码帧率（单位：fps），默认值为 15。"
    }), `
`, _jsx(_components.h3, {
      id: "width",
      children: _jsx(_components.code, {
        children: "width"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["注： 屏幕共享流的计费基于此参数值。当不传入该参数时，声网按 1280 × 720 收费；传入该参数时，声网按设置值计费。 该参数不代表输出视频的旋转方向，设置方向详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-orientationmode",
        children: "ORIENTATION_MODE"
      }), "。 是否支持 720p 或更高分辨率取决于设备性能，如设备不支持，则帧率可能低于设置值。 在文档共享（", _jsx(_components.code, {
        children: "SCREEN_SCENARIO_DOCUMENT"
      }), " ）场景中设置编码分辨率时，建议如下："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "追求最佳画质：建议编码分辨率与采集分辨率一致；"
      }), `
`, _jsxs(_components.li, {
        children: ["平衡画质、带宽和系统性能：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "若采集分辨率大于 1920 × 1080，编码分辨率建议不小于 1920 × 1080；"
          }), `
`, _jsx(_components.li, {
            children: "若采集分辨率小于 1920 × 1080，编码分辨率建议不小于 1280 × 720。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "视频编码分辨率的宽度（单位：px），默认值为 1280。如果宽高比与屏幕不一致，SDK 会按以下规则调整：以 1280 × 720 的宽高为例："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "当屏幕宽高均小于设定值时，使用屏幕原始分辨率。例如，屏幕为 640 × 360，则编码分辨率使用 640 × 360；"
      }), `
`, _jsx(_components.li, {
        children: "当屏幕宽或高高于设定值时，SDK 会在不超过设定值的范围内，保持屏幕宽高比例调整分辨率。例如，屏幕为 2000 × 1500，则编码分辨率使用 960 × 720。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "height",
      children: _jsx(_components.code, {
        children: "height"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["注： 屏幕共享流的计费基于此参数值。当不传入该参数时，声网按 1280 × 720 收费；传入该参数时，声网按设置值计费。 该参数不代表输出视频的旋转方向，设置方向详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-orientationmode",
        children: "ORIENTATION_MODE"
      }), "。 是否支持 720p 或更高分辨率取决于设备性能，如设备不支持，则帧率可能低于设置值。 在文档共享（", _jsx(_components.code, {
        children: "SCREEN_SCENARIO_DOCUMENT"
      }), " ）场景中设置编码分辨率时，建议如下："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "追求最佳画质：建议编码分辨率与采集分辨率一致；"
      }), `
`, _jsxs(_components.li, {
        children: ["平衡画质、带宽和系统性能：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "若采集分辨率大于 1920 × 1080，编码分辨率建议不小于 1920 × 1080；"
          }), `
`, _jsx(_components.li, {
            children: "若采集分辨率小于 1920 × 1080，编码分辨率建议不小于 1280 × 720。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "视频编码分辨率的高度（单位：px），默认值为 720。如果宽高比与屏幕不一致，SDK 会按以下规则调整：以 1280 × 720 的宽高为例："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "当屏幕宽高均小于设定值时，使用屏幕原始分辨率。例如，屏幕为 640 × 360，则编码分辨率使用 640 × 360；"
      }), `
`, _jsx(_components.li, {
        children: "当屏幕宽或高高于设定值时，SDK 会在不超过设定值的范围内，保持屏幕宽高比例调整分辨率。例如，屏幕为 2000 × 1500，则编码分辨率使用 960 × 720。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "contenthint",
      children: _jsx(_components.code, {
        children: "contentHint"
      })
    }), `
`, _jsx(_components.p, {
      children: "共享屏幕场景下的内容提示选项："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "SCREEN_CAPTURE_CONTENT_HINT_NONE （0）：默认值，无内容提示；"
      }), `
`, _jsx(_components.li, {
        children: "SCREEN_CAPTURE_CONTENT_HINT_MOTION （1）：运动内容，适用于偏重流畅度或共享影片、视频和游戏；"
      }), `
`, _jsx(_components.li, {
        children: "SCREEN_CAPTURE_CONTENT_HINT_DETAILS （2）：静态内容，适用于偏重清晰度或共享图片、PPT 或文本内容。"
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
