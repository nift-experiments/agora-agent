import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "开通服务",
  description: "体验声网对话式 AI 引擎前，你需要先在[声网控制台](https://console.shengwang.cn/)创建项目并开通对话式 AI 引擎服务，获取 App ID、客户 ID 和客户密钥等调用 RESTful API 时所需..."
};
export let _markdown = `

体验声网对话式 AI 引擎前，你需要先在[声网控制台](https://console.shengwang.cn/)创建项目并开通对话式 AI 引擎服务，获取 App ID、客户 ID 和客户密钥等调用 RESTful API 时所需的参数。

## 登录声网控制台 [#登录声网控制台]

如果你是第一次使用声网服务，点击[注册账号](https://sso.shengwang.cn/cn/v4/signup/with-sms)前往控制台进行注册。注册成功后会自动登录。

如果你已经拥有声网账号，可以直接[登录控制台](https://console.shengwang.cn//)。

> 信息
> 注册和登录过程中如果遇到疑问，可以查看[快速开始](https://doc.shengwang.cn/doc/console/general/quickstart)。

## 创建声网项目 [#创建声网项目]

成功登录控制台后，按照以下步骤创建一个声网项目：

1. 展开控制台左上角下拉框，点击**创建项目**按钮。
2. 在弹出的对话框内，依次选择**项目类型**，输入**项目名称**，选择**场景标签**和**鉴权机制**。其中鉴权机制推荐选择**安全模式**，**调试模式**的安全性较低。

> 注意
> 为使用对话式 AI 引擎服务创建项目时，项目类型选择**通用项目**。

## 获取 App ID [#获取-app-id]

成功创建项目后，声网会给每个项目自动分配一个 App ID 作为项目唯一标识。你可以直接在**总览**页面的**项目信息**栏，点击 App ID 右侧的复制按钮来获取当前项目的 App ID。

你需要保存好复制的 App ID，后续调用 API 进行初始化等操作时需要传入你获取的 App ID。

## 开通对话式 AI 引擎 [#开通对话式-ai-引擎]

按照以下步骤，在声网控制台为你的项目开通对话式 AI 引擎服务：

1. 登录[声网控制台](https://console.shengwang.cn/)，在页面左上角下拉框选择需要开通对话式 AI 引擎服务的项目。

2. 在左侧导航栏依次访问**全部产品**-**对话式 AI 引擎**。

3. 在弹出的**对话式 AI 引擎**页面，选择**功能配置**，之后点击右侧**服务开通状态**的按钮启用对话式 AI 引擎服务。

   ![image](https://doc.shengwang.cn/img/convoai/enable-1.png)

4. 启用后，在**功能配置**下看到如下页面，即代表该项目的对话式 AI 引擎服务已成功开通：

   ![image](https://doc.shengwang.cn/img/convoai/enable-2.png)

## 获取客户 ID 和客户密钥 [#获取客户-id-和客户密钥]

声网 RESTful API 使用 HTTP 基本认证进行鉴权。进行 HTTP 基本认证时，你需要使用声网提供的客户 ID 和客户密钥生成一个 Base64 算法编码的凭证，并填入 HTTP 请求头部的 \`Authorization\` 字段中。

参考以下步骤获取客户 ID 和客户密钥：

1. 在[声网控制台](https://console.shengwang.cn/)左侧菜单点击**设置** > **RESTful API**，进入 RESTful API 页面。
2. 在 RESTful API 页面，点击**添加密钥**按钮，就会生成一组客户 ID 和客户密钥。
3. 在对应的客户密钥栏点击**下载**按钮。仔细阅读弹窗提示后，点击**下载**。请妥善保管下载的 \`key_and_secret.txt\` 文件，其中 \`key\` 为客户 ID，\`secret\` 为客户密钥。

> 信息
> 客户 ID 和客户密钥仅用于访问 RESTful API。客户密钥只能下载一次，下载后将不在控制台保存，请妥善保管。

## 获取临时 Token [#获取临时-token]

对于鉴权机制为安全模式的项目，在后续调用 API 进行加入频道等操作时，你还需要传入频道名和 Token 来对用户进行鉴权。

为方便体验和测试，在 App 调试阶段你可以先从控制台获取临时 Token（有效期为 24 小时），无需自行部署 Token 服务器。但在 App 正式上线前，你必须在自己的服务端部署并生成 Token。

在控制台左上角的下拉框，切换到你想要获取临时 Token 的项目，然后按如下步骤获取临时 Token：

1. 在**总览**页面的**项目信息**栏，点击**临时 Token 生成器**。
2. 在**生成临时 Token** 页面，点击**添加产品**。
3. 选择 **RTC** 产品，输入频道名，例如 \`testChannel\`。然后保存好输入的内容。
4. 点击**确认**。
5. 成功生成临时 Token 后，点击 Token 右侧的复制按钮，保存好复制的 Token。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "体验声网对话式 AI 引擎前，你需要先在声网控制台创建项目并开通对话式 AI 引擎服务，获取 App ID、客户 ID 和客户密钥等调用 RESTful API 时所需的参数。"
  }, {
    heading: "登录声网控制台",
    content: "如果你是第一次使用声网服务，点击注册账号前往控制台进行注册。注册成功后会自动登录。"
  }, {
    heading: "登录声网控制台",
    content: "如果你已经拥有声网账号，可以直接登录控制台。"
  }, {
    heading: "登录声网控制台",
    content: `> 信息
