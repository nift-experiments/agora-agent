import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Dubbing and Voice Changer",
  description: "Dubbing AI Voice Changer extension is an encapsulation of the core API of real-time AI voice conversion."
};
export let _markdown = `

Dubbing AI Voice Changer extension enables you to change the audio timbre.

This page shows you how to integrate the Dubbing AI Voice Changer extension in your app.

## Understand the tech [#understand-the-tech]

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="android" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="android" />

    Using the [setExtensionProperty](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setextensionproperty) method provided in Agora SDK v4.x and passing in the specified \`key\` and \`value\` parameters, you can quickly integrate real-time AI voice conversion ability into your app.

    The \`key\` parameter you specify in the \`setExtensionProperty\` method corresponds to the name of the API, and the \`value\` parameter wraps some or all of the parameters of the API in JSON format. By passing in the specified \`key\` and \`value\` parameters, you can call the corresponding API to realize the functions related to real-time AI sound conversion.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="ios" />

    Using the [setExtensionPropertyWithVendor](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setextensionpropertywithvendor\\(_\\:extension\\:extensioninfo\\:key\\:value:\\)) method provided in Agora SDK v4.x and passing in the specified \`key\` and \`value\` parameters, you can quickly integrate real-time AI voice conversion ability into your app.

    The \`key\` parameter you specify in the \`setExtensionPropertyWithVendor\` method corresponds to the name of the API, and the \`value\` parameter wraps some or all of the parameters of the API in JSON format. By passing in the specified \`key\` and \`value\` parameters, you can call the corresponding API to realize the functions related to real-time AI sound conversion.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>

## Prerequisites [#prerequisites]

Ensure that your development environment meets the following requirements:

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="android" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="android" />

    * Android Studio 4.1 or later.
    * A physical device (not an emulator) running Android 5.0 or later.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="ios" />

    * Xcode 9.0 or later.
    * A physical device (not an emulator) running iOS 8.0 or later.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>

* Dubbing AI Voice Changer is used with Agora Voice SDK v4.x.

  Refer to the [SDK quickstart](/en/realtime-media/rtc/voice-quickstart) to integrate Voice SDK v4.x and implement basic voice calling.

## Integrate the extension [#integrate-the-extension]

This section shows you how to integrate the Dubbing AI Voice Changer extension, and call the core API to implement the voice changing function.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="android" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="android" />

    1. **Integrate the Dubbing AI Voice Changer extension**

       To integrate the extension in your project:

       1. Enter the [Extensions Marketplace](https://console.agora.io/extensions-marketplace) and download the **Dubbing AI Voice Changer** extension package. After unzipping, save all \`.aar\` files to the project folder \`/app/libs\`.
       2. Get the following resource files and save them in the same directory of the project folder. For example, a new \`vc_model\` directory:
          * License file and tone files: Contact Agora to obtain these files. The suffix of the tone file is \`.dat\`, and the tone file is issued according to the license.
          * Model file: Download the required resources.
            ![Resource Files](https://assets-docs.agora.io/images/extensions-marketplace/resource-files.png)
       3. Open the \`app/build.gradle\` file and add the following lines under \`dependencies\`:

          \`\`\`java
          implementation fileTree(dir: "libs", include: ["*.jar", "*.aar"])
          \`\`\`

    2. **Enable the plugin**

       After creating and initializing \`RtcEngine\`, call \`enableExtension\` to enable the plug-in, before you call other APIs such as \`enableVideo\` and \`joinChannel\`.

       \`\`\`kotlin
       // Declare parameters
       private val EXTENSION_NAME = "dubbing_vc"
       private val EXTENSION_VENDOR_NAME = "Dubbing"
       private val EXTENSION_AUDIO_FILTER = "DubbingVC"

       private val changeSpeaker_ = "changeSpeaker"
       private val startRealTimeTranscribe_ = "startRealTimeTranscribe"
       private val stopRealTimeTranscribe_ = "stopRealTimeTranscribe"
       private val getSpeakersInfo_ = "getSpeakersInfo"

       val config = RtcEngineConfig()
       config.mContext = baseContext
       config.mAppId = appId
       config.mEventHandler = mRtcEventHandler
       // Load plugin
       config.addExtension(EXTENSION_NAME)
       config.mExtensionObserver = extensionObserver
       // Create and initialize RtcEngine
       mRtcEngine = RtcEngine.create(config)
       mRtcEngine.enableAudio()
       // Enable plugin
       mRtcEngine.enableExtension(EXTENSION_VENDOR_NAME, EXTENSION_AUDIO_FILTER, enable)
       \`\`\`

    3. **Set the resource file path**

       When you download and integrate the plug-in, the license, sound, and model files are saved to the specified directory. In this step, you specify the path where these resource files are located.

       \`\`\`kotlin
       val modelPath: String = "\${context.filesDir}\${File.separator}vc_model"
       \`\`\`

    4. **Get the tone list**

       After receiving the \`onExtensionStarted\` callback from Agora SDK, call \`getExtensionProperty\` passing in the \`getSpeakersInfo\` key to get the timbre list:

       \`\`\`kotlin
       val speakerList = mRtcEngine.getExtensionProperty(
           EXTENSION_VENDOR_NAME,
           EXTENSION_AUDIO_FILTER,
           getSpeakersInfo_
       )
       // Convert JSON to array
       val arr = JSONArray(speakerList)
       \`\`\`

       The timbre list is returned as JSON data that you parse yourself.

    5. **Start changing**

       Call \`setExtensionProperty\` and pass in the corresponding \`key\` and \`value\`:

       \`\`\`kotlin
       mRtcEngine.setExtensionProperty(
           EXTENSION_VENDOR_NAME,
           EXTENSION_AUDIO_FILTER,
           startRealTimeTranscribe_,
           "true"
       )
       \`\`\`

    6. **Select timbre**

       Pass in the timbre ID from the obtained timbre list to set the corresponding timbre:

       \`\`\`kotlin
       mRtcEngine.setExtensionProperty(
           EXTENSION_VENDOR_NAME,
           EXTENSION_AUDIO_FILTER,
           changeSpeaker_,
           id
       )
       \`\`\`

    7. **Stop changing**

       Call the API to stop the voice changer:

       \`\`\`kotlin
       mRtcEngine.setExtensionProperty(
           EXTENSION_VENDOR_NAME,
           EXTENSION_AUDIO_FILTER,
           stopRealTimeTranscribe_,
           "true"
       )
       \`\`\`

    8. **Release resources**

       Close the plug-in and release the resources used by the plug-in:

       \`\`\`kotlin
       mRtcEngine.enableExtension(EXTENSION_VENDOR_NAME, EXTENSION_AUDIO_FILTER, false)
       \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="ios" />

    1. **Integrate the Dubbing AI Voice Changer extension**

       To integrate the extension in your project:

       1. Enter the [Extensions Marketplace](https://console.agora.io/extensions-marketplace) page and download the plug-in package for **Extensions** plug-in.
       2. Unzip the folder, import all \`.framework\` files into the project, and modify \`Embed\` to \`Embed & Sign\`.
       3. Get the following resource files and save them in the same directory of the project folder (For example, Resource path):
          * License file and tone files: Contact Agora to obtain these files. The suffix of the tone file is named \`.dat\`, and the tone file is issued according to the license.
          * Model file: Download the required resources.
            ![Resource Files](https://assets-docs.agora.io/images/extensions-marketplace/resource-files.png)
       4. Import the \`libc++\` system library and third-party dynamic libraries into the project \`MJExtension\`.

    2. **Enable the plugin**

       After creating and initializing \`RtcEngine\`, call \`enableExtensionWithVendor\` to enable the plug-in, before you call other APIs such as \`enableVideo\`, and \`joinChannelByToken\`

       \`\`\`objc
       AgoraRtcEngineConfig *cfg = [[AgoraRtcEngineConfig alloc] init];
       cfg.appId = appId;
       cfg.eventDelegate = self;
       cfg.channelProfile = AgoraChannelProfileLiveBroadcasting;
       cfg.audioScenario = AgoraAudioScenarioGameStreaming;
       self.agoraKit = [AgoraRtcEngineKit sharedEngineWithConfig:cfg delegate:self];
       [self.agoraKit setClientRole:AgoraClientRoleBroadcaster];

       [self.agoraKit enableExtensionWithVendor:[EngineFilterManager vendorName] extension:@"RealTimeTranscribe" enabled:YES];
       \`\`\`

    3. **Set the resource file path**

       When you download and integrate the plug-in, the license, sound, and model files are saved to the specified directory. In this step, you specify the path where these resource files are located.

       \`\`\`objc
       NSString *sourcePath = [[NSBundle mainBundle] resourcePath];
       [self.agoraKit setExtensionPropertyWithVendor:[EngineFilterManager vendorName] extension:@"RealTimeTranscribe" key:@"setResourcesFilePath" value:sourcePath];
       \`\`\`

    4. **Get the tone list**

       After receiving the \`onExtensionStarted\` callback from Agora SDK, call \`getExtensionPropertyWithVendor\` passing in the \`getSpeakersInfo\` key to get the timbre list:

       \`\`\`objc
       NSString *voices = [self.agoraKit getExtensionPropertyWithVendor:[EngineFilterManager vendorName] extension:@"RealTimeTranscribe" key:@"getSpeakersInfo"];
       // Convert JSON to array
       NSData *nsData = [voices dataUsingEncoding:NSUTF8StringEncoding];
       _speakerArray = [NSJSONSerialization JSONObjectWithData:nsData options:kNilOptions error:nil];
       \`\`\`

       The timbre list is returned as JSON data that you parse yourself.

    5. **Start changing**

       Call \`setExtensionPropertyWithVendor\` and pass in the corresponding \`key\` and \`value\`:

       \`\`\`objc
       [self.agoraKit setExtensionPropertyWithVendor:[EngineFilterManager vendorName] extension:@"RealTimeTranscribe" key:@"startRealTimeTranscribe" value:@"startRealTimeTranscribe"];
       \`\`\`

    6. **Select timbre**

       Pass in the timbre ID from the obtained timbre list to set the corresponding timbre:

       \`\`\`objc
       [self.agoraKit setExtensionPropertyWithVendor:[EngineFilterManager vendorName] extension:@"RealTimeTranscribe" key:@"changeSpeaker" value:@“”];
       \`\`\`

    7. **Stop changing**

       Call the API to stop the voice changer:

       \`\`\`objc
       [self.agoraKit setExtensionPropertyWithVendor:[EngineFilterManager vendorName] extension:@"RealTimeTranscribe" key:@"stopRealTimeTranscribe" value:@"stopRealTimeTranscribe"];
       \`\`\`

    8. **Release resources**

       Close the plug-in and release the resources used by the plug-in:

       \`\`\`objc
       [self.agoraKit enableExtensionWithVendor:[EngineFilterManager vendorName] extension:@"RealTimeTranscribe" enabled:NO];
       \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>

## Reference [#reference]

This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="android" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="android" />

    ### Sample project [#sample-project]

    The Dubbing AI Voice Changer extension provides a [GitHub sample project](https://github.com/Dubbing-AI-Voice-Changer/DubbingAgoraDemo/tree/main/Android) for testing. To clone and run the project:

    1. Clone the repository

       \`\`\`sh
       git clone https://github.com/Dubbing-AI-Voice-Changer/DubbingAgoraDemo.git
       \`\`\`

    2. Refer to the \`README.md\` file in the repository to run the demo.

    ### API reference [#api-reference]

    * [addExtension](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_addextension) in the \`RtcEngineConfig\` class
    * [enableExtension](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_enableextension) in the \`RtcEngine\` class
    * [setExtensionProperty](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setextensionproperty) in the \`RtcEngine\` class

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="ios" />

    ### Sample project [#sample-project-1]

    The Dubbing AI Voice Changer extension provides a [GitHub sample project](https://github.com/Dubbing-AI-Voice-Changer/DubbingAgoraDemo/tree/main/iOS) for testing. To clone and run the project:

    1. Clone the repository

       \`\`\`sh
       git clone https://github.com/Dubbing-AI-Voice-Changer/DubbingAgoraDemo.git
       \`\`\`

    2. Refer to the \`README.md\` file in the repository to run the demo.

    ### API reference [#api-reference-1]

    * [enableExtensionWithVendor](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enableextension\\(withvendor\\:extension\\:enabled:\\)) in the \`AgoraRtcEngineKit\` class
    * [setExtensionPropertyWithVendor](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setextensionpropertywithvendor\\(_\\:extension\\:extensioninfo\\:key\\:value:\\)) in the \`AgoraRtcEngineKit\` class

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Dubbing AI Voice Changer extension enables you to change the audio timbre."
  }, {
    heading: undefined,
    content: "This page shows you how to integrate the Dubbing AI Voice Changer extension in your app."
  }, {
    heading: "understand-the-tech",
    content: "Using the setExtensionProperty method provided in Agora SDK v4.x and passing in the specified `key` and `value` parameters, you can quickly integrate real-time AI voice conversion ability into your app."
  }, {
    heading: "understand-the-tech",
    content: "The `key` parameter you specify in the `setExtensionProperty` method corresponds to the name of the API, and the `value` parameter wraps some or all of the parameters of the API in JSON format. By passing in the specified `key` and `value` parameters, you can call the corresponding API to realize the functions related to real-time AI sound conversion."
  }, {
    heading: "understand-the-tech",
    content: "Using the setExtensionPropertyWithVendor method provided in Agora SDK v4.x and passing in the specified `key` and `value` parameters, you can quickly integrate real-time AI voice conversion ability into your app."
  }, {
    heading: "understand-the-tech",
    content: "The `key` parameter you specify in the `setExtensionPropertyWithVendor` method corresponds to the name of the API, and the `value` parameter wraps some or all of the parameters of the API in JSON format. By passing in the specified `key` and `value` parameters, you can call the corresponding API to realize the functions related to real-time AI sound conversion."
  }, {
    heading: "prerequisites",
    content: "Ensure that your development environment meets the following requirements:"
  }, {
    heading: "prerequisites",
    content: "Android Studio 4.1 or later."
  }, {
    heading: "prerequisites",
    content: "A physical device (not an emulator) running Android 5.0 or later."
  }, {
    heading: "prerequisites",
    content: "Xcode 9.0 or later."
  }, {
    heading: "prerequisites",
    content: "A physical device (not an emulator) running iOS 8.0 or later."
  }, {
    heading: "prerequisites",
    content: "Dubbing AI Voice Changer is used with Agora Voice SDK v4.x."
  }, {
    heading: "prerequisites",
    content: "Refer to the SDK quickstart to integrate Voice SDK v4.x and implement basic voice calling."
  }, {
    heading: "integrate-the-extension",
    content: "This section shows you how to integrate the Dubbing AI Voice Changer extension, and call the core API to implement the voice changing function."
  }, {
    heading: "integrate-the-extension",
    content: "**Integrate the Dubbing AI Voice Changer extension**"
  }, {
    heading: "integrate-the-extension",
    content: "To integrate the extension in your project:"
  }, {
    heading: "integrate-the-extension",
    content: "Enter the Extensions Marketplace and download the **Dubbing AI Voice Changer** extension package. After unzipping, save all `.aar` files to the project folder `/app/libs`."
  }, {
    heading: "integrate-the-extension",
    content: "Get the following resource files and save them in the same directory of the project folder. For example, a new `vc_model` directory:"
  }, {
    heading: "integrate-the-extension",
    content: "License file and tone files: Contact Agora to obtain these files. The suffix of the tone file is `.dat`, and the tone file is issued according to the license."
  }, {
    heading: "integrate-the-extension",
    content: "Model file: Download the required resources."
  }, {
    heading: "integrate-the-extension",
    content: "Open the `app/build.gradle` file and add the following lines under `dependencies`:"
  }, {
    heading: "integrate-the-extension",
    content: "**Enable the plugin**"
  }, {
    heading: "integrate-the-extension",
    content: "After creating and initializing `RtcEngine`, call `enableExtension` to enable the plug-in, before you call other APIs such as `enableVideo` and `joinChannel`."
  }, {
    heading: "integrate-the-extension",
    content: "**Set the resource file path**"
  }, {
    heading: "integrate-the-extension",
    content: "When you download and integrate the plug-in, the license, sound, and model files are saved to the specified directory. In this step, you specify the path where these resource files are located."
  }, {
    heading: "integrate-the-extension",
    content: "**Get the tone list**"
  }, {
    heading: "integrate-the-extension",
    content: "After receiving the `onExtensionStarted` callback from Agora SDK, call `getExtensionProperty` passing in the `getSpeakersInfo` key to get the timbre list:"
  }, {
    heading: "integrate-the-extension",
    content: "The timbre list is returned as JSON data that you parse yourself."
  }, {
    heading: "integrate-the-extension",
    content: "**Start changing**"
  }, {
    heading: "integrate-the-extension",
    content: "Call `setExtensionProperty` and pass in the corresponding `key` and `value`:"
  }, {
    heading: "integrate-the-extension",
    content: "**Select timbre**"
  }, {
    heading: "integrate-the-extension",
    content: "Pass in the timbre ID from the obtained timbre list to set the corresponding timbre:"
  }, {
    heading: "integrate-the-extension",
    content: "**Stop changing**"
  }, {
    heading: "integrate-the-extension",
    content: "Call the API to stop the voice changer:"
  }, {
    heading: "integrate-the-extension",
    content: "**Release resources**"
  }, {
    heading: "integrate-the-extension",
    content: "Close the plug-in and release the resources used by the plug-in:"
  }, {
    heading: "integrate-the-extension",
    content: "**Integrate the Dubbing AI Voice Changer extension**"
  }, {
    heading: "integrate-the-extension",
    content: "To integrate the extension in your project:"
  }, {
    heading: "integrate-the-extension",
    content: "Enter the Extensions Marketplace page and download the plug-in package for **Extensions** plug-in."
  }, {
    heading: "integrate-the-extension",
    content: "Unzip the folder, import all `.framework` files into the project, and modify `Embed` to `Embed & Sign`."
  }, {
    heading: "integrate-the-extension",
    content: "Get the following resource files and save them in the same directory of the project folder (For example, Resource path):"
  }, {
    heading: "integrate-the-extension",
    content: "License file and tone files: Contact Agora to obtain these files. The suffix of the tone file is named `.dat`, and the tone file is issued according to the license."
  }, {
    heading: "integrate-the-extension",
    content: "Model file: Download the required resources."
  }, {
    heading: "integrate-the-extension",
    content: "Import the `libc++` system library and third-party dynamic libraries into the project `MJExtension`."
  }, {
    heading: "integrate-the-extension",
    content: "**Enable the plugin**"
  }, {
    heading: "integrate-the-extension",
    content: "After creating and initializing `RtcEngine`, call `enableExtensionWithVendor` to enable the plug-in, before you call other APIs such as `enableVideo`, and `joinChannelByToken`"
  }, {
    heading: "integrate-the-extension",
    content: "**Set the resource file path**"
  }, {
    heading: "integrate-the-extension",
    content: "When you download and integrate the plug-in, the license, sound, and model files are saved to the specified directory. In this step, you specify the path where these resource files are located."
  }, {
    heading: "integrate-the-extension",
    content: "**Get the tone list**"
  }, {
    heading: "integrate-the-extension",
    content: "After receiving the `onExtensionStarted` callback from Agora SDK, call `getExtensionPropertyWithVendor` passing in the `getSpeakersInfo` key to get the timbre list:"
  }, {
    heading: "integrate-the-extension",
    content: "The timbre list is returned as JSON data that you parse yourself."
  }, {
    heading: "integrate-the-extension",
    content: "**Start changing**"
  }, {
    heading: "integrate-the-extension",
    content: "Call `setExtensionPropertyWithVendor` and pass in the corresponding `key` and `value`:"
  }, {
    heading: "integrate-the-extension",
    content: "**Select timbre**"
  }, {
    heading: "integrate-the-extension",
    content: "Pass in the timbre ID from the obtained timbre list to set the corresponding timbre:"
  }, {
    heading: "integrate-the-extension",
    content: "**Stop changing**"
  }, {
    heading: "integrate-the-extension",
    content: "Call the API to stop the voice changer:"
  }, {
    heading: "integrate-the-extension",
    content: "**Release resources**"
  }, {
    heading: "integrate-the-extension",
    content: "Close the plug-in and release the resources used by the plug-in:"
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "sample-project",
    content: "The Dubbing AI Voice Changer extension provides a GitHub sample project for testing. To clone and run the project:"
  }, {
    heading: "sample-project",
    content: "Clone the repository"
  }, {
    heading: "sample-project",
    content: "Refer to the `README.md` file in the repository to run the demo."
  }, {
    heading: "api-reference",
    content: "addExtension in the `RtcEngineConfig` class"
  }, {
    heading: "api-reference",
    content: "enableExtension in the `RtcEngine` class"
  }, {
    heading: "api-reference",
    content: "setExtensionProperty in the `RtcEngine` class"
  }, {
    heading: "sample-project-1",
    content: "The Dubbing AI Voice Changer extension provides a GitHub sample project for testing. To clone and run the project:"
  }, {
    heading: "sample-project-1",
    content: "Clone the repository"
  }, {
    heading: "sample-project-1",
    content: "Refer to the `README.md` file in the repository to run the demo."
  }, {
    heading: "api-reference-1",
    content: "enableExtensionWithVendor in the `AgoraRtcEngineKit` class"
  }, {
    heading: "api-reference-1",
    content: "setExtensionPropertyWithVendor in the `AgoraRtcEngineKit` class"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "integrate-the-extension",
    content: "Integrate the extension"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "sample-project",
    content: "Sample project"
  }, {
    id: "api-reference",
    content: "API reference"
  }, {
    id: "sample-project-1",
    content: "Sample project"
  }, {
    id: "api-reference-1",
    content: "API reference"
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
  url: "#integrate-the-extension",
  title: _jsx(_Fragment, {
    children: "Integrate the extension"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#sample-project",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 3,
  url: "#api-reference",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#sample-project-1",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 3,
  url: "#api-reference-1",
  title: _jsx(_Fragment, {
    children: "API reference"
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
      children: "Dubbing AI Voice Changer extension enables you to change the audio timbre."
    }), `
