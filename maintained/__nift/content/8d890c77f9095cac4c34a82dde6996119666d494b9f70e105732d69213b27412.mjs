import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Supported platforms",
  description: "The platforms supported by this product."
};
export let _markdown = `

This section lists the platforms and products you use to develop apps that interact with Agora SDRTN®.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;web&#x22;,&#x22;windows&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;javascript&#x22;,&#x22;unity&#x22;,&#x22;unreal&#x22;,&#x22;blueprint&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    * *Platforms*:

      | Target Platform | Operating system version                                                                            | IDE version                 |
      | :-------------- | :-------------------------------------------------------------------------------------------------- | :-------------------------- |
      | Android         | Android 4.1 or later.  RTC SDK supports the following ABIs.- armeabi-v7a
      - arm64-v8a
      - x86
      - x86-64 | Android Studio 3.0 or later |

    * *Browsers supported on Android*:

      | Browser or application       | Receiving streams | Sending streams |
      | :--------------------------- | :---------------- | :-------------- |
      | The latest version of Chrome | Supported         | Supported       |
      | The latest version of WeChat | Supported         | Supported       |

    * *MediaPlayer Kit*:

      | Type of media        | Formats                              |
      | :------------------- | :----------------------------------- |
      | Local files          | AVI, MP4, MP3, MKV, and FLV          |
      | Online media streams | HTTP, HTTPS, RTMP and RTSP protocols |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    * *Platforms*:

      | Target Platform | Operating system version | IDE version        |
      | :-------------- | :----------------------- | :----------------- |
      | iOS             | iOS 9.0 or later         | Xcode 9.0 or later |

    * *Browsers supported on iOS*:

      On iOS, all apps with built-in browsers use the system WebView. Support for RTC SDK relies only on the iOS system version.

      | Browsers and applications                            | Features                      | VP9                | H.264                |
      | :--------------------------------------------------- | :---------------------------- | :----------------- | :------------------- |
      | Applications with WebView, such as WeChat and Chrome | Receiving streams             | iOS 12.2 and later | iOS 12.1.4 and later |
      |                                                      | Sending streams               | iOS 14.3 and later | iOS 14.3 and later   |
      | Safari                                               | Sending and receiving streams | iOS 12.2 and later | iOS 11 and later     |

    * *MediaPlayer Kit*:

      | Type of media        | Formats                              |
      | :------------------- | :----------------------------------- |
      | Local files          | AVI, MP4, MP3, MKV, and FLV          |
      | Online media streams | HTTP, HTTPS, RTMP and RTSP protocols |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    * *Platforms*:

      | Target Platform | Operating system version                                              | IDE version        |
      | :-------------- | :-------------------------------------------------------------------- | :----------------- |
      | macOS           | macOS 10.11 or later. RTC SDK supports the following:- x86-64
      - arm64 | Xcode 9.0 or later |

    * *MediaPlayer Kit*:

      | Type of media        | Formats                              |
      | :------------------- | :----------------------------------- |
      | Local files          | AVI, MP4, MP3, MKV, and FLV          |
      | Online media streams | HTTP, HTTPS, RTMP and RTSP protocols |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    The Agora Web SDK is a real-time audio and RTC SDK built on WebRTC technology. Consequently, its compatibility depends on the browser’s support for WebRTC.

    ### Desktop browsers [#desktop-browsers]

    Agora Web SDK is well supported on popular desktop browsers such as Chrome, Firefox, Edge, and Safari. To ensure the best user experience, best practice is to use the latest version of each browser on the latest version of the operating system.

    <CodeBlockTabs defaultValue="mac">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="mac">
          macOS
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="win">
          Windows
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="chromeOS">
          ChromeOS
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="mac">
        | Browser                                            | Version requirements | Receiving audio and video Streams | Publishing audio and video streams |          Screen sharing         |
        | :------------------------------------------------- | :------------------- | :-------------------------------: | :--------------------------------: | :-----------------------------: |
        | [Chrome](https://www.google.com/intl/en/chrome/)   | Version 65 or above  |                 ✔                 |                  ✔                 |                ✔                |
        | [Firefox](https://www.mozilla.org/firefox/new/)    | Version 69 or above  |                 ✔                 |                  ✔                 |                ✔                |
        | [Safari](https://support.apple.com/en-us/HT201541) | Version 11 or above  |                 ✔                 |                  ✔                 | ✔ (Requires Safari 13 or above) |
        | [Edge](https://microsoft.com/edge)                 | Not available        |                 ✔                 |                  ✔                 |                ✔                |
      </CodeBlockTab>

      <CodeBlockTab value="win">
        | Browser                                          | Version requirements | Receiving audio and video Streams | Publishing audio and video streams | Screen sharing |
        | :----------------------------------------------- | :------------------- | :-------------------------------: | :--------------------------------: | :------------: |
        | [Chrome](https://www.google.com/intl/en/chrome/) | Version 65 or above  |                 ✔                 |                  ✔                 |        ✔       |
        | [Firefox](https://www.mozilla.org/firefox/new/)  | Version 69 or above  |                 ✔                 |                  ✔                 |        ✔       |
        | [Edge](https://microsoft.com/edge)               | Version 80 or above  |                 ✔                 |                  ✔                 |        ✔       |
      </CodeBlockTab>

      <CodeBlockTab value="chromeOS">
        | Browser                                          | Version requirements | Receiving audio and video Streams | Publishing audio and video streams | Screen sharing |
        | :----------------------------------------------- | :------------------- | :-------------------------------: | :--------------------------------: | :------------: |
        | [Chrome](https://www.google.com/intl/en/chrome/) | Version 89 or above  |                 ✔                 |                  ✔                 |        ✔       |
      </CodeBlockTab>
    </CodeBlockTabs>

    ### Mobile browsers [#mobile-browsers]

    Since version 4.6.0, the Web SDK optimizes the experience on mobile browsers. To improve your experience on mobile devices, Agora strongly recommends upgrading to the latest version.

    <CodeBlockTabs defaultValue="android">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="android">
          Android
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="ios">
          iOS
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="harmony">
          HarmonyOS
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="android">
        | Browser                                          | Version requirements           | Receiving audio and video Streams | Publishing audio and video streams | Screen sharing |
        | :----------------------------------------------- | :----------------------------- | :-------------------------------: | :--------------------------------: | :------------: |
        | [Chrome](https://www.google.com/intl/en/chrome/) | Version 78 or above            |                 ✔                 |                  ✔                 |        ✘       |
        | WeChat built-in browser                          | WeChat version 7.0.20 or above |                 ✔                 |                  ✔                 |        ✘       |
        | WeChat Work built-in browser                     | WeChat Work 3.1.6 or above     |                 ✔                 |                  ✔                 |        ✘       |
      </CodeBlockTab>

      <CodeBlockTab value="ios">
        iOS only supports the system WebView. Therefore, support for the Web SDK is only related to the iOS system version.

        * iOS version ≥ 12.2 and \\< 14.3

          | Browser                      | Version requirements                | Receiving audio and video Streams | Publishing audio and video streams | Screen sharing |
          | :--------------------------- | :---------------------------------- | :-------------------------------: | :--------------------------------: | :------------: |
          | Safari                       | Corresponding to iOS system version |                 ✔                 |                  ✔                 |        ✘       |
          | Chrome                       | No clear information                |                 ✔                 |                  ✘                 |        ✘       |
          | WeChat built-in browser      | WeChat version 8.0.13 or above      |                 ✔                 |                  ✘                 |        ✘       |
          | WeChat Work built-in browser | WeChat Work 3.1.15 or above①        |                 ✔                 |                  ✘                 |        ✘       |

        * iOS version ≥ 14.3

          | Browser                      | Version requirements                | Receiving audio and video Streams | Publishing audio and video streams | Screen sharing |
          | :--------------------------- | :---------------------------------- | :-------------------------------: | :--------------------------------: | :------------: |
          | Safari                       | Corresponding to iOS system version |                 ✔                 |                  ✔                 |        ✘       |
          | Chrome                       | Version 92 or above                 |                 ✔                 |                  ✔                 |        ✘       |
          | WeChat built-in browser      | WeChat version 8.0.13 or above      |                 ✔                 |                  ✔                 |        ✘       |
          | WeChat Work built-in browser | WeChat Work 3.1.15 or above①        |                 ✔                 |                  ✔                 |        ✘       |
      </CodeBlockTab>

      <CodeBlockTab value="harmony">
        | Browser        | Version requirements | Receiving audio and video Streams | Publishing audio and video streams | Screen sharing |
        | :------------- | :------------------- | :-------------------------------: | :--------------------------------: | :------------: |
        | Huawei Browser | Not available        |                 ✔                 |                  ✔                 |        ✘       |
      </CodeBlockTab>
    </CodeBlockTabs>

    ### Check browser compatibility [#check-browser-compatibility]

    The Agora Web SDK provides the \`checkSystemRequirements\` method to determine if the SDK can be used in the current browser.

    \`\`\`js
    const result = AgoraRTC.checkSystemRequirements();
    // result is true for support, false for non-support
    console.log(result);
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    * *Platforms*:

      | Target Platform | Operating system version                                          | IDE version                           |
      | :-------------- | :---------------------------------------------------------------- | :------------------------------------ |
      | Windows         | Windows 7 or later. RTC SDK supports the following:- x86
      - x86-64 | Microsoft Visual Studio 2017 or later |

    * *MediaPlayer Kit*:

      | Type of media        | Formats                              |
      | :------------------- | :----------------------------------- |
      | Local files          | AVI, MP4, MP3, MKV, and FLV          |
      | Online media streams | HTTP, HTTPS, RTMP and RTSP protocols |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    * *Platforms*:

      | Target Platform | Supported version                                      |
      | :-------------- | :----------------------------------------------------- |
      | Electron        | Electron ≥ 1.8.3, \\< 25 - Windows (x86, x86-64)- macOS |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    * [Flutter](https://docs.flutter.dev/get-started/install) 2.10.5 or later

      If you are developing a desktop application for Windows, macOS or Linux, make sure your development device meets the [Flutter desktop development requirements](https://docs.flutter.dev/development/platform-integration/desktop).

    * *Platforms*:

      | Target platform | Environment requirements                                                                               |
      | :-------------- | :----------------------------------------------------------------------------------------------------- |
      | Android         | * macOS 10.15 or later
      * Windows 10 or higher
      * Latest version of Android Studio
      * Two Android devices |
      | iOS             | - macOS 10.15 or later
      - Latest version of Xcode
      - Two iOS devices                                     |
      | macOS           | * macOS 10.15 or later
      * Latest version of Xcode
      * Two macOS devices                                   |
      | Windows         | - Windows 10 or higher
      - Latest version of Visual Studio
      - Two Windows devices                         |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    * *Platforms*:

      | Target Platform | Operating system version       |
      | :-------------- | :----------------------------- |
      | React Native    | React Native 0.59.10 or later. |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="javascript">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="javascript" />

    To ensure the best user experience, best practice is to use the latest version of each browser on the latest version of the operating system. Download the latest versions of:

    * [Chrome](https://www.google.com/intl/en/chrome/)
    * [Firefox](https://www.mozilla.org/firefox/new/)
    * [Edge](https://microsoft.com/edge)
    * [Safari](https://support.apple.com/en-hk/HT201541)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    * *Platforms*:

      | Target Platform | Supported version                                                                                                                 |
      | :-------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
      | Unity           | Unity 2017 or later. RTC SDK supports the following:- Android (armeabi-v7a, arm64-v8a, x86)
      - iOS
      - Windows (x86, x86-64)
      - macOS |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unreal">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unreal" />

    | Platform        | IDE                           | OS                                                                                                                                                             | Architecture           | Note                                                                                                                                                                                                    |
    | :-------------- | :---------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | Android         | Android Studio 3.5.3 or later | see [the Unreal Engine Android Development Requirements.](https://docs.unrealengine.com/4.27/en-US/SharingAndReleasing/Mobile/Android/AndroidSDKRequirements/) | arm64-v8a, arneabi-v7a | Real devices only (not working on emulators)  NDK version 21                                                                                                                                            |
    | iOS             | XCode 11.0 or later           | see [the Unreal Engine iOS and tvOS Development Requirements.](https://docs.unrealengine.com/4.27/en-US/SharingAndReleasing/Mobile/iOS/DeviceCompatibility/)   | -                      | A valid Apple developer signature.                                                                                                                                                                      |
    | MacOS           | XCode 11.0 or later           | OS X 10.11 or later                                                                                                                                            | Intel, M1              | A valid Apple developer signature.                                                                                                                                                                      |
    | Windows (64bit) | Visual Studio 2019            | Windows 7 SP1 or later                                                                                                                                         | Intel                  | At least 1.65 GB of disk space after the IDE and relevant tools are installed.                                                                                                                          |
    | Windows (32bit) | Visual Studio 2019            | Windows 7 SP1 or later                                                                                                                                         | Intel                  | Unreal Engine 5 (UE5) is not supported on 32-bit Windows. If you want to use Unreal Engine 4 (UE4) with 32-bit Windows, uncomment the code relating to Win32 in the *AgoraPluginLibrary.Build.cs* file. |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="blueprint">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="blueprint" />

    | Platform        | IDE                           | OS                                                                                                                                                             | Architecture           | Note                                                                                                                                                                                                    |
    | :-------------- | :---------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | Android         | Android Studio 3.5.3 or later | see [the Unreal Engine Android Development Requirements.](https://docs.unrealengine.com/4.27/en-US/SharingAndReleasing/Mobile/Android/AndroidSDKRequirements/) | arm64-v8a, arneabi-v7a | Real devices only (not working on emulators)  NDK version 21                                                                                                                                            |
    | iOS             | XCode 11.0 or later           | see [the Unreal Engine iOS and tvOS Development Requirements.](https://docs.unrealengine.com/4.27/en-US/SharingAndReleasing/Mobile/iOS/DeviceCompatibility/)   | -                      | A valid Apple developer signature.                                                                                                                                                                      |
    | MacOS           | XCode 11.0 or later           | OS X 10.11 or later                                                                                                                                            | Intel, M1              | A valid Apple developer signature.                                                                                                                                                                      |
    | Windows (64bit) | Visual Studio 2019            | Windows 7 SP1 or later                                                                                                                                         | Intel                  | At least 1.65 GB of disk space after the IDE and relevant tools are installed.                                                                                                                          |
    | Windows (32bit) | Visual Studio 2019            | Windows 7 SP1 or later                                                                                                                                         | Intel                  | Unreal Engine 5 (UE5) is not supported on 32-bit Windows. If you want to use Unreal Engine 4 (UE4) with 32-bit Windows, uncomment the code relating to Win32 in the *AgoraPluginLibrary.Build.cs* file. |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This section lists the platforms and products you use to develop apps that interact with Agora SDRTN®."
  }, {
    heading: undefined,
    content: "*Platforms*:"
  }, {
    heading: undefined,
    content: "Target Platform"
  }, {
    heading: undefined,
    content: "Operating system version"
  }, {
    heading: undefined,
    content: "IDE version"
  }, {
    heading: undefined,
    content: "Android"
  }, {
    heading: undefined,
    content: `Android 4.1 or later.  RTC SDK supports the following ABIs.- armeabi-v7a
