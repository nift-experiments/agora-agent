import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "EncryptionConfig",
  description: "用于配置内置加密。"
};
export let _markdown = `

<a id="class_encryptionconfig__prototype" />

\`\`\`java
public class EncryptionConfig {
  public EncryptionMode encryptionMode;
  public String encryptionKey;
  public final byte[] encryptionKdfSalt = new byte[32];
  public boolean datastreamEncryptionEnabled;
}
\`\`\`

<a id="class_encryptionconfig__parameters" />

## 属性 [#属性]

### \`encryptionMode\` [#encryptionmode]

内置加密模式。声网建议使用 \`AES_128_GCM2\` 或 \`AES_256_GCM2\` 加密模式，这两种模式支持使用加密盐值以提升安全性。详见 [EncryptionMode](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-encryptionmode)。

### \`encryptionKey\` [#encryptionkey]

加密密钥，类型为字符串，长度无限制。声网建议使用 32 字节长度的密钥。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果未设置加密密钥或将其设置为 \`null\`，则无法使用内置加密，且 SDK 返回值为 \`-2\`。
  </CalloutDescription>
</CalloutContainer>

### \`encryptionKdfSalt\` [#encryptionkdfsalt]

用于加密的盐值，长度为 32 字节。声网建议在服务器端使用 OpenSSL 生成该盐值。详见 Media Stream Encryption。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该参数仅在 \`AES_128_GCM2\` 或 \`AES_256_GCM2\` 加密模式下生效。在此情况下，请确保该参数值不为 0。
  </CalloutDescription>
</CalloutContainer>

### \`datastreamEncryptionEnabled\` [#datastreamencryptionenabled]

是否启用数据流加密：

* true：启用数据流加密。
* false：（默认）不启用数据流加密。
`;
export let structuredData = {
  contents: [{
    heading: "encryptionmode",
    content: "内置加密模式。声网建议使用 `AES_128_GCM2` 或 `AES_256_GCM2` 加密模式，这两种模式支持使用加密盐值以提升安全性。详见 EncryptionMode。"
  }, {
    heading: "encryptionkey",
    content: "加密密钥，类型为字符串，长度无限制。声网建议使用 32 字节长度的密钥。"
  }, {
    heading: "encryptionkey",
    content: "如果未设置加密密钥或将其设置为 `null`，则无法使用内置加密，且 SDK 返回值为 `-2`。"
  }, {
    heading: "encryptionkdfsalt",
    content: "用于加密的盐值，长度为 32 字节。声网建议在服务器端使用 OpenSSL 生成该盐值。详见 Media Stream Encryption。"
  }, {
    heading: "encryptionkdfsalt",
    content: "该参数仅在 `AES_128_GCM2` 或 `AES_256_GCM2` 加密模式下生效。在此情况下，请确保该参数值不为 0。"
  }, {
    heading: "datastreamencryptionenabled",
    content: "是否启用数据流加密："
  }, {
    heading: "datastreamencryptionenabled",
    content: "true：启用数据流加密。"
  }, {
    heading: "datastreamencryptionenabled",
    content: "false：（默认）不启用数据流加密。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "encryptionmode",
    content: "`encryptionMode`"
  }, {
    id: "encryptionkey",
    content: "`encryptionKey`"
  }, {
    id: "encryptionkdfsalt",
    content: "`encryptionKdfSalt`"
  }, {
    id: "datastreamencryptionenabled",
    content: "`datastreamEncryptionEnabled`"
  }]
};
export let toc = [{
  depth: 2,
  url: "#属性",
  title: _jsx(_Fragment, {
    children: "属性"
  })
}, {
  depth: 3,
  url: "#encryptionmode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "encryptionMode"
    })
  })
}, {
  depth: 3,
  url: "#encryptionkey",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "encryptionKey"
    })
  })
}, {
  depth: 3,
  url: "#encryptionkdfsalt",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "encryptionKdfSalt"
    })
  })
}, {
  depth: 3,
  url: "#datastreamencryptionenabled",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "datastreamEncryptionEnabled"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_encryptionconfig__prototype"
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
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " EncryptionConfig"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " EncryptionMode encryptionMode;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String encryptionKey;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " final"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " byte"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] encryptionKdfSalt "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " byte"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "32"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "];"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " datastreamEncryptionEnabled;"
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
`, _jsx("a", {
      id: "class_encryptionconfig__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "encryptionmode",
      children: _jsx(_components.code, {
        children: "encryptionMode"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["内置加密模式。声网建议使用 ", _jsx(_components.code, {
        children: "AES_128_GCM2"
      }), " 或 ", _jsx(_components.code, {
        children: "AES_256_GCM2"
      }), " 加密模式，这两种模式支持使用加密盐值以提升安全性。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-encryptionmode",
        children: "EncryptionMode"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "encryptionkey",
      children: _jsx(_components.code, {
        children: "encryptionKey"
      })
    }), `
`, _jsx(_components.p, {
      children: "加密密钥，类型为字符串，长度无限制。声网建议使用 32 字节长度的密钥。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果未设置加密密钥或将其设置为 ", _jsx(_components.code, {
            children: "null"
          }), "，则无法使用内置加密，且 SDK 返回值为 ", _jsx(_components.code, {
            children: "-2"
          }), "。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "encryptionkdfsalt",
      children: _jsx(_components.code, {
        children: "encryptionKdfSalt"
      })
    }), `
`, _jsx(_components.p, {
      children: "用于加密的盐值，长度为 32 字节。声网建议在服务器端使用 OpenSSL 生成该盐值。详见 Media Stream Encryption。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["该参数仅在 ", _jsx(_components.code, {
            children: "AES_128_GCM2"
          }), " 或 ", _jsx(_components.code, {
            children: "AES_256_GCM2"
          }), " 加密模式下生效。在此情况下，请确保该参数值不为 0。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "datastreamencryptionenabled",
      children: _jsx(_components.code, {
        children: "datastreamEncryptionEnabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用数据流加密："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用数据流加密。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不启用数据流加密。"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
