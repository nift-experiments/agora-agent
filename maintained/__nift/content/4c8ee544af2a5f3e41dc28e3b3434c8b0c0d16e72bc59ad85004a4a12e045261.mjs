import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AudioTrackType",
  description: "音频轨道类型。"
};
export let _markdown = `

<a id="enum_audiotracktype__parameters" />

## 枚举值 [#枚举值]

### \`AUDIO_TRACK_MIXABLE\` [#audio_track_mixable]

（0）：可混音音频轨道。支持与其他音频流（如通过麦克风采集的音频流）混音，并在混音后本地播放或发布到频道。延迟高于直通音频轨道。

### \`AUDIO_TRACK_DIRECT\` [#audio_track_direct]

（1）：直通音频轨道。替代通过麦克风采集的音频流，且不支持与其他音频流混音。延迟低于可混音音频轨道。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果该参数设置为 \`AUDIO_TRACK_DIRECT\`，你必须在调用 \`joinChannel\` 加入频道时，将 [ChannelMediaOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions) 中的 \`publishMicrophoneTrack\` 设置为 false，否则加入频道会失败并返回错误码 -2。
  </CalloutDescription>
</CalloutContainer>
`;
export let structuredData = {
  contents: [{
    heading: "audio_track_mixable",
    content: "（0）：可混音音频轨道。支持与其他音频流（如通过麦克风采集的音频流）混音，并在混音后本地播放或发布到频道。延迟高于直通音频轨道。"
  }, {
    heading: "audio_track_direct",
    content: "（1）：直通音频轨道。替代通过麦克风采集的音频流，且不支持与其他音频流混音。延迟低于可混音音频轨道。"
  }, {
    heading: "audio_track_direct",
    content: "如果该参数设置为 `AUDIO_TRACK_DIRECT`，你必须在调用 `joinChannel` 加入频道时，将 ChannelMediaOptions 中的 `publishMicrophoneTrack` 设置为 false，否则加入频道会失败并返回错误码 -2。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "audio_track_mixable",
    content: "`AUDIO_TRACK_MIXABLE`"
  }, {
    id: "audio_track_direct",
    content: "`AUDIO_TRACK_DIRECT`"
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
  url: "#audio_track_mixable",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AUDIO_TRACK_MIXABLE"
    })
  })
}, {
  depth: 3,
  url: "#audio_track_direct",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AUDIO_TRACK_DIRECT"
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
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "enum_audiotracktype__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "audio_track_mixable",
      children: _jsx(_components.code, {
        children: "AUDIO_TRACK_MIXABLE"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：可混音音频轨道。支持与其他音频流（如通过麦克风采集的音频流）混音，并在混音后本地播放或发布到频道。延迟高于直通音频轨道。"
    }), `
`, _jsx(_components.h3, {
      id: "audio_track_direct",
      children: _jsx(_components.code, {
        children: "AUDIO_TRACK_DIRECT"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：直通音频轨道。替代通过麦克风采集的音频流，且不支持与其他音频流混音。延迟低于可混音音频轨道。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果该参数设置为 ", _jsx(_components.code, {
            children: "AUDIO_TRACK_DIRECT"
          }), "，你必须在调用 ", _jsx(_components.code, {
            children: "joinChannel"
          }), " 加入频道时，将 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions",
            children: "ChannelMediaOptions"
          }), " 中的 ", _jsx(_components.code, {
            children: "publishMicrophoneTrack"
          }), " 设置为 false，否则加入频道会失败并返回错误码 -2。"]
        })
      })]
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
