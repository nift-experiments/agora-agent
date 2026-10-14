import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "听声辨位",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_sound_position" />

<a id="api_irtcengine_enablesoundpositionindication" />

## enableSoundPositionIndication [#enablesoundpositionindication]

启用或关闭远端用户的立体声声像功能。

<a id="api_irtcengine_enablesoundpositionindication__prototype" />

\`\`\`java
public abstract int enableSoundPositionIndication(boolean enabled);
\`\`\`

<a id="api_irtcengine_enablesoundpositionindication__detailed_desc" />

请在加入频道前调用该方法。启用后，本地用户可以通过调用 [setRemoteVoicePosition](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/sound-position#api_irtcengine_setremotevoiceposition) 跟踪远端用户的位置。

<a id="api_irtcengine_enablesoundpositionindication__parameters" />

### 参数 [#参数]

#### \`enabled\` [#enabled]

是否启用远端用户的立体声声像功能：

* true：启用立体声声像。
* false：关闭立体声声像。

<a id="api_irtcengine_enablesoundpositionindication__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setremotevoiceposition" />

## setRemoteVoicePosition [#setremotevoiceposition]

设置远端用户语音的二维位置和音量。

<a id="api_irtcengine_setremotevoiceposition__prototype" />

\`\`\`java
public abstract int setRemoteVoicePosition(int uid, double pan, double gain);
\`\`\`

<a id="api_irtcengine_setremotevoiceposition__detailed_desc" />

该方法通过左右声道的声音差异设置远端用户的语音位置和音量，使本地用户可以更容易地识别远端用户的位置，从而营造空间感。该方法适用于大型多人在线游戏，例如大逃杀类游戏。

注：

* 要使该方法生效，请在加入频道前调用 enableSoundPositionIndication 方法为远端用户开启立体声声像。
* 为获得最佳语音定位效果，建议使用有线耳机。
* 请在加入频道后调用该方法。

<a id="api_irtcengine_setremotevoiceposition__parameters" />

### 参数 [#参数-1]

#### \`uid\` [#uid]

远端用户 ID。

#### \`pan\` [#pan]

远端用户的语音位置，取值范围为 -1.0 到 1.0：

* 0.0：（默认）远端语音来自正前方。
* -1.0：远端语音来自左侧。
* 1.0：远端语音来自右侧。

#### \`gain\` [#gain]

远端用户的音量，取值范围为 0.0 到 100.0。默认值为 100.0（远端用户的原始音量）。数值越小，音量越低。

<a id="api_irtcengine_setremotevoiceposition__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_setremotevoicepositionex" />

## setRemoteVoicePositionEx [#setremotevoicepositionex]

设置远端用户语音的二维位置和音量。

<a id="api_irtcengineex_setremotevoicepositionex__prototype" />

\`\`\`java
public abstract int setRemoteVoicePositionEx(int uid, double pan, double gain, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_setremotevoicepositionex__detailed_desc" />

该方法用于设置远端用户的语音位置和音量。调用该方法后，左右声道的声音差异可以让你实时感知远端用户的位置，从而营造空间感。该方法适用于大型多人在线游戏，例如大逃杀类游戏。

注：

* 为获得最佳语音定位效果，声网建议使用有线耳机。
* 请在加入频道后调用该方法。

<a id="api_irtcengineex_setremotevoicepositionex__scenario" />

### 适用场景 [#适用场景]

该方法适用于多频道场景。

<a id="api_irtcengineex_setremotevoicepositionex__parameters" />

### 参数 [#参数-2]

#### \`uid\` [#uid-1]

远端用户 ID。

#### \`pan\` [#pan-1]

远端用户的语音位置。取值范围为 -1.0 到 1.0：

* -1.0：远端语音来自左侧；
* 0.0：（默认）远端语音来自正前方；
* 1.0：远端语音来自右侧。

#### \`gain\` [#gain-1]

远端用户的音量。取值范围为 0.0 到 100.0，默认值为 100.0（默认）。数值越小，音量越低。

#### \`connection\` [#connection]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_setremotevoicepositionex__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)
`;
export let structuredData = {
  contents: [{
    heading: "enablesoundpositionindication",
    content: "启用或关闭远端用户的立体声声像功能。"
  }, {
    heading: "enablesoundpositionindication",
    content: "请在加入频道前调用该方法。启用后，本地用户可以通过调用 setRemoteVoicePosition 跟踪远端用户的位置。"
  }, {
    heading: "enabled",
    content: "是否启用远端用户的立体声声像功能："
  }, {
    heading: "enabled",
    content: "true：启用立体声声像。"
  }, {
    heading: "enabled",
    content: "false：关闭立体声声像。"
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
    heading: "setremotevoiceposition",
    content: "设置远端用户语音的二维位置和音量。"
  }, {
    heading: "setremotevoiceposition",
    content: "该方法通过左右声道的声音差异设置远端用户的语音位置和音量，使本地用户可以更容易地识别远端用户的位置，从而营造空间感。该方法适用于大型多人在线游戏，例如大逃杀类游戏。"
  }, {
    heading: "setremotevoiceposition",
    content: "注："
  }, {
    heading: "setremotevoiceposition",
    content: "要使该方法生效，请在加入频道前调用 enableSoundPositionIndication 方法为远端用户开启立体声声像。"
  }, {
    heading: "setremotevoiceposition",
    content: "为获得最佳语音定位效果，建议使用有线耳机。"
  }, {
    heading: "setremotevoiceposition",
    content: "请在加入频道后调用该方法。"
  }, {
    heading: "uid",
    content: "远端用户 ID。"
  }, {
    heading: "pan",
    content: "远端用户的语音位置，取值范围为 -1.0 到 1.0："
  }, {
    heading: "pan",
    content: "0.0：（默认）远端语音来自正前方。"
  }, {
    heading: "pan",
    content: "-1.0：远端语音来自左侧。"
  }, {
    heading: "pan",
    content: "1.0：远端语音来自右侧。"
  }, {
    heading: "gain",
    content: "远端用户的音量，取值范围为 0.0 到 100.0。默认值为 100.0（远端用户的原始音量）。数值越小，音量越低。"
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
    heading: "setremotevoicepositionex",
    content: "设置远端用户语音的二维位置和音量。"
  }, {
    heading: "setremotevoicepositionex",
    content: "该方法用于设置远端用户的语音位置和音量。调用该方法后，左右声道的声音差异可以让你实时感知远端用户的位置，从而营造空间感。该方法适用于大型多人在线游戏，例如大逃杀类游戏。"
  }, {
    heading: "setremotevoicepositionex",
    content: "注："
  }, {
    heading: "setremotevoicepositionex",
    content: "为获得最佳语音定位效果，声网建议使用有线耳机。"
  }, {
    heading: "setremotevoicepositionex",
    content: "请在加入频道后调用该方法。"
  }, {
    heading: "适用场景",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "uid-1",
    content: "远端用户 ID。"
  }, {
    heading: "pan-1",
    content: "远端用户的语音位置。取值范围为 -1.0 到 1.0："
  }, {
    heading: "pan-1",
    content: "-1.0：远端语音来自左侧；"
  }, {
    heading: "pan-1",
    content: "0.0：（默认）远端语音来自正前方；"
  }, {
    heading: "pan-1",
    content: "1.0：远端语音来自右侧。"
  }, {
    heading: "gain-1",
    content: "远端用户的音量。取值范围为 0.0 到 100.0，默认值为 100.0（默认）。数值越小，音量越低。"
  }, {
    heading: "connection",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "返回值-2",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-2",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-2",
    content: "RtcEngineEx"
  }],
  headings: [{
    id: "enablesoundpositionindication",
    content: "enableSoundPositionIndication"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "enabled",
    content: "`enabled`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "setremotevoiceposition",
    content: "setRemoteVoicePosition"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "uid",
    content: "`uid`"
  }, {
    id: "pan",
    content: "`pan`"
  }, {
    id: "gain",
    content: "`gain`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "setremotevoicepositionex",
    content: "setRemoteVoicePositionEx"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "uid-1",
    content: "`uid`"
  }, {
    id: "pan-1",
    content: "`pan`"
  }, {
    id: "gain-1",
    content: "`gain`"
  }, {
    id: "connection",
    content: "`connection`"
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
  url: "#enablesoundpositionindication",
  title: _jsx(_Fragment, {
    children: "enableSoundPositionIndication"
  })
}, {
  depth: 3,
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#enabled",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
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
  url: "#setremotevoiceposition",
  title: _jsx(_Fragment, {
    children: "setRemoteVoicePosition"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#uid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
  })
}, {
  depth: 4,
  url: "#pan",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pan"
    })
  })
}, {
  depth: 4,
  url: "#gain",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "gain"
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
  url: "#setremotevoicepositionex",
  title: _jsx(_Fragment, {
    children: "setRemoteVoicePositionEx"
  })
}, {
  depth: 3,
  url: "#适用场景",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数-2",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#uid-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
  })
}, {
  depth: 4,
  url: "#pan-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pan"
    })
  })
}, {
  depth: 4,
  url: "#gain-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "gain"
    })
  })
}, {
  depth: 4,
  url: "#connection",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "connection"
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "toc_sound_position"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablesoundpositionindication"
    }), `
`, _jsx(_components.h2, {
      id: "enablesoundpositionindication",
      children: "enableSoundPositionIndication"
    }), `
`, _jsx(_components.p, {
      children: "启用或关闭远端用户的立体声声像功能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablesoundpositionindication__prototype"
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
              children: " enableSoundPositionIndication"
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
              children: "boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " enabled);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablesoundpositionindication__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["请在加入频道前调用该方法。启用后，本地用户可以通过调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/sound-position#api_irtcengine_setremotevoiceposition",
        children: "setRemoteVoicePosition"
      }), " 跟踪远端用户的位置。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablesoundpositionindication__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用远端用户的立体声声像功能："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用立体声声像。"
      }), `
`, _jsx(_components.li, {
        children: "false：关闭立体声声像。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablesoundpositionindication__return_values"
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
      id: "api_irtcengine_setremotevoiceposition"
    }), `
`, _jsx(_components.h2, {
      id: "setremotevoiceposition",
      children: "setRemoteVoicePosition"
    }), `
`, _jsx(_components.p, {
      children: "设置远端用户语音的二维位置和音量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotevoiceposition__prototype"
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
              children: " setRemoteVoicePosition"
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
              children: " uid, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "double"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " pan, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "double"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " gain);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotevoiceposition__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法通过左右声道的声音差异设置远端用户的语音位置和音量，使本地用户可以更容易地识别远端用户的位置，从而营造空间感。该方法适用于大型多人在线游戏，例如大逃杀类游戏。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "要使该方法生效，请在加入频道前调用 enableSoundPositionIndication 方法为远端用户开启立体声声像。"
      }), `
`, _jsx(_components.li, {
        children: "为获得最佳语音定位效果，建议使用有线耳机。"
      }), `
`, _jsx(_components.li, {
        children: "请在加入频道后调用该方法。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotevoiceposition__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "pan",
      children: _jsx(_components.code, {
        children: "pan"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户的语音位置，取值范围为 -1.0 到 1.0："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0.0：（默认）远端语音来自正前方。"
      }), `
`, _jsx(_components.li, {
        children: "-1.0：远端语音来自左侧。"
      }), `
`, _jsx(_components.li, {
        children: "1.0：远端语音来自右侧。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "gain",
      children: _jsx(_components.code, {
        children: "gain"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户的音量，取值范围为 0.0 到 100.0。默认值为 100.0（远端用户的原始音量）。数值越小，音量越低。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotevoiceposition__return_values"
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
      id: "api_irtcengineex_setremotevoicepositionex"
    }), `
`, _jsx(_components.h2, {
      id: "setremotevoicepositionex",
      children: "setRemoteVoicePositionEx"
    }), `
`, _jsx(_components.p, {
      children: "设置远端用户语音的二维位置和音量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremotevoicepositionex__prototype"
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
              children: " setRemoteVoicePositionEx"
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
              children: " uid, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "double"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " pan, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "double"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " gain, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremotevoicepositionex__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法用于设置远端用户的语音位置和音量。调用该方法后，左右声道的声音差异可以让你实时感知远端用户的位置，从而营造空间感。该方法适用于大型多人在线游戏，例如大逃杀类游戏。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "为获得最佳语音定位效果，声网建议使用有线耳机。"
      }), `
`, _jsx(_components.li, {
        children: "请在加入频道后调用该方法。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremotevoicepositionex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremotevoicepositionex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-1",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "pan-1",
      children: _jsx(_components.code, {
        children: "pan"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户的语音位置。取值范围为 -1.0 到 1.0："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "-1.0：远端语音来自左侧；"
      }), `
`, _jsx(_components.li, {
        children: "0.0：（默认）远端语音来自正前方；"
      }), `
`, _jsx(_components.li, {
        children: "1.0：远端语音来自右侧。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "gain-1",
      children: _jsx(_components.code, {
        children: "gain"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户的音量。取值范围为 0.0 到 100.0，默认值为 100.0（默认）。数值越小，音量越低。"
    }), `
`, _jsx(_components.h4, {
      id: "connection",
      children: _jsx(_components.code, {
        children: "connection"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["连接信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremotevoicepositionex__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
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
