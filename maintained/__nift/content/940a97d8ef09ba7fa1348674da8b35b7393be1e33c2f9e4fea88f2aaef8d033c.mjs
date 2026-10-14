import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "运行 R1 Demo",
  description: "跑通官方 R1 开发基线，并验证设备端到端工作流。"
};
export let _markdown = `

当你想先验证官方 R1 开发基线是否能跑通，再开始定制设备、服务端或固件时，请从本页开始。

## 你将完成什么 [#你将完成什么]

这条基线 bring-up 路径会覆盖：

* 示例仓库和开发资源
* 设备工作流使用的 Demo Server
* 设备联网和基础操作流程
* 固件构建、烧录和端到端验证

## 推荐顺序 [#推荐顺序]

1. [运行 Demo Server](run-the-demo-server.md)
2. [配置设备网络](configure-device-network.md)
3. [构建并烧录固件](build-and-flash-firmware.md)
4. 完成端到端验证

## 前提条件 [#前提条件]

* Python 3.7 或更高版本
* R1 开发板
* 一台用于安装 App 的 Android 设备
* 你选择的 LLM 和 TTS 服务凭据
* 已开通对话式 AI 的 Agora 项目

项目准备方式见[开通服务](../reference/enable-services.md)。

## 获取示例工程 [#获取示例工程]

1. 克隆 \`Conversational-AI-IOT-Sample\` 仓库：

   \`\`\`shell
   git clone https://github.com/AgoraIO-Community/Conversational-AI-IOT-Sample.git
   \`\`\`

2. 切换到 \`bk7258/v2.0.1\` 分支：

   \`\`\`shell
   cd Conversational-AI-IOT-Sample
   git checkout bk7258/v2.0.1
   \`\`\`

## 验证设备 Demo [#验证设备-demo]

完成服务端、网络和固件配置后：

1. 使用 Type-C 线把 R1 开发板接到电脑的 \`USB TO UART\` 接口。
2. 如果是首次配置，长按 **S1** 5 秒进入配网模式，并通过 Android App 完成 Wi-Fi 配置。
3. 短按**中间按钮**开始和 AI 智能体对话。
4. 再次短按**中间按钮**结束对话。
5. 如果设备因 3 分钟无操作进入深度休眠，可按 **RST** 重启。

## 相关页面 [#相关页面]

* [运行 Demo Server](run-the-demo-server.md)
* [配置设备网络](configure-device-network.md)
* [构建并烧录固件](build-and-flash-firmware.md)
* [Demo Server API](demo-server-apis.md)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "当你想先验证官方 R1 开发基线是否能跑通，再开始定制设备、服务端或固件时，请从本页开始。"
  }, {
    heading: "你将完成什么",
    content: "这条基线 bring-up 路径会覆盖："
  }, {
    heading: "你将完成什么",
    content: "示例仓库和开发资源"
  }, {
    heading: "你将完成什么",
    content: "设备工作流使用的 Demo Server"
  }, {
    heading: "你将完成什么",
    content: "设备联网和基础操作流程"
  }, {
    heading: "你将完成什么",
    content: "固件构建、烧录和端到端验证"
  }, {
    heading: "推荐顺序",
    content: "运行 Demo Server"
  }, {
    heading: "推荐顺序",
    content: "配置设备网络"
  }, {
    heading: "推荐顺序",
    content: "构建并烧录固件"
  }, {
    heading: "推荐顺序",
    content: "完成端到端验证"
  }, {
    heading: "前提条件",
    content: "Python 3.7 或更高版本"
  }, {
    heading: "前提条件",
    content: "R1 开发板"
  }, {
    heading: "前提条件",
    content: "一台用于安装 App 的 Android 设备"
  }, {
    heading: "前提条件",
    content: "你选择的 LLM 和 TTS 服务凭据"
  }, {
    heading: "前提条件",
    content: "已开通对话式 AI 的 Agora 项目"
  }, {
    heading: "前提条件",
    content: "项目准备方式见开通服务。"
  }, {
    heading: "获取示例工程",
    content: "克隆 `Conversational-AI-IOT-Sample` 仓库："
  }, {
    heading: "获取示例工程",
    content: "切换到 `bk7258/v2.0.1` 分支："
  }, {
    heading: "验证设备-demo",
    content: "完成服务端、网络和固件配置后："
  }, {
    heading: "验证设备-demo",
    content: "使用 Type-C 线把 R1 开发板接到电脑的 `USB TO UART` 接口。"
  }, {
    heading: "验证设备-demo",
    content: "如果是首次配置，长按 **S1** 5 秒进入配网模式，并通过 Android App 完成 Wi-Fi 配置。"
  }, {
    heading: "验证设备-demo",
    content: "短按**中间按钮**开始和 AI 智能体对话。"
  }, {
    heading: "验证设备-demo",
    content: "再次短按**中间按钮**结束对话。"
  }, {
    heading: "验证设备-demo",
    content: "如果设备因 3 分钟无操作进入深度休眠，可按 **RST** 重启。"
  }, {
    heading: "相关页面",
    content: "运行 Demo Server"
  }, {
    heading: "相关页面",
    content: "配置设备网络"
  }, {
    heading: "相关页面",
    content: "构建并烧录固件"
  }, {
    heading: "相关页面",
    content: "Demo Server API"
  }],
  headings: [{
    id: "你将完成什么",
    content: "你将完成什么"
  }, {
    id: "推荐顺序",
    content: "推荐顺序"
  }, {
    id: "前提条件",
    content: "前提条件"
  }, {
    id: "获取示例工程",
    content: "获取示例工程"
  }, {
    id: "验证设备-demo",
    content: "验证设备 Demo"
  }, {
    id: "相关页面",
    content: "相关页面"
  }]
};
export let toc = [{
  depth: 2,
  url: "#你将完成什么",
  title: _jsx(_Fragment, {
    children: "你将完成什么"
  })
}, {
  depth: 2,
  url: "#推荐顺序",
  title: _jsx(_Fragment, {
    children: "推荐顺序"
  })
}, {
  depth: 2,
  url: "#前提条件",
  title: _jsx(_Fragment, {
    children: "前提条件"
  })
}, {
  depth: 2,
  url: "#获取示例工程",
  title: _jsx(_Fragment, {
    children: "获取示例工程"
  })
}, {
  depth: 2,
  url: "#验证设备-demo",
  title: _jsx(_Fragment, {
    children: "验证设备 Demo"
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
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "当你想先验证官方 R1 开发基线是否能跑通，再开始定制设备、服务端或固件时，请从本页开始。"
    }), `