`, _jsx(_components.p, {
      children: "This page shows you how to integrate the Dubbing AI Voice Changer extension in your app."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "android",
      platforms: '["android","ios"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "android"
        }), _jsxs(_components.p, {
          children: ["Using the ", _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setextensionproperty",
            children: "setExtensionProperty"
          }), " method provided in Agora SDK v4.x and passing in the specified ", _jsx(_components.code, {
            children: "key"
          }), " and ", _jsx(_components.code, {
            children: "value"
          }), " parameters, you can quickly integrate real-time AI voice conversion ability into your app."]
        }), _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "key"
          }), " parameter you specify in the ", _jsx(_components.code, {
            children: "setExtensionProperty"
          }), " method corresponds to the name of the API, and the ", _jsx(_components.code, {
            children: "value"
          }), " parameter wraps some or all of the parameters of the API in JSON format. By passing in the specified ", _jsx(_components.code, {
            children: "key"
          }), " and ", _jsx(_components.code, {
            children: "value"
          }), " parameters, you can call the corresponding API to realize the functions related to real-time AI sound conversion."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "ios",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "ios"
        }), _jsxs(_components.p, {
          children: ["Using the ", _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setextensionpropertywithvendor(_:extension:extensioninfo:key:value:)",
            children: "setExtensionPropertyWithVendor"
          }), " method provided in Agora SDK v4.x and passing in the specified ", _jsx(_components.code, {
            children: "key"
          }), " and ", _jsx(_components.code, {
            children: "value"
          }), " parameters, you can quickly integrate real-time AI voice conversion ability into your app."]
        }), _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "key"
          }), " parameter you specify in the ", _jsx(_components.code, {
            children: "setExtensionPropertyWithVendor"
          }), " method corresponds to the name of the API, and the ", _jsx(_components.code, {
            children: "value"
          }), " parameter wraps some or all of the parameters of the API in JSON format. By passing in the specified ", _jsx(_components.code, {
            children: "key"
          }), " and ", _jsx(_components.code, {
            children: "value"
          }), " parameters, you can call the corresponding API to realize the functions related to real-time AI sound conversion."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "Ensure that your development environment meets the following requirements:"
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "android",
      platforms: '["android","ios"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "android"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Android Studio 4.1 or later."
          }), `
