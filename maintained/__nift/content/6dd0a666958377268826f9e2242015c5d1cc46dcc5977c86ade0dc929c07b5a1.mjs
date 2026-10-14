import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "VideoLayout",
  description: "描述子视频流在视频合流布局中的位置和状态。"
};
export let _markdown = `

<a id="class_videolayout__prototype" />

\`\`\`java
public static class VideoLayout {
  public String channelId;
  public int uid;
  public String strUid;
  public int videoState;
  public int x;
  public int y;
  public int width;
  public int height;
}
\`\`\`

<a id="class_videolayout__parameters" />

## 属性 [#属性]

### \`channelId\` [#channelid]

该子视频流所属的频道名。

### \`uid\` [#uid]

发布该子视频流的用户 ID。

### \`strUid\` [#struid]

预留字段，供未来使用。

### \`videoState\` [#videostate]

子视频流在视频合流画布上的状态：

* 0：正常，子视频流已渲染到混流画布上。
* 1：占位图像，子视频流无视频帧，将以占位图显示在混流画布上。
* 2：黑色图像，子视频流将被黑色图像替代。

### \`x\` [#x]

子视频流在混流画布上的 X 坐标（单位为 px），即视频左上角相对于画布左上角的水平偏移。

### \`y\` [#y]

子视频流在混流画布上的 Y 坐标（单位为 px），即视频左上角相对于画布左上角的垂直偏移。

### \`width\` [#width]

子视频流的宽度（单位为 px）。

### \`height\` [#height]

子视频流的高度（单位为 px）。
`;
export let structuredData = {
  contents: [{
    heading: "channelid",
    content: "该子视频流所属的频道名。"
  }, {
    heading: "uid",
    content: "发布该子视频流的用户 ID。"
  }, {
    heading: "struid",
    content: "预留字段，供未来使用。"
  }, {
    heading: "videostate",
    content: "子视频流在视频合流画布上的状态："
  }, {
    heading: "videostate",
    content: "0：正常，子视频流已渲染到混流画布上。"
  }, {
    heading: "videostate",
    content: "1：占位图像，子视频流无视频帧，将以占位图显示在混流画布上。"
  }, {
    heading: "videostate",
    content: "2：黑色图像，子视频流将被黑色图像替代。"
  }, {
    heading: "x",
    content: "子视频流在混流画布上的 X 坐标（单位为 px），即视频左上角相对于画布左上角的水平偏移。"
  }, {
    heading: "y",
    content: "子视频流在混流画布上的 Y 坐标（单位为 px），即视频左上角相对于画布左上角的垂直偏移。"
  }, {
    heading: "width",
    content: "子视频流的宽度（单位为 px）。"
  }, {
    heading: "height",
    content: "子视频流的高度（单位为 px）。"
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
    id: "struid",
    content: "`strUid`"
  }, {
    id: "videostate",
    content: "`videoState`"
  }, {
    id: "x",
    content: "`x`"
  }, {
    id: "y",
    content: "`y`"
  }, {
    id: "width",
    content: "`width`"
  }, {
    id: "height",
    content: "`height`"
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
  url: "#struid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "strUid"
    })
  })
}, {
  depth: 3,
  url: "#videostate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoState"
    })
  })
}, {
  depth: 3,
  url: "#x",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "x"
    })
  })
}, {
  depth: 3,
  url: "#y",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "y"
    })
  })
}, {
  depth: 3,
  url: "#width",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "width"
    })
  })
}, {
  depth: 3,
  url: "#height",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "height"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
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
      id: "class_videolayout__prototype"
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
              children: " VideoLayout"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String strUid;"
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
              children: " videoState;"
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
              children: " x;"
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
              children: " y;"
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
              children: " width;"
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
              children: " height;"
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
      id: "class_videolayout__parameters"
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
      children: "该子视频流所属的频道名。"
    }), `
`, _jsx(_components.h3, {
      id: "uid",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "发布该子视频流的用户 ID。"
    }), `
`, _jsx(_components.h3, {
      id: "struid",
      children: _jsx(_components.code, {
        children: "strUid"
      })
    }), `
`, _jsx(_components.p, {
      children: "预留字段，供未来使用。"
    }), `
`, _jsx(_components.h3, {
      id: "videostate",
      children: _jsx(_components.code, {
        children: "videoState"
      })
    }), `
`, _jsx(_components.p, {
      children: "子视频流在视频合流画布上的状态："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：正常，子视频流已渲染到混流画布上。"
      }), `
`, _jsx(_components.li, {
        children: "1：占位图像，子视频流无视频帧，将以占位图显示在混流画布上。"
      }), `
`, _jsx(_components.li, {
        children: "2：黑色图像，子视频流将被黑色图像替代。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "x",
      children: _jsx(_components.code, {
        children: "x"
      })
    }), `
`, _jsx(_components.p, {
      children: "子视频流在混流画布上的 X 坐标（单位为 px），即视频左上角相对于画布左上角的水平偏移。"
    }), `
`, _jsx(_components.h3, {
      id: "y",
      children: _jsx(_components.code, {
        children: "y"
      })
    }), `
`, _jsx(_components.p, {
      children: "子视频流在混流画布上的 Y 坐标（单位为 px），即视频左上角相对于画布左上角的垂直偏移。"
    }), `
`, _jsx(_components.h3, {
      id: "width",
      children: _jsx(_components.code, {
        children: "width"
      })
    }), `
`, _jsx(_components.p, {
      children: "子视频流的宽度（单位为 px）。"
    }), `
`, _jsx(_components.h3, {
      id: "height",
      children: _jsx(_components.code, {
        children: "height"
      })
    }), `
`, _jsx(_components.p, {
      children: "子视频流的高度（单位为 px）。"
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
