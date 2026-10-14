import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "自定义 LLM",
  description: "将 Agora 语音智能体接入自定义语言模型。"
};
export let _markdown = `

将 Agora 语音智能体接入自定义语言模型。

## 配方信息 [#配方信息]

* 平台：\`Python\`
* 场景：模型集成、Voice AI
* 能力：Conversational AI、Custom LLM
* 难度：初级

## 链接 [#链接]

* [实现仓库](https://github.com/AgoraIO-Conversational-AI/agent-recipes-python)
* [配方说明](https://github.com/AgoraIO-Conversational-AI/agent-recipes-python/blob/main/custom-llm/README.md)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "将 Agora 语音智能体接入自定义语言模型。"
  }, {
    heading: "配方信息",
    content: "平台：`Python`"
  }, {
    heading: "配方信息",
    content: "场景：模型集成、Voice AI"
  }, {
    heading: "配方信息",
    content: "能力：Conversational AI、Custom LLM"
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
      children: "将 Agora 语音智能体接入自定义语言模型。"
    }), `
`, _jsx(_components.h2, {
      id: "配方信息",
      children: "配方信息"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["平台：", _jsx(_components.code, {
          children: "Python"
        })]
      }), `
`, _jsx(_components.li, {
        children: "场景：模型集成、Voice AI"
      }), `
`, _jsx(_components.li, {
        children: "能力：Conversational AI、Custom LLM"
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
          href: "https://github.com/AgoraIO-Conversational-AI/agent-recipes-python",
          children: "实现仓库"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://github.com/AgoraIO-Conversational-AI/agent-recipes-python/blob/main/custom-llm/README.md",
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