`, _jsx(_components.li, {
            children: "A physical device (not an emulator) running Android 5.0 or later."
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "ios",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "ios"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Xcode 9.0 or later."
          }), `
`, _jsx(_components.li, {
            children: "A physical device (not an emulator) running iOS 8.0 or later."
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Dubbing AI Voice Changer is used with Agora Voice SDK v4.x."
        }), `
`, _jsxs(_components.p, {
          children: ["Refer to the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/voice-quickstart",
            children: "SDK quickstart"
          }), " to integrate Voice SDK v4.x and implement basic voice calling."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "integrate-the-extension",
      children: "Integrate the extension"
    }), `
`, _jsx(_components.p, {
      children: "This section shows you how to integrate the Dubbing AI Voice Changer extension, and call the core API to implement the voice changing function."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "android",
      platforms: '["android","ios"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "android"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Integrate the Dubbing AI Voice Changer extension"
              })
            }), `
`, _jsx(_components.p, {
              children: "To integrate the extension in your project:"
            }), `
`, _jsxs(_components.ol, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Enter the ", _jsx(_components.a, {
                    href: "https://console.agora.io/extensions-marketplace",
                    children: "Extensions Marketplace"
                  }), " and download the ", _jsx(_components.strong, {
                    children: "Dubbing AI Voice Changer"
                  }), " extension package. After unzipping, save all ", _jsx(_components.code, {
                    children: ".aar"
                  }), " files to the project folder ", _jsx(_components.code, {
                    children: "/app/libs"
                  }), "."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Get the following resource files and save them in the same directory of the project folder. For example, a new ", _jsx(_components.code, {
                    children: "vc_model"
                  }), " directory:"]
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["License file and tone files: Contact Agora to obtain these files. The suffix of the tone file is ", _jsx(_components.code, {
                      children: ".dat"
                    }), ", and the tone file is issued according to the license."]
                  }), `
