import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "CAMERA_FOCAL_LENGTH_TYPE",
  description: "摄像头焦距类型。"
};
export let _markdown = `

<a id="enum_camerafocallengthtype__parameters" />

## 枚举值 [#枚举值]

### \`CAMERA_FOCAL_LENGTH_DEFAULT\` [#camera_focal_length_default]

（0）：默认镜头（默认）。

### \`CAMERA_FOCAL_LENGTH_WIDE_ANGLE\` [#camera_focal_length_wide_angle]

（1）：广角镜头。

### \`CAMERA_FOCAL_LENGTH_ULTRA_WIDE\` [#camera_focal_length_ultra_wide]

（2）：超广角镜头。

### \`CAMERA_FOCAL_LENGTH_TELEPHOTO\` [#camera_focal_length_telephoto]

（3）：长焦镜头。
`;
export let structuredData = {
  contents: [{
    heading: "camera_focal_length_default",
    content: "（0）：默认镜头（默认）。"
  }, {
    heading: "camera_focal_length_wide_angle",
    content: "（1）：广角镜头。"
  }, {
    heading: "camera_focal_length_ultra_wide",
    content: "（2）：超广角镜头。"
  }, {
    heading: "camera_focal_length_telephoto",
    content: "（3）：长焦镜头。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "camera_focal_length_default",
    content: "`CAMERA_FOCAL_LENGTH_DEFAULT`"
  }, {
    id: "camera_focal_length_wide_angle",
    content: "`CAMERA_FOCAL_LENGTH_WIDE_ANGLE`"
  }, {
    id: "camera_focal_length_ultra_wide",
    content: "`CAMERA_FOCAL_LENGTH_ULTRA_WIDE`"
  }, {
    id: "camera_focal_length_telephoto",
    content: "`CAMERA_FOCAL_LENGTH_TELEPHOTO`"
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
  url: "#camera_focal_length_default",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "CAMERA_FOCAL_LENGTH_DEFAULT"
    })
  })
}, {
  depth: 3,
  url: "#camera_focal_length_wide_angle",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "CAMERA_FOCAL_LENGTH_WIDE_ANGLE"
    })
  })
}, {
  depth: 3,
  url: "#camera_focal_length_ultra_wide",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "CAMERA_FOCAL_LENGTH_ULTRA_WIDE"
    })
  })
}, {
  depth: 3,
  url: "#camera_focal_length_telephoto",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "CAMERA_FOCAL_LENGTH_TELEPHOTO"
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
      id: "enum_camerafocallengthtype__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "camera_focal_length_default",
      children: _jsx(_components.code, {
        children: "CAMERA_FOCAL_LENGTH_DEFAULT"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：默认镜头（默认）。"
    }), `
`, _jsx(_components.h3, {
      id: "camera_focal_length_wide_angle",
      children: _jsx(_components.code, {
        children: "CAMERA_FOCAL_LENGTH_WIDE_ANGLE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：广角镜头。"
    }), `
`, _jsx(_components.h3, {
      id: "camera_focal_length_ultra_wide",
      children: _jsx(_components.code, {
        children: "CAMERA_FOCAL_LENGTH_ULTRA_WIDE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：超广角镜头。"
    }), `
`, _jsx(_components.h3, {
      id: "camera_focal_length_telephoto",
      children: _jsx(_components.code, {
        children: "CAMERA_FOCAL_LENGTH_TELEPHOTO"
      })
    }), `
`, _jsx(_components.p, {
      children: "（3）：长焦镜头。"
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
