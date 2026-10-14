import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "发送图片给智能体",
  description: "从客户端发送图片消息，帮助智能体更好地理解用户意图。"
};
export let _markdown = `

如果你的智能体接入了支持图像输入的模型，你可以从客户端发送图片消息，让智能体在后续对话中结合图片内容理解用户意图。

## 适合的场景 [#适合的场景]

* 用户拍照提问
* 设备侧上传当前画面做辅助理解
* 结合文字和图片完成多模态问答

## 前提条件 [#前提条件]

* 已完成 [Voice agent 快速开始](../get-started/quickstart.mdx)
* 已集成 RTC SDK
* 已开通 Signaling/RTM，并具备基础消息收发能力
* 接入的 LLM 或 MLLM 支持图片输入

## 基本接入方式 [#基本接入方式]

1. 集成客户端组件
2. 订阅用于消息传输的频道
3. 启动智能体时打开 RTM 和数据通道
4. 调用组件的 \`chat\` 或等效接口发送图片消息
5. 通过消息回执回调确认结果

示意代码如下：

\`\`\`typescript
const uuid = 'unique-image-id-123'
const imageUrl = 'https://example.com/image.jpg'

api.chat('agentUserId', {
  uuid,
  imageUrl,
  type: 'image'
})
\`\`\`

## 注意事项 [#注意事项]

* 发送成功的回调通常只代表“发送请求已受理”，不代表模型已经完成理解
* 图片理解能力取决于底层模型
* 如果你的业务会话需要审计或归档，建议同时保存图片消息的元数据

## 相关页面 [#相关页面]

* [显示实时转写](transcripts.md)
* [MLLM 模型](../models/mllm/index.md)
* [调试智能体故障](debug-agent-failures.mdx)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "如果你的智能体接入了支持图像输入的模型，你可以从客户端发送图片消息，让智能体在后续对话中结合图片内容理解用户意图。"
  }, {
    heading: "适合的场景",
    content: "用户拍照提问"
  }, {
    heading: "适合的场景",
    content: "设备侧上传当前画面做辅助理解"
  }, {
    heading: "适合的场景",
    content: "结合文字和图片完成多模态问答"
  }, {
    heading: "前提条件",
    content: "已完成 Voice agent 快速开始"
  }, {
    heading: "前提条件",
    content: "已集成 RTC SDK"
  }, {
    heading: "前提条件",
    content: "已开通 Signaling/RTM，并具备基础消息收发能力"
  }, {
    heading: "前提条件",
    content: "接入的 LLM 或 MLLM 支持图片输入"
  }, {
    heading: "基本接入方式",
    content: "集成客户端组件"
  }, {
    heading: "基本接入方式",
    content: "订阅用于消息传输的频道"
  }, {
    heading: "基本接入方式",
    content: "启动智能体时打开 RTM 和数据通道"
  }, {
    heading: "基本接入方式",
    content: "调用组件的 `chat` 或等效接口发送图片消息"
  }, {
    heading: "基本接入方式",
    content: "通过消息回执回调确认结果"
  }, {
    heading: "基本接入方式",
    content: "示意代码如下："
  }, {
    heading: "注意事项",
    content: "发送成功的回调通常只代表“发送请求已受理”，不代表模型已经完成理解"
  }, {
    heading: "注意事项",
    content: "图片理解能力取决于底层模型"
  }, {
    heading: "注意事项",
    content: "如果你的业务会话需要审计或归档，建议同时保存图片消息的元数据"
  }, {
    heading: "相关页面",
    content: "显示实时转写"
  }, {
    heading: "相关页面",
    content: "MLLM 模型"
  }, {
    heading: "相关页面",
    content: "调试智能体故障"
  }],
  headings: [{
    id: "适合的场景",
    content: "适合的场景"
  }, {
    id: "前提条件",
    content: "前提条件"
  }, {
    id: "基本接入方式",
    content: "基本接入方式"
  }, {
    id: "注意事项",
    content: "注意事项"
  }, {
    id: "相关页面",
    content: "相关页面"
  }]
};
export let toc = [{
  depth: 2,
  url: "#适合的场景",
  title: _jsx(_Fragment, {
    children: "适合的场景"
  })
}, {
  depth: 2,
  url: "#前提条件",
  title: _jsx(_Fragment, {
    children: "前提条件"
  })
}, {
  depth: 2,
  url: "#基本接入方式",
  title: _jsx(_Fragment, {
    children: "基本接入方式"
  })
}, {
  depth: 2,
  url: "#注意事项",
  title: _jsx(_Fragment, {
    children: "注意事项"
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
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "如果你的智能体接入了支持图像输入的模型，你可以从客户端发送图片消息，让智能体在后续对话中结合图片内容理解用户意图。"
    }), `
`, _jsx(_components.h2, {
      id: "适合的场景",
      children: "适合的场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "用户拍照提问"
      }), `
`, _jsx(_components.li, {
        children: "设备侧上传当前画面做辅助理解"
      }), `
`, _jsx(_components.li, {
        children: "结合文字和图片完成多模态问答"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["已完成 ", _jsx(_components.a, {
          href: "../get-started/quickstart.mdx",
          children: "Voice agent 快速开始"
        })]
      }), `
`, _jsx(_components.li, {
        children: "已集成 RTC SDK"
      }), `
`, _jsx(_components.li, {
        children: "已开通 Signaling/RTM，并具备基础消息收发能力"
      }), `
`, _jsx(_components.li, {
        children: "接入的 LLM 或 MLLM 支持图片输入"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "基本接入方式",
      children: "基本接入方式"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "集成客户端组件"
      }), `
`, _jsx(_components.li, {
        children: "订阅用于消息传输的频道"
      }), `
`, _jsx(_components.li, {
        children: "启动智能体时打开 RTM 和数据通道"
      }), `
`, _jsxs(_components.li, {
        children: ["调用组件的 ", _jsx(_components.code, {
          children: "chat"
        }), " 或等效接口发送图片消息"]
      }), `
`, _jsx(_components.li, {
        children: "通过消息回执回调确认结果"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "示意代码如下："
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " uuid"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'unique-image-id-123'"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " imageUrl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'https://example.com/image.jpg'"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "api."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "chat"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'agentUserId'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  uuid,"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  imageUrl,"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  type: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'image'"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "})"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "发送成功的回调通常只代表“发送请求已受理”，不代表模型已经完成理解"
      }), `
`, _jsx(_components.li, {
        children: "图片理解能力取决于底层模型"
      }), `
`, _jsx(_components.li, {
        children: "如果你的业务会话需要审计或归档，建议同时保存图片消息的元数据"
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
          href: "transcripts.md",
          children: "显示实时转写"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../models/mllm/index.md",
          children: "MLLM 模型"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "debug-agent-failures.mdx",
          children: "调试智能体故障"
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
