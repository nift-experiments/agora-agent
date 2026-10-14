import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "LowLightEnhanceOptions",
  description: "用于配置弱光增强功能。"
};
export let _markdown = `

<a id="class_lowlightenhanceoptions__prototype" />

\`\`\`java
public class LowLightEnhanceOptions {
  public static final int LOW_LIGHT_ENHANCE_AUTO = 0;
  public static final int LOW_LIGHT_ENHANCE_MANUAL = 1;
  public static final int LOW_LIGHT_ENHANCE_LEVEL_HIGH_QUALITY = 0;
  public static final int LOW_LIGHT_ENHANCE_LEVEL_FAST = 1;
  public int lowlightEnhanceMode;
  public int lowlightEnhanceLevel;
}
\`\`\`

<a id="class_lowlightenhanceoptions__detailed_desc" />

### \`自从\` [#自从]

自 v3.6.2 版本新增。

<a id="class_lowlightenhanceoptions__parameters" />

## 属性 [#属性]

### \`LOW_LIGHT_ENHANCE_AUTO\` [#low_light_enhance_auto]

\`0\`：（默认）自动模式。SDK 会根据环境光线自动启用或关闭弱光增强功能，以补偿亮度或防止过曝。

### \`LOW_LIGHT_ENHANCE_MANUAL\` [#low_light_enhance_manual]

\`1\`：手动模式。你需要手动启用或关闭弱光增强功能。

### \`LOW_LIGHT_ENHANCE_LEVEL_HIGH_QUALITY\` [#low_light_enhance_level_high_quality]

\`0\`：（默认）优先保证弱光增强期间的视频质量。处理图像的亮度、细节和噪声，性能开销适中，处理速度适中，整体画质最佳。

### \`LOW_LIGHT_ENHANCE_LEVEL_FAST\` [#low_light_enhance_level_fast]

\`1\`：优先保证弱光增强期间的性能。处理图像的亮度和细节，处理速度更快。

### \`lowlightEnhanceMode\` [#lowlightenhancemode]

弱光增强的工作模式。

* LOW\\_LIGHT\\_ENHANCE\\_AUTO (0)：（默认）自动模式。SDK 会根据环境光线自动启用或关闭弱光增强功能，以补偿亮度或防止过曝。
* LOW\\_LIGHT\\_ENHANCE\\_MANUAL (1)：手动模式。你需要手动启用或关闭弱光增强功能。

### \`lowlightEnhanceLevel\` [#lowlightenhancelevel]

弱光增强的强度等级。

* LOW\\_LIGHT\\_ENHANCE\\_LEVEL\\_HIGH\\_QUALITY (0)：（默认）优先保证弱光增强期间的视频质量。处理亮度、细节及噪声，性能开销适中，处理速度适中，整体画质最佳。
* LOW\\_LIGHT\\_ENHANCE\\_LEVEL\\_FAST (1)：优先保证弱光增强期间的性能。处理亮度和细节，处理速度更快。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v3.6.2 版本新增。"
  }, {
    heading: "low_light_enhance_auto",
    content: "`0`：（默认）自动模式。SDK 会根据环境光线自动启用或关闭弱光增强功能，以补偿亮度或防止过曝。"
  }, {
    heading: "low_light_enhance_manual",
    content: "`1`：手动模式。你需要手动启用或关闭弱光增强功能。"
  }, {
    heading: "low_light_enhance_level_high_quality",
    content: "`0`：（默认）优先保证弱光增强期间的视频质量。处理图像的亮度、细节和噪声，性能开销适中，处理速度适中，整体画质最佳。"
  }, {
    heading: "low_light_enhance_level_fast",
    content: "`1`：优先保证弱光增强期间的性能。处理图像的亮度和细节，处理速度更快。"
  }, {
    heading: "lowlightenhancemode",
    content: "弱光增强的工作模式。"
  }, {
    heading: "lowlightenhancemode",
    content: "LOW\\_LIGHT\\_ENHANCE\\_AUTO (0)：（默认）自动模式。SDK 会根据环境光线自动启用或关闭弱光增强功能，以补偿亮度或防止过曝。"
  }, {
    heading: "lowlightenhancemode",
    content: "LOW\\_LIGHT\\_ENHANCE\\_MANUAL (1)：手动模式。你需要手动启用或关闭弱光增强功能。"
  }, {
    heading: "lowlightenhancelevel",
    content: "弱光增强的强度等级。"
  }, {
    heading: "lowlightenhancelevel",
    content: "LOW\\_LIGHT\\_ENHANCE\\_LEVEL\\_HIGH\\_QUALITY (0)：（默认）优先保证弱光增强期间的视频质量。处理亮度、细节及噪声，性能开销适中，处理速度适中，整体画质最佳。"
  }, {
    heading: "lowlightenhancelevel",
    content: "LOW\\_LIGHT\\_ENHANCE\\_LEVEL\\_FAST (1)：优先保证弱光增强期间的性能。处理亮度和细节，处理速度更快。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "属性",
    content: "属性"
  }, {
    id: "low_light_enhance_auto",
    content: "`LOW_LIGHT_ENHANCE_AUTO`"
  }, {
    id: "low_light_enhance_manual",
    content: "`LOW_LIGHT_ENHANCE_MANUAL`"
  }, {
    id: "low_light_enhance_level_high_quality",
    content: "`LOW_LIGHT_ENHANCE_LEVEL_HIGH_QUALITY`"
  }, {
    id: "low_light_enhance_level_fast",
    content: "`LOW_LIGHT_ENHANCE_LEVEL_FAST`"
  }, {
    id: "lowlightenhancemode",
    content: "`lowlightEnhanceMode`"
  }, {
    id: "lowlightenhancelevel",
    content: "`lowlightEnhanceLevel`"
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
  url: "#low_light_enhance_auto",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "LOW_LIGHT_ENHANCE_AUTO"
    })
  })
}, {
  depth: 3,
  url: "#low_light_enhance_manual",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "LOW_LIGHT_ENHANCE_MANUAL"
    })
  })
}, {
  depth: 3,
  url: "#low_light_enhance_level_high_quality",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "LOW_LIGHT_ENHANCE_LEVEL_HIGH_QUALITY"
    })
  })
}, {
  depth: 3,
  url: "#low_light_enhance_level_fast",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "LOW_LIGHT_ENHANCE_LEVEL_FAST"
    })
  })
}, {
  depth: 3,
  url: "#lowlightenhancemode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "lowlightEnhanceMode"
    })
  })
}, {
  depth: 3,
  url: "#lowlightenhancelevel",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "lowlightEnhanceLevel"
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
      id: "class_lowlightenhanceoptions__prototype"
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
              children: " LowLightEnhanceOptions"
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
              children: " LOW_LIGHT_ENHANCE_AUTO "
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
              children: " LOW_LIGHT_ENHANCE_MANUAL "
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
              children: " LOW_LIGHT_ENHANCE_LEVEL_HIGH_QUALITY "
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
              children: " LOW_LIGHT_ENHANCE_LEVEL_FAST "
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " lowlightEnhanceMode;"
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
              children: " lowlightEnhanceLevel;"
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
      id: "class_lowlightenhanceoptions__detailed_desc"
    }), `
