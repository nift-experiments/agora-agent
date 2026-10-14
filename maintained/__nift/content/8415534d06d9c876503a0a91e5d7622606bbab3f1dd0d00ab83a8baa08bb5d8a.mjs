import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "音频设备管理",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_audio_device" />

<a id="api_irtcengine_getaudiodeviceinfo" />

## getAudioDeviceInfo [#getaudiodeviceinfo]

获取音频设备信息。

<a id="api_irtcengine_getaudiodeviceinfo__prototype" />

\`\`\`java
public abstract DeviceInfo getAudioDeviceInfo();
\`\`\`

<a id="api_irtcengine_getaudiodeviceinfo__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你可以在加入频道前或加入频道后调用该方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_getaudiodeviceinfo__return_values" />

### 返回值 [#返回值]

方法调用成功，返回 [DeviceInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-deviceinfo) 对象。 方法调用失败，返回 \`null\`。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_startplaybackdevicetest" />

## startPlaybackDeviceTest [#startplaybackdevicetest]

启动本地音频播放设备测试。

<a id="api_irtcengine_startplaybackdevicetest__prototype" />

\`\`\`java
public abstract int startPlaybackDeviceTest(String audioFileName);
\`\`\`

<a id="api_irtcengine_startplaybackdevicetest__detailed_desc" />

调用该方法后，SDK 会播放你指定的音频文件。如果你能听到音频，说明播放设备工作正常。调用该方法后，SDK 每 100 毫秒触发一次 [onAudioVolumeIndication](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onaudiovolumeindication) 回调，报告 \`uid\` 为 1 的播放设备音量信息。该方法与 [startEchoTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startechotest3) 的区别在于， [startPlaybackDeviceTest](/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_startplaybackdevicetest) 仅检测本地音频播放设备是否正常，而 [startEchoTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startechotest3) 可同时检测音视频设备和网络状况。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请在加入频道前调用该方法。测试完成后，请在加入频道前调用 [stopPlaybackDeviceTest](/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_stopplaybackdevicetest) 停止测试。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_startplaybackdevicetest__parameters" />

### 参数 [#参数]

#### \`audioFileName\` [#audiofilename]

音频文件的路径，UTF-8 编码的字符串。支持的文件格式包括：wav、mp3、m4a 和 aac。支持的采样率包括：8000、16000、32000、44100 和 48000 Hz。

<a id="api_irtcengine_startplaybackdevicetest__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_startrecordingdevicetest" />

## startRecordingDeviceTest [#startrecordingdevicetest]

启动音频采集设备测试。

<a id="api_irtcengine_startrecordingdevicetest__prototype" />

\`\`\`java
public abstract int startRecordingDeviceTest(int indicationInterval);
\`\`\`

<a id="api_irtcengine_startrecordingdevicetest__detailed_desc" />

调用该方法后，SDK 会按照设置的时间间隔触发 [onAudioVolumeIndication](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onaudiovolumeindication) 回调，报告 \`uid\` = 0 以及采集设备的音量信息。该方法与 [startEchoTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startechotest3) 的区别在于， [startRecordingDeviceTest](/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_startrecordingdevicetest) 仅检测本地音频采集设备是否正常工作，而 [startEchoTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startechotest3) 可同时检测音视频设备和网络状况。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请在加入频道前调用该方法。测试完成后，在加入频道前调用 [stopRecordingDeviceTest](/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_stoprecordingdevicetest) 停止测试。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_startrecordingdevicetest__parameters" />

### 参数 [#参数-1]

#### \`indicationInterval\` [#indicationinterval]

触发 [onAudioVolumeIndication](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onaudiovolumeindication) 回调的时间间隔（毫秒）。该值应大于 10，否则将无法收到 [onAudioVolumeIndication](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onaudiovolumeindication) 回调，且 SDK 返回错误码 -2。建议设置为 100。

<a id="api_irtcengine_startrecordingdevicetest__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2：参数无效，请检查参数设置。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_stopplaybackdevicetest" />

## stopPlaybackDeviceTest [#stopplaybackdevicetest]

停止音频播放设备测试。

<a id="api_irtcengine_stopplaybackdevicetest__prototype" />

\`\`\`java
public abstract int stopPlaybackDeviceTest();
\`\`\`

<a id="api_irtcengine_stopplaybackdevicetest__detailed_desc" />

你需要在调用 [startPlaybackDeviceTest](/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_startplaybackdevicetest) 后调用该方法以停止测试。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请在加入频道前调用该方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_stopplaybackdevicetest__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_stoprecordingdevicetest" />

## stopRecordingDeviceTest [#stoprecordingdevicetest]

停止音频采集设备测试。

<a id="api_irtcengine_stoprecordingdevicetest__prototype" />

\`\`\`java
public abstract int stopRecordingDeviceTest();
\`\`\`

<a id="api_irtcengine_stoprecordingdevicetest__detailed_desc" />

你必须在调用 [startRecordingDeviceTest](/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_startrecordingdevicetest) 后调用该方法以停止音频采集设备测试。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请在加入频道前调用该方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_stoprecordingdevicetest__return_values" />

### 返回值 [#返回值-4]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-4]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)
`;
export let structuredData = {
  contents: [{
    heading: "getaudiodeviceinfo",
    content: "获取音频设备信息。"
  }, {
    heading: "getaudiodeviceinfo",
    content: "你可以在加入频道前或加入频道后调用该方法。"
  }, {
    heading: "返回值",
    content: "方法调用成功，返回 DeviceInfo 对象。 方法调用失败，返回 `null`。"
  }, {
    heading: "所属接口类",
    content: "RtcEngine"
  }, {
    heading: "startplaybackdevicetest",
    content: "启动本地音频播放设备测试。"
  }, {
    heading: "startplaybackdevicetest",
    content: "调用该方法后，SDK 会播放你指定的音频文件。如果你能听到音频，说明播放设备工作正常。调用该方法后，SDK 每 100 毫秒触发一次 onAudioVolumeIndication 回调，报告 `uid` 为 1 的播放设备音量信息。该方法与 startEchoTest 的区别在于， startPlaybackDeviceTest 仅检测本地音频播放设备是否正常，而 startEchoTest 可同时检测音视频设备和网络状况。"
  }, {
    heading: "startplaybackdevicetest",
    content: "请在加入频道前调用该方法。测试完成后，请在加入频道前调用 stopPlaybackDeviceTest 停止测试。"
  }, {
    heading: "audiofilename",
    content: "音频文件的路径，UTF-8 编码的字符串。支持的文件格式包括：wav、mp3、m4a 和 aac。支持的采样率包括：8000、16000、32000、44100 和 48000 Hz。"
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
    heading: "startrecordingdevicetest",
    content: "启动音频采集设备测试。"
  }, {
    heading: "startrecordingdevicetest",
    content: "调用该方法后，SDK 会按照设置的时间间隔触发 onAudioVolumeIndication 回调，报告 `uid` = 0 以及采集设备的音量信息。该方法与 startEchoTest 的区别在于， startRecordingDeviceTest 仅检测本地音频采集设备是否正常工作，而 startEchoTest 可同时检测音视频设备和网络状况。"
  }, {
    heading: "startrecordingdevicetest",
    content: "请在加入频道前调用该方法。测试完成后，在加入频道前调用 stopRecordingDeviceTest 停止测试。"
  }, {
    heading: "indicationinterval",
    content: "触发 onAudioVolumeIndication 回调的时间间隔（毫秒）。该值应大于 10，否则将无法收到 onAudioVolumeIndication 回调，且 SDK 返回错误码 -2。建议设置为 100。"
  }, {
    heading: "返回值-2",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-2",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-2",
    content: "-2：参数无效，请检查参数设置。"
  }, {
    heading: "所属接口类-2",
    content: "RtcEngine"
  }, {
    heading: "stopplaybackdevicetest",
    content: "停止音频播放设备测试。"
  }, {
    heading: "stopplaybackdevicetest",
    content: "你需要在调用 startPlaybackDeviceTest 后调用该方法以停止测试。"
  }, {
    heading: "stopplaybackdevicetest",
    content: "请在加入频道前调用该方法。"
  }, {
    heading: "返回值-3",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-3",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-3",
    content: "RtcEngine"
  }, {
    heading: "stoprecordingdevicetest",
    content: "停止音频采集设备测试。"
  }, {
    heading: "stoprecordingdevicetest",
    content: "你必须在调用 startRecordingDeviceTest 后调用该方法以停止音频采集设备测试。"
  }, {
    heading: "stoprecordingdevicetest",
    content: "请在加入频道前调用该方法。"
  }, {
    heading: "返回值-4",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-4",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-4",
    content: "RtcEngine"
  }],
  headings: [{
    id: "getaudiodeviceinfo",
    content: "getAudioDeviceInfo"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "startplaybackdevicetest",
    content: "startPlaybackDeviceTest"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "audiofilename",
    content: "`audioFileName`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "startrecordingdevicetest",
    content: "startRecordingDeviceTest"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "indicationinterval",
    content: "`indicationInterval`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "stopplaybackdevicetest",
    content: "stopPlaybackDeviceTest"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "stoprecordingdevicetest",
    content: "stopRecordingDeviceTest"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#getaudiodeviceinfo",
  title: _jsx(_Fragment, {
    children: "getAudioDeviceInfo"
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
  url: "#startplaybackdevicetest",
  title: _jsx(_Fragment, {
    children: "startPlaybackDeviceTest"
  })
}, {
  depth: 3,
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#audiofilename",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "audioFileName"
    })
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
  url: "#startrecordingdevicetest",
  title: _jsx(_Fragment, {
    children: "startRecordingDeviceTest"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#indicationinterval",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "indicationInterval"
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
  url: "#stopplaybackdevicetest",
  title: _jsx(_Fragment, {
    children: "stopPlaybackDeviceTest"
  })
}, {
  depth: 3,
  url: "#返回值-3",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-3",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#stoprecordingdevicetest",
  title: _jsx(_Fragment, {
    children: "stopRecordingDeviceTest"
  })
}, {
  depth: 3,
  url: "#返回值-4",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-4",
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
      id: "toc_audio_device"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getaudiodeviceinfo"
    }), `
`, _jsx(_components.h2, {
      id: "getaudiodeviceinfo",
      children: "getAudioDeviceInfo"
    }), `
`, _jsx(_components.p, {
      children: "获取音频设备信息。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getaudiodeviceinfo__prototype"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " DeviceInfo "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getAudioDeviceInfo"
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
      id: "api_irtcengine_getaudiodeviceinfo__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "你可以在加入频道前或加入频道后调用该方法。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getaudiodeviceinfo__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-deviceinfo",
        children: "DeviceInfo"
      }), " 对象。 方法调用失败，返回 ", _jsx(_components.code, {
        children: "null"
      }), "。"]
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
      id: "api_irtcengine_startplaybackdevicetest"
    }), `
`, _jsx(_components.h2, {
      id: "startplaybackdevicetest",
      children: "startPlaybackDeviceTest"
    }), `
`, _jsx(_components.p, {
      children: "启动本地音频播放设备测试。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startplaybackdevicetest__prototype"
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
              children: " startPlaybackDeviceTest"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String audioFileName);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startplaybackdevicetest__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法后，SDK 会播放你指定的音频文件。如果你能听到音频，说明播放设备工作正常。调用该方法后，SDK 每 100 毫秒触发一次 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onaudiovolumeindication",
        children: "onAudioVolumeIndication"
      }), " 回调，报告 ", _jsx(_components.code, {
        children: "uid"
      }), " 为 1 的播放设备音量信息。该方法与 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startechotest3",
        children: "startEchoTest"
      }), " 的区别在于， ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_startplaybackdevicetest",
        children: "startPlaybackDeviceTest"
      }), " 仅检测本地音频播放设备是否正常，而 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startechotest3",
        children: "startEchoTest"
      }), " 可同时检测音视频设备和网络状况。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请在加入频道前调用该方法。测试完成后，请在加入频道前调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_stopplaybackdevicetest",
            children: "stopPlaybackDeviceTest"
          }), " 停止测试。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startplaybackdevicetest__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "audiofilename",
      children: _jsx(_components.code, {
        children: "audioFileName"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频文件的路径，UTF-8 编码的字符串。支持的文件格式包括：wav、mp3、m4a 和 aac。支持的采样率包括：8000、16000、32000、44100 和 48000 Hz。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startplaybackdevicetest__return_values"
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
      id: "api_irtcengine_startrecordingdevicetest"
    }), `
`, _jsx(_components.h2, {
      id: "startrecordingdevicetest",
      children: "startRecordingDeviceTest"
    }), `
`, _jsx(_components.p, {
      children: "启动音频采集设备测试。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startrecordingdevicetest__prototype"
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
              children: " startRecordingDeviceTest"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
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
              children: " indicationInterval);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startrecordingdevicetest__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法后，SDK 会按照设置的时间间隔触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onaudiovolumeindication",
        children: "onAudioVolumeIndication"
      }), " 回调，报告 ", _jsx(_components.code, {
        children: "uid"
      }), " = 0 以及采集设备的音量信息。该方法与 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startechotest3",
        children: "startEchoTest"
      }), " 的区别在于， ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_startrecordingdevicetest",
        children: "startRecordingDeviceTest"
      }), " 仅检测本地音频采集设备是否正常工作，而 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startechotest3",
        children: "startEchoTest"
      }), " 可同时检测音视频设备和网络状况。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请在加入频道前调用该方法。测试完成后，在加入频道前调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_stoprecordingdevicetest",
            children: "stopRecordingDeviceTest"
          }), " 停止测试。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startrecordingdevicetest__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "indicationinterval",
      children: _jsx(_components.code, {
        children: "indicationInterval"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onaudiovolumeindication",
        children: "onAudioVolumeIndication"
      }), " 回调的时间间隔（毫秒）。该值应大于 10，否则将无法收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onaudiovolumeindication",
        children: "onAudioVolumeIndication"
      }), " 回调，且 SDK 返回错误码 -2。建议设置为 100。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startrecordingdevicetest__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-2：参数无效，请检查参数设置。"
          }), `
`]
        }), `
`]
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
      id: "api_irtcengine_stopplaybackdevicetest"
    }), `
`, _jsx(_components.h2, {
      id: "stopplaybackdevicetest",
      children: "stopPlaybackDeviceTest"
    }), `
`, _jsx(_components.p, {
      children: "停止音频播放设备测试。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopplaybackdevicetest__prototype"
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
              children: " stopPlaybackDeviceTest"
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
      id: "api_irtcengine_stopplaybackdevicetest__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你需要在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_startplaybackdevicetest",
        children: "startPlaybackDeviceTest"
      }), " 后调用该方法以停止测试。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "请在加入频道前调用该方法。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopplaybackdevicetest__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-3",
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
      id: "所属接口类-3",
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
      id: "api_irtcengine_stoprecordingdevicetest"
    }), `
`, _jsx(_components.h2, {
      id: "stoprecordingdevicetest",
      children: "stopRecordingDeviceTest"
    }), `
`, _jsx(_components.p, {
      children: "停止音频采集设备测试。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoprecordingdevicetest__prototype"
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
              children: " stopRecordingDeviceTest"
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
      id: "api_irtcengine_stoprecordingdevicetest__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_startrecordingdevicetest",
        children: "startRecordingDeviceTest"
      }), " 后调用该方法以停止音频采集设备测试。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "请在加入频道前调用该方法。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoprecordingdevicetest__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-4",
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
      id: "所属接口类-4",
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
