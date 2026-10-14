import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Video extension",
  description: "Use the APIs provided by the RTC SDK to build a video extension."
};
export let _markdown = `

The video filters you create are easily integrated into apps to supply visual effects and background processing.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;web&#x22;,&#x22;windows&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    ## Understand the tech [#understand-the-tech]

    A video filter accesses video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels.

    ![Video extension pipeline](https://assets-docs.agora.io/images/video-sdk/extension-video-filter.png)

    A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and playback. To modify the voice or video data in the transmission pipeline, video extensions are inserted into either the pre-processing or post-processing stage.

    ## Prerequisites [#prerequisites]

    * Android Studio 4.1 or higher.
    * Android SDK API Level 24 or higher.
    * A mobile device that runs Android 4.1 or higher.
    * A project to develop in.

    ## Project setup [#project-setup]

    In order to integrate an extension into your project:

    * Follow the SDK setup flow in [Quickstart - integrate an extension](../../quickstart-integrate.mdx).
    * Prepare the Android project structure and Gradle dependencies required for the extension package.

    You are now ready to develop your extension.

    ## Create a video extension [#create-a-video-extension]

    After encapsulating the filter into an extension, you need to register and package it into a \`.aar\` or \`.so\` file, and submit it together with a file that contains the extension name, vendor name, and filter name to Agora.

    ### Package the extension [#package-the-extension]

    1. Register the extension.

       Register the extension with the \`REGISTER_AGORA_EXTENSION_PROVIDER\` macro in \`AgoraExtensionProviderEntry.h\`. Use this macro at the entrance of the extension implementation. When the SDK loads the extension, this macro automatically registers it to the SDK. For example:

       \`\`\`cpp
       REGISTER_AGORA_EXTENSION_PROVIDER(ByteDance, agora::extension::ExtensionProvider);
       \`\`\`

    2. Link the \`libagora-rtc-sdk-jni.so\` file.

       In \`CMakeLists.txt\`, specify the path to save the \`libagora-rtc-sdk-jni.so\` file in the downloaded SDK package according to the following table:

       | File                             | Path                                                                     |
       | -------------------------------- | ------------------------------------------------------------------------ |
       | 64-bit \`libagora-rtc-sdk-jni.so\` | \`AgoraWithByteDanceAndroid/agora-bytedance/src/main/agoraLibs/arm64-v8a\` |
       | 32-bit \`libagora-rtc-sdk-jni.so\` | \`AgoraWithByteDanceAndroid/agora-bytedance/src/main/agoraLibs/arm64-v7a\` |

    3. Provide extension information.

       Create a \`.java\` or \`.md\` file to provide the following information:

       * \`EXTENSION_NAME\`: The name of the target link library used in \`CMakeLists.txt\`. For example, for a \`.so\` file named \`libagora-bytedance.so\`, the \`EXTENSION_NAME\` should be \`agora-bytedance\`.
       * \`EXTENSION_VENDOR_NAME\`: The name of the extension provider, which is used for registering in the \`agora-bytedance.cpp\` file.
       * \`EXTENSION_FILTER_NAME\`: The name of the filter, which is defined in \`ExtensionProvider.h\`.

    ## Test your implementation [#test-your-implementation]

    * Run functional and performance tests.
    * Validate the extension listing in Agora's test environment.
    * Prepare the public integration document and update it after end-to-end verification.

    You are then ready to [Publish your extension](../publish-extension.md).

    ## Reference [#reference]

    * [RtcEngineConfig.addExtension](/en/api-reference/rtc/android/class-and-enum/classes/class-rtcengineconfig)
    * [enableExtension](/en/api-reference/rtc/android/video/pre-and-post-processing/extensions)
    * [setExtensionProperty](/en/api-reference/rtc/android/video/pre-and-post-processing/extensions)
    * [IMediaExtensionObserver](/en/api-reference/rtc/android/class-and-enum/interfaces/class-imediaextensionobserver)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    ## Understand the tech [#understand-the-tech-1]

    A video filter accesses video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels.

    ![Video extension pipeline](https://assets-docs.agora.io/images/video-sdk/extension-video-filter.png)

    A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and playback. To modify the voice or video data in the transmission pipeline, video extensions are inserted into either the pre-processing or post-processing stage.

    ## Prerequisites [#prerequisites-1]

    * Xcode 12.0 or higher.
    * A device running iOS 9.0 or higher.
    * A project to develop in.

    ## Project setup [#project-setup-1]

    * Follow the iOS SDK setup flow in [Quickstart - integrate an extension](../../quickstart-integrate.mdx).
    * Prepare the project structure, frameworks, and signing settings needed for your extension package.

    ## Create a video extension [#create-a-video-extension-1]

    Package the extension as an iOS framework or xcframework, register it with the SDK, and provide the metadata Agora needs for Marketplace integration.

    ## Reference [#reference-1]

    * [RTC iOS API reference](../../../../api-reference/rtc/ios.md)
    * [RTC iOS API reference](../../../../api-reference/rtc/ios.md)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    ## Understand the tech [#understand-the-tech-2]

    A video filter accesses video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels.

    ![Video extension pipeline](https://assets-docs.agora.io/images/video-sdk/extension-video-filter.png)

    A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and playback. To modify the voice or video data in the transmission pipeline, video extensions are inserted into either the pre-processing or post-processing stage.

    ## Prerequisites [#prerequisites-2]

    * Xcode 12.0 or higher.
    * A device running macOS 10.11 or higher.
    * An Apple developer account.
    * A project to develop in.

    ## Project setup [#project-setup-2]

    * Follow the macOS SDK setup flow in [Quickstart - integrate an extension](../../quickstart-integrate.mdx).
    * Prepare the framework packaging, code signing, and runtime loading flow for your extension.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    ## Understand the tech [#understand-the-tech-3]

    A video filter accesses video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels.

    ![Video extension pipeline](https://web-cdn.agora.io/docs-files/1648464654193)

    A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and playback. To modify the voice or video data in the transmission pipeline, video extensions are inserted into either the pre-processing or post-processing stage.

    ## Prerequisites [#prerequisites-3]

    * A [supported browser](../../reference/supported-platforms.mdx).
    * Physical media input devices such as a camera and a microphone.
    * A JavaScript package manager such as [npm](https://www.npmjs.com/package/npm).
    * A project to develop in.

    ## Project setup [#project-setup-3]

    * Start from the Web flow in [Quickstart - integrate an extension](../../quickstart-integrate.mdx).
    * Prepare your extension package, bundler integration, and runtime registration flow.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    ## Understand the tech [#understand-the-tech-4]

    A video filter accesses video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels.

    ![Video extension pipeline](https://assets-docs.agora.io/images/video-sdk/extension-video-filter.png)

    A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and playback. To modify the voice or video data in the transmission pipeline, video extensions are inserted into either the pre-processing or post-processing stage.

    ## Prerequisites [#prerequisites-4]

    * A device running Windows 7 or higher.
    * Microsoft Visual Studio 2017 or higher.
    * C#.
    * A project to develop in.

    ## Project setup [#project-setup-4]

    * Follow the Windows SDK setup flow in [Quickstart - integrate an extension](../../quickstart-integrate.mdx).
    * Prepare the extension DLL packaging and loading flow.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    ## Understand the tech [#understand-the-tech-5]

    A video filter accesses video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels.

    ## Prerequisites [#prerequisites-5]

    * Physical media input devices such as a camera and a microphone.
    * A JavaScript package manager such as [npm](https://www.npmjs.com/package/npm).
    * A project to develop in.

    ## Project setup [#project-setup-5]

    * Follow the Electron SDK setup flow in [Quickstart - integrate an extension](../../quickstart-integrate.mdx).
    * Prepare the native extension packaging and runtime loading flow.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    **We are still developing extensions for this platform. The docs will magically appear here as soon as it is released.**

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    **We are still developing extensions for this platform. The docs will magically appear here as soon as it is released.**

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    **We are still developing extensions for this platform. The docs will magically appear here as soon as it is released.**

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The video filters you create are easily integrated into apps to supply visual effects and background processing."
  }, {
    heading: "understand-the-tech",
    content: "A video filter accesses video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
  }, {
    heading: "understand-the-tech",
    content: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and playback. To modify the voice or video data in the transmission pipeline, video extensions are inserted into either the pre-processing or post-processing stage."
  }, {
    heading: "prerequisites",
    content: "Android Studio 4.1 or higher."
  }, {
    heading: "prerequisites",
    content: "Android SDK API Level 24 or higher."
  }, {
    heading: "prerequisites",
    content: "A mobile device that runs Android 4.1 or higher."
  }, {
    heading: "prerequisites",
    content: "A project to develop in."
  }, {
    heading: "project-setup",
    content: "In order to integrate an extension into your project:"
  }, {
    heading: "project-setup",
    content: "Follow the SDK setup flow in Quickstart - integrate an extension."
  }, {
    heading: "project-setup",
    content: "Prepare the Android project structure and Gradle dependencies required for the extension package."
  }, {
    heading: "project-setup",
    content: "You are now ready to develop your extension."
  }, {
    heading: "create-a-video-extension",
    content: "After encapsulating the filter into an extension, you need to register and package it into a `.aar` or `.so` file, and submit it together with a file that contains the extension name, vendor name, and filter name to Agora."
  }, {
    heading: "package-the-extension",
    content: "Register the extension."
  }, {
    heading: "package-the-extension",
    content: "Register the extension with the `REGISTER_AGORA_EXTENSION_PROVIDER` macro in `AgoraExtensionProviderEntry.h`. Use this macro at the entrance of the extension implementation. When the SDK loads the extension, this macro automatically registers it to the SDK. For example:"
  }, {
    heading: "package-the-extension",
    content: "Link the `libagora-rtc-sdk-jni.so` file."
  }, {
    heading: "package-the-extension",
    content: "In `CMakeLists.txt`, specify the path to save the `libagora-rtc-sdk-jni.so` file in the downloaded SDK package according to the following table:"
  }, {
    heading: "package-the-extension",
    content: "File"
  }, {
    heading: "package-the-extension",
    content: "Path"
  }, {
    heading: "package-the-extension",
    content: "64-bit `libagora-rtc-sdk-jni.so`"
  }, {
    heading: "package-the-extension",
    content: "`AgoraWithByteDanceAndroid/agora-bytedance/src/main/agoraLibs/arm64-v8a`"
  }, {
    heading: "package-the-extension",
    content: "32-bit `libagora-rtc-sdk-jni.so`"
  }, {
    heading: "package-the-extension",
    content: "`AgoraWithByteDanceAndroid/agora-bytedance/src/main/agoraLibs/arm64-v7a`"
  }, {
    heading: "package-the-extension",
    content: "Provide extension information."
  }, {
    heading: "package-the-extension",
    content: "Create a `.java` or `.md` file to provide the following information:"
  }, {
    heading: "package-the-extension",
    content: "`EXTENSION_NAME`: The name of the target link library used in `CMakeLists.txt`. For example, for a `.so` file named `libagora-bytedance.so`, the `EXTENSION_NAME` should be `agora-bytedance`."
  }, {
    heading: "package-the-extension",
    content: "`EXTENSION_VENDOR_NAME`: The name of the extension provider, which is used for registering in the `agora-bytedance.cpp` file."
  }, {
    heading: "package-the-extension",
    content: "`EXTENSION_FILTER_NAME`: The name of the filter, which is defined in `ExtensionProvider.h`."
  }, {
    heading: "test-your-implementation",
    content: "Run functional and performance tests."
  }, {
    heading: "test-your-implementation",
    content: "Validate the extension listing in Agora's test environment."
  }, {
    heading: "test-your-implementation",
    content: "Prepare the public integration document and update it after end-to-end verification."
  }, {
    heading: "test-your-implementation",
    content: "You are then ready to Publish your extension."
  }, {
    heading: "reference",
    content: "RtcEngineConfig.addExtension"
  }, {
    heading: "reference",
    content: "enableExtension"
  }, {
    heading: "reference",
    content: "setExtensionProperty"
  }, {
    heading: "reference",
    content: "IMediaExtensionObserver"
  }, {
    heading: "understand-the-tech-1",
    content: "A video filter accesses video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
  }, {
    heading: "understand-the-tech-1",
    content: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and playback. To modify the voice or video data in the transmission pipeline, video extensions are inserted into either the pre-processing or post-processing stage."
  }, {
    heading: "prerequisites-1",
    content: "Xcode 12.0 or higher."
  }, {
    heading: "prerequisites-1",
    content: "A device running iOS 9.0 or higher."
  }, {
    heading: "prerequisites-1",
    content: "A project to develop in."
  }, {
    heading: "project-setup-1",
    content: "Follow the iOS SDK setup flow in Quickstart - integrate an extension."
  }, {
    heading: "project-setup-1",
    content: "Prepare the project structure, frameworks, and signing settings needed for your extension package."
  }, {
    heading: "create-a-video-extension-1",
    content: "Package the extension as an iOS framework or xcframework, register it with the SDK, and provide the metadata Agora needs for Marketplace integration."
  }, {
    heading: "reference-1",
    content: "RTC iOS API reference"
  }, {
    heading: "reference-1",
    content: "RTC iOS API reference"
  }, {
    heading: "understand-the-tech-2",
    content: "A video filter accesses video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
  }, {
    heading: "understand-the-tech-2",
    content: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and playback. To modify the voice or video data in the transmission pipeline, video extensions are inserted into either the pre-processing or post-processing stage."
  }, {
    heading: "prerequisites-2",
    content: "Xcode 12.0 or higher."
  }, {
    heading: "prerequisites-2",
    content: "A device running macOS 10.11 or higher."
  }, {
    heading: "prerequisites-2",
    content: "An Apple developer account."
  }, {
    heading: "prerequisites-2",
    content: "A project to develop in."
  }, {
    heading: "project-setup-2",
    content: "Follow the macOS SDK setup flow in Quickstart - integrate an extension."
  }, {
    heading: "project-setup-2",
    content: "Prepare the framework packaging, code signing, and runtime loading flow for your extension."
  }, {
    heading: "understand-the-tech-3",
    content: "A video filter accesses video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
  }, {
    heading: "understand-the-tech-3",
    content: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and playback. To modify the voice or video data in the transmission pipeline, video extensions are inserted into either the pre-processing or post-processing stage."
  }, {
    heading: "prerequisites-3",
    content: "A supported browser."
  }, {
    heading: "prerequisites-3",
    content: "Physical media input devices such as a camera and a microphone."
  }, {
    heading: "prerequisites-3",
    content: "A JavaScript package manager such as npm."
  }, {
    heading: "prerequisites-3",
    content: "A project to develop in."
  }, {
    heading: "project-setup-3",
    content: "Start from the Web flow in Quickstart - integrate an extension."
  }, {
    heading: "project-setup-3",
    content: "Prepare your extension package, bundler integration, and runtime registration flow."
  }, {
    heading: "understand-the-tech-4",
    content: "A video filter accesses video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
  }, {
    heading: "understand-the-tech-4",
    content: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and playback. To modify the voice or video data in the transmission pipeline, video extensions are inserted into either the pre-processing or post-processing stage."
  }, {
    heading: "prerequisites-4",
    content: "A device running Windows 7 or higher."
  }, {
    heading: "prerequisites-4",
    content: "Microsoft Visual Studio 2017 or higher."
  }, {
    heading: "prerequisites-4",
    content: "C#."
  }, {
    heading: "prerequisites-4",
    content: "A project to develop in."
  }, {
    heading: "project-setup-4",
    content: "Follow the Windows SDK setup flow in Quickstart - integrate an extension."
  }, {
    heading: "project-setup-4",
    content: "Prepare the extension DLL packaging and loading flow."
  }, {
    heading: "understand-the-tech-5",
    content: "A video filter accesses video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
  }, {
    heading: "prerequisites-5",
    content: "Physical media input devices such as a camera and a microphone."
  }, {
    heading: "prerequisites-5",
    content: "A JavaScript package manager such as npm."
  }, {
    heading: "prerequisites-5",
    content: "A project to develop in."
  }, {
    heading: "project-setup-5",
    content: "Follow the Electron SDK setup flow in Quickstart - integrate an extension."
  }, {
    heading: "project-setup-5",
    content: "Prepare the native extension packaging and runtime loading flow."
  }, {
    heading: "project-setup-5",
    content: "**We are still developing extensions for this platform. The docs will magically appear here as soon as it is released.**"
  }, {
    heading: "project-setup-5",
    content: "**We are still developing extensions for this platform. The docs will magically appear here as soon as it is released.**"
  }, {
    heading: "project-setup-5",
    content: "**We are still developing extensions for this platform. The docs will magically appear here as soon as it is released.**"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "project-setup",
    content: "Project setup"
  }, {
    id: "create-a-video-extension",
    content: "Create a video extension"
  }, {
    id: "package-the-extension",
    content: "Package the extension"
  }, {
    id: "test-your-implementation",
    content: "Test your implementation"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "understand-the-tech-1",
    content: "Understand the tech"
  }, {
    id: "prerequisites-1",
    content: "Prerequisites"
  }, {
    id: "project-setup-1",
    content: "Project setup"
  }, {
    id: "create-a-video-extension-1",
    content: "Create a video extension"
  }, {
    id: "reference-1",
    content: "Reference"
  }, {
    id: "understand-the-tech-2",
    content: "Understand the tech"
  }, {
    id: "prerequisites-2",
    content: "Prerequisites"
  }, {
    id: "project-setup-2",
    content: "Project setup"
  }, {
    id: "understand-the-tech-3",
    content: "Understand the tech"
  }, {
    id: "prerequisites-3",
    content: "Prerequisites"
  }, {
    id: "project-setup-3",
    content: "Project setup"
  }, {
    id: "understand-the-tech-4",
    content: "Understand the tech"
  }, {
    id: "prerequisites-4",
    content: "Prerequisites"
  }, {
    id: "project-setup-4",
    content: "Project setup"
  }, {
    id: "understand-the-tech-5",
    content: "Understand the tech"
  }, {
    id: "prerequisites-5",
    content: "Prerequisites"
  }, {
    id: "project-setup-5",
    content: "Project setup"
  }]
};
export let toc = [{
  depth: 2,
  url: "#understand-the-tech",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#project-setup",
  title: _jsx(_Fragment, {
    children: "Project setup"
  })
}, {
  depth: 2,
  url: "#create-a-video-extension",
  title: _jsx(_Fragment, {
    children: "Create a video extension"
  })
}, {
  depth: 3,
  url: "#package-the-extension",
  title: _jsx(_Fragment, {
    children: "Package the extension"
  })
}, {
  depth: 2,
  url: "#test-your-implementation",
  title: _jsx(_Fragment, {
    children: "Test your implementation"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-1",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-1",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#project-setup-1",
  title: _jsx(_Fragment, {
    children: "Project setup"
  })
}, {
  depth: 2,
  url: "#create-a-video-extension-1",
  title: _jsx(_Fragment, {
    children: "Create a video extension"
  })
}, {
  depth: 2,
  url: "#reference-1",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-2",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-2",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#project-setup-2",
  title: _jsx(_Fragment, {
    children: "Project setup"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-3",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-3",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#project-setup-3",
  title: _jsx(_Fragment, {
    children: "Project setup"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-4",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-4",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#project-setup-4",
  title: _jsx(_Fragment, {
    children: "Project setup"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-5",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-5",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#project-setup-5",
  title: _jsx(_Fragment, {
    children: "Project setup"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The video filters you create are easily integrated into apps to supply visual effects and background processing."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","ios","macos","web","windows","electron","flutter","react-native","unity"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsx(_components.h2, {
          id: "understand-the-tech",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "A video filter accesses video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/extension-video-filter.png",
            alt: "Video extension pipeline"
          })
        }), _jsx(_components.p, {
          children: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and playback. To modify the voice or video data in the transmission pipeline, video extensions are inserted into either the pre-processing or post-processing stage."
        }), _jsx(_components.h2, {
          id: "prerequisites",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Android Studio 4.1 or higher."
          }), `
