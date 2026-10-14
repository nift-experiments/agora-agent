import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "VideoModulePosition",
  description: "视频观察器中视频帧的位置。"
};
export let _markdown = `

<a id="enum_videomoduleposition__parameters" />

## 枚举值 [#枚举值]

### \`VIDEO_MODULE_POSITION_POST_CAPTURER\` [#video_module_position_post_capturer]

（1）：本地采集的视频数据在预处理之后的位置，对应 [onCaptureVideoFrame](/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_oncapturevideoframe) 回调。此位置的视频已应用视频预处理效果，可通过开启美颜特效、虚拟背景或水印进行验证。

### \`VIDEO_MODULE_POSITION_PRE_RENDERER\` [#video_module_position_pre_renderer]

（2）：渲染前的位置，对应 [onRenderVideoFrame](/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_onrendervideoframe) 回调中的视频数据。

### \`VIDEO_MODULE_POSITION_PRE_ENCODER\` [#video_module_position_pre_encoder]

（4）：编码前的位置，对应 [onPreEncodeVideoFrame](/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_onpreencodevideoframe) 回调中的视频数据。此位置的视频已应用视频预处理和编码前处理效果。

* 若需验证视频预处理效果，可开启美颜特效、虚拟背景或水印。
* 若需验证编码前处理效果，可设置较低帧率（如 5 fps）。

### \`VIDEO_MODULE_POSITION_POST_CAPTURER_ORIGIN\` [#video_module_position_post_capturer_origin]

（8）：本地视频采集之后、预处理之前的位置。此位置的视频未应用预处理效果，可通过开启美颜特效、虚拟背景或水印进行验证。
`;
export let structuredData = {
  contents: [{
    heading: "video_module_position_post_capturer",
    content: "（1）：本地采集的视频数据在预处理之后的位置，对应 onCaptureVideoFrame 回调。此位置的视频已应用视频预处理效果，可通过开启美颜特效、虚拟背景或水印进行验证。"
  }, {
    heading: "video_module_position_pre_renderer",
    content: "（2）：渲染前的位置，对应 onRenderVideoFrame 回调中的视频数据。"
  }, {
    heading: "video_module_position_pre_encoder",
    content: "（4）：编码前的位置，对应 onPreEncodeVideoFrame 回调中的视频数据。此位置的视频已应用视频预处理和编码前处理效果。"
  }, {
    heading: "video_module_position_pre_encoder",
    content: "若需验证视频预处理效果，可开启美颜特效、虚拟背景或水印。"
  }, {
    heading: "video_module_position_pre_encoder",
    content: "若需验证编码前处理效果，可设置较低帧率（如 5 fps）。"
  }, {
    heading: "video_module_position_post_capturer_origin",
    content: "（8）：本地视频采集之后、预处理之前的位置。此位置的视频未应用预处理效果，可通过开启美颜特效、虚拟背景或水印进行验证。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "video_module_position_post_capturer",
    content: "`VIDEO_MODULE_POSITION_POST_CAPTURER`"
  }, {
    id: "video_module_position_pre_renderer",
    content: "`VIDEO_MODULE_POSITION_PRE_RENDERER`"
  }, {
    id: "video_module_position_pre_encoder",
    content: "`VIDEO_MODULE_POSITION_PRE_ENCODER`"
  }, {
    id: "video_module_position_post_capturer_origin",
    content: "`VIDEO_MODULE_POSITION_POST_CAPTURER_ORIGIN`"
  }]
};
export let toc = [{
  depth: 2,
  url: "#枚举值",
  title: _jsx(_Fragment, {
    children: "枚举值"
  })
}, {
  depth: 3,
  url: "#video_module_position_post_capturer",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "VIDEO_MODULE_POSITION_POST_CAPTURER"
    })
  })
}, {
  depth: 3,
  url: "#video_module_position_pre_renderer",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "VIDEO_MODULE_POSITION_PRE_RENDERER"
    })
  })
}, {
  depth: 3,
  url: "#video_module_position_pre_encoder",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "VIDEO_MODULE_POSITION_PRE_ENCODER"
    })
  })
}, {
  depth: 3,
  url: "#video_module_position_post_capturer_origin",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "VIDEO_MODULE_POSITION_POST_CAPTURER_ORIGIN"
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
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "enum_videomoduleposition__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "video_module_position_post_capturer",
      children: _jsx(_components.code, {
        children: "VIDEO_MODULE_POSITION_POST_CAPTURER"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（1）：本地采集的视频数据在预处理之后的位置，对应 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_oncapturevideoframe",
        children: "onCaptureVideoFrame"
      }), " 回调。此位置的视频已应用视频预处理效果，可通过开启美颜特效、虚拟背景或水印进行验证。"]
    }), `
`, _jsx(_components.h3, {
      id: "video_module_position_pre_renderer",
      children: _jsx(_components.code, {
        children: "VIDEO_MODULE_POSITION_PRE_RENDERER"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（2）：渲染前的位置，对应 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_onrendervideoframe",
        children: "onRenderVideoFrame"
      }), " 回调中的视频数据。"]
    }), `
`, _jsx(_components.h3, {
      id: "video_module_position_pre_encoder",
      children: _jsx(_components.code, {
        children: "VIDEO_MODULE_POSITION_PRE_ENCODER"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（4）：编码前的位置，对应 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_onpreencodevideoframe",
        children: "onPreEncodeVideoFrame"
      }), " 回调中的视频数据。此位置的视频已应用视频预处理和编码前处理效果。"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "若需验证视频预处理效果，可开启美颜特效、虚拟背景或水印。"
      }), `
`, _jsx(_components.li, {
        children: "若需验证编码前处理效果，可设置较低帧率（如 5 fps）。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "video_module_position_post_capturer_origin",
      children: _jsx(_components.code, {
        children: "VIDEO_MODULE_POSITION_POST_CAPTURER_ORIGIN"
      })
    }), `
`, _jsx(_components.p, {
      children: "（8）：本地视频采集之后、预处理之前的位置。此位置的视频未应用预处理效果，可通过开启美颜特效、虚拟背景或水印进行验证。"
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