`, _jsxs(_components.li, {
                    children: [`Model file: Download the required resources.
`, _jsx(_components.img, {
                      src: "https://assets-docs.agora.io/images/extensions-marketplace/resource-files.png",
                      alt: "Resource Files"
                    })]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Open the ", _jsx(_components.code, {
                    children: "app/build.gradle"
                  }), " file and add the following lines under ", _jsx(_components.code, {
                    children: "dependencies"
                  }), ":"]
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
                          children: "implementation "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "fileTree"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(dir"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: ":"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: ' "libs"'
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ", include"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: ":"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " ["
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: '"*.jar"'
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ", "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: '"*.aar"'
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "])"
                        })]
                      })
                    })
                  })
                }), `
`]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Enable the plugin"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["After creating and initializing ", _jsx(_components.code, {
                children: "RtcEngine"
              }), ", call ", _jsx(_components.code, {
                children: "enableExtension"
              }), " to enable the plug-in, before you call other APIs such as ", _jsx(_components.code, {
                children: "enableVideo"
              }), " and ", _jsx(_components.code, {
                children: "joinChannel"
              }), "."]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Declare parameters"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "private"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " val"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " EXTENSION_NAME "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "dubbing_vc"'
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "private"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " val"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " EXTENSION_VENDOR_NAME "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "Dubbing"'
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "private"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " val"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " EXTENSION_AUDIO_FILTER "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "DubbingVC"'
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "private"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " val"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " changeSpeaker_ "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "changeSpeaker"'
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "private"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " val"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " startRealTimeTranscribe_ "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "startRealTimeTranscribe"'
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "private"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " val"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " stopRealTimeTranscribe_ "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "stopRealTimeTranscribe"'
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "private"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " val"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " getSpeakersInfo_ "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "getSpeakersInfo"'
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "val"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " config "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " RtcEngineConfig"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.mContext "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " baseContext"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.mAppId "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " appId"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.mEventHandler "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " mRtcEventHandler"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Load plugin"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "addExtension"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(EXTENSION_NAME)"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.mExtensionObserver "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " extensionObserver"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create and initialize RtcEngine"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "mRtcEngine "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " RtcEngine."
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
                      children: "(config)"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "mRtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "enableAudio"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Enable plugin"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "mRtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "enableExtension"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(EXTENSION_VENDOR_NAME, EXTENSION_AUDIO_FILTER, enable)"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Set the resource file path"
              })
            }), `
