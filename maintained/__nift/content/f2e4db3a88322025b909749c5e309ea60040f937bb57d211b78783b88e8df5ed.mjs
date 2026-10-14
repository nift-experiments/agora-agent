import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AgoraVideoFrame",
  description: "用于描述外部视频帧。"
};
export let _markdown = `

<a id="class_externalvideoframe__prototype" />

\`\`\`java
public class AgoraVideoFrame {
  public static final int FORMAT_NONE = -1;
  public static final int FORMAT_TEXTURE_2D = 10;
  public static final int FORMAT_TEXTURE_OES = 11;
  public static final int FORMAT_I420 = 1;
  public static final int FORMAT_BGRA = 2;
  public static final int FORMAT_NV21 = 3;
  public static final int FORMAT_RGBA = 4;
  public static final int FORMAT_I422 = 16;
  public static final int BUFFER_TYPE_NONE = -1;
  public static final int BUFFER_TYPE_BUFFER = 1;
  public static final int BUFFER_TYPE_ARRAY = 2;
  public static final int BUFFER_TYPE_TEXTURE = 3;
  public int format;
  public long timeStamp;
  public int stride;
  public int height;
  public int textureID;
  public boolean syncMode;
  public float[] transform;
  public javax.microedition.khronos.egl.EGLContext eglContext10;
  public android.opengl.EGLContext eglContext14;
  public byte[] buf;
  public int cropLeft;
  public int cropTop;
  public int cropRight;
  public int cropBottom;
  public int rotation;
  public AlphaStitchMode alphaStitchMode;
}
\`\`\`

<a id="class_externalvideoframe__detailed_desc" />

注：

1. stride 的单位为像素（pixel），而非字节（byte）。
2. 帧宽和高可通过以下方式推导：
   * 裁剪后宽度： croppedWidth = strideInPixels - cropLeft - cropRight
   * 裁剪后高度： croppedHeight = height - cropTop - cropBottom
3. 关于裁剪：
   * 如果缓冲区中存在冗余数据，可通过裁剪去除。例如帧大小为 360 × 640，但缓冲区的 stride 为 368，多出的 8 像素用于填充，此时可设置： stride = 368， height = 640， cropRight = 8，其余 cropXXX 默认为 0。

<a id="class_externalvideoframe__parameters" />

## 属性 [#属性]

### \`format\` [#format]

视频数据的格式：

* 10： TEXTURE\\_2D。
* 11： TEXTURE\\_OES，通常为摄像头采集的数据格式。
* 1： I420。
* 3： NV21。
* 4： RGBA。
* 16： I422。

### \`timeStamp\` [#timestamp]

视频帧的时间戳，单位为毫秒。设置错误可能导致视频帧丢失或音视频不同步。

### \`stride\` [#stride]

视频帧的行跨度，单位为像素。对于纹理类型的视频数据，该字段表示纹理的宽度。

### \`height\` [#height]

视频帧的高度。

### \`textureID\` [#textureid]

纹理 ID，仅适用于纹理格式的视频数据。

### \`syncMode\` [#syncmode]

是否启用同步模式，仅适用于纹理格式的视频数据：

* true：启用同步模式，SDK 会等待纹理处理完成。
* false：关闭同步模式。

### \`transform\` [#transform]

纹理帧的附加变换参数，仅适用于纹理格式的视频数据。

### \`eglContext10\` [#eglcontext10]

EGLContext10，仅适用于纹理格式的视频数据。

### \`eglContext14\` [#eglcontext14]

EGLContext14，仅适用于纹理格式的视频数据。详见 \`EGLContext\`。

### \`buf\` [#buf]

视频帧的数据缓冲区。

### \`cropLeft\` [#cropleft]

左侧裁剪的像素数，默认值为 0。

### \`cropTop\` [#croptop]

顶部裁剪的像素数，默认值为 0。

### \`cropRight\` [#cropright]

右侧裁剪的像素数，默认值为 0。

### \`cropBottom\` [#cropbottom]

底部裁剪的像素数，默认值为 0。

### \`rotation\` [#rotation]

顺时针旋转角度，可设置为 0、90、180 或 270，默认值为 0。

### \`alphaStitchMode\` [#alphastitchmode]

视频帧包含 Alpha 通道数据时，表示 \`alphaBuffer\` 与视频帧的相对位置，详见 \`AlphaStitchMode\`：

* ALPHA\\_NO\\_STITCH (0)：默认，仅包含视频帧， alphaBuffer 未拼接。
* ALPHA\\_STITCH\\_UP (1)： alphaBuffer 在视频帧上方。
* ALPHA\\_STITCH\\_BELOW (2)： alphaBuffer 在视频帧下方。
* ALPHA\\_STITCH\\_LEFT (3)： alphaBuffer 在视频帧左侧。
* ALPHA\\_STITCH\\_RIGHT (4)： alphaBuffer 在视频帧右侧。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "注："
  }, {
    heading: undefined,
    content: "stride 的单位为像素（pixel），而非字节（byte）。"
  }, {
    heading: undefined,
    content: "帧宽和高可通过以下方式推导："
  }, {
    heading: undefined,
    content: "裁剪后宽度： croppedWidth = strideInPixels - cropLeft - cropRight"
  }, {
    heading: undefined,
    content: "裁剪后高度： croppedHeight = height - cropTop - cropBottom"
  }, {
    heading: undefined,
    content: "关于裁剪："
  }, {
    heading: undefined,
    content: "如果缓冲区中存在冗余数据，可通过裁剪去除。例如帧大小为 360 × 640，但缓冲区的 stride 为 368，多出的 8 像素用于填充，此时可设置： stride = 368， height = 640， cropRight = 8，其余 cropXXX 默认为 0。"
  }, {
    heading: "format",
    content: "视频数据的格式："
  }, {
    heading: "format",
    content: "10： TEXTURE\\_2D。"
  }, {
    heading: "format",
    content: "11： TEXTURE\\_OES，通常为摄像头采集的数据格式。"
  }, {
    heading: "format",
    content: "1： I420。"
  }, {
    heading: "format",
    content: "3： NV21。"
  }, {
    heading: "format",
    content: "4： RGBA。"
  }, {
    heading: "format",
    content: "16： I422。"
  }, {
    heading: "timestamp",
    content: "视频帧的时间戳，单位为毫秒。设置错误可能导致视频帧丢失或音视频不同步。"
  }, {
    heading: "stride",
    content: "视频帧的行跨度，单位为像素。对于纹理类型的视频数据，该字段表示纹理的宽度。"
  }, {
    heading: "height",
    content: "视频帧的高度。"
  }, {
    heading: "textureid",
    content: "纹理 ID，仅适用于纹理格式的视频数据。"
  }, {
    heading: "syncmode",
    content: "是否启用同步模式，仅适用于纹理格式的视频数据："
  }, {
    heading: "syncmode",
    content: "true：启用同步模式，SDK 会等待纹理处理完成。"
  }, {
    heading: "syncmode",
    content: "false：关闭同步模式。"
  }, {
    heading: "transform",
    content: "纹理帧的附加变换参数，仅适用于纹理格式的视频数据。"
  }, {
    heading: "eglcontext10",
    content: "EGLContext10，仅适用于纹理格式的视频数据。"
  }, {
    heading: "eglcontext14",
    content: "EGLContext14，仅适用于纹理格式的视频数据。详见 `EGLContext`。"
  }, {
    heading: "buf",
    content: "视频帧的数据缓冲区。"
  }, {
    heading: "cropleft",
    content: "左侧裁剪的像素数，默认值为 0。"
  }, {
    heading: "croptop",
    content: "顶部裁剪的像素数，默认值为 0。"
  }, {
    heading: "cropright",
    content: "右侧裁剪的像素数，默认值为 0。"
  }, {
    heading: "cropbottom",
    content: "底部裁剪的像素数，默认值为 0。"
  }, {
    heading: "rotation",
    content: "顺时针旋转角度，可设置为 0、90、180 或 270，默认值为 0。"
  }, {
    heading: "alphastitchmode",
    content: "视频帧包含 Alpha 通道数据时，表示 `alphaBuffer` 与视频帧的相对位置，详见 `AlphaStitchMode`："
  }, {
    heading: "alphastitchmode",
    content: "ALPHA\\_NO\\_STITCH (0)：默认，仅包含视频帧， alphaBuffer 未拼接。"
  }, {
    heading: "alphastitchmode",
    content: "ALPHA\\_STITCH\\_UP (1)： alphaBuffer 在视频帧上方。"
  }, {
    heading: "alphastitchmode",
    content: "ALPHA\\_STITCH\\_BELOW (2)： alphaBuffer 在视频帧下方。"
  }, {
    heading: "alphastitchmode",
    content: "ALPHA\\_STITCH\\_LEFT (3)： alphaBuffer 在视频帧左侧。"
  }, {
    heading: "alphastitchmode",
    content: "ALPHA\\_STITCH\\_RIGHT (4)： alphaBuffer 在视频帧右侧。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "format",
    content: "`format`"
  }, {
    id: "timestamp",
    content: "`timeStamp`"
  }, {
    id: "stride",
    content: "`stride`"
  }, {
    id: "height",
    content: "`height`"
  }, {
    id: "textureid",
    content: "`textureID`"
  }, {
    id: "syncmode",
    content: "`syncMode`"
  }, {
    id: "transform",
    content: "`transform`"
  }, {
    id: "eglcontext10",
    content: "`eglContext10`"
  }, {
    id: "eglcontext14",
    content: "`eglContext14`"
  }, {
    id: "buf",
    content: "`buf`"
  }, {
    id: "cropleft",
    content: "`cropLeft`"
  }, {
    id: "croptop",
    content: "`cropTop`"
  }, {
    id: "cropright",
    content: "`cropRight`"
  }, {
    id: "cropbottom",
    content: "`cropBottom`"
  }, {
    id: "rotation",
    content: "`rotation`"
  }, {
    id: "alphastitchmode",
    content: "`alphaStitchMode`"
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
  url: "#format",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "format"
    })
  })
}, {
  depth: 3,
  url: "#timestamp",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "timeStamp"
    })
  })
}, {
  depth: 3,
  url: "#stride",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "stride"
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
  url: "#textureid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "textureID"
    })
  })
}, {
  depth: 3,
  url: "#syncmode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "syncMode"
    })
  })
}, {
  depth: 3,
  url: "#transform",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "transform"
    })
  })
}, {
  depth: 3,
  url: "#eglcontext10",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "eglContext10"
    })
  })
}, {
  depth: 3,
  url: "#eglcontext14",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "eglContext14"
    })
  })
}, {
  depth: 3,
  url: "#buf",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "buf"
    })
  })
}, {
  depth: 3,
  url: "#cropleft",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "cropLeft"
    })
  })
}, {
  depth: 3,
  url: "#croptop",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "cropTop"
    })
  })
}, {
  depth: 3,
  url: "#cropright",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "cropRight"
    })
  })
}, {
  depth: 3,
  url: "#cropbottom",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "cropBottom"
    })
  })
}, {
  depth: 3,
  url: "#rotation",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rotation"
    })
  })
}, {
  depth: 3,
  url: "#alphastitchmode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "alphaStitchMode"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_externalvideoframe__prototype"
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
              children: " AgoraVideoFrame"
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
              children: " FORMAT_NONE "
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
              children: " -"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1"
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
              children: " FORMAT_TEXTURE_2D "
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
              children: " 10"
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
              children: " FORMAT_TEXTURE_OES "
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
              children: " 11"
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
              children: " FORMAT_I420 "
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
              children: " FORMAT_BGRA "
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
              children: " FORMAT_NV21 "
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
              children: " FORMAT_RGBA "
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
              children: " FORMAT_I422 "
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
              children: " 16"
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
              children: " BUFFER_TYPE_NONE "
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
              children: " -"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1"
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
              children: " BUFFER_TYPE_BUFFER "
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
              children: " BUFFER_TYPE_ARRAY "
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
              children: " BUFFER_TYPE_TEXTURE "
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
              children: " format;"
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
              children: " long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " timeStamp;"
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
              children: " stride;"
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
              children: " textureID;"
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
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " syncMode;"
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
              children: "[] transform;"
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
              children: " javax.microedition.khronos.egl.EGLContext eglContext10;"
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
              children: " android.opengl.EGLContext eglContext14;"
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
              children: " byte"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] buf;"
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
              children: " cropLeft;"
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
              children: " cropTop;"
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
              children: " cropRight;"
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
              children: " cropBottom;"
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
              children: " rotation;"
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
              children: " AlphaStitchMode alphaStitchMode;"
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
      id: "class_externalvideoframe__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "stride 的单位为像素（pixel），而非字节（byte）。"
      }), `
