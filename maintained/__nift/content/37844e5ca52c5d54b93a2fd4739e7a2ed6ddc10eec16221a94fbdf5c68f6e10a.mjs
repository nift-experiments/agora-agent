import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "FaceShapeBeautyOptions",
  description: "用于设置美型风格。"
};
export let _markdown = `

<a id="class_faceshapebeautyoptions__prototype" />

\`\`\`java
public class FaceShapeBeautyOptions {
  public static final int FACE_SHAPE_BEAUTY_STYLE_FEMALE = 0;
  public static final int FACE_SHAPE_BEAUTY_STYLE_MALE = 1;
  public static final int FACE_SHAPE_BEAUTY_STYLE_NATURAL = 2;
  public int shapeStyle;
  public int styleIntensity;
}
\`\`\`

<a id="class_faceshapebeautyoptions__detailed_desc" />

### \`自从\` [#自从]

自 v4.4.0 版本新增。

<a id="class_faceshapebeautyoptions__parameters" />

## 属性 [#属性]

### \`FACE_SHAPE_BEAUTY_STYLE_FEMALE\` [#face_shape_beauty_style_female]

0：（默认）女性美型风格。

### \`FACE_SHAPE_BEAUTY_STYLE_MALE\` [#face_shape_beauty_style_male]

1：男性美型风格。

### \`FACE_SHAPE_BEAUTY_STYLE_NATURAL\` [#face_shape_beauty_style_natural]

2：自然风格，仅对面部特征进行最小调整。

### \`shapeStyle\` [#shapestyle]

美型风格选项：

* FACE\\_SHAPE\\_BEAUTY\\_STYLE\\_FEMALE （0）：（默认）女性风格。
* FACE\\_SHAPE\\_BEAUTY\\_STYLE\\_MALE （1）：男性风格。
* FACE\\_SHAPE\\_BEAUTY\\_STYLE\\_NATURAL （2）：自然风格，仅对面部特征进行最小调整。

### \`styleIntensity\` [#styleintensity]

美型风格的强度，取值范围为 \\[0.0, 1.0]。

* 默认值为 0.0，表示不进行美型处理。
* 值越大，美型效果越明显。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "face_shape_beauty_style_female",
    content: "0：（默认）女性美型风格。"
  }, {
    heading: "face_shape_beauty_style_male",
    content: "1：男性美型风格。"
  }, {
    heading: "face_shape_beauty_style_natural",
    content: "2：自然风格，仅对面部特征进行最小调整。"
  }, {
    heading: "shapestyle",
    content: "美型风格选项："
  }, {
    heading: "shapestyle",
    content: "FACE\\_SHAPE\\_BEAUTY\\_STYLE\\_FEMALE （0）：（默认）女性风格。"
  }, {
    heading: "shapestyle",
    content: "FACE\\_SHAPE\\_BEAUTY\\_STYLE\\_MALE （1）：男性风格。"
  }, {
    heading: "shapestyle",
    content: "FACE\\_SHAPE\\_BEAUTY\\_STYLE\\_NATURAL （2）：自然风格，仅对面部特征进行最小调整。"
  }, {
    heading: "styleintensity",
    content: "美型风格的强度，取值范围为 \\[0.0, 1.0]。"
  }, {
    heading: "styleintensity",
    content: "默认值为 0.0，表示不进行美型处理。"
  }, {
    heading: "styleintensity",
    content: "值越大，美型效果越明显。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "属性",
    content: "属性"
  }, {
    id: "face_shape_beauty_style_female",
    content: "`FACE_SHAPE_BEAUTY_STYLE_FEMALE`"
  }, {
    id: "face_shape_beauty_style_male",
    content: "`FACE_SHAPE_BEAUTY_STYLE_MALE`"
  }, {
    id: "face_shape_beauty_style_natural",
    content: "`FACE_SHAPE_BEAUTY_STYLE_NATURAL`"
  }, {
    id: "shapestyle",
    content: "`shapeStyle`"
  }, {
    id: "styleintensity",
    content: "`styleIntensity`"
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
  url: "#face_shape_beauty_style_female",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "FACE_SHAPE_BEAUTY_STYLE_FEMALE"
    })
  })
}, {
  depth: 3,
  url: "#face_shape_beauty_style_male",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "FACE_SHAPE_BEAUTY_STYLE_MALE"
    })
  })
}, {
  depth: 3,
  url: "#face_shape_beauty_style_natural",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "FACE_SHAPE_BEAUTY_STYLE_NATURAL"
    })
  })
}, {
  depth: 3,
  url: "#shapestyle",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "shapeStyle"
    })
  })
}, {
  depth: 3,
  url: "#styleintensity",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "styleIntensity"
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
      id: "class_faceshapebeautyoptions__prototype"
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
              children: " FaceShapeBeautyOptions"
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
              children: " FACE_SHAPE_BEAUTY_STYLE_FEMALE "
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
              children: " FACE_SHAPE_BEAUTY_STYLE_MALE "
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
              children: " FACE_SHAPE_BEAUTY_STYLE_NATURAL "
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
              children: " shapeStyle;"
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
              children: " styleIntensity;"
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
      id: "class_faceshapebeautyoptions__detailed_desc"
    }), `
`, _jsx(_components.h3, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "class_faceshapebeautyoptions__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "face_shape_beauty_style_female",
      children: _jsx(_components.code, {
        children: "FACE_SHAPE_BEAUTY_STYLE_FEMALE"
      })
    }), `
`, _jsx(_components.p, {
      children: "0：（默认）女性美型风格。"
    }), `
`, _jsx(_components.h3, {
      id: "face_shape_beauty_style_male",
      children: _jsx(_components.code, {
        children: "FACE_SHAPE_BEAUTY_STYLE_MALE"
      })
    }), `
`, _jsx(_components.p, {
      children: "1：男性美型风格。"
    }), `
`, _jsx(_components.h3, {
      id: "face_shape_beauty_style_natural",
      children: _jsx(_components.code, {
        children: "FACE_SHAPE_BEAUTY_STYLE_NATURAL"
      })
    }), `
`, _jsx(_components.p, {
      children: "2：自然风格，仅对面部特征进行最小调整。"
    }), `
`, _jsx(_components.h3, {
      id: "shapestyle",
      children: _jsx(_components.code, {
        children: "shapeStyle"
      })
    }), `
`, _jsx(_components.p, {
      children: "美型风格选项："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "FACE_SHAPE_BEAUTY_STYLE_FEMALE （0）：（默认）女性风格。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_BEAUTY_STYLE_MALE （1）：男性风格。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_BEAUTY_STYLE_NATURAL （2）：自然风格，仅对面部特征进行最小调整。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "styleintensity",
      children: _jsx(_components.code, {
        children: "styleIntensity"
      })
    }), `
`, _jsx(_components.p, {
      children: "美型风格的强度，取值范围为 [0.0, 1.0]。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "默认值为 0.0，表示不进行美型处理。"
      }), `
`, _jsx(_components.li, {
        children: "值越大，美型效果越明显。"
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