`, _jsx(_components.h3, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.6.2 版本新增。"
    }), `
`, _jsx("a", {
      id: "class_lowlightenhanceoptions__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "low_light_enhance_auto",
      children: _jsx(_components.code, {
        children: "LOW_LIGHT_ENHANCE_AUTO"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "0"
      }), "：（默认）自动模式。SDK 会根据环境光线自动启用或关闭弱光增强功能，以补偿亮度或防止过曝。"]
    }), `
`, _jsx(_components.h3, {
      id: "low_light_enhance_manual",
      children: _jsx(_components.code, {
        children: "LOW_LIGHT_ENHANCE_MANUAL"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "1"
      }), "：手动模式。你需要手动启用或关闭弱光增强功能。"]
    }), `
`, _jsx(_components.h3, {
      id: "low_light_enhance_level_high_quality",
      children: _jsx(_components.code, {
        children: "LOW_LIGHT_ENHANCE_LEVEL_HIGH_QUALITY"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "0"
      }), "：（默认）优先保证弱光增强期间的视频质量。处理图像的亮度、细节和噪声，性能开销适中，处理速度适中，整体画质最佳。"]
    }), `
`, _jsx(_components.h3, {
      id: "low_light_enhance_level_fast",
      children: _jsx(_components.code, {
        children: "LOW_LIGHT_ENHANCE_LEVEL_FAST"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "1"
      }), "：优先保证弱光增强期间的性能。处理图像的亮度和细节，处理速度更快。"]
    }), `
`, _jsx(_components.h3, {
      id: "lowlightenhancemode",
      children: _jsx(_components.code, {
        children: "lowlightEnhanceMode"
      })
    }), `
`, _jsx(_components.p, {
      children: "弱光增强的工作模式。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "LOW_LIGHT_ENHANCE_AUTO (0)：（默认）自动模式。SDK 会根据环境光线自动启用或关闭弱光增强功能，以补偿亮度或防止过曝。"
      }), `
`, _jsx(_components.li, {
        children: "LOW_LIGHT_ENHANCE_MANUAL (1)：手动模式。你需要手动启用或关闭弱光增强功能。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "lowlightenhancelevel",
      children: _jsx(_components.code, {
        children: "lowlightEnhanceLevel"
      })
    }), `
`, _jsx(_components.p, {
      children: "弱光增强的强度等级。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "LOW_LIGHT_ENHANCE_LEVEL_HIGH_QUALITY (0)：（默认）优先保证弱光增强期间的视频质量。处理亮度、细节及噪声，性能开销适中，处理速度适中，整体画质最佳。"
      }), `
`, _jsx(_components.li, {
        children: "LOW_LIGHT_ENHANCE_LEVEL_FAST (1)：优先保证弱光增强期间的性能。处理亮度和细节，处理速度更快。"
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
