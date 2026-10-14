import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "配置 ASR 与 TTS",
  description: "说明语音识别与语音合成在智能体链路中的角色，以及应该从哪些现有文档继续深入。"
};
export let _markdown = `

## 这部分解决什么问题 [#这部分解决什么问题]

ASR 决定用户语音如何变成文本输入，TTS 决定智能体如何把生成结果播报回去。它们直接影响延迟、自然度和交互稳定性。

## 当前仓库里的相关页面 [#当前仓库里的相关页面]

* [实时音频能力](/zh-CN/realtime-media/speech-to-text/audio-modality)
* [配置大模型](/zh-CN/ai/custom-llm)
* [处理打断](/zh-CN/ai/interrupt-agent)

## 配置时要先确认 [#配置时要先确认]

* 选择哪种 ASR / TTS 供应商
* 采样率、语言、声音角色和风格
* 打断时 TTS 是否立即停止
* 是否要为不同场景准备不同播报风格
`;
export let structuredData = {
  contents: [{
    heading: "这部分解决什么问题",
    content: "ASR 决定用户语音如何变成文本输入，TTS 决定智能体如何把生成结果播报回去。它们直接影响延迟、自然度和交互稳定性。"
  }, {
    heading: "当前仓库里的相关页面",
    content: "实时音频能力"
  }, {
    heading: "当前仓库里的相关页面",
    content: "配置大模型"
  }, {
    heading: "当前仓库里的相关页面",
    content: "处理打断"
  }, {
    heading: "配置时要先确认",
    content: "选择哪种 ASR / TTS 供应商"
  }, {
    heading: "配置时要先确认",
    content: "采样率、语言、声音角色和风格"
  }, {
    heading: "配置时要先确认",
    content: "打断时 TTS 是否立即停止"
  }, {
    heading: "配置时要先确认",
    content: "是否要为不同场景准备不同播报风格"
  }],
  headings: [{
    id: "这部分解决什么问题",
    content: "这部分解决什么问题"
  }, {
    id: "当前仓库里的相关页面",
    content: "当前仓库里的相关页面"
  }, {
    id: "配置时要先确认",
    content: "配置时要先确认"
  }]
};
export let toc = [{
  depth: 2,
  url: "#这部分解决什么问题",
  title: _jsx(_Fragment, {
    children: "这部分解决什么问题"
  })
}, {
  depth: 2,
  url: "#当前仓库里的相关页面",
  title: _jsx(_Fragment, {
    children: "当前仓库里的相关页面"
  })
}, {
  depth: 2,
  url: "#配置时要先确认",
  title: _jsx(_Fragment, {
    children: "配置时要先确认"
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
    children: [_jsx(_components.h2, {
      id: "这部分解决什么问题",
      children: "这部分解决什么问题"
    }), `
`, _jsx(_components.p, {
      children: "ASR 决定用户语音如何变成文本输入，TTS 决定智能体如何把生成结果播报回去。它们直接影响延迟、自然度和交互稳定性。"
    }), `
`, _jsx(_components.h2, {
      id: "当前仓库里的相关页面",
      children: "当前仓库里的相关页面"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/realtime-media/speech-to-text/audio-modality",
          children: "实时音频能力"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/custom-llm",
          children: "配置大模型"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/interrupt-agent",
          children: "处理打断"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "配置时要先确认",
      children: "配置时要先确认"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "选择哪种 ASR / TTS 供应商"
      }), `
`, _jsx(_components.li, {
        children: "采样率、语言、声音角色和风格"
      }), `
`, _jsx(_components.li, {
        children: "打断时 TTS 是否立即停止"
      }), `
`, _jsx(_components.li, {
        children: "是否要为不同场景准备不同播报风格"
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