- arm64-v8a
- x86
- x86-64`
  }, {
    heading: undefined,
    content: "Android Studio 3.0 or later"
  }, {
    heading: undefined,
    content: "*Browsers supported on Android*:"
  }, {
    heading: undefined,
    content: "Browser or application"
  }, {
    heading: undefined,
    content: "Receiving streams"
  }, {
    heading: undefined,
    content: "Sending streams"
  }, {
    heading: undefined,
    content: "The latest version of Chrome"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "The latest version of WeChat"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "*MediaPlayer Kit*:"
  }, {
    heading: undefined,
    content: "Type of media"
  }, {
    heading: undefined,
    content: "Formats"
  }, {
    heading: undefined,
    content: "Local files"
  }, {
    heading: undefined,
    content: "AVI, MP4, MP3, MKV, and FLV"
  }, {
    heading: undefined,
    content: "Online media streams"
  }, {
    heading: undefined,
    content: "HTTP, HTTPS, RTMP and RTSP protocols"
  }, {
    heading: undefined,
    content: "*Platforms*:"
  }, {
    heading: undefined,
    content: "Target Platform"
  }, {
    heading: undefined,
    content: "Operating system version"
  }, {
    heading: undefined,
    content: "IDE version"
  }, {
    heading: undefined,
    content: "iOS"
  }, {
    heading: undefined,
    content: "iOS 9.0 or later"
  }, {
    heading: undefined,
    content: "Xcode 9.0 or later"
  }, {
    heading: undefined,
    content: "*Browsers supported on iOS*:"
  }, {
    heading: undefined,
    content: "On iOS, all apps with built-in browsers use the system WebView. Support for RTC SDK relies only on the iOS system version."
  }, {
    heading: undefined,
    content: "Browsers and applications"
  }, {
    heading: undefined,
    content: "Features"
  }, {
    heading: undefined,
    content: "VP9"
  }, {
    heading: undefined,
    content: "H.264"
  }, {
    heading: undefined,
    content: "Applications with WebView, such as WeChat and Chrome"
  }, {
    heading: undefined,
    content: "Receiving streams"
  }, {
    heading: undefined,
    content: "iOS 12.2 and later"
  }, {
    heading: undefined,
    content: "iOS 12.1.4 and later"
  }, {
    heading: undefined,
    content: "Sending streams"
  }, {
    heading: undefined,
    content: "iOS 14.3 and later"
  }, {
    heading: undefined,
    content: "iOS 14.3 and later"
  }, {
    heading: undefined,
    content: "Safari"
  }, {
    heading: undefined,
    content: "Sending and receiving streams"
  }, {
    heading: undefined,
    content: "iOS 12.2 and later"
  }, {
    heading: undefined,
    content: "iOS 11 and later"
  }, {
    heading: undefined,
    content: "*MediaPlayer Kit*:"
  }, {
    heading: undefined,
    content: "Type of media"
  }, {
    heading: undefined,
    content: "Formats"
  }, {
    heading: undefined,
    content: "Local files"
  }, {
    heading: undefined,
    content: "AVI, MP4, MP3, MKV, and FLV"
  }, {
    heading: undefined,
    content: "Online media streams"
  }, {
    heading: undefined,
    content: "HTTP, HTTPS, RTMP and RTSP protocols"
  }, {
    heading: undefined,
    content: "*Platforms*:"
  }, {
    heading: undefined,
    content: "Target Platform"
  }, {
    heading: undefined,
    content: "Operating system version"
  }, {
    heading: undefined,
    content: "IDE version"
  }, {
    heading: undefined,
    content: "macOS"
  }, {
    heading: undefined,
    content: `macOS 10.11 or later. RTC SDK supports the following:- x86-64
