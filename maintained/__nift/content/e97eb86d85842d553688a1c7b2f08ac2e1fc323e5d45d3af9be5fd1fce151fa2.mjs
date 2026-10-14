import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "EncryptionMode",
  description: "内置加密模式。"
};
export let _markdown = `

<a id="enum_encryptionmode__detailed_desc" />

声网推荐使用 \`AES_128_GCM2\` 或 \`AES_256_GCM2\` 加密模式。这两种模式支持设置 salt（\`encryptionKdfSalt\` ），可提供更高的安全性。

<a id="enum_encryptionmode__parameters" />

## 枚举值 [#枚举值]

### \`AES_128_XTS\` [#aes_128_xts]

（1）：128 位 AES 加密，XTS 模式。

### \`AES_128_ECB\` [#aes_128_ecb]

（2）：128 位 AES 加密，ECB 模式。

### \`AES_256_XTS\` [#aes_256_xts]

（3）：256 位 AES 加密，XTS 模式。

### \`SM4_128_ECB\` [#sm4_128_ecb]

（4）：128 位 SM4 加密，ECB 模式。

### \`AES_128_GCM\` [#aes_128_gcm]

（5）：128 位 AES 加密，GCM 模式。

### \`AES_256_GCM\` [#aes_256_gcm]

（6）：256 位 AES 加密，GCM 模式。

### \`AES_128_GCM2\` [#aes_128_gcm2]

（7）：（默认）128 位 AES 加密，GCM 模式。该模式需设置 salt（\`encryptionKdfSalt\` ）。

### \`AES_256_GCM2\` [#aes_256_gcm2]

（8）：256 位 AES 加密，GCM 模式。该模式需设置 salt（\`encryptionKdfSalt\` ）。

### \`MODE_END\` [#mode_end]

（9）：枚举边界值。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "声网推荐使用 `AES_128_GCM2` 或 `AES_256_GCM2` 加密模式。这两种模式支持设置 salt（`encryptionKdfSalt` ），可提供更高的安全性。"
  }, {
    heading: "aes_128_xts",
    content: "（1）：128 位 AES 加密，XTS 模式。"
  }, {
    heading: "aes_128_ecb",
    content: "（2）：128 位 AES 加密，ECB 模式。"
  }, {
    heading: "aes_256_xts",
    content: "（3）：256 位 AES 加密，XTS 模式。"
  }, {
    heading: "sm4_128_ecb",
    content: "（4）：128 位 SM4 加密，ECB 模式。"
  }, {
    heading: "aes_128_gcm",
    content: "（5）：128 位 AES 加密，GCM 模式。"
  }, {
    heading: "aes_256_gcm",
    content: "（6）：256 位 AES 加密，GCM 模式。"
  }, {
    heading: "aes_128_gcm2",
    content: "（7）：（默认）128 位 AES 加密，GCM 模式。该模式需设置 salt（`encryptionKdfSalt` ）。"
  }, {
    heading: "aes_256_gcm2",
    content: "（8）：256 位 AES 加密，GCM 模式。该模式需设置 salt（`encryptionKdfSalt` ）。"
  }, {
    heading: "mode_end",
    content: "（9）：枚举边界值。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "aes_128_xts",
    content: "`AES_128_XTS`"
  }, {
    id: "aes_128_ecb",
    content: "`AES_128_ECB`"
  }, {
    id: "aes_256_xts",
    content: "`AES_256_XTS`"
  }, {
    id: "sm4_128_ecb",
    content: "`SM4_128_ECB`"
  }, {
    id: "aes_128_gcm",
    content: "`AES_128_GCM`"
  }, {
    id: "aes_256_gcm",
    content: "`AES_256_GCM`"
  }, {
    id: "aes_128_gcm2",
    content: "`AES_128_GCM2`"
  }, {
    id: "aes_256_gcm2",
    content: "`AES_256_GCM2`"
  }, {
    id: "mode_end",
    content: "`MODE_END`"
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
  url: "#aes_128_xts",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AES_128_XTS"
    })
  })
}, {
  depth: 3,
  url: "#aes_128_ecb",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AES_128_ECB"
    })
  })
}, {
  depth: 3,
  url: "#aes_256_xts",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AES_256_XTS"
    })
  })
}, {
  depth: 3,
  url: "#sm4_128_ecb",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "SM4_128_ECB"
    })
  })
}, {
  depth: 3,
  url: "#aes_128_gcm",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AES_128_GCM"
    })
  })
}, {
  depth: 3,
  url: "#aes_256_gcm",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AES_256_GCM"
    })
  })
}, {
  depth: 3,
  url: "#aes_128_gcm2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AES_128_GCM2"
    })
  })
}, {
  depth: 3,
  url: "#aes_256_gcm2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AES_256_GCM2"
    })
  })
}, {
  depth: 3,
  url: "#mode_end",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MODE_END"
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
      id: "enum_encryptionmode__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["声网推荐使用 ", _jsx(_components.code, {
        children: "AES_128_GCM2"
      }), " 或 ", _jsx(_components.code, {
        children: "AES_256_GCM2"
      }), " 加密模式。这两种模式支持设置 salt（", _jsx(_components.code, {
        children: "encryptionKdfSalt"
      }), " ），可提供更高的安全性。"]
    }), `