`, _jsx(_components.li, {
            children: "Android SDK API Level 24 or higher."
          }), `
`, _jsx(_components.li, {
            children: "A mobile device that runs Android 4.1 or higher."
          }), `
`, _jsx(_components.li, {
            children: "A project to develop in."
          }), `
`]
        }), _jsx(_components.h2, {
          id: "project-setup",
          children: "Project setup"
        }), _jsx(_components.p, {
          children: "In order to integrate an extension into your project:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Follow the SDK setup flow in ", _jsx(_components.a, {
              href: "../../quickstart-integrate.mdx",
              children: "Quickstart - integrate an extension"
            }), "."]
          }), `
`, _jsx(_components.li, {
            children: "Prepare the Android project structure and Gradle dependencies required for the extension package."
          }), `
`]
        }), _jsx(_components.p, {
          children: "You are now ready to develop your extension."
        }), _jsx(_components.h2, {
          id: "create-a-video-extension",
          children: "Create a video extension"
        }), _jsxs(_components.p, {
          children: ["After encapsulating the filter into an extension, you need to register and package it into a ", _jsx(_components.code, {
            children: ".aar"
          }), " or ", _jsx(_components.code, {
            children: ".so"
          }), " file, and submit it together with a file that contains the extension name, vendor name, and filter name to Agora."]
        }), _jsx(_components.h3, {
          id: "package-the-extension",
          children: "Package the extension"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Register the extension."
            }), `
