import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "ImageTrackOptions",
  description: "图像配置参数。"
};
export let _markdown = `

<a id="class_imagetrackoptions__prototype" />

\`\`\`java
public class ImageTrackOptions {
  private String imageUrl;
  private int fps;
  private VideoEncoderConfiguration.MIRROR_MODE_TYPE mirrorMode;
}
\`\`\`

<a id="class_imagetrackoptions__parameters" />

## 属性 [#属性]

### \`imageUrl\` [#imageurl]

图像的 URL。支持的图像格式包括 JPEG、JPG、PNG 和 GIF。支持通过本地绝对路径或相对路径添加图像。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    在 Android 平台上，不支持从 \`/assets/\` 添加图像。
  </CalloutDescription>
</CalloutContainer>

### \`fps\` [#fps]

当前发布的视频流的帧率。取值范围为 \\[1, 30]，默认值为 1。

### \`mirrorMode\` [#mirrormode]

镜像模式：

* VIDEO\\_MIRROR\\_MODE\\_AUTO (0)：SDK 决定是否启用镜像模式，默认关闭。
* VIDEO\\_MIRROR\\_MODE\\_ENABLED (1)：开启远端镜像。
* VIDEO\\_MIRROR\\_MODE\\_DISABLED (2)：关闭远端镜像。
`;
export let structuredData = {
  contents: [{
    heading: "imageurl",
    content: "图像的 URL。支持的图像格式包括 JPEG、JPG、PNG 和 GIF。支持通过本地绝对路径或相对路径添加图像。"
  }, {
    heading: "imageurl",
    content: "在 Android 平台上，不支持从 `/assets/` 添加图像。"
  }, {
    heading: "fps",
    content: "当前发布的视频流的帧率。取值范围为 \\[1, 30]，默认值为 1。"
  }, {
    heading: "mirrormode",
    content: "镜像模式："
  }, {
    heading: "mirrormode",
    content: "VIDEO\\_MIRROR\\_MODE\\_AUTO (0)：SDK 决定是否启用镜像模式，默认关闭。"
  }, {
    heading: "mirrormode",
    content: "VIDEO\\_MIRROR\\_MODE\\_ENABLED (1)：开启远端镜像。"
  }, {
    heading: "mirrormode",
    content: "VIDEO\\_MIRROR\\_MODE\\_DISABLED (2)：关闭远端镜像。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "imageurl",
    content: "`imageUrl`"
  }, {
    id: "fps",
    content: "`fps`"
  }, {
    id: "mirrormode",
    content: "`mirrorMode`"
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
  url: "#imageurl",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "imageUrl"
    })
  })
}, {
  depth: 3,
  url: "#fps",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "fps"
    })
  })
}, {
  depth: 3,
  url: "#mirrormode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mirrorMode"
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
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_imagetrackoptions__prototype"
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
              children: " ImageTrackOptions"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String imageUrl;"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " fps;"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " VideoEncoderConfiguration.MIRROR_MODE_TYPE mirrorMode;"
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
      id: "class_imagetrackoptions__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "imageurl",
      children: _jsx(_components.code, {
        children: "imageUrl"
      })
    }), `
`, _jsx(_components.p, {
      children: "图像的 URL。支持的图像格式包括 JPEG、JPG、PNG 和 GIF。支持通过本地绝对路径或相对路径添加图像。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["在 Android 平台上，不支持从 ", _jsx(_components.code, {
            children: "/assets/"
          }), " 添加图像。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "fps",
      children: _jsx(_components.code, {
        children: "fps"
      })
    }), `
`, _jsx(_components.p, {
      children: "当前发布的视频流的帧率。取值范围为 [1, 30]，默认值为 1。"
    }), `
`, _jsx(_components.h3, {
      id: "mirrormode",
      children: _jsx(_components.code, {
        children: "mirrorMode"
      })
    }), `
`, _jsx(_components.p, {
      children: "镜像模式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "VIDEO_MIRROR_MODE_AUTO (0)：SDK 决定是否启用镜像模式，默认关闭。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_MIRROR_MODE_ENABLED (1)：开启远端镜像。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_MIRROR_MODE_DISABLED (2)：关闭远端镜像。"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
