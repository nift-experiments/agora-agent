import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "LogLevel",
  description: "SDK 的输出日志等级。"
};
export let _markdown = '\n\n<a id="enum_loglevel__parameters" />\n\n## 枚举值 [#枚举值]\n\n### `LOG_LEVEL_NONE` [#log_level_none]\n\n（0x0000）：输出等级为 NONE，仅用于不输出任何日志信息。\n\n### `LOG_LEVEL_INFO` [#log_level_info]\n\n（0x0001）：（默认）输出等级为 INFO，输出 `FATAL`、 `ERROR`、 `WARN` 和 `INFO` 级别的日志信息。建议将日志过滤器设置为该等级。\n\n### `LOG_LEVEL_WARN` [#log_level_warn]\n\n（0x0002）：输出等级为 WARN，输出 `FATAL`、 `ERROR` 和 `WARN` 级别的日志信息。\n\n### `LOG_LEVEL_ERROR` [#log_level_error]\n\n（0x0004）：输出等级为 ERROR，输出 `FATAL` 和 `ERROR` 级别的日志信息。\n\n### `LOG_LEVEL_FATAL` [#log_level_fatal]\n\n（0x0008）：输出等级为 FATAL，仅输出 `FATAL` 级别的日志信息。\n';
export let structuredData = {
  contents: [{
    heading: "log_level_none",
    content: "（0x0000）：输出等级为 NONE，仅用于不输出任何日志信息。"
  }, {
    heading: "log_level_info",
    content: "（0x0001）：（默认）输出等级为 INFO，输出 `FATAL`、 `ERROR`、 `WARN` 和 `INFO` 级别的日志信息。建议将日志过滤器设置为该等级。"
  }, {
    heading: "log_level_warn",
    content: "（0x0002）：输出等级为 WARN，输出 `FATAL`、 `ERROR` 和 `WARN` 级别的日志信息。"
  }, {
    heading: "log_level_error",
    content: "（0x0004）：输出等级为 ERROR，输出 `FATAL` 和 `ERROR` 级别的日志信息。"
  }, {
    heading: "log_level_fatal",
    content: "（0x0008）：输出等级为 FATAL，仅输出 `FATAL` 级别的日志信息。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "log_level_none",
    content: "`LOG_LEVEL_NONE`"
  }, {
    id: "log_level_info",
    content: "`LOG_LEVEL_INFO`"
  }, {
    id: "log_level_warn",
    content: "`LOG_LEVEL_WARN`"
  }, {
    id: "log_level_error",
    content: "`LOG_LEVEL_ERROR`"
  }, {
    id: "log_level_fatal",
    content: "`LOG_LEVEL_FATAL`"
  }]
};
export let toc = [{
  depth: 2,
  url: "#枚举值",
  title: _jsx(_Fragment, {
    children: "枚举值"
  })
}, {
  depth: 3,
  url: "#log_level_none",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "LOG_LEVEL_NONE"
    })
  })
}, {
  depth: 3,
  url: "#log_level_info",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "LOG_LEVEL_INFO"
    })
  })
}, {
  depth: 3,
  url: "#log_level_warn",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "LOG_LEVEL_WARN"
    })
  })
}, {
  depth: 3,
  url: "#log_level_error",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "LOG_LEVEL_ERROR"
    })
  })
}, {
  depth: 3,
  url: "#log_level_fatal",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "LOG_LEVEL_FATAL"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "enum_loglevel__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "log_level_none",
      children: _jsx(_components.code, {
        children: "LOG_LEVEL_NONE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0x0000）：输出等级为 NONE，仅用于不输出任何日志信息。"
    }), `
`, _jsx(_components.h3, {
      id: "log_level_info",
      children: _jsx(_components.code, {
        children: "LOG_LEVEL_INFO"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（0x0001）：（默认）输出等级为 INFO，输出 ", _jsx(_components.code, {
        children: "FATAL"
      }), "、 ", _jsx(_components.code, {
        children: "ERROR"
      }), "、 ", _jsx(_components.code, {
        children: "WARN"
      }), " 和 ", _jsx(_components.code, {
        children: "INFO"
      }), " 级别的日志信息。建议将日志过滤器设置为该等级。"]
    }), `
`, _jsx(_components.h3, {
      id: "log_level_warn",
      children: _jsx(_components.code, {
        children: "LOG_LEVEL_WARN"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（0x0002）：输出等级为 WARN，输出 ", _jsx(_components.code, {
        children: "FATAL"
      }), "、 ", _jsx(_components.code, {
        children: "ERROR"
      }), " 和 ", _jsx(_components.code, {
        children: "WARN"
      }), " 级别的日志信息。"]
    }), `
`, _jsx(_components.h3, {
      id: "log_level_error",
      children: _jsx(_components.code, {
        children: "LOG_LEVEL_ERROR"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（0x0004）：输出等级为 ERROR，输出 ", _jsx(_components.code, {
        children: "FATAL"
      }), " 和 ", _jsx(_components.code, {
        children: "ERROR"
      }), " 级别的日志信息。"]
    }), `
`, _jsx(_components.h3, {
      id: "log_level_fatal",
      children: _jsx(_components.code, {
        children: "LOG_LEVEL_FATAL"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（0x0008）：输出等级为 FATAL，仅输出 ", _jsx(_components.code, {
        children: "FATAL"
      }), " 级别的日志信息。"]
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
