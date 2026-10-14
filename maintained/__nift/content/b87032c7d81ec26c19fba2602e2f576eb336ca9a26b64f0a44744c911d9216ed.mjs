import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "RenewTokenErrorCode",
  description: "调用 renewToken 后的错误码。"
};
export let _markdown = `

<a id="enum_renewtokenerrorcode__detailed_desc" />

### \`自从\` [#自从]

自 v4.6.0 版本新增。

<a id="enum_renewtokenerrorcode__parameters" />

## 枚举值 [#枚举值]

### \`RENEW_TOKEN_SUCCESS\` [#renew_token_success]

（0）：Token 更新成功。

### \`RENEW_TOKEN_FAILURE\` [#renew_token_failure]

（1）：Token 更新失败。建议生成新的 Token 并重试调用 [renewToken](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken)。

### \`RENEW_TOKEN_TOKEN_EXPIRED\` [#renew_token_token_expired]

（2）：Token 更新失败，原因是传入的 Token 已过期。建议生成一个过期时间更长的 Token 并重试调用 [renewToken](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken)。

### \`RENEW_TOKEN_INVALID_TOKEN\` [#renew_token_invalid_token]

（3）：Token 更新失败，原因是传入的 Token 无效。常见原因包括：项目在声网控制台启用了 App 证书但加入频道时未使用 Token；调用 \`joinChannel\` 时指定的 uid 与生成 Token 时使用的 uid 不一致；调用 \`joinChannel\` 时指定的频道名与生成 Token 时使用的频道名不一致。建议检查 Token 的生成流程，生成新的 Token 并重试调用 [renewToken](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken)。

### \`RENEW_TOKEN_INVALID_CHANNEL_NAME\` [#renew_token_invalid_channel_name]

（4）：Token 更新失败，原因是 Token 中的频道名与当前频道不一致。建议检查频道名，生成新的 Token 并重试调用 [renewToken](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken)。

### \`RENEW_TOKEN_INCONSISTENT_APPID\` [#renew_token_inconsistent_appid]

（5）：Token 更新失败，原因是 Token 中的 App ID 与当前 App ID 不一致。建议检查 App ID，生成新的 Token 并重试调用 [renewToken](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken)。

### \`RENEW_TOKEN_CANCELED_BY_NEW_REQUEST\` [#renew_token_canceled_by_new_request]

（6）：Token 更新被取消，原因是发起了新的请求，前一个请求被取消。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "renew_token_success",
    content: "（0）：Token 更新成功。"
  }, {
    heading: "renew_token_failure",
    content: "（1）：Token 更新失败。建议生成新的 Token 并重试调用 renewToken。"
  }, {
    heading: "renew_token_token_expired",
    content: "（2）：Token 更新失败，原因是传入的 Token 已过期。建议生成一个过期时间更长的 Token 并重试调用 renewToken。"
  }, {
    heading: "renew_token_invalid_token",
    content: "（3）：Token 更新失败，原因是传入的 Token 无效。常见原因包括：项目在声网控制台启用了 App 证书但加入频道时未使用 Token；调用 `joinChannel` 时指定的 uid 与生成 Token 时使用的 uid 不一致；调用 `joinChannel` 时指定的频道名与生成 Token 时使用的频道名不一致。建议检查 Token 的生成流程，生成新的 Token 并重试调用 renewToken。"
  }, {
    heading: "renew_token_invalid_channel_name",
    content: "（4）：Token 更新失败，原因是 Token 中的频道名与当前频道不一致。建议检查频道名，生成新的 Token 并重试调用 renewToken。"
  }, {
    heading: "renew_token_inconsistent_appid",
    content: "（5）：Token 更新失败，原因是 Token 中的 App ID 与当前 App ID 不一致。建议检查 App ID，生成新的 Token 并重试调用 renewToken。"
  }, {
    heading: "renew_token_canceled_by_new_request",
    content: "（6）：Token 更新被取消，原因是发起了新的请求，前一个请求被取消。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "renew_token_success",
    content: "`RENEW_TOKEN_SUCCESS`"
  }, {
    id: "renew_token_failure",
    content: "`RENEW_TOKEN_FAILURE`"
  }, {
    id: "renew_token_token_expired",
    content: "`RENEW_TOKEN_TOKEN_EXPIRED`"
  }, {
    id: "renew_token_invalid_token",
    content: "`RENEW_TOKEN_INVALID_TOKEN`"
  }, {
    id: "renew_token_invalid_channel_name",
    content: "`RENEW_TOKEN_INVALID_CHANNEL_NAME`"
  }, {
    id: "renew_token_inconsistent_appid",
    content: "`RENEW_TOKEN_INCONSISTENT_APPID`"
  }, {
    id: "renew_token_canceled_by_new_request",
    content: "`RENEW_TOKEN_CANCELED_BY_NEW_REQUEST`"
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
  url: "#renew_token_success",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "RENEW_TOKEN_SUCCESS"
    })
  })
}, {
  depth: 3,
  url: "#renew_token_failure",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "RENEW_TOKEN_FAILURE"
    })
  })
}, {
  depth: 3,
  url: "#renew_token_token_expired",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "RENEW_TOKEN_TOKEN_EXPIRED"
    })
  })
}, {
  depth: 3,
  url: "#renew_token_invalid_token",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "RENEW_TOKEN_INVALID_TOKEN"
    })
  })
}, {
  depth: 3,
  url: "#renew_token_invalid_channel_name",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "RENEW_TOKEN_INVALID_CHANNEL_NAME"
    })
  })
}, {
  depth: 3,
  url: "#renew_token_inconsistent_appid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "RENEW_TOKEN_INCONSISTENT_APPID"
    })
  })
}, {
  depth: 3,
  url: "#renew_token_canceled_by_new_request",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "RENEW_TOKEN_CANCELED_BY_NEW_REQUEST"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "enum_renewtokenerrorcode__detailed_desc"
    }), `
