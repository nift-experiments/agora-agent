import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "CAMERA_DIRECTION",
  description: "摄像头方向。"
};
export let _markdown = `

<a id="enum_cameradirection__parameters" />

## 枚举值 [#枚举值]

### \`CAMERA_REAR\` [#camera_rear]

（0）：后置摄像头。

### \`CAMERA_FRONT\` [#camera_front]

（1）：（默认）前置摄像头。

### \`CAMERA_EXTRAL\` [#camera_extral]

（2）：外部摄像头。
`;
export let structuredData = {
  contents: [{
    heading: "camera_rear",
    content: "（0）：后置摄像头。"
  }, {
    heading: "camera_front",
    content: "（1）：（默认）前置摄像头。"
  }, {
    heading: "camera_extral",
    content: "（2）：外部摄像头。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "camera_rear",
    content: "`CAMERA_REAR`"
  }, {
    id: "camera_front",
    content: "`CAMERA_FRONT`"
  }, {
    id: "camera_extral",
    content: "`CAMERA_EXTRAL`"
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
  url: "#camera_rear",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "CAMERA_REAR"
    })
  })
}, {
  depth: 3,
  url: "#camera_front",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "CAMERA_FRONT"
    })
  })
}, {
  depth: 3,
  url: "#camera_extral",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "CAMERA_EXTRAL"
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
      id: "enum_cameradirection__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "camera_rear",
      children: _jsx(_components.code, {
        children: "CAMERA_REAR"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：后置摄像头。"
    }), `
`, _jsx(_components.h3, {
      id: "camera_front",
      children: _jsx(_components.code, {
        children: "CAMERA_FRONT"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：（默认）前置摄像头。"
    }), `
`, _jsx(_components.h3, {
      id: "camera_extral",
      children: _jsx(_components.code, {
        children: "CAMERA_EXTRAL"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：外部摄像头。"
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
