import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "本地截图上传",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_snapshot" />

<a id="api_irtcengine_enablecontentinspect" />

## enableContentInspect [#enablecontentinspect]

启用或关闭本地截图上传功能。

<a id="api_irtcengine_enablecontentinspect__prototype" />

\`\`\`java
public abstract int enableContentInspect(boolean enabled, ContentInspectConfig config);
\`\`\`

<a id="api_irtcengine_enablecontentinspect__detailed_desc" />

SDK 会根据在 [ContentInspectConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-contentinspectconfig) 中设置的模块类型和频率，对本地用户发送的视频进行截图并上传。完成截图和上传后，声网服务器会通过 HTTPS 请求将回调通知发送到你的应用服务器，并将所有截图发送到第三方云存储服务。

注：

* 在调用该方法前，请确保你已在声网控制台启用本地截图上传功能。
* 当视频审核模块设置为使用声网自研扩展（CONTENT\\_INSPECT\\_TYPE\\_SUPERVISE ）进行视频审核时，需要使用本地截图上传动态库 agora\\_content\\_inspect\\_extension.so。删除该库将禁用截图上传功能。

<a id="api_irtcengine_enablecontentinspect__timing" />

### 调用时机 [#调用时机]

该方法可以在加入频道前或加入频道后调用。

<a id="api_irtcengine_enablecontentinspect__parameters" />

### 参数 [#参数]

#### \`enabled\` [#enabled]

是否启用本地截图上传功能：

* true：启用本地截图上传功能。
* false：关闭本地截图上传功能。

#### \`config\` [#config]

截图上传配置，详见 [ContentInspectConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-contentinspectconfig)。

<a id="api_irtcengine_enablecontentinspect__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_enablecontentinspectex" />

## enableContentInspectEx [#enablecontentinspectex]

启用或关闭本地截图上传功能。

<a id="api_irtcengineex_enablecontentinspectex__prototype" />

\`\`\`java
public abstract int enableContentInspectEx(boolean enabled, ContentInspectConfig config, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_enablecontentinspectex__detailed_desc" />

启用该功能后，SDK 会根据你在 [ContentInspectConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-contentinspectconfig) 中设置的模块类型和频率，对本地用户发送的视频进行截图并上传。截图上传后，声网服务器会通过 HTTPS 请求将回调通知发送到你的应用服务器，并将所有截图上传至第三方云存储服务。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    在调用该方法前，请确保你已[联系技术支持](https://ticket.shengwang.cn/)开通本地截图上传服务。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengineex_enablecontentinspectex__scenario" />

### 适用场景 [#适用场景]

该方法适用于多频道场景。

<a id="api_irtcengineex_enablecontentinspectex__timing" />

### 调用时机 [#调用时机-1]

该方法可在加入频道前或后调用。

<a id="api_irtcengineex_enablecontentinspectex__parameters" />

### 参数 [#参数-1]

#### \`enabled\` [#enabled-1]

是否启用本地截图上传功能：

* true：启用本地截图上传功能。
* false：关闭本地截图上传功能。

#### \`config\` [#config-1]

截图上传的配置参数，详见 [ContentInspectConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-contentinspectconfig)。

#### \`connection\` [#connection]

连接信息，详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_enablecontentinspectex__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_takesnapshot" />

## takeSnapshot \\[1/2] [#takesnapshot-12]

截取指定用户的视频流快照并保存为 JPG 图像。

<a id="api_irtcengine_takesnapshot__prototype" />

\`\`\`java
public abstract int takeSnapshot(int uid, String filePath);
\`\`\`

<a id="api_irtcengine_takesnapshot__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该方法为异步方法，调用返回时 SDK 尚未完成快照操作。当用于本地视频快照时，该方法会对 [ChannelMediaOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions) 中指定的视频流进行快照。如果用户的视频已进行预处理，例如添加水印或美颜，生成的快照将包含预处理效果。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_takesnapshot__timing" />

### 调用时机 [#调用时机-2]

请在加入频道后调用该方法。

<a id="api_irtcengine_takesnapshot__related" />

### 相关回调 [#相关回调]

调用该方法成功后，SDK 会触发 [onSnapshotTaken](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#callback_irtcengineeventhandler_onsnapshottaken) 回调，报告快照是否成功以及快照的详细信息。

<a id="api_irtcengine_takesnapshot__parameters" />

### 参数 [#参数-2]

#### \`uid\` [#uid]

用户 ID。如果要截取本地用户的视频快照，请将 \`uid\` 设置为 0。

#### \`filePath\` [#filepath]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请确保指定的路径存在且可写。
  </CalloutDescription>
</CalloutContainer>

快照的本地路径（包含文件扩展名）。例如：

* Android: /storage/emulated/0/Android/data/\\<package name>/files/example.jpg

<a id="api_irtcengine_takesnapshot__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_takesnapshot2" />

## takeSnapshot \\[2/2] [#takesnapshot-22]

在指定的观察点截取视频截图。

<a id="api_irtcengine_takesnapshot2__prototype" />

\`\`\`java
public abstract int takeSnapshot(int uid, SnapshotConfig config);
\`\`\`

<a id="api_irtcengine_takesnapshot2__detailed_desc" />

注：

* 该方法为异步调用，调用返回时 SDK 尚未完成截图操作。
* 当用于本地视频截图时，该方法会对 ChannelMediaOptions 中指定的视频流进行截图。

<a id="api_irtcengine_takesnapshot2__timing" />

### 调用时机 [#调用时机-3]

请在加入频道后调用该方法。

<a id="api_irtcengine_takesnapshot2__related" />

### 相关回调 [#相关回调-1]

调用该方法成功后，SDK 会触发 [onSnapshotTaken](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#callback_irtcengineeventhandler_onsnapshottaken) 回调，报告截图是否成功以及截图的详细信息。

<a id="api_irtcengine_takesnapshot2__parameters" />

### 参数 [#参数-3]

#### \`uid\` [#uid-1]

用户 ID。如果要截取本地用户的视频，请将 \`uid\` 设置为 0。

#### \`config\` [#config-2]

截图的配置信息，详见 [SnapshotConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-snapshotconfig)。

<a id="api_irtcengine_takesnapshot2__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_takesnapshotex" />

## takeSnapshotEx \\[1/2] [#takesnapshotex-12]

使用连接 ID 对视频流进行截图。

<a id="api_irtcengineex_takesnapshotex__prototype" />

\`\`\`java
public abstract int takeSnapshotEx(RtcConnection connection, int uid, String filePath);
\`\`\`

<a id="api_irtcengineex_takesnapshotex__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    \`takeSnapshotEx\` 为异步调用，调用该方法时 SDK 尚未完成截图操作。用于本地视频截图时，会对 [ChannelMediaOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions) 中指定的视频流进行截图。如果用户的视频已进行预处理（如添加水印或美颜），截图结果中会包含这些预处理效果。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengineex_takesnapshotex__scenario" />

### 适用场景 [#适用场景-1]

适用于多频道场景。

<a id="api_irtcengineex_takesnapshotex__timing" />

### 调用时机 [#调用时机-4]

请在调用 [joinChannelEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex) 后调用该方法。

<a id="api_irtcengineex_takesnapshotex__related" />

### 相关回调 [#相关回调-2]

调用该方法成功后，SDK 会触发 [onSnapshotTaken](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#callback_irtcengineeventhandler_onsnapshottaken) 回调，报告截图是否成功以及截图的详细信息。

<a id="api_irtcengineex_takesnapshotex__parameters" />

### 参数 [#参数-4]

#### \`connection\` [#connection-1]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

#### \`uid\` [#uid-2]

用户 ID。如果要对本地用户的视频进行截图，请将 \`uid\` 设置为 0。

#### \`filePath\` [#filepath-1]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请确保指定的路径存在且可写。
  </CalloutDescription>
</CalloutContainer>

截图的本地路径（包含文件扩展名）。例如：

* Android: /storage/emulated/0/Android/data/\\<package name>/files/example.jpg

<a id="api_irtcengineex_takesnapshotex__return_values" />

### 返回值 [#返回值-4]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-4]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengineex_takesnapshotex2" />

## takeSnapshotEx \\[2/2] [#takesnapshotex-22]

通过连接 ID 获取指定用户的视频截图。

<a id="api_irtcengineex_takesnapshotex2__prototype" />

\`\`\`java
public abstract int takeSnapshotEx(RtcConnection connection, int uid, SnapshotConfig config);
\`\`\`

<a id="api_irtcengineex_takesnapshotex2__detailed_desc" />

注：

* 该方法为异步调用，调用该方法后 SDK 并不会立即完成截图。
* 用于本地视频截图时，该方法会对 ChannelMediaOptions 中指定的视频流进行截图。
* 如果用户的视频已进行预处理，例如添加水印或美颜，截图结果中会包含这些预处理效果。

<a id="api_irtcengineex_takesnapshotex2__scenario" />

### 适用场景 [#适用场景-2]

适用于多频道场景。

<a id="api_irtcengineex_takesnapshotex2__timing" />

### 调用时机 [#调用时机-5]

请在调用 [joinChannelEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex) 后调用该方法。

<a id="api_irtcengineex_takesnapshotex2__related" />

### 相关回调 [#相关回调-3]

调用该方法成功后，SDK 会触发 [onSnapshotTaken](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#callback_irtcengineeventhandler_onsnapshottaken) 回调，报告截图是否成功以及截图的详细信息。

<a id="api_irtcengineex_takesnapshotex2__parameters" />

### 参数 [#参数-5]

#### \`connection\` [#connection-2]

连接信息，详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

#### \`uid\` [#uid-3]

用户 ID。如果要截取本地用户的视频，请将 \`uid\` 设置为 0。

#### \`config\` [#config-3]

截图的配置信息，详见 [SnapshotConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-snapshotconfig)。

<a id="api_irtcengineex_takesnapshotex2__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-5]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="callback_irtcengineeventhandler_onsnapshottaken" />

## onSnapshotTaken [#onsnapshottaken]

视频截图结果回调。

<a id="callback_irtcengineeventhandler_onsnapshottaken__prototype" />

\`\`\`java
public void onSnapshotTaken(int uid, String filePath, int width, int height, int errCode)
\`\`\`

<a id="callback_irtcengineeventhandler_onsnapshottaken__detailed_desc" />

该回调在调用 \`takeSnapshot\` 方法成功后被触发，用于报告截图的详细信息和是否成功。

<a id="callback_irtcengineeventhandler_onsnapshottaken__timing" />

### 触发时机 [#触发时机]

该回调在调用 \`takeSnapshot\` 方法成功后被触发。

<a id="callback_irtcengineeventhandler_onsnapshottaken__parameters" />

### 参数 [#参数-6]

#### \`uid\` [#uid-4]

用户 ID。 \`uid\` 为 0 表示本地用户。

#### \`filePath\` [#filepath-2]

截图的本地路径。

#### \`width\` [#width]

截图的宽度（像素）。

#### \`height\` [#height]

截图的高度（像素）。

#### \`errCode\` [#errcode]

截图结果的错误码：

* 0：成功。
* \\< 0：失败：
  * -1：SDK 写入文件或编码 JPEG 图像失败。
  * -2：调用 takeSnapshot 方法成功后 1 秒内未找到指定用户的视频流。可能原因包括：本地采集停止、远端停止发布或视频数据处理阻塞。
  * -3：调用 takeSnapshot 方法过于频繁。

### 所属接口类 [#所属接口类-6]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)
`;
export let structuredData = {
  contents: [{
    heading: "enablecontentinspect",
    content: "启用或关闭本地截图上传功能。"
  }, {
    heading: "enablecontentinspect",
    content: "SDK 会根据在 ContentInspectConfig 中设置的模块类型和频率，对本地用户发送的视频进行截图并上传。完成截图和上传后，声网服务器会通过 HTTPS 请求将回调通知发送到你的应用服务器，并将所有截图发送到第三方云存储服务。"
  }, {
    heading: "enablecontentinspect",
    content: "注："
  }, {
    heading: "enablecontentinspect",
    content: "在调用该方法前，请确保你已在声网控制台启用本地截图上传功能。"
  }, {
    heading: "enablecontentinspect",
    content: "当视频审核模块设置为使用声网自研扩展（CONTENT\\_INSPECT\\_TYPE\\_SUPERVISE ）进行视频审核时，需要使用本地截图上传动态库 agora\\_content\\_inspect\\_extension.so。删除该库将禁用截图上传功能。"
  }, {
    heading: "调用时机",
    content: "该方法可以在加入频道前或加入频道后调用。"
  }, {
    heading: "enabled",
    content: "是否启用本地截图上传功能："
  }, {
    heading: "enabled",
    content: "true：启用本地截图上传功能。"
  }, {
    heading: "enabled",
    content: "false：关闭本地截图上传功能。"
  }, {
    heading: "config",
    content: "截图上传配置，详见 ContentInspectConfig。"
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
    heading: "enablecontentinspectex",
    content: "启用或关闭本地截图上传功能。"
  }, {
    heading: "enablecontentinspectex",
    content: "启用该功能后，SDK 会根据你在 ContentInspectConfig 中设置的模块类型和频率，对本地用户发送的视频进行截图并上传。截图上传后，声网服务器会通过 HTTPS 请求将回调通知发送到你的应用服务器，并将所有截图上传至第三方云存储服务。"
  }, {
    heading: "enablecontentinspectex",
    content: "在调用该方法前，请确保你已联系技术支持开通本地截图上传服务。"
  }, {
    heading: "适用场景",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "调用时机-1",
    content: "该方法可在加入频道前或后调用。"
  }, {
    heading: "enabled-1",
    content: "是否启用本地截图上传功能："
  }, {
    heading: "enabled-1",
    content: "true：启用本地截图上传功能。"
  }, {
    heading: "enabled-1",
    content: "false：关闭本地截图上传功能。"
  }, {
    heading: "config-1",
    content: "截图上传的配置参数，详见 ContentInspectConfig。"
  }, {
    heading: "connection",
    content: "连接信息，详见 RtcConnection。"
  }, {
    heading: "返回值-1",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-1",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-1",
    content: "RtcEngineEx"
  }, {
    heading: "takesnapshot-12",
    content: "截取指定用户的视频流快照并保存为 JPG 图像。"
  }, {
    heading: "takesnapshot-12",
    content: "该方法为异步方法，调用返回时 SDK 尚未完成快照操作。当用于本地视频快照时，该方法会对 ChannelMediaOptions 中指定的视频流进行快照。如果用户的视频已进行预处理，例如添加水印或美颜，生成的快照将包含预处理效果。"
  }, {
    heading: "调用时机-2",
    content: "请在加入频道后调用该方法。"
  }, {
    heading: "相关回调",
    content: "调用该方法成功后，SDK 会触发 onSnapshotTaken 回调，报告快照是否成功以及快照的详细信息。"
  }, {
    heading: "uid",
    content: "用户 ID。如果要截取本地用户的视频快照，请将 `uid` 设置为 0。"
  }, {
    heading: "filepath",
    content: "请确保指定的路径存在且可写。"
  }, {
    heading: "filepath",
    content: "快照的本地路径（包含文件扩展名）。例如："
  }, {
    heading: "filepath",
    content: "Android: /storage/emulated/0/Android/data/\\<package name>/files/example.jpg"
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
    heading: "takesnapshot-22",
    content: "在指定的观察点截取视频截图。"
  }, {
    heading: "takesnapshot-22",
    content: "注："
  }, {
    heading: "takesnapshot-22",
    content: "该方法为异步调用，调用返回时 SDK 尚未完成截图操作。"
  }, {
    heading: "takesnapshot-22",
    content: "当用于本地视频截图时，该方法会对 ChannelMediaOptions 中指定的视频流进行截图。"
  }, {
    heading: "调用时机-3",
    content: "请在加入频道后调用该方法。"
  }, {
    heading: "相关回调-1",
    content: "调用该方法成功后，SDK 会触发 onSnapshotTaken 回调，报告截图是否成功以及截图的详细信息。"
  }, {
    heading: "uid-1",
    content: "用户 ID。如果要截取本地用户的视频，请将 `uid` 设置为 0。"
  }, {
    heading: "config-2",
    content: "截图的配置信息，详见 SnapshotConfig。"
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
    heading: "takesnapshotex-12",
    content: "使用连接 ID 对视频流进行截图。"
  }, {
    heading: "takesnapshotex-12",
    content: "`takeSnapshotEx` 为异步调用，调用该方法时 SDK 尚未完成截图操作。用于本地视频截图时，会对 ChannelMediaOptions 中指定的视频流进行截图。如果用户的视频已进行预处理（如添加水印或美颜），截图结果中会包含这些预处理效果。"
  }, {
    heading: "适用场景-1",
    content: "适用于多频道场景。"
  }, {
    heading: "调用时机-4",
    content: "请在调用 joinChannelEx 后调用该方法。"
  }, {
    heading: "相关回调-2",
    content: "调用该方法成功后，SDK 会触发 onSnapshotTaken 回调，报告截图是否成功以及截图的详细信息。"
  }, {
    heading: "connection-1",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "uid-2",
    content: "用户 ID。如果要对本地用户的视频进行截图，请将 `uid` 设置为 0。"
  }, {
    heading: "filepath-1",
    content: "请确保指定的路径存在且可写。"
  }, {
    heading: "filepath-1",
    content: "截图的本地路径（包含文件扩展名）。例如："
  }, {
    heading: "filepath-1",
    content: "Android: /storage/emulated/0/Android/data/\\<package name>/files/example.jpg"
  }, {
    heading: "返回值-4",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-4",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-4",
    content: "RtcEngineEx"
  }, {
    heading: "takesnapshotex-22",
    content: "通过连接 ID 获取指定用户的视频截图。"
  }, {
    heading: "takesnapshotex-22",
    content: "注："
  }, {
    heading: "takesnapshotex-22",
    content: "该方法为异步调用，调用该方法后 SDK 并不会立即完成截图。"
  }, {
    heading: "takesnapshotex-22",
    content: "用于本地视频截图时，该方法会对 ChannelMediaOptions 中指定的视频流进行截图。"
  }, {
    heading: "takesnapshotex-22",
    content: "如果用户的视频已进行预处理，例如添加水印或美颜，截图结果中会包含这些预处理效果。"
  }, {
    heading: "适用场景-2",
    content: "适用于多频道场景。"
  }, {
    heading: "调用时机-5",
    content: "请在调用 joinChannelEx 后调用该方法。"
  }, {
    heading: "相关回调-3",
    content: "调用该方法成功后，SDK 会触发 onSnapshotTaken 回调，报告截图是否成功以及截图的详细信息。"
  }, {
    heading: "connection-2",
    content: "连接信息，详见 RtcConnection。"
  }, {
    heading: "uid-3",
    content: "用户 ID。如果要截取本地用户的视频，请将 `uid` 设置为 0。"
  }, {
    heading: "config-3",
    content: "截图的配置信息，详见 SnapshotConfig。"
  }, {
    heading: "返回值-5",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-5",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-5",
    content: "RtcEngineEx"
  }, {
    heading: "onsnapshottaken",
    content: "视频截图结果回调。"
  }, {
    heading: "onsnapshottaken",
    content: "该回调在调用 `takeSnapshot` 方法成功后被触发，用于报告截图的详细信息和是否成功。"
  }, {
    heading: "触发时机",
    content: "该回调在调用 `takeSnapshot` 方法成功后被触发。"
  }, {
    heading: "uid-4",
    content: "用户 ID。 `uid` 为 0 表示本地用户。"
  }, {
    heading: "filepath-2",
    content: "截图的本地路径。"
  }, {
    heading: "width",
    content: "截图的宽度（像素）。"
  }, {
    heading: "height",
    content: "截图的高度（像素）。"
  }, {
    heading: "errcode",
    content: "截图结果的错误码："
  }, {
    heading: "errcode",
    content: "0：成功。"
  }, {
    heading: "errcode",
    content: "\\< 0：失败："
  }, {
    heading: "errcode",
    content: "-1：SDK 写入文件或编码 JPEG 图像失败。"
  }, {
    heading: "errcode",
    content: "-2：调用 takeSnapshot 方法成功后 1 秒内未找到指定用户的视频流。可能原因包括：本地采集停止、远端停止发布或视频数据处理阻塞。"
  }, {
    heading: "errcode",
    content: "-3：调用 takeSnapshot 方法过于频繁。"
  }, {
    heading: "所属接口类-6",
    content: "IRtcEngineEventHandler"
  }],
  headings: [{
    id: "enablecontentinspect",
    content: "enableContentInspect"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "enabled",
    content: "`enabled`"
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
    id: "enablecontentinspectex",
    content: "enableContentInspectEx"
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
    id: "enabled-1",
    content: "`enabled`"
  }, {
    id: "config-1",
    content: "`config`"
  }, {
    id: "connection",
    content: "`connection`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "takesnapshot-12",
    content: "takeSnapshot [1/2]"
  }, {
    id: "调用时机-2",
    content: "调用时机"
  }, {
    id: "相关回调",
    content: "相关回调"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "uid",
    content: "`uid`"
  }, {
    id: "filepath",
    content: "`filePath`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "takesnapshot-22",
    content: "takeSnapshot [2/2]"
  }, {
    id: "调用时机-3",
    content: "调用时机"
  }, {
    id: "相关回调-1",
    content: "相关回调"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "uid-1",
    content: "`uid`"
  }, {
    id: "config-2",
    content: "`config`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "takesnapshotex-12",
    content: "takeSnapshotEx [1/2]"
  }, {
    id: "适用场景-1",
    content: "适用场景"
  }, {
    id: "调用时机-4",
    content: "调用时机"
  }, {
    id: "相关回调-2",
    content: "相关回调"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "connection-1",
    content: "`connection`"
  }, {
    id: "uid-2",
    content: "`uid`"
  }, {
    id: "filepath-1",
    content: "`filePath`"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "takesnapshotex-22",
    content: "takeSnapshotEx [2/2]"
  }, {
    id: "适用场景-2",
    content: "适用场景"
  }, {
    id: "调用时机-5",
    content: "调用时机"
  }, {
    id: "相关回调-3",
    content: "相关回调"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "connection-2",
    content: "`connection`"
  }, {
    id: "uid-3",
    content: "`uid`"
  }, {
    id: "config-3",
    content: "`config`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "onsnapshottaken",
    content: "onSnapshotTaken"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "uid-4",
    content: "`uid`"
  }, {
    id: "filepath-2",
    content: "`filePath`"
  }, {
    id: "width",
    content: "`width`"
  }, {
    id: "height",
    content: "`height`"
  }, {
    id: "errcode",
    content: "`errCode`"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#enablecontentinspect",
  title: _jsx(_Fragment, {
    children: "enableContentInspect"
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
  url: "#enabled",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
    })
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
  url: "#enablecontentinspectex",
  title: _jsx(_Fragment, {
    children: "enableContentInspectEx"
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
  url: "#enabled-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
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
  depth: 4,
  url: "#connection",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "connection"
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
  url: "#takesnapshot-12",
  title: _jsx(_Fragment, {
    children: "takeSnapshot [1/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-2",
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
  url: "#参数-2",
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
  url: "#filepath",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "filePath"
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
  url: "#takesnapshot-22",
  title: _jsx(_Fragment, {
    children: "takeSnapshot [2/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-3",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#相关回调-1",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#参数-3",
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
  url: "#config-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "config"
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
  url: "#所属接口类-3",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#takesnapshotex-12",
  title: _jsx(_Fragment, {
    children: "takeSnapshotEx [1/2]"
  })
}, {
  depth: 3,
  url: "#适用场景-1",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#调用时机-4",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#相关回调-2",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#参数-4",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#connection-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "connection"
    })
  })
}, {
  depth: 4,
  url: "#uid-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
  })
}, {
  depth: 4,
  url: "#filepath-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "filePath"
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
  url: "#所属接口类-4",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#takesnapshotex-22",
  title: _jsx(_Fragment, {
    children: "takeSnapshotEx [2/2]"
  })
}, {
  depth: 3,
  url: "#适用场景-2",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#调用时机-5",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#相关回调-3",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#参数-5",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#connection-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "connection"
    })
  })
}, {
  depth: 4,
  url: "#uid-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
  })
}, {
  depth: 4,
  url: "#config-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "config"
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
  url: "#所属接口类-5",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onsnapshottaken",
  title: _jsx(_Fragment, {
    children: "onSnapshotTaken"
  })
}, {
  depth: 3,
  url: "#触发时机",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-6",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#uid-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
  })
}, {
  depth: 4,
  url: "#filepath-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "filePath"
    })
  })
}, {
  depth: 4,
  url: "#width",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "width"
    })
  })
}, {
  depth: 4,
  url: "#height",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "height"
    })
  })
}, {
  depth: 4,
  url: "#errcode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "errCode"
    })
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
      id: "toc_snapshot"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablecontentinspect"
    }), `
`, _jsx(_components.h2, {
      id: "enablecontentinspect",
      children: "enableContentInspect"
    }), `
`, _jsx(_components.p, {
      children: "启用或关闭本地截图上传功能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablecontentinspect__prototype"
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
              children: " enableContentInspect"
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
              children: " enabled, ContentInspectConfig config);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablecontentinspect__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["SDK 会根据在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-contentinspectconfig",
        children: "ContentInspectConfig"
      }), " 中设置的模块类型和频率，对本地用户发送的视频进行截图并上传。完成截图和上传后，声网服务器会通过 HTTPS 请求将回调通知发送到你的应用服务器，并将所有截图发送到第三方云存储服务。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "在调用该方法前，请确保你已在声网控制台启用本地截图上传功能。"
      }), `
`, _jsx(_components.li, {
        children: "当视频审核模块设置为使用声网自研扩展（CONTENT_INSPECT_TYPE_SUPERVISE ）进行视频审核时，需要使用本地截图上传动态库 agora_content_inspect_extension.so。删除该库将禁用截图上传功能。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablecontentinspect__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablecontentinspect__parameters"
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
      children: "是否启用本地截图上传功能："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用本地截图上传功能。"
      }), `
`, _jsx(_components.li, {
        children: "false：关闭本地截图上传功能。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "config",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["截图上传配置，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-contentinspectconfig",
        children: "ContentInspectConfig"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablecontentinspect__return_values"
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
      id: "api_irtcengineex_enablecontentinspectex"
    }), `
`, _jsx(_components.h2, {
      id: "enablecontentinspectex",
      children: "enableContentInspectEx"
    }), `
`, _jsx(_components.p, {
      children: "启用或关闭本地截图上传功能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_enablecontentinspectex__prototype"
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
              children: " enableContentInspectEx"
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
              children: " enabled, ContentInspectConfig config, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_enablecontentinspectex__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["启用该功能后，SDK 会根据你在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-contentinspectconfig",
        children: "ContentInspectConfig"
      }), " 中设置的模块类型和频率，对本地用户发送的视频进行截图并上传。截图上传后，声网服务器会通过 HTTPS 请求将回调通知发送到你的应用服务器，并将所有截图上传至第三方云存储服务。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["在调用该方法前，请确保你已", _jsx(_components.a, {
            href: "https://ticket.shengwang.cn/",
            children: "联系技术支持"
          }), "开通本地截图上传服务。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_enablecontentinspectex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_enablecontentinspectex__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可在加入频道前或后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_enablecontentinspectex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled-1",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用本地截图上传功能："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用本地截图上传功能。"
      }), `
`, _jsx(_components.li, {
        children: "false：关闭本地截图上传功能。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "config-1",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["截图上传的配置参数，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-contentinspectconfig",
        children: "ContentInspectConfig"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "connection",
      children: _jsx(_components.code, {
        children: "connection"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["连接信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_enablecontentinspectex__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_takesnapshot"
    }), `
`, _jsx(_components.h2, {
      id: "takesnapshot-12",
      children: "takeSnapshot [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "截取指定用户的视频流快照并保存为 JPG 图像。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_takesnapshot__prototype"
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
              children: " takeSnapshot"
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
              children: " uid, String filePath);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_takesnapshot__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["该方法为异步方法，调用返回时 SDK 尚未完成快照操作。当用于本地视频快照时，该方法会对 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions",
            children: "ChannelMediaOptions"
          }), " 中指定的视频流进行快照。如果用户的视频已进行预处理，例如添加水印或美颜，生成的快照将包含预处理效果。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_takesnapshot__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_takesnapshot__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法成功后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#callback_irtcengineeventhandler_onsnapshottaken",
        children: "onSnapshotTaken"
      }), " 回调，报告快照是否成功以及快照的详细信息。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_takesnapshot__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用户 ID。如果要截取本地用户的视频快照，请将 ", _jsx(_components.code, {
        children: "uid"
      }), " 设置为 0。"]
    }), `
`, _jsx(_components.h4, {
      id: "filepath",
      children: _jsx(_components.code, {
        children: "filePath"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "请确保指定的路径存在且可写。"
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "快照的本地路径（包含文件扩展名）。例如："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Android: /storage/emulated/0/Android/data/<package name>/files/example.jpg"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_takesnapshot__return_values"
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
      id: "api_irtcengine_takesnapshot2"
    }), `
`, _jsx(_components.h2, {
      id: "takesnapshot-22",
      children: "takeSnapshot [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "在指定的观察点截取视频截图。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_takesnapshot2__prototype"
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
              children: " takeSnapshot"
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
              children: " uid, SnapshotConfig config);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_takesnapshot2__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "该方法为异步调用，调用返回时 SDK 尚未完成截图操作。"
      }), `
`, _jsx(_components.li, {
        children: "当用于本地视频截图时，该方法会对 ChannelMediaOptions 中指定的视频流进行截图。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_takesnapshot2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-3",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_takesnapshot2__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-1",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法成功后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#callback_irtcengineeventhandler_onsnapshottaken",
        children: "onSnapshotTaken"
      }), " 回调，报告截图是否成功以及截图的详细信息。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_takesnapshot2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-1",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用户 ID。如果要截取本地用户的视频，请将 ", _jsx(_components.code, {
        children: "uid"
      }), " 设置为 0。"]
    }), `
`, _jsx(_components.h4, {
      id: "config-2",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["截图的配置信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-snapshotconfig",
        children: "SnapshotConfig"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_takesnapshot2__return_values"
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
      id: "api_irtcengineex_takesnapshotex"
    }), `
`, _jsx(_components.h2, {
      id: "takesnapshotex-12",
      children: "takeSnapshotEx [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "使用连接 ID 对视频流进行截图。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_takesnapshotex__prototype"
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
              children: " takeSnapshotEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(RtcConnection connection, "
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
              children: " uid, String filePath);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_takesnapshotex__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "takeSnapshotEx"
          }), " 为异步调用，调用该方法时 SDK 尚未完成截图操作。用于本地视频截图时，会对 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions",
            children: "ChannelMediaOptions"
          }), " 中指定的视频流进行截图。如果用户的视频已进行预处理（如添加水印或美颜），截图结果中会包含这些预处理效果。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_takesnapshotex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-1",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_takesnapshotex__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-4",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["请在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex",
        children: "joinChannelEx"
      }), " 后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_takesnapshotex__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-2",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法成功后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#callback_irtcengineeventhandler_onsnapshottaken",
        children: "onSnapshotTaken"
      }), " 回调，报告截图是否成功以及截图的详细信息。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_takesnapshotex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "connection-1",
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
`, _jsx(_components.h4, {
      id: "uid-2",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用户 ID。如果要对本地用户的视频进行截图，请将 ", _jsx(_components.code, {
        children: "uid"
      }), " 设置为 0。"]
    }), `
