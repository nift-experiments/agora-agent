import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "LocalAccessPointConfiguration",
  description: "用于配置本地接入点。"
};
export let _markdown = `

<a id="class_localaccesspointconfiguration__prototype" />

\`\`\`java
public class LocalAccessPointConfiguration {
  public ArrayList<String> ipList = null;
  public ArrayList<String> domainList = null;
  public String verifyDomainName = null;
  public int mode = Constants.LOCAL_RPOXY_CONNECTIVITY_FIRST;
  public boolean disableAut = true;
  public AdvancedConfigInfo advancedConfig = null;
}
\`\`\`

<a id="class_localaccesspointconfiguration__parameters" />

## 属性 [#属性]

### \`ipList\` [#iplist]

本地接入点的内网 IP 地址列表。 \`ipList\` 或 \`domainList\` 至少需提供一个。

### \`domainList\` [#domainlist]

本地接入点的域名列表。SDK 会根据你提供的域名解析本地接入点的 IP 地址，解析超时时间为 10 秒。 \`ipList\` 或 \`domainList\` 至少需提供一个。如果同时指定了 IP 地址和域名，SDK 会合并并去重解析得到的 IP 地址和指定的 IP 地址，然后随机连接一个 IP 地址以实现负载均衡。

### \`verifyDomainName\` [#verifydomainname]

内网证书校验域名。如果该值为 \`null\`，SDK 默认使用 \`secure-edge.local\` 作为证书校验域名。

### \`mode\` [#mode]

连接模式：

* LOCAL\\_RPOXY\\_CONNECTIVITY\\_FIRST （0）：SDK 优先尝试连接指定的声网私有媒体服务器；如果连接失败，则连接声网 SD-RTN™。
* LOCAL\\_RPOXY\\_LOCAL\\_ONLY （1）：SDK 只连接指定的声网私有媒体服务器。

### \`disableAut\` [#disableaut]

是否禁用 vos-aut：

* true：（默认）禁用 vos-aut。
* false：不禁用 vos-aut。

### \`advancedConfig\` [#advancedconfig]

本地接入点的高级配置项。详见 [AdvancedConfigInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-advancedconfiginfo)。
`;
export let structuredData = {
  contents: [{
    heading: "iplist",
    content: "本地接入点的内网 IP 地址列表。 `ipList` 或 `domainList` 至少需提供一个。"
  }, {
    heading: "domainlist",
    content: "本地接入点的域名列表。SDK 会根据你提供的域名解析本地接入点的 IP 地址，解析超时时间为 10 秒。 `ipList` 或 `domainList` 至少需提供一个。如果同时指定了 IP 地址和域名，SDK 会合并并去重解析得到的 IP 地址和指定的 IP 地址，然后随机连接一个 IP 地址以实现负载均衡。"
  }, {
    heading: "verifydomainname",
    content: "内网证书校验域名。如果该值为 `null`，SDK 默认使用 `secure-edge.local` 作为证书校验域名。"
  }, {
    heading: "mode",
    content: "连接模式："
  }, {
    heading: "mode",
    content: "LOCAL\\_RPOXY\\_CONNECTIVITY\\_FIRST （0）：SDK 优先尝试连接指定的声网私有媒体服务器；如果连接失败，则连接声网 SD-RTN™。"
  }, {
    heading: "mode",
    content: "LOCAL\\_RPOXY\\_LOCAL\\_ONLY （1）：SDK 只连接指定的声网私有媒体服务器。"
  }, {
    heading: "disableaut",
    content: "是否禁用 vos-aut："
  }, {
    heading: "disableaut",
    content: "true：（默认）禁用 vos-aut。"
  }, {
    heading: "disableaut",
    content: "false：不禁用 vos-aut。"
  }, {
    heading: "advancedconfig",
    content: "本地接入点的高级配置项。详见 AdvancedConfigInfo。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "iplist",
    content: "`ipList`"
  }, {
    id: "domainlist",
    content: "`domainList`"
  }, {
    id: "verifydomainname",
    content: "`verifyDomainName`"
  }, {
    id: "mode",
    content: "`mode`"
  }, {
    id: "disableaut",
    content: "`disableAut`"
  }, {
    id: "advancedconfig",
    content: "`advancedConfig`"
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
  url: "#iplist",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ipList"
    })
  })
}, {
  depth: 3,
  url: "#domainlist",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "domainList"
    })
  })
}, {
  depth: 3,
  url: "#verifydomainname",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "verifyDomainName"
    })
  })
}, {
  depth: 3,
  url: "#mode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mode"
    })
  })
}, {
  depth: 3,
  url: "#disableaut",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "disableAut"
    })
  })
}, {
  depth: 3,
  url: "#advancedconfig",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "advancedConfig"
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_localaccesspointconfiguration__prototype"
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
              children: " LocalAccessPointConfiguration"
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
              children: " ArrayList<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "> ipList "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " null"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
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
              children: " ArrayList<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "> domainList "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " null"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
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
              children: " String verifyDomainName "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " null"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " mode "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Constants.LOCAL_RPOXY_CONNECTIVITY_FIRST;"
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
              children: " disableAut "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " true"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
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
              children: " AdvancedConfigInfo advancedConfig "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " null"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
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
      id: "class_localaccesspointconfiguration__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "iplist",
      children: _jsx(_components.code, {
        children: "ipList"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["本地接入点的内网 IP 地址列表。 ", _jsx(_components.code, {
        children: "ipList"
      }), " 或 ", _jsx(_components.code, {
        children: "domainList"
      }), " 至少需提供一个。"]
    }), `
`, _jsx(_components.h3, {
      id: "domainlist",
      children: _jsx(_components.code, {
        children: "domainList"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["本地接入点的域名列表。SDK 会根据你提供的域名解析本地接入点的 IP 地址，解析超时时间为 10 秒。 ", _jsx(_components.code, {
        children: "ipList"
      }), " 或 ", _jsx(_components.code, {
        children: "domainList"
      }), " 至少需提供一个。如果同时指定了 IP 地址和域名，SDK 会合并并去重解析得到的 IP 地址和指定的 IP 地址，然后随机连接一个 IP 地址以实现负载均衡。"]
    }), `
`, _jsx(_components.h3, {
      id: "verifydomainname",
      children: _jsx(_components.code, {
        children: "verifyDomainName"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["内网证书校验域名。如果该值为 ", _jsx(_components.code, {
        children: "null"
      }), "，SDK 默认使用 ", _jsx(_components.code, {
        children: "secure-edge.local"
      }), " 作为证书校验域名。"]
    }), `
`, _jsx(_components.h3, {
      id: "mode",
      children: _jsx(_components.code, {
        children: "mode"
      })
    }), `
`, _jsx(_components.p, {
      children: "连接模式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "LOCAL_RPOXY_CONNECTIVITY_FIRST （0）：SDK 优先尝试连接指定的声网私有媒体服务器；如果连接失败，则连接声网 SD-RTN™。"
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_RPOXY_LOCAL_ONLY （1）：SDK 只连接指定的声网私有媒体服务器。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "disableaut",
      children: _jsx(_components.code, {
        children: "disableAut"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否禁用 vos-aut："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：（默认）禁用 vos-aut。"
      }), `
`, _jsx(_components.li, {
        children: "false：不禁用 vos-aut。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "advancedconfig",
      children: _jsx(_components.code, {
        children: "advancedConfig"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["本地接入点的高级配置项。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-advancedconfiginfo",
        children: "AdvancedConfigInfo"
      }), "。"]
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
