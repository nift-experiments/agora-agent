import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "控制台",
  description: "控制台是服务开通、项目管理和资源配置的统一入口。"
};
export let _markdown = `

## 这项能力是什么 [#这项能力是什么]

控制台负责承接服务开通、项目配置、凭证获取和资源管理，是大多数声网能力的控制面入口。

## 适合哪些场景 [#适合哪些场景]

* 开通服务
* 获取凭证
* 配置项目
* 管理资源

## 建议先看什么 [#建议先看什么]

当你还没进入代码实现阶段，控制台通常就是第一步。
`;
export let structuredData = {
  contents: [{
    heading: "这项能力是什么",
    content: "控制台负责承接服务开通、项目配置、凭证获取和资源管理，是大多数声网能力的控制面入口。"
  }, {
    heading: "适合哪些场景",
    content: "开通服务"
  }, {
    heading: "适合哪些场景",
    content: "获取凭证"
  }, {
    heading: "适合哪些场景",
    content: "配置项目"
  }, {
    heading: "适合哪些场景",
    content: "管理资源"
  }, {
    heading: "建议先看什么",
    content: "当你还没进入代码实现阶段，控制台通常就是第一步。"
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
      children: "控制台负责承接服务开通、项目配置、凭证获取和资源管理，是大多数声网能力的控制面入口。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "开通服务"
      }), `
`, _jsx(_components.li, {
        children: "获取凭证"
      }), `
`, _jsx(_components.li, {
        children: "配置项目"
      }), `
`, _jsx(_components.li, {
        children: "管理资源"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "建议先看什么",
      children: "建议先看什么"
    }), `
`, _jsx(_components.p, {
      children: "当你还没进入代码实现阶段，控制台通常就是第一步。"
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