`, _jsxs(_components.p, {
              children: ["Register the extension with the ", _jsx(_components.code, {
                children: "REGISTER_AGORA_EXTENSION_PROVIDER"
              }), " macro in ", _jsx(_components.code, {
                children: "AgoraExtensionProviderEntry.h"
              }), ". Use this macro at the entrance of the extension implementation. When the SDK loads the extension, this macro automatically registers it to the SDK. For example:"]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "REGISTER_AGORA_EXTENSION_PROVIDER"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(ByteDance, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "agora"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "extension"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::ExtensionProvider);"
                    })]
                  })
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Link the ", _jsx(_components.code, {
                children: "libagora-rtc-sdk-jni.so"
              }), " file."]
            }), `
`, _jsxs(_components.p, {
              children: ["In ", _jsx(_components.code, {
                children: "CMakeLists.txt"
              }), ", specify the path to save the ", _jsx(_components.code, {
                children: "libagora-rtc-sdk-jni.so"
              }), " file in the downloaded SDK package according to the following table:"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    children: "File"
                  }), _jsx(_components.th, {
                    children: "Path"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsxs(_components.td, {
                    children: ["64-bit ", _jsx(_components.code, {
                      children: "libagora-rtc-sdk-jni.so"
                    })]
                  }), _jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: "AgoraWithByteDanceAndroid/agora-bytedance/src/main/agoraLibs/arm64-v8a"
                    })
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsxs(_components.td, {
                    children: ["32-bit ", _jsx(_components.code, {
                      children: "libagora-rtc-sdk-jni.so"
                    })]
                  }), _jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: "AgoraWithByteDanceAndroid/agora-bytedance/src/main/agoraLibs/arm64-v7a"
                    })
                  })]
                })]
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Provide extension information."
            }), `