> 注册和登录过程中如果遇到疑问，可以查看快速开始。`
  }, {
    heading: "创建声网项目",
    content: "成功登录控制台后，按照以下步骤创建一个声网项目："
  }, {
    heading: "创建声网项目",
    content: "展开控制台左上角下拉框，点击**创建项目**按钮。"
  }, {
    heading: "创建声网项目",
    content: "在弹出的对话框内，依次选择**项目类型**，输入**项目名称**，选择**场景标签**和**鉴权机制**。其中鉴权机制推荐选择**安全模式**，**调试模式**的安全性较低。"
  }, {
    heading: "创建声网项目",
    content: `> 注意
> 为使用对话式 AI 引擎服务创建项目时，项目类型选择**通用项目**。`
  }, {
    heading: "获取-app-id",
    content: "成功创建项目后，声网会给每个项目自动分配一个 App ID 作为项目唯一标识。你可以直接在**总览**页面的**项目信息**栏，点击 App ID 右侧的复制按钮来获取当前项目的 App ID。"
  }, {
    heading: "获取-app-id",
    content: "你需要保存好复制的 App ID，后续调用 API 进行初始化等操作时需要传入你获取的 App ID。"
  }, {
    heading: "开通对话式-ai-引擎",
    content: "按照以下步骤，在声网控制台为你的项目开通对话式 AI 引擎服务："
  }, {
    heading: "开通对话式-ai-引擎",
    content: "登录声网控制台，在页面左上角下拉框选择需要开通对话式 AI 引擎服务的项目。"
  }, {
    heading: "开通对话式-ai-引擎",
    content: "在左侧导航栏依次访问**全部产品**-**对话式 AI 引擎**。"
  }, {
    heading: "开通对话式-ai-引擎",
    content: "在弹出的**对话式 AI 引擎**页面，选择**功能配置**，之后点击右侧**服务开通状态**的按钮启用对话式 AI 引擎服务。"
  }, {
    heading: "开通对话式-ai-引擎",
    content: "启用后，在**功能配置**下看到如下页面，即代表该项目的对话式 AI 引擎服务已成功开通："
  }, {
    heading: "获取客户-id-和客户密钥",
    content: "声网 RESTful API 使用 HTTP 基本认证进行鉴权。进行 HTTP 基本认证时，你需要使用声网提供的客户 ID 和客户密钥生成一个 Base64 算法编码的凭证，并填入 HTTP 请求头部的 `Authorization` 字段中。"
  }, {
    heading: "获取客户-id-和客户密钥",
    content: "参考以下步骤获取客户 ID 和客户密钥："
  }, {
    heading: "获取客户-id-和客户密钥",
    content: "在声网控制台左侧菜单点击**设置** > **RESTful API**，进入 RESTful API 页面。"
  }, {
    heading: "获取客户-id-和客户密钥",
    content: "在 RESTful API 页面，点击**添加密钥**按钮，就会生成一组客户 ID 和客户密钥。"
  }, {
    heading: "获取客户-id-和客户密钥",
    content: "在对应的客户密钥栏点击**下载**按钮。仔细阅读弹窗提示后，点击**下载**。请妥善保管下载的 `key_and_secret.txt` 文件，其中 `key` 为客户 ID，`secret` 为客户密钥。"
  }, {
    heading: "获取客户-id-和客户密钥",
    content: `> 信息
