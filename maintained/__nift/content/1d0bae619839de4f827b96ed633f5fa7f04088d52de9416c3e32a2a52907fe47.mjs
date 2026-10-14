import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "初始化相关",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_initialize" />

<a id="api_irtcengine_addhandler" />

## addHandler [#addhandler]

添加事件处理器。

<a id="api_irtcengine_addhandler__prototype" />

\`\`\`java
public void addHandler(IRtcEngineEventHandler handler)
\`\`\`

<a id="api_irtcengine_addhandler__detailed_desc" />

SDK 使用 [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler) 将回调发送到 App。你可以继承该类中的方法以接收回调。该类中的所有方法都有默认（空）实现，因此你只需根据实际场景继承所需的回调方法。 在回调中应避免执行耗时操作或调用可能阻塞线程的 API，例如 [sendStreamMessage](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_sendstreammessage)，否则可能导致 SDK 无法正常工作。

<a id="api_irtcengine_addhandler__parameters" />

### 参数 [#参数]

#### \`handler\` [#handler]

要添加的回调事件处理器，详见 [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_create" />

## create \\[1/2] [#create-12]

创建并初始化 RtcEngine 实例。

<a id="api_irtcengine_create__prototype" />

\`\`\`java
public static synchronized RtcEngine create(Context context, String appId, IRtcEngineEventHandler handler) throws Exception
\`\`\`

<a id="api_irtcengine_create__detailed_desc" />

[RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 类中的所有方法均为异步执行，声网建议在同一线程中调用这些方法。

注：

* 在调用其他 API 之前，必须先调用此方法以创建 RtcEngine 实例。
* 你可以通过调用此方法或调用 create \\[2/2] 来创建 RtcEngine 实例。与此方法相比， create \\[2/2] 支持更多配置，例如指定连接区域和设置日志文件。
* 每个 App 仅支持创建一个 RtcEngine 实例。

<a id="api_irtcengine_create__parameters" />

### 参数 [#参数-1]

#### \`context\` [#context]

Android Activity 的上下文。

#### \`appId\` [#appid]

声网为你的项目签发的 App ID。只有使用相同 App ID 的用户才能加入同一个频道并进行通信。一个 App ID 只能用于创建一个 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 实例。若需更换 App ID，请调用 [destroy \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_destroy1) 销毁当前 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 实例，然后再创建新的实例。

#### \`handler\` [#handler-1]

[RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 的事件处理器。详见 [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)。

<a id="api_irtcengine_create__return_values" />

### 返回值 [#返回值]

方法调用成功，返回已初始化的 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 实例。 方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_destroy1" />

## destroy \\[2/2] [#destroy-22]

销毁 RtcEngine 实例并释放相关资源。

<a id="api_irtcengine_destroy1__prototype" />

\`\`\`java
public static synchronized void destroy(@Nullable IRtcEngineReleaseCallback callback)
\`\`\`

<a id="api_irtcengine_destroy1__detailed_desc" />

#### \`自从\` [#自从]

自 v4.6.0 版本新增。

当你不再需要实时通信时，调用该方法以释放 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 实例，使相关资源可用于其他操作。推荐在语音通话或视频通话等场景中使用。

<a id="api_irtcengine_destroy1__parameters" />

### 参数 [#参数-2]

#### \`callback\` [#callback]

用于配置引擎的同步或异步销毁方式：

* 非 null：异步销毁。方法会立即返回，但引擎资源可能尚未完全释放。引擎销毁后会触发 onEngineReleased 回调。
* null：同步销毁。方法仅在引擎资源完全释放后才返回。详见 IRtcEngineReleaseCallback。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_initialize" />

## create \\[2/2] [#create-22]

创建并初始化 RtcEngine 实例。

<a id="api_irtcengine_initialize__prototype" />

\`\`\`java
public static synchronized RtcEngine create(RtcEngineConfig config) throws Exception
\`\`\`

<a id="api_irtcengine_initialize__detailed_desc" />

你可以通过调用此方法或 [create \\[1/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_create) 方法来创建 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 实例。与后者相比，此方法支持更多配置选项，例如指定连接区域和设置日志文件。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    每个 App 仅支持创建一个 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 实例。 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 类中的所有方法均为异步执行，声网建议在同一线程中调用这些方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_initialize__timing" />

### 调用时机 [#调用时机]

在调用其他 API 之前，必须先调用此方法创建 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 对象。

<a id="api_irtcengine_initialize__parameters" />

### 参数 [#参数-3]

#### \`config\` [#config]

用于配置 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 实例的参数。详见 [RtcEngineConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcengineconfig)。

<a id="api_irtcengine_initialize__return_values" />

### 返回值 [#返回值-1]

方法调用成功，返回初始化后的 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 对象。 方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

### 所属接口类 [#所属接口类-3]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_release" />

## destroy \\[1/2] [#destroy-12]

释放 RtcEngine 实例。

<a id="api_irtcengine_release__prototype" />

\`\`\`java
public static synchronized void destroy()
\`\`\`

<a id="api_irtcengine_release__detailed_desc" />

该方法释放所有由声网 SDK 占用的资源。成功调用该方法后，将无法再使用 SDK 中的任何方法或回调。如需再次使用实时通信功能，必须调用 [create \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize) 创建新的 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 实例。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    不建议在 SDK 的任何回调中调用该方法。否则，SDK 需等待回调返回结果后才能释放资源，可能导致死锁。
  </CalloutDescription>
</CalloutContainer>

### 所属接口类 [#所属接口类-4]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_removehandler" />

## removeHandler [#removehandler]

移除指定的 IRtcEngineEventHandler 实例。

<a id="api_irtcengine_removehandler__prototype" />

\`\`\`java
public void removeHandler(IRtcEngineEventHandler handler)
\`\`\`

<a id="api_irtcengine_removehandler__detailed_desc" />

该方法用于移除指定的回调处理器。对于只需监听一次的回调事件，在接收到事件后，可以调用该方法移除对应的回调处理器。

<a id="api_irtcengine_removehandler__parameters" />

### 参数 [#参数-4]

#### \`handler\` [#handler-2]

要移除的回调处理器。详见 [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)。

### 所属接口类 [#所属接口类-5]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="callback_irtcenginereleasecallback_onenginereleased" />

## onEngineReleased [#onenginereleased]

RtcEngine 被释放时触发的回调。

<a id="callback_irtcenginereleasecallback_onenginereleased__prototype" />

\`\`\`java
@CalledByNative void onEngineReleased();
\`\`\`

<a id="callback_irtcenginereleasecallback_onenginereleased__detailed_desc" />

该回调在调用 [destroy \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_destroy1) 方法以异步方式释放 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 对象时被触发。

<a id="callback_irtcenginereleasecallback_onenginereleased__timing" />

### 触发时机 [#触发时机]

该回调在调用 [destroy \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_destroy1) 方法以异步方式释放 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 对象时被触发。

### 所属接口类 [#所属接口类-6]

* [IRtcEngineReleaseCallback](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcenginereleasecallback)
`;
export let structuredData = {
  contents: [{
    heading: "addhandler",
    content: "添加事件处理器。"
  }, {
    heading: "addhandler",
    content: "SDK 使用 IRtcEngineEventHandler 将回调发送到 App。你可以继承该类中的方法以接收回调。该类中的所有方法都有默认（空）实现，因此你只需根据实际场景继承所需的回调方法。 在回调中应避免执行耗时操作或调用可能阻塞线程的 API，例如 sendStreamMessage，否则可能导致 SDK 无法正常工作。"
  }, {
    heading: "handler",
    content: "要添加的回调事件处理器，详见 IRtcEngineEventHandler。"
  }, {
    heading: "所属接口类",
    content: "RtcEngine"
  }, {
    heading: "create-12",
    content: "创建并初始化 RtcEngine 实例。"
  }, {
    heading: "create-12",
    content: "RtcEngine 类中的所有方法均为异步执行，声网建议在同一线程中调用这些方法。"
  }, {
    heading: "create-12",
    content: "注："
  }, {
    heading: "create-12",
    content: "在调用其他 API 之前，必须先调用此方法以创建 RtcEngine 实例。"
  }, {
    heading: "create-12",
    content: "你可以通过调用此方法或调用 create \\[2/2] 来创建 RtcEngine 实例。与此方法相比， create \\[2/2] 支持更多配置，例如指定连接区域和设置日志文件。"
  }, {
    heading: "create-12",
    content: "每个 App 仅支持创建一个 RtcEngine 实例。"
  }, {
    heading: "context",
    content: "Android Activity 的上下文。"
  }, {
    heading: "appid",
    content: "声网为你的项目签发的 App ID。只有使用相同 App ID 的用户才能加入同一个频道并进行通信。一个 App ID 只能用于创建一个 RtcEngine 实例。若需更换 App ID，请调用 destroy \\[2/2] 销毁当前 RtcEngine 实例，然后再创建新的实例。"
  }, {
    heading: "handler-1",
    content: "RtcEngine 的事件处理器。详见 IRtcEngineEventHandler。"
  }, {
    heading: "返回值",
    content: "方法调用成功，返回已初始化的 RtcEngine 实例。 方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "所属接口类-1",
    content: "RtcEngine"
  }, {
    heading: "destroy-22",
    content: "销毁 RtcEngine 实例并释放相关资源。"
  }, {
    heading: "自从",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "自从",
    content: "当你不再需要实时通信时，调用该方法以释放 RtcEngine 实例，使相关资源可用于其他操作。推荐在语音通话或视频通话等场景中使用。"
  }, {
    heading: "callback",
    content: "用于配置引擎的同步或异步销毁方式："
  }, {
    heading: "callback",
    content: "非 null：异步销毁。方法会立即返回，但引擎资源可能尚未完全释放。引擎销毁后会触发 onEngineReleased 回调。"
  }, {
    heading: "callback",
    content: "null：同步销毁。方法仅在引擎资源完全释放后才返回。详见 IRtcEngineReleaseCallback。"
  }, {
    heading: "所属接口类-2",
    content: "RtcEngine"
  }, {
    heading: "create-22",
    content: "创建并初始化 RtcEngine 实例。"
  }, {
    heading: "create-22",
    content: "你可以通过调用此方法或 create \\[1/2] 方法来创建 RtcEngine 实例。与后者相比，此方法支持更多配置选项，例如指定连接区域和设置日志文件。"
  }, {
    heading: "create-22",
    content: "每个 App 仅支持创建一个 RtcEngine 实例。 RtcEngine 类中的所有方法均为异步执行，声网建议在同一线程中调用这些方法。"
  }, {
    heading: "调用时机",
    content: "在调用其他 API 之前，必须先调用此方法创建 RtcEngine 对象。"
  }, {
    heading: "config",
    content: "用于配置 RtcEngine 实例的参数。详见 RtcEngineConfig。"
  }, {
    heading: "返回值-1",
    content: "方法调用成功，返回初始化后的 RtcEngine 对象。 方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "所属接口类-3",
    content: "RtcEngine"
  }, {
    heading: "destroy-12",
    content: "释放 RtcEngine 实例。"
  }, {
    heading: "destroy-12",
    content: "该方法释放所有由声网 SDK 占用的资源。成功调用该方法后，将无法再使用 SDK 中的任何方法或回调。如需再次使用实时通信功能，必须调用 create \\[2/2] 创建新的 RtcEngine 实例。"
  }, {
    heading: "destroy-12",
    content: "不建议在 SDK 的任何回调中调用该方法。否则，SDK 需等待回调返回结果后才能释放资源，可能导致死锁。"
  }, {
    heading: "所属接口类-4",
    content: "RtcEngine"
  }, {
    heading: "removehandler",
    content: "移除指定的 IRtcEngineEventHandler 实例。"
  }, {
    heading: "removehandler",
    content: "该方法用于移除指定的回调处理器。对于只需监听一次的回调事件，在接收到事件后，可以调用该方法移除对应的回调处理器。"
  }, {
    heading: "handler-2",
    content: "要移除的回调处理器。详见 IRtcEngineEventHandler。"
  }, {
    heading: "所属接口类-5",
    content: "RtcEngine"
  }, {
    heading: "onenginereleased",
    content: "RtcEngine 被释放时触发的回调。"
  }, {
    heading: "onenginereleased",
    content: "该回调在调用 destroy \\[2/2] 方法以异步方式释放 RtcEngine 对象时被触发。"
  }, {
    heading: "触发时机",
    content: "该回调在调用 destroy \\[2/2] 方法以异步方式释放 RtcEngine 对象时被触发。"
  }, {
    heading: "所属接口类-6",
    content: "IRtcEngineReleaseCallback"
  }],
  headings: [{
    id: "addhandler",
    content: "addHandler"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "handler",
    content: "`handler`"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "create-12",
    content: "create [1/2]"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "context",
    content: "`context`"
  }, {
    id: "appid",
    content: "`appId`"
  }, {
    id: "handler-1",
    content: "`handler`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "destroy-22",
    content: "destroy [2/2]"
  }, {
    id: "自从",
    content: "`自从`"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "callback",
    content: "`callback`"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "create-22",
    content: "create [2/2]"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "config",
    content: "`config`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "destroy-12",
    content: "destroy [1/2]"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "removehandler",
    content: "removeHandler"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "handler-2",
    content: "`handler`"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "onenginereleased",
    content: "onEngineReleased"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#addhandler",
  title: _jsx(_Fragment, {
    children: "addHandler"
  })
}, {
  depth: 3,
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#handler",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "handler"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#create-12",
  title: _jsx(_Fragment, {
    children: "create [1/2]"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#context",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "context"
    })
  })
}, {
  depth: 4,
  url: "#appid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "appId"
    })
  })
}, {
  depth: 4,
  url: "#handler-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "handler"
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
  url: "#所属接口类-1",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#destroy-22",
  title: _jsx(_Fragment, {
    children: "destroy [2/2]"
  })
}, {
  depth: 4,
  url: "#自从",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#参数-2",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#callback",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "callback"
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
  url: "#create-22",
  title: _jsx(_Fragment, {
    children: "create [2/2]"
  })
}, {
  depth: 3,
  url: "#调用时机",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-3",
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
  url: "#返回值-1",
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
  url: "#destroy-12",
  title: _jsx(_Fragment, {
    children: "destroy [1/2]"
  })
}, {
  depth: 3,
  url: "#所属接口类-4",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#removehandler",
  title: _jsx(_Fragment, {
    children: "removeHandler"
  })
}, {
  depth: 3,
  url: "#参数-4",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#handler-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "handler"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-5",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onenginereleased",
  title: _jsx(_Fragment, {
    children: "onEngineReleased"
  })
}, {
  depth: 3,
  url: "#触发时机",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#所属接口类-6",
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
      id: "toc_initialize"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_addhandler"
    }), `
`, _jsx(_components.h2, {
      id: "addhandler",
      children: "addHandler"
    }), `
`, _jsx(_components.p, {
      children: "添加事件处理器。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_addhandler__prototype"
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
              children: " addHandler"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(IRtcEngineEventHandler handler)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_addhandler__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["SDK 使用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
        children: "IRtcEngineEventHandler"
      }), " 将回调发送到 App。你可以继承该类中的方法以接收回调。该类中的所有方法都有默认（空）实现，因此你只需根据实际场景继承所需的回调方法。 在回调中应避免执行耗时操作或调用可能阻塞线程的 API，例如 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_sendstreammessage",
        children: "sendStreamMessage"
      }), "，否则可能导致 SDK 无法正常工作。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_addhandler__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "handler",
      children: _jsx(_components.code, {
        children: "handler"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["要添加的回调事件处理器，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
        children: "IRtcEngineEventHandler"
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
      id: "api_irtcengine_create"
    }), `
`, _jsx(_components.h2, {
      id: "create-12",
      children: "create [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "创建并初始化 RtcEngine 实例。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_create__prototype"
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
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " synchronized"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " RtcEngine "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "create"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Context context, String appId, IRtcEngineEventHandler handler) throws Exception"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_create__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
        children: "RtcEngine"
      }), " 类中的所有方法均为异步执行，声网建议在同一线程中调用这些方法。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "在调用其他 API 之前，必须先调用此方法以创建 RtcEngine 实例。"
      }), `
`, _jsx(_components.li, {
        children: "你可以通过调用此方法或调用 create [2/2] 来创建 RtcEngine 实例。与此方法相比， create [2/2] 支持更多配置，例如指定连接区域和设置日志文件。"
      }), `
`, _jsx(_components.li, {
        children: "每个 App 仅支持创建一个 RtcEngine 实例。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_create__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "context",
      children: _jsx(_components.code, {
        children: "context"
      })
    }), `
`, _jsx(_components.p, {
      children: "Android Activity 的上下文。"
    }), `
`, _jsx(_components.h4, {
      id: "appid",
      children: _jsx(_components.code, {
        children: "appId"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["声网为你的项目签发的 App ID。只有使用相同 App ID 的用户才能加入同一个频道并进行通信。一个 App ID 只能用于创建一个 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
        children: "RtcEngine"
      }), " 实例。若需更换 App ID，请调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_destroy1",
        children: "destroy [2/2]"
      }), " 销毁当前 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
        children: "RtcEngine"
      }), " 实例，然后再创建新的实例。"]
    }), `
`, _jsx(_components.h4, {
      id: "handler-1",
      children: _jsx(_components.code, {
        children: "handler"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
        children: "RtcEngine"
      }), " 的事件处理器。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
        children: "IRtcEngineEventHandler"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_create__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回已初始化的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
        children: "RtcEngine"
      }), " 实例。 方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"]
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
      id: "api_irtcengine_destroy1"
    }), `
`, _jsx(_components.h2, {
      id: "destroy-22",
      children: "destroy [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "销毁 RtcEngine 实例并释放相关资源。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_destroy1__prototype"
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
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " synchronized"
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
              children: " destroy"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(@"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "Nullable"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " IRtcEngineReleaseCallback callback)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_destroy1__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["当你不再需要实时通信时，调用该方法以释放 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
        children: "RtcEngine"
      }), " 实例，使相关资源可用于其他操作。推荐在语音通话或视频通话等场景中使用。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_destroy1__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "callback",
      children: _jsx(_components.code, {
        children: "callback"
      })
    }), `
`, _jsx(_components.p, {
      children: "用于配置引擎的同步或异步销毁方式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "非 null：异步销毁。方法会立即返回，但引擎资源可能尚未完全释放。引擎销毁后会触发 onEngineReleased 回调。"
      }), `
`, _jsx(_components.li, {
        children: "null：同步销毁。方法仅在引擎资源完全释放后才返回。详见 IRtcEngineReleaseCallback。"
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
      id: "api_irtcengine_initialize"
    }), `
`, _jsx(_components.h2, {
      id: "create-22",
      children: "create [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "创建并初始化 RtcEngine 实例。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_initialize__prototype"
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
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " synchronized"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " RtcEngine "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "create"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(RtcEngineConfig config) throws Exception"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_initialize__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以通过调用此方法或 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_create",
        children: "create [1/2]"
      }), " 方法来创建 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
        children: "RtcEngine"
      }), " 实例。与后者相比，此方法支持更多配置选项，例如指定连接区域和设置日志文件。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["每个 App 仅支持创建一个 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
            children: "RtcEngine"
          }), " 实例。 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
            children: "RtcEngine"
          }), " 类中的所有方法均为异步执行，声网建议在同一线程中调用这些方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_initialize__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用其他 API 之前，必须先调用此方法创建 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
        children: "RtcEngine"
      }), " 对象。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_initialize__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "config",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用于配置 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
        children: "RtcEngine"
      }), " 实例的参数。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcengineconfig",
        children: "RtcEngineConfig"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_initialize__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-1",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回初始化后的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
        children: "RtcEngine"
      }), " 对象。 方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"]
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
      id: "api_irtcengine_release"
    }), `
`, _jsx(_components.h2, {
      id: "destroy-12",
      children: "destroy [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "释放 RtcEngine 实例。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_release__prototype"
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
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " synchronized"
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
              children: " destroy"
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
      id: "api_irtcengine_release__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法释放所有由声网 SDK 占用的资源。成功调用该方法后，将无法再使用 SDK 中的任何方法或回调。如需再次使用实时通信功能，必须调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize",
        children: "create [2/2]"
      }), " 创建新的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
        children: "RtcEngine"
      }), " 实例。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "不建议在 SDK 的任何回调中调用该方法。否则，SDK 需等待回调返回结果后才能释放资源，可能导致死锁。"
        })
      })]
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
    }), `
`, _jsx("a", {
      id: "api_irtcengine_removehandler"
    }), `
`, _jsx(_components.h2, {
      id: "removehandler",
      children: "removeHandler"
    }), `
`, _jsx(_components.p, {
      children: "移除指定的 IRtcEngineEventHandler 实例。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_removehandler__prototype"
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
              children: " removeHandler"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(IRtcEngineEventHandler handler)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_removehandler__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法用于移除指定的回调处理器。对于只需监听一次的回调事件，在接收到事件后，可以调用该方法移除对应的回调处理器。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_removehandler__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "handler-2",
      children: _jsx(_components.code, {
        children: "handler"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["要移除的回调处理器。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
        children: "IRtcEngineEventHandler"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-5",
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
      id: "callback_irtcenginereleasecallback_onenginereleased"
    }), `
`, _jsx(_components.h2, {
      id: "onenginereleased",
      children: "onEngineReleased"
    }), `
`, _jsx(_components.p, {
      children: "RtcEngine 被释放时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcenginereleasecallback_onenginereleased__prototype"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "CalledByNative"
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
              children: " onEngineReleased"
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
      id: "callback_irtcenginereleasecallback_onenginereleased__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_destroy1",
        children: "destroy [2/2]"
      }), " 方法以异步方式释放 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
        children: "RtcEngine"
      }), " 对象时被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcenginereleasecallback_onenginereleased__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_destroy1",
        children: "destroy [2/2]"
      }), " 方法以异步方式释放 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
        children: "RtcEngine"
      }), " 对象时被触发。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-6",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcenginereleasecallback",
          children: "IRtcEngineReleaseCallback"
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
