import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "VideoDenoiserOptions",
  description: "用于设置视频降噪选项。"
};
export let _markdown = `

<a id="class_videodenoiseroptions__prototype" />

\`\`\`java
public class VideoDenoiserOptions {
  public static final int VIDEO_DENOISER_AUTO = 0;
  public static final int VIDEO_DENOISER_MANUAL = 1;
  public static final int VIDEO_DENOISER_LEVEL_HIGH_QUALITY = 0;
  public static final int VIDEO_DENOISER_LEVEL_FAST = 1;
  public int denoiserMode;
  public int denoiserLevel;
}
\`\`\`

<a id="class_videodenoiseroptions__detailed_desc" />

### \`自从\` [#自从]

自 v3.6.2 版本新增。

<a id="class_videodenoiseroptions__parameters" />

## 属性 [#属性]

### \`VIDEO_DENOISER_AUTO\` [#video_denoiser_auto]

\`0\`：（默认）自动模式。SDK 会根据环境光线自动启用或关闭视频降噪功能。

### \`VIDEO_DENOISER_MANUAL\` [#video_denoiser_manual]

\`1\`：手动模式。你需手动启用或关闭视频降噪功能。

### \`VIDEO_DENOISER_LEVEL_HIGH_QUALITY\` [#video_denoiser_level_high_quality]

\`0\`：（默认）提升视频质量的降噪模式。该模式在性能消耗与降噪质量之间取得平衡，性能消耗适中，降噪速度适中，整体视频质量最佳。

### \`VIDEO_DENOISER_LEVEL_FAST\` [#video_denoiser_level_fast]

\`1\`：提升性能效率的降噪模式。该模式优先考虑降低性能消耗而非降噪质量，性能消耗较低，降噪速度较快。为避免处理后的视频出现拖影效果（移动物体后方的残影），声网推荐在摄像头固定的情况下使用该设置。

### \`denoiserMode\` [#denoisermode]

视频降噪模式。

* VIDEO\\_DENOISER\\_AUTO （0）：（默认）自动模式。SDK 会根据环境光线自动启用或关闭视频降噪功能。
* VIDEO\\_DENOISER\\_MANUAL （1）：手动模式。你需手动启用或关闭视频降噪功能。

### \`denoiserLevel\` [#denoiserlevel]

视频降噪等级。

* VIDEO\\_DENOISER\\_LEVEL\\_HIGH\\_QUALITY （0）：（默认）在弱光增强过程中提升视频质量。会处理视频图像的亮度、细节和噪声，性能消耗适中，处理速度适中，整体视频质量最佳。
* VIDEO\\_DENOISER\\_LEVEL\\_FAST （1）：提升性能效率的降噪模式。该模式优先考虑降低性能消耗而非降噪质量，性能消耗较低，降噪速度较快。为避免处理后的视频出现拖影效果（移动物体后方的残影），声网推荐在摄像头固定的情况下使用该设置。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v3.6.2 版本新增。"
  }, {
    heading: "video_denoiser_auto",
    content: "`0`：（默认）自动模式。SDK 会根据环境光线自动启用或关闭视频降噪功能。"
  }, {
    heading: "video_denoiser_manual",
    content: "`1`：手动模式。你需手动启用或关闭视频降噪功能。"
  }, {
    heading: "video_denoiser_level_high_quality",
    content: "`0`：（默认）提升视频质量的降噪模式。该模式在性能消耗与降噪质量之间取得平衡，性能消耗适中，降噪速度适中，整体视频质量最佳。"
  }, {
    heading: "video_denoiser_level_fast",
    content: "`1`：提升性能效率的降噪模式。该模式优先考虑降低性能消耗而非降噪质量，性能消耗较低，降噪速度较快。为避免处理后的视频出现拖影效果（移动物体后方的残影），声网推荐在摄像头固定的情况下使用该设置。"
  }, {
    heading: "denoisermode",
    content: "视频降噪模式。"
  }, {
    heading: "denoisermode",
    content: "VIDEO\\_DENOISER\\_AUTO （0）：（默认）自动模式。SDK 会根据环境光线自动启用或关闭视频降噪功能。"
  }, {
    heading: "denoisermode",
    content: "VIDEO\\_DENOISER\\_MANUAL （1）：手动模式。你需手动启用或关闭视频降噪功能。"
  }, {
    heading: "denoiserlevel",
    content: "视频降噪等级。"
  }, {
    heading: "denoiserlevel",
    content: "VIDEO\\_DENOISER\\_LEVEL\\_HIGH\\_QUALITY （0）：（默认）在弱光增强过程中提升视频质量。会处理视频图像的亮度、细节和噪声，性能消耗适中，处理速度适中，整体视频质量最佳。"
  }, {
    heading: "denoiserlevel",
    content: "VIDEO\\_DENOISER\\_LEVEL\\_FAST （1）：提升性能效率的降噪模式。该模式优先考虑降低性能消耗而非降噪质量，性能消耗较低，降噪速度较快。为避免处理后的视频出现拖影效果（移动物体后方的残影），声网推荐在摄像头固定的情况下使用该设置。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "属性",
    content: "属性"
  }, {
    id: "video_denoiser_auto",
    content: "`VIDEO_DENOISER_AUTO`"
  }, {
    id: "video_denoiser_manual",
    content: "`VIDEO_DENOISER_MANUAL`"
  }, {
    id: "video_denoiser_level_high_quality",
    content: "`VIDEO_DENOISER_LEVEL_HIGH_QUALITY`"
  }, {
    id: "video_denoiser_level_fast",
    content: "`VIDEO_DENOISER_LEVEL_FAST`"
  }, {
    id: "denoisermode",
    content: "`denoiserMode`"
  }, {
    id: "denoiserlevel",
    content: "`denoiserLevel`"
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
  url: "#video_denoiser_auto",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "VIDEO_DENOISER_AUTO"
    })
  })
}, {
  depth: 3,
  url: "#video_denoiser_manual",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "VIDEO_DENOISER_MANUAL"
    })
  })
}, {
  depth: 3,
  url: "#video_denoiser_level_high_quality",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "VIDEO_DENOISER_LEVEL_HIGH_QUALITY"
    })
  })
}, {
  depth: 3,
  url: "#video_denoiser_level_fast",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "VIDEO_DENOISER_LEVEL_FAST"
    })
  })
}, {
  depth: 3,
  url: "#denoisermode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "denoiserMode"
    })
  })
}, {
  depth: 3,
  url: "#denoiserlevel",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "denoiserLevel"
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
      id: "class_videodenoiseroptions__prototype"
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
              children: " VideoDenoiserOptions"
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
              children: " VIDEO_DENOISER_AUTO "
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
              children: " VIDEO_DENOISER_MANUAL "
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
              children: " VIDEO_DENOISER_LEVEL_HIGH_QUALITY "
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
              children: " VIDEO_DENOISER_LEVEL_FAST "
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
              children: " denoiserMode;"
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
              children: " denoiserLevel;"
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
      id: "class_videodenoiseroptions__detailed_desc"
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
      id: "class_videodenoiseroptions__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "video_denoiser_auto",
      children: _jsx(_components.code, {
        children: "VIDEO_DENOISER_AUTO"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "0"
      }), "：（默认）自动模式。SDK 会根据环境光线自动启用或关闭视频降噪功能。"]
    }), `