`, _jsx(_components.p, {
              children: "When you download and integrate the plug-in, the license, sound, and model files are saved to the specified directory. In this step, you specify the path where these resource files are located."
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
                icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "val"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " modelPath: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "String"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "${context.filesDir}${File.separator}vc_model"'
                    })]
                  })
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Get the tone list"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["After receiving the ", _jsx(_components.code, {
                children: "onExtensionStarted"
              }), " callback from Agora SDK, call ", _jsx(_components.code, {
                children: "getExtensionProperty"
              }), " passing in the ", _jsx(_components.code, {
                children: "getSpeakersInfo"
              }), " key to get the timbre list:"]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "val"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " speakerList "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " mRtcEngine."
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
                      children: "("
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    EXTENSION_VENDOR_NAME,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    EXTENSION_AUDIO_FILTER,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    getSpeakersInfo_"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Convert JSON to array"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "val"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " arr "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " JSONArray"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(speakerList)"
                    })]
                  })]
                })
              })
            }), `
`, _jsx(_components.p, {
              children: "The timbre list is returned as JSON data that you parse yourself."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Start changing"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "setExtensionProperty"
              }), " and pass in the corresponding ", _jsx(_components.code, {
                children: "key"
              }), " and ", _jsx(_components.code, {
                children: "value"
              }), ":"]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "mRtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setExtensionProperty"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    EXTENSION_VENDOR_NAME,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    EXTENSION_AUDIO_FILTER,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    startRealTimeTranscribe_,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '    "true"'
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Select timbre"
              })
            }), `
