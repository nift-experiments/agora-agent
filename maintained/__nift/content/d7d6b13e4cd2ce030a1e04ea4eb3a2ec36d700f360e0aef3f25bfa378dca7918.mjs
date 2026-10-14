import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "LocalAudioStats",
  description: "LocalAudioStats 提供本地音频的统计信息。"
};
export let _markdown = `

<a id="class_localaudiostats__prototype" />

\`\`\`java
public static class LocalAudioStats {
  public int numChannels;
  public int sentSampleRate;
  public int sentBitrate;
  public int internalCodec;
  public int txPacketLossRate;
  public int audioDeviceDelay;
  public int audioPlayoutDelay;
  public int earMonitorDelay;
  public int aecEstimatedDelay;
}
\`\`\`

<a id="class_localaudiostats__parameters" />

## 属性 [#属性]

### \`numChannels\` [#numchannels]

音频通道数。

### \`sentSampleRate\` [#sentsamplerate]

本地用户发送音频流的采样率，单位为 Hz。

### \`sentBitrate\` [#sentbitrate]

本地用户发送音频流的平均码率，单位为 Kbps。

### \`internalCodec\` [#internalcodec]

内部使用的负载编解码器。

### \`txPacketLossRate\` [#txpacketlossrate]

应用抗丢包策略前，从本地客户端到声网服务器的音频丢包率（%）。

### \`audioDeviceDelay\` [#audiodevicedelay]

音频设备模块在播放或采集音频时的延迟，单位为毫秒。

### \`audioPlayoutDelay\` [#audioplayoutdelay]

设备播放音频的延迟，单位为毫秒。

### \`earMonitorDelay\` [#earmonitordelay]

耳返延迟，单位为毫秒，指从麦克风输入到耳机输出的延迟。

### \`aecEstimatedDelay\` [#aecestimateddelay]

回声消除（AEC）模块估算的延迟，单位为毫秒，指本地播放音频到被本地采集之间的信号延迟。
`;
export let structuredData = {
  contents: [{
    heading: "numchannels",
    content: "音频通道数。"
  }, {
    heading: "sentsamplerate",
    content: "本地用户发送音频流的采样率，单位为 Hz。"
  }, {
    heading: "sentbitrate",
    content: "本地用户发送音频流的平均码率，单位为 Kbps。"
  }, {
    heading: "internalcodec",
    content: "内部使用的负载编解码器。"
  }, {
    heading: "txpacketlossrate",
    content: "应用抗丢包策略前，从本地客户端到声网服务器的音频丢包率（%）。"
  }, {
    heading: "audiodevicedelay",
    content: "音频设备模块在播放或采集音频时的延迟，单位为毫秒。"
  }, {
    heading: "audioplayoutdelay",
    content: "设备播放音频的延迟，单位为毫秒。"
  }, {
    heading: "earmonitordelay",
    content: "耳返延迟，单位为毫秒，指从麦克风输入到耳机输出的延迟。"
  }, {
    heading: "aecestimateddelay",
    content: "回声消除（AEC）模块估算的延迟，单位为毫秒，指本地播放音频到被本地采集之间的信号延迟。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "numchannels",
    content: "`numChannels`"
  }, {
    id: "sentsamplerate",
    content: "`sentSampleRate`"
  }, {
    id: "sentbitrate",
    content: "`sentBitrate`"
  }, {
    id: "internalcodec",
    content: "`internalCodec`"
  }, {
    id: "txpacketlossrate",
    content: "`txPacketLossRate`"
  }, {
    id: "audiodevicedelay",
    content: "`audioDeviceDelay`"
  }, {
    id: "audioplayoutdelay",
    content: "`audioPlayoutDelay`"
  }, {
    id: "earmonitordelay",
    content: "`earMonitorDelay`"
  }, {
    id: "aecestimateddelay",
    content: "`aecEstimatedDelay`"
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
  url: "#numchannels",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "numChannels"
    })
  })
}, {
  depth: 3,
  url: "#sentsamplerate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sentSampleRate"
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
  url: "#internalcodec",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "internalCodec"
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
  url: "#audiodevicedelay",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "audioDeviceDelay"
    })
  })
}, {
  depth: 3,
  url: "#audioplayoutdelay",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "audioPlayoutDelay"
    })
  })
}, {
  depth: 3,
  url: "#earmonitordelay",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "earMonitorDelay"
    })
  })
}, {
  depth: 3,
  url: "#aecestimateddelay",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "aecEstimatedDelay"
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
      id: "class_localaudiostats__prototype"
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
              children: " LocalAudioStats"
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
              children: " sentSampleRate;"
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
              children: " internalCodec;"
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
              children: " audioDeviceDelay;"
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
              children: " audioPlayoutDelay;"
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
              children: " earMonitorDelay;"
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
              children: " aecEstimatedDelay;"
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
      id: "class_localaudiostats__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "numchannels",
      children: _jsx(_components.code, {
        children: "numChannels"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频通道数。"
    }), `
`, _jsx(_components.h3, {
      id: "sentsamplerate",
      children: _jsx(_components.code, {
        children: "sentSampleRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地用户发送音频流的采样率，单位为 Hz。"
    }), `
`, _jsx(_components.h3, {
      id: "sentbitrate",
      children: _jsx(_components.code, {
        children: "sentBitrate"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地用户发送音频流的平均码率，单位为 Kbps。"
    }), `
`, _jsx(_components.h3, {
      id: "internalcodec",
      children: _jsx(_components.code, {
        children: "internalCodec"
      })
    }), `
`, _jsx(_components.p, {
      children: "内部使用的负载编解码器。"
    }), `
`, _jsx(_components.h3, {
      id: "txpacketlossrate",
      children: _jsx(_components.code, {
        children: "txPacketLossRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "应用抗丢包策略前，从本地客户端到声网服务器的音频丢包率（%）。"
    }), `
`, _jsx(_components.h3, {
      id: "audiodevicedelay",
      children: _jsx(_components.code, {
        children: "audioDeviceDelay"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频设备模块在播放或采集音频时的延迟，单位为毫秒。"
    }), `
`, _jsx(_components.h3, {
      id: "audioplayoutdelay",
      children: _jsx(_components.code, {
        children: "audioPlayoutDelay"
      })
    }), `
`, _jsx(_components.p, {
      children: "设备播放音频的延迟，单位为毫秒。"
    }), `
`, _jsx(_components.h3, {
      id: "earmonitordelay",
      children: _jsx(_components.code, {
        children: "earMonitorDelay"
      })
    }), `
`, _jsx(_components.p, {
      children: "耳返延迟，单位为毫秒，指从麦克风输入到耳机输出的延迟。"
    }), `
`, _jsx(_components.h3, {
      id: "aecestimateddelay",
      children: _jsx(_components.code, {
        children: "aecEstimatedDelay"
      })
    }), `
`, _jsx(_components.p, {
      children: "回声消除（AEC）模块估算的延迟，单位为毫秒，指本地播放音频到被本地采集之间的信号延迟。"
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
