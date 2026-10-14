import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "本地合图",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_local_transcoder" />

<a id="api_irtcengine_startlocalvideotranscoder" />

## startLocalVideoTranscoder [#startlocalvideotranscoder]

开始本地视频合图。

<a id="api_irtcengine_startlocalvideotranscoder__prototype" />

\`\`\`java
public abstract int startLocalVideoTranscoder(LocalTranscoderConfiguration config);
\`\`\`

<a id="api_irtcengine_startlocalvideotranscoder__detailed_desc" />

调用该方法后，你可以在本地将多个视频流合并为一个视频流，例如摄像头采集的视频流、屏幕共享、媒体播放器、远端视频、视频文件、图片等，然后将混合后的视频流发布到频道中。以下是实现人像画中画效果的典型用例：

1. 调用 enableVirtualBackground，并将自定义背景图设置为 BACKGROUND\\_NONE，即将摄像头采集的视频中的人像与背景分离。
2. 调用 startScreenCapture 开始采集屏幕共享视频流。
3. 调用 startLocalVideoTranscoder，并将采集人像的视频源设置为参与本地视频合图的视频源之一，即可在视频中实现人像画中画效果。

注：

* 本地视频合图需要更多的 CPU 资源。声网建议在性能较高的设备上启用此功能。
* 如果需要混合本地采集的视频流，SDK 支持以下采集组合：
  * 在 Android 平台上，支持最多 2 路摄像头采集的视频流（设备需支持双摄像头或支持外接摄像头）+ 1 路屏幕共享流。
* 配置本地视频合图时，需要确保采集人像的视频流的图层编号大于屏幕共享流的图层编号。否则，人像会被屏幕共享遮挡，无法在最终视频合图中显示。
* 参与本地视频合图的每路视频流的最大分辨率为 4096 × 2160。如果超过该限制，视频合图将不生效。
* 混合后的视频流的最大分辨率为 4096 × 2160。

<a id="api_irtcengine_startlocalvideotranscoder__scenario" />

### 适用场景 [#适用场景]

适用于远程会议、直播、在线教育等场景，便于用户查看和管理多个视频流，并支持人像画中画等功能。

<a id="api_irtcengine_startlocalvideotranscoder__timing" />

### 调用时机 [#调用时机]

* 如果需要混合本地采集的视频流，需要在调用 startCameraCapture 或 startScreenCapture 之后调用该方法。
* 如果希望将混合后的视频流发布到频道中，需要在调用 joinChannel 或 updateChannelMediaOptions 时，将 ChannelMediaOptions 中的 publishTranscodedVideoTrack 设置为 true。

<a id="api_irtcengine_startlocalvideotranscoder__related" />

### 相关回调 [#相关回调]

当调用该方法失败时，SDK 会触发 [onLocalVideoTranscoderError](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#callback_irtcengineeventhandler_onlocalvideotranscodererror) 回调报告失败原因。

<a id="api_irtcengine_startlocalvideotranscoder__parameters" />

### 参数 [#参数]

#### \`config\` [#config]

本地视频合图的配置，详见 [LocalTranscoderConfiguration](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-localtranscoderconfiguration)。

<a id="api_irtcengine_startlocalvideotranscoder__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_stoplocalvideotranscoder" />

## stopLocalVideoTranscoder [#stoplocalvideotranscoder]

停止本地合图。

<a id="api_irtcengine_stoplocalvideotranscoder__prototype" />

\`\`\`java
public abstract int stopLocalVideoTranscoder();
\`\`\`

<a id="api_irtcengine_stoplocalvideotranscoder__detailed_desc" />

调用 [startLocalVideoTranscoder](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_startlocalvideotranscoder) 后，如需停止本地合图，可调用该方法。

<a id="api_irtcengine_stoplocalvideotranscoder__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_updatelocaltranscoderconfiguration" />

## updateLocalTranscoderConfiguration [#updatelocaltranscoderconfiguration]

更新本地合图配置。

<a id="api_irtcengine_updatelocaltranscoderconfiguration__prototype" />

\`\`\`java
public abstract int updateLocalTranscoderConfiguration(LocalTranscoderConfiguration config);
\`\`\`

<a id="api_irtcengine_updatelocaltranscoderconfiguration__detailed_desc" />

调用 [startLocalVideoTranscoder](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_startlocalvideotranscoder) 后，如果你需要更新本地合图配置，可以调用该方法。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果你想更新用于本地合图的视频源类型，例如添加第二个摄像头或屏幕进行视频采集，需要在调用 [startCameraCapture](/zh-CN/api-reference/rtc/android/video/camera-capture#api_irtcengine_startcameracapture) 或 [startScreenCapture](/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_startscreencapture) 后调用该方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_updatelocaltranscoderconfiguration__parameters" />

### 参数 [#参数-1]

#### \`config\` [#config-1]

本地合图配置。详见 [LocalTranscoderConfiguration](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-localtranscoderconfiguration)。

<a id="api_irtcengine_updatelocaltranscoderconfiguration__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="callback_irtcengineeventhandler_onlocalvideotranscodererror" />

## onLocalVideoTranscoderError [#onlocalvideotranscodererror]

本地视频合图过程中发生错误回调。

<a id="callback_irtcengineeventhandler_onlocalvideotranscodererror__prototype" />

\`\`\`java
public void onLocalVideoTranscoderError(LocalTranscoderConfiguration.TranscodingVideoStream stream, int error)
\`\`\`

<a id="callback_irtcengineeventhandler_onlocalvideotranscodererror__detailed_desc" />

当调用 [startLocalVideoTranscoder](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_startlocalvideotranscoder) 或 [updateLocalTranscoderConfiguration](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_updatelocaltranscoderconfiguration) 失败时，SDK 会触发该回调报告失败原因。

<a id="callback_irtcengineeventhandler_onlocalvideotranscodererror__timing" />

### 触发时机 [#触发时机]

该回调在调用 [startLocalVideoTranscoder](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_startlocalvideotranscoder) 或 [updateLocalTranscoderConfiguration](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_updatelocaltranscoderconfiguration) 失败时被触发。

<a id="callback_irtcengineeventhandler_onlocalvideotranscodererror__parameters" />

### 参数 [#参数-2]

#### \`stream\` [#stream]

在视频合图过程中无法被合图的视频流。详见 [TranscodingVideoStream](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-transcodingvideostream)。

#### \`error\` [#error]

本地视频合图错误的原因：

* 1：指定的视频源尚未开始视频采集。你需要创建视频轨道并开始采集。
* 2：无效的视频源类型。你需要指定支持的视频源类型。
* 3：无效的图片路径。你需要指定正确的图片路径。
* 4：无效的图片格式。请确保图片格式为 PNG、JPEG 或 GIF。
* 5：合图后的视频分辨率无效。
* 20：内部错误。

### 所属接口类 [#所属接口类-3]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)
`;
export let structuredData = {
  contents: [{
    heading: "startlocalvideotranscoder",
    content: "开始本地视频合图。"
  }, {
    heading: "startlocalvideotranscoder",
    content: "调用该方法后，你可以在本地将多个视频流合并为一个视频流，例如摄像头采集的视频流、屏幕共享、媒体播放器、远端视频、视频文件、图片等，然后将混合后的视频流发布到频道中。以下是实现人像画中画效果的典型用例："
  }, {
    heading: "startlocalvideotranscoder",
    content: "调用 enableVirtualBackground，并将自定义背景图设置为 BACKGROUND\\_NONE，即将摄像头采集的视频中的人像与背景分离。"
  }, {
    heading: "startlocalvideotranscoder",
    content: "调用 startScreenCapture 开始采集屏幕共享视频流。"
  }, {
    heading: "startlocalvideotranscoder",
    content: "调用 startLocalVideoTranscoder，并将采集人像的视频源设置为参与本地视频合图的视频源之一，即可在视频中实现人像画中画效果。"
  }, {
    heading: "startlocalvideotranscoder",
    content: "注："
  }, {
    heading: "startlocalvideotranscoder",
    content: "本地视频合图需要更多的 CPU 资源。声网建议在性能较高的设备上启用此功能。"
  }, {
    heading: "startlocalvideotranscoder",
    content: "如果需要混合本地采集的视频流，SDK 支持以下采集组合："
  }, {
    heading: "startlocalvideotranscoder",
    content: "在 Android 平台上，支持最多 2 路摄像头采集的视频流（设备需支持双摄像头或支持外接摄像头）+ 1 路屏幕共享流。"
  }, {
    heading: "startlocalvideotranscoder",
    content: "配置本地视频合图时，需要确保采集人像的视频流的图层编号大于屏幕共享流的图层编号。否则，人像会被屏幕共享遮挡，无法在最终视频合图中显示。"
  }, {
    heading: "startlocalvideotranscoder",
    content: "参与本地视频合图的每路视频流的最大分辨率为 4096 × 2160。如果超过该限制，视频合图将不生效。"
  }, {
    heading: "startlocalvideotranscoder",
    content: "混合后的视频流的最大分辨率为 4096 × 2160。"
  }, {
    heading: "适用场景",
    content: "适用于远程会议、直播、在线教育等场景，便于用户查看和管理多个视频流，并支持人像画中画等功能。"
  }, {
    heading: "调用时机",
    content: "如果需要混合本地采集的视频流，需要在调用 startCameraCapture 或 startScreenCapture 之后调用该方法。"
  }, {
    heading: "调用时机",
    content: "如果希望将混合后的视频流发布到频道中，需要在调用 joinChannel 或 updateChannelMediaOptions 时，将 ChannelMediaOptions 中的 publishTranscodedVideoTrack 设置为 true。"
  }, {
    heading: "相关回调",
    content: "当调用该方法失败时，SDK 会触发 onLocalVideoTranscoderError 回调报告失败原因。"
  }, {
    heading: "config",
    content: "本地视频合图的配置，详见 LocalTranscoderConfiguration。"
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
    heading: "stoplocalvideotranscoder",
    content: "停止本地合图。"
  }, {
    heading: "stoplocalvideotranscoder",
    content: "调用 startLocalVideoTranscoder 后，如需停止本地合图，可调用该方法。"
  }, {
    heading: "返回值-1",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-1",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-1",
    content: "RtcEngine"
  }, {
    heading: "updatelocaltranscoderconfiguration",
    content: "更新本地合图配置。"
  }, {
    heading: "updatelocaltranscoderconfiguration",
    content: "调用 startLocalVideoTranscoder 后，如果你需要更新本地合图配置，可以调用该方法。"
  }, {
    heading: "updatelocaltranscoderconfiguration",
    content: "如果你想更新用于本地合图的视频源类型，例如添加第二个摄像头或屏幕进行视频采集，需要在调用 startCameraCapture 或 startScreenCapture 后调用该方法。"
  }, {
    heading: "config-1",
    content: "本地合图配置。详见 LocalTranscoderConfiguration。"
  }, {
    heading: "返回值-2",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-2",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-2",
    content: "RtcEngine"
  }, {
    heading: "onlocalvideotranscodererror",
    content: "本地视频合图过程中发生错误回调。"
  }, {
    heading: "onlocalvideotranscodererror",
    content: "当调用 startLocalVideoTranscoder 或 updateLocalTranscoderConfiguration 失败时，SDK 会触发该回调报告失败原因。"
  }, {
    heading: "触发时机",
    content: "该回调在调用 startLocalVideoTranscoder 或 updateLocalTranscoderConfiguration 失败时被触发。"
  }, {
    heading: "stream",
    content: "在视频合图过程中无法被合图的视频流。详见 TranscodingVideoStream。"
  }, {
    heading: "error",
    content: "本地视频合图错误的原因："
  }, {
    heading: "error",
    content: "1：指定的视频源尚未开始视频采集。你需要创建视频轨道并开始采集。"
  }, {
    heading: "error",
    content: "2：无效的视频源类型。你需要指定支持的视频源类型。"
  }, {
    heading: "error",
    content: "3：无效的图片路径。你需要指定正确的图片路径。"
  }, {
    heading: "error",
    content: "4：无效的图片格式。请确保图片格式为 PNG、JPEG 或 GIF。"
  }, {
    heading: "error",
    content: "5：合图后的视频分辨率无效。"
  }, {
    heading: "error",
    content: "20：内部错误。"
  }, {
    heading: "所属接口类-3",
    content: "IRtcEngineEventHandler"
  }],
  headings: [{
    id: "startlocalvideotranscoder",
    content: "startLocalVideoTranscoder"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "相关回调",
    content: "相关回调"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "config",
    content: "`config`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "stoplocalvideotranscoder",
    content: "stopLocalVideoTranscoder"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "updatelocaltranscoderconfiguration",
    content: "updateLocalTranscoderConfiguration"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "config-1",
    content: "`config`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "onlocalvideotranscodererror",
    content: "onLocalVideoTranscoderError"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "stream",
    content: "`stream`"
  }, {
    id: "error",
    content: "`error`"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#startlocalvideotranscoder",
  title: _jsx(_Fragment, {
    children: "startLocalVideoTranscoder"
  })
}, {
  depth: 3,
  url: "#适用场景",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#调用时机",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#相关回调",
  title: _jsx(_Fragment, {
    children: "相关回调"
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
  url: "#stoplocalvideotranscoder",
  title: _jsx(_Fragment, {
    children: "stopLocalVideoTranscoder"
  })
}, {
  depth: 3,
  url: "#返回值-1",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-1",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#updatelocaltranscoderconfiguration",
  title: _jsx(_Fragment, {
    children: "updateLocalTranscoderConfiguration"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#config-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "config"
    })
  })
}, {
  depth: 3,
  url: "#返回值-2",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-2",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onlocalvideotranscodererror",
  title: _jsx(_Fragment, {
    children: "onLocalVideoTranscoderError"
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
  url: "#stream",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "stream"
    })
  })
}, {
  depth: 4,
  url: "#error",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "error"
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
    ol: "ol",
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
      id: "toc_local_transcoder"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startlocalvideotranscoder"
    }), `
`, _jsx(_components.h2, {
      id: "startlocalvideotranscoder",
      children: "startLocalVideoTranscoder"
    }), `
`, _jsx(_components.p, {
      children: "开始本地视频合图。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startlocalvideotranscoder__prototype"
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
              children: " startLocalVideoTranscoder"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(LocalTranscoderConfiguration config);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startlocalvideotranscoder__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "调用该方法后，你可以在本地将多个视频流合并为一个视频流，例如摄像头采集的视频流、屏幕共享、媒体播放器、远端视频、视频文件、图片等，然后将混合后的视频流发布到频道中。以下是实现人像画中画效果的典型用例："
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "调用 enableVirtualBackground，并将自定义背景图设置为 BACKGROUND_NONE，即将摄像头采集的视频中的人像与背景分离。"
      }), `
`, _jsx(_components.li, {
        children: "调用 startScreenCapture 开始采集屏幕共享视频流。"
      }), `
`, _jsx(_components.li, {
        children: "调用 startLocalVideoTranscoder，并将采集人像的视频源设置为参与本地视频合图的视频源之一，即可在视频中实现人像画中画效果。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "本地视频合图需要更多的 CPU 资源。声网建议在性能较高的设备上启用此功能。"
      }), `
`, _jsxs(_components.li, {
        children: ["如果需要混合本地采集的视频流，SDK 支持以下采集组合：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "在 Android 平台上，支持最多 2 路摄像头采集的视频流（设备需支持双摄像头或支持外接摄像头）+ 1 路屏幕共享流。"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "配置本地视频合图时，需要确保采集人像的视频流的图层编号大于屏幕共享流的图层编号。否则，人像会被屏幕共享遮挡，无法在最终视频合图中显示。"
      }), `
`, _jsx(_components.li, {
        children: "参与本地视频合图的每路视频流的最大分辨率为 4096 × 2160。如果超过该限制，视频合图将不生效。"
      }), `
`, _jsx(_components.li, {
        children: "混合后的视频流的最大分辨率为 4096 × 2160。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startlocalvideotranscoder__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "适用于远程会议、直播、在线教育等场景，便于用户查看和管理多个视频流，并支持人像画中画等功能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startlocalvideotranscoder__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果需要混合本地采集的视频流，需要在调用 startCameraCapture 或 startScreenCapture 之后调用该方法。"
      }), `
`, _jsx(_components.li, {
        children: "如果希望将混合后的视频流发布到频道中，需要在调用 joinChannel 或 updateChannelMediaOptions 时，将 ChannelMediaOptions 中的 publishTranscodedVideoTrack 设置为 true。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startlocalvideotranscoder__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["当调用该方法失败时，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#callback_irtcengineeventhandler_onlocalvideotranscodererror",
        children: "onLocalVideoTranscoderError"
      }), " 回调报告失败原因。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startlocalvideotranscoder__parameters"
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
      children: ["本地视频合图的配置，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-localtranscoderconfiguration",
        children: "LocalTranscoderConfiguration"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startlocalvideotranscoder__return_values"
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
      id: "api_irtcengine_stoplocalvideotranscoder"
    }), `
`, _jsx(_components.h2, {
      id: "stoplocalvideotranscoder",
      children: "stopLocalVideoTranscoder"
    }), `
`, _jsx(_components.p, {
      children: "停止本地合图。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoplocalvideotranscoder__prototype"
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
              children: " stopLocalVideoTranscoder"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "();"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoplocalvideotranscoder__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_startlocalvideotranscoder",
        children: "startLocalVideoTranscoder"
      }), " 后，如需停止本地合图，可调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoplocalvideotranscoder__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-1",
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
      id: "所属接口类-1",
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
      id: "api_irtcengine_updatelocaltranscoderconfiguration"
    }), `
`, _jsx(_components.h2, {
      id: "updatelocaltranscoderconfiguration",
      children: "updateLocalTranscoderConfiguration"
    }), `
`, _jsx(_components.p, {
      children: "更新本地合图配置。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatelocaltranscoderconfiguration__prototype"
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
              children: " updateLocalTranscoderConfiguration"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(LocalTranscoderConfiguration config);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatelocaltranscoderconfiguration__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_startlocalvideotranscoder",
        children: "startLocalVideoTranscoder"
      }), " 后，如果你需要更新本地合图配置，可以调用该方法。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果你想更新用于本地合图的视频源类型，例如添加第二个摄像头或屏幕进行视频采集，需要在调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/camera-capture#api_irtcengine_startcameracapture",
            children: "startCameraCapture"
          }), " 或 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_startscreencapture",
            children: "startScreenCapture"
          }), " 后调用该方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatelocaltranscoderconfiguration__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "config-1",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["本地合图配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-localtranscoderconfiguration",
        children: "LocalTranscoderConfiguration"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatelocaltranscoderconfiguration__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-2",
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
      id: "所属接口类-2",
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
      id: "callback_irtcengineeventhandler_onlocalvideotranscodererror"
    }), `
`, _jsx(_components.h2, {
      id: "onlocalvideotranscodererror",
      children: "onLocalVideoTranscoderError"
    }), `
`, _jsx(_components.p, {
      children: "本地视频合图过程中发生错误回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalvideotranscodererror__prototype"
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
              children: " void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onLocalVideoTranscoderError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(LocalTranscoderConfiguration.TranscodingVideoStream stream, "
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
              children: " error)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalvideotranscodererror__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["当调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_startlocalvideotranscoder",
        children: "startLocalVideoTranscoder"
      }), " 或 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_updatelocaltranscoderconfiguration",
        children: "updateLocalTranscoderConfiguration"
      }), " 失败时，SDK 会触发该回调报告失败原因。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalvideotranscodererror__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_startlocalvideotranscoder",
        children: "startLocalVideoTranscoder"
      }), " 或 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_updatelocaltranscoderconfiguration",
        children: "updateLocalTranscoderConfiguration"
      }), " 失败时被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalvideotranscodererror__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "stream",
      children: _jsx(_components.code, {
        children: "stream"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["在视频合图过程中无法被合图的视频流。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-transcodingvideostream",
        children: "TranscodingVideoStream"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "error",
      children: _jsx(_components.code, {
        children: "error"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地视频合图错误的原因："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：指定的视频源尚未开始视频采集。你需要创建视频轨道并开始采集。"
      }), `
`, _jsx(_components.li, {
        children: "2：无效的视频源类型。你需要指定支持的视频源类型。"
      }), `
`, _jsx(_components.li, {
        children: "3：无效的图片路径。你需要指定正确的图片路径。"
      }), `
`, _jsx(_components.li, {
        children: "4：无效的图片格式。请确保图片格式为 PNG、JPEG 或 GIF。"
      }), `
`, _jsx(_components.li, {
        children: "5：合图后的视频分辨率无效。"
      }), `
`, _jsx(_components.li, {
        children: "20：内部错误。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
          children: "IRtcEngineEventHandler"
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
