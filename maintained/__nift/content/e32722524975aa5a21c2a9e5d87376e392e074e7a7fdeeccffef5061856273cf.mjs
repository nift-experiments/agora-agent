import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "账户",
  description: "了解创建项目、管理凭证和控制台账户的基础操作。"
};
export let _markdown = `

## 账户与项目 [#账户与项目]

在开始接入任何 Agora 能力之前，首先需要完成账户注册、控制台登录和项目创建。

## 你通常会做的事 [#你通常会做的事]

* 创建并管理 Agora 项目
* 获取 App ID 与基础凭证
* 管理不同环境下的项目配置

## 建议 [#建议]

如果你刚开始接触 Agora，建议先把账户、项目和基础凭证准备完整，再进入具体功能接入。
`;
export let structuredData = {
  contents: [{
    heading: "账户与项目",
    content: "在开始接入任何 Agora 能力之前，首先需要完成账户注册、控制台登录和项目创建。"
  }, {
    heading: "你通常会做的事",
    content: "创建并管理 Agora 项目"
  }, {
    heading: "你通常会做的事",
    content: "获取 App ID 与基础凭证"
  }, {
    heading: "你通常会做的事",
    content: "管理不同环境下的项目配置"
  }, {
    heading: "建议",
    content: "如果你刚开始接触 Agora，建议先把账户、项目和基础凭证准备完整，再进入具体功能接入。"
  }],
  headings: [{
    id: "账户与项目",
    content: "账户与项目"
  }, {
    id: "你通常会做的事",
    content: "你通常会做的事"
  }, {
    id: "建议",
    content: "建议"
  }]
};
export let toc = [{
  depth: 2,
  url: "#账户与项目",
  title: _jsx(_Fragment, {
    children: "账户与项目"
  })
}, {
  depth: 2,
  url: "#你通常会做的事",
  title: _jsx(_Fragment, {
    children: "你通常会做的事"
  })
}, {
  depth: 2,
  url: "#建议",
  title: _jsx(_Fragment, {
    children: "建议"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "账户与项目",
      children: "账户与项目"
    }), `
`, _jsx(_components.p, {
      children: "在开始接入任何 Agora 能力之前，首先需要完成账户注册、控制台登录和项目创建。"
    }), `
`, _jsx(_components.h2, {
      id: "你通常会做的事",
      children: "你通常会做的事"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "创建并管理 Agora 项目"
      }), `
`, _jsx(_components.li, {
        children: "获取 App ID 与基础凭证"
      }), `
`, _jsx(_components.li, {
        children: "管理不同环境下的项目配置"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "建议",
      children: "建议"
    }), `
`, _jsx(_components.p, {
      children: "如果你刚开始接触 Agora，建议先把账户、项目和基础凭证准备完整，再进入具体功能接入。"
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
