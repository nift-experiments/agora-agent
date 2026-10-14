import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "音频设置",
  description: "通过更合适的采集、播放和系统音频配置，提升 voice agent 的对话体验。"
};
export let _markdown = `

Voice Agent 的实际体验很大程度上取决于音频链路。即使模型本身表现很好，糟糕的采集参数、回声处理或播放路径也会明显降低对话质量。

## 优先关注这几件事 [#优先关注这几件事]

* 使用适合实时语音交互的音频场景配置
* 开启或验证 AEC、降噪、自动增益等基础能力
* 保证采样率、声道数和设备能力匹配
* 在真实设备和真实网络环境下做验证

## 常见建议 [#常见建议]

* 移动端优先使用更适合通话或语音交互的音频模式
* 避免系统其它音频播放与智能体播报互相打架
* 如果设备端本身有声学算法，提前确认和 SDK 处理链不会冲突

## 与其他页面的关系 [#与其他页面的关系]

* 如果你在做延迟优化，同时参考[优化端到端对话延迟](optimize-latency.mdx)
* 如果你在做专用设备接入，同时参考 [Convo AI Device Kit](../device-kit/index.md)
* 如果你在做字幕或多模态展示，同时参考[显示实时转写](../build/transcripts.md)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Voice Agent 的实际体验很大程度上取决于音频链路。即使模型本身表现很好，糟糕的采集参数、回声处理或播放路径也会明显降低对话质量。"
  }, {
    heading: "优先关注这几件事",
    content: "使用适合实时语音交互的音频场景配置"
  }, {
    heading: "优先关注这几件事",
    content: "开启或验证 AEC、降噪、自动增益等基础能力"
  }, {
    heading: "优先关注这几件事",
    content: "保证采样率、声道数和设备能力匹配"
  }, {
    heading: "优先关注这几件事",
    content: "在真实设备和真实网络环境下做验证"
  }, {
    heading: "常见建议",
    content: "移动端优先使用更适合通话或语音交互的音频模式"
  }, {
    heading: "常见建议",
    content: "避免系统其它音频播放与智能体播报互相打架"
  }, {
    heading: "常见建议",
    content: "如果设备端本身有声学算法，提前确认和 SDK 处理链不会冲突"
  }, {
    heading: "与其他页面的关系",
    content: "如果你在做延迟优化，同时参考优化端到端对话延迟"
  }, {
    heading: "与其他页面的关系",
    content: "如果你在做专用设备接入，同时参考 Convo AI Device Kit"
  }, {
    heading: "与其他页面的关系",
    content: "如果你在做字幕或多模态展示，同时参考显示实时转写"
  }],
  headings: [{
    id: "优先关注这几件事",
    content: "优先关注这几件事"
  }, {
    id: "常见建议",
    content: "常见建议"
  }, {
    id: "与其他页面的关系",
    content: "与其他页面的关系"
  }]
};
export let toc = [{
  depth: 2,
  url: "#优先关注这几件事",
  title: _jsx(_Fragment, {
    children: "优先关注这几件事"
  })
}, {
  depth: 2,
  url: "#常见建议",
  title: _jsx(_Fragment, {
    children: "常见建议"
  })
}, {
  depth: 2,
  url: "#与其他页面的关系",
  title: _jsx(_Fragment, {
    children: "与其他页面的关系"
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
      children: "Voice Agent 的实际体验很大程度上取决于音频链路。即使模型本身表现很好，糟糕的采集参数、回声处理或播放路径也会明显降低对话质量。"
    }), `
`, _jsx(_components.h2, {
      id: "优先关注这几件事",
      children: "优先关注这几件事"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "使用适合实时语音交互的音频场景配置"
      }), `
`, _jsx(_components.li, {
        children: "开启或验证 AEC、降噪、自动增益等基础能力"
      }), `
`, _jsx(_components.li, {
        children: "保证采样率、声道数和设备能力匹配"
      }), `
`, _jsx(_components.li, {
        children: "在真实设备和真实网络环境下做验证"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "常见建议",
      children: "常见建议"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "移动端优先使用更适合通话或语音交互的音频模式"
      }), `
`, _jsx(_components.li, {
        children: "避免系统其它音频播放与智能体播报互相打架"
      }), `
`, _jsx(_components.li, {
        children: "如果设备端本身有声学算法，提前确认和 SDK 处理链不会冲突"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "与其他页面的关系",
      children: "与其他页面的关系"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["如果你在做延迟优化，同时参考", _jsx(_components.a, {
          href: "optimize-latency.mdx",
          children: "优化端到端对话延迟"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["如果你在做专用设备接入，同时参考 ", _jsx(_components.a, {
          href: "../device-kit/index.md",
          children: "Convo AI Device Kit"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["如果你在做字幕或多模态展示，同时参考", _jsx(_components.a, {
          href: "../build/transcripts.md",
          children: "显示实时转写"
        })]
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
