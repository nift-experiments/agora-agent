import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AudioEncodedFrameObserverConfig",
  description: "用于配置编码音频的监听器。"
};
export let _markdown = `

<a id="class_audioencodedframeobserverconfig__prototype" />

\`\`\`java
public class AudioEncodedFrameObserverConfig {
  public int postionType;
  public int encodingType;
}
\`\`\`

<a id="class_audioencodedframeobserverconfig__parameters" />

## 属性 [#属性]

### \`postionType\` [#postiontype]

音频监听器的采集位置：

* AUDIO\\_ENCODED\\_FRAME\\_OBSERVER\\_POSITION\\_MIC （1）：仅采集本地用户的音频。
* AUDIO\\_ENCODED\\_FRAME\\_OBSERVER\\_POSITION\\_PLAYBACK （2）：仅采集所有远端用户的音频。
* AUDIO\\_ENCODED\\_FRAME\\_OBSERVER\\_POSITION\\_MIXED （3）：采集本地和所有远端用户的混音音频。

### \`encodingType\` [#encodingtype]

音频编码类型：

* AUDIO\\_ENCODING\\_TYPE\\_AAC\\_16000\\_LOW：AAC 编码格式，16000 Hz 采样率，低质量。编码后 10 分钟音频约为 1.2 MB。
* AUDIO\\_ENCODING\\_TYPE\\_AAC\\_16000\\_MEDIUM：AAC 编码格式，16000 Hz 采样率，中等质量。编码后 10 分钟音频约为 2 MB。
* AUDIO\\_ENCODING\\_TYPE\\_AAC\\_32000\\_LOW：AAC 编码格式，32000 Hz 采样率，低质量。编码后 10 分钟音频约为 1.2 MB。
* AUDIO\\_ENCODING\\_TYPE\\_AAC\\_32000\\_MEDIUM：AAC 编码格式，32000 Hz 采样率，中等质量。编码后 10 分钟音频约为 2 MB。
* AUDIO\\_ENCODING\\_TYPE\\_AAC\\_32000\\_HIGH：AAC 编码格式，32000 Hz 采样率，高质量。编码后 10 分钟音频约为 3.5 MB。
* AUDIO\\_ENCODING\\_TYPE\\_AAC\\_48000\\_MEDIUM：AAC 编码格式，48000 Hz 采样率，中等质量。编码后 10 分钟音频约为 2 MB。
* AUDIO\\_ENCODING\\_TYPE\\_AAC\\_48000\\_HIGH：AAC 编码格式，48000 Hz 采样率，高质量。编码后 10 分钟音频约为 3.5 MB。
* AUDIO\\_ENCODING\\_TYPE\\_OPUS\\_16000\\_LOW：OPUS 编码格式，16000 Hz 采样率，低质量。编码后 10 分钟音频约为 2 MB。
* AUDIO\\_ENCODING\\_TYPE\\_OPUS\\_16000\\_MEDIUM：OPUS 编码格式，16000 Hz 采样率，中等质量。编码后 10 分钟音频约为 2 MB。
* AUDIO\\_ENCODING\\_TYPE\\_OPUS\\_48000\\_MEDIUM：OPUS 编码格式，48000 Hz 采样率，中等质量。编码后 10 分钟音频约为 2 MB。
* AUDIO\\_ENCODING\\_TYPE\\_OPUS\\_48000\\_HIGH：OPUS 编码格式，48000 Hz 采样率，高质量。编码后 10 分钟音频约为 3.5 MB。
`;
export let structuredData = {
  contents: [{
    heading: "postiontype",
    content: "音频监听器的采集位置："
  }, {
    heading: "postiontype",
    content: "AUDIO\\_ENCODED\\_FRAME\\_OBSERVER\\_POSITION\\_MIC （1）：仅采集本地用户的音频。"
  }, {
    heading: "postiontype",
    content: "AUDIO\\_ENCODED\\_FRAME\\_OBSERVER\\_POSITION\\_PLAYBACK （2）：仅采集所有远端用户的音频。"
  }, {
    heading: "postiontype",
    content: "AUDIO\\_ENCODED\\_FRAME\\_OBSERVER\\_POSITION\\_MIXED （3）：采集本地和所有远端用户的混音音频。"
  }, {
    heading: "encodingtype",
    content: "音频编码类型："
  }, {
    heading: "encodingtype",
    content: "AUDIO\\_ENCODING\\_TYPE\\_AAC\\_16000\\_LOW：AAC 编码格式，16000 Hz 采样率，低质量。编码后 10 分钟音频约为 1.2 MB。"
  }, {
    heading: "encodingtype",
    content: "AUDIO\\_ENCODING\\_TYPE\\_AAC\\_16000\\_MEDIUM：AAC 编码格式，16000 Hz 采样率，中等质量。编码后 10 分钟音频约为 2 MB。"
  }, {
    heading: "encodingtype",
    content: "AUDIO\\_ENCODING\\_TYPE\\_AAC\\_32000\\_LOW：AAC 编码格式，32000 Hz 采样率，低质量。编码后 10 分钟音频约为 1.2 MB。"
  }, {
    heading: "encodingtype",
    content: "AUDIO\\_ENCODING\\_TYPE\\_AAC\\_32000\\_MEDIUM：AAC 编码格式，32000 Hz 采样率，中等质量。编码后 10 分钟音频约为 2 MB。"
  }, {
    heading: "encodingtype",
    content: "AUDIO\\_ENCODING\\_TYPE\\_AAC\\_32000\\_HIGH：AAC 编码格式，32000 Hz 采样率，高质量。编码后 10 分钟音频约为 3.5 MB。"
  }, {
    heading: "encodingtype",
    content: "AUDIO\\_ENCODING\\_TYPE\\_AAC\\_48000\\_MEDIUM：AAC 编码格式，48000 Hz 采样率，中等质量。编码后 10 分钟音频约为 2 MB。"
  }, {
    heading: "encodingtype",
    content: "AUDIO\\_ENCODING\\_TYPE\\_AAC\\_48000\\_HIGH：AAC 编码格式，48000 Hz 采样率，高质量。编码后 10 分钟音频约为 3.5 MB。"
  }, {
    heading: "encodingtype",
    content: "AUDIO\\_ENCODING\\_TYPE\\_OPUS\\_16000\\_LOW：OPUS 编码格式，16000 Hz 采样率，低质量。编码后 10 分钟音频约为 2 MB。"
  }, {
    heading: "encodingtype",
    content: "AUDIO\\_ENCODING\\_TYPE\\_OPUS\\_16000\\_MEDIUM：OPUS 编码格式，16000 Hz 采样率，中等质量。编码后 10 分钟音频约为 2 MB。"
  }, {
    heading: "encodingtype",
    content: "AUDIO\\_ENCODING\\_TYPE\\_OPUS\\_48000\\_MEDIUM：OPUS 编码格式，48000 Hz 采样率，中等质量。编码后 10 分钟音频约为 2 MB。"
  }, {
    heading: "encodingtype",
    content: "AUDIO\\_ENCODING\\_TYPE\\_OPUS\\_48000\\_HIGH：OPUS 编码格式，48000 Hz 采样率，高质量。编码后 10 分钟音频约为 3.5 MB。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "postiontype",
    content: "`postionType`"
  }, {
    id: "encodingtype",
    content: "`encodingType`"
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
  url: "#postiontype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "postionType"
    })
  })
}, {
  depth: 3,
  url: "#encodingtype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "encodingType"
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
      id: "class_audioencodedframeobserverconfig__prototype"
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
              children: " AudioEncodedFrameObserverConfig"
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
              children: " postionType;"
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
              children: " encodingType;"
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
      id: "class_audioencodedframeobserverconfig__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "postiontype",
      children: _jsx(_components.code, {
        children: "postionType"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频监听器的采集位置："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "AUDIO_ENCODED_FRAME_OBSERVER_POSITION_MIC （1）：仅采集本地用户的音频。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_ENCODED_FRAME_OBSERVER_POSITION_PLAYBACK （2）：仅采集所有远端用户的音频。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_ENCODED_FRAME_OBSERVER_POSITION_MIXED （3）：采集本地和所有远端用户的混音音频。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "encodingtype",
      children: _jsx(_components.code, {
        children: "encodingType"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频编码类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "AUDIO_ENCODING_TYPE_AAC_16000_LOW：AAC 编码格式，16000 Hz 采样率，低质量。编码后 10 分钟音频约为 1.2 MB。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_ENCODING_TYPE_AAC_16000_MEDIUM：AAC 编码格式，16000 Hz 采样率，中等质量。编码后 10 分钟音频约为 2 MB。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_ENCODING_TYPE_AAC_32000_LOW：AAC 编码格式，32000 Hz 采样率，低质量。编码后 10 分钟音频约为 1.2 MB。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_ENCODING_TYPE_AAC_32000_MEDIUM：AAC 编码格式，32000 Hz 采样率，中等质量。编码后 10 分钟音频约为 2 MB。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_ENCODING_TYPE_AAC_32000_HIGH：AAC 编码格式，32000 Hz 采样率，高质量。编码后 10 分钟音频约为 3.5 MB。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_ENCODING_TYPE_AAC_48000_MEDIUM：AAC 编码格式，48000 Hz 采样率，中等质量。编码后 10 分钟音频约为 2 MB。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_ENCODING_TYPE_AAC_48000_HIGH：AAC 编码格式，48000 Hz 采样率，高质量。编码后 10 分钟音频约为 3.5 MB。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_ENCODING_TYPE_OPUS_16000_LOW：OPUS 编码格式，16000 Hz 采样率，低质量。编码后 10 分钟音频约为 2 MB。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_ENCODING_TYPE_OPUS_16000_MEDIUM：OPUS 编码格式，16000 Hz 采样率，中等质量。编码后 10 分钟音频约为 2 MB。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_ENCODING_TYPE_OPUS_48000_MEDIUM：OPUS 编码格式，48000 Hz 采样率，中等质量。编码后 10 分钟音频约为 2 MB。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_ENCODING_TYPE_OPUS_48000_HIGH：OPUS 编码格式，48000 Hz 采样率，高质量。编码后 10 分钟音频约为 3.5 MB。"
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
