import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "版权音乐",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_drm" />

<a id="api_imusiccontentcenter_createmusicplayer" />

## createMusicPlayer [#createmusicplayer]

创建一个音乐播放器。

<a id="api_imusiccontentcenter_createmusicplayer__prototype" />

\`\`\`java
public abstract IAgoraMusicPlayer createMusicPlayer();
\`\`\`

<a id="api_imusiccontentcenter_createmusicplayer__detailed_desc" />

如果你需要播放来自音乐内容中心的音乐资源，必须先调用该方法。

<a id="api_imusiccontentcenter_createmusicplayer__return_values" />

### 返回值 [#返回值]

* 方法调用成功，返回 IAgoraMusicPlayer 对象。
* 方法调用失败，返回 null。

### 所属接口类 [#所属接口类]

* [IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter)

<a id="api_imusiccontentcenter_destroy_imusiccontentcenter" />

## destroy [#destroy]

销毁 IAgoraMusicContentCenter 实例。

<a id="api_imusiccontentcenter_destroy_imusiccontentcenter__prototype" />

\`\`\`java
public static synchronized void destroy()
\`\`\`

<a id="api_imusiccontentcenter_destroy_imusiccontentcenter__detailed_desc" />

你必须在调用 [destroy](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_destroy_imusiccontentcenter) 方法之前调用该方法。

### 所属接口类 [#所属接口类-1]

* [IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter)

<a id="api_imusicplayer_destroy_imusicplayer" />

## destroy [#destroy-1]

销毁音乐播放器。

<a id="api_imusicplayer_destroy_imusicplayer__prototype" />

\`\`\`java
@Deprecated @Override int destroy();
\`\`\`

<a id="api_imusicplayer_destroy_imusicplayer__detailed_desc" />

#### \`废弃\` [#废弃]

该方法已废弃，请改用 [destroyMusicPlayer](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_destroymusicplayer)。

<a id="api_imusicplayer_destroy_imusicplayer__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [IAgoraMusicPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusicplayer)

<a id="api_imusiccontentcenter_destroymusicplayer" />

## destroyMusicPlayer [#destroymusicplayer]

销毁音乐播放器对象。

<a id="api_imusiccontentcenter_destroymusicplayer__prototype" />

\`\`\`java
public abstract int destroyMusicPlayer(IAgoraMusicPlayer player);
\`\`\`

<a id="api_imusiccontentcenter_destroymusicplayer__detailed_desc" />

如果在销毁后需要再次使用音乐播放器，必须调用 [createMusicPlayer](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_createmusicplayer) 方法重新创建。

<a id="api_imusiccontentcenter_destroymusicplayer__timing" />

### 调用时机 [#调用时机]

你可以在加入频道前或加入频道后调用此方法，但必须确保在调用 [destroy](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_destroy_imusiccontentcenter) 方法之前调用此方法。

<a id="api_imusiccontentcenter_destroymusicplayer__parameters" />

### 参数 [#参数]

#### \`player\` [#player]

音乐播放器对象。详见 [IAgoraMusicPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusicplayer)。

<a id="api_imusiccontentcenter_destroymusicplayer__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter)

<a id="api_imusiccontentcenter_getcaches" />

## getCaches [#getcaches]

获取已缓存的音乐资源信息。

<a id="api_imusiccontentcenter_getcaches__prototype" />

\`\`\`java
public abstract MusicCacheInfo[] getCaches();
\`\`\`

<a id="api_imusiccontentcenter_getcaches__detailed_desc" />

在调用该方法前，你需要预先分配内存空间，用于存储已缓存音乐资源的信息。如果需要设置可缓存的音乐资源数量，可以通过 [initialize](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_initialize_imusiccontentcenter) 的 \`configuration\` 参数进行配置。当不再需要这些缓存的音乐资源时，应及时释放内存，避免内存泄漏。

<a id="api_imusiccontentcenter_getcaches__return_values" />

### 返回值 [#返回值-3]

* 方法调用成功，返回包含 MusicCacheInfo 对象的数组。
* 方法调用失败，返回 null。

### 所属接口类 [#所属接口类-4]

* [IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter)

<a id="api_imusiccontentcenter_getinternalsongcode" />

## getInternalSongCode [#getinternalsongcode]

创建音乐资源副歌片段的内部标识符。

<a id="api_imusiccontentcenter_getinternalsongcode__prototype" />

\`\`\`java
public abstract long getInternalSongCode(long songCode, String jsonOption);
\`\`\`

<a id="api_imusiccontentcenter_getinternalsongcode__detailed_desc" />

在播放音乐资源的副歌片段前，需调用该方法，结合音乐资源的 \`songCode\` 和 \`jsonOption\` 参数创建副歌片段的内部标识符。该标识符作为资源的唯一引用。在调用相关方法以打开、预加载或移除资源时，应将该标识符作为 \`songCode\` 参数传入。

<a id="api_imusiccontentcenter_getinternalsongcode__parameters" />

### 参数 [#参数-1]

#### \`songCode\` [#songcode]

音乐资源的标识符。可通过调用 \`getMusicCollectionByMusicChartId\` 或 \`searchMusic\` 获取，并从这两个方法触发的 [onMusicCollectionResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult) 回调中获取 \`songCode\`。

#### \`jsonOption\` [#jsonoption]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    \`sceneType\` 会影响计费方式。不同频道场景的计费标准不同，详见计费文档。若需切换频道场景，必须使用新的 \`sceneType\` 值重新调用该方法。
  </CalloutDescription>
</CalloutContainer>

扩展 JSON 字段，默认为 \`null\`。目前支持以下字段：

* sceneType：场景类型。1：直播场景，在线 K 歌房和背景音乐播放；2：直播场景，背景音乐播放；3：（默认）声动语聊场景，在线 K 歌房；4：声动语聊场景，背景音乐播放；5：VR 场景，在线 K 歌房和背景音乐播放。示例： \\{"sceneType":1}。
* highPart：副歌片段的索引，从 onMusicCollectionResult 回调中获取，索引从 0 开始。示例： \\{"format": \\{"highpart": 0}}。

<a id="api_imusiccontentcenter_getinternalsongcode__return_values" />

### 返回值 [#返回值-4]

* 方法调用成功，返回创建的音乐资源内部标识符。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-5]

* [IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter)

<a id="api_imusiccontentcenter_getlyric" />

## getLyric [#getlyric]

获取音乐资源歌词的下载链接。

<a id="api_imusiccontentcenter_getlyric__prototype" />

\`\`\`java
public abstract String getLyric(long songCode, int lyricType);
\`\`\`

<a id="api_imusiccontentcenter_getlyric__detailed_desc" />

<a id="api_imusiccontentcenter_getlyric__related" />

### 相关回调 [#相关回调]

调用该方法后，SDK 会触发 [onLyricResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onlyricresult) 回调。

<a id="api_imusiccontentcenter_getlyric__parameters" />

### 参数 [#参数-2]

#### \`songCode\` [#songcode-1]

指定音乐资源的标识符。

#### \`lyricType\` [#lyrictype]

歌词格式类型：

* 0：xml 格式。
* 1：lrc 格式。

<a id="api_imusiccontentcenter_getlyric__return_values" />

### 返回值 [#返回值-5]

* 方法调用成功时，返回唯一标识该请求的 requestId。
* 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-6]

* [IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter)

<a id="api_imusiccontentcenter_getmusiccharts" />

## getMusicCharts [#getmusiccharts]

获取所有音乐排行榜。

<a id="api_imusiccontentcenter_getmusiccharts__prototype" />

\`\`\`java
public abstract String getMusicCharts();
\`\`\`

<a id="api_imusiccontentcenter_getmusiccharts__detailed_desc" />

调用该方法时，SDK 会触发 [onMusicChartsResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusicchartsresult) 回调，返回音乐排行榜的详细信息。

<a id="api_imusiccontentcenter_getmusiccharts__related" />

### 相关回调 [#相关回调-1]

该方法调用后会触发 [onMusicChartsResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusicchartsresult) 回调。

<a id="api_imusiccontentcenter_getmusiccharts__return_values" />

### 返回值 [#返回值-6]

* 方法调用成功时，返回请求的唯一标识符 requestId。
* 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-7]

* [IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter)

<a id="api_imusiccontentcenter_getmusiccollectionbymusicchartid" />

## getMusicCollectionByMusicChartId \\[1/2] [#getmusiccollectionbymusicchartid-12]

根据音乐榜单 ID 获取音乐资源列表。

<a id="api_imusiccontentcenter_getmusiccollectionbymusicchartid__prototype" />

\`\`\`java
public String getMusicCollectionByMusicChartId(int musicChartId, int page, int pageSize)
\`\`\`

<a id="api_imusiccontentcenter_getmusiccollectionbymusicchartid__detailed_desc" />

成功调用该方法后，SDK 会触发 [onMusicCollectionResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult) 回调，返回榜单中的音乐资源详细信息。

<a id="api_imusiccontentcenter_getmusiccollectionbymusicchartid__parameters" />

### 参数 [#参数-3]

#### \`musicChartId\` [#musicchartid]

音乐榜单的 ID，可通过 [onMusicChartsResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusicchartsresult) 回调获取。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你也可以使用 RESTful API 获取“音乐库完整歌曲列表”或“增量歌曲列表”。
  </CalloutDescription>
</CalloutContainer>

#### \`page\` [#page]

当前页码，默认从 1 开始。

#### \`pageSize\` [#pagesize]

当前音乐资源列表中的总页数，最大值为 50。

<a id="api_imusiccontentcenter_getmusiccollectionbymusicchartid__return_values" />

### 返回值 [#返回值-7]

* 方法调用成功时，返回唯一标识此次请求的 requestId。
* 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-8]

* [IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter)

<a id="api_imusiccontentcenter_getmusiccollectionbymusicchartid2" />

## getMusicCollectionByMusicChartId \\[2/2] [#getmusiccollectionbymusicchartid-22]

根据音乐榜单 ID 获取音乐资源列表。

<a id="api_imusiccontentcenter_getmusiccollectionbymusicchartid2__prototype" />

\`\`\`java
public abstract String getMusicCollectionByMusicChartId(int musicChartId, int page, int pageSize, String jsonOption);
\`\`\`

<a id="api_imusiccontentcenter_getmusiccollectionbymusicchartid2__detailed_desc" />

成功调用该方法后，SDK 会触发 [onMusicCollectionResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult) 回调，返回榜单中的音乐资源详细信息。

<a id="api_imusiccontentcenter_getmusiccollectionbymusicchartid2__related" />

### 相关回调 [#相关回调-2]

成功调用该方法后，SDK 会触发 [onMusicCollectionResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult) 回调，返回榜单中的音乐资源详细信息。

<a id="api_imusiccontentcenter_getmusiccollectionbymusicchartid2__parameters" />

### 参数 [#参数-4]

#### \`musicChartId\` [#musicchartid-1]

音乐榜单的 ID。可通过 [onMusicChartsResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusicchartsresult) 回调获取。你也可以使用 RESTful API 获取完整音乐库列表或增量音乐列表。

#### \`page\` [#page-1]

当前页码，从 1 开始。

#### \`pageSize\` [#pagesize-1]

每页返回的音乐资源数量，最大值为 50。

#### \`jsonOption\` [#jsonoption-1]

可选的 JSON 扩展字段，默认为 \`null\`。你可以使用该字段筛选所需的音乐资源。目前支持以下筛选项：

* pitchType：音乐资源是否支持评分。
  * 1：可评分音乐资源。
  * 2：不可评分音乐资源。
* needHighPart：是否需要合唱片段资源。
  * true：需要合唱片段。
  * false：不需要合唱片段。

示例： \`{"pitchType":1}\`， \`{"needHighPart":true}\`。

<a id="api_imusiccontentcenter_getmusiccollectionbymusicchartid2__return_values" />

### 返回值 [#返回值-8]

* 方法调用成功时，返回请求的唯一标识符 requestId。
* 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-9]

* [IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter)

<a id="api_imusicplayer_getplaysrc" />

## getPlaySrc \\[2/2] [#getplaysrc-22]

获取当前播放的音乐资源的标识符或 URL。

<a id="api_imusicplayer_getplaysrc__prototype" />

\`\`\`java
@Override String getPlaySrc();
\`\`\`

<a id="api_imusicplayer_getplaysrc__detailed_desc" />

你需要在打开音乐资源后调用此方法：

* 如果使用 open(Uri uri, long startPos) 打开音乐资源，该方法返回音乐资源的标识符（songCode ）。
* 如果使用 open(String url, long startPos) 打开音乐资源，该方法返回音乐资源的 URL。

<a id="api_imusicplayer_getplaysrc__return_values" />

### 返回值 [#返回值-9]

* 方法调用成功时，返回音乐资源的标识符或 URL。
* 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-10]

* [IAgoraMusicPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusicplayer)

<a id="api_imusiccontentcenter_getsongsimpleinfo" />

## getSongSimpleInfo [#getsongsimpleinfo]

检索特定音乐资源的详细信息。

<a id="api_imusiccontentcenter_getsongsimpleinfo__prototype" />

\`\`\`java
public abstract String getSongSimpleInfo(long songCode);
\`\`\`

<a id="api_imusiccontentcenter_getsongsimpleinfo__detailed_desc" />

在调用该方法前，你需要先获取目标音乐资源的标识符。你可以通过调用 \`getMusicCollectionByMusicChartId\` 或 \`searchMusic\` 方法获取音乐资源，并通过触发的 [onMusicCollectionResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult) 回调获取音乐资源标识符（\`songCode\` ）。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    成功调用该方法后，SDK 会触发 [onSongSimpleInfoResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onsongsimpleinforesult) 回调，报告音乐资源的详细信息。
  </CalloutDescription>
</CalloutContainer>

<a id="api_imusiccontentcenter_getsongsimpleinfo__parameters" />

### 参数 [#参数-5]

#### \`songCode\` [#songcode-2]

音乐资源的标识符，用于指定要查询的音乐资源。

<a id="api_imusiccontentcenter_getsongsimpleinfo__return_values" />

### 返回值 [#返回值-10]

* 方法调用成功时，返回唯一标识此次请求的 requestId。
* 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-11]

* [IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter)

<a id="api_imusiccontentcenter_initialize_imusiccontentcenter" />

## initialize [#initialize]

初始化 IAgoraMusicContentCenter。

<a id="api_imusiccontentcenter_initialize_imusiccontentcenter__prototype" />

\`\`\`java
public abstract int initialize(MusicContentCenterConfiguration configuration);
\`\`\`

<a id="api_imusiccontentcenter_initialize_imusiccontentcenter__detailed_desc" />

在调用 [initialize](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_initialize_imusiccontentcenter) 方法前，必须先进行初始化，才能调用其他方法。

<a id="api_imusiccontentcenter_initialize_imusiccontentcenter__parameters" />

### 参数 [#参数-6]

#### \`configuration\` [#configuration]

[IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter) 的配置参数。详见 [MusicContentCenterConfiguration](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-musiccontentcenterconfiguration)。

<a id="api_imusiccontentcenter_initialize_imusiccontentcenter__return_values" />

### 返回值 [#返回值-11]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-12]

* [IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter)

<a id="api_imusiccontentcenter_ispreloaded" />

## isPreloaded [#ispreloaded]

检查指定音乐资源是否已预加载。

<a id="api_imusiccontentcenter_ispreloaded__prototype" />

\`\`\`java
public abstract int isPreloaded(long songCode);
\`\`\`

<a id="api_imusiccontentcenter_ispreloaded__detailed_desc" />

该方法为同步调用。

<a id="api_imusiccontentcenter_ispreloaded__parameters" />

### 参数 [#参数-7]

#### \`songCode\` [#songcode-3]

音乐资源的标识符。

<a id="api_imusiccontentcenter_ispreloaded__return_values" />

### 返回值 [#返回值-12]

* 0：方法调用成功，音乐资源已预加载。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-13]

* [IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter)

<a id="api_imusicplayer_open2_imusicplayer" />

## open \\[2/2] [#open-22]

通过 URL 打开音乐资源。

<a id="api_imusicplayer_open2_imusicplayer__prototype" />

\`\`\`java
int open(String url, long startPos)
\`\`\`

<a id="api_imusicplayer_open2_imusicplayer__detailed_desc" />

调用该方法会触发 [onPlayerStateChanged](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged) 回调。在收到播放状态为 \`OPEN_COMPLETED\` 的上报后，你可以调用 [play](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_play_player) 方法播放媒体文件。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果你要打开的音乐资源受数字版权保护，必须使用此方法打开。对于不受数字版权保护的音乐资源，你可以选择使用此方法，或使用 \`open\` 方法打开。
  </CalloutDescription>
</CalloutContainer>

<a id="api_imusicplayer_open2_imusicplayer__related" />

### 相关回调 [#相关回调-3]

调用该方法会触发 [onPlayerStateChanged](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged) 回调。

<a id="api_imusicplayer_open2_imusicplayer__parameters" />

### 参数 [#参数-8]

#### \`url\` [#url]

音乐资源的路径，支持本地文件和在线文件。

#### \`startPos\` [#startpos]

播放起始位置，单位为毫秒。（默认值为 0。）

<a id="api_imusicplayer_open2_imusicplayer__return_values" />

### 返回值 [#返回值-13]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。详见 错误码 获取详细信息和排查建议。

### 所属接口类 [#所属接口类-14]

* [IAgoraMusicPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusicplayer)

<a id="api_imusicplayer_open_imusicplayer" />

## open \\[1/2] [#open-12]

通过资源 ID 打开音乐资源。

<a id="api_imusicplayer_open_imusicplayer__prototype" />

\`\`\`java
int open(long songCode, long startPos);
\`\`\`

<a id="api_imusicplayer_open_imusicplayer__detailed_desc" />

调用该方法后，将触发 [onPlayerStateChanged](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged) 回调。当你收到 \`OPEN_COMPLETED\` 状态后，可以调用 [play](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_play_player) 方法播放媒体文件。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果要打开的音乐资源受数字版权管理保护，必须使用该方法。对于未受数字版权管理保护的音乐资源，可以使用该方法或 \`open\` 方法（参数为 \`String url, long startPos\` ）。
  </CalloutDescription>
</CalloutContainer>

<a id="api_imusicplayer_open_imusicplayer__related" />

### 相关回调 [#相关回调-4]

调用该方法后，将触发 [onPlayerStateChanged](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged) 回调。

<a id="api_imusicplayer_open_imusicplayer__parameters" />

### 参数 [#参数-9]

#### \`songCode\` [#songcode-4]

音乐资源的资源 ID，用于标识音乐。

#### \`startPos\` [#startpos-1]

起始播放位置，单位为毫秒。（默认值为 0）

<a id="api_imusicplayer_open_imusicplayer__return_values" />

### 返回值 [#返回值-14]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-15]

* [IAgoraMusicPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusicplayer)

<a id="api_imusiccontentcenter_preload" />

## preload \\[1/2] [#preload-12]

预加载音乐资源。

<a id="api_imusiccontentcenter_preload__prototype" />

\`\`\`java
public abstract int preload(long songCode, String jsonOption)
\`\`\`

<a id="api_imusiccontentcenter_preload__detailed_desc" />

#### \`废弃\` [#废弃-1]

该方法已废弃，请改用 [preload \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_preload2)。

调用成功后，SDK 会触发 [onPreLoadEvent](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onpreloadevent_imusiccontentcentereventhandler) 回调报告预加载事件。在调用该方法前，你需要先调用 \`getMusicCollectionByMusicChartId\` 或 \`searchMusic\` 获取音乐资源，并从 [onMusicCollectionResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult) 回调中获取资源标识符（\`songCode\` ）。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    销毁 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 对象前，请确保在收到 [onPreLoadEvent](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onpreloadevent_imusiccontentcentereventhandler) 回调后调用 [destroy \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_destroy1) 方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_imusiccontentcenter_preload__parameters" />

### 参数 [#参数-10]

#### \`songCode\` [#songcode-5]

音乐资源的标识符。

#### \`jsonOption\` [#jsonoption-2]

扩展的 JSON 字段。声网会根据你在 \`sceneType\` 字段中设置的应用场景计费，不同场景的计费标准不同，详见计费文档。

* 1：直播场景：在线 K 歌房和背景音乐播放。
* 2：直播场景：背景音乐播放。
* 3：（默认）声动语聊场景：在线 K 歌房。
* 4：声动语聊场景：背景音乐播放。
* 5：VR 场景：在线 K 歌房和背景音乐播放。

如果你需要切换到其他场景，必须重新调用该方法并在该字段中传入新的 \`sceneType\` 值。 示例： \`{"sceneType":1}\`。

<a id="api_imusiccontentcenter_preload__return_values" />

### 返回值 [#返回值-15]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-16]

* [IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter)

<a id="api_imusiccontentcenter_preload2" />

## preload \\[2/2] [#preload-22]

预加载版权音乐资源。

<a id="api_imusiccontentcenter_preload2__prototype" />

\`\`\`java
public abstract String preload(long songCode);
\`\`\`

<a id="api_imusiccontentcenter_preload2__detailed_desc" />

成功调用该方法后，SDK 会触发 [onPreLoadEvent](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onpreloadevent_imusiccontentcentereventhandler) 回调，报告预加载事件。在调用该方法前，你需要先调用 \`getMusicCollectionByMusicChartId\` 或 \`searchMusic\` 获取你想播放的版权音乐资源，并通过这些方法触发的 [onMusicCollectionResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult) 回调获取音乐资源标识符（\`songCode\` ）。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    销毁 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 对象前，请确保在收到 [onPreLoadEvent](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onpreloadevent_imusiccontentcentereventhandler) 回调后再调用 [destroy \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_destroy1) 方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_imusiccontentcenter_preload2__parameters" />

### 参数 [#参数-11]

#### \`songCode\` [#songcode-6]

版权音乐资源的标识符。

<a id="api_imusiccontentcenter_preload2__return_values" />

### 返回值 [#返回值-16]

* 方法调用成功时，返回请求的唯一标识符 requestId。
* 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-17]

* [IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter)

<a id="api_imusiccontentcenter_registereventhandler_imusiccontentcenter" />

## registerEventHandler [#registereventhandler]

注册版权音乐内容中心的回调事件。

<a id="api_imusiccontentcenter_registereventhandler_imusiccontentcenter__prototype" />

\`\`\`java
public abstract int registerEventHandler(IMusicContentCenterEventHandler eventHandler);
\`\`\`

<a id="api_imusiccontentcenter_registereventhandler_imusiccontentcenter__detailed_desc" />

<a id="api_imusiccontentcenter_registereventhandler_imusiccontentcenter__parameters" />

### 参数 [#参数-12]

#### \`eventHandler\` [#eventhandler]

要注册的回调事件。详见 [IMusicContentCenterEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcentereventhandler)。

<a id="api_imusiccontentcenter_registereventhandler_imusiccontentcenter__return_values" />

### 返回值 [#返回值-17]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-18]

* [IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter)

<a id="api_imusiccontentcenter_removecache" />

## removeCache [#removecache]

删除已缓存的音乐资源。

<a id="api_imusiccontentcenter_removecache__prototype" />

\`\`\`java
public abstract int removeCache(long songCode);
\`\`\`

<a id="api_imusiccontentcenter_removecache__detailed_desc" />

若需删除多个音乐资源，可多次调用此方法。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    [removeCache](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_removecache) 不会删除当前正在播放的已缓存音乐资源。
  </CalloutDescription>
</CalloutContainer>

<a id="api_imusiccontentcenter_removecache__parameters" />

### 参数 [#参数-13]

#### \`songCode\` [#songcode-7]

要删除的音乐资源的标识符。

<a id="api_imusiccontentcenter_removecache__return_values" />

### 返回值 [#返回值-18]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-19]

* [IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter)

<a id="api_imusiccontentcenter_renewtoken_imusiccontentcenter" />

## renewToken [#renewtoken]

更新 Token。

<a id="api_imusiccontentcenter_renewtoken_imusiccontentcenter__prototype" />

\`\`\`java
public abstract int renewToken(String token);
\`\`\`

<a id="api_imusiccontentcenter_renewtoken_imusiccontentcenter__detailed_desc" />

当用于鉴权的 Token 即将过期或已经过期时，可以调用该方法传入新生成的 Token。

<a id="api_imusiccontentcenter_renewtoken_imusiccontentcenter__parameters" />

### 参数 [#参数-14]

#### \`token\` [#token]

新生成的 Token。

<a id="api_imusiccontentcenter_renewtoken_imusiccontentcenter__return_values" />

### 返回值 [#返回值-19]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-20]

* [IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter)

<a id="api_imusiccontentcenter_searchmusic" />

## searchMusic \\[1/2] [#searchmusic-12]

搜索音乐资源。

<a id="api_imusiccontentcenter_searchmusic__prototype" />

\`\`\`java
public String searchMusic(String keyword, int page, int pageSize)
\`\`\`

<a id="api_imusiccontentcenter_searchmusic__detailed_desc" />

调用该方法后，SDK 会触发 [onMusicCollectionResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult) 回调，返回检索到的音乐资源列表。

<a id="api_imusiccontentcenter_searchmusic__parameters" />

### 参数 [#参数-15]

#### \`keyword\` [#keyword]

搜索关键词。支持按歌曲标题或艺术家名称搜索。

#### \`page\` [#page-2]

要获取的音乐资源列表的页码。

#### \`pageSize\` [#pagesize-2]

每页返回的最大音乐资源数量，最大值为 50。

<a id="api_imusiccontentcenter_searchmusic__return_values" />

### 返回值 [#返回值-20]

* 方法调用成功时，返回唯一标识该请求的 requestId。
* 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-21]

* [IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter)

<a id="api_imusiccontentcenter_searchmusic2" />

## searchMusic \\[2/2] [#searchmusic-22]

搜索音乐资源。

<a id="api_imusiccontentcenter_searchmusic2__prototype" />

\`\`\`java
public abstract String searchMusic(String keyword, int page, int pageSize, String jsonOption);
\`\`\`

<a id="api_imusiccontentcenter_searchmusic2__detailed_desc" />

<a id="api_imusiccontentcenter_searchmusic2__related" />

### 相关回调 [#相关回调-5]

成功调用该方法后，SDK 会触发 [onMusicCollectionResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult) 回调报告检索到的音乐资源列表。

<a id="api_imusiccontentcenter_searchmusic2__parameters" />

### 参数 [#参数-16]

#### \`keyword\` [#keyword-1]

搜索关键词。支持按歌曲名称或歌手名称搜索。

#### \`page\` [#page-3]

要获取的音乐资源列表的目标页码。

#### \`pageSize\` [#pagesize-3]

每页显示的最大音乐资源数量。最大值为 50。

#### \`jsonOption\` [#jsonoption-3]

可选的 JSON 扩展字段，默认为 \`null\`。你可以使用该字段筛选所需的音乐资源。目前支持以下筛选条件：

* pitchType：是否支持评分。
  * 1：支持评分的音乐资源。
  * 2：不支持评分的音乐资源。
* needHighPart：是否需要副歌片段。
  * true：需要副歌片段。
  * false：不需要副歌片段。

<a id="api_imusiccontentcenter_searchmusic2__return_values" />

### 返回值 [#返回值-21]

* 方法调用成功时，返回唯一标识该请求的 requestId。
* 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-22]

* [IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter)

<a id="api_imusicplayer_setplaymode" />

## setPlayMode [#setplaymode]

设置音乐曲目的播放模式。

<a id="api_imusicplayer_setplaymode__prototype" />

\`\`\`java
int setPlayMode(MusicPlayMode mode);
\`\`\`

<a id="api_imusicplayer_setplaymode__detailed_desc" />

如果你未调用该方法设置播放模式，默认播放人声伴奏；如果音乐资源不包含人声伴奏，则播放原唱。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你可以通过 [onMusicCollectionResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult) 回调获取音乐资源的详细信息，并使用该回调中的 \`list\` 参数查看该版权音乐支持的播放模式。
  </CalloutDescription>
</CalloutContainer>

<a id="api_imusicplayer_setplaymode__scenario" />

### 适用场景 [#适用场景]

在在线 K 歌或才艺展示等娱乐场景中，如果你需要播放由声网内容中心提供的版权音乐，可以调用该方法设置播放模式。

<a id="api_imusicplayer_setplaymode__timing" />

### 调用时机 [#调用时机-1]

你必须在调用 [createMusicPlayer](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_createmusicplayer) 方法之后调用该方法。

<a id="api_imusicplayer_setplaymode__parameters" />

### 参数 [#参数-17]

#### \`mode\` [#mode]

播放模式，详见 [MusicPlayMode](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-musicplaymode)。

<a id="api_imusicplayer_setplaymode__return_values" />

### 返回值 [#返回值-22]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2：参数无效，请重新设置参数。

### 所属接口类 [#所属接口类-23]

* [IAgoraMusicPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusicplayer)

<a id="api_imusicplayer_stop_imusicplayer" />

## stop \\[2/2] [#stop-22]

停止播放音乐资源。

<a id="api_imusicplayer_stop_imusicplayer__prototype" />

\`\`\`java
@Override int stop();
\`\`\`

<a id="api_imusicplayer_stop_imusicplayer__detailed_desc" />

<a id="api_imusicplayer_stop_imusicplayer__return_values" />

### 返回值 [#返回值-23]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-24]

* [IAgoraMusicPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusicplayer)

<a id="api_imusiccontentcenter_unregistereventhandler_imusiccontentcenter" />

## unregisterEventHandler [#unregistereventhandler]

取消注册版权音乐内容中心的事件回调。

<a id="api_imusiccontentcenter_unregistereventhandler_imusiccontentcenter__prototype" />

\`\`\`java
public abstract int unregisterEventHandler();
\`\`\`

<a id="api_imusiccontentcenter_unregistereventhandler_imusiccontentcenter__detailed_desc" />

<a id="api_imusiccontentcenter_unregistereventhandler_imusiccontentcenter__return_values" />

### 返回值 [#返回值-24]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-25]

* [IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter)

<a id="callback_imusiccontentcentereventhandler_onlyricresult" />

## onLyricResult [#onlyricresult]

歌词下载链接回调。

<a id="callback_imusiccontentcentereventhandler_onlyricresult__prototype" />

\`\`\`java
@CalledByNative void onLyricResult(String requestId, long songCode, String lyricUrl, int reason);
\`\`\`

<a id="callback_imusiccontentcentereventhandler_onlyricresult__detailed_desc" />

调用 [getLyric](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getlyric) 后，SDK 会触发该回调。

<a id="callback_imusiccontentcentereventhandler_onlyricresult__timing" />

### 触发时机 [#触发时机]

该回调在调用 [getLyric](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getlyric) 方法后被触发。

<a id="callback_imusiccontentcentereventhandler_onlyricresult__parameters" />

### 参数 [#参数-18]

#### \`requestId\` [#requestid]

请求 ID，用于唯一标识该请求。

#### \`songCode\` [#songcode-8]

音乐资源的编号，用于标识音乐资源。

#### \`lyricUrl\` [#lyricurl]

歌词的下载链接。

#### \`reason\` [#reason]

来自版权音乐内容中心的请求状态码：

* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_OK (0)：请求成功。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_ERROR (1)：通用错误，无具体原因。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_GATEWAY (2)：网关错误。可能原因包括：
  * 当前临时 Token 已过期。请重新生成 Token。
  * 提供的 Token 无效。请确保使用的是 RTM Token。
  * 网络错误。请检查网络连接。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_PERMISSION\\_AND\\_RESOURCE (3)：权限错误或音乐资源不存在。请确保项目已启用版权音乐内容中心权限。如有疑问，请[联系技术支持](https://ticket.shengwang.cn/)。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_INTERNAL\\_DATA\\_PARSE (4)：内部数据解析错误。请[联系技术支持](https://ticket.shengwang.cn/)。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_MUSIC\\_LOADING (5)：加载音乐资源时发生错误。请[联系技术支持](https://ticket.shengwang.cn/)。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_MUSIC\\_DECRYPTION (6)：解密音乐资源时发生错误。请[联系技术支持](https://ticket.shengwang.cn/)。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_HTTP\\_INTERNAL (7)：HTTP 内部错误。请稍后重试。

### 所属接口类 [#所属接口类-26]

* [IMusicContentCenterEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcentereventhandler)

<a id="callback_imusiccontentcentereventhandler_onmusicchartsresult" />

## onMusicChartsResult [#onmusicchartsresult]

获取音乐排行榜后的回调。

<a id="callback_imusiccontentcentereventhandler_onmusicchartsresult__prototype" />

\`\`\`java
@CalledByNative void onMusicChartsResult(String requestId, MusicChartInfo[] list, int reason);
\`\`\`

<a id="callback_imusiccontentcentereventhandler_onmusicchartsresult__detailed_desc" />

该回调在调用 [getMusicCharts](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getmusiccharts) 后被触发。

<a id="callback_imusiccontentcentereventhandler_onmusicchartsresult__timing" />

### 触发时机 [#触发时机-1]

该回调在调用 [getMusicCharts](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getmusiccharts) 方法后被触发。

<a id="callback_imusiccontentcentereventhandler_onmusicchartsresult__parameters" />

### 参数 [#参数-19]

#### \`requestId\` [#requestid-1]

请求 ID，用于标识此次请求的唯一标识符。

#### \`list\` [#list]

当前可播放的音乐排行榜列表，详见 [MusicChartInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-musicchartinfo)。

#### \`reason\` [#reason-1]

来自音乐内容中心的请求状态码：

* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_OK (0)：请求成功。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_ERROR (1)：通用错误，无具体原因。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_GATEWAY (2)：网关错误。可能原因包括：
  * 当前 token 已过期。请重新生成 token。
  * 提供的 token 无效。请确保使用的是 RTM token。
  * 网络错误。请检查网络连接。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_PERMISSION\\_AND\\_RESOURCE (3)：权限错误或未找到音乐资源。请确保项目已启用访问声网音乐内容中心。如有问题，请[联系技术支持](https://ticket.shengwang.cn/)。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_INTERNAL\\_DATA\\_PARSE (4)：内部数据解析错误。请[联系技术支持](https://ticket.shengwang.cn/)。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_MUSIC\\_LOADING (5)：加载音乐资源时发生错误。请[联系技术支持](https://ticket.shengwang.cn/)。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_MUSIC\\_DECRYPTION (6)：解密音乐资源时发生错误。请[联系技术支持](https://ticket.shengwang.cn/)。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_HTTP\\_INTERNAL (7)：内部 HTTP 错误。请稍后重试。

### 所属接口类 [#所属接口类-27]

* [IMusicContentCenterEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcentereventhandler)

<a id="callback_imusiccontentcentereventhandler_onmusiccollectionresult" />

## onMusicCollectionResult [#onmusiccollectionresult]

获取音乐资源列表的回调。

<a id="callback_imusiccontentcentereventhandler_onmusiccollectionresult__prototype" />

\`\`\`java
void onMusicCollectionResult(String requestId, int page, int pageSize, int total, Music[] list, int reason)
\`\`\`

<a id="callback_imusiccontentcentereventhandler_onmusiccollectionresult__detailed_desc" />

该回调在调用 \`getMusicCollectionByMusicChartId\` 或 \`searchMusic\` 时触发。

<a id="callback_imusiccontentcentereventhandler_onmusiccollectionresult__parameters" />

### 参数 [#参数-20]

#### \`requestId\` [#requestid-2]

请求 ID，用于唯一标识该请求。

#### \`page\` [#page-4]

当前页码，从 1 开始。

#### \`pageSize\` [#pagesize-4]

每页最多返回的音乐资源数量，最大为 50。

#### \`total\` [#total]

音乐资源列表中的总资源数。

#### \`list\` [#list-1]

音乐资源列表的详细信息，详见 [Music](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-music)。

#### \`reason\` [#reason-2]

来自声网音乐内容中心的请求状态码：

* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_OK (0)：请求成功。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_ERROR (1)：通用错误，无具体归因。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_GATEWAY (2)：网关错误。可能原因包括：
  * 当前临时 Token 已过期。请重新生成临时 Token。
  * 提供的临时 Token 无效。请确保你使用的是 RTM Token。
  * 网络错误。请检查你的网络连接。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_PERMISSION\\_AND\\_RESOURCE (3)：权限错误或未找到音乐资源。请确保你的项目已启用访问声网音乐内容中心的权限。如有问题，请[联系技术支持](https://ticket.shengwang.cn/)。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_INTERNAL\\_DATA\\_PARSE (4)：内部数据解析错误。请[联系技术支持](https://ticket.shengwang.cn/)。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_MUSIC\\_LOADING (5)：加载音乐资源时发生错误。请[联系技术支持](https://ticket.shengwang.cn/)。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_MUSIC\\_DECRYPTION (6)：解密音乐资源时发生错误。请[联系技术支持](https://ticket.shengwang.cn/)。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_HTTP\\_INTERNAL (7)：HTTP 内部错误。请稍后重试。

### 所属接口类 [#所属接口类-28]

* [IMusicContentCenterEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcentereventhandler)

<a id="callback_imusiccontentcentereventhandler_onpreloadevent_imusiccontentcentereventhandler" />

## onPreLoadEvent [#onpreloadevent]

预加载音乐资源事件的回调。

<a id="callback_imusiccontentcentereventhandler_onpreloadevent_imusiccontentcentereventhandler__prototype" />

\`\`\`java
void onPreLoadEvent(String requestId, long songCode, int percent, String lyricUrl, int state, int reason)
\`\`\`

<a id="callback_imusiccontentcentereventhandler_onpreloadevent_imusiccontentcentereventhandler__detailed_desc" />

调用 \`preload\` 方法预加载音乐资源后，SDK 会触发该回调。

<a id="callback_imusiccontentcentereventhandler_onpreloadevent_imusiccontentcentereventhandler__timing" />

### 触发时机 [#触发时机-2]

该回调在调用 \`preload\` 方法后被触发。

<a id="callback_imusiccontentcentereventhandler_onpreloadevent_imusiccontentcentereventhandler__parameters" />

### 参数 [#参数-21]

#### \`requestId\` [#requestid-3]

请求 ID，用于唯一标识该请求。

#### \`songCode\` [#songcode-9]

音乐资源的 ID，用于标识一个音乐资源。

#### \`percent\` [#percent]

音乐资源的当前加载进度，取值范围为 \\[0, 100]。

#### \`lyricUrl\` [#lyricurl-1]

歌词的下载地址。

#### \`state\` [#state]

音乐资源的当前加载状态：

* 0：加载完成。
* 1：加载失败。
* 2：加载中。

#### \`reason\` [#reason-3]

来自 Music Content Center 的请求状态码：

* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_OK (0)：请求成功。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_ERROR (1)：通用错误，无具体归因。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_GATEWAY (2)：网关错误。可能原因包括：
  * 当前临时 Token 已过期，请重新生成 Token。
  * 提供的 Token 无效，请确保使用的是 Token。
  * 网络错误，请检查网络连接。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_PERMISSION\\_AND\\_RESOURCE (3)：权限错误或音乐资源不存在。请确保项目已启用 Music Content Center 访问权限。如有问题请[联系技术支持](https://ticket.shengwang.cn/)。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_INTERNAL\\_DATA\\_PARSE (4)：内部数据解析错误。请[联系技术支持](https://ticket.shengwang.cn/)。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_MUSIC\\_LOADING (5)：加载音乐资源时发生错误。请[联系技术支持](https://ticket.shengwang.cn/)。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_MUSIC\\_DECRYPTION (6)：解密音乐资源时发生错误。请[联系技术支持](https://ticket.shengwang.cn/)。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_HTTP\\_INTERNAL (7)：HTTP 内部错误。请稍后重试。

### 所属接口类 [#所属接口类-29]

* [IMusicContentCenterEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcentereventhandler)

<a id="callback_imusiccontentcentereventhandler_onsongsimpleinforesult" />

## onSongSimpleInfoResult [#onsongsimpleinforesult]

获取音乐资源详细信息的回调。

<a id="callback_imusiccontentcentereventhandler_onsongsimpleinforesult__prototype" />

\`\`\`java
void onSongSimpleInfoResult(String requestId, long songCode, String simpleInfo, int reason);
\`\`\`

<a id="callback_imusiccontentcentereventhandler_onsongsimpleinforesult__detailed_desc" />

<a id="callback_imusiccontentcentereventhandler_onsongsimpleinforesult__timing" />

### 触发时机 [#触发时机-3]

该回调在调用 [getSongSimpleInfo](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getsongsimpleinfo) 后被触发。

<a id="callback_imusiccontentcentereventhandler_onsongsimpleinforesult__parameters" />

### 参数 [#参数-22]

#### \`requestId\` [#requestid-4]

请求 ID，用于标识此次请求的唯一标识符。

#### \`songCode\` [#songcode-10]

音乐资源的标识符。

#### \`simpleInfo\` [#simpleinfo]

音乐资源的相关信息，包括：

* 副歌片段的起始和结束时间（毫秒）。
* 副歌歌词的下载链接。
* 副歌片段的时长（毫秒）。
* 歌曲标题。
* 艺术家名称。

#### \`reason\` [#reason-4]

来自音乐内容中心的请求状态码：

* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_OK (0)：请求成功。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_ERROR (1)：通用错误，无具体原因。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_GATEWAY (2)：网关错误。可能原因包括：
  * 当前临时 Token 已过期，请生成新的 Token。
  * 提供的 Token 无效，请确保使用的是 RTM Token。
  * 网络错误，请检查网络连接。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_PERMISSION\\_AND\\_RESOURCE (3)：权限错误或音乐资源不存在。请确保项目已启用音乐内容中心权限。如有问题，请[联系技术支持](https://ticket.shengwang.cn/)。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_INTERNAL\\_DATA\\_PARSE (4)：内部数据解析错误。请[联系技术支持](https://ticket.shengwang.cn/)。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_MUSIC\\_LOADING (5)：加载音乐资源时发生错误。请[联系技术支持](https://ticket.shengwang.cn/)。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_MUSIC\\_DECRYPTION (6)：解密音乐资源时发生错误。请[联系技术支持](https://ticket.shengwang.cn/)。
* MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_HTTP\\_INTERNAL (7)：内部 HTTP 错误。请稍后重试。

### 所属接口类 [#所属接口类-30]

* [IMusicContentCenterEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcentereventhandler)
`;
export let structuredData = {
  contents: [{
    heading: "createmusicplayer",
    content: "创建一个音乐播放器。"
  }, {
    heading: "createmusicplayer",
    content: "如果你需要播放来自音乐内容中心的音乐资源，必须先调用该方法。"
  }, {
    heading: "返回值",
    content: "方法调用成功，返回 IAgoraMusicPlayer 对象。"
  }, {
    heading: "返回值",
    content: "方法调用失败，返回 null。"
  }, {
    heading: "所属接口类",
    content: "IAgoraMusicContentCenter"
  }, {
    heading: "destroy",
    content: "销毁 IAgoraMusicContentCenter 实例。"
  }, {
    heading: "destroy",
    content: "你必须在调用 destroy 方法之前调用该方法。"
  }, {
    heading: "所属接口类-1",
    content: "IAgoraMusicContentCenter"
  }, {
    heading: "destroy-1",
    content: "销毁音乐播放器。"
  }, {
    heading: "废弃",
    content: "该方法已废弃，请改用 destroyMusicPlayer。"
  }, {
    heading: "返回值-1",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-1",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-2",
    content: "IAgoraMusicPlayer"
  }, {
    heading: "destroymusicplayer",
    content: "销毁音乐播放器对象。"
  }, {
    heading: "destroymusicplayer",
    content: "如果在销毁后需要再次使用音乐播放器，必须调用 createMusicPlayer 方法重新创建。"
  }, {
    heading: "调用时机",
    content: "你可以在加入频道前或加入频道后调用此方法，但必须确保在调用 destroy 方法之前调用此方法。"
  }, {
    heading: "player",
    content: "音乐播放器对象。详见 IAgoraMusicPlayer。"
  }, {
    heading: "返回值-2",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-2",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-3",
    content: "IAgoraMusicContentCenter"
  }, {
    heading: "getcaches",
    content: "获取已缓存的音乐资源信息。"
  }, {
    heading: "getcaches",
    content: "在调用该方法前，你需要预先分配内存空间，用于存储已缓存音乐资源的信息。如果需要设置可缓存的音乐资源数量，可以通过 initialize 的 `configuration` 参数进行配置。当不再需要这些缓存的音乐资源时，应及时释放内存，避免内存泄漏。"
  }, {
    heading: "返回值-3",
    content: "方法调用成功，返回包含 MusicCacheInfo 对象的数组。"
  }, {
    heading: "返回值-3",
    content: "方法调用失败，返回 null。"
  }, {
    heading: "所属接口类-4",
    content: "IAgoraMusicContentCenter"
  }, {
    heading: "getinternalsongcode",
    content: "创建音乐资源副歌片段的内部标识符。"
  }, {
    heading: "getinternalsongcode",
    content: "在播放音乐资源的副歌片段前，需调用该方法，结合音乐资源的 `songCode` 和 `jsonOption` 参数创建副歌片段的内部标识符。该标识符作为资源的唯一引用。在调用相关方法以打开、预加载或移除资源时，应将该标识符作为 `songCode` 参数传入。"
  }, {
    heading: "songcode",
    content: "音乐资源的标识符。可通过调用 `getMusicCollectionByMusicChartId` 或 `searchMusic` 获取，并从这两个方法触发的 onMusicCollectionResult 回调中获取 `songCode`。"
  }, {
    heading: "jsonoption",
    content: "`sceneType` 会影响计费方式。不同频道场景的计费标准不同，详见计费文档。若需切换频道场景，必须使用新的 `sceneType` 值重新调用该方法。"
  }, {
    heading: "jsonoption",
    content: "扩展 JSON 字段，默认为 `null`。目前支持以下字段："
  }, {
    heading: "jsonoption",
    content: 'sceneType：场景类型。1：直播场景，在线 K 歌房和背景音乐播放；2：直播场景，背景音乐播放；3：（默认）声动语聊场景，在线 K 歌房；4：声动语聊场景，背景音乐播放；5：VR 场景，在线 K 歌房和背景音乐播放。示例： \\{"sceneType":1}。'
  }, {
    heading: "jsonoption",
    content: 'highPart：副歌片段的索引，从 onMusicCollectionResult 回调中获取，索引从 0 开始。示例： \\{"format": \\{"highpart": 0}}。'
  }, {
    heading: "返回值-4",
    content: "方法调用成功，返回创建的音乐资源内部标识符。"
  }, {
    heading: "返回值-4",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-5",
    content: "IAgoraMusicContentCenter"
  }, {
    heading: "getlyric",
    content: "获取音乐资源歌词的下载链接。"
  }, {
    heading: "相关回调",
    content: "调用该方法后，SDK 会触发 onLyricResult 回调。"
  }, {
    heading: "songcode-1",
    content: "指定音乐资源的标识符。"
  }, {
    heading: "lyrictype",
    content: "歌词格式类型："
  }, {
    heading: "lyrictype",
    content: "0：xml 格式。"
  }, {
    heading: "lyrictype",
    content: "1：lrc 格式。"
  }, {
    heading: "返回值-5",
    content: "方法调用成功时，返回唯一标识该请求的 requestId。"
  }, {
    heading: "返回值-5",
    content: "方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-6",
    content: "IAgoraMusicContentCenter"
  }, {
    heading: "getmusiccharts",
    content: "获取所有音乐排行榜。"
  }, {
    heading: "getmusiccharts",
    content: "调用该方法时，SDK 会触发 onMusicChartsResult 回调，返回音乐排行榜的详细信息。"
  }, {
    heading: "相关回调-1",
    content: "该方法调用后会触发 onMusicChartsResult 回调。"
  }, {
    heading: "返回值-6",
    content: "方法调用成功时，返回请求的唯一标识符 requestId。"
  }, {
    heading: "返回值-6",
    content: "方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-7",
    content: "IAgoraMusicContentCenter"
  }, {
    heading: "getmusiccollectionbymusicchartid-12",
    content: "根据音乐榜单 ID 获取音乐资源列表。"
  }, {
    heading: "getmusiccollectionbymusicchartid-12",
    content: "成功调用该方法后，SDK 会触发 onMusicCollectionResult 回调，返回榜单中的音乐资源详细信息。"
  }, {
    heading: "musicchartid",
    content: "音乐榜单的 ID，可通过 onMusicChartsResult 回调获取。"
  }, {
    heading: "musicchartid",
    content: "你也可以使用 RESTful API 获取“音乐库完整歌曲列表”或“增量歌曲列表”。"
  }, {
    heading: "page",
    content: "当前页码，默认从 1 开始。"
  }, {
    heading: "pagesize",
    content: "当前音乐资源列表中的总页数，最大值为 50。"
  }, {
    heading: "返回值-7",
    content: "方法调用成功时，返回唯一标识此次请求的 requestId。"
  }, {
    heading: "返回值-7",
    content: "方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-8",
    content: "IAgoraMusicContentCenter"
  }, {
    heading: "getmusiccollectionbymusicchartid-22",
    content: "根据音乐榜单 ID 获取音乐资源列表。"
  }, {
    heading: "getmusiccollectionbymusicchartid-22",
    content: "成功调用该方法后，SDK 会触发 onMusicCollectionResult 回调，返回榜单中的音乐资源详细信息。"
  }, {
    heading: "相关回调-2",
    content: "成功调用该方法后，SDK 会触发 onMusicCollectionResult 回调，返回榜单中的音乐资源详细信息。"
  }, {
    heading: "musicchartid-1",
    content: "音乐榜单的 ID。可通过 onMusicChartsResult 回调获取。你也可以使用 RESTful API 获取完整音乐库列表或增量音乐列表。"
  }, {
    heading: "page-1",
    content: "当前页码，从 1 开始。"
  }, {
    heading: "pagesize-1",
    content: "每页返回的音乐资源数量，最大值为 50。"
  }, {
    heading: "jsonoption-1",
    content: "可选的 JSON 扩展字段，默认为 `null`。你可以使用该字段筛选所需的音乐资源。目前支持以下筛选项："
  }, {
    heading: "jsonoption-1",
    content: "pitchType：音乐资源是否支持评分。"
  }, {
    heading: "jsonoption-1",
    content: "1：可评分音乐资源。"
  }, {
    heading: "jsonoption-1",
    content: "2：不可评分音乐资源。"
  }, {
    heading: "jsonoption-1",
    content: "needHighPart：是否需要合唱片段资源。"
  }, {
    heading: "jsonoption-1",
    content: "true：需要合唱片段。"
  }, {
    heading: "jsonoption-1",
    content: "false：不需要合唱片段。"
  }, {
    heading: "jsonoption-1",
    content: '示例： `{"pitchType":1}`， `{"needHighPart":true}`。'
  }, {
    heading: "返回值-8",
    content: "方法调用成功时，返回请求的唯一标识符 requestId。"
  }, {
    heading: "返回值-8",
    content: "方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-9",
    content: "IAgoraMusicContentCenter"
  }, {
    heading: "getplaysrc-22",
    content: "获取当前播放的音乐资源的标识符或 URL。"
  }, {
    heading: "getplaysrc-22",
    content: "你需要在打开音乐资源后调用此方法："
  }, {
    heading: "getplaysrc-22",
    content: "如果使用 open(Uri uri, long startPos) 打开音乐资源，该方法返回音乐资源的标识符（songCode ）。"
  }, {
    heading: "getplaysrc-22",
    content: "如果使用 open(String url, long startPos) 打开音乐资源，该方法返回音乐资源的 URL。"
  }, {
    heading: "返回值-9",
    content: "方法调用成功时，返回音乐资源的标识符或 URL。"
  }, {
    heading: "返回值-9",
    content: "方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-10",
    content: "IAgoraMusicPlayer"
  }, {
    heading: "getsongsimpleinfo",
    content: "检索特定音乐资源的详细信息。"
  }, {
    heading: "getsongsimpleinfo",
    content: "在调用该方法前，你需要先获取目标音乐资源的标识符。你可以通过调用 `getMusicCollectionByMusicChartId` 或 `searchMusic` 方法获取音乐资源，并通过触发的 onMusicCollectionResult 回调获取音乐资源标识符（`songCode` ）。"
  }, {
    heading: "getsongsimpleinfo",
    content: "成功调用该方法后，SDK 会触发 onSongSimpleInfoResult 回调，报告音乐资源的详细信息。"
  }, {
    heading: "songcode-2",
    content: "音乐资源的标识符，用于指定要查询的音乐资源。"
  }, {
    heading: "返回值-10",
    content: "方法调用成功时，返回唯一标识此次请求的 requestId。"
  }, {
    heading: "返回值-10",
    content: "方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-11",
    content: "IAgoraMusicContentCenter"
  }, {
    heading: "initialize",
    content: "初始化 IAgoraMusicContentCenter。"
  }, {
    heading: "initialize",
    content: "在调用 initialize 方法前，必须先进行初始化，才能调用其他方法。"
  }, {
    heading: "configuration",
    content: "IAgoraMusicContentCenter 的配置参数。详见 MusicContentCenterConfiguration。"
  }, {
    heading: "返回值-11",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-11",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-12",
    content: "IAgoraMusicContentCenter"
  }, {
    heading: "ispreloaded",
    content: "检查指定音乐资源是否已预加载。"
  }, {
    heading: "ispreloaded",
    content: "该方法为同步调用。"
  }, {
    heading: "songcode-3",
    content: "音乐资源的标识符。"
  }, {
    heading: "返回值-12",
    content: "0：方法调用成功，音乐资源已预加载。"
  }, {
    heading: "返回值-12",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-13",
    content: "IAgoraMusicContentCenter"
  }, {
    heading: "open-22",
    content: "通过 URL 打开音乐资源。"
  }, {
    heading: "open-22",
    content: "调用该方法会触发 onPlayerStateChanged 回调。在收到播放状态为 `OPEN_COMPLETED` 的上报后，你可以调用 play 方法播放媒体文件。"
  }, {
    heading: "open-22",
    content: "如果你要打开的音乐资源受数字版权保护，必须使用此方法打开。对于不受数字版权保护的音乐资源，你可以选择使用此方法，或使用 `open` 方法打开。"
  }, {
    heading: "相关回调-3",
    content: "调用该方法会触发 onPlayerStateChanged 回调。"
  }, {
    heading: "url",
    content: "音乐资源的路径，支持本地文件和在线文件。"
  }, {
    heading: "startpos",
    content: "播放起始位置，单位为毫秒。（默认值为 0。）"
  }, {
    heading: "返回值-13",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-13",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。详见 错误码 获取详细信息和排查建议。"
  }, {
    heading: "所属接口类-14",
    content: "IAgoraMusicPlayer"
  }, {
    heading: "open-12",
    content: "通过资源 ID 打开音乐资源。"
  }, {
    heading: "open-12",
    content: "调用该方法后，将触发 onPlayerStateChanged 回调。当你收到 `OPEN_COMPLETED` 状态后，可以调用 play 方法播放媒体文件。"
  }, {
    heading: "open-12",
    content: "如果要打开的音乐资源受数字版权管理保护，必须使用该方法。对于未受数字版权管理保护的音乐资源，可以使用该方法或 `open` 方法（参数为 `String url, long startPos` ）。"
  }, {
    heading: "相关回调-4",
    content: "调用该方法后，将触发 onPlayerStateChanged 回调。"
  }, {
    heading: "songcode-4",
    content: "音乐资源的资源 ID，用于标识音乐。"
  }, {
    heading: "startpos-1",
    content: "起始播放位置，单位为毫秒。（默认值为 0）"
  }, {
    heading: "返回值-14",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-14",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-15",
    content: "IAgoraMusicPlayer"
  }, {
    heading: "preload-12",
    content: "预加载音乐资源。"
  }, {
    heading: "废弃-1",
    content: "该方法已废弃，请改用 preload \\[2/2]。"
  }, {
    heading: "废弃-1",
    content: "调用成功后，SDK 会触发 onPreLoadEvent 回调报告预加载事件。在调用该方法前，你需要先调用 `getMusicCollectionByMusicChartId` 或 `searchMusic` 获取音乐资源，并从 onMusicCollectionResult 回调中获取资源标识符（`songCode` ）。"
  }, {
    heading: "废弃-1",
    content: "销毁 RtcEngine 对象前，请确保在收到 onPreLoadEvent 回调后调用 destroy \\[2/2] 方法。"
  }, {
    heading: "songcode-5",
    content: "音乐资源的标识符。"
  }, {
    heading: "jsonoption-2",
    content: "扩展的 JSON 字段。声网会根据你在 `sceneType` 字段中设置的应用场景计费，不同场景的计费标准不同，详见计费文档。"
  }, {
    heading: "jsonoption-2",
    content: "1：直播场景：在线 K 歌房和背景音乐播放。"
  }, {
    heading: "jsonoption-2",
    content: "2：直播场景：背景音乐播放。"
  }, {
    heading: "jsonoption-2",
    content: "3：（默认）声动语聊场景：在线 K 歌房。"
  }, {
    heading: "jsonoption-2",
    content: "4：声动语聊场景：背景音乐播放。"
  }, {
    heading: "jsonoption-2",
    content: "5：VR 场景：在线 K 歌房和背景音乐播放。"
  }, {
    heading: "jsonoption-2",
    content: '如果你需要切换到其他场景，必须重新调用该方法并在该字段中传入新的 `sceneType` 值。 示例： `{"sceneType":1}`。'
  }, {
    heading: "返回值-15",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-15",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-16",
    content: "IAgoraMusicContentCenter"
  }, {
    heading: "preload-22",
    content: "预加载版权音乐资源。"
  }, {
    heading: "preload-22",
    content: "成功调用该方法后，SDK 会触发 onPreLoadEvent 回调，报告预加载事件。在调用该方法前，你需要先调用 `getMusicCollectionByMusicChartId` 或 `searchMusic` 获取你想播放的版权音乐资源，并通过这些方法触发的 onMusicCollectionResult 回调获取音乐资源标识符（`songCode` ）。"
  }, {
    heading: "preload-22",
    content: "销毁 RtcEngine 对象前，请确保在收到 onPreLoadEvent 回调后再调用 destroy \\[2/2] 方法。"
  }, {
    heading: "songcode-6",
    content: "版权音乐资源的标识符。"
  }, {
    heading: "返回值-16",
    content: "方法调用成功时，返回请求的唯一标识符 requestId。"
  }, {
    heading: "返回值-16",
    content: "方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-17",
    content: "IAgoraMusicContentCenter"
  }, {
    heading: "registereventhandler",
    content: "注册版权音乐内容中心的回调事件。"
  }, {
    heading: "eventhandler",
    content: "要注册的回调事件。详见 IMusicContentCenterEventHandler。"
  }, {
    heading: "返回值-17",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-17",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-18",
    content: "IAgoraMusicContentCenter"
  }, {
    heading: "removecache",
    content: "删除已缓存的音乐资源。"
  }, {
    heading: "removecache",
    content: "若需删除多个音乐资源，可多次调用此方法。"
  }, {
    heading: "removecache",
    content: "removeCache 不会删除当前正在播放的已缓存音乐资源。"
  }, {
    heading: "songcode-7",
    content: "要删除的音乐资源的标识符。"
  }, {
    heading: "返回值-18",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-18",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-19",
    content: "IAgoraMusicContentCenter"
  }, {
    heading: "renewtoken",
    content: "更新 Token。"
  }, {
    heading: "renewtoken",
    content: "当用于鉴权的 Token 即将过期或已经过期时，可以调用该方法传入新生成的 Token。"
  }, {
    heading: "token",
    content: "新生成的 Token。"
  }, {
    heading: "返回值-19",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-19",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-20",
    content: "IAgoraMusicContentCenter"
  }, {
    heading: "searchmusic-12",
    content: "搜索音乐资源。"
  }, {
    heading: "searchmusic-12",
    content: "调用该方法后，SDK 会触发 onMusicCollectionResult 回调，返回检索到的音乐资源列表。"
  }, {
    heading: "keyword",
    content: "搜索关键词。支持按歌曲标题或艺术家名称搜索。"
  }, {
    heading: "page-2",
    content: "要获取的音乐资源列表的页码。"
  }, {
    heading: "pagesize-2",
    content: "每页返回的最大音乐资源数量，最大值为 50。"
  }, {
    heading: "返回值-20",
    content: "方法调用成功时，返回唯一标识该请求的 requestId。"
  }, {
    heading: "返回值-20",
    content: "方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-21",
    content: "IAgoraMusicContentCenter"
  }, {
    heading: "searchmusic-22",
    content: "搜索音乐资源。"
  }, {
    heading: "相关回调-5",
    content: "成功调用该方法后，SDK 会触发 onMusicCollectionResult 回调报告检索到的音乐资源列表。"
  }, {
    heading: "keyword-1",
    content: "搜索关键词。支持按歌曲名称或歌手名称搜索。"
  }, {
    heading: "page-3",
    content: "要获取的音乐资源列表的目标页码。"
  }, {
    heading: "pagesize-3",
    content: "每页显示的最大音乐资源数量。最大值为 50。"
  }, {
    heading: "jsonoption-3",
    content: "可选的 JSON 扩展字段，默认为 `null`。你可以使用该字段筛选所需的音乐资源。目前支持以下筛选条件："
  }, {
    heading: "jsonoption-3",
    content: "pitchType：是否支持评分。"
  }, {
    heading: "jsonoption-3",
    content: "1：支持评分的音乐资源。"
  }, {
    heading: "jsonoption-3",
    content: "2：不支持评分的音乐资源。"
  }, {
    heading: "jsonoption-3",
    content: "needHighPart：是否需要副歌片段。"
  }, {
    heading: "jsonoption-3",
    content: "true：需要副歌片段。"
  }, {
    heading: "jsonoption-3",
    content: "false：不需要副歌片段。"
  }, {
    heading: "返回值-21",
    content: "方法调用成功时，返回唯一标识该请求的 requestId。"
  }, {
    heading: "返回值-21",
    content: "方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-22",
    content: "IAgoraMusicContentCenter"
  }, {
    heading: "setplaymode",
    content: "设置音乐曲目的播放模式。"
  }, {
    heading: "setplaymode",
    content: "如果你未调用该方法设置播放模式，默认播放人声伴奏；如果音乐资源不包含人声伴奏，则播放原唱。"
  }, {
    heading: "setplaymode",
    content: "你可以通过 onMusicCollectionResult 回调获取音乐资源的详细信息，并使用该回调中的 `list` 参数查看该版权音乐支持的播放模式。"
  }, {
    heading: "适用场景",
    content: "在在线 K 歌或才艺展示等娱乐场景中，如果你需要播放由声网内容中心提供的版权音乐，可以调用该方法设置播放模式。"
  }, {
    heading: "调用时机-1",
    content: "你必须在调用 createMusicPlayer 方法之后调用该方法。"
  }, {
    heading: "mode",
    content: "播放模式，详见 MusicPlayMode。"
  }, {
    heading: "返回值-22",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-22",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-22",
    content: "-2：参数无效，请重新设置参数。"
  }, {
    heading: "所属接口类-23",
    content: "IAgoraMusicPlayer"
  }, {
    heading: "stop-22",
    content: "停止播放音乐资源。"
  }, {
    heading: "返回值-23",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-23",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-24",
    content: "IAgoraMusicPlayer"
  }, {
    heading: "unregistereventhandler",
    content: "取消注册版权音乐内容中心的事件回调。"
  }, {
    heading: "返回值-24",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-24",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-25",
    content: "IAgoraMusicContentCenter"
  }, {
    heading: "onlyricresult",
    content: "歌词下载链接回调。"
  }, {
    heading: "onlyricresult",
    content: "调用 getLyric 后，SDK 会触发该回调。"
  }, {
    heading: "触发时机",
    content: "该回调在调用 getLyric 方法后被触发。"
  }, {
    heading: "requestid",
    content: "请求 ID，用于唯一标识该请求。"
  }, {
    heading: "songcode-8",
    content: "音乐资源的编号，用于标识音乐资源。"
  }, {
    heading: "lyricurl",
    content: "歌词的下载链接。"
  }, {
    heading: "reason",
    content: "来自版权音乐内容中心的请求状态码："
  }, {
    heading: "reason",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_OK (0)：请求成功。"
  }, {
    heading: "reason",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_ERROR (1)：通用错误，无具体原因。"
  }, {
    heading: "reason",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_GATEWAY (2)：网关错误。可能原因包括："
  }, {
    heading: "reason",
    content: "当前临时 Token 已过期。请重新生成 Token。"
  }, {
    heading: "reason",
    content: "提供的 Token 无效。请确保使用的是 RTM Token。"
  }, {
    heading: "reason",
    content: "网络错误。请检查网络连接。"
  }, {
    heading: "reason",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_PERMISSION\\_AND\\_RESOURCE (3)：权限错误或音乐资源不存在。请确保项目已启用版权音乐内容中心权限。如有疑问，请联系技术支持。"
  }, {
    heading: "reason",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_INTERNAL\\_DATA\\_PARSE (4)：内部数据解析错误。请联系技术支持。"
  }, {
    heading: "reason",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_MUSIC\\_LOADING (5)：加载音乐资源时发生错误。请联系技术支持。"
  }, {
    heading: "reason",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_MUSIC\\_DECRYPTION (6)：解密音乐资源时发生错误。请联系技术支持。"
  }, {
    heading: "reason",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_HTTP\\_INTERNAL (7)：HTTP 内部错误。请稍后重试。"
  }, {
    heading: "所属接口类-26",
    content: "IMusicContentCenterEventHandler"
  }, {
    heading: "onmusicchartsresult",
    content: "获取音乐排行榜后的回调。"
  }, {
    heading: "onmusicchartsresult",
    content: "该回调在调用 getMusicCharts 后被触发。"
  }, {
    heading: "触发时机-1",
    content: "该回调在调用 getMusicCharts 方法后被触发。"
  }, {
    heading: "requestid-1",
    content: "请求 ID，用于标识此次请求的唯一标识符。"
  }, {
    heading: "list",
    content: "当前可播放的音乐排行榜列表，详见 MusicChartInfo。"
  }, {
    heading: "reason-1",
    content: "来自音乐内容中心的请求状态码："
  }, {
    heading: "reason-1",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_OK (0)：请求成功。"
  }, {
    heading: "reason-1",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_ERROR (1)：通用错误，无具体原因。"
  }, {
    heading: "reason-1",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_GATEWAY (2)：网关错误。可能原因包括："
  }, {
    heading: "reason-1",
    content: "当前 token 已过期。请重新生成 token。"
  }, {
    heading: "reason-1",
    content: "提供的 token 无效。请确保使用的是 RTM token。"
  }, {
    heading: "reason-1",
    content: "网络错误。请检查网络连接。"
  }, {
    heading: "reason-1",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_PERMISSION\\_AND\\_RESOURCE (3)：权限错误或未找到音乐资源。请确保项目已启用访问声网音乐内容中心。如有问题，请联系技术支持。"
  }, {
    heading: "reason-1",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_INTERNAL\\_DATA\\_PARSE (4)：内部数据解析错误。请联系技术支持。"
  }, {
    heading: "reason-1",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_MUSIC\\_LOADING (5)：加载音乐资源时发生错误。请联系技术支持。"
  }, {
    heading: "reason-1",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_MUSIC\\_DECRYPTION (6)：解密音乐资源时发生错误。请联系技术支持。"
  }, {
    heading: "reason-1",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_HTTP\\_INTERNAL (7)：内部 HTTP 错误。请稍后重试。"
  }, {
    heading: "所属接口类-27",
    content: "IMusicContentCenterEventHandler"
  }, {
    heading: "onmusiccollectionresult",
    content: "获取音乐资源列表的回调。"
  }, {
    heading: "onmusiccollectionresult",
    content: "该回调在调用 `getMusicCollectionByMusicChartId` 或 `searchMusic` 时触发。"
  }, {
    heading: "requestid-2",
    content: "请求 ID，用于唯一标识该请求。"
  }, {
    heading: "page-4",
    content: "当前页码，从 1 开始。"
  }, {
    heading: "pagesize-4",
    content: "每页最多返回的音乐资源数量，最大为 50。"
  }, {
    heading: "total",
    content: "音乐资源列表中的总资源数。"
  }, {
    heading: "list-1",
    content: "音乐资源列表的详细信息，详见 Music。"
  }, {
    heading: "reason-2",
    content: "来自声网音乐内容中心的请求状态码："
  }, {
    heading: "reason-2",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_OK (0)：请求成功。"
  }, {
    heading: "reason-2",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_ERROR (1)：通用错误，无具体归因。"
  }, {
    heading: "reason-2",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_GATEWAY (2)：网关错误。可能原因包括："
  }, {
    heading: "reason-2",
    content: "当前临时 Token 已过期。请重新生成临时 Token。"
  }, {
    heading: "reason-2",
    content: "提供的临时 Token 无效。请确保你使用的是 RTM Token。"
  }, {
    heading: "reason-2",
    content: "网络错误。请检查你的网络连接。"
  }, {
    heading: "reason-2",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_PERMISSION\\_AND\\_RESOURCE (3)：权限错误或未找到音乐资源。请确保你的项目已启用访问声网音乐内容中心的权限。如有问题，请联系技术支持。"
  }, {
    heading: "reason-2",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_INTERNAL\\_DATA\\_PARSE (4)：内部数据解析错误。请联系技术支持。"
  }, {
    heading: "reason-2",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_MUSIC\\_LOADING (5)：加载音乐资源时发生错误。请联系技术支持。"
  }, {
    heading: "reason-2",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_MUSIC\\_DECRYPTION (6)：解密音乐资源时发生错误。请联系技术支持。"
  }, {
    heading: "reason-2",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_HTTP\\_INTERNAL (7)：HTTP 内部错误。请稍后重试。"
  }, {
    heading: "所属接口类-28",
    content: "IMusicContentCenterEventHandler"
  }, {
    heading: "onpreloadevent",
    content: "预加载音乐资源事件的回调。"
  }, {
    heading: "onpreloadevent",
    content: "调用 `preload` 方法预加载音乐资源后，SDK 会触发该回调。"
  }, {
    heading: "触发时机-2",
    content: "该回调在调用 `preload` 方法后被触发。"
  }, {
    heading: "requestid-3",
    content: "请求 ID，用于唯一标识该请求。"
  }, {
    heading: "songcode-9",
    content: "音乐资源的 ID，用于标识一个音乐资源。"
  }, {
    heading: "percent",
    content: "音乐资源的当前加载进度，取值范围为 \\[0, 100]。"
  }, {
    heading: "lyricurl-1",
    content: "歌词的下载地址。"
  }, {
    heading: "state",
    content: "音乐资源的当前加载状态："
  }, {
    heading: "state",
    content: "0：加载完成。"
  }, {
    heading: "state",
    content: "1：加载失败。"
  }, {
    heading: "state",
    content: "2：加载中。"
  }, {
    heading: "reason-3",
    content: "来自 Music Content Center 的请求状态码："
  }, {
    heading: "reason-3",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_OK (0)：请求成功。"
  }, {
    heading: "reason-3",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_ERROR (1)：通用错误，无具体归因。"
  }, {
    heading: "reason-3",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_GATEWAY (2)：网关错误。可能原因包括："
  }, {
    heading: "reason-3",
    content: "当前临时 Token 已过期，请重新生成 Token。"
  }, {
    heading: "reason-3",
    content: "提供的 Token 无效，请确保使用的是 Token。"
  }, {
    heading: "reason-3",
    content: "网络错误，请检查网络连接。"
  }, {
    heading: "reason-3",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_PERMISSION\\_AND\\_RESOURCE (3)：权限错误或音乐资源不存在。请确保项目已启用 Music Content Center 访问权限。如有问题请联系技术支持。"
  }, {
    heading: "reason-3",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_INTERNAL\\_DATA\\_PARSE (4)：内部数据解析错误。请联系技术支持。"
  }, {
    heading: "reason-3",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_MUSIC\\_LOADING (5)：加载音乐资源时发生错误。请联系技术支持。"
  }, {
    heading: "reason-3",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_MUSIC\\_DECRYPTION (6)：解密音乐资源时发生错误。请联系技术支持。"
  }, {
    heading: "reason-3",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_HTTP\\_INTERNAL (7)：HTTP 内部错误。请稍后重试。"
  }, {
    heading: "所属接口类-29",
    content: "IMusicContentCenterEventHandler"
  }, {
    heading: "onsongsimpleinforesult",
    content: "获取音乐资源详细信息的回调。"
  }, {
    heading: "触发时机-3",
    content: "该回调在调用 getSongSimpleInfo 后被触发。"
  }, {
    heading: "requestid-4",
    content: "请求 ID，用于标识此次请求的唯一标识符。"
  }, {
    heading: "songcode-10",
    content: "音乐资源的标识符。"
  }, {
    heading: "simpleinfo",
    content: "音乐资源的相关信息，包括："
  }, {
    heading: "simpleinfo",
    content: "副歌片段的起始和结束时间（毫秒）。"
  }, {
    heading: "simpleinfo",
    content: "副歌歌词的下载链接。"
  }, {
    heading: "simpleinfo",
    content: "副歌片段的时长（毫秒）。"
  }, {
    heading: "simpleinfo",
    content: "歌曲标题。"
  }, {
    heading: "simpleinfo",
    content: "艺术家名称。"
  }, {
    heading: "reason-4",
    content: "来自音乐内容中心的请求状态码："
  }, {
    heading: "reason-4",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_OK (0)：请求成功。"
  }, {
    heading: "reason-4",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_ERROR (1)：通用错误，无具体原因。"
  }, {
    heading: "reason-4",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_GATEWAY (2)：网关错误。可能原因包括："
  }, {
    heading: "reason-4",
    content: "当前临时 Token 已过期，请生成新的 Token。"
  }, {
    heading: "reason-4",
    content: "提供的 Token 无效，请确保使用的是 RTM Token。"
  }, {
    heading: "reason-4",
    content: "网络错误，请检查网络连接。"
  }, {
    heading: "reason-4",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_PERMISSION\\_AND\\_RESOURCE (3)：权限错误或音乐资源不存在。请确保项目已启用音乐内容中心权限。如有问题，请联系技术支持。"
  }, {
    heading: "reason-4",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_INTERNAL\\_DATA\\_PARSE (4)：内部数据解析错误。请联系技术支持。"
  }, {
    heading: "reason-4",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_MUSIC\\_LOADING (5)：加载音乐资源时发生错误。请联系技术支持。"
  }, {
    heading: "reason-4",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_MUSIC\\_DECRYPTION (6)：解密音乐资源时发生错误。请联系技术支持。"
  }, {
    heading: "reason-4",
    content: "MUSIC\\_CONTENT\\_CENTER\\_STATE\\_REASON\\_HTTP\\_INTERNAL (7)：内部 HTTP 错误。请稍后重试。"
  }, {
    heading: "所属接口类-30",
    content: "IMusicContentCenterEventHandler"
  }],
  headings: [{
    id: "createmusicplayer",
    content: "createMusicPlayer"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "destroy",
    content: "destroy"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "destroy-1",
    content: "destroy"
  }, {
    id: "废弃",
    content: "`废弃`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "destroymusicplayer",
    content: "destroyMusicPlayer"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "player",
    content: "`player`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "getcaches",
    content: "getCaches"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "getinternalsongcode",
    content: "getInternalSongCode"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "songcode",
    content: "`songCode`"
  }, {
    id: "jsonoption",
    content: "`jsonOption`"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "getlyric",
    content: "getLyric"
  }, {
    id: "相关回调",
    content: "相关回调"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "songcode-1",
    content: "`songCode`"
  }, {
    id: "lyrictype",
    content: "`lyricType`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "getmusiccharts",
    content: "getMusicCharts"
  }, {
    id: "相关回调-1",
    content: "相关回调"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "getmusiccollectionbymusicchartid-12",
    content: "getMusicCollectionByMusicChartId [1/2]"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "musicchartid",
    content: "`musicChartId`"
  }, {
    id: "page",
    content: "`page`"
  }, {
    id: "pagesize",
    content: "`pageSize`"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "getmusiccollectionbymusicchartid-22",
    content: "getMusicCollectionByMusicChartId [2/2]"
  }, {
    id: "相关回调-2",
    content: "相关回调"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "musicchartid-1",
    content: "`musicChartId`"
  }, {
    id: "page-1",
    content: "`page`"
  }, {
    id: "pagesize-1",
    content: "`pageSize`"
  }, {
    id: "jsonoption-1",
    content: "`jsonOption`"
  }, {
    id: "返回值-8",
    content: "返回值"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }, {
    id: "getplaysrc-22",
    content: "getPlaySrc [2/2]"
  }, {
    id: "返回值-9",
    content: "返回值"
  }, {
    id: "所属接口类-10",
    content: "所属接口类"
  }, {
    id: "getsongsimpleinfo",
    content: "getSongSimpleInfo"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "songcode-2",
    content: "`songCode`"
  }, {
    id: "返回值-10",
    content: "返回值"
  }, {
    id: "所属接口类-11",
    content: "所属接口类"
  }, {
    id: "initialize",
    content: "initialize"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "configuration",
    content: "`configuration`"
  }, {
    id: "返回值-11",
    content: "返回值"
  }, {
    id: "所属接口类-12",
    content: "所属接口类"
  }, {
    id: "ispreloaded",
    content: "isPreloaded"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "songcode-3",
    content: "`songCode`"
  }, {
    id: "返回值-12",
    content: "返回值"
  }, {
    id: "所属接口类-13",
    content: "所属接口类"
  }, {
    id: "open-22",
    content: "open [2/2]"
  }, {
    id: "相关回调-3",
    content: "相关回调"
  }, {
    id: "参数-8",
    content: "参数"
  }, {
    id: "url",
    content: "`url`"
  }, {
    id: "startpos",
    content: "`startPos`"
  }, {
    id: "返回值-13",
    content: "返回值"
  }, {
    id: "所属接口类-14",
    content: "所属接口类"
  }, {
    id: "open-12",
    content: "open [1/2]"
  }, {
    id: "相关回调-4",
    content: "相关回调"
  }, {
    id: "参数-9",
    content: "参数"
  }, {
    id: "songcode-4",
    content: "`songCode`"
  }, {
    id: "startpos-1",
    content: "`startPos`"
  }, {
    id: "返回值-14",
    content: "返回值"
  }, {
    id: "所属接口类-15",
    content: "所属接口类"
  }, {
    id: "preload-12",
    content: "preload [1/2]"
  }, {
    id: "废弃-1",
    content: "`废弃`"
  }, {
    id: "参数-10",
    content: "参数"
  }, {
    id: "songcode-5",
    content: "`songCode`"
  }, {
    id: "jsonoption-2",
    content: "`jsonOption`"
  }, {
    id: "返回值-15",
    content: "返回值"
  }, {
    id: "所属接口类-16",
    content: "所属接口类"
  }, {
    id: "preload-22",
    content: "preload [2/2]"
  }, {
    id: "参数-11",
    content: "参数"
  }, {
    id: "songcode-6",
    content: "`songCode`"
  }, {
    id: "返回值-16",
    content: "返回值"
  }, {
    id: "所属接口类-17",
    content: "所属接口类"
  }, {
    id: "registereventhandler",
    content: "registerEventHandler"
  }, {
    id: "参数-12",
    content: "参数"
  }, {
    id: "eventhandler",
    content: "`eventHandler`"
  }, {
    id: "返回值-17",
    content: "返回值"
  }, {
    id: "所属接口类-18",
    content: "所属接口类"
  }, {
    id: "removecache",
    content: "removeCache"
  }, {
    id: "参数-13",
    content: "参数"
  }, {
    id: "songcode-7",
    content: "`songCode`"
  }, {
    id: "返回值-18",
    content: "返回值"
  }, {
    id: "所属接口类-19",
    content: "所属接口类"
  }, {
    id: "renewtoken",
    content: "renewToken"
  }, {
    id: "参数-14",
    content: "参数"
  }, {
    id: "token",
    content: "`token`"
  }, {
    id: "返回值-19",
    content: "返回值"
  }, {
    id: "所属接口类-20",
    content: "所属接口类"
  }, {
    id: "searchmusic-12",
    content: "searchMusic [1/2]"
  }, {
    id: "参数-15",
    content: "参数"
  }, {
    id: "keyword",
    content: "`keyword`"
  }, {
    id: "page-2",
    content: "`page`"
  }, {
    id: "pagesize-2",
    content: "`pageSize`"
  }, {
    id: "返回值-20",
    content: "返回值"
  }, {
    id: "所属接口类-21",
    content: "所属接口类"
  }, {
    id: "searchmusic-22",
    content: "searchMusic [2/2]"
  }, {
    id: "相关回调-5",
    content: "相关回调"
  }, {
    id: "参数-16",
    content: "参数"
  }, {
    id: "keyword-1",
    content: "`keyword`"
  }, {
    id: "page-3",
    content: "`page`"
  }, {
    id: "pagesize-3",
    content: "`pageSize`"
  }, {
    id: "jsonoption-3",
    content: "`jsonOption`"
  }, {
    id: "返回值-21",
    content: "返回值"
  }, {
    id: "所属接口类-22",
    content: "所属接口类"
  }, {
    id: "setplaymode",
    content: "setPlayMode"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "参数-17",
    content: "参数"
  }, {
    id: "mode",
    content: "`mode`"
  }, {
    id: "返回值-22",
    content: "返回值"
  }, {
    id: "所属接口类-23",
    content: "所属接口类"
  }, {
    id: "stop-22",
    content: "stop [2/2]"
  }, {
    id: "返回值-23",
    content: "返回值"
  }, {
    id: "所属接口类-24",
    content: "所属接口类"
  }, {
    id: "unregistereventhandler",
    content: "unregisterEventHandler"
  }, {
    id: "返回值-24",
    content: "返回值"
  }, {
    id: "所属接口类-25",
    content: "所属接口类"
  }, {
    id: "onlyricresult",
    content: "onLyricResult"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-18",
    content: "参数"
  }, {
    id: "requestid",
    content: "`requestId`"
  }, {
    id: "songcode-8",
    content: "`songCode`"
  }, {
    id: "lyricurl",
    content: "`lyricUrl`"
  }, {
    id: "reason",
    content: "`reason`"
  }, {
    id: "所属接口类-26",
    content: "所属接口类"
  }, {
    id: "onmusicchartsresult",
    content: "onMusicChartsResult"
  }, {
    id: "触发时机-1",
    content: "触发时机"
  }, {
    id: "参数-19",
    content: "参数"
  }, {
    id: "requestid-1",
    content: "`requestId`"
  }, {
    id: "list",
    content: "`list`"
  }, {
    id: "reason-1",
    content: "`reason`"
  }, {
    id: "所属接口类-27",
    content: "所属接口类"
  }, {
    id: "onmusiccollectionresult",
    content: "onMusicCollectionResult"
  }, {
    id: "参数-20",
    content: "参数"
  }, {
    id: "requestid-2",
    content: "`requestId`"
  }, {
    id: "page-4",
    content: "`page`"
  }, {
    id: "pagesize-4",
    content: "`pageSize`"
  }, {
    id: "total",
    content: "`total`"
  }, {
    id: "list-1",
    content: "`list`"
  }, {
    id: "reason-2",
    content: "`reason`"
  }, {
    id: "所属接口类-28",
    content: "所属接口类"
  }, {
    id: "onpreloadevent",
    content: "onPreLoadEvent"
  }, {
    id: "触发时机-2",
    content: "触发时机"
  }, {
    id: "参数-21",
    content: "参数"
  }, {
    id: "requestid-3",
    content: "`requestId`"
  }, {
    id: "songcode-9",
    content: "`songCode`"
  }, {
    id: "percent",
    content: "`percent`"
  }, {
    id: "lyricurl-1",
    content: "`lyricUrl`"
  }, {
    id: "state",
    content: "`state`"
  }, {
    id: "reason-3",
    content: "`reason`"
  }, {
    id: "所属接口类-29",
    content: "所属接口类"
  }, {
    id: "onsongsimpleinforesult",
    content: "onSongSimpleInfoResult"
  }, {
    id: "触发时机-3",
    content: "触发时机"
  }, {
    id: "参数-22",
    content: "参数"
  }, {
    id: "requestid-4",
    content: "`requestId`"
  }, {
    id: "songcode-10",
    content: "`songCode`"
  }, {
    id: "simpleinfo",
    content: "`simpleInfo`"
  }, {
    id: "reason-4",
    content: "`reason`"
  }, {
    id: "所属接口类-30",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#createmusicplayer",
  title: _jsx(_Fragment, {
    children: "createMusicPlayer"
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
  url: "#destroy",
  title: _jsx(_Fragment, {
    children: "destroy"
  })
}, {
  depth: 3,
  url: "#所属接口类-1",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#destroy-1",
  title: _jsx(_Fragment, {
    children: "destroy"
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
  url: "#destroymusicplayer",
  title: _jsx(_Fragment, {
    children: "destroyMusicPlayer"
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
  url: "#player",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "player"
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
  url: "#getcaches",
  title: _jsx(_Fragment, {
    children: "getCaches"
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
  url: "#getinternalsongcode",
  title: _jsx(_Fragment, {
    children: "getInternalSongCode"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#songcode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "songCode"
    })
  })
}, {
  depth: 4,
  url: "#jsonoption",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "jsonOption"
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
  url: "#getlyric",
  title: _jsx(_Fragment, {
    children: "getLyric"
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
  url: "#songcode-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "songCode"
    })
  })
}, {
  depth: 4,
  url: "#lyrictype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "lyricType"
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
  url: "#getmusiccharts",
  title: _jsx(_Fragment, {
    children: "getMusicCharts"
  })
}, {
  depth: 3,
  url: "#相关回调-1",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#返回值-6",
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
  url: "#getmusiccollectionbymusicchartid-12",
  title: _jsx(_Fragment, {
    children: "getMusicCollectionByMusicChartId [1/2]"
  })
}, {
  depth: 3,
  url: "#参数-3",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#musicchartid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "musicChartId"
    })
  })
}, {
  depth: 4,
  url: "#page",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "page"
    })
  })
}, {
  depth: 4,
  url: "#pagesize",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pageSize"
    })
  })
}, {
  depth: 3,
  url: "#返回值-7",
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
  url: "#getmusiccollectionbymusicchartid-22",
  title: _jsx(_Fragment, {
    children: "getMusicCollectionByMusicChartId [2/2]"
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
  url: "#musicchartid-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "musicChartId"
    })
  })
}, {
  depth: 4,
  url: "#page-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "page"
    })
  })
}, {
  depth: 4,
  url: "#pagesize-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pageSize"
    })
  })
}, {
  depth: 4,
  url: "#jsonoption-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "jsonOption"
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
  url: "#所属接口类-9",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#getplaysrc-22",
  title: _jsx(_Fragment, {
    children: "getPlaySrc [2/2]"
  })
}, {
  depth: 3,
  url: "#返回值-9",
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
  url: "#getsongsimpleinfo",
  title: _jsx(_Fragment, {
    children: "getSongSimpleInfo"
  })
}, {
  depth: 3,
  url: "#参数-5",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#songcode-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "songCode"
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
  url: "#所属接口类-11",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#initialize",
  title: _jsx(_Fragment, {
    children: "initialize"
  })
}, {
  depth: 3,
  url: "#参数-6",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#configuration",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "configuration"
    })
  })
}, {
  depth: 3,
  url: "#返回值-11",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-12",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#ispreloaded",
  title: _jsx(_Fragment, {
    children: "isPreloaded"
  })
}, {
  depth: 3,
  url: "#参数-7",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#songcode-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "songCode"
    })
  })
}, {
  depth: 3,
  url: "#返回值-12",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-13",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#open-22",
  title: _jsx(_Fragment, {
    children: "open [2/2]"
  })
}, {
  depth: 3,
  url: "#相关回调-3",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#参数-8",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#url",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "url"
    })
  })
}, {
  depth: 4,
  url: "#startpos",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "startPos"
    })
  })
}, {
  depth: 3,
  url: "#返回值-13",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-14",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#open-12",
  title: _jsx(_Fragment, {
    children: "open [1/2]"
  })
}, {
  depth: 3,
  url: "#相关回调-4",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#参数-9",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#songcode-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "songCode"
    })
  })
}, {
  depth: 4,
  url: "#startpos-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "startPos"
    })
  })
}, {
  depth: 3,
  url: "#返回值-14",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-15",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#preload-12",
  title: _jsx(_Fragment, {
    children: "preload [1/2]"
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
  url: "#参数-10",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#songcode-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "songCode"
    })
  })
}, {
  depth: 4,
  url: "#jsonoption-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "jsonOption"
    })
  })
}, {
  depth: 3,
  url: "#返回值-15",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-16",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#preload-22",
  title: _jsx(_Fragment, {
    children: "preload [2/2]"
  })
}, {
  depth: 3,
  url: "#参数-11",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#songcode-6",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "songCode"
    })
  })
}, {
  depth: 3,
  url: "#返回值-16",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-17",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#registereventhandler",
  title: _jsx(_Fragment, {
    children: "registerEventHandler"
  })
}, {
  depth: 3,
  url: "#参数-12",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#eventhandler",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "eventHandler"
    })
  })
}, {
  depth: 3,
  url: "#返回值-17",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-18",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#removecache",
  title: _jsx(_Fragment, {
    children: "removeCache"
  })
}, {
  depth: 3,
  url: "#参数-13",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#songcode-7",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "songCode"
    })
  })
}, {
  depth: 3,
  url: "#返回值-18",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-19",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#renewtoken",
  title: _jsx(_Fragment, {
    children: "renewToken"
  })
}, {
  depth: 3,
  url: "#参数-14",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#token",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "token"
    })
  })
}, {
  depth: 3,
  url: "#返回值-19",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-20",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#searchmusic-12",
  title: _jsx(_Fragment, {
    children: "searchMusic [1/2]"
  })
}, {
  depth: 3,
  url: "#参数-15",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#keyword",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "keyword"
    })
  })
}, {
  depth: 4,
  url: "#page-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "page"
    })
  })
}, {
  depth: 4,
  url: "#pagesize-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pageSize"
    })
  })
}, {
  depth: 3,
  url: "#返回值-20",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-21",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#searchmusic-22",
  title: _jsx(_Fragment, {
    children: "searchMusic [2/2]"
  })
}, {
  depth: 3,
  url: "#相关回调-5",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#参数-16",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#keyword-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "keyword"
    })
  })
}, {
  depth: 4,
  url: "#page-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "page"
    })
  })
}, {
  depth: 4,
  url: "#pagesize-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pageSize"
    })
  })
}, {
  depth: 4,
  url: "#jsonoption-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "jsonOption"
    })
  })
}, {
  depth: 3,
  url: "#返回值-21",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-22",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setplaymode",
  title: _jsx(_Fragment, {
    children: "setPlayMode"
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
  url: "#参数-17",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#mode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mode"
    })
  })
}, {
  depth: 3,
  url: "#返回值-22",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-23",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#stop-22",
  title: _jsx(_Fragment, {
    children: "stop [2/2]"
  })
}, {
  depth: 3,
  url: "#返回值-23",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-24",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#unregistereventhandler",
  title: _jsx(_Fragment, {
    children: "unregisterEventHandler"
  })
}, {
  depth: 3,
  url: "#返回值-24",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-25",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onlyricresult",
  title: _jsx(_Fragment, {
    children: "onLyricResult"
  })
}, {
  depth: 3,
  url: "#触发时机",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-18",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#requestid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "requestId"
    })
  })
}, {
  depth: 4,
  url: "#songcode-8",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "songCode"
    })
  })
}, {
  depth: 4,
  url: "#lyricurl",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "lyricUrl"
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
  url: "#所属接口类-26",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onmusicchartsresult",
  title: _jsx(_Fragment, {
    children: "onMusicChartsResult"
  })
}, {
  depth: 3,
  url: "#触发时机-1",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-19",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#requestid-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "requestId"
    })
  })
}, {
  depth: 4,
  url: "#list",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "list"
    })
  })
}, {
  depth: 4,
  url: "#reason-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "reason"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-27",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onmusiccollectionresult",
  title: _jsx(_Fragment, {
    children: "onMusicCollectionResult"
  })
}, {
  depth: 3,
  url: "#参数-20",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#requestid-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "requestId"
    })
  })
}, {
  depth: 4,
  url: "#page-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "page"
    })
  })
}, {
  depth: 4,
  url: "#pagesize-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pageSize"
    })
  })
}, {
  depth: 4,
  url: "#total",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "total"
    })
  })
}, {
  depth: 4,
  url: "#list-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "list"
    })
  })
}, {
  depth: 4,
  url: "#reason-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "reason"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-28",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onpreloadevent",
  title: _jsx(_Fragment, {
    children: "onPreLoadEvent"
  })
}, {
  depth: 3,
  url: "#触发时机-2",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-21",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#requestid-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "requestId"
    })
  })
}, {
  depth: 4,
  url: "#songcode-9",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "songCode"
    })
  })
}, {
  depth: 4,
  url: "#percent",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "percent"
    })
  })
}, {
  depth: 4,
  url: "#lyricurl-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "lyricUrl"
    })
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
  url: "#reason-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "reason"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-29",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onsongsimpleinforesult",
  title: _jsx(_Fragment, {
    children: "onSongSimpleInfoResult"
  })
}, {
  depth: 3,
  url: "#触发时机-3",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-22",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#requestid-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "requestId"
    })
  })
}, {
  depth: 4,
  url: "#songcode-10",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "songCode"
    })
  })
}, {
  depth: 4,
  url: "#simpleinfo",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "simpleInfo"
    })
  })
}, {
  depth: 4,
  url: "#reason-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "reason"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-30",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
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
      id: "toc_drm"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_createmusicplayer"
    }), `
`, _jsx(_components.h2, {
      id: "createmusicplayer",
      children: "createMusicPlayer"
    }), `
`, _jsx(_components.p, {
      children: "创建一个音乐播放器。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_createmusicplayer__prototype"
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
              children: " IAgoraMusicPlayer "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "createMusicPlayer"
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
      id: "api_imusiccontentcenter_createmusicplayer__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "如果你需要播放来自音乐内容中心的音乐资源，必须先调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_createmusicplayer__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回 IAgoraMusicPlayer 对象。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回 null。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
          children: "IAgoraMusicContentCenter"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_destroy_imusiccontentcenter"
    }), `
`, _jsx(_components.h2, {
      id: "destroy",
      children: "destroy"
    }), `
`, _jsx(_components.p, {
      children: "销毁 IAgoraMusicContentCenter 实例。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_destroy_imusiccontentcenter__prototype"
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
      id: "api_imusiccontentcenter_destroy_imusiccontentcenter__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_destroy_imusiccontentcenter",
        children: "destroy"
      }), " 方法之前调用该方法。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-1",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
          children: "IAgoraMusicContentCenter"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_destroy_imusicplayer"
    }), `
`, _jsx(_components.h2, {
      id: "destroy-1",
      children: "destroy"
    }), `
`, _jsx(_components.p, {
      children: "销毁音乐播放器。"
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_destroy_imusicplayer__prototype"
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
              children: "Deprecated"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " @"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "Override"
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
              children: " destroy"
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
      id: "api_imusicplayer_destroy_imusicplayer__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃，请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_destroymusicplayer",
        children: "destroyMusicPlayer"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_destroy_imusicplayer__return_values"
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
      id: "所属接口类-2",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusicplayer",
          children: "IAgoraMusicPlayer"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_destroymusicplayer"
    }), `
`, _jsx(_components.h2, {
      id: "destroymusicplayer",
      children: "destroyMusicPlayer"
    }), `
`, _jsx(_components.p, {
      children: "销毁音乐播放器对象。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_destroymusicplayer__prototype"
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
              children: " destroyMusicPlayer"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(IAgoraMusicPlayer player);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_destroymusicplayer__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["如果在销毁后需要再次使用音乐播放器，必须调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_createmusicplayer",
        children: "createMusicPlayer"
      }), " 方法重新创建。"]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_destroymusicplayer__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以在加入频道前或加入频道后调用此方法，但必须确保在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_destroy_imusiccontentcenter",
        children: "destroy"
      }), " 方法之前调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_destroymusicplayer__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "player",
      children: _jsx(_components.code, {
        children: "player"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音乐播放器对象。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusicplayer",
        children: "IAgoraMusicPlayer"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_destroymusicplayer__return_values"
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
      id: "所属接口类-3",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
          children: "IAgoraMusicContentCenter"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getcaches"
    }), `
`, _jsx(_components.h2, {
      id: "getcaches",
      children: "getCaches"
    }), `
`, _jsx(_components.p, {
      children: "获取已缓存的音乐资源信息。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getcaches__prototype"
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
              children: " MusicCacheInfo"
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
              children: "getCaches"
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
      id: "api_imusiccontentcenter_getcaches__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用该方法前，你需要预先分配内存空间，用于存储已缓存音乐资源的信息。如果需要设置可缓存的音乐资源数量，可以通过 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_initialize_imusiccontentcenter",
        children: "initialize"
      }), " 的 ", _jsx(_components.code, {
        children: "configuration"
      }), " 参数进行配置。当不再需要这些缓存的音乐资源时，应及时释放内存，避免内存泄漏。"]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getcaches__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-3",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回包含 MusicCacheInfo 对象的数组。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回 null。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
          children: "IAgoraMusicContentCenter"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getinternalsongcode"
    }), `
`, _jsx(_components.h2, {
      id: "getinternalsongcode",
      children: "getInternalSongCode"
    }), `
`, _jsx(_components.p, {
      children: "创建音乐资源副歌片段的内部标识符。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getinternalsongcode__prototype"
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
              children: " long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " getInternalSongCode"
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
              children: " songCode, String jsonOption);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getinternalsongcode__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["在播放音乐资源的副歌片段前，需调用该方法，结合音乐资源的 ", _jsx(_components.code, {
        children: "songCode"
      }), " 和 ", _jsx(_components.code, {
        children: "jsonOption"
      }), " 参数创建副歌片段的内部标识符。该标识符作为资源的唯一引用。在调用相关方法以打开、预加载或移除资源时，应将该标识符作为 ", _jsx(_components.code, {
        children: "songCode"
      }), " 参数传入。"]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getinternalsongcode__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "songcode",
      children: _jsx(_components.code, {
        children: "songCode"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音乐资源的标识符。可通过调用 ", _jsx(_components.code, {
        children: "getMusicCollectionByMusicChartId"
      }), " 或 ", _jsx(_components.code, {
        children: "searchMusic"
      }), " 获取，并从这两个方法触发的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult",
        children: "onMusicCollectionResult"
      }), " 回调中获取 ", _jsx(_components.code, {
        children: "songCode"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "jsonoption",
      children: _jsx(_components.code, {
        children: "jsonOption"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "sceneType"
          }), " 会影响计费方式。不同频道场景的计费标准不同，详见计费文档。若需切换频道场景，必须使用新的 ", _jsx(_components.code, {
            children: "sceneType"
          }), " 值重新调用该方法。"]
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["扩展 JSON 字段，默认为 ", _jsx(_components.code, {
        children: "null"
      }), "。目前支持以下字段："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ['sceneType：场景类型。1：直播场景，在线 K 歌房和背景音乐播放；2：直播场景，背景音乐播放；3：（默认）声动语聊场景，在线 K 歌房；4：声动语聊场景，背景音乐播放；5：VR 场景，在线 K 歌房和背景音乐播放。示例： {"sceneType"', _jsx(_components.div, {}), "}。"]
      }), `
`, _jsx(_components.li, {
        children: 'highPart：副歌片段的索引，从 onMusicCollectionResult 回调中获取，索引从 0 开始。示例： {"format": {"highpart": 0}}。'
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getinternalsongcode__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-4",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回创建的音乐资源内部标识符。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
          children: "IAgoraMusicContentCenter"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getlyric"
    }), `
`, _jsx(_components.h2, {
      id: "getlyric",
      children: "getLyric"
    }), `
`, _jsx(_components.p, {
      children: "获取音乐资源歌词的下载链接。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getlyric__prototype"
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
              children: "getLyric"
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
              children: " songCode, "
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
              children: " lyricType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getlyric__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getlyric__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onlyricresult",
        children: "onLyricResult"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getlyric__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "songcode-1",
      children: _jsx(_components.code, {
        children: "songCode"
      })
    }), `
`, _jsx(_components.p, {
      children: "指定音乐资源的标识符。"
    }), `
`, _jsx(_components.h4, {
      id: "lyrictype",
      children: _jsx(_components.code, {
        children: "lyricType"
      })
    }), `
`, _jsx(_components.p, {
      children: "歌词格式类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：xml 格式。"
      }), `
`, _jsx(_components.li, {
        children: "1：lrc 格式。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getlyric__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-5",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功时，返回唯一标识该请求的 requestId。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回空字符串。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
          children: "IAgoraMusicContentCenter"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getmusiccharts"
    }), `
`, _jsx(_components.h2, {
      id: "getmusiccharts",
      children: "getMusicCharts"
    }), `
`, _jsx(_components.p, {
      children: "获取所有音乐排行榜。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getmusiccharts__prototype"
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
              children: "getMusicCharts"
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
      id: "api_imusiccontentcenter_getmusiccharts__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法时，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusicchartsresult",
        children: "onMusicChartsResult"
      }), " 回调，返回音乐排行榜的详细信息。"]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getmusiccharts__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-1",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法调用后会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusicchartsresult",
        children: "onMusicChartsResult"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getmusiccharts__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-6",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功时，返回请求的唯一标识符 requestId。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回空字符串。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
          children: "IAgoraMusicContentCenter"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getmusiccollectionbymusicchartid"
    }), `
`, _jsx(_components.h2, {
      id: "getmusiccollectionbymusicchartid-12",
      children: "getMusicCollectionByMusicChartId [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "根据音乐榜单 ID 获取音乐资源列表。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getmusiccollectionbymusicchartid__prototype"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getMusicCollectionByMusicChartId"
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
              children: " musicChartId, "
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
              children: " page, "
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
              children: " pageSize)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getmusiccollectionbymusicchartid__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult",
        children: "onMusicCollectionResult"
      }), " 回调，返回榜单中的音乐资源详细信息。"]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getmusiccollectionbymusicchartid__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "musicchartid",
      children: _jsx(_components.code, {
        children: "musicChartId"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音乐榜单的 ID，可通过 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusicchartsresult",
        children: "onMusicChartsResult"
      }), " 回调获取。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "你也可以使用 RESTful API 获取“音乐库完整歌曲列表”或“增量歌曲列表”。"
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "page",
      children: _jsx(_components.code, {
        children: "page"
      })
    }), `
`, _jsx(_components.p, {
      children: "当前页码，默认从 1 开始。"
    }), `
`, _jsx(_components.h4, {
      id: "pagesize",
      children: _jsx(_components.code, {
        children: "pageSize"
      })
    }), `
`, _jsx(_components.p, {
      children: "当前音乐资源列表中的总页数，最大值为 50。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getmusiccollectionbymusicchartid__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-7",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功时，返回唯一标识此次请求的 requestId。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回空字符串。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
          children: "IAgoraMusicContentCenter"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getmusiccollectionbymusicchartid2"
    }), `
`, _jsx(_components.h2, {
      id: "getmusiccollectionbymusicchartid-22",
      children: "getMusicCollectionByMusicChartId [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "根据音乐榜单 ID 获取音乐资源列表。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getmusiccollectionbymusicchartid2__prototype"
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
              children: "getMusicCollectionByMusicChartId"
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
              children: " musicChartId, "
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
              children: " page, "
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
              children: " pageSize, String jsonOption);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getmusiccollectionbymusicchartid2__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult",
        children: "onMusicCollectionResult"
      }), " 回调，返回榜单中的音乐资源详细信息。"]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getmusiccollectionbymusicchartid2__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-2",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult",
        children: "onMusicCollectionResult"
      }), " 回调，返回榜单中的音乐资源详细信息。"]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getmusiccollectionbymusicchartid2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "musicchartid-1",
      children: _jsx(_components.code, {
        children: "musicChartId"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音乐榜单的 ID。可通过 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusicchartsresult",
        children: "onMusicChartsResult"
      }), " 回调获取。你也可以使用 RESTful API 获取完整音乐库列表或增量音乐列表。"]
    }), `
`, _jsx(_components.h4, {
      id: "page-1",
      children: _jsx(_components.code, {
        children: "page"
      })
    }), `
`, _jsx(_components.p, {
      children: "当前页码，从 1 开始。"
    }), `
`, _jsx(_components.h4, {
      id: "pagesize-1",
      children: _jsx(_components.code, {
        children: "pageSize"
      })
    }), `
`, _jsx(_components.p, {
      children: "每页返回的音乐资源数量，最大值为 50。"
    }), `
`, _jsx(_components.h4, {
      id: "jsonoption-1",
      children: _jsx(_components.code, {
        children: "jsonOption"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["可选的 JSON 扩展字段，默认为 ", _jsx(_components.code, {
        children: "null"
      }), "。你可以使用该字段筛选所需的音乐资源。目前支持以下筛选项："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["pitchType：音乐资源是否支持评分。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "1：可评分音乐资源。"
          }), `
`, _jsx(_components.li, {
            children: "2：不可评分音乐资源。"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["needHighPart：是否需要合唱片段资源。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "true：需要合唱片段。"
          }), `
`, _jsx(_components.li, {
            children: "false：不需要合唱片段。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["示例： ", _jsx(_components.code, {
        children: '{"pitchType":1}'
      }), "， ", _jsx(_components.code, {
        children: '{"needHighPart":true}'
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getmusiccollectionbymusicchartid2__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-8",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功时，返回请求的唯一标识符 requestId。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回空字符串。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
          children: "IAgoraMusicContentCenter"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_getplaysrc"
    }), `
`, _jsx(_components.h2, {
      id: "getplaysrc-22",
      children: "getPlaySrc [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "获取当前播放的音乐资源的标识符或 URL。"
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_getplaysrc__prototype"
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
              children: "Override"
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
              children: "getPlaySrc"
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
      id: "api_imusicplayer_getplaysrc__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你需要在打开音乐资源后调用此方法："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果使用 open(Uri uri, long startPos) 打开音乐资源，该方法返回音乐资源的标识符（songCode ）。"
      }), `
`, _jsx(_components.li, {
        children: "如果使用 open(String url, long startPos) 打开音乐资源，该方法返回音乐资源的 URL。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_getplaysrc__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-9",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功时，返回音乐资源的标识符或 URL。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回空字符串。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusicplayer",
          children: "IAgoraMusicPlayer"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getsongsimpleinfo"
    }), `
`, _jsx(_components.h2, {
      id: "getsongsimpleinfo",
      children: "getSongSimpleInfo"
    }), `
`, _jsx(_components.p, {
      children: "检索特定音乐资源的详细信息。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getsongsimpleinfo__prototype"
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
              children: "getSongSimpleInfo"
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
              children: " songCode);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getsongsimpleinfo__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用该方法前，你需要先获取目标音乐资源的标识符。你可以通过调用 ", _jsx(_components.code, {
        children: "getMusicCollectionByMusicChartId"
      }), " 或 ", _jsx(_components.code, {
        children: "searchMusic"
      }), " 方法获取音乐资源，并通过触发的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult",
        children: "onMusicCollectionResult"
      }), " 回调获取音乐资源标识符（", _jsx(_components.code, {
        children: "songCode"
      }), " ）。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["成功调用该方法后，SDK 会触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onsongsimpleinforesult",
            children: "onSongSimpleInfoResult"
          }), " 回调，报告音乐资源的详细信息。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getsongsimpleinfo__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "songcode-2",
      children: _jsx(_components.code, {
        children: "songCode"
      })
    }), `
`, _jsx(_components.p, {
      children: "音乐资源的标识符，用于指定要查询的音乐资源。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_getsongsimpleinfo__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-10",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功时，返回唯一标识此次请求的 requestId。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回空字符串。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-11",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
          children: "IAgoraMusicContentCenter"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_initialize_imusiccontentcenter"
    }), `
`, _jsx(_components.h2, {
      id: "initialize",
      children: "initialize"
    }), `
`, _jsx(_components.p, {
      children: "初始化 IAgoraMusicContentCenter。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_initialize_imusiccontentcenter__prototype"
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
              children: " initialize"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(MusicContentCenterConfiguration configuration);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_initialize_imusiccontentcenter__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_initialize_imusiccontentcenter",
        children: "initialize"
      }), " 方法前，必须先进行初始化，才能调用其他方法。"]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_initialize_imusiccontentcenter__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "configuration",
      children: _jsx(_components.code, {
        children: "configuration"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
        children: "IAgoraMusicContentCenter"
      }), " 的配置参数。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-musiccontentcenterconfiguration",
        children: "MusicContentCenterConfiguration"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_initialize_imusiccontentcenter__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-11",
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
      id: "所属接口类-12",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
          children: "IAgoraMusicContentCenter"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_ispreloaded"
    }), `
`, _jsx(_components.h2, {
      id: "ispreloaded",
      children: "isPreloaded"
    }), `
`, _jsx(_components.p, {
      children: "检查指定音乐资源是否已预加载。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_ispreloaded__prototype"
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
              children: " isPreloaded"
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
              children: " songCode);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_ispreloaded__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法为同步调用。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_ispreloaded__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-7",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "songcode-3",
      children: _jsx(_components.code, {
        children: "songCode"
      })
    }), `
`, _jsx(_components.p, {
      children: "音乐资源的标识符。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_ispreloaded__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-12",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：方法调用成功，音乐资源已预加载。"
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
      id: "所属接口类-13",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
          children: "IAgoraMusicContentCenter"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_open2_imusicplayer"
    }), `
`, _jsx(_components.h2, {
      id: "open-22",
      children: "open [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "通过 URL 打开音乐资源。"
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_open2_imusicplayer__prototype"
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
              children: " open"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String url, "
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
              children: " startPos)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_open2_imusicplayer__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged",
        children: "onPlayerStateChanged"
      }), " 回调。在收到播放状态为 ", _jsx(_components.code, {
        children: "OPEN_COMPLETED"
      }), " 的上报后，你可以调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_play_player",
        children: "play"
      }), " 方法播放媒体文件。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果你要打开的音乐资源受数字版权保护，必须使用此方法打开。对于不受数字版权保护的音乐资源，你可以选择使用此方法，或使用 ", _jsx(_components.code, {
            children: "open"
          }), " 方法打开。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_open2_imusicplayer__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-3",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged",
        children: "onPlayerStateChanged"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_open2_imusicplayer__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-8",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "url",
      children: _jsx(_components.code, {
        children: "url"
      })
    }), `
`, _jsx(_components.p, {
      children: "音乐资源的路径，支持本地文件和在线文件。"
    }), `
`, _jsx(_components.h4, {
      id: "startpos",
      children: _jsx(_components.code, {
        children: "startPos"
      })
    }), `
`, _jsx(_components.p, {
      children: "播放起始位置，单位为毫秒。（默认值为 0。）"
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_open2_imusicplayer__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-13",
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
        }), "了解详情和解决建议。详见 错误码 获取详细信息和排查建议。"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-14",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusicplayer",
          children: "IAgoraMusicPlayer"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_open_imusicplayer"
    }), `
`, _jsx(_components.h2, {
      id: "open-12",
      children: "open [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "通过资源 ID 打开音乐资源。"
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_open_imusicplayer__prototype"
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
              children: " open"
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
              children: " songCode, "
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
              children: " startPos);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_open_imusicplayer__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法后，将触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged",
        children: "onPlayerStateChanged"
      }), " 回调。当你收到 ", _jsx(_components.code, {
        children: "OPEN_COMPLETED"
      }), " 状态后，可以调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_play_player",
        children: "play"
      }), " 方法播放媒体文件。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果要打开的音乐资源受数字版权管理保护，必须使用该方法。对于未受数字版权管理保护的音乐资源，可以使用该方法或 ", _jsx(_components.code, {
            children: "open"
          }), " 方法（参数为 ", _jsx(_components.code, {
            children: "String url, long startPos"
          }), " ）。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_open_imusicplayer__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-4",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法后，将触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged",
        children: "onPlayerStateChanged"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_open_imusicplayer__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-9",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "songcode-4",
      children: _jsx(_components.code, {
        children: "songCode"
      })
    }), `
`, _jsx(_components.p, {
      children: "音乐资源的资源 ID，用于标识音乐。"
    }), `
`, _jsx(_components.h4, {
      id: "startpos-1",
      children: _jsx(_components.code, {
        children: "startPos"
      })
    }), `
`, _jsx(_components.p, {
      children: "起始播放位置，单位为毫秒。（默认值为 0）"
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_open_imusicplayer__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-14",
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
      id: "所属接口类-15",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusicplayer",
          children: "IAgoraMusicPlayer"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_preload"
    }), `
`, _jsx(_components.h2, {
      id: "preload-12",
      children: "preload [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "预加载音乐资源。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_preload__prototype"
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
              children: " preload"
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
              children: " songCode, String jsonOption)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_preload__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-1",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃，请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_preload2",
        children: "preload [2/2]"
      }), "。"]
    }), `
`, _jsxs(_components.p, {
      children: ["调用成功后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onpreloadevent_imusiccontentcentereventhandler",
        children: "onPreLoadEvent"
      }), " 回调报告预加载事件。在调用该方法前，你需要先调用 ", _jsx(_components.code, {
        children: "getMusicCollectionByMusicChartId"
      }), " 或 ", _jsx(_components.code, {
        children: "searchMusic"
      }), " 获取音乐资源，并从 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult",
        children: "onMusicCollectionResult"
      }), " 回调中获取资源标识符（", _jsx(_components.code, {
        children: "songCode"
      }), " ）。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["销毁 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
            children: "RtcEngine"
          }), " 对象前，请确保在收到 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onpreloadevent_imusiccontentcentereventhandler",
            children: "onPreLoadEvent"
          }), " 回调后调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_destroy1",
            children: "destroy [2/2]"
          }), " 方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_preload__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-10",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "songcode-5",
      children: _jsx(_components.code, {
        children: "songCode"
      })
    }), `
`, _jsx(_components.p, {
      children: "音乐资源的标识符。"
    }), `
`, _jsx(_components.h4, {
      id: "jsonoption-2",
      children: _jsx(_components.code, {
        children: "jsonOption"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["扩展的 JSON 字段。声网会根据你在 ", _jsx(_components.code, {
        children: "sceneType"
      }), " 字段中设置的应用场景计费，不同场景的计费标准不同，详见计费文档。"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：直播场景：在线 K 歌房和背景音乐播放。"
      }), `
`, _jsx(_components.li, {
        children: "2：直播场景：背景音乐播放。"
      }), `
`, _jsx(_components.li, {
        children: "3：（默认）声动语聊场景：在线 K 歌房。"
      }), `
`, _jsx(_components.li, {
        children: "4：声动语聊场景：背景音乐播放。"
      }), `
`, _jsx(_components.li, {
        children: "5：VR 场景：在线 K 歌房和背景音乐播放。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["如果你需要切换到其他场景，必须重新调用该方法并在该字段中传入新的 ", _jsx(_components.code, {
        children: "sceneType"
      }), " 值。 示例： ", _jsx(_components.code, {
        children: '{"sceneType":1}'
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_preload__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-15",
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
      id: "所属接口类-16",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
          children: "IAgoraMusicContentCenter"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_preload2"
    }), `
`, _jsx(_components.h2, {
      id: "preload-22",
      children: "preload [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "预加载版权音乐资源。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_preload2__prototype"
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
              children: "preload"
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
              children: " songCode);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_preload2__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onpreloadevent_imusiccontentcentereventhandler",
        children: "onPreLoadEvent"
      }), " 回调，报告预加载事件。在调用该方法前，你需要先调用 ", _jsx(_components.code, {
        children: "getMusicCollectionByMusicChartId"
      }), " 或 ", _jsx(_components.code, {
        children: "searchMusic"
      }), " 获取你想播放的版权音乐资源，并通过这些方法触发的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult",
        children: "onMusicCollectionResult"
      }), " 回调获取音乐资源标识符（", _jsx(_components.code, {
        children: "songCode"
      }), " ）。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["销毁 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
            children: "RtcEngine"
          }), " 对象前，请确保在收到 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onpreloadevent_imusiccontentcentereventhandler",
            children: "onPreLoadEvent"
          }), " 回调后再调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_destroy1",
            children: "destroy [2/2]"
          }), " 方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_preload2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-11",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "songcode-6",
      children: _jsx(_components.code, {
        children: "songCode"
      })
    }), `
`, _jsx(_components.p, {
      children: "版权音乐资源的标识符。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_preload2__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-16",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功时，返回请求的唯一标识符 requestId。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回空字符串。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-17",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
          children: "IAgoraMusicContentCenter"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_registereventhandler_imusiccontentcenter"
    }), `
`, _jsx(_components.h2, {
      id: "registereventhandler",
      children: "registerEventHandler"
    }), `
`, _jsx(_components.p, {
      children: "注册版权音乐内容中心的回调事件。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_registereventhandler_imusiccontentcenter__prototype"
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
              children: " registerEventHandler"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(IMusicContentCenterEventHandler eventHandler);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_registereventhandler_imusiccontentcenter__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_registereventhandler_imusiccontentcenter__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-12",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "eventhandler",
      children: _jsx(_components.code, {
        children: "eventHandler"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["要注册的回调事件。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcentereventhandler",
        children: "IMusicContentCenterEventHandler"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_registereventhandler_imusiccontentcenter__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-17",
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
      id: "所属接口类-18",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
          children: "IAgoraMusicContentCenter"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_removecache"
    }), `
`, _jsx(_components.h2, {
      id: "removecache",
      children: "removeCache"
    }), `
`, _jsx(_components.p, {
      children: "删除已缓存的音乐资源。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_removecache__prototype"
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
              children: " removeCache"
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
              children: " songCode);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_removecache__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "若需删除多个音乐资源，可多次调用此方法。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_removecache",
            children: "removeCache"
          }), " 不会删除当前正在播放的已缓存音乐资源。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_removecache__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-13",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "songcode-7",
      children: _jsx(_components.code, {
        children: "songCode"
      })
    }), `
`, _jsx(_components.p, {
      children: "要删除的音乐资源的标识符。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_removecache__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-18",
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
      id: "所属接口类-19",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
          children: "IAgoraMusicContentCenter"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_renewtoken_imusiccontentcenter"
    }), `
`, _jsx(_components.h2, {
      id: "renewtoken",
      children: "renewToken"
    }), `
`, _jsx(_components.p, {
      children: "更新 Token。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_renewtoken_imusiccontentcenter__prototype"
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
              children: " renewToken"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String token);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_renewtoken_imusiccontentcenter__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "当用于鉴权的 Token 即将过期或已经过期时，可以调用该方法传入新生成的 Token。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_renewtoken_imusiccontentcenter__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-14",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "token",
      children: _jsx(_components.code, {
        children: "token"
      })
    }), `
`, _jsx(_components.p, {
      children: "新生成的 Token。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_renewtoken_imusiccontentcenter__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-19",
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
      id: "所属接口类-20",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
          children: "IAgoraMusicContentCenter"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_searchmusic"
    }), `
`, _jsx(_components.h2, {
      id: "searchmusic-12",
      children: "searchMusic [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "搜索音乐资源。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_searchmusic__prototype"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "searchMusic"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String keyword, "
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
              children: " page, "
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
              children: " pageSize)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_searchmusic__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult",
        children: "onMusicCollectionResult"
      }), " 回调，返回检索到的音乐资源列表。"]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_searchmusic__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-15",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "keyword",
      children: _jsx(_components.code, {
        children: "keyword"
      })
    }), `
`, _jsx(_components.p, {
      children: "搜索关键词。支持按歌曲标题或艺术家名称搜索。"
    }), `
`, _jsx(_components.h4, {
      id: "page-2",
      children: _jsx(_components.code, {
        children: "page"
      })
    }), `
`, _jsx(_components.p, {
      children: "要获取的音乐资源列表的页码。"
    }), `
`, _jsx(_components.h4, {
      id: "pagesize-2",
      children: _jsx(_components.code, {
        children: "pageSize"
      })
    }), `
`, _jsx(_components.p, {
      children: "每页返回的最大音乐资源数量，最大值为 50。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_searchmusic__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-20",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功时，返回唯一标识该请求的 requestId。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回空字符串。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-21",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
          children: "IAgoraMusicContentCenter"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_searchmusic2"
    }), `
`, _jsx(_components.h2, {
      id: "searchmusic-22",
      children: "searchMusic [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "搜索音乐资源。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_searchmusic2__prototype"
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
              children: "searchMusic"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String keyword, "
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
              children: " page, "
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
              children: " pageSize, String jsonOption);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_searchmusic2__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_searchmusic2__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-5",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult",
        children: "onMusicCollectionResult"
      }), " 回调报告检索到的音乐资源列表。"]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_searchmusic2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-16",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "keyword-1",
      children: _jsx(_components.code, {
        children: "keyword"
      })
    }), `
`, _jsx(_components.p, {
      children: "搜索关键词。支持按歌曲名称或歌手名称搜索。"
    }), `
`, _jsx(_components.h4, {
      id: "page-3",
      children: _jsx(_components.code, {
        children: "page"
      })
    }), `
`, _jsx(_components.p, {
      children: "要获取的音乐资源列表的目标页码。"
    }), `
`, _jsx(_components.h4, {
      id: "pagesize-3",
      children: _jsx(_components.code, {
        children: "pageSize"
      })
    }), `
`, _jsx(_components.p, {
      children: "每页显示的最大音乐资源数量。最大值为 50。"
    }), `
`, _jsx(_components.h4, {
      id: "jsonoption-3",
      children: _jsx(_components.code, {
        children: "jsonOption"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["可选的 JSON 扩展字段，默认为 ", _jsx(_components.code, {
        children: "null"
      }), "。你可以使用该字段筛选所需的音乐资源。目前支持以下筛选条件："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["pitchType：是否支持评分。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "1：支持评分的音乐资源。"
          }), `
`, _jsx(_components.li, {
            children: "2：不支持评分的音乐资源。"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["needHighPart：是否需要副歌片段。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "true：需要副歌片段。"
          }), `
`, _jsx(_components.li, {
            children: "false：不需要副歌片段。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_searchmusic2__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-21",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功时，返回唯一标识该请求的 requestId。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回空字符串。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-22",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
          children: "IAgoraMusicContentCenter"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_setplaymode"
    }), `
`, _jsx(_components.h2, {
      id: "setplaymode",
      children: "setPlayMode"
    }), `
`, _jsx(_components.p, {
      children: "设置音乐曲目的播放模式。"
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_setplaymode__prototype"
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
              children: " setPlayMode"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(MusicPlayMode mode);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_setplaymode__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "如果你未调用该方法设置播放模式，默认播放人声伴奏；如果音乐资源不包含人声伴奏，则播放原唱。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["你可以通过 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult",
            children: "onMusicCollectionResult"
          }), " 回调获取音乐资源的详细信息，并使用该回调中的 ", _jsx(_components.code, {
            children: "list"
          }), " 参数查看该版权音乐支持的播放模式。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_setplaymode__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "在在线 K 歌或才艺展示等娱乐场景中，如果你需要播放由声网内容中心提供的版权音乐，可以调用该方法设置播放模式。"
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_setplaymode__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["你必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_createmusicplayer",
        children: "createMusicPlayer"
      }), " 方法之后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_setplaymode__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-17",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "mode",
      children: _jsx(_components.code, {
        children: "mode"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["播放模式，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-musicplaymode",
        children: "MusicPlayMode"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_setplaymode__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-22",
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
            children: "-2：参数无效，请重新设置参数。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-23",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusicplayer",
          children: "IAgoraMusicPlayer"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_stop_imusicplayer"
    }), `
`, _jsx(_components.h2, {
      id: "stop-22",
      children: "stop [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "停止播放音乐资源。"
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_stop_imusicplayer__prototype"
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
              children: "Override"
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
              children: " stop"
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
      id: "api_imusicplayer_stop_imusicplayer__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imusicplayer_stop_imusicplayer__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-23",
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
      id: "所属接口类-24",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusicplayer",
          children: "IAgoraMusicPlayer"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_unregistereventhandler_imusiccontentcenter"
    }), `
`, _jsx(_components.h2, {
      id: "unregistereventhandler",
      children: "unregisterEventHandler"
    }), `
`, _jsx(_components.p, {
      children: "取消注册版权音乐内容中心的事件回调。"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_unregistereventhandler_imusiccontentcenter__prototype"
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
              children: " unregisterEventHandler"
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
      id: "api_imusiccontentcenter_unregistereventhandler_imusiccontentcenter__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imusiccontentcenter_unregistereventhandler_imusiccontentcenter__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-24",
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
      id: "所属接口类-25",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
          children: "IAgoraMusicContentCenter"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imusiccontentcentereventhandler_onlyricresult"
    }), `
`, _jsx(_components.h2, {
      id: "onlyricresult",
      children: "onLyricResult"
    }), `
`, _jsx(_components.p, {
      children: "歌词下载链接回调。"
    }), `
`, _jsx("a", {
      id: "callback_imusiccontentcentereventhandler_onlyricresult__prototype"
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
              children: " onLyricResult"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String requestId, "
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
              children: " songCode, String lyricUrl, "
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
              children: " reason);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_imusiccontentcentereventhandler_onlyricresult__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getlyric",
        children: "getLyric"
      }), " 后，SDK 会触发该回调。"]
    }), `
`, _jsx("a", {
      id: "callback_imusiccontentcentereventhandler_onlyricresult__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getlyric",
        children: "getLyric"
      }), " 方法后被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_imusiccontentcentereventhandler_onlyricresult__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-18",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "requestid",
      children: _jsx(_components.code, {
        children: "requestId"
      })
    }), `
`, _jsx(_components.p, {
      children: "请求 ID，用于唯一标识该请求。"
    }), `
`, _jsx(_components.h4, {
      id: "songcode-8",
      children: _jsx(_components.code, {
        children: "songCode"
      })
    }), `
`, _jsx(_components.p, {
      children: "音乐资源的编号，用于标识音乐资源。"
    }), `
`, _jsx(_components.h4, {
      id: "lyricurl",
      children: _jsx(_components.code, {
        children: "lyricUrl"
      })
    }), `
`, _jsx(_components.p, {
      children: "歌词的下载链接。"
    }), `
`, _jsx(_components.h4, {
      id: "reason",
      children: _jsx(_components.code, {
        children: "reason"
      })
    }), `
`, _jsx(_components.p, {
      children: "来自版权音乐内容中心的请求状态码："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_OK (0)：请求成功。"
      }), `
`, _jsx(_components.li, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_ERROR (1)：通用错误，无具体原因。"
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_GATEWAY (2)：网关错误。可能原因包括：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "当前临时 Token 已过期。请重新生成 Token。"
          }), `
`, _jsx(_components.li, {
            children: "提供的 Token 无效。请确保使用的是 RTM Token。"
          }), `
`, _jsx(_components.li, {
            children: "网络错误。请检查网络连接。"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_PERMISSION_AND_RESOURCE (3)：权限错误或音乐资源不存在。请确保项目已启用版权音乐内容中心权限。如有疑问，请", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_INTERNAL_DATA_PARSE (4)：内部数据解析错误。请", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_MUSIC_LOADING (5)：加载音乐资源时发生错误。请", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_MUSIC_DECRYPTION (6)：解密音乐资源时发生错误。请", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "。"]
      }), `
`, _jsx(_components.li, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_HTTP_INTERNAL (7)：HTTP 内部错误。请稍后重试。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-26",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcentereventhandler",
          children: "IMusicContentCenterEventHandler"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imusiccontentcentereventhandler_onmusicchartsresult"
    }), `
`, _jsx(_components.h2, {
      id: "onmusicchartsresult",
      children: "onMusicChartsResult"
    }), `
`, _jsx(_components.p, {
      children: "获取音乐排行榜后的回调。"
    }), `
`, _jsx("a", {
      id: "callback_imusiccontentcentereventhandler_onmusicchartsresult__prototype"
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
              children: " onMusicChartsResult"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String requestId, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "MusicChartInfo"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] list, "
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
              children: " reason);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_imusiccontentcentereventhandler_onmusicchartsresult__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getmusiccharts",
        children: "getMusicCharts"
      }), " 后被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_imusiccontentcentereventhandler_onmusicchartsresult__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-1",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getmusiccharts",
        children: "getMusicCharts"
      }), " 方法后被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_imusiccontentcentereventhandler_onmusicchartsresult__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-19",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "requestid-1",
      children: _jsx(_components.code, {
        children: "requestId"
      })
    }), `
`, _jsx(_components.p, {
      children: "请求 ID，用于标识此次请求的唯一标识符。"
    }), `
`, _jsx(_components.h4, {
      id: "list",
      children: _jsx(_components.code, {
        children: "list"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["当前可播放的音乐排行榜列表，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-musicchartinfo",
        children: "MusicChartInfo"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "reason-1",
      children: _jsx(_components.code, {
        children: "reason"
      })
    }), `
`, _jsx(_components.p, {
      children: "来自音乐内容中心的请求状态码："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_OK (0)：请求成功。"
      }), `
`, _jsx(_components.li, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_ERROR (1)：通用错误，无具体原因。"
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_GATEWAY (2)：网关错误。可能原因包括：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "当前 token 已过期。请重新生成 token。"
          }), `
`, _jsx(_components.li, {
            children: "提供的 token 无效。请确保使用的是 RTM token。"
          }), `
`, _jsx(_components.li, {
            children: "网络错误。请检查网络连接。"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_PERMISSION_AND_RESOURCE (3)：权限错误或未找到音乐资源。请确保项目已启用访问声网音乐内容中心。如有问题，请", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_INTERNAL_DATA_PARSE (4)：内部数据解析错误。请", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_MUSIC_LOADING (5)：加载音乐资源时发生错误。请", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_MUSIC_DECRYPTION (6)：解密音乐资源时发生错误。请", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "。"]
      }), `
`, _jsx(_components.li, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_HTTP_INTERNAL (7)：内部 HTTP 错误。请稍后重试。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-27",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcentereventhandler",
          children: "IMusicContentCenterEventHandler"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imusiccontentcentereventhandler_onmusiccollectionresult"
    }), `
`, _jsx(_components.h2, {
      id: "onmusiccollectionresult",
      children: "onMusicCollectionResult"
    }), `
`, _jsx(_components.p, {
      children: "获取音乐资源列表的回调。"
    }), `
`, _jsx("a", {
      id: "callback_imusiccontentcentereventhandler_onmusiccollectionresult__prototype"
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
              children: " onMusicCollectionResult"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String requestId, "
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
              children: " page, "
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
              children: " pageSize, "
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
              children: " total, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "Music"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] list, "
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
      id: "callback_imusiccontentcentereventhandler_onmusiccollectionresult__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在调用 ", _jsx(_components.code, {
        children: "getMusicCollectionByMusicChartId"
      }), " 或 ", _jsx(_components.code, {
        children: "searchMusic"
      }), " 时触发。"]
    }), `
`, _jsx("a", {
      id: "callback_imusiccontentcentereventhandler_onmusiccollectionresult__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-20",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "requestid-2",
      children: _jsx(_components.code, {
        children: "requestId"
      })
    }), `
`, _jsx(_components.p, {
      children: "请求 ID，用于唯一标识该请求。"
    }), `
`, _jsx(_components.h4, {
      id: "page-4",
      children: _jsx(_components.code, {
        children: "page"
      })
    }), `
`, _jsx(_components.p, {
      children: "当前页码，从 1 开始。"
    }), `
`, _jsx(_components.h4, {
      id: "pagesize-4",
      children: _jsx(_components.code, {
        children: "pageSize"
      })
    }), `
`, _jsx(_components.p, {
      children: "每页最多返回的音乐资源数量，最大为 50。"
    }), `
`, _jsx(_components.h4, {
      id: "total",
      children: _jsx(_components.code, {
        children: "total"
      })
    }), `
`, _jsx(_components.p, {
      children: "音乐资源列表中的总资源数。"
    }), `
`, _jsx(_components.h4, {
      id: "list-1",
      children: _jsx(_components.code, {
        children: "list"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音乐资源列表的详细信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-music",
        children: "Music"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "reason-2",
      children: _jsx(_components.code, {
        children: "reason"
      })
    }), `
`, _jsx(_components.p, {
      children: "来自声网音乐内容中心的请求状态码："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_OK (0)：请求成功。"
      }), `
`, _jsx(_components.li, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_ERROR (1)：通用错误，无具体归因。"
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_GATEWAY (2)：网关错误。可能原因包括：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "当前临时 Token 已过期。请重新生成临时 Token。"
          }), `
`, _jsx(_components.li, {
            children: "提供的临时 Token 无效。请确保你使用的是 RTM Token。"
          }), `
`, _jsx(_components.li, {
            children: "网络错误。请检查你的网络连接。"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_PERMISSION_AND_RESOURCE (3)：权限错误或未找到音乐资源。请确保你的项目已启用访问声网音乐内容中心的权限。如有问题，请", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_INTERNAL_DATA_PARSE (4)：内部数据解析错误。请", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_MUSIC_LOADING (5)：加载音乐资源时发生错误。请", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_MUSIC_DECRYPTION (6)：解密音乐资源时发生错误。请", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "。"]
      }), `
`, _jsx(_components.li, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_HTTP_INTERNAL (7)：HTTP 内部错误。请稍后重试。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-28",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcentereventhandler",
          children: "IMusicContentCenterEventHandler"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imusiccontentcentereventhandler_onpreloadevent_imusiccontentcentereventhandler"
    }), `
`, _jsx(_components.h2, {
      id: "onpreloadevent",
      children: "onPreLoadEvent"
    }), `
`, _jsx(_components.p, {
      children: "预加载音乐资源事件的回调。"
    }), `
`, _jsx("a", {
      id: "callback_imusiccontentcentereventhandler_onpreloadevent_imusiccontentcentereventhandler__prototype"
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
              children: " onPreLoadEvent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String requestId, "
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
              children: " songCode, "
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
              children: " percent, String lyricUrl, "
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
      id: "callback_imusiccontentcentereventhandler_onpreloadevent_imusiccontentcentereventhandler__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.code, {
        children: "preload"
      }), " 方法预加载音乐资源后，SDK 会触发该回调。"]
    }), `
`, _jsx("a", {
      id: "callback_imusiccontentcentereventhandler_onpreloadevent_imusiccontentcentereventhandler__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-2",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在调用 ", _jsx(_components.code, {
        children: "preload"
      }), " 方法后被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_imusiccontentcentereventhandler_onpreloadevent_imusiccontentcentereventhandler__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-21",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "requestid-3",
      children: _jsx(_components.code, {
        children: "requestId"
      })
    }), `
`, _jsx(_components.p, {
      children: "请求 ID，用于唯一标识该请求。"
    }), `
`, _jsx(_components.h4, {
      id: "songcode-9",
      children: _jsx(_components.code, {
        children: "songCode"
      })
    }), `
`, _jsx(_components.p, {
      children: "音乐资源的 ID，用于标识一个音乐资源。"
    }), `
`, _jsx(_components.h4, {
      id: "percent",
      children: _jsx(_components.code, {
        children: "percent"
      })
    }), `
`, _jsx(_components.p, {
      children: "音乐资源的当前加载进度，取值范围为 [0, 100]。"
    }), `
`, _jsx(_components.h4, {
      id: "lyricurl-1",
      children: _jsx(_components.code, {
        children: "lyricUrl"
      })
    }), `
`, _jsx(_components.p, {
      children: "歌词的下载地址。"
    }), `
`, _jsx(_components.h4, {
      id: "state",
      children: _jsx(_components.code, {
        children: "state"
      })
    }), `
`, _jsx(_components.p, {
      children: "音乐资源的当前加载状态："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：加载完成。"
      }), `
`, _jsx(_components.li, {
        children: "1：加载失败。"
      }), `
`, _jsx(_components.li, {
        children: "2：加载中。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "reason-3",
      children: _jsx(_components.code, {
        children: "reason"
      })
    }), `
`, _jsx(_components.p, {
      children: "来自 Music Content Center 的请求状态码："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_OK (0)：请求成功。"
      }), `
`, _jsx(_components.li, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_ERROR (1)：通用错误，无具体归因。"
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_GATEWAY (2)：网关错误。可能原因包括：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "当前临时 Token 已过期，请重新生成 Token。"
          }), `
`, _jsx(_components.li, {
            children: "提供的 Token 无效，请确保使用的是 Token。"
          }), `
`, _jsx(_components.li, {
            children: "网络错误，请检查网络连接。"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_PERMISSION_AND_RESOURCE (3)：权限错误或音乐资源不存在。请确保项目已启用 Music Content Center 访问权限。如有问题请", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_INTERNAL_DATA_PARSE (4)：内部数据解析错误。请", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_MUSIC_LOADING (5)：加载音乐资源时发生错误。请", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_MUSIC_DECRYPTION (6)：解密音乐资源时发生错误。请", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "。"]
      }), `
`, _jsx(_components.li, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_HTTP_INTERNAL (7)：HTTP 内部错误。请稍后重试。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-29",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcentereventhandler",
          children: "IMusicContentCenterEventHandler"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imusiccontentcentereventhandler_onsongsimpleinforesult"
    }), `
`, _jsx(_components.h2, {
      id: "onsongsimpleinforesult",
      children: "onSongSimpleInfoResult"
    }), `
`, _jsx(_components.p, {
      children: "获取音乐资源详细信息的回调。"
    }), `
`, _jsx("a", {
      id: "callback_imusiccontentcentereventhandler_onsongsimpleinforesult__prototype"
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
              children: " onSongSimpleInfoResult"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String requestId, "
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
              children: " songCode, String simpleInfo, "
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
              children: " reason);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_imusiccontentcentereventhandler_onsongsimpleinforesult__detailed_desc"
    }), `
`, _jsx("a", {
      id: "callback_imusiccontentcentereventhandler_onsongsimpleinforesult__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-3",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getsongsimpleinfo",
        children: "getSongSimpleInfo"
      }), " 后被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_imusiccontentcentereventhandler_onsongsimpleinforesult__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-22",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "requestid-4",
      children: _jsx(_components.code, {
        children: "requestId"
      })
    }), `
`, _jsx(_components.p, {
      children: "请求 ID，用于标识此次请求的唯一标识符。"
    }), `
`, _jsx(_components.h4, {
      id: "songcode-10",
      children: _jsx(_components.code, {
        children: "songCode"
      })
    }), `
`, _jsx(_components.p, {
      children: "音乐资源的标识符。"
    }), `
`, _jsx(_components.h4, {
      id: "simpleinfo",
      children: _jsx(_components.code, {
        children: "simpleInfo"
      })
    }), `
`, _jsx(_components.p, {
      children: "音乐资源的相关信息，包括："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "副歌片段的起始和结束时间（毫秒）。"
      }), `
`, _jsx(_components.li, {
        children: "副歌歌词的下载链接。"
      }), `
`, _jsx(_components.li, {
        children: "副歌片段的时长（毫秒）。"
      }), `
`, _jsx(_components.li, {
        children: "歌曲标题。"
      }), `
`, _jsx(_components.li, {
        children: "艺术家名称。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "reason-4",
      children: _jsx(_components.code, {
        children: "reason"
      })
    }), `
`, _jsx(_components.p, {
      children: "来自音乐内容中心的请求状态码："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_OK (0)：请求成功。"
      }), `
`, _jsx(_components.li, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_ERROR (1)：通用错误，无具体原因。"
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_GATEWAY (2)：网关错误。可能原因包括：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "当前临时 Token 已过期，请生成新的 Token。"
          }), `
`, _jsx(_components.li, {
            children: "提供的 Token 无效，请确保使用的是 RTM Token。"
          }), `
`, _jsx(_components.li, {
            children: "网络错误，请检查网络连接。"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_PERMISSION_AND_RESOURCE (3)：权限错误或音乐资源不存在。请确保项目已启用音乐内容中心权限。如有问题，请", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_INTERNAL_DATA_PARSE (4)：内部数据解析错误。请", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_MUSIC_LOADING (5)：加载音乐资源时发生错误。请", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: ["MUSIC_CONTENT_CENTER_STATE_REASON_MUSIC_DECRYPTION (6)：解密音乐资源时发生错误。请", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "。"]
      }), `
`, _jsx(_components.li, {
        children: "MUSIC_CONTENT_CENTER_STATE_REASON_HTTP_INTERNAL (7)：内部 HTTP 错误。请稍后重试。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-30",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcentereventhandler",
          children: "IMusicContentCenterEventHandler"
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