`, _jsx(_components.h3, {
      id: "video_denoiser_manual",
      children: _jsx(_components.code, {
        children: "VIDEO_DENOISER_MANUAL"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "1"
      }), "：手动模式。你需手动启用或关闭视频降噪功能。"]
    }), `
`, _jsx(_components.h3, {
      id: "video_denoiser_level_high_quality",
      children: _jsx(_components.code, {
        children: "VIDEO_DENOISER_LEVEL_HIGH_QUALITY"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "0"
      }), "：（默认）提升视频质量的降噪模式。该模式在性能消耗与降噪质量之间取得平衡，性能消耗适中，降噪速度适中，整体视频质量最佳。"]
    }), `
`, _jsx(_components.h3, {
      id: "video_denoiser_level_fast",
      children: _jsx(_components.code, {
        children: "VIDEO_DENOISER_LEVEL_FAST"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "1"
      }), "：提升性能效率的降噪模式。该模式优先考虑降低性能消耗而非降噪质量，性能消耗较低，降噪速度较快。为避免处理后的视频出现拖影效果（移动物体后方的残影），声网推荐在摄像头固定的情况下使用该设置。"]
    }), `
`, _jsx(_components.h3, {
      id: "denoisermode",
      children: _jsx(_components.code, {
        children: "denoiserMode"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频降噪模式。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "VIDEO_DENOISER_AUTO （0）：（默认）自动模式。SDK 会根据环境光线自动启用或关闭视频降噪功能。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_DENOISER_MANUAL （1）：手动模式。你需手动启用或关闭视频降噪功能。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "denoiserlevel",
      children: _jsx(_components.code, {
        children: "denoiserLevel"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频降噪等级。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "VIDEO_DENOISER_LEVEL_HIGH_QUALITY （0）：（默认）在弱光增强过程中提升视频质量。会处理视频图像的亮度、细节和噪声，性能消耗适中，处理速度适中，整体视频质量最佳。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_DENOISER_LEVEL_FAST （1）：提升性能效率的降噪模式。该模式优先考虑降低性能消耗而非降噪质量，性能消耗较低，降噪速度较快。为避免处理后的视频出现拖影效果（移动物体后方的残影），声网推荐在摄像头固定的情况下使用该设置。"
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
