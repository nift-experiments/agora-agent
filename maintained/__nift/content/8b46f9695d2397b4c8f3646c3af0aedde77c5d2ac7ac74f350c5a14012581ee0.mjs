import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AUDIO_REVERB_TYPE",
  description: "音频混响类型。"
};
export let _markdown = `

<a id="enum_audioreverbtype__parameters" />

## 枚举值 [#枚举值]

### \`AUDIO_REVERB_DRY_LEVEL\` [#audio_reverb_dry_level]

（0）：直达声信号的电平，单位为 dB，取值范围为 -20 到 10。

### \`AUDIO_REVERB_WET_LEVEL\` [#audio_reverb_wet_level]

（1）：早期反射信号（湿信号）的电平，单位为 dB，取值范围为 -20 到 10。

### \`AUDIO_REVERB_ROOM_SIZE\` [#audio_reverb_room_size]

（2）：反射房间的大小，取值范围为 0 到 100。

### \`AUDIO_REVERB_WET_DELAY\` [#audio_reverb_wet_delay]

（3）：湿信号的初始延迟时长，单位为毫秒，取值范围为 0 到 200。

### \`AUDIO_REVERB_STRENGTH\` [#audio_reverb_strength]

（4）：混响强度，取值范围为 0 到 100。
`;
export let structuredData = {
  contents: [{
    heading: "audio_reverb_dry_level",
    content: "（0）：直达声信号的电平，单位为 dB，取值范围为 -20 到 10。"
  }, {
    heading: "audio_reverb_wet_level",
    content: "（1）：早期反射信号（湿信号）的电平，单位为 dB，取值范围为 -20 到 10。"
  }, {
    heading: "audio_reverb_room_size",
    content: "（2）：反射房间的大小，取值范围为 0 到 100。"
  }, {
    heading: "audio_reverb_wet_delay",
    content: "（3）：湿信号的初始延迟时长，单位为毫秒，取值范围为 0 到 200。"
  }, {
    heading: "audio_reverb_strength",
    content: "（4）：混响强度，取值范围为 0 到 100。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "audio_reverb_dry_level",
    content: "`AUDIO_REVERB_DRY_LEVEL`"
  }, {
    id: "audio_reverb_wet_level",
    content: "`AUDIO_REVERB_WET_LEVEL`"
  }, {
    id: "audio_reverb_room_size",
    content: "`AUDIO_REVERB_ROOM_SIZE`"
  }, {
    id: "audio_reverb_wet_delay",
    content: "`AUDIO_REVERB_WET_DELAY`"
  }, {
    id: "audio_reverb_strength",
    content: "`AUDIO_REVERB_STRENGTH`"
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
  url: "#audio_reverb_dry_level",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AUDIO_REVERB_DRY_LEVEL"
    })
  })
}, {
  depth: 3,
  url: "#audio_reverb_wet_level",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AUDIO_REVERB_WET_LEVEL"
    })
  })
}, {
  depth: 3,
  url: "#audio_reverb_room_size",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AUDIO_REVERB_ROOM_SIZE"
    })
  })
}, {
  depth: 3,
  url: "#audio_reverb_wet_delay",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AUDIO_REVERB_WET_DELAY"
    })
  })
}, {
  depth: 3,
  url: "#audio_reverb_strength",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AUDIO_REVERB_STRENGTH"
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
      id: "enum_audioreverbtype__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "audio_reverb_dry_level",
      children: _jsx(_components.code, {
        children: "AUDIO_REVERB_DRY_LEVEL"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：直达声信号的电平，单位为 dB，取值范围为 -20 到 10。"
    }), `
`, _jsx(_components.h3, {
      id: "audio_reverb_wet_level",
      children: _jsx(_components.code, {
        children: "AUDIO_REVERB_WET_LEVEL"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：早期反射信号（湿信号）的电平，单位为 dB，取值范围为 -20 到 10。"
    }), `
`, _jsx(_components.h3, {
      id: "audio_reverb_room_size",
      children: _jsx(_components.code, {
        children: "AUDIO_REVERB_ROOM_SIZE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：反射房间的大小，取值范围为 0 到 100。"
    }), `
`, _jsx(_components.h3, {
      id: "audio_reverb_wet_delay",
      children: _jsx(_components.code, {
        children: "AUDIO_REVERB_WET_DELAY"
      })
    }), `
`, _jsx(_components.p, {
      children: "（3）：湿信号的初始延迟时长，单位为毫秒，取值范围为 0 到 200。"
    }), `
`, _jsx(_components.h3, {
      id: "audio_reverb_strength",
      children: _jsx(_components.code, {
        children: "AUDIO_REVERB_STRENGTH"
      })
    }), `
`, _jsx(_components.p, {
      children: "（4）：混响强度，取值范围为 0 到 100。"
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
