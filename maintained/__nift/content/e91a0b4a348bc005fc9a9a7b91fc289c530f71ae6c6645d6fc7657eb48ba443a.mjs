import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "RemoteAudioStats",
  description: "获取远端用户的音频统计信息。"
};
export let _markdown = `

<a id="class_remoteaudiostats__prototype" />

\`\`\`java
public static class RemoteAudioStats {
    public int uid;
    public int quality;
    public int networkTransportDelay;
    public int jitterBufferDelay;
    public int audioLossRate;
    public int numChannels;
    public int receivedSampleRate;
    public int receivedBitrate;
    public int totalFrozenTime;
    public int frozenRate;
    public int mosValue;
    public int frozenRateByCustomPlcCount;
    public int plcCount;
    public int frozenCntByCustom;
    public int frozenTimeByCustom;
    public long totalActiveTime;
    public long publishDuration;
    public int qoeQuality;
    public int qualityChangedReason;
    public int rxAudioBytes;
    public int e2eDelay;
  }
\`\`\`

<a id="class_remoteaudiostats__detailed_desc" />

用于汇报远端用户加入频道后的音频统计信息。

<a id="class_remoteaudiostats__parameters" />

## 属性 [#属性]

### \`uid\` [#uid]

远端用户的用户 ID。

### \`quality\` [#quality]

远端用户发送音频流的质量。

* 0：未知质量。
* 1：音质极佳。
* 2：网络质量看起来极好，但码率略低于极佳。
* 3：通信略受影响。
* 4：无法流畅通信。
* 5：通信困难。
* 6：网络连接已中断，无法通信。
* 8：正在进行 Last-mile 网络探测。

### \`networkTransportDelay\` [#networktransportdelay]

从发送端到接收端的网络传输延时（毫秒）。

### \`jitterBufferDelay\` [#jitterbufferdelay]

从音频接收端到抖动缓冲区的网络延时（毫秒）。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    当接收端是观众，且 [ClientRoleOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-clientroleoptions) 中的 \`audienceLatencyLevel\` 为 1 时，该参数无效。
  </CalloutDescription>
</CalloutContainer>

### \`audioLossRate\` [#audiolossrate]

汇报周期内远端音频流的音频帧丢包率（%）。

### \`numChannels\` [#numchannels]

音频声道数。

### \`receivedSampleRate\` [#receivedsamplerate]

汇报周期内接收音频流的采样率。

### \`receivedBitrate\` [#receivedbitrate]

汇报周期内接收音频流的平均码率（Kbps）。

### \`totalFrozenTime\` [#totalfrozentime]

远端用户加入频道后音频卡顿的总时长（毫秒）。在通话过程中，当音频帧丢包率达到 4% 时视为卡顿。

### \`frozenRate\` [#frozenrate]

音频可用时段内音频卡顿的总时间占比（%）。当远端用户加入频道后未停止发送音频流，且未关闭音频模块时，视为音频可用。

### \`mosValue\` [#mosvalue]

汇报周期内远端音频流的质量，基于声网实时音频 MOS（Mean Opinion Score）评估方法。 取值范围为 \\[0, 500]，除以 100 后为 MOS 得分，范围为 0 到 5，数值越大音质越好。 MOS 分数与主观听感的对应关系如下：

* 大于 4：音质优秀，清晰流畅。
* 3.5 到 4：音质良好，有轻微感知损伤但清晰。
* 3 到 3.5：尚可，音频偶尔卡顿，需要注意聆听。
* 2.5 到 3：较差，音频断断续续，理解困难。
* 2 到 2.5：很差，偶发杂音和连续掉帧，通信困难。
* 小于 2：极差，持续杂音，大量掉帧，通信基本无法实现。

### \`frozenRateByCustomPlcCount\` [#frozenratebycustomplccount]

当连续出现 N 次音频丢包隐藏（PLC）时，视为一次卡顿。卡顿次数 = (n\\_plc - n) / m。

### \`plcCount\` [#plccount]

音频丢包隐藏（PLC）的次数。

### \`totalActiveTime\` [#totalactivetime]

从开始通话到远端用户回调期间的总活跃时长（毫秒）。活跃时长指远端用户非静音状态的累计时间。

### \`publishDuration\` [#publishduration]

该远端音频流的总持续时长（毫秒）。

### \`qoeQuality\` [#qoequality]

本地用户接收远端音频流时的服务质量（QoE）。

* 0：本地用户体验良好。
* 1：本地用户体验较差。

### \`qualityChangedReason\` [#qualitychangedreason]

本地用户接收远端音频流体验较差的原因。

* 0：无，表示本地用户体验良好。
* 1：远端用户网络质量差。
* 2：本地用户网络质量差。
* 4：本地 Wi-Fi 或蜂窝网络信号差。
* 8：本地用户同时开启 Wi-Fi 和蓝牙，导致信号互相干扰，影响音频传输质量。

### \`rxAudioBytes\` [#rxaudiobytes]

网络处理前已接收的总音频字节数（字节），为累计值。

### \`e2eDelay\` [#e2edelay]

端到端音频延迟（毫秒），即从远端用户采集音频到本地用户播放音频的时间。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "用于汇报远端用户加入频道后的音频统计信息。"
  }, {
    heading: "uid",
    content: "远端用户的用户 ID。"
  }, {
    heading: "quality",
    content: "远端用户发送音频流的质量。"
  }, {
    heading: "quality",
    content: "0：未知质量。"
  }, {
    heading: "quality",
    content: "1：音质极佳。"
  }, {
    heading: "quality",
    content: "2：网络质量看起来极好，但码率略低于极佳。"
  }, {
    heading: "quality",
    content: "3：通信略受影响。"
  }, {
    heading: "quality",
    content: "4：无法流畅通信。"
  }, {
    heading: "quality",
    content: "5：通信困难。"
  }, {
    heading: "quality",
    content: "6：网络连接已中断，无法通信。"
  }, {
    heading: "quality",
    content: "8：正在进行 Last-mile 网络探测。"
  }, {
    heading: "networktransportdelay",
    content: "从发送端到接收端的网络传输延时（毫秒）。"
  }, {
    heading: "jitterbufferdelay",
    content: "从音频接收端到抖动缓冲区的网络延时（毫秒）。"
  }, {
    heading: "jitterbufferdelay",
    content: "当接收端是观众，且 ClientRoleOptions 中的 `audienceLatencyLevel` 为 1 时，该参数无效。"
  }, {
    heading: "audiolossrate",
    content: "汇报周期内远端音频流的音频帧丢包率（%）。"
  }, {
    heading: "numchannels",
    content: "音频声道数。"
  }, {
    heading: "receivedsamplerate",
    content: "汇报周期内接收音频流的采样率。"
  }, {
    heading: "receivedbitrate",
    content: "汇报周期内接收音频流的平均码率（Kbps）。"
  }, {
    heading: "totalfrozentime",
    content: "远端用户加入频道后音频卡顿的总时长（毫秒）。在通话过程中，当音频帧丢包率达到 4% 时视为卡顿。"
  }, {
    heading: "frozenrate",
    content: "音频可用时段内音频卡顿的总时间占比（%）。当远端用户加入频道后未停止发送音频流，且未关闭音频模块时，视为音频可用。"
  }, {
    heading: "mosvalue",
    content: "汇报周期内远端音频流的质量，基于声网实时音频 MOS（Mean Opinion Score）评估方法。 取值范围为 \\[0, 500]，除以 100 后为 MOS 得分，范围为 0 到 5，数值越大音质越好。 MOS 分数与主观听感的对应关系如下："
  }, {
    heading: "mosvalue",
    content: "大于 4：音质优秀，清晰流畅。"
  }, {
    heading: "mosvalue",
    content: "3.5 到 4：音质良好，有轻微感知损伤但清晰。"
  }, {
    heading: "mosvalue",
    content: "3 到 3.5：尚可，音频偶尔卡顿，需要注意聆听。"
  }, {
    heading: "mosvalue",
    content: "2.5 到 3：较差，音频断断续续，理解困难。"
  }, {
    heading: "mosvalue",
    content: "2 到 2.5：很差，偶发杂音和连续掉帧，通信困难。"
  }, {
    heading: "mosvalue",
    content: "小于 2：极差，持续杂音，大量掉帧，通信基本无法实现。"
  }, {
    heading: "frozenratebycustomplccount",
    content: "当连续出现 N 次音频丢包隐藏（PLC）时，视为一次卡顿。卡顿次数 = (n\\_plc - n) / m。"
  }, {
    heading: "plccount",
    content: "音频丢包隐藏（PLC）的次数。"
  }, {
    heading: "totalactivetime",
    content: "从开始通话到远端用户回调期间的总活跃时长（毫秒）。活跃时长指远端用户非静音状态的累计时间。"
  }, {
    heading: "publishduration",
    content: "该远端音频流的总持续时长（毫秒）。"
  }, {
    heading: "qoequality",
    content: "本地用户接收远端音频流时的服务质量（QoE）。"
  }, {
    heading: "qoequality",
    content: "0：本地用户体验良好。"
  }, {
    heading: "qoequality",
    content: "1：本地用户体验较差。"
  }, {
    heading: "qualitychangedreason",
    content: "本地用户接收远端音频流体验较差的原因。"
  }, {
    heading: "qualitychangedreason",
    content: "0：无，表示本地用户体验良好。"
  }, {
    heading: "qualitychangedreason",
    content: "1：远端用户网络质量差。"
  }, {
    heading: "qualitychangedreason",
    content: "2：本地用户网络质量差。"
  }, {
    heading: "qualitychangedreason",
    content: "4：本地 Wi-Fi 或蜂窝网络信号差。"
  }, {
    heading: "qualitychangedreason",
    content: "8：本地用户同时开启 Wi-Fi 和蓝牙，导致信号互相干扰，影响音频传输质量。"
  }, {
    heading: "rxaudiobytes",
    content: "网络处理前已接收的总音频字节数（字节），为累计值。"
  }, {
    heading: "e2edelay",
    content: "端到端音频延迟（毫秒），即从远端用户采集音频到本地用户播放音频的时间。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "uid",
    content: "`uid`"
  }, {
    id: "quality",
    content: "`quality`"
  }, {
    id: "networktransportdelay",
    content: "`networkTransportDelay`"
  }, {
    id: "jitterbufferdelay",
    content: "`jitterBufferDelay`"
  }, {
    id: "audiolossrate",
    content: "`audioLossRate`"
  }, {
    id: "numchannels",
    content: "`numChannels`"
  }, {
    id: "receivedsamplerate",
    content: "`receivedSampleRate`"
  }, {
    id: "receivedbitrate",
    content: "`receivedBitrate`"
  }, {
    id: "totalfrozentime",
    content: "`totalFrozenTime`"
  }, {
    id: "frozenrate",
    content: "`frozenRate`"
  }, {
    id: "mosvalue",
    content: "`mosValue`"
  }, {
    id: "frozenratebycustomplccount",
    content: "`frozenRateByCustomPlcCount`"
  }, {
    id: "plccount",
    content: "`plcCount`"
  }, {
    id: "totalactivetime",
    content: "`totalActiveTime`"
  }, {
    id: "publishduration",
    content: "`publishDuration`"
  }, {
    id: "qoequality",
    content: "`qoeQuality`"
  }, {
    id: "qualitychangedreason",
    content: "`qualityChangedReason`"
  }, {
    id: "rxaudiobytes",
    content: "`rxAudioBytes`"
  }, {
    id: "e2edelay",
    content: "`e2eDelay`"
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
  url: "#quality",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "quality"
    })
  })
}, {
  depth: 3,
  url: "#networktransportdelay",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "networkTransportDelay"
    })
  })
}, {
  depth: 3,
  url: "#jitterbufferdelay",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "jitterBufferDelay"
    })
  })
}, {
  depth: 3,
  url: "#audiolossrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "audioLossRate"
    })
  })
}, {
  depth: 3,
  url: "#numchannels",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "numChannels"
    })
  })
}, {
  depth: 3,
  url: "#receivedsamplerate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "receivedSampleRate"
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
  url: "#mosvalue",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mosValue"
    })
  })
}, {
  depth: 3,
  url: "#frozenratebycustomplccount",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "frozenRateByCustomPlcCount"
    })
  })
}, {
  depth: 3,
  url: "#plccount",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "plcCount"
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
  url: "#qoequality",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "qoeQuality"
    })
  })
}, {
  depth: 3,
  url: "#qualitychangedreason",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "qualityChangedReason"
    })
  })
}, {
  depth: 3,
  url: "#rxaudiobytes",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rxAudioBytes"
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
      id: "class_remoteaudiostats__prototype"
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
              children: " RemoteAudioStats"
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
              children: " quality;"
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
              children: " networkTransportDelay;"
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
              children: " jitterBufferDelay;"
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
              children: " audioLossRate;"
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
              children: " numChannels;"
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
              children: " receivedSampleRate;"
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
              children: " frozenRateByCustomPlcCount;"
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
              children: " plcCount;"
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
              children: " frozenCntByCustom;"
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
              children: " frozenTimeByCustom;"
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
              children: " qoeQuality;"
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
              children: " qualityChangedReason;"
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
              children: " rxAudioBytes;"
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
      id: "class_remoteaudiostats__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "用于汇报远端用户加入频道后的音频统计信息。"
    }), `
