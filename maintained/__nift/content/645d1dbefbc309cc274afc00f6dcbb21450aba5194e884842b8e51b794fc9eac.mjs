import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "TTS 模型",
  description: "为 Voice Agent 选择文本转语音供应商。"
};
export let _markdown = `

TTS 负责把智能体回复转换成音频输出。

选择 TTS 时，建议重点比较：

* 音色质量
* 流式首包延迟
* 语言和音色覆盖
* 地域和账号要求
* 是否支持特定采样率或流式协议

## 供应商 [#供应商]

* [OpenAI](openai.mdx)
* [Deepgram](deepgram.mdx)
* [ElevenLabs](elevenlabs.mdx)
* [Google](google.mdx)
* [Microsoft Azure](microsoft.mdx)
* [Amazon Polly](amazon.mdx)
* [Cartesia](cartesia.mdx)
* [Rime](rime.mdx)
* [MiniMax](minimax.mdx)
* [Murf](murf.mdx)
* [Fish Audio](fish-audio.mdx)
* [Hume AI](humeai.mdx)
* [Sarvam](sarvam.mdx)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "TTS 负责把智能体回复转换成音频输出。"
  }, {
    heading: undefined,
    content: "选择 TTS 时，建议重点比较："
  }, {
    heading: undefined,
    content: "音色质量"
  }, {
    heading: undefined,
    content: "流式首包延迟"
  }, {
    heading: undefined,
    content: "语言和音色覆盖"
  }, {
    heading: undefined,
    content: "地域和账号要求"
  }, {
    heading: undefined,
    content: "是否支持特定采样率或流式协议"
  }, {
    heading: "供应商",
    content: "OpenAI"
  }, {
    heading: "供应商",
    content: "Deepgram"
  }, {
    heading: "供应商",
    content: "ElevenLabs"
  }, {
    heading: "供应商",
    content: "Google"
  }, {
    heading: "供应商",
    content: "Microsoft Azure"
  }, {
    heading: "供应商",
    content: "Amazon Polly"
  }, {
    heading: "供应商",
    content: "Cartesia"
  }, {
    heading: "供应商",
    content: "Rime"
  }, {
    heading: "供应商",
    content: "MiniMax"
  }, {
    heading: "供应商",
    content: "Murf"
  }, {
    heading: "供应商",
    content: "Fish Audio"
  }, {
    heading: "供应商",
    content: "Hume AI"
  }, {
    heading: "供应商",
    content: "Sarvam"
  }],
  headings: [{
    id: "供应商",
    content: "供应商"
  }]
};
export let toc = [{
  depth: 2,
  url: "#供应商",
  title: _jsx(_Fragment, {
    children: "供应商"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "TTS 负责把智能体回复转换成音频输出。"
    }), `
`, _jsx(_components.p, {
      children: "选择 TTS 时，建议重点比较："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "音色质量"
      }), `
`, _jsx(_components.li, {
        children: "流式首包延迟"
      }), `
`, _jsx(_components.li, {
        children: "语言和音色覆盖"
      }), `
`, _jsx(_components.li, {
        children: "地域和账号要求"
      }), `
`, _jsx(_components.li, {
        children: "是否支持特定采样率或流式协议"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "供应商",
      children: "供应商"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "openai.mdx",
          children: "OpenAI"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "deepgram.mdx",
          children: "Deepgram"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "elevenlabs.mdx",
          children: "ElevenLabs"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "google.mdx",
          children: "Google"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "microsoft.mdx",
          children: "Microsoft Azure"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "amazon.mdx",
          children: "Amazon Polly"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "cartesia.mdx",
          children: "Cartesia"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "rime.mdx",
          children: "Rime"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "minimax.mdx",
          children: "MiniMax"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "murf.mdx",
          children: "Murf"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "fish-audio.mdx",
          children: "Fish Audio"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "humeai.mdx",
          children: "Hume AI"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "sarvam.mdx",
          children: "Sarvam"
        })
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
