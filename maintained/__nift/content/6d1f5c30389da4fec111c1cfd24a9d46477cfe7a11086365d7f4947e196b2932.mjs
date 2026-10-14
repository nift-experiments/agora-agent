import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "WatermarkConfig",
  description: "用于配置水印相关信息。"
};
export let _markdown = `

<a id="class_watermarkconfig__prototype" />

\`\`\`java
public class WatermarkConfig {
  public static final int WATERMARK_TYPE_IMAGE = 0;
  public static final int WATERMARK_TYPE_BUFFER = 1;
  public String id;
  public int type;
  public WatermarkBuffer buffer = new WatermarkBuffer();
  public String imageUrl;
  public WatermarkOptions options = new WatermarkOptions();
}
\`\`\`

<a id="class_watermarkconfig__detailed_desc" />

### \`自从\` [#自从]

自 v4.6.0 版本新增。

<a id="class_watermarkconfig__parameters" />

## 属性 [#属性]

### \`WATERMARK_TYPE_IMAGE\` [#watermark_type_image]

指定水印类型为图片。

### \`WATERMARK_TYPE_BUFFER\` [#watermark_type_buffer]

指定水印类型为内存缓冲区。

### \`id\` [#id]

水印的唯一标识符，通常使用 UUID 生成。

### \`type\` [#type]

水印类型：

* WATERMARK\\_TYPE\\_IMAGE：图片类型。
* WATERMARK\\_TYPE\\_BUFFER：缓冲区类型。

### \`buffer\` [#buffer]

包含水印图像数据的缓冲区。详见 [WatermarkBuffer](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkbuffer)。

### \`imageUrl\` [#imageurl]

用于加载水印图片的 URL 地址。

### \`options\` [#options]

定义水印位置和大小的选项。详见 [WatermarkOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkoptions)。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "watermark_type_image",
    content: "指定水印类型为图片。"
  }, {
    heading: "watermark_type_buffer",
    content: "指定水印类型为内存缓冲区。"
  }, {
    heading: "id",
    content: "水印的唯一标识符，通常使用 UUID 生成。"
  }, {
    heading: "type",
    content: "水印类型："
  }, {
    heading: "type",
    content: "WATERMARK\\_TYPE\\_IMAGE：图片类型。"
  }, {
    heading: "type",
    content: "WATERMARK\\_TYPE\\_BUFFER：缓冲区类型。"
  }, {
    heading: "buffer",
    content: "包含水印图像数据的缓冲区。详见 WatermarkBuffer。"
  }, {
    heading: "imageurl",
    content: "用于加载水印图片的 URL 地址。"
  }, {
    heading: "options",
    content: "定义水印位置和大小的选项。详见 WatermarkOptions。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "属性",
    content: "属性"
  }, {
    id: "watermark_type_image",
    content: "`WATERMARK_TYPE_IMAGE`"
  }, {
    id: "watermark_type_buffer",
    content: "`WATERMARK_TYPE_BUFFER`"
  }, {
    id: "id",
    content: "`id`"
  }, {
    id: "type",
    content: "`type`"
  }, {
    id: "buffer",
    content: "`buffer`"
  }, {
    id: "imageurl",
    content: "`imageUrl`"
  }, {
    id: "options",
    content: "`options`"
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
  url: "#watermark_type_image",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "WATERMARK_TYPE_IMAGE"
    })
  })
}, {
  depth: 3,
  url: "#watermark_type_buffer",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "WATERMARK_TYPE_BUFFER"
    })
  })
}, {
  depth: 3,
  url: "#id",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "id"
    })
  })
}, {
  depth: 3,
  url: "#type",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "type"
    })
  })
}, {
  depth: 3,
  url: "#buffer",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "buffer"
    })
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
  url: "#options",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "options"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      id: "class_watermarkconfig__prototype"
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
              children: " WatermarkConfig"
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
              children: " WATERMARK_TYPE_IMAGE "
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
              children: " WATERMARK_TYPE_BUFFER "
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String id;"
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
              children: " type;"
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
              children: " WatermarkBuffer buffer "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " WatermarkBuffer"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "();"
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
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " WatermarkOptions options "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " WatermarkOptions"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "();"
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
      id: "class_watermarkconfig__detailed_desc"
    }), `
`, _jsx(_components.h3, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "class_watermarkconfig__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "watermark_type_image",
      children: _jsx(_components.code, {
        children: "WATERMARK_TYPE_IMAGE"
      })
    }), `
`, _jsx(_components.p, {
      children: "指定水印类型为图片。"
    }), `
`, _jsx(_components.h3, {
      id: "watermark_type_buffer",
      children: _jsx(_components.code, {
        children: "WATERMARK_TYPE_BUFFER"
      })
    }), `
`, _jsx(_components.p, {
      children: "指定水印类型为内存缓冲区。"
    }), `
`, _jsx(_components.h3, {
      id: "id",
      children: _jsx(_components.code, {
        children: "id"
      })
    }), `
`, _jsx(_components.p, {
      children: "水印的唯一标识符，通常使用 UUID 生成。"
    }), `
`, _jsx(_components.h3, {
      id: "type",
      children: _jsx(_components.code, {
        children: "type"
      })
    }), `
`, _jsx(_components.p, {
      children: "水印类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "WATERMARK_TYPE_IMAGE：图片类型。"
      }), `
`, _jsx(_components.li, {
        children: "WATERMARK_TYPE_BUFFER：缓冲区类型。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "buffer",
      children: _jsx(_components.code, {
        children: "buffer"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["包含水印图像数据的缓冲区。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkbuffer",
        children: "WatermarkBuffer"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "imageurl",
      children: _jsx(_components.code, {
        children: "imageUrl"
      })
    }), `
`, _jsx(_components.p, {
      children: "用于加载水印图片的 URL 地址。"
    }), `
`, _jsx(_components.h3, {
      id: "options",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["定义水印位置和大小的选项。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkoptions",
        children: "WatermarkOptions"
      }), "。"]
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
