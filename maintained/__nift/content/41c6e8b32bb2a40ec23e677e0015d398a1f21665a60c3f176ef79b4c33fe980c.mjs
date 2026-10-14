import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "RemoteVideoStats",
  description: "用于统计远端视频流的相关信息。"
};
export let _markdown = `

<a id="class_remotevideostats__prototype" />

\`\`\`java
public static class RemoteVideoStats {
    public int uid;
    public int delay;
    public int e2eDelay;
    public int width;
    public int height;
    public int receivedBitrate;
    public int decoderOutputFrameRate;
    public int rendererOutputFrameRate;
    public int frameLossRate;
    public int packetLossRate;
    public int rxStreamType;
    public int totalFrozenTime;
    public int frozenRate;
    public int avSyncTimeMs;
    public long totalActiveTime;
    public long publishDuration;
    public int mosValue;
    public int rxVideoBytes;
  }
\`\`\`

<a id="class_remotevideostats__parameters" />

## 属性 [#属性]

### \`uid\` [#uid]

发送视频流的远端用户 ID。

### \`delay\` [#delay]

该字段已废弃。在音视频同步场景下，你可以通过 [RemoteAudioStats](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-remoteaudiostats) 中的 \`networkTransportDelay\` 和 \`jitterBufferDelay\` 获取视频延迟数据。视频延迟（毫秒）。

### \`e2eDelay\` [#e2edelay]

端到端的视频延迟（毫秒），即从远端用户采集视频到本地用户接收并渲染视频的时间间隔。

### \`width\` [#width]

视频宽度（像素）。

### \`height\` [#height]

视频高度（像素）。

### \`receivedBitrate\` [#receivedbitrate]

自上次统计以来接收到的远端视频码率（Kbps）。

### \`decoderOutputFrameRate\` [#decoderoutputframerate]

解码远端视频的帧率（fps）。

### \`rendererOutputFrameRate\` [#rendereroutputframerate]

渲染远端视频的帧率（fps）。

### \`frameLossRate\` [#framelossrate]

远端视频的丢帧率（%）。

### \`packetLossRate\` [#packetlossrate]

使用抗丢包技术后的远端视频丢包率（%）。

### \`rxStreamType\` [#rxstreamtype]

视频流类型：

* 0：高质量流，即高分辨率高码率的视频流。
* 1：低质量流，即低分辨率低码率的视频流。

### \`totalFrozenTime\` [#totalfrozentime]

远端用户加入频道后远端视频流的卡顿总时长（毫秒）。当视频帧率不低于 5 fps 且两帧可渲染视频帧之间的时间间隔超过 500 毫秒时，认为发生视频卡顿。

### \`frozenRate\` [#frozenrate]

视频卡顿总时长占视频可用时长的百分比（%）。只要远端用户在加入频道后未停止发送视频流也未关闭视频功能，则认为视频处于可用状态。

### \`avSyncTimeMs\` [#avsynctimems]

音频领先于视频的时间（毫秒）。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果该值为负数，表示音频延迟于视频。
  </CalloutDescription>
</CalloutContainer>

### \`totalActiveTime\` [#totalactivetime]

视频的总可用时长（毫秒）。只要远端用户或主播在加入频道后未停止发送视频流也未关闭视频模块，则认为视频处于可用状态。

### \`publishDuration\` [#publishduration]

远端视频流的总持续时长（毫秒）。

### \`mosValue\` [#mosvalue]

报告区间内远端视频流的质量。该值由声网实时视频 MOS（Mean Opinion Score）评分方法计算，取值范围为 \\[0, 500]，除以 100 可得 MOS 分值（0 到 5），分值越高表示质量越好。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    对于纹理视频数据，该参数始终返回 0。
  </CalloutDescription>
</CalloutContainer>

### \`rxVideoBytes\` [#rxvideobytes]

累计接收到的视频字节数（字节）。
`;
export let structuredData = {
  contents: [{
    heading: "uid",
    content: "发送视频流的远端用户 ID。"
  }, {
    heading: "delay",
    content: "该字段已废弃。在音视频同步场景下，你可以通过 RemoteAudioStats 中的 `networkTransportDelay` 和 `jitterBufferDelay` 获取视频延迟数据。视频延迟（毫秒）。"
  }, {
    heading: "e2edelay",
    content: "端到端的视频延迟（毫秒），即从远端用户采集视频到本地用户接收并渲染视频的时间间隔。"
  }, {
    heading: "width",
    content: "视频宽度（像素）。"
  }, {
    heading: "height",
    content: "视频高度（像素）。"
  }, {
    heading: "receivedbitrate",
    content: "自上次统计以来接收到的远端视频码率（Kbps）。"
  }, {
    heading: "decoderoutputframerate",
    content: "解码远端视频的帧率（fps）。"
  }, {
    heading: "rendereroutputframerate",
    content: "渲染远端视频的帧率（fps）。"
  }, {
    heading: "framelossrate",
    content: "远端视频的丢帧率（%）。"
  }, {
    heading: "packetlossrate",
    content: "使用抗丢包技术后的远端视频丢包率（%）。"
  }, {
    heading: "rxstreamtype",
    content: "视频流类型："
  }, {
    heading: "rxstreamtype",
    content: "0：高质量流，即高分辨率高码率的视频流。"
  }, {
    heading: "rxstreamtype",
    content: "1：低质量流，即低分辨率低码率的视频流。"
  }, {
    heading: "totalfrozentime",
    content: "远端用户加入频道后远端视频流的卡顿总时长（毫秒）。当视频帧率不低于 5 fps 且两帧可渲染视频帧之间的时间间隔超过 500 毫秒时，认为发生视频卡顿。"
  }, {
    heading: "frozenrate",
    content: "视频卡顿总时长占视频可用时长的百分比（%）。只要远端用户在加入频道后未停止发送视频流也未关闭视频功能，则认为视频处于可用状态。"
  }, {
    heading: "avsynctimems",
    content: "音频领先于视频的时间（毫秒）。"
  }, {
    heading: "avsynctimems",
    content: "如果该值为负数，表示音频延迟于视频。"
  }, {
    heading: "totalactivetime",
    content: "视频的总可用时长（毫秒）。只要远端用户或主播在加入频道后未停止发送视频流也未关闭视频模块，则认为视频处于可用状态。"
  }, {
    heading: "publishduration",
    content: "远端视频流的总持续时长（毫秒）。"
  }, {
    heading: "mosvalue",
    content: "报告区间内远端视频流的质量。该值由声网实时视频 MOS（Mean Opinion Score）评分方法计算，取值范围为 \\[0, 500]，除以 100 可得 MOS 分值（0 到 5），分值越高表示质量越好。"
  }, {
    heading: "mosvalue",
    content: "对于纹理视频数据，该参数始终返回 0。"
  }, {
    heading: "rxvideobytes",
    content: "累计接收到的视频字节数（字节）。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "uid",
    content: "`uid`"
  }, {
    id: "delay",
    content: "`delay`"
  }, {
    id: "e2edelay",
    content: "`e2eDelay`"
  }, {
    id: "width",
    content: "`width`"
  }, {
    id: "height",
    content: "`height`"
  }, {
    id: "receivedbitrate",
    content: "`receivedBitrate`"
  }, {
    id: "decoderoutputframerate",
    content: "`decoderOutputFrameRate`"
  }, {
    id: "rendereroutputframerate",
    content: "`rendererOutputFrameRate`"
  }, {
    id: "framelossrate",
    content: "`frameLossRate`"
  }, {
    id: "packetlossrate",
    content: "`packetLossRate`"
  }, {
    id: "rxstreamtype",
    content: "`rxStreamType`"
  }, {
    id: "totalfrozentime",
    content: "`totalFrozenTime`"
  }, {
    id: "frozenrate",
    content: "`frozenRate`"
  }, {
    id: "avsynctimems",
    content: "`avSyncTimeMs`"
  }, {
    id: "totalactivetime",
    content: "`totalActiveTime`"
  }, {
    id: "publishduration",
    content: "`publishDuration`"
  }, {
    id: "mosvalue",
    content: "`mosValue`"
  }, {
    id: "rxvideobytes",
    content: "`rxVideoBytes`"
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
  url: "#delay",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "delay"
    })
  })
}, {
  depth: 3,
  url: "#e2edelay",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "e2eDelay"
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
  url: "#receivedbitrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "receivedBitrate"
    })
  })
}, {
  depth: 3,
  url: "#decoderoutputframerate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "decoderOutputFrameRate"
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
  url: "#framelossrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "frameLossRate"
    })
  })
}, {
  depth: 3,
  url: "#packetlossrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "packetLossRate"
    })
  })
}, {
  depth: 3,
  url: "#rxstreamtype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rxStreamType"
    })
  })
}, {
  depth: 3,
  url: "#totalfrozentime",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "totalFrozenTime"
    })
  })
}, {
  depth: 3,
  url: "#frozenrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "frozenRate"
    })
  })
}, {
  depth: 3,
  url: "#avsynctimems",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "avSyncTimeMs"
    })
  })
}, {
  depth: 3,
  url: "#totalactivetime",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "totalActiveTime"
    })
  })
}, {
  depth: 3,
  url: "#publishduration",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publishDuration"
    })
  })
}, {
  depth: 3,
  url: "#mosvalue",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mosValue"
    })
  })
}, {
  depth: 3,
  url: "#rxvideobytes",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rxVideoBytes"
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
      id: "class_remotevideostats__prototype"
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
              children: " RemoteVideoStats"
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
              children: " delay;"
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
              children: " e2eDelay;"
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
              children: " receivedBitrate;"
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
              children: " decoderOutputFrameRate;"
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
              children: " frameLossRate;"
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
              children: " packetLossRate;"
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
              children: " rxStreamType;"
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
              children: " totalFrozenTime;"
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
              children: " frozenRate;"
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
              children: " avSyncTimeMs;"
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
              children: " long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " totalActiveTime;"
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
              children: " long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " publishDuration;"
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
              children: " mosValue;"
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
              children: " rxVideoBytes;"
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
      id: "class_remotevideostats__parameters"
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
      children: "发送视频流的远端用户 ID。"
    }), `
`, _jsx(_components.h3, {
      id: "delay",
      children: _jsx(_components.code, {
        children: "delay"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该字段已废弃。在音视频同步场景下，你可以通过 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-remoteaudiostats",
        children: "RemoteAudioStats"
      }), " 中的 ", _jsx(_components.code, {
        children: "networkTransportDelay"
      }), " 和 ", _jsx(_components.code, {
        children: "jitterBufferDelay"
      }), " 获取视频延迟数据。视频延迟（毫秒）。"]
    }), `
`, _jsx(_components.h3, {
      id: "e2edelay",
      children: _jsx(_components.code, {
        children: "e2eDelay"
      })
    }), `
`, _jsx(_components.p, {
      children: "端到端的视频延迟（毫秒），即从远端用户采集视频到本地用户接收并渲染视频的时间间隔。"
    }), `
`, _jsx(_components.h3, {
      id: "width",
      children: _jsx(_components.code, {
        children: "width"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频宽度（像素）。"
    }), `
`, _jsx(_components.h3, {
      id: "height",
      children: _jsx(_components.code, {
        children: "height"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频高度（像素）。"
    }), `
`, _jsx(_components.h3, {
      id: "receivedbitrate",
      children: _jsx(_components.code, {
        children: "receivedBitrate"
      })
    }), `
`, _jsx(_components.p, {
      children: "自上次统计以来接收到的远端视频码率（Kbps）。"
    }), `
`, _jsx(_components.h3, {
      id: "decoderoutputframerate",
      children: _jsx(_components.code, {
        children: "decoderOutputFrameRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "解码远端视频的帧率（fps）。"
    }), `
`, _jsx(_components.h3, {
      id: "rendereroutputframerate",
      children: _jsx(_components.code, {
        children: "rendererOutputFrameRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "渲染远端视频的帧率（fps）。"
    }), `
`, _jsx(_components.h3, {
      id: "framelossrate",
      children: _jsx(_components.code, {
        children: "frameLossRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端视频的丢帧率（%）。"
    }), `
`, _jsx(_components.h3, {
      id: "packetlossrate",
      children: _jsx(_components.code, {
        children: "packetLossRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "使用抗丢包技术后的远端视频丢包率（%）。"
    }), `
`, _jsx(_components.h3, {
      id: "rxstreamtype",
      children: _jsx(_components.code, {
        children: "rxStreamType"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频流类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：高质量流，即高分辨率高码率的视频流。"
      }), `
`, _jsx(_components.li, {
        children: "1：低质量流，即低分辨率低码率的视频流。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "totalfrozentime",
      children: _jsx(_components.code, {
        children: "totalFrozenTime"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户加入频道后远端视频流的卡顿总时长（毫秒）。当视频帧率不低于 5 fps 且两帧可渲染视频帧之间的时间间隔超过 500 毫秒时，认为发生视频卡顿。"
    }), `
`, _jsx(_components.h3, {
      id: "frozenrate",
      children: _jsx(_components.code, {
        children: "frozenRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频卡顿总时长占视频可用时长的百分比（%）。只要远端用户在加入频道后未停止发送视频流也未关闭视频功能，则认为视频处于可用状态。"
    }), `
`, _jsx(_components.h3, {
      id: "avsynctimems",
      children: _jsx(_components.code, {
        children: "avSyncTimeMs"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频领先于视频的时间（毫秒）。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "如果该值为负数，表示音频延迟于视频。"
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "totalactivetime",
      children: _jsx(_components.code, {
        children: "totalActiveTime"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频的总可用时长（毫秒）。只要远端用户或主播在加入频道后未停止发送视频流也未关闭视频模块，则认为视频处于可用状态。"
    }), `
`, _jsx(_components.h3, {
      id: "publishduration",
      children: _jsx(_components.code, {
        children: "publishDuration"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端视频流的总持续时长（毫秒）。"
    }), `
`, _jsx(_components.h3, {
      id: "mosvalue",
      children: _jsx(_components.code, {
        children: "mosValue"
      })
    }), `
`, _jsx(_components.p, {
      children: "报告区间内远端视频流的质量。该值由声网实时视频 MOS（Mean Opinion Score）评分方法计算，取值范围为 [0, 500]，除以 100 可得 MOS 分值（0 到 5），分值越高表示质量越好。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "对于纹理视频数据，该参数始终返回 0。"
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "rxvideobytes",
      children: _jsx(_components.code, {
        children: "rxVideoBytes"
      })
    }), `
`, _jsx(_components.p, {
      children: "累计接收到的视频字节数（字节）。"
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
