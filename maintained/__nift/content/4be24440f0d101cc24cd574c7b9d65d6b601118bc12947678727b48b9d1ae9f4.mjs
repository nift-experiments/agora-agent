import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "FaceUnity AR Filter",
  description: "Integrate and use the FaceUnity AR Filter extension in your Android, iOS, or Flutter app."
};
export let _markdown = `

The FaceUnity AR Filter extension uses 3D vision, 3D graphics, and deep learning technologies to provide advanced AR portrait video effects for the Agora RTC SDK. It enables features such as:

* **Basic beauty**: Skin beautification, whitening, and rosy effects.
* **Advanced beauty**: Beauty effects for shape, face, and skin.
* **Number detection**: Detect the number of faces, humans, or gestures.

This page shows you how to integrate and use the FaceUnity AR Filter extension in your app.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="android" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;flutter&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="android" />

    ## Understand the tech [#understand-the-tech]

    To quickly integrate FaceUnity AR filter capabilities in your app, set extension properties using the \`key\` and \`value\` parameters in the RTC SDK. Calling \`setExtensionProperty\` with a pair of \`key\` and \`value\` parameters is equivalent to calling the corresponding FaceUnity API. The \`key\` is named after the FaceUnity API method, and \`value\` wraps the parameters required for that method in JSON.

    ## Prerequisites [#prerequisites]

    * Android Studio 4.1 or later.
    * A physical device (not an emulator) running Android 5.0 or later.
    * Implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk).

    ## Project setup [#project-setup]

    To get started, use the FaceUnity sample project on GitHub:

    1. Clone the repository:

       \`\`\`bash
       git clone https://github.com/AgoraIO-Community/AgoraMarketPlace.git
       \`\`\`

    2. Complete the setup described in the [README](https://github.com/AgoraIO-Community/AgoraMarketplace/blob/master/FaceUnity/android/README.md).

    3. Contact [support@agora.io](mailto\\:support@agora.io) for activation, provide your package name, and obtain the \`authpack\` certificate file.

    4. Download the FaceUnity AR Filter package and the FaceUnity resource package.

    ## Integrate the extension [#integrate-the-extension]

    ### Add the extension to your project [#add-the-extension-to-your-project]

    1. Unzip the AR Filter package and save all \`.aar\` files to \`/app/libs\`.

    2. Save \`authpack.java\` to the path that matches the package name you registered.

    3. Save the required model and prop files from the resource package to \`/app/src/main/assets\`.

    4. Add the following Gradle dependency:

       \`\`\`text
       implementation fileTree(dir: "libs", include: ["*.jar", "*.aar"])
       \`\`\`

    5. Import the required Agora and FaceUnity classes.

    ### Enable the extension [#enable-the-extension]

    Call \`enableExtension\` before other APIs, including \`enableVideo\` and \`joinChannel\`.

    \`\`\`java
    RtcEngineConfig config = new RtcEngineConfig();
    config.addExtension("AgoraFaceUnityExtension");
    mRtcEngine = RtcEngine.create(config);
    mRtcEngine.enableExtension("FaceUnity", "Effect", enabled);
    \`\`\`

    ### Initialize the extension [#initialize-the-extension]

    After receiving the \`onExtensionStarted\` callback, call \`setExtensionProperty\` to load the certificate and AI models.

    \`\`\`java
    private void initExtension() {
      try {
        JSONObject jsonObject = new JSONObject();
        JSONArray jsonArray = new JSONArray();
        for (byte it : authpack.A()) {
          jsonArray.put(it);
        }
        jsonObject.put("authdata", jsonArray);
        setExtensionProperty("fuSetup", jsonObject.toString());
      } catch (JSONException e) {
        Log.e(TAG, e.toString());
      }
    }
    \`\`\`

    ### Configure beauty effects and body recognition [#configure-beauty-effects-and-body-recognition]

    Load props, adjust beautification intensity, and enable face, gesture, and human recognition by calling \`setExtensionProperty\` with the corresponding keys and values.

    ### Release resources [#release-resources]

    When you stop using FaceUnity, call \`setExtensionProperty\` with the \`fuDestroyLibData\` key, and after receiving the callback, destroy the engine.

    ## Reference [#reference]

    ### API reference [#api-reference]

    * [setExtensionProperty](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setextensionproperty)
    * [RtcEngineConfig.addExtension](/en/api-reference/rtc/android/class-and-enum/classes/class-rtcengineconfig)
    * [ContentInspectConfig](/en/api-reference/rtc/android/class-and-enum/classes/class-contentinspectconfig)

    ### Error codes [#error-codes]

    | API                    | Error code                          | Description                                                                       |
    | ---------------------- | ----------------------------------- | --------------------------------------------------------------------------------- |
    | \`enableExtension\`      | \`-3\` (SDK layer)                    | The SDK cannot find the corresponding extension dynamic library.                  |
    | \`setExtensionProperty\` | \`-1\` (extension layer)              | Invalid or repeated extension initialization or model loading.                    |
    | \`setExtensionProperty\` | \`-2\` (SDK layer or extension layer) | The timing of the call is wrong or the parameter is invalid.                      |
    | \`setExtensionProperty\` | \`-20\` (extension layer)             | The incoming key is not supported or the resource is already loaded or destroyed. |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="ios" />

    ## Understand the tech [#understand-the-tech-1]

    To quickly integrate FaceUnity AR filter capabilities in your app, set extension properties using the \`key\` and \`value\` parameters in the RTC SDK. Calling \`setExtensionPropertyWithVendor\` with a pair of \`key\` and \`value\` parameters is equivalent to calling the corresponding FaceUnity API.

    ## Prerequisites [#prerequisites-1]

    * Xcode 12.0 or higher.
    * A physical device running iOS 9.0 or later.
    * Implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk).

    ## Project setup [#project-setup-1]

    1. Clone the FaceUnity sample project:

       \`\`\`bash
       git clone https://github.com/AgoraIO-Community/AgoraMarketPlace.git
       \`\`\`

    2. Follow the [README](https://github.com/AgoraIO-Community/AgoraMarketplace/blob/master/FaceUnity/ios/README.md).

    3. Download the FaceUnity iOS package and resource package.

    4. Create a \`Resource\` folder and place the required model and prop files there.

    5. Import the required \`.framework\` files and ensure they are set to **Embed & Sign**.

    ## Integrate the extension [#integrate-the-extension-1]

    ### Enable the extension [#enable-the-extension-1]

    \`\`\`objc
    [self.agoraKit enableExtensionWithVendor:@"FaceUnity"
                                   extension:@"Effect"
                                     enabled:self.enable];
    \`\`\`

    ### Initialize the extension [#initialize-the-extension-1]

    After \`onExtensionStarted\`, call \`setExtensionPropertyWithVendor\` to load certificates, AI models, and prop packages.

    ### Configure beauty effects and body recognition [#configure-beauty-effects-and-body-recognition-1]

    Call \`setExtensionPropertyWithVendor\` with the appropriate keys and values to configure the desired effects.

    ### Release resources [#release-resources-1]

    When you stop using FaceUnity, call \`setExtensionPropertyWithVendor\` with the \`fuDestroyLibData\` key and then destroy the engine after the callback confirms success.

    ## Reference [#reference-1]

    * [enableExtensionWithVendor](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enableextension\\(withvendor\\:extension\\:enabled:\\)?language=objc)
    * [setExtensionPropertyWithVendor](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setextensionpropertywithvendor\\(_\\:extension\\:extensioninfo\\:key\\:value:\\)?language=objc)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="flutter" />

    ## Understand the tech [#understand-the-tech-2]

    In a Flutter project, you integrate the native Android and iOS plug-ins through Gradle and CocoaPods respectively.

    ## Prerequisites [#prerequisites-2]

    * [Flutter](https://docs.flutter.dev/get-started/install) 2.0.0 or higher.
    * Dart 2.15.1 or higher.
    * Implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk).

    ## Project setup [#project-setup-2]

    1. Integrate the Android plugin through Gradle by adding the downloaded \`.aar\` files to \`android/libs\` and configuring \`build.gradle\`.

    2. Integrate the iOS plugin through CocoaPods by importing the \`.framework\` files and updating the podspec and Podfile.

    3. Convert the \`authpack\` certificate to Dart and save it in the Flutter \`lib\` folder.

    4. Save the required model and \`.bundle\` files from the resource package to the project folder.

       ![FaceUnity Flutter resources](https://assets-docs.agora.io/images/extensions-marketplace/faceunity-fluter-resources.png)

    5. Add the necessary Flutter dependencies and assets to \`pubspec.yaml\`.

    ## Integrate the extension [#integrate-the-extension-2]

    ### Enable the extension [#enable-the-extension-2]

    \`\`\`dart
    if (Platform.isAndroid) {
      await agoraEngine.loadExtensionProvider(path: 'AgoraFaceUnityExtension');
    }

    await agoraEngine.enableExtension(
      provider: "FaceUnity",
      extension: "Effect",
      enable: true,
    );
    \`\`\`

    ### Handle extension callbacks [#handle-extension-callbacks]

    Register \`onExtensionStarted\`, \`onExtensionError\`, and \`onExtensionEvent\` in \`RtcEngineEventHandler\`.

    ### Initialize the extension [#initialize-the-extension-2]

    Call \`setExtensionProperty\` to set \`fuSetup\` and \`fuLoadAIModelFromPackage\`.

    ### Apply AR effects [#apply-ar-effects]

    Call \`setExtensionProperty\` to load props and apply effects such as the cat ears demo effect.

    ### Release resources [#release-resources-2]

    Call \`setExtensionProperty\` with \`fuDestroyLibData\` when you dispose of the engine.

    ## Reference [#reference-2]

    * [Flutter FaceUnity sample project](https://github.com/AgoraIO-Community/AgoraMarketplace/tree/master/FaceUnity/flutter)
    * [enableExtension](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_enableextension)
    * [loadExtensionProvider](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_loadextensionprovider)
    * [setExtensionProperty](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setextensionproperty)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The FaceUnity AR Filter extension uses 3D vision, 3D graphics, and deep learning technologies to provide advanced AR portrait video effects for the Agora RTC SDK. It enables features such as:"
  }, {
    heading: undefined,
    content: "**Basic beauty**: Skin beautification, whitening, and rosy effects."
  }, {
    heading: undefined,
    content: "**Advanced beauty**: Beauty effects for shape, face, and skin."
  }, {
    heading: undefined,
    content: "**Number detection**: Detect the number of faces, humans, or gestures."
  }, {
    heading: undefined,
    content: "This page shows you how to integrate and use the FaceUnity AR Filter extension in your app."
  }, {
    heading: "understand-the-tech",
    content: "To quickly integrate FaceUnity AR filter capabilities in your app, set extension properties using the `key` and `value` parameters in the RTC SDK. Calling `setExtensionProperty` with a pair of `key` and `value` parameters is equivalent to calling the corresponding FaceUnity API. The `key` is named after the FaceUnity API method, and `value` wraps the parameters required for that method in JSON."
  }, {
    heading: "prerequisites",
    content: "Android Studio 4.1 or later."
  }, {
    heading: "prerequisites",
    content: "A physical device (not an emulator) running Android 5.0 or later."
  }, {
    heading: "prerequisites",
    content: "Implemented the SDK quickstart."
  }, {
    heading: "project-setup",
    content: "To get started, use the FaceUnity sample project on GitHub:"
  }, {
    heading: "project-setup",
    content: "Clone the repository:"
  }, {
    heading: "project-setup",
    content: "Complete the setup described in the README."
  }, {
    heading: "project-setup",
    content: "Contact support\\@agora.io for activation, provide your package name, and obtain the `authpack` certificate file."
  }, {
    heading: "project-setup",
    content: "Download the FaceUnity AR Filter package and the FaceUnity resource package."
  }, {
    heading: "add-the-extension-to-your-project",
    content: "Unzip the AR Filter package and save all `.aar` files to `/app/libs`."
  }, {
    heading: "add-the-extension-to-your-project",
    content: "Save `authpack.java` to the path that matches the package name you registered."
  }, {
    heading: "add-the-extension-to-your-project",
    content: "Save the required model and prop files from the resource package to `/app/src/main/assets`."
  }, {
    heading: "add-the-extension-to-your-project",
    content: "Add the following Gradle dependency:"
  }, {
    heading: "add-the-extension-to-your-project",
    content: "Import the required Agora and FaceUnity classes."
  }, {
    heading: "enable-the-extension",
    content: "Call `enableExtension` before other APIs, including `enableVideo` and `joinChannel`."
  }, {
    heading: "initialize-the-extension",
    content: "After receiving the `onExtensionStarted` callback, call `setExtensionProperty` to load the certificate and AI models."
  }, {
    heading: "configure-beauty-effects-and-body-recognition",
    content: "Load props, adjust beautification intensity, and enable face, gesture, and human recognition by calling `setExtensionProperty` with the corresponding keys and values."
  }, {
    heading: "release-resources",
    content: "When you stop using FaceUnity, call `setExtensionProperty` with the `fuDestroyLibData` key, and after receiving the callback, destroy the engine."
  }, {
    heading: "api-reference",
    content: "setExtensionProperty"
  }, {
    heading: "api-reference",
    content: "RtcEngineConfig.addExtension"
  }, {
    heading: "api-reference",
    content: "ContentInspectConfig"
  }, {
    heading: "error-codes",
    content: "API"
  }, {
    heading: "error-codes",
    content: "Error code"
  }, {
    heading: "error-codes",
    content: "Description"
  }, {
    heading: "error-codes",
    content: "`enableExtension`"
  }, {
    heading: "error-codes",
    content: "`-3` (SDK layer)"
  }, {
    heading: "error-codes",
    content: "The SDK cannot find the corresponding extension dynamic library."
  }, {
    heading: "error-codes",
    content: "`setExtensionProperty`"
  }, {
    heading: "error-codes",
    content: "`-1` (extension layer)"
  }, {
    heading: "error-codes",
    content: "Invalid or repeated extension initialization or model loading."
  }, {
    heading: "error-codes",
    content: "`setExtensionProperty`"
  }, {
    heading: "error-codes",
    content: "`-2` (SDK layer or extension layer)"
  }, {
    heading: "error-codes",
    content: "The timing of the call is wrong or the parameter is invalid."
  }, {
    heading: "error-codes",
    content: "`setExtensionProperty`"
  }, {
    heading: "error-codes",
    content: "`-20` (extension layer)"
  }, {
    heading: "error-codes",
    content: "The incoming key is not supported or the resource is already loaded or destroyed."
  }, {
    heading: "understand-the-tech-1",
    content: "To quickly integrate FaceUnity AR filter capabilities in your app, set extension properties using the `key` and `value` parameters in the RTC SDK. Calling `setExtensionPropertyWithVendor` with a pair of `key` and `value` parameters is equivalent to calling the corresponding FaceUnity API."
  }, {
    heading: "prerequisites-1",
    content: "Xcode 12.0 or higher."
  }, {
    heading: "prerequisites-1",
    content: "A physical device running iOS 9.0 or later."
  }, {
    heading: "prerequisites-1",
    content: "Implemented the SDK quickstart."
  }, {
    heading: "project-setup-1",
    content: "Clone the FaceUnity sample project:"
  }, {
    heading: "project-setup-1",
    content: "Follow the README."
  }, {
    heading: "project-setup-1",
    content: "Download the FaceUnity iOS package and resource package."
  }, {
    heading: "project-setup-1",
    content: "Create a `Resource` folder and place the required model and prop files there."
  }, {
    heading: "project-setup-1",
    content: "Import the required `.framework` files and ensure they are set to **Embed & Sign**."
  }, {
    heading: "initialize-the-extension-1",
    content: "After `onExtensionStarted`, call `setExtensionPropertyWithVendor` to load certificates, AI models, and prop packages."
  }, {
    heading: "configure-beauty-effects-and-body-recognition-1",
    content: "Call `setExtensionPropertyWithVendor` with the appropriate keys and values to configure the desired effects."
  }, {
    heading: "release-resources-1",
    content: "When you stop using FaceUnity, call `setExtensionPropertyWithVendor` with the `fuDestroyLibData` key and then destroy the engine after the callback confirms success."
  }, {
    heading: "reference-1",
    content: "enableExtensionWithVendor"
  }, {
    heading: "reference-1",
    content: "setExtensionPropertyWithVendor"
  }, {
    heading: "understand-the-tech-2",
    content: "In a Flutter project, you integrate the native Android and iOS plug-ins through Gradle and CocoaPods respectively."
  }, {
    heading: "prerequisites-2",
    content: "Flutter 2.0.0 or higher."
  }, {
    heading: "prerequisites-2",
    content: "Dart 2.15.1 or higher."
  }, {
    heading: "prerequisites-2",
    content: "Implemented the SDK quickstart."
  }, {
    heading: "project-setup-2",
    content: "Integrate the Android plugin through Gradle by adding the downloaded `.aar` files to `android/libs` and configuring `build.gradle`."
  }, {
    heading: "project-setup-2",
    content: "Integrate the iOS plugin through CocoaPods by importing the `.framework` files and updating the podspec and Podfile."
  }, {
    heading: "project-setup-2",
    content: "Convert the `authpack` certificate to Dart and save it in the Flutter `lib` folder."
  }, {
    heading: "project-setup-2",
    content: "Save the required model and `.bundle` files from the resource package to the project folder."
  }, {
    heading: "project-setup-2",
    content: "Add the necessary Flutter dependencies and assets to `pubspec.yaml`."
  }, {
    heading: "handle-extension-callbacks",
    content: "Register `onExtensionStarted`, `onExtensionError`, and `onExtensionEvent` in `RtcEngineEventHandler`."
  }, {
    heading: "initialize-the-extension-2",
    content: "Call `setExtensionProperty` to set `fuSetup` and `fuLoadAIModelFromPackage`."
  }, {
    heading: "apply-ar-effects",
    content: "Call `setExtensionProperty` to load props and apply effects such as the cat ears demo effect."
  }, {
    heading: "release-resources-2",
    content: "Call `setExtensionProperty` with `fuDestroyLibData` when you dispose of the engine."
  }, {
    heading: "reference-2",
    content: "Flutter FaceUnity sample project"
  }, {
    heading: "reference-2",
    content: "enableExtension"
  }, {
    heading: "reference-2",
    content: "loadExtensionProvider"
  }, {
    heading: "reference-2",
    content: "setExtensionProperty"
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
    id: "integrate-the-extension",
    content: "Integrate the extension"
  }, {
    id: "add-the-extension-to-your-project",
    content: "Add the extension to your project"
  }, {
    id: "enable-the-extension",
    content: "Enable the extension"
  }, {
    id: "initialize-the-extension",
    content: "Initialize the extension"
  }, {
    id: "configure-beauty-effects-and-body-recognition",
    content: "Configure beauty effects and body recognition"
  }, {
    id: "release-resources",
    content: "Release resources"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "api-reference",
    content: "API reference"
  }, {
    id: "error-codes",
    content: "Error codes"
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
    id: "integrate-the-extension-1",
    content: "Integrate the extension"
  }, {
    id: "enable-the-extension-1",
    content: "Enable the extension"
  }, {
    id: "initialize-the-extension-1",
    content: "Initialize the extension"
  }, {
    id: "configure-beauty-effects-and-body-recognition-1",
    content: "Configure beauty effects and body recognition"
  }, {
    id: "release-resources-1",
    content: "Release resources"
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
    id: "integrate-the-extension-2",
    content: "Integrate the extension"
  }, {
    id: "enable-the-extension-2",
    content: "Enable the extension"
  }, {
    id: "handle-extension-callbacks",
    content: "Handle extension callbacks"
  }, {
    id: "initialize-the-extension-2",
    content: "Initialize the extension"
  }, {
    id: "apply-ar-effects",
    content: "Apply AR effects"
  }, {
    id: "release-resources-2",
    content: "Release resources"
  }, {
    id: "reference-2",
    content: "Reference"
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
  url: "#integrate-the-extension",
  title: _jsx(_Fragment, {
    children: "Integrate the extension"
  })
}, {
  depth: 3,
  url: "#add-the-extension-to-your-project",
  title: _jsx(_Fragment, {
    children: "Add the extension to your project"
  })
}, {
  depth: 3,
  url: "#enable-the-extension",
  title: _jsx(_Fragment, {
    children: "Enable the extension"
  })
}, {
  depth: 3,
  url: "#initialize-the-extension",
  title: _jsx(_Fragment, {
    children: "Initialize the extension"
  })
}, {
  depth: 3,
  url: "#configure-beauty-effects-and-body-recognition",
  title: _jsx(_Fragment, {
    children: "Configure beauty effects and body recognition"
  })
}, {
  depth: 3,
  url: "#release-resources",
  title: _jsx(_Fragment, {
    children: "Release resources"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#error-codes",
  title: _jsx(_Fragment, {
    children: "Error codes"
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
  url: "#integrate-the-extension-1",
  title: _jsx(_Fragment, {
    children: "Integrate the extension"
  })
}, {
  depth: 3,
  url: "#enable-the-extension-1",
  title: _jsx(_Fragment, {
    children: "Enable the extension"
  })
}, {
  depth: 3,
  url: "#initialize-the-extension-1",
  title: _jsx(_Fragment, {
    children: "Initialize the extension"
  })
}, {
  depth: 3,
  url: "#configure-beauty-effects-and-body-recognition-1",
  title: _jsx(_Fragment, {
    children: "Configure beauty effects and body recognition"
  })
}, {
  depth: 3,
  url: "#release-resources-1",
  title: _jsx(_Fragment, {
    children: "Release resources"
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
  url: "#integrate-the-extension-2",
  title: _jsx(_Fragment, {
    children: "Integrate the extension"
  })
}, {
  depth: 3,
  url: "#enable-the-extension-2",
  title: _jsx(_Fragment, {
    children: "Enable the extension"
  })
}, {
  depth: 3,
  url: "#handle-extension-callbacks",
  title: _jsx(_Fragment, {
    children: "Handle extension callbacks"
  })
}, {
  depth: 3,
  url: "#initialize-the-extension-2",
  title: _jsx(_Fragment, {
    children: "Initialize the extension"
  })
}, {
  depth: 3,
  url: "#apply-ar-effects",
  title: _jsx(_Fragment, {
    children: "Apply AR effects"
  })
}, {
  depth: 3,
  url: "#release-resources-2",
  title: _jsx(_Fragment, {
    children: "Release resources"
  })
}, {
  depth: 2,
  url: "#reference-2",
  title: _jsx(_Fragment, {
    children: "Reference"
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
      children: "The FaceUnity AR Filter extension uses 3D vision, 3D graphics, and deep learning technologies to provide advanced AR portrait video effects for the Agora RTC SDK. It enables features such as:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Basic beauty"
        }), ": Skin beautification, whitening, and rosy effects."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Advanced beauty"
        }), ": Beauty effects for shape, face, and skin."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Number detection"
        }), ": Detect the number of faces, humans, or gestures."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "This page shows you how to integrate and use the FaceUnity AR Filter extension in your app."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "android",
      platforms: '["android","ios","flutter"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "android"
        }), _jsx(_components.h2, {
          id: "understand-the-tech",
          children: "Understand the tech"
        }), _jsxs(_components.p, {
          children: ["To quickly integrate FaceUnity AR filter capabilities in your app, set extension properties using the ", _jsx(_components.code, {
            children: "key"
          }), " and ", _jsx(_components.code, {
            children: "value"
          }), " parameters in the RTC SDK. Calling ", _jsx(_components.code, {
            children: "setExtensionProperty"
          }), " with a pair of ", _jsx(_components.code, {
            children: "key"
          }), " and ", _jsx(_components.code, {
            children: "value"
          }), " parameters is equivalent to calling the corresponding FaceUnity API. The ", _jsx(_components.code, {
            children: "key"
          }), " is named after the FaceUnity API method, and ", _jsx(_components.code, {
            children: "value"
          }), " wraps the parameters required for that method in JSON."]
        }), _jsx(_components.h2, {
          id: "prerequisites",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Android Studio 4.1 or later."
          }), `