`, _jsx(_components.h4, {
      id: "filepath-1",
      children: _jsx(_components.code, {
        children: "filePath"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "请确保指定的路径存在且可写。"
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "截图的本地路径（包含文件扩展名）。例如："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Android: /storage/emulated/0/Android/data/<package name>/files/example.jpg"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_takesnapshotex__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_takesnapshotex2"
    }), `
`, _jsx(_components.h2, {
      id: "takesnapshotex-22",
      children: "takeSnapshotEx [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "通过连接 ID 获取指定用户的视频截图。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_takesnapshotex2__prototype"
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
              children: " takeSnapshotEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(RtcConnection connection, "
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
              children: " uid, SnapshotConfig config);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_takesnapshotex2__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "该方法为异步调用，调用该方法后 SDK 并不会立即完成截图。"
      }), `
`, _jsx(_components.li, {
        children: "用于本地视频截图时，该方法会对 ChannelMediaOptions 中指定的视频流进行截图。"
      }), `
`, _jsx(_components.li, {
        children: "如果用户的视频已进行预处理，例如添加水印或美颜，截图结果中会包含这些预处理效果。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_takesnapshotex2__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-2",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_takesnapshotex2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-5",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["请在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex",
        children: "joinChannelEx"
      }), " 后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_takesnapshotex2__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-3",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法成功后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#callback_irtcengineeventhandler_onsnapshottaken",
        children: "onSnapshotTaken"
      }), " 回调，报告截图是否成功以及截图的详细信息。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_takesnapshotex2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "connection-2",
      children: _jsx(_components.code, {
        children: "connection"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["连接信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "uid-3",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用户 ID。如果要截取本地用户的视频，请将 ", _jsx(_components.code, {
        children: "uid"
      }), " 设置为 0。"]
    }), `
