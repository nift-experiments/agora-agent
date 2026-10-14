import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "OpenAI（Beta）",
  description: "在 Voice Agent 中使用 OpenAI 作为 ASR 服务。"
};
export let _markdown = `

OpenAI 提供低延迟的实时语音转文本能力，适合需要快速集成 OpenAI 语音识别链路的场景。

## 示例配置 [#示例配置]

\`\`\`json
"asr": {
  "vendor": "openai",
  "params": {
    "api_key": "<openai_key>",
    "input_audio_transcription": {
      "model": "gpt-4o-mini-transcribe",
      "prompt": "请将下面的语音转写成文本。",
      "language": "zh"
    }
  }
}
\`\`\`

## 关键参数 [#关键参数]

* \`params.api_key\`：OpenAI API key
* \`params.input_audio_transcription.model\`：转写模型，例如 \`gpt-4o-mini-transcribe\`
* \`params.input_audio_transcription.prompt\`：用于约束转写风格或上下文的提示词
* \`params.input_audio_transcription.language\`：语言代码，例如 \`zh\`、\`en\`

更多参数见 [OpenAI Speech-to-Text 文档](https://platform.openai.com/docs/guides/speech-to-text)。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "OpenAI 提供低延迟的实时语音转文本能力，适合需要快速集成 OpenAI 语音识别链路的场景。"
  }, {
    heading: "关键参数",
    content: "`params.api_key`：OpenAI API key"
  }, {
    heading: "关键参数",
    content: "`params.input_audio_transcription.model`：转写模型，例如 `gpt-4o-mini-transcribe`"
  }, {
    heading: "关键参数",
    content: "`params.input_audio_transcription.prompt`：用于约束转写风格或上下文的提示词"
  }, {
    heading: "关键参数",
    content: "`params.input_audio_transcription.language`：语言代码，例如 `zh`、`en`"
  }, {
    heading: "关键参数",
    content: "更多参数见 OpenAI Speech-to-Text 文档。"
  }],
  headings: [{
    id: "示例配置",
    content: "示例配置"
  }, {
    id: "关键参数",
    content: "关键参数"
  }]
};
export let toc = [{
  depth: 2,
  url: "#示例配置",
  title: _jsx(_Fragment, {
    children: "示例配置"
  })
}, {
  depth: 2,
  url: "#关键参数",
  title: _jsx(_Fragment, {
    children: "关键参数"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "OpenAI 提供低延迟的实时语音转文本能力，适合需要快速集成 OpenAI 语音识别链路的场景。"
    }), `
`, _jsx(_components.h2, {
      id: "示例配置",
      children: "示例配置"
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"asr"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "vendor"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"openai"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "params"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "api_key"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"<openai_key>"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "input_audio_transcription"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "model"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"gpt-4o-mini-transcribe"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "prompt"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"请将下面的语音转写成文本。"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "language"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"zh"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    }"
            })
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
`, _jsx(_components.h2, {
      id: "关键参数",
      children: "关键参数"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "params.api_key"
        }), "：OpenAI API key"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "params.input_audio_transcription.model"
        }), "：转写模型，例如 ", _jsx(_components.code, {
          children: "gpt-4o-mini-transcribe"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "params.input_audio_transcription.prompt"
        }), "：用于约束转写风格或上下文的提示词"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "params.input_audio_transcription.language"
        }), "：语言代码，例如 ", _jsx(_components.code, {
          children: "zh"
        }), "、", _jsx(_components.code, {
          children: "en"
        })]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["更多参数见 ", _jsx(_components.a, {
        href: "https://platform.openai.com/docs/guides/speech-to-text",
        children: "OpenAI Speech-to-Text 文档"
      }), "。"]
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
