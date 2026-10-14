import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "媒体流附属信息分发",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_metadata_observer" />

<a id="api_imetadataobserver_getmaxmetadatasize" />

## getMaxMetadataSize [#getmaxmetadatasize]

当 SDK 请求元数据最大大小时触发的回调。

<a id="api_imetadataobserver_getmaxmetadatasize__prototype" />

\`\`\`java
public abstract int getMaxMetadataSize()
\`\`\`

<a id="api_imetadataobserver_getmaxmetadatasize__detailed_desc" />

调用 [registerMediaMetadataObserver](/zh-CN/api-reference/rtc/android/metadata/metadata-observer#api_irtcengine_registermediametadataobserver) 成功注册后，SDK 在每发送一帧视频时会触发该回调。你需要在该回调的返回值中指定元数据的最大大小。

<a id="api_imetadataobserver_getmaxmetadatasize__return_values" />

### 返回值 [#返回值]

方法调用成功，返回你希望使用的元数据 \`buffer\` 的最大大小，单位为字节。最大值为 1024 字节。请确保设置返回值。

### 所属接口类 [#所属接口类]

* [IMetadataObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imetadataobserver)

<a id="api_irtcengine_registermediametadataobserver" />

## registerMediaMetadataObserver [#registermediametadataobserver]

注册元数据观察器。

<a id="api_irtcengine_registermediametadataobserver__prototype" />

\`\`\`java
public abstract int registerMediaMetadataObserver(IMetadataObserver observer, int type);
\`\`\`

<a id="api_irtcengine_registermediametadataobserver__detailed_desc" />

你需要实现 [IMetadataObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imetadataobserver) 类，并在该方法中指定元数据类型。该方法支持你在视频流中添加同步元数据，以实现更丰富的互动直播场景，例如发送购物链接、数字优惠券和在线问答。成功调用该方法后，SDK 会触发 [getMaxMetadataSize](/zh-CN/api-reference/rtc/android/metadata/metadata-observer#api_imetadataobserver_getmaxmetadatasize) 回调。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请在调用 \`joinChannel\` 之前调用此方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_registermediametadataobserver__parameters" />

### 参数 [#参数]

#### \`observer\` [#observer]

元数据观察器，详见 [IMetadataObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imetadataobserver)。

#### \`type\` [#type]

元数据类型。当前 SDK 仅支持以下类型：

* VIDEO\\_METADATA：视频元数据。

<a id="api_irtcengine_registermediametadataobserver__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_unregistermediametadataobserver" />

## unregisterMediaMetadataObserver [#unregistermediametadataobserver]

取消注册指定的元数据观察者。

<a id="api_irtcengine_unregistermediametadataobserver__prototype" />

\`\`\`java
public abstract int unregisterMediaMetadataObserver(IMetadataObserver observer, int type);
\`\`\`

<a id="api_irtcengine_unregistermediametadataobserver__detailed_desc" />

<a id="api_irtcengine_unregistermediametadataobserver__parameters" />

### 参数 [#参数-1]

#### \`observer\` [#observer-1]

元数据观察者。详见 [IMetadataObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imetadataobserver)。

#### \`type\` [#type-1]

元数据类型。当前 SDK 仅支持以下类型：

* VIDEO\\_METADATA：视频元数据。

<a id="api_irtcengine_unregistermediametadataobserver__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="callback_imetadataobserver_onmetadatareceived" />

## onMetadataReceived [#onmetadatareceived]

本地用户接收到元数据时触发的回调。

<a id="callback_imetadataobserver_onmetadatareceived__prototype" />

\`\`\`java
public abstract void onMetadataReceived(AgoraMetadata metadata)
\`\`\`

<a id="callback_imetadataobserver_onmetadatareceived__detailed_desc" />

<a id="callback_imetadataobserver_onmetadatareceived__timing" />

### 触发时机 [#触发时机]

该回调在本地用户接收到元数据时被触发。

<a id="callback_imetadataobserver_onmetadatareceived__parameters" />

### 参数 [#参数-2]

#### \`metadata\` [#metadata]

接收到的元数据。详见 [AgoraMetadata](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-metadata)。

### 所属接口类 [#所属接口类-3]

* [IMetadataObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imetadataobserver)

<a id="callback_imetadataobserver_onreadytosendmetadata" />

## onReadyToSendMetadata [#onreadytosendmetadata]

SDK 准备好发送元数据时触发的回调。

<a id="callback_imetadataobserver_onreadytosendmetadata__prototype" />

\`\`\`java
public abstract byte[] onReadyToSendMetadata(long timeStampMs, int sourceType)
\`\`\`

<a id="callback_imetadataobserver_onreadytosendmetadata__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请确保元数据的大小不超过 [getMaxMetadataSize](/zh-CN/api-reference/rtc/android/metadata/metadata-observer#api_imetadataobserver_getmaxmetadatasize) 回调中设置的值。
  </CalloutDescription>
</CalloutContainer>

<a id="callback_imetadataobserver_onreadytosendmetadata__timing" />

### 触发时机 [#触发时机-1]

该回调在 SDK 准备好发送元数据时被触发。

<a id="callback_imetadataobserver_onreadytosendmetadata__parameters" />

### 参数 [#参数-3]

#### \`timeStampMs\` [#timestampms]

时间戳。

#### \`sourceType\` [#sourcetype]

视频数据类型。详见 [VideoSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype)。

<a id="callback_imetadataobserver_onreadytosendmetadata__return_values" />

### 返回值 [#返回值-3]

方法调用成功时，返回希望发送的元数据，格式为字节数组。

### 所属接口类 [#所属接口类-4]

* [IMetadataObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imetadataobserver)
`;
export let structuredData = {
  contents: [{
    heading: "getmaxmetadatasize",
    content: "当 SDK 请求元数据最大大小时触发的回调。"
  }, {
    heading: "getmaxmetadatasize",
    content: "调用 registerMediaMetadataObserver 成功注册后，SDK 在每发送一帧视频时会触发该回调。你需要在该回调的返回值中指定元数据的最大大小。"
  }, {
    heading: "返回值",
    content: "方法调用成功，返回你希望使用的元数据 `buffer` 的最大大小，单位为字节。最大值为 1024 字节。请确保设置返回值。"
  }, {
    heading: "所属接口类",
    content: "IMetadataObserver"
  }, {
    heading: "registermediametadataobserver",
    content: "注册元数据观察器。"
  }, {
    heading: "registermediametadataobserver",
    content: "你需要实现 IMetadataObserver 类，并在该方法中指定元数据类型。该方法支持你在视频流中添加同步元数据，以实现更丰富的互动直播场景，例如发送购物链接、数字优惠券和在线问答。成功调用该方法后，SDK 会触发 getMaxMetadataSize 回调。"
  }, {
    heading: "registermediametadataobserver",
    content: "请在调用 `joinChannel` 之前调用此方法。"
  }, {
    heading: "observer",
    content: "元数据观察器，详见 IMetadataObserver。"
  }, {
    heading: "type",
    content: "元数据类型。当前 SDK 仅支持以下类型："
  }, {
    heading: "type",
    content: "VIDEO\\_METADATA：视频元数据。"
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
    heading: "unregistermediametadataobserver",
    content: "取消注册指定的元数据观察者。"
  }, {
    heading: "observer-1",
    content: "元数据观察者。详见 IMetadataObserver。"
  }, {
    heading: "type-1",
    content: "元数据类型。当前 SDK 仅支持以下类型："
  }, {
    heading: "type-1",
    content: "VIDEO\\_METADATA：视频元数据。"
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
    heading: "onmetadatareceived",
    content: "本地用户接收到元数据时触发的回调。"
  }, {
    heading: "触发时机",
    content: "该回调在本地用户接收到元数据时被触发。"
  }, {
    heading: "metadata",
    content: "接收到的元数据。详见 AgoraMetadata。"
  }, {
    heading: "所属接口类-3",
    content: "IMetadataObserver"
  }, {
    heading: "onreadytosendmetadata",
    content: "SDK 准备好发送元数据时触发的回调。"
  }, {
    heading: "onreadytosendmetadata",
    content: "请确保元数据的大小不超过 getMaxMetadataSize 回调中设置的值。"
  }, {
    heading: "触发时机-1",
    content: "该回调在 SDK 准备好发送元数据时被触发。"
  }, {
    heading: "timestampms",
    content: "时间戳。"
  }, {
    heading: "sourcetype",
    content: "视频数据类型。详见 VideoSourceType。"
  }, {
    heading: "返回值-3",
    content: "方法调用成功时，返回希望发送的元数据，格式为字节数组。"
  }, {
    heading: "所属接口类-4",
    content: "IMetadataObserver"
  }],
  headings: [{
    id: "getmaxmetadatasize",
    content: "getMaxMetadataSize"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "registermediametadataobserver",
    content: "registerMediaMetadataObserver"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "observer",
    content: "`observer`"
  }, {
    id: "type",
    content: "`type`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "unregistermediametadataobserver",
    content: "unregisterMediaMetadataObserver"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "observer-1",
    content: "`observer`"
  }, {
    id: "type-1",
    content: "`type`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "onmetadatareceived",
    content: "onMetadataReceived"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "metadata",
    content: "`metadata`"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "onreadytosendmetadata",
    content: "onReadyToSendMetadata"
  }, {
    id: "触发时机-1",
    content: "触发时机"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "timestampms",
    content: "`timeStampMs`"
  }, {
    id: "sourcetype",
    content: "`sourceType`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#getmaxmetadatasize",
  title: _jsx(_Fragment, {
    children: "getMaxMetadataSize"
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
  url: "#registermediametadataobserver",
  title: _jsx(_Fragment, {
    children: "registerMediaMetadataObserver"
  })
}, {
  depth: 3,
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
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
  depth: 4,
  url: "#type",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "type"
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
  url: "#unregistermediametadataobserver",
  title: _jsx(_Fragment, {
    children: "unregisterMediaMetadataObserver"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#observer-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "observer"
    })
  })
}, {
  depth: 4,
  url: "#type-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "type"
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
  url: "#onmetadatareceived",
  title: _jsx(_Fragment, {
    children: "onMetadataReceived"
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
  url: "#metadata",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "metadata"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-3",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onreadytosendmetadata",
  title: _jsx(_Fragment, {
    children: "onReadyToSendMetadata"
  })
}, {
  depth: 3,
  url: "#触发时机-1",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-3",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#timestampms",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "timeStampMs"
    })
  })
}, {
  depth: 4,
  url: "#sourcetype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sourceType"
    })
  })
}, {
  depth: 3,
  url: "#返回值-3",
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
      id: "toc_metadata_observer"
    }), `
`, _jsx("a", {
      id: "api_imetadataobserver_getmaxmetadatasize"
    }), `
`, _jsx(_components.h2, {
      id: "getmaxmetadatasize",
      children: "getMaxMetadataSize"
    }), `
`, _jsx(_components.p, {
      children: "当 SDK 请求元数据最大大小时触发的回调。"
    }), `
`, _jsx("a", {
      id: "api_imetadataobserver_getmaxmetadatasize__prototype"
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
              children: " getMaxMetadataSize"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "()"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imetadataobserver_getmaxmetadatasize__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/metadata/metadata-observer#api_irtcengine_registermediametadataobserver",
        children: "registerMediaMetadataObserver"
      }), " 成功注册后，SDK 在每发送一帧视频时会触发该回调。你需要在该回调的返回值中指定元数据的最大大小。"]
    }), `
`, _jsx("a", {
      id: "api_imetadataobserver_getmaxmetadatasize__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回你希望使用的元数据 ", _jsx(_components.code, {
        children: "buffer"
      }), " 的最大大小，单位为字节。最大值为 1024 字节。请确保设置返回值。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imetadataobserver",
          children: "IMetadataObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registermediametadataobserver"
    }), `
`, _jsx(_components.h2, {
      id: "registermediametadataobserver",
      children: "registerMediaMetadataObserver"
    }), `
`, _jsx(_components.p, {
      children: "注册元数据观察器。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registermediametadataobserver__prototype"
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
              children: " registerMediaMetadataObserver"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(IMetadataObserver observer, "
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
              children: " type);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registermediametadataobserver__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你需要实现 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imetadataobserver",
        children: "IMetadataObserver"
      }), " 类，并在该方法中指定元数据类型。该方法支持你在视频流中添加同步元数据，以实现更丰富的互动直播场景，例如发送购物链接、数字优惠券和在线问答。成功调用该方法后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/metadata/metadata-observer#api_imetadataobserver_getmaxmetadatasize",
        children: "getMaxMetadataSize"
      }), " 回调。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请在调用 ", _jsx(_components.code, {
            children: "joinChannel"
          }), " 之前调用此方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registermediametadataobserver__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "observer",
      children: _jsx(_components.code, {
        children: "observer"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["元数据观察器，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imetadataobserver",
        children: "IMetadataObserver"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "type",
      children: _jsx(_components.code, {
        children: "type"
      })
    }), `
`, _jsx(_components.p, {
      children: "元数据类型。当前 SDK 仅支持以下类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "VIDEO_METADATA：视频元数据。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registermediametadataobserver__return_values"
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
      id: "api_irtcengine_unregistermediametadataobserver"
    }), `
`, _jsx(_components.h2, {
      id: "unregistermediametadataobserver",
      children: "unregisterMediaMetadataObserver"
    }), `
`, _jsx(_components.p, {
      children: "取消注册指定的元数据观察者。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_unregistermediametadataobserver__prototype"
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
              children: " unregisterMediaMetadataObserver"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(IMetadataObserver observer, "
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
              children: " type);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_unregistermediametadataobserver__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_unregistermediametadataobserver__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "observer-1",
      children: _jsx(_components.code, {
        children: "observer"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["元数据观察者。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imetadataobserver",
        children: "IMetadataObserver"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "type-1",
      children: _jsx(_components.code, {
        children: "type"
      })
    }), `
`, _jsx(_components.p, {
      children: "元数据类型。当前 SDK 仅支持以下类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "VIDEO_METADATA：视频元数据。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_unregistermediametadataobserver__return_values"
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
      id: "callback_imetadataobserver_onmetadatareceived"
    }), `
`, _jsx(_components.h2, {
      id: "onmetadatareceived",
      children: "onMetadataReceived"
    }), `
`, _jsx(_components.p, {
      children: "本地用户接收到元数据时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_imetadataobserver_onmetadatareceived__prototype"
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
              children: " onMetadataReceived"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(AgoraMetadata metadata)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_imetadataobserver_onmetadatareceived__detailed_desc"
    }), `
`, _jsx("a", {
      id: "callback_imetadataobserver_onmetadatareceived__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在本地用户接收到元数据时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_imetadataobserver_onmetadatareceived__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "metadata",
      children: _jsx(_components.code, {
        children: "metadata"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["接收到的元数据。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-metadata",
        children: "AgoraMetadata"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-3",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imetadataobserver",
          children: "IMetadataObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imetadataobserver_onreadytosendmetadata"
    }), `
`, _jsx(_components.h2, {
      id: "onreadytosendmetadata",
      children: "onReadyToSendMetadata"
    }), `
`, _jsx(_components.p, {
      children: "SDK 准备好发送元数据时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_imetadataobserver_onreadytosendmetadata__prototype"
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
              children: " byte"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "onReadyToSendMetadata"
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
              children: "long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " timeStampMs, "
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
              children: " sourceType)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_imetadataobserver_onreadytosendmetadata__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请确保元数据的大小不超过 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/metadata/metadata-observer#api_imetadataobserver_getmaxmetadatasize",
            children: "getMaxMetadataSize"
          }), " 回调中设置的值。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "callback_imetadataobserver_onreadytosendmetadata__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-1",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在 SDK 准备好发送元数据时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_imetadataobserver_onreadytosendmetadata__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "timestampms",
      children: _jsx(_components.code, {
        children: "timeStampMs"
      })
    }), `
`, _jsx(_components.p, {
      children: "时间戳。"
    }), `
`, _jsx(_components.h4, {
      id: "sourcetype",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频数据类型。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype",
        children: "VideoSourceType"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "callback_imetadataobserver_onreadytosendmetadata__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-3",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功时，返回希望发送的元数据，格式为字节数组。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-4",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imetadataobserver",
          children: "IMetadataObserver"
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
