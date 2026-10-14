import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Demo Server API",
  description: "Convo AI Device Kit 开发流程使用的服务端 API 参考。"
};
export let _markdown = `

Demo Server 提供 3 个用于设备流程的 RESTful API。示例工程默认没有做鉴权，你可以按实际需要补上。

**Base URL**：\`https://your-domain.com/\`

**认证**：无

## 获取设备 RTC Token [#获取设备-rtc-token]

* **方法**：POST
* **路径**：\`/device\`
* **请求体**：

\`\`\`json
{
  "channel_name": "DEVICE_ID",
  "uid": "DEVICE_USER_ID"
}
\`\`\`

## 启动对话式智能体 [#启动对话式智能体]

* **方法**：POST
* **路径**：\`/agent/start\`
* **请求体**：

\`\`\`json
{
  "channel_name": "DEVICE_ID",
  "uid": "DEVICE_USER_ID",
  "agent_uid": "AGENT_USER_ID"
}
\`\`\`

## 停止对话式智能体 [#停止对话式智能体]

* **方法**：POST
* **路径**：\`/agent/stop\`
* **请求体**：

\`\`\`json
{
  "agent_id": "AGENT_ID"
}
\`\`\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Demo Server 提供 3 个用于设备流程的 RESTful API。示例工程默认没有做鉴权，你可以按实际需要补上。"
  }, {
    heading: undefined,
    content: "**Base URL**：`https://your-domain.com/`"
  }, {
    heading: undefined,
    content: "**认证**：无"
  }, {
    heading: "获取设备-rtc-token",
    content: "**方法**：POST"
  }, {
    heading: "获取设备-rtc-token",
    content: "**路径**：`/device`"
  }, {
    heading: "获取设备-rtc-token",
    content: "**请求体**："
  }, {
    heading: "启动对话式智能体",
    content: "**方法**：POST"
  }, {
    heading: "启动对话式智能体",
    content: "**路径**：`/agent/start`"
  }, {
    heading: "启动对话式智能体",
    content: "**请求体**："
  }, {
    heading: "停止对话式智能体",
    content: "**方法**：POST"
  }, {
    heading: "停止对话式智能体",
    content: "**路径**：`/agent/stop`"
  }, {
    heading: "停止对话式智能体",
    content: "**请求体**："
  }],
  headings: [{
    id: "获取设备-rtc-token",
    content: "获取设备 RTC Token"
  }, {
    id: "启动对话式智能体",
    content: "启动对话式智能体"
  }, {
    id: "停止对话式智能体",
    content: "停止对话式智能体"
  }]
};
export let toc = [{
  depth: 2,
  url: "#获取设备-rtc-token",
  title: _jsx(_Fragment, {
    children: "获取设备 RTC Token"
  })
}, {
  depth: 2,
  url: "#启动对话式智能体",
  title: _jsx(_Fragment, {
    children: "启动对话式智能体"
  })
}, {
  depth: 2,
  url: "#停止对话式智能体",
  title: _jsx(_Fragment, {
    children: "停止对话式智能体"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Demo Server 提供 3 个用于设备流程的 RESTful API。示例工程默认没有做鉴权，你可以按实际需要补上。"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Base URL"
      }), "：", _jsx(_components.code, {
        children: "https://your-domain.com/"
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "认证"
      }), "：无"]
    }), `
`, _jsx(_components.h2, {
      id: "获取设备-rtc-token",
      children: "获取设备 RTC Token"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "方法"
        }), "：POST"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "路径"
        }), "：", _jsx(_components.code, {
          children: "/device"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "请求体"
        }), "："]
      }), `
`]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "channel_name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"DEVICE_ID"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "uid"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"DEVICE_USER_ID"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "启动对话式智能体",
      children: "启动对话式智能体"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "方法"
        }), "：POST"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "路径"
        }), "：", _jsx(_components.code, {
          children: "/agent/start"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "请求体"
        }), "："]
      }), `
`]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "channel_name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"DEVICE_ID"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "uid"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"DEVICE_USER_ID"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "agent_uid"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"AGENT_USER_ID"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "停止对话式智能体",
      children: "停止对话式智能体"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "方法"
        }), "：POST"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "路径"
        }), "：", _jsx(_components.code, {
          children: "/agent/stop"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "请求体"
        }), "："]
      }), `
`]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "agent_id"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"AGENT_ID"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
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
