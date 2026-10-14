import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Golang 快速开始",
  description: "使用 Go 构建一个基础的 Agora Conversational AI 智能体。"
};
export let _markdown = `

使用 Go 构建一个基础的 Agora Conversational AI 智能体。

## 配方信息 [#配方信息]

* 平台：\`Go\`
* 场景：Quickstart、Voice AI
* 能力：Conversational AI、Voice Agent
* 难度：初级

## 链接 [#链接]

* [实现仓库](https://github.com/AgoraIO-Conversational-AI/agent-quickstart-go)
* [配方说明](https://github.com/AgoraIO-Conversational-AI/agent-quickstart-go/blob/main/docs/ai/RECIPE.md)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "使用 Go 构建一个基础的 Agora Conversational AI 智能体。"
  }, {
    heading: "配方信息",
    content: "平台：`Go`"
  }, {
    heading: "配方信息",
    content: "场景：Quickstart、Voice AI"
  }, {
    heading: "配方信息",
    content: "能力：Conversational AI、Voice Agent"
  }, {
    heading: "配方信息",
    content: "难度：初级"
  }, {
    heading: "链接",
    content: "实现仓库"
  }, {
    heading: "链接",
    content: "配方说明"
  }],
  headings: [{
    id: "配方信息",
    content: "配方信息"
  }, {
    id: "链接",
    content: "链接"
  }]
};
export let toc = [{
  depth: 2,
  url: "#配方信息",
  title: _jsx(_Fragment, {
    children: "配方信息"
  })
}, {
  depth: 2,
  url: "#链接",
  title: _jsx(_Fragment, {
    children: "链接"
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
      children: "使用 Go 构建一个基础的 Agora Conversational AI 智能体。"
    }), `
`, _jsx(_components.h2, {
      id: "配方信息",
      children: "配方信息"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["平台：", _jsx(_components.code, {
          children: "Go"
        })]
      }), `
`, _jsx(_components.li, {
        children: "场景：Quickstart、Voice AI"
      }), `
`, _jsx(_components.li, {
        children: "能力：Conversational AI、Voice Agent"
      }), `
`, _jsx(_components.li, {
        children: "难度：初级"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "链接",
      children: "链接"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://github.com/AgoraIO-Conversational-AI/agent-quickstart-go",
          children: "实现仓库"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://github.com/AgoraIO-Conversational-AI/agent-quickstart-go/blob/main/docs/ai/RECIPE.md",
          children: "配方说明"
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
