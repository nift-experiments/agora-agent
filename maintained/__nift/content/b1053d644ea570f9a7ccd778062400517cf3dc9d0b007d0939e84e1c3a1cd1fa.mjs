import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "发布说明",
  description: "了解 Convo AI Device Kit 的版本更新与计划。"
};
export let _markdown = `

本页用于记录 Convo AI Device Kit 的重要版本变化、兼容性更新和上线规划信息。

建议在以下情况下优先查看：

* 准备升级 R1 相关示例工程
* 需要确认当前硬件、固件与云端能力的兼容性
* 准备安排设备侧发布窗口

## 建议关注内容 [#建议关注内容]

* 固件示例版本变化
* Demo Server 或配套 App 的兼容性更新
* 硬件能力或接口行为调整
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "本页用于记录 Convo AI Device Kit 的重要版本变化、兼容性更新和上线规划信息。"
  }, {
    heading: undefined,
    content: "建议在以下情况下优先查看："
  }, {
    heading: undefined,
    content: "准备升级 R1 相关示例工程"
  }, {
    heading: undefined,
    content: "需要确认当前硬件、固件与云端能力的兼容性"
  }, {
    heading: undefined,
    content: "准备安排设备侧发布窗口"
  }, {
    heading: "建议关注内容",
    content: "固件示例版本变化"
  }, {
    heading: "建议关注内容",
    content: "Demo Server 或配套 App 的兼容性更新"
  }, {
    heading: "建议关注内容",
    content: "硬件能力或接口行为调整"
  }],
  headings: [{
    id: "建议关注内容",
    content: "建议关注内容"
  }]
};
export let toc = [{
  depth: 2,
  url: "#建议关注内容",
  title: _jsx(_Fragment, {
    children: "建议关注内容"
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
    children: [_jsx(_components.p, {
      children: "本页用于记录 Convo AI Device Kit 的重要版本变化、兼容性更新和上线规划信息。"
    }), `
`, _jsx(_components.p, {
      children: "建议在以下情况下优先查看："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "准备升级 R1 相关示例工程"
      }), `
`, _jsx(_components.li, {
        children: "需要确认当前硬件、固件与云端能力的兼容性"
      }), `
`, _jsx(_components.li, {
        children: "准备安排设备侧发布窗口"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "建议关注内容",
      children: "建议关注内容"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "固件示例版本变化"
      }), `
`, _jsx(_components.li, {
        children: "Demo Server 或配套 App 的兼容性更新"
      }), `
`, _jsx(_components.li, {
        children: "硬件能力或接口行为调整"
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
