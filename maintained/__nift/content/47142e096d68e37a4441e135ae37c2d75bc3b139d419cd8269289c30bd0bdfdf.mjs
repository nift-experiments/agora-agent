import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "响应状态码",
  description: "在调用声网对话式 AI 引擎 RESTful API 过程中，你可能收到如下 HTTP 状态码："
};
export let _markdown = `

在调用声网对话式 AI 引擎 RESTful API 过程中，你可能收到如下 HTTP 状态码：

* 如果状态码为 \`200\` 表示请求成功。

* 如果状态码不为 \`200\` 则请求失败。响应包体中包含 \`detail\` 或 \`reason\` 字段描述失败具体原因。

例如，请求失败时，你可能收到如下响应：

\`\`\`json
/// 状态码为 400 请求参数异常
{
    "detail": "create agent failed, code: 400, msg: properties: channel not found",
    "reason": "InvalidRequest"
}
\`\`\`

下面展示请求失败时所有可能的 HTTP 响应状态码、描述和建议措施：

| 响应状态码 | 描述              | 建议措施                                        |
| :---- | :-------------- | :------------------------------------------ |
| 400   | 请求参数异常          | 针对 \`detail\` 字段提示进行检查。                       |
| 403   | 未授权访问           | [联系技术支持](https://ticket.shengwang.cn/)开通服务。 |
| 404   | Agent 未找到或者已经销毁 | 确认任务是否启动成功或者已经退出。                           |
| 409   | Agent 冲突        | 使用已启动的 \`agent_id\` ID 进行后续更新、查询、删除操作。        |
| 422   | 访问超限            | [联系技术支持](https://ticket.shengwang.cn/)提升配额。 |
| 502   | 网关异常            | [联系技术支持](https://ticket.shengwang.cn/)。     |
| 503   | Agent 启动错误      | 使用退避策略重试。                                   |
| 504   | 超时异常            | 使用退避策略重试。                                   |

下面展示请求失败时所有可能的 \`reason\` 值和描述，可结合状态码与 \`detail\` 字段排查问题：

| \`reason\`                     | 描述                                |
| :--------------------------- | :-------------------------------- |
| \`InternalError\`              | 服务端内部错误。                          |
| \`InvalidPermission\`          | 未开通服务。                            |
| \`InvalidRequest\`             | 请求参数异常。                           |
| \`ResourceQuotaLimitExceeded\` | 并发请求过多，超出配额限制。                    |
| \`ServiceUnavailable\`         | 服务端内部错误。                          |
| \`TaskConflict\`               | 已存在相同名称的智能体。                      |
| \`TaskNotFound\`               | 并未成功启动智能体、或者启动智能体后中途退出、或者已经销毁智能体。 |
| \`TaskOperationTimeout\`       | 服务端内部错误。                          |
| \`NotImplemented\`             | 服务端内部错误。                          |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "在调用声网对话式 AI 引擎 RESTful API 过程中，你可能收到如下 HTTP 状态码："
  }, {
    heading: undefined,
    content: "如果状态码为 `200` 表示请求成功。"
  }, {
    heading: undefined,
    content: "如果状态码不为 `200` 则请求失败。响应包体中包含 `detail` 或 `reason` 字段描述失败具体原因。"
  }, {
    heading: undefined,
    content: "例如，请求失败时，你可能收到如下响应："
  }, {
    heading: undefined,
    content: "下面展示请求失败时所有可能的 HTTP 响应状态码、描述和建议措施："
  }, {
    heading: undefined,
    content: "响应状态码"
  }, {
    heading: undefined,
    content: "描述"
  }, {
    heading: undefined,
    content: "建议措施"
  }, {
    heading: undefined,
    content: "400"
  }, {
    heading: undefined,
    content: "请求参数异常"
  }, {
    heading: undefined,
    content: "针对 `detail` 字段提示进行检查。"
  }, {
    heading: undefined,
    content: "403"
  }, {
    heading: undefined,
    content: "未授权访问"
  }, {
    heading: undefined,
    content: "联系技术支持开通服务。"
  }, {
    heading: undefined,
    content: "404"
  }, {
    heading: undefined,
    content: "Agent 未找到或者已经销毁"
  }, {
    heading: undefined,
    content: "确认任务是否启动成功或者已经退出。"
  }, {
    heading: undefined,
    content: "409"
  }, {
    heading: undefined,
    content: "Agent 冲突"
  }, {
    heading: undefined,
    content: "使用已启动的 `agent_id` ID 进行后续更新、查询、删除操作。"
  }, {
    heading: undefined,
    content: "422"
  }, {
    heading: undefined,
    content: "访问超限"
  }, {
    heading: undefined,
    content: "联系技术支持提升配额。"
  }, {
    heading: undefined,
    content: "502"
  }, {
    heading: undefined,
    content: "网关异常"
  }, {
    heading: undefined,
    content: "联系技术支持。"
  }, {
    heading: undefined,
    content: "503"
  }, {
    heading: undefined,
    content: "Agent 启动错误"
  }, {
    heading: undefined,
    content: "使用退避策略重试。"
  }, {
    heading: undefined,
    content: "504"
  }, {
    heading: undefined,
    content: "超时异常"
  }, {
    heading: undefined,
    content: "使用退避策略重试。"
  }, {
    heading: undefined,
    content: "下面展示请求失败时所有可能的 `reason` 值和描述，可结合状态码与 `detail` 字段排查问题："
  }, {
    heading: undefined,
    content: "`reason`"
  }, {
    heading: undefined,
    content: "描述"
  }, {
    heading: undefined,
    content: "`InternalError`"
  }, {
    heading: undefined,
    content: "服务端内部错误。"
  }, {
    heading: undefined,
    content: "`InvalidPermission`"
  }, {
    heading: undefined,
    content: "未开通服务。"
  }, {
    heading: undefined,
    content: "`InvalidRequest`"
  }, {
    heading: undefined,
    content: "请求参数异常。"
  }, {
    heading: undefined,
    content: "`ResourceQuotaLimitExceeded`"
  }, {
    heading: undefined,
    content: "并发请求过多，超出配额限制。"
  }, {
    heading: undefined,
    content: "`ServiceUnavailable`"
  }, {
    heading: undefined,
    content: "服务端内部错误。"
  }, {
    heading: undefined,
    content: "`TaskConflict`"
  }, {
    heading: undefined,
    content: "已存在相同名称的智能体。"
  }, {
    heading: undefined,
    content: "`TaskNotFound`"
  }, {
    heading: undefined,
    content: "并未成功启动智能体、或者启动智能体后中途退出、或者已经销毁智能体。"
  }, {
    heading: undefined,
    content: "`TaskOperationTimeout`"
  }, {
    heading: undefined,
    content: "服务端内部错误。"
  }, {
    heading: undefined,
    content: "`NotImplemented`"
  }, {
    heading: undefined,
    content: "服务端内部错误。"
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "在调用声网对话式 AI 引擎 RESTful API 过程中，你可能收到如下 HTTP 状态码："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["如果状态码为 ", _jsx(_components.code, {
            children: "200"
          }), " 表示请求成功。"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["如果状态码不为 ", _jsx(_components.code, {
            children: "200"
          }), " 则请求失败。响应包体中包含 ", _jsx(_components.code, {
            children: "detail"
          }), " 或 ", _jsx(_components.code, {
            children: "reason"
          }), " 字段描述失败具体原因。"]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "例如，请求失败时，你可能收到如下响应："
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
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "/// 状态码为 400 请求参数异常"
            })
          }), `