`, _jsx("a", {
      id: "enum_encryptionmode__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "aes_128_xts",
      children: _jsx(_components.code, {
        children: "AES_128_XTS"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：128 位 AES 加密，XTS 模式。"
    }), `
`, _jsx(_components.h3, {
      id: "aes_128_ecb",
      children: _jsx(_components.code, {
        children: "AES_128_ECB"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：128 位 AES 加密，ECB 模式。"
    }), `
`, _jsx(_components.h3, {
      id: "aes_256_xts",
      children: _jsx(_components.code, {
        children: "AES_256_XTS"
      })
    }), `
`, _jsx(_components.p, {
      children: "（3）：256 位 AES 加密，XTS 模式。"
    }), `
`, _jsx(_components.h3, {
      id: "sm4_128_ecb",
      children: _jsx(_components.code, {
        children: "SM4_128_ECB"
      })
    }), `
`, _jsx(_components.p, {
      children: "（4）：128 位 SM4 加密，ECB 模式。"
    }), `
`, _jsx(_components.h3, {
      id: "aes_128_gcm",
      children: _jsx(_components.code, {
        children: "AES_128_GCM"
      })
    }), `
`, _jsx(_components.p, {
      children: "（5）：128 位 AES 加密，GCM 模式。"
    }), `
`, _jsx(_components.h3, {
      id: "aes_256_gcm",
      children: _jsx(_components.code, {
        children: "AES_256_GCM"
      })
    }), `
`, _jsx(_components.p, {
      children: "（6）：256 位 AES 加密，GCM 模式。"
    }), `
`, _jsx(_components.h3, {
      id: "aes_128_gcm2",
      children: _jsx(_components.code, {
        children: "AES_128_GCM2"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（7）：（默认）128 位 AES 加密，GCM 模式。该模式需设置 salt（", _jsx(_components.code, {
        children: "encryptionKdfSalt"
      }), " ）。"]
    }), `
`, _jsx(_components.h3, {
      id: "aes_256_gcm2",
      children: _jsx(_components.code, {
        children: "AES_256_GCM2"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（8）：256 位 AES 加密，GCM 模式。该模式需设置 salt（", _jsx(_components.code, {
        children: "encryptionKdfSalt"
      }), " ）。"]
    }), `
`, _jsx(_components.h3, {
      id: "mode_end",
      children: _jsx(_components.code, {
        children: "MODE_END"
      })
    }), `
`, _jsx(_components.p, {
      children: "（9）：枚举边界值。"
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
