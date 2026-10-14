import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "ENCODING_PREFERENCE",
  description: "视频编码器偏好。"
};
export let _markdown = `

<a id="enum_encodingpreference__parameters" />

## 枚举值 [#枚举值]

### \`PREFER_AUTO\` [#prefer_auto]

（-1）：自适应偏好。SDK 会根据平台和设备类型等因素自动选择最优的视频编码方式。

### \`PREFER_SOFTWARE\` [#prefer_software]

（0）：软件编码偏好。SDK 优先使用软件编码器进行视频编码。

### \`PREFER_HARDWARE\` [#prefer_hardware]

（1）：硬件编码偏好。SDK 优先使用硬件编码器进行视频编码。当设备不支持硬件编码时，SDK 会自动使用软件编码，并通过 [onLocalVideoStats](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostats) 回调中的 \`hwEncoderAccelerating\` 报告当前使用的视频编码器类型。
`;
export let structuredData = {
  contents: [{
    heading: "prefer_auto",
    content: "（-1）：自适应偏好。SDK 会根据平台和设备类型等因素自动选择最优的视频编码方式。"
  }, {
    heading: "prefer_software",
    content: "（0）：软件编码偏好。SDK 优先使用软件编码器进行视频编码。"
  }, {
    heading: "prefer_hardware",
    content: "（1）：硬件编码偏好。SDK 优先使用硬件编码器进行视频编码。当设备不支持硬件编码时，SDK 会自动使用软件编码，并通过 onLocalVideoStats 回调中的 `hwEncoderAccelerating` 报告当前使用的视频编码器类型。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "prefer_auto",
    content: "`PREFER_AUTO`"
  }, {
    id: "prefer_software",
    content: "`PREFER_SOFTWARE`"
  }, {
    id: "prefer_hardware",
    content: "`PREFER_HARDWARE`"
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
  url: "#prefer_auto",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PREFER_AUTO"
    })
  })
}, {
  depth: 3,
  url: "#prefer_software",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PREFER_SOFTWARE"
    })
  })
}, {
  depth: 3,
  url: "#prefer_hardware",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PREFER_HARDWARE"
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "enum_encodingpreference__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "prefer_auto",
      children: _jsx(_components.code, {
        children: "PREFER_AUTO"
      })
    }), `
`, _jsx(_components.p, {
      children: "（-1）：自适应偏好。SDK 会根据平台和设备类型等因素自动选择最优的视频编码方式。"
    }), `
`, _jsx(_components.h3, {
      id: "prefer_software",
      children: _jsx(_components.code, {
        children: "PREFER_SOFTWARE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：软件编码偏好。SDK 优先使用软件编码器进行视频编码。"
    }), `
`, _jsx(_components.h3, {
      id: "prefer_hardware",
      children: _jsx(_components.code, {
        children: "PREFER_HARDWARE"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（1）：硬件编码偏好。SDK 优先使用硬件编码器进行视频编码。当设备不支持硬件编码时，SDK 会自动使用软件编码，并通过 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostats",
        children: "onLocalVideoStats"
      }), " 回调中的 ", _jsx(_components.code, {
        children: "hwEncoderAccelerating"
      }), " 报告当前使用的视频编码器类型。"]
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