`, _jsx(_components.h4, {
      id: "config-3",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["截图的配置信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-snapshotconfig",
        children: "SnapshotConfig"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_takesnapshotex2__return_values"
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
      id: "所属接口类-5",
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
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onsnapshottaken"
    }), `
`, _jsx(_components.h2, {
      id: "onsnapshottaken",
      children: "onSnapshotTaken"
    }), `
`, _jsx(_components.p, {
      children: "视频截图结果回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onsnapshottaken__prototype"
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
              children: " onSnapshotTaken"
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
              children: " uid, String filePath, "
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
              children: " width, "
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
              children: " height, "
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
              children: " errCode)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onsnapshottaken__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在调用 ", _jsx(_components.code, {
        children: "takeSnapshot"
      }), " 方法成功后被触发，用于报告截图的详细信息和是否成功。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onsnapshottaken__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在调用 ", _jsx(_components.code, {
        children: "takeSnapshot"
      }), " 方法成功后被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onsnapshottaken__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-4",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用户 ID。 ", _jsx(_components.code, {
        children: "uid"
      }), " 为 0 表示本地用户。"]
    }), `
`, _jsx(_components.h4, {
      id: "filepath-2",
      children: _jsx(_components.code, {
        children: "filePath"
      })
    }), `
`, _jsx(_components.p, {
      children: "截图的本地路径。"
    }), `
`, _jsx(_components.h4, {
      id: "width",
      children: _jsx(_components.code, {
        children: "width"
      })
    }), `
`, _jsx(_components.p, {
      children: "截图的宽度（像素）。"
    }), `
`, _jsx(_components.h4, {
      id: "height",
      children: _jsx(_components.code, {
        children: "height"
      })
    }), `
`, _jsx(_components.p, {
      children: "截图的高度（像素）。"
    }), `
`, _jsx(_components.h4, {
      id: "errcode",
      children: _jsx(_components.code, {
        children: "errCode"
      })
    }), `
`, _jsx(_components.p, {
      children: "截图结果的错误码："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：成功。"
      }), `
`, _jsxs(_components.li, {
        children: ["< 0：失败：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-1：SDK 写入文件或编码 JPEG 图像失败。"
          }), `
`, _jsx(_components.li, {
            children: "-2：调用 takeSnapshot 方法成功后 1 秒内未找到指定用户的视频流。可能原因包括：本地采集停止、远端停止发布或视频数据处理阻塞。"
          }), `
`, _jsx(_components.li, {
            children: "-3：调用 takeSnapshot 方法过于频繁。"
          }), `
`]
        }), `
`]
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
