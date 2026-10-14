import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "RtcEngineConfig",
  description: "配置 RtcEngine 实例的参数。"
};
export let _markdown = `

<a id="class_rtcengineconfig__prototype" />

\`\`\`java
public class RtcEngineConfig {
  public IRtcEngineEventHandler mEventHandler;
  public Context mContext;
  public String mAppId;
  public int mAreaCode;
  public int mChannelProfile;
  public String mLicense;
  public int mAudioScenario;
  public boolean mAutoRegisterAgoraExtensions;
  public List<String> mExtensionList;
  public IMediaExtensionObserver mExtensionObserver;
  public LogConfig mLogConfig;
  public Integer mThreadPriority;
  public String mNativeLibPath;
  public boolean mDomainLimit;
}
\`\`\`

<a id="class_rtcengineconfig__parameters" />

## 属性 [#属性]

### \`mEventHandler\` [#meventhandler]

事件回调处理器。详见 [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)。

### \`mContext\` [#mcontext]

Android Activity 的上下文对象。

### \`mAppId\` [#mappid]

由声网为项目颁发的 App ID。只有使用相同 App ID 的用户才能加入同一频道进行音视频通话。一个 App ID 只能用于创建一个 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 实例。更换 App ID 时需调用 [destroy \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_destroy1) 销毁原实例后再创建新实例。

### \`mAreaCode\` [#mareacode]

连接区域，适用于有区域限制的场景。支持按位或运算组合多个区域码。详见 [AreaCode](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-areacode)。

### \`mChannelProfile\` [#mchannelprofile]

频道场景类型：

* CHANNEL\\_PROFILE\\_COMMUNICATION (0)：通信场景。声网建议使用直播场景以获得更佳的音视频体验。
* CHANNEL\\_PROFILE\\_LIVE\\_BROADCASTING (1)：（默认）直播场景。
* CHANNEL\\_PROFILE\\_GAME (2)：游戏场景。自 v4.x.x 版本废弃，请改用 CHANNEL\\_PROFILE\\_LIVE\\_BROADCASTING。
* CHANNEL\\_PROFILE\\_CLOUD\\_GAMING (3)：互动场景，针对低延迟优化，适用于用户频繁互动的场景。自 v4.x.x 版本废弃，请改用 CHANNEL\\_PROFILE\\_LIVE\\_BROADCASTING。

### \`mLicense\` [#mlicense]

用于频道连接验证的许可证，按许可证计费。

### \`mAudioScenario\` [#maudioscenario]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    在使用此枚举前，需调用 [getAudioDeviceInfo](/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_getaudiodeviceinfo) 检查音频设备是否支持超低延迟采集与播放。若需体验超低延迟，需确保音频设备支持超低延迟（\`isLowLatencyAudioSupported\` = true ）。
  </CalloutDescription>
</CalloutContainer>

音频场景类型，不同场景下设备使用的音量类型不同：

* AUDIO\\_SCENARIO\\_DEFAULT (0)：（默认）自动场景，SDK 会根据用户角色和音频路由选择合适的音质。
* AUDIO\\_SCENARIO\\_GAME\\_STREAMING (3)：高音质场景，适用于播放音乐。
* AUDIO\\_SCENARIO\\_CHATROOM (5)：语聊场景，适用于频繁切换角色或控制麦克风静音的场景。
* AUDIO\\_SCENARIO\\_CHORUS (7)：实时合唱场景，适用于网络良好且对超低延迟有较高要求的用户。
* AUDIO\\_SCENARIO\\_MEETING (8)：会议场景，主要传输人声。
* AUDIO\\_SCENARIO\\_AI\\_CLIENT (10)：AI 对话场景，仅适用于与通过 Conversational AI Engine 创建的智能体交互的场景。

### \`mAutoRegisterAgoraExtensions\` [#mautoregisteragoraextensions]

是否在初始化 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 时自动注册声网插件：

* true：（默认）自动注册插件。
* false：不自动注册插件，需调用 enableExtension 手动注册。

### \`mExtensionList\` [#mextensionlist]

插件库名称列表。

### \`mExtensionObserver\` [#mextensionobserver]

[IMediaExtensionObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaextensionobserver) 实例。详见 [IMediaExtensionObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaextensionobserver)。

### \`mLogConfig\` [#mlogconfig]

日志配置。详见 [LogConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-logconfig)。 默认情况下，SDK 会生成 5 个 SDK 日志文件和 5 个 API 日志文件：

* SDK 日志文件包括： agorasdk.log、 agorasdk.1.log、 agorasdk.2.log、 agorasdk.3.log、 agorasdk.4.log
* API 日志文件包括： agoraapi.log、 agoraapi.1.log、 agoraapi.2.log、 agoraapi.3.log、 agoraapi.4.log
* 每个日志文件默认大小为 2048 KB，采用 UTF-8 编码。
* SDK 会将最新日志写入 agorasdk.log 或 agoraapi.log。
* 当 agorasdk.log 写满时，SDK 会依次删除旧文件并重命名，生成新的日志文件。
* agoraapi.log 遵循相同的覆盖规则。

### \`mThreadPriority\` [#mthreadpriority]

线程优先级类型。详见 \`ThreadPriorityType\`。

### \`mNativeLibPath\` [#mnativelibpath]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    适用于手动集成 SDK。通过 Maven Central 或 JitPack 集成时不适用。请确保该目录存在，否则 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 初始化会失败。
  </CalloutDescription>
</CalloutContainer>

\`.so\` 文件的存储目录。该目录必须是 App 的有效私有目录，可通过 \`Context.getDir\` 获取。

* 设置该参数后，SDK 会从指定目录加载.so 文件，实现动态加载以减小包体积。
* 若不设置或设为 null，SDK 会从默认编译路径加载.so 文件，包体积会增大。

### \`mDomainLimit\` [#mdomainlimit]

是否启用域名限制：

* true：启用域名限制，适用于物联网设备使用 IoT 卡接入的场景。SDK 仅连接运营商白名单中报备的域名或 IP。
* false：（默认）不启用域名限制，适用于大多数通用场景。
`;
export let structuredData = {
  contents: [{
    heading: "meventhandler",
    content: "事件回调处理器。详见 IRtcEngineEventHandler。"
  }, {
    heading: "mcontext",
    content: "Android Activity 的上下文对象。"
  }, {
    heading: "mappid",
    content: "由声网为项目颁发的 App ID。只有使用相同 App ID 的用户才能加入同一频道进行音视频通话。一个 App ID 只能用于创建一个 RtcEngine 实例。更换 App ID 时需调用 destroy \\[2/2] 销毁原实例后再创建新实例。"
  }, {
    heading: "mareacode",
    content: "连接区域，适用于有区域限制的场景。支持按位或运算组合多个区域码。详见 AreaCode。"
  }, {
    heading: "mchannelprofile",
    content: "频道场景类型："
  }, {
    heading: "mchannelprofile",
    content: "CHANNEL\\_PROFILE\\_COMMUNICATION (0)：通信场景。声网建议使用直播场景以获得更佳的音视频体验。"
  }, {
    heading: "mchannelprofile",
    content: "CHANNEL\\_PROFILE\\_LIVE\\_BROADCASTING (1)：（默认）直播场景。"
  }, {
    heading: "mchannelprofile",
    content: "CHANNEL\\_PROFILE\\_GAME (2)：游戏场景。自 v4.x.x 版本废弃，请改用 CHANNEL\\_PROFILE\\_LIVE\\_BROADCASTING。"
  }, {
    heading: "mchannelprofile",
    content: "CHANNEL\\_PROFILE\\_CLOUD\\_GAMING (3)：互动场景，针对低延迟优化，适用于用户频繁互动的场景。自 v4.x.x 版本废弃，请改用 CHANNEL\\_PROFILE\\_LIVE\\_BROADCASTING。"
  }, {
    heading: "mlicense",
    content: "用于频道连接验证的许可证，按许可证计费。"
  }, {
    heading: "maudioscenario",
    content: "在使用此枚举前，需调用 getAudioDeviceInfo 检查音频设备是否支持超低延迟采集与播放。若需体验超低延迟，需确保音频设备支持超低延迟（`isLowLatencyAudioSupported` = true ）。"
  }, {
    heading: "maudioscenario",
    content: "音频场景类型，不同场景下设备使用的音量类型不同："
  }, {
    heading: "maudioscenario",
    content: "AUDIO\\_SCENARIO\\_DEFAULT (0)：（默认）自动场景，SDK 会根据用户角色和音频路由选择合适的音质。"
  }, {
    heading: "maudioscenario",
    content: "AUDIO\\_SCENARIO\\_GAME\\_STREAMING (3)：高音质场景，适用于播放音乐。"
  }, {
    heading: "maudioscenario",
    content: "AUDIO\\_SCENARIO\\_CHATROOM (5)：语聊场景，适用于频繁切换角色或控制麦克风静音的场景。"
  }, {
    heading: "maudioscenario",
    content: "AUDIO\\_SCENARIO\\_CHORUS (7)：实时合唱场景，适用于网络良好且对超低延迟有较高要求的用户。"
  }, {
    heading: "maudioscenario",
    content: "AUDIO\\_SCENARIO\\_MEETING (8)：会议场景，主要传输人声。"
  }, {
    heading: "maudioscenario",
    content: "AUDIO\\_SCENARIO\\_AI\\_CLIENT (10)：AI 对话场景，仅适用于与通过 Conversational AI Engine 创建的智能体交互的场景。"
  }, {
    heading: "mautoregisteragoraextensions",
    content: "是否在初始化 RtcEngine 时自动注册声网插件："
  }, {
    heading: "mautoregisteragoraextensions",
    content: "true：（默认）自动注册插件。"
  }, {
    heading: "mautoregisteragoraextensions",
    content: "false：不自动注册插件，需调用 enableExtension 手动注册。"
  }, {
    heading: "mextensionlist",
    content: "插件库名称列表。"
  }, {
    heading: "mextensionobserver",
    content: "IMediaExtensionObserver 实例。详见 IMediaExtensionObserver。"
  }, {
    heading: "mlogconfig",
    content: "日志配置。详见 LogConfig。 默认情况下，SDK 会生成 5 个 SDK 日志文件和 5 个 API 日志文件："
  }, {
    heading: "mlogconfig",
    content: "SDK 日志文件包括： agorasdk.log、 agorasdk.1.log、 agorasdk.2.log、 agorasdk.3.log、 agorasdk.4.log"
  }, {
    heading: "mlogconfig",
    content: "API 日志文件包括： agoraapi.log、 agoraapi.1.log、 agoraapi.2.log、 agoraapi.3.log、 agoraapi.4.log"
  }, {
    heading: "mlogconfig",
    content: "每个日志文件默认大小为 2048 KB，采用 UTF-8 编码。"
  }, {
    heading: "mlogconfig",
    content: "SDK 会将最新日志写入 agorasdk.log 或 agoraapi.log。"
  }, {
    heading: "mlogconfig",
    content: "当 agorasdk.log 写满时，SDK 会依次删除旧文件并重命名，生成新的日志文件。"
  }, {
    heading: "mlogconfig",
    content: "agoraapi.log 遵循相同的覆盖规则。"
  }, {
    heading: "mthreadpriority",
    content: "线程优先级类型。详见 `ThreadPriorityType`。"
  }, {
    heading: "mnativelibpath",
    content: "适用于手动集成 SDK。通过 Maven Central 或 JitPack 集成时不适用。请确保该目录存在，否则 RtcEngine 初始化会失败。"
  }, {
    heading: "mnativelibpath",
    content: "`.so` 文件的存储目录。该目录必须是 App 的有效私有目录，可通过 `Context.getDir` 获取。"
  }, {
    heading: "mnativelibpath",
    content: "设置该参数后，SDK 会从指定目录加载.so 文件，实现动态加载以减小包体积。"
  }, {
    heading: "mnativelibpath",
    content: "若不设置或设为 null，SDK 会从默认编译路径加载.so 文件，包体积会增大。"
  }, {
    heading: "mdomainlimit",
    content: "是否启用域名限制："
  }, {
    heading: "mdomainlimit",
    content: "true：启用域名限制，适用于物联网设备使用 IoT 卡接入的场景。SDK 仅连接运营商白名单中报备的域名或 IP。"
  }, {
    heading: "mdomainlimit",
    content: "false：（默认）不启用域名限制，适用于大多数通用场景。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "meventhandler",
    content: "`mEventHandler`"
  }, {
    id: "mcontext",
    content: "`mContext`"
  }, {
    id: "mappid",
    content: "`mAppId`"
  }, {
    id: "mareacode",
    content: "`mAreaCode`"
  }, {
    id: "mchannelprofile",
    content: "`mChannelProfile`"
  }, {
    id: "mlicense",
    content: "`mLicense`"
  }, {
    id: "maudioscenario",
    content: "`mAudioScenario`"
  }, {
    id: "mautoregisteragoraextensions",
    content: "`mAutoRegisterAgoraExtensions`"
  }, {
    id: "mextensionlist",
    content: "`mExtensionList`"
  }, {
    id: "mextensionobserver",
    content: "`mExtensionObserver`"
  }, {
    id: "mlogconfig",
    content: "`mLogConfig`"
  }, {
    id: "mthreadpriority",
    content: "`mThreadPriority`"
  }, {
    id: "mnativelibpath",
    content: "`mNativeLibPath`"
  }, {
    id: "mdomainlimit",
    content: "`mDomainLimit`"
  }]
};
export let toc = [{
  depth: 2,
  url: "#属性",
  title: _jsx(_Fragment, {
    children: "属性"
  })
}, {
  depth: 3,
  url: "#meventhandler",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mEventHandler"
    })
  })
}, {
  depth: 3,
  url: "#mcontext",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mContext"
    })
  })
}, {
  depth: 3,
  url: "#mappid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mAppId"
    })
  })
}, {
  depth: 3,
  url: "#mareacode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mAreaCode"
    })
  })
}, {
  depth: 3,
  url: "#mchannelprofile",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mChannelProfile"
    })
  })
}, {
  depth: 3,
  url: "#mlicense",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mLicense"
    })
  })
}, {
  depth: 3,
  url: "#maudioscenario",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mAudioScenario"
    })
  })
}, {
  depth: 3,
  url: "#mautoregisteragoraextensions",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mAutoRegisterAgoraExtensions"
    })
  })
}, {
  depth: 3,
  url: "#mextensionlist",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mExtensionList"
    })
  })
}, {
  depth: 3,
  url: "#mextensionobserver",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mExtensionObserver"
    })
  })
}, {
  depth: 3,
  url: "#mlogconfig",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mLogConfig"
    })
  })
}, {
  depth: 3,
  url: "#mthreadpriority",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mThreadPriority"
    })
  })
}, {
  depth: 3,
  url: "#mnativelibpath",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mNativeLibPath"
    })
  })
}, {
  depth: 3,
  url: "#mdomainlimit",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mDomainLimit"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
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
      id: "class_rtcengineconfig__prototype"
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
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
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
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " RtcEngineConfig"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " IRtcEngineEventHandler mEventHandler;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Context mContext;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String mAppId;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " mAreaCode;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " mChannelProfile;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String mLicense;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " mAudioScenario;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " mAutoRegisterAgoraExtensions;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " List<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "> mExtensionList;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " IMediaExtensionObserver mExtensionObserver;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " LogConfig mLogConfig;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Integer mThreadPriority;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String mNativeLibPath;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " mDomainLimit;"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx("a", {
      id: "class_rtcengineconfig__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "meventhandler",
      children: _jsx(_components.code, {
        children: "mEventHandler"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["事件回调处理器。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
        children: "IRtcEngineEventHandler"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "mcontext",
      children: _jsx(_components.code, {
        children: "mContext"
      })
    }), `
`, _jsx(_components.p, {
      children: "Android Activity 的上下文对象。"
    }), `
`, _jsx(_components.h3, {
      id: "mappid",
      children: _jsx(_components.code, {
        children: "mAppId"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["由声网为项目颁发的 App ID。只有使用相同 App ID 的用户才能加入同一频道进行音视频通话。一个 App ID 只能用于创建一个 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
        children: "RtcEngine"
      }), " 实例。更换 App ID 时需调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_destroy1",
        children: "destroy [2/2]"
      }), " 销毁原实例后再创建新实例。"]
    }), `
`, _jsx(_components.h3, {
      id: "mareacode",
      children: _jsx(_components.code, {
        children: "mAreaCode"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["连接区域，适用于有区域限制的场景。支持按位或运算组合多个区域码。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-areacode",
        children: "AreaCode"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "mchannelprofile",
      children: _jsx(_components.code, {
        children: "mChannelProfile"
      })
    }), `
`, _jsx(_components.p, {
      children: "频道场景类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "CHANNEL_PROFILE_COMMUNICATION (0)：通信场景。声网建议使用直播场景以获得更佳的音视频体验。"
      }), `
`, _jsx(_components.li, {
        children: "CHANNEL_PROFILE_LIVE_BROADCASTING (1)：（默认）直播场景。"
      }), `
`, _jsx(_components.li, {
        children: "CHANNEL_PROFILE_GAME (2)：游戏场景。自 v4.x.x 版本废弃，请改用 CHANNEL_PROFILE_LIVE_BROADCASTING。"
      }), `
`, _jsx(_components.li, {
        children: "CHANNEL_PROFILE_CLOUD_GAMING (3)：互动场景，针对低延迟优化，适用于用户频繁互动的场景。自 v4.x.x 版本废弃，请改用 CHANNEL_PROFILE_LIVE_BROADCASTING。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "mlicense",
      children: _jsx(_components.code, {
        children: "mLicense"
      })
    }), `
`, _jsx(_components.p, {
      children: "用于频道连接验证的许可证，按许可证计费。"
    }), `
`, _jsx(_components.h3, {
      id: "maudioscenario",
      children: _jsx(_components.code, {
        children: "mAudioScenario"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["在使用此枚举前，需调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_getaudiodeviceinfo",
            children: "getAudioDeviceInfo"
          }), " 检查音频设备是否支持超低延迟采集与播放。若需体验超低延迟，需确保音频设备支持超低延迟（", _jsx(_components.code, {
            children: "isLowLatencyAudioSupported"
          }), " = true ）。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "音频场景类型，不同场景下设备使用的音量类型不同："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "AUDIO_SCENARIO_DEFAULT (0)：（默认）自动场景，SDK 会根据用户角色和音频路由选择合适的音质。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_SCENARIO_GAME_STREAMING (3)：高音质场景，适用于播放音乐。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_SCENARIO_CHATROOM (5)：语聊场景，适用于频繁切换角色或控制麦克风静音的场景。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_SCENARIO_CHORUS (7)：实时合唱场景，适用于网络良好且对超低延迟有较高要求的用户。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_SCENARIO_MEETING (8)：会议场景，主要传输人声。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_SCENARIO_AI_CLIENT (10)：AI 对话场景，仅适用于与通过 Conversational AI Engine 创建的智能体交互的场景。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "mautoregisteragoraextensions",
      children: _jsx(_components.code, {
        children: "mAutoRegisterAgoraExtensions"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["是否在初始化 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
        children: "RtcEngine"
      }), " 时自动注册声网插件："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：（默认）自动注册插件。"
      }), `
`, _jsx(_components.li, {
        children: "false：不自动注册插件，需调用 enableExtension 手动注册。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "mextensionlist",
      children: _jsx(_components.code, {
        children: "mExtensionList"
      })
    }), `
`, _jsx(_components.p, {
      children: "插件库名称列表。"
    }), `
`, _jsx(_components.h3, {
      id: "mextensionobserver",
      children: _jsx(_components.code, {
        children: "mExtensionObserver"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaextensionobserver",
        children: "IMediaExtensionObserver"
      }), " 实例。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaextensionobserver",
        children: "IMediaExtensionObserver"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "mlogconfig",
      children: _jsx(_components.code, {
        children: "mLogConfig"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["日志配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-logconfig",
        children: "LogConfig"
      }), "。 默认情况下，SDK 会生成 5 个 SDK 日志文件和 5 个 API 日志文件："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "SDK 日志文件包括： agorasdk.log、 agorasdk.1.log、 agorasdk.2.log、 agorasdk.3.log、 agorasdk.4.log"
      }), `
`, _jsx(_components.li, {
        children: "API 日志文件包括： agoraapi.log、 agoraapi.1.log、 agoraapi.2.log、 agoraapi.3.log、 agoraapi.4.log"
      }), `
`, _jsx(_components.li, {
        children: "每个日志文件默认大小为 2048 KB，采用 UTF-8 编码。"
      }), `
`, _jsx(_components.li, {
        children: "SDK 会将最新日志写入 agorasdk.log 或 agoraapi.log。"
      }), `
`, _jsx(_components.li, {
        children: "当 agorasdk.log 写满时，SDK 会依次删除旧文件并重命名，生成新的日志文件。"
      }), `
`, _jsx(_components.li, {
        children: "agoraapi.log 遵循相同的覆盖规则。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "mthreadpriority",
      children: _jsx(_components.code, {
        children: "mThreadPriority"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["线程优先级类型。详见 ", _jsx(_components.code, {
        children: "ThreadPriorityType"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "mnativelibpath",
      children: _jsx(_components.code, {
        children: "mNativeLibPath"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["适用于手动集成 SDK。通过 Maven Central 或 JitPack 集成时不适用。请确保该目录存在，否则 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
            children: "RtcEngine"
          }), " 初始化会失败。"]
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: ".so"
      }), " 文件的存储目录。该目录必须是 App 的有效私有目录，可通过 ", _jsx(_components.code, {
        children: "Context.getDir"
      }), " 获取。"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "设置该参数后，SDK 会从指定目录加载.so 文件，实现动态加载以减小包体积。"
      }), `
`, _jsx(_components.li, {
        children: "若不设置或设为 null，SDK 会从默认编译路径加载.so 文件，包体积会增大。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "mdomainlimit",
      children: _jsx(_components.code, {
        children: "mDomainLimit"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用域名限制："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用域名限制，适用于物联网设备使用 IoT 卡接入的场景。SDK 仅连接运营商白名单中报备的域名或 IP。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不启用域名限制，适用于大多数通用场景。"
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