`, _jsx("a", {
      id: "class_remoteaudiostats__parameters"
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
      children: "远端用户的用户 ID。"
    }), `
`, _jsx(_components.h3, {
      id: "quality",
      children: _jsx(_components.code, {
        children: "quality"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户发送音频流的质量。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：未知质量。"
      }), `
`, _jsx(_components.li, {
        children: "1：音质极佳。"
      }), `
`, _jsx(_components.li, {
        children: "2：网络质量看起来极好，但码率略低于极佳。"
      }), `
`, _jsx(_components.li, {
        children: "3：通信略受影响。"
      }), `
`, _jsx(_components.li, {
        children: "4：无法流畅通信。"
      }), `
`, _jsx(_components.li, {
        children: "5：通信困难。"
      }), `
`, _jsx(_components.li, {
        children: "6：网络连接已中断，无法通信。"
      }), `
`, _jsx(_components.li, {
        children: "8：正在进行 Last-mile 网络探测。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "networktransportdelay",
      children: _jsx(_components.code, {
        children: "networkTransportDelay"
      })
    }), `
`, _jsx(_components.p, {
      children: "从发送端到接收端的网络传输延时（毫秒）。"
    }), `
`, _jsx(_components.h3, {
      id: "jitterbufferdelay",
      children: _jsx(_components.code, {
        children: "jitterBufferDelay"
      })
    }), `