`, _jsxs(_components.li, {
        children: ["帧宽和高可通过以下方式推导：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "裁剪后宽度： croppedWidth = strideInPixels - cropLeft - cropRight"
          }), `
`, _jsx(_components.li, {
            children: "裁剪后高度： croppedHeight = height - cropTop - cropBottom"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["关于裁剪：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "如果缓冲区中存在冗余数据，可通过裁剪去除。例如帧大小为 360 × 640，但缓冲区的 stride 为 368，多出的 8 像素用于填充，此时可设置： stride = 368， height = 640， cropRight = 8，其余 cropXXX 默认为 0。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_externalvideoframe__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "format",
      children: _jsx(_components.code, {
        children: "format"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频数据的格式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "10： TEXTURE_2D。"
      }), `
`, _jsx(_components.li, {
        children: "11： TEXTURE_OES，通常为摄像头采集的数据格式。"
      }), `
`, _jsx(_components.li, {
        children: "1： I420。"
      }), `
`, _jsx(_components.li, {
        children: "3： NV21。"
      }), `
`, _jsx(_components.li, {
        children: "4： RGBA。"
      }), `
`, _jsx(_components.li, {
        children: "16： I422。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "timestamp",
      children: _jsx(_components.code, {
        children: "timeStamp"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频帧的时间戳，单位为毫秒。设置错误可能导致视频帧丢失或音视频不同步。"
    }), `