`, _jsxs(_components.p, {
              children: ["Create a ", _jsx(_components.code, {
                children: ".java"
              }), " or ", _jsx(_components.code, {
                children: ".md"
              }), " file to provide the following information:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "EXTENSION_NAME"
                }), ": The name of the target link library used in ", _jsx(_components.code, {
                  children: "CMakeLists.txt"
                }), ". For example, for a ", _jsx(_components.code, {
                  children: ".so"
                }), " file named ", _jsx(_components.code, {
                  children: "libagora-bytedance.so"
                }), ", the ", _jsx(_components.code, {
                  children: "EXTENSION_NAME"
                }), " should be ", _jsx(_components.code, {
                  children: "agora-bytedance"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "EXTENSION_VENDOR_NAME"
                }), ": The name of the extension provider, which is used for registering in the ", _jsx(_components.code, {
                  children: "agora-bytedance.cpp"
                }), " file."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "EXTENSION_FILTER_NAME"
                }), ": The name of the filter, which is defined in ", _jsx(_components.code, {
                  children: "ExtensionProvider.h"
                }), "."]
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "test-your-implementation",
          children: "Test your implementation"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Run functional and performance tests."
          }), `
`, _jsx(_components.li, {
            children: "Validate the extension listing in Agora's test environment."
          }), `
