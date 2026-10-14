import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AudioMixingDualMonoMode",
  description: "频道模式。"
};
export let _markdown = `

<a id="enum_audiomixingdualmonomode__parameters" />

## 枚举值 [#枚举值]

### \`AUDIO_MIXING_DUAL_MONO_AUTO\` [#audio_mixing_dual_mono_auto]

（0）：原始模式。

### \`AUDIO_MIXING_DUAL_MONO_L\` [#audio_mixing_dual_mono_l]

（1）：左声道模式。该模式将右声道音频替换为左声道音频，用户只能听到左声道音频。

### \`AUDIO_MIXING_DUAL_MONO_R\` [#audio_mixing_dual_mono_r]

（2）：右声道模式。该模式将左声道音频替换为右声道音频，用户只能听到右声道音频。

### \`AUDIO_MIXING_DUAL_MONO_MIX\` [#audio_mixing_dual_mono_mix]

（3）：混合声道模式。该模式将左声道和右声道音频混合，用户可同时听到左右声道音频。
`;
export let structuredData = {
  contents: [{
    heading: "audio_mixing_dual_mono_auto",
    content: "（0）：原始模式。"
  }, {
    heading: "audio_mixing_dual_mono_l",
    content: "（1）：左声道模式。该模式将右声道音频替换为左声道音频，用户只能听到左声道音频。"
  }, {
    heading: "audio_mixing_dual_mono_r",
    content: "（2）：右声道模式。该模式将左声道音频替换为右声道音频，用户只能听到右声道音频。"
  }, {
    heading: "audio_mixing_dual_mono_mix",
    content: "（3）：混合声道模式。该模式将左声道和右声道音频混合，用户可同时听到左右声道音频。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "audio_mixing_dual_mono_auto",
    content: "`AUDIO_MIXING_DUAL_MONO_AUTO`"
  }, {
    id: "audio_mixing_dual_mono_l",
    content: "`AUDIO_MIXING_DUAL_MONO_L`"
  }, {
    id: "audio_mixing_dual_mono_r",
    content: "`AUDIO_MIXING_DUAL_MONO_R`"
  }, {
    id: "audio_mixing_dual_mono_mix",
    content: "`AUDIO_MIXING_DUAL_MONO_MIX`"
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
  url: "#audio_mixing_dual_mono_auto",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AUDIO_MIXING_DUAL_MONO_AUTO"
    })
  })
}, {
  depth: 3,
  url: "#audio_mixing_dual_mono_l",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AUDIO_MIXING_DUAL_MONO_L"
    })
  })
}, {
  depth: 3,
  url: "#audio_mixing_dual_mono_r",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AUDIO_MIXING_DUAL_MONO_R"
    })
  })
}, {
  depth: 3,
  url: "#audio_mixing_dual_mono_mix",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AUDIO_MIXING_DUAL_MONO_MIX"
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
      id: "enum_audiomixingdualmonomode__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "audio_mixing_dual_mono_auto",
      children: _jsx(_components.code, {
        children: "AUDIO_MIXING_DUAL_MONO_AUTO"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：原始模式。"
    }), `
`, _jsx(_components.h3, {
      id: "audio_mixing_dual_mono_l",
      children: _jsx(_components.code, {
        children: "AUDIO_MIXING_DUAL_MONO_L"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：左声道模式。该模式将右声道音频替换为左声道音频，用户只能听到左声道音频。"
    }), `
`, _jsx(_components.h3, {
      id: "audio_mixing_dual_mono_r",
      children: _jsx(_components.code, {
        children: "AUDIO_MIXING_DUAL_MONO_R"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：右声道模式。该模式将左声道音频替换为右声道音频，用户只能听到右声道音频。"
    }), `
`, _jsx(_components.h3, {
      id: "audio_mixing_dual_mono_mix",
      children: _jsx(_components.code, {
        children: "AUDIO_MIXING_DUAL_MONO_MIX"
      })
    }), `
`, _jsx(_components.p, {
      children: "（3）：混合声道模式。该模式将左声道和右声道音频混合，用户可同时听到左右声道音频。"
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
