import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AgoraRhythmPlayerConfig",
  description: "配置节拍器参数。"
};
export let _markdown = `

<a id="class_agorarhythmplayerconfig__prototype" />

\`\`\`java
public class AgoraRhythmPlayerConfig {
  public int beatsPerMeasure;
  public int beatsPerMinute;
}
\`\`\`

<a id="class_agorarhythmplayerconfig__parameters" />

## 属性 [#属性]

### \`beatsPerMeasure\` [#beatspermeasure]

每小节的拍数，取值范围为 1 到 9。默认值为 4，表示每小节包含一个强拍和三个弱拍。

### \`beatsPerMinute\` [#beatsperminute]

节拍速度，单位为拍/分钟，取值范围为 60 到 360。默认值为 60，表示节拍器每分钟播放 60 拍。
`;
export let structuredData = {
  contents: [{
    heading: "beatspermeasure",
    content: "每小节的拍数，取值范围为 1 到 9。默认值为 4，表示每小节包含一个强拍和三个弱拍。"
  }, {
    heading: "beatsperminute",
    content: "节拍速度，单位为拍/分钟，取值范围为 60 到 360。默认值为 60，表示节拍器每分钟播放 60 拍。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "beatspermeasure",
    content: "`beatsPerMeasure`"
  }, {
    id: "beatsperminute",
    content: "`beatsPerMinute`"
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
  url: "#beatspermeasure",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "beatsPerMeasure"
    })
  })
}, {
  depth: 3,
  url: "#beatsperminute",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "beatsPerMinute"
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
      id: "class_agorarhythmplayerconfig__prototype"
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
              children: " AgoraRhythmPlayerConfig"
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
              children: " beatsPerMeasure;"
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
              children: " beatsPerMinute;"
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
      id: "class_agorarhythmplayerconfig__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "beatspermeasure",
      children: _jsx(_components.code, {
        children: "beatsPerMeasure"
      })
    }), `
`, _jsx(_components.p, {
      children: "每小节的拍数，取值范围为 1 到 9。默认值为 4，表示每小节包含一个强拍和三个弱拍。"
    }), `
`, _jsx(_components.h3, {
      id: "beatsperminute",
      children: _jsx(_components.code, {
        children: "beatsPerMinute"
      })
    }), `
`, _jsx(_components.p, {
      children: "节拍速度，单位为拍/分钟，取值范围为 60 到 360。默认值为 60，表示节拍器每分钟播放 60 拍。"
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