`, _jsx(_components.li, {
            children: "Prepare the public integration document and update it after end-to-end verification."
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["You are then ready to ", _jsx(_components.a, {
            href: "../publish-extension.md",
            children: "Publish your extension"
          }), "."]
        }), _jsx(_components.h2, {
          id: "reference",
          children: "Reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/rtc/android/class-and-enum/classes/class-rtcengineconfig",
              children: "RtcEngineConfig.addExtension"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/rtc/android/video/pre-and-post-processing/extensions",
              children: "enableExtension"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/rtc/android/video/pre-and-post-processing/extensions",
              children: "setExtensionProperty"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/rtc/android/class-and-enum/interfaces/class-imediaextensionobserver",
              children: "IMediaExtensionObserver"
            })
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
        }), _jsx(_components.h2, {
          id: "understand-the-tech-1",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "A video filter accesses video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/extension-video-filter.png",
            alt: "Video extension pipeline"
          })
        }), _jsx(_components.p, {
          children: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and playback. To modify the voice or video data in the transmission pipeline, video extensions are inserted into either the pre-processing or post-processing stage."
        }), _jsx(_components.h2, {
          id: "prerequisites-1",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Xcode 12.0 or higher."
          }), `
`, _jsx(_components.li, {
            children: "A device running iOS 9.0 or higher."
          }), `