`, _jsx(_components.p, {
      children: "从音频接收端到抖动缓冲区的网络延时（毫秒）。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["当接收端是观众，且 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-clientroleoptions",
            children: "ClientRoleOptions"
          }), " 中的 ", _jsx(_components.code, {
            children: "audienceLatencyLevel"
          }), " 为 1 时，该参数无效。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "audiolossrate",
      children: _jsx(_components.code, {
        children: "audioLossRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "汇报周期内远端音频流的音频帧丢包率（%）。"
    }), `
`, _jsx(_components.h3, {
      id: "numchannels",
      children: _jsx(_components.code, {
        children: "numChannels"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频声道数。"
    }), `
`, _jsx(_components.h3, {
      id: "receivedsamplerate",
      children: _jsx(_components.code, {
        children: "receivedSampleRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "汇报周期内接收音频流的采样率。"
    }), `
`, _jsx(_components.h3, {
      id: "receivedbitrate",
      children: _jsx(_components.code, {
        children: "receivedBitrate"
      })
    }), `
`, _jsx(_components.p, {
      children: "汇报周期内接收音频流的平均码率（Kbps）。"
    }), `
`, _jsx(_components.h3, {
      id: "totalfrozentime",
      children: _jsx(_components.code, {
        children: "totalFrozenTime"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户加入频道后音频卡顿的总时长（毫秒）。在通话过程中，当音频帧丢包率达到 4% 时视为卡顿。"
    }), `
