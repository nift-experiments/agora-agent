import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "VideoCodecProfileType",
  description: "视频编解码器配置文件类型。"
};
export let _markdown = `

<a id="enum_videocodecprofiletype__parameters" />

## 枚举值 [#枚举值]

### \`BASELINE\` [#baseline]

（66）：Baseline 视频编解码器配置文件，通常用于移动设备的视频通话。

### \`MAIN\` [#main]

（77）：Main 视频编解码器配置文件，通常用于主流电子设备，如 MP4 播放器、便携式视频播放器、PSP 和 iPad。

### \`HIGH\` [#high]

（100）：High（默认）视频编解码器配置文件，通常用于高分辨率的直播或电视场景。
`;
export let structuredData = {
  contents: [{
    heading: "baseline",
    content: "（66）：Baseline 视频编解码器配置文件，通常用于移动设备的视频通话。"
  }, {
    heading: "main",
    content: "（77）：Main 视频编解码器配置文件，通常用于主流电子设备，如 MP4 播放器、便携式视频播放器、PSP 和 iPad。"
  }, {
    heading: "high",
    content: "（100）：High（默认）视频编解码器配置文件，通常用于高分辨率的直播或电视场景。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "baseline",
    content: "`BASELINE`"
  }, {
    id: "main",
    content: "`MAIN`"
  }, {
    id: "high",
    content: "`HIGH`"
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
  url: "#baseline",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "BASELINE"
    })
  })
}, {
  depth: 3,
  url: "#main",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MAIN"
    })
  })
}, {
  depth: 3,
  url: "#high",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "HIGH"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "enum_videocodecprofiletype__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "baseline",
      children: _jsx(_components.code, {
        children: "BASELINE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（66）：Baseline 视频编解码器配置文件，通常用于移动设备的视频通话。"
    }), `
`, _jsx(_components.h3, {
      id: "main",
      children: _jsx(_components.code, {
        children: "MAIN"
      })
    }), `
`, _jsx(_components.p, {
      children: "（77）：Main 视频编解码器配置文件，通常用于主流电子设备，如 MP4 播放器、便携式视频播放器、PSP 和 iPad。"
    }), `
`, _jsx(_components.h3, {
      id: "high",
      children: _jsx(_components.code, {
        children: "HIGH"
      })
    }), `
`, _jsx(_components.p, {
      children: "（100）：High（默认）视频编解码器配置文件，通常用于高分辨率的直播或电视场景。"
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
