import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "MusicContentCenterConfiguration",
  description: "配置音乐内容中心。"
};
export let _markdown = `

<a id="class_musiccontentcenterconfiguration__prototype" />

\`\`\`java
public class MusicContentCenterConfiguration {
  public String appId;
  public String token;
  public long mccUid;
  public int maxCacheSize;
  public IMusicContentCenterEventHandler eventHandler;
  public String mccDomain;
}
\`\`\`

<a id="class_musiccontentcenterconfiguration__parameters" />

## 属性 [#属性]

### \`appId\` [#appid]

启用音乐内容中心的项目的 App ID。

### \`token\` [#token]

使用音乐内容中心时用于鉴权的 Token。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    声网建议使用 AccessToken2 作为鉴权方式。详见 \`Deploying the Token Server\`。生成 Token 时，将 \`String\` 类型的 \`mccUid\` 作为 \`uid\` 参数传入。当 Token 即将过期时，可以调用 [renewToken](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken) 提供新的 Token。
  </CalloutDescription>
</CalloutContainer>

### \`mccUid\` [#mccuid]

使用音乐内容中心的用户 ID。可以与加入 RTC 频道时使用的 \`uid\` 相同，但不能为 0。

### \`maxCacheSize\` [#maxcachesize]

可缓存的音乐资源数量不得超过 50 个。

### \`eventHandler\` [#eventhandler]

事件回调接口，详见 [IMusicContentCenterEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcentereventhandler)。
`;
export let structuredData = {
  contents: [{
    heading: "appid",
    content: "启用音乐内容中心的项目的 App ID。"
  }, {
    heading: "token",
    content: "使用音乐内容中心时用于鉴权的 Token。"
  }, {
    heading: "token",
    content: "声网建议使用 AccessToken2 作为鉴权方式。详见 `Deploying the Token Server`。生成 Token 时，将 `String` 类型的 `mccUid` 作为 `uid` 参数传入。当 Token 即将过期时，可以调用 renewToken 提供新的 Token。"
  }, {
    heading: "mccuid",
    content: "使用音乐内容中心的用户 ID。可以与加入 RTC 频道时使用的 `uid` 相同，但不能为 0。"
  }, {
    heading: "maxcachesize",
    content: "可缓存的音乐资源数量不得超过 50 个。"
  }, {
    heading: "eventhandler",
    content: "事件回调接口，详见 IMusicContentCenterEventHandler。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "appid",
    content: "`appId`"
  }, {
    id: "token",
    content: "`token`"
  }, {
    id: "mccuid",
    content: "`mccUid`"
  }, {
    id: "maxcachesize",
    content: "`maxCacheSize`"
  }, {
    id: "eventhandler",
    content: "`eventHandler`"
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
  url: "#appid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "appId"
    })
  })
}, {
  depth: 3,
  url: "#token",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "token"
    })
  })
}, {
  depth: 3,
  url: "#mccuid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mccUid"
    })
  })
}, {
  depth: 3,
  url: "#maxcachesize",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "maxCacheSize"
    })
  })
}, {
  depth: 3,
  url: "#eventhandler",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "eventHandler"
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
    pre: "pre",
    span: "span",
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
      id: "class_musiccontentcenterconfiguration__prototype"
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
              children: " MusicContentCenterConfiguration"
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
              children: " String appId;"
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
              children: " String token;"
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
              children: " long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " mccUid;"
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
              children: " maxCacheSize;"
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
              children: " IMusicContentCenterEventHandler eventHandler;"
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
              children: " String mccDomain;"
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
      id: "class_musiccontentcenterconfiguration__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "appid",
      children: _jsx(_components.code, {
        children: "appId"
      })
    }), `
`, _jsx(_components.p, {
      children: "启用音乐内容中心的项目的 App ID。"
    }), `
`, _jsx(_components.h3, {
      id: "token",
      children: _jsx(_components.code, {
        children: "token"
      })
    }), `
`, _jsx(_components.p, {
      children: "使用音乐内容中心时用于鉴权的 Token。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["声网建议使用 AccessToken2 作为鉴权方式。详见 ", _jsx(_components.code, {
            children: "Deploying the Token Server"
          }), "。生成 Token 时，将 ", _jsx(_components.code, {
            children: "String"
          }), " 类型的 ", _jsx(_components.code, {
            children: "mccUid"
          }), " 作为 ", _jsx(_components.code, {
            children: "uid"
          }), " 参数传入。当 Token 即将过期时，可以调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken",
            children: "renewToken"
          }), " 提供新的 Token。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "mccuid",
      children: _jsx(_components.code, {
        children: "mccUid"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["使用音乐内容中心的用户 ID。可以与加入 RTC 频道时使用的 ", _jsx(_components.code, {
        children: "uid"
      }), " 相同，但不能为 0。"]
    }), `
`, _jsx(_components.h3, {
      id: "maxcachesize",
      children: _jsx(_components.code, {
        children: "maxCacheSize"
      })
    }), `
`, _jsx(_components.p, {
      children: "可缓存的音乐资源数量不得超过 50 个。"
    }), `
`, _jsx(_components.h3, {
      id: "eventhandler",
      children: _jsx(_components.code, {
        children: "eventHandler"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["事件回调接口，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcentereventhandler",
        children: "IMusicContentCenterEventHandler"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
