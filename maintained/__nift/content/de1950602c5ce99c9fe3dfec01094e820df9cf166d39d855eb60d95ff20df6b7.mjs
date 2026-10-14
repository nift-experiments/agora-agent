import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "发版说明",
  description: "发版说明帮助团队理解平台变化、接口更新和迁移节奏，不应该埋在单个产品介绍后面。"
};
export let _markdown = `

## 如何阅读发版说明 [#如何阅读发版说明]

### 先关注高影响变更 [#先关注高影响变更]

优先看会影响接口行为、回调结构、接入流程和上线假设的变化。

### 配合迁移建议阅读 [#配合迁移建议阅读]

如果团队需要迁移，发版说明最好和最佳实践、运维建议一起看，而不是只看功能新增。

### 保持多层信息同步 [#保持多层信息同步]

要确保产品、接口和运维层面的更新节奏一致，避免团队读到冲突信息。

## 当前更新入口 [#当前更新入口]

* [打开 ConvoAI 发版说明](/zh-CN/ai/release-notes)
`;
export let structuredData = {
  contents: [{
    heading: "先关注高影响变更",
    content: "优先看会影响接口行为、回调结构、接入流程和上线假设的变化。"
  }, {
    heading: "配合迁移建议阅读",
    content: "如果团队需要迁移，发版说明最好和最佳实践、运维建议一起看，而不是只看功能新增。"
  }, {
    heading: "保持多层信息同步",
    content: "要确保产品、接口和运维层面的更新节奏一致，避免团队读到冲突信息。"
  }, {
    heading: "当前更新入口",
    content: "打开 ConvoAI 发版说明"
  }],
  headings: [{
    id: "如何阅读发版说明",
    content: "如何阅读发版说明"
  }, {
    id: "先关注高影响变更",
    content: "先关注高影响变更"
  }, {
    id: "配合迁移建议阅读",
    content: "配合迁移建议阅读"
  }, {
    id: "保持多层信息同步",
    content: "保持多层信息同步"
  }, {
    id: "当前更新入口",
    content: "当前更新入口"
  }]
};
export let toc = [{
  depth: 2,
  url: "#如何阅读发版说明",
  title: _jsx(_Fragment, {
    children: "如何阅读发版说明"
  })
}, {
  depth: 3,
  url: "#先关注高影响变更",
  title: _jsx(_Fragment, {
    children: "先关注高影响变更"
  })
}, {
  depth: 3,
  url: "#配合迁移建议阅读",
  title: _jsx(_Fragment, {
    children: "配合迁移建议阅读"
  })
}, {
  depth: 3,
  url: "#保持多层信息同步",
  title: _jsx(_Fragment, {
    children: "保持多层信息同步"
  })
}, {
  depth: 2,
  url: "#当前更新入口",
  title: _jsx(_Fragment, {
    children: "当前更新入口"
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
      id: "如何阅读发版说明",
      children: "如何阅读发版说明"
    }), `
`, _jsx(_components.h3, {
      id: "先关注高影响变更",
      children: "先关注高影响变更"
    }), `
`, _jsx(_components.p, {
      children: "优先看会影响接口行为、回调结构、接入流程和上线假设的变化。"
    }), `
`, _jsx(_components.h3, {
      id: "配合迁移建议阅读",
      children: "配合迁移建议阅读"
    }), `
`, _jsx(_components.p, {
      children: "如果团队需要迁移，发版说明最好和最佳实践、运维建议一起看，而不是只看功能新增。"
    }), `
`, _jsx(_components.h3, {
      id: "保持多层信息同步",
      children: "保持多层信息同步"
    }), `
`, _jsx(_components.p, {
      children: "要确保产品、接口和运维层面的更新节奏一致，避免团队读到冲突信息。"
    }), `
`, _jsx(_components.h2, {
      id: "当前更新入口",
      children: "当前更新入口"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/release-notes",
          children: "打开 ConvoAI 发版说明"
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
