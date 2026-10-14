import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AbrSubscriptionLayer",
  description: "订阅端视频流的质量层级。"
};
export let _markdown = `

<a id="enum_rteabrsubscriptionlayer__detailed_desc" />

### \`自从\` [#自从]

自 v4.4.0 版本新增。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果你需要自定义订阅 \`LAYER1\` 到 \`LAYER6\` 的视频分辨率，请[联系技术支持](https://ticket.shengwang.cn/)开启 ABR 功能。
  </CalloutDescription>
</CalloutContainer>

<a id="enum_rteabrsubscriptionlayer__parameters" />

## 枚举值 [#枚举值]

### \`HIGH\` [#high]

（0）：最高质量的视频流，提供最高分辨率。

### \`LOW\` [#low]

（1）：（默认）最低质量的视频流，提供最低分辨率。

### \`LAYER1\` [#layer1]

（2）：视频质量层级 1，分辨率仅次于 \`HIGH\`。

### \`LAYER2\` [#layer2]

（3）：视频质量层级 2，分辨率低于 \`LAYER1\`。

### \`LAYER3\` [#layer3]

（4）：视频质量层级 3，分辨率低于 \`LAYER2\`。

### \`LAYER4\` [#layer4]

（5）：视频质量层级 4，分辨率低于 \`LAYER3\`。

### \`LAYER5\` [#layer5]

（6）：视频质量层级 5，分辨率低于 \`LAYER4\`。

### \`LAYER6\` [#layer6]

（7）：视频质量层级 6，分辨率低于 \`LAYER5\`。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从",
    content: "如果你需要自定义订阅 `LAYER1` 到 `LAYER6` 的视频分辨率，请联系技术支持开启 ABR 功能。"
  }, {
    heading: "high",
    content: "（0）：最高质量的视频流，提供最高分辨率。"
  }, {
    heading: "low",
    content: "（1）：（默认）最低质量的视频流，提供最低分辨率。"
  }, {
    heading: "layer1",
    content: "（2）：视频质量层级 1，分辨率仅次于 `HIGH`。"
  }, {
    heading: "layer2",
    content: "（3）：视频质量层级 2，分辨率低于 `LAYER1`。"
  }, {
    heading: "layer3",
    content: "（4）：视频质量层级 3，分辨率低于 `LAYER2`。"
  }, {
    heading: "layer4",
    content: "（5）：视频质量层级 4，分辨率低于 `LAYER3`。"
  }, {
    heading: "layer5",
    content: "（6）：视频质量层级 5，分辨率低于 `LAYER4`。"
  }, {
    heading: "layer6",
    content: "（7）：视频质量层级 6，分辨率低于 `LAYER5`。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "high",
    content: "`HIGH`"
  }, {
    id: "low",
    content: "`LOW`"
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
  url: "#high",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "HIGH"
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
      id: "enum_rteabrsubscriptionlayer__detailed_desc"
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
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果你需要自定义订阅 ", _jsx(_components.code, {
            children: "LAYER1"
          }), " 到 ", _jsx(_components.code, {
            children: "LAYER6"
          }), " 的视频分辨率，请", _jsx(_components.a, {
            href: "https://ticket.shengwang.cn/",
            children: "联系技术支持"
          }), "开启 ABR 功能。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "enum_rteabrsubscriptionlayer__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "high",
      children: _jsx(_components.code, {
        children: "HIGH"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：最高质量的视频流，提供最高分辨率。"
    }), `
`, _jsx(_components.h3, {
      id: "low",
      children: _jsx(_components.code, {
        children: "LOW"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：（默认）最低质量的视频流，提供最低分辨率。"
    }), `
`, _jsx(_components.h3, {
      id: "layer1",
      children: _jsx(_components.code, {
        children: "LAYER1"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（2）：视频质量层级 1，分辨率仅次于 ", _jsx(_components.code, {
        children: "HIGH"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "layer2",
      children: _jsx(_components.code, {
        children: "LAYER2"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（3）：视频质量层级 2，分辨率低于 ", _jsx(_components.code, {
        children: "LAYER1"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "layer3",
      children: _jsx(_components.code, {
        children: "LAYER3"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（4）：视频质量层级 3，分辨率低于 ", _jsx(_components.code, {
        children: "LAYER2"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "layer4",
      children: _jsx(_components.code, {
        children: "LAYER4"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（5）：视频质量层级 4，分辨率低于 ", _jsx(_components.code, {
        children: "LAYER3"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "layer5",
      children: _jsx(_components.code, {
        children: "LAYER5"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（6）：视频质量层级 5，分辨率低于 ", _jsx(_components.code, {
        children: "LAYER4"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "layer6",
      children: _jsx(_components.code, {
        children: "LAYER6"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（7）：视频质量层级 6，分辨率低于 ", _jsx(_components.code, {
        children: "LAYER5"
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