`, _jsx(_components.h3, {
      id: "frozenrate",
      children: _jsx(_components.code, {
        children: "frozenRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频可用时段内音频卡顿的总时间占比（%）。当远端用户加入频道后未停止发送音频流，且未关闭音频模块时，视为音频可用。"
    }), `
`, _jsx(_components.h3, {
      id: "mosvalue",
      children: _jsx(_components.code, {
        children: "mosValue"
      })
    }), `
`, _jsx(_components.p, {
      children: "汇报周期内远端音频流的质量，基于声网实时音频 MOS（Mean Opinion Score）评估方法。 取值范围为 [0, 500]，除以 100 后为 MOS 得分，范围为 0 到 5，数值越大音质越好。 MOS 分数与主观听感的对应关系如下："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "大于 4：音质优秀，清晰流畅。"
      }), `
`, _jsx(_components.li, {
        children: "3.5 到 4：音质良好，有轻微感知损伤但清晰。"
      }), `
`, _jsx(_components.li, {
        children: "3 到 3.5：尚可，音频偶尔卡顿，需要注意聆听。"
      }), `
`, _jsx(_components.li, {
        children: "2.5 到 3：较差，音频断断续续，理解困难。"
      }), `
`, _jsx(_components.li, {
        children: "2 到 2.5：很差，偶发杂音和连续掉帧，通信困难。"
      }), `
