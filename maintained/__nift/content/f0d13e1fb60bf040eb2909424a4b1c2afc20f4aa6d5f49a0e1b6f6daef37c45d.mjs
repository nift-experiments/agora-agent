import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "已编码音频数据",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_audio_encoded" />

<a id="api_irtcengine_registeraudioencodedframeobserver" />

## registerAudioEncodedFrameObserver [#registeraudioencodedframeobserver]

注册编码音频数据的观察器。

<a id="api_irtcengine_registeraudioencodedframeobserver__prototype" />

\`\`\`java
public abstract int registerAudioEncodedFrameObserver(AudioEncodedFrameObserverConfig config, IAudioEncodedFrameObserver observer);
\`\`\`

<a id="api_irtcengine_registeraudioencodedframeobserver__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    调用该方法需在加入频道后进行。你可以调用此方法或 \`startAudioRecording\` 来设置音频文件的录制类型和质量，但不建议同时使用这两个方法。只有后调用的方法会生效。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_registeraudioencodedframeobserver__parameters" />

### 参数 [#参数]

#### \`config\` [#config]

编码音频的观察器配置。详见 [AudioEncodedFrameObserverConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioencodedframeobserverconfig)。

#### \`observer\` [#observer]

编码音频数据的观察器。详见 [IAudioEncodedFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioencodedframeobserver)。

<a id="api_irtcengine_registeraudioencodedframeobserver__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="callback_iaudioencodedframeobserver_onmixedaudioencodedframe" />

## onMixedAudioEncodedFrame [#onmixedaudioencodedframe]

本地及所有远端用户的混音编码音频数据回调。

<a id="callback_iaudioencodedframeobserver_onmixedaudioencodedframe__prototype" />

\`\`\`java
public abstract void onMixedAudioEncodedFrame(ByteBuffer buffer, int samplesPerChannel, int channels, int samplesPerSec, int codecType);
\`\`\`

<a id="callback_iaudioencodedframeobserver_onmixedaudioencodedframe__detailed_desc" />

调用 [registerAudioEncodedFrameObserver](/zh-CN/api-reference/rtc/android/audio/audio-encoded#api_irtcengine_registeraudioencodedframeobserver) 并将音频配置设置为 \`AUDIO_ENCODED_FRAME_OBSERVER_POSITION_MIXED\` 后，可以通过该回调获取混音编码音频数据。

<a id="callback_iaudioencodedframeobserver_onmixedaudioencodedframe__parameters" />

### 参数 [#参数-1]

#### \`buffer\` [#buffer]

音频缓冲区。

#### \`samplesPerChannel\` [#samplesperchannel]

每个声道中的采样数。

#### \`channels\` [#channels]

声道数：

* 1：单声道。
* 2：立体声。若为立体声，数据为交错排列。

#### \`samplesPerSec\` [#samplespersec]

录制采样率（Hz）。

#### \`codecType\` [#codectype]

音频编码类型：

* 1：OPUS。
* 8：LC-AAC。
* 9：HE-AAC。
* 11：HE-AAC v2。

### 所属接口类 [#所属接口类-1]

* [IAudioEncodedFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioencodedframeobserver)

<a id="callback_iaudioencodedframeobserver_onplaybackaudioencodedframe" />

## onPlaybackAudioEncodedFrame [#onplaybackaudioencodedframe]

获取所有远端用户编码音频数据的回调。

<a id="callback_iaudioencodedframeobserver_onplaybackaudioencodedframe__prototype" />

\`\`\`java
public abstract void onPlaybackAudioEncodedFrame(ByteBuffer buffer, int samplesPerChannel, int channels, int samplesPerSec, int codecType);
\`\`\`

<a id="callback_iaudioencodedframeobserver_onplaybackaudioencodedframe__detailed_desc" />

调用 [registerAudioEncodedFrameObserver](/zh-CN/api-reference/rtc/android/audio/audio-encoded#api_irtcengine_registeraudioencodedframeobserver) 并将编码音频设置为 \`AUDIO_ENCODED_FRAME_OBSERVER_POSITION_PLAYBACK\` 后，可以通过该回调获取所有远端用户的编码音频数据。

<a id="callback_iaudioencodedframeobserver_onplaybackaudioencodedframe__timing" />

### 触发时机 [#触发时机]

该回调在获取远端用户编码音频数据时被触发。

<a id="callback_iaudioencodedframeobserver_onplaybackaudioencodedframe__parameters" />

### 参数 [#参数-2]

#### \`buffer\` [#buffer-1]

音频缓冲区。

#### \`samplesPerChannel\` [#samplesperchannel-1]

每个声道中的采样数。

#### \`channels\` [#channels-1]

声道数：

* 1：单声道。
* 2：立体声。若为立体声，数据为交错排列。

#### \`samplesPerSec\` [#samplespersec-1]

录音采样率（Hz）。

#### \`codecType\` [#codectype-1]

音频编码类型：

* 1：OPUS。
* 8：LC-AAC。
* 9：HE-AAC。
* 11：HE-AAC v2。

### 所属接口类 [#所属接口类-2]

* [IAudioEncodedFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioencodedframeobserver)

<a id="callback_iaudioencodedframeobserver_onrecordaudioencodedframe" />

## onRecordAudioEncodedFrame [#onrecordaudioencodedframe]

本地用户编码音频数据回调。

<a id="callback_iaudioencodedframeobserver_onrecordaudioencodedframe__prototype" />

\`\`\`java
public abstract void onRecordAudioEncodedFrame(ByteBuffer buffer, int samplesPerChannel, int channels, int samplesPerSec, int codecType);
\`\`\`

<a id="callback_iaudioencodedframeobserver_onrecordaudioencodedframe__detailed_desc" />

调用 [registerAudioEncodedFrameObserver](/zh-CN/api-reference/rtc/android/audio/audio-encoded#api_irtcengine_registeraudioencodedframeobserver) 并将编码音频设置为 \`AUDIO_ENCODED_FRAME_OBSERVER_POSITION_MIC\` 后，可以通过该回调获取本地用户的编码音频数据。

<a id="callback_iaudioencodedframeobserver_onrecordaudioencodedframe__parameters" />

### 参数 [#参数-3]

#### \`buffer\` [#buffer-2]

音频缓冲区。

#### \`samplesPerChannel\` [#samplesperchannel-2]

音频帧中每个声道的采样数。

#### \`channels\` [#channels-2]

声道数：

* 1：单声道。
* 2：立体声。若为立体声，数据为交错排列。

#### \`samplesPerSec\` [#samplespersec-2]

录制采样率（Hz）。

#### \`codecType\` [#codectype-2]

音频编码类型：

* 1：OPUS。
* 8：LC-AAC。
* 9：HE-AAC。
* 11：HE-AAC v2。

### 所属接口类 [#所属接口类-3]

* [IAudioEncodedFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioencodedframeobserver)
`;
export let structuredData = {
  contents: [{
    heading: "registeraudioencodedframeobserver",
    content: "注册编码音频数据的观察器。"
  }, {
    heading: "registeraudioencodedframeobserver",
    content: "调用该方法需在加入频道后进行。你可以调用此方法或 `startAudioRecording` 来设置音频文件的录制类型和质量，但不建议同时使用这两个方法。只有后调用的方法会生效。"
  }, {
    heading: "config",
    content: "编码音频的观察器配置。详见 AudioEncodedFrameObserverConfig。"
  }, {
    heading: "observer",
    content: "编码音频数据的观察器。详见 IAudioEncodedFrameObserver。"
  }, {
    heading: "返回值",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类",
    content: "RtcEngine"
  }, {
    heading: "onmixedaudioencodedframe",
    content: "本地及所有远端用户的混音编码音频数据回调。"
  }, {
    heading: "onmixedaudioencodedframe",
    content: "调用 registerAudioEncodedFrameObserver 并将音频配置设置为 `AUDIO_ENCODED_FRAME_OBSERVER_POSITION_MIXED` 后，可以通过该回调获取混音编码音频数据。"
  }, {
    heading: "buffer",
    content: "音频缓冲区。"
  }, {
    heading: "samplesperchannel",
    content: "每个声道中的采样数。"
  }, {
    heading: "channels",
    content: "声道数："
  }, {
    heading: "channels",
    content: "1：单声道。"
  }, {
    heading: "channels",
    content: "2：立体声。若为立体声，数据为交错排列。"
  }, {
    heading: "samplespersec",
    content: "录制采样率（Hz）。"
  }, {
    heading: "codectype",
    content: "音频编码类型："
  }, {
    heading: "codectype",
    content: "1：OPUS。"
  }, {
    heading: "codectype",
    content: "8：LC-AAC。"
  }, {
    heading: "codectype",
    content: "9：HE-AAC。"
  }, {
    heading: "codectype",
    content: "11：HE-AAC v2。"
  }, {
    heading: "所属接口类-1",
    content: "IAudioEncodedFrameObserver"
  }, {
    heading: "onplaybackaudioencodedframe",
    content: "获取所有远端用户编码音频数据的回调。"
  }, {
    heading: "onplaybackaudioencodedframe",
    content: "调用 registerAudioEncodedFrameObserver 并将编码音频设置为 `AUDIO_ENCODED_FRAME_OBSERVER_POSITION_PLAYBACK` 后，可以通过该回调获取所有远端用户的编码音频数据。"
  }, {
    heading: "触发时机",
    content: "该回调在获取远端用户编码音频数据时被触发。"
  }, {
    heading: "buffer-1",
    content: "音频缓冲区。"
  }, {
    heading: "samplesperchannel-1",
    content: "每个声道中的采样数。"
  }, {
    heading: "channels-1",
    content: "声道数："
  }, {
    heading: "channels-1",
    content: "1：单声道。"
  }, {
    heading: "channels-1",
    content: "2：立体声。若为立体声，数据为交错排列。"
  }, {
    heading: "samplespersec-1",
    content: "录音采样率（Hz）。"
  }, {
    heading: "codectype-1",
    content: "音频编码类型："
  }, {
    heading: "codectype-1",
    content: "1：OPUS。"
  }, {
    heading: "codectype-1",
    content: "8：LC-AAC。"
  }, {
    heading: "codectype-1",
    content: "9：HE-AAC。"
  }, {
    heading: "codectype-1",
    content: "11：HE-AAC v2。"
  }, {
    heading: "所属接口类-2",
    content: "IAudioEncodedFrameObserver"
  }, {
    heading: "onrecordaudioencodedframe",
    content: "本地用户编码音频数据回调。"
  }, {
    heading: "onrecordaudioencodedframe",
    content: "调用 registerAudioEncodedFrameObserver 并将编码音频设置为 `AUDIO_ENCODED_FRAME_OBSERVER_POSITION_MIC` 后，可以通过该回调获取本地用户的编码音频数据。"
  }, {
    heading: "buffer-2",
    content: "音频缓冲区。"
  }, {
    heading: "samplesperchannel-2",
    content: "音频帧中每个声道的采样数。"
  }, {
    heading: "channels-2",
    content: "声道数："
  }, {
    heading: "channels-2",
    content: "1：单声道。"
  }, {
    heading: "channels-2",
    content: "2：立体声。若为立体声，数据为交错排列。"
  }, {
    heading: "samplespersec-2",
    content: "录制采样率（Hz）。"
  }, {
    heading: "codectype-2",
    content: "音频编码类型："
  }, {
    heading: "codectype-2",
    content: "1：OPUS。"
  }, {
    heading: "codectype-2",
    content: "8：LC-AAC。"
  }, {
    heading: "codectype-2",
    content: "9：HE-AAC。"
  }, {
    heading: "codectype-2",
    content: "11：HE-AAC v2。"
  }, {
    heading: "所属接口类-3",
    content: "IAudioEncodedFrameObserver"
  }],
  headings: [{
    id: "registeraudioencodedframeobserver",
    content: "registerAudioEncodedFrameObserver"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "config",
    content: "`config`"
  }, {
    id: "observer",
    content: "`observer`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "onmixedaudioencodedframe",
    content: "onMixedAudioEncodedFrame"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "buffer",
    content: "`buffer`"
  }, {
    id: "samplesperchannel",
    content: "`samplesPerChannel`"
  }, {
    id: "channels",
    content: "`channels`"
  }, {
    id: "samplespersec",
    content: "`samplesPerSec`"
  }, {
    id: "codectype",
    content: "`codecType`"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "onplaybackaudioencodedframe",
    content: "onPlaybackAudioEncodedFrame"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "buffer-1",
    content: "`buffer`"
  }, {
    id: "samplesperchannel-1",
    content: "`samplesPerChannel`"
  }, {
    id: "channels-1",
    content: "`channels`"
  }, {
    id: "samplespersec-1",
    content: "`samplesPerSec`"
  }, {
    id: "codectype-1",
    content: "`codecType`"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "onrecordaudioencodedframe",
    content: "onRecordAudioEncodedFrame"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "buffer-2",
    content: "`buffer`"
  }, {
    id: "samplesperchannel-2",
    content: "`samplesPerChannel`"
  }, {
    id: "channels-2",
    content: "`channels`"
  }, {
    id: "samplespersec-2",
    content: "`samplesPerSec`"
  }, {
    id: "codectype-2",
    content: "`codecType`"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#registeraudioencodedframeobserver",
  title: _jsx(_Fragment, {
    children: "registerAudioEncodedFrameObserver"
  })
}, {
  depth: 3,
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#config",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "config"
    })
  })
}, {
  depth: 4,
  url: "#observer",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "observer"
    })
  })
}, {
  depth: 3,
  url: "#返回值",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onmixedaudioencodedframe",
  title: _jsx(_Fragment, {
    children: "onMixedAudioEncodedFrame"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#buffer",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "buffer"
    })
  })
}, {
  depth: 4,
  url: "#samplesperchannel",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerChannel"
    })
  })
}, {
  depth: 4,
  url: "#channels",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channels"
    })
  })
}, {
  depth: 4,
  url: "#samplespersec",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerSec"
    })
  })
}, {
  depth: 4,
  url: "#codectype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "codecType"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-1",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onplaybackaudioencodedframe",
  title: _jsx(_Fragment, {
    children: "onPlaybackAudioEncodedFrame"
  })
}, {
  depth: 3,
  url: "#触发时机",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-2",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#buffer-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "buffer"
    })
  })
}, {
  depth: 4,
  url: "#samplesperchannel-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerChannel"
    })
  })
}, {
  depth: 4,
  url: "#channels-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channels"
    })
  })
}, {
  depth: 4,
  url: "#samplespersec-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerSec"
    })
  })
}, {
  depth: 4,
  url: "#codectype-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "codecType"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-2",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onrecordaudioencodedframe",
  title: _jsx(_Fragment, {
    children: "onRecordAudioEncodedFrame"
  })
}, {
  depth: 3,
  url: "#参数-3",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#buffer-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "buffer"
    })
  })
}, {
  depth: 4,
  url: "#samplesperchannel-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerChannel"
    })
  })
}, {
  depth: 4,
  url: "#channels-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channels"
    })
  })
}, {
  depth: 4,
  url: "#samplespersec-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerSec"
    })
  })
}, {
  depth: 4,
  url: "#codectype-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "codecType"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-3",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
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
      id: "toc_audio_encoded"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registeraudioencodedframeobserver"
    }), `
`, _jsx(_components.h2, {
      id: "registeraudioencodedframeobserver",
      children: "registerAudioEncodedFrameObserver"
    }), `
`, _jsx(_components.p, {
      children: "注册编码音频数据的观察器。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registeraudioencodedframeobserver__prototype"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " registerAudioEncodedFrameObserver"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(AudioEncodedFrameObserverConfig config, IAudioEncodedFrameObserver observer);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registeraudioencodedframeobserver__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["调用该方法需在加入频道后进行。你可以调用此方法或 ", _jsx(_components.code, {
            children: "startAudioRecording"
          }), " 来设置音频文件的录制类型和质量，但不建议同时使用这两个方法。只有后调用的方法会生效。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registeraudioencodedframeobserver__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "config",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["编码音频的观察器配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioencodedframeobserverconfig",
        children: "AudioEncodedFrameObserverConfig"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "observer",
      children: _jsx(_components.code, {
        children: "observer"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["编码音频数据的观察器。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioencodedframeobserver",
        children: "IAudioEncodedFrameObserver"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registeraudioencodedframeobserver__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：方法调用成功。"
      }), `
`, _jsxs(_components.li, {
        children: ["< 0：方法调用失败。详见", _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/rtc/android/error-code",
          children: "错误码"
        }), "了解详情和解决建议。"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_iaudioencodedframeobserver_onmixedaudioencodedframe"
    }), `
`, _jsx(_components.h2, {
      id: "onmixedaudioencodedframe",
      children: "onMixedAudioEncodedFrame"
    }), `
`, _jsx(_components.p, {
      children: "本地及所有远端用户的混音编码音频数据回调。"
    }), `
`, _jsx("a", {
      id: "callback_iaudioencodedframeobserver_onmixedaudioencodedframe__prototype"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onMixedAudioEncodedFrame"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(ByteBuffer buffer, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " samplesPerChannel, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " channels, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " samplesPerSec, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " codecType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_iaudioencodedframeobserver_onmixedaudioencodedframe__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-encoded#api_irtcengine_registeraudioencodedframeobserver",
        children: "registerAudioEncodedFrameObserver"
      }), " 并将音频配置设置为 ", _jsx(_components.code, {
        children: "AUDIO_ENCODED_FRAME_OBSERVER_POSITION_MIXED"
      }), " 后，可以通过该回调获取混音编码音频数据。"]
    }), `
`, _jsx("a", {
      id: "callback_iaudioencodedframeobserver_onmixedaudioencodedframe__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "buffer",
      children: _jsx(_components.code, {
        children: "buffer"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频缓冲区。"
    }), `
`, _jsx(_components.h4, {
      id: "samplesperchannel",
      children: _jsx(_components.code, {
        children: "samplesPerChannel"
      })
    }), `
`, _jsx(_components.p, {
      children: "每个声道中的采样数。"
    }), `
`, _jsx(_components.h4, {
      id: "channels",
      children: _jsx(_components.code, {
        children: "channels"
      })
    }), `
`, _jsx(_components.p, {
      children: "声道数："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：单声道。"
      }), `
`, _jsx(_components.li, {
        children: "2：立体声。若为立体声，数据为交错排列。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "samplespersec",
      children: _jsx(_components.code, {
        children: "samplesPerSec"
      })
    }), `
`, _jsx(_components.p, {
      children: "录制采样率（Hz）。"
    }), `
`, _jsx(_components.h4, {
      id: "codectype",
      children: _jsx(_components.code, {
        children: "codecType"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频编码类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：OPUS。"
      }), `
`, _jsx(_components.li, {
        children: "8：LC-AAC。"
      }), `
`, _jsx(_components.li, {
        children: "9：HE-AAC。"
      }), `
`, _jsx(_components.li, {
        children: "11：HE-AAC v2。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-1",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioencodedframeobserver",
          children: "IAudioEncodedFrameObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_iaudioencodedframeobserver_onplaybackaudioencodedframe"
    }), `
`, _jsx(_components.h2, {
      id: "onplaybackaudioencodedframe",
      children: "onPlaybackAudioEncodedFrame"
    }), `
`, _jsx(_components.p, {
      children: "获取所有远端用户编码音频数据的回调。"
    }), `
`, _jsx("a", {
      id: "callback_iaudioencodedframeobserver_onplaybackaudioencodedframe__prototype"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onPlaybackAudioEncodedFrame"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(ByteBuffer buffer, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " samplesPerChannel, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " channels, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " samplesPerSec, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " codecType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_iaudioencodedframeobserver_onplaybackaudioencodedframe__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-encoded#api_irtcengine_registeraudioencodedframeobserver",
        children: "registerAudioEncodedFrameObserver"
      }), " 并将编码音频设置为 ", _jsx(_components.code, {
        children: "AUDIO_ENCODED_FRAME_OBSERVER_POSITION_PLAYBACK"
      }), " 后，可以通过该回调获取所有远端用户的编码音频数据。"]
    }), `
`, _jsx("a", {
      id: "callback_iaudioencodedframeobserver_onplaybackaudioencodedframe__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在获取远端用户编码音频数据时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_iaudioencodedframeobserver_onplaybackaudioencodedframe__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "buffer-1",
      children: _jsx(_components.code, {
        children: "buffer"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频缓冲区。"
    }), `
`, _jsx(_components.h4, {
      id: "samplesperchannel-1",
      children: _jsx(_components.code, {
        children: "samplesPerChannel"
      })
    }), `
`, _jsx(_components.p, {
      children: "每个声道中的采样数。"
    }), `
`, _jsx(_components.h4, {
      id: "channels-1",
      children: _jsx(_components.code, {
        children: "channels"
      })
    }), `
`, _jsx(_components.p, {
      children: "声道数："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：单声道。"
      }), `
`, _jsx(_components.li, {
        children: "2：立体声。若为立体声，数据为交错排列。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "samplespersec-1",
      children: _jsx(_components.code, {
        children: "samplesPerSec"
      })
    }), `
`, _jsx(_components.p, {
      children: "录音采样率（Hz）。"
    }), `
`, _jsx(_components.h4, {
      id: "codectype-1",
      children: _jsx(_components.code, {
        children: "codecType"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频编码类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：OPUS。"
      }), `
`, _jsx(_components.li, {
        children: "8：LC-AAC。"
      }), `
`, _jsx(_components.li, {
        children: "9：HE-AAC。"
      }), `
`, _jsx(_components.li, {
        children: "11：HE-AAC v2。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-2",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioencodedframeobserver",
          children: "IAudioEncodedFrameObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_iaudioencodedframeobserver_onrecordaudioencodedframe"
    }), `
`, _jsx(_components.h2, {
      id: "onrecordaudioencodedframe",
      children: "onRecordAudioEncodedFrame"
    }), `
`, _jsx(_components.p, {
      children: "本地用户编码音频数据回调。"
    }), `
`, _jsx("a", {
      id: "callback_iaudioencodedframeobserver_onrecordaudioencodedframe__prototype"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onRecordAudioEncodedFrame"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(ByteBuffer buffer, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " samplesPerChannel, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " channels, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " samplesPerSec, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " codecType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_iaudioencodedframeobserver_onrecordaudioencodedframe__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-encoded#api_irtcengine_registeraudioencodedframeobserver",
        children: "registerAudioEncodedFrameObserver"
      }), " 并将编码音频设置为 ", _jsx(_components.code, {
        children: "AUDIO_ENCODED_FRAME_OBSERVER_POSITION_MIC"
      }), " 后，可以通过该回调获取本地用户的编码音频数据。"]
    }), `
`, _jsx("a", {
      id: "callback_iaudioencodedframeobserver_onrecordaudioencodedframe__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "buffer-2",
      children: _jsx(_components.code, {
        children: "buffer"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频缓冲区。"
    }), `
`, _jsx(_components.h4, {
      id: "samplesperchannel-2",
      children: _jsx(_components.code, {
        children: "samplesPerChannel"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频帧中每个声道的采样数。"
    }), `
`, _jsx(_components.h4, {
      id: "channels-2",
      children: _jsx(_components.code, {
        children: "channels"
      })
    }), `
`, _jsx(_components.p, {
      children: "声道数："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：单声道。"
      }), `
`, _jsx(_components.li, {
        children: "2：立体声。若为立体声，数据为交错排列。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "samplespersec-2",
      children: _jsx(_components.code, {
        children: "samplesPerSec"
      })
    }), `
`, _jsx(_components.p, {
      children: "录制采样率（Hz）。"
    }), `
`, _jsx(_components.h4, {
      id: "codectype-2",
      children: _jsx(_components.code, {
        children: "codecType"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频编码类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：OPUS。"
      }), `
`, _jsx(_components.li, {
        children: "8：LC-AAC。"
      }), `
`, _jsx(_components.li, {
        children: "9：HE-AAC。"
      }), `
`, _jsx(_components.li, {
        children: "11：HE-AAC v2。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-3",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioencodedframeobserver",
          children: "IAudioEncodedFrameObserver"
        })
      }), `
`]
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
