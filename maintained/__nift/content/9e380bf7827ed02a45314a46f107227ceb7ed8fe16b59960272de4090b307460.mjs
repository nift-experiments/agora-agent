import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Status Page",
  description: "Status Page 用来查看声网主要产品和服务的可用性与运行状态。"
};
export let _markdown = `

## 这项能力是什么 [#这项能力是什么]

Status Page 提供平台服务状态的可见性，帮助团队判断问题是否来自自身系统还是上游服务可用性。

## 适合哪些场景 [#适合哪些场景]

* 服务状态确认
* 故障期间的信息同步
* 运维值班排查

## 建议先看什么 [#建议先看什么]

当你需要快速确认平台状态而不是排查业务代码时，Status Page 是最先应该看的地方。
`;
export let structuredData = {
  contents: [{
    heading: "这项能力是什么",
    content: "Status Page 提供平台服务状态的可见性，帮助团队判断问题是否来自自身系统还是上游服务可用性。"
  }, {
    heading: "适合哪些场景",
    content: "服务状态确认"
  }, {
    heading: "适合哪些场景",
    content: "故障期间的信息同步"
  }, {
    heading: "适合哪些场景",
    content: "运维值班排查"
  }, {
    heading: "建议先看什么",
    content: "当你需要快速确认平台状态而不是排查业务代码时，Status Page 是最先应该看的地方。"
  }],
  headings: [{
    id: "这项能力是什么",
    content: "这项能力是什么"
  }, {
    id: "适合哪些场景",
    content: "适合哪些场景"
  }, {
    id: "建议先看什么",
    content: "建议先看什么"
  }]
};
export let toc = [{
  depth: 2,
  url: "#这项能力是什么",
  title: _jsx(_Fragment, {
    children: "这项能力是什么"
  })
}, {
  depth: 2,
  url: "#适合哪些场景",
  title: _jsx(_Fragment, {
    children: "适合哪些场景"
  })
}, {
  depth: 2,
  url: "#建议先看什么",
  title: _jsx(_Fragment, {
    children: "建议先看什么"
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
      id: "这项能力是什么",
      children: "这项能力是什么"
    }), `
`, _jsx(_components.p, {
      children: "Status Page 提供平台服务状态的可见性，帮助团队判断问题是否来自自身系统还是上游服务可用性。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "服务状态确认"
      }), `
`, _jsx(_components.li, {
        children: "故障期间的信息同步"
      }), `
`, _jsx(_components.li, {
        children: "运维值班排查"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "建议先看什么",
      children: "建议先看什么"
    }), `
`, _jsx(_components.p, {
      children: "当你需要快速确认平台状态而不是排查业务代码时，Status Page 是最先应该看的地方。"
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
