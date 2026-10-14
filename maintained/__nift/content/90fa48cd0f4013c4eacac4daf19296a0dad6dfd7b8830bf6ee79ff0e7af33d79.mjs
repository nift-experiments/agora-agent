import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AudioCodecProfileType",
  description: "自定义音频编解码器配置文件类型。"
};
export let _markdown = `

<a id="enum_audiocodecprofiletype__parameters" />

## 枚举值 [#枚举值]

### \`LC_AAC\` [#lc_aac]

（0）：（默认）LC-AAC 配置。

### \`HE_AAC\` [#he_aac]

（1）：HE-AAC 配置。

### \`HE_AAC_V2\` [#he_aac_v2]

（2）：HE-AAC v2 配置。
`;
export let structuredData = {
  contents: [{
    heading: "lc_aac",
    content: "（0）：（默认）LC-AAC 配置。"
  }, {
    heading: "he_aac",
    content: "（1）：HE-AAC 配置。"
  }, {
    heading: "he_aac_v2",
    content: "（2）：HE-AAC v2 配置。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "lc_aac",
    content: "`LC_AAC`"
  }, {
    id: "he_aac",
    content: "`HE_AAC`"
  }, {
    id: "he_aac_v2",
    content: "`HE_AAC_V2`"
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
  url: "#lc_aac",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "LC_AAC"
    })
  })
}, {
  depth: 3,
  url: "#he_aac",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "HE_AAC"
    })
  })
}, {
  depth: 3,
  url: "#he_aac_v2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "HE_AAC_V2"
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
      id: "enum_audiocodecprofiletype__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "lc_aac",
      children: _jsx(_components.code, {
        children: "LC_AAC"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：（默认）LC-AAC 配置。"
    }), `
`, _jsx(_components.h3, {
      id: "he_aac",
      children: _jsx(_components.code, {
        children: "HE_AAC"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：HE-AAC 配置。"
    }), `
`, _jsx(_components.h3, {
      id: "he_aac_v2",
      children: _jsx(_components.code, {
        children: "HE_AAC_V2"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：HE-AAC v2 配置。"
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