`, _jsx(_components.li, {
            children: "A project to develop in."
          }), `
`]
        }), _jsx(_components.h2, {
          id: "project-setup-1",
          children: "Project setup"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Follow the iOS SDK setup flow in ", _jsx(_components.a, {
              href: "../../quickstart-integrate.mdx",
              children: "Quickstart - integrate an extension"
            }), "."]
          }), `
`, _jsx(_components.li, {
            children: "Prepare the project structure, frameworks, and signing settings needed for your extension package."
          }), `
`]
        }), _jsx(_components.h2, {
          id: "create-a-video-extension-1",
          children: "Create a video extension"
        }), _jsx(_components.p, {
          children: "Package the extension as an iOS framework or xcframework, register it with the SDK, and provide the metadata Agora needs for Marketplace integration."
        }), _jsx(_components.h2, {
          id: "reference-1",
          children: "Reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "../../../../api-reference/rtc/ios.md",
              children: "RTC iOS API reference"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "../../../../api-reference/rtc/ios.md",
              children: "RTC iOS API reference"
            })
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
        }), _jsx(_components.h2, {
          id: "understand-the-tech-2",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "A video filter accesses video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/extension-video-filter.png",
            alt: "Video extension pipeline"
          })
        }), _jsx(_components.p, {
          children: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and playback. To modify the voice or video data in the transmission pipeline, video extensions are inserted into either the pre-processing or post-processing stage."
        }), _jsx(_components.h2, {
          id: "prerequisites-2",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Xcode 12.0 or higher."
          }), `
