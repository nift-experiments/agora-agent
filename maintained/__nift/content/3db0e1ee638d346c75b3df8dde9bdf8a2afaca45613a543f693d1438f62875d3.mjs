import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "VideoRenderMode",
  description: "视频渲染模式。"
};
export let _markdown = `

<a id="enum_rtevideorendermode__detailed_desc" />

### \`自从\` [#自从]

自 v4.4.0 版本新增。

<a id="enum_rtevideorendermode__parameters" />

## 枚举值 [#枚举值]

### \`HIDDEN\` [#hidden]

（0）：按比例缩放视频尺寸，优先填满视口。若视频尺寸与视口不一致，超出部分将被裁剪。

### \`FIT\` [#fit]

（1）：按比例缩放视频尺寸，优先完整显示视频内容。若视频尺寸与视口不一致，未填满区域将显示黑边。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "hidden",
    content: "（0）：按比例缩放视频尺寸，优先填满视口。若视频尺寸与视口不一致，超出部分将被裁剪。"
  }, {
    heading: "fit",
    content: "（1）：按比例缩放视频尺寸，优先完整显示视频内容。若视频尺寸与视口不一致，未填满区域将显示黑边。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "hidden",
    content: "`HIDDEN`"
  }, {
    id: "fit",
    content: "`FIT`"
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
  url: "#hidden",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "HIDDEN"
    })
  })
}, {
  depth: 3,
  url: "#fit",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "FIT"
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
      id: "enum_rtevideorendermode__detailed_desc"
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
`, _jsx("a", {
      id: "enum_rtevideorendermode__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "hidden",
      children: _jsx(_components.code, {
        children: "HIDDEN"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：按比例缩放视频尺寸，优先填满视口。若视频尺寸与视口不一致，超出部分将被裁剪。"
    }), `
`, _jsx(_components.h3, {
      id: "fit",
      children: _jsx(_components.code, {
        children: "FIT"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：按比例缩放视频尺寸，优先完整显示视频内容。若视频尺寸与视口不一致，未填满区域将显示黑边。"
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
