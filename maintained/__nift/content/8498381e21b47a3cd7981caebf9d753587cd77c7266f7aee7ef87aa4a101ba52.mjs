import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Best Practices",
  description: "面向生产环境的稳定性、治理、安全与上线实践。"
};
export let _markdown = `

## 这里放什么 [#这里放什么]

这个分组承载的是帮助团队更稳定上线和运维的内容，而不是产品首次认知入口。

* [安全合规](/zh-CN/introduction/security-compliance)
* [治理与运维](/zh-CN/best-practices/governance)
* [音频设置](/zh-CN/best-practices/audio-settings)
* [低时延优化](/zh-CN/best-practices/opt-latency)
* [地理围栏](/zh-CN/best-practices/geofencing)
* [HTTP 鉴权](/zh-CN/best-practices/http-basic-auth)
* [发版说明](/zh-CN/best-practices/release-notes)
`;
export let structuredData = {
  contents: [{
    heading: "这里放什么",
    content: "这个分组承载的是帮助团队更稳定上线和运维的内容，而不是产品首次认知入口。"
  }, {
    heading: "这里放什么",
    content: "安全合规"
  }, {
    heading: "这里放什么",
    content: "治理与运维"
  }, {
    heading: "这里放什么",
    content: "音频设置"
  }, {
    heading: "这里放什么",
    content: "低时延优化"
  }, {
    heading: "这里放什么",
    content: "地理围栏"
  }, {
    heading: "这里放什么",
    content: "HTTP 鉴权"
  }, {
    heading: "这里放什么",
    content: "发版说明"
  }],
  headings: [{
    id: "这里放什么",
    content: "这里放什么"
  }]
};
export let toc = [{
  depth: 2,
  url: "#这里放什么",
  title: _jsx(_Fragment, {
    children: "这里放什么"
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
      id: "这里放什么",
      children: "这里放什么"
    }), `
`, _jsx(_components.p, {
      children: "这个分组承载的是帮助团队更稳定上线和运维的内容，而不是产品首次认知入口。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/introduction/security-compliance",
          children: "安全合规"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/best-practices/governance",
          children: "治理与运维"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/best-practices/audio-settings",
          children: "音频设置"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/best-practices/opt-latency",
          children: "低时延优化"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/best-practices/geofencing",
          children: "地理围栏"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/best-practices/http-basic-auth",
          children: "HTTP 鉴权"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/best-practices/release-notes",
          children: "发版说明"
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
