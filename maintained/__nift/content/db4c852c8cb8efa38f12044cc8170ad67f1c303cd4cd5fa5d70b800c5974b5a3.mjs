import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "DataStreamConfig",
  description: "用于设置数据流的同步与顺序行为。"
};
export let _markdown = `

<a id="class_datastreamconfig__prototype" />

\`\`\`java
public class DataStreamConfig {
  public boolean syncWithAudio = false;
  public boolean ordered = false;
}
\`\`\`

<a id="class_datastreamconfig__detailed_desc" />

下表展示了在不同参数组合下 SDK 的行为：

| \`syncWithAudio\` | \`ordered\` | SDK 行为                                                                                                                                           |
| --------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| false           | false     | 接收端接收到数据包后，SDK 会立即触发 [onStreamMessage](/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessage) 回调。 |
| true            | false     | 如果数据包延迟在音频延迟范围内，SDK 会在同步的音频播放时触发回调；否则立即触发回调。                                                                                                     |
| false           | true      | 如果数据包延迟小于 5 秒，SDK 会纠正其顺序；否则丢弃该数据包。                                                                                                               |
| true            | true      | 如果数据包延迟在音频延迟范围内，SDK 会纠正其顺序；否则丢弃该数据包。                                                                                                             |

<a id="class_datastreamconfig__parameters" />

## 属性 [#属性]

### \`syncWithAudio\` [#syncwithaudio]

是否将数据包与发布的音频包同步。

* true：数据包与音频包同步，适用于歌词同步等特殊场景。
* false：数据包不与音频包同步，适用于需要数据包立即送达接收端的场景。

### \`ordered\` [#ordered]

是否确保接收端按发送顺序接收数据。

* true：接收端按发送顺序接收数据。
* false：不保证接收顺序。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "下表展示了在不同参数组合下 SDK 的行为："
  }, {
    heading: undefined,
    content: "`syncWithAudio`"
  }, {
    heading: undefined,
    content: "`ordered`"
  }, {
    heading: undefined,
    content: "SDK 行为"
  }, {
    heading: undefined,
    content: "false"
  }, {
    heading: undefined,
    content: "false"
  }, {
    heading: undefined,
    content: "接收端接收到数据包后，SDK 会立即触发 onStreamMessage 回调。"
  }, {
    heading: undefined,
    content: "true"
  }, {
    heading: undefined,
    content: "false"
  }, {
    heading: undefined,
    content: "如果数据包延迟在音频延迟范围内，SDK 会在同步的音频播放时触发回调；否则立即触发回调。"
  }, {
    heading: undefined,
    content: "false"
  }, {
    heading: undefined,
    content: "true"
  }, {
    heading: undefined,
    content: "如果数据包延迟小于 5 秒，SDK 会纠正其顺序；否则丢弃该数据包。"
  }, {
    heading: undefined,
    content: "true"
  }, {
    heading: undefined,
    content: "true"
  }, {
    heading: undefined,
    content: "如果数据包延迟在音频延迟范围内，SDK 会纠正其顺序；否则丢弃该数据包。"
  }, {
    heading: "syncwithaudio",
    content: "是否将数据包与发布的音频包同步。"
  }, {
    heading: "syncwithaudio",
    content: "true：数据包与音频包同步，适用于歌词同步等特殊场景。"
  }, {
    heading: "syncwithaudio",
    content: "false：数据包不与音频包同步，适用于需要数据包立即送达接收端的场景。"
  }, {
    heading: "ordered",
    content: "是否确保接收端按发送顺序接收数据。"
  }, {
    heading: "ordered",
    content: "true：接收端按发送顺序接收数据。"
  }, {
    heading: "ordered",
    content: "false：不保证接收顺序。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "syncwithaudio",
    content: "`syncWithAudio`"
  }, {
    id: "ordered",
    content: "`ordered`"
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
  url: "#syncwithaudio",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "syncWithAudio"
    })
  })
}, {
  depth: 3,
  url: "#ordered",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ordered"
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_datastreamconfig__prototype"
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
              children: " DataStreamConfig"
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
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " syncWithAudio "
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
              children: " false"
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
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ordered "
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
              children: " false"
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
      id: "class_datastreamconfig__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "下表展示了在不同参数组合下 SDK 的行为："
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: _jsx(_components.code, {
              children: "syncWithAudio"
            })
          }), _jsx(_components.th, {
            children: _jsx(_components.code, {
              children: "ordered"
            })
          }), _jsx(_components.th, {
            children: "SDK 行为"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "false"
          }), _jsx(_components.td, {
            children: "false"
          }), _jsxs(_components.td, {
            children: ["接收端接收到数据包后，SDK 会立即触发 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessage",
              children: "onStreamMessage"
            }), " 回调。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "true"
          }), _jsx(_components.td, {
            children: "false"
          }), _jsx(_components.td, {
            children: "如果数据包延迟在音频延迟范围内，SDK 会在同步的音频播放时触发回调；否则立即触发回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "false"
          }), _jsx(_components.td, {
            children: "true"
          }), _jsx(_components.td, {
            children: "如果数据包延迟小于 5 秒，SDK 会纠正其顺序；否则丢弃该数据包。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "true"
          }), _jsx(_components.td, {
            children: "true"
          }), _jsx(_components.td, {
            children: "如果数据包延迟在音频延迟范围内，SDK 会纠正其顺序；否则丢弃该数据包。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "class_datastreamconfig__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "syncwithaudio",
      children: _jsx(_components.code, {
        children: "syncWithAudio"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否将数据包与发布的音频包同步。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：数据包与音频包同步，适用于歌词同步等特殊场景。"
      }), `
`, _jsx(_components.li, {
        children: "false：数据包不与音频包同步，适用于需要数据包立即送达接收端的场景。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "ordered",
      children: _jsx(_components.code, {
        children: "ordered"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否确保接收端按发送顺序接收数据。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：接收端按发送顺序接收数据。"
      }), `
`, _jsx(_components.li, {
        children: "false：不保证接收顺序。"
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