- arm64`
  }, {
    heading: undefined,
    content: "Xcode 9.0 or later"
  }, {
    heading: undefined,
    content: "*MediaPlayer Kit*:"
  }, {
    heading: undefined,
    content: "Type of media"
  }, {
    heading: undefined,
    content: "Formats"
  }, {
    heading: undefined,
    content: "Local files"
  }, {
    heading: undefined,
    content: "AVI, MP4, MP3, MKV, and FLV"
  }, {
    heading: undefined,
    content: "Online media streams"
  }, {
    heading: undefined,
    content: "HTTP, HTTPS, RTMP and RTSP protocols"
  }, {
    heading: undefined,
    content: "The Agora Web SDK is a real-time audio and RTC SDK built on WebRTC technology. Consequently, its compatibility depends on the browser’s support for WebRTC."
  }, {
    heading: "desktop-browsers",
    content: "Agora Web SDK is well supported on popular desktop browsers such as Chrome, Firefox, Edge, and Safari. To ensure the best user experience, best practice is to use the latest version of each browser on the latest version of the operating system."
  }, {
    heading: "desktop-browsers",
    content: "Browser"
  }, {
    heading: "desktop-browsers",
    content: "Version requirements"
  }, {
    heading: "desktop-browsers",
    content: "Receiving audio and video Streams"
  }, {
    heading: "desktop-browsers",
    content: "Publishing audio and video streams"
  }, {
    heading: "desktop-browsers",
    content: "Screen sharing"
  }, {
    heading: "desktop-browsers",
    content: "Chrome"
  }, {
    heading: "desktop-browsers",
    content: "Version 65 or above"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "desktop-browsers",
    content: "Firefox"
  }, {
    heading: "desktop-browsers",
    content: "Version 69 or above"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "desktop-browsers",
    content: "Safari"
  }, {
    heading: "desktop-browsers",
    content: "Version 11 or above"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "desktop-browsers",
    content: "✔ (Requires Safari 13 or above)"
  }, {
    heading: "desktop-browsers",
    content: "Edge"
  }, {
    heading: "desktop-browsers",
    content: "Not available"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "desktop-browsers",
    content: "Browser"
  }, {
    heading: "desktop-browsers",
    content: "Version requirements"
  }, {
    heading: "desktop-browsers",
    content: "Receiving audio and video Streams"
  }, {
    heading: "desktop-browsers",
    content: "Publishing audio and video streams"
  }, {
    heading: "desktop-browsers",
    content: "Screen sharing"
  }, {
    heading: "desktop-browsers",
    content: "Chrome"
  }, {
    heading: "desktop-browsers",
    content: "Version 65 or above"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "desktop-browsers",
    content: "Firefox"
  }, {
    heading: "desktop-browsers",
    content: "Version 69 or above"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "desktop-browsers",
    content: "Edge"
  }, {
    heading: "desktop-browsers",
    content: "Version 80 or above"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "desktop-browsers",
    content: "Browser"
  }, {
    heading: "desktop-browsers",
    content: "Version requirements"
  }, {
    heading: "desktop-browsers",
    content: "Receiving audio and video Streams"
  }, {
    heading: "desktop-browsers",
    content: "Publishing audio and video streams"
  }, {
    heading: "desktop-browsers",
    content: "Screen sharing"
  }, {
    heading: "desktop-browsers",
    content: "Chrome"
  }, {
    heading: "desktop-browsers",
    content: "Version 89 or above"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "desktop-browsers",
    content: "✔"
  }, {
    heading: "mobile-browsers",
    content: "Since version 4.6.0, the Web SDK optimizes the experience on mobile browsers. To improve your experience on mobile devices, Agora strongly recommends upgrading to the latest version."
  }, {
    heading: "mobile-browsers",
    content: "Browser"
  }, {
    heading: "mobile-browsers",
    content: "Version requirements"
  }, {
    heading: "mobile-browsers",
    content: "Receiving audio and video Streams"
  }, {
    heading: "mobile-browsers",
    content: "Publishing audio and video streams"
  }, {
    heading: "mobile-browsers",
    content: "Screen sharing"
  }, {
    heading: "mobile-browsers",
    content: "Chrome"
  }, {
    heading: "mobile-browsers",
    content: "Version 78 or above"
  }, {
    heading: "mobile-browsers",
    content: "✔"
  }, {
    heading: "mobile-browsers",
    content: "✔"
  }, {
    heading: "mobile-browsers",
    content: "✘"
  }, {
    heading: "mobile-browsers",
    content: "WeChat built-in browser"
  }, {
    heading: "mobile-browsers",
    content: "WeChat version 7.0.20 or above"
  }, {
    heading: "mobile-browsers",
    content: "✔"
  }, {
    heading: "mobile-browsers",
    content: "✔"
  }, {
    heading: "mobile-browsers",
    content: "✘"
  }, {
    heading: "mobile-browsers",
    content: "WeChat Work built-in browser"
  }, {
    heading: "mobile-browsers",
    content: "WeChat Work 3.1.6 or above"
  }, {
    heading: "mobile-browsers",
    content: "✔"
  }, {
    heading: "mobile-browsers",
    content: "✔"
  }, {
    heading: "mobile-browsers",
    content: "✘"
  }, {
    heading: "mobile-browsers",
    content: "iOS only supports the system WebView. Therefore, support for the Web SDK is only related to the iOS system version."
  }, {
    heading: "mobile-browsers",
    content: "iOS version ≥ 12.2 and \\< 14.3"
  }, {
    heading: "mobile-browsers",
    content: "Browser"
  }, {
    heading: "mobile-browsers",
    content: "Version requirements"
  }, {
    heading: "mobile-browsers",
    content: "Receiving audio and video Streams"
  }, {
    heading: "mobile-browsers",
    content: "Publishing audio and video streams"
  }, {
    heading: "mobile-browsers",
    content: "Screen sharing"
  }, {
    heading: "mobile-browsers",
    content: "Safari"
  }, {
    heading: "mobile-browsers",
    content: "Corresponding to iOS system version"
  }, {
    heading: "mobile-browsers",
    content: "✔"
  }, {
    heading: "mobile-browsers",
    content: "✔"
  }, {
    heading: "mobile-browsers",
    content: "✘"
  }, {
    heading: "mobile-browsers",
    content: "Chrome"
  }, {
    heading: "mobile-browsers",
    content: "No clear information"
  }, {
    heading: "mobile-browsers",
    content: "✔"
  }, {
    heading: "mobile-browsers",
    content: "✘"
  }, {
    heading: "mobile-browsers",
    content: "✘"
  }, {
    heading: "mobile-browsers",
    content: "WeChat built-in browser"
  }, {
    heading: "mobile-browsers",
    content: "WeChat version 8.0.13 or above"
  }, {
    heading: "mobile-browsers",
    content: "✔"
  }, {
    heading: "mobile-browsers",
    content: "✘"
  }, {
    heading: "mobile-browsers",
    content: "✘"
  }, {
    heading: "mobile-browsers",
    content: "WeChat Work built-in browser"
  }, {
    heading: "mobile-browsers",
    content: "WeChat Work 3.1.15 or above①"
  }, {
    heading: "mobile-browsers",
    content: "✔"
  }, {
    heading: "mobile-browsers",
    content: "✘"
  }, {
    heading: "mobile-browsers",
    content: "✘"
  }, {
    heading: "mobile-browsers",
    content: "iOS version ≥ 14.3"
  }, {
    heading: "mobile-browsers",
    content: "Browser"
  }, {
    heading: "mobile-browsers",
    content: "Version requirements"
  }, {
    heading: "mobile-browsers",
    content: "Receiving audio and video Streams"
  }, {
    heading: "mobile-browsers",
    content: "Publishing audio and video streams"
  }, {
    heading: "mobile-browsers",
    content: "Screen sharing"
  }, {
    heading: "mobile-browsers",
    content: "Safari"
  }, {
    heading: "mobile-browsers",
    content: "Corresponding to iOS system version"
  }, {
    heading: "mobile-browsers",
    content: "✔"
  }, {
    heading: "mobile-browsers",
    content: "✔"
  }, {
    heading: "mobile-browsers",
    content: "✘"
  }, {
    heading: "mobile-browsers",
    content: "Chrome"
  }, {
    heading: "mobile-browsers",
    content: "Version 92 or above"
  }, {
    heading: "mobile-browsers",
    content: "✔"
  }, {
    heading: "mobile-browsers",
    content: "✔"
  }, {
    heading: "mobile-browsers",
    content: "✘"
  }, {
    heading: "mobile-browsers",
    content: "WeChat built-in browser"
  }, {
    heading: "mobile-browsers",
    content: "WeChat version 8.0.13 or above"
  }, {
    heading: "mobile-browsers",
    content: "✔"
  }, {
    heading: "mobile-browsers",
    content: "✔"
  }, {
    heading: "mobile-browsers",
    content: "✘"
  }, {
    heading: "mobile-browsers",
    content: "WeChat Work built-in browser"
  }, {
    heading: "mobile-browsers",
    content: "WeChat Work 3.1.15 or above①"
  }, {
    heading: "mobile-browsers",
    content: "✔"
  }, {
    heading: "mobile-browsers",
    content: "✔"
  }, {
    heading: "mobile-browsers",
    content: "✘"
  }, {
    heading: "mobile-browsers",
    content: "Browser"
  }, {
    heading: "mobile-browsers",
    content: "Version requirements"
  }, {
    heading: "mobile-browsers",
    content: "Receiving audio and video Streams"
  }, {
    heading: "mobile-browsers",
    content: "Publishing audio and video streams"
  }, {
    heading: "mobile-browsers",
    content: "Screen sharing"
  }, {
    heading: "mobile-browsers",
    content: "Huawei Browser"
  }, {
    heading: "mobile-browsers",
    content: "Not available"
  }, {
    heading: "mobile-browsers",
    content: "✔"
  }, {
    heading: "mobile-browsers",
    content: "✔"
  }, {
    heading: "mobile-browsers",
    content: "✘"
  }, {
    heading: "check-browser-compatibility",
    content: "The Agora Web SDK provides the `checkSystemRequirements` method to determine if the SDK can be used in the current browser."
  }, {
    heading: "check-browser-compatibility",
    content: "*Platforms*:"
  }, {
    heading: "check-browser-compatibility",
    content: "Target Platform"
  }, {
    heading: "check-browser-compatibility",
    content: "Operating system version"
  }, {
    heading: "check-browser-compatibility",
    content: "IDE version"
  }, {
    heading: "check-browser-compatibility",
    content: "Windows"
  }, {
    heading: "check-browser-compatibility",
    content: `Windows 7 or later. RTC SDK supports the following:- x86