`, _jsx(_components.span, {
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
              children: '    "detail"'
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
              children: '"create agent failed, code: 400, msg: properties: channel not found"'
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
              children: '    "reason"'
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
              children: '"InvalidRequest"'
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
`, _jsx(_components.p, {
      children: "下面展示请求失败时所有可能的 HTTP 响应状态码、描述和建议措施："
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "响应状态码"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "描述"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "建议措施"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "400"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "请求参数异常"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["针对 ", _jsx(_components.code, {
              children: "detail"
            }), " 字段提示进行检查。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "403"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "未授权访问"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.a, {
              href: "https://ticket.shengwang.cn/",
              children: "联系技术支持"
            }), "开通服务。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "404"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Agent 未找到或者已经销毁"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "确认任务是否启动成功或者已经退出。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "409"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Agent 冲突"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["使用已启动的 ", _jsx(_components.code, {
              children: "agent_id"
            }), " ID 进行后续更新、查询、删除操作。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "422"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "访问超限"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.a, {
              href: "https://ticket.shengwang.cn/",
              children: "联系技术支持"
            }), "提升配额。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "502"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "网关异常"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.a, {
              href: "https://ticket.shengwang.cn/",
              children: "联系技术支持"
            }), "。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "503"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Agent 启动错误"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "使用退避策略重试。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "504"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "超时异常"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "使用退避策略重试。"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["下面展示请求失败时所有可能的 ", _jsx(_components.code, {
        children: "reason"
      }), " 值和描述，可结合状态码与 ", _jsx(_components.code, {
        children: "detail"
      }), " 字段排查问题："]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "reason"
            })
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "InternalError"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "服务端内部错误。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "InvalidPermission"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "未开通服务。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "InvalidRequest"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "请求参数异常。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "ResourceQuotaLimitExceeded"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "并发请求过多，超出配额限制。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "ServiceUnavailable"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "服务端内部错误。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "TaskConflict"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "已存在相同名称的智能体。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "TaskNotFound"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "并未成功启动智能体、或者启动智能体后中途退出、或者已经销毁智能体。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "TaskOperationTimeout"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "服务端内部错误。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "NotImplemented"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "服务端内部错误。"
          })]
        })]
      })]
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
