import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AudioProcessingChannelsEnum",
  description: "设置音频预处理的声道数。"
};
export let _markdown = `

<a id="enum_audioprocessingchannels__detailed_desc" />

在需要增强真实感的场景中，例如音乐会，本地用户可能需要采集立体声并将其发送给远端用户。例如，歌手、吉他手和鼓手站在舞台的不同位置，音频采集设备采集他们的立体声音频并将其发送给远端用户。远端用户可以从不同方向听到歌曲、吉他和鼓声，就像置身于观众席一样。你可以通过设置双声道处理来实现立体声。声网推荐以下设置：

1. 预处理：调用 setAdvancedAudioOptions，并在 AdvancedAudioOptions 中将 audioProcessingChannels 设置为 AGORA\\_AUDIO\\_STEREO\\_PROCESSING （2）；
2. 后处理：调用 setAudioProfile(int profile)，并将 profile 设置为 MUSIC\\_STANDARD\\_STEREO （3）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5）。

   <CalloutContainer type="info">
     <CalloutTitle>
       注
     </CalloutTitle>

     <CalloutDescription>
       仅当 SDK 使用媒体音量时，立体声设置才会生效。
     </CalloutDescription>
   </CalloutContainer>

<a id="enum_audioprocessingchannels__parameters" />

## 枚举值 [#枚举值]

### \`AGORA_AUDIO_MONO_PROCESSING\` [#agora_audio_mono_processing]

（1）：（默认）单声道。

### \`AGORA_AUDIO_STEREO_PROCESSING\` [#agora_audio_stereo_processing]

（2）：立体声。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "在需要增强真实感的场景中，例如音乐会，本地用户可能需要采集立体声并将其发送给远端用户。例如，歌手、吉他手和鼓手站在舞台的不同位置，音频采集设备采集他们的立体声音频并将其发送给远端用户。远端用户可以从不同方向听到歌曲、吉他和鼓声，就像置身于观众席一样。你可以通过设置双声道处理来实现立体声。声网推荐以下设置："
  }, {
    heading: undefined,
    content: "预处理：调用 setAdvancedAudioOptions，并在 AdvancedAudioOptions 中将 audioProcessingChannels 设置为 AGORA\\_AUDIO\\_STEREO\\_PROCESSING （2）；"
  }, {
    heading: undefined,
    content: "后处理：调用 setAudioProfile(int profile)，并将 profile 设置为 MUSIC\\_STANDARD\\_STEREO （3）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5）。"
  }, {
    heading: undefined,
    content: "仅当 SDK 使用媒体音量时，立体声设置才会生效。"
  }, {
    heading: "agora_audio_mono_processing",
    content: "（1）：（默认）单声道。"
  }, {
    heading: "agora_audio_stereo_processing",
    content: "（2）：立体声。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "agora_audio_mono_processing",
    content: "`AGORA_AUDIO_MONO_PROCESSING`"
  }, {
    id: "agora_audio_stereo_processing",
    content: "`AGORA_AUDIO_STEREO_PROCESSING`"
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
  url: "#agora_audio_mono_processing",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AGORA_AUDIO_MONO_PROCESSING"
    })
  })
}, {
  depth: 3,
  url: "#agora_audio_stereo_processing",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AGORA_AUDIO_STEREO_PROCESSING"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
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
      id: "enum_audioprocessingchannels__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "在需要增强真实感的场景中，例如音乐会，本地用户可能需要采集立体声并将其发送给远端用户。例如，歌手、吉他手和鼓手站在舞台的不同位置，音频采集设备采集他们的立体声音频并将其发送给远端用户。远端用户可以从不同方向听到歌曲、吉他和鼓声，就像置身于观众席一样。你可以通过设置双声道处理来实现立体声。声网推荐以下设置："
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "预处理：调用 setAdvancedAudioOptions，并在 AdvancedAudioOptions 中将 audioProcessingChannels 设置为 AGORA_AUDIO_STEREO_PROCESSING （2）；"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "后处理：调用 setAudioProfile(int profile)，并将 profile 设置为 MUSIC_STANDARD_STEREO （3）或 MUSIC_HIGH_QUALITY_STEREO （5）。"
        }), `
`, _jsxs(CalloutContainer, {
          type: "info",
          children: [_jsx(CalloutTitle, {
            children: "注"
          }), _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "仅当 SDK 使用媒体音量时，立体声设置才会生效。"
            })
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx("a", {
      id: "enum_audioprocessingchannels__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "agora_audio_mono_processing",
      children: _jsx(_components.code, {
        children: "AGORA_AUDIO_MONO_PROCESSING"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：（默认）单声道。"
    }), `
`, _jsx(_components.h3, {
      id: "agora_audio_stereo_processing",
      children: _jsx(_components.code, {
        children: "AGORA_AUDIO_STEREO_PROCESSING"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：立体声。"
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
