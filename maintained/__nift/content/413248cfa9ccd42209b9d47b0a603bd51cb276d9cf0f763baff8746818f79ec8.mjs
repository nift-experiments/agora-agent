import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "MultipathStats",
  description: "用于汇总多路径传输中各网络路径的统计信息。"
};
export let _markdown = `

<a id="class_multipathstats__prototype" />

\`\`\`java
public static class MultipathStats {
  public int lanTxBytes;
  public int lanRxBytes;
  public int wifiTxBytes;
  public int wifiRxBytes;
  public int mobileTxBytes;
  public int mobileRxBytes;
  public int activePathNum;
  public PathStats[] pathStats;
}
\`\`\`

<a id="class_multipathstats__detailed_desc" />

### \`自从\` [#自从]

自 v4.6.0 版本新增。

<a id="class_multipathstats__parameters" />

## 属性 [#属性]

### \`lanTxBytes\` [#lantxbytes]

通过局域网发送的字节总数。

### \`lanRxBytes\` [#lanrxbytes]

通过局域网接收的字节总数。

### \`wifiTxBytes\` [#wifitxbytes]

通过 Wi-Fi 发送的字节总数。

### \`wifiRxBytes\` [#wifirxbytes]

通过 Wi-Fi 接收的字节总数。

### \`mobileTxBytes\` [#mobiletxbytes]

通过移动网络发送的字节总数。

### \`mobileRxBytes\` [#mobilerxbytes]

通过移动网络接收的字节总数。

### \`activePathNum\` [#activepathnum]

当前活跃的传输路径数量。

### \`pathStats\` [#pathstats]

每条活跃传输路径的统计信息数组。详见 [PathStats](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-pathstats)。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "lantxbytes",
    content: "通过局域网发送的字节总数。"
  }, {
    heading: "lanrxbytes",
    content: "通过局域网接收的字节总数。"
  }, {
    heading: "wifitxbytes",
    content: "通过 Wi-Fi 发送的字节总数。"
  }, {
    heading: "wifirxbytes",
    content: "通过 Wi-Fi 接收的字节总数。"
  }, {
    heading: "mobiletxbytes",
    content: "通过移动网络发送的字节总数。"
  }, {
    heading: "mobilerxbytes",
    content: "通过移动网络接收的字节总数。"
  }, {
    heading: "activepathnum",
    content: "当前活跃的传输路径数量。"
  }, {
    heading: "pathstats",
    content: "每条活跃传输路径的统计信息数组。详见 PathStats。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "属性",
    content: "属性"
  }, {
    id: "lantxbytes",
    content: "`lanTxBytes`"
  }, {
    id: "lanrxbytes",
    content: "`lanRxBytes`"
  }, {
    id: "wifitxbytes",
    content: "`wifiTxBytes`"
  }, {
    id: "wifirxbytes",
    content: "`wifiRxBytes`"
  }, {
    id: "mobiletxbytes",
    content: "`mobileTxBytes`"
  }, {
    id: "mobilerxbytes",
    content: "`mobileRxBytes`"
  }, {
    id: "activepathnum",
    content: "`activePathNum`"
  }, {
    id: "pathstats",
    content: "`pathStats`"
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
  url: "#lantxbytes",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "lanTxBytes"
    })
  })
}, {
  depth: 3,
  url: "#lanrxbytes",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "lanRxBytes"
    })
  })
}, {
  depth: 3,
  url: "#wifitxbytes",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "wifiTxBytes"
    })
  })
}, {
  depth: 3,
  url: "#wifirxbytes",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "wifiRxBytes"
    })
  })
}, {
  depth: 3,
  url: "#mobiletxbytes",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mobileTxBytes"
    })
  })
}, {
  depth: 3,
  url: "#mobilerxbytes",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mobileRxBytes"
    })
  })
}, {
  depth: 3,
  url: "#activepathnum",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "activePathNum"
    })
  })
}, {
  depth: 3,
  url: "#pathstats",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pathStats"
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_multipathstats__prototype"
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
              children: " MultipathStats"
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
              children: " lanTxBytes;"
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
              children: " lanRxBytes;"
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
              children: " wifiTxBytes;"
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
              children: " wifiRxBytes;"
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
              children: " mobileTxBytes;"
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
              children: " mobileRxBytes;"
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
              children: " activePathNum;"
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
              children: " PathStats"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] pathStats;"
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
      id: "class_multipathstats__detailed_desc"
    }), `
`, _jsx(_components.h3, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "class_multipathstats__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "lantxbytes",
      children: _jsx(_components.code, {
        children: "lanTxBytes"
      })
    }), `
`, _jsx(_components.p, {
      children: "通过局域网发送的字节总数。"
    }), `
`, _jsx(_components.h3, {
      id: "lanrxbytes",
      children: _jsx(_components.code, {
        children: "lanRxBytes"
      })
    }), `
`, _jsx(_components.p, {
      children: "通过局域网接收的字节总数。"
    }), `
`, _jsx(_components.h3, {
      id: "wifitxbytes",
      children: _jsx(_components.code, {
        children: "wifiTxBytes"
      })
    }), `
`, _jsx(_components.p, {
      children: "通过 Wi-Fi 发送的字节总数。"
    }), `
`, _jsx(_components.h3, {
      id: "wifirxbytes",
      children: _jsx(_components.code, {
        children: "wifiRxBytes"
      })
    }), `
`, _jsx(_components.p, {
      children: "通过 Wi-Fi 接收的字节总数。"
    }), `
`, _jsx(_components.h3, {
      id: "mobiletxbytes",
      children: _jsx(_components.code, {
        children: "mobileTxBytes"
      })
    }), `
`, _jsx(_components.p, {
      children: "通过移动网络发送的字节总数。"
    }), `
`, _jsx(_components.h3, {
      id: "mobilerxbytes",
      children: _jsx(_components.code, {
        children: "mobileRxBytes"
      })
    }), `
`, _jsx(_components.p, {
      children: "通过移动网络接收的字节总数。"
    }), `
`, _jsx(_components.h3, {
      id: "activepathnum",
      children: _jsx(_components.code, {
        children: "activePathNum"
      })
    }), `
`, _jsx(_components.p, {
      children: "当前活跃的传输路径数量。"
    }), `
`, _jsx(_components.h3, {
      id: "pathstats",
      children: _jsx(_components.code, {
        children: "pathStats"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["每条活跃传输路径的统计信息数组。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-pathstats",
        children: "PathStats"
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