`, _jsx(_components.li, {
            children: "A device running macOS 10.11 or higher."
          }), `
`, _jsx(_components.li, {
            children: "An Apple developer account."
          }), `
`, _jsx(_components.li, {
            children: "A project to develop in."
          }), `
`]
        }), _jsx(_components.h2, {
          id: "project-setup-2",
          children: "Project setup"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Follow the macOS SDK setup flow in ", _jsx(_components.a, {
              href: "../../quickstart-integrate.mdx",
              children: "Quickstart - integrate an extension"
            }), "."]
          }), `
`, _jsx(_components.li, {
            children: "Prepare the framework packaging, code signing, and runtime loading flow for your extension."
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
        }), _jsx(_components.h2, {
          id: "understand-the-tech-3",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "A video filter accesses video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1648464654193",
            alt: "Video extension pipeline"
          })
        }), _jsx(_components.p, {
          children: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and playback. To modify the voice or video data in the transmission pipeline, video extensions are inserted into either the pre-processing or post-processing stage."
        }), _jsx(_components.h2, {
          id: "prerequisites-3",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["A ", _jsx(_components.a, {
              href: "../../reference/supported-platforms.mdx",
              children: "supported browser"
            }), "."]
          }), `
`, _jsx(_components.li, {
            children: "Physical media input devices such as a camera and a microphone."
          }), `
