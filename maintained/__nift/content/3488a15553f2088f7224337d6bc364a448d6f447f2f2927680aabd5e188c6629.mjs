import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "实时转录翻译",
  description: "实时转录翻译适合字幕、多语言协作和语音理解场景，提供超低延时、高准确率的文本化能力。"
};
export let _markdown = `

## 这项能力是什么 [#这项能力是什么]

实时转录翻译把实时语音流转成可读文本，并在需要时进一步做翻译，是字幕、理解和多语言协作链路中的关键能力。

## 适合哪些场景 [#适合哪些场景]

* 会议字幕
* 多语种直播
* 语音内容理解
* AI 前置文本处理

## 当前声网已有文档通常包含什么 [#当前声网已有文档通常包含什么]

* 产品首页
* 在线体验
* 快速入门
* 推荐阅读
* Webhook 与 API

## 建议先看什么 [#建议先看什么]

先通过产品首页和在线体验判断时延与准确率是否满足你的场景，再继续补快速开始和质量优化能力。
`;
export let structuredData = {
  contents: [{
    heading: "这项能力是什么",
    content: "实时转录翻译把实时语音流转成可读文本，并在需要时进一步做翻译，是字幕、理解和多语言协作链路中的关键能力。"
  }, {
    heading: "适合哪些场景",
    content: "会议字幕"
  }, {
    heading: "适合哪些场景",
    content: "多语种直播"
  }, {
    heading: "适合哪些场景",
    content: "语音内容理解"
  }, {
    heading: "适合哪些场景",
    content: "AI 前置文本处理"
  }, {
    heading: "当前声网已有文档通常包含什么",
    content: "产品首页"
  }, {
    heading: "当前声网已有文档通常包含什么",
    content: "在线体验"
  }, {
    heading: "当前声网已有文档通常包含什么",
    content: "快速入门"
  }, {
    heading: "当前声网已有文档通常包含什么",
    content: "推荐阅读"
  }, {
    heading: "当前声网已有文档通常包含什么",
    content: "Webhook 与 API"
  }, {
    heading: "建议先看什么",
    content: "先通过产品首页和在线体验判断时延与准确率是否满足你的场景，再继续补快速开始和质量优化能力。"
  }],
  headings: [{
    id: "这项能力是什么",
    content: "这项能力是什么"
  }, {
    id: "适合哪些场景",
    content: "适合哪些场景"
  }, {
    id: "当前声网已有文档通常包含什么",
    content: "当前声网已有文档通常包含什么"
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
  url: "#当前声网已有文档通常包含什么",
  title: _jsx(_Fragment, {
    children: "当前声网已有文档通常包含什么"
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
      children: "实时转录翻译把实时语音流转成可读文本，并在需要时进一步做翻译，是字幕、理解和多语言协作链路中的关键能力。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "会议字幕"
      }), `
`, _jsx(_components.li, {
        children: "多语种直播"
      }), `
`, _jsx(_components.li, {
        children: "语音内容理解"
      }), `
`, _jsx(_components.li, {
        children: "AI 前置文本处理"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "当前声网已有文档通常包含什么",
      children: "当前声网已有文档通常包含什么"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "产品首页"
      }), `
`, _jsx(_components.li, {
        children: "在线体验"
      }), `
`, _jsx(_components.li, {
        children: "快速入门"
      }), `
`, _jsx(_components.li, {
        children: "推荐阅读"
      }), `
`, _jsx(_components.li, {
        children: "Webhook 与 API"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "建议先看什么",
      children: "建议先看什么"
    }), `
`, _jsx(_components.p, {
      children: "先通过产品首页和在线体验判断时延与准确率是否满足你的场景，再继续补快速开始和质量优化能力。"
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