`, _jsx(_components.li, {
            children: "A physical device (not an emulator) running Android 5.0 or later."
          }), `
`, _jsxs(_components.li, {
            children: ["Implemented the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), "."]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "project-setup",
          children: "Project setup"
        }), _jsx(_components.p, {
          children: "To get started, use the FaceUnity sample project on GitHub:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Clone the repository:"
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
                      children: " https://github.com/AgoraIO-Community/AgoraMarketPlace.git"
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
              children: ["Complete the setup described in the ", _jsx(_components.a, {
                href: "https://github.com/AgoraIO-Community/AgoraMarketplace/blob/master/FaceUnity/android/README.md",
                children: "README"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Contact ", _jsx(_components.a, {
                href: "mailto:support@agora.io",
                children: "support@agora.io"
              }), " for activation, provide your package name, and obtain the ", _jsx(_components.code, {
                children: "authpack"
              }), " certificate file."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Download the FaceUnity AR Filter package and the FaceUnity resource package."
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "integrate-the-extension",
          children: "Integrate the extension"
        }), _jsx(_components.h3, {
          id: "add-the-extension-to-your-project",
          children: "Add the extension to your project"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Unzip the AR Filter package and save all ", _jsx(_components.code, {
                children: ".aar"
              }), " files to ", _jsx(_components.code, {
                children: "/app/libs"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Save ", _jsx(_components.code, {
                children: "authpack.java"
              }), " to the path that matches the package name you registered."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Save the required model and prop files from the resource package to ", _jsx(_components.code, {
                children: "/app/src/main/assets"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Add the following Gradle dependency:"
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "implementation"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " fileTree"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "dir:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "libs",'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " include:"
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
                      children: '"*.aar"]'
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
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Import the required Agora and FaceUnity classes."
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "enable-the-extension",
          children: "Enable the extension"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "enableExtension"
          }), " before other APIs, including ", _jsx(_components.code, {
            children: "enableVideo"
          }), " and ", _jsx(_components.code, {
            children: "joinChannel"
          }), "."]
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "RtcEngineConfig config "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " new"
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
                  children: "();"
                })]
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
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"AgoraFaceUnityExtension"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
                })]
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
                  children: "(config);"
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
                  children: "enableExtension"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"FaceUnity"'
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
                  children: '"Effect"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", enabled);"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "initialize-the-extension",
          children: "Initialize the extension"
        }), _jsxs(_components.p, {
          children: ["After receiving the ", _jsx(_components.code, {
            children: "onExtensionStarted"
          }), " callback, call ", _jsx(_components.code, {
            children: "setExtensionProperty"
          }), " to load the certificate and AI models."]
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
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
                  children: " void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " initExtension"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "() {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  try"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    JSONObject jsonObject "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " JSONObject"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    JSONArray jsonArray "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " new"
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
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    for"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "byte"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " it "
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
                  children: " authpack."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "A"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      jsonArray."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "put"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(it);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    }"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    jsonObject."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "put"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"authdata"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", jsonArray);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "    setExtensionProperty"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"fuSetup"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", jsonObject."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "toString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "());"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  } "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "catch"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (JSONException "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "e"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ") {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    Log."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "e"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(TAG, e."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "toString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "());"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}"
                })
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "configure-beauty-effects-and-body-recognition",
          children: "Configure beauty effects and body recognition"
        }), _jsxs(_components.p, {
          children: ["Load props, adjust beautification intensity, and enable face, gesture, and human recognition by calling ", _jsx(_components.code, {
            children: "setExtensionProperty"
          }), " with the corresponding keys and values."]
        }), _jsx(_components.h3, {
          id: "release-resources",
          children: "Release resources"
        }), _jsxs(_components.p, {
          children: ["When you stop using FaceUnity, call ", _jsx(_components.code, {
            children: "setExtensionProperty"
          }), " with the ", _jsx(_components.code, {
            children: "fuDestroyLibData"
          }), " key, and after receiving the callback, destroy the engine."]
        }), _jsx(_components.h2, {
          id: "reference",
          children: "Reference"
        }), _jsx(_components.h3, {
          id: "api-reference",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setextensionproperty",
              children: "setExtensionProperty"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/rtc/android/class-and-enum/classes/class-rtcengineconfig",
              children: "RtcEngineConfig.addExtension"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/rtc/android/class-and-enum/classes/class-contentinspectconfig",
              children: "ContentInspectConfig"
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "error-codes",
          children: "Error codes"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "API"
              }), _jsx(_components.th, {
                children: "Error code"
              }), _jsx(_components.th, {
                children: "Description"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "enableExtension"
                })
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "-3"
                }), " (SDK layer)"]
              }), _jsx(_components.td, {
                children: "The SDK cannot find the corresponding extension dynamic library."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "setExtensionProperty"
                })
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "-1"
                }), " (extension layer)"]
              }), _jsx(_components.td, {
                children: "Invalid or repeated extension initialization or model loading."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "setExtensionProperty"
                })
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "-2"
                }), " (SDK layer or extension layer)"]
              }), _jsx(_components.td, {
                children: "The timing of the call is wrong or the parameter is invalid."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "setExtensionProperty"
                })
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "-20"
                }), " (extension layer)"]
              }), _jsx(_components.td, {
                children: "The incoming key is not supported or the resource is already loaded or destroyed."
              })]
            })]
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "ios",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "ios"
        }), _jsx(_components.h2, {
          id: "understand-the-tech-1",
          children: "Understand the tech"
        }), _jsxs(_components.p, {
          children: ["To quickly integrate FaceUnity AR filter capabilities in your app, set extension properties using the ", _jsx(_components.code, {
            children: "key"
          }), " and ", _jsx(_components.code, {
            children: "value"
          }), " parameters in the RTC SDK. Calling ", _jsx(_components.code, {
            children: "setExtensionPropertyWithVendor"
          }), " with a pair of ", _jsx(_components.code, {
            children: "key"
          }), " and ", _jsx(_components.code, {
            children: "value"
          }), " parameters is equivalent to calling the corresponding FaceUnity API."]
        }), _jsx(_components.h2, {
          id: "prerequisites-1",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Xcode 12.0 or higher."
          }), `