`, _jsxs(_components.li, {
            children: ["A JavaScript package manager such as ", _jsx(_components.a, {
              href: "https://www.npmjs.com/package/npm",
              children: "npm"
            }), "."]
          }), `
`, _jsx(_components.li, {
            children: "A project to develop in."
          }), `
`]
        }), _jsx(_components.h2, {
          id: "project-setup-3",
          children: "Project setup"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Start from the Web flow in ", _jsx(_components.a, {
              href: "../../quickstart-integrate.mdx",
              children: "Quickstart - integrate an extension"
            }), "."]
          }), `
`, _jsx(_components.li, {
            children: "Prepare your extension package, bundler integration, and runtime registration flow."
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "windows",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "windows"
        }), _jsx(_components.h2, {
          id: "understand-the-tech-4",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "A video filter accesses video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/extension-video-filter.png",
            alt: "Video extension pipeline"
          })
        }), _jsx(_components.p, {
          children: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and playback. To modify the voice or video data in the transmission pipeline, video extensions are inserted into either the pre-processing or post-processing stage."
        }), _jsx(_components.h2, {
          id: "prerequisites-4",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "A device running Windows 7 or higher."
          }), `
`, _jsx(_components.li, {
            children: "Microsoft Visual Studio 2017 or higher."
          }), `
`, _jsx(_components.li, {
            children: "C#."
          }), `
`, _jsx(_components.li, {
            children: "A project to develop in."
          }), `
`]
        }), _jsx(_components.h2, {
          id: "project-setup-4",
          children: "Project setup"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Follow the Windows SDK setup flow in ", _jsx(_components.a, {
              href: "../../quickstart-integrate.mdx",
              children: "Quickstart - integrate an extension"
            }), "."]
          }), `
`, _jsx(_components.li, {
            children: "Prepare the extension DLL packaging and loading flow."
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
        }), _jsx(_components.h2, {
          id: "understand-the-tech-5",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "A video filter accesses video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
        }), _jsx(_components.h2, {
          id: "prerequisites-5",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Physical media input devices such as a camera and a microphone."
          }), `
`, _jsxs(_components.li, {
            children: ["A JavaScript package manager such as ", _jsx(_components.a, {
              href: "https://www.npmjs.com/package/npm",
              children: "npm"
            }), "."]
          }), `
`, _jsx(_components.li, {
            children: "A project to develop in."
          }), `
`]
        }), _jsx(_components.h2, {
          id: "project-setup-5",
          children: "Project setup"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Follow the Electron SDK setup flow in ", _jsx(_components.a, {
              href: "../../quickstart-integrate.mdx",
              children: "Quickstart - integrate an extension"
            }), "."]
          }), `
`, _jsx(_components.li, {
            children: "Prepare the native extension packaging and runtime loading flow."
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
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "We are still developing extensions for this platform. The docs will magically appear here as soon as it is released."
          })
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "react-native",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "react-native"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "We are still developing extensions for this platform. The docs will magically appear here as soon as it is released."
          })
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "unity",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "unity"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "We are still developing extensions for this platform. The docs will magically appear here as soon as it is released."
          })
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