> 客户 ID 和客户密钥仅用于访问 RESTful API。客户密钥只能下载一次，下载后将不在控制台保存，请妥善保管。`
  }, {
    heading: "获取临时-token",
    content: "对于鉴权机制为安全模式的项目，在后续调用 API 进行加入频道等操作时，你还需要传入频道名和 Token 来对用户进行鉴权。"
  }, {
    heading: "获取临时-token",
    content: "为方便体验和测试，在 App 调试阶段你可以先从控制台获取临时 Token（有效期为 24 小时），无需自行部署 Token 服务器。但在 App 正式上线前，你必须在自己的服务端部署并生成 Token。"
  }, {
    heading: "获取临时-token",
    content: "在控制台左上角的下拉框，切换到你想要获取临时 Token 的项目，然后按如下步骤获取临时 Token："
  }, {
    heading: "获取临时-token",
    content: "在**总览**页面的**项目信息**栏，点击**临时 Token 生成器**。"
  }, {
    heading: "获取临时-token",
    content: "在**生成临时 Token** 页面，点击**添加产品**。"
  }, {
    heading: "获取临时-token",
    content: "选择 **RTC** 产品，输入频道名，例如 `testChannel`。然后保存好输入的内容。"
  }, {
    heading: "获取临时-token",
    content: "点击**确认**。"
  }, {
    heading: "获取临时-token",
    content: "成功生成临时 Token 后，点击 Token 右侧的复制按钮，保存好复制的 Token。"
  }],
  headings: [{
    id: "登录声网控制台",
    content: "登录声网控制台"
  }, {
    id: "创建声网项目",
    content: "创建声网项目"
  }, {
    id: "获取-app-id",
    content: "获取 App ID"
  }, {
    id: "开通对话式-ai-引擎",
    content: "开通对话式 AI 引擎"
  }, {
    id: "获取客户-id-和客户密钥",
    content: "获取客户 ID 和客户密钥"
  }, {
    id: "获取临时-token",
    content: "获取临时 Token"
  }]
};
export let toc = [{
  depth: 2,
  url: "#登录声网控制台",
  title: _jsx(_Fragment, {
    children: "登录声网控制台"
  })
}, {
  depth: 2,
  url: "#创建声网项目",
  title: _jsx(_Fragment, {
    children: "创建声网项目"
  })
}, {
  depth: 2,
  url: "#获取-app-id",
  title: _jsx(_Fragment, {
    children: "获取 App ID"
  })
}, {
  depth: 2,
  url: "#开通对话式-ai-引擎",
  title: _jsx(_Fragment, {
    children: "开通对话式 AI 引擎"
  })
}, {
  depth: 2,
  url: "#获取客户-id-和客户密钥",
  title: _jsx(_Fragment, {
    children: "获取客户 ID 和客户密钥"
  })
}, {
  depth: 2,
  url: "#获取临时-token",
  title: _jsx(_Fragment, {
    children: "获取临时 Token"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["体验声网对话式 AI 引擎前，你需要先在", _jsx(_components.a, {
        href: "https://console.shengwang.cn/",
        children: "声网控制台"
      }), "创建项目并开通对话式 AI 引擎服务，获取 App ID、客户 ID 和客户密钥等调用 RESTful API 时所需的参数。"]
    }), `