`, _jsx(_components.h3, {
      id: "stride",
      children: _jsx(_components.code, {
        children: "stride"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频帧的行跨度，单位为像素。对于纹理类型的视频数据，该字段表示纹理的宽度。"
    }), `
`, _jsx(_components.h3, {
      id: "height",
      children: _jsx(_components.code, {
        children: "height"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频帧的高度。"
    }), `
`, _jsx(_components.h3, {
      id: "textureid",
      children: _jsx(_components.code, {
        children: "textureID"
      })
    }), `
`, _jsx(_components.p, {
      children: "纹理 ID，仅适用于纹理格式的视频数据。"
    }), `
`, _jsx(_components.h3, {
      id: "syncmode",
      children: _jsx(_components.code, {
        children: "syncMode"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用同步模式，仅适用于纹理格式的视频数据："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用同步模式，SDK 会等待纹理处理完成。"
      }), `
`, _jsx(_components.li, {
        children: "false：关闭同步模式。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "transform",
      children: _jsx(_components.code, {
        children: "transform"
      })
    }), `
`, _jsx(_components.p, {
      children: "纹理帧的附加变换参数，仅适用于纹理格式的视频数据。"
    }), `
`, _jsx(_components.h3, {
      id: "eglcontext10",
      children: _jsx(_components.code, {
        children: "eglContext10"
      })
    }), `
