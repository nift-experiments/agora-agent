import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "PlayerPlaybackStats",
  description: "用于描述当前播放媒体文件的相关信息。"
};
export let _markdown = `

<a id="class_playerplaybackstats__prototype" />

\`\`\`java
public class PlayerPlaybackStats {
  private long videoFps;
  private long videoBitrateInKbps;
  private long audioBitrateInKbps;
  private long totalBitrateInKbps;
}
\`\`\`

<a id="class_playerplaybackstats__parameters" />

## 属性 [#属性]

### \`videoFps\` [#videofps]

视频的帧率（fps）。

### \`videoBitrateInKbps\` [#videobitrateinkbps]

视频的码率（kbps）。

### \`audioBitrateInKbps\` [#audiobitrateinkbps]

音频的码率（kbps）。

### \`totalBitrateInKbps\` [#totalbitrateinkbps]

媒体流的总码率（kbps）。
`;
export let structuredData = {
  contents: [{
    heading: "videofps",
    content: "视频的帧率（fps）。"
  }, {
    heading: "videobitrateinkbps",
    content: "视频的码率（kbps）。"
  }, {
    heading: "audiobitrateinkbps",
    content: "音频的码率（kbps）。"
  }, {
    heading: "totalbitrateinkbps",
    content: "媒体流的总码率（kbps）。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "videofps",
    content: "`videoFps`"
  }, {
    id: "videobitrateinkbps",
    content: "`videoBitrateInKbps`"
  }, {
    id: "audiobitrateinkbps",
    content: "`audioBitrateInKbps`"
  }, {
    id: "totalbitrateinkbps",
    content: "`totalBitrateInKbps`"
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
  url: "#videofps",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoFps"
    })
  })
}, {
  depth: 3,
  url: "#videobitrateinkbps",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoBitrateInKbps"
    })
  })
}, {
  depth: 3,
  url: "#audiobitrateinkbps",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "audioBitrateInKbps"
    })
  })
}, {
  depth: 3,
  url: "#totalbitrateinkbps",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "totalBitrateInKbps"
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
      id: "class_playerplaybackstats__prototype"
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
              children: " PlayerPlaybackStats"
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
              children: "  private"
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
              children: " videoFps;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  private"
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
              children: " videoBitrateInKbps;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  private"
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
              children: " audioBitrateInKbps;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  private"
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
              children: " totalBitrateInKbps;"
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
      id: "class_playerplaybackstats__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "videofps",
      children: _jsx(_components.code, {
        children: "videoFps"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频的帧率（fps）。"
    }), `
`, _jsx(_components.h3, {
      id: "videobitrateinkbps",
      children: _jsx(_components.code, {
        children: "videoBitrateInKbps"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频的码率（kbps）。"
    }), `
`, _jsx(_components.h3, {
      id: "audiobitrateinkbps",
      children: _jsx(_components.code, {
        children: "audioBitrateInKbps"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频的码率（kbps）。"
    }), `
`, _jsx(_components.h3, {
      id: "totalbitrateinkbps",
      children: _jsx(_components.code, {
        children: "totalBitrateInKbps"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体流的总码率（kbps）。"
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