`, _jsx(_components.li, {
        children: "小于 2：极差，持续杂音，大量掉帧，通信基本无法实现。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "frozenratebycustomplccount",
      children: _jsx(_components.code, {
        children: "frozenRateByCustomPlcCount"
      })
    }), `
`, _jsx(_components.p, {
      children: "当连续出现 N 次音频丢包隐藏（PLC）时，视为一次卡顿。卡顿次数 = (n_plc - n) / m。"
    }), `
`, _jsx(_components.h3, {
      id: "plccount",
      children: _jsx(_components.code, {
        children: "plcCount"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频丢包隐藏（PLC）的次数。"
    }), `
`, _jsx(_components.h3, {
      id: "totalactivetime",
      children: _jsx(_components.code, {
        children: "totalActiveTime"
      })
    }), `
`, _jsx(_components.p, {
      children: "从开始通话到远端用户回调期间的总活跃时长（毫秒）。活跃时长指远端用户非静音状态的累计时间。"
    }), `
`, _jsx(_components.h3, {
      id: "publishduration",
      children: _jsx(_components.code, {
        children: "publishDuration"
      })
    }), `
`, _jsx(_components.p, {
      children: "该远端音频流的总持续时长（毫秒）。"
    }), `
`, _jsx(_components.h3, {
      id: "qoequality",
      children: _jsx(_components.code, {
        children: "qoeQuality"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地用户接收远端音频流时的服务质量（QoE）。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：本地用户体验良好。"
      }), `
`, _jsx(_components.li, {
        children: "1：本地用户体验较差。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "qualitychangedreason",
      children: _jsx(_components.code, {
        children: "qualityChangedReason"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地用户接收远端音频流体验较差的原因。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：无，表示本地用户体验良好。"
      }), `
`, _jsx(_components.li, {
        children: "1：远端用户网络质量差。"
      }), `
`, _jsx(_components.li, {
        children: "2：本地用户网络质量差。"
      }), `
`, _jsx(_components.li, {
        children: "4：本地 Wi-Fi 或蜂窝网络信号差。"
      }), `
`, _jsx(_components.li, {
        children: "8：本地用户同时开启 Wi-Fi 和蓝牙，导致信号互相干扰，影响音频传输质量。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "rxaudiobytes",
      children: _jsx(_components.code, {
        children: "rxAudioBytes"
      })
    }), `
`, _jsx(_components.p, {
      children: "网络处理前已接收的总音频字节数（字节），为累计值。"
    }), `
`, _jsx(_components.h3, {
      id: "e2edelay",
      children: _jsx(_components.code, {
        children: "e2eDelay"
      })
    }), `
`, _jsx(_components.p, {
      children: "端到端音频延迟（毫秒），即从远端用户采集音频到本地用户播放音频的时间。"
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
