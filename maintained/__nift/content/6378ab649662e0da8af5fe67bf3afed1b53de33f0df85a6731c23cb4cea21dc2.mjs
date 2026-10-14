import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "插件",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_extension" />

<a id="api_irtcengine_addextension" />

## addExtension [#addextension]

添加扩展。

<a id="api_irtcengine_addextension__prototype" />

\`\`\`java
public void addExtension(String providerName)
\`\`\`

<a id="api_irtcengine_addextension__detailed_desc" />

<a id="api_irtcengine_addextension__parameters" />

### 参数 [#参数]

#### \`providerName\` [#providername]

要添加的扩展名称。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_enableextension" />

## enableExtension [#enableextension]

启用或禁用扩展功能。

<a id="api_irtcengine_enableextension__prototype" />

\`\`\`java
public abstract int enableExtension(String provider, String extension, boolean enable);
\`\`\`

<a id="api_irtcengine_enableextension__detailed_desc" />

通过调用该方法，你可以动态启用或禁用扩展功能，而无需更改处理流程。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    [enableExtension](/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_enableextension) 会在未调用 [registerExtension](/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_registerextension) 的情况下自动注册指定扩展，以保证兼容性。建议你显式调用 [registerExtension](/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_registerextension)。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_enableextension__parameters" />

### 参数 [#参数-1]

#### \`provider\` [#provider]

扩展功能提供方的名称，例如 \`agora.io\`。

#### \`extension\` [#extension]

扩展功能的名称，例如 \`agora.beauty\`。

#### \`enable\` [#enable]

是否启用该扩展功能：

* true：（默认）启用扩展功能。
* false：禁用扩展功能。

<a id="api_irtcengine_enableextension__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_getextensionproperty" />

## getExtensionProperty \\[1/2] [#getextensionproperty-12]

获取扩展组件的详细信息。

<a id="api_irtcengine_getextensionproperty__prototype" />

\`\`\`java
public abstract String getExtensionProperty(String provider, String extension, String key);
\`\`\`

<a id="api_irtcengine_getextensionproperty__detailed_desc" />

<a id="api_irtcengine_getextensionproperty__timing" />

### 调用时机 [#调用时机]

该方法可以在加入频道前或加入频道后调用。

<a id="api_irtcengine_getextensionproperty__parameters" />

### 参数 [#参数-2]

#### \`provider\` [#provider-1]

扩展组件提供方的名称。

#### \`extension\` [#extension-1]

扩展组件的名称。

#### \`key\` [#key]

扩展组件的键值。

<a id="api_irtcengine_getextensionproperty__return_values" />

### 返回值 [#返回值-1]

* 方法调用成功时，返回扩展组件的信息。
* 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_getextensionproperty2" />

## getExtensionProperty \\[2/2] [#getextensionproperty-22]

获取扩展组件的详细信息。

<a id="api_irtcengine_getextensionproperty2__prototype" />

\`\`\`java
public abstract String getExtensionProperty(String provider, String extension, String key, Constants.MediaSourceType sourceType);
\`\`\`

<a id="api_irtcengine_getextensionproperty2__detailed_desc" />

<a id="api_irtcengine_getextensionproperty2__timing" />

### 调用时机 [#调用时机-1]

该方法可以在加入频道前或加入频道后调用。

<a id="api_irtcengine_getextensionproperty2__parameters" />

### 参数 [#参数-3]

#### \`provider\` [#provider-2]

扩展组件提供方的名称。

#### \`extension\` [#extension-2]

扩展组件的名称。

#### \`key\` [#key-1]

扩展组件的键值。

#### \`sourceType\` [#sourcetype]

扩展组件的来源类型，详见 [MediaSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype)。

<a id="api_irtcengine_getextensionproperty2__return_values" />

### 返回值 [#返回值-2]

* 方法调用成功时，返回扩展组件的信息。
* 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-3]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_registerextension" />

## registerExtension [#registerextension]

注册一个扩展。

<a id="api_irtcengine_registerextension__prototype" />

\`\`\`java
public abstract int registerExtension(String provider, String extension, Constants.MediaSourceType sourceType);
\`\`\`

<a id="api_irtcengine_registerextension__detailed_desc" />

* 对于 SDK 外部的扩展（例如来自云市场和 SDK 扩展），你需要在调用 registerExtension 之前先通过 addExtension 加载它们。
* 对于 SDK 内部的扩展（即包含在完整 SDK 包中的扩展），在初始化 RtcEngine 后会自动加载并注册。

注：

* 如果你想注册多个扩展，需要多次调用此方法。
* SDK 中不同扩展的数据处理顺序由注册顺序决定。即先注册的扩展会先处理数据。

<a id="api_irtcengine_registerextension__timing" />

### 调用时机 [#调用时机-2]

声网建议你在初始化 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 后、加入频道前调用此方法。

* 对于视频扩展（如美颜特效扩展），你需要在调用 enableVideo 或 enableLocalVideo 启用视频模块后再调用此方法。
* 在调用此方法之前，你需要先调用 addExtension 加载扩展。

<a id="api_irtcengine_registerextension__parameters" />

### 参数 [#参数-4]

#### \`provider\` [#provider-3]

扩展提供方的名称。

#### \`extension\` [#extension-3]

扩展的名称。

#### \`sourceType\` [#sourcetype-1]

扩展的数据源类型，详见 [MediaSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype)。

<a id="api_irtcengine_registerextension__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -3：扩展库未加载。建议你检查动态库的存储位置或名称。

### 所属接口类 [#所属接口类-4]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setextensionproperty" />

## setExtensionProperty [#setextensionproperty]

设置扩展组件的属性。

<a id="api_irtcengine_setextensionproperty__prototype" />

\`\`\`java
public abstract int setExtensionProperty(String provider, String extension, String key, String value);
\`\`\`

<a id="api_irtcengine_setextensionproperty__detailed_desc" />

启用扩展组件后，可以调用该方法设置其属性。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果你需要为多个扩展组件设置属性，需要多次调用该方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setextensionproperty__timing" />

### 调用时机 [#调用时机-3]

在调用 [enableExtension](/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_enableextension) 方法之后调用该方法。

<a id="api_irtcengine_setextensionproperty__parameters" />

### 参数 [#参数-5]

#### \`provider\` [#provider-4]

扩展组件提供方的名称。

#### \`extension\` [#extension-4]

扩展组件的名称。

#### \`key\` [#key-2]

扩展组件属性的键。

#### \`value\` [#value]

扩展组件属性键对应的值。

<a id="api_irtcengine_setextensionproperty__return_values" />

### 返回值 [#返回值-4]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-5]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setextensionproviderproperty" />

## setExtensionProviderProperty [#setextensionproviderproperty]

设置扩展提供方的属性。

<a id="api_irtcengine_setextensionproviderproperty__prototype" />

\`\`\`java
public abstract int setExtensionProviderProperty(String provider, String key, String value);
\`\`\`

<a id="api_irtcengine_setextensionproviderproperty__detailed_desc" />

你可以调用该方法根据扩展提供方的类型初始化相关参数。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果你想为多个扩展设置扩展提供方的属性，需要多次调用该方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setextensionproviderproperty__timing" />

### 调用时机 [#调用时机-4]

在调用 [enableExtension](/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_enableextension) 之前， [registerExtension](/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_registerextension) 之后调用该方法。

<a id="api_irtcengine_setextensionproviderproperty__parameters" />

### 参数 [#参数-6]

#### \`provider\` [#provider-5]

扩展提供方的名称。

#### \`key\` [#key-3]

扩展属性的键名。

#### \`value\` [#value-1]

扩展属性键对应的值。

<a id="api_irtcengine_setextensionproviderproperty__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-6]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="callback_irtcengineeventhandler_onextensionerrorwithcontext" />

## onErrorWithContext [#onerrorwithcontext]

扩展运行异常时触发的回调。

<a id="callback_irtcengineeventhandler_onextensionerrorwithcontext__prototype" />

\`\`\`java
default void onErrorWithContext(ExtensionContext extContext, int error, String message)
\`\`\`

<a id="callback_irtcengineeventhandler_onextensionerrorwithcontext__detailed_desc" />

<a id="callback_irtcengineeventhandler_onextensionerrorwithcontext__timing" />

### 触发时机 [#触发时机]

该回调在扩展启用失败或运行过程中发生错误时被触发。

<a id="callback_irtcengineeventhandler_onextensionerrorwithcontext__parameters" />

### 参数 [#参数-7]

#### \`extContext\` [#extcontext]

扩展的上下文信息。详见 [ExtensionContext](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-extensioncontext)。

#### \`error\` [#error]

错误码。

#### \`message\` [#message]

错误原因。

### 所属接口类 [#所属接口类-7]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onextensioneventwithcontext" />

## onEventWithContext [#oneventwithcontext]

扩展事件回调。

<a id="callback_irtcengineeventhandler_onextensioneventwithcontext__prototype" />

\`\`\`java
default void onEventWithContext(ExtensionContext extContext, String key, String value)
\`\`\`

<a id="callback_irtcengineeventhandler_onextensioneventwithcontext__detailed_desc" />

你需要注册该回调，用于在扩展运行期间监听事件。

<a id="callback_irtcengineeventhandler_onextensioneventwithcontext__parameters" />

### 参数 [#参数-8]

#### \`extContext\` [#extcontext-1]

扩展的上下文信息，详见 [ExtensionContext](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-extensioncontext)。

#### \`key\` [#key-4]

扩展事件的键。

#### \`value\` [#value-2]

扩展事件键对应的值。

### 所属接口类 [#所属接口类-8]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onextensionstartedwithcontext" />

## onStartedWithContext [#onstartedwithcontext]

扩展启用成功回调。

<a id="callback_irtcengineeventhandler_onextensionstartedwithcontext__prototype" />

\`\`\`java
default void onStartedWithContext(ExtensionContext extContext)
\`\`\`

<a id="callback_irtcengineeventhandler_onextensionstartedwithcontext__detailed_desc" />

<a id="callback_irtcengineeventhandler_onextensionstartedwithcontext__timing" />

### 触发时机 [#触发时机-1]

该回调在扩展成功启用后被触发。

<a id="callback_irtcengineeventhandler_onextensionstartedwithcontext__parameters" />

### 参数 [#参数-9]

#### \`extContext\` [#extcontext-2]

扩展的上下文信息。详见 [ExtensionContext](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-extensioncontext)。

### 所属接口类 [#所属接口类-9]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onextensionstoppedwithcontext" />

## onStoppedWithContext [#onstoppedwithcontext]

扩展被禁用时触发的回调。

<a id="callback_irtcengineeventhandler_onextensionstoppedwithcontext__prototype" />

\`\`\`java
default void onStoppedWithContext(ExtensionContext extContext)
\`\`\`

<a id="callback_irtcengineeventhandler_onextensionstoppedwithcontext__detailed_desc" />

<a id="callback_irtcengineeventhandler_onextensionstoppedwithcontext__timing" />

### 触发时机 [#触发时机-2]

该回调在扩展被成功禁用后触发。

<a id="callback_irtcengineeventhandler_onextensionstoppedwithcontext__parameters" />

### 参数 [#参数-10]

#### \`extContext\` [#extcontext-3]

扩展的上下文信息。详见 [ExtensionContext](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-extensioncontext)。

### 所属接口类 [#所属接口类-10]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)
`;
export let structuredData = {
  contents: [{
    heading: "addextension",
    content: "添加扩展。"
  }, {
    heading: "providername",
    content: "要添加的扩展名称。"
  }, {
    heading: "所属接口类",
    content: "RtcEngine"
  }, {
    heading: "enableextension",
    content: "启用或禁用扩展功能。"
  }, {
    heading: "enableextension",
    content: "通过调用该方法，你可以动态启用或禁用扩展功能，而无需更改处理流程。"
  }, {
    heading: "enableextension",
    content: "enableExtension 会在未调用 registerExtension 的情况下自动注册指定扩展，以保证兼容性。建议你显式调用 registerExtension。"
  }, {
    heading: "provider",
    content: "扩展功能提供方的名称，例如 `agora.io`。"
  }, {
    heading: "extension",
    content: "扩展功能的名称，例如 `agora.beauty`。"
  }, {
    heading: "enable",
    content: "是否启用该扩展功能："
  }, {
    heading: "enable",
    content: "true：（默认）启用扩展功能。"
  }, {
    heading: "enable",
    content: "false：禁用扩展功能。"
  }, {
    heading: "返回值",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-1",
    content: "RtcEngine"
  }, {
    heading: "getextensionproperty-12",
    content: "获取扩展组件的详细信息。"
  }, {
    heading: "调用时机",
    content: "该方法可以在加入频道前或加入频道后调用。"
  }, {
    heading: "provider-1",
    content: "扩展组件提供方的名称。"
  }, {
    heading: "extension-1",
    content: "扩展组件的名称。"
  }, {
    heading: "key",
    content: "扩展组件的键值。"
  }, {
    heading: "返回值-1",
    content: "方法调用成功时，返回扩展组件的信息。"
  }, {
    heading: "返回值-1",
    content: "方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-2",
    content: "RtcEngine"
  }, {
    heading: "getextensionproperty-22",
    content: "获取扩展组件的详细信息。"
  }, {
    heading: "调用时机-1",
    content: "该方法可以在加入频道前或加入频道后调用。"
  }, {
    heading: "provider-2",
    content: "扩展组件提供方的名称。"
  }, {
    heading: "extension-2",
    content: "扩展组件的名称。"
  }, {
    heading: "key-1",
    content: "扩展组件的键值。"
  }, {
    heading: "sourcetype",
    content: "扩展组件的来源类型，详见 MediaSourceType。"
  }, {
    heading: "返回值-2",
    content: "方法调用成功时，返回扩展组件的信息。"
  }, {
    heading: "返回值-2",
    content: "方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-3",
    content: "RtcEngine"
  }, {
    heading: "registerextension",
    content: "注册一个扩展。"
  }, {
    heading: "registerextension",
    content: "对于 SDK 外部的扩展（例如来自云市场和 SDK 扩展），你需要在调用 registerExtension 之前先通过 addExtension 加载它们。"
  }, {
    heading: "registerextension",
    content: "对于 SDK 内部的扩展（即包含在完整 SDK 包中的扩展），在初始化 RtcEngine 后会自动加载并注册。"
  }, {
    heading: "registerextension",
    content: "注："
  }, {
    heading: "registerextension",
    content: "如果你想注册多个扩展，需要多次调用此方法。"
  }, {
    heading: "registerextension",
    content: "SDK 中不同扩展的数据处理顺序由注册顺序决定。即先注册的扩展会先处理数据。"
  }, {
    heading: "调用时机-2",
    content: "声网建议你在初始化 RtcEngine 后、加入频道前调用此方法。"
  }, {
    heading: "调用时机-2",
    content: "对于视频扩展（如美颜特效扩展），你需要在调用 enableVideo 或 enableLocalVideo 启用视频模块后再调用此方法。"
  }, {
    heading: "调用时机-2",
    content: "在调用此方法之前，你需要先调用 addExtension 加载扩展。"
  }, {
    heading: "provider-3",
    content: "扩展提供方的名称。"
  }, {
    heading: "extension-3",
    content: "扩展的名称。"
  }, {
    heading: "sourcetype-1",
    content: "扩展的数据源类型，详见 MediaSourceType。"
  }, {
    heading: "返回值-3",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-3",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-3",
    content: "-3：扩展库未加载。建议你检查动态库的存储位置或名称。"
  }, {
    heading: "所属接口类-4",
    content: "RtcEngine"
  }, {
    heading: "setextensionproperty",
    content: "设置扩展组件的属性。"
  }, {
    heading: "setextensionproperty",
    content: "启用扩展组件后，可以调用该方法设置其属性。"
  }, {
    heading: "setextensionproperty",
    content: "如果你需要为多个扩展组件设置属性，需要多次调用该方法。"
  }, {
    heading: "调用时机-3",
    content: "在调用 enableExtension 方法之后调用该方法。"
  }, {
    heading: "provider-4",
    content: "扩展组件提供方的名称。"
  }, {
    heading: "extension-4",
    content: "扩展组件的名称。"
  }, {
    heading: "key-2",
    content: "扩展组件属性的键。"
  }, {
    heading: "value",
    content: "扩展组件属性键对应的值。"
  }, {
    heading: "返回值-4",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-4",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-5",
    content: "RtcEngine"
  }, {
    heading: "setextensionproviderproperty",
    content: "设置扩展提供方的属性。"
  }, {
    heading: "setextensionproviderproperty",
    content: "你可以调用该方法根据扩展提供方的类型初始化相关参数。"
  }, {
    heading: "setextensionproviderproperty",
    content: "如果你想为多个扩展设置扩展提供方的属性，需要多次调用该方法。"
  }, {
    heading: "调用时机-4",
    content: "在调用 enableExtension 之前， registerExtension 之后调用该方法。"
  }, {
    heading: "provider-5",
    content: "扩展提供方的名称。"
  }, {
    heading: "key-3",
    content: "扩展属性的键名。"
  }, {
    heading: "value-1",
    content: "扩展属性键对应的值。"
  }, {
    heading: "返回值-5",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-5",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-6",
    content: "RtcEngine"
  }, {
    heading: "onerrorwithcontext",
    content: "扩展运行异常时触发的回调。"
  }, {
    heading: "触发时机",
    content: "该回调在扩展启用失败或运行过程中发生错误时被触发。"
  }, {
    heading: "extcontext",
    content: "扩展的上下文信息。详见 ExtensionContext。"
  }, {
    heading: "error",
    content: "错误码。"
  }, {
    heading: "message",
    content: "错误原因。"
  }, {
    heading: "所属接口类-7",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "oneventwithcontext",
    content: "扩展事件回调。"
  }, {
    heading: "oneventwithcontext",
    content: "你需要注册该回调，用于在扩展运行期间监听事件。"
  }, {
    heading: "extcontext-1",
    content: "扩展的上下文信息，详见 ExtensionContext。"
  }, {
    heading: "key-4",
    content: "扩展事件的键。"
  }, {
    heading: "value-2",
    content: "扩展事件键对应的值。"
  }, {
    heading: "所属接口类-8",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onstartedwithcontext",
    content: "扩展启用成功回调。"
  }, {
    heading: "触发时机-1",
    content: "该回调在扩展成功启用后被触发。"
  }, {
    heading: "extcontext-2",
    content: "扩展的上下文信息。详见 ExtensionContext。"
  }, {
    heading: "所属接口类-9",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onstoppedwithcontext",
    content: "扩展被禁用时触发的回调。"
  }, {
    heading: "触发时机-2",
    content: "该回调在扩展被成功禁用后触发。"
  }, {
    heading: "extcontext-3",
    content: "扩展的上下文信息。详见 ExtensionContext。"
  }, {
    heading: "所属接口类-10",
    content: "IRtcEngineEventHandler"
  }],
  headings: [{
    id: "addextension",
    content: "addExtension"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "providername",
    content: "`providerName`"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "enableextension",
    content: "enableExtension"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "provider",
    content: "`provider`"
  }, {
    id: "extension",
    content: "`extension`"
  }, {
    id: "enable",
    content: "`enable`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "getextensionproperty-12",
    content: "getExtensionProperty [1/2]"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "provider-1",
    content: "`provider`"
  }, {
    id: "extension-1",
    content: "`extension`"
  }, {
    id: "key",
    content: "`key`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "getextensionproperty-22",
    content: "getExtensionProperty [2/2]"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "provider-2",
    content: "`provider`"
  }, {
    id: "extension-2",
    content: "`extension`"
  }, {
    id: "key-1",
    content: "`key`"
  }, {
    id: "sourcetype",
    content: "`sourceType`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "registerextension",
    content: "registerExtension"
  }, {
    id: "调用时机-2",
    content: "调用时机"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "provider-3",
    content: "`provider`"
  }, {
    id: "extension-3",
    content: "`extension`"
  }, {
    id: "sourcetype-1",
    content: "`sourceType`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "setextensionproperty",
    content: "setExtensionProperty"
  }, {
    id: "调用时机-3",
    content: "调用时机"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "provider-4",
    content: "`provider`"
  }, {
    id: "extension-4",
    content: "`extension`"
  }, {
    id: "key-2",
    content: "`key`"
  }, {
    id: "value",
    content: "`value`"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "setextensionproviderproperty",
    content: "setExtensionProviderProperty"
  }, {
    id: "调用时机-4",
    content: "调用时机"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "provider-5",
    content: "`provider`"
  }, {
    id: "key-3",
    content: "`key`"
  }, {
    id: "value-1",
    content: "`value`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "onerrorwithcontext",
    content: "onErrorWithContext"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "extcontext",
    content: "`extContext`"
  }, {
    id: "error",
    content: "`error`"
  }, {
    id: "message",
    content: "`message`"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "oneventwithcontext",
    content: "onEventWithContext"
  }, {
    id: "参数-8",
    content: "参数"
  }, {
    id: "extcontext-1",
    content: "`extContext`"
  }, {
    id: "key-4",
    content: "`key`"
  }, {
    id: "value-2",
    content: "`value`"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "onstartedwithcontext",
    content: "onStartedWithContext"
  }, {
    id: "触发时机-1",
    content: "触发时机"
  }, {
    id: "参数-9",
    content: "参数"
  }, {
    id: "extcontext-2",
    content: "`extContext`"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }, {
    id: "onstoppedwithcontext",
    content: "onStoppedWithContext"
  }, {
    id: "触发时机-2",
    content: "触发时机"
  }, {
    id: "参数-10",
    content: "参数"
  }, {
    id: "extcontext-3",
    content: "`extContext`"
  }, {
    id: "所属接口类-10",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#addextension",
  title: _jsx(_Fragment, {
    children: "addExtension"
  })
}, {
  depth: 3,
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#providername",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "providerName"
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
  url: "#enableextension",
  title: _jsx(_Fragment, {
    children: "enableExtension"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#provider",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "provider"
    })
  })
}, {
  depth: 4,
  url: "#extension",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "extension"
    })
  })
}, {
  depth: 4,
  url: "#enable",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enable"
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
  url: "#getextensionproperty-12",
  title: _jsx(_Fragment, {
    children: "getExtensionProperty [1/2]"
  })
}, {
  depth: 3,
  url: "#调用时机",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-2",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#provider-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "provider"
    })
  })
}, {
  depth: 4,
  url: "#extension-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "extension"
    })
  })
}, {
  depth: 4,
  url: "#key",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "key"
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
  url: "#所属接口类-2",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#getextensionproperty-22",
  title: _jsx(_Fragment, {
    children: "getExtensionProperty [2/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-1",
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
  url: "#provider-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "provider"
    })
  })
}, {
  depth: 4,
  url: "#extension-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "extension"
    })
  })
}, {
  depth: 4,
  url: "#key-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "key"
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
  url: "#返回值-2",
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
  url: "#registerextension",
  title: _jsx(_Fragment, {
    children: "registerExtension"
  })
}, {
  depth: 3,
  url: "#调用时机-2",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-4",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#provider-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "provider"
    })
  })
}, {
  depth: 4,
  url: "#extension-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "extension"
    })
  })
}, {
  depth: 4,
  url: "#sourcetype-1",
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
}, {
  depth: 2,
  url: "#setextensionproperty",
  title: _jsx(_Fragment, {
    children: "setExtensionProperty"
  })
}, {
  depth: 3,
  url: "#调用时机-3",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-5",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#provider-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "provider"
    })
  })
}, {
  depth: 4,
  url: "#extension-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "extension"
    })
  })
}, {
  depth: 4,
  url: "#key-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "key"
    })
  })
}, {
  depth: 4,
  url: "#value",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "value"
    })
  })
}, {
  depth: 3,
  url: "#返回值-4",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-5",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setextensionproviderproperty",
  title: _jsx(_Fragment, {
    children: "setExtensionProviderProperty"
  })
}, {
  depth: 3,
  url: "#调用时机-4",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-6",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#provider-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "provider"
    })
  })
}, {
  depth: 4,
  url: "#key-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "key"
    })
  })
}, {
  depth: 4,
  url: "#value-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "value"
    })
  })
}, {
  depth: 3,
  url: "#返回值-5",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-6",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onerrorwithcontext",
  title: _jsx(_Fragment, {
    children: "onErrorWithContext"
  })
}, {
  depth: 3,
  url: "#触发时机",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-7",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#extcontext",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "extContext"
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
  depth: 4,
  url: "#message",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "message"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-7",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#oneventwithcontext",
  title: _jsx(_Fragment, {
    children: "onEventWithContext"
  })
}, {
  depth: 3,
  url: "#参数-8",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#extcontext-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "extContext"
    })
  })
}, {
  depth: 4,
  url: "#key-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "key"
    })
  })
}, {
  depth: 4,
  url: "#value-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "value"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-8",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onstartedwithcontext",
  title: _jsx(_Fragment, {
    children: "onStartedWithContext"
  })
}, {
  depth: 3,
  url: "#触发时机-1",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-9",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#extcontext-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "extContext"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-9",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onstoppedwithcontext",
  title: _jsx(_Fragment, {
    children: "onStoppedWithContext"
  })
}, {
  depth: 3,
  url: "#触发时机-2",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-10",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#extcontext-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "extContext"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-10",
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
      id: "toc_extension"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_addextension"
    }), `
`, _jsx(_components.h2, {
      id: "addextension",
      children: "addExtension"
    }), `
`, _jsx(_components.p, {
      children: "添加扩展。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_addextension__prototype"
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
              children: " addExtension"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String providerName)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_addextension__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_addextension__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "providername",
      children: _jsx(_components.code, {
        children: "providerName"
      })
    }), `
`, _jsx(_components.p, {
      children: "要添加的扩展名称。"
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
      id: "api_irtcengine_enableextension"
    }), `
`, _jsx(_components.h2, {
      id: "enableextension",
      children: "enableExtension"
    }), `
`, _jsx(_components.p, {
      children: "启用或禁用扩展功能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableextension__prototype"
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
              children: " enableExtension"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String provider, String extension, "
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
              children: " enable);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableextension__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "通过调用该方法，你可以动态启用或禁用扩展功能，而无需更改处理流程。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_enableextension",
            children: "enableExtension"
          }), " 会在未调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_registerextension",
            children: "registerExtension"
          }), " 的情况下自动注册指定扩展，以保证兼容性。建议你显式调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_registerextension",
            children: "registerExtension"
          }), "。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableextension__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "provider",
      children: _jsx(_components.code, {
        children: "provider"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["扩展功能提供方的名称，例如 ", _jsx(_components.code, {
        children: "agora.io"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "extension",
      children: _jsx(_components.code, {
        children: "extension"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["扩展功能的名称，例如 ", _jsx(_components.code, {
        children: "agora.beauty"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "enable",
      children: _jsx(_components.code, {
        children: "enable"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用该扩展功能："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：（默认）启用扩展功能。"
      }), `
`, _jsx(_components.li, {
        children: "false：禁用扩展功能。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableextension__return_values"
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
      id: "api_irtcengine_getextensionproperty"
    }), `
`, _jsx(_components.h2, {
      id: "getextensionproperty-12",
      children: "getExtensionProperty [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "获取扩展组件的详细信息。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getextensionproperty__prototype"
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
              children: " String "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getExtensionProperty"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String provider, String extension, String key);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getextensionproperty__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getextensionproperty__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getextensionproperty__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "provider-1",
      children: _jsx(_components.code, {
        children: "provider"
      })
    }), `
`, _jsx(_components.p, {
      children: "扩展组件提供方的名称。"
    }), `
`, _jsx(_components.h4, {
      id: "extension-1",
      children: _jsx(_components.code, {
        children: "extension"
      })
    }), `
`, _jsx(_components.p, {
      children: "扩展组件的名称。"
    }), `
`, _jsx(_components.h4, {
      id: "key",
      children: _jsx(_components.code, {
        children: "key"
      })
    }), `
`, _jsx(_components.p, {
      children: "扩展组件的键值。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getextensionproperty__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-1",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功时，返回扩展组件的信息。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回空字符串。"
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
      id: "api_irtcengine_getextensionproperty2"
    }), `
`, _jsx(_components.h2, {
      id: "getextensionproperty-22",
      children: "getExtensionProperty [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "获取扩展组件的详细信息。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getextensionproperty2__prototype"
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
              children: " String "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getExtensionProperty"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String provider, String extension, String key, Constants.MediaSourceType sourceType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getextensionproperty2__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getextensionproperty2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getextensionproperty2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "provider-2",
      children: _jsx(_components.code, {
        children: "provider"
      })
    }), `
`, _jsx(_components.p, {
      children: "扩展组件提供方的名称。"
    }), `
`, _jsx(_components.h4, {
      id: "extension-2",
      children: _jsx(_components.code, {
        children: "extension"
      })
    }), `
`, _jsx(_components.p, {
      children: "扩展组件的名称。"
    }), `
`, _jsx(_components.h4, {
      id: "key-1",
      children: _jsx(_components.code, {
        children: "key"
      })
    }), `
`, _jsx(_components.p, {
      children: "扩展组件的键值。"
    }), `
`, _jsx(_components.h4, {
      id: "sourcetype",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["扩展组件的来源类型，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype",
        children: "MediaSourceType"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getextensionproperty2__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-2",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功时，返回扩展组件的信息。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回空字符串。"
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
      id: "api_irtcengine_registerextension"
    }), `
`, _jsx(_components.h2, {
      id: "registerextension",
      children: "registerExtension"
    }), `
`, _jsx(_components.p, {
      children: "注册一个扩展。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registerextension__prototype"
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
              children: " registerExtension"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String provider, String extension, Constants.MediaSourceType sourceType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registerextension__detailed_desc"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "对于 SDK 外部的扩展（例如来自云市场和 SDK 扩展），你需要在调用 registerExtension 之前先通过 addExtension 加载它们。"
      }), `
`, _jsx(_components.li, {
        children: "对于 SDK 内部的扩展（即包含在完整 SDK 包中的扩展），在初始化 RtcEngine 后会自动加载并注册。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果你想注册多个扩展，需要多次调用此方法。"
      }), `
`, _jsx(_components.li, {
        children: "SDK 中不同扩展的数据处理顺序由注册顺序决定。即先注册的扩展会先处理数据。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registerextension__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["声网建议你在初始化 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
        children: "RtcEngine"
      }), " 后、加入频道前调用此方法。"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "对于视频扩展（如美颜特效扩展），你需要在调用 enableVideo 或 enableLocalVideo 启用视频模块后再调用此方法。"
      }), `
`, _jsx(_components.li, {
        children: "在调用此方法之前，你需要先调用 addExtension 加载扩展。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registerextension__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "provider-3",
      children: _jsx(_components.code, {
        children: "provider"
      })
    }), `
`, _jsx(_components.p, {
      children: "扩展提供方的名称。"
    }), `
`, _jsx(_components.h4, {
      id: "extension-3",
      children: _jsx(_components.code, {
        children: "extension"
      })
    }), `
`, _jsx(_components.p, {
      children: "扩展的名称。"
    }), `
`, _jsx(_components.h4, {
      id: "sourcetype-1",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["扩展的数据源类型，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype",
        children: "MediaSourceType"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registerextension__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-3：扩展库未加载。建议你检查动态库的存储位置或名称。"
          }), `
`]
        }), `
`]
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
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setextensionproperty"
    }), `
`, _jsx(_components.h2, {
      id: "setextensionproperty",
      children: "setExtensionProperty"
    }), `
`, _jsx(_components.p, {
      children: "设置扩展组件的属性。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setextensionproperty__prototype"
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
              children: " setExtensionProperty"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String provider, String extension, String key, String value);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setextensionproperty__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "启用扩展组件后，可以调用该方法设置其属性。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "如果你需要为多个扩展组件设置属性，需要多次调用该方法。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setextensionproperty__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-3",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_enableextension",
        children: "enableExtension"
      }), " 方法之后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setextensionproperty__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "provider-4",
      children: _jsx(_components.code, {
        children: "provider"
      })
    }), `
`, _jsx(_components.p, {
      children: "扩展组件提供方的名称。"
    }), `
`, _jsx(_components.h4, {
      id: "extension-4",
      children: _jsx(_components.code, {
        children: "extension"
      })
    }), `
`, _jsx(_components.p, {
      children: "扩展组件的名称。"
    }), `
`, _jsx(_components.h4, {
      id: "key-2",
      children: _jsx(_components.code, {
        children: "key"
      })
    }), `
`, _jsx(_components.p, {
      children: "扩展组件属性的键。"
    }), `
`, _jsx(_components.h4, {
      id: "value",
      children: _jsx(_components.code, {
        children: "value"
      })
    }), `
`, _jsx(_components.p, {
      children: "扩展组件属性键对应的值。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setextensionproperty__return_values"
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
      id: "api_irtcengine_setextensionproviderproperty"
    }), `
`, _jsx(_components.h2, {
      id: "setextensionproviderproperty",
      children: "setExtensionProviderProperty"
    }), `
`, _jsx(_components.p, {
      children: "设置扩展提供方的属性。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setextensionproviderproperty__prototype"
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
              children: " setExtensionProviderProperty"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String provider, String key, String value);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setextensionproviderproperty__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以调用该方法根据扩展提供方的类型初始化相关参数。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "如果你想为多个扩展设置扩展提供方的属性，需要多次调用该方法。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setextensionproviderproperty__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-4",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_enableextension",
        children: "enableExtension"
      }), " 之前， ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_registerextension",
        children: "registerExtension"
      }), " 之后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setextensionproviderproperty__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "provider-5",
      children: _jsx(_components.code, {
        children: "provider"
      })
    }), `
`, _jsx(_components.p, {
      children: "扩展提供方的名称。"
    }), `
`, _jsx(_components.h4, {
      id: "key-3",
      children: _jsx(_components.code, {
        children: "key"
      })
    }), `
`, _jsx(_components.p, {
      children: "扩展属性的键名。"
    }), `
`, _jsx(_components.h4, {
      id: "value-1",
      children: _jsx(_components.code, {
        children: "value"
      })
    }), `
`, _jsx(_components.p, {
      children: "扩展属性键对应的值。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setextensionproviderproperty__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-5",
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
      id: "所属接口类-6",
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
      id: "callback_irtcengineeventhandler_onextensionerrorwithcontext"
    }), `
`, _jsx(_components.h2, {
      id: "onerrorwithcontext",
      children: "onErrorWithContext"
    }), `
`, _jsx(_components.p, {
      children: "扩展运行异常时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onextensionerrorwithcontext__prototype"
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
              children: "default"
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
              children: " onErrorWithContext"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(ExtensionContext extContext, "
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
              children: " error, String message)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onextensionerrorwithcontext__detailed_desc"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onextensionerrorwithcontext__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在扩展启用失败或运行过程中发生错误时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onextensionerrorwithcontext__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-7",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "extcontext",
      children: _jsx(_components.code, {
        children: "extContext"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["扩展的上下文信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-extensioncontext",
        children: "ExtensionContext"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "error",
      children: _jsx(_components.code, {
        children: "error"
      })
    }), `
`, _jsx(_components.p, {
      children: "错误码。"
    }), `
`, _jsx(_components.h4, {
      id: "message",
      children: _jsx(_components.code, {
        children: "message"
      })
    }), `
`, _jsx(_components.p, {
      children: "错误原因。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-7",
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
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onextensioneventwithcontext"
    }), `
`, _jsx(_components.h2, {
      id: "oneventwithcontext",
      children: "onEventWithContext"
    }), `
`, _jsx(_components.p, {
      children: "扩展事件回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onextensioneventwithcontext__prototype"
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
              children: "default"
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
              children: " onEventWithContext"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(ExtensionContext extContext, String key, String value)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onextensioneventwithcontext__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你需要注册该回调，用于在扩展运行期间监听事件。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onextensioneventwithcontext__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-8",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "extcontext-1",
      children: _jsx(_components.code, {
        children: "extContext"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["扩展的上下文信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-extensioncontext",
        children: "ExtensionContext"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "key-4",
      children: _jsx(_components.code, {
        children: "key"
      })
    }), `
`, _jsx(_components.p, {
      children: "扩展事件的键。"
    }), `
`, _jsx(_components.h4, {
      id: "value-2",
      children: _jsx(_components.code, {
        children: "value"
      })
    }), `
`, _jsx(_components.p, {
      children: "扩展事件键对应的值。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-8",
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
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onextensionstartedwithcontext"
    }), `
`, _jsx(_components.h2, {
      id: "onstartedwithcontext",
      children: "onStartedWithContext"
    }), `
`, _jsx(_components.p, {
      children: "扩展启用成功回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onextensionstartedwithcontext__prototype"
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
              children: "default"
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
              children: " onStartedWithContext"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(ExtensionContext extContext)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onextensionstartedwithcontext__detailed_desc"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onextensionstartedwithcontext__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-1",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在扩展成功启用后被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onextensionstartedwithcontext__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-9",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "extcontext-2",
      children: _jsx(_components.code, {
        children: "extContext"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["扩展的上下文信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-extensioncontext",
        children: "ExtensionContext"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-9",
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
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onextensionstoppedwithcontext"
    }), `
`, _jsx(_components.h2, {
      id: "onstoppedwithcontext",
      children: "onStoppedWithContext"
    }), `
`, _jsx(_components.p, {
      children: "扩展被禁用时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onextensionstoppedwithcontext__prototype"
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
              children: "default"
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
              children: " onStoppedWithContext"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(ExtensionContext extContext)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onextensionstoppedwithcontext__detailed_desc"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onextensionstoppedwithcontext__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-2",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在扩展被成功禁用后触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onextensionstoppedwithcontext__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-10",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "extcontext-3",
      children: _jsx(_components.code, {
        children: "extContext"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["扩展的上下文信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-extensioncontext",
        children: "ExtensionContext"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-10",
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