`, _jsx(_components.li, {
            children: "A physical device running iOS 9.0 or later."
          }), `
`, _jsxs(_components.li, {
            children: ["Implemented the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), "."]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "project-setup-1",
          children: "Project setup"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Clone the FaceUnity sample project:"
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
                      children: " https://github.com/AgoraIO-Community/AgoraMarketPlace.git"
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
              children: ["Follow the ", _jsx(_components.a, {
                href: "https://github.com/AgoraIO-Community/AgoraMarketplace/blob/master/FaceUnity/ios/README.md",
                children: "README"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Download the FaceUnity iOS package and resource package."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Create a ", _jsx(_components.code, {
                children: "Resource"
              }), " folder and place the required model and prop files there."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Import the required ", _jsx(_components.code, {
                children: ".framework"
              }), " files and ensure they are set to ", _jsx(_components.strong, {
                children: "Embed & Sign"
              }), "."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "integrate-the-extension-1",
          children: "Integrate the extension"
        }), _jsx(_components.h3, {
          id: "enable-the-extension-1",
          children: "Enable the extension"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
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
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '@"FaceUnity"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "                               extension:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '@"Effect"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "                                 enabled:self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".enable];"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "initialize-the-extension-1",
          children: "Initialize the extension"
        }), _jsxs(_components.p, {
          children: ["After ", _jsx(_components.code, {
            children: "onExtensionStarted"
          }), ", call ", _jsx(_components.code, {
            children: "setExtensionPropertyWithVendor"
          }), " to load certificates, AI models, and prop packages."]
        }), _jsx(_components.h3, {
          id: "configure-beauty-effects-and-body-recognition-1",
          children: "Configure beauty effects and body recognition"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setExtensionPropertyWithVendor"
          }), " with the appropriate keys and values to configure the desired effects."]
        }), _jsx(_components.h3, {
          id: "release-resources-1",
          children: "Release resources"
        }), _jsxs(_components.p, {
          children: ["When you stop using FaceUnity, call ", _jsx(_components.code, {
            children: "setExtensionPropertyWithVendor"
          }), " with the ", _jsx(_components.code, {
            children: "fuDestroyLibData"
          }), " key and then destroy the engine after the callback confirms success."]
        }), _jsx(_components.h2, {
          id: "reference-1",
          children: "Reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enableextension(withvendor:extension:enabled:)?language=objc",
              children: "enableExtensionWithVendor"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setextensionpropertywithvendor(_:extension:extensioninfo:key:value:)?language=objc",
              children: "setExtensionPropertyWithVendor"
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "flutter",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "flutter"
        }), _jsx(_components.h2, {
          id: "understand-the-tech-2",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "In a Flutter project, you integrate the native Android and iOS plug-ins through Gradle and CocoaPods respectively."
        }), _jsx(_components.h2, {
          id: "prerequisites-2",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "https://docs.flutter.dev/get-started/install",
              children: "Flutter"
            }), " 2.0.0 or higher."]
          }), `