`, _jsx(_components.p, {
      children: "EGLContext10，仅适用于纹理格式的视频数据。"
    }), `
`, _jsx(_components.h3, {
      id: "eglcontext14",
      children: _jsx(_components.code, {
        children: "eglContext14"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["EGLContext14，仅适用于纹理格式的视频数据。详见 ", _jsx(_components.code, {
        children: "EGLContext"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "buf",
      children: _jsx(_components.code, {
        children: "buf"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频帧的数据缓冲区。"
    }), `
`, _jsx(_components.h3, {
      id: "cropleft",
      children: _jsx(_components.code, {
        children: "cropLeft"
      })
    }), `
`, _jsx(_components.p, {
      children: "左侧裁剪的像素数，默认值为 0。"
    }), `
`, _jsx(_components.h3, {
      id: "croptop",
      children: _jsx(_components.code, {
        children: "cropTop"
      })
    }), `
`, _jsx(_components.p, {
      children: "顶部裁剪的像素数，默认值为 0。"
    }), `
`, _jsx(_components.h3, {
      id: "cropright",
      children: _jsx(_components.code, {
        children: "cropRight"
      })
    }), `
`, _jsx(_components.p, {
      children: "右侧裁剪的像素数，默认值为 0。"
    }), `
`, _jsx(_components.h3, {
      id: "cropbottom",
      children: _jsx(_components.code, {
        children: "cropBottom"
      })
    }), `
`, _jsx(_components.p, {
      children: "底部裁剪的像素数，默认值为 0。"
    }), `
`, _jsx(_components.h3, {
      id: "rotation",
      children: _jsx(_components.code, {
        children: "rotation"
      })
    }), `
`, _jsx(_components.p, {
      children: "顺时针旋转角度，可设置为 0、90、180 或 270，默认值为 0。"
    }), `
`, _jsx(_components.h3, {
      id: "alphastitchmode",
      children: _jsx(_components.code, {
        children: "alphaStitchMode"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频帧包含 Alpha 通道数据时，表示 ", _jsx(_components.code, {
        children: "alphaBuffer"
      }), " 与视频帧的相对位置，详见 ", _jsx(_components.code, {
        children: "AlphaStitchMode"
      }), "："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "ALPHA_NO_STITCH (0)：默认，仅包含视频帧， alphaBuffer 未拼接。"
      }), `
`, _jsx(_components.li, {
        children: "ALPHA_STITCH_UP (1)： alphaBuffer 在视频帧上方。"
      }), `
`, _jsx(_components.li, {
        children: "ALPHA_STITCH_BELOW (2)： alphaBuffer 在视频帧下方。"
      }), `
`, _jsx(_components.li, {
        children: "ALPHA_STITCH_LEFT (3)： alphaBuffer 在视频帧左侧。"
      }), `
`, _jsx(_components.li, {
        children: "ALPHA_STITCH_RIGHT (4)： alphaBuffer 在视频帧右侧。"
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
