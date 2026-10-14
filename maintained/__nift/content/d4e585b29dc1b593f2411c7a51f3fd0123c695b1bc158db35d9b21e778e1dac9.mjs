import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "BeautyOptions",
  description: "美颜特效选项设置。"
};
export let _markdown = `

<a id="class_beautyoptions__prototype" />

\`\`\`java
public class BeautyOptions {
  public static final int LIGHTENING_CONTRAST_LOW = 0;
  public static final int LIGHTENING_CONTRAST_NORMAL = 1;
  public static final int LIGHTENING_CONTRAST_HIGH = 2;
  public int lighteningContrastLevel;
  public float lighteningLevel;
  public float smoothnessLevel;
  public float rednessLevel;
  public float sharpnessLevel;
}
\`\`\`

<a id="class_beautyoptions__parameters" />

## 属性 [#属性]

### \`LIGHTENING_CONTRAST_LOW\` [#lightening_contrast_low]

（0）：用于亮肤的低对比度。

### \`LIGHTENING_CONTRAST_NORMAL\` [#lightening_contrast_normal]

（1）：用于亮肤的标准对比度。

### \`LIGHTENING_CONTRAST_HIGH\` [#lightening_contrast_high]

（2）：用于亮肤的高对比度。

### \`lighteningContrastLevel\` [#lighteningcontrastlevel]

与 \`lighteningLevel\` 参数配合使用，用于设置亮度对比度等级。值越大，明暗对比度越高。可选取值如下：

* LIGHTENING\\_CONTRAST\\_LOW （0）：低对比度。
* LIGHTENING\\_CONTRAST\\_NORMAL （1）：标准对比度。
* LIGHTENING\\_CONTRAST\\_HIGH （2）：高对比度。

### \`lighteningLevel\` [#lighteninglevel]

亮肤等级，取值范围为 \\[0.0, 1.0]，其中 0.0 表示原始亮度。默认值为 0.6。数值越大，亮肤效果越明显。

### \`smoothnessLevel\` [#smoothnesslevel]

磨皮等级，取值范围为 \\[0.0, 1.0]，其中 0.0 表示原始光滑度。默认值为 0.5。数值越大，磨皮效果越强。

### \`rednessLevel\` [#rednesslevel]

红润等级，取值范围为 \\[0.0, 1.0]，其中 0.0 表示原始红润程度。默认值为 0.1。数值越大，红润效果越明显。

### \`sharpnessLevel\` [#sharpnesslevel]

锐化等级，取值范围为 \\[0.0, 1.0]，其中 0.0 表示原始锐度。默认值为 0.3。数值越大，图像越清晰。
`;
export let structuredData = {
  contents: [{
    heading: "lightening_contrast_low",
    content: "（0）：用于亮肤的低对比度。"
  }, {
    heading: "lightening_contrast_normal",
    content: "（1）：用于亮肤的标准对比度。"
  }, {
    heading: "lightening_contrast_high",
    content: "（2）：用于亮肤的高对比度。"
  }, {
    heading: "lighteningcontrastlevel",
    content: "与 `lighteningLevel` 参数配合使用，用于设置亮度对比度等级。值越大，明暗对比度越高。可选取值如下："
  }, {
    heading: "lighteningcontrastlevel",
    content: "LIGHTENING\\_CONTRAST\\_LOW （0）：低对比度。"
  }, {
    heading: "lighteningcontrastlevel",
    content: "LIGHTENING\\_CONTRAST\\_NORMAL （1）：标准对比度。"
  }, {
    heading: "lighteningcontrastlevel",
    content: "LIGHTENING\\_CONTRAST\\_HIGH （2）：高对比度。"
  }, {
    heading: "lighteninglevel",
    content: "亮肤等级，取值范围为 \\[0.0, 1.0]，其中 0.0 表示原始亮度。默认值为 0.6。数值越大，亮肤效果越明显。"
  }, {
    heading: "smoothnesslevel",
    content: "磨皮等级，取值范围为 \\[0.0, 1.0]，其中 0.0 表示原始光滑度。默认值为 0.5。数值越大，磨皮效果越强。"
  }, {
    heading: "rednesslevel",
    content: "红润等级，取值范围为 \\[0.0, 1.0]，其中 0.0 表示原始红润程度。默认值为 0.1。数值越大，红润效果越明显。"
  }, {
    heading: "sharpnesslevel",
    content: "锐化等级，取值范围为 \\[0.0, 1.0]，其中 0.0 表示原始锐度。默认值为 0.3。数值越大，图像越清晰。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "lightening_contrast_low",
    content: "`LIGHTENING_CONTRAST_LOW`"
  }, {
    id: "lightening_contrast_normal",
    content: "`LIGHTENING_CONTRAST_NORMAL`"
  }, {
    id: "lightening_contrast_high",
    content: "`LIGHTENING_CONTRAST_HIGH`"
  }, {
    id: "lighteningcontrastlevel",
    content: "`lighteningContrastLevel`"
  }, {
    id: "lighteninglevel",
    content: "`lighteningLevel`"
  }, {
    id: "smoothnesslevel",
    content: "`smoothnessLevel`"
  }, {
    id: "rednesslevel",
    content: "`rednessLevel`"
  }, {
    id: "sharpnesslevel",
    content: "`sharpnessLevel`"
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
  url: "#lightening_contrast_low",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "LIGHTENING_CONTRAST_LOW"
    })
  })
}, {
  depth: 3,
  url: "#lightening_contrast_normal",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "LIGHTENING_CONTRAST_NORMAL"
    })
  })
}, {
  depth: 3,
  url: "#lightening_contrast_high",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "LIGHTENING_CONTRAST_HIGH"
    })
  })
}, {
  depth: 3,
  url: "#lighteningcontrastlevel",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "lighteningContrastLevel"
    })
  })
}, {
  depth: 3,
  url: "#lighteninglevel",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "lighteningLevel"
    })
  })
}, {
  depth: 3,
  url: "#smoothnesslevel",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "smoothnessLevel"
    })
  })
}, {
  depth: 3,
  url: "#rednesslevel",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rednessLevel"
    })
  })
}, {
  depth: 3,
  url: "#sharpnesslevel",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sharpnessLevel"
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
      id: "class_beautyoptions__prototype"
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
              children: " BeautyOptions"
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
              children: " LIGHTENING_CONTRAST_LOW "
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
              children: " LIGHTENING_CONTRAST_NORMAL "
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
              children: " LIGHTENING_CONTRAST_HIGH "
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " lighteningContrastLevel;"
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
              children: " float"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " lighteningLevel;"
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
              children: " float"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " smoothnessLevel;"
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
              children: " float"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " rednessLevel;"
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
              children: " float"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " sharpnessLevel;"
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
      id: "class_beautyoptions__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "lightening_contrast_low",
      children: _jsx(_components.code, {
        children: "LIGHTENING_CONTRAST_LOW"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：用于亮肤的低对比度。"
    }), `
`, _jsx(_components.h3, {
      id: "lightening_contrast_normal",
      children: _jsx(_components.code, {
        children: "LIGHTENING_CONTRAST_NORMAL"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：用于亮肤的标准对比度。"
    }), `
`, _jsx(_components.h3, {
      id: "lightening_contrast_high",
      children: _jsx(_components.code, {
        children: "LIGHTENING_CONTRAST_HIGH"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：用于亮肤的高对比度。"
    }), `
`, _jsx(_components.h3, {
      id: "lighteningcontrastlevel",
      children: _jsx(_components.code, {
        children: "lighteningContrastLevel"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["与 ", _jsx(_components.code, {
        children: "lighteningLevel"
      }), " 参数配合使用，用于设置亮度对比度等级。值越大，明暗对比度越高。可选取值如下："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "LIGHTENING_CONTRAST_LOW （0）：低对比度。"
      }), `
`, _jsx(_components.li, {
        children: "LIGHTENING_CONTRAST_NORMAL （1）：标准对比度。"
      }), `
`, _jsx(_components.li, {
        children: "LIGHTENING_CONTRAST_HIGH （2）：高对比度。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "lighteninglevel",
      children: _jsx(_components.code, {
        children: "lighteningLevel"
      })
    }), `
`, _jsx(_components.p, {
      children: "亮肤等级，取值范围为 [0.0, 1.0]，其中 0.0 表示原始亮度。默认值为 0.6。数值越大，亮肤效果越明显。"
    }), `
`, _jsx(_components.h3, {
      id: "smoothnesslevel",
      children: _jsx(_components.code, {
        children: "smoothnessLevel"
      })
    }), `
`, _jsx(_components.p, {
      children: "磨皮等级，取值范围为 [0.0, 1.0]，其中 0.0 表示原始光滑度。默认值为 0.5。数值越大，磨皮效果越强。"
    }), `
`, _jsx(_components.h3, {
      id: "rednesslevel",
      children: _jsx(_components.code, {
        children: "rednessLevel"
      })
    }), `
`, _jsx(_components.p, {
      children: "红润等级，取值范围为 [0.0, 1.0]，其中 0.0 表示原始红润程度。默认值为 0.1。数值越大，红润效果越明显。"
    }), `
`, _jsx(_components.h3, {
      id: "sharpnesslevel",
      children: _jsx(_components.code, {
        children: "sharpnessLevel"
      })
    }), `
`, _jsx(_components.p, {
      children: "锐化等级，取值范围为 [0.0, 1.0]，其中 0.0 表示原始锐度。默认值为 0.3。数值越大，图像越清晰。"
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
