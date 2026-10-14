import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "本地音频合流",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_audiomixer" />

<a id="api_irtcengine_startlocalaudiomixer" />

## startLocalAudioMixer [#startlocalaudiomixer]

开始本地音频合流。

<a id="api_irtcengine_startlocalaudiomixer__prototype" />

\`\`\`java
public abstract int startLocalAudioMixer(LocalAudioMixerConfiguration config);
\`\`\`

<a id="api_irtcengine_startlocalaudiomixer__detailed_desc" />

该方法支持在本地将多个音频流合并为一个音频流。例如，可以将本地麦克风采集的音频流、媒体播放器、声卡以及远端用户的音频流混合为一个音频流，并将其发布到频道中。

* 如果你希望混合本地采集的音频流，可以在 ChannelMediaOptions 中将 publishMixedAudioTrack 设置为 true，然后将混合后的音频流发布到频道中。
* 如果你希望混合远端音频流，请确保远端音频流已在频道中发布，并且你已订阅了需要合流的音频流。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    为确保音频质量，建议混音的音频流数量不超过 10 路。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_startlocalaudiomixer__scenario" />

### 适用场景 [#适用场景]

你可以在以下场景中启用该功能：

* 使用本地视频合图功能时，可同时采集并发布合图视频流所关联的音频流。
* 在直播场景中，用户可以接收频道内的音频流，在本地混合多个音频流后，将混合后的音频流转发到其他频道。
* 在在线课堂中，老师可以将与学生互动的音频在本地混合后转发到其他频道。

<a id="api_irtcengine_startlocalaudiomixer__timing" />

### 调用时机 [#调用时机]

你可以在加入频道前或加入频道后调用此方法。

<a id="api_irtcengine_startlocalaudiomixer__parameters" />

### 参数 [#参数]

#### \`config\` [#config]

用于配置本地音频合流的参数，详见 [LocalAudioMixerConfiguration](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-localaudiomixerconfiguration)。

<a id="api_irtcengine_startlocalaudiomixer__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -7： RtcEngine 对象尚未初始化。请先初始化 RtcEngine 对象后再调用该方法。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_stoplocalaudiomixer" />

## stopLocalAudioMixer [#stoplocalaudiomixer]

停止本地音频合流。

<a id="api_irtcengine_stoplocalaudiomixer__prototype" />

\`\`\`java
public abstract int stopLocalAudioMixer();
\`\`\`

<a id="api_irtcengine_stoplocalaudiomixer__detailed_desc" />

调用 [startLocalAudioMixer](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audiomixer#api_irtcengine_startlocalaudiomixer) 后，如需停止音频合流，可以调用该方法。

<a id="api_irtcengine_stoplocalaudiomixer__timing" />

### 调用时机 [#调用时机-1]

请在调用 [startLocalAudioMixer](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audiomixer#api_irtcengine_startlocalaudiomixer) 之后调用该方法。

<a id="api_irtcengine_stoplocalaudiomixer__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -7： RtcEngine 对象尚未初始化。你需要先初始化 RtcEngine 对象再调用该方法。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_updatelocalaudiomixerconfiguration" />

## updateLocalAudioMixerConfiguration [#updatelocalaudiomixerconfiguration]

更新本地音频合流配置。

<a id="api_irtcengine_updatelocalaudiomixerconfiguration__prototype" />

\`\`\`java
public abstract int updateLocalAudioMixerConfiguration(LocalAudioMixerConfiguration config);
\`\`\`

<a id="api_irtcengine_updatelocalaudiomixerconfiguration__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    为确保音频质量，建议合流的音频流数量不超过 10。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_updatelocalaudiomixerconfiguration__timing" />

### 调用时机 [#调用时机-2]

请在调用 [startLocalAudioMixer](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audiomixer#api_irtcengine_startlocalaudiomixer) 之后调用此方法。

<a id="api_irtcengine_updatelocalaudiomixerconfiguration__parameters" />

### 参数 [#参数-1]

#### \`config\` [#config-1]

用于设置本地音频合流的配置。详见 [LocalAudioMixerConfiguration](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-localaudiomixerconfiguration)。

<a id="api_irtcengine_updatelocalaudiomixerconfiguration__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -7： RtcEngine 对象尚未初始化。请在调用此方法前先初始化 RtcEngine 对象。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)
`;
export let structuredData = {
  contents: [{
    heading: "startlocalaudiomixer",
    content: "开始本地音频合流。"
  }, {
    heading: "startlocalaudiomixer",
    content: "该方法支持在本地将多个音频流合并为一个音频流。例如，可以将本地麦克风采集的音频流、媒体播放器、声卡以及远端用户的音频流混合为一个音频流，并将其发布到频道中。"
  }, {
    heading: "startlocalaudiomixer",
    content: "如果你希望混合本地采集的音频流，可以在 ChannelMediaOptions 中将 publishMixedAudioTrack 设置为 true，然后将混合后的音频流发布到频道中。"
  }, {
    heading: "startlocalaudiomixer",
    content: "如果你希望混合远端音频流，请确保远端音频流已在频道中发布，并且你已订阅了需要合流的音频流。"
  }, {
    heading: "startlocalaudiomixer",
    content: "为确保音频质量，建议混音的音频流数量不超过 10 路。"
  }, {
    heading: "适用场景",
    content: "你可以在以下场景中启用该功能："
  }, {
    heading: "适用场景",
    content: "使用本地视频合图功能时，可同时采集并发布合图视频流所关联的音频流。"
  }, {
    heading: "适用场景",
    content: "在直播场景中，用户可以接收频道内的音频流，在本地混合多个音频流后，将混合后的音频流转发到其他频道。"
  }, {
    heading: "适用场景",
    content: "在在线课堂中，老师可以将与学生互动的音频在本地混合后转发到其他频道。"
  }, {
    heading: "调用时机",
    content: "你可以在加入频道前或加入频道后调用此方法。"
  }, {
    heading: "config",
    content: "用于配置本地音频合流的参数，详见 LocalAudioMixerConfiguration。"
  }, {
    heading: "返回值",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值",
    content: "-7： RtcEngine 对象尚未初始化。请先初始化 RtcEngine 对象后再调用该方法。"
  }, {
    heading: "所属接口类",
    content: "RtcEngine"
  }, {
    heading: "stoplocalaudiomixer",
    content: "停止本地音频合流。"
  }, {
    heading: "stoplocalaudiomixer",
    content: "调用 startLocalAudioMixer 后，如需停止音频合流，可以调用该方法。"
  }, {
    heading: "调用时机-1",
    content: "请在调用 startLocalAudioMixer 之后调用该方法。"
  }, {
    heading: "返回值-1",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-1",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-1",
    content: "-7： RtcEngine 对象尚未初始化。你需要先初始化 RtcEngine 对象再调用该方法。"
  }, {
    heading: "所属接口类-1",
    content: "RtcEngine"
  }, {
    heading: "updatelocalaudiomixerconfiguration",
    content: "更新本地音频合流配置。"
  }, {
    heading: "updatelocalaudiomixerconfiguration",
    content: "为确保音频质量，建议合流的音频流数量不超过 10。"
  }, {
    heading: "调用时机-2",
    content: "请在调用 startLocalAudioMixer 之后调用此方法。"
  }, {
    heading: "config-1",
    content: "用于设置本地音频合流的配置。详见 LocalAudioMixerConfiguration。"
  }, {
    heading: "返回值-2",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-2",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-2",
    content: "-7： RtcEngine 对象尚未初始化。请在调用此方法前先初始化 RtcEngine 对象。"
  }, {
    heading: "所属接口类-2",
    content: "RtcEngine"
  }],
  headings: [{
    id: "startlocalaudiomixer",
    content: "startLocalAudioMixer"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "调用时机",
    content: "调用时机"
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
    id: "stoplocalaudiomixer",
    content: "stopLocalAudioMixer"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "updatelocalaudiomixerconfiguration",
    content: "updateLocalAudioMixerConfiguration"
  }, {
    id: "调用时机-2",
    content: "调用时机"
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
  }]
};
export let toc = [{
  depth: 2,
  url: "#startlocalaudiomixer",
  title: _jsx(_Fragment, {
    children: "startLocalAudioMixer"
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
  url: "#stoplocalaudiomixer",
  title: _jsx(_Fragment, {
    children: "stopLocalAudioMixer"
  })
}, {
  depth: 3,
  url: "#调用时机-1",
  title: _jsx(_Fragment, {
    children: "调用时机"
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
  url: "#updatelocalaudiomixerconfiguration",
  title: _jsx(_Fragment, {
    children: "updateLocalAudioMixerConfiguration"
  })
}, {
  depth: 3,
  url: "#调用时机-2",
  title: _jsx(_Fragment, {
    children: "调用时机"
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
      id: "toc_audiomixer"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startlocalaudiomixer"
    }), `
`, _jsx(_components.h2, {
      id: "startlocalaudiomixer",
      children: "startLocalAudioMixer"
    }), `
`, _jsx(_components.p, {
      children: "开始本地音频合流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startlocalaudiomixer__prototype"
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
              children: " startLocalAudioMixer"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(LocalAudioMixerConfiguration config);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startlocalaudiomixer__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法支持在本地将多个音频流合并为一个音频流。例如，可以将本地麦克风采集的音频流、媒体播放器、声卡以及远端用户的音频流混合为一个音频流，并将其发布到频道中。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果你希望混合本地采集的音频流，可以在 ChannelMediaOptions 中将 publishMixedAudioTrack 设置为 true，然后将混合后的音频流发布到频道中。"
      }), `
`, _jsx(_components.li, {
        children: "如果你希望混合远端音频流，请确保远端音频流已在频道中发布，并且你已订阅了需要合流的音频流。"
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "为确保音频质量，建议混音的音频流数量不超过 10 路。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startlocalaudiomixer__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "你可以在以下场景中启用该功能："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "使用本地视频合图功能时，可同时采集并发布合图视频流所关联的音频流。"
      }), `
`, _jsx(_components.li, {
        children: "在直播场景中，用户可以接收频道内的音频流，在本地混合多个音频流后，将混合后的音频流转发到其他频道。"
      }), `
`, _jsx(_components.li, {
        children: "在在线课堂中，老师可以将与学生互动的音频在本地混合后转发到其他频道。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startlocalaudiomixer__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startlocalaudiomixer__parameters"
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
      children: ["用于配置本地音频合流的参数，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-localaudiomixerconfiguration",
        children: "LocalAudioMixerConfiguration"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startlocalaudiomixer__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-7： RtcEngine 对象尚未初始化。请先初始化 RtcEngine 对象后再调用该方法。"
          }), `
`]
        }), `
`]
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
      id: "api_irtcengine_stoplocalaudiomixer"
    }), `
`, _jsx(_components.h2, {
      id: "stoplocalaudiomixer",
      children: "stopLocalAudioMixer"
    }), `
`, _jsx(_components.p, {
      children: "停止本地音频合流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoplocalaudiomixer__prototype"
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
              children: " stopLocalAudioMixer"
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
      id: "api_irtcengine_stoplocalaudiomixer__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audiomixer#api_irtcengine_startlocalaudiomixer",
        children: "startLocalAudioMixer"
      }), " 后，如需停止音频合流，可以调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoplocalaudiomixer__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["请在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audiomixer#api_irtcengine_startlocalaudiomixer",
        children: "startLocalAudioMixer"
      }), " 之后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoplocalaudiomixer__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-7： RtcEngine 对象尚未初始化。你需要先初始化 RtcEngine 对象再调用该方法。"
          }), `
`]
        }), `
`]
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
      id: "api_irtcengine_updatelocalaudiomixerconfiguration"
    }), `
`, _jsx(_components.h2, {
      id: "updatelocalaudiomixerconfiguration",
      children: "updateLocalAudioMixerConfiguration"
    }), `
`, _jsx(_components.p, {
      children: "更新本地音频合流配置。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatelocalaudiomixerconfiguration__prototype"
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
              children: " updateLocalAudioMixerConfiguration"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(LocalAudioMixerConfiguration config);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatelocalaudiomixerconfiguration__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "为确保音频质量，建议合流的音频流数量不超过 10。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatelocalaudiomixerconfiguration__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["请在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audiomixer#api_irtcengine_startlocalaudiomixer",
        children: "startLocalAudioMixer"
      }), " 之后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatelocalaudiomixerconfiguration__parameters"
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
      children: ["用于设置本地音频合流的配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-localaudiomixerconfiguration",
        children: "LocalAudioMixerConfiguration"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatelocalaudiomixerconfiguration__return_values"
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
            children: "-7： RtcEngine 对象尚未初始化。请在调用此方法前先初始化 RtcEngine 对象。"
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
