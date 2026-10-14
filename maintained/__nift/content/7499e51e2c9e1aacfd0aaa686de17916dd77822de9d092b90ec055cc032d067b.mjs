import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AudioProfile",
  description: "音频配置文件类型。"
};
export let _markdown = `

<a id="enum_audioprofiletype__parameters" />

## 枚举值 [#枚举值]

### \`DEFAULT\` [#default]

（0）：默认音频配置文件。频道场景为互动直播时，采样率为 48 kHz，音乐编码，单声道，码率上限为 64 Kbps；频道场景为通信时，采样率为 32 kHz，语音编码，单声道，码率上限为 18 Kbps。

### \`SPEECH_STANDARD\` [#speech_standard]

（1）：采样率为 32 kHz，语音编码，单声道，码率上限为 18 Kbps。

### \`MUSIC_STANDARD\` [#music_standard]

（2）：采样率为 48 kHz，音乐编码，单声道，码率上限为 64 Kbps。

### \`MUSIC_STANDARD_STEREO\` [#music_standard_stereo]

（3）：采样率为 48 kHz，音乐编码，立体声，码率上限为 80 Kbps。要实现立体声效果，还需调用 [setAdvancedAudioOptions](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setadvancedaudiooptions)，并在 [AdvancedAudioOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-advancedaudiooptions) 中将 \`audioProcessingChannels\` 设置为 \`AGORA_AUDIO_STEREO_PROCESSING\`。

### \`MUSIC_HIGH_QUALITY\` [#music_high_quality]

（4）：采样率为 48 kHz，音乐编码，单声道，码率上限为 96 Kbps。

### \`MUSIC_HIGH_QUALITY_STEREO\` [#music_high_quality_stereo]

（5）：采样率为 48 kHz，音乐编码，立体声，码率上限为 128 Kbps。要实现立体声效果，还需调用 [setAdvancedAudioOptions](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setadvancedaudiooptions)，并在 [AdvancedAudioOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-advancedaudiooptions) 中将 \`audioProcessingChannels\` 设置为 \`AGORA_AUDIO_STEREO_PROCESSING\`。
`;
export let structuredData = {
  contents: [{
    heading: "default",
    content: "（0）：默认音频配置文件。频道场景为互动直播时，采样率为 48 kHz，音乐编码，单声道，码率上限为 64 Kbps；频道场景为通信时，采样率为 32 kHz，语音编码，单声道，码率上限为 18 Kbps。"
  }, {
    heading: "speech_standard",
    content: "（1）：采样率为 32 kHz，语音编码，单声道，码率上限为 18 Kbps。"
  }, {
    heading: "music_standard",
    content: "（2）：采样率为 48 kHz，音乐编码，单声道，码率上限为 64 Kbps。"
  }, {
    heading: "music_standard_stereo",
    content: "（3）：采样率为 48 kHz，音乐编码，立体声，码率上限为 80 Kbps。要实现立体声效果，还需调用 setAdvancedAudioOptions，并在 AdvancedAudioOptions 中将 `audioProcessingChannels` 设置为 `AGORA_AUDIO_STEREO_PROCESSING`。"
  }, {
    heading: "music_high_quality",
    content: "（4）：采样率为 48 kHz，音乐编码，单声道，码率上限为 96 Kbps。"
  }, {
    heading: "music_high_quality_stereo",
    content: "（5）：采样率为 48 kHz，音乐编码，立体声，码率上限为 128 Kbps。要实现立体声效果，还需调用 setAdvancedAudioOptions，并在 AdvancedAudioOptions 中将 `audioProcessingChannels` 设置为 `AGORA_AUDIO_STEREO_PROCESSING`。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "default",
    content: "`DEFAULT`"
  }, {
    id: "speech_standard",
    content: "`SPEECH_STANDARD`"
  }, {
    id: "music_standard",
    content: "`MUSIC_STANDARD`"
  }, {
    id: "music_standard_stereo",
    content: "`MUSIC_STANDARD_STEREO`"
  }, {
    id: "music_high_quality",
    content: "`MUSIC_HIGH_QUALITY`"
  }, {
    id: "music_high_quality_stereo",
    content: "`MUSIC_HIGH_QUALITY_STEREO`"
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
  url: "#default",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "DEFAULT"
    })
  })
}, {
  depth: 3,
  url: "#speech_standard",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "SPEECH_STANDARD"
    })
  })
}, {
  depth: 3,
  url: "#music_standard",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MUSIC_STANDARD"
    })
  })
}, {
  depth: 3,
  url: "#music_standard_stereo",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MUSIC_STANDARD_STEREO"
    })
  })
}, {
  depth: 3,
  url: "#music_high_quality",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MUSIC_HIGH_QUALITY"
    })
  })
}, {
  depth: 3,
  url: "#music_high_quality_stereo",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MUSIC_HIGH_QUALITY_STEREO"
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "enum_audioprofiletype__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "default",
      children: _jsx(_components.code, {
        children: "DEFAULT"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：默认音频配置文件。频道场景为互动直播时，采样率为 48 kHz，音乐编码，单声道，码率上限为 64 Kbps；频道场景为通信时，采样率为 32 kHz，语音编码，单声道，码率上限为 18 Kbps。"
    }), `
`, _jsx(_components.h3, {
      id: "speech_standard",
      children: _jsx(_components.code, {
        children: "SPEECH_STANDARD"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：采样率为 32 kHz，语音编码，单声道，码率上限为 18 Kbps。"
    }), `
`, _jsx(_components.h3, {
      id: "music_standard",
      children: _jsx(_components.code, {
        children: "MUSIC_STANDARD"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：采样率为 48 kHz，音乐编码，单声道，码率上限为 64 Kbps。"
    }), `
`, _jsx(_components.h3, {
      id: "music_standard_stereo",
      children: _jsx(_components.code, {
        children: "MUSIC_STANDARD_STEREO"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（3）：采样率为 48 kHz，音乐编码，立体声，码率上限为 80 Kbps。要实现立体声效果，还需调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setadvancedaudiooptions",
        children: "setAdvancedAudioOptions"
      }), "，并在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-advancedaudiooptions",
        children: "AdvancedAudioOptions"
      }), " 中将 ", _jsx(_components.code, {
        children: "audioProcessingChannels"
      }), " 设置为 ", _jsx(_components.code, {
        children: "AGORA_AUDIO_STEREO_PROCESSING"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "music_high_quality",
      children: _jsx(_components.code, {
        children: "MUSIC_HIGH_QUALITY"
      })
    }), `
`, _jsx(_components.p, {
      children: "（4）：采样率为 48 kHz，音乐编码，单声道，码率上限为 96 Kbps。"
    }), `
`, _jsx(_components.h3, {
      id: "music_high_quality_stereo",
      children: _jsx(_components.code, {
        children: "MUSIC_HIGH_QUALITY_STEREO"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（5）：采样率为 48 kHz，音乐编码，立体声，码率上限为 128 Kbps。要实现立体声效果，还需调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setadvancedaudiooptions",
        children: "setAdvancedAudioOptions"
      }), "，并在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-advancedaudiooptions",
        children: "AdvancedAudioOptions"
      }), " 中将 ", _jsx(_components.code, {
        children: "audioProcessingChannels"
      }), " 设置为 ", _jsx(_components.code, {
        children: "AGORA_AUDIO_STEREO_PROCESSING"
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
