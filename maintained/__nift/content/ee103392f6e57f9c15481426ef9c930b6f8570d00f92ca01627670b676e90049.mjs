import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "MediaPlayerMetadataType",
  description: "媒体元数据类型。"
};
export let _markdown = `

<a id="enum_mediaplayermetadatatype__parameters" />

## 枚举值 [#枚举值]

### \`PLAYER_METADATA_TYPE_UNKNOWN\` [#player_metadata_type_unknown]

（0）：未知类型。

### \`PLAYER_METADATA_TYPE_SEI\` [#player_metadata_type_sei]

（1）：SEI 类型。
`;
export let structuredData = {
  contents: [{
    heading: "player_metadata_type_unknown",
    content: "（0）：未知类型。"
  }, {
    heading: "player_metadata_type_sei",
    content: "（1）：SEI 类型。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "player_metadata_type_unknown",
    content: "`PLAYER_METADATA_TYPE_UNKNOWN`"
  }, {
    id: "player_metadata_type_sei",
    content: "`PLAYER_METADATA_TYPE_SEI`"
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
  url: "#player_metadata_type_unknown",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_METADATA_TYPE_UNKNOWN"
    })
  })
}, {
  depth: 3,
  url: "#player_metadata_type_sei",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "PLAYER_METADATA_TYPE_SEI"
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
      id: "enum_mediaplayermetadatatype__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "player_metadata_type_unknown",
      children: _jsx(_components.code, {
        children: "PLAYER_METADATA_TYPE_UNKNOWN"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：未知类型。"
    }), `
`, _jsx(_components.h3, {
      id: "player_metadata_type_sei",
      children: _jsx(_components.code, {
        children: "PLAYER_METADATA_TYPE_SEI"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：SEI 类型。"
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
