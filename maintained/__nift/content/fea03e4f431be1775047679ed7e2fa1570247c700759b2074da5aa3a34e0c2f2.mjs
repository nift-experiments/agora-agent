import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AudioFrame",
  description: "原始音频数据。"
};
export let _markdown = `

<a id="class_audioframe__prototype" />

\`\`\`java
public class AudioFrame {
  public ByteBuffer buffer;
  public int sampleRataHz;
  public int bytesPerSample;
  public int channelNums;
  public int samplesPerChannel;
  public long timestamp;
}
\`\`\`

<a id="class_audioframe__parameters" />

## 属性 [#属性]

### \`buffer\` [#buffer]

音频帧的数据缓冲区。当音频帧使用立体声通道时，数据缓冲区为交叉存储。缓冲区大小计算方式为： \`buffer\` = \`samples\` × \`channels\` × \`bytesPerSample\`。

### \`sampleRataHz\` [#sampleratahz]

音频帧中每个声道的采样率（单位为 Hz）。

### \`bytesPerSample\` [#bytespersample]

每个采样的字节数。对于 PCM 数据，通常为 16 位（2 字节）。

### \`channelNums\` [#channelnums]

音频通道数（立体声时为交叉存储）。

* 1：单声道。
* 2：立体声。

### \`samplesPerChannel\` [#samplesperchannel]

音频帧中每个声道的采样数。

### \`timestamp\` [#timestamp]

音频帧的时间戳（单位：毫秒）。
`;
export let structuredData = {
  contents: [{
    heading: "buffer",
    content: "音频帧的数据缓冲区。当音频帧使用立体声通道时，数据缓冲区为交叉存储。缓冲区大小计算方式为： `buffer` = `samples` × `channels` × `bytesPerSample`。"
  }, {
    heading: "sampleratahz",
    content: "音频帧中每个声道的采样率（单位为 Hz）。"
  }, {
    heading: "bytespersample",
    content: "每个采样的字节数。对于 PCM 数据，通常为 16 位（2 字节）。"
  }, {
    heading: "channelnums",
    content: "音频通道数（立体声时为交叉存储）。"
  }, {
    heading: "channelnums",
    content: "1：单声道。"
  }, {
    heading: "channelnums",
    content: "2：立体声。"
  }, {
    heading: "samplesperchannel",
    content: "音频帧中每个声道的采样数。"
  }, {
    heading: "timestamp",
    content: "音频帧的时间戳（单位：毫秒）。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "buffer",
    content: "`buffer`"
  }, {
    id: "sampleratahz",
    content: "`sampleRataHz`"
  }, {
    id: "bytespersample",
    content: "`bytesPerSample`"
  }, {
    id: "channelnums",
    content: "`channelNums`"
  }, {
    id: "samplesperchannel",
    content: "`samplesPerChannel`"
  }, {
    id: "timestamp",
    content: "`timestamp`"
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
  url: "#buffer",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "buffer"
    })
  })
}, {
  depth: 3,
  url: "#sampleratahz",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sampleRataHz"
    })
  })
}, {
  depth: 3,
  url: "#bytespersample",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "bytesPerSample"
    })
  })
}, {
  depth: 3,
  url: "#channelnums",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channelNums"
    })
  })
}, {
  depth: 3,
  url: "#samplesperchannel",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerChannel"
    })
  })
}, {
  depth: 3,
  url: "#timestamp",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "timestamp"
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
      id: "class_audioframe__prototype"
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
              children: " AudioFrame"
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
              children: " ByteBuffer buffer;"
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
              children: " sampleRataHz;"
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
              children: " bytesPerSample;"
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
              children: " channelNums;"
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
              children: " samplesPerChannel;"
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
              children: " long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " timestamp;"
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
      id: "class_audioframe__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "buffer",
      children: _jsx(_components.code, {
        children: "buffer"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音频帧的数据缓冲区。当音频帧使用立体声通道时，数据缓冲区为交叉存储。缓冲区大小计算方式为： ", _jsx(_components.code, {
        children: "buffer"
      }), " = ", _jsx(_components.code, {
        children: "samples"
      }), " × ", _jsx(_components.code, {
        children: "channels"
      }), " × ", _jsx(_components.code, {
        children: "bytesPerSample"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "sampleratahz",
      children: _jsx(_components.code, {
        children: "sampleRataHz"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频帧中每个声道的采样率（单位为 Hz）。"
    }), `
`, _jsx(_components.h3, {
      id: "bytespersample",
      children: _jsx(_components.code, {
        children: "bytesPerSample"
      })
    }), `
`, _jsx(_components.p, {
      children: "每个采样的字节数。对于 PCM 数据，通常为 16 位（2 字节）。"
    }), `
`, _jsx(_components.h3, {
      id: "channelnums",
      children: _jsx(_components.code, {
        children: "channelNums"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频通道数（立体声时为交叉存储）。"
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
      id: "samplesperchannel",
      children: _jsx(_components.code, {
        children: "samplesPerChannel"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频帧中每个声道的采样数。"
    }), `
`, _jsx(_components.h3, {
      id: "timestamp",
      children: _jsx(_components.code, {
        children: "timestamp"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频帧的时间戳（单位：毫秒）。"
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
