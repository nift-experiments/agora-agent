import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Web 客户端",
  description: "把 AI 智能体接到 Web 端时，建议优先确认的接入层、事件层和展示层要点。"
};
export let _markdown = `

## Web 端通常要处理什么 [#web-端通常要处理什么]

* 加入 Agora 实时频道
* 获取麦克风权限
* 展示智能体状态、字幕和错误
* 把事件同步到界面和业务逻辑

## 建议先看的页面 [#建议先看的页面]

* [实时音频能力](/zh-CN/realtime-media/speech-to-text/audio-modality)
* [字幕与转写](/zh-CN/ai/realtime-sub)
* [事件与 Webhook](/zh-CN/api-reference/ncs-events)

## 设计建议 [#设计建议]

先把“加入频道并听到智能体说话”跑通，再补字幕、状态、错误提示和调试能力。
`;
export let structuredData = {
  contents: [{
    heading: "web-端通常要处理什么",
    content: "加入 Agora 实时频道"
  }, {
    heading: "web-端通常要处理什么",
    content: "获取麦克风权限"
  }, {
    heading: "web-端通常要处理什么",
    content: "展示智能体状态、字幕和错误"
  }, {
    heading: "web-端通常要处理什么",
    content: "把事件同步到界面和业务逻辑"
  }, {
    heading: "建议先看的页面",
    content: "实时音频能力"
  }, {
    heading: "建议先看的页面",
    content: "字幕与转写"
  }, {
    heading: "建议先看的页面",
    content: "事件与 Webhook"
  }, {
    heading: "设计建议",
    content: "先把“加入频道并听到智能体说话”跑通，再补字幕、状态、错误提示和调试能力。"
  }],
  headings: [{
    id: "web-端通常要处理什么",
    content: "Web 端通常要处理什么"
  }, {
    id: "建议先看的页面",
    content: "建议先看的页面"
  }, {
    id: "设计建议",
    content: "设计建议"
  }]
};
export let toc = [{
  depth: 2,
  url: "#web-端通常要处理什么",
  title: _jsx(_Fragment, {
    children: "Web 端通常要处理什么"
  })
}, {
  depth: 2,
  url: "#建议先看的页面",
  title: _jsx(_Fragment, {
    children: "建议先看的页面"
  })
}, {
  depth: 2,
  url: "#设计建议",
  title: _jsx(_Fragment, {
    children: "设计建议"
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
      id: "web-端通常要处理什么",
      children: "Web 端通常要处理什么"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "加入 Agora 实时频道"
      }), `
`, _jsx(_components.li, {
        children: "获取麦克风权限"
      }), `
`, _jsx(_components.li, {
        children: "展示智能体状态、字幕和错误"
      }), `
`, _jsx(_components.li, {
        children: "把事件同步到界面和业务逻辑"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "建议先看的页面",
      children: "建议先看的页面"
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
          href: "/zh-CN/ai/realtime-sub",
          children: "字幕与转写"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/ncs-events",
          children: "事件与 Webhook"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "设计建议",
      children: "设计建议"
    }), `
`, _jsx(_components.p, {
      children: "先把“加入频道并听到智能体说话”跑通，再补字幕、状态、错误提示和调试能力。"
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
