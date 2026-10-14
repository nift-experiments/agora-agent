import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "模型、语音与上下文",
  description: "梳理 LLM、ASR、TTS、记忆和业务上下文在智能体链路中的分工，以及应该优先看的现有文档。"
};
export let _markdown = `

## 这一层解决什么问题 [#这一层解决什么问题]

当你已经跑通一个最基本的智能体会话后，下一步通常不是立刻扩更多接口，而是先让智能体“说得像、听得懂、记得住、贴业务”。

## 相关能力通常分成四部分 [#相关能力通常分成四部分]

### 模型 [#模型]

决定推理逻辑、提示词结构、工具调用方式和上下文理解能力。

### 语音 [#语音]

ASR 负责把用户语音变成文本，TTS 负责把模型输出播报回频道。

### 记忆 [#记忆]

短期记忆决定智能体是否能跨多轮对话延续上下文。

### 业务上下文 [#业务上下文]

自定义数据和房间状态决定智能体是否能理解用户当前场景，而不是只做通用问答。

## 推荐先看的文档 [#推荐先看的文档]

* [Configure LLM](/zh-CN/ai/custom-llm)
* [Configure ASR and TTS](/zh-CN/ai/configure-asr-and-tts)
* [Manage memory and context](/zh-CN/ai/short-term-memory)
* [Business data](/zh-CN/ai/custom-data)
`;
export let structuredData = {
  contents: [{
    heading: "这一层解决什么问题",
    content: "当你已经跑通一个最基本的智能体会话后，下一步通常不是立刻扩更多接口，而是先让智能体“说得像、听得懂、记得住、贴业务”。"
  }, {
    heading: "模型",
    content: "决定推理逻辑、提示词结构、工具调用方式和上下文理解能力。"
  }, {
    heading: "语音",
    content: "ASR 负责把用户语音变成文本，TTS 负责把模型输出播报回频道。"
  }, {
    heading: "记忆",
    content: "短期记忆决定智能体是否能跨多轮对话延续上下文。"
  }, {
    heading: "业务上下文",
    content: "自定义数据和房间状态决定智能体是否能理解用户当前场景，而不是只做通用问答。"
  }, {
    heading: "推荐先看的文档",
    content: "Configure LLM"
  }, {
    heading: "推荐先看的文档",
    content: "Configure ASR and TTS"
  }, {
    heading: "推荐先看的文档",
    content: "Manage memory and context"
  }, {
    heading: "推荐先看的文档",
    content: "Business data"
  }],
  headings: [{
    id: "这一层解决什么问题",
    content: "这一层解决什么问题"
  }, {
    id: "相关能力通常分成四部分",
    content: "相关能力通常分成四部分"
  }, {
    id: "模型",
    content: "模型"
  }, {
    id: "语音",
    content: "语音"
  }, {
    id: "记忆",
    content: "记忆"
  }, {
    id: "业务上下文",
    content: "业务上下文"
  }, {
    id: "推荐先看的文档",
    content: "推荐先看的文档"
  }]
};
export let toc = [{
  depth: 2,
  url: "#这一层解决什么问题",
  title: _jsx(_Fragment, {
    children: "这一层解决什么问题"
  })
}, {
  depth: 2,
  url: "#相关能力通常分成四部分",
  title: _jsx(_Fragment, {
    children: "相关能力通常分成四部分"
  })
}, {
  depth: 3,
  url: "#模型",
  title: _jsx(_Fragment, {
    children: "模型"
  })
}, {
  depth: 3,
  url: "#语音",
  title: _jsx(_Fragment, {
    children: "语音"
  })
}, {
  depth: 3,
  url: "#记忆",
  title: _jsx(_Fragment, {
    children: "记忆"
  })
}, {
  depth: 3,
  url: "#业务上下文",
  title: _jsx(_Fragment, {
    children: "业务上下文"
  })
}, {
  depth: 2,
  url: "#推荐先看的文档",
  title: _jsx(_Fragment, {
    children: "推荐先看的文档"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "这一层解决什么问题",
      children: "这一层解决什么问题"
    }), `
`, _jsx(_components.p, {
      children: "当你已经跑通一个最基本的智能体会话后，下一步通常不是立刻扩更多接口，而是先让智能体“说得像、听得懂、记得住、贴业务”。"
    }), `
`, _jsx(_components.h2, {
      id: "相关能力通常分成四部分",
      children: "相关能力通常分成四部分"
    }), `
`, _jsx(_components.h3, {
      id: "模型",
      children: "模型"
    }), `
`, _jsx(_components.p, {
      children: "决定推理逻辑、提示词结构、工具调用方式和上下文理解能力。"
    }), `
`, _jsx(_components.h3, {
      id: "语音",
      children: "语音"
    }), `
`, _jsx(_components.p, {
      children: "ASR 负责把用户语音变成文本，TTS 负责把模型输出播报回频道。"
    }), `
`, _jsx(_components.h3, {
      id: "记忆",
      children: "记忆"
    }), `
`, _jsx(_components.p, {
      children: "短期记忆决定智能体是否能跨多轮对话延续上下文。"
    }), `
`, _jsx(_components.h3, {
      id: "业务上下文",
      children: "业务上下文"
    }), `
`, _jsx(_components.p, {
      children: "自定义数据和房间状态决定智能体是否能理解用户当前场景，而不是只做通用问答。"
    }), `
`, _jsx(_components.h2, {
      id: "推荐先看的文档",
      children: "推荐先看的文档"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/custom-llm",
          children: "Configure LLM"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/configure-asr-and-tts",
          children: "Configure ASR and TTS"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/short-term-memory",
          children: "Manage memory and context"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/custom-data",
          children: "Business data"
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