- x86-64`
  }, {
    heading: "check-browser-compatibility",
    content: "Microsoft Visual Studio 2017 or later"
  }, {
    heading: "check-browser-compatibility",
    content: "*MediaPlayer Kit*:"
  }, {
    heading: "check-browser-compatibility",
    content: "Type of media"
  }, {
    heading: "check-browser-compatibility",
    content: "Formats"
  }, {
    heading: "check-browser-compatibility",
    content: "Local files"
  }, {
    heading: "check-browser-compatibility",
    content: "AVI, MP4, MP3, MKV, and FLV"
  }, {
    heading: "check-browser-compatibility",
    content: "Online media streams"
  }, {
    heading: "check-browser-compatibility",
    content: "HTTP, HTTPS, RTMP and RTSP protocols"
  }, {
    heading: "check-browser-compatibility",
    content: "*Platforms*:"
  }, {
    heading: "check-browser-compatibility",
    content: "Target Platform"
  }, {
    heading: "check-browser-compatibility",
    content: "Supported version"
  }, {
    heading: "check-browser-compatibility",
    content: "Electron"
  }, {
    heading: "check-browser-compatibility",
    content: "Electron ≥ 1.8.3, \\< 25 - Windows (x86, x86-64)- macOS"
  }, {
    heading: "check-browser-compatibility",
    content: "Flutter 2.10.5 or later"
  }, {
    heading: "check-browser-compatibility",
    content: "If you are developing a desktop application for Windows, macOS or Linux, make sure your development device meets the Flutter desktop development requirements."
  }, {
    heading: "check-browser-compatibility",
    content: "*Platforms*:"
  }, {
    heading: "check-browser-compatibility",
    content: "Target platform"
  }, {
    heading: "check-browser-compatibility",
    content: "Environment requirements"
  }, {
    heading: "check-browser-compatibility",
    content: "Android"
  }, {
    heading: "check-browser-compatibility",
    content: `* macOS 10.15 or later