`, _jsx(_components.h2, {
      id: "登录声网控制台",
      children: "登录声网控制台"
    }), `
`, _jsxs(_components.p, {
      children: ["如果你是第一次使用声网服务，点击", _jsx(_components.a, {
        href: "https://sso.shengwang.cn/cn/v4/signup/with-sms",
        children: "注册账号"
      }), "前往控制台进行注册。注册成功后会自动登录。"]
    }), `
`, _jsxs(_components.p, {
      children: ["如果你已经拥有声网账号，可以直接", _jsx(_components.a, {
        href: "https://console.shengwang.cn//",
        children: "登录控制台"
      }), "。"]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsxs(_components.p, {
        children: [`信息
注册和登录过程中如果遇到疑问，可以查看`, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/doc/console/general/quickstart",
          children: "快速开始"
        }), "。"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "创建声网项目",
      children: "创建声网项目"
    }), `
`, _jsx(_components.p, {
      children: "成功登录控制台后，按照以下步骤创建一个声网项目："
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["展开控制台左上角下拉框，点击", _jsx(_components.strong, {
          children: "创建项目"
        }), "按钮。"]
      }), `
`, _jsxs(_components.li, {
        children: ["在弹出的对话框内，依次选择", _jsx(_components.strong, {
          children: "项目类型"
        }), "，输入", _jsx(_components.strong, {
          children: "项目名称"
        }), "，选择", _jsx(_components.strong, {
          children: "场景标签"
        }), "和", _jsx(_components.strong, {
          children: "鉴权机制"
        }), "。其中鉴权机制推荐选择", _jsx(_components.strong, {
          children: "安全模式"
        }), "，", _jsx(_components.strong, {
          children: "调试模式"
        }), "的安全性较低。"]
      }), `
`]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsxs(_components.p, {
        children: [`注意
为使用对话式 AI 引擎服务创建项目时，项目类型选择`, _jsx(_components.strong, {
          children: "通用项目"
        }), "。"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "获取-app-id",
      children: "获取 App ID"
    }), `
`, _jsxs(_components.p, {
      children: ["成功创建项目后，声网会给每个项目自动分配一个 App ID 作为项目唯一标识。你可以直接在", _jsx(_components.strong, {
        children: "总览"
      }), "页面的", _jsx(_components.strong, {
        children: "项目信息"
      }), "栏，点击 App ID 右侧的复制按钮来获取当前项目的 App ID。"]
    }), `
`, _jsx(_components.p, {
      children: "你需要保存好复制的 App ID，后续调用 API 进行初始化等操作时需要传入你获取的 App ID。"
    }), `
`, _jsx(_components.h2, {
      id: "开通对话式-ai-引擎",
      children: "开通对话式 AI 引擎"
    }), `
`, _jsx(_components.p, {
      children: "按照以下步骤，在声网控制台为你的项目开通对话式 AI 引擎服务："
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["登录", _jsx(_components.a, {
            href: "https://console.shengwang.cn/",
            children: "声网控制台"
          }), "，在页面左上角下拉框选择需要开通对话式 AI 引擎服务的项目。"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["在左侧导航栏依次访问", _jsx(_components.strong, {
            children: "全部产品"
          }), "-", _jsx(_components.strong, {
            children: "对话式 AI 引擎"
          }), "。"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["在弹出的", _jsx(_components.strong, {
            children: "对话式 AI 引擎"
          }), "页面，选择", _jsx(_components.strong, {
            children: "功能配置"
          }), "，之后点击右侧", _jsx(_components.strong, {
            children: "服务开通状态"
          }), "的按钮启用对话式 AI 引擎服务。"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://doc.shengwang.cn/img/convoai/enable-1.png",
            alt: "image"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["启用后，在", _jsx(_components.strong, {
            children: "功能配置"
          }), "下看到如下页面，即代表该项目的对话式 AI 引擎服务已成功开通："]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://doc.shengwang.cn/img/convoai/enable-2.png",
            alt: "image"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "获取客户-id-和客户密钥",
      children: "获取客户 ID 和客户密钥"
    }), `
