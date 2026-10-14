import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "RecorderInfo",
  description: "用于记录录制文件的信息。"
};
export let _markdown = `

<a id="class_recorderinfo__prototype" />

\`\`\`java
public class RecorderInfo {
  public String fileName;
  public int durationMs;
  public int fileSize;
}
\`\`\`

<a id="class_recorderinfo__detailed_desc" />

### \`自从\` [#自从]

自 v3.5.2 版本新增。

<a id="class_recorderinfo__parameters" />

## 属性 [#属性]

### \`fileName\` [#filename]

录制文件的绝对存储路径。

### \`durationMs\` [#durationms]

录制文件的时长，单位为毫秒。

### \`fileSize\` [#filesize]

录制文件的大小，单位为字节。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v3.5.2 版本新增。"
  }, {
    heading: "filename",
    content: "录制文件的绝对存储路径。"
  }, {
    heading: "durationms",
    content: "录制文件的时长，单位为毫秒。"
  }, {
    heading: "filesize",
    content: "录制文件的大小，单位为字节。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "属性",
    content: "属性"
  }, {
    id: "filename",
    content: "`fileName`"
  }, {
    id: "durationms",
    content: "`durationMs`"
  }, {
    id: "filesize",
    content: "`fileSize`"
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
  url: "#属性",
  title: _jsx(_Fragment, {
    children: "属性"
  })
}, {
  depth: 3,
  url: "#filename",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "fileName"
    })
  })
}, {
  depth: 3,
  url: "#durationms",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "durationMs"
    })
  })
}, {
  depth: 3,
  url: "#filesize",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "fileSize"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_recorderinfo__prototype"
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
              children: " RecorderInfo"
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
              children: " String fileName;"
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
              children: " durationMs;"
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
              children: " fileSize;"
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
      id: "class_recorderinfo__detailed_desc"
    }), `
`, _jsx(_components.h3, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.5.2 版本新增。"
    }), `
`, _jsx("a", {
      id: "class_recorderinfo__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "filename",
      children: _jsx(_components.code, {
        children: "fileName"
      })
    }), `
`, _jsx(_components.p, {
      children: "录制文件的绝对存储路径。"
    }), `
`, _jsx(_components.h3, {
      id: "durationms",
      children: _jsx(_components.code, {
        children: "durationMs"
      })
    }), `
`, _jsx(_components.p, {
      children: "录制文件的时长，单位为毫秒。"
    }), `
`, _jsx(_components.h3, {
      id: "filesize",
      children: _jsx(_components.code, {
        children: "fileSize"
      })
    }), `
`, _jsx(_components.p, {
      children: "录制文件的大小，单位为字节。"
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
