import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "计费",
  description: "了解 Convo AI Device Kit 相关服务的计费方式。"
};
export let _markdown = `

Convo AI Device Kit 的成本通常由几部分组成：

* 设备硬件本身
* Agora 实时通信相关费用
* 对话式 AI 引擎使用费用
* 你选择的 LLM、TTS 或其他上游服务费用

如果你在 Device Kit 中使用的是 Voice Agent 主路径里的对话式 AI 引擎能力，可同时参考：

* [Voice Agent 计费](../../reference/pricing.mdx)

## 评估建议 [#评估建议]

* 把“设备侧 BOM 成本”和“云端运行成本”分开核算
* 如果设备会长期在线，优先评估空闲时长和唤醒频率
* 如果接入第三方模型，记得把供应商 BYOK 成本一并计算
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Convo AI Device Kit 的成本通常由几部分组成："
  }, {
    heading: undefined,
    content: "设备硬件本身"
  }, {
    heading: undefined,
    content: "Agora 实时通信相关费用"
  }, {
    heading: undefined,
    content: "对话式 AI 引擎使用费用"
  }, {
    heading: undefined,
    content: "你选择的 LLM、TTS 或其他上游服务费用"
  }, {
    heading: undefined,
    content: "如果你在 Device Kit 中使用的是 Voice Agent 主路径里的对话式 AI 引擎能力，可同时参考："
  }, {
    heading: undefined,
    content: "Voice Agent 计费"
  }, {
    heading: "评估建议",
    content: "把“设备侧 BOM 成本”和“云端运行成本”分开核算"
  }, {
    heading: "评估建议",
    content: "如果设备会长期在线，优先评估空闲时长和唤醒频率"
  }, {
    heading: "评估建议",
    content: "如果接入第三方模型，记得把供应商 BYOK 成本一并计算"
  }],
  headings: [{
    id: "评估建议",
    content: "评估建议"
  }]
};
export let toc = [{
  depth: 2,
  url: "#评估建议",
  title: _jsx(_Fragment, {
    children: "评估建议"
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
      children: "Convo AI Device Kit 的成本通常由几部分组成："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "设备硬件本身"
      }), `
`, _jsx(_components.li, {
        children: "Agora 实时通信相关费用"
      }), `
`, _jsx(_components.li, {
        children: "对话式 AI 引擎使用费用"
      }), `
`, _jsx(_components.li, {
        children: "你选择的 LLM、TTS 或其他上游服务费用"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "如果你在 Device Kit 中使用的是 Voice Agent 主路径里的对话式 AI 引擎能力，可同时参考："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../reference/pricing.mdx",
          children: "Voice Agent 计费"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "评估建议",
      children: "评估建议"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "把“设备侧 BOM 成本”和“云端运行成本”分开核算"
      }), `
`, _jsx(_components.li, {
        children: "如果设备会长期在线，优先评估空闲时长和唤醒频率"
      }), `
`, _jsx(_components.li, {
        children: "如果接入第三方模型，记得把供应商 BYOK 成本一并计算"
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
