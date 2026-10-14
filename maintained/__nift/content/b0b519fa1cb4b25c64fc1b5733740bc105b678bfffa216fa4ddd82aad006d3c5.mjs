import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AudioRecordingConfiguration",
  description: "录音参数配置。"
};
export let _markdown = `

<a id="class_audiorecordingconfiguration__prototype" />

\`\`\`java
public class AudioRecordingConfiguration {
  public String filePath;
  public int sampleRate;
  public boolean codec;
  public int fileRecordOption;
  public int quality;
  public int recordingChannel;
}
\`\`\`

<a id="class_audiorecordingconfiguration__parameters" />

## 属性 [#属性]

### \`filePath\` [#filepath]

录音文件的绝对路径（包括文件扩展名）。例如： /sdcard/emulated/0/audio.aac。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    确保日志文件目录存在且可写。
  </CalloutDescription>
</CalloutContainer>

### \`sampleRate\` [#samplerate]

录音采样率（Hz）。支持以下数值：16000、（默认）32000、44100、48000。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果将该参数设置为 44100 或 48000，声网建议录制 WAV 文件，或将 \`quality\` 设置为 \`AUDIO_RECORDING_QUALITY_MEDIUM\` 或 \`AUDIO_RECORDING_QUALITY_HIGH\` 的 AAC 文件，以获得更好的录音质量。
  </CalloutDescription>
</CalloutContainer>

### \`codec\` [#codec]

是否对音频数据进行编码：

* true：将音频数据编码为 AAC 格式。
* false：（默认）不编码，直接保存录音数据。

### \`fileRecordOption\` [#filerecordoption]

录制内容选项：

* AUDIO\\_FILE\\_RECORDING\\_MIC (1)：仅录制本地用户的音频。
* AUDIO\\_FILE\\_RECORDING\\_PLAYBACK (2)：仅录制所有远端用户的音频。
* AUDIO\\_FILE\\_RECORDING\\_MIXED (3)：（默认）录制本地和所有远端用户的混音音频。

### \`quality\` [#quality]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该参数仅适用于 AAC 文件。
  </CalloutDescription>
</CalloutContainer>

录音音质等级：

* AUDIO\\_RECORDING\\_QUALITY\\_LOW (0)：低音质。例如采样率为 32000 Hz、录制 10 分钟的 AAC 文件大小约为 1.2 MB。
* AUDIO\\_RECORDING\\_QUALITY\\_MEDIUM (1)：（默认）中等音质，文件大小约为 2 MB。
* AUDIO\\_RECORDING\\_QUALITY\\_HIGH (2)：高音质，文件大小约为 3.75 MB。
* AUDIO\\_RECORDING\\_QUALITY\\_ULTRA\\_HIGH (3)：超高音质，采样率为 32 kHz，录制 10 分钟后的文件大小约为 7.5 MB。

### \`recordingChannel\` [#recordingchannel]

注： 实际录制的音频声道与采集的音频声道有关。

* 如果采集的是单声道， recordingChannel 为 2，则录制数据为从单声道复制的双声道数据，而非真正的立体声。
* 如果采集的是双声道， recordingChannel 为 1，则录制数据为将双声道混合后的单声道。

集成方案也会影响最终录制的音频声道。如需立体声录制，请[联系技术支持](https://ticket.shengwang.cn/)。

录音的音频声道数，支持以下取值：

* 1：（默认）单声道。
* 2：双声道。
`;
export let structuredData = {
  contents: [{
    heading: "filepath",
    content: "录音文件的绝对路径（包括文件扩展名）。例如： /sdcard/emulated/0/audio.aac。"
  }, {
    heading: "filepath",
    content: "确保日志文件目录存在且可写。"
  }, {
    heading: "samplerate",
    content: "录音采样率（Hz）。支持以下数值：16000、（默认）32000、44100、48000。"
  }, {
    heading: "samplerate",
    content: "如果将该参数设置为 44100 或 48000，声网建议录制 WAV 文件，或将 `quality` 设置为 `AUDIO_RECORDING_QUALITY_MEDIUM` 或 `AUDIO_RECORDING_QUALITY_HIGH` 的 AAC 文件，以获得更好的录音质量。"
  }, {
    heading: "codec",
    content: "是否对音频数据进行编码："
  }, {
    heading: "codec",
    content: "true：将音频数据编码为 AAC 格式。"
  }, {
    heading: "codec",
    content: "false：（默认）不编码，直接保存录音数据。"
  }, {
    heading: "filerecordoption",
    content: "录制内容选项："
  }, {
    heading: "filerecordoption",
    content: "AUDIO\\_FILE\\_RECORDING\\_MIC (1)：仅录制本地用户的音频。"
  }, {
    heading: "filerecordoption",
    content: "AUDIO\\_FILE\\_RECORDING\\_PLAYBACK (2)：仅录制所有远端用户的音频。"
  }, {
    heading: "filerecordoption",
    content: "AUDIO\\_FILE\\_RECORDING\\_MIXED (3)：（默认）录制本地和所有远端用户的混音音频。"
  }, {
    heading: "quality",
    content: "该参数仅适用于 AAC 文件。"
  }, {
    heading: "quality",
    content: "录音音质等级："
  }, {
    heading: "quality",
    content: "AUDIO\\_RECORDING\\_QUALITY\\_LOW (0)：低音质。例如采样率为 32000 Hz、录制 10 分钟的 AAC 文件大小约为 1.2 MB。"
  }, {
    heading: "quality",
    content: "AUDIO\\_RECORDING\\_QUALITY\\_MEDIUM (1)：（默认）中等音质，文件大小约为 2 MB。"
  }, {
    heading: "quality",
    content: "AUDIO\\_RECORDING\\_QUALITY\\_HIGH (2)：高音质，文件大小约为 3.75 MB。"
  }, {
    heading: "quality",
    content: "AUDIO\\_RECORDING\\_QUALITY\\_ULTRA\\_HIGH (3)：超高音质，采样率为 32 kHz，录制 10 分钟后的文件大小约为 7.5 MB。"
  }, {
    heading: "recordingchannel",
    content: "注： 实际录制的音频声道与采集的音频声道有关。"
  }, {
    heading: "recordingchannel",
    content: "如果采集的是单声道， recordingChannel 为 2，则录制数据为从单声道复制的双声道数据，而非真正的立体声。"
  }, {
    heading: "recordingchannel",
    content: "如果采集的是双声道， recordingChannel 为 1，则录制数据为将双声道混合后的单声道。"
  }, {
    heading: "recordingchannel",
    content: "集成方案也会影响最终录制的音频声道。如需立体声录制，请联系技术支持。"
  }, {
    heading: "recordingchannel",
    content: "录音的音频声道数，支持以下取值："
  }, {
    heading: "recordingchannel",
    content: "1：（默认）单声道。"
  }, {
    heading: "recordingchannel",
    content: "2：双声道。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "filepath",
    content: "`filePath`"
  }, {
    id: "samplerate",
    content: "`sampleRate`"
  }, {
    id: "codec",
    content: "`codec`"
  }, {
    id: "filerecordoption",
    content: "`fileRecordOption`"
  }, {
    id: "quality",
    content: "`quality`"
  }, {
    id: "recordingchannel",
    content: "`recordingChannel`"
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
  url: "#filepath",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "filePath"
    })
  })
}, {
  depth: 3,
  url: "#samplerate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sampleRate"
    })
  })
}, {
  depth: 3,
  url: "#codec",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "codec"
    })
  })
}, {
  depth: 3,
  url: "#filerecordoption",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "fileRecordOption"
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
  url: "#recordingchannel",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "recordingChannel"
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
      id: "class_audiorecordingconfiguration__prototype"
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
              children: " AudioRecordingConfiguration"
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
              children: " String filePath;"
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
              children: " sampleRate;"
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
              children: " codec;"
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
              children: " fileRecordOption;"
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
              children: " recordingChannel;"
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
      id: "class_audiorecordingconfiguration__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "filepath",
      children: _jsx(_components.code, {
        children: "filePath"
      })
    }), `
`, _jsx(_components.p, {
      children: "录音文件的绝对路径（包括文件扩展名）。例如： /sdcard/emulated/0/audio.aac。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "确保日志文件目录存在且可写。"
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "samplerate",
      children: _jsx(_components.code, {
        children: "sampleRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "录音采样率（Hz）。支持以下数值：16000、（默认）32000、44100、48000。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果将该参数设置为 44100 或 48000，声网建议录制 WAV 文件，或将 ", _jsx(_components.code, {
            children: "quality"
          }), " 设置为 ", _jsx(_components.code, {
            children: "AUDIO_RECORDING_QUALITY_MEDIUM"
          }), " 或 ", _jsx(_components.code, {
            children: "AUDIO_RECORDING_QUALITY_HIGH"
          }), " 的 AAC 文件，以获得更好的录音质量。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "codec",
      children: _jsx(_components.code, {
        children: "codec"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否对音频数据进行编码："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：将音频数据编码为 AAC 格式。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不编码，直接保存录音数据。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "filerecordoption",
      children: _jsx(_components.code, {
        children: "fileRecordOption"
      })
    }), `
`, _jsx(_components.p, {
      children: "录制内容选项："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "AUDIO_FILE_RECORDING_MIC (1)：仅录制本地用户的音频。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_FILE_RECORDING_PLAYBACK (2)：仅录制所有远端用户的音频。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_FILE_RECORDING_MIXED (3)：（默认）录制本地和所有远端用户的混音音频。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "quality",
      children: _jsx(_components.code, {
        children: "quality"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该参数仅适用于 AAC 文件。"
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "录音音质等级："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "AUDIO_RECORDING_QUALITY_LOW (0)：低音质。例如采样率为 32000 Hz、录制 10 分钟的 AAC 文件大小约为 1.2 MB。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_RECORDING_QUALITY_MEDIUM (1)：（默认）中等音质，文件大小约为 2 MB。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_RECORDING_QUALITY_HIGH (2)：高音质，文件大小约为 3.75 MB。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_RECORDING_QUALITY_ULTRA_HIGH (3)：超高音质，采样率为 32 kHz，录制 10 分钟后的文件大小约为 7.5 MB。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "recordingchannel",
      children: _jsx(_components.code, {
        children: "recordingChannel"
      })
    }), `
`, _jsx(_components.p, {
      children: "注： 实际录制的音频声道与采集的音频声道有关。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果采集的是单声道， recordingChannel 为 2，则录制数据为从单声道复制的双声道数据，而非真正的立体声。"
      }), `
`, _jsx(_components.li, {
        children: "如果采集的是双声道， recordingChannel 为 1，则录制数据为将双声道混合后的单声道。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["集成方案也会影响最终录制的音频声道。如需立体声录制，请", _jsx(_components.a, {
        href: "https://ticket.shengwang.cn/",
        children: "联系技术支持"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "录音的音频声道数，支持以下取值："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：（默认）单声道。"
      }), `
`, _jsx(_components.li, {
        children: "2：双声道。"
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