`, _jsx(_components.p, {
              children: "Pass in the timbre ID from the obtained timbre list to set the corresponding timbre:"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "mRtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setExtensionProperty"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    EXTENSION_VENDOR_NAME,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    EXTENSION_AUDIO_FILTER,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    changeSpeaker_,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    id"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Stop changing"
              })
            }), `
`, _jsx(_components.p, {
              children: "Call the API to stop the voice changer:"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "mRtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setExtensionProperty"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    EXTENSION_VENDOR_NAME,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    EXTENSION_AUDIO_FILTER,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    stopRealTimeTranscribe_,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '    "true"'
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Release resources"
              })
            }), `
`, _jsx(_components.p, {
              children: "Close the plug-in and release the resources used by the plug-in:"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "mRtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "enableExtension"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(EXTENSION_VENDOR_NAME, EXTENSION_AUDIO_FILTER, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "false"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })]
                  })
                })
              })
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
          canonicalPlatform: "android",
          platform: "ios"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Integrate the Dubbing AI Voice Changer extension"
              })
            }), `
`, _jsx(_components.p, {
              children: "To integrate the extension in your project:"
            }), `
`, _jsxs(_components.ol, {
              children: [`
`, _jsxs(_components.li, {
                children: ["Enter the ", _jsx(_components.a, {
                  href: "https://console.agora.io/extensions-marketplace",
                  children: "Extensions Marketplace"
                }), " page and download the plug-in package for ", _jsx(_components.strong, {
                  children: "Extensions"
                }), " plug-in."]
              }), `
