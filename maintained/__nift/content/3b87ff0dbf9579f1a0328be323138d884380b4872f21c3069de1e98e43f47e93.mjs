import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AbrFallbackLayer",
  description: "视频流回退的质量层级。"
};
export let _markdown = `

<a id="enum_rteabrfallbacklayer__detailed_desc" />

### \`自从\` [#自从]

自 v4.4.0 版本新增。

注： 注意事项：

* 如需使用 LAYER1 到 LAYER6，请[联系技术支持](https://ticket.shengwang.cn/)开启 ABR 功能。开启后，你可以自定义每个层级的分辨率，并选择任意层级作为视频流回退的最低分辨率。当网络状况较差时，SDK 会以该层级为下限，在此范围内根据网络状况动态调整分辨率。
* 自定义分辨率时，请确保按分辨率从高到低的顺序排列视频质量层级（Layer）。如果分辨率相同，则按帧率从高到低排序。

<a id="enum_rteabrfallbacklayer__parameters" />

## 枚举值 [#枚举值]

### \`DISABLED\` [#disabled]

（0）：不进行音视频流的回退处理，但无法保证音视频流的质量。

### \`LOW\` [#low]

（1）：（默认）回退至视频小流，该层级具有最低分辨率。

### \`AUDIO_ONLY\` [#audio_only]

（2）：优先尝试接收视频小流；若因网络状况差无法显示视频，则回退为仅接收已订阅的远端音频流。

### \`LAYER1\` [#layer1]

（3）：回退至视频质量层级 1，该层级的分辨率和码率仅低于所订阅的最视频大流。

### \`LAYER2\` [#layer2]

（4）：回退至视频质量层级 2，该层级的分辨率仅低于层级 1。

### \`LAYER3\` [#layer3]

（5）：回退至视频质量层级 3，该层级的分辨率略低于层级 2。

### \`LAYER4\` [#layer4]

（6）：回退至视频质量层级 4，该层级的分辨率仅低于层级 3。

### \`LAYER5\` [#layer5]

（7）：回退至视频质量层级 5，该层级的分辨率略低于层级 4。

### \`LAYER6\` [#layer6]

（8）：回退至视频质量层级 6，该层级的分辨率略低于层级 5。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从",
    content: "注： 注意事项："
  }, {
    heading: "自从",
    content: "如需使用 LAYER1 到 LAYER6，请联系技术支持开启 ABR 功能。开启后，你可以自定义每个层级的分辨率，并选择任意层级作为视频流回退的最低分辨率。当网络状况较差时，SDK 会以该层级为下限，在此范围内根据网络状况动态调整分辨率。"
  }, {
    heading: "自从",
    content: "自定义分辨率时，请确保按分辨率从高到低的顺序排列视频质量层级（Layer）。如果分辨率相同，则按帧率从高到低排序。"
  }, {
    heading: "disabled",
    content: "（0）：不进行音视频流的回退处理，但无法保证音视频流的质量。"
  }, {
    heading: "low",
    content: "（1）：（默认）回退至视频小流，该层级具有最低分辨率。"
  }, {
    heading: "audio_only",
    content: "（2）：优先尝试接收视频小流；若因网络状况差无法显示视频，则回退为仅接收已订阅的远端音频流。"
  }, {
    heading: "layer1",
    content: "（3）：回退至视频质量层级 1，该层级的分辨率和码率仅低于所订阅的最视频大流。"
  }, {
    heading: "layer2",
    content: "（4）：回退至视频质量层级 2，该层级的分辨率仅低于层级 1。"
  }, {
    heading: "layer3",
    content: "（5）：回退至视频质量层级 3，该层级的分辨率略低于层级 2。"
  }, {
    heading: "layer4",
    content: "（6）：回退至视频质量层级 4，该层级的分辨率仅低于层级 3。"
  }, {
    heading: "layer5",
    content: "（7）：回退至视频质量层级 5，该层级的分辨率略低于层级 4。"
  }, {
    heading: "layer6",
    content: "（8）：回退至视频质量层级 6，该层级的分辨率略低于层级 5。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "disabled",
    content: "`DISABLED`"
  }, {
    id: "low",
    content: "`LOW`"
  }, {
    id: "audio_only",
    content: "`AUDIO_ONLY`"
  }, {
    id: "layer1",
    content: "`LAYER1`"
  }, {
    id: "layer2",
    content: "`LAYER2`"
  }, {
    id: "layer3",
    content: "`LAYER3`"
  }, {
    id: "layer4",
    content: "`LAYER4`"
  }, {
    id: "layer5",
    content: "`LAYER5`"
  }, {
    id: "layer6",
    content: "`LAYER6`"
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
  url: "#枚举值",
  title: _jsx(_Fragment, {
    children: "枚举值"
  })
}, {
  depth: 3,
  url: "#disabled",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "DISABLED"
    })
  })
}, {
  depth: 3,
  url: "#low",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "LOW"
    })
  })
}, {
  depth: 3,
  url: "#audio_only",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AUDIO_ONLY"
    })
  })
}, {
  depth: 3,
  url: "#layer1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "LAYER1"
    })
  })
}, {
  depth: 3,
  url: "#layer2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "LAYER2"
    })
  })
}, {
  depth: 3,
  url: "#layer3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "LAYER3"
    })
  })
}, {
  depth: 3,
  url: "#layer4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "LAYER4"
    })
  })
}, {
  depth: 3,
  url: "#layer5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "LAYER5"
    })
  })
}, {
  depth: 3,
  url: "#layer6",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "LAYER6"
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
      id: "enum_rteabrfallbacklayer__detailed_desc"
    }), `