* Windows 10 or higher
* Latest version of Android Studio
* Two Android devices`
  }, {
    heading: "check-browser-compatibility",
    content: "iOS"
  }, {
    heading: "check-browser-compatibility",
    content: `* macOS 10.15 or later
* Latest version of Xcode
* Two iOS devices`
  }, {
    heading: "check-browser-compatibility",
    content: "macOS"
  }, {
    heading: "check-browser-compatibility",
    content: `* macOS 10.15 or later
* Latest version of Xcode
* Two macOS devices`
  }, {
    heading: "check-browser-compatibility",
    content: "Windows"
  }, {
    heading: "check-browser-compatibility",
    content: `* Windows 10 or higher
* Latest version of Visual Studio
* Two Windows devices`
  }, {
    heading: "check-browser-compatibility",
    content: "*Platforms*:"
  }, {
    heading: "check-browser-compatibility",
    content: "Target Platform"
  }, {
    heading: "check-browser-compatibility",
    content: "Operating system version"
  }, {
    heading: "check-browser-compatibility",
    content: "React Native"
  }, {
    heading: "check-browser-compatibility",
    content: "React Native 0.59.10 or later."
  }, {
    heading: "check-browser-compatibility",
    content: "To ensure the best user experience, best practice is to use the latest version of each browser on the latest version of the operating system. Download the latest versions of:"
  }, {
    heading: "check-browser-compatibility",
    content: "Chrome"
  }, {
    heading: "check-browser-compatibility",
    content: "Firefox"
  }, {
    heading: "check-browser-compatibility",
    content: "Edge"
  }, {
    heading: "check-browser-compatibility",
    content: "Safari"
  }, {
    heading: "check-browser-compatibility",
    content: "*Platforms*:"
  }, {
    heading: "check-browser-compatibility",
    content: "Target Platform"
  }, {
    heading: "check-browser-compatibility",
    content: "Supported version"
  }, {
    heading: "check-browser-compatibility",
    content: "Unity"
  }, {
    heading: "check-browser-compatibility",
    content: `Unity 2017 or later. RTC SDK supports the following:- Android (armeabi-v7a, arm64-v8a, x86)
- iOS
- Windows (x86, x86-64)
- macOS`
  }, {
    heading: "check-browser-compatibility",
    content: "Platform"
  }, {
    heading: "check-browser-compatibility",
    content: "IDE"
  }, {
    heading: "check-browser-compatibility",
    content: "OS"
  }, {
    heading: "check-browser-compatibility",
    content: "Architecture"
  }, {
    heading: "check-browser-compatibility",
    content: "Note"
  }, {
    heading: "check-browser-compatibility",
    content: "Android"
  }, {
    heading: "check-browser-compatibility",
    content: "Android Studio 3.5.3 or later"
  }, {
    heading: "check-browser-compatibility",
    content: "see the Unreal Engine Android Development Requirements."
  }, {
    heading: "check-browser-compatibility",
    content: "arm64-v8a, arneabi-v7a"
  }, {
    heading: "check-browser-compatibility",
    content: "Real devices only (not working on emulators)  NDK version 21"
  }, {
    heading: "check-browser-compatibility",
    content: "iOS"
  }, {
    heading: "check-browser-compatibility",
    content: "XCode 11.0 or later"
  }, {
    heading: "check-browser-compatibility",
    content: "see the Unreal Engine iOS and tvOS Development Requirements."
  }, {
    heading: "check-browser-compatibility",
    content: "-"
  }, {
    heading: "check-browser-compatibility",
    content: "A valid Apple developer signature."
  }, {
    heading: "check-browser-compatibility",
    content: "MacOS"
  }, {
    heading: "check-browser-compatibility",
    content: "XCode 11.0 or later"
  }, {
    heading: "check-browser-compatibility",
    content: "OS X 10.11 or later"
  }, {
    heading: "check-browser-compatibility",
    content: "Intel, M1"
  }, {
    heading: "check-browser-compatibility",
    content: "A valid Apple developer signature."
  }, {
    heading: "check-browser-compatibility",
    content: "Windows (64bit)"
  }, {
    heading: "check-browser-compatibility",
    content: "Visual Studio 2019"
  }, {
    heading: "check-browser-compatibility",
    content: "Windows 7 SP1 or later"
  }, {
    heading: "check-browser-compatibility",
    content: "Intel"
  }, {
    heading: "check-browser-compatibility",
    content: "At least 1.65 GB of disk space after the IDE and relevant tools are installed."
  }, {
    heading: "check-browser-compatibility",
    content: "Windows (32bit)"
  }, {
    heading: "check-browser-compatibility",
    content: "Visual Studio 2019"
  }, {
    heading: "check-browser-compatibility",
    content: "Windows 7 SP1 or later"
  }, {
    heading: "check-browser-compatibility",
    content: "Intel"
  }, {
    heading: "check-browser-compatibility",
    content: "Unreal Engine 5 (UE5) is not supported on 32-bit Windows. If you want to use Unreal Engine 4 (UE4) with 32-bit Windows, uncomment the code relating to Win32 in the *AgoraPluginLibrary.Build.cs* file."
  }, {
    heading: "check-browser-compatibility",
    content: "Platform"
  }, {
    heading: "check-browser-compatibility",
    content: "IDE"
  }, {
    heading: "check-browser-compatibility",
    content: "OS"
  }, {
    heading: "check-browser-compatibility",
    content: "Architecture"
  }, {
    heading: "check-browser-compatibility",
    content: "Note"
  }, {
    heading: "check-browser-compatibility",
    content: "Android"
  }, {
    heading: "check-browser-compatibility",
    content: "Android Studio 3.5.3 or later"
  }, {
    heading: "check-browser-compatibility",
    content: "see the Unreal Engine Android Development Requirements."
  }, {
    heading: "check-browser-compatibility",
    content: "arm64-v8a, arneabi-v7a"
  }, {
    heading: "check-browser-compatibility",
    content: "Real devices only (not working on emulators)  NDK version 21"
  }, {
    heading: "check-browser-compatibility",
    content: "iOS"
  }, {
    heading: "check-browser-compatibility",
    content: "XCode 11.0 or later"
  }, {
    heading: "check-browser-compatibility",
    content: "see the Unreal Engine iOS and tvOS Development Requirements."
  }, {
    heading: "check-browser-compatibility",
    content: "-"
  }, {
    heading: "check-browser-compatibility",
    content: "A valid Apple developer signature."
  }, {
    heading: "check-browser-compatibility",
    content: "MacOS"
  }, {
    heading: "check-browser-compatibility",
    content: "XCode 11.0 or later"
  }, {
    heading: "check-browser-compatibility",
    content: "OS X 10.11 or later"
  }, {
    heading: "check-browser-compatibility",
    content: "Intel, M1"
  }, {
    heading: "check-browser-compatibility",
    content: "A valid Apple developer signature."
  }, {
    heading: "check-browser-compatibility",
    content: "Windows (64bit)"
  }, {
    heading: "check-browser-compatibility",
    content: "Visual Studio 2019"
  }, {
    heading: "check-browser-compatibility",
    content: "Windows 7 SP1 or later"
  }, {
    heading: "check-browser-compatibility",
    content: "Intel"
  }, {
    heading: "check-browser-compatibility",
    content: "At least 1.65 GB of disk space after the IDE and relevant tools are installed."
  }, {
    heading: "check-browser-compatibility",
    content: "Windows (32bit)"
  }, {
    heading: "check-browser-compatibility",
    content: "Visual Studio 2019"
  }, {
    heading: "check-browser-compatibility",
    content: "Windows 7 SP1 or later"
  }, {
    heading: "check-browser-compatibility",
    content: "Intel"
  }, {
    heading: "check-browser-compatibility",
    content: "Unreal Engine 5 (UE5) is not supported on 32-bit Windows. If you want to use Unreal Engine 4 (UE4) with 32-bit Windows, uncomment the code relating to Win32 in the *AgoraPluginLibrary.Build.cs* file."
  }],
  headings: [{
    id: "desktop-browsers",
    content: "Desktop browsers"
  }, {
    id: "mobile-browsers",
    content: "Mobile browsers"
  }, {
    id: "check-browser-compatibility",
    content: "Check browser compatibility"
  }]
};
export let toc = [{
  depth: 3,
  url: "#desktop-browsers",
  title: _jsx(_Fragment, {
    children: "Desktop browsers"
  })
}, {
  depth: 3,
  url: "#mobile-browsers",
  title: _jsx(_Fragment, {
    children: "Mobile browsers"
  })
}, {
  depth: 3,
  url: "#check-browser-compatibility",
  title: _jsx(_Fragment, {
    children: "Check browser compatibility"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!CodeBlockTab)
    _missingMdxReference("CodeBlockTab", true);
  if (!CodeBlockTabs)
    _missingMdxReference("CodeBlockTabs", true);
  if (!CodeBlockTabsList)
    _missingMdxReference("CodeBlockTabsList", true);
  if (!CodeBlockTabsTrigger)
    _missingMdxReference("CodeBlockTabsTrigger", true);
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This section lists the platforms and products you use to develop apps that interact with Agora SDRTN®."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","ios","macos","web","windows","electron","flutter","react-native","javascript","unity","unreal","blueprint"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.em, {
                children: "Platforms"
              }), ":"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Target Platform"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Operating system version"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "IDE version"
                  })]
                })
              }), _jsx(_components.tbody, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Android"
                  }), _jsxs(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: [_jsx(_components.p, {
                      children: "Android 4.1 or later.  RTC SDK supports the following ABIs."
                    }), _jsxs(_components.ul, {
                      children: [`
