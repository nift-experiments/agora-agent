import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "开通对话式 AI",
  description: "为 Agora 项目开通对话式 AI，并准备接入所需的项目凭据。"
};
export let _markdown = `

在开始构建 Voice Agent 之前，你需要先在 Agora 项目里开通对话式 AI，并准备后续调用 REST API 所需的项目信息。

## 必要准备 [#必要准备]

你需要准备：

* Agora 项目
* App ID
* Customer ID 和 Customer Secret
* RTC Token

## 开通步骤 [#开通步骤]

1. 登录 [Agora Console](https://console.agora.io)
2. 打开目标项目
3. 为该项目开通 **Conversational AI**
4. 记录 App ID
5. 在 RESTful API 设置中生成 Customer ID 和 Customer Secret
6. 为测试环境生成临时 RTC Token

## 实践建议 [#实践建议]

* 生产环境里不要长期依赖控制台生成的临时 Token
* 把敏感凭据保存在后端或密钥管理系统中
* 在正式接入前，先确认项目的鉴权模式与业务部署方式一致

## 相关页面 [#相关页面]

* [启动和停止智能体](../build/start-stop-agent.mdx)
* [使用预设](../build/presets.mdx)
* [REST API 认证](../../api-reference/conversational-ai/rest-api/authentication.mdx)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "在开始构建 Voice Agent 之前，你需要先在 Agora 项目里开通对话式 AI，并准备后续调用 REST API 所需的项目信息。"
  }, {
    heading: "必要准备",
    content: "你需要准备："
  }, {
    heading: "必要准备",
    content: "Agora 项目"
  }, {
    heading: "必要准备",
    content: "App ID"
  }, {
    heading: "必要准备",
    content: "Customer ID 和 Customer Secret"
  }, {
    heading: "必要准备",
    content: "RTC Token"
  }, {
    heading: "开通步骤",
    content: "登录 Agora Console"
  }, {
    heading: "开通步骤",
    content: "打开目标项目"
  }, {
    heading: "开通步骤",
    content: "为该项目开通 **Conversational AI**"
  }, {
    heading: "开通步骤",
    content: "记录 App ID"
  }, {
    heading: "开通步骤",
    content: "在 RESTful API 设置中生成 Customer ID 和 Customer Secret"
  }, {
    heading: "开通步骤",
    content: "为测试环境生成临时 RTC Token"
  }, {
    heading: "实践建议",
    content: "生产环境里不要长期依赖控制台生成的临时 Token"
  }, {
    heading: "实践建议",
    content: "把敏感凭据保存在后端或密钥管理系统中"
  }, {
    heading: "实践建议",
    content: "在正式接入前，先确认项目的鉴权模式与业务部署方式一致"
  }, {
    heading: "相关页面",
    content: "启动和停止智能体"
  }, {
    heading: "相关页面",
    content: "使用预设"
  }, {
    heading: "相关页面",
    content: "REST API 认证"
  }],
  headings: [{
    id: "必要准备",
    content: "必要准备"
  }, {
    id: "开通步骤",
    content: "开通步骤"
  }, {
    id: "实践建议",
    content: "实践建议"
  }, {
    id: "相关页面",
    content: "相关页面"
  }]
};
export let toc = [{
  depth: 2,
  url: "#必要准备",
  title: _jsx(_Fragment, {
    children: "必要准备"
  })
}, {
  depth: 2,
  url: "#开通步骤",
  title: _jsx(_Fragment, {
    children: "开通步骤"
  })
}, {
  depth: 2,
  url: "#实践建议",
  title: _jsx(_Fragment, {
    children: "实践建议"
  })
}, {
  depth: 2,
  url: "#相关页面",
  title: _jsx(_Fragment, {
    children: "相关页面"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "在开始构建 Voice Agent 之前，你需要先在 Agora 项目里开通对话式 AI，并准备后续调用 REST API 所需的项目信息。"
    }), `
`, _jsx(_components.h2, {
      id: "必要准备",
      children: "必要准备"
    }), `
`, _jsx(_components.p, {
      children: "你需要准备："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Agora 项目"
      }), `
`, _jsx(_components.li, {
        children: "App ID"
      }), `
`, _jsx(_components.li, {
        children: "Customer ID 和 Customer Secret"
      }), `
`, _jsx(_components.li, {
        children: "RTC Token"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "开通步骤",
      children: "开通步骤"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["登录 ", _jsx(_components.a, {
          href: "https://console.agora.io",
          children: "Agora Console"
        })]
      }), `
`, _jsx(_components.li, {
        children: "打开目标项目"
      }), `
`, _jsxs(_components.li, {
        children: ["为该项目开通 ", _jsx(_components.strong, {
          children: "Conversational AI"
        })]
      }), `
`, _jsx(_components.li, {
        children: "记录 App ID"
      }), `
`, _jsx(_components.li, {
        children: "在 RESTful API 设置中生成 Customer ID 和 Customer Secret"
      }), `
`, _jsx(_components.li, {
        children: "为测试环境生成临时 RTC Token"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "实践建议",
      children: "实践建议"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "生产环境里不要长期依赖控制台生成的临时 Token"
      }), `
`, _jsx(_components.li, {
        children: "把敏感凭据保存在后端或密钥管理系统中"
      }), `
`, _jsx(_components.li, {
        children: "在正式接入前，先确认项目的鉴权模式与业务部署方式一致"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "相关页面",
      children: "相关页面"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../build/start-stop-agent.mdx",
          children: "启动和停止智能体"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../build/presets.mdx",
          children: "使用预设"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../api-reference/conversational-ai/rest-api/authentication.mdx",
          children: "REST API 认证"
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
