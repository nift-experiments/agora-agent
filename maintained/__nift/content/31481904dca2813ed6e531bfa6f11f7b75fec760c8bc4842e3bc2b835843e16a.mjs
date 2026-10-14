import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "RtcStats",
  description: "通话会话的统计信息。"
};
export let _markdown = `

<a id="class_rtcstats__prototype" />

\`\`\`java
public static class RtcStats {
    public int totalDuration;
    public int txBytes;
    public int rxBytes;
    public int txKBitRate;
    public int txAudioBytes;
    public int rxAudioBytes;
    public int txVideoBytes;
    public int rxVideoBytes;
    public int rxKBitRate;
    public int txAudioKBitRate;
    public int rxAudioKBitRate;
    public int txVideoKBitRate;
    public int rxVideoKBitRate;
    public int lastmileDelay;
    public double cpuTotalUsage;
    public int gatewayRtt;
    public double cpuAppUsage;
    public int users;
    public int connectTimeMs;
    public int txPacketLossRate;
    public int rxPacketLossRate;
    public double memoryAppUsageRatio;
    public double memoryTotalUsageRatio;
    public int memoryAppUsageInKbytes;
    public int lanAccelerateState;
  }
\`\`\`

<a id="class_rtcstats__parameters" />

## 属性 [#属性]

### \`totalDuration\` [#totalduration]

本地用户的通话时长（秒），以累计值表示。

### \`txBytes\` [#txbytes]

已发送的字节数。

### \`rxBytes\` [#rxbytes]

已接收的字节数。

### \`txKBitRate\` [#txkbitrate]

发送本地视频流的实际码率（Kbps）。

### \`txAudioBytes\` [#txaudiobytes]

发送的音频字节总数，以累计值表示。

### \`rxAudioBytes\` [#rxaudiobytes]

接收的音频字节总数，以累计值表示。

### \`txVideoBytes\` [#txvideobytes]

发送的视频字节总数，以累计值表示。

### \`rxVideoBytes\` [#rxvideobytes]

接收的视频字节总数，以累计值表示。

### \`rxKBitRate\` [#rxkbitrate]

接收码率（Kbps）。

### \`txAudioKBitRate\` [#txaudiokbitrate]

音频发送码率（Kbps）。

### \`rxAudioKBitRate\` [#rxaudiokbitrate]

音频接收码率（Kbps）。

### \`txVideoKBitRate\` [#txvideokbitrate]

视频发送码率（Kbps）。

### \`rxVideoKBitRate\` [#rxvideokbitrate]

视频接收码率（Kbps）。

### \`lastmileDelay\` [#lastmiledelay]

客户端到服务器的延迟（毫秒）。

### \`cpuTotalUsage\` [#cputotalusage]

系统 CPU 使用率（%）。

注：

* 在 onLeaveChannel 回调中，该值始终为 0。
* 从 Android 8.1 开始，受系统限制无法获取该值。

### \`gatewayRtt\` [#gatewayrtt]

客户端到本地路由器的往返时延（毫秒）。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    在 Android 上，如需获取该值，请确保在项目的 \`AndroidManifest.xml\` 文件中，在 \`</application>\` 后添加权限 \`android.permission.ACCESS_WIFI_STATE\`。
  </CalloutDescription>
</CalloutContainer>

### \`cpuAppUsage\` [#cpuappusage]

应用的 CPU 使用率（%）。

注：

* 在 onLeaveChannel 回调中，该值始终为 0。
* 从 Android 8.1 开始，受系统限制无法获取该值。

### \`users\` [#users]

频道中的用户人数。

### \`connectTimeMs\` [#connecttimems]

SDK 开始连接到连接建立之间的时长（毫秒）。若值为 0，表示无效。

### \`txPacketLossRate\` [#txpacketlossrate]

客户端发送到声网服务器的丢包率（%），为应用抗丢包机制前的值。

### \`rxPacketLossRate\` [#rxpacketlossrate]

声网服务器发送到客户端前，未使用抗丢包机制时的丢包率（%）。

### \`memoryAppUsageRatio\` [#memoryappusageratio]

应用占用的内存比例（%）。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该值仅供参考，因系统限制可能无法获取。
  </CalloutDescription>
</CalloutContainer>

### \`memoryTotalUsageRatio\` [#memorytotalusageratio]

系统占用的内存比例（%）。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该值仅供参考，因系统限制可能无法获取。
  </CalloutDescription>
</CalloutContainer>

### \`memoryAppUsageInKbytes\` [#memoryappusageinkbytes]

应用占用的内存大小（KB）。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该值仅供参考，因系统限制可能无法获取。
  </CalloutDescription>
</CalloutContainer>
`;
export let structuredData = {
  contents: [{
    heading: "totalduration",
    content: "本地用户的通话时长（秒），以累计值表示。"
  }, {
    heading: "txbytes",
    content: "已发送的字节数。"
  }, {
    heading: "rxbytes",
    content: "已接收的字节数。"
  }, {
    heading: "txkbitrate",
    content: "发送本地视频流的实际码率（Kbps）。"
  }, {
    heading: "txaudiobytes",
    content: "发送的音频字节总数，以累计值表示。"
  }, {
    heading: "rxaudiobytes",
    content: "接收的音频字节总数，以累计值表示。"
  }, {
    heading: "txvideobytes",
    content: "发送的视频字节总数，以累计值表示。"
  }, {
    heading: "rxvideobytes",
    content: "接收的视频字节总数，以累计值表示。"
  }, {
    heading: "rxkbitrate",
    content: "接收码率（Kbps）。"
  }, {
    heading: "txaudiokbitrate",
    content: "音频发送码率（Kbps）。"
  }, {
    heading: "rxaudiokbitrate",
    content: "音频接收码率（Kbps）。"
  }, {
    heading: "txvideokbitrate",
    content: "视频发送码率（Kbps）。"
  }, {
    heading: "rxvideokbitrate",
    content: "视频接收码率（Kbps）。"
  }, {
    heading: "lastmiledelay",
    content: "客户端到服务器的延迟（毫秒）。"
  }, {
    heading: "cputotalusage",
    content: "系统 CPU 使用率（%）。"
  }, {
    heading: "cputotalusage",
    content: "注："
  }, {
    heading: "cputotalusage",
    content: "在 onLeaveChannel 回调中，该值始终为 0。"
  }, {
    heading: "cputotalusage",
    content: "从 Android 8.1 开始，受系统限制无法获取该值。"
  }, {
    heading: "gatewayrtt",
    content: "客户端到本地路由器的往返时延（毫秒）。"
  }, {
    heading: "gatewayrtt",
    content: "在 Android 上，如需获取该值，请确保在项目的 `AndroidManifest.xml` 文件中，在 `</application>` 后添加权限 `android.permission.ACCESS_WIFI_STATE`。"
  }, {
    heading: "cpuappusage",
    content: "应用的 CPU 使用率（%）。"
  }, {
    heading: "cpuappusage",
    content: "注："
  }, {
    heading: "cpuappusage",
    content: "在 onLeaveChannel 回调中，该值始终为 0。"
  }, {
    heading: "cpuappusage",
    content: "从 Android 8.1 开始，受系统限制无法获取该值。"
  }, {
    heading: "users",
    content: "频道中的用户人数。"
  }, {
    heading: "connecttimems",
    content: "SDK 开始连接到连接建立之间的时长（毫秒）。若值为 0，表示无效。"
  }, {
    heading: "txpacketlossrate",
    content: "客户端发送到声网服务器的丢包率（%），为应用抗丢包机制前的值。"
  }, {
    heading: "rxpacketlossrate",
    content: "声网服务器发送到客户端前，未使用抗丢包机制时的丢包率（%）。"
  }, {
    heading: "memoryappusageratio",
    content: "应用占用的内存比例（%）。"
  }, {
    heading: "memoryappusageratio",
    content: "该值仅供参考，因系统限制可能无法获取。"
  }, {
    heading: "memorytotalusageratio",
    content: "系统占用的内存比例（%）。"
  }, {
    heading: "memorytotalusageratio",
    content: "该值仅供参考，因系统限制可能无法获取。"
  }, {
    heading: "memoryappusageinkbytes",
    content: "应用占用的内存大小（KB）。"
  }, {
    heading: "memoryappusageinkbytes",
    content: "该值仅供参考，因系统限制可能无法获取。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "totalduration",
    content: "`totalDuration`"
  }, {
    id: "txbytes",
    content: "`txBytes`"
  }, {
    id: "rxbytes",
    content: "`rxBytes`"
  }, {
    id: "txkbitrate",
    content: "`txKBitRate`"
  }, {
    id: "txaudiobytes",
    content: "`txAudioBytes`"
  }, {
    id: "rxaudiobytes",
    content: "`rxAudioBytes`"
  }, {
    id: "txvideobytes",
    content: "`txVideoBytes`"
  }, {
    id: "rxvideobytes",
    content: "`rxVideoBytes`"
  }, {
    id: "rxkbitrate",
    content: "`rxKBitRate`"
  }, {
    id: "txaudiokbitrate",
    content: "`txAudioKBitRate`"
  }, {
    id: "rxaudiokbitrate",
    content: "`rxAudioKBitRate`"
  }, {
    id: "txvideokbitrate",
    content: "`txVideoKBitRate`"
  }, {
    id: "rxvideokbitrate",
    content: "`rxVideoKBitRate`"
  }, {
    id: "lastmiledelay",
    content: "`lastmileDelay`"
  }, {
    id: "cputotalusage",
    content: "`cpuTotalUsage`"
  }, {
    id: "gatewayrtt",
    content: "`gatewayRtt`"
  }, {
    id: "cpuappusage",
    content: "`cpuAppUsage`"
  }, {
    id: "users",
    content: "`users`"
  }, {
    id: "connecttimems",
    content: "`connectTimeMs`"
  }, {
    id: "txpacketlossrate",
    content: "`txPacketLossRate`"
  }, {
    id: "rxpacketlossrate",
    content: "`rxPacketLossRate`"
  }, {
    id: "memoryappusageratio",
    content: "`memoryAppUsageRatio`"
  }, {
    id: "memorytotalusageratio",
    content: "`memoryTotalUsageRatio`"
  }, {
    id: "memoryappusageinkbytes",
    content: "`memoryAppUsageInKbytes`"
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
  url: "#totalduration",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "totalDuration"
    })
  })
}, {
  depth: 3,
  url: "#txbytes",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "txBytes"
    })
  })
}, {
  depth: 3,
  url: "#rxbytes",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rxBytes"
    })
  })
}, {
  depth: 3,
  url: "#txkbitrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "txKBitRate"
    })
  })
}, {
  depth: 3,
  url: "#txaudiobytes",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "txAudioBytes"
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
  url: "#txvideobytes",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "txVideoBytes"
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
}, {
  depth: 3,
  url: "#rxkbitrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rxKBitRate"
    })
  })
}, {
  depth: 3,
  url: "#txaudiokbitrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "txAudioKBitRate"
    })
  })
}, {
  depth: 3,
  url: "#rxaudiokbitrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rxAudioKBitRate"
    })
  })
}, {
  depth: 3,
  url: "#txvideokbitrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "txVideoKBitRate"
    })
  })
}, {
  depth: 3,
  url: "#rxvideokbitrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rxVideoKBitRate"
    })
  })
}, {
  depth: 3,
  url: "#lastmiledelay",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "lastmileDelay"
    })
  })
}, {
  depth: 3,
  url: "#cputotalusage",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "cpuTotalUsage"
    })
  })
}, {
  depth: 3,
  url: "#gatewayrtt",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "gatewayRtt"
    })
  })
}, {
  depth: 3,
  url: "#cpuappusage",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "cpuAppUsage"
    })
  })
}, {
  depth: 3,
  url: "#users",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "users"
    })
  })
}, {
  depth: 3,
  url: "#connecttimems",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "connectTimeMs"
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
  url: "#rxpacketlossrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rxPacketLossRate"
    })
  })
}, {
  depth: 3,
  url: "#memoryappusageratio",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "memoryAppUsageRatio"
    })
  })
}, {
  depth: 3,
  url: "#memorytotalusageratio",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "memoryTotalUsageRatio"
    })
  })
}, {
  depth: 3,
  url: "#memoryappusageinkbytes",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "memoryAppUsageInKbytes"
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
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_rtcstats__prototype"
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
              children: " RtcStats"
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
              children: " totalDuration;"
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
              children: " txBytes;"
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
              children: " rxBytes;"
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
              children: " txKBitRate;"
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
              children: " txAudioBytes;"
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
              children: " txVideoBytes;"
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
              children: " rxKBitRate;"
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
              children: " txAudioKBitRate;"
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
              children: " rxAudioKBitRate;"
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
              children: " txVideoKBitRate;"
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
              children: " rxVideoKBitRate;"
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
              children: " lastmileDelay;"
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
              children: " double"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " cpuTotalUsage;"
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
              children: " gatewayRtt;"
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
              children: " double"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " cpuAppUsage;"
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
              children: " users;"
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
              children: " connectTimeMs;"
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
              children: " rxPacketLossRate;"
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
              children: " double"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " memoryAppUsageRatio;"
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
              children: " double"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " memoryTotalUsageRatio;"
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
              children: " memoryAppUsageInKbytes;"
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
              children: " lanAccelerateState;"
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
      id: "class_rtcstats__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "totalduration",
      children: _jsx(_components.code, {
        children: "totalDuration"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地用户的通话时长（秒），以累计值表示。"
    }), `
`, _jsx(_components.h3, {
      id: "txbytes",
      children: _jsx(_components.code, {
        children: "txBytes"
      })
    }), `
`, _jsx(_components.p, {
      children: "已发送的字节数。"
    }), `
`, _jsx(_components.h3, {
      id: "rxbytes",
      children: _jsx(_components.code, {
        children: "rxBytes"
      })
    }), `
`, _jsx(_components.p, {
      children: "已接收的字节数。"
    }), `
`, _jsx(_components.h3, {
      id: "txkbitrate",
      children: _jsx(_components.code, {
        children: "txKBitRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "发送本地视频流的实际码率（Kbps）。"
    }), `
`, _jsx(_components.h3, {
      id: "txaudiobytes",
      children: _jsx(_components.code, {
        children: "txAudioBytes"
      })
    }), `
`, _jsx(_components.p, {
      children: "发送的音频字节总数，以累计值表示。"
    }), `
`, _jsx(_components.h3, {
      id: "rxaudiobytes",
      children: _jsx(_components.code, {
        children: "rxAudioBytes"
      })
    }), `
`, _jsx(_components.p, {
      children: "接收的音频字节总数，以累计值表示。"
    }), `
`, _jsx(_components.h3, {
      id: "txvideobytes",
      children: _jsx(_components.code, {
        children: "txVideoBytes"
      })
    }), `
`, _jsx(_components.p, {
      children: "发送的视频字节总数，以累计值表示。"
    }), `
`, _jsx(_components.h3, {
      id: "rxvideobytes",
      children: _jsx(_components.code, {
        children: "rxVideoBytes"
      })
    }), `
`, _jsx(_components.p, {
      children: "接收的视频字节总数，以累计值表示。"
    }), `
`, _jsx(_components.h3, {
      id: "rxkbitrate",
      children: _jsx(_components.code, {
        children: "rxKBitRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "接收码率（Kbps）。"
    }), `
`, _jsx(_components.h3, {
      id: "txaudiokbitrate",
      children: _jsx(_components.code, {
        children: "txAudioKBitRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频发送码率（Kbps）。"
    }), `
`, _jsx(_components.h3, {
      id: "rxaudiokbitrate",
      children: _jsx(_components.code, {
        children: "rxAudioKBitRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频接收码率（Kbps）。"
    }), `
`, _jsx(_components.h3, {
      id: "txvideokbitrate",
      children: _jsx(_components.code, {
        children: "txVideoKBitRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频发送码率（Kbps）。"
    }), `
`, _jsx(_components.h3, {
      id: "rxvideokbitrate",
      children: _jsx(_components.code, {
        children: "rxVideoKBitRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频接收码率（Kbps）。"
    }), `
`, _jsx(_components.h3, {
      id: "lastmiledelay",
      children: _jsx(_components.code, {
        children: "lastmileDelay"
      })
    }), `
`, _jsx(_components.p, {
      children: "客户端到服务器的延迟（毫秒）。"
    }), `
`, _jsx(_components.h3, {
      id: "cputotalusage",
      children: _jsx(_components.code, {
        children: "cpuTotalUsage"
      })
    }), `
`, _jsx(_components.p, {
      children: "系统 CPU 使用率（%）。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "在 onLeaveChannel 回调中，该值始终为 0。"
      }), `
`, _jsx(_components.li, {
        children: "从 Android 8.1 开始，受系统限制无法获取该值。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "gatewayrtt",
      children: _jsx(_components.code, {
        children: "gatewayRtt"
      })
    }), `
`, _jsx(_components.p, {
      children: "客户端到本地路由器的往返时延（毫秒）。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["在 Android 上，如需获取该值，请确保在项目的 ", _jsx(_components.code, {
            children: "AndroidManifest.xml"
          }), " 文件中，在 ", _jsx(_components.code, {
            children: "</application>"
          }), " 后添加权限 ", _jsx(_components.code, {
            children: "android.permission.ACCESS_WIFI_STATE"
          }), "。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "cpuappusage",
      children: _jsx(_components.code, {
        children: "cpuAppUsage"
      })
    }), `
`, _jsx(_components.p, {
      children: "应用的 CPU 使用率（%）。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "在 onLeaveChannel 回调中，该值始终为 0。"
      }), `
`, _jsx(_components.li, {
        children: "从 Android 8.1 开始，受系统限制无法获取该值。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "users",
      children: _jsx(_components.code, {
        children: "users"
      })
    }), `
`, _jsx(_components.p, {
      children: "频道中的用户人数。"
    }), `
`, _jsx(_components.h3, {
      id: "connecttimems",
      children: _jsx(_components.code, {
        children: "connectTimeMs"
      })
    }), `
`, _jsx(_components.p, {
      children: "SDK 开始连接到连接建立之间的时长（毫秒）。若值为 0，表示无效。"
    }), `
`, _jsx(_components.h3, {
      id: "txpacketlossrate",
      children: _jsx(_components.code, {
        children: "txPacketLossRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "客户端发送到声网服务器的丢包率（%），为应用抗丢包机制前的值。"
    }), `
`, _jsx(_components.h3, {
      id: "rxpacketlossrate",
      children: _jsx(_components.code, {
        children: "rxPacketLossRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "声网服务器发送到客户端前，未使用抗丢包机制时的丢包率（%）。"
    }), `
`, _jsx(_components.h3, {
      id: "memoryappusageratio",
      children: _jsx(_components.code, {
        children: "memoryAppUsageRatio"
      })
    }), `
`, _jsx(_components.p, {
      children: "应用占用的内存比例（%）。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该值仅供参考，因系统限制可能无法获取。"
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "memorytotalusageratio",
      children: _jsx(_components.code, {
        children: "memoryTotalUsageRatio"
      })
    }), `
`, _jsx(_components.p, {
      children: "系统占用的内存比例（%）。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该值仅供参考，因系统限制可能无法获取。"
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "memoryappusageinkbytes",
      children: _jsx(_components.code, {
        children: "memoryAppUsageInKbytes"
      })
    }), `
`, _jsx(_components.p, {
      children: "应用占用的内存大小（KB）。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该值仅供参考，因系统限制可能无法获取。"
        })
      })]
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