`, _jsxs(_components.li, {
                children: ["Unzip the folder, import all ", _jsx(_components.code, {
                  children: ".framework"
                }), " files into the project, and modify ", _jsx(_components.code, {
                  children: "Embed"
                }), " to ", _jsx(_components.code, {
                  children: "Embed & Sign"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: ["Get the following resource files and save them in the same directory of the project folder (For example, Resource path):", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["License file and tone files: Contact Agora to obtain these files. The suffix of the tone file is named ", _jsx(_components.code, {
                      children: ".dat"
                    }), ", and the tone file is issued according to the license."]
                  }), `
`, _jsxs(_components.li, {
                    children: [`Model file: Download the required resources.
`, _jsx(_components.img, {
                      src: "https://assets-docs.agora.io/images/extensions-marketplace/resource-files.png",
                      alt: "Resource Files"
                    })]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: ["Import the ", _jsx(_components.code, {
                  children: "libc++"
                }), " system library and third-party dynamic libraries into the project ", _jsx(_components.code, {
                  children: "MJExtension"
                }), "."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Enable the plugin"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["After creating and initializing ", _jsx(_components.code, {
                children: "RtcEngine"
              }), ", call ", _jsx(_components.code, {
                children: "enableExtensionWithVendor"
              }), " to enable the plug-in, before you call other APIs such as ", _jsx(_components.code, {
                children: "enableVideo"
              }), ", and ", _jsx(_components.code, {
                children: "joinChannelByToken"
              })]
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
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "AgoraRtcEngineConfig "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "*"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "cfg "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " [[AgoraRtcEngineConfig "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "alloc"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "] "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "init"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "cfg.appId "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " appId;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "cfg.eventDelegate "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " self"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "cfg.channelProfile "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " AgoraChannelProfileLiveBroadcasting;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "cfg.audioScenario "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " AgoraAudioScenarioGameStreaming;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "self"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".agoraKit "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " [AgoraRtcEngineKit "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "sharedEngineWithConfig:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "cfg "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "delegate:self"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "["
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "self"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".agoraKit "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "setClientRole:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "AgoraClientRoleBroadcaster];"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "["
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "self"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".agoraKit "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "enableExtensionWithVendor:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[EngineFilterManager "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "vendorName"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "] "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "extension:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '@"RealTimeTranscribe"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " enabled:YES"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Set the resource file path"
              })
            }), `
