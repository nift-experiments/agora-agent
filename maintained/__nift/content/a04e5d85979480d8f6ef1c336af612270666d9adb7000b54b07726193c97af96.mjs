import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "SegmentationProperty",
  description: "用于设置背景图像处理相关的属性。"
};
export let _markdown = `

<a id="class_segmentationproperty__prototype" />

\`\`\`java
public class SegmentationProperty {
  public static final int SEG_MODEL_AI = 1;
  public static final int SEG_MODEL_GREEN = 2;
  public static final int SCREEN_COLOR_AUTO = 0;
  public static final int SCREEN_COLOR_GREEN = 1;
  public static final int SCREEN_COLOR_BLUE = 2;
  public int modelType;
  public float greenCapacity;
  public int screenColorType;
}
\`\`\`

<a id="class_segmentationproperty__parameters" />

## 属性 [#属性]

### \`SEG_MODEL_AI\` [#seg_model_ai]

（1）：（默认）AI 分割算法。

### \`SEG_MODEL_GREEN\` [#seg_model_green]

（2）：绿幕分割算法。

### \`SCREEN_COLOR_AUTO\` [#screen_color_auto]

（0）：（默认）自动识别屏幕颜色。

### \`SCREEN_COLOR_GREEN\` [#screen_color_green]

（1）：绿色。

### \`SCREEN_COLOR_BLUE\` [#screen_color_blue]

（2）：蓝色。

### \`modelType\` [#modeltype]

用于背景处理的算法类型。

* SEG\\_MODEL\\_AI （1）：（默认）使用适用于所有场景的算法。
* SEG\\_MODEL\\_GREEN （2）：使用专为绿幕背景场景设计的算法。

### \`greenCapacity\` [#greencapacity]

识别图像中背景颜色的准确度范围。取值范围为 \\[0, 1]，默认值为 0.5。值越大，可识别的纯色色阶范围越宽。当该值过大时，人物边缘和人物区域中的纯色部分也可能被识别为背景。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    仅当 \`modelType\` 设为 \`SEG_MODEL_GREEN\` 时该参数生效。声网建议你根据实际效果动态调整该参数值。
  </CalloutDescription>
</CalloutContainer>

### \`screenColorType\` [#screencolortype]

屏幕颜色类型：

* SCREEN\\_COLOR\\_AUTO （0）：SDK 自动选择屏幕颜色。
* SCREEN\\_COLOR\\_GREEN （1）：绿色。
* SCREEN\\_COLOR\\_BLUE （2）：蓝色。
`;
export let structuredData = {
  contents: [{
    heading: "seg_model_ai",
    content: "（1）：（默认）AI 分割算法。"
  }, {
    heading: "seg_model_green",
    content: "（2）：绿幕分割算法。"
  }, {
    heading: "screen_color_auto",
    content: "（0）：（默认）自动识别屏幕颜色。"
  }, {
    heading: "screen_color_green",
    content: "（1）：绿色。"
  }, {
    heading: "screen_color_blue",
    content: "（2）：蓝色。"
  }, {
    heading: "modeltype",
    content: "用于背景处理的算法类型。"
  }, {
    heading: "modeltype",
    content: "SEG\\_MODEL\\_AI （1）：（默认）使用适用于所有场景的算法。"
  }, {
    heading: "modeltype",
    content: "SEG\\_MODEL\\_GREEN （2）：使用专为绿幕背景场景设计的算法。"
  }, {
    heading: "greencapacity",
    content: "识别图像中背景颜色的准确度范围。取值范围为 \\[0, 1]，默认值为 0.5。值越大，可识别的纯色色阶范围越宽。当该值过大时，人物边缘和人物区域中的纯色部分也可能被识别为背景。"
  }, {
    heading: "greencapacity",
    content: "仅当 `modelType` 设为 `SEG_MODEL_GREEN` 时该参数生效。声网建议你根据实际效果动态调整该参数值。"
  }, {
    heading: "screencolortype",
    content: "屏幕颜色类型："
  }, {
    heading: "screencolortype",
    content: "SCREEN\\_COLOR\\_AUTO （0）：SDK 自动选择屏幕颜色。"
  }, {
    heading: "screencolortype",
    content: "SCREEN\\_COLOR\\_GREEN （1）：绿色。"
  }, {
    heading: "screencolortype",
    content: "SCREEN\\_COLOR\\_BLUE （2）：蓝色。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "seg_model_ai",
    content: "`SEG_MODEL_AI`"
  }, {
    id: "seg_model_green",
    content: "`SEG_MODEL_GREEN`"
  }, {
    id: "screen_color_auto",
    content: "`SCREEN_COLOR_AUTO`"
  }, {
    id: "screen_color_green",
    content: "`SCREEN_COLOR_GREEN`"
  }, {
    id: "screen_color_blue",
    content: "`SCREEN_COLOR_BLUE`"
  }, {
    id: "modeltype",
    content: "`modelType`"
  }, {
    id: "greencapacity",
    content: "`greenCapacity`"
  }, {
    id: "screencolortype",
    content: "`screenColorType`"
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
  url: "#seg_model_ai",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "SEG_MODEL_AI"
    })
  })
}, {
  depth: 3,
  url: "#seg_model_green",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "SEG_MODEL_GREEN"
    })
  })
}, {
  depth: 3,
  url: "#screen_color_auto",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "SCREEN_COLOR_AUTO"
    })
  })
}, {
  depth: 3,
  url: "#screen_color_green",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "SCREEN_COLOR_GREEN"
    })
  })
}, {
  depth: 3,
  url: "#screen_color_blue",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "SCREEN_COLOR_BLUE"
    })
  })
}, {
  depth: 3,
  url: "#modeltype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "modelType"
    })
  })
}, {
  depth: 3,
  url: "#greencapacity",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "greenCapacity"
    })
  })
}, {
  depth: 3,
  url: "#screencolortype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "screenColorType"
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
      id: "class_segmentationproperty__prototype"
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
              children: " SegmentationProperty"
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
              children: " SEG_MODEL_AI "
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
              children: " SEG_MODEL_GREEN "
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
              children: " SCREEN_COLOR_AUTO "
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
              children: " SCREEN_COLOR_GREEN "
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
              children: " SCREEN_COLOR_BLUE "
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
              children: " modelType;"
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
              children: " greenCapacity;"
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
              children: " screenColorType;"
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
      id: "class_segmentationproperty__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "seg_model_ai",
      children: _jsx(_components.code, {
        children: "SEG_MODEL_AI"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：（默认）AI 分割算法。"
    }), `
`, _jsx(_components.h3, {
      id: "seg_model_green",
      children: _jsx(_components.code, {
        children: "SEG_MODEL_GREEN"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：绿幕分割算法。"
    }), `
`, _jsx(_components.h3, {
      id: "screen_color_auto",
      children: _jsx(_components.code, {
        children: "SCREEN_COLOR_AUTO"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：（默认）自动识别屏幕颜色。"
    }), `
`, _jsx(_components.h3, {
      id: "screen_color_green",
      children: _jsx(_components.code, {
        children: "SCREEN_COLOR_GREEN"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：绿色。"
    }), `
`, _jsx(_components.h3, {
      id: "screen_color_blue",
      children: _jsx(_components.code, {
        children: "SCREEN_COLOR_BLUE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：蓝色。"
    }), `
`, _jsx(_components.h3, {
      id: "modeltype",
      children: _jsx(_components.code, {
        children: "modelType"
      })
    }), `
`, _jsx(_components.p, {
      children: "用于背景处理的算法类型。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "SEG_MODEL_AI （1）：（默认）使用适用于所有场景的算法。"
      }), `
`, _jsx(_components.li, {
        children: "SEG_MODEL_GREEN （2）：使用专为绿幕背景场景设计的算法。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "greencapacity",
      children: _jsx(_components.code, {
        children: "greenCapacity"
      })
    }), `
`, _jsx(_components.p, {
      children: "识别图像中背景颜色的准确度范围。取值范围为 [0, 1]，默认值为 0.5。值越大，可识别的纯色色阶范围越宽。当该值过大时，人物边缘和人物区域中的纯色部分也可能被识别为背景。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["仅当 ", _jsx(_components.code, {
            children: "modelType"
          }), " 设为 ", _jsx(_components.code, {
            children: "SEG_MODEL_GREEN"
          }), " 时该参数生效。声网建议你根据实际效果动态调整该参数值。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "screencolortype",
      children: _jsx(_components.code, {
        children: "screenColorType"
      })
    }), `
`, _jsx(_components.p, {
      children: "屏幕颜色类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "SCREEN_COLOR_AUTO （0）：SDK 自动选择屏幕颜色。"
      }), `
`, _jsx(_components.li, {
        children: "SCREEN_COLOR_GREEN （1）：绿色。"
      }), `
`, _jsx(_components.li, {
        children: "SCREEN_COLOR_BLUE （2）：蓝色。"
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
