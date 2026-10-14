import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "LiveTranscoding",
  description: "用于配置媒体推流的转码参数。"
};
export let _markdown = `

<a id="class_livetranscoding__prototype" />

\`\`\`java
public class LiveTranscoding {
  public int width;
  public int height;
  public int videoBitrate;
  public int videoFramerate;
  @Deprecated public boolean lowLatency;
  public int videoGop;
  private ArrayList<AgoraImage> watermarkList;
  private ArrayList<AgoraImage> backgroundImageList;
  public AudioSampleRateType audioSampleRate;
  public int audioBitrate;
  public int audioChannels;
  public AudioCodecProfileType audioCodecProfile;
  public VideoCodecProfileType videoCodecProfile;
  public VideoCodecType videoCodecType;
  @Deprecated public int userCount;
  @Deprecated public int backgroundColor;
  public String userConfigExtraInfo;
  @Deprecated public String metadata;
  private Map<Integer, TranscodingUser> transcodingUsers;
  private Map<String, Boolean> advancedFeatures;
}
\`\`\`

<a id="class_livetranscoding__parameters" />

## 属性 [#属性]

### \`width\` [#width]

视频宽度，单位为像素，默认值为 360。

* 当推送视频流至 CDN 时， width 的取值范围为 \\[64,1920]。若该值小于 64，声网服务器会自动调整为 64；若该值大于 1920，则自动调整为 1920。
* 当推送音频流至 CDN 时，请将 width 和 height 设置为 0。

### \`height\` [#height]

视频高度，单位为像素，默认值为 640。

* 当推送视频流至 CDN 时， height 的取值范围为 \\[64,1080]。若该值小于 64，声网服务器会自动调整为 64；若该值大于 1080，则自动调整为 1080。
* 当推送音频流至 CDN 时，请将 width 和 height 设置为 0。

### \`videoBitrate\` [#videobitrate]

视频编码码率（Kbps）。无需设置该参数，仅保留默认值 STANDARD\\_BITRATE 即可。SDK 会根据已设置的视频分辨率和帧率自动匹配最合适的码率。关于视频分辨率与帧率的对应关系，详见 \`Video profile\`。

### \`videoFramerate\` [#videoframerate]

媒体推流设置的视频输出帧率（fps），默认值为 15。该值的取值范围为 (0,30]。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    声网服务器会将大于 30 的值调整为 30。
  </CalloutDescription>
</CalloutContainer>

### \`lowLatency\` [#lowlatency]

延迟模式：

* true：低延迟模式，但无法保证画质。
* false：默认值，高延迟但可保证画质。

### \`videoGop\` [#videogop]

媒体推流中视频帧的 GOP（图像组）设置，单位为帧，默认值为 30。

### \`audioSampleRate\` [#audiosamplerate]

媒体输出流的音频采样率（Hz）。详见 [AudioSampleRateType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-audiosampleratetype)。

### \`audioBitrate\` [#audiobitrate]

音频输出流的编码码率，单位为 Kbps，默认值为 48，最大值为 128。

### \`audioChannels\` [#audiochannels]

媒体推流使用的音频声道数。声网建议选择 1（单声道）或 2（立体声）。若选择 3、4 或 5，则需要特定播放器支持。

* 1：默认值，单声道。
* 2：立体声。
* 3：三声道。
* 4：四声道。
* 5：五声道。

### \`audioCodecProfile\` [#audiocodecprofile]

媒体推流使用的音频编码器配置类型。详见 [AudioCodecProfileType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-audiocodecprofiletype)。

### \`videoCodecProfile\` [#videocodecprofile]

媒体推流使用的视频编码器配置类型。可设置为 66、77 或默认值 100。详见 [VideoCodecProfileType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videocodecprofiletype)。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果设置为其他值，声网会自动使用默认值。
  </CalloutDescription>
</CalloutContainer>

### \`videoCodecType\` [#videocodectype]

媒体推流使用的视频编码器类型。详见 [VideoCodecType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videocodectypeforstream)。

### \`userCount\` [#usercount]

媒体推流中用户数量，取值范围为 \\[0,17]。

### \`userConfigExtraInfo\` [#userconfigextrainfo]

保留字段。用于将用户自定义的信息以 SEI 的形式随 H.264/H.265 视频流发送至 CDN 侧播放端，最大字节长度为 4096。

### \`metadata\` [#metadata]

发送至 CDN 客户端的元数据内容。
`;
export let structuredData = {
  contents: [{
    heading: "width",
    content: "视频宽度，单位为像素，默认值为 360。"
  }, {
    heading: "width",
    content: "当推送视频流至 CDN 时， width 的取值范围为 \\[64,1920]。若该值小于 64，声网服务器会自动调整为 64；若该值大于 1920，则自动调整为 1920。"
  }, {
    heading: "width",
    content: "当推送音频流至 CDN 时，请将 width 和 height 设置为 0。"
  }, {
    heading: "height",
    content: "视频高度，单位为像素，默认值为 640。"
  }, {
    heading: "height",
    content: "当推送视频流至 CDN 时， height 的取值范围为 \\[64,1080]。若该值小于 64，声网服务器会自动调整为 64；若该值大于 1080，则自动调整为 1080。"
  }, {
    heading: "height",
    content: "当推送音频流至 CDN 时，请将 width 和 height 设置为 0。"
  }, {
    heading: "videobitrate",
    content: "视频编码码率（Kbps）。无需设置该参数，仅保留默认值 STANDARD\\_BITRATE 即可。SDK 会根据已设置的视频分辨率和帧率自动匹配最合适的码率。关于视频分辨率与帧率的对应关系，详见 `Video profile`。"
  }, {
    heading: "videoframerate",
    content: "媒体推流设置的视频输出帧率（fps），默认值为 15。该值的取值范围为 (0,30]。"
  }, {
    heading: "videoframerate",
    content: "声网服务器会将大于 30 的值调整为 30。"
  }, {
    heading: "lowlatency",
    content: "延迟模式："
  }, {
    heading: "lowlatency",
    content: "true：低延迟模式，但无法保证画质。"
  }, {
    heading: "lowlatency",
    content: "false：默认值，高延迟但可保证画质。"
  }, {
    heading: "videogop",
    content: "媒体推流中视频帧的 GOP（图像组）设置，单位为帧，默认值为 30。"
  }, {
    heading: "audiosamplerate",
    content: "媒体输出流的音频采样率（Hz）。详见 AudioSampleRateType。"
  }, {
    heading: "audiobitrate",
    content: "音频输出流的编码码率，单位为 Kbps，默认值为 48，最大值为 128。"
  }, {
    heading: "audiochannels",
    content: "媒体推流使用的音频声道数。声网建议选择 1（单声道）或 2（立体声）。若选择 3、4 或 5，则需要特定播放器支持。"
  }, {
    heading: "audiochannels",
    content: "1：默认值，单声道。"
  }, {
    heading: "audiochannels",
    content: "2：立体声。"
  }, {
    heading: "audiochannels",
    content: "3：三声道。"
  }, {
    heading: "audiochannels",
    content: "4：四声道。"
  }, {
    heading: "audiochannels",
    content: "5：五声道。"
  }, {
    heading: "audiocodecprofile",
    content: "媒体推流使用的音频编码器配置类型。详见 AudioCodecProfileType。"
  }, {
    heading: "videocodecprofile",
    content: "媒体推流使用的视频编码器配置类型。可设置为 66、77 或默认值 100。详见 VideoCodecProfileType。"
  }, {
    heading: "videocodecprofile",
    content: "如果设置为其他值，声网会自动使用默认值。"
  }, {
    heading: "videocodectype",
    content: "媒体推流使用的视频编码器类型。详见 VideoCodecType。"
  }, {
    heading: "usercount",
    content: "媒体推流中用户数量，取值范围为 \\[0,17]。"
  }, {
    heading: "userconfigextrainfo",
    content: "保留字段。用于将用户自定义的信息以 SEI 的形式随 H.264/H.265 视频流发送至 CDN 侧播放端，最大字节长度为 4096。"
  }, {
    heading: "metadata",
    content: "发送至 CDN 客户端的元数据内容。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "width",
    content: "`width`"
  }, {
    id: "height",
    content: "`height`"
  }, {
    id: "videobitrate",
    content: "`videoBitrate`"
  }, {
    id: "videoframerate",
    content: "`videoFramerate`"
  }, {
    id: "lowlatency",
    content: "`lowLatency`"
  }, {
    id: "videogop",
    content: "`videoGop`"
  }, {
    id: "audiosamplerate",
    content: "`audioSampleRate`"
  }, {
    id: "audiobitrate",
    content: "`audioBitrate`"
  }, {
    id: "audiochannels",
    content: "`audioChannels`"
  }, {
    id: "audiocodecprofile",
    content: "`audioCodecProfile`"
  }, {
    id: "videocodecprofile",
    content: "`videoCodecProfile`"
  }, {
    id: "videocodectype",
    content: "`videoCodecType`"
  }, {
    id: "usercount",
    content: "`userCount`"
  }, {
    id: "userconfigextrainfo",
    content: "`userConfigExtraInfo`"
  }, {
    id: "metadata",
    content: "`metadata`"
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
  url: "#videobitrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoBitrate"
    })
  })
}, {
  depth: 3,
  url: "#videoframerate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoFramerate"
    })
  })
}, {
  depth: 3,
  url: "#lowlatency",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "lowLatency"
    })
  })
}, {
  depth: 3,
  url: "#videogop",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoGop"
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
  url: "#audiobitrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "audioBitrate"
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
  url: "#audiocodecprofile",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "audioCodecProfile"
    })
  })
}, {
  depth: 3,
  url: "#videocodecprofile",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoCodecProfile"
    })
  })
}, {
  depth: 3,
  url: "#videocodectype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoCodecType"
    })
  })
}, {
  depth: 3,
  url: "#usercount",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "userCount"
    })
  })
}, {
  depth: 3,
  url: "#userconfigextrainfo",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "userConfigExtraInfo"
    })
  })
}, {
  depth: 3,
  url: "#metadata",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "metadata"
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
      id: "class_livetranscoding__prototype"
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
              children: " LiveTranscoding"
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
              children: " videoBitrate;"
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
              children: " videoFramerate;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  @"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "Deprecated"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " public"
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
              children: " lowLatency;"
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
              children: " videoGop;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  private"
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
              children: "AgoraImage"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "> watermarkList;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  private"
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
              children: "AgoraImage"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "> backgroundImageList;"
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
              children: " AudioSampleRateType audioSampleRate;"
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
              children: " audioBitrate;"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " AudioCodecProfileType audioCodecProfile;"
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
              children: " VideoCodecProfileType videoCodecProfile;"
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
              children: " VideoCodecType videoCodecType;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  @"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "Deprecated"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " public"
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
              children: " userCount;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  @"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "Deprecated"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " public"
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
              children: " backgroundColor;"
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
              children: " String userConfigExtraInfo;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  @"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "Deprecated"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String metadata;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  private"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Map<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "Integer"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "TranscodingUser"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "> transcodingUsers;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  private"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Map<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "Boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "> advancedFeatures;"
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
      id: "class_livetranscoding__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "width",
      children: _jsx(_components.code, {
        children: "width"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频宽度，单位为像素，默认值为 360。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "当推送视频流至 CDN 时， width 的取值范围为 [64,1920]。若该值小于 64，声网服务器会自动调整为 64；若该值大于 1920，则自动调整为 1920。"
      }), `
`, _jsx(_components.li, {
        children: "当推送音频流至 CDN 时，请将 width 和 height 设置为 0。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "height",
      children: _jsx(_components.code, {
        children: "height"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频高度，单位为像素，默认值为 640。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "当推送视频流至 CDN 时， height 的取值范围为 [64,1080]。若该值小于 64，声网服务器会自动调整为 64；若该值大于 1080，则自动调整为 1080。"
      }), `
`, _jsx(_components.li, {
        children: "当推送音频流至 CDN 时，请将 width 和 height 设置为 0。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "videobitrate",
      children: _jsx(_components.code, {
        children: "videoBitrate"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频编码码率（Kbps）。无需设置该参数，仅保留默认值 STANDARD_BITRATE 即可。SDK 会根据已设置的视频分辨率和帧率自动匹配最合适的码率。关于视频分辨率与帧率的对应关系，详见 ", _jsx(_components.code, {
        children: "Video profile"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "videoframerate",
      children: _jsx(_components.code, {
        children: "videoFramerate"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体推流设置的视频输出帧率（fps），默认值为 15。该值的取值范围为 (0,30]。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "声网服务器会将大于 30 的值调整为 30。"
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "lowlatency",
      children: _jsx(_components.code, {
        children: "lowLatency"
      })
    }), `
`, _jsx(_components.p, {
      children: "延迟模式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：低延迟模式，但无法保证画质。"
      }), `
`, _jsx(_components.li, {
        children: "false：默认值，高延迟但可保证画质。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "videogop",
      children: _jsx(_components.code, {
        children: "videoGop"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体推流中视频帧的 GOP（图像组）设置，单位为帧，默认值为 30。"
    }), `
`, _jsx(_components.h3, {
      id: "audiosamplerate",
      children: _jsx(_components.code, {
        children: "audioSampleRate"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体输出流的音频采样率（Hz）。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-audiosampleratetype",
        children: "AudioSampleRateType"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "audiobitrate",
      children: _jsx(_components.code, {
        children: "audioBitrate"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频输出流的编码码率，单位为 Kbps，默认值为 48，最大值为 128。"
    }), `
`, _jsx(_components.h3, {
      id: "audiochannels",
      children: _jsx(_components.code, {
        children: "audioChannels"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体推流使用的音频声道数。声网建议选择 1（单声道）或 2（立体声）。若选择 3、4 或 5，则需要特定播放器支持。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：默认值，单声道。"
      }), `
`, _jsx(_components.li, {
        children: "2：立体声。"
      }), `
`, _jsx(_components.li, {
        children: "3：三声道。"
      }), `
`, _jsx(_components.li, {
        children: "4：四声道。"
      }), `
`, _jsx(_components.li, {
        children: "5：五声道。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "audiocodecprofile",
      children: _jsx(_components.code, {
        children: "audioCodecProfile"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体推流使用的音频编码器配置类型。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-audiocodecprofiletype",
        children: "AudioCodecProfileType"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "videocodecprofile",
      children: _jsx(_components.code, {
        children: "videoCodecProfile"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体推流使用的视频编码器配置类型。可设置为 66、77 或默认值 100。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videocodecprofiletype",
        children: "VideoCodecProfileType"
      }), "。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "如果设置为其他值，声网会自动使用默认值。"
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "videocodectype",
      children: _jsx(_components.code, {
        children: "videoCodecType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体推流使用的视频编码器类型。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videocodectypeforstream",
        children: "VideoCodecType"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "usercount",
      children: _jsx(_components.code, {
        children: "userCount"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体推流中用户数量，取值范围为 [0,17]。"
    }), `
`, _jsx(_components.h3, {
      id: "userconfigextrainfo",
      children: _jsx(_components.code, {
        children: "userConfigExtraInfo"
      })
    }), `
`, _jsx(_components.p, {
      children: "保留字段。用于将用户自定义的信息以 SEI 的形式随 H.264/H.265 视频流发送至 CDN 侧播放端，最大字节长度为 4096。"
    }), `
`, _jsx(_components.h3, {
      id: "metadata",
      children: _jsx(_components.code, {
        children: "metadata"
      })
    }), `
`, _jsx(_components.p, {
      children: "发送至 CDN 客户端的元数据内容。"
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
