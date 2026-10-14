import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "开通服务",
  description: "为 Convo AI Device Kit 所属的 Agora 项目开通所需服务。"
};
export let _markdown = `

Convo AI Device Kit 依赖对话式 AI 和 Agora IoT 相关能力。在运行设备套件和开发工作流之前，请先确认目标项目已开通所需服务。

## 必要步骤 [#必要步骤]

1. 登录 [Agora Console](https://console.agora.io)
2. 打开目标项目
3. 为项目开通 **Conversational AI**
4. 准备设备或 Demo 环境所需的凭据

## 相关页面 [#相关页面]

* [Convo AI Device Kit 概览](../index.md)
* [快速开始](../start-here/quickstart.md)
* [架构概览](../build/architecture-overview.md)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Convo AI Device Kit 依赖对话式 AI 和 Agora IoT 相关能力。在运行设备套件和开发工作流之前，请先确认目标项目已开通所需服务。"
  }, {
    heading: "必要步骤",
    content: "登录 Agora Console"
  }, {
    heading: "必要步骤",
    content: "打开目标项目"
  }, {
    heading: "必要步骤",
    content: "为项目开通 **Conversational AI**"
  }, {
    heading: "必要步骤",
    content: "准备设备或 Demo 环境所需的凭据"
  }, {
    heading: "相关页面",
    content: "Convo AI Device Kit 概览"
  }, {
    heading: "相关页面",
    content: "快速开始"
  }, {
    heading: "相关页面",
    content: "架构概览"
  }],
  headings: [{
    id: "必要步骤",
    content: "必要步骤"
  }, {
    id: "相关页面",
    content: "相关页面"
  }]
};
export let toc = [{
  depth: 2,
  url: "#必要步骤",
  title: _jsx(_Fragment, {
    children: "必要步骤"
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
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Convo AI Device Kit 依赖对话式 AI 和 Agora IoT 相关能力。在运行设备套件和开发工作流之前，请先确认目标项目已开通所需服务。"
    }), `
`, _jsx(_components.h2, {
      id: "必要步骤",
      children: "必要步骤"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["登录 ", _jsx(_components.a, {
          href: "https://console.agora.io",
          children: "Agora Console"
        })]
      }), `
`, _jsx(_components.li, {
        children: "打开目标项目"
      }), `
`, _jsxs(_components.li, {
        children: ["为项目开通 ", _jsx(_components.strong, {
          children: "Conversational AI"
        })]
      }), `
`, _jsx(_components.li, {
        children: "准备设备或 Demo 环境所需的凭据"
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
          href: "../index.md",
          children: "Convo AI Device Kit 概览"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../start-here/quickstart.md",
          children: "快速开始"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../build/architecture-overview.md",
          children: "架构概览"
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