`, _jsx(_components.h3, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "enum_renewtokenerrorcode__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "renew_token_success",
      children: _jsx(_components.code, {
        children: "RENEW_TOKEN_SUCCESS"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：Token 更新成功。"
    }), `
`, _jsx(_components.h3, {
      id: "renew_token_failure",
      children: _jsx(_components.code, {
        children: "RENEW_TOKEN_FAILURE"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（1）：Token 更新失败。建议生成新的 Token 并重试调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken",
        children: "renewToken"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "renew_token_token_expired",
      children: _jsx(_components.code, {
        children: "RENEW_TOKEN_TOKEN_EXPIRED"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（2）：Token 更新失败，原因是传入的 Token 已过期。建议生成一个过期时间更长的 Token 并重试调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken",
        children: "renewToken"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "renew_token_invalid_token",
      children: _jsx(_components.code, {
        children: "RENEW_TOKEN_INVALID_TOKEN"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（3）：Token 更新失败，原因是传入的 Token 无效。常见原因包括：项目在声网控制台启用了 App 证书但加入频道时未使用 Token；调用 ", _jsx(_components.code, {
        children: "joinChannel"
      }), " 时指定的 uid 与生成 Token 时使用的 uid 不一致；调用 ", _jsx(_components.code, {
        children: "joinChannel"
      }), " 时指定的频道名与生成 Token 时使用的频道名不一致。建议检查 Token 的生成流程，生成新的 Token 并重试调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken",
        children: "renewToken"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "renew_token_invalid_channel_name",
      children: _jsx(_components.code, {
        children: "RENEW_TOKEN_INVALID_CHANNEL_NAME"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（4）：Token 更新失败，原因是 Token 中的频道名与当前频道不一致。建议检查频道名，生成新的 Token 并重试调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken",
        children: "renewToken"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "renew_token_inconsistent_appid",
      children: _jsx(_components.code, {
        children: "RENEW_TOKEN_INCONSISTENT_APPID"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（5）：Token 更新失败，原因是 Token 中的 App ID 与当前 App ID 不一致。建议检查 App ID，生成新的 Token 并重试调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken",
        children: "renewToken"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "renew_token_canceled_by_new_request",
      children: _jsx(_components.code, {
        children: "RENEW_TOKEN_CANCELED_BY_NEW_REQUEST"
      })
    }), `
`, _jsx(_components.p, {
      children: "（6）：Token 更新被取消，原因是发起了新的请求，前一个请求被取消。"
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
