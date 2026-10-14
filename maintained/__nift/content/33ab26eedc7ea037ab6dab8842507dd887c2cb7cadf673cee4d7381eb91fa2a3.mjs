import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "数字人模型",
  description: "为 Voice Agent 选择数字人供应商。"
};
export let _markdown = `

数字人供应商会在语音智能体之上增加视频和形象层，让交互从“会说话”扩展到“会出镜”。

选择数字人供应商时，建议重点比较：

* 形象风格和可定制程度
* 实时渲染质量
* 音频采样率要求
* RTC 接入方式

## 供应商 [#供应商]

* [Akool](akool.mdx)
* [Anam](anam.mdx)
* [HeyGen LiveAvatar](heygen.mdx)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "数字人供应商会在语音智能体之上增加视频和形象层，让交互从“会说话”扩展到“会出镜”。"
  }, {
    heading: undefined,
    content: "选择数字人供应商时，建议重点比较："
  }, {
    heading: undefined,
    content: "形象风格和可定制程度"
  }, {
    heading: undefined,
    content: "实时渲染质量"
  }, {
    heading: undefined,
    content: "音频采样率要求"
  }, {
    heading: undefined,
    content: "RTC 接入方式"
  }, {
    heading: "供应商",
    content: "Akool"
  }, {
    heading: "供应商",
    content: "Anam"
  }, {
    heading: "供应商",
    content: "HeyGen LiveAvatar"
  }],
  headings: [{
    id: "供应商",
    content: "供应商"
  }]
};
export let toc = [{
  depth: 2,
  url: "#供应商",
  title: _jsx(_Fragment, {
    children: "供应商"
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
    children: [_jsx(_components.p, {
      children: "数字人供应商会在语音智能体之上增加视频和形象层，让交互从“会说话”扩展到“会出镜”。"
    }), `
`, _jsx(_components.p, {
      children: "选择数字人供应商时，建议重点比较："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "形象风格和可定制程度"
      }), `
`, _jsx(_components.li, {
        children: "实时渲染质量"
      }), `
`, _jsx(_components.li, {
        children: "音频采样率要求"
      }), `
`, _jsx(_components.li, {
        children: "RTC 接入方式"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "供应商",
      children: "供应商"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "akool.mdx",
          children: "Akool"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "anam.mdx",
          children: "Anam"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "heygen.mdx",
          children: "HeyGen LiveAvatar"
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
