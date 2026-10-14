import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "文档指引",
  description: "声网对话式 AI 引擎重新定义了人机交互界面，突破了传统文字交互，实现了高拟真、自然流畅的实时语音对话，让 AI 真正“开口说话”。适用于智能助手、情感陪伴、口语陪练、智能客服、智能硬件、沉浸式游戏 NPC 等创新场景。"
};
export let _markdown = `

![image](https://doc.shengwang.cn/img/landing-page/banner/aigc.png)

声网对话式 AI 引擎重新定义了人机交互界面，突破了传统文字交互，实现了高拟真、自然流畅的实时语音对话，让 AI 真正“开口说话”。适用于智能助手、情感陪伴、口语陪练、智能客服、智能硬件、沉浸式游戏 NPC 等创新场景。

* [服务端 API](/zh-CN/api-reference/conversational-ai/rest-api/agent/join)

## 立即体验 [#立即体验]

* [对话式 AI 引擎核心功能](https://console.shengwang.cn/product/ConversationAI?tab=Playground): 进入声网控制台的 Playground 体验与 AI 智能体智能体对话互动。

## 快速入门 [#快速入门]

* [实现与智能体语音互动](./quick-start): 调用声网对话式 AI 引擎 RESTful API 实现与 AI 智能体智能体对话互动。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "声网对话式 AI 引擎重新定义了人机交互界面，突破了传统文字交互，实现了高拟真、自然流畅的实时语音对话，让 AI 真正“开口说话”。适用于智能助手、情感陪伴、口语陪练、智能客服、智能硬件、沉浸式游戏 NPC 等创新场景。"
  }, {
    heading: undefined,
    content: "服务端 API"
  }, {
    heading: "立即体验",
    content: "对话式 AI 引擎核心功能: 进入声网控制台的 Playground 体验与 AI 智能体智能体对话互动。"
  }, {
    heading: "快速入门",
    content: "实现与智能体语音互动: 调用声网对话式 AI 引擎 RESTful API 实现与 AI 智能体智能体对话互动。"
  }],
  headings: [{
    id: "立即体验",
    content: "立即体验"
  }, {
    id: "快速入门",
    content: "快速入门"
  }]
};
export let toc = [{
  depth: 2,
  url: "#立即体验",
  title: _jsx(_Fragment, {
    children: "立即体验"
  })
}, {
  depth: 2,
  url: "#快速入门",
  title: _jsx(_Fragment, {
    children: "快速入门"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://doc.shengwang.cn/img/landing-page/banner/aigc.png",
        alt: "image"
      })
    }), `
`, _jsx(_components.p, {
      children: "声网对话式 AI 引擎重新定义了人机交互界面，突破了传统文字交互，实现了高拟真、自然流畅的实时语音对话，让 AI 真正“开口说话”。适用于智能助手、情感陪伴、口语陪练、智能客服、智能硬件、沉浸式游戏 NPC 等创新场景。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/conversational-ai/rest-api/agent/join",
          children: "服务端 API"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "立即体验",
      children: "立即体验"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "https://console.shengwang.cn/product/ConversationAI?tab=Playground",
          children: "对话式 AI 引擎核心功能"
        }), ": 进入声网控制台的 Playground 体验与 AI 智能体智能体对话互动。"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "快速入门",
      children: "快速入门"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "./quick-start",
          children: "实现与智能体语音互动"
        }), ": 调用声网对话式 AI 引擎 RESTful API 实现与 AI 智能体智能体对话互动。"]
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
