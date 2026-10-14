import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "CodecCapInfo",
  description: "表示 SDK 的编解码能力。"
};
export let _markdown = `

<a id="class_codeccapinfo__prototype" />

\`\`\`java
public class CodecCapInfo {
  public int codecType;
  public int codecCapMask;
  public CodecCapLevels codecLevels;
}
\`\`\`

<a id="class_codeccapinfo__parameters" />

## 属性 [#属性]

### \`codecType\` [#codectype]

视频编解码类型：

* 1：VP8。
* 2：H.264。
* 3：（默认）H.265。

### \`codecCapMask\` [#codeccapmask]

编解码类型的位掩码：

* (0)：设备不支持编码或解码。
* (1 \\<\\< 0)：设备支持硬件解码。
* (1 \\<\\< 1)：设备支持硬件编码。
* (1 \\<\\< 2)：设备支持软件解码。
* (1 \\<\\< 3)：设备支持软件编码。

### \`codecLevels\` [#codeclevels]

编解码能力。详见 [CodecCapLevels](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-codeccaplevels)。
`;
export let structuredData = {
  contents: [{
    heading: "codectype",
    content: "视频编解码类型："
  }, {
    heading: "codectype",
    content: "1：VP8。"
  }, {
    heading: "codectype",
    content: "2：H.264。"
  }, {
    heading: "codectype",
    content: "3：（默认）H.265。"
  }, {
    heading: "codeccapmask",
    content: "编解码类型的位掩码："
  }, {
    heading: "codeccapmask",
    content: "(0)：设备不支持编码或解码。"
  }, {
    heading: "codeccapmask",
    content: "(1 \\<\\< 0)：设备支持硬件解码。"
  }, {
    heading: "codeccapmask",
    content: "(1 \\<\\< 1)：设备支持硬件编码。"
  }, {
    heading: "codeccapmask",
    content: "(1 \\<\\< 2)：设备支持软件解码。"
  }, {
    heading: "codeccapmask",
    content: "(1 \\<\\< 3)：设备支持软件编码。"
  }, {
    heading: "codeclevels",
    content: "编解码能力。详见 CodecCapLevels。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "codectype",
    content: "`codecType`"
  }, {
    id: "codeccapmask",
    content: "`codecCapMask`"
  }, {
    id: "codeclevels",
    content: "`codecLevels`"
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
  url: "#codectype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "codecType"
    })
  })
}, {
  depth: 3,
  url: "#codeccapmask",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "codecCapMask"
    })
  })
}, {
  depth: 3,
  url: "#codeclevels",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "codecLevels"
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
      id: "class_codeccapinfo__prototype"
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
              children: " CodecCapInfo"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " codecType;"
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
              children: " codecCapMask;"
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
              children: " CodecCapLevels codecLevels;"
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
      id: "class_codeccapinfo__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "codectype",
      children: _jsx(_components.code, {
        children: "codecType"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频编解码类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：VP8。"
      }), `
`, _jsx(_components.li, {
        children: "2：H.264。"
      }), `
`, _jsx(_components.li, {
        children: "3：（默认）H.265。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "codeccapmask",
      children: _jsx(_components.code, {
        children: "codecCapMask"
      })
    }), `
`, _jsx(_components.p, {
      children: "编解码类型的位掩码："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "(0)：设备不支持编码或解码。"
      }), `
`, _jsx(_components.li, {
        children: "(1 << 0)：设备支持硬件解码。"
      }), `
`, _jsx(_components.li, {
        children: "(1 << 1)：设备支持硬件编码。"
      }), `
`, _jsx(_components.li, {
        children: "(1 << 2)：设备支持软件解码。"
      }), `
`, _jsx(_components.li, {
        children: "(1 << 3)：设备支持软件编码。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "codeclevels",
      children: _jsx(_components.code, {
        children: "codecLevels"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["编解码能力。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-codeccaplevels",
        children: "CodecCapLevels"
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
