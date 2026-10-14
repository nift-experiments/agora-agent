import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "服务端媒体处理",
  description: "面向服务端收发流与会话控制的能力入口，适合从后端视角构建实时媒体处理链路。"
};
export let _markdown = `

## 这项能力解决什么问题 [#这项能力解决什么问题]

RTC 服务端 SDK 部署在服务端，可与集成了 RTC 客户端 SDK 的应用通过 SD-RTN 进行实时通信，实现收发音视频流与服务端控制。

## 典型适用场景 [#典型适用场景]

* 服务端收发流
* 服务端混流或合图
* 云代理、权限与网络控制
* 需要后端参与 RTC 媒体处理的系统

## 当前声网现有文档可以参考什么 [#当前声网现有文档可以参考什么]

声网现有 RTC 服务端 SDK 文档已经覆盖：

* 产品首页
* 示例项目
* 快速入门
* 发布说明
* 常见热门能力

## 推荐阅读路径 [#推荐阅读路径]

1. 先看产品首页，确认你的后端是否真的要直接参与媒体流。
2. 再跑通发送和接收媒体流的最小示例。
3. 后续再补合图、代理、String UID 与发布说明。

## 为什么应该放进能力区 [#为什么应该放进能力区]

很多团队并不是从客户端开始接入，而是从服务端链路、控制面和媒体流处理开始，所以 RTC 服务端 SDK 应该在能力区里有单独入口。
`;
export let structuredData = {
  contents: [{
    heading: "这项能力解决什么问题",
    content: "RTC 服务端 SDK 部署在服务端，可与集成了 RTC 客户端 SDK 的应用通过 SD-RTN 进行实时通信，实现收发音视频流与服务端控制。"
  }, {
    heading: "典型适用场景",
    content: "服务端收发流"
  }, {
    heading: "典型适用场景",
    content: "服务端混流或合图"
  }, {
    heading: "典型适用场景",
    content: "云代理、权限与网络控制"
  }, {
    heading: "典型适用场景",
    content: "需要后端参与 RTC 媒体处理的系统"
  }, {
    heading: "当前声网现有文档可以参考什么",
    content: "声网现有 RTC 服务端 SDK 文档已经覆盖："
  }, {
    heading: "当前声网现有文档可以参考什么",
    content: "产品首页"
  }, {
    heading: "当前声网现有文档可以参考什么",
    content: "示例项目"
  }, {
    heading: "当前声网现有文档可以参考什么",
    content: "快速入门"
  }, {
    heading: "当前声网现有文档可以参考什么",
    content: "发布说明"
  }, {
    heading: "当前声网现有文档可以参考什么",
    content: "常见热门能力"
  }, {
    heading: "推荐阅读路径",
    content: "先看产品首页，确认你的后端是否真的要直接参与媒体流。"
  }, {
    heading: "推荐阅读路径",
    content: "再跑通发送和接收媒体流的最小示例。"
  }, {
    heading: "推荐阅读路径",
    content: "后续再补合图、代理、String UID 与发布说明。"
  }, {
    heading: "为什么应该放进能力区",
    content: "很多团队并不是从客户端开始接入，而是从服务端链路、控制面和媒体流处理开始，所以 RTC 服务端 SDK 应该在能力区里有单独入口。"
  }],
  headings: [{
    id: "这项能力解决什么问题",
    content: "这项能力解决什么问题"
  }, {
    id: "典型适用场景",
    content: "典型适用场景"
  }, {
    id: "当前声网现有文档可以参考什么",
    content: "当前声网现有文档可以参考什么"
  }, {
    id: "推荐阅读路径",
    content: "推荐阅读路径"
  }, {
    id: "为什么应该放进能力区",
    content: "为什么应该放进能力区"
  }]
};
export let toc = [{
  depth: 2,
  url: "#这项能力解决什么问题",
  title: _jsx(_Fragment, {
    children: "这项能力解决什么问题"
  })
}, {
  depth: 2,
  url: "#典型适用场景",
  title: _jsx(_Fragment, {
    children: "典型适用场景"
  })
}, {
  depth: 2,
  url: "#当前声网现有文档可以参考什么",
  title: _jsx(_Fragment, {
    children: "当前声网现有文档可以参考什么"
  })
}, {
  depth: 2,
  url: "#推荐阅读路径",
  title: _jsx(_Fragment, {
    children: "推荐阅读路径"
  })
}, {
  depth: 2,
  url: "#为什么应该放进能力区",
  title: _jsx(_Fragment, {
    children: "为什么应该放进能力区"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "这项能力解决什么问题",
      children: "这项能力解决什么问题"
    }), `
`, _jsx(_components.p, {
      children: "RTC 服务端 SDK 部署在服务端，可与集成了 RTC 客户端 SDK 的应用通过 SD-RTN 进行实时通信，实现收发音视频流与服务端控制。"
    }), `
`, _jsx(_components.h2, {
      id: "典型适用场景",
      children: "典型适用场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "服务端收发流"
      }), `
`, _jsx(_components.li, {
        children: "服务端混流或合图"
      }), `
`, _jsx(_components.li, {
        children: "云代理、权限与网络控制"
      }), `
`, _jsx(_components.li, {
        children: "需要后端参与 RTC 媒体处理的系统"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "当前声网现有文档可以参考什么",
      children: "当前声网现有文档可以参考什么"
    }), `
`, _jsx(_components.p, {
      children: "声网现有 RTC 服务端 SDK 文档已经覆盖："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "产品首页"
      }), `
`, _jsx(_components.li, {
        children: "示例项目"
      }), `
`, _jsx(_components.li, {
        children: "快速入门"
      }), `
`, _jsx(_components.li, {
        children: "发布说明"
      }), `
`, _jsx(_components.li, {
        children: "常见热门能力"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "推荐阅读路径",
      children: "推荐阅读路径"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "先看产品首页，确认你的后端是否真的要直接参与媒体流。"
      }), `
`, _jsx(_components.li, {
        children: "再跑通发送和接收媒体流的最小示例。"
      }), `
`, _jsx(_components.li, {
        children: "后续再补合图、代理、String UID 与发布说明。"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "为什么应该放进能力区",
      children: "为什么应该放进能力区"
    }), `
`, _jsx(_components.p, {
      children: "很多团队并不是从客户端开始接入，而是从服务端链路、控制面和媒体流处理开始，所以 RTC 服务端 SDK 应该在能力区里有单独入口。"
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
