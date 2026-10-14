import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "MediaStreamInfo",
  description: "用于描述媒体流的详细信息。"
};
export let _markdown = `

<a id="class_playerstreaminfo__prototype" />

\`\`\`java
public class MediaStreamInfo {
  private int streamIndex;
  private int mediaStreamType;
  private String codecName;
  private String language;
  private int videoFrameRate;
  private int videoBitRate;
  private int videoWidth;
  private int videoHeight;
  private int videoRotation;
  private int audioSampleRate;
  private int audioChannels;
  private int audioBytesPerSample;
  private long duration;
}
\`\`\`

<a id="class_playerstreaminfo__parameters" />

## 属性 [#属性]

### \`streamIndex\` [#streamindex]

媒体流的索引。

### \`mediaStreamType\` [#mediastreamtype]

媒体流的类型。

* STREAM\\_TYPE\\_UNKNOWN （0）：类型未知。
* STREAM\\_TYPE\\_VIDEO （1）：视频流。
* STREAM\\_TYPE\\_AUDIO （2）：音频流。
* STREAM\\_TYPE\\_SUBTITLE （3）：字幕流。

### \`codecName\` [#codecname]

媒体流的编解码器名称。

### \`language\` [#language]

媒体流的语言。

### \`videoFrameRate\` [#videoframerate]

仅对视频流生效，表示视频帧率（fps）。

### \`videoBitRate\` [#videobitrate]

仅对视频流生效，表示视频码率（bps）。

### \`videoWidth\` [#videowidth]

仅对视频流生效，表示视频宽度（像素）。

### \`videoHeight\` [#videoheight]

仅对视频流生效，表示视频高度（像素）。

### \`videoRotation\` [#videorotation]

仅对视频流生效，表示视频旋转角度。

### \`audioSampleRate\` [#audiosamplerate]

仅对音频流生效，表示音频采样率（Hz）。

### \`audioChannels\` [#audiochannels]

仅对音频流生效，表示音频声道数。

### \`audioBytesPerSample\` [#audiobytespersample]

仅对音频流生效，表示每个音频采样的位数。

### \`duration\` [#duration]

媒体流的总时长（毫秒）。
`;
export let structuredData = {
  contents: [{
    heading: "streamindex",
    content: "媒体流的索引。"
  }, {
    heading: "mediastreamtype",
    content: "媒体流的类型。"
  }, {
    heading: "mediastreamtype",
    content: "STREAM\\_TYPE\\_UNKNOWN （0）：类型未知。"
  }, {
    heading: "mediastreamtype",
    content: "STREAM\\_TYPE\\_VIDEO （1）：视频流。"
  }, {
    heading: "mediastreamtype",
    content: "STREAM\\_TYPE\\_AUDIO （2）：音频流。"
  }, {
    heading: "mediastreamtype",
    content: "STREAM\\_TYPE\\_SUBTITLE （3）：字幕流。"
  }, {
    heading: "codecname",
    content: "媒体流的编解码器名称。"
  }, {
    heading: "language",
    content: "媒体流的语言。"
  }, {
    heading: "videoframerate",
    content: "仅对视频流生效，表示视频帧率（fps）。"
  }, {
    heading: "videobitrate",
    content: "仅对视频流生效，表示视频码率（bps）。"
  }, {
    heading: "videowidth",
    content: "仅对视频流生效，表示视频宽度（像素）。"
  }, {
    heading: "videoheight",
    content: "仅对视频流生效，表示视频高度（像素）。"
  }, {
    heading: "videorotation",
    content: "仅对视频流生效，表示视频旋转角度。"
  }, {
    heading: "audiosamplerate",
    content: "仅对音频流生效，表示音频采样率（Hz）。"
  }, {
    heading: "audiochannels",
    content: "仅对音频流生效，表示音频声道数。"
  }, {
    heading: "audiobytespersample",
    content: "仅对音频流生效，表示每个音频采样的位数。"
  }, {
    heading: "duration",
    content: "媒体流的总时长（毫秒）。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "streamindex",
    content: "`streamIndex`"
  }, {
    id: "mediastreamtype",
    content: "`mediaStreamType`"
  }, {
    id: "codecname",
    content: "`codecName`"
  }, {
    id: "language",
    content: "`language`"
  }, {
    id: "videoframerate",
    content: "`videoFrameRate`"
  }, {
    id: "videobitrate",
    content: "`videoBitRate`"
  }, {
    id: "videowidth",
    content: "`videoWidth`"
  }, {
    id: "videoheight",
    content: "`videoHeight`"
  }, {
    id: "videorotation",
    content: "`videoRotation`"
  }, {
    id: "audiosamplerate",
    content: "`audioSampleRate`"
  }, {
    id: "audiochannels",
    content: "`audioChannels`"
  }, {
    id: "audiobytespersample",
    content: "`audioBytesPerSample`"
  }, {
    id: "duration",
    content: "`duration`"
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
  url: "#streamindex",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "streamIndex"
    })
  })
}, {
  depth: 3,
  url: "#mediastreamtype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mediaStreamType"
    })
  })
}, {
  depth: 3,
  url: "#codecname",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "codecName"
    })
  })
}, {
  depth: 3,
  url: "#language",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "language"
    })
  })
}, {
  depth: 3,
  url: "#videoframerate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoFrameRate"
    })
  })
}, {
  depth: 3,
  url: "#videobitrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoBitRate"
    })
  })
}, {
  depth: 3,
  url: "#videowidth",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoWidth"
    })
  })
}, {
  depth: 3,
  url: "#videoheight",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoHeight"
    })
  })
}, {
  depth: 3,
  url: "#videorotation",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoRotation"
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
  url: "#audiochannels",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "audioChannels"
    })
  })
}, {
  depth: 3,
  url: "#audiobytespersample",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "audioBytesPerSample"
    })
  })
}, {
  depth: 3,
  url: "#duration",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "duration"
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_playerstreaminfo__prototype"
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
              children: " MediaStreamInfo"
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
              children: "  private"
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
              children: " streamIndex;"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " mediaStreamType;"
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
              children: " String codecName;"
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
              children: " String language;"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " videoFrameRate;"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " videoBitRate;"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " videoWidth;"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " videoHeight;"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " videoRotation;"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " audioSampleRate;"
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
              children: "  private"
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
              children: " audioBytesPerSample;"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " duration;"
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
      id: "class_playerstreaminfo__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "streamindex",
      children: _jsx(_components.code, {
        children: "streamIndex"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体流的索引。"
    }), `
`, _jsx(_components.h3, {
      id: "mediastreamtype",
      children: _jsx(_components.code, {
        children: "mediaStreamType"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体流的类型。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "STREAM_TYPE_UNKNOWN （0）：类型未知。"
      }), `
`, _jsx(_components.li, {
        children: "STREAM_TYPE_VIDEO （1）：视频流。"
      }), `
`, _jsx(_components.li, {
        children: "STREAM_TYPE_AUDIO （2）：音频流。"
      }), `
`, _jsx(_components.li, {
        children: "STREAM_TYPE_SUBTITLE （3）：字幕流。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "codecname",
      children: _jsx(_components.code, {
        children: "codecName"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体流的编解码器名称。"
    }), `
`, _jsx(_components.h3, {
      id: "language",
      children: _jsx(_components.code, {
        children: "language"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体流的语言。"
    }), `
`, _jsx(_components.h3, {
      id: "videoframerate",
      children: _jsx(_components.code, {
        children: "videoFrameRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "仅对视频流生效，表示视频帧率（fps）。"
    }), `
`, _jsx(_components.h3, {
      id: "videobitrate",
      children: _jsx(_components.code, {
        children: "videoBitRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "仅对视频流生效，表示视频码率（bps）。"
    }), `
`, _jsx(_components.h3, {
      id: "videowidth",
      children: _jsx(_components.code, {
        children: "videoWidth"
      })
    }), `
`, _jsx(_components.p, {
      children: "仅对视频流生效，表示视频宽度（像素）。"
    }), `
`, _jsx(_components.h3, {
      id: "videoheight",
      children: _jsx(_components.code, {
        children: "videoHeight"
      })
    }), `
`, _jsx(_components.p, {
      children: "仅对视频流生效，表示视频高度（像素）。"
    }), `
`, _jsx(_components.h3, {
      id: "videorotation",
      children: _jsx(_components.code, {
        children: "videoRotation"
      })
    }), `
`, _jsx(_components.p, {
      children: "仅对视频流生效，表示视频旋转角度。"
    }), `
`, _jsx(_components.h3, {
      id: "audiosamplerate",
      children: _jsx(_components.code, {
        children: "audioSampleRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "仅对音频流生效，表示音频采样率（Hz）。"
    }), `
`, _jsx(_components.h3, {
      id: "audiochannels",
      children: _jsx(_components.code, {
        children: "audioChannels"
      })
    }), `
`, _jsx(_components.p, {
      children: "仅对音频流生效，表示音频声道数。"
    }), `
`, _jsx(_components.h3, {
      id: "audiobytespersample",
      children: _jsx(_components.code, {
        children: "audioBytesPerSample"
      })
    }), `
`, _jsx(_components.p, {
      children: "仅对音频流生效，表示每个音频采样的位数。"
    }), `
`, _jsx(_components.h3, {
      id: "duration",
      children: _jsx(_components.code, {
        children: "duration"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体流的总时长（毫秒）。"
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