`, _jsx(_components.h3, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "注： 注意事项："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["如需使用 LAYER1 到 LAYER6，请", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "开启 ABR 功能。开启后，你可以自定义每个层级的分辨率，并选择任意层级作为视频流回退的最低分辨率。当网络状况较差时，SDK 会以该层级为下限，在此范围内根据网络状况动态调整分辨率。"]
      }), `
`, _jsx(_components.li, {
        children: "自定义分辨率时，请确保按分辨率从高到低的顺序排列视频质量层级（Layer）。如果分辨率相同，则按帧率从高到低排序。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "enum_rteabrfallbacklayer__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "disabled",
      children: _jsx(_components.code, {
        children: "DISABLED"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：不进行音视频流的回退处理，但无法保证音视频流的质量。"
    }), `
`, _jsx(_components.h3, {
      id: "low",
      children: _jsx(_components.code, {
        children: "LOW"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：（默认）回退至视频小流，该层级具有最低分辨率。"
    }), `
`, _jsx(_components.h3, {
      id: "audio_only",
      children: _jsx(_components.code, {
        children: "AUDIO_ONLY"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：优先尝试接收视频小流；若因网络状况差无法显示视频，则回退为仅接收已订阅的远端音频流。"
    }), `
`, _jsx(_components.h3, {
      id: "layer1",
      children: _jsx(_components.code, {
        children: "LAYER1"
      })
    }), `
`, _jsx(_components.p, {
      children: "（3）：回退至视频质量层级 1，该层级的分辨率和码率仅低于所订阅的最视频大流。"
    }), `
`, _jsx(_components.h3, {
      id: "layer2",
      children: _jsx(_components.code, {
        children: "LAYER2"
      })
    }), `
`, _jsx(_components.p, {
      children: "（4）：回退至视频质量层级 2，该层级的分辨率仅低于层级 1。"
    }), `
`, _jsx(_components.h3, {
      id: "layer3",
      children: _jsx(_components.code, {
        children: "LAYER3"
      })
    }), `
`, _jsx(_components.p, {
      children: "（5）：回退至视频质量层级 3，该层级的分辨率略低于层级 2。"
    }), `
`, _jsx(_components.h3, {
      id: "layer4",
      children: _jsx(_components.code, {
        children: "LAYER4"
      })
    }), `
`, _jsx(_components.p, {
      children: "（6）：回退至视频质量层级 4，该层级的分辨率仅低于层级 3。"
    }), `
`, _jsx(_components.h3, {
      id: "layer5",
      children: _jsx(_components.code, {
        children: "LAYER5"
      })
    }), `
`, _jsx(_components.p, {
      children: "（7）：回退至视频质量层级 5，该层级的分辨率略低于层级 4。"
    }), `
`, _jsx(_components.h3, {
      id: "layer6",
      children: _jsx(_components.code, {
        children: "LAYER6"
      })
    }), `
`, _jsx(_components.p, {
      children: "（8）：回退至视频质量层级 6，该层级的分辨率略低于层级 5。"
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