`, _jsx(_components.li, {
                        children: "armeabi-v7a"
                      }), `
`, _jsx(_components.li, {
                        children: "arm64-v8a"
                      }), `
`, _jsx(_components.li, {
                        children: "x86"
                      }), `
`, _jsx(_components.li, {
                        children: "x86-64"
                      }), `
`]
                    })]
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Android Studio 3.0 or later"
                  })]
                })
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.em, {
                children: "Browsers supported on Android"
              }), ":"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Browser or application"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Receiving streams"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Sending streams"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "The latest version of Chrome"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Supported"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Supported"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "The latest version of WeChat"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Supported"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Supported"
                  })]
                })]
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.em, {
                children: "MediaPlayer Kit"
              }), ":"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Type of media"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Formats"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Local files"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "AVI, MP4, MP3, MKV, and FLV"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Online media streams"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "HTTP, HTTPS, RTMP and RTSP protocols"
                  })]
                })]
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "ios",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "ios"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.em, {
                children: "Platforms"
              }), ":"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Target Platform"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Operating system version"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "IDE version"
                  })]
                })
              }), _jsx(_components.tbody, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "iOS"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "iOS 9.0 or later"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Xcode 9.0 or later"
                  })]
                })
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.em, {
                children: "Browsers supported on iOS"
              }), ":"]
            }), `
`, _jsx(_components.p, {
              children: "On iOS, all apps with built-in browsers use the system WebView. Support for RTC SDK relies only on the iOS system version."
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Browsers and applications"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Features"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "VP9"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "H.264"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Applications with WebView, such as WeChat and Chrome"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Receiving streams"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "iOS 12.2 and later"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "iOS 12.1.4 and later"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    }
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Sending streams"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "iOS 14.3 and later"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "iOS 14.3 and later"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Safari"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Sending and receiving streams"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "iOS 12.2 and later"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "iOS 11 and later"
                  })]
                })]
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.em, {
                children: "MediaPlayer Kit"
              }), ":"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Type of media"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Formats"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Local files"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "AVI, MP4, MP3, MKV, and FLV"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Online media streams"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "HTTP, HTTPS, RTMP and RTSP protocols"
                  })]
                })]
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "macos",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "macos"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.em, {
                children: "Platforms"
              }), ":"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Target Platform"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Operating system version"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "IDE version"
                  })]
                })
              }), _jsx(_components.tbody, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "macOS"
                  }), _jsxs(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: [_jsx(_components.p, {
                      children: "macOS 10.11 or later. RTC SDK supports the following:"
                    }), _jsxs(_components.ul, {
                      children: [`
`, _jsx(_components.li, {
                        children: "x86-64"
                      }), `
`, _jsx(_components.li, {
                        children: "arm64"
                      }), `
`]
                    })]
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Xcode 9.0 or later"
                  })]
                })
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.em, {
                children: "MediaPlayer Kit"
              }), ":"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Type of media"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Formats"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Local files"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "AVI, MP4, MP3, MKV, and FLV"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Online media streams"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "HTTP, HTTPS, RTMP and RTSP protocols"
                  })]
                })]
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "web",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "web"
        }), _jsx(_components.p, {
          children: "The Agora Web SDK is a real-time audio and RTC SDK built on WebRTC technology. Consequently, its compatibility depends on the browser’s support for WebRTC."
        }), _jsx(_components.h3, {
          id: "desktop-browsers",
          children: "Desktop browsers"
        }), _jsx(_components.p, {
          children: "Agora Web SDK is well supported on popular desktop browsers such as Chrome, Firefox, Edge, and Safari. To ensure the best user experience, best practice is to use the latest version of each browser on the latest version of the operating system."
        }), _jsxs(CodeBlockTabs, {
          defaultValue: "mac",
          children: [_jsxs(CodeBlockTabsList, {
            children: [_jsx(CodeBlockTabsTrigger, {
              value: "mac",
              children: "macOS"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "win",
              children: "Windows"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "chromeOS",
              children: "ChromeOS"
            })]
          }), _jsx(CodeBlockTab, {
            value: "mac",
            children: _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Browser"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Version requirements"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "center"
                    },
                    children: "Receiving audio and video Streams"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "center"
                    },
                    children: "Publishing audio and video streams"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "center"
                    },
                    children: "Screen sharing"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsx(_components.a, {
                      href: "https://www.google.com/intl/en/chrome/",
                      children: "Chrome"
                    })
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Version 65 or above"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsx(_components.a, {
                      href: "https://www.mozilla.org/firefox/new/",
                      children: "Firefox"
                    })
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Version 69 or above"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsx(_components.a, {
                      href: "https://support.apple.com/en-us/HT201541",
                      children: "Safari"
                    })
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Version 11 or above"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔ (Requires Safari 13 or above)"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsx(_components.a, {
                      href: "https://microsoft.com/edge",
                      children: "Edge"
                    })
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Not available"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  })]
                })]
              })]
            })
          }), _jsx(CodeBlockTab, {
            value: "win",
            children: _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Browser"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Version requirements"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "center"
                    },
                    children: "Receiving audio and video Streams"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "center"
                    },
                    children: "Publishing audio and video streams"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "center"
                    },
                    children: "Screen sharing"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsx(_components.a, {
                      href: "https://www.google.com/intl/en/chrome/",
                      children: "Chrome"
                    })
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Version 65 or above"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsx(_components.a, {
                      href: "https://www.mozilla.org/firefox/new/",
                      children: "Firefox"
                    })
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Version 69 or above"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsx(_components.a, {
                      href: "https://microsoft.com/edge",
                      children: "Edge"
                    })
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Version 80 or above"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  })]
                })]
              })]
            })
          }), _jsx(CodeBlockTab, {
            value: "chromeOS",
            children: _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Browser"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Version requirements"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "center"
                    },
                    children: "Receiving audio and video Streams"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "center"
                    },
                    children: "Publishing audio and video streams"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "center"
                    },
                    children: "Screen sharing"
                  })]
                })
              }), _jsx(_components.tbody, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsx(_components.a, {
                      href: "https://www.google.com/intl/en/chrome/",
                      children: "Chrome"
                    })
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Version 89 or above"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  })]
                })
              })]
            })
          })]
        }), _jsx(_components.h3, {
          id: "mobile-browsers",
          children: "Mobile browsers"
        }), _jsx(_components.p, {
          children: "Since version 4.6.0, the Web SDK optimizes the experience on mobile browsers. To improve your experience on mobile devices, Agora strongly recommends upgrading to the latest version."
        }), _jsxs(CodeBlockTabs, {
          defaultValue: "android",
          children: [_jsxs(CodeBlockTabsList, {
            children: [_jsx(CodeBlockTabsTrigger, {
              value: "android",
              children: "Android"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "ios",
              children: "iOS"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "harmony",
              children: "HarmonyOS"
            })]
          }), _jsx(CodeBlockTab, {
            value: "android",
            children: _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Browser"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Version requirements"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "center"
                    },
                    children: "Receiving audio and video Streams"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "center"
                    },
                    children: "Publishing audio and video streams"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "center"
                    },
                    children: "Screen sharing"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsx(_components.a, {
                      href: "https://www.google.com/intl/en/chrome/",
                      children: "Chrome"
                    })
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Version 78 or above"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✘"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "WeChat built-in browser"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "WeChat version 7.0.20 or above"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✘"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "WeChat Work built-in browser"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "WeChat Work 3.1.6 or above"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✘"
                  })]
                })]
              })]
            })
          }), _jsxs(CodeBlockTab, {
            value: "ios",
            children: [_jsx(_components.p, {
              children: "iOS only supports the system WebView. Therefore, support for the Web SDK is only related to the iOS system version."
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "iOS version ≥ 12.2 and < 14.3"
                }), `