`, _jsxs(_components.p, {
      children: ["声网 RESTful API 使用 HTTP 基本认证进行鉴权。进行 HTTP 基本认证时，你需要使用声网提供的客户 ID 和客户密钥生成一个 Base64 算法编码的凭证，并填入 HTTP 请求头部的 ", _jsx(_components.code, {
        children: "Authorization"
      }), " 字段中。"]
    }), `
`, _jsx(_components.p, {
      children: "参考以下步骤获取客户 ID 和客户密钥："
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["在", _jsx(_components.a, {
          href: "https://console.shengwang.cn/",
          children: "声网控制台"
        }), "左侧菜单点击", _jsx(_components.strong, {
          children: "设置"
        }), " > ", _jsx(_components.strong, {
          children: "RESTful API"
        }), "，进入 RESTful API 页面。"]
      }), `
`, _jsxs(_components.li, {
        children: ["在 RESTful API 页面，点击", _jsx(_components.strong, {
          children: "添加密钥"
        }), "按钮，就会生成一组客户 ID 和客户密钥。"]
      }), `
`, _jsxs(_components.li, {
        children: ["在对应的客户密钥栏点击", _jsx(_components.strong, {
          children: "下载"
        }), "按钮。仔细阅读弹窗提示后，点击", _jsx(_components.strong, {
          children: "下载"
        }), "。请妥善保管下载的 ", _jsx(_components.code, {
          children: "key_and_secret.txt"
        }), " 文件，其中 ", _jsx(_components.code, {
          children: "key"
        }), " 为客户 ID，", _jsx(_components.code, {
          children: "secret"
        }), " 为客户密钥。"]
      }), `
`]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsx(_components.p, {
        children: `信息
客户 ID 和客户密钥仅用于访问 RESTful API。客户密钥只能下载一次，下载后将不在控制台保存，请妥善保管。`
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "获取临时-token",
      children: "获取临时 Token"
    }), `
`, _jsx(_components.p, {
      children: "对于鉴权机制为安全模式的项目，在后续调用 API 进行加入频道等操作时，你还需要传入频道名和 Token 来对用户进行鉴权。"
    }), `
`, _jsx(_components.p, {
      children: "为方便体验和测试，在 App 调试阶段你可以先从控制台获取临时 Token（有效期为 24 小时），无需自行部署 Token 服务器。但在 App 正式上线前，你必须在自己的服务端部署并生成 Token。"
    }), `
`, _jsx(_components.p, {
      children: "在控制台左上角的下拉框，切换到你想要获取临时 Token 的项目，然后按如下步骤获取临时 Token："
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["在", _jsx(_components.strong, {
          children: "总览"
        }), "页面的", _jsx(_components.strong, {
          children: "项目信息"
        }), "栏，点击", _jsx(_components.strong, {
          children: "临时 Token 生成器"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: ["在", _jsx(_components.strong, {
          children: "生成临时 Token"
        }), " 页面，点击", _jsx(_components.strong, {
          children: "添加产品"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: ["选择 ", _jsx(_components.strong, {
          children: "RTC"
        }), " 产品，输入频道名，例如 ", _jsx(_components.code, {
          children: "testChannel"
        }), "。然后保存好输入的内容。"]
      }), `
`, _jsxs(_components.li, {
        children: ["点击", _jsx(_components.strong, {
          children: "确认"
        }), "。"]
      }), `
`, _jsx(_components.li, {
        children: "成功生成临时 Token 后，点击 Token 右侧的复制按钮，保存好复制的 Token。"
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
