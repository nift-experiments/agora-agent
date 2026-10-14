import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "ORIENTATION_MODE",
  description: "视频输出方向模式。"
};
export let _markdown = `

<a id="enum_orientationmode__parameters" />

## 枚举值 [#枚举值]

### \`ORIENTATION_MODE_ADAPTIVE\` [#orientation_mode_adaptive]

（0）：（默认）输出视频方向始终与采集视频方向保持一致，接收端会接收来自视频编码器的旋转信息。适用于接收端支持调整视频方向的场景。

* 如果采集的视频为横屏，输出视频为横屏。
* 如果采集的视频为竖屏，输出视频为竖屏。

### \`ORIENTATION_MODE_FIXED_LANDSCAPE\` [#orientation_mode_fixed_landscape]

（1）：输出视频始终为横屏模式。如果采集的视频为竖屏，视频编码器会对其进行裁剪以适配输出。适用于接收端无法处理旋转信息的场景，例如 CDN 直播推流。

### \`ORIENTATION_MODE_FIXED_PORTRAIT\` [#orientation_mode_fixed_portrait]

（2）：输出视频始终为竖屏模式。如果采集的视频为横屏，视频编码器会对其进行裁剪以适配输出。适用于接收端无法处理旋转信息的场景，例如 CDN 直播推流。
`;
export let structuredData = {
  contents: [{
    heading: "orientation_mode_adaptive",
    content: "（0）：（默认）输出视频方向始终与采集视频方向保持一致，接收端会接收来自视频编码器的旋转信息。适用于接收端支持调整视频方向的场景。"
  }, {
    heading: "orientation_mode_adaptive",
    content: "如果采集的视频为横屏，输出视频为横屏。"
  }, {
    heading: "orientation_mode_adaptive",
    content: "如果采集的视频为竖屏，输出视频为竖屏。"
  }, {
    heading: "orientation_mode_fixed_landscape",
    content: "（1）：输出视频始终为横屏模式。如果采集的视频为竖屏，视频编码器会对其进行裁剪以适配输出。适用于接收端无法处理旋转信息的场景，例如 CDN 直播推流。"
  }, {
    heading: "orientation_mode_fixed_portrait",
    content: "（2）：输出视频始终为竖屏模式。如果采集的视频为横屏，视频编码器会对其进行裁剪以适配输出。适用于接收端无法处理旋转信息的场景，例如 CDN 直播推流。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "orientation_mode_adaptive",
    content: "`ORIENTATION_MODE_ADAPTIVE`"
  }, {
    id: "orientation_mode_fixed_landscape",
    content: "`ORIENTATION_MODE_FIXED_LANDSCAPE`"
  }, {
    id: "orientation_mode_fixed_portrait",
    content: "`ORIENTATION_MODE_FIXED_PORTRAIT`"
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
  url: "#orientation_mode_adaptive",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ORIENTATION_MODE_ADAPTIVE"
    })
  })
}, {
  depth: 3,
  url: "#orientation_mode_fixed_landscape",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ORIENTATION_MODE_FIXED_LANDSCAPE"
    })
  })
}, {
  depth: 3,
  url: "#orientation_mode_fixed_portrait",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ORIENTATION_MODE_FIXED_PORTRAIT"
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
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "enum_orientationmode__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "orientation_mode_adaptive",
      children: _jsx(_components.code, {
        children: "ORIENTATION_MODE_ADAPTIVE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：（默认）输出视频方向始终与采集视频方向保持一致，接收端会接收来自视频编码器的旋转信息。适用于接收端支持调整视频方向的场景。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果采集的视频为横屏，输出视频为横屏。"
      }), `
`, _jsx(_components.li, {
        children: "如果采集的视频为竖屏，输出视频为竖屏。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "orientation_mode_fixed_landscape",
      children: _jsx(_components.code, {
        children: "ORIENTATION_MODE_FIXED_LANDSCAPE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：输出视频始终为横屏模式。如果采集的视频为竖屏，视频编码器会对其进行裁剪以适配输出。适用于接收端无法处理旋转信息的场景，例如 CDN 直播推流。"
    }), `
`, _jsx(_components.h3, {
      id: "orientation_mode_fixed_portrait",
      children: _jsx(_components.code, {
        children: "ORIENTATION_MODE_FIXED_PORTRAIT"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：输出视频始终为竖屏模式。如果采集的视频为横屏，视频编码器会对其进行裁剪以适配输出。适用于接收端无法处理旋转信息的场景，例如 CDN 直播推流。"
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