`, _jsxs(_components.table, {
                  children: [_jsx(_components.thead, {
                    children: _jsxs(_components.tr, {
                      children: [_jsx(_components.th, {
                        style: {
                          textAlign: "left"
                        },
                        children: "Browser"
                      }), _jsx(_components.th, {
                        style: {
                          textAlign: "left"
                        },
                        children: "Version requirements"
                      }), _jsx(_components.th, {
                        style: {
                          textAlign: "center"
                        },
                        children: "Receiving audio and video Streams"
                      }), _jsx(_components.th, {
                        style: {
                          textAlign: "center"
                        },
                        children: "Publishing audio and video streams"
                      }), _jsx(_components.th, {
                        style: {
                          textAlign: "center"
                        },
                        children: "Screen sharing"
                      })]
                    })
                  }), _jsxs(_components.tbody, {
                    children: [_jsxs(_components.tr, {
                      children: [_jsx(_components.td, {
                        style: {
                          textAlign: "left"
                        },
                        children: "Safari"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "left"
                        },
                        children: "Corresponding to iOS system version"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✔"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✔"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✘"
                      })]
                    }), _jsxs(_components.tr, {
                      children: [_jsx(_components.td, {
                        style: {
                          textAlign: "left"
                        },
                        children: "Chrome"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "left"
                        },
                        children: "No clear information"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✔"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✘"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✘"
                      })]
                    }), _jsxs(_components.tr, {
                      children: [_jsx(_components.td, {
                        style: {
                          textAlign: "left"
                        },
                        children: "WeChat built-in browser"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "left"
                        },
                        children: "WeChat version 8.0.13 or above"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✔"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✘"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✘"
                      })]
                    }), _jsxs(_components.tr, {
                      children: [_jsx(_components.td, {
                        style: {
                          textAlign: "left"
                        },
                        children: "WeChat Work built-in browser"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "left"
                        },
                        children: "WeChat Work 3.1.15 or above①"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✔"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✘"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✘"
                      })]
                    })]
                  })]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "iOS version ≥ 14.3"
                }), `
`, _jsxs(_components.table, {
                  children: [_jsx(_components.thead, {
                    children: _jsxs(_components.tr, {
                      children: [_jsx(_components.th, {
                        style: {
                          textAlign: "left"
                        },
                        children: "Browser"
                      }), _jsx(_components.th, {
                        style: {
                          textAlign: "left"
                        },
                        children: "Version requirements"
                      }), _jsx(_components.th, {
                        style: {
                          textAlign: "center"
                        },
                        children: "Receiving audio and video Streams"
                      }), _jsx(_components.th, {
                        style: {
                          textAlign: "center"
                        },
                        children: "Publishing audio and video streams"
                      }), _jsx(_components.th, {
                        style: {
                          textAlign: "center"
                        },
                        children: "Screen sharing"
                      })]
                    })
                  }), _jsxs(_components.tbody, {
                    children: [_jsxs(_components.tr, {
                      children: [_jsx(_components.td, {
                        style: {
                          textAlign: "left"
                        },
                        children: "Safari"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "left"
                        },
                        children: "Corresponding to iOS system version"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✔"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✔"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✘"
                      })]
                    }), _jsxs(_components.tr, {
                      children: [_jsx(_components.td, {
                        style: {
                          textAlign: "left"
                        },
                        children: "Chrome"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "left"
                        },
                        children: "Version 92 or above"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✔"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✔"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✘"
                      })]
                    }), _jsxs(_components.tr, {
                      children: [_jsx(_components.td, {
                        style: {
                          textAlign: "left"
                        },
                        children: "WeChat built-in browser"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "left"
                        },
                        children: "WeChat version 8.0.13 or above"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✔"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✔"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✘"
                      })]
                    }), _jsxs(_components.tr, {
                      children: [_jsx(_components.td, {
                        style: {
                          textAlign: "left"
                        },
                        children: "WeChat Work built-in browser"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "left"
                        },
                        children: "WeChat Work 3.1.15 or above①"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✔"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✔"
                      }), _jsx(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "✘"
                      })]
                    })]
                  })]
                }), `
`]
              }), `
`]
            })]
          }), _jsx(CodeBlockTab, {
            value: "harmony",
            children: _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Browser"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Version requirements"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "center"
                    },
                    children: "Receiving audio and video Streams"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "center"
                    },
                    children: "Publishing audio and video streams"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "center"
                    },
                    children: "Screen sharing"
                  })]
                })
              }), _jsx(_components.tbody, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Huawei Browser"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Not available"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✔"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "center"
                    },
                    children: "✘"
                  })]
                })
              })]
            })
          })]
        }), _jsx(_components.h3, {
          id: "check-browser-compatibility",
          children: "Check browser compatibility"
        }), _jsxs(_components.p, {
          children: ["The Agora Web SDK provides the ", _jsx(_components.code, {
            children: "checkSystemRequirements"
          }), " method to determine if the SDK can be used in the current browser."]
        }), _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " result"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraRTC."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "checkSystemRequirements"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// result is true for support, false for non-support"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "console."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "log"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(result);"
                })]
              })]
            })
          })
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "windows",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "windows"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.em, {
                children: "Platforms"
              }), ":"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Target Platform"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Operating system version"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "IDE version"
                  })]
                })
              }), _jsx(_components.tbody, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Windows"
                  }), _jsxs(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: [_jsx(_components.p, {
                      children: "Windows 7 or later. RTC SDK supports the following:"
                    }), _jsxs(_components.ul, {
                      children: [`
