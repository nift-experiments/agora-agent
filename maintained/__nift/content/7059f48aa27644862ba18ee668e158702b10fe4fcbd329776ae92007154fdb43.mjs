import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "控制音频输出",
  description: "调整 voice agent 的语音输出方式、编码和终端播放体验。"
};
export let _markdown = `

Voice Agent 的“输出”不只是选一个 TTS 声音。你还需要同时考虑编码格式、终端播放特性、网络条件和角色风格。

## 常见关注点 [#常见关注点]

* 选择哪一种 TTS 提供商和音色
* 是否需要更低延迟的流式输出
* 设备端或客户端是否有特定编码要求
* 字幕、打断和播报节奏如何协同

## 配置位置 [#配置位置]

语音输出相关配置通常落在：

* \`tts\`：控制供应商、模型、音色、语速等
* \`parameters.output_audio_codec\`：当终端或设备需要特定编码时使用

## 实践建议 [#实践建议]

* 优先选择能够稳定流式输出的 TTS 方案
* 输出语音要和角色设定匹配，而不只是“好听”
* 如果设备或弱网环境对音频编码有要求，提前在端到端链路里验证

## 相关页面 [#相关页面]

* [TTS 模型](../models/tts/index.md)
* [Convo AI Device Kit 架构概览](../device-kit/build/architecture-overview.md)
* [显示实时转写](transcripts.md)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Voice Agent 的“输出”不只是选一个 TTS 声音。你还需要同时考虑编码格式、终端播放特性、网络条件和角色风格。"
  }, {
    heading: "常见关注点",
    content: "选择哪一种 TTS 提供商和音色"
  }, {
    heading: "常见关注点",
    content: "是否需要更低延迟的流式输出"
  }, {
    heading: "常见关注点",
    content: "设备端或客户端是否有特定编码要求"
  }, {
    heading: "常见关注点",
    content: "字幕、打断和播报节奏如何协同"
  }, {
    heading: "配置位置",
    content: "语音输出相关配置通常落在："
  }, {
    heading: "配置位置",
    content: "`tts`：控制供应商、模型、音色、语速等"
  }, {
    heading: "配置位置",
    content: "`parameters.output_audio_codec`：当终端或设备需要特定编码时使用"
  }, {
    heading: "实践建议",
    content: "优先选择能够稳定流式输出的 TTS 方案"
  }, {
    heading: "实践建议",
    content: "输出语音要和角色设定匹配，而不只是“好听”"
  }, {
    heading: "实践建议",
    content: "如果设备或弱网环境对音频编码有要求，提前在端到端链路里验证"
  }, {
    heading: "相关页面",
    content: "TTS 模型"
  }, {
    heading: "相关页面",
    content: "Convo AI Device Kit 架构概览"
  }, {
    heading: "相关页面",
    content: "显示实时转写"
  }],
  headings: [{
    id: "常见关注点",
    content: "常见关注点"
  }, {
    id: "配置位置",
    content: "配置位置"
  }, {
    id: "实践建议",
    content: "实践建议"
  }, {
    id: "相关页面",
    content: "相关页面"
  }]
};
export let toc = [{
  depth: 2,
  url: "#常见关注点",
  title: _jsx(_Fragment, {
    children: "常见关注点"
  })
}, {
  depth: 2,
  url: "#配置位置",
  title: _jsx(_Fragment, {
    children: "配置位置"
  })
}, {
  depth: 2,
  url: "#实践建议",
  title: _jsx(_Fragment, {
    children: "实践建议"
  })
}, {
  depth: 2,
  url: "#相关页面",
  title: _jsx(_Fragment, {
    children: "相关页面"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Voice Agent 的“输出”不只是选一个 TTS 声音。你还需要同时考虑编码格式、终端播放特性、网络条件和角色风格。"
    }), `
`, _jsx(_components.h2, {
      id: "常见关注点",
      children: "常见关注点"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "选择哪一种 TTS 提供商和音色"
      }), `
`, _jsx(_components.li, {
        children: "是否需要更低延迟的流式输出"
      }), `
`, _jsx(_components.li, {
        children: "设备端或客户端是否有特定编码要求"
      }), `
`, _jsx(_components.li, {
        children: "字幕、打断和播报节奏如何协同"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "配置位置",
      children: "配置位置"
    }), `
`, _jsx(_components.p, {
      children: "语音输出相关配置通常落在："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "tts"
        }), "：控制供应商、模型、音色、语速等"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "parameters.output_audio_codec"
        }), "：当终端或设备需要特定编码时使用"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "实践建议",
      children: "实践建议"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "优先选择能够稳定流式输出的 TTS 方案"
      }), `
`, _jsx(_components.li, {
        children: "输出语音要和角色设定匹配，而不只是“好听”"
      }), `
`, _jsx(_components.li, {
        children: "如果设备或弱网环境对音频编码有要求，提前在端到端链路里验证"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "相关页面",
      children: "相关页面"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../models/tts/index.md",
          children: "TTS 模型"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../device-kit/build/architecture-overview.md",
          children: "Convo AI Device Kit 架构概览"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "transcripts.md",
          children: "显示实时转写"
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
