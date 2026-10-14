import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "客户支持",
  description: "当你在评估、接入或上线过程中遇到问题时，可以优先查看支持路径。"
};
export let _markdown = `

## 获取帮助 [#获取帮助]

当你在控制台配置、能力评估、接口联调或生产部署中遇到问题时，应该有清晰的支持入口。

## 常见支持场景 [#常见支持场景]

* 账号与项目问题
* 功能接入与接口联调问题
* 上线前能力确认与排查

## 建议 [#建议]

在开始大规模集成之前，先确认内部负责人、文档路径和问题升级方式，有助于后续排查更高效。
`;
export let structuredData = {
  contents: [{
    heading: "获取帮助",
    content: "当你在控制台配置、能力评估、接口联调或生产部署中遇到问题时，应该有清晰的支持入口。"
  }, {
    heading: "常见支持场景",
    content: "账号与项目问题"
  }, {
    heading: "常见支持场景",
    content: "功能接入与接口联调问题"
  }, {
    heading: "常见支持场景",
    content: "上线前能力确认与排查"
  }, {
    heading: "建议",
    content: "在开始大规模集成之前，先确认内部负责人、文档路径和问题升级方式，有助于后续排查更高效。"
  }],
  headings: [{
    id: "获取帮助",
    content: "获取帮助"
  }, {
    id: "常见支持场景",
    content: "常见支持场景"
  }, {
    id: "建议",
    content: "建议"
  }]
};
export let toc = [{
  depth: 2,
  url: "#获取帮助",
  title: _jsx(_Fragment, {
    children: "获取帮助"
  })
}, {
  depth: 2,
  url: "#常见支持场景",
  title: _jsx(_Fragment, {
    children: "常见支持场景"
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
      id: "获取帮助",
      children: "获取帮助"
    }), `
`, _jsx(_components.p, {
      children: "当你在控制台配置、能力评估、接口联调或生产部署中遇到问题时，应该有清晰的支持入口。"
    }), `
`, _jsx(_components.h2, {
      id: "常见支持场景",
      children: "常见支持场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "账号与项目问题"
      }), `
`, _jsx(_components.li, {
        children: "功能接入与接口联调问题"
      }), `
`, _jsx(_components.li, {
        children: "上线前能力确认与排查"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "建议",
      children: "建议"
    }), `
`, _jsx(_components.p, {
      children: "在开始大规模集成之前，先确认内部负责人、文档路径和问题升级方式，有助于后续排查更高效。"
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
