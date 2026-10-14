import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "媒体播放器缓存",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_mediaplayer_cache" />

<a id="api_imediaplayercachemanager_enableautoremovecache" />

## enableAutoRemoveCache [#enableautoremovecache]

设置是否自动删除缓存的媒体文件。

<a id="api_imediaplayercachemanager_enableautoremovecache__prototype" />

\`\`\`java
int enableAutoRemoveCache(boolean enable);
\`\`\`

<a id="api_imediaplayercachemanager_enableautoremovecache__detailed_desc" />

当缓存的媒体文件数量或大小超过设置的限制时，启用该功能后，SDK 会自动删除最近最少使用的缓存文件。

<a id="api_imediaplayercachemanager_enableautoremovecache__parameters" />

### 参数 [#参数]

#### \`enable\` [#enable]

是否启用 SDK 自动删除缓存的媒体文件：

* true：自动删除缓存的媒体文件。
* false：（默认）不自动删除缓存的媒体文件。

<a id="api_imediaplayercachemanager_enableautoremovecache__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败，详见 MediaPlayerReason。

### 所属接口类 [#所属接口类]

* [IMediaPlayerCacheManager](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager)

<a id="api_imediaplayercachemanager_getcachedir" />

## getCacheDir [#getcachedir]

获取缓存媒体文件的存储路径。

<a id="api_imediaplayercachemanager_getcachedir__prototype" />

\`\`\`java
String getCacheDir();
\`\`\`

<a id="api_imediaplayercachemanager_getcachedir__detailed_desc" />

如果在调用该方法之前未调用 [setCacheDir](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_setcachedir) 设置缓存媒体文件的存储路径，则该方法返回 SDK 默认使用的存储路径。

<a id="api_imediaplayercachemanager_getcachedir__return_values" />

### 返回值 [#返回值-1]

方法调用成功时，返回缓存媒体文件的存储路径。 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-1]

* [IMediaPlayerCacheManager](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager)

<a id="api_imediaplayercachemanager_getcachefilecount" />

## getCacheFileCount [#getcachefilecount]

获取已缓存的媒体文件数量。

<a id="api_imediaplayercachemanager_getcachefilecount__prototype" />

\`\`\`java
int getCacheFileCount();
\`\`\`

<a id="api_imediaplayercachemanager_getcachefilecount__detailed_desc" />

<a id="api_imediaplayercachemanager_getcachefilecount__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功，返回已缓存的媒体文件数量。
* \\< 0：方法调用失败，详见 MediaPlayerReason。

### 所属接口类 [#所属接口类-2]

* [IMediaPlayerCacheManager](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager)

<a id="api_imediaplayercachemanager_getmaxcachefilecount" />

## getMaxCacheFileCount [#getmaxcachefilecount]

获取可缓存的媒体文件的最大数量。

<a id="api_imediaplayercachemanager_getmaxcachefilecount__prototype" />

\`\`\`java
int getMaxCacheFileCount();
\`\`\`

<a id="api_imediaplayercachemanager_getmaxcachefilecount__detailed_desc" />

默认情况下，可缓存的媒体文件最大数量为 1000。

<a id="api_imediaplayercachemanager_getmaxcachefilecount__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功，返回获取可缓存的媒体文件的最大数量。
* \\< 0：方法调用失败，详见 MediaPlayerReason。

### 所属接口类 [#所属接口类-3]

* [IMediaPlayerCacheManager](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager)

<a id="api_imediaplayercachemanager_getmaxcachefilesize" />

## getMaxCacheFileSize [#getmaxcachefilesize]

获取缓存媒体文件聚合存储空间的最大大小。

<a id="api_imediaplayercachemanager_getmaxcachefilesize__prototype" />

\`\`\`java
long getMaxCacheFileSize();
\`\`\`

<a id="api_imediaplayercachemanager_getmaxcachefilesize__detailed_desc" />

你可以调用 [setMaxCacheFileSize](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_setmaxcachefilesize) 方法根据实际场景设置缓存媒体文件聚合存储空间的最大大小。

<a id="api_imediaplayercachemanager_getmaxcachefilesize__return_values" />

### 返回值 [#返回值-4]

* \\> 0：方法调用成功，返回缓存媒体文件聚合存储空间的最大大小（单位为字节）。
* \\< 0：方法调用失败，详见 MediaPlayerReason。

### 所属接口类 [#所属接口类-4]

* [IMediaPlayerCacheManager](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager)

<a id="api_imediaplayercachemanager_removeallcaches" />

## removeAllCaches [#removeallcaches]

删除媒体播放器中所有缓存的媒体文件。

<a id="api_imediaplayercachemanager_removeallcaches__prototype" />

\`\`\`java
int removeAllCaches();
\`\`\`

<a id="api_imediaplayercachemanager_removeallcaches__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    当前正在播放的缓存媒体文件不会被删除。
  </CalloutDescription>
</CalloutContainer>

<a id="api_imediaplayercachemanager_removeallcaches__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败，详见 MediaPlayerReason。

### 所属接口类 [#所属接口类-5]

* [IMediaPlayerCacheManager](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager)

<a id="api_imediaplayercachemanager_removecachebyuri" />

## removeCacheByUri [#removecachebyuri]

删除缓存的媒体文件。

<a id="api_imediaplayercachemanager_removecachebyuri__prototype" />

\`\`\`java
int removeCacheByUri(String uri);
\`\`\`

<a id="api_imediaplayercachemanager_removecachebyuri__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    当前正在播放的缓存媒体文件不会被删除。
  </CalloutDescription>
</CalloutContainer>

<a id="api_imediaplayercachemanager_removecachebyuri__parameters" />

### 参数 [#参数-1]

#### \`uri\` [#uri]

要删除的媒体文件的 URI（统一资源标识符）。

<a id="api_imediaplayercachemanager_removecachebyuri__return_values" />

### 返回值 [#返回值-6]

* 0：方法调用成功。
* \\< 0：方法调用失败，详见 MediaPlayerReason。

### 所属接口类 [#所属接口类-6]

* [IMediaPlayerCacheManager](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager)

<a id="api_imediaplayercachemanager_removeoldcache" />

## removeOldCache [#removeoldcache]

删除最少使用的缓存媒体文件。

<a id="api_imediaplayercachemanager_removeoldcache__prototype" />

\`\`\`java
int removeOldCache();
\`\`\`

<a id="api_imediaplayercachemanager_removeoldcache__detailed_desc" />

你可以在缓存文件的存储空间即将达到上限时调用该方法。调用该方法后，SDK 会删除最少使用的缓存媒体文件。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    [removeOldCache](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_removeoldcache) 不会删除当前正在播放的缓存媒体文件。
  </CalloutDescription>
</CalloutContainer>

<a id="api_imediaplayercachemanager_removeoldcache__return_values" />

### 返回值 [#返回值-7]

* 0：方法调用成功。
* \\< 0：方法调用失败，详见 MediaPlayerReason。

### 所属接口类 [#所属接口类-7]

* [IMediaPlayerCacheManager](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager)

<a id="api_imediaplayercachemanager_setcachedir" />

## setCacheDir [#setcachedir]

设置要缓存的媒体文件的存储路径。

<a id="api_imediaplayercachemanager_setcachedir__prototype" />

\`\`\`java
int setCacheDir(String path);
\`\`\`

<a id="api_imediaplayercachemanager_setcachedir__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请确保在调用该方法前已初始化 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)。
  </CalloutDescription>
</CalloutContainer>

<a id="api_imediaplayercachemanager_setcachedir__parameters" />

### 参数 [#参数-2]

#### \`path\` [#path]

要缓存的媒体文件的绝对路径。确保该目录已存在且可写。

<a id="api_imediaplayercachemanager_setcachedir__return_values" />

### 返回值 [#返回值-8]

* 0：方法调用成功。
* \\< 0：方法调用失败，详见 MediaPlayerReason。

### 所属接口类 [#所属接口类-8]

* [IMediaPlayerCacheManager](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager)

<a id="api_imediaplayercachemanager_setmaxcachefilecount" />

## setMaxCacheFileCount [#setmaxcachefilecount]

设置可缓存的媒体文件数量上限。

<a id="api_imediaplayercachemanager_setmaxcachefilecount__prototype" />

\`\`\`java
int setMaxCacheFileCount(int count);
\`\`\`

<a id="api_imediaplayercachemanager_setmaxcachefilecount__detailed_desc" />

<a id="api_imediaplayercachemanager_setmaxcachefilecount__parameters" />

### 参数 [#参数-3]

#### \`count\` [#count]

可缓存的媒体文件数量上限（默认值为 1000）。

<a id="api_imediaplayercachemanager_setmaxcachefilecount__return_values" />

### 返回值 [#返回值-9]

* 0：方法调用成功。
* \\< 0：方法调用失败，详见 MediaPlayerReason。

### 所属接口类 [#所属接口类-9]

* [IMediaPlayerCacheManager](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager)

<a id="api_imediaplayercachemanager_setmaxcachefilesize" />

## setMaxCacheFileSize [#setmaxcachefilesize]

设置缓存媒体文件的聚合存储空间的最大大小。

<a id="api_imediaplayercachemanager_setmaxcachefilesize__prototype" />

\`\`\`java
int setMaxCacheFileSize(long cacheSize);
\`\`\`

<a id="api_imediaplayercachemanager_setmaxcachefilesize__detailed_desc" />

<a id="api_imediaplayercachemanager_setmaxcachefilesize__parameters" />

### 参数 [#参数-4]

#### \`cacheSize\` [#cachesize]

缓存媒体文件的聚合存储空间的最大大小，单位为字节。（默认值为 1 GB。）

<a id="api_imediaplayercachemanager_setmaxcachefilesize__return_values" />

### 返回值 [#返回值-10]

* 0：方法调用成功。
* \\< 0：方法调用失败，详见 MediaPlayerReason。

### 所属接口类 [#所属接口类-10]

* [IMediaPlayerCacheManager](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager)

<a id="callback_imediaplayersourceobserver_onplayercachestats" />

## onPlayerCacheStats [#onplayercachestats]

报告正在缓存的媒体文件的统计信息回调。

<a id="callback_imediaplayersourceobserver_onplayercachestats__prototype" />

\`\`\`java
void onPlayerCacheStats(CacheStatistics stats)
\`\`\`

<a id="callback_imediaplayersourceobserver_onplayercachestats__detailed_desc" />

调用 [openWithMediaSource](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_openwithmediasource) 方法并将 \`enableCache\` 设置为 true 后，SDK 每秒触发一次该回调。

<a id="callback_imediaplayersourceobserver_onplayercachestats__timing" />

### 触发时机 [#触发时机]

该回调在调用 [openWithMediaSource](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_openwithmediasource) 方法并将 \`enableCache\` 设置为 true 后，每秒触发一次。

<a id="callback_imediaplayersourceobserver_onplayercachestats__parameters" />

### 参数 [#参数-5]

#### \`stats\` [#stats]

正在缓存的媒体文件的统计信息。详见 [CacheStatistics](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-cachestatistics)。

### 所属接口类 [#所属接口类-11]

* [IMediaPlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver)
`;
export let structuredData = {
  contents: [{
    heading: "enableautoremovecache",
    content: "设置是否自动删除缓存的媒体文件。"
  }, {
    heading: "enableautoremovecache",
    content: "当缓存的媒体文件数量或大小超过设置的限制时，启用该功能后，SDK 会自动删除最近最少使用的缓存文件。"
  }, {
    heading: "enable",
    content: "是否启用 SDK 自动删除缓存的媒体文件："
  }, {
    heading: "enable",
    content: "true：自动删除缓存的媒体文件。"
  }, {
    heading: "enable",
    content: "false：（默认）不自动删除缓存的媒体文件。"
  }, {
    heading: "返回值",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值",
    content: "\\< 0：方法调用失败，详见 MediaPlayerReason。"
  }, {
    heading: "所属接口类",
    content: "IMediaPlayerCacheManager"
  }, {
    heading: "getcachedir",
    content: "获取缓存媒体文件的存储路径。"
  }, {
    heading: "getcachedir",
    content: "如果在调用该方法之前未调用 setCacheDir 设置缓存媒体文件的存储路径，则该方法返回 SDK 默认使用的存储路径。"
  }, {
    heading: "返回值-1",
    content: "方法调用成功时，返回缓存媒体文件的存储路径。 方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-1",
    content: "IMediaPlayerCacheManager"
  }, {
    heading: "getcachefilecount",
    content: "获取已缓存的媒体文件数量。"
  }, {
    heading: "返回值-2",
    content: "0：方法调用成功，返回已缓存的媒体文件数量。"
  }, {
    heading: "返回值-2",
    content: "\\< 0：方法调用失败，详见 MediaPlayerReason。"
  }, {
    heading: "所属接口类-2",
    content: "IMediaPlayerCacheManager"
  }, {
    heading: "getmaxcachefilecount",
    content: "获取可缓存的媒体文件的最大数量。"
  }, {
    heading: "getmaxcachefilecount",
    content: "默认情况下，可缓存的媒体文件最大数量为 1000。"
  }, {
    heading: "返回值-3",
    content: "0：方法调用成功，返回获取可缓存的媒体文件的最大数量。"
  }, {
    heading: "返回值-3",
    content: "\\< 0：方法调用失败，详见 MediaPlayerReason。"
  }, {
    heading: "所属接口类-3",
    content: "IMediaPlayerCacheManager"
  }, {
    heading: "getmaxcachefilesize",
    content: "获取缓存媒体文件聚合存储空间的最大大小。"
  }, {
    heading: "getmaxcachefilesize",
    content: "你可以调用 setMaxCacheFileSize 方法根据实际场景设置缓存媒体文件聚合存储空间的最大大小。"
  }, {
    heading: "返回值-4",
    content: "\\> 0：方法调用成功，返回缓存媒体文件聚合存储空间的最大大小（单位为字节）。"
  }, {
    heading: "返回值-4",
    content: "\\< 0：方法调用失败，详见 MediaPlayerReason。"
  }, {
    heading: "所属接口类-4",
    content: "IMediaPlayerCacheManager"
  }, {
    heading: "removeallcaches",
    content: "删除媒体播放器中所有缓存的媒体文件。"
  }, {
    heading: "removeallcaches",
    content: "当前正在播放的缓存媒体文件不会被删除。"
  }, {
    heading: "返回值-5",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-5",
    content: "\\< 0：方法调用失败，详见 MediaPlayerReason。"
  }, {
    heading: "所属接口类-5",
    content: "IMediaPlayerCacheManager"
  }, {
    heading: "removecachebyuri",
    content: "删除缓存的媒体文件。"
  }, {
    heading: "removecachebyuri",
    content: "当前正在播放的缓存媒体文件不会被删除。"
  }, {
    heading: "uri",
    content: "要删除的媒体文件的 URI（统一资源标识符）。"
  }, {
    heading: "返回值-6",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-6",
    content: "\\< 0：方法调用失败，详见 MediaPlayerReason。"
  }, {
    heading: "所属接口类-6",
    content: "IMediaPlayerCacheManager"
  }, {
    heading: "removeoldcache",
    content: "删除最少使用的缓存媒体文件。"
  }, {
    heading: "removeoldcache",
    content: "你可以在缓存文件的存储空间即将达到上限时调用该方法。调用该方法后，SDK 会删除最少使用的缓存媒体文件。"
  }, {
    heading: "removeoldcache",
    content: "removeOldCache 不会删除当前正在播放的缓存媒体文件。"
  }, {
    heading: "返回值-7",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-7",
    content: "\\< 0：方法调用失败，详见 MediaPlayerReason。"
  }, {
    heading: "所属接口类-7",
    content: "IMediaPlayerCacheManager"
  }, {
    heading: "setcachedir",
    content: "设置要缓存的媒体文件的存储路径。"
  }, {
    heading: "setcachedir",
    content: "请确保在调用该方法前已初始化 RtcEngine。"
  }, {
    heading: "path",
    content: "要缓存的媒体文件的绝对路径。确保该目录已存在且可写。"
  }, {
    heading: "返回值-8",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-8",
    content: "\\< 0：方法调用失败，详见 MediaPlayerReason。"
  }, {
    heading: "所属接口类-8",
    content: "IMediaPlayerCacheManager"
  }, {
    heading: "setmaxcachefilecount",
    content: "设置可缓存的媒体文件数量上限。"
  }, {
    heading: "count",
    content: "可缓存的媒体文件数量上限（默认值为 1000）。"
  }, {
    heading: "返回值-9",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-9",
    content: "\\< 0：方法调用失败，详见 MediaPlayerReason。"
  }, {
    heading: "所属接口类-9",
    content: "IMediaPlayerCacheManager"
  }, {
    heading: "setmaxcachefilesize",
    content: "设置缓存媒体文件的聚合存储空间的最大大小。"
  }, {
    heading: "cachesize",
    content: "缓存媒体文件的聚合存储空间的最大大小，单位为字节。（默认值为 1 GB。）"
  }, {
    heading: "返回值-10",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-10",
    content: "\\< 0：方法调用失败，详见 MediaPlayerReason。"
  }, {
    heading: "所属接口类-10",
    content: "IMediaPlayerCacheManager"
  }, {
    heading: "onplayercachestats",
    content: "报告正在缓存的媒体文件的统计信息回调。"
  }, {
    heading: "onplayercachestats",
    content: "调用 openWithMediaSource 方法并将 `enableCache` 设置为 true 后，SDK 每秒触发一次该回调。"
  }, {
    heading: "触发时机",
    content: "该回调在调用 openWithMediaSource 方法并将 `enableCache` 设置为 true 后，每秒触发一次。"
  }, {
    heading: "stats",
    content: "正在缓存的媒体文件的统计信息。详见 CacheStatistics。"
  }, {
    heading: "所属接口类-11",
    content: "IMediaPlayerObserver"
  }],
  headings: [{
    id: "enableautoremovecache",
    content: "enableAutoRemoveCache"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "enable",
    content: "`enable`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "getcachedir",
    content: "getCacheDir"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "getcachefilecount",
    content: "getCacheFileCount"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "getmaxcachefilecount",
    content: "getMaxCacheFileCount"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "getmaxcachefilesize",
    content: "getMaxCacheFileSize"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "removeallcaches",
    content: "removeAllCaches"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "removecachebyuri",
    content: "removeCacheByUri"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "uri",
    content: "`uri`"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "removeoldcache",
    content: "removeOldCache"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "setcachedir",
    content: "setCacheDir"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "path",
    content: "`path`"
  }, {
    id: "返回值-8",
    content: "返回值"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "setmaxcachefilecount",
    content: "setMaxCacheFileCount"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "count",
    content: "`count`"
  }, {
    id: "返回值-9",
    content: "返回值"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }, {
    id: "setmaxcachefilesize",
    content: "setMaxCacheFileSize"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "cachesize",
    content: "`cacheSize`"
  }, {
    id: "返回值-10",
    content: "返回值"
  }, {
    id: "所属接口类-10",
    content: "所属接口类"
  }, {
    id: "onplayercachestats",
    content: "onPlayerCacheStats"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "stats",
    content: "`stats`"
  }, {
    id: "所属接口类-11",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#enableautoremovecache",
  title: _jsx(_Fragment, {
    children: "enableAutoRemoveCache"
  })
}, {
  depth: 3,
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
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
  url: "#所属接口类",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#getcachedir",
  title: _jsx(_Fragment, {
    children: "getCacheDir"
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
  url: "#getcachefilecount",
  title: _jsx(_Fragment, {
    children: "getCacheFileCount"
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
  url: "#getmaxcachefilecount",
  title: _jsx(_Fragment, {
    children: "getMaxCacheFileCount"
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
  url: "#getmaxcachefilesize",
  title: _jsx(_Fragment, {
    children: "getMaxCacheFileSize"
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
  url: "#removeallcaches",
  title: _jsx(_Fragment, {
    children: "removeAllCaches"
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
  url: "#removecachebyuri",
  title: _jsx(_Fragment, {
    children: "removeCacheByUri"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#uri",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uri"
    })
  })
}, {
  depth: 3,
  url: "#返回值-6",
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
  url: "#removeoldcache",
  title: _jsx(_Fragment, {
    children: "removeOldCache"
  })
}, {
  depth: 3,
  url: "#返回值-7",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-7",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setcachedir",
  title: _jsx(_Fragment, {
    children: "setCacheDir"
  })
}, {
  depth: 3,
  url: "#参数-2",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#path",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "path"
    })
  })
}, {
  depth: 3,
  url: "#返回值-8",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-8",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setmaxcachefilecount",
  title: _jsx(_Fragment, {
    children: "setMaxCacheFileCount"
  })
}, {
  depth: 3,
  url: "#参数-3",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#count",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "count"
    })
  })
}, {
  depth: 3,
  url: "#返回值-9",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-9",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setmaxcachefilesize",
  title: _jsx(_Fragment, {
    children: "setMaxCacheFileSize"
  })
}, {
  depth: 3,
  url: "#参数-4",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#cachesize",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "cacheSize"
    })
  })
}, {
  depth: 3,
  url: "#返回值-10",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-10",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onplayercachestats",
  title: _jsx(_Fragment, {
    children: "onPlayerCacheStats"
  })
}, {
  depth: 3,
  url: "#触发时机",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-5",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#stats",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "stats"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-11",
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
      id: "toc_mediaplayer_cache"
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_enableautoremovecache"
    }), `
`, _jsx(_components.h2, {
      id: "enableautoremovecache",
      children: "enableAutoRemoveCache"
    }), `
`, _jsx(_components.p, {
      children: "设置是否自动删除缓存的媒体文件。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_enableautoremovecache__prototype"
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
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " enableAutoRemoveCache"
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
              children: " enable);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_enableautoremovecache__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "当缓存的媒体文件数量或大小超过设置的限制时，启用该功能后，SDK 会自动删除最近最少使用的缓存文件。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_enableautoremovecache__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enable",
      children: _jsx(_components.code, {
        children: "enable"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用 SDK 自动删除缓存的媒体文件："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：自动删除缓存的媒体文件。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不自动删除缓存的媒体文件。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_enableautoremovecache__return_values"
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
`, _jsx(_components.li, {
        children: "< 0：方法调用失败，详见 MediaPlayerReason。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager",
          children: "IMediaPlayerCacheManager"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_getcachedir"
    }), `
`, _jsx(_components.h2, {
      id: "getcachedir",
      children: "getCacheDir"
    }), `
`, _jsx(_components.p, {
      children: "获取缓存媒体文件的存储路径。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_getcachedir__prototype"
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
              children: "String "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getCacheDir"
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
      id: "api_imediaplayercachemanager_getcachedir__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["如果在调用该方法之前未调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_setcachedir",
        children: "setCacheDir"
      }), " 设置缓存媒体文件的存储路径，则该方法返回 SDK 默认使用的存储路径。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_getcachedir__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-1",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功时，返回缓存媒体文件的存储路径。 方法调用失败，返回空字符串。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-1",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager",
          children: "IMediaPlayerCacheManager"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_getcachefilecount"
    }), `
`, _jsx(_components.h2, {
      id: "getcachefilecount",
      children: "getCacheFileCount"
    }), `
`, _jsx(_components.p, {
      children: "获取已缓存的媒体文件数量。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_getcachefilecount__prototype"
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
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " getCacheFileCount"
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
      id: "api_imediaplayercachemanager_getcachefilecount__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_getcachefilecount__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-2",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：方法调用成功，返回已缓存的媒体文件数量。"
      }), `
`, _jsx(_components.li, {
        children: "< 0：方法调用失败，详见 MediaPlayerReason。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager",
          children: "IMediaPlayerCacheManager"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_getmaxcachefilecount"
    }), `
`, _jsx(_components.h2, {
      id: "getmaxcachefilecount",
      children: "getMaxCacheFileCount"
    }), `
`, _jsx(_components.p, {
      children: "获取可缓存的媒体文件的最大数量。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_getmaxcachefilecount__prototype"
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
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " getMaxCacheFileCount"
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
      id: "api_imediaplayercachemanager_getmaxcachefilecount__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "默认情况下，可缓存的媒体文件最大数量为 1000。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_getmaxcachefilecount__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-3",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：方法调用成功，返回获取可缓存的媒体文件的最大数量。"
      }), `
`, _jsx(_components.li, {
        children: "< 0：方法调用失败，详见 MediaPlayerReason。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager",
          children: "IMediaPlayerCacheManager"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_getmaxcachefilesize"
    }), `
`, _jsx(_components.h2, {
      id: "getmaxcachefilesize",
      children: "getMaxCacheFileSize"
    }), `
`, _jsx(_components.p, {
      children: "获取缓存媒体文件聚合存储空间的最大大小。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_getmaxcachefilesize__prototype"
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
              children: "long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " getMaxCacheFileSize"
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
      id: "api_imediaplayercachemanager_getmaxcachefilesize__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_setmaxcachefilesize",
        children: "setMaxCacheFileSize"
      }), " 方法根据实际场景设置缓存媒体文件聚合存储空间的最大大小。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_getmaxcachefilesize__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-4",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "> 0：方法调用成功，返回缓存媒体文件聚合存储空间的最大大小（单位为字节）。"
      }), `
`, _jsx(_components.li, {
        children: "< 0：方法调用失败，详见 MediaPlayerReason。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager",
          children: "IMediaPlayerCacheManager"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_removeallcaches"
    }), `
`, _jsx(_components.h2, {
      id: "removeallcaches",
      children: "removeAllCaches"
    }), `
`, _jsx(_components.p, {
      children: "删除媒体播放器中所有缓存的媒体文件。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_removeallcaches__prototype"
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
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " removeAllCaches"
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
      id: "api_imediaplayercachemanager_removeallcaches__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "当前正在播放的缓存媒体文件不会被删除。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_removeallcaches__return_values"
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
`, _jsx(_components.li, {
        children: "< 0：方法调用失败，详见 MediaPlayerReason。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager",
          children: "IMediaPlayerCacheManager"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_removecachebyuri"
    }), `
`, _jsx(_components.h2, {
      id: "removecachebyuri",
      children: "removeCacheByUri"
    }), `
`, _jsx(_components.p, {
      children: "删除缓存的媒体文件。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_removecachebyuri__prototype"
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
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " removeCacheByUri"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String uri);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_removecachebyuri__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "当前正在播放的缓存媒体文件不会被删除。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_removecachebyuri__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uri",
      children: _jsx(_components.code, {
        children: "uri"
      })
    }), `
`, _jsx(_components.p, {
      children: "要删除的媒体文件的 URI（统一资源标识符）。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_removecachebyuri__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-6",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：方法调用成功。"
      }), `
`, _jsx(_components.li, {
        children: "< 0：方法调用失败，详见 MediaPlayerReason。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager",
          children: "IMediaPlayerCacheManager"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_removeoldcache"
    }), `
`, _jsx(_components.h2, {
      id: "removeoldcache",
      children: "removeOldCache"
    }), `
`, _jsx(_components.p, {
      children: "删除最少使用的缓存媒体文件。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_removeoldcache__prototype"
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
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " removeOldCache"
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
      id: "api_imediaplayercachemanager_removeoldcache__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以在缓存文件的存储空间即将达到上限时调用该方法。调用该方法后，SDK 会删除最少使用的缓存媒体文件。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_removeoldcache",
            children: "removeOldCache"
          }), " 不会删除当前正在播放的缓存媒体文件。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_removeoldcache__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-7",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：方法调用成功。"
      }), `
`, _jsx(_components.li, {
        children: "< 0：方法调用失败，详见 MediaPlayerReason。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-7",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager",
          children: "IMediaPlayerCacheManager"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_setcachedir"
    }), `
`, _jsx(_components.h2, {
      id: "setcachedir",
      children: "setCacheDir"
    }), `
`, _jsx(_components.p, {
      children: "设置要缓存的媒体文件的存储路径。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_setcachedir__prototype"
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
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " setCacheDir"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String path);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_setcachedir__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请确保在调用该方法前已初始化 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
            children: "RtcEngine"
          }), "。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_setcachedir__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "path",
      children: _jsx(_components.code, {
        children: "path"
      })
    }), `
`, _jsx(_components.p, {
      children: "要缓存的媒体文件的绝对路径。确保该目录已存在且可写。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_setcachedir__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-8",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：方法调用成功。"
      }), `
`, _jsx(_components.li, {
        children: "< 0：方法调用失败，详见 MediaPlayerReason。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-8",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager",
          children: "IMediaPlayerCacheManager"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_setmaxcachefilecount"
    }), `
`, _jsx(_components.h2, {
      id: "setmaxcachefilecount",
      children: "setMaxCacheFileCount"
    }), `
`, _jsx(_components.p, {
      children: "设置可缓存的媒体文件数量上限。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_setmaxcachefilecount__prototype"
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
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " setMaxCacheFileCount"
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
              children: " count);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_setmaxcachefilecount__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_setmaxcachefilecount__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "count",
      children: _jsx(_components.code, {
        children: "count"
      })
    }), `
`, _jsx(_components.p, {
      children: "可缓存的媒体文件数量上限（默认值为 1000）。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_setmaxcachefilecount__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-9",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：方法调用成功。"
      }), `
`, _jsx(_components.li, {
        children: "< 0：方法调用失败，详见 MediaPlayerReason。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-9",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager",
          children: "IMediaPlayerCacheManager"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_setmaxcachefilesize"
    }), `
`, _jsx(_components.h2, {
      id: "setmaxcachefilesize",
      children: "setMaxCacheFileSize"
    }), `
`, _jsx(_components.p, {
      children: "设置缓存媒体文件的聚合存储空间的最大大小。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_setmaxcachefilesize__prototype"
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
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " setMaxCacheFileSize"
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
              children: " cacheSize);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_setmaxcachefilesize__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_setmaxcachefilesize__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "cachesize",
      children: _jsx(_components.code, {
        children: "cacheSize"
      })
    }), `
`, _jsx(_components.p, {
      children: "缓存媒体文件的聚合存储空间的最大大小，单位为字节。（默认值为 1 GB。）"
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_setmaxcachefilesize__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-10",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：方法调用成功。"
      }), `
`, _jsx(_components.li, {
        children: "< 0：方法调用失败，详见 MediaPlayerReason。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-10",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager",
          children: "IMediaPlayerCacheManager"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayercachestats"
    }), `
`, _jsx(_components.h2, {
      id: "onplayercachestats",
      children: "onPlayerCacheStats"
    }), `
`, _jsx(_components.p, {
      children: "报告正在缓存的媒体文件的统计信息回调。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayercachestats__prototype"
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
              children: "void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onPlayerCacheStats"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(CacheStatistics stats)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayercachestats__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_openwithmediasource",
        children: "openWithMediaSource"
      }), " 方法并将 ", _jsx(_components.code, {
        children: "enableCache"
      }), " 设置为 true 后，SDK 每秒触发一次该回调。"]
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayercachestats__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_openwithmediasource",
        children: "openWithMediaSource"
      }), " 方法并将 ", _jsx(_components.code, {
        children: "enableCache"
      }), " 设置为 true 后，每秒触发一次。"]
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayercachestats__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "stats",
      children: _jsx(_components.code, {
        children: "stats"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["正在缓存的媒体文件的统计信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-cachestatistics",
        children: "CacheStatistics"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-11",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver",
          children: "IMediaPlayerObserver"
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