`, _jsx(_components.li, {
                        children: "x86"
                      }), `
`, _jsx(_components.li, {
                        children: "x86-64"
                      }), `
`]
                    })]
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Microsoft Visual Studio 2017 or later"
                  })]
                })
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.em, {
                children: "MediaPlayer Kit"
              }), ":"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Type of media"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Formats"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Local files"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "AVI, MP4, MP3, MKV, and FLV"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Online media streams"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "HTTP, HTTPS, RTMP and RTSP protocols"
                  })]
                })]
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "electron",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "electron"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.em, {
                children: "Platforms"
              }), ":"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Target Platform"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Supported version"
                  })]
                })
              }), _jsx(_components.tbody, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Electron"
                  }), _jsxs(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: [_jsx(_components.p, {
                      children: "Electron ≥ 1.8.3, < 25 - Windows (x86, x86-64)"
                    }), _jsxs(_components.ul, {
                      children: [`
`, _jsx(_components.li, {
                        children: "macOS"
                      }), `
`]
                    })]
                  })]
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "flutter",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "flutter"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.a, {
                href: "https://docs.flutter.dev/get-started/install",
                children: "Flutter"
              }), " 2.10.5 or later"]
            }), `
`, _jsxs(_components.p, {
              children: ["If you are developing a desktop application for Windows, macOS or Linux, make sure your development device meets the ", _jsx(_components.a, {
                href: "https://docs.flutter.dev/development/platform-integration/desktop",
                children: "Flutter desktop development requirements"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.em, {
                children: "Platforms"
              }), ":"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Target platform"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Environment requirements"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Android"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsxs(_components.ul, {
                      children: [`
`, _jsx(_components.li, {
                        children: "macOS 10.15 or later"
                      }), `
`, _jsx(_components.li, {
                        children: "Windows 10 or higher"
                      }), `
`, _jsx(_components.li, {
                        children: "Latest version of Android Studio"
                      }), `
`, _jsx(_components.li, {
                        children: "Two Android devices"
                      }), `
`]
                    })
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "iOS"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsxs(_components.ul, {
                      children: [`
`, _jsx(_components.li, {
                        children: "macOS 10.15 or later"
                      }), `
`, _jsx(_components.li, {
                        children: "Latest version of Xcode"
                      }), `
`, _jsx(_components.li, {
                        children: "Two iOS devices"
                      }), `
`]
                    })
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "macOS"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsxs(_components.ul, {
                      children: [`
`, _jsx(_components.li, {
                        children: "macOS 10.15 or later"
                      }), `
`, _jsx(_components.li, {
                        children: "Latest version of Xcode"
                      }), `
`, _jsx(_components.li, {
                        children: "Two macOS devices"
                      }), `
`]
                    })
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Windows"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsxs(_components.ul, {
                      children: [`
`, _jsx(_components.li, {
                        children: "Windows 10 or higher"
                      }), `
`, _jsx(_components.li, {
                        children: "Latest version of Visual Studio"
                      }), `
`, _jsx(_components.li, {
                        children: "Two Windows devices"
                      }), `
`]
                    })
                  })]
                })]
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "react-native",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "react-native"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.em, {
                children: "Platforms"
              }), ":"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Target Platform"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Operating system version"
                  })]
                })
              }), _jsx(_components.tbody, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "React Native"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "React Native 0.59.10 or later."
                  })]
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "javascript",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "javascript"
        }), _jsx(_components.p, {
          children: "To ensure the best user experience, best practice is to use the latest version of each browser on the latest version of the operating system. Download the latest versions of:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://www.google.com/intl/en/chrome/",
              children: "Chrome"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://www.mozilla.org/firefox/new/",
              children: "Firefox"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://microsoft.com/edge",
              children: "Edge"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://support.apple.com/en-hk/HT201541",
              children: "Safari"
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "unity",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "unity"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.em, {
                children: "Platforms"
              }), ":"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Target Platform"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Supported version"
                  })]
                })
              }), _jsx(_components.tbody, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Unity"
                  }), _jsxs(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: [_jsx(_components.p, {
                      children: "Unity 2017 or later. RTC SDK supports the following:"
                    }), _jsxs(_components.ul, {
                      children: [`
`, _jsx(_components.li, {
                        children: "Android (armeabi-v7a, arm64-v8a, x86)"
                      }), `
`, _jsx(_components.li, {
                        children: "iOS"
                      }), `
`, _jsx(_components.li, {
                        children: "Windows (x86, x86-64)"
                      }), `
`, _jsx(_components.li, {
                        children: "macOS"
                      }), `
`]
                    })]
                  })]
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "unreal",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "unreal"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Platform"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "IDE"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "OS"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Architecture"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Note"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Android"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Android Studio 3.5.3 or later"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["see ", _jsx(_components.a, {
                  href: "https://docs.unrealengine.com/4.27/en-US/SharingAndReleasing/Mobile/Android/AndroidSDKRequirements/",
                  children: "the Unreal Engine Android Development Requirements."
                })]
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "arm64-v8a, arneabi-v7a"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Real devices only (not working on emulators)  NDK version 21"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "iOS"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "XCode 11.0 or later"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["see ", _jsx(_components.a, {
                  href: "https://docs.unrealengine.com/4.27/en-US/SharingAndReleasing/Mobile/iOS/DeviceCompatibility/",
                  children: "the Unreal Engine iOS and tvOS Development Requirements."
                })]
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "-"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "A valid Apple developer signature."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "MacOS"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "XCode 11.0 or later"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "OS X 10.11 or later"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Intel, M1"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "A valid Apple developer signature."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Windows (64bit)"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Visual Studio 2019"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Windows 7 SP1 or later"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Intel"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "At least 1.65 GB of disk space after the IDE and relevant tools are installed."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Windows (32bit)"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Visual Studio 2019"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Windows 7 SP1 or later"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Intel"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Unreal Engine 5 (UE5) is not supported on 32-bit Windows. If you want to use Unreal Engine 4 (UE4) with 32-bit Windows, uncomment the code relating to Win32 in the ", _jsx(_components.em, {
                  children: "AgoraPluginLibrary.Build.cs"
                }), " file."]
              })]
            })]
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "blueprint",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "blueprint"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Platform"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "IDE"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "OS"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Architecture"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Note"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Android"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Android Studio 3.5.3 or later"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["see ", _jsx(_components.a, {
                  href: "https://docs.unrealengine.com/4.27/en-US/SharingAndReleasing/Mobile/Android/AndroidSDKRequirements/",
                  children: "the Unreal Engine Android Development Requirements."
                })]
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "arm64-v8a, arneabi-v7a"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Real devices only (not working on emulators)  NDK version 21"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "iOS"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "XCode 11.0 or later"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["see ", _jsx(_components.a, {
                  href: "https://docs.unrealengine.com/4.27/en-US/SharingAndReleasing/Mobile/iOS/DeviceCompatibility/",
                  children: "the Unreal Engine iOS and tvOS Development Requirements."
                })]
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "-"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "A valid Apple developer signature."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "MacOS"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "XCode 11.0 or later"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "OS X 10.11 or later"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Intel, M1"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "A valid Apple developer signature."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Windows (64bit)"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Visual Studio 2019"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Windows 7 SP1 or later"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Intel"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "At least 1.65 GB of disk space after the IDE and relevant tools are installed."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Windows (32bit)"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Visual Studio 2019"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Windows 7 SP1 or later"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Intel"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Unreal Engine 5 (UE5) is not supported on 32-bit Windows. If you want to use Unreal Engine 4 (UE4) with 32-bit Windows, uncomment the code relating to Win32 in the ", _jsx(_components.em, {
                  children: "AgoraPluginLibrary.Build.cs"
                }), " file."]
              })]
            })]
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })]
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
