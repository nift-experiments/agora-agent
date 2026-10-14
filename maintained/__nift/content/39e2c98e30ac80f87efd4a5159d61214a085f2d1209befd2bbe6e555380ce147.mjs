import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "DEGRADATION_PREFERENCE",
  description: "带宽受限时的视频降级偏好设置。"
};
export let _markdown = `

<a id="enum_degradationpreference__parameters" />

## 枚举值 [#枚举值]

### \`MAINTAIN_AUTO\` [#maintain_auto]

（-1）：（默认）自动模式。SDK 会根据设置的视频场景自动选择 \`MAINTAIN_FRAMERATE\`、 \`MAINTAIN_BALANCED\` 或 \`MAINTAIN_RESOLUTION\`，以实现最佳的整体体验质量（QoE）。

### \`MAINTAIN_QUALITY\` [#maintain_quality]

（0）：在带宽受限的视频编码过程中，优先降低帧率以保持分辨率。适用于对视频质量要求较高的场景。

### \`MAINTAIN_FRAMERATE\` [#maintain_framerate]

（1）：在带宽受限的视频编码过程中，优先降低分辨率以保持帧率。

### \`MAINTAIN_BALANCED\` [#maintain_balanced]

（2）：在带宽受限的视频编码过程中，同时降低帧率和分辨率。该模式的降级程度低于 \`MAINTAIN_QUALITY\` 和 \`MAINTAIN_FRAMERATE\`，适用于对流畅度和视频质量均有要求的场景。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    发送端视频的分辨率可能会发生变化，远端用户需要处理该问题。详见 [onVideoSizeChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onvideosizechanged)。
  </CalloutDescription>
</CalloutContainer>

### \`MAINTAIN_RESOLUTION\` [#maintain_resolution]

（3）：在带宽受限的视频编码过程中，优先降低帧率以保持分辨率。适用于对视频质量要求较高的场景。

### \`DISABLED\` [#disabled]

（100）：关闭视频质量控制（VQC）调节功能。
`;
export let structuredData = {
  contents: [{
    heading: "maintain_auto",
    content: "（-1）：（默认）自动模式。SDK 会根据设置的视频场景自动选择 `MAINTAIN_FRAMERATE`、 `MAINTAIN_BALANCED` 或 `MAINTAIN_RESOLUTION`，以实现最佳的整体体验质量（QoE）。"
  }, {
    heading: "maintain_quality",
    content: "（0）：在带宽受限的视频编码过程中，优先降低帧率以保持分辨率。适用于对视频质量要求较高的场景。"
  }, {
    heading: "maintain_framerate",
    content: "（1）：在带宽受限的视频编码过程中，优先降低分辨率以保持帧率。"
  }, {
    heading: "maintain_balanced",
    content: "（2）：在带宽受限的视频编码过程中，同时降低帧率和分辨率。该模式的降级程度低于 `MAINTAIN_QUALITY` 和 `MAINTAIN_FRAMERATE`，适用于对流畅度和视频质量均有要求的场景。"
  }, {
    heading: "maintain_balanced",
    content: "发送端视频的分辨率可能会发生变化，远端用户需要处理该问题。详见 onVideoSizeChanged。"
  }, {
    heading: "maintain_resolution",
    content: "（3）：在带宽受限的视频编码过程中，优先降低帧率以保持分辨率。适用于对视频质量要求较高的场景。"
  }, {
    heading: "disabled",
    content: "（100）：关闭视频质量控制（VQC）调节功能。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "maintain_auto",
    content: "`MAINTAIN_AUTO`"
  }, {
    id: "maintain_quality",
    content: "`MAINTAIN_QUALITY`"
  }, {
    id: "maintain_framerate",
    content: "`MAINTAIN_FRAMERATE`"
  }, {
    id: "maintain_balanced",
    content: "`MAINTAIN_BALANCED`"
  }, {
    id: "maintain_resolution",
    content: "`MAINTAIN_RESOLUTION`"
  }, {
    id: "disabled",
    content: "`DISABLED`"
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
  url: "#maintain_auto",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MAINTAIN_AUTO"
    })
  })
}, {
  depth: 3,
  url: "#maintain_quality",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MAINTAIN_QUALITY"
    })
  })
}, {
  depth: 3,
  url: "#maintain_framerate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MAINTAIN_FRAMERATE"
    })
  })
}, {
  depth: 3,
  url: "#maintain_balanced",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MAINTAIN_BALANCED"
    })
  })
}, {
  depth: 3,
  url: "#maintain_resolution",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MAINTAIN_RESOLUTION"
    })
  })
}, {
  depth: 3,
  url: "#disabled",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "DISABLED"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
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
      id: "enum_degradationpreference__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "maintain_auto",
      children: _jsx(_components.code, {
        children: "MAINTAIN_AUTO"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（-1）：（默认）自动模式。SDK 会根据设置的视频场景自动选择 ", _jsx(_components.code, {
        children: "MAINTAIN_FRAMERATE"
      }), "、 ", _jsx(_components.code, {
        children: "MAINTAIN_BALANCED"
      }), " 或 ", _jsx(_components.code, {
        children: "MAINTAIN_RESOLUTION"
      }), "，以实现最佳的整体体验质量（QoE）。"]
    }), `
`, _jsx(_components.h3, {
      id: "maintain_quality",
      children: _jsx(_components.code, {
        children: "MAINTAIN_QUALITY"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：在带宽受限的视频编码过程中，优先降低帧率以保持分辨率。适用于对视频质量要求较高的场景。"
    }), `
`, _jsx(_components.h3, {
      id: "maintain_framerate",
      children: _jsx(_components.code, {
        children: "MAINTAIN_FRAMERATE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：在带宽受限的视频编码过程中，优先降低分辨率以保持帧率。"
    }), `
`, _jsx(_components.h3, {
      id: "maintain_balanced",
      children: _jsx(_components.code, {
        children: "MAINTAIN_BALANCED"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（2）：在带宽受限的视频编码过程中，同时降低帧率和分辨率。该模式的降级程度低于 ", _jsx(_components.code, {
        children: "MAINTAIN_QUALITY"
      }), " 和 ", _jsx(_components.code, {
        children: "MAINTAIN_FRAMERATE"
      }), "，适用于对流畅度和视频质量均有要求的场景。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["发送端视频的分辨率可能会发生变化，远端用户需要处理该问题。详见 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onvideosizechanged",
            children: "onVideoSizeChanged"
          }), "。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "maintain_resolution",
      children: _jsx(_components.code, {
        children: "MAINTAIN_RESOLUTION"
      })
    }), `
`, _jsx(_components.p, {
      children: "（3）：在带宽受限的视频编码过程中，优先降低帧率以保持分辨率。适用于对视频质量要求较高的场景。"
    }), `
`, _jsx(_components.h3, {
      id: "disabled",
      children: _jsx(_components.code, {
        children: "DISABLED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（100）：关闭视频质量控制（VQC）调节功能。"
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
