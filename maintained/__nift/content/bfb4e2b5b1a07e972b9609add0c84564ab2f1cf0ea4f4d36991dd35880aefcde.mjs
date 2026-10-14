import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "ContentInspectModule",
  description: "用于配置本地截图上传的频率。"
};
export let _markdown = `

<a id="class_contentinspectmodule__prototype" />

\`\`\`java
public static class ContentInspectModule {
    public int type;
    public int interval;
    public Constants.VideoModulePosition position;
  }
\`\`\`

<a id="class_contentinspectmodule__detailed_desc" />

[ContentInspectModule](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-contentinspectmodule) 用于配置本地截图上传模块的功能类型和视频观察器的位置。

<a id="class_contentinspectmodule__parameters" />

## 属性 [#属性]

### \`type\` [#type]

功能模块的类型：

* CONTENT\\_INSPECT\\_TYPE\\_INVALID (0)：（默认）该模块无实际功能。请勿设置为此值。
* CONTENT\\_INSPECT\\_TYPE\\_SUPERVISE (2)：通过声网自研扩展进行本地截图上传，SDK 将对频道中的视频流进行截图并上传。
* CONTENT\\_INSPECT\\_TYPE\\_IMAGE\\_MODERATION (3)：通过声网扩展市场中的扩展进行本地截图上传，SDK 使用声网扩展市场中的视频审核扩展对频道中的视频流进行截图并上传。

### \`interval\` [#interval]

视频截图和上传的时间间隔（单位为秒）。取值应大于 0。默认值为 0，表示 SDK 不进行截图。声网建议设为 10，亦可根据业务需求进行调整。

### \`position\` [#position]

视频观察器的位置，详见 [VideoModulePosition](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videomoduleposition)。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "ContentInspectModule 用于配置本地截图上传模块的功能类型和视频观察器的位置。"
  }, {
    heading: "type",
    content: "功能模块的类型："
  }, {
    heading: "type",
    content: "CONTENT\\_INSPECT\\_TYPE\\_INVALID (0)：（默认）该模块无实际功能。请勿设置为此值。"
  }, {
    heading: "type",
    content: "CONTENT\\_INSPECT\\_TYPE\\_SUPERVISE (2)：通过声网自研扩展进行本地截图上传，SDK 将对频道中的视频流进行截图并上传。"
  }, {
    heading: "type",
    content: "CONTENT\\_INSPECT\\_TYPE\\_IMAGE\\_MODERATION (3)：通过声网扩展市场中的扩展进行本地截图上传，SDK 使用声网扩展市场中的视频审核扩展对频道中的视频流进行截图并上传。"
  }, {
    heading: "interval",
    content: "视频截图和上传的时间间隔（单位为秒）。取值应大于 0。默认值为 0，表示 SDK 不进行截图。声网建议设为 10，亦可根据业务需求进行调整。"
  }, {
    heading: "position",
    content: "视频观察器的位置，详见 VideoModulePosition。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "type",
    content: "`type`"
  }, {
    id: "interval",
    content: "`interval`"
  }, {
    id: "position",
    content: "`position`"
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
  url: "#type",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "type"
    })
  })
}, {
  depth: 3,
  url: "#interval",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "interval"
    })
  })
}, {
  depth: 3,
  url: "#position",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "position"
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
      id: "class_contentinspectmodule__prototype"
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
              children: " static"
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
              children: " ContentInspectModule"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " type;"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " interval;"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Constants.VideoModulePosition position;"
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
      id: "class_contentinspectmodule__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-contentinspectmodule",
        children: "ContentInspectModule"
      }), " 用于配置本地截图上传模块的功能类型和视频观察器的位置。"]
    }), `
`, _jsx("a", {
      id: "class_contentinspectmodule__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "type",
      children: _jsx(_components.code, {
        children: "type"
      })
    }), `
`, _jsx(_components.p, {
      children: "功能模块的类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "CONTENT_INSPECT_TYPE_INVALID (0)：（默认）该模块无实际功能。请勿设置为此值。"
      }), `
`, _jsx(_components.li, {
        children: "CONTENT_INSPECT_TYPE_SUPERVISE (2)：通过声网自研扩展进行本地截图上传，SDK 将对频道中的视频流进行截图并上传。"
      }), `
`, _jsx(_components.li, {
        children: "CONTENT_INSPECT_TYPE_IMAGE_MODERATION (3)：通过声网扩展市场中的扩展进行本地截图上传，SDK 使用声网扩展市场中的视频审核扩展对频道中的视频流进行截图并上传。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "interval",
      children: _jsx(_components.code, {
        children: "interval"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频截图和上传的时间间隔（单位为秒）。取值应大于 0。默认值为 0，表示 SDK 不进行截图。声网建议设为 10，亦可根据业务需求进行调整。"
    }), `
`, _jsx(_components.h3, {
      id: "position",
      children: _jsx(_components.code, {
        children: "position"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频观察器的位置，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videomoduleposition",
        children: "VideoModulePosition"
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
