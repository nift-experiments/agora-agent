import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AgoraMetadata",
  description: "媒体元数据。"
};
export let _markdown = `

<a id="class_metadata__prototype" />

\`\`\`java
public class AgoraMetadata {
  public String channelId;
  public int uid;
  public byte[] data;
  public long timeStampMs;
}
\`\`\`

<a id="class_metadata__parameters" />

## 属性 [#属性]

### \`channelId\` [#channelid]

频道名。

### \`uid\` [#uid]

用户 ID。

* 对于接收方：表示发送该 AgoraMetadata 的远端用户 ID。
* 对于发送方：该值无效。

### \`data\` [#data]

接收到的 [AgoraMetadata](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-metadata) 的缓冲区地址。

### \`timeStampMs\` [#timestampms]

[AgoraMetadata](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-metadata) 发送时的时间戳（单位为毫秒）。
`;
export let structuredData = {
  contents: [{
    heading: "channelid",
    content: "频道名。"
  }, {
    heading: "uid",
    content: "用户 ID。"
  }, {
    heading: "uid",
    content: "对于接收方：表示发送该 AgoraMetadata 的远端用户 ID。"
  }, {
    heading: "uid",
    content: "对于发送方：该值无效。"
  }, {
    heading: "data",
    content: "接收到的 AgoraMetadata 的缓冲区地址。"
  }, {
    heading: "timestampms",
    content: "AgoraMetadata 发送时的时间戳（单位为毫秒）。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "channelid",
    content: "`channelId`"
  }, {
    id: "uid",
    content: "`uid`"
  }, {
    id: "data",
    content: "`data`"
  }, {
    id: "timestampms",
    content: "`timeStampMs`"
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
  url: "#channelid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channelId"
    })
  })
}, {
  depth: 3,
  url: "#uid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
  })
}, {
  depth: 3,
  url: "#data",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "data"
    })
  })
}, {
  depth: 3,
  url: "#timestampms",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "timeStampMs"
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
      id: "class_metadata__prototype"
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
              children: " AgoraMetadata"
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
              children: " String channelId;"
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
              children: " uid;"
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
              children: " byte"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] data;"
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
              children: " timeStampMs;"
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
      id: "class_metadata__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "channelid",
      children: _jsx(_components.code, {
        children: "channelId"
      })
    }), `
`, _jsx(_components.p, {
      children: "频道名。"
    }), `
`, _jsx(_components.h3, {
      id: "uid",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户 ID。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "对于接收方：表示发送该 AgoraMetadata 的远端用户 ID。"
      }), `
`, _jsx(_components.li, {
        children: "对于发送方：该值无效。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "data",
      children: _jsx(_components.code, {
        children: "data"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["接收到的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-metadata",
        children: "AgoraMetadata"
      }), " 的缓冲区地址。"]
    }), `
`, _jsx(_components.h3, {
      id: "timestampms",
      children: _jsx(_components.code, {
        children: "timeStampMs"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-metadata",
        children: "AgoraMetadata"
      }), " 发送时的时间戳（单位为毫秒）。"]
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
