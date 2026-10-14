import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "ErrorCode",
  description: "与 RTE 相关的状态码和错误码。"
};
export let _markdown = `

<a id="enum_rteerrorcode__detailed_desc" />

### \`自从\` [#自从]

自 v4.4.0 版本新增。

<a id="enum_rteerrorcode__parameters" />

## 枚举值 [#枚举值]

### \`OK\` [#ok]

（0）：操作成功。

### \`DEFAULT\` [#default]

（1）：通用错误，错误原因未明确分类。

### \`INVALID_ARGUMENT\` [#invalid_argument]

（2）：方法中设置了无效参数，例如参数包含非法字符，或传入的对象为 null。请重新设置参数。

### \`INVALID_OPERATION\` [#invalid_operation]

（3）：当前状态不支持该操作，例如对象已被销毁或无效。

### \`NETWORK_ERROR\` [#network_error]

（4）：网络错误。请检查网络连接。

### \`AUTHENTICATION_FAILED\` [#authentication_failed]

（5）：Token 鉴权失败，可能原因包括 Token 无效或已过期。请检查 Token。

### \`STREAM_NOT_FOUND\` [#stream_not_found]

（6）：未找到媒体流，例如加入频道后超过 10 秒未收到主播的媒体流。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "ok",
    content: "（0）：操作成功。"
  }, {
    heading: "default",
    content: "（1）：通用错误，错误原因未明确分类。"
  }, {
    heading: "invalid_argument",
    content: "（2）：方法中设置了无效参数，例如参数包含非法字符，或传入的对象为 null。请重新设置参数。"
  }, {
    heading: "invalid_operation",
    content: "（3）：当前状态不支持该操作，例如对象已被销毁或无效。"
  }, {
    heading: "network_error",
    content: "（4）：网络错误。请检查网络连接。"
  }, {
    heading: "authentication_failed",
    content: "（5）：Token 鉴权失败，可能原因包括 Token 无效或已过期。请检查 Token。"
  }, {
    heading: "stream_not_found",
    content: "（6）：未找到媒体流，例如加入频道后超过 10 秒未收到主播的媒体流。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "ok",
    content: "`OK`"
  }, {
    id: "default",
    content: "`DEFAULT`"
  }, {
    id: "invalid_argument",
    content: "`INVALID_ARGUMENT`"
  }, {
    id: "invalid_operation",
    content: "`INVALID_OPERATION`"
  }, {
    id: "network_error",
    content: "`NETWORK_ERROR`"
  }, {
    id: "authentication_failed",
    content: "`AUTHENTICATION_FAILED`"
  }, {
    id: "stream_not_found",
    content: "`STREAM_NOT_FOUND`"
  }]
};
export let toc = [{
  depth: 3,
  url: "#自从",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 2,
  url: "#枚举值",
  title: _jsx(_Fragment, {
    children: "枚举值"
  })
}, {
  depth: 3,
  url: "#ok",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "OK"
    })
  })
}, {
  depth: 3,
  url: "#default",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "DEFAULT"
    })
  })
}, {
  depth: 3,
  url: "#invalid_argument",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "INVALID_ARGUMENT"
    })
  })
}, {
  depth: 3,
  url: "#invalid_operation",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "INVALID_OPERATION"
    })
  })
}, {
  depth: 3,
  url: "#network_error",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "NETWORK_ERROR"
    })
  })
}, {
  depth: 3,
  url: "#authentication_failed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AUTHENTICATION_FAILED"
    })
  })
}, {
  depth: 3,
  url: "#stream_not_found",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "STREAM_NOT_FOUND"
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
      id: "enum_rteerrorcode__detailed_desc"
    }), `
`, _jsx(_components.h3, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "enum_rteerrorcode__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "ok",
      children: _jsx(_components.code, {
        children: "OK"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：操作成功。"
    }), `
`, _jsx(_components.h3, {
      id: "default",
      children: _jsx(_components.code, {
        children: "DEFAULT"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：通用错误，错误原因未明确分类。"
    }), `
`, _jsx(_components.h3, {
      id: "invalid_argument",
      children: _jsx(_components.code, {
        children: "INVALID_ARGUMENT"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：方法中设置了无效参数，例如参数包含非法字符，或传入的对象为 null。请重新设置参数。"
    }), `
`, _jsx(_components.h3, {
      id: "invalid_operation",
      children: _jsx(_components.code, {
        children: "INVALID_OPERATION"
      })
    }), `
`, _jsx(_components.p, {
      children: "（3）：当前状态不支持该操作，例如对象已被销毁或无效。"
    }), `
`, _jsx(_components.h3, {
      id: "network_error",
      children: _jsx(_components.code, {
        children: "NETWORK_ERROR"
      })
    }), `
`, _jsx(_components.p, {
      children: "（4）：网络错误。请检查网络连接。"
    }), `
`, _jsx(_components.h3, {
      id: "authentication_failed",
      children: _jsx(_components.code, {
        children: "AUTHENTICATION_FAILED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（5）：Token 鉴权失败，可能原因包括 Token 无效或已过期。请检查 Token。"
    }), `
`, _jsx(_components.h3, {
      id: "stream_not_found",
      children: _jsx(_components.code, {
        children: "STREAM_NOT_FOUND"
      })
    }), `
`, _jsx(_components.p, {
      children: "（6）：未找到媒体流，例如加入频道后超过 10 秒未收到主播的媒体流。"
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