`, _jsx(_components.p, {
              children: "When you download and integrate the plug-in, the license, sound, and model files are saved to the specified directory. In this step, you specify the path where these resource files are located."
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
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "NSString"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " *"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "sourcePath "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " [["
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "NSBundle"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " mainBundle"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "] "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "resourcePath"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "["
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "self"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".agoraKit "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "setExtensionPropertyWithVendor:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[EngineFilterManager "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "vendorName"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "] "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "extension:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '@"RealTimeTranscribe"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " key:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '@"setResourcesFilePath"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " value:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "sourcePath];"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Get the tone list"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["After receiving the ", _jsx(_components.code, {
                children: "onExtensionStarted"
              }), " callback from Agora SDK, call ", _jsx(_components.code, {
                children: "getExtensionPropertyWithVendor"
              }), " passing in the ", _jsx(_components.code, {
                children: "getSpeakersInfo"
              }), " key to get the timbre list:"]
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
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "NSString"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " *"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "voices "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " ["
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "self"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".agoraKit "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "getExtensionPropertyWithVendor:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[EngineFilterManager "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "vendorName"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "] "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "extension:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '@"RealTimeTranscribe"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " key:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '@"getSpeakersInfo"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Convert JSON to array"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "NSData"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " *"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "nsData "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " [voices "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "dataUsingEncoding:NSUTF8StringEncoding"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "_speakerArray "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " [NSJSONSerialization "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "JSONObjectWithData:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "nsData "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "options:kNilOptions"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " error:nil"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  })]
                })
              })
            }), `
`, _jsx(_components.p, {
              children: "The timbre list is returned as JSON data that you parse yourself."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Start changing"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "setExtensionPropertyWithVendor"
              }), " and pass in the corresponding ", _jsx(_components.code, {
                children: "key"
              }), " and ", _jsx(_components.code, {
                children: "value"
              }), ":"]
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
                      children: "["
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "self"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".agoraKit "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "setExtensionPropertyWithVendor:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[EngineFilterManager "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "vendorName"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "] "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "extension:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '@"RealTimeTranscribe"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " key:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '@"startRealTimeTranscribe"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " value:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '@"startRealTimeTranscribe"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  })
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Select timbre"
              })
            }), `
`, _jsx(_components.p, {
              children: "Pass in the timbre ID from the obtained timbre list to set the corresponding timbre:"
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
                      children: "["
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "self"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".agoraKit "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "setExtensionPropertyWithVendor:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[EngineFilterManager "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "vendorName"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "] "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "extension:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '@"RealTimeTranscribe"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " key:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '@"changeSpeaker"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " value:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "@“”];"
                    })]
                  })
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Stop changing"
              })
            }), `
`, _jsx(_components.p, {
              children: "Call the API to stop the voice changer:"
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
                      children: "["
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "self"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".agoraKit "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "setExtensionPropertyWithVendor:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[EngineFilterManager "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "vendorName"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "] "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "extension:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '@"RealTimeTranscribe"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " key:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '@"stopRealTimeTranscribe"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " value:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '@"stopRealTimeTranscribe"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  })
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Release resources"
              })
            }), `
`, _jsx(_components.p, {
              children: "Close the plug-in and release the resources used by the plug-in:"
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
                      children: "["
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "self"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".agoraKit "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "enableExtensionWithVendor:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[EngineFilterManager "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "vendorName"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "] "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "extension:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '@"RealTimeTranscribe"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " enabled:NO"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  })
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "android",
      platforms: '["android","ios"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "android"
        }), _jsx(_components.h3, {
          id: "sample-project",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["The Dubbing AI Voice Changer extension provides a ", _jsx(_components.a, {
            href: "https://github.com/Dubbing-AI-Voice-Changer/DubbingAgoraDemo/tree/main/Android",
            children: "GitHub sample project"
          }), " for testing. To clone and run the project:"]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Clone the repository"
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
                icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "git"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " clone"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " https://github.com/Dubbing-AI-Voice-Changer/DubbingAgoraDemo.git"
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
              children: ["Refer to the ", _jsx(_components.code, {
                children: "README.md"
              }), " file in the repository to run the demo."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_addextension",
              children: "addExtension"
            }), " in the ", _jsx(_components.code, {
              children: "RtcEngineConfig"
            }), " class"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_enableextension",
              children: "enableExtension"
            }), " in the ", _jsx(_components.code, {
              children: "RtcEngine"
            }), " class"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setextensionproperty",
              children: "setExtensionProperty"
            }), " in the ", _jsx(_components.code, {
              children: "RtcEngine"
            }), " class"]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "ios",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "ios"
        }), _jsx(_components.h3, {
          id: "sample-project-1",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["The Dubbing AI Voice Changer extension provides a ", _jsx(_components.a, {
            href: "https://github.com/Dubbing-AI-Voice-Changer/DubbingAgoraDemo/tree/main/iOS",
            children: "GitHub sample project"
          }), " for testing. To clone and run the project:"]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Clone the repository"
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
                icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "git"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " clone"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " https://github.com/Dubbing-AI-Voice-Changer/DubbingAgoraDemo.git"
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
              children: ["Refer to the ", _jsx(_components.code, {
                children: "README.md"
              }), " file in the repository to run the demo."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-1",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enableextension(withvendor:extension:enabled:)",
              children: "enableExtensionWithVendor"
            }), " in the ", _jsx(_components.code, {
              children: "AgoraRtcEngineKit"
            }), " class"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setextensionpropertywithvendor(_:extension:extensioninfo:key:value:)",
              children: "setExtensionPropertyWithVendor"
            }), " in the ", _jsx(_components.code, {
              children: "AgoraRtcEngineKit"
            }), " class"]
          }), `
`]
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
