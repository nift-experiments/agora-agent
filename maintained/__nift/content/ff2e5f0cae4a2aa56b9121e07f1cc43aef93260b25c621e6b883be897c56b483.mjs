import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "VideoCanvas",
  description: "用于设置视频画布的显示、渲染和布局属性。"
};
export let _markdown = `

<a id="class_videocanvas__prototype" />

\`\`\`java
public class VideoCanvas {
  public int uid;
  public int subviewUid;
  public static final int RENDER_MODE_HIDDEN = 1;
  public static final int RENDER_MODE_FIT = 2;
  public static final int RENDER_MODE_ADAPTIVE = 3;
  public static final int VIEW_SETUP_MODE_REPLACE = 0;
  public static final int VIEW_SETUP_MODE_ADD = 1;
  public static final int VIEW_SETUP_MODE_REMOVE = 2;
  public View view;
  public SurfaceTexture surfaceTexture;
  public int renderMode;
  public int mirrorMode;
  public int setupMode = VIEW_SETUP_MODE_REPLACE;
  public int sourceType;
  public int mediaPlayerId;
  public Rect rect;
  public boolean enableAlphaMask;
  public int backgroundColor;
  public Constants.VideoModulePosition position = Constants.VideoModulePosition.VIDEO_MODULE_POSITION_POST_CAPTURER;
}
\`\`\`

<a id="class_videocanvas__parameters" />

## 属性 [#属性]

### \`uid\` [#uid]

发布视频源的用户 ID。

### \`subviewUid\` [#subviewuid]

在合流视频流中，发布特定子视频流的用户 ID。

### \`RENDER_MODE_HIDDEN\` [#render_mode_hidden]

隐藏模式：按比例缩放视频，直到视窗被填满（可能会裁剪视频的一部分）。

### \`RENDER_MODE_FIT\` [#render_mode_fit]

适应模式：按比例缩放视频，直到某一维度匹配视窗边界，未填满区域用黑色填充。

### \`RENDER_MODE_ADAPTIVE\` [#render_mode_adaptive]

自适应模式。该模式已废弃，声网不推荐使用。

### \`VIEW_SETUP_MODE_REPLACE\` [#view_setup_mode_replace]

设置视图模式为替换模式，默认值。

### \`VIEW_SETUP_MODE_ADD\` [#view_setup_mode_add]

设置视图模式为新增视图。

### \`VIEW_SETUP_MODE_REMOVE\` [#view_setup_mode_remove]

设置视图模式为移除视图。

### \`view\` [#view]

用于显示视频的视图窗口，必须为 \`SurfaceView\` 或 \`TextureView\` 类型。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    在一个 [VideoCanvas](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videocanvas) 中只能设置 \`view\` 或 \`surfaceTexture\`，若同时设置，仅 \`view\` 生效。
  </CalloutDescription>
</CalloutContainer>

### \`surfaceTexture\` [#surfacetexture]

提供视频图像的容器。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    在一个 [VideoCanvas](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videocanvas) 中只能设置 \`view\` 或 \`surfaceTexture\`，若同时设置，仅 \`view\` 生效。
  </CalloutDescription>
</CalloutContainer>

### \`renderMode\` [#rendermode]

渲染模式：

* RENDER\\_MODE\\_HIDDEN (1)：隐藏模式。
* RENDER\\_MODE\\_FIT (2)：适应模式。
* RENDER\\_MODE\\_ADAPTIVE (3)：自适应模式（已废弃，声网不推荐使用）。

### \`mirrorMode\` [#mirrormode]

注：

* 本地视频视图镜像模式：使用前置摄像头时默认开启，后置摄像头时默认关闭。
* 远端用户默认关闭镜像模式。

镜像模式：

* VIDEO\\_MIRROR\\_MODE\\_AUTO (0)：SDK 自动判断是否开启镜像模式。
* VIDEO\\_MIRROR\\_MODE\\_ENABLED (1)：开启本地视图镜像模式。
* VIDEO\\_MIRROR\\_MODE\\_DISABLED (2)：关闭本地视图镜像模式。

### \`setupMode\` [#setupmode]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    不再使用视图时建议将 \`setupMode\` 设置为 \`VIEW_SETUP_MODE_REMOVE\`，以防止渲染资源泄漏。
  </CalloutDescription>
</CalloutContainer>

视图设置模式：

* VIEW\\_SETUP\\_MODE\\_REPLACE (0)：替换视图，默认值。
* VIEW\\_SETUP\\_MODE\\_ADD (1)：新增视图。
* VIEW\\_SETUP\\_MODE\\_REMOVE (2)：删除视图。

### \`sourceType\` [#sourcetype]

视频源类型。详见 [VideoSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype)。

### \`mediaPlayerId\` [#mediaplayerid]

媒体播放器的 ID。

### \`rect\` [#rect]

视频帧的显示区域。 \`width\` 和 \`height\` 表示该区域的视频像素宽高。默认值为 \`null\` （宽或高为 0），表示显示视频帧的实际分辨率。详见 \`Rect\`。

### \`enableAlphaMask\` [#enablealphamask]

是否启用 Alpha 遮罩渲染：

* true：启用。
* false：不启用。

该功能可实现透明图像效果，从视频中提取人像，结合其他功能可实现画中画、水印等效果。

### \`backgroundColor\` [#backgroundcolor]

视频画布的背景颜色，RGBA 格式。默认值为 0x00000000，表示黑色。

注：

* 如果使用 Kotlin 开发并设置为 0xFFFFFFFF 时出现编译错误，可使用 (0xFFFFFFFF).toInt() 或 android.graphics.Color.parseColor("#FFFFFFFF")。
* 当前使用 RGBA 格式时不支持 Alpha 通道。

### \`position\` [#position]

视频帧在视频链路中的观察位置。详见 [VideoModulePosition](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videomoduleposition)。
`;
export let structuredData = {
  contents: [{
    heading: "uid",
    content: "发布视频源的用户 ID。"
  }, {
    heading: "subviewuid",
    content: "在合流视频流中，发布特定子视频流的用户 ID。"
  }, {
    heading: "render_mode_hidden",
    content: "隐藏模式：按比例缩放视频，直到视窗被填满（可能会裁剪视频的一部分）。"
  }, {
    heading: "render_mode_fit",
    content: "适应模式：按比例缩放视频，直到某一维度匹配视窗边界，未填满区域用黑色填充。"
  }, {
    heading: "render_mode_adaptive",
    content: "自适应模式。该模式已废弃，声网不推荐使用。"
  }, {
    heading: "view_setup_mode_replace",
    content: "设置视图模式为替换模式，默认值。"
  }, {
    heading: "view_setup_mode_add",
    content: "设置视图模式为新增视图。"
  }, {
    heading: "view_setup_mode_remove",
    content: "设置视图模式为移除视图。"
  }, {
    heading: "view",
    content: "用于显示视频的视图窗口，必须为 `SurfaceView` 或 `TextureView` 类型。"
  }, {
    heading: "view",
    content: "在一个 VideoCanvas 中只能设置 `view` 或 `surfaceTexture`，若同时设置，仅 `view` 生效。"
  }, {
    heading: "surfacetexture",
    content: "提供视频图像的容器。"
  }, {
    heading: "surfacetexture",
    content: "在一个 VideoCanvas 中只能设置 `view` 或 `surfaceTexture`，若同时设置，仅 `view` 生效。"
  }, {
    heading: "rendermode",
    content: "渲染模式："
  }, {
    heading: "rendermode",
    content: "RENDER\\_MODE\\_HIDDEN (1)：隐藏模式。"
  }, {
    heading: "rendermode",
    content: "RENDER\\_MODE\\_FIT (2)：适应模式。"
  }, {
    heading: "rendermode",
    content: "RENDER\\_MODE\\_ADAPTIVE (3)：自适应模式（已废弃，声网不推荐使用）。"
  }, {
    heading: "mirrormode",
    content: "注："
  }, {
    heading: "mirrormode",
    content: "本地视频视图镜像模式：使用前置摄像头时默认开启，后置摄像头时默认关闭。"
  }, {
    heading: "mirrormode",
    content: "远端用户默认关闭镜像模式。"
  }, {
    heading: "mirrormode",
    content: "镜像模式："
  }, {
    heading: "mirrormode",
    content: "VIDEO\\_MIRROR\\_MODE\\_AUTO (0)：SDK 自动判断是否开启镜像模式。"
  }, {
    heading: "mirrormode",
    content: "VIDEO\\_MIRROR\\_MODE\\_ENABLED (1)：开启本地视图镜像模式。"
  }, {
    heading: "mirrormode",
    content: "VIDEO\\_MIRROR\\_MODE\\_DISABLED (2)：关闭本地视图镜像模式。"
  }, {
    heading: "setupmode",
    content: "不再使用视图时建议将 `setupMode` 设置为 `VIEW_SETUP_MODE_REMOVE`，以防止渲染资源泄漏。"
  }, {
    heading: "setupmode",
    content: "视图设置模式："
  }, {
    heading: "setupmode",
    content: "VIEW\\_SETUP\\_MODE\\_REPLACE (0)：替换视图，默认值。"
  }, {
    heading: "setupmode",
    content: "VIEW\\_SETUP\\_MODE\\_ADD (1)：新增视图。"
  }, {
    heading: "setupmode",
    content: "VIEW\\_SETUP\\_MODE\\_REMOVE (2)：删除视图。"
  }, {
    heading: "sourcetype",
    content: "视频源类型。详见 VideoSourceType。"
  }, {
    heading: "mediaplayerid",
    content: "媒体播放器的 ID。"
  }, {
    heading: "rect",
    content: "视频帧的显示区域。 `width` 和 `height` 表示该区域的视频像素宽高。默认值为 `null` （宽或高为 0），表示显示视频帧的实际分辨率。详见 `Rect`。"
  }, {
    heading: "enablealphamask",
    content: "是否启用 Alpha 遮罩渲染："
  }, {
    heading: "enablealphamask",
    content: "true：启用。"
  }, {
    heading: "enablealphamask",
    content: "false：不启用。"
  }, {
    heading: "enablealphamask",
    content: "该功能可实现透明图像效果，从视频中提取人像，结合其他功能可实现画中画、水印等效果。"
  }, {
    heading: "backgroundcolor",
    content: "视频画布的背景颜色，RGBA 格式。默认值为 0x00000000，表示黑色。"
  }, {
    heading: "backgroundcolor",
    content: "注："
  }, {
    heading: "backgroundcolor",
    content: '如果使用 Kotlin 开发并设置为 0xFFFFFFFF 时出现编译错误，可使用 (0xFFFFFFFF).toInt() 或 android.graphics.Color.parseColor("#FFFFFFFF")。'
  }, {
    heading: "backgroundcolor",
    content: "当前使用 RGBA 格式时不支持 Alpha 通道。"
  }, {
    heading: "position",
    content: "视频帧在视频链路中的观察位置。详见 VideoModulePosition。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "uid",
    content: "`uid`"
  }, {
    id: "subviewuid",
    content: "`subviewUid`"
  }, {
    id: "render_mode_hidden",
    content: "`RENDER_MODE_HIDDEN`"
  }, {
    id: "render_mode_fit",
    content: "`RENDER_MODE_FIT`"
  }, {
    id: "render_mode_adaptive",
    content: "`RENDER_MODE_ADAPTIVE`"
  }, {
    id: "view_setup_mode_replace",
    content: "`VIEW_SETUP_MODE_REPLACE`"
  }, {
    id: "view_setup_mode_add",
    content: "`VIEW_SETUP_MODE_ADD`"
  }, {
    id: "view_setup_mode_remove",
    content: "`VIEW_SETUP_MODE_REMOVE`"
  }, {
    id: "view",
    content: "`view`"
  }, {
    id: "surfacetexture",
    content: "`surfaceTexture`"
  }, {
    id: "rendermode",
    content: "`renderMode`"
  }, {
    id: "mirrormode",
    content: "`mirrorMode`"
  }, {
    id: "setupmode",
    content: "`setupMode`"
  }, {
    id: "sourcetype",
    content: "`sourceType`"
  }, {
    id: "mediaplayerid",
    content: "`mediaPlayerId`"
  }, {
    id: "rect",
    content: "`rect`"
  }, {
    id: "enablealphamask",
    content: "`enableAlphaMask`"
  }, {
    id: "backgroundcolor",
    content: "`backgroundColor`"
  }, {
    id: "position",
    content: "`position`"
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
  url: "#uid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
  })
}, {
  depth: 3,
  url: "#subviewuid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "subviewUid"
    })
  })
}, {
  depth: 3,
  url: "#render_mode_hidden",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "RENDER_MODE_HIDDEN"
    })
  })
}, {
  depth: 3,
  url: "#render_mode_fit",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "RENDER_MODE_FIT"
    })
  })
}, {
  depth: 3,
  url: "#render_mode_adaptive",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "RENDER_MODE_ADAPTIVE"
    })
  })
}, {
  depth: 3,
  url: "#view_setup_mode_replace",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "VIEW_SETUP_MODE_REPLACE"
    })
  })
}, {
  depth: 3,
  url: "#view_setup_mode_add",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "VIEW_SETUP_MODE_ADD"
    })
  })
}, {
  depth: 3,
  url: "#view_setup_mode_remove",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "VIEW_SETUP_MODE_REMOVE"
    })
  })
}, {
  depth: 3,
  url: "#view",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "view"
    })
  })
}, {
  depth: 3,
  url: "#surfacetexture",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "surfaceTexture"
    })
  })
}, {
  depth: 3,
  url: "#rendermode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "renderMode"
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
}, {
  depth: 3,
  url: "#setupmode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "setupMode"
    })
  })
}, {
  depth: 3,
  url: "#sourcetype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sourceType"
    })
  })
}, {
  depth: 3,
  url: "#mediaplayerid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mediaPlayerId"
    })
  })
}, {
  depth: 3,
  url: "#rect",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rect"
    })
  })
}, {
  depth: 3,
  url: "#enablealphamask",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enableAlphaMask"
    })
  })
}, {
  depth: 3,
  url: "#backgroundcolor",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "backgroundColor"
    })
  })
}, {
  depth: 3,
  url: "#position",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "position"
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
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_videocanvas__prototype"
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
              children: " VideoCanvas"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " uid;"
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
              children: " subviewUid;"
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
              children: " RENDER_MODE_HIDDEN "
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
              children: " RENDER_MODE_FIT "
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
              children: " RENDER_MODE_ADAPTIVE "
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
              children: " VIEW_SETUP_MODE_REPLACE "
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
              children: " VIEW_SETUP_MODE_ADD "
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
              children: " VIEW_SETUP_MODE_REMOVE "
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " View view;"
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
              children: " SurfaceTexture surfaceTexture;"
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
              children: " renderMode;"
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
              children: " mirrorMode;"
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
              children: " setupMode "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " VIEW_SETUP_MODE_REPLACE;"
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
              children: " sourceType;"
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
              children: " mediaPlayerId;"
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
              children: " Rect rect;"
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
              children: " enableAlphaMask;"
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
              children: " backgroundColor;"
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
              children: " Constants.VideoModulePosition position "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Constants.VideoModulePosition.VIDEO_MODULE_POSITION_POST_CAPTURER;"
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
      id: "class_videocanvas__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "uid",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "发布视频源的用户 ID。"
    }), `
`, _jsx(_components.h3, {
      id: "subviewuid",
      children: _jsx(_components.code, {
        children: "subviewUid"
      })
    }), `
`, _jsx(_components.p, {
      children: "在合流视频流中，发布特定子视频流的用户 ID。"
    }), `
`, _jsx(_components.h3, {
      id: "render_mode_hidden",
      children: _jsx(_components.code, {
        children: "RENDER_MODE_HIDDEN"
      })
    }), `
`, _jsx(_components.p, {
      children: "隐藏模式：按比例缩放视频，直到视窗被填满（可能会裁剪视频的一部分）。"
    }), `
`, _jsx(_components.h3, {
      id: "render_mode_fit",
      children: _jsx(_components.code, {
        children: "RENDER_MODE_FIT"
      })
    }), `
`, _jsx(_components.p, {
      children: "适应模式：按比例缩放视频，直到某一维度匹配视窗边界，未填满区域用黑色填充。"
    }), `
`, _jsx(_components.h3, {
      id: "render_mode_adaptive",
      children: _jsx(_components.code, {
        children: "RENDER_MODE_ADAPTIVE"
      })
    }), `
`, _jsx(_components.p, {
      children: "自适应模式。该模式已废弃，声网不推荐使用。"
    }), `
`, _jsx(_components.h3, {
      id: "view_setup_mode_replace",
      children: _jsx(_components.code, {
        children: "VIEW_SETUP_MODE_REPLACE"
      })
    }), `
`, _jsx(_components.p, {
      children: "设置视图模式为替换模式，默认值。"
    }), `
`, _jsx(_components.h3, {
      id: "view_setup_mode_add",
      children: _jsx(_components.code, {
        children: "VIEW_SETUP_MODE_ADD"
      })
    }), `
`, _jsx(_components.p, {
      children: "设置视图模式为新增视图。"
    }), `
`, _jsx(_components.h3, {
      id: "view_setup_mode_remove",
      children: _jsx(_components.code, {
        children: "VIEW_SETUP_MODE_REMOVE"
      })
    }), `
`, _jsx(_components.p, {
      children: "设置视图模式为移除视图。"
    }), `
`, _jsx(_components.h3, {
      id: "view",
      children: _jsx(_components.code, {
        children: "view"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用于显示视频的视图窗口，必须为 ", _jsx(_components.code, {
        children: "SurfaceView"
      }), " 或 ", _jsx(_components.code, {
        children: "TextureView"
      }), " 类型。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["在一个 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videocanvas",
            children: "VideoCanvas"
          }), " 中只能设置 ", _jsx(_components.code, {
            children: "view"
          }), " 或 ", _jsx(_components.code, {
            children: "surfaceTexture"
          }), "，若同时设置，仅 ", _jsx(_components.code, {
            children: "view"
          }), " 生效。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "surfacetexture",
      children: _jsx(_components.code, {
        children: "surfaceTexture"
      })
    }), `
`, _jsx(_components.p, {
      children: "提供视频图像的容器。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["在一个 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videocanvas",
            children: "VideoCanvas"
          }), " 中只能设置 ", _jsx(_components.code, {
            children: "view"
          }), " 或 ", _jsx(_components.code, {
            children: "surfaceTexture"
          }), "，若同时设置，仅 ", _jsx(_components.code, {
            children: "view"
          }), " 生效。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "rendermode",
      children: _jsx(_components.code, {
        children: "renderMode"
      })
    }), `
`, _jsx(_components.p, {
      children: "渲染模式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "RENDER_MODE_HIDDEN (1)：隐藏模式。"
      }), `
`, _jsx(_components.li, {
        children: "RENDER_MODE_FIT (2)：适应模式。"
      }), `
`, _jsx(_components.li, {
        children: "RENDER_MODE_ADAPTIVE (3)：自适应模式（已废弃，声网不推荐使用）。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "mirrormode",
      children: _jsx(_components.code, {
        children: "mirrorMode"
      })
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "本地视频视图镜像模式：使用前置摄像头时默认开启，后置摄像头时默认关闭。"
      }), `
`, _jsx(_components.li, {
        children: "远端用户默认关闭镜像模式。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "镜像模式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "VIDEO_MIRROR_MODE_AUTO (0)：SDK 自动判断是否开启镜像模式。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_MIRROR_MODE_ENABLED (1)：开启本地视图镜像模式。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_MIRROR_MODE_DISABLED (2)：关闭本地视图镜像模式。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "setupmode",
      children: _jsx(_components.code, {
        children: "setupMode"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["不再使用视图时建议将 ", _jsx(_components.code, {
            children: "setupMode"
          }), " 设置为 ", _jsx(_components.code, {
            children: "VIEW_SETUP_MODE_REMOVE"
          }), "，以防止渲染资源泄漏。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "视图设置模式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "VIEW_SETUP_MODE_REPLACE (0)：替换视图，默认值。"
      }), `
`, _jsx(_components.li, {
        children: "VIEW_SETUP_MODE_ADD (1)：新增视图。"
      }), `
`, _jsx(_components.li, {
        children: "VIEW_SETUP_MODE_REMOVE (2)：删除视图。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "sourcetype",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频源类型。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype",
        children: "VideoSourceType"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "mediaplayerid",
      children: _jsx(_components.code, {
        children: "mediaPlayerId"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体播放器的 ID。"
    }), `
`, _jsx(_components.h3, {
      id: "rect",
      children: _jsx(_components.code, {
        children: "rect"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频帧的显示区域。 ", _jsx(_components.code, {
        children: "width"
      }), " 和 ", _jsx(_components.code, {
        children: "height"
      }), " 表示该区域的视频像素宽高。默认值为 ", _jsx(_components.code, {
        children: "null"
      }), " （宽或高为 0），表示显示视频帧的实际分辨率。详见 ", _jsx(_components.code, {
        children: "Rect"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "enablealphamask",
      children: _jsx(_components.code, {
        children: "enableAlphaMask"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用 Alpha 遮罩渲染："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用。"
      }), `
`, _jsx(_components.li, {
        children: "false：不启用。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "该功能可实现透明图像效果，从视频中提取人像，结合其他功能可实现画中画、水印等效果。"
    }), `
`, _jsx(_components.h3, {
      id: "backgroundcolor",
      children: _jsx(_components.code, {
        children: "backgroundColor"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频画布的背景颜色，RGBA 格式。默认值为 0x00000000，表示黑色。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: '如果使用 Kotlin 开发并设置为 0xFFFFFFFF 时出现编译错误，可使用 (0xFFFFFFFF).toInt() 或 android.graphics.Color.parseColor("#FFFFFFFF")。'
      }), `
`, _jsx(_components.li, {
        children: "当前使用 RGBA 格式时不支持 Alpha 通道。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "position",
      children: _jsx(_components.code, {
        children: "position"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频帧在视频链路中的观察位置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videomoduleposition",
        children: "VideoModulePosition"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
