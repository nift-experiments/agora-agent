import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "虚拟节拍器",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_rhythmplayer" />

<a id="api_irtcengine_configrhythmplayer" />

## configRhythmPlayer [#configrhythmplayer]

配置虚拟节拍器。

<a id="api_irtcengine_configrhythmplayer__prototype" />

\`\`\`java
public abstract int configRhythmPlayer(AgoraRhythmPlayerConfig config);
\`\`\`

<a id="api_irtcengine_configrhythmplayer__detailed_desc" />

#### \`废弃\` [#废弃]

自 v4.6.0 版本废弃。

调用 [startRhythmPlayer](/zh-CN/api-reference/rtc/android/playback/rhythmplayer#api_irtcengine_startrhythmplayer) 后，可以使用该方法重新配置虚拟节拍器。启用虚拟节拍器后，SDK 会从头开始播放指定的音效文件，并根据在 [AgoraRhythmPlayerConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-agorarhythmplayerconfig) 中设置的 \`beatsPerMinute\` 控制每个文件的播放时长。例如，如果将 \`beatsPerMinute\` 设置为 60，SDK 每秒播放一个节拍。如果文件时长超过节拍时长，SDK 只播放节拍时长内的音频。默认情况下，虚拟节拍器的声音会在频道中发布。如果希望远端用户也能听到该声音，可以在 [ChannelMediaOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions) 中将 \`publishRhythmPlayerTrack\` 设置为 true。

<a id="api_irtcengine_configrhythmplayer__timing" />

### 调用时机 [#调用时机]

该方法可以在加入频道前或后调用。

<a id="api_irtcengine_configrhythmplayer__parameters" />

### 参数 [#参数]

#### \`config\` [#config]

节拍器的配置。详见 [AgoraRhythmPlayerConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-agorarhythmplayerconfig)。

<a id="api_irtcengine_configrhythmplayer__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_startrhythmplayer" />

## startRhythmPlayer [#startrhythmplayer]

启用虚拟节拍器。

<a id="api_irtcengine_startrhythmplayer__prototype" />

\`\`\`java
public abstract int startRhythmPlayer(String sound1, String sound2, AgoraRhythmPlayerConfig config);
\`\`\`

<a id="api_irtcengine_startrhythmplayer__detailed_desc" />

#### \`废弃\` [#废弃-1]

自 v4.6.0 版本废弃。

启用虚拟节拍器后，SDK 会从头开始播放指定的音效文件，并根据你在 [AgoraRhythmPlayerConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-agorarhythmplayerconfig) 中设置的 \`beatsPerMinute\` 控制每个文件的播放时长。例如，如果你将 \`beatsPerMinute\` 设置为 60，SDK 每秒播放一个节拍。如果文件时长超过节拍时长，SDK 只播放节拍时长内的音频内容。 默认情况下，虚拟节拍器的声音会在频道中发布。如果你希望远端用户也能听到该声音，可以在 [ChannelMediaOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions) 中将 \`publishRhythmPlayerTrack\` 设置为 true。

<a id="api_irtcengine_startrhythmplayer__scenario" />

### 适用场景 [#适用场景]

在音乐教育、体育教学等场景中，教师通常需要使用节拍器帮助学生按照正确的节奏进行练习。节拍由强拍和弱拍组成，每小节的第一个节拍称为强拍，其余为弱拍。

<a id="api_irtcengine_startrhythmplayer__timing" />

### 调用时机 [#调用时机-1]

该方法可以在加入频道前或后调用。

<a id="api_irtcengine_startrhythmplayer__parameters" />

### 参数 [#参数-1]

#### \`sound1\` [#sound1]

强拍音效文件的绝对路径或 URL 地址（包含文件扩展名）。例如： content://com.android.providers.media.documents/document/audio%203A14441。支持的音频文件格式详见[声网 RTC SDK 支持哪些音频文件格式](https://doc.shengwang.cn/faq/general-product-inquiry/audio-format)。

#### \`sound2\` [#sound2]

弱拍音效文件的绝对路径或 URL 地址（包含文件扩展名）。例如： content://com.android.providers.media.documents/document/audio%203A14441。支持的音频文件格式详见[声网 RTC SDK 支持哪些音频文件格式](https://doc.shengwang.cn/faq/general-product-inquiry/audio-format)。

#### \`config\` [#config-1]

节拍器配置。详见 [AgoraRhythmPlayerConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-agorarhythmplayerconfig)。

<a id="api_irtcengine_startrhythmplayer__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -22：未找到音效文件。请为 sound1 和 sound2 设置正确的路径。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_stoprhythmplayer" />

## stopRhythmPlayer [#stoprhythmplayer]

禁用虚拟节拍器。

<a id="api_irtcengine_stoprhythmplayer__prototype" />

\`\`\`java
public abstract int stopRhythmPlayer();
\`\`\`

<a id="api_irtcengine_stoprhythmplayer__detailed_desc" />

#### \`废弃\` [#废弃-2]

自 v4.6.0 版本废弃。

你可以调用该方法来禁用虚拟节拍器。

<a id="api_irtcengine_stoprhythmplayer__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="callback_irtcengineeventhandler_onrhythmplayerstatechanged" />

## onRhythmPlayerStateChanged [#onrhythmplayerstatechanged]

虚拟节拍器状态发生变化回调。

<a id="callback_irtcengineeventhandler_onrhythmplayerstatechanged__prototype" />

\`\`\`java
public void onRhythmPlayerStateChanged(int state, int reason)
\`\`\`

<a id="callback_irtcengineeventhandler_onrhythmplayerstatechanged__detailed_desc" />

#### \`废弃\` [#废弃-3]

自 v4.6.0 版本废弃。

该回调用于报告虚拟节拍器的当前状态，指示本地音频流的状态，帮助你在音频异常发生时排查问题。

<a id="callback_irtcengineeventhandler_onrhythmplayerstatechanged__timing" />

### 触发时机 [#触发时机]

该回调在虚拟节拍器状态发生变化时被触发。

<a id="callback_irtcengineeventhandler_onrhythmplayerstatechanged__parameters" />

### 参数 [#参数-2]

#### \`state\` [#state]

当前虚拟节拍器的状态：

* RHYTHM\\_PLAYER\\_STATE\\_IDLE （810）：虚拟节拍器未启用或已被禁用。
* RHYTHM\\_PLAYER\\_STATE\\_OPENING （811）：正在打开节拍文件。
* RHYTHM\\_PLAYER\\_STATE\\_DECODING （812）：正在解码节拍文件。
* RHYTHM\\_PLAYER\\_STATE\\_PLAYING （813）：节拍文件正在播放。
* RHYTHM\\_PLAYER\\_STATE\\_FAILED （814）：虚拟节拍器启动失败。你可以使用返回的错误码排查原因，或尝试重新启动虚拟节拍器。

#### \`reason\` [#reason]

虚拟节拍器的错误码和错误信息：

* RHYTHM\\_PLAYER\\_REASON\\_OK （0）：节拍文件正常播放。
* RHYTHM\\_PLAYER\\_REASON\\_FAILED （1）：通用错误，原因不明确。
* RHYTHM\\_PLAYER\\_REASON\\_CAN\\_NOT\\_OPEN （801）：打开节拍文件时出错。
* RHYTHM\\_PLAYER\\_REASON\\_CAN\\_NOT\\_PLAY （802）：播放节拍文件时出错。
* RHYTHM\\_PLAYER\\_REASON\\_FILE\\_OVER\\_DURATION\\_LIMIT （803）：节拍音频文件的时长超过限制，最大为 1.2 秒。

### 所属接口类 [#所属接口类-3]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)
`;
export let structuredData = {
  contents: [{
    heading: "configrhythmplayer",
    content: "配置虚拟节拍器。"
  }, {
    heading: "废弃",
    content: "自 v4.6.0 版本废弃。"
  }, {
    heading: "废弃",
    content: "调用 startRhythmPlayer 后，可以使用该方法重新配置虚拟节拍器。启用虚拟节拍器后，SDK 会从头开始播放指定的音效文件，并根据在 AgoraRhythmPlayerConfig 中设置的 `beatsPerMinute` 控制每个文件的播放时长。例如，如果将 `beatsPerMinute` 设置为 60，SDK 每秒播放一个节拍。如果文件时长超过节拍时长，SDK 只播放节拍时长内的音频。默认情况下，虚拟节拍器的声音会在频道中发布。如果希望远端用户也能听到该声音，可以在 ChannelMediaOptions 中将 `publishRhythmPlayerTrack` 设置为 true。"
  }, {
    heading: "调用时机",
    content: "该方法可以在加入频道前或后调用。"
  }, {
    heading: "config",
    content: "节拍器的配置。详见 AgoraRhythmPlayerConfig。"
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
    heading: "startrhythmplayer",
    content: "启用虚拟节拍器。"
  }, {
    heading: "废弃-1",
    content: "自 v4.6.0 版本废弃。"
  }, {
    heading: "废弃-1",
    content: "启用虚拟节拍器后，SDK 会从头开始播放指定的音效文件，并根据你在 AgoraRhythmPlayerConfig 中设置的 `beatsPerMinute` 控制每个文件的播放时长。例如，如果你将 `beatsPerMinute` 设置为 60，SDK 每秒播放一个节拍。如果文件时长超过节拍时长，SDK 只播放节拍时长内的音频内容。 默认情况下，虚拟节拍器的声音会在频道中发布。如果你希望远端用户也能听到该声音，可以在 ChannelMediaOptions 中将 `publishRhythmPlayerTrack` 设置为 true。"
  }, {
    heading: "适用场景",
    content: "在音乐教育、体育教学等场景中，教师通常需要使用节拍器帮助学生按照正确的节奏进行练习。节拍由强拍和弱拍组成，每小节的第一个节拍称为强拍，其余为弱拍。"
  }, {
    heading: "调用时机-1",
    content: "该方法可以在加入频道前或后调用。"
  }, {
    heading: "sound1",
    content: "强拍音效文件的绝对路径或 URL 地址（包含文件扩展名）。例如： content://com.android.providers.media.documents/document/audio%203A14441。支持的音频文件格式详见声网 RTC SDK 支持哪些音频文件格式。"
  }, {
    heading: "sound2",
    content: "弱拍音效文件的绝对路径或 URL 地址（包含文件扩展名）。例如： content://com.android.providers.media.documents/document/audio%203A14441。支持的音频文件格式详见声网 RTC SDK 支持哪些音频文件格式。"
  }, {
    heading: "config-1",
    content: "节拍器配置。详见 AgoraRhythmPlayerConfig。"
  }, {
    heading: "返回值-1",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-1",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-1",
    content: "-22：未找到音效文件。请为 sound1 和 sound2 设置正确的路径。"
  }, {
    heading: "所属接口类-1",
    content: "RtcEngine"
  }, {
    heading: "stoprhythmplayer",
    content: "禁用虚拟节拍器。"
  }, {
    heading: "废弃-2",
    content: "自 v4.6.0 版本废弃。"
  }, {
    heading: "废弃-2",
    content: "你可以调用该方法来禁用虚拟节拍器。"
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
    heading: "onrhythmplayerstatechanged",
    content: "虚拟节拍器状态发生变化回调。"
  }, {
    heading: "废弃-3",
    content: "自 v4.6.0 版本废弃。"
  }, {
    heading: "废弃-3",
    content: "该回调用于报告虚拟节拍器的当前状态，指示本地音频流的状态，帮助你在音频异常发生时排查问题。"
  }, {
    heading: "触发时机",
    content: "该回调在虚拟节拍器状态发生变化时被触发。"
  }, {
    heading: "state",
    content: "当前虚拟节拍器的状态："
  }, {
    heading: "state",
    content: "RHYTHM\\_PLAYER\\_STATE\\_IDLE （810）：虚拟节拍器未启用或已被禁用。"
  }, {
    heading: "state",
    content: "RHYTHM\\_PLAYER\\_STATE\\_OPENING （811）：正在打开节拍文件。"
  }, {
    heading: "state",
    content: "RHYTHM\\_PLAYER\\_STATE\\_DECODING （812）：正在解码节拍文件。"
  }, {
    heading: "state",
    content: "RHYTHM\\_PLAYER\\_STATE\\_PLAYING （813）：节拍文件正在播放。"
  }, {
    heading: "state",
    content: "RHYTHM\\_PLAYER\\_STATE\\_FAILED （814）：虚拟节拍器启动失败。你可以使用返回的错误码排查原因，或尝试重新启动虚拟节拍器。"
  }, {
    heading: "reason",
    content: "虚拟节拍器的错误码和错误信息："
  }, {
    heading: "reason",
    content: "RHYTHM\\_PLAYER\\_REASON\\_OK （0）：节拍文件正常播放。"
  }, {
    heading: "reason",
    content: "RHYTHM\\_PLAYER\\_REASON\\_FAILED （1）：通用错误，原因不明确。"
  }, {
    heading: "reason",
    content: "RHYTHM\\_PLAYER\\_REASON\\_CAN\\_NOT\\_OPEN （801）：打开节拍文件时出错。"
  }, {
    heading: "reason",
    content: "RHYTHM\\_PLAYER\\_REASON\\_CAN\\_NOT\\_PLAY （802）：播放节拍文件时出错。"
  }, {
    heading: "reason",
    content: "RHYTHM\\_PLAYER\\_REASON\\_FILE\\_OVER\\_DURATION\\_LIMIT （803）：节拍音频文件的时长超过限制，最大为 1.2 秒。"
  }, {
    heading: "所属接口类-3",
    content: "IRtcEngineEventHandler"
  }],
  headings: [{
    id: "configrhythmplayer",
    content: "configRhythmPlayer"
  }, {
    id: "废弃",
    content: "`废弃`"
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
    id: "startrhythmplayer",
    content: "startRhythmPlayer"
  }, {
    id: "废弃-1",
    content: "`废弃`"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "sound1",
    content: "`sound1`"
  }, {
    id: "sound2",
    content: "`sound2`"
  }, {
    id: "config-1",
    content: "`config`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "stoprhythmplayer",
    content: "stopRhythmPlayer"
  }, {
    id: "废弃-2",
    content: "`废弃`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "onrhythmplayerstatechanged",
    content: "onRhythmPlayerStateChanged"
  }, {
    id: "废弃-3",
    content: "`废弃`"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "state",
    content: "`state`"
  }, {
    id: "reason",
    content: "`reason`"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#configrhythmplayer",
  title: _jsx(_Fragment, {
    children: "configRhythmPlayer"
  })
}, {
  depth: 4,
  url: "#废弃",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "废弃"
    })
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
  url: "#startrhythmplayer",
  title: _jsx(_Fragment, {
    children: "startRhythmPlayer"
  })
}, {
  depth: 4,
  url: "#废弃-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "废弃"
    })
  })
}, {
  depth: 3,
  url: "#适用场景",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#调用时机-1",
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
  url: "#sound1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sound1"
    })
  })
}, {
  depth: 4,
  url: "#sound2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sound2"
    })
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
  url: "#stoprhythmplayer",
  title: _jsx(_Fragment, {
    children: "stopRhythmPlayer"
  })
}, {
  depth: 4,
  url: "#废弃-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "废弃"
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
  url: "#onrhythmplayerstatechanged",
  title: _jsx(_Fragment, {
    children: "onRhythmPlayerStateChanged"
  })
}, {
  depth: 4,
  url: "#废弃-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "废弃"
    })
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
  url: "#state",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "state"
    })
  })
}, {
  depth: 4,
  url: "#reason",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "reason"
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "toc_rhythmplayer"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_configrhythmplayer"
    }), `
`, _jsx(_components.h2, {
      id: "configrhythmplayer",
      children: "configRhythmPlayer"
    }), `
`, _jsx(_components.p, {
      children: "配置虚拟节拍器。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_configrhythmplayer__prototype"
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
              children: " configRhythmPlayer"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(AgoraRhythmPlayerConfig config);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_configrhythmplayer__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本废弃。"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rhythmplayer#api_irtcengine_startrhythmplayer",
        children: "startRhythmPlayer"
      }), " 后，可以使用该方法重新配置虚拟节拍器。启用虚拟节拍器后，SDK 会从头开始播放指定的音效文件，并根据在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-agorarhythmplayerconfig",
        children: "AgoraRhythmPlayerConfig"
      }), " 中设置的 ", _jsx(_components.code, {
        children: "beatsPerMinute"
      }), " 控制每个文件的播放时长。例如，如果将 ", _jsx(_components.code, {
        children: "beatsPerMinute"
      }), " 设置为 60，SDK 每秒播放一个节拍。如果文件时长超过节拍时长，SDK 只播放节拍时长内的音频。默认情况下，虚拟节拍器的声音会在频道中发布。如果希望远端用户也能听到该声音，可以在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions",
        children: "ChannelMediaOptions"
      }), " 中将 ", _jsx(_components.code, {
        children: "publishRhythmPlayerTrack"
      }), " 设置为 true。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_configrhythmplayer__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_configrhythmplayer__parameters"
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
      children: ["节拍器的配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-agorarhythmplayerconfig",
        children: "AgoraRhythmPlayerConfig"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_configrhythmplayer__return_values"
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
      id: "api_irtcengine_startrhythmplayer"
    }), `
`, _jsx(_components.h2, {
      id: "startrhythmplayer",
      children: "startRhythmPlayer"
    }), `
`, _jsx(_components.p, {
      children: "启用虚拟节拍器。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startrhythmplayer__prototype"
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
              children: " startRhythmPlayer"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String sound1, String sound2, AgoraRhythmPlayerConfig config);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startrhythmplayer__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-1",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本废弃。"
    }), `
`, _jsxs(_components.p, {
      children: ["启用虚拟节拍器后，SDK 会从头开始播放指定的音效文件，并根据你在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-agorarhythmplayerconfig",
        children: "AgoraRhythmPlayerConfig"
      }), " 中设置的 ", _jsx(_components.code, {
        children: "beatsPerMinute"
      }), " 控制每个文件的播放时长。例如，如果你将 ", _jsx(_components.code, {
        children: "beatsPerMinute"
      }), " 设置为 60，SDK 每秒播放一个节拍。如果文件时长超过节拍时长，SDK 只播放节拍时长内的音频内容。 默认情况下，虚拟节拍器的声音会在频道中发布。如果你希望远端用户也能听到该声音，可以在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions",
        children: "ChannelMediaOptions"
      }), " 中将 ", _jsx(_components.code, {
        children: "publishRhythmPlayerTrack"
      }), " 设置为 true。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startrhythmplayer__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "在音乐教育、体育教学等场景中，教师通常需要使用节拍器帮助学生按照正确的节奏进行练习。节拍由强拍和弱拍组成，每小节的第一个节拍称为强拍，其余为弱拍。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startrhythmplayer__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startrhythmplayer__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "sound1",
      children: _jsx(_components.code, {
        children: "sound1"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["强拍音效文件的绝对路径或 URL 地址（包含文件扩展名）。例如： content://com.android.providers.media.documents/document/audio%203A14441。支持的音频文件格式详见", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/faq/general-product-inquiry/audio-format",
        children: "声网 RTC SDK 支持哪些音频文件格式"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "sound2",
      children: _jsx(_components.code, {
        children: "sound2"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["弱拍音效文件的绝对路径或 URL 地址（包含文件扩展名）。例如： content://com.android.providers.media.documents/document/audio%203A14441。支持的音频文件格式详见", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/faq/general-product-inquiry/audio-format",
        children: "声网 RTC SDK 支持哪些音频文件格式"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "config-1",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["节拍器配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-agorarhythmplayerconfig",
        children: "AgoraRhythmPlayerConfig"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startrhythmplayer__return_values"
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
            children: "-22：未找到音效文件。请为 sound1 和 sound2 设置正确的路径。"
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
      id: "api_irtcengine_stoprhythmplayer"
    }), `
`, _jsx(_components.h2, {
      id: "stoprhythmplayer",
      children: "stopRhythmPlayer"
    }), `
`, _jsx(_components.p, {
      children: "禁用虚拟节拍器。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoprhythmplayer__prototype"
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
              children: " stopRhythmPlayer"
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
      id: "api_irtcengine_stoprhythmplayer__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-2",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本废弃。"
    }), `
`, _jsx(_components.p, {
      children: "你可以调用该方法来禁用虚拟节拍器。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoprhythmplayer__return_values"
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
      id: "callback_irtcengineeventhandler_onrhythmplayerstatechanged"
    }), `
`, _jsx(_components.h2, {
      id: "onrhythmplayerstatechanged",
      children: "onRhythmPlayerStateChanged"
    }), `
`, _jsx(_components.p, {
      children: "虚拟节拍器状态发生变化回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrhythmplayerstatechanged__prototype"
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
              children: " onRhythmPlayerStateChanged"
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
              children: " state, "
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
              children: " reason)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrhythmplayerstatechanged__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-3",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本废弃。"
    }), `
`, _jsx(_components.p, {
      children: "该回调用于报告虚拟节拍器的当前状态，指示本地音频流的状态，帮助你在音频异常发生时排查问题。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrhythmplayerstatechanged__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在虚拟节拍器状态发生变化时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrhythmplayerstatechanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "state",
      children: _jsx(_components.code, {
        children: "state"
      })
    }), `
`, _jsx(_components.p, {
      children: "当前虚拟节拍器的状态："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "RHYTHM_PLAYER_STATE_IDLE （810）：虚拟节拍器未启用或已被禁用。"
      }), `
`, _jsx(_components.li, {
        children: "RHYTHM_PLAYER_STATE_OPENING （811）：正在打开节拍文件。"
      }), `
`, _jsx(_components.li, {
        children: "RHYTHM_PLAYER_STATE_DECODING （812）：正在解码节拍文件。"
      }), `
`, _jsx(_components.li, {
        children: "RHYTHM_PLAYER_STATE_PLAYING （813）：节拍文件正在播放。"
      }), `
`, _jsx(_components.li, {
        children: "RHYTHM_PLAYER_STATE_FAILED （814）：虚拟节拍器启动失败。你可以使用返回的错误码排查原因，或尝试重新启动虚拟节拍器。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "reason",
      children: _jsx(_components.code, {
        children: "reason"
      })
    }), `
`, _jsx(_components.p, {
      children: "虚拟节拍器的错误码和错误信息："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "RHYTHM_PLAYER_REASON_OK （0）：节拍文件正常播放。"
      }), `
`, _jsx(_components.li, {
        children: "RHYTHM_PLAYER_REASON_FAILED （1）：通用错误，原因不明确。"
      }), `
`, _jsx(_components.li, {
        children: "RHYTHM_PLAYER_REASON_CAN_NOT_OPEN （801）：打开节拍文件时出错。"
      }), `
`, _jsx(_components.li, {
        children: "RHYTHM_PLAYER_REASON_CAN_NOT_PLAY （802）：播放节拍文件时出错。"
      }), `
`, _jsx(_components.li, {
        children: "RHYTHM_PLAYER_REASON_FILE_OVER_DURATION_LIMIT （803）：节拍音频文件的时长超过限制，最大为 1.2 秒。"
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
