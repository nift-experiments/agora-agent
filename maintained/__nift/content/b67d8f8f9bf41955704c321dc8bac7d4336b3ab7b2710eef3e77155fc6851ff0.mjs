import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "调试智能体故障",
  description: "结合客户端回调、webhook 事件和 turn 级数据，定位智能体为什么失败或表现异常。"
};
export let _markdown = "\n\n一次智能体故障往往不会只体现在一个信号里。要回答“到底发生了什么”，通常需要把以下三类信息串起来看：\n\n* 客户端实时回调\n* 服务端 webhook 持久化事件\n* 对话轮次（turn）级别的数据\n\n## 先看哪一个信号 [#先看哪一个信号]\n\n| 现象           | 先检查                   | 再检查                                   |\n| ------------ | --------------------- | ------------------------------------- |\n| 智能体意外停止      | `102 agent left`      | `110 agent error`、`101 agent joined`  |\n| 会话中出现模块报错    | `onAgentError`        | `110 agent error`                     |\n| 会话越来越慢       | `111 agent metrics`   | `turns` API                           |\n| 某一轮对话异常      | `turn_id`             | `Query conversation turn information` |\n| UI 状态错乱但会话没挂 | `onAgentStateChanged` | 调试日志                                  |\n\n## 推荐排障顺序 [#推荐排障顺序]\n\n1. 先确认会话是否真的建立成功：看 `101 agent joined`\n2. 再看它是如何结束的：看 `102 agent left`\n3. 再看是否出现模块级错误：看 `110 agent error`\n4. 再看故障前是否已经出现性能退化：看 `111 agent metrics`\n5. 如果问题集中在某一轮，再去查 `turns` API\n\n## 重点字段 [#重点字段]\n\n### `102 agent left` [#102-agent-left]\n\n* `status`：正常结束还是失败结束\n* `message`：离开原因\n* `stop_ts`：结束时间\n\n### `110 agent error` [#110-agent-error]\n\n* `errors[].module`：错误出在哪个模块\n* `errors[].code`：供应商或模块错误码\n* `errors[].message`：错误文本\n* `turn_id`：对应哪一轮对话\n\n### `111 agent metrics` [#111-agent-metrics]\n\n* 判断故障前是否存在性能退化\n* 观察是 LLM、TTS 还是其他链路先变慢\n\n## 实践建议 [#实践建议]\n\n* 客户端和服务端都保留 `agent_id` 与 `turn_id`\n* 把 `labels` 设计成可筛选的业务维度，例如环境、租户、实验组\n* 不要只盯着最后一个错误事件，很多故障的前兆其实是延迟先升高\n\n## 相关页面 [#相关页面]\n\n* [监控智能体运行状态](monitor-agent-runtime.mdx)\n* [通知事件类型](../reference/event-types.mdx)\n* [检索会话历史](retrieve-session-history.mdx)\n";
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "一次智能体故障往往不会只体现在一个信号里。要回答“到底发生了什么”，通常需要把以下三类信息串起来看："
  }, {
    heading: undefined,
    content: "客户端实时回调"
  }, {
    heading: undefined,
    content: "服务端 webhook 持久化事件"
  }, {
    heading: undefined,
    content: "对话轮次（turn）级别的数据"
  }, {
    heading: "先看哪一个信号",
    content: "现象"
  }, {
    heading: "先看哪一个信号",
    content: "先检查"
  }, {
    heading: "先看哪一个信号",
    content: "再检查"
  }, {
    heading: "先看哪一个信号",
    content: "智能体意外停止"
  }, {
    heading: "先看哪一个信号",
    content: "`102 agent left`"
  }, {
    heading: "先看哪一个信号",
    content: "`110 agent error`、`101 agent joined`"
  }, {
    heading: "先看哪一个信号",
    content: "会话中出现模块报错"
  }, {
    heading: "先看哪一个信号",
    content: "`onAgentError`"
  }, {
    heading: "先看哪一个信号",
    content: "`110 agent error`"
  }, {
    heading: "先看哪一个信号",
    content: "会话越来越慢"
  }, {
    heading: "先看哪一个信号",
    content: "`111 agent metrics`"
  }, {
    heading: "先看哪一个信号",
    content: "`turns` API"
  }, {
    heading: "先看哪一个信号",
    content: "某一轮对话异常"
  }, {
    heading: "先看哪一个信号",
    content: "`turn_id`"
  }, {
    heading: "先看哪一个信号",
    content: "`Query conversation turn information`"
  }, {
    heading: "先看哪一个信号",
    content: "UI 状态错乱但会话没挂"
  }, {
    heading: "先看哪一个信号",
    content: "`onAgentStateChanged`"
  }, {
    heading: "先看哪一个信号",
    content: "调试日志"
  }, {
    heading: "推荐排障顺序",
    content: "先确认会话是否真的建立成功：看 `101 agent joined`"
  }, {
    heading: "推荐排障顺序",
    content: "再看它是如何结束的：看 `102 agent left`"
  }, {
    heading: "推荐排障顺序",
    content: "再看是否出现模块级错误：看 `110 agent error`"
  }, {
    heading: "推荐排障顺序",
    content: "再看故障前是否已经出现性能退化：看 `111 agent metrics`"
  }, {
    heading: "推荐排障顺序",
    content: "如果问题集中在某一轮，再去查 `turns` API"
  }, {
    heading: "102-agent-left",
    content: "`status`：正常结束还是失败结束"
  }, {
    heading: "102-agent-left",
    content: "`message`：离开原因"
  }, {
    heading: "102-agent-left",
    content: "`stop_ts`：结束时间"
  }, {
    heading: "110-agent-error",
    content: "`errors[].module`：错误出在哪个模块"
  }, {
    heading: "110-agent-error",
    content: "`errors[].code`：供应商或模块错误码"
  }, {
    heading: "110-agent-error",
    content: "`errors[].message`：错误文本"
  }, {
    heading: "110-agent-error",
    content: "`turn_id`：对应哪一轮对话"
  }, {
    heading: "111-agent-metrics",
    content: "判断故障前是否存在性能退化"
  }, {
    heading: "111-agent-metrics",
    content: "观察是 LLM、TTS 还是其他链路先变慢"
  }, {
    heading: "实践建议",
    content: "客户端和服务端都保留 `agent_id` 与 `turn_id`"
  }, {
    heading: "实践建议",
    content: "把 `labels` 设计成可筛选的业务维度，例如环境、租户、实验组"
  }, {
    heading: "实践建议",
    content: "不要只盯着最后一个错误事件，很多故障的前兆其实是延迟先升高"
  }, {
    heading: "相关页面",
    content: "监控智能体运行状态"
  }, {
    heading: "相关页面",
    content: "通知事件类型"
  }, {
    heading: "相关页面",
    content: "检索会话历史"
  }],
  headings: [{
    id: "先看哪一个信号",
    content: "先看哪一个信号"
  }, {
    id: "推荐排障顺序",
    content: "推荐排障顺序"
  }, {
    id: "重点字段",
    content: "重点字段"
  }, {
    id: "102-agent-left",
    content: "`102 agent left`"
  }, {
    id: "110-agent-error",
    content: "`110 agent error`"
  }, {
    id: "111-agent-metrics",
    content: "`111 agent metrics`"
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
  url: "#先看哪一个信号",
  title: _jsx(_Fragment, {
    children: "先看哪一个信号"
  })
}, {
  depth: 2,
  url: "#推荐排障顺序",
  title: _jsx(_Fragment, {
    children: "推荐排障顺序"
  })
}, {
  depth: 2,
  url: "#重点字段",
  title: _jsx(_Fragment, {
    children: "重点字段"
  })
}, {
  depth: 3,
  url: "#102-agent-left",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "102 agent left"
    })
  })
}, {
  depth: 3,
  url: "#110-agent-error",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "110 agent error"
    })
  })
}, {
  depth: 3,
  url: "#111-agent-metrics",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "111 agent metrics"
    })
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
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
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
      children: "一次智能体故障往往不会只体现在一个信号里。要回答“到底发生了什么”，通常需要把以下三类信息串起来看："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "客户端实时回调"
      }), `
`, _jsx(_components.li, {
        children: "服务端 webhook 持久化事件"
      }), `
`, _jsx(_components.li, {
        children: "对话轮次（turn）级别的数据"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "先看哪一个信号",
      children: "先看哪一个信号"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "现象"
          }), _jsx(_components.th, {
            children: "先检查"
          }), _jsx(_components.th, {
            children: "再检查"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "智能体意外停止"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "102 agent left"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "110 agent error"
            }), "、", _jsx(_components.code, {
              children: "101 agent joined"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "会话中出现模块报错"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "onAgentError"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "110 agent error"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "会话越来越慢"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "111 agent metrics"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "turns"
            }), " API"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "某一轮对话异常"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "turn_id"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Query conversation turn information"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "UI 状态错乱但会话没挂"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "onAgentStateChanged"
            })
          }), _jsx(_components.td, {
            children: "调试日志"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "推荐排障顺序",
      children: "推荐排障顺序"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["先确认会话是否真的建立成功：看 ", _jsx(_components.code, {
          children: "101 agent joined"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["再看它是如何结束的：看 ", _jsx(_components.code, {
          children: "102 agent left"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["再看是否出现模块级错误：看 ", _jsx(_components.code, {
          children: "110 agent error"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["再看故障前是否已经出现性能退化：看 ", _jsx(_components.code, {
          children: "111 agent metrics"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["如果问题集中在某一轮，再去查 ", _jsx(_components.code, {
          children: "turns"
        }), " API"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "重点字段",
      children: "重点字段"
    }), `
`, _jsx(_components.h3, {
      id: "102-agent-left",
      children: _jsx(_components.code, {
        children: "102 agent left"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "status"
        }), "：正常结束还是失败结束"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "message"
        }), "：离开原因"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "stop_ts"
        }), "：结束时间"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "110-agent-error",
      children: _jsx(_components.code, {
        children: "110 agent error"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "errors[].module"
        }), "：错误出在哪个模块"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "errors[].code"
        }), "：供应商或模块错误码"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "errors[].message"
        }), "：错误文本"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "turn_id"
        }), "：对应哪一轮对话"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "111-agent-metrics",
      children: _jsx(_components.code, {
        children: "111 agent metrics"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "判断故障前是否存在性能退化"
      }), `
`, _jsx(_components.li, {
        children: "观察是 LLM、TTS 还是其他链路先变慢"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "实践建议",
      children: "实践建议"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["客户端和服务端都保留 ", _jsx(_components.code, {
          children: "agent_id"
        }), " 与 ", _jsx(_components.code, {
          children: "turn_id"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["把 ", _jsx(_components.code, {
          children: "labels"
        }), " 设计成可筛选的业务维度，例如环境、租户、实验组"]
      }), `
`, _jsx(_components.li, {
        children: "不要只盯着最后一个错误事件，很多故障的前兆其实是延迟先升高"
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
          href: "monitor-agent-runtime.mdx",
          children: "监控智能体运行状态"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../reference/event-types.mdx",
          children: "通知事件类型"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "retrieve-session-history.mdx",
          children: "检索会话历史"
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
