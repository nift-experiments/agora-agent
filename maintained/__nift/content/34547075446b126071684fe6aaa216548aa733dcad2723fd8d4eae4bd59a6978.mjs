import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "LogConfig",
  description: "用于配置声网 SDK 的日志文件。"
};
export let _markdown = `

<a id="class_logconfig__prototype" />

\`\`\`java
public static class LogConfig {
    public String filePath;
    public int fileSizeInKB;
    public int level = Constants.LogLevel.getValue(Constants.LogLevel.LOG_LEVEL_INFO);
  }
\`\`\`

<a id="class_logconfig__parameters" />

## 属性 [#属性]

### \`filePath\` [#filepath]

日志文件的完整路径。声网建议使用默认日志目录。如果你需要修改默认目录，请确保你指定的目录已存在且具有写入权限。默认路径为 /storage/emulated/0/Android/data/\\<packagename>/files/agorasdk.log。

### \`fileSizeInKB\` [#filesizeinkb]

\`agorasdk.log\` 文件的大小，单位为 KB。取值范围为 \\[128, 20480]，默认值为 2048。

* 当设置值小于 128 时，SDK 会自动调整为 128。
* 当设置值大于 20480 时，SDK 会自动调整为 20480。

### \`level\` [#level]

SDK 日志文件的输出级别，详见 [LogLevel](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-loglevel)。

* 设置为 WARN 时，SDK 会输出 FATAL、 ERROR 和 WARN 级别的日志。
`;
export let structuredData = {
  contents: [{
    heading: "filepath",
    content: "日志文件的完整路径。声网建议使用默认日志目录。如果你需要修改默认目录，请确保你指定的目录已存在且具有写入权限。默认路径为 /storage/emulated/0/Android/data/\\<packagename>/files/agorasdk.log。"
  }, {
    heading: "filesizeinkb",
    content: "`agorasdk.log` 文件的大小，单位为 KB。取值范围为 \\[128, 20480]，默认值为 2048。"
  }, {
    heading: "filesizeinkb",
    content: "当设置值小于 128 时，SDK 会自动调整为 128。"
  }, {
    heading: "filesizeinkb",
    content: "当设置值大于 20480 时，SDK 会自动调整为 20480。"
  }, {
    heading: "level",
    content: "SDK 日志文件的输出级别，详见 LogLevel。"
  }, {
    heading: "level",
    content: "设置为 WARN 时，SDK 会输出 FATAL、 ERROR 和 WARN 级别的日志。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "filepath",
    content: "`filePath`"
  }, {
    id: "filesizeinkb",
    content: "`fileSizeInKB`"
  }, {
    id: "level",
    content: "`level`"
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
  url: "#filepath",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "filePath"
    })
  })
}, {
  depth: 3,
  url: "#filesizeinkb",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "fileSizeInKB"
    })
  })
}, {
  depth: 3,
  url: "#level",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "level"
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
      id: "class_logconfig__prototype"
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
              children: " LogConfig"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String filePath;"
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
              children: " fileSizeInKB;"
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
              children: " level "
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
              children: " Constants.LogLevel."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getValue"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.LogLevel.LOG_LEVEL_INFO);"
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
      id: "class_logconfig__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "filepath",
      children: _jsx(_components.code, {
        children: "filePath"
      })
    }), `
`, _jsx(_components.p, {
      children: "日志文件的完整路径。声网建议使用默认日志目录。如果你需要修改默认目录，请确保你指定的目录已存在且具有写入权限。默认路径为 /storage/emulated/0/Android/data/<packagename>/files/agorasdk.log。"
    }), `
`, _jsx(_components.h3, {
      id: "filesizeinkb",
      children: _jsx(_components.code, {
        children: "fileSizeInKB"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "agorasdk.log"
      }), " 文件的大小，单位为 KB。取值范围为 [128, 20480]，默认值为 2048。"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "当设置值小于 128 时，SDK 会自动调整为 128。"
      }), `
`, _jsx(_components.li, {
        children: "当设置值大于 20480 时，SDK 会自动调整为 20480。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "level",
      children: _jsx(_components.code, {
        children: "level"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["SDK 日志文件的输出级别，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-loglevel",
        children: "LogLevel"
      }), "。"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "设置为 WARN 时，SDK 会输出 FATAL、 ERROR 和 WARN 级别的日志。"
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