`, _jsx(_components.li, {
            children: "Dart 2.15.1 or higher."
          }), `
`, _jsxs(_components.li, {
            children: ["Implemented the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), "."]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "project-setup-2",
          children: "Project setup"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Integrate the Android plugin through Gradle by adding the downloaded ", _jsx(_components.code, {
                children: ".aar"
              }), " files to ", _jsx(_components.code, {
                children: "android/libs"
              }), " and configuring ", _jsx(_components.code, {
                children: "build.gradle"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Integrate the iOS plugin through CocoaPods by importing the ", _jsx(_components.code, {
                children: ".framework"
              }), " files and updating the podspec and Podfile."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Convert the ", _jsx(_components.code, {
                children: "authpack"
              }), " certificate to Dart and save it in the Flutter ", _jsx(_components.code, {
                children: "lib"
              }), " folder."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Save the required model and ", _jsx(_components.code, {
                children: ".bundle"
              }), " files from the resource package to the project folder."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/extensions-marketplace/faceunity-fluter-resources.png",
                alt: "FaceUnity Flutter resources"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Add the necessary Flutter dependencies and assets to ", _jsx(_components.code, {
                children: "pubspec.yaml"
              }), "."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "integrate-the-extension-2",
          children: "Integrate the extension"
        }), _jsx(_components.h3, {
          id: "enable-the-extension-2",
          children: "Enable the extension"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "Platform"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".isAndroid) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " agoraEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "loadExtensionProvider"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(path"
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
                  children: " 'AgoraFaceUnityExtension'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}"
                })
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
                  children: "await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " agoraEngine."
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
                  children: "("
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  provider"
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
                  children: ' "FaceUnity"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  extension:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "Effect"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  enable"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " true"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
                })
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "handle-extension-callbacks",
          children: "Handle extension callbacks"
        }), _jsxs(_components.p, {
          children: ["Register ", _jsx(_components.code, {
            children: "onExtensionStarted"
          }), ", ", _jsx(_components.code, {
            children: "onExtensionError"
          }), ", and ", _jsx(_components.code, {
            children: "onExtensionEvent"
          }), " in ", _jsx(_components.code, {
            children: "RtcEngineEventHandler"
          }), "."]
        }), _jsx(_components.h3, {
          id: "initialize-the-extension-2",
          children: "Initialize the extension"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setExtensionProperty"
          }), " to set ", _jsx(_components.code, {
            children: "fuSetup"
          }), " and ", _jsx(_components.code, {
            children: "fuLoadAIModelFromPackage"
          }), "."]
        }), _jsx(_components.h3, {
          id: "apply-ar-effects",
          children: "Apply AR effects"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setExtensionProperty"
          }), " to load props and apply effects such as the cat ears demo effect."]
        }), _jsx(_components.h3, {
          id: "release-resources-2",
          children: "Release resources"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setExtensionProperty"
          }), " with ", _jsx(_components.code, {
            children: "fuDestroyLibData"
          }), " when you dispose of the engine."]
        }), _jsx(_components.h2, {
          id: "reference-2",
          children: "Reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO-Community/AgoraMarketplace/tree/master/FaceUnity/flutter",
              children: "Flutter FaceUnity sample project"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_enableextension",
              children: "enableExtension"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_loadextensionprovider",
              children: "loadExtensionProvider"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setextensionproperty",
              children: "setExtensionProperty"
            })
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
