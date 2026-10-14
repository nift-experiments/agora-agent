import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "VirtualBackgroundSource",
  description: "用于设置自定义背景类型。"
};
export let _markdown = `

<a id="class_virtualbackgroundsource__prototype" />

\`\`\`java
public class VirtualBackgroundSource {
  public static final int BACKGROUND_NONE = 0;
  public static final int BACKGROUND_COLOR = 1;
  public static final int BACKGROUND_IMG = 2;
  public static final int BACKGROUND_BLUR = 3;
  public static final int BACKGROUND_VIDEO = 4;
  public static final int BLUR_DEGREE_LOW = 1;
  public static final int BLUR_DEGREE_MEDIUM = 2;
  public static final int BLUR_DEGREE_HIGH = 3;
  public int backgroundSourceType;
  public int color;
  public String source = null;
  public int blurDegree;
}
\`\`\`

<a id="class_virtualbackgroundsource__parameters" />

## 属性 [#属性]

### \`backgroundSourceType\` [#backgroundsourcetype]

自定义背景类型。

* BACKGROUND\\_NONE (0)：仅进行背景与人物分割处理，不替换背景图像。设置该值后，可调用 startLocalVideoTranscoder 实现画中画效果。
* BACKGROUND\\_COLOR (1)：（默认）背景为纯色图像。
* BACKGROUND\\_IMG (2)：背景为 PNG 或 JPG 格式的图像。
* BACKGROUND\\_BLUR (3)：背景为原始背景图像的模糊版本。
* BACKGROUND\\_VIDEO (4)：背景为本地视频文件，格式为 MP4、AVI、MKV、FLV 或其他支持格式。

### \`color\` [#color]

自定义背景图像的颜色。格式为 RGB 定义的十六进制整数，不带 #，例如浅粉色为 0xFFB6C1，默认值为 0xFFFFFF（白色）。取值范围为 \\[0x000000, 0xFFFFFF]。若该值无效，SDK 会将原始背景图像替换为白色背景图像。

注： 该参数仅适用于以下类型的自定义背景：

* BACKGROUND\\_COLOR：背景为传入颜色的纯色图像。
* BACKGROUND\\_IMG：若 source 中的图像具有透明背景，该透明区域将被本参数指定的颜色填充。

### \`source\` [#source]

自定义背景图像的本地绝对路径。支持的格式包括 PNG、JPG、MP4、AVI、MKV 和 FLV。若路径无效，SDK 将使用原始背景图像或由 \`color\` 指定的纯色图像。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该参数仅在自定义背景类型为 \`BACKGROUND_IMG\` 或 \`BACKGROUND_VIDEO\` 时生效。
  </CalloutDescription>
</CalloutContainer>

### \`blurDegree\` [#blurdegree]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该参数仅在背景类型为 \`BACKGROUND_BLUR\` 时生效。
  </CalloutDescription>
</CalloutContainer>

自定义背景图像的模糊程度。

* BLUR\\_DEGREE\\_LOW (1)：模糊程度低，背景几乎可见。
* BLUR\\_DEGREE\\_MEDIUM (2)：中等模糊，难以识别背景细节。
* BLUR\\_DEGREE\\_HIGH (3)：高强度模糊，背景无法辨认。
`;
export let structuredData = {
  contents: [{
    heading: "backgroundsourcetype",
    content: "自定义背景类型。"
  }, {
    heading: "backgroundsourcetype",
    content: "BACKGROUND\\_NONE (0)：仅进行背景与人物分割处理，不替换背景图像。设置该值后，可调用 startLocalVideoTranscoder 实现画中画效果。"
  }, {
    heading: "backgroundsourcetype",
    content: "BACKGROUND\\_COLOR (1)：（默认）背景为纯色图像。"
  }, {
    heading: "backgroundsourcetype",
    content: "BACKGROUND\\_IMG (2)：背景为 PNG 或 JPG 格式的图像。"
  }, {
    heading: "backgroundsourcetype",
    content: "BACKGROUND\\_BLUR (3)：背景为原始背景图像的模糊版本。"
  }, {
    heading: "backgroundsourcetype",
    content: "BACKGROUND\\_VIDEO (4)：背景为本地视频文件，格式为 MP4、AVI、MKV、FLV 或其他支持格式。"
  }, {
    heading: "color",
    content: "自定义背景图像的颜色。格式为 RGB 定义的十六进制整数，不带 #，例如浅粉色为 0xFFB6C1，默认值为 0xFFFFFF（白色）。取值范围为 \\[0x000000, 0xFFFFFF]。若该值无效，SDK 会将原始背景图像替换为白色背景图像。"
  }, {
    heading: "color",
    content: "注： 该参数仅适用于以下类型的自定义背景："
  }, {
    heading: "color",
    content: "BACKGROUND\\_COLOR：背景为传入颜色的纯色图像。"
  }, {
    heading: "color",
    content: "BACKGROUND\\_IMG：若 source 中的图像具有透明背景，该透明区域将被本参数指定的颜色填充。"
  }, {
    heading: "source",
    content: "自定义背景图像的本地绝对路径。支持的格式包括 PNG、JPG、MP4、AVI、MKV 和 FLV。若路径无效，SDK 将使用原始背景图像或由 `color` 指定的纯色图像。"
  }, {
    heading: "source",
    content: "该参数仅在自定义背景类型为 `BACKGROUND_IMG` 或 `BACKGROUND_VIDEO` 时生效。"
  }, {
    heading: "blurdegree",
    content: "该参数仅在背景类型为 `BACKGROUND_BLUR` 时生效。"
  }, {
    heading: "blurdegree",
    content: "自定义背景图像的模糊程度。"
  }, {
    heading: "blurdegree",
    content: "BLUR\\_DEGREE\\_LOW (1)：模糊程度低，背景几乎可见。"
  }, {
    heading: "blurdegree",
    content: "BLUR\\_DEGREE\\_MEDIUM (2)：中等模糊，难以识别背景细节。"
  }, {
    heading: "blurdegree",
    content: "BLUR\\_DEGREE\\_HIGH (3)：高强度模糊，背景无法辨认。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "backgroundsourcetype",
    content: "`backgroundSourceType`"
  }, {
    id: "color",
    content: "`color`"
  }, {
    id: "source",
    content: "`source`"
  }, {
    id: "blurdegree",
    content: "`blurDegree`"
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
  url: "#backgroundsourcetype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "backgroundSourceType"
    })
  })
}, {
  depth: 3,
  url: "#color",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "color"
    })
  })
}, {
  depth: 3,
  url: "#source",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "source"
    })
  })
}, {
  depth: 3,
  url: "#blurdegree",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "blurDegree"
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
      id: "class_virtualbackgroundsource__prototype"
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
              children: " VirtualBackgroundSource"
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
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " final"
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
              children: " BACKGROUND_NONE "
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
              children: " 0"
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
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " final"
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
              children: " BACKGROUND_COLOR "
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
              children: " 1"
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
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " final"
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
              children: " BACKGROUND_IMG "
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
              children: " 2"
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
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " final"
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
              children: " BACKGROUND_BLUR "
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
              children: " 3"
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
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " final"
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
              children: " BACKGROUND_VIDEO "
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
              children: " 4"
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
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " final"
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
              children: " BLUR_DEGREE_LOW "
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
              children: " 1"
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
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " final"
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
              children: " BLUR_DEGREE_MEDIUM "
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
              children: " 2"
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
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " final"
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
              children: " BLUR_DEGREE_HIGH "
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
              children: " 3"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " backgroundSourceType;"
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
              children: " color;"
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
              children: " String source "
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
              children: " null"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " blurDegree;"
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
      id: "class_virtualbackgroundsource__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "backgroundsourcetype",
      children: _jsx(_components.code, {
        children: "backgroundSourceType"
      })
    }), `
`, _jsx(_components.p, {
      children: "自定义背景类型。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "BACKGROUND_NONE (0)：仅进行背景与人物分割处理，不替换背景图像。设置该值后，可调用 startLocalVideoTranscoder 实现画中画效果。"
      }), `
`, _jsx(_components.li, {
        children: "BACKGROUND_COLOR (1)：（默认）背景为纯色图像。"
      }), `
`, _jsx(_components.li, {
        children: "BACKGROUND_IMG (2)：背景为 PNG 或 JPG 格式的图像。"
      }), `
`, _jsx(_components.li, {
        children: "BACKGROUND_BLUR (3)：背景为原始背景图像的模糊版本。"
      }), `
`, _jsx(_components.li, {
        children: "BACKGROUND_VIDEO (4)：背景为本地视频文件，格式为 MP4、AVI、MKV、FLV 或其他支持格式。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "color",
      children: _jsx(_components.code, {
        children: "color"
      })
    }), `
`, _jsx(_components.p, {
      children: "自定义背景图像的颜色。格式为 RGB 定义的十六进制整数，不带 #，例如浅粉色为 0xFFB6C1，默认值为 0xFFFFFF（白色）。取值范围为 [0x000000, 0xFFFFFF]。若该值无效，SDK 会将原始背景图像替换为白色背景图像。"
    }), `
`, _jsx(_components.p, {
      children: "注： 该参数仅适用于以下类型的自定义背景："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "BACKGROUND_COLOR：背景为传入颜色的纯色图像。"
      }), `
`, _jsx(_components.li, {
        children: "BACKGROUND_IMG：若 source 中的图像具有透明背景，该透明区域将被本参数指定的颜色填充。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "source",
      children: _jsx(_components.code, {
        children: "source"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["自定义背景图像的本地绝对路径。支持的格式包括 PNG、JPG、MP4、AVI、MKV 和 FLV。若路径无效，SDK 将使用原始背景图像或由 ", _jsx(_components.code, {
        children: "color"
      }), " 指定的纯色图像。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["该参数仅在自定义背景类型为 ", _jsx(_components.code, {
            children: "BACKGROUND_IMG"
          }), " 或 ", _jsx(_components.code, {
            children: "BACKGROUND_VIDEO"
          }), " 时生效。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "blurdegree",
      children: _jsx(_components.code, {
        children: "blurDegree"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["该参数仅在背景类型为 ", _jsx(_components.code, {
            children: "BACKGROUND_BLUR"
          }), " 时生效。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "自定义背景图像的模糊程度。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "BLUR_DEGREE_LOW (1)：模糊程度低，背景几乎可见。"
      }), `
`, _jsx(_components.li, {
        children: "BLUR_DEGREE_MEDIUM (2)：中等模糊，难以识别背景细节。"
      }), `
`, _jsx(_components.li, {
        children: "BLUR_DEGREE_HIGH (3)：高强度模糊，背景无法辨认。"
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
