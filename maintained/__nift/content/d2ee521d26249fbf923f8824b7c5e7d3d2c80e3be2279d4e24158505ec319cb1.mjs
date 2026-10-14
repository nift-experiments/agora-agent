import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "MediaRecorderConfiguration",
  description: "用于配置音视频流的录制参数。"
};
export let _markdown = `

<a id="class_mediarecorderconfiguration__prototype" />

\`\`\`java
public static class MediaRecorderConfiguration {
  public String storagePath;
  public int containerFormat = CONTAINER_MP4;
  public int streamType = STREAM_TYPE_BOTH;
  public int maxDurationMs = 120000;
  public int recorderInfoUpdateInterval = 0;
  public int width;
  public int height;
  public int fps;
  public int sample_rate;
  public int channel_num;
  public int videoSourceType;
}
\`\`\`

<a id="class_mediarecorderconfiguration__detailed_desc" />

### \`自从\` [#自从]

自 v3.5.2 版本新增。

<a id="class_mediarecorderconfiguration__parameters" />

## 属性 [#属性]

### \`storagePath\` [#storagepath]

（必填）本地保存录制文件的绝对路径，路径需包含文件名及扩展名。例如：Android: \`/storage/emulated/0/Android/data/<package name>/files/example.mp4\`。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请确保指定路径存在且可写。
  </CalloutDescription>
</CalloutContainer>

### \`containerFormat\` [#containerformat]

录制文件的封装格式。目前仅支持：

* CONTAINER\\_MP4：MP4 格式。

### \`streamType\` [#streamtype]

录制内容类型：

* STREAM\\_TYPE\\_AUDIO：仅录制音频。
* STREAM\\_TYPE\\_VIDEO：仅录制视频。
* STREAM\\_TYPE\\_BOTH：（默认）同时录制音频和视频。

### \`maxDurationMs\` [#maxdurationms]

录制的最⼤时长，单位为毫秒。默认值为 120000。

### \`recorderInfoUpdateInterval\` [#recorderinfoupdateinterval]

录制信息的更新间隔，单位为毫秒。有效范围为 \\[1000, 10000]。SDK 会根据该值触发 [onRecorderInfoUpdated](/zh-CN/api-reference/rtc/android/recording#callback_imediarecorderobserver_onrecorderinfoupdated) 回调以更新录制信息。

### \`width\` [#width]

（必填）录制视频的宽度（像素）。宽高乘积的最大值不得超过 3840 × 2160。

### \`height\` [#height]

（必填）录制视频的高度（像素）。宽高乘积的最大值不得超过 3840 × 2160。

### \`fps\` [#fps]

（必填）录制视频的帧率。最大帧率不能超过 30，例如：5、10、15、24、30 等。

### \`sample_rate\` [#sample_rate]

（必填）录制音频的采样率（Hz）。可设置为 16000、32000、44100、48000。

### \`channel_num\` [#channel_num]

（必填）录制音频的声道数：

* 1：单声道。
* 2：立体声。

### \`videoSourceType\` [#videosourcetype]

（必填）录制使用的视频源类型。详见 [VideoSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype)。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v3.5.2 版本新增。"
  }, {
    heading: "storagepath",
    content: "（必填）本地保存录制文件的绝对路径，路径需包含文件名及扩展名。例如：Android: `/storage/emulated/0/Android/data/<package name>/files/example.mp4`。"
  }, {
    heading: "storagepath",
    content: "请确保指定路径存在且可写。"
  }, {
    heading: "containerformat",
    content: "录制文件的封装格式。目前仅支持："
  }, {
    heading: "containerformat",
    content: "CONTAINER\\_MP4：MP4 格式。"
  }, {
    heading: "streamtype",
    content: "录制内容类型："
  }, {
    heading: "streamtype",
    content: "STREAM\\_TYPE\\_AUDIO：仅录制音频。"
  }, {
    heading: "streamtype",
    content: "STREAM\\_TYPE\\_VIDEO：仅录制视频。"
  }, {
    heading: "streamtype",
    content: "STREAM\\_TYPE\\_BOTH：（默认）同时录制音频和视频。"
  }, {
    heading: "maxdurationms",
    content: "录制的最⼤时长，单位为毫秒。默认值为 120000。"
  }, {
    heading: "recorderinfoupdateinterval",
    content: "录制信息的更新间隔，单位为毫秒。有效范围为 \\[1000, 10000]。SDK 会根据该值触发 onRecorderInfoUpdated 回调以更新录制信息。"
  }, {
    heading: "width",
    content: "（必填）录制视频的宽度（像素）。宽高乘积的最大值不得超过 3840 × 2160。"
  }, {
    heading: "height",
    content: "（必填）录制视频的高度（像素）。宽高乘积的最大值不得超过 3840 × 2160。"
  }, {
    heading: "fps",
    content: "（必填）录制视频的帧率。最大帧率不能超过 30，例如：5、10、15、24、30 等。"
  }, {
    heading: "sample_rate",
    content: "（必填）录制音频的采样率（Hz）。可设置为 16000、32000、44100、48000。"
  }, {
    heading: "channel_num",
    content: "（必填）录制音频的声道数："
  }, {
    heading: "channel_num",
    content: "1：单声道。"
  }, {
    heading: "channel_num",
    content: "2：立体声。"
  }, {
    heading: "videosourcetype",
    content: "（必填）录制使用的视频源类型。详见 VideoSourceType。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "属性",
    content: "属性"
  }, {
    id: "storagepath",
    content: "`storagePath`"
  }, {
    id: "containerformat",
    content: "`containerFormat`"
  }, {
    id: "streamtype",
    content: "`streamType`"
  }, {
    id: "maxdurationms",
    content: "`maxDurationMs`"
  }, {
    id: "recorderinfoupdateinterval",
    content: "`recorderInfoUpdateInterval`"
  }, {
    id: "width",
    content: "`width`"
  }, {
    id: "height",
    content: "`height`"
  }, {
    id: "fps",
    content: "`fps`"
  }, {
    id: "sample_rate",
    content: "`sample_rate`"
  }, {
    id: "channel_num",
    content: "`channel_num`"
  }, {
    id: "videosourcetype",
    content: "`videoSourceType`"
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
  url: "#storagepath",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "storagePath"
    })
  })
}, {
  depth: 3,
  url: "#containerformat",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "containerFormat"
    })
  })
}, {
  depth: 3,
  url: "#streamtype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "streamType"
    })
  })
}, {
  depth: 3,
  url: "#maxdurationms",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "maxDurationMs"
    })
  })
}, {
  depth: 3,
  url: "#recorderinfoupdateinterval",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "recorderInfoUpdateInterval"
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
  url: "#fps",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "fps"
    })
  })
}, {
  depth: 3,
  url: "#sample_rate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sample_rate"
    })
  })
}, {
  depth: 3,
  url: "#channel_num",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channel_num"
    })
  })
}, {
  depth: 3,
  url: "#videosourcetype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoSourceType"
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
      id: "class_mediarecorderconfiguration__prototype"
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
              children: " MediaRecorderConfiguration"
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
              children: " String storagePath;"
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
              children: " containerFormat "
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
              children: " CONTAINER_MP4;"
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
              children: " streamType "
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
              children: " STREAM_TYPE_BOTH;"
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
              children: " maxDurationMs "
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
              children: " 120000"
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
              children: " recorderInfoUpdateInterval "
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
              children: " width;"
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
              children: " height;"
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
              children: " fps;"
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
              children: " sample_rate;"
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
              children: " channel_num;"
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
              children: " videoSourceType;"
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
      id: "class_mediarecorderconfiguration__detailed_desc"
    }), `
