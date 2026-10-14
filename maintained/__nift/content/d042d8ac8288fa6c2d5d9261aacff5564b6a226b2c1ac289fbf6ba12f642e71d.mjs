import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "MusicPlayMode",
  description: "音乐资源的播放模式。"
};
export let _markdown = `

<a id="enum_musicplaymode__parameters" />

## 枚举值 [#枚举值]

### \`MUSIC_PLAY_MODE_ORIGINAL\` [#music_play_mode_original]

（0）：原唱模式。

### \`MUSIC_PLAY_MODE_ACCOMPANY\` [#music_play_mode_accompany]

（1）：伴奏模式。

### \`MUSIC_PLAY_MODE_LEAD_SING\` [#music_play_mode_lead_sing]

（2）：伴奏导唱模式。
`;
export let structuredData = {
  contents: [{
    heading: "music_play_mode_original",
    content: "（0）：原唱模式。"
  }, {
    heading: "music_play_mode_accompany",
    content: "（1）：伴奏模式。"
  }, {
    heading: "music_play_mode_lead_sing",
    content: "（2）：伴奏导唱模式。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "music_play_mode_original",
    content: "`MUSIC_PLAY_MODE_ORIGINAL`"
  }, {
    id: "music_play_mode_accompany",
    content: "`MUSIC_PLAY_MODE_ACCOMPANY`"
  }, {
    id: "music_play_mode_lead_sing",
    content: "`MUSIC_PLAY_MODE_LEAD_SING`"
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
  url: "#music_play_mode_original",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MUSIC_PLAY_MODE_ORIGINAL"
    })
  })
}, {
  depth: 3,
  url: "#music_play_mode_accompany",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MUSIC_PLAY_MODE_ACCOMPANY"
    })
  })
}, {
  depth: 3,
  url: "#music_play_mode_lead_sing",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MUSIC_PLAY_MODE_LEAD_SING"
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
      id: "enum_musicplaymode__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "music_play_mode_original",
      children: _jsx(_components.code, {
        children: "MUSIC_PLAY_MODE_ORIGINAL"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：原唱模式。"
    }), `
`, _jsx(_components.h3, {
      id: "music_play_mode_accompany",
      children: _jsx(_components.code, {
        children: "MUSIC_PLAY_MODE_ACCOMPANY"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：伴奏模式。"
    }), `
`, _jsx(_components.h3, {
      id: "music_play_mode_lead_sing",
      children: _jsx(_components.code, {
        children: "MUSIC_PLAY_MODE_LEAD_SING"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：伴奏导唱模式。"
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