`, _jsx(_components.h2, {
      id: "你将完成什么",
      children: "你将完成什么"
    }), `
`, _jsx(_components.p, {
      children: "这条基线 bring-up 路径会覆盖："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "示例仓库和开发资源"
      }), `
`, _jsx(_components.li, {
        children: "设备工作流使用的 Demo Server"
      }), `
`, _jsx(_components.li, {
        children: "设备联网和基础操作流程"
      }), `
`, _jsx(_components.li, {
        children: "固件构建、烧录和端到端验证"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "推荐顺序",
      children: "推荐顺序"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "run-the-demo-server.md",
          children: "运行 Demo Server"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "configure-device-network.md",
          children: "配置设备网络"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "build-and-flash-firmware.md",
          children: "构建并烧录固件"
        })
      }), `
`, _jsx(_components.li, {
        children: "完成端到端验证"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Python 3.7 或更高版本"
      }), `
`, _jsx(_components.li, {
        children: "R1 开发板"
      }), `
`, _jsx(_components.li, {
        children: "一台用于安装 App 的 Android 设备"
      }), `
`, _jsx(_components.li, {
        children: "你选择的 LLM 和 TTS 服务凭据"
      }), `
`, _jsx(_components.li, {
        children: "已开通对话式 AI 的 Agora 项目"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["项目准备方式见", _jsx(_components.a, {
        href: "../reference/enable-services.md",
        children: "开通服务"
      }), "。"]
    }), `
`, _jsx(_components.h2, {
      id: "获取示例工程",
      children: "获取示例工程"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["克隆 ", _jsx(_components.code, {
            children: "Conversational-AI-IOT-Sample"
          }), " 仓库："]
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
            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "git"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " clone"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " https://github.com/AgoraIO-Community/Conversational-AI-IOT-Sample.git"
                })]
              })
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["切换到 ", _jsx(_components.code, {
            children: "bk7258/v2.0.1"
          }), " 分支："]
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
            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "cd"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " Conversational-AI-IOT-Sample"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "git"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " checkout"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " bk7258/v2.0.1"
                })]
              })]
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "验证设备-demo",
      children: "验证设备 Demo"
    }), `
`, _jsx(_components.p, {
      children: "完成服务端、网络和固件配置后："
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["使用 Type-C 线把 R1 开发板接到电脑的 ", _jsx(_components.code, {
          children: "USB TO UART"
        }), " 接口。"]
      }), `
`, _jsxs(_components.li, {
        children: ["如果是首次配置，长按 ", _jsx(_components.strong, {
          children: "S1"
        }), " 5 秒进入配网模式，并通过 Android App 完成 Wi-Fi 配置。"]
      }), `
`, _jsxs(_components.li, {
        children: ["短按", _jsx(_components.strong, {
          children: "中间按钮"
        }), "开始和 AI 智能体对话。"]
      }), `
`, _jsxs(_components.li, {
        children: ["再次短按", _jsx(_components.strong, {
          children: "中间按钮"
        }), "结束对话。"]
      }), `
`, _jsxs(_components.li, {
        children: ["如果设备因 3 分钟无操作进入深度休眠，可按 ", _jsx(_components.strong, {
          children: "RST"
        }), " 重启。"]
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
          href: "run-the-demo-server.md",
          children: "运行 Demo Server"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "configure-device-network.md",
          children: "配置设备网络"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "build-and-flash-firmware.md",
          children: "构建并烧录固件"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "demo-server-apis.md",
          children: "Demo Server API"
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