`, _jsx(_components.h3, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.5.2 版本新增。"
    }), `
`, _jsx("a", {
      id: "class_mediarecorderconfiguration__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "storagepath",
      children: _jsx(_components.code, {
        children: "storagePath"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（必填）本地保存录制文件的绝对路径，路径需包含文件名及扩展名。例如：Android: ", _jsx(_components.code, {
        children: "/storage/emulated/0/Android/data/<package name>/files/example.mp4"
      }), "。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "请确保指定路径存在且可写。"
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "containerformat",
      children: _jsx(_components.code, {
        children: "containerFormat"
      })
    }), `
`, _jsx(_components.p, {
      children: "录制文件的封装格式。目前仅支持："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "CONTAINER_MP4：MP4 格式。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "streamtype",
      children: _jsx(_components.code, {
        children: "streamType"
      })
    }), `
`, _jsx(_components.p, {
      children: "录制内容类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "STREAM_TYPE_AUDIO：仅录制音频。"
      }), `
`, _jsx(_components.li, {
        children: "STREAM_TYPE_VIDEO：仅录制视频。"
      }), `
`, _jsx(_components.li, {
        children: "STREAM_TYPE_BOTH：（默认）同时录制音频和视频。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "maxdurationms",
      children: _jsx(_components.code, {
        children: "maxDurationMs"
      })
    }), `
`, _jsx(_components.p, {
      children: "录制的最⼤时长，单位为毫秒。默认值为 120000。"
    }), `
`, _jsx(_components.h3, {
      id: "recorderinfoupdateinterval",
      children: _jsx(_components.code, {
        children: "recorderInfoUpdateInterval"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["录制信息的更新间隔，单位为毫秒。有效范围为 [1000, 10000]。SDK 会根据该值触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/recording#callback_imediarecorderobserver_onrecorderinfoupdated",
        children: "onRecorderInfoUpdated"
      }), " 回调以更新录制信息。"]
    }), `
`, _jsx(_components.h3, {
      id: "width",
      children: _jsx(_components.code, {
        children: "width"
      })
    }), `
`, _jsx(_components.p, {
      children: "（必填）录制视频的宽度（像素）。宽高乘积的最大值不得超过 3840 × 2160。"
    }), `
`, _jsx(_components.h3, {
      id: "height",
      children: _jsx(_components.code, {
        children: "height"
      })
    }), `
`, _jsx(_components.p, {
      children: "（必填）录制视频的高度（像素）。宽高乘积的最大值不得超过 3840 × 2160。"
    }), `
`, _jsx(_components.h3, {
      id: "fps",
      children: _jsx(_components.code, {
        children: "fps"
      })
    }), `
`, _jsx(_components.p, {
      children: "（必填）录制视频的帧率。最大帧率不能超过 30，例如：5、10、15、24、30 等。"
    }), `
`, _jsx(_components.h3, {
      id: "sample_rate",
      children: _jsx(_components.code, {
        children: "sample_rate"
      })
    }), `
`, _jsx(_components.p, {
      children: "（必填）录制音频的采样率（Hz）。可设置为 16000、32000、44100、48000。"
    }), `
`, _jsx(_components.h3, {
      id: "channel_num",
      children: _jsx(_components.code, {
        children: "channel_num"
      })
    }), `
`, _jsx(_components.p, {
      children: "（必填）录制音频的声道数："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：单声道。"
      }), `
`, _jsx(_components.li, {
        children: "2：立体声。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "videosourcetype",
      children: _jsx(_components.code, {
        children: "videoSourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（必填）录制使用的视频源类型。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype",
        children: "VideoSourceType"
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
