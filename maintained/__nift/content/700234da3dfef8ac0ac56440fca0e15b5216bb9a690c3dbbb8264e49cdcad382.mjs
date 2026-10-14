import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "MusicContentCenterStateReason",
  description: "音乐内容中心的请求状态码。"
};
export let _markdown = `

<a id="class_musiccontentcenterstatereason__prototype" />

\`\`\`java
class MusicContentCenterStateReason {
    public static final int MUSIC_CONTENT_CENTER_STATE_REASON_OK = 0;
    public static final int MUSIC_CONTENT_CENTER_STATE_REASON_ERROR = 1;
    public static final int MUSIC_CONTENT_CENTER_STATE_REASON_GATEWAY = 2;
    public static final int MUSIC_CONTENT_CENTER_STATE_REASON_PERMISSION_AND_RESOURCE = 3;
    public static final int MUSIC_CONTENT_CENTER_STATE_REASON_INTERNAL_DATA_PARSE = 4;
    public static final int MUSIC_CONTENT_CENTER_STATE_REASON_MUSIC_LOADING = 5;
    public static final int MUSIC_CONTENT_CENTER_STATE_REASON_MUSIC_DECRYPTION = 6;
    public static final int MUSIC_CONTENT_CENTER_STATE_REASON_HTTP_INTERNAL = 7;
  }
\`\`\`

<a id="class_musiccontentcenterstatereason__parameters" />

## 属性 [#属性]

### \`MUSIC_CONTENT_CENTER_STATE_REASON_OK\` [#music_content_center_state_reason_ok]

0：请求成功。

### \`MUSIC_CONTENT_CENTER_STATE_REASON_ERROR\` [#music_content_center_state_reason_error]

1：通用错误，无具体原因归属。

### \`MUSIC_CONTENT_CENTER_STATE_REASON_GATEWAY\` [#music_content_center_state_reason_gateway]

2：网关错误。可能原因包括：

* 当前临时 Token 已过期，请重新生成临时 Token；
* 所提供的临时 Token 无效，请确保使用的是 RTM 临时 Token；
* 网络错误，请检查你的网络连接。

### \`MUSIC_CONTENT_CENTER_STATE_REASON_PERMISSION_AND_RESOURCE\` [#music_content_center_state_reason_permission_and_resource]

3：权限错误或音乐资源不存在。请确保你的项目已开通声网版权音乐内容中心权限。如需帮助，请[联系技术支持](https://ticket.shengwang.cn/)。

### \`MUSIC_CONTENT_CENTER_STATE_REASON_INTERNAL_DATA_PARSE\` [#music_content_center_state_reason_internal_data_parse]

4：内部数据解析错误。请[联系技术支持](https://ticket.shengwang.cn/)。

### \`MUSIC_CONTENT_CENTER_STATE_REASON_MUSIC_LOADING\` [#music_content_center_state_reason_music_loading]

5：加载音乐资源时发生错误。请[联系技术支持](https://ticket.shengwang.cn/)。

### \`MUSIC_CONTENT_CENTER_STATE_REASON_MUSIC_DECRYPTION\` [#music_content_center_state_reason_music_decryption]

6：解密音乐资源时发生错误。请[联系技术支持](https://ticket.shengwang.cn/)。

### \`MUSIC_CONTENT_CENTER_STATE_REASON_HTTP_INTERNAL\` [#music_content_center_state_reason_http_internal]

7：发生内部 HTTP 错误，请稍后重试。
`;
export let structuredData = {
  contents: [{
    heading: "music_content_center_state_reason_ok",
    content: "0：请求成功。"
  }, {
    heading: "music_content_center_state_reason_error",
    content: "1：通用错误，无具体原因归属。"
  }, {
    heading: "music_content_center_state_reason_gateway",
    content: "2：网关错误。可能原因包括："
  }, {
    heading: "music_content_center_state_reason_gateway",
    content: "当前临时 Token 已过期，请重新生成临时 Token；"
  }, {
    heading: "music_content_center_state_reason_gateway",
    content: "所提供的临时 Token 无效，请确保使用的是 RTM 临时 Token；"
  }, {
    heading: "music_content_center_state_reason_gateway",
    content: "网络错误，请检查你的网络连接。"
  }, {
    heading: "music_content_center_state_reason_permission_and_resource",
    content: "3：权限错误或音乐资源不存在。请确保你的项目已开通声网版权音乐内容中心权限。如需帮助，请联系技术支持。"
  }, {
    heading: "music_content_center_state_reason_internal_data_parse",
    content: "4：内部数据解析错误。请联系技术支持。"
  }, {
    heading: "music_content_center_state_reason_music_loading",
    content: "5：加载音乐资源时发生错误。请联系技术支持。"
  }, {
    heading: "music_content_center_state_reason_music_decryption",
    content: "6：解密音乐资源时发生错误。请联系技术支持。"
  }, {
    heading: "music_content_center_state_reason_http_internal",
    content: "7：发生内部 HTTP 错误，请稍后重试。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "music_content_center_state_reason_ok",
    content: "`MUSIC_CONTENT_CENTER_STATE_REASON_OK`"
  }, {
    id: "music_content_center_state_reason_error",
    content: "`MUSIC_CONTENT_CENTER_STATE_REASON_ERROR`"
  }, {
    id: "music_content_center_state_reason_gateway",
    content: "`MUSIC_CONTENT_CENTER_STATE_REASON_GATEWAY`"
  }, {
    id: "music_content_center_state_reason_permission_and_resource",
    content: "`MUSIC_CONTENT_CENTER_STATE_REASON_PERMISSION_AND_RESOURCE`"
  }, {
    id: "music_content_center_state_reason_internal_data_parse",
    content: "`MUSIC_CONTENT_CENTER_STATE_REASON_INTERNAL_DATA_PARSE`"
  }, {
    id: "music_content_center_state_reason_music_loading",
    content: "`MUSIC_CONTENT_CENTER_STATE_REASON_MUSIC_LOADING`"
  }, {
    id: "music_content_center_state_reason_music_decryption",
    content: "`MUSIC_CONTENT_CENTER_STATE_REASON_MUSIC_DECRYPTION`"
  }, {
    id: "music_content_center_state_reason_http_internal",
    content: "`MUSIC_CONTENT_CENTER_STATE_REASON_HTTP_INTERNAL`"
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
  url: "#music_content_center_state_reason_ok",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MUSIC_CONTENT_CENTER_STATE_REASON_OK"
    })
  })
}, {
  depth: 3,
  url: "#music_content_center_state_reason_error",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MUSIC_CONTENT_CENTER_STATE_REASON_ERROR"
    })
  })
}, {
  depth: 3,
  url: "#music_content_center_state_reason_gateway",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MUSIC_CONTENT_CENTER_STATE_REASON_GATEWAY"
    })
  })
}, {
  depth: 3,
  url: "#music_content_center_state_reason_permission_and_resource",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MUSIC_CONTENT_CENTER_STATE_REASON_PERMISSION_AND_RESOURCE"
    })
  })
}, {
  depth: 3,
  url: "#music_content_center_state_reason_internal_data_parse",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MUSIC_CONTENT_CENTER_STATE_REASON_INTERNAL_DATA_PARSE"
    })
  })
}, {
  depth: 3,
  url: "#music_content_center_state_reason_music_loading",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MUSIC_CONTENT_CENTER_STATE_REASON_MUSIC_LOADING"
    })
  })
}, {
  depth: 3,
  url: "#music_content_center_state_reason_music_decryption",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MUSIC_CONTENT_CENTER_STATE_REASON_MUSIC_DECRYPTION"
    })
  })
}, {
  depth: 3,
  url: "#music_content_center_state_reason_http_internal",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MUSIC_CONTENT_CENTER_STATE_REASON_HTTP_INTERNAL"
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
      id: "class_musiccontentcenterstatereason__prototype"
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
              children: "class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " MusicContentCenterStateReason"
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
              children: "    public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " static"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " MUSIC_CONTENT_CENTER_STATE_REASON_OK "
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
              children: " 0"
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
              children: "    public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " static"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " MUSIC_CONTENT_CENTER_STATE_REASON_ERROR "
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
              children: " 1"
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
              children: "    public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " static"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " MUSIC_CONTENT_CENTER_STATE_REASON_GATEWAY "
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
              children: " 2"
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
              children: "    public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " static"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " MUSIC_CONTENT_CENTER_STATE_REASON_PERMISSION_AND_RESOURCE "
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
              children: " 3"
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
              children: "    public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " static"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " MUSIC_CONTENT_CENTER_STATE_REASON_INTERNAL_DATA_PARSE "
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
              children: " 4"
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
              children: "    public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " static"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " MUSIC_CONTENT_CENTER_STATE_REASON_MUSIC_LOADING "
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
              children: " 5"
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
              children: "    public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " static"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " MUSIC_CONTENT_CENTER_STATE_REASON_MUSIC_DECRYPTION "
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
              children: " 6"
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
              children: "    public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " static"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " MUSIC_CONTENT_CENTER_STATE_REASON_HTTP_INTERNAL "
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
              children: " 7"
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
              children: "  }"
            })
          })]
        })
      })
    }), `
`, _jsx("a", {
      id: "class_musiccontentcenterstatereason__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "music_content_center_state_reason_ok",
      children: _jsx(_components.code, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_OK"
      })
    }), `
`, _jsx(_components.p, {
      children: "0：请求成功。"
    }), `
`, _jsx(_components.h3, {
      id: "music_content_center_state_reason_error",
      children: _jsx(_components.code, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_ERROR"
      })
    }), `
`, _jsx(_components.p, {
      children: "1：通用错误，无具体原因归属。"
    }), `
`, _jsx(_components.h3, {
      id: "music_content_center_state_reason_gateway",
      children: _jsx(_components.code, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_GATEWAY"
      })
    }), `
`, _jsx(_components.p, {
      children: "2：网关错误。可能原因包括："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "当前临时 Token 已过期，请重新生成临时 Token；"
      }), `
`, _jsx(_components.li, {
        children: "所提供的临时 Token 无效，请确保使用的是 RTM 临时 Token；"
      }), `
`, _jsx(_components.li, {
        children: "网络错误，请检查你的网络连接。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "music_content_center_state_reason_permission_and_resource",
      children: _jsx(_components.code, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_PERMISSION_AND_RESOURCE"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["3：权限错误或音乐资源不存在。请确保你的项目已开通声网版权音乐内容中心权限。如需帮助，请", _jsx(_components.a, {
        href: "https://ticket.shengwang.cn/",
        children: "联系技术支持"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "music_content_center_state_reason_internal_data_parse",
      children: _jsx(_components.code, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_INTERNAL_DATA_PARSE"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["4：内部数据解析错误。请", _jsx(_components.a, {
        href: "https://ticket.shengwang.cn/",
        children: "联系技术支持"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "music_content_center_state_reason_music_loading",
      children: _jsx(_components.code, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_MUSIC_LOADING"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["5：加载音乐资源时发生错误。请", _jsx(_components.a, {
        href: "https://ticket.shengwang.cn/",
        children: "联系技术支持"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "music_content_center_state_reason_music_decryption",
      children: _jsx(_components.code, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_MUSIC_DECRYPTION"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["6：解密音乐资源时发生错误。请", _jsx(_components.a, {
        href: "https://ticket.shengwang.cn/",
        children: "联系技术支持"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "music_content_center_state_reason_http_internal",
      children: _jsx(_components.code, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_HTTP_INTERNAL"
      })
    }), `
`, _jsx(_components.p, {
      children: "7：发生内部 HTTP 错误，请稍后重试。"
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
