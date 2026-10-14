import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "WatermarkBuffer",
  description: "用于配置水印图像的格式、尺寸和像素缓冲区。"
};
export let _markdown = `

<a id="class_watermarkbuffer__prototype" />

\`\`\`java
public class WatermarkBuffer {
  public final static int WATERMARK_BUFFER_FORMAT_I420 = 1;
  public final static int WATERMARK_BUFFER_FORMAT_BGRA = 2;
  public final static int WATERMARK_BUFFER_FORMAT_NV21 = 3;
  public final static int WATERMARK_BUFFER_FORMAT_RGBA = 4;
  public ByteBuffer buffer;
  public int width;
  public int height;
  public int format;
}
\`\`\`

<a id="class_watermarkbuffer__detailed_desc" />

### \`自从\` [#自从]

自 v4.6.0 版本新增。

用于定义水印图像的缓冲区数据结构。

<a id="class_watermarkbuffer__parameters" />

## 属性 [#属性]

### \`WATERMARK_BUFFER_FORMAT_I420\` [#watermark_buffer_format_i420]

指定水印缓冲区的格式为 I420。

### \`WATERMARK_BUFFER_FORMAT_BGRA\` [#watermark_buffer_format_bgra]

指定水印缓冲区的格式为 BGRA。

### \`WATERMARK_BUFFER_FORMAT_NV21\` [#watermark_buffer_format_nv21]

指定水印缓冲区的格式为 NV21。

### \`WATERMARK_BUFFER_FORMAT_RGBA\` [#watermark_buffer_format_rgba]

指定水印缓冲区的格式为 RGBA。

### \`buffer\` [#buffer]

存储水印图像的像素数据。详见 \`ByteBuffer\`。

### \`width\` [#width]

水印图像的宽度，单位为像素。

### \`height\` [#height]

水印图像的高度，单位为像素。

### \`format\` [#format]

水印图像的格式：

* WATERMARK\\_BUFFER\\_FORMAT\\_I420：I420 格式。
* WATERMARK\\_BUFFER\\_FORMAT\\_BGRA：BGRA 格式。
* WATERMARK\\_BUFFER\\_FORMAT\\_NV21：NV21 格式。
* WATERMARK\\_BUFFER\\_FORMAT\\_RGBA：RGBA 格式。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "自从",
    content: "用于定义水印图像的缓冲区数据结构。"
  }, {
    heading: "watermark_buffer_format_i420",
    content: "指定水印缓冲区的格式为 I420。"
  }, {
    heading: "watermark_buffer_format_bgra",
    content: "指定水印缓冲区的格式为 BGRA。"
  }, {
    heading: "watermark_buffer_format_nv21",
    content: "指定水印缓冲区的格式为 NV21。"
  }, {
    heading: "watermark_buffer_format_rgba",
    content: "指定水印缓冲区的格式为 RGBA。"
  }, {
    heading: "buffer",
    content: "存储水印图像的像素数据。详见 `ByteBuffer`。"
  }, {
    heading: "width",
    content: "水印图像的宽度，单位为像素。"
  }, {
    heading: "height",
    content: "水印图像的高度，单位为像素。"
  }, {
    heading: "format",
    content: "水印图像的格式："
  }, {
    heading: "format",
    content: "WATERMARK\\_BUFFER\\_FORMAT\\_I420：I420 格式。"
  }, {
    heading: "format",
    content: "WATERMARK\\_BUFFER\\_FORMAT\\_BGRA：BGRA 格式。"
  }, {
    heading: "format",
    content: "WATERMARK\\_BUFFER\\_FORMAT\\_NV21：NV21 格式。"
  }, {
    heading: "format",
    content: "WATERMARK\\_BUFFER\\_FORMAT\\_RGBA：RGBA 格式。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "属性",
    content: "属性"
  }, {
    id: "watermark_buffer_format_i420",
    content: "`WATERMARK_BUFFER_FORMAT_I420`"
  }, {
    id: "watermark_buffer_format_bgra",
    content: "`WATERMARK_BUFFER_FORMAT_BGRA`"
  }, {
    id: "watermark_buffer_format_nv21",
    content: "`WATERMARK_BUFFER_FORMAT_NV21`"
  }, {
    id: "watermark_buffer_format_rgba",
    content: "`WATERMARK_BUFFER_FORMAT_RGBA`"
  }, {
    id: "buffer",
    content: "`buffer`"
  }, {
    id: "width",
    content: "`width`"
  }, {
    id: "height",
    content: "`height`"
  }, {
    id: "format",
    content: "`format`"
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
  url: "#watermark_buffer_format_i420",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "WATERMARK_BUFFER_FORMAT_I420"
    })
  })
}, {
  depth: 3,
  url: "#watermark_buffer_format_bgra",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "WATERMARK_BUFFER_FORMAT_BGRA"
    })
  })
}, {
  depth: 3,
  url: "#watermark_buffer_format_nv21",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "WATERMARK_BUFFER_FORMAT_NV21"
    })
  })
}, {
  depth: 3,
  url: "#watermark_buffer_format_rgba",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "WATERMARK_BUFFER_FORMAT_RGBA"
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
}, {
  depth: 3,
  url: "#format",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "format"
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
      id: "class_watermarkbuffer__prototype"
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
              children: " WatermarkBuffer"
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
              children: " final"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " WATERMARK_BUFFER_FORMAT_I420 "
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
              children: " final"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " WATERMARK_BUFFER_FORMAT_BGRA "
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
              children: " final"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " WATERMARK_BUFFER_FORMAT_NV21 "
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
              children: " final"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " WATERMARK_BUFFER_FORMAT_RGBA "
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ByteBuffer buffer;"
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
              children: " format;"
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
      id: "class_watermarkbuffer__detailed_desc"
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
`, _jsx(_components.p, {
      children: "用于定义水印图像的缓冲区数据结构。"
    }), `
`, _jsx("a", {
      id: "class_watermarkbuffer__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "watermark_buffer_format_i420",
      children: _jsx(_components.code, {
        children: "WATERMARK_BUFFER_FORMAT_I420"
      })
    }), `
`, _jsx(_components.p, {
      children: "指定水印缓冲区的格式为 I420。"
    }), `
`, _jsx(_components.h3, {
      id: "watermark_buffer_format_bgra",
      children: _jsx(_components.code, {
        children: "WATERMARK_BUFFER_FORMAT_BGRA"
      })
    }), `
`, _jsx(_components.p, {
      children: "指定水印缓冲区的格式为 BGRA。"
    }), `
`, _jsx(_components.h3, {
      id: "watermark_buffer_format_nv21",
      children: _jsx(_components.code, {
        children: "WATERMARK_BUFFER_FORMAT_NV21"
      })
    }), `
`, _jsx(_components.p, {
      children: "指定水印缓冲区的格式为 NV21。"
    }), `
`, _jsx(_components.h3, {
      id: "watermark_buffer_format_rgba",
      children: _jsx(_components.code, {
        children: "WATERMARK_BUFFER_FORMAT_RGBA"
      })
    }), `
`, _jsx(_components.p, {
      children: "指定水印缓冲区的格式为 RGBA。"
    }), `
`, _jsx(_components.h3, {
      id: "buffer",
      children: _jsx(_components.code, {
        children: "buffer"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["存储水印图像的像素数据。详见 ", _jsx(_components.code, {
        children: "ByteBuffer"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "width",
      children: _jsx(_components.code, {
        children: "width"
      })
    }), `
`, _jsx(_components.p, {
      children: "水印图像的宽度，单位为像素。"
    }), `
`, _jsx(_components.h3, {
      id: "height",
      children: _jsx(_components.code, {
        children: "height"
      })
    }), `
`, _jsx(_components.p, {
      children: "水印图像的高度，单位为像素。"
    }), `
`, _jsx(_components.h3, {
      id: "format",
      children: _jsx(_components.code, {
        children: "format"
      })
    }), `
`, _jsx(_components.p, {
      children: "水印图像的格式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "WATERMARK_BUFFER_FORMAT_I420：I420 格式。"
      }), `
`, _jsx(_components.li, {
        children: "WATERMARK_BUFFER_FORMAT_BGRA：BGRA 格式。"
      }), `
`, _jsx(_components.li, {
        children: "WATERMARK_BUFFER_FORMAT_NV21：NV21 格式。"
      }), `
`, _jsx(_components.li, {
        children: "WATERMARK_BUFFER_FORMAT_RGBA：RGBA 格式。"
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
