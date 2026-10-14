import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "RTC 服务端 SDK",
  description: "RTC 服务端 SDK 面向后端直接参与媒体流发送、接收和控制的场景。"
};
export let _markdown = `

## 这项能力是什么 [#这项能力是什么]

RTC 服务端 SDK 让服务端能够直接参与 RTC 媒体流与会话控制，而不只是做普通业务接口层。

## 适合哪些场景 [#适合哪些场景]

* 服务端收发流
* 后端控制媒体链路
* 服务端混流与处理

## 建议先看什么 [#建议先看什么]

如果你的系统需要后端直接参与实时媒体处理，就应该从 RTC 服务端 SDK 开始，而不是只看客户端 SDK。
`;
export let structuredData = {
  contents: [{
    heading: "这项能力是什么",
    content: "RTC 服务端 SDK 让服务端能够直接参与 RTC 媒体流与会话控制，而不只是做普通业务接口层。"
  }, {
    heading: "适合哪些场景",
    content: "服务端收发流"
  }, {
    heading: "适合哪些场景",
    content: "后端控制媒体链路"
  }, {
    heading: "适合哪些场景",
    content: "服务端混流与处理"
  }, {
    heading: "建议先看什么",
    content: "如果你的系统需要后端直接参与实时媒体处理，就应该从 RTC 服务端 SDK 开始，而不是只看客户端 SDK。"
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
      children: "RTC 服务端 SDK 让服务端能够直接参与 RTC 媒体流与会话控制，而不只是做普通业务接口层。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "服务端收发流"
      }), `
`, _jsx(_components.li, {
        children: "后端控制媒体链路"
      }), `
`, _jsx(_components.li, {
        children: "服务端混流与处理"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "建议先看什么",
      children: "建议先看什么"
    }), `
`, _jsx(_components.p, {
      children: "如果你的系统需要后端直接参与实时媒体处理，就应该从 RTC 服务端 SDK 开始，而不是只看客户端 SDK。"
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
