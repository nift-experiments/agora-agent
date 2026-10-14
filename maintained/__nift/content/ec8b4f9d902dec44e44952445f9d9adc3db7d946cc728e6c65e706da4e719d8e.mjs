import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "LocalVideoStats",
  description: "本地视频流的统计信息。"
};
export let _markdown = `

<a id="class_localvideostats__prototype" />

\`\`\`java
public static class LocalVideoStats {
    public int uid;
    public int sentBitrate;
    public int sentFrameRate;
    public int captureFrameRate;
    public int captureFrameWidth;
    public int captureFrameHeight;
    public int regulatedCaptureFrameRate;
    public int regulatedCaptureFrameWidth;
    public int regulatedCaptureFrameHeight;
    public int encoderOutputFrameRate;
    public int rendererOutputFrameRate;
    public int targetBitrate;
    public int targetFrameRate;
    public int qualityAdaptIndication;
    public int encodedBitrate;
    public int encodedFrameWidth;
    public int encodedFrameHeight;
    public int encodedFrameCount;
    public int codecType;
    public int txPacketLossRate;
    public int captureBrightnessLevel;
    public boolean dualStreamEnabled;
    public int hwEncoderAccelerating;
    public int encodedFrameDepth;
}
\`\`\`

<a id="class_localvideostats__parameters" />

## 属性 [#属性]

### \`uid\` [#uid]

本地用户的用户 ID。

### \`sentBitrate\` [#sentbitrate]

本地视频流在发送过程中的实际码率（Kbps）。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该值不包括由于丢包引起的重传码率。
  </CalloutDescription>
</CalloutContainer>

### \`sentFrameRate\` [#sentframerate]

本地视频流在发送过程中的实际帧率（fps）。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该值不包括由于丢包引起的重传帧率。
  </CalloutDescription>
</CalloutContainer>

### \`captureFrameRate\` [#captureframerate]

采集本地视频流时的帧率（fps）。

### \`captureFrameWidth\` [#captureframewidth]

采集本地视频流时的宽度（px）。

### \`captureFrameHeight\` [#captureframeheight]

采集本地视频流时的高度（px）。

### \`regulatedCaptureFrameRate\` [#regulatedcaptureframerate]

声网 SDK 内建的视频采集调节器根据编码配置调整后的本地视频帧率（fps）。

### \`regulatedCaptureFrameWidth\` [#regulatedcaptureframewidth]

声网 SDK 内建的视频采集调节器根据编码配置调整后的本地视频宽度（px）。

### \`regulatedCaptureFrameHeight\` [#regulatedcaptureframeheight]

声网 SDK 内建的视频采集调节器根据编码配置调整后的本地视频高度（px）。

### \`encoderOutputFrameRate\` [#encoderoutputframerate]

本地视频编码器的输出帧率（fps）。

### \`rendererOutputFrameRate\` [#rendereroutputframerate]

本地视频渲染器的输出帧率（fps）。

### \`targetBitrate\` [#targetbitrate]

当前编码器的目标码率（Kbps）。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该值由 SDK 根据当前网络状况估算得出。
  </CalloutDescription>
</CalloutContainer>

### \`targetFrameRate\` [#targetframerate]

当前编码器的目标帧率（fps）。

### \`qualityAdaptIndication\` [#qualityadaptindication]

本地视频流在统计周期内的画质自适应状态：

* ADAPT\\_NONE (0)：本地视频质量维持不变。
* ADAPT\\_UP\\_BANDWIDTH (1)：由于网络带宽增加，本地视频质量上升。
* ADAPT\\_DOWN\\_BANDWIDTH (2)：由于网络带宽下降，本地视频质量下降。

### \`encodedBitrate\` [#encodedbitrate]

对本地视频流编码时的码率（Kbps）。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该值不包括由于丢包引起的重传码率。
  </CalloutDescription>
</CalloutContainer>

### \`encodedFrameWidth\` [#encodedframewidth]

编码后视频的宽度（px）。

### \`encodedFrameHeight\` [#encodedframeheight]

编码后视频的高度（px）。

### \`encodedFrameCount\` [#encodedframecount]

发送的视频帧总数，表示为聚合值。

### \`codecType\` [#codectype]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    在某些场景下（如采集分辨率较低或设备性能有限），SDK 会自动切换为 H.264 编码格式。
  </CalloutDescription>
</CalloutContainer>

本地视频使用的编码器类型。可选值如下，详见 [VIDEO\\_CODEC\\_TYPE](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videocodectype)：

* VIDEO\\_CODEC\\_VP8 (1)：VP8。
* VIDEO\\_CODEC\\_H264 (2)：H.264。
* VIDEO\\_CODEC\\_H265 (3)：H.265（默认）。

### \`txPacketLossRate\` [#txpacketlossrate]

应用抗丢包策略前，本地客户端到声网服务器的视频丢包率（%）。

### \`captureBrightnessLevel\` [#capturebrightnesslevel]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    等待几秒后，可从下一次回调中的 \`captureBrightnessLevel\` 获取亮度等级。
  </CalloutDescription>
</CalloutContainer>

本地摄像头采集的视频画面的亮度等级：

* CAPTURE\\_BRIGHTNESS\\_LEVEL\\_INVALID (-1)：SDK 未检测到画面亮度。
* CAPTURE\\_BRIGHTNESS\\_LEVEL\\_NORMAL (0)：画面亮度正常。
* CAPTURE\\_BRIGHTNESS\\_LEVEL\\_BRIGHT (1)：画面亮度过亮。
* CAPTURE\\_BRIGHTNESS\\_LEVEL\\_DARK (2)：画面亮度过暗。

### \`dualStreamEnabled\` [#dualstreamenabled]

是否启用了双流功能：

* true：启用双流功能。
* false：未启用双流功能。

### \`hwEncoderAccelerating\` [#hwencoderaccelerating]

本地视频编码加速类型：

* 0：使用软件编码，无加速。
* 1：使用硬件编码进行加速。
`;
export let structuredData = {
  contents: [{
    heading: "uid",
    content: "本地用户的用户 ID。"
  }, {
    heading: "sentbitrate",
    content: "本地视频流在发送过程中的实际码率（Kbps）。"
  }, {
    heading: "sentbitrate",
    content: "该值不包括由于丢包引起的重传码率。"
  }, {
    heading: "sentframerate",
    content: "本地视频流在发送过程中的实际帧率（fps）。"
  }, {
    heading: "sentframerate",
    content: "该值不包括由于丢包引起的重传帧率。"
  }, {
    heading: "captureframerate",
    content: "采集本地视频流时的帧率（fps）。"
  }, {
    heading: "captureframewidth",
    content: "采集本地视频流时的宽度（px）。"
  }, {
    heading: "captureframeheight",
    content: "采集本地视频流时的高度（px）。"
  }, {
    heading: "regulatedcaptureframerate",
    content: "声网 SDK 内建的视频采集调节器根据编码配置调整后的本地视频帧率（fps）。"
  }, {
    heading: "regulatedcaptureframewidth",
    content: "声网 SDK 内建的视频采集调节器根据编码配置调整后的本地视频宽度（px）。"
  }, {
    heading: "regulatedcaptureframeheight",
    content: "声网 SDK 内建的视频采集调节器根据编码配置调整后的本地视频高度（px）。"
  }, {
    heading: "encoderoutputframerate",
    content: "本地视频编码器的输出帧率（fps）。"
  }, {
    heading: "rendereroutputframerate",
    content: "本地视频渲染器的输出帧率（fps）。"
  }, {
    heading: "targetbitrate",
    content: "当前编码器的目标码率（Kbps）。"
  }, {
    heading: "targetbitrate",
    content: "该值由 SDK 根据当前网络状况估算得出。"
  }, {
    heading: "targetframerate",
    content: "当前编码器的目标帧率（fps）。"
  }, {
    heading: "qualityadaptindication",
    content: "本地视频流在统计周期内的画质自适应状态："
  }, {
    heading: "qualityadaptindication",
    content: "ADAPT\\_NONE (0)：本地视频质量维持不变。"
  }, {
    heading: "qualityadaptindication",
    content: "ADAPT\\_UP\\_BANDWIDTH (1)：由于网络带宽增加，本地视频质量上升。"
  }, {
    heading: "qualityadaptindication",
    content: "ADAPT\\_DOWN\\_BANDWIDTH (2)：由于网络带宽下降，本地视频质量下降。"
  }, {
    heading: "encodedbitrate",
    content: "对本地视频流编码时的码率（Kbps）。"
  }, {
    heading: "encodedbitrate",
    content: "该值不包括由于丢包引起的重传码率。"
  }, {
    heading: "encodedframewidth",
    content: "编码后视频的宽度（px）。"
  }, {
    heading: "encodedframeheight",
    content: "编码后视频的高度（px）。"
  }, {
    heading: "encodedframecount",
    content: "发送的视频帧总数，表示为聚合值。"
  }, {
    heading: "codectype",
    content: "在某些场景下（如采集分辨率较低或设备性能有限），SDK 会自动切换为 H.264 编码格式。"
  }, {
    heading: "codectype",
    content: "本地视频使用的编码器类型。可选值如下，详见 VIDEO\\_CODEC\\_TYPE："
  }, {
    heading: "codectype",
    content: "VIDEO\\_CODEC\\_VP8 (1)：VP8。"
  }, {
    heading: "codectype",
    content: "VIDEO\\_CODEC\\_H264 (2)：H.264。"
  }, {
    heading: "codectype",
    content: "VIDEO\\_CODEC\\_H265 (3)：H.265（默认）。"
  }, {
    heading: "txpacketlossrate",
    content: "应用抗丢包策略前，本地客户端到声网服务器的视频丢包率（%）。"
  }, {
    heading: "capturebrightnesslevel",
    content: "等待几秒后，可从下一次回调中的 `captureBrightnessLevel` 获取亮度等级。"
  }, {
    heading: "capturebrightnesslevel",
    content: "本地摄像头采集的视频画面的亮度等级："
  }, {
    heading: "capturebrightnesslevel",
    content: "CAPTURE\\_BRIGHTNESS\\_LEVEL\\_INVALID (-1)：SDK 未检测到画面亮度。"
  }, {
    heading: "capturebrightnesslevel",
    content: "CAPTURE\\_BRIGHTNESS\\_LEVEL\\_NORMAL (0)：画面亮度正常。"
  }, {
    heading: "capturebrightnesslevel",
    content: "CAPTURE\\_BRIGHTNESS\\_LEVEL\\_BRIGHT (1)：画面亮度过亮。"
  }, {
    heading: "capturebrightnesslevel",
    content: "CAPTURE\\_BRIGHTNESS\\_LEVEL\\_DARK (2)：画面亮度过暗。"
  }, {
    heading: "dualstreamenabled",
    content: "是否启用了双流功能："
  }, {
    heading: "dualstreamenabled",
    content: "true：启用双流功能。"
  }, {
    heading: "dualstreamenabled",
    content: "false：未启用双流功能。"
  }, {
    heading: "hwencoderaccelerating",
    content: "本地视频编码加速类型："
  }, {
    heading: "hwencoderaccelerating",
    content: "0：使用软件编码，无加速。"
  }, {
    heading: "hwencoderaccelerating",
    content: "1：使用硬件编码进行加速。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "uid",
    content: "`uid`"
  }, {
    id: "sentbitrate",
    content: "`sentBitrate`"
  }, {
    id: "sentframerate",
    content: "`sentFrameRate`"
  }, {
    id: "captureframerate",
    content: "`captureFrameRate`"
  }, {
    id: "captureframewidth",
    content: "`captureFrameWidth`"
  }, {
    id: "captureframeheight",
    content: "`captureFrameHeight`"
  }, {
    id: "regulatedcaptureframerate",
    content: "`regulatedCaptureFrameRate`"
  }, {
    id: "regulatedcaptureframewidth",
    content: "`regulatedCaptureFrameWidth`"
  }, {
    id: "regulatedcaptureframeheight",
    content: "`regulatedCaptureFrameHeight`"
  }, {
    id: "encoderoutputframerate",
    content: "`encoderOutputFrameRate`"
  }, {
    id: "rendereroutputframerate",
    content: "`rendererOutputFrameRate`"
  }, {
    id: "targetbitrate",
    content: "`targetBitrate`"
  }, {
    id: "targetframerate",
    content: "`targetFrameRate`"
  }, {
    id: "qualityadaptindication",
    content: "`qualityAdaptIndication`"
  }, {
    id: "encodedbitrate",
    content: "`encodedBitrate`"
  }, {
    id: "encodedframewidth",
    content: "`encodedFrameWidth`"
  }, {
    id: "encodedframeheight",
    content: "`encodedFrameHeight`"
  }, {
    id: "encodedframecount",
    content: "`encodedFrameCount`"
  }, {
    id: "codectype",
    content: "`codecType`"
  }, {
    id: "txpacketlossrate",
    content: "`txPacketLossRate`"
  }, {
    id: "capturebrightnesslevel",
    content: "`captureBrightnessLevel`"
  }, {
    id: "dualstreamenabled",
    content: "`dualStreamEnabled`"
  }, {
    id: "hwencoderaccelerating",
    content: "`hwEncoderAccelerating`"
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
  url: "#sentbitrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sentBitrate"
    })
  })
}, {
  depth: 3,
  url: "#sentframerate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sentFrameRate"
    })
  })
}, {
  depth: 3,
  url: "#captureframerate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "captureFrameRate"
    })
  })
}, {
  depth: 3,
  url: "#captureframewidth",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "captureFrameWidth"
    })
  })
}, {
  depth: 3,
  url: "#captureframeheight",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "captureFrameHeight"
    })
  })
}, {
  depth: 3,
  url: "#regulatedcaptureframerate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "regulatedCaptureFrameRate"
    })
  })
}, {
  depth: 3,
  url: "#regulatedcaptureframewidth",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "regulatedCaptureFrameWidth"
    })
  })
}, {
  depth: 3,
  url: "#regulatedcaptureframeheight",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "regulatedCaptureFrameHeight"
    })
  })
}, {
  depth: 3,
  url: "#encoderoutputframerate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "encoderOutputFrameRate"
    })
  })
}, {
  depth: 3,
  url: "#rendereroutputframerate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rendererOutputFrameRate"
    })
  })
}, {
  depth: 3,
  url: "#targetbitrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "targetBitrate"
    })
  })
}, {
  depth: 3,
  url: "#targetframerate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "targetFrameRate"
    })
  })
}, {
  depth: 3,
  url: "#qualityadaptindication",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "qualityAdaptIndication"
    })
  })
}, {
  depth: 3,
  url: "#encodedbitrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "encodedBitrate"
    })
  })
}, {
  depth: 3,
  url: "#encodedframewidth",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "encodedFrameWidth"
    })
  })
}, {
  depth: 3,
  url: "#encodedframeheight",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "encodedFrameHeight"
    })
  })
}, {
  depth: 3,
  url: "#encodedframecount",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "encodedFrameCount"
    })
  })
}, {
  depth: 3,
  url: "#codectype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "codecType"
    })
  })
}, {
  depth: 3,
  url: "#txpacketlossrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "txPacketLossRate"
    })
  })
}, {
  depth: 3,
  url: "#capturebrightnesslevel",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "captureBrightnessLevel"
    })
  })
}, {
  depth: 3,
  url: "#dualstreamenabled",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "dualStreamEnabled"
    })
  })
}, {
  depth: 3,
  url: "#hwencoderaccelerating",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "hwEncoderAccelerating"
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
      id: "class_localvideostats__prototype"
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
              children: " LocalVideoStats"
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
              children: " sentBitrate;"
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
              children: " sentFrameRate;"
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
              children: " captureFrameRate;"
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
              children: " captureFrameWidth;"
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
              children: " captureFrameHeight;"
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
              children: " regulatedCaptureFrameRate;"
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
              children: " regulatedCaptureFrameWidth;"
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
              children: " regulatedCaptureFrameHeight;"
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
              children: " encoderOutputFrameRate;"
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
              children: " rendererOutputFrameRate;"
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
              children: " targetBitrate;"
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
              children: " targetFrameRate;"
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
              children: " qualityAdaptIndication;"
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
              children: " encodedBitrate;"
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
              children: " encodedFrameWidth;"
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
              children: " encodedFrameHeight;"
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
              children: " encodedFrameCount;"
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
              children: " codecType;"
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
              children: " txPacketLossRate;"
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
              children: " captureBrightnessLevel;"
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
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " dualStreamEnabled;"
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
              children: " hwEncoderAccelerating;"
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
              children: " encodedFrameDepth;"
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
      id: "class_localvideostats__parameters"
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
      children: "本地用户的用户 ID。"
    }), `
`, _jsx(_components.h3, {
      id: "sentbitrate",
      children: _jsx(_components.code, {
        children: "sentBitrate"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地视频流在发送过程中的实际码率（Kbps）。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该值不包括由于丢包引起的重传码率。"
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "sentframerate",
      children: _jsx(_components.code, {
        children: "sentFrameRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地视频流在发送过程中的实际帧率（fps）。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该值不包括由于丢包引起的重传帧率。"
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "captureframerate",
      children: _jsx(_components.code, {
        children: "captureFrameRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "采集本地视频流时的帧率（fps）。"
    }), `
`, _jsx(_components.h3, {
      id: "captureframewidth",
      children: _jsx(_components.code, {
        children: "captureFrameWidth"
      })
    }), `
`, _jsx(_components.p, {
      children: "采集本地视频流时的宽度（px）。"
    }), `
`, _jsx(_components.h3, {
      id: "captureframeheight",
      children: _jsx(_components.code, {
        children: "captureFrameHeight"
      })
    }), `
`, _jsx(_components.p, {
      children: "采集本地视频流时的高度（px）。"
    }), `
`, _jsx(_components.h3, {
      id: "regulatedcaptureframerate",
      children: _jsx(_components.code, {
        children: "regulatedCaptureFrameRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "声网 SDK 内建的视频采集调节器根据编码配置调整后的本地视频帧率（fps）。"
    }), `
`, _jsx(_components.h3, {
      id: "regulatedcaptureframewidth",
      children: _jsx(_components.code, {
        children: "regulatedCaptureFrameWidth"
      })
    }), `
`, _jsx(_components.p, {
      children: "声网 SDK 内建的视频采集调节器根据编码配置调整后的本地视频宽度（px）。"
    }), `
`, _jsx(_components.h3, {
      id: "regulatedcaptureframeheight",
      children: _jsx(_components.code, {
        children: "regulatedCaptureFrameHeight"
      })
    }), `
`, _jsx(_components.p, {
      children: "声网 SDK 内建的视频采集调节器根据编码配置调整后的本地视频高度（px）。"
    }), `
`, _jsx(_components.h3, {
      id: "encoderoutputframerate",
      children: _jsx(_components.code, {
        children: "encoderOutputFrameRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地视频编码器的输出帧率（fps）。"
    }), `
`, _jsx(_components.h3, {
      id: "rendereroutputframerate",
      children: _jsx(_components.code, {
        children: "rendererOutputFrameRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地视频渲染器的输出帧率（fps）。"
    }), `
`, _jsx(_components.h3, {
      id: "targetbitrate",
      children: _jsx(_components.code, {
        children: "targetBitrate"
      })
    }), `
`, _jsx(_components.p, {
      children: "当前编码器的目标码率（Kbps）。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该值由 SDK 根据当前网络状况估算得出。"
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "targetframerate",
      children: _jsx(_components.code, {
        children: "targetFrameRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "当前编码器的目标帧率（fps）。"
    }), `
`, _jsx(_components.h3, {
      id: "qualityadaptindication",
      children: _jsx(_components.code, {
        children: "qualityAdaptIndication"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地视频流在统计周期内的画质自适应状态："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "ADAPT_NONE (0)：本地视频质量维持不变。"
      }), `
`, _jsx(_components.li, {
        children: "ADAPT_UP_BANDWIDTH (1)：由于网络带宽增加，本地视频质量上升。"
      }), `
`, _jsx(_components.li, {
        children: "ADAPT_DOWN_BANDWIDTH (2)：由于网络带宽下降，本地视频质量下降。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "encodedbitrate",
      children: _jsx(_components.code, {
        children: "encodedBitrate"
      })
    }), `
`, _jsx(_components.p, {
      children: "对本地视频流编码时的码率（Kbps）。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该值不包括由于丢包引起的重传码率。"
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "encodedframewidth",
      children: _jsx(_components.code, {
        children: "encodedFrameWidth"
      })
    }), `
`, _jsx(_components.p, {
      children: "编码后视频的宽度（px）。"
    }), `
`, _jsx(_components.h3, {
      id: "encodedframeheight",
      children: _jsx(_components.code, {
        children: "encodedFrameHeight"
      })
    }), `
`, _jsx(_components.p, {
      children: "编码后视频的高度（px）。"
    }), `
`, _jsx(_components.h3, {
      id: "encodedframecount",
      children: _jsx(_components.code, {
        children: "encodedFrameCount"
      })
    }), `
`, _jsx(_components.p, {
      children: "发送的视频帧总数，表示为聚合值。"
    }), `
`, _jsx(_components.h3, {
      id: "codectype",
      children: _jsx(_components.code, {
        children: "codecType"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "在某些场景下（如采集分辨率较低或设备性能有限），SDK 会自动切换为 H.264 编码格式。"
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["本地视频使用的编码器类型。可选值如下，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videocodectype",
        children: "VIDEO_CODEC_TYPE"
      }), "："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "VIDEO_CODEC_VP8 (1)：VP8。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_CODEC_H264 (2)：H.264。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_CODEC_H265 (3)：H.265（默认）。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "txpacketlossrate",
      children: _jsx(_components.code, {
        children: "txPacketLossRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "应用抗丢包策略前，本地客户端到声网服务器的视频丢包率（%）。"
    }), `
`, _jsx(_components.h3, {
      id: "capturebrightnesslevel",
      children: _jsx(_components.code, {
        children: "captureBrightnessLevel"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["等待几秒后，可从下一次回调中的 ", _jsx(_components.code, {
            children: "captureBrightnessLevel"
          }), " 获取亮度等级。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "本地摄像头采集的视频画面的亮度等级："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "CAPTURE_BRIGHTNESS_LEVEL_INVALID (-1)：SDK 未检测到画面亮度。"
      }), `
`, _jsx(_components.li, {
        children: "CAPTURE_BRIGHTNESS_LEVEL_NORMAL (0)：画面亮度正常。"
      }), `
`, _jsx(_components.li, {
        children: "CAPTURE_BRIGHTNESS_LEVEL_BRIGHT (1)：画面亮度过亮。"
      }), `
`, _jsx(_components.li, {
        children: "CAPTURE_BRIGHTNESS_LEVEL_DARK (2)：画面亮度过暗。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "dualstreamenabled",
      children: _jsx(_components.code, {
        children: "dualStreamEnabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用了双流功能："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用双流功能。"
      }), `
`, _jsx(_components.li, {
        children: "false：未启用双流功能。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "hwencoderaccelerating",
      children: _jsx(_components.code, {
        children: "hwEncoderAccelerating"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地视频编码加速类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：使用软件编码，无加速。"
      }), `
`, _jsx(_components.li, {
        children: "1：使用硬件编码进行加速。"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
