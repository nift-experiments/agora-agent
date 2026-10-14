import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Compile and run a sample project",
  description: "Compile and run a project using Agora SDK"
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;windows&#x22;,&#x22;web&#x22;,&#x22;javascript&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;,&#x22;unreal&#x22;,&#x22;blueprint&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    Agora provides [Open-source sample projects on GitHub](https://github.com/AgoraIO/API-Examples/tree/main) to demonstrate the implementation of basic and advanced RTC SDK features.

    This page shows how to compile, configure, and run the RTC SDK Android sample project.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    Agora provides [Open-source sample projects on GitHub](https://github.com/AgoraIO/API-Examples/tree/main) to demonstrate the implementation of basic and advanced RTC SDK features.

    This page shows how to compile, configure, and run the RTC SDK iOS sample project.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    Agora provides [Open-source sample projects on GitHub](https://github.com/AgoraIO/API-Examples/tree/main) to demonstrate the implementation of basic and advanced RTC SDK features.

    This page shows how to compile, configure, and run the RTC SDK macOS sample project.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    Agora provides [Open-source sample projects on GitHub](https://github.com/AgoraIO/API-Examples/tree/main) to demonstrate the implementation of basic and advanced RTC SDK features.

    This page shows how to compile, configure, and run the RTC SDK Windows sample project.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    Agora provides [Open-source sample projects on GitHub](https://github.com/AgoraIO/API-Examples-Web) to demonstrate the implementation of basic and advanced RTC SDK features.

    This page shows how to compile, configure, and run the RTC SDK Web sample project.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="javascript">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="javascript" />

    Agora provides [Open-source sample projects on GitHub](https://github.com/AgoraIO/API-Examples-Web) to demonstrate the implementation of basic and advanced RTC SDK features.

    This page shows how to compile, configure, and run the RTC SDK JavaScript sample project.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    Agora provides [Open-source sample projects on GitHub](https://github.com/AgoraIO-Extensions/Electron-SDK) to demonstrate the implementation of basic and advanced RTC SDK features.

    This page shows how to compile, configure, and run the RTC SDK Electron sample project.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    Agora provides [Open-source sample projects on GitHub](https://github.com/AgoraIO-Extensions/Agora-Flutter-SDK) to demonstrate the implementation of basic and advanced RTC SDK features.

    This page shows how to compile, configure, and run the RTC SDK Flutter sample project.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    Agora provides [Open-source sample projects on GitHub](https://github.com/AgoraIO-Extensions/react-native-agora/tree/main/example) to demonstrate the implementation of basic and advanced RTC SDK features.

    This page shows how to compile, configure, and run the RTC SDK React Native sample project.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    Agora provides [Open-source sample projects on GitHub](https://github.com/AgoraIO-Extensions/Agora-Unity-Quickstart/tree/main/API-Example-Unity) to demonstrate the implementation of basic and advanced RTC SDK features.

    This page shows how to compile, configure, and run the RTC SDK Unity sample project.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unreal">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unreal" />

    Agora provides [Open-source sample projects on GitHub](https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-CPP-Example) to demonstrate the implementation of basic and advanced RTC SDK features.

    This page shows how to compile, configure, and run the RTC SDK Unreal Engine sample project.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="blueprint">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="blueprint" />

    Agora provides [Open-source sample projects on GitHub](https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-Blueprint-Example) to demonstrate the implementation of basic and advanced RTC SDK features.

    This page shows how to compile, configure, and run the RTC SDK Unreal (Blueprint) sample project.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>

## Prerequisites [#prerequisites]

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;windows&#x22;,&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;web&#x22;,&#x22;react-native&#x22;,&#x22;javascript&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;unity&#x22;,&#x22;unreal&#x22;,&#x22;blueprint&#x22;]" showTabs="true">
  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    * A device running Windows 7 or higher.
    * Microsoft Visual Studio 2017 or higher with [C++ desktop development](https://devblogs.microsoft.com/cppblog/windows-desktop-development-with-c-in-visual-studio/) support. C++ 11 or above.
    * If you use C# for development, you also need the [.NET framework](https://learn.microsoft.com/en-us/dotnet/framework/install/guide-for-developers).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    * [Android Studio](https://developer.android.com/studio) 4.2 or higher.
    * Android SDK API Level 21 or higher.
    * Two mobile devices running Android 5.0 or higher.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    * Xcode 13.0 or higher.
    * An Apple developer account.
    * If you need to use CocoaPods integrated SDK, make sure [CocoaPods is installed](https://guides.cocoapods.org/using/getting-started.html#getting-started).
    * Two devices running iOS 14.0 or higher.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    * Xcode 13.0 or higher.
    * An Apple developer account.
    * If you need to use CocoaPods integrated SDK, make sure [CocoaPods is installed](https://guides.cocoapods.org/using/getting-started.html#getting-started).
    * Two devices running macOS 10.10 or higher.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    * A [supported browser](../../reference/supported-platforms#desktop-browsers).
      Agora strongly recommends using the latest stable version of Google Chrome.
    * [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    * React Native 0.60 or later. For more information, see [Get Started with React Native](https://reactnative.dev/docs/environment-setup).
    * Node 16 or later
    * The following, depending on your target platform:

      <CodeBlockTabs defaultValue="tab1">
        <CodeBlockTabsList>
          <CodeBlockTabsTrigger value="tab1">
            Android
          </CodeBlockTabsTrigger>

          <CodeBlockTabsTrigger value="tab2">
            iOS
          </CodeBlockTabsTrigger>
        </CodeBlockTabsList>

        <CodeBlockTab value="tab1">
          * A machine running macOS, Windows, or Linux
            * [Java Development Kit (JDK) 11](https://openjdk.org/projects/jdk/11/) or later
            * Latest version of Android Studio
            * A physical or virtual mobile device running Android 5.0 or later
        </CodeBlockTab>

        <CodeBlockTab value="tab2">
          * A machine running macOS
            * Xcode 10 or later
            * CocoaPods
              * A physical or virtual mobile device running iOS 9.0 or later.
                If you use React Native 0.63 or later, ensure your iOS version is 10.0 or later.
        </CodeBlockTab>
      </CodeBlockTabs>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="javascript">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="javascript" />

    * A [supported browser](../../reference/supported-platforms#desktop-browsers).
    * A JavaScript package manager such as [npm](https://www.npmjs.com/package/npm).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    * [Node.js](https://nodejs.org/en/download/) 14 or higher.
    * [Yarn](https://yarnpkg.com/getting-started).
    * Python 3.11.x.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    * [Flutter](https://docs.flutter.dev/get-started/install) 2.10.5 or higher with Dart 2.14.0 or higher.
    * [Android Studio](https://developer.android.com/studio), IntelliJ, VS Code, or any other IDE that supports Flutter. See [Set up an editor](https://docs.flutter.dev/get-started/editor).
    * Prepare your development and testing environment according to your [target platform](/en/realtime-media/rtc/reference/supported-platforms).

      Run the \`flutter doctor\` command to confirm that your development environment is set up correctly for Flutter development.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    * [Unity Hub](https://unity.com/download) and [Unity Editor](https://unity.com/releases/editor/archive) 2018.4.0 or higher
    * A suitable operating system and compiler for your development platform:

      | Development platform | Operating system version | Compiler version                      |
      | :------------------- | :----------------------- | :------------------------------------ |
      | Android              | Android 4.1 or later     | Android Studio 4.1 or later           |
      | iOS                  | iOS 10.15 or later       | Xcode 9.0 or later                    |
      | macOS                | macOS 10.15 or later     | Xcode 9.0 or later                    |
      | Windows              | Windows 7 or later       | Microsoft Visual Studio 2017 or later |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unreal">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unreal" />

    * Unreal Engine 4.27 or higher

    * Prepare your development environment according to your target platform and engine version:

      | Dev environment requirements                                                                                   | Other requirements                                                                                                                                                                  |
      | :------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
      | [Android](https://docs.unrealengine.com/4.27/us-EN/SharingAndReleasing/Mobile/Android/AndroidSDKRequirements/) | -                                                                                                                                                                                   |
      | [iOS](https://docs.unrealengine.com/4.27/us-EN/SharingAndReleasing/Mobile/iOS/SDKRequirements/)                | A valid Apple developer signature.                                                                                                                                                  |
      | [macOS](https://docs.unrealengine.com/4.27/us-EN/Basics/InstallingUnrealEngine/RecommendedSpecifications/)     | A valid Apple developer signature.                                                                                                                                                  |
      | [Windows](https://docs.unrealengine.com/4.27/us-EN/Basics/InstallingUnrealEngine/RecommendedSpecifications/)   | 32-bit Windows only supports Unreal Engine 4 and below. To use Unreal Engine with 32-bit Windows, uncomment the code relating to \`Win32\` in the \`AgoraPluginLibrary.Build.cs\` file. |

    * Two physical devices for testing

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="blueprint">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="blueprint" />

    * Unreal Engine 4.27 or higher

    * Prepare your development environment according to your target platform and engine version:

      | Dev environment requirements                                                                                   | Other requirements                                                                                                                                                                  |
      | :------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
      | [Android](https://docs.unrealengine.com/4.27/us-EN/SharingAndReleasing/Mobile/Android/AndroidSDKRequirements/) | -                                                                                                                                                                                   |
      | [iOS](https://docs.unrealengine.com/4.27/us-EN/SharingAndReleasing/Mobile/iOS/SDKRequirements/)                | A valid Apple developer signature.                                                                                                                                                  |
      | [macOS](https://docs.unrealengine.com/4.27/us-EN/Basics/InstallingUnrealEngine/RecommendedSpecifications/)     | A valid Apple developer signature.                                                                                                                                                  |
      | [Windows](https://docs.unrealengine.com/4.27/us-EN/Basics/InstallingUnrealEngine/RecommendedSpecifications/)   | 32-bit Windows only supports Unreal Engine 4 and below. To use Unreal Engine with 32-bit Windows, uncomment the code relating to \`Win32\` in the \`AgoraPluginLibrary.Build.cs\` file. |

    * Two physical devices for testing

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>

{ /*
  - If a firewall is deployed in your network environment, refer to [Connect through restricted networks with Cloud Proxy](/en/introduction/account) to use Agora services normally.
  */ }

* A camera and a microphone

* A valid Agora account and project. Please refer to [Agora account management](/en/introduction/account) for details.

* Installed [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Project setup [#project-setup]

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;blueprint&#x22;,&#x22;android&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;javascript&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;,&#x22;unreal&#x22;,&#x22;web&#x22;,&#x22;windows&#x22;]" showTabs="true">
  <_PlatformPanel platform="blueprint">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="blueprint" />

    ### Get the sample project [#get-the-sample-project]

    1. Run the following command to clone the repository locally:

       \`\`\`bash
       git clone git@github.com:AgoraIO-Extensions/Agora-Unreal-RTC-SDK.git
       \`\`\`

    2. The Blueprint usage examples are located in \`/Agora-Unreal-SDK-Blueprint-Example\`. These include:

       | Description           | Path                                                              |
       | :-------------------- | :---------------------------------------------------------------- |
       | Basic API examples    | \`/Agora-Unreal-SDK-Blueprint-Example/Content/API-Example/Basic\`   |
       | Advanced API examples | \`/Agora-Unreal-SDK-Blueprint-Example/Content/API-Example/Advance\` |

    ### Configure the sample project [#configure-the-sample-project]

    Refer to the following steps to integrate the SDK:

    1. Go to [SDKs](/sdks) to download the latest version of the RTC SDK and unzip it.
    2. In \`/Agora-Unreal-SDK-Blueprint-Example\`, create a folder named \`Plugins\`.
    3. Copy \`AgoraPlugin\` from the SDK folder to \`Plugins\`.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    ### Get the sample project [#get-the-sample-project-1]

    Run the following command to clone the repository locally:

    \`\`\`bash
    git clone git@github.com:AgoraIO/API-Examples.git
    \`\`\`

    This repository contains sample projects for all native platforms of Agora RTC SDK. The API usage examples for Android are located under \`/Android\`.

    | Path                        | Description                            |
    | :-------------------------- | :------------------------------------- |
    | \`/Android/APIExample\`       | API usage examples of Agora RTC SDK.   |
    | \`/Android/APIExample-Audio\` | API usage examples of Agora Voice SDK. |

    ### Configure the sample project [#configure-the-sample-project-1]

    <CalloutContainer type="warning">
      <CalloutTitle>
        information
      </CalloutTitle>

      <CalloutDescription>
        This page refers to the video sample project. If you want to run the audio sample project, please refer to the following steps and operate in the audio folder.
      </CalloutDescription>
    </CalloutContainer>

    1. Integrate the SDK and install dependencies

       The \`/APIExample/app/build.gradle\` file contains the project dependencies. When you open the project in Android Studio, it automatically downloads the dependencies and integrates the SDK.

    2. Set App ID and app certificate

       Open the \`/APIExample/app/src/main/res/values/string-config.xml\` file and fill in the App ID and app certificate you obtained from the Agora Console.

       \`\`\`xml
       <?xml version="1.0" encoding="utf-8"?>
       <resources>
           <!--
           Agora App ID
           -->
           <string name="agora_app_id" translatable="false">Your App ID</string>

           <!--
           Agora app certificate
           Note: Leave this field empty if the project allows joining by App ID only.
           -->
           <string name="agora_app_certificate" translatable="false">Your app certificate</string>

       </resources>
       \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    ### Get the sample project [#get-the-sample-project-2]

    Run the following command to clone the repository locally:

    \`\`\`bash
    git clone git@github.com:AgoraIO-Extensions/Electron-SDK.git
    \`\`\`

    This repository contains sample projects for Agora Web RTC SDK:

    | Description                                       | Path                                      |
    | ------------------------------------------------- | ----------------------------------------- |
    | Basic functions                                   | \`/example/src/renderer/examples/basic\`    |
    | Advanced features                                 | \`/example/src/renderer/examples/advanced\` |
    | [Hook](https://react.dev/reference/react) example | \`/example/src/renderer/examples/hook\`     |

    ### Configure the sample project [#configure-the-sample-project-2]

    1. **Install dependencies**

       Switch to the \`/example\` directory and run the following commands to integrate the SDK and install dependencies:

       \`\`\`bash
       yarn
       \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    ### Get the sample project [#get-the-sample-project-3]

    Run the following command to clone the repository locally:

    \`\`\`bash
    git clone git@github.com:AgoraIO-Extensions/Agora-Flutter-SDK.git
    \`\`\`

    This repository contains the following sample projects for Agora Web RTC SDK:

    | Description       | Path                             |
    | :---------------- | :------------------------------- |
    | Basic functions   | \`/example/lib/examples/basic\`    |
    | Advanced features | \`/example/lib/examples/advanced\` |

    ### Configure the sample project [#configure-the-sample-project-3]

    1. **Install dependencies**

       In the project root directory, run the following command to install the dependencies:

       \`\`\`bash
       flutter pub get
       \`\`\`

    2. **Set the App ID and Token**

       Open the \`/example/lib/config/agora.config.dart\` file, fill in the \`defaultValue\` for the App ID, channel name, and temporary token you obtained from Agora Console.

       \`\`\`dart
       String get appId {
         return '<TEST_APP_ID>';
       }

       String get token {
         return '<TEST_TOKEN>';
       }

       String get channelId {
         return '<TEST_CHANNEL_ID>';
       }
       \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    ### Get the sample project [#get-the-sample-project-4]

    You can obtain the sample project using the following methods:

    * Go to the [SDKs](/sdks) page, download the latest version of the Agora RTC SDK, and unzip it.

    * Run the following command to clone the Github repository locally:

      \`\`\`bash
      git clone git@github.com:AgoraIO/API-Examples.git
      \`\`\`

      This repository contains sample projects for all native platforms of Agora RTC SDK. The examples for iOS are located under \`/iOS\`.

      | Path                    | Description                             |
      | ----------------------- | --------------------------------------- |
      | \`/iOS/APIExample\`       | API usage examples for Agora RTC SDK.   |
      | \`/iOS/APIExample-Audio\` | API usage examples for Agora Voice SDK. |

    ### Configure the sample project [#configure-the-sample-project-4]

    <CalloutContainer type="warning">
      <CalloutTitle>
        information
      </CalloutTitle>

      <CalloutDescription>
        This page refers to the video sample project. If you want to run the audio sample project, refer to the following steps and operate in the audio folder.
      </CalloutDescription>
    </CalloutContainer>

    1. Open the \`samples/APIExample/APIExample/Common/KeyCenter.swift\` file and fill in the App ID and App certificate you obtained from the Agora Console.

       \`\`\`swift
       class KeyCenter: NSObject {
           // Replace <#Your App ID#> with your App ID
           static let AppId: String = "<#Your App ID#>"
           // Replace #Your certificate# with your App certificate. Leave this field blank if the project allows joining with the App ID only.
           static let Certificate: String? = "<#Your certificate#>"
       }
       \`\`\`

    2. Open terminal and run \`pod install\` in the \`samples/API-Example\` folder to install the SDK and related dependencies. After the installation is complete, the terminal displays 'Pod installation complete!'.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    ### Get the sample project [#get-the-sample-project-5]

    You can obtain the sample project using the following methods:

    * Go to the [SDKs](/sdks) page, download the latest version of the Agora RTC SDK, and unzip it.

    * Run the following command to clone the Github repository locally:

      \`\`\`bash
      git clone git@github.com:AgoraIO/API-Examples.git
      \`\`\`

      This repository contains sample projects for all native platforms of Agora RTC SDK. The API usage examples for macOS are located under \`/macOS\`.

    ### Configure the sample project [#configure-the-sample-project-5]

    1. Set your App ID and App certificate

       Open the \`KeyCenter.swift\` file and fill in the App ID and App certificate you obtained from the Agora Console.

       \`\`\`swift
       struct KeyCenter {
           // Replace <#Your App ID#> with your App ID
           static let AppId: String = "<#Your App ID#>"
           // Replace #Your certificate# with your App certificate. Leave this field blank if the project allows joining with the App ID only
           static let Certificate: String? = "<#Your certificate#>"
       }
       \`\`\`

    2. Open a terminal and run \`pod install\` in the \`/macOS\` directory, to install project dependencies. After the installation is complete, the terminal displays \`Pod installation complete!\`. A file \`APIExample.xcworkspace\` is generated in the project folder.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="javascript">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="javascript" />

    ### Get the sample project [#get-the-sample-project-6]

    Run the following command to clone the GitHub repository locally:

    \`\`\`bash
    git clone https://github.com/AgoraIO/API-Examples-Web
    \`\`\`

    The GitHub examples repository provides the following projects:

    | Description                  | Path                  |
    | :--------------------------- | :-------------------- |
    | Feature demos                | \`/Demo\`               |
    | Extension demos              | \`/ExtensionDemo\`      |
    | Vue framework examples       | \`/vue/api-examples\`   |
    | **React framework examples** | \`/react/api-examples\` |

    ### Configure the sample project [#configure-the-sample-project-6]

    Navigate to \`/react/api-examples\` and run the following command to install the dependencies.

    \`\`\`bash
    npm install
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    ### Get the sample project [#get-the-sample-project-7]

    Run the following command to clone the repository locally:

    \`\`\`bash
    git clone git@github.com:AgoraIO-Extensions/react-native-agora.git
    \`\`\`

    This repository contains sample projects for Agora RTC SDK:

    | Description                                       | Path                             |
    | :------------------------------------------------ | :------------------------------- |
    | Basic functions                                   | \`/example/src/examples/basic\`    |
    | Advanced features                                 | \`/example/src/examples/advanced\` |
    | [Hook](https://react.dev/reference/react) example | \`/example/src/examples/hook\`     |

    ### Configure the sample project [#configure-the-sample-project-7]

    1. Install dependencies

       Switch to the root directory and run the following commands to integrate the SDK and install dependencies:

       \`\`\`bash
       yarn
       \`\`\`

    2. Set your App ID and App Token

       Open the \`/example/src/config/agora.config.ts\` file and fill in the App ID and temporary token you obtained from the Agora Console.

       \`\`\`typescript
       // Agora App ID
       let localAppId = '';
       try {
           localAppId = require('./appID').default;
           console.log('appID', localAppId);
       } catch (error) {
           console.warn(error);
       }

       const config = {
           appId: localAppId,
           // Agora app token
           token: '',
           // Agora channel ID
           channelId: 'test',
           uid: 0,
           logFilePath: '',
       };

       export default config;
       \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    ### Get the sample project [#get-the-sample-project-8]

    Obtain the sample project using one of the following methods:

    * Go to the [SDKs](/sdks) page, download the latest version of the RTC SDK, and unzip it. You see a \`.unitypackage\` file.

      Open the \`.unitypackage\` file. An **Import Unity Package window** pops up. Click **Import** to import the SDK into your project. After the import is complete, you see the \`Agora-RTC-PLUGIN\` folder in the project panel.

      ![](https://assets-docs.agora.io/images/video-sdk/run-compile-unity-get-project.png)

    * Run the following command to clone the repository locally:

      \`\`\`bash
      git clone https://github.com/AgoraIO-Extensions/Agora-Unity-Quickstart.git
      cd Agora-Unity-Quickstart/API-Example-Unity
      \`\`\`

    ### Configure the sample project [#configure-the-sample-project-8]

    In \`Agora-RTC-PLUGIN/API-Example/AppIdInput.asset\`, fill in the App ID, temporary token, and channel name you obtained from the Agora Console.

    ![](https://assets-docs.agora.io/images/video-sdk/run-compile-unity-get-project-2.png)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unreal">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unreal" />

    ### Get the sample project [#get-the-sample-project-9]

    1. Run the following command to clone the repository locally:

       \`\`\`bash
       git clone git@github.com:AgoraIO-Extensions/Agora-Unreal-RTC-SDK.git
       \`\`\`

    2. The C++ API usage examples are located in \`/Agora-Unreal-SDK-CPP-Example\`. These include:

       | Description           | Path                                                        |
       | :-------------------- | :---------------------------------------------------------- |
       | Basic API examples    | \`/Agora-Unreal-SDK-CPP-Example/Content/API-Example/Basic\`   |
       | Advanced API examples | \`/Agora-Unreal-SDK-CPP-Example/Content/API-Example/Advance\` |

    ### Configure the sample project [#configure-the-sample-project-9]

    Refer to the following steps to integrate the SDK:

    1. Go to [SDKs](/sdks) to download the latest version of the RTC SDK and unzip it.
    2. In \`/Agora-Unreal-SDK-CPP-Example\`, create a folder named \`Plugins\`.
    3. Copy \`AgoraPlugin\` from the SDK folder to \`Plugins\`.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    ### Get the sample project [#get-the-sample-project-10]

    Obtain the sample project using one of the following methods:

    * Go to the [SDKs](/sdks) page, download the latest version of RTC SDK, and unzip it.

    * Run the following commands to clone the GitHub repository locally:

      \`\`\`bash
      git clone https://github.com/AgoraIO/API-Examples-Web
      cd API-Examples-Web
      git checkout new
      \`\`\`

    The \`API-Examples-Web\` repository provides the following examples:

    | Description             | Path                           |
    | :---------------------- | :----------------------------- |
    | Basic examples          | \`/src/example/basic\`           |
    | Advanced examples       | \`/src/example/advanced\`        |
    | Plug-in examples        | \`/src/example/plugin\`          |
    | Other examples          | \`/src/example/others\`          |
    | Vue framework example   | \`/src/example/framework/vue\`   |
    | React framework example | \`/src/example/framework/react\` |

    ### Configure the sample project [#configure-the-sample-project-10]

    1. Install dependencies

       In the project root folder, run the following command to install the dependencies:

       \`\`\`bash
       npm install
       \`\`\`

    2. To launch the project, run the following command in the project root folder:

       \`\`\`bash
       npm run dev
       \`\`\`

       After execution is complete, the terminal displays the URL to launch the demo.

    3. Set App ID and temporary Token

       Open \`http://localhost:3001/index.html\` in your browser , fill in the App ID and App certificate you obtained from the Agora console, and then click **Set**. Both primary and secondary certificates are acceptable.

       ![](https://assets-docs.agora.io/images/video-sdk/run-compile-web-step-1.png)

    <CalloutContainer type="info">
      <CalloutTitle>
        Information
      </CalloutTitle>

      <CalloutDescription>
        If you have enabled joining with only the App ID for your project, leave the App certificate field blank.
      </CalloutDescription>
    </CalloutContainer>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    ### Get the sample project [#get-the-sample-project-11]

    1. Run the following command to clone the repository locally:

       \`\`\`bash
       git clone git@github.com:AgoraIO/API-Examples.git
       \`\`\`

       This repository contains sample projects for all native platforms of Agora RTC SDK. The API usage examples for Windows are located under \`/windows\`.

    2. Integrate SDK and install dependencies

       Run \`/APIExample/installThirdParty.bat\` to automatically integrate the SDK, download dependencies, and configure the environment.

    3. Set App ID and Token

       Open the \`/APIExample/APIExample/stdafx.h\` file and fill in the App ID and temporary token you obtained from the Agora Console.

       \`\`\`cpp
       #define APP_ID     "enter your App ID"
       #define APP_TOKEN  "enter your temporary token"
       \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>

## Run the sample project [#run-the-sample-project]

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;blueprint&#x22;,&#x22;android&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;javascript&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;,&#x22;unreal&#x22;,&#x22;web&#x22;,&#x22;windows&#x22;]" showTabs="true">
  <_PlatformPanel platform="blueprint">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="blueprint" />

    In the Unreal Editor, you can compile and run the sample project at the main level or any sublevel.

    <CodeBlockTabs defaultValue="Main level">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="Main level">
          Main Level
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="sub level">
          Sub Level
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="Main level">
        1. In the path of the Blueprint API example, double-click **AgoraBPExample.uproject** to open the project.

        2. Double-click **MainLevel**, then click **Compile** and run the sample project. You see the following interface:

           ![](https://assets-docs.agora.io/images/video-sdk/run-compile-blueprint-tab-1-1.png)

        3. Fill in the text box with the App ID and temporary token you obtained from the Agora Console, and the channel name you used to generate the token.

        4. Click the button on the left to navigate from the main level to the sub-levels of the API example to experience the selected demo. Choose \`BasicVideoCallScene\` as an example, click **JoinChannel** to join the channel. You see yourself in the local view.

           ![](https://assets-docs.agora.io/images/video-sdk/run-compile-blueprint-tab-1-2.png)

        5. To test various audio and video interaction use-cases, connect to the [Agora web demo](https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html), or install and run the sample project on a second device. Make sure you use the same App ID on both devices. When you join the same channel from two devices, you can see and hear each other.
      </CodeBlockTab>

      <CodeBlockTab value="sub level">
        1. In the path of the Blueprint API example,, double-click **AgoraBPExample.uproject** to open the project.

           ![](https://assets-docs.agora.io/images/video-sdk/run-compile-blueprint-tab-2-1.png)

        2. Choose **BasicVideoCallScene** as an example, double-click the sub-level in the Content Browser, and then click **Blueprints > Open Level Blueprint** above the editor to open the corresponding level blueprint.

        3. Fill in the App ID, temporary token, and channel name of your project.

           ![](https://assets-docs.agora.io/images/video-sdk/run-compile-blueprint-tab-2-2.png)

        4. Click **Compile** and run the sample project at the sublevel. You see the following interface:

           ![](https://assets-docs.agora.io/images/video-sdk/run-compile-blueprint-tab-2-3.png)

        5. Click **JoinChannel** to join the channel. You see yourself in the local view.

        6. To test various audio and video interaction use-cases, connect to the [Agora web demo](https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html), or install and run the sample project on a second device. Make sure you use the same App ID on both devices. When you join the same channel from two devices, you can see and hear each other.
      </CodeBlockTab>
    </CodeBlockTabs>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    1. Open the \`/API-Examples/Android/APIExample\` folder in Android Studio.

    2. Turn on developer options on your Android device, enable USB debugging, and connect the device to the development machine through a USB cable. Your Android device appears in the Android device options.

       ![](https://assets-docs.agora.io/images/video-sdk/run-compile-android-step-2.png)

    3. In Android Studio, click **Sync Project with Gradle Files** for Gradle synchronization.

    4. After synchronization is complete, click &#x2A;*Run 'app'** to start compilation.

       The app is installed as **Agora API Example** on your device.

    5. Open the app and choose the example you want to run. For example, to test **Live Interactive Video Streaming**, select the option from the menu, enter the channel name, and click **Join**.

       ![](https://assets-docs.agora.io/images/video-sdk/run-compile-android-step-6.jpg)

    6. To test various audio and video interaction use-cases, connect to the [Agora web demo](https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html), or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other.

       ![](https://assets-docs.agora.io/images/video-sdk/run-compile-android-step-7.png)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    1. To run the sample project, execute the following command in the \`/example\` directory:

       \`\`\`bash
       yarn start
       \`\`\`

    2. After the operation is complete, you see the following application on your screen:

       ![](https://assets-docs.agora.io/images/video-sdk/run-compile-electron-step-2.png)

    3. On the **Settings** page, fill in the App Id and temporary token you obtained from the Console. Fill in the same channel name you used when generating the temporary token. Click **Save** to save your settings.

    4. Select a demo you want to experience from the menu on the left. Choose **JoinChannelVideo**, under **Basic**, as an example and click **join channel**.

    5. To test various audio and video interaction use-cases, connect to the [Agora web demo](https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html), or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    1. Connect the target device to your computer.

    2. Open terminal and navigate to the \`/examples\` directory.

    3. Execute the following command to launch the sample project on available devices:

       \`\`\`bash
       flutter run
       \`\`\`

    4. After compilation is complete, you see the following application on your device:

       ![](https://assets-docs.agora.io/images/video-sdk/run-compile-flutter-step-4.png)

    5. Select a demo you want to experience from the menu. Choose **JoinChannelVideo** under **Basic** as an example. Enter the channel name you specified when generating the temporary token in **Channel ID**, and click **Join channel**.

    6. To test various audio and video interaction use-cases, connect to the [Agora web demo](https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html), or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other.

       ![](https://assets-docs.agora.io/images/video-sdk/run-compile-flutter-step-6.png)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    1. Connect an iOS device to your development machine, open **Device > Privacy & Security > Security** on the device, and turn on the developer mode.

    2. Check your iOS device in the **iOS Device** options at the top of the Xcode interface.

       ![](https://assets-docs.agora.io/images/video-sdk/run-compile-ios-step-2.png)

    3. Check **Automatically manage signing** in **Signing & Capabilities** under **TARGETS**, then configure your Apple developer account and **Bundle Identifier** under each target.

       ![](https://assets-docs.agora.io/images/video-sdk/run-compile-ios-step-3.png)

    4. Click **Start compiling**.

    5. After successful compilation, you see the app icon on your device.

    6. If an untrusted developer prompt pops up on the device, first tap **Cancel** to close the prompt, then open **Settings > General > VPN and Device Management** on the iOS device, and choose to trust the developer.

    7. Open the **API Example App**, select an example you want to try, then enter the channel name. For example, *test*, and tap **Join Channel**.

    8. To test various audio and video interaction use-cases, connect to the [Agora web demo](https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html), or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other.

       ![](https://assets-docs.agora.io/images/video-sdk/run-compile-ios-step-8.png)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    1. Open the file \`APIExample.xcworkspace\` in Xcode. Check **Automatically manage signing** in **Signing & Capabilities** under **TARGETS**, and then configure your Apple developer account and **Bundle Identifier** under each target.

       ![](https://assets-docs.agora.io/images/video-sdk/run-compile-macos-step-1.jpeg)

    2. Click **Start compiling**.

    3. After successful compilation, the sample project window pops up.

    4. Select an example you want to try, then enter a channel name, such as *test*, and click the **Join Channel**.

       ![](https://assets-docs.agora.io/images/video-sdk/run-compile-macos-step-4.png)

    5. To test various audio and video interaction use-cases, connect to the [Agora web demo](https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html), or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other.

       ![](https://assets-docs.agora.io/images/video-sdk/run-compile-macos-step-5.png)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="javascript">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="javascript" />

    1. Use the following command to run the sample project.

       \`\`\`bash
       npm run dev
       \`\`\`

    2. On the demo page, enter your [App ID](/en/introduction/account#get-the-app-id-and-app-certificate), [token](/en/introduction/account#generate-temporary-tokens), and channel name and join the channel.

       The channel name must be the same as the channel ID you used to generate the token.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    1. Execute the following command in the project root directory to run the sample project.

       * Target platform Android

         \`\`\`bash
         yarn example android
         \`\`\`

       * Target platform iOS

         \`\`\`bash
         yarn example ios
         \`\`\`

    2. After the operation is complete, the following application appears on your device:

       ![](https://assets-docs.agora.io/images/video-sdk/run-compile-rn-step-2.png)

       Showing Android as an example

    3. Select the demo you want to experience from the menu. Choose **JoinChannelVideo** under **Basic** as an example, and click **join channel**.

       ![](https://assets-docs.agora.io/images/video-sdk/run-compile-rn-step-3.png)

    4. To test various audio and video interaction use-cases, connect to the [Agora web demo](https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html), or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    1. The \`API-Example\` folder contains two folders, \`Basic\` and \`Advanced\`, that contain usage examples of basic and advanced use-cases of Agora SDK. Select the demo you want to run and click **Play** to compile.

       ![](https://assets-docs.agora.io/images/video-sdk/run-compile-unity-step-1.png)

    2. Choose video calls as an example. After successful compilation, you see your local video preview.

       ![](https://assets-docs.agora.io/images/video-sdk/run-compile-unity-step-2.png)

    3. To test various audio and video interaction use-cases, connect to the [Agora web demo](https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html), or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other.

       ![](https://assets-docs.agora.io/images/video-sdk/run-compile-unity-step-3.png)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unreal">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unreal" />

    In the Unreal Editor, you can compile and run the sample project at the main level or any sublevel.

    <CodeBlockTabs defaultValue="Main level">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="Main level">
          Main Level
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="sub level">
          Sub Level
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="Main level">
        1. In the C++ API example folder, double-click \`AgoraExample.uproject\` to open the project.

        2. Double-click **MainLevel**, then click **Compile** and **Run** the sample project. On Windows, you see the following interface:

           ![](https://assets-docs.agora.io/images/video-sdk/run-compile-unreal-tab-1-step-3.png)

        3. Fill in the text box with the App ID and temporary token you obtained from the Agora Console, and the channel name you used to generate the token.

        4. Click the button on the left to navigate from the main level to the sub-levels of the API example to experience the selected demo. Choose **BasicVideoCallScene** as an example, click **JoinChannel** to join the channel. You see yourself in the local view.

           ![](https://assets-docs.agora.io/images/video-sdk/run-compile-unreal-tab-1-step-4.png)

        5. To test various audio and video interaction use-cases, connect to the [Agora web demo](https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html), or install and run the sample project on a second device. Make sure you use the same App ID on both devices. When you join the same channel from two devices, you can see and hear each other.
      </CodeBlockTab>

      <CodeBlockTab value="sub level">
        1. In the C++ API example folder, double-click \`AgoraExample.uproject\` to open the project.

        2. Choose **BasicVideoCallScene** as an example, double-click the sub-level in the Content Browser, and then click the  **BP\\_AgoraActor** blueprint in the **World Outliner panel**. Fill in the App ID, temporary token, and channel name of your project in the **Details panel**.

           ![](https://assets-docs.agora.io/images/video-sdk/run-compile-unreal-tab-2-step-2.png)

        3. Click **Compile** and run the sample project at the sublevel. You see the following interface:

           ![](https://assets-docs.agora.io/images/video-sdk/run-compile-unreal-tab-2-step-4.png)

        4. Click **JoinChannel** to join the channel. You see yourself in the local view.

        5. To test various audio and video interaction use-cases, connect to the [Agora web demo](https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html), or install and run the sample project on a second device. Make sure you use the same App ID on both devices. When you join the same channel from two devices, you can see and hear each other.
      </CodeBlockTab>
    </CodeBlockTabs>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    1. From the menu, choose the feature or use-case you want to experience.

    2. As an example, try the screen sharing demo, click **Join as host** to join a channel as the host. Ask a friend to run the sample project on another device and **Join as audience**, using the same app ID, app certificate, and channel name. Now you can share the screen with your friend.

       ![](https://assets-docs.agora.io/images/video-sdk/run-compile-web-step-2.png)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    1. Open the file \`/APIExample/APIExample.sln\` in Visual Studio.

    2. Click **Start compiling**.

    3. After compilation is complete, you see the following window on your device:

       ![](https://assets-docs.agora.io/images/video-sdk/run-compile-windows-step-3.png)

    4. Choose any demo you want to experience. Taking the **Live Broadcasting** as an example, enter the channel name you used when generating the temporary token in **Channel Name**, then click **Join Channel**.

    5. To test various audio and video interaction use-cases, use the [Agora web demo](https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html), or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other.

       ![](https://assets-docs.agora.io/images/video-sdk/run-compile-windows-step-5.png)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora provides Open-source sample projects on GitHub to demonstrate the implementation of basic and advanced RTC SDK features."
  }, {
    heading: undefined,
    content: "This page shows how to compile, configure, and run the RTC SDK Android sample project."
  }, {
    heading: undefined,
    content: "Agora provides Open-source sample projects on GitHub to demonstrate the implementation of basic and advanced RTC SDK features."
  }, {
    heading: undefined,
    content: "This page shows how to compile, configure, and run the RTC SDK iOS sample project."
  }, {
    heading: undefined,
    content: "Agora provides Open-source sample projects on GitHub to demonstrate the implementation of basic and advanced RTC SDK features."
  }, {
    heading: undefined,
    content: "This page shows how to compile, configure, and run the RTC SDK macOS sample project."
  }, {
    heading: undefined,
    content: "Agora provides Open-source sample projects on GitHub to demonstrate the implementation of basic and advanced RTC SDK features."
  }, {
    heading: undefined,
    content: "This page shows how to compile, configure, and run the RTC SDK Windows sample project."
  }, {
    heading: undefined,
    content: "Agora provides Open-source sample projects on GitHub to demonstrate the implementation of basic and advanced RTC SDK features."
  }, {
    heading: undefined,
    content: "This page shows how to compile, configure, and run the RTC SDK Web sample project."
  }, {
    heading: undefined,
    content: "Agora provides Open-source sample projects on GitHub to demonstrate the implementation of basic and advanced RTC SDK features."
  }, {
    heading: undefined,
    content: "This page shows how to compile, configure, and run the RTC SDK JavaScript sample project."
  }, {
    heading: undefined,
    content: "Agora provides Open-source sample projects on GitHub to demonstrate the implementation of basic and advanced RTC SDK features."
  }, {
    heading: undefined,
    content: "This page shows how to compile, configure, and run the RTC SDK Electron sample project."
  }, {
    heading: undefined,
    content: "Agora provides Open-source sample projects on GitHub to demonstrate the implementation of basic and advanced RTC SDK features."
  }, {
    heading: undefined,
    content: "This page shows how to compile, configure, and run the RTC SDK Flutter sample project."
  }, {
    heading: undefined,
    content: "Agora provides Open-source sample projects on GitHub to demonstrate the implementation of basic and advanced RTC SDK features."
  }, {
    heading: undefined,
    content: "This page shows how to compile, configure, and run the RTC SDK React Native sample project."
  }, {
    heading: undefined,
    content: "Agora provides Open-source sample projects on GitHub to demonstrate the implementation of basic and advanced RTC SDK features."
  }, {
    heading: undefined,
    content: "This page shows how to compile, configure, and run the RTC SDK Unity sample project."
  }, {
    heading: undefined,
    content: "Agora provides Open-source sample projects on GitHub to demonstrate the implementation of basic and advanced RTC SDK features."
  }, {
    heading: undefined,
    content: "This page shows how to compile, configure, and run the RTC SDK Unreal Engine sample project."
  }, {
    heading: undefined,
    content: "Agora provides Open-source sample projects on GitHub to demonstrate the implementation of basic and advanced RTC SDK features."
  }, {
    heading: undefined,
    content: "This page shows how to compile, configure, and run the RTC SDK Unreal (Blueprint) sample project."
  }, {
    heading: "prerequisites",
    content: "A device running Windows 7 or higher."
  }, {
    heading: "prerequisites",
    content: "Microsoft Visual Studio 2017 or higher with C++ desktop development support. C++ 11 or above."
  }, {
    heading: "prerequisites",
    content: "If you use C# for development, you also need the .NET framework."
  }, {
    heading: "prerequisites",
    content: "Android Studio 4.2 or higher."
  }, {
    heading: "prerequisites",
    content: "Android SDK API Level 21 or higher."
  }, {
    heading: "prerequisites",
    content: "Two mobile devices running Android 5.0 or higher."
  }, {
    heading: "prerequisites",
    content: "Xcode 13.0 or higher."
  }, {
    heading: "prerequisites",
    content: "An Apple developer account."
  }, {
    heading: "prerequisites",
    content: "If you need to use CocoaPods integrated SDK, make sure CocoaPods is installed."
  }, {
    heading: "prerequisites",
    content: "Two devices running iOS 14.0 or higher."
  }, {
    heading: "prerequisites",
    content: "Xcode 13.0 or higher."
  }, {
    heading: "prerequisites",
    content: "An Apple developer account."
  }, {
    heading: "prerequisites",
    content: "If you need to use CocoaPods integrated SDK, make sure CocoaPods is installed."
  }, {
    heading: "prerequisites",
    content: "Two devices running macOS 10.10 or higher."
  }, {
    heading: "prerequisites",
    content: `A supported browser.
Agora strongly recommends using the latest stable version of Google Chrome.`
  }, {
    heading: "prerequisites",
    content: "Node.js and npm"
  }, {
    heading: "prerequisites",
    content: "React Native 0.60 or later. For more information, see Get Started with React Native."
  }, {
    heading: "prerequisites",
    content: "Node 16 or later"
  }, {
    heading: "prerequisites",
    content: "The following, depending on your target platform:"
  }, {
    heading: "prerequisites",
    content: "A machine running macOS, Windows, or Linux"
  }, {
    heading: "prerequisites",
    content: "Java Development Kit (JDK) 11 or later"
  }, {
    heading: "prerequisites",
    content: "Latest version of Android Studio"
  }, {
    heading: "prerequisites",
    content: "A physical or virtual mobile device running Android 5.0 or later"
  }, {
    heading: "prerequisites",
    content: "A machine running macOS"
  }, {
    heading: "prerequisites",
    content: "Xcode 10 or later"
  }, {
    heading: "prerequisites",
    content: "CocoaPods"
  }, {
    heading: "prerequisites",
    content: `A physical or virtual mobile device running iOS 9.0 or later.
If you use React Native 0.63 or later, ensure your iOS version is 10.0 or later.`
  }, {
    heading: "prerequisites",
    content: "A supported browser."
  }, {
    heading: "prerequisites",
    content: "A JavaScript package manager such as npm."
  }, {
    heading: "prerequisites",
    content: "Node.js 14 or higher."
  }, {
    heading: "prerequisites",
    content: "Yarn."
  }, {
    heading: "prerequisites",
    content: "Python 3.11.x."
  }, {
    heading: "prerequisites",
    content: "Flutter 2.10.5 or higher with Dart 2.14.0 or higher."
  }, {
    heading: "prerequisites",
    content: "Android Studio, IntelliJ, VS Code, or any other IDE that supports Flutter. See Set up an editor."
  }, {
    heading: "prerequisites",
    content: "Prepare your development and testing environment according to your target platform."
  }, {
    heading: "prerequisites",
    content: "Run the `flutter doctor` command to confirm that your development environment is set up correctly for Flutter development."
  }, {
    heading: "prerequisites",
    content: "Unity Hub and Unity Editor 2018.4.0 or higher"
  }, {
    heading: "prerequisites",
    content: "A suitable operating system and compiler for your development platform:"
  }, {
    heading: "prerequisites",
    content: "Development platform"
  }, {
    heading: "prerequisites",
    content: "Operating system version"
  }, {
    heading: "prerequisites",
    content: "Compiler version"
  }, {
    heading: "prerequisites",
    content: "Android"
  }, {
    heading: "prerequisites",
    content: "Android 4.1 or later"
  }, {
    heading: "prerequisites",
    content: "Android Studio 4.1 or later"
  }, {
    heading: "prerequisites",
    content: "iOS"
  }, {
    heading: "prerequisites",
    content: "iOS 10.15 or later"
  }, {
    heading: "prerequisites",
    content: "Xcode 9.0 or later"
  }, {
    heading: "prerequisites",
    content: "macOS"
  }, {
    heading: "prerequisites",
    content: "macOS 10.15 or later"
  }, {
    heading: "prerequisites",
    content: "Xcode 9.0 or later"
  }, {
    heading: "prerequisites",
    content: "Windows"
  }, {
    heading: "prerequisites",
    content: "Windows 7 or later"
  }, {
    heading: "prerequisites",
    content: "Microsoft Visual Studio 2017 or later"
  }, {
    heading: "prerequisites",
    content: "Unreal Engine 4.27 or higher"
  }, {
    heading: "prerequisites",
    content: "Prepare your development environment according to your target platform and engine version:"
  }, {
    heading: "prerequisites",
    content: "Dev environment requirements"
  }, {
    heading: "prerequisites",
    content: "Other requirements"
  }, {
    heading: "prerequisites",
    content: "Android"
  }, {
    heading: "prerequisites",
    content: "-"
  }, {
    heading: "prerequisites",
    content: "iOS"
  }, {
    heading: "prerequisites",
    content: "A valid Apple developer signature."
  }, {
    heading: "prerequisites",
    content: "macOS"
  }, {
    heading: "prerequisites",
    content: "A valid Apple developer signature."
  }, {
    heading: "prerequisites",
    content: "Windows"
  }, {
    heading: "prerequisites",
    content: "32-bit Windows only supports Unreal Engine 4 and below. To use Unreal Engine with 32-bit Windows, uncomment the code relating to `Win32` in the `AgoraPluginLibrary.Build.cs` file."
  }, {
    heading: "prerequisites",
    content: "Two physical devices for testing"
  }, {
    heading: "prerequisites",
    content: "Unreal Engine 4.27 or higher"
  }, {
    heading: "prerequisites",
    content: "Prepare your development environment according to your target platform and engine version:"
  }, {
    heading: "prerequisites",
    content: "Dev environment requirements"
  }, {
    heading: "prerequisites",
    content: "Other requirements"
  }, {
    heading: "prerequisites",
    content: "Android"
  }, {
    heading: "prerequisites",
    content: "-"
  }, {
    heading: "prerequisites",
    content: "iOS"
  }, {
    heading: "prerequisites",
    content: "A valid Apple developer signature."
  }, {
    heading: "prerequisites",
    content: "macOS"
  }, {
    heading: "prerequisites",
    content: "A valid Apple developer signature."
  }, {
    heading: "prerequisites",
    content: "Windows"
  }, {
    heading: "prerequisites",
    content: "32-bit Windows only supports Unreal Engine 4 and below. To use Unreal Engine with 32-bit Windows, uncomment the code relating to `Win32` in the `AgoraPluginLibrary.Build.cs` file."
  }, {
    heading: "prerequisites",
    content: "Two physical devices for testing"
  }, {
    heading: "prerequisites",
    content: "A camera and a microphone"
  }, {
    heading: "prerequisites",
    content: "A valid Agora account and project. Please refer to Agora account management for details."
  }, {
    heading: "prerequisites",
    content: "Installed Git"
  }, {
    heading: "get-the-sample-project",
    content: "Run the following command to clone the repository locally:"
  }, {
    heading: "get-the-sample-project",
    content: "The Blueprint usage examples are located in `/Agora-Unreal-SDK-Blueprint-Example`. These include:"
  }, {
    heading: "get-the-sample-project",
    content: "Description"
  }, {
    heading: "get-the-sample-project",
    content: "Path"
  }, {
    heading: "get-the-sample-project",
    content: "Basic API examples"
  }, {
    heading: "get-the-sample-project",
    content: "`/Agora-Unreal-SDK-Blueprint-Example/Content/API-Example/Basic`"
  }, {
    heading: "get-the-sample-project",
    content: "Advanced API examples"
  }, {
    heading: "get-the-sample-project",
    content: "`/Agora-Unreal-SDK-Blueprint-Example/Content/API-Example/Advance`"
  }, {
    heading: "configure-the-sample-project",
    content: "Refer to the following steps to integrate the SDK:"
  }, {
    heading: "configure-the-sample-project",
    content: "Go to SDKs to download the latest version of the RTC SDK and unzip it."
  }, {
    heading: "configure-the-sample-project",
    content: "In `/Agora-Unreal-SDK-Blueprint-Example`, create a folder named `Plugins`."
  }, {
    heading: "configure-the-sample-project",
    content: "Copy `AgoraPlugin` from the SDK folder to `Plugins`."
  }, {
    heading: "get-the-sample-project-1",
    content: "Run the following command to clone the repository locally:"
  }, {
    heading: "get-the-sample-project-1",
    content: "This repository contains sample projects for all native platforms of Agora RTC SDK. The API usage examples for Android are located under `/Android`."
  }, {
    heading: "get-the-sample-project-1",
    content: "Path"
  }, {
    heading: "get-the-sample-project-1",
    content: "Description"
  }, {
    heading: "get-the-sample-project-1",
    content: "`/Android/APIExample`"
  }, {
    heading: "get-the-sample-project-1",
    content: "API usage examples of Agora RTC SDK."
  }, {
    heading: "get-the-sample-project-1",
    content: "`/Android/APIExample-Audio`"
  }, {
    heading: "get-the-sample-project-1",
    content: "API usage examples of Agora Voice SDK."
  }, {
    heading: "configure-the-sample-project-1",
    content: "This page refers to the video sample project. If you want to run the audio sample project, please refer to the following steps and operate in the audio folder."
  }, {
    heading: "configure-the-sample-project-1",
    content: "Integrate the SDK and install dependencies"
  }, {
    heading: "configure-the-sample-project-1",
    content: "The `/APIExample/app/build.gradle` file contains the project dependencies. When you open the project in Android Studio, it automatically downloads the dependencies and integrates the SDK."
  }, {
    heading: "configure-the-sample-project-1",
    content: "Set App ID and app certificate"
  }, {
    heading: "configure-the-sample-project-1",
    content: "Open the `/APIExample/app/src/main/res/values/string-config.xml` file and fill in the App ID and app certificate you obtained from the Agora Console."
  }, {
    heading: "get-the-sample-project-2",
    content: "Run the following command to clone the repository locally:"
  }, {
    heading: "get-the-sample-project-2",
    content: "This repository contains sample projects for Agora Web RTC SDK:"
  }, {
    heading: "get-the-sample-project-2",
    content: "Description"
  }, {
    heading: "get-the-sample-project-2",
    content: "Path"
  }, {
    heading: "get-the-sample-project-2",
    content: "Basic functions"
  }, {
    heading: "get-the-sample-project-2",
    content: "`/example/src/renderer/examples/basic`"
  }, {
    heading: "get-the-sample-project-2",
    content: "Advanced features"
  }, {
    heading: "get-the-sample-project-2",
    content: "`/example/src/renderer/examples/advanced`"
  }, {
    heading: "get-the-sample-project-2",
    content: "Hook example"
  }, {
    heading: "get-the-sample-project-2",
    content: "`/example/src/renderer/examples/hook`"
  }, {
    heading: "configure-the-sample-project-2",
    content: "**Install dependencies**"
  }, {
    heading: "configure-the-sample-project-2",
    content: "Switch to the `/example` directory and run the following commands to integrate the SDK and install dependencies:"
  }, {
    heading: "get-the-sample-project-3",
    content: "Run the following command to clone the repository locally:"
  }, {
    heading: "get-the-sample-project-3",
    content: "This repository contains the following sample projects for Agora Web RTC SDK:"
  }, {
    heading: "get-the-sample-project-3",
    content: "Description"
  }, {
    heading: "get-the-sample-project-3",
    content: "Path"
  }, {
    heading: "get-the-sample-project-3",
    content: "Basic functions"
  }, {
    heading: "get-the-sample-project-3",
    content: "`/example/lib/examples/basic`"
  }, {
    heading: "get-the-sample-project-3",
    content: "Advanced features"
  }, {
    heading: "get-the-sample-project-3",
    content: "`/example/lib/examples/advanced`"
  }, {
    heading: "configure-the-sample-project-3",
    content: "**Install dependencies**"
  }, {
    heading: "configure-the-sample-project-3",
    content: "In the project root directory, run the following command to install the dependencies:"
  }, {
    heading: "configure-the-sample-project-3",
    content: "**Set the App ID and Token**"
  }, {
    heading: "configure-the-sample-project-3",
    content: "Open the `/example/lib/config/agora.config.dart` file, fill in the `defaultValue` for the App ID, channel name, and temporary token you obtained from Agora Console."
  }, {
    heading: "get-the-sample-project-4",
    content: "You can obtain the sample project using the following methods:"
  }, {
    heading: "get-the-sample-project-4",
    content: "Go to the SDKs page, download the latest version of the Agora RTC SDK, and unzip it."
  }, {
    heading: "get-the-sample-project-4",
    content: "Run the following command to clone the Github repository locally:"
  }, {
    heading: "get-the-sample-project-4",
    content: "This repository contains sample projects for all native platforms of Agora RTC SDK. The examples for iOS are located under `/iOS`."
  }, {
    heading: "get-the-sample-project-4",
    content: "Path"
  }, {
    heading: "get-the-sample-project-4",
    content: "Description"
  }, {
    heading: "get-the-sample-project-4",
    content: "`/iOS/APIExample`"
  }, {
    heading: "get-the-sample-project-4",
    content: "API usage examples for Agora RTC SDK."
  }, {
    heading: "get-the-sample-project-4",
    content: "`/iOS/APIExample-Audio`"
  }, {
    heading: "get-the-sample-project-4",
    content: "API usage examples for Agora Voice SDK."
  }, {
    heading: "configure-the-sample-project-4",
    content: "This page refers to the video sample project. If you want to run the audio sample project, refer to the following steps and operate in the audio folder."
  }, {
    heading: "configure-the-sample-project-4",
    content: "Open the `samples/APIExample/APIExample/Common/KeyCenter.swift` file and fill in the App ID and App certificate you obtained from the Agora Console."
  }, {
    heading: "configure-the-sample-project-4",
    content: "Open terminal and run `pod install` in the `samples/API-Example` folder to install the SDK and related dependencies. After the installation is complete, the terminal displays 'Pod installation complete!'."
  }, {
    heading: "get-the-sample-project-5",
    content: "You can obtain the sample project using the following methods:"
  }, {
    heading: "get-the-sample-project-5",
    content: "Go to the SDKs page, download the latest version of the Agora RTC SDK, and unzip it."
  }, {
    heading: "get-the-sample-project-5",
    content: "Run the following command to clone the Github repository locally:"
  }, {
    heading: "get-the-sample-project-5",
    content: "This repository contains sample projects for all native platforms of Agora RTC SDK. The API usage examples for macOS are located under `/macOS`."
  }, {
    heading: "configure-the-sample-project-5",
    content: "Set your App ID and App certificate"
  }, {
    heading: "configure-the-sample-project-5",
    content: "Open the `KeyCenter.swift` file and fill in the App ID and App certificate you obtained from the Agora Console."
  }, {
    heading: "configure-the-sample-project-5",
    content: "Open a terminal and run `pod install` in the `/macOS` directory, to install project dependencies. After the installation is complete, the terminal displays `Pod installation complete!`. A file `APIExample.xcworkspace` is generated in the project folder."
  }, {
    heading: "get-the-sample-project-6",
    content: "Run the following command to clone the GitHub repository locally:"
  }, {
    heading: "get-the-sample-project-6",
    content: "The GitHub examples repository provides the following projects:"
  }, {
    heading: "get-the-sample-project-6",
    content: "Description"
  }, {
    heading: "get-the-sample-project-6",
    content: "Path"
  }, {
    heading: "get-the-sample-project-6",
    content: "Feature demos"
  }, {
    heading: "get-the-sample-project-6",
    content: "`/Demo`"
  }, {
    heading: "get-the-sample-project-6",
    content: "Extension demos"
  }, {
    heading: "get-the-sample-project-6",
    content: "`/ExtensionDemo`"
  }, {
    heading: "get-the-sample-project-6",
    content: "Vue framework examples"
  }, {
    heading: "get-the-sample-project-6",
    content: "`/vue/api-examples`"
  }, {
    heading: "get-the-sample-project-6",
    content: "**React framework examples**"
  }, {
    heading: "get-the-sample-project-6",
    content: "`/react/api-examples`"
  }, {
    heading: "configure-the-sample-project-6",
    content: "Navigate to `/react/api-examples` and run the following command to install the dependencies."
  }, {
    heading: "get-the-sample-project-7",
    content: "Run the following command to clone the repository locally:"
  }, {
    heading: "get-the-sample-project-7",
    content: "This repository contains sample projects for Agora RTC SDK:"
  }, {
    heading: "get-the-sample-project-7",
    content: "Description"
  }, {
    heading: "get-the-sample-project-7",
    content: "Path"
  }, {
    heading: "get-the-sample-project-7",
    content: "Basic functions"
  }, {
    heading: "get-the-sample-project-7",
    content: "`/example/src/examples/basic`"
  }, {
    heading: "get-the-sample-project-7",
    content: "Advanced features"
  }, {
    heading: "get-the-sample-project-7",
    content: "`/example/src/examples/advanced`"
  }, {
    heading: "get-the-sample-project-7",
    content: "Hook example"
  }, {
    heading: "get-the-sample-project-7",
    content: "`/example/src/examples/hook`"
  }, {
    heading: "configure-the-sample-project-7",
    content: "Install dependencies"
  }, {
    heading: "configure-the-sample-project-7",
    content: "Switch to the root directory and run the following commands to integrate the SDK and install dependencies:"
  }, {
    heading: "configure-the-sample-project-7",
    content: "Set your App ID and App Token"
  }, {
    heading: "configure-the-sample-project-7",
    content: "Open the `/example/src/config/agora.config.ts` file and fill in the App ID and temporary token you obtained from the Agora Console."
  }, {
    heading: "get-the-sample-project-8",
    content: "Obtain the sample project using one of the following methods:"
  }, {
    heading: "get-the-sample-project-8",
    content: "Go to the SDKs page, download the latest version of the RTC SDK, and unzip it. You see a `.unitypackage` file."
  }, {
    heading: "get-the-sample-project-8",
    content: "Open the `.unitypackage` file. An **Import Unity Package window** pops up. Click **Import** to import the SDK into your project. After the import is complete, you see the `Agora-RTC-PLUGIN` folder in the project panel."
  }, {
    heading: "get-the-sample-project-8",
    content: "Run the following command to clone the repository locally:"
  }, {
    heading: "configure-the-sample-project-8",
    content: "In `Agora-RTC-PLUGIN/API-Example/AppIdInput.asset`, fill in the App ID, temporary token, and channel name you obtained from the Agora Console."
  }, {
    heading: "get-the-sample-project-9",
    content: "Run the following command to clone the repository locally:"
  }, {
    heading: "get-the-sample-project-9",
    content: "The C++ API usage examples are located in `/Agora-Unreal-SDK-CPP-Example`. These include:"
  }, {
    heading: "get-the-sample-project-9",
    content: "Description"
  }, {
    heading: "get-the-sample-project-9",
    content: "Path"
  }, {
    heading: "get-the-sample-project-9",
    content: "Basic API examples"
  }, {
    heading: "get-the-sample-project-9",
    content: "`/Agora-Unreal-SDK-CPP-Example/Content/API-Example/Basic`"
  }, {
    heading: "get-the-sample-project-9",
    content: "Advanced API examples"
  }, {
    heading: "get-the-sample-project-9",
    content: "`/Agora-Unreal-SDK-CPP-Example/Content/API-Example/Advance`"
  }, {
    heading: "configure-the-sample-project-9",
    content: "Refer to the following steps to integrate the SDK:"
  }, {
    heading: "configure-the-sample-project-9",
    content: "Go to SDKs to download the latest version of the RTC SDK and unzip it."
  }, {
    heading: "configure-the-sample-project-9",
    content: "In `/Agora-Unreal-SDK-CPP-Example`, create a folder named `Plugins`."
  }, {
    heading: "configure-the-sample-project-9",
    content: "Copy `AgoraPlugin` from the SDK folder to `Plugins`."
  }, {
    heading: "get-the-sample-project-10",
    content: "Obtain the sample project using one of the following methods:"
  }, {
    heading: "get-the-sample-project-10",
    content: "Go to the SDKs page, download the latest version of RTC SDK, and unzip it."
  }, {
    heading: "get-the-sample-project-10",
    content: "Run the following commands to clone the GitHub repository locally:"
  }, {
    heading: "get-the-sample-project-10",
    content: "The `API-Examples-Web` repository provides the following examples:"
  }, {
    heading: "get-the-sample-project-10",
    content: "Description"
  }, {
    heading: "get-the-sample-project-10",
    content: "Path"
  }, {
    heading: "get-the-sample-project-10",
    content: "Basic examples"
  }, {
    heading: "get-the-sample-project-10",
    content: "`/src/example/basic`"
  }, {
    heading: "get-the-sample-project-10",
    content: "Advanced examples"
  }, {
    heading: "get-the-sample-project-10",
    content: "`/src/example/advanced`"
  }, {
    heading: "get-the-sample-project-10",
    content: "Plug-in examples"
  }, {
    heading: "get-the-sample-project-10",
    content: "`/src/example/plugin`"
  }, {
    heading: "get-the-sample-project-10",
    content: "Other examples"
  }, {
    heading: "get-the-sample-project-10",
    content: "`/src/example/others`"
  }, {
    heading: "get-the-sample-project-10",
    content: "Vue framework example"
  }, {
    heading: "get-the-sample-project-10",
    content: "`/src/example/framework/vue`"
  }, {
    heading: "get-the-sample-project-10",
    content: "React framework example"
  }, {
    heading: "get-the-sample-project-10",
    content: "`/src/example/framework/react`"
  }, {
    heading: "configure-the-sample-project-10",
    content: "Install dependencies"
  }, {
    heading: "configure-the-sample-project-10",
    content: "In the project root folder, run the following command to install the dependencies:"
  }, {
    heading: "configure-the-sample-project-10",
    content: "To launch the project, run the following command in the project root folder:"
  }, {
    heading: "configure-the-sample-project-10",
    content: "After execution is complete, the terminal displays the URL to launch the demo."
  }, {
    heading: "configure-the-sample-project-10",
    content: "Set App ID and temporary Token"
  }, {
    heading: "configure-the-sample-project-10",
    content: "Open `http://localhost:3001/index.html` in your browser , fill in the App ID and App certificate you obtained from the Agora console, and then click **Set**. Both primary and secondary certificates are acceptable."
  }, {
    heading: "configure-the-sample-project-10",
    content: "If you have enabled joining with only the App ID for your project, leave the App certificate field blank."
  }, {
    heading: "get-the-sample-project-11",
    content: "Run the following command to clone the repository locally:"
  }, {
    heading: "get-the-sample-project-11",
    content: "This repository contains sample projects for all native platforms of Agora RTC SDK. The API usage examples for Windows are located under `/windows`."
  }, {
    heading: "get-the-sample-project-11",
    content: "Integrate SDK and install dependencies"
  }, {
    heading: "get-the-sample-project-11",
    content: "Run `/APIExample/installThirdParty.bat` to automatically integrate the SDK, download dependencies, and configure the environment."
  }, {
    heading: "get-the-sample-project-11",
    content: "Set App ID and Token"
  }, {
    heading: "get-the-sample-project-11",
    content: "Open the `/APIExample/APIExample/stdafx.h` file and fill in the App ID and temporary token you obtained from the Agora Console."
  }, {
    heading: "run-the-sample-project",
    content: "In the Unreal Editor, you can compile and run the sample project at the main level or any sublevel."
  }, {
    heading: "run-the-sample-project",
    content: "In the path of the Blueprint API example, double-click **AgoraBPExample.uproject** to open the project."
  }, {
    heading: "run-the-sample-project",
    content: "Double-click **MainLevel**, then click **Compile** and run the sample project. You see the following interface:"
  }, {
    heading: "run-the-sample-project",
    content: "Fill in the text box with the App ID and temporary token you obtained from the Agora Console, and the channel name you used to generate the token."
  }, {
    heading: "run-the-sample-project",
    content: "Click the button on the left to navigate from the main level to the sub-levels of the API example to experience the selected demo. Choose `BasicVideoCallScene` as an example, click **JoinChannel** to join the channel. You see yourself in the local view."
  }, {
    heading: "run-the-sample-project",
    content: "To test various audio and video interaction use-cases, connect to the Agora web demo, or install and run the sample project on a second device. Make sure you use the same App ID on both devices. When you join the same channel from two devices, you can see and hear each other."
  }, {
    heading: "run-the-sample-project",
    content: "In the path of the Blueprint API example,, double-click **AgoraBPExample.uproject** to open the project."
  }, {
    heading: "run-the-sample-project",
    content: "Choose **BasicVideoCallScene** as an example, double-click the sub-level in the Content Browser, and then click **Blueprints > Open Level Blueprint** above the editor to open the corresponding level blueprint."
  }, {
    heading: "run-the-sample-project",
    content: "Fill in the App ID, temporary token, and channel name of your project."
  }, {
    heading: "run-the-sample-project",
    content: "Click **Compile** and run the sample project at the sublevel. You see the following interface:"
  }, {
    heading: "run-the-sample-project",
    content: "Click **JoinChannel** to join the channel. You see yourself in the local view."
  }, {
    heading: "run-the-sample-project",
    content: "To test various audio and video interaction use-cases, connect to the Agora web demo, or install and run the sample project on a second device. Make sure you use the same App ID on both devices. When you join the same channel from two devices, you can see and hear each other."
  }, {
    heading: "run-the-sample-project",
    content: "Open the `/API-Examples/Android/APIExample` folder in Android Studio."
  }, {
    heading: "run-the-sample-project",
    content: "Turn on developer options on your Android device, enable USB debugging, and connect the device to the development machine through a USB cable. Your Android device appears in the Android device options."
  }, {
    heading: "run-the-sample-project",
    content: "In Android Studio, click **Sync Project with Gradle Files** for Gradle synchronization."
  }, {
    heading: "run-the-sample-project",
    content: "After synchronization is complete, click &#x2A;*Run 'app'** to start compilation."
  }, {
    heading: "run-the-sample-project",
    content: "The app is installed as **Agora API Example** on your device."
  }, {
    heading: "run-the-sample-project",
    content: "Open the app and choose the example you want to run. For example, to test **Live Interactive Video Streaming**, select the option from the menu, enter the channel name, and click **Join**."
  }, {
    heading: "run-the-sample-project",
    content: "To test various audio and video interaction use-cases, connect to the Agora web demo, or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other."
  }, {
    heading: "run-the-sample-project",
    content: "To run the sample project, execute the following command in the `/example` directory:"
  }, {
    heading: "run-the-sample-project",
    content: "After the operation is complete, you see the following application on your screen:"
  }, {
    heading: "run-the-sample-project",
    content: "On the **Settings** page, fill in the App Id and temporary token you obtained from the Console. Fill in the same channel name you used when generating the temporary token. Click **Save** to save your settings."
  }, {
    heading: "run-the-sample-project",
    content: "Select a demo you want to experience from the menu on the left. Choose **JoinChannelVideo**, under **Basic**, as an example and click **join channel**."
  }, {
    heading: "run-the-sample-project",
    content: "To test various audio and video interaction use-cases, connect to the Agora web demo, or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other."
  }, {
    heading: "run-the-sample-project",
    content: "Connect the target device to your computer."
  }, {
    heading: "run-the-sample-project",
    content: "Open terminal and navigate to the `/examples` directory."
  }, {
    heading: "run-the-sample-project",
    content: "Execute the following command to launch the sample project on available devices:"
  }, {
    heading: "run-the-sample-project",
    content: "After compilation is complete, you see the following application on your device:"
  }, {
    heading: "run-the-sample-project",
    content: "Select a demo you want to experience from the menu. Choose **JoinChannelVideo** under **Basic** as an example. Enter the channel name you specified when generating the temporary token in **Channel ID**, and click **Join channel**."
  }, {
    heading: "run-the-sample-project",
    content: "To test various audio and video interaction use-cases, connect to the Agora web demo, or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other."
  }, {
    heading: "run-the-sample-project",
    content: "Connect an iOS device to your development machine, open **Device > Privacy & Security > Security** on the device, and turn on the developer mode."
  }, {
    heading: "run-the-sample-project",
    content: "Check your iOS device in the **iOS Device** options at the top of the Xcode interface."
  }, {
    heading: "run-the-sample-project",
    content: "Check **Automatically manage signing** in **Signing & Capabilities** under **TARGETS**, then configure your Apple developer account and **Bundle Identifier** under each target."
  }, {
    heading: "run-the-sample-project",
    content: "Click **Start compiling**."
  }, {
    heading: "run-the-sample-project",
    content: "After successful compilation, you see the app icon on your device."
  }, {
    heading: "run-the-sample-project",
    content: "If an untrusted developer prompt pops up on the device, first tap **Cancel** to close the prompt, then open **Settings > General > VPN and Device Management** on the iOS device, and choose to trust the developer."
  }, {
    heading: "run-the-sample-project",
    content: "Open the **API Example App**, select an example you want to try, then enter the channel name. For example, *test*, and tap **Join Channel**."
  }, {
    heading: "run-the-sample-project",
    content: "To test various audio and video interaction use-cases, connect to the Agora web demo, or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other."
  }, {
    heading: "run-the-sample-project",
    content: "Open the file `APIExample.xcworkspace` in Xcode. Check **Automatically manage signing** in **Signing & Capabilities** under **TARGETS**, and then configure your Apple developer account and **Bundle Identifier** under each target."
  }, {
    heading: "run-the-sample-project",
    content: "Click **Start compiling**."
  }, {
    heading: "run-the-sample-project",
    content: "After successful compilation, the sample project window pops up."
  }, {
    heading: "run-the-sample-project",
    content: "Select an example you want to try, then enter a channel name, such as *test*, and click the **Join Channel**."
  }, {
    heading: "run-the-sample-project",
    content: "To test various audio and video interaction use-cases, connect to the Agora web demo, or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other."
  }, {
    heading: "run-the-sample-project",
    content: "Use the following command to run the sample project."
  }, {
    heading: "run-the-sample-project",
    content: "On the demo page, enter your App ID, token, and channel name and join the channel."
  }, {
    heading: "run-the-sample-project",
    content: "The channel name must be the same as the channel ID you used to generate the token."
  }, {
    heading: "run-the-sample-project",
    content: "Execute the following command in the project root directory to run the sample project."
  }, {
    heading: "run-the-sample-project",
    content: "Target platform Android"
  }, {
    heading: "run-the-sample-project",
    content: "Target platform iOS"
  }, {
    heading: "run-the-sample-project",
    content: "After the operation is complete, the following application appears on your device:"
  }, {
    heading: "run-the-sample-project",
    content: "Showing Android as an example"
  }, {
    heading: "run-the-sample-project",
    content: "Select the demo you want to experience from the menu. Choose **JoinChannelVideo** under **Basic** as an example, and click **join channel**."
  }, {
    heading: "run-the-sample-project",
    content: "To test various audio and video interaction use-cases, connect to the Agora web demo, or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other."
  }, {
    heading: "run-the-sample-project",
    content: "The `API-Example` folder contains two folders, `Basic` and `Advanced`, that contain usage examples of basic and advanced use-cases of Agora SDK. Select the demo you want to run and click **Play** to compile."
  }, {
    heading: "run-the-sample-project",
    content: "Choose video calls as an example. After successful compilation, you see your local video preview."
  }, {
    heading: "run-the-sample-project",
    content: "To test various audio and video interaction use-cases, connect to the Agora web demo, or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other."
  }, {
    heading: "run-the-sample-project",
    content: "In the Unreal Editor, you can compile and run the sample project at the main level or any sublevel."
  }, {
    heading: "run-the-sample-project",
    content: "In the C++ API example folder, double-click `AgoraExample.uproject` to open the project."
  }, {
    heading: "run-the-sample-project",
    content: "Double-click **MainLevel**, then click **Compile** and **Run** the sample project. On Windows, you see the following interface:"
  }, {
    heading: "run-the-sample-project",
    content: "Fill in the text box with the App ID and temporary token you obtained from the Agora Console, and the channel name you used to generate the token."
  }, {
    heading: "run-the-sample-project",
    content: "Click the button on the left to navigate from the main level to the sub-levels of the API example to experience the selected demo. Choose **BasicVideoCallScene** as an example, click **JoinChannel** to join the channel. You see yourself in the local view."
  }, {
    heading: "run-the-sample-project",
    content: "To test various audio and video interaction use-cases, connect to the Agora web demo, or install and run the sample project on a second device. Make sure you use the same App ID on both devices. When you join the same channel from two devices, you can see and hear each other."
  }, {
    heading: "run-the-sample-project",
    content: "In the C++ API example folder, double-click `AgoraExample.uproject` to open the project."
  }, {
    heading: "run-the-sample-project",
    content: "Choose **BasicVideoCallScene** as an example, double-click the sub-level in the Content Browser, and then click the  **BP\\_AgoraActor** blueprint in the **World Outliner panel**. Fill in the App ID, temporary token, and channel name of your project in the **Details panel**."
  }, {
    heading: "run-the-sample-project",
    content: "Click **Compile** and run the sample project at the sublevel. You see the following interface:"
  }, {
    heading: "run-the-sample-project",
    content: "Click **JoinChannel** to join the channel. You see yourself in the local view."
  }, {
    heading: "run-the-sample-project",
    content: "To test various audio and video interaction use-cases, connect to the Agora web demo, or install and run the sample project on a second device. Make sure you use the same App ID on both devices. When you join the same channel from two devices, you can see and hear each other."
  }, {
    heading: "run-the-sample-project",
    content: "From the menu, choose the feature or use-case you want to experience."
  }, {
    heading: "run-the-sample-project",
    content: "As an example, try the screen sharing demo, click **Join as host** to join a channel as the host. Ask a friend to run the sample project on another device and **Join as audience**, using the same app ID, app certificate, and channel name. Now you can share the screen with your friend."
  }, {
    heading: "run-the-sample-project",
    content: "Open the file `/APIExample/APIExample.sln` in Visual Studio."
  }, {
    heading: "run-the-sample-project",
    content: "Click **Start compiling**."
  }, {
    heading: "run-the-sample-project",
    content: "After compilation is complete, you see the following window on your device:"
  }, {
    heading: "run-the-sample-project",
    content: "Choose any demo you want to experience. Taking the **Live Broadcasting** as an example, enter the channel name you used when generating the temporary token in **Channel Name**, then click **Join Channel**."
  }, {
    heading: "run-the-sample-project",
    content: "To test various audio and video interaction use-cases, use the Agora web demo, or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "project-setup",
    content: "Project setup"
  }, {
    id: "get-the-sample-project",
    content: "Get the sample project"
  }, {
    id: "configure-the-sample-project",
    content: "Configure the sample project"
  }, {
    id: "get-the-sample-project-1",
    content: "Get the sample project"
  }, {
    id: "configure-the-sample-project-1",
    content: "Configure the sample project"
  }, {
    id: "get-the-sample-project-2",
    content: "Get the sample project"
  }, {
    id: "configure-the-sample-project-2",
    content: "Configure the sample project"
  }, {
    id: "get-the-sample-project-3",
    content: "Get the sample project"
  }, {
    id: "configure-the-sample-project-3",
    content: "Configure the sample project"
  }, {
    id: "get-the-sample-project-4",
    content: "Get the sample project"
  }, {
    id: "configure-the-sample-project-4",
    content: "Configure the sample project"
  }, {
    id: "get-the-sample-project-5",
    content: "Get the sample project"
  }, {
    id: "configure-the-sample-project-5",
    content: "Configure the sample project"
  }, {
    id: "get-the-sample-project-6",
    content: "Get the sample project"
  }, {
    id: "configure-the-sample-project-6",
    content: "Configure the sample project"
  }, {
    id: "get-the-sample-project-7",
    content: "Get the sample project"
  }, {
    id: "configure-the-sample-project-7",
    content: "Configure the sample project"
  }, {
    id: "get-the-sample-project-8",
    content: "Get the sample project"
  }, {
    id: "configure-the-sample-project-8",
    content: "Configure the sample project"
  }, {
    id: "get-the-sample-project-9",
    content: "Get the sample project"
  }, {
    id: "configure-the-sample-project-9",
    content: "Configure the sample project"
  }, {
    id: "get-the-sample-project-10",
    content: "Get the sample project"
  }, {
    id: "configure-the-sample-project-10",
    content: "Configure the sample project"
  }, {
    id: "get-the-sample-project-11",
    content: "Get the sample project"
  }, {
    id: "run-the-sample-project",
    content: "Run the sample project"
  }]
};
export let toc = [{
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
  depth: 3,
  url: "#get-the-sample-project",
  title: _jsx(_Fragment, {
    children: "Get the sample project"
  })
}, {
  depth: 3,
  url: "#configure-the-sample-project",
  title: _jsx(_Fragment, {
    children: "Configure the sample project"
  })
}, {
  depth: 3,
  url: "#get-the-sample-project-1",
  title: _jsx(_Fragment, {
    children: "Get the sample project"
  })
}, {
  depth: 3,
  url: "#configure-the-sample-project-1",
  title: _jsx(_Fragment, {
    children: "Configure the sample project"
  })
}, {
  depth: 3,
  url: "#get-the-sample-project-2",
  title: _jsx(_Fragment, {
    children: "Get the sample project"
  })
}, {
  depth: 3,
  url: "#configure-the-sample-project-2",
  title: _jsx(_Fragment, {
    children: "Configure the sample project"
  })
}, {
  depth: 3,
  url: "#get-the-sample-project-3",
  title: _jsx(_Fragment, {
    children: "Get the sample project"
  })
}, {
  depth: 3,
  url: "#configure-the-sample-project-3",
  title: _jsx(_Fragment, {
    children: "Configure the sample project"
  })
}, {
  depth: 3,
  url: "#get-the-sample-project-4",
  title: _jsx(_Fragment, {
    children: "Get the sample project"
  })
}, {
  depth: 3,
  url: "#configure-the-sample-project-4",
  title: _jsx(_Fragment, {
    children: "Configure the sample project"
  })
}, {
  depth: 3,
  url: "#get-the-sample-project-5",
  title: _jsx(_Fragment, {
    children: "Get the sample project"
  })
}, {
  depth: 3,
  url: "#configure-the-sample-project-5",
  title: _jsx(_Fragment, {
    children: "Configure the sample project"
  })
}, {
  depth: 3,
  url: "#get-the-sample-project-6",
  title: _jsx(_Fragment, {
    children: "Get the sample project"
  })
}, {
  depth: 3,
  url: "#configure-the-sample-project-6",
  title: _jsx(_Fragment, {
    children: "Configure the sample project"
  })
}, {
  depth: 3,
  url: "#get-the-sample-project-7",
  title: _jsx(_Fragment, {
    children: "Get the sample project"
  })
}, {
  depth: 3,
  url: "#configure-the-sample-project-7",
  title: _jsx(_Fragment, {
    children: "Configure the sample project"
  })
}, {
  depth: 3,
  url: "#get-the-sample-project-8",
  title: _jsx(_Fragment, {
    children: "Get the sample project"
  })
}, {
  depth: 3,
  url: "#configure-the-sample-project-8",
  title: _jsx(_Fragment, {
    children: "Configure the sample project"
  })
}, {
  depth: 3,
  url: "#get-the-sample-project-9",
  title: _jsx(_Fragment, {
    children: "Get the sample project"
  })
}, {
  depth: 3,
  url: "#configure-the-sample-project-9",
  title: _jsx(_Fragment, {
    children: "Configure the sample project"
  })
}, {
  depth: 3,
  url: "#get-the-sample-project-10",
  title: _jsx(_Fragment, {
    children: "Get the sample project"
  })
}, {
  depth: 3,
  url: "#configure-the-sample-project-10",
  title: _jsx(_Fragment, {
    children: "Configure the sample project"
  })
}, {
  depth: 3,
  url: "#get-the-sample-project-11",
  title: _jsx(_Fragment, {
    children: "Get the sample project"
  })
}, {
  depth: 2,
  url: "#run-the-sample-project",
  title: _jsx(_Fragment, {
    children: "Run the sample project"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
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
  }, { CalloutContainer, CalloutDescription, CalloutTitle, CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
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
    children: [_jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","ios","macos","windows","web","javascript","electron","flutter","react-native","unity","unreal","blueprint"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsxs(_components.p, {
          children: ["Agora provides ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/tree/main",
            children: "Open-source sample projects on GitHub"
          }), " to demonstrate the implementation of basic and advanced RTC SDK features."]
        }), _jsx(_components.p, {
          children: "This page shows how to compile, configure, and run the RTC SDK Android sample project."
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "ios",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "ios"
        }), _jsxs(_components.p, {
          children: ["Agora provides ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/tree/main",
            children: "Open-source sample projects on GitHub"
          }), " to demonstrate the implementation of basic and advanced RTC SDK features."]
        }), _jsx(_components.p, {
          children: "This page shows how to compile, configure, and run the RTC SDK iOS sample project."
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "macos",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "macos"
        }), _jsxs(_components.p, {
          children: ["Agora provides ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/tree/main",
            children: "Open-source sample projects on GitHub"
          }), " to demonstrate the implementation of basic and advanced RTC SDK features."]
        }), _jsx(_components.p, {
          children: "This page shows how to compile, configure, and run the RTC SDK macOS sample project."
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "windows",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "windows"
        }), _jsxs(_components.p, {
          children: ["Agora provides ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/tree/main",
            children: "Open-source sample projects on GitHub"
          }), " to demonstrate the implementation of basic and advanced RTC SDK features."]
        }), _jsx(_components.p, {
          children: "This page shows how to compile, configure, and run the RTC SDK Windows sample project."
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "web",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "web"
        }), _jsxs(_components.p, {
          children: ["Agora provides ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples-Web",
            children: "Open-source sample projects on GitHub"
          }), " to demonstrate the implementation of basic and advanced RTC SDK features."]
        }), _jsx(_components.p, {
          children: "This page shows how to compile, configure, and run the RTC SDK Web sample project."
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "javascript",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "javascript"
        }), _jsxs(_components.p, {
          children: ["Agora provides ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples-Web",
            children: "Open-source sample projects on GitHub"
          }), " to demonstrate the implementation of basic and advanced RTC SDK features."]
        }), _jsx(_components.p, {
          children: "This page shows how to compile, configure, and run the RTC SDK JavaScript sample project."
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "electron",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "electron"
        }), _jsxs(_components.p, {
          children: ["Agora provides ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/Electron-SDK",
            children: "Open-source sample projects on GitHub"
          }), " to demonstrate the implementation of basic and advanced RTC SDK features."]
        }), _jsx(_components.p, {
          children: "This page shows how to compile, configure, and run the RTC SDK Electron sample project."
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "flutter",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "flutter"
        }), _jsxs(_components.p, {
          children: ["Agora provides ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/Agora-Flutter-SDK",
            children: "Open-source sample projects on GitHub"
          }), " to demonstrate the implementation of basic and advanced RTC SDK features."]
        }), _jsx(_components.p, {
          children: "This page shows how to compile, configure, and run the RTC SDK Flutter sample project."
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "react-native",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "react-native"
        }), _jsxs(_components.p, {
          children: ["Agora provides ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/react-native-agora/tree/main/example",
            children: "Open-source sample projects on GitHub"
          }), " to demonstrate the implementation of basic and advanced RTC SDK features."]
        }), _jsx(_components.p, {
          children: "This page shows how to compile, configure, and run the RTC SDK React Native sample project."
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "unity",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "unity"
        }), _jsxs(_components.p, {
          children: ["Agora provides ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/Agora-Unity-Quickstart/tree/main/API-Example-Unity",
            children: "Open-source sample projects on GitHub"
          }), " to demonstrate the implementation of basic and advanced RTC SDK features."]
        }), _jsx(_components.p, {
          children: "This page shows how to compile, configure, and run the RTC SDK Unity sample project."
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "unreal",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "unreal"
        }), _jsxs(_components.p, {
          children: ["Agora provides ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-CPP-Example",
            children: "Open-source sample projects on GitHub"
          }), " to demonstrate the implementation of basic and advanced RTC SDK features."]
        }), _jsx(_components.p, {
          children: "This page shows how to compile, configure, and run the RTC SDK Unreal Engine sample project."
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "blueprint",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "blueprint"
        }), _jsxs(_components.p, {
          children: ["Agora provides ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-Blueprint-Example",
            children: "Open-source sample projects on GitHub"
          }), " to demonstrate the implementation of basic and advanced RTC SDK features."]
        }), _jsx(_components.p, {
          children: "This page shows how to compile, configure, and run the RTC SDK Unreal (Blueprint) sample project."
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["windows","android","ios","macos","web","react-native","javascript","electron","flutter","unity","unreal","blueprint"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "windows",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "windows"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "A device running Windows 7 or higher."
          }), `
`, _jsxs(_components.li, {
            children: ["Microsoft Visual Studio 2017 or higher with ", _jsx(_components.a, {
              href: "https://devblogs.microsoft.com/cppblog/windows-desktop-development-with-c-in-visual-studio/",
              children: "C++ desktop development"
            }), " support. C++ 11 or above."]
          }), `
`, _jsxs(_components.li, {
            children: ["If you use C# for development, you also need the ", _jsx(_components.a, {
              href: "https://learn.microsoft.com/en-us/dotnet/framework/install/guide-for-developers",
              children: ".NET framework"
            }), "."]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "https://developer.android.com/studio",
              children: "Android Studio"
            }), " 4.2 or higher."]
          }), `
`, _jsx(_components.li, {
            children: "Android SDK API Level 21 or higher."
          }), `
`, _jsx(_components.li, {
            children: "Two mobile devices running Android 5.0 or higher."
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
`, _jsx(_components.li, {
            children: "Xcode 13.0 or higher."
          }), `
`, _jsx(_components.li, {
            children: "An Apple developer account."
          }), `
`, _jsxs(_components.li, {
            children: ["If you need to use CocoaPods integrated SDK, make sure ", _jsx(_components.a, {
              href: "https://guides.cocoapods.org/using/getting-started.html#getting-started",
              children: "CocoaPods is installed"
            }), "."]
          }), `
`, _jsx(_components.li, {
            children: "Two devices running iOS 14.0 or higher."
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
`, _jsx(_components.li, {
            children: "Xcode 13.0 or higher."
          }), `
`, _jsx(_components.li, {
            children: "An Apple developer account."
          }), `
`, _jsxs(_components.li, {
            children: ["If you need to use CocoaPods integrated SDK, make sure ", _jsx(_components.a, {
              href: "https://guides.cocoapods.org/using/getting-started.html#getting-started",
              children: "CocoaPods is installed"
            }), "."]
          }), `
`, _jsx(_components.li, {
            children: "Two devices running macOS 10.10 or higher."
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
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["A ", _jsx(_components.a, {
              href: "../../reference/supported-platforms#desktop-browsers",
              children: "supported browser"
            }), `.
Agora strongly recommends using the latest stable version of Google Chrome.`]
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",
              children: "Node.js and npm"
            })
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
              children: ["React Native 0.60 or later. For more information, see ", _jsx(_components.a, {
                href: "https://reactnative.dev/docs/environment-setup",
                children: "Get Started with React Native"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Node 16 or later"
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "The following, depending on your target platform:"
            }), `
`, _jsxs(CodeBlockTabs, {
              defaultValue: "tab1",
              children: [_jsxs(CodeBlockTabsList, {
                children: [_jsx(CodeBlockTabsTrigger, {
                  value: "tab1",
                  children: "Android"
                }), _jsx(CodeBlockTabsTrigger, {
                  value: "tab2",
                  children: "iOS"
                })]
              }), _jsx(CodeBlockTab, {
                value: "tab1",
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["A machine running macOS, Windows, or Linux", `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "https://openjdk.org/projects/jdk/11/",
                          children: "Java Development Kit (JDK) 11"
                        }), " or later"]
                      }), `
`, _jsx(_components.li, {
                        children: "Latest version of Android Studio"
                      }), `
`, _jsx(_components.li, {
                        children: "A physical or virtual mobile device running Android 5.0 or later"
                      }), `
`]
                    }), `
`]
                  }), `
`]
                })
              }), _jsx(CodeBlockTab, {
                value: "tab2",
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["A machine running macOS", `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsx(_components.li, {
                        children: "Xcode 10 or later"
                      }), `
`, _jsxs(_components.li, {
                        children: ["CocoaPods", `
`, _jsxs(_components.ul, {
                          children: [`
`, _jsx(_components.li, {
                            children: `A physical or virtual mobile device running iOS 9.0 or later.
If you use React Native 0.63 or later, ensure your iOS version is 10.0 or later.`
                          }), `
`]
                        }), `
`]
                      }), `
`]
                    }), `
`]
                  }), `
`]
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
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["A ", _jsx(_components.a, {
              href: "../../reference/supported-platforms#desktop-browsers",
              children: "supported browser"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["A JavaScript package manager such as ", _jsx(_components.a, {
              href: "https://www.npmjs.com/package/npm",
              children: "npm"
            }), "."]
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
            children: [_jsx(_components.a, {
              href: "https://nodejs.org/en/download/",
              children: "Node.js"
            }), " 14 or higher."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "https://yarnpkg.com/getting-started",
              children: "Yarn"
            }), "."]
          }), `
`, _jsx(_components.li, {
            children: "Python 3.11.x."
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
              }), " 2.10.5 or higher with Dart 2.14.0 or higher."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.a, {
                href: "https://developer.android.com/studio",
                children: "Android Studio"
              }), ", IntelliJ, VS Code, or any other IDE that supports Flutter. See ", _jsx(_components.a, {
                href: "https://docs.flutter.dev/get-started/editor",
                children: "Set up an editor"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Prepare your development and testing environment according to your ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/reference/supported-platforms",
                children: "target platform"
              }), "."]
            }), `
`, _jsxs(_components.p, {
              children: ["Run the ", _jsx(_components.code, {
                children: "flutter doctor"
              }), " command to confirm that your development environment is set up correctly for Flutter development."]
            }), `
`]
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
              children: [_jsx(_components.a, {
                href: "https://unity.com/download",
                children: "Unity Hub"
              }), " and ", _jsx(_components.a, {
                href: "https://unity.com/releases/editor/archive",
                children: "Unity Editor"
              }), " 2018.4.0 or higher"]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "A suitable operating system and compiler for your development platform:"
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Development platform"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Operating system version"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Compiler version"
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
                    children: "Android 4.1 or later"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Android Studio 4.1 or later"
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
                    children: "iOS 10.15 or later"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Xcode 9.0 or later"
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
                    children: "macOS 10.15 or later"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Xcode 9.0 or later"
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
                    children: "Windows 7 or later"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Microsoft Visual Studio 2017 or later"
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
        platform: "unreal",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "unreal"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Unreal Engine 4.27 or higher"
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Prepare your development environment according to your target platform and engine version:"
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Dev environment requirements"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Other requirements"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsx(_components.a, {
                      href: "https://docs.unrealengine.com/4.27/us-EN/SharingAndReleasing/Mobile/Android/AndroidSDKRequirements/",
                      children: "Android"
                    })
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "-"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsx(_components.a, {
                      href: "https://docs.unrealengine.com/4.27/us-EN/SharingAndReleasing/Mobile/iOS/SDKRequirements/",
                      children: "iOS"
                    })
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
                    children: _jsx(_components.a, {
                      href: "https://docs.unrealengine.com/4.27/us-EN/Basics/InstallingUnrealEngine/RecommendedSpecifications/",
                      children: "macOS"
                    })
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
                    children: _jsx(_components.a, {
                      href: "https://docs.unrealengine.com/4.27/us-EN/Basics/InstallingUnrealEngine/RecommendedSpecifications/",
                      children: "Windows"
                    })
                  }), _jsxs(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: ["32-bit Windows only supports Unreal Engine 4 and below. To use Unreal Engine with 32-bit Windows, uncomment the code relating to ", _jsx(_components.code, {
                      children: "Win32"
                    }), " in the ", _jsx(_components.code, {
                      children: "AgoraPluginLibrary.Build.cs"
                    }), " file."]
                  })]
                })]
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Two physical devices for testing"
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "blueprint",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "blueprint"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Unreal Engine 4.27 or higher"
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Prepare your development environment according to your target platform and engine version:"
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Dev environment requirements"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Other requirements"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsx(_components.a, {
                      href: "https://docs.unrealengine.com/4.27/us-EN/SharingAndReleasing/Mobile/Android/AndroidSDKRequirements/",
                      children: "Android"
                    })
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "-"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsx(_components.a, {
                      href: "https://docs.unrealengine.com/4.27/us-EN/SharingAndReleasing/Mobile/iOS/SDKRequirements/",
                      children: "iOS"
                    })
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
                    children: _jsx(_components.a, {
                      href: "https://docs.unrealengine.com/4.27/us-EN/Basics/InstallingUnrealEngine/RecommendedSpecifications/",
                      children: "macOS"
                    })
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
                    children: _jsx(_components.a, {
                      href: "https://docs.unrealengine.com/4.27/us-EN/Basics/InstallingUnrealEngine/RecommendedSpecifications/",
                      children: "Windows"
                    })
                  }), _jsxs(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: ["32-bit Windows only supports Unreal Engine 4 and below. To use Unreal Engine with 32-bit Windows, uncomment the code relating to ", _jsx(_components.code, {
                      children: "Win32"
                    }), " in the ", _jsx(_components.code, {
                      children: "AgoraPluginLibrary.Build.cs"
                    }), " file."]
                  })]
                })]
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Two physical devices for testing"
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })]
    }), `
`, `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "A camera and a microphone"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["A valid Agora account and project. Please refer to ", _jsx(_components.a, {
            href: "/en/introduction/account",
            children: "Agora account management"
          }), " for details."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Installed ", _jsx(_components.a, {
            href: "https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",
            children: "Git"
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "project-setup",
      children: "Project setup"
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["blueprint","android","electron","flutter","ios","macos","javascript","react-native","unity","unreal","web","windows"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "blueprint",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "blueprint"
        }), _jsx(_components.h3, {
          id: "get-the-sample-project",
          children: "Get the sample project"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Run the following command to clone the repository locally:"
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
                      children: " git@github.com:AgoraIO-Extensions/Agora-Unreal-RTC-SDK.git"
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
              children: ["The Blueprint usage examples are located in ", _jsx(_components.code, {
                children: "/Agora-Unreal-SDK-Blueprint-Example"
              }), ". These include:"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Description"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Path"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Basic API examples"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsx(_components.code, {
                      children: "/Agora-Unreal-SDK-Blueprint-Example/Content/API-Example/Basic"
                    })
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Advanced API examples"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsx(_components.code, {
                      children: "/Agora-Unreal-SDK-Blueprint-Example/Content/API-Example/Advance"
                    })
                  })]
                })]
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "configure-the-sample-project",
          children: "Configure the sample project"
        }), _jsx(_components.p, {
          children: "Refer to the following steps to integrate the SDK:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Go to ", _jsx(_components.a, {
              href: "/sdks",
              children: "SDKs"
            }), " to download the latest version of the RTC SDK and unzip it."]
          }), `
`, _jsxs(_components.li, {
            children: ["In ", _jsx(_components.code, {
              children: "/Agora-Unreal-SDK-Blueprint-Example"
            }), ", create a folder named ", _jsx(_components.code, {
              children: "Plugins"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["Copy ", _jsx(_components.code, {
              children: "AgoraPlugin"
            }), " from the SDK folder to ", _jsx(_components.code, {
              children: "Plugins"
            }), "."]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsx(_components.h3, {
          id: "get-the-sample-project-1",
          children: "Get the sample project"
        }), _jsx(_components.p, {
          children: "Run the following command to clone the repository locally:"
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
                  children: " git@github.com:AgoraIO/API-Examples.git"
                })]
              })
            })
          })
        }), _jsxs(_components.p, {
          children: ["This repository contains sample projects for all native platforms of Agora RTC SDK. The API usage examples for Android are located under ", _jsx(_components.code, {
            children: "/Android"
          }), "."]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Path"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "/Android/APIExample"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "API usage examples of Agora RTC SDK."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "/Android/APIExample-Audio"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "API usage examples of Agora Voice SDK."
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "configure-the-sample-project-1",
          children: "Configure the sample project"
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "information"
          }), _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "This page refers to the video sample project. If you want to run the audio sample project, please refer to the following steps and operate in the audio folder."
            })
          })]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Integrate the SDK and install dependencies"
            }), `
`, _jsxs(_components.p, {
              children: ["The ", _jsx(_components.code, {
                children: "/APIExample/app/build.gradle"
              }), " file contains the project dependencies. When you open the project in Android Studio, it automatically downloads the dependencies and integrates the SDK."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Set App ID and app certificate"
            }), `
`, _jsxs(_components.p, {
              children: ["Open the ", _jsx(_components.code, {
                children: "/APIExample/app/src/main/res/values/string-config.xml"
              }), " file and fill in the App ID and app certificate you obtained from the Agora Console."]
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
                      children: "<?"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#22863A",
                        "--shiki-dark": "#85E89D"
                      },
                      children: "xml"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " version"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"1.0"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " encoding"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"utf-8"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "?>"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "<"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#22863A",
                        "--shiki-dark": "#85E89D"
                      },
                      children: "resources"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ">"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    <!--"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    Agora App ID"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    -->"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    <"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#22863A",
                        "--shiki-dark": "#85E89D"
                      },
                      children: "string"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " name"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"agora_app_id"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " translatable"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"false"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ">Your App ID</"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#22863A",
                        "--shiki-dark": "#85E89D"
                      },
                      children: "string"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ">"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    <!--"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    Agora app certificate"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    Note: Leave this field empty if the project allows joining by App ID only."
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    -->"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    <"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#22863A",
                        "--shiki-dark": "#85E89D"
                      },
                      children: "string"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " name"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"agora_app_certificate"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " translatable"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"false"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ">Your app certificate</"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#22863A",
                        "--shiki-dark": "#85E89D"
                      },
                      children: "string"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ">"
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
                      children: "</"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#22863A",
                        "--shiki-dark": "#85E89D"
                      },
                      children: "resources"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ">"
                    })]
                  })]
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
        platform: "electron",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "electron"
        }), _jsx(_components.h3, {
          id: "get-the-sample-project-2",
          children: "Get the sample project"
        }), _jsx(_components.p, {
          children: "Run the following command to clone the repository locally:"
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
                  children: " git@github.com:AgoraIO-Extensions/Electron-SDK.git"
                })]
              })
            })
          })
        }), _jsx(_components.p, {
          children: "This repository contains sample projects for Agora Web RTC SDK:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Description"
              }), _jsx(_components.th, {
                children: "Path"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Basic functions"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "/example/src/renderer/examples/basic"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Advanced features"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "/example/src/renderer/examples/advanced"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsxs(_components.td, {
                children: [_jsx(_components.a, {
                  href: "https://react.dev/reference/react",
                  children: "Hook"
                }), " example"]
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "/example/src/renderer/examples/hook"
                })
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "configure-the-sample-project-2",
          children: "Configure the sample project"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Install dependencies"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Switch to the ", _jsx(_components.code, {
                children: "/example"
              }), " directory and run the following commands to integrate the SDK and install dependencies:"]
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
                  children: _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "yarn"
                    })
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
        platform: "flutter",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "flutter"
        }), _jsx(_components.h3, {
          id: "get-the-sample-project-3",
          children: "Get the sample project"
        }), _jsx(_components.p, {
          children: "Run the following command to clone the repository locally:"
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
                  children: " git@github.com:AgoraIO-Extensions/Agora-Flutter-SDK.git"
                })]
              })
            })
          })
        }), _jsx(_components.p, {
          children: "This repository contains the following sample projects for Agora Web RTC SDK:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Path"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Basic functions"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "/example/lib/examples/basic"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Advanced features"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "/example/lib/examples/advanced"
                })
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "configure-the-sample-project-3",
          children: "Configure the sample project"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Install dependencies"
              })
            }), `
`, _jsx(_components.p, {
              children: "In the project root directory, run the following command to install the dependencies:"
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
                      children: "flutter"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " pub"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " get"
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
                children: "Set the App ID and Token"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Open the ", _jsx(_components.code, {
                children: "/example/lib/config/agora.config.dart"
              }), " file, fill in the ", _jsx(_components.code, {
                children: "defaultValue"
              }), " for the App ID, channel name, and temporary token you obtained from Agora Console."]
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
                      children: "String"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " get"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " appId {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  return"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " '<TEST_APP_ID>'"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
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
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "String"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " get"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " token {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  return"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " '<TEST_TOKEN>'"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
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
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "String"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " get"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " channelId {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  return"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " '<TEST_CHANNEL_ID>'"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
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
                  })]
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
          canonicalPlatform: "web",
          platform: "ios"
        }), _jsx(_components.h3, {
          id: "get-the-sample-project-4",
          children: "Get the sample project"
        }), _jsx(_components.p, {
          children: "You can obtain the sample project using the following methods:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Go to the ", _jsx(_components.a, {
                href: "/sdks",
                children: "SDKs"
              }), " page, download the latest version of the Agora RTC SDK, and unzip it."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Run the following command to clone the Github repository locally:"
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
                      children: " git@github.com:AgoraIO/API-Examples.git"
                    })]
                  })
                })
              })
            }), `
`, _jsxs(_components.p, {
              children: ["This repository contains sample projects for all native platforms of Agora RTC SDK. The examples for iOS are located under ", _jsx(_components.code, {
                children: "/iOS"
              }), "."]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    children: "Path"
                  }), _jsx(_components.th, {
                    children: "Description"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: "/iOS/APIExample"
                    })
                  }), _jsx(_components.td, {
                    children: "API usage examples for Agora RTC SDK."
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: "/iOS/APIExample-Audio"
                    })
                  }), _jsx(_components.td, {
                    children: "API usage examples for Agora Voice SDK."
                  })]
                })]
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "configure-the-sample-project-4",
          children: "Configure the sample project"
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "information"
          }), _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "This page refers to the video sample project. If you want to run the audio sample project, refer to the following steps and operate in the audio folder."
            })
          })]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Open the ", _jsx(_components.code, {
                children: "samples/APIExample/APIExample/Common/KeyCenter.swift"
              }), " file and fill in the App ID and App certificate you obtained from the Agora Console."]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "class"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " KeyCenter"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "NSObject "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "{"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    // Replace <#Your App ID#> with your App ID"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    static"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " let"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " AppId: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
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
                      children: ' "<#Your App ID#>"'
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    // Replace #Your certificate# with your App certificate. Leave this field blank if the project allows joining with the App ID only."
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    static"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " let"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " Certificate: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "String"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "?"
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
                      children: ' "<#Your certificate#>"'
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
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Open terminal and run ", _jsx(_components.code, {
                children: "pod install"
              }), " in the ", _jsx(_components.code, {
                children: "samples/API-Example"
              }), " folder to install the SDK and related dependencies. After the installation is complete, the terminal displays 'Pod installation complete!'."]
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
        }), _jsx(_components.h3, {
          id: "get-the-sample-project-5",
          children: "Get the sample project"
        }), _jsx(_components.p, {
          children: "You can obtain the sample project using the following methods:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Go to the ", _jsx(_components.a, {
                href: "/sdks",
                children: "SDKs"
              }), " page, download the latest version of the Agora RTC SDK, and unzip it."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Run the following command to clone the Github repository locally:"
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
                      children: " git@github.com:AgoraIO/API-Examples.git"
                    })]
                  })
                })
              })
            }), `
`, _jsxs(_components.p, {
              children: ["This repository contains sample projects for all native platforms of Agora RTC SDK. The API usage examples for macOS are located under ", _jsx(_components.code, {
                children: "/macOS"
              }), "."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "configure-the-sample-project-5",
          children: "Configure the sample project"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Set your App ID and App certificate"
            }), `
`, _jsxs(_components.p, {
              children: ["Open the ", _jsx(_components.code, {
                children: "KeyCenter.swift"
              }), " file and fill in the App ID and App certificate you obtained from the Agora Console."]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "struct"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " KeyCenter"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " {"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    // Replace <#Your App ID#> with your App ID"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    static"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " let"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " AppId: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
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
                      children: ' "<#Your App ID#>"'
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    // Replace #Your certificate# with your App certificate. Leave this field blank if the project allows joining with the App ID only"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    static"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " let"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " Certificate: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "String"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "?"
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
                      children: ' "<#Your certificate#>"'
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
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Open a terminal and run ", _jsx(_components.code, {
                children: "pod install"
              }), " in the ", _jsx(_components.code, {
                children: "/macOS"
              }), " directory, to install project dependencies. After the installation is complete, the terminal displays ", _jsx(_components.code, {
                children: "Pod installation complete!"
              }), ". A file ", _jsx(_components.code, {
                children: "APIExample.xcworkspace"
              }), " is generated in the project folder."]
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
        }), _jsx(_components.h3, {
          id: "get-the-sample-project-6",
          children: "Get the sample project"
        }), _jsx(_components.p, {
          children: "Run the following command to clone the GitHub repository locally:"
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
                  children: " https://github.com/AgoraIO/API-Examples-Web"
                })]
              })
            })
          })
        }), _jsx(_components.p, {
          children: "The GitHub examples repository provides the following projects:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Path"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Feature demos"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "/Demo"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Extension demos"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "/ExtensionDemo"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Vue framework examples"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "/vue/api-examples"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "React framework examples"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "/react/api-examples"
                })
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "configure-the-sample-project-6",
          children: "Configure the sample project"
        }), _jsxs(_components.p, {
          children: ["Navigate to ", _jsx(_components.code, {
            children: "/react/api-examples"
          }), " and run the following command to install the dependencies."]
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
            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "npm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " install"
                })]
              })
            })
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
        }), _jsx(_components.h3, {
          id: "get-the-sample-project-7",
          children: "Get the sample project"
        }), _jsx(_components.p, {
          children: "Run the following command to clone the repository locally:"
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
                  children: " git@github.com:AgoraIO-Extensions/react-native-agora.git"
                })]
              })
            })
          })
        }), _jsx(_components.p, {
          children: "This repository contains sample projects for Agora RTC SDK:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Path"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Basic functions"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "/example/src/examples/basic"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Advanced features"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "/example/src/examples/advanced"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.a, {
                  href: "https://react.dev/reference/react",
                  children: "Hook"
                }), " example"]
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "/example/src/examples/hook"
                })
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "configure-the-sample-project-7",
          children: "Configure the sample project"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Install dependencies"
            }), `
`, _jsx(_components.p, {
              children: "Switch to the root directory and run the following commands to integrate the SDK and install dependencies:"
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
                  children: _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "yarn"
                    })
                  })
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Set your App ID and App Token"
            }), `
`, _jsxs(_components.p, {
              children: ["Open the ", _jsx(_components.code, {
                children: "/example/src/config/agora.config.ts"
              }), " file and fill in the App ID and temporary token you obtained from the Agora Console."]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Agora App ID"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "let"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " localAppId "
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
                      children: " ''"
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
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "try"
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
                      children: "    localAppId "
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
                      children: " require"
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
                      children: "'./appID'"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ").default;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    console."
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
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "'appID'"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", localAppId);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "} "
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
                      children: " (error) {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    console."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "warn"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(error);"
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
                      children: "const"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " config"
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
                      children: " {"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    appId: localAppId,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    // Agora app token"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    token: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "''"
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
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    // Agora channel ID"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    channelId: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "'test'"
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
                      children: "    uid: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "0"
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
                      children: "    logFilePath: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "''"
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
                      children: "};"
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
                      children: "export"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " default"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " config;"
                    })]
                  })]
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
        platform: "unity",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "unity"
        }), _jsx(_components.h3, {
          id: "get-the-sample-project-8",
          children: "Get the sample project"
        }), _jsx(_components.p, {
          children: "Obtain the sample project using one of the following methods:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Go to the ", _jsx(_components.a, {
                href: "/sdks",
                children: "SDKs"
              }), " page, download the latest version of the RTC SDK, and unzip it. You see a ", _jsx(_components.code, {
                children: ".unitypackage"
              }), " file."]
            }), `
`, _jsxs(_components.p, {
              children: ["Open the ", _jsx(_components.code, {
                children: ".unitypackage"
              }), " file. An ", _jsx(_components.strong, {
                children: "Import Unity Package window"
              }), " pops up. Click ", _jsx(_components.strong, {
                children: "Import"
              }), " to import the SDK into your project. After the import is complete, you see the ", _jsx(_components.code, {
                children: "Agora-RTC-PLUGIN"
              }), " folder in the project panel."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/run-compile-unity-get-project.png",
                alt: ""
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Run the following command to clone the repository locally:"
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
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
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
                      children: " https://github.com/AgoraIO-Extensions/Agora-Unity-Quickstart.git"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "cd"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " Agora-Unity-Quickstart/API-Example-Unity"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "configure-the-sample-project-8",
          children: "Configure the sample project"
        }), _jsxs(_components.p, {
          children: ["In ", _jsx(_components.code, {
            children: "Agora-RTC-PLUGIN/API-Example/AppIdInput.asset"
          }), ", fill in the App ID, temporary token, and channel name you obtained from the Agora Console."]
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/run-compile-unity-get-project-2.png",
            alt: ""
          })
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "unreal",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "unreal"
        }), _jsx(_components.h3, {
          id: "get-the-sample-project-9",
          children: "Get the sample project"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Run the following command to clone the repository locally:"
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
                      children: " git@github.com:AgoraIO-Extensions/Agora-Unreal-RTC-SDK.git"
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
              children: ["The C++ API usage examples are located in ", _jsx(_components.code, {
                children: "/Agora-Unreal-SDK-CPP-Example"
              }), ". These include:"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Description"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Path"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Basic API examples"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsx(_components.code, {
                      children: "/Agora-Unreal-SDK-CPP-Example/Content/API-Example/Basic"
                    })
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Advanced API examples"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsx(_components.code, {
                      children: "/Agora-Unreal-SDK-CPP-Example/Content/API-Example/Advance"
                    })
                  })]
                })]
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "configure-the-sample-project-9",
          children: "Configure the sample project"
        }), _jsx(_components.p, {
          children: "Refer to the following steps to integrate the SDK:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Go to ", _jsx(_components.a, {
              href: "/sdks",
              children: "SDKs"
            }), " to download the latest version of the RTC SDK and unzip it."]
          }), `
`, _jsxs(_components.li, {
            children: ["In ", _jsx(_components.code, {
              children: "/Agora-Unreal-SDK-CPP-Example"
            }), ", create a folder named ", _jsx(_components.code, {
              children: "Plugins"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["Copy ", _jsx(_components.code, {
              children: "AgoraPlugin"
            }), " from the SDK folder to ", _jsx(_components.code, {
              children: "Plugins"
            }), "."]
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
        }), _jsx(_components.h3, {
          id: "get-the-sample-project-10",
          children: "Get the sample project"
        }), _jsx(_components.p, {
          children: "Obtain the sample project using one of the following methods:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Go to the ", _jsx(_components.a, {
                href: "/sdks",
                children: "SDKs"
              }), " page, download the latest version of RTC SDK, and unzip it."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Run the following commands to clone the GitHub repository locally:"
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
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
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
                      children: " https://github.com/AgoraIO/API-Examples-Web"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "cd"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " API-Examples-Web"
                    })]
                  }), `
`, _jsxs(_components.span, {
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
                      children: " checkout"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " new"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "API-Examples-Web"
          }), " repository provides the following examples:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Path"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Basic examples"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "/src/example/basic"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Advanced examples"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "/src/example/advanced"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Plug-in examples"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "/src/example/plugin"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Other examples"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "/src/example/others"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Vue framework example"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "/src/example/framework/vue"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "React framework example"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "/src/example/framework/react"
                })
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "configure-the-sample-project-10",
          children: "Configure the sample project"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Install dependencies"
            }), `
`, _jsx(_components.p, {
              children: "In the project root folder, run the following command to install the dependencies:"
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
                      children: "npm"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " install"
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
              children: "To launch the project, run the following command in the project root folder:"
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
                      children: "npm"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " run"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " dev"
                    })]
                  })
                })
              })
            }), `
`, _jsx(_components.p, {
              children: "After execution is complete, the terminal displays the URL to launch the demo."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Set App ID and temporary Token"
            }), `
`, _jsxs(_components.p, {
              children: ["Open ", _jsx(_components.code, {
                children: "http://localhost:3001/index.html"
              }), " in your browser , fill in the App ID and App certificate you obtained from the Agora console, and then click ", _jsx(_components.strong, {
                children: "Set"
              }), ". Both primary and secondary certificates are acceptable."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/run-compile-web-step-1.png",
                alt: ""
              })
            }), `
`]
          }), `
`]
        }), _jsxs(CalloutContainer, {
          type: "info",
          children: [_jsx(CalloutTitle, {
            children: "Information"
          }), _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "If you have enabled joining with only the App ID for your project, leave the App certificate field blank."
            })
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "windows",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "windows"
        }), _jsx(_components.h3, {
          id: "get-the-sample-project-11",
          children: "Get the sample project"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Run the following command to clone the repository locally:"
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
                      children: " git@github.com:AgoraIO/API-Examples.git"
                    })]
                  })
                })
              })
            }), `
`, _jsxs(_components.p, {
              children: ["This repository contains sample projects for all native platforms of Agora RTC SDK. The API usage examples for Windows are located under ", _jsx(_components.code, {
                children: "/windows"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Integrate SDK and install dependencies"
            }), `
`, _jsxs(_components.p, {
              children: ["Run ", _jsx(_components.code, {
                children: "/APIExample/installThirdParty.bat"
              }), " to automatically integrate the SDK, download dependencies, and configure the environment."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Set App ID and Token"
            }), `
`, _jsxs(_components.p, {
              children: ["Open the ", _jsx(_components.code, {
                children: "/APIExample/APIExample/stdafx.h"
              }), " file and fill in the App ID and temporary token you obtained from the Agora Console."]
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
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "#define"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " APP_ID"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '     "enter your App ID"'
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "#define"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " APP_TOKEN"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '  "enter your temporary token"'
                    })]
                  })]
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
      id: "run-the-sample-project",
      children: "Run the sample project"
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["blueprint","android","electron","flutter","ios","macos","javascript","react-native","unity","unreal","web","windows"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "blueprint",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "blueprint"
        }), _jsx(_components.p, {
          children: "In the Unreal Editor, you can compile and run the sample project at the main level or any sublevel."
        }), _jsxs(CodeBlockTabs, {
          defaultValue: "Main level",
          children: [_jsxs(CodeBlockTabsList, {
            children: [_jsx(CodeBlockTabsTrigger, {
              value: "Main level",
              children: "Main Level"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "sub level",
              children: "Sub Level"
            })]
          }), _jsx(CodeBlockTab, {
            value: "Main level",
            children: _jsxs(_components.ol, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["In the path of the Blueprint API example, double-click ", _jsx(_components.strong, {
                    children: "AgoraBPExample.uproject"
                  }), " to open the project."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Double-click ", _jsx(_components.strong, {
                    children: "MainLevel"
                  }), ", then click ", _jsx(_components.strong, {
                    children: "Compile"
                  }), " and run the sample project. You see the following interface:"]
                }), `
`, _jsx(_components.p, {
                  children: _jsx(_components.img, {
                    src: "https://assets-docs.agora.io/images/video-sdk/run-compile-blueprint-tab-1-1.png",
                    alt: ""
                  })
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Fill in the text box with the App ID and temporary token you obtained from the Agora Console, and the channel name you used to generate the token."
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Click the button on the left to navigate from the main level to the sub-levels of the API example to experience the selected demo. Choose ", _jsx(_components.code, {
                    children: "BasicVideoCallScene"
                  }), " as an example, click ", _jsx(_components.strong, {
                    children: "JoinChannel"
                  }), " to join the channel. You see yourself in the local view."]
                }), `
`, _jsx(_components.p, {
                  children: _jsx(_components.img, {
                    src: "https://assets-docs.agora.io/images/video-sdk/run-compile-blueprint-tab-1-2.png",
                    alt: ""
                  })
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["To test various audio and video interaction use-cases, connect to the ", _jsx(_components.a, {
                    href: "https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html",
                    children: "Agora web demo"
                  }), ", or install and run the sample project on a second device. Make sure you use the same App ID on both devices. When you join the same channel from two devices, you can see and hear each other."]
                }), `
`]
              }), `
`]
            })
          }), _jsx(CodeBlockTab, {
            value: "sub level",
            children: _jsxs(_components.ol, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["In the path of the Blueprint API example,, double-click ", _jsx(_components.strong, {
                    children: "AgoraBPExample.uproject"
                  }), " to open the project."]
                }), `
`, _jsx(_components.p, {
                  children: _jsx(_components.img, {
                    src: "https://assets-docs.agora.io/images/video-sdk/run-compile-blueprint-tab-2-1.png",
                    alt: ""
                  })
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Choose ", _jsx(_components.strong, {
                    children: "BasicVideoCallScene"
                  }), " as an example, double-click the sub-level in the Content Browser, and then click ", _jsx(_components.strong, {
                    children: "Blueprints > Open Level Blueprint"
                  }), " above the editor to open the corresponding level blueprint."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Fill in the App ID, temporary token, and channel name of your project."
                }), `
`, _jsx(_components.p, {
                  children: _jsx(_components.img, {
                    src: "https://assets-docs.agora.io/images/video-sdk/run-compile-blueprint-tab-2-2.png",
                    alt: ""
                  })
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Click ", _jsx(_components.strong, {
                    children: "Compile"
                  }), " and run the sample project at the sublevel. You see the following interface:"]
                }), `
`, _jsx(_components.p, {
                  children: _jsx(_components.img, {
                    src: "https://assets-docs.agora.io/images/video-sdk/run-compile-blueprint-tab-2-3.png",
                    alt: ""
                  })
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Click ", _jsx(_components.strong, {
                    children: "JoinChannel"
                  }), " to join the channel. You see yourself in the local view."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["To test various audio and video interaction use-cases, connect to the ", _jsx(_components.a, {
                    href: "https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html",
                    children: "Agora web demo"
                  }), ", or install and run the sample project on a second device. Make sure you use the same App ID on both devices. When you join the same channel from two devices, you can see and hear each other."]
                }), `
`]
              }), `
`]
            })
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Open the ", _jsx(_components.code, {
                children: "/API-Examples/Android/APIExample"
              }), " folder in Android Studio."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Turn on developer options on your Android device, enable USB debugging, and connect the device to the development machine through a USB cable. Your Android device appears in the Android device options."
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/run-compile-android-step-2.png",
                alt: ""
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["In Android Studio, click ", _jsx(_components.strong, {
                children: "Sync Project with Gradle Files"
              }), " for Gradle synchronization."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["After synchronization is complete, click ", _jsx(_components.strong, {
                children: "Run 'app'"
              }), " to start compilation."]
            }), `
`, _jsxs(_components.p, {
              children: ["The app is installed as ", _jsx(_components.strong, {
                children: "Agora API Example"
              }), " on your device."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Open the app and choose the example you want to run. For example, to test ", _jsx(_components.strong, {
                children: "Live Interactive Video Streaming"
              }), ", select the option from the menu, enter the channel name, and click ", _jsx(_components.strong, {
                children: "Join"
              }), "."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/run-compile-android-step-6.jpg",
                alt: ""
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To test various audio and video interaction use-cases, connect to the ", _jsx(_components.a, {
                href: "https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html",
                children: "Agora web demo"
              }), ", or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/run-compile-android-step-7.png",
                alt: ""
              })
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
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To run the sample project, execute the following command in the ", _jsx(_components.code, {
                children: "/example"
              }), " directory:"]
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
                      children: "yarn"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " start"
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
              children: "After the operation is complete, you see the following application on your screen:"
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/run-compile-electron-step-2.png",
                alt: ""
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["On the ", _jsx(_components.strong, {
                children: "Settings"
              }), " page, fill in the App Id and temporary token you obtained from the Console. Fill in the same channel name you used when generating the temporary token. Click ", _jsx(_components.strong, {
                children: "Save"
              }), " to save your settings."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Select a demo you want to experience from the menu on the left. Choose ", _jsx(_components.strong, {
                children: "JoinChannelVideo"
              }), ", under ", _jsx(_components.strong, {
                children: "Basic"
              }), ", as an example and click ", _jsx(_components.strong, {
                children: "join channel"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To test various audio and video interaction use-cases, connect to the ", _jsx(_components.a, {
                href: "https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html",
                children: "Agora web demo"
              }), ", or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other."]
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
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Connect the target device to your computer."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Open terminal and navigate to the ", _jsx(_components.code, {
                children: "/examples"
              }), " directory."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Execute the following command to launch the sample project on available devices:"
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
                      children: "flutter"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " run"
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
              children: "After compilation is complete, you see the following application on your device:"
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/run-compile-flutter-step-4.png",
                alt: ""
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Select a demo you want to experience from the menu. Choose ", _jsx(_components.strong, {
                children: "JoinChannelVideo"
              }), " under ", _jsx(_components.strong, {
                children: "Basic"
              }), " as an example. Enter the channel name you specified when generating the temporary token in ", _jsx(_components.strong, {
                children: "Channel ID"
              }), ", and click ", _jsx(_components.strong, {
                children: "Join channel"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To test various audio and video interaction use-cases, connect to the ", _jsx(_components.a, {
                href: "https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html",
                children: "Agora web demo"
              }), ", or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/run-compile-flutter-step-6.png",
                alt: ""
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
          canonicalPlatform: "web",
          platform: "ios"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Connect an iOS device to your development machine, open ", _jsx(_components.strong, {
                children: "Device > Privacy & Security > Security"
              }), " on the device, and turn on the developer mode."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Check your iOS device in the ", _jsx(_components.strong, {
                children: "iOS Device"
              }), " options at the top of the Xcode interface."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/run-compile-ios-step-2.png",
                alt: ""
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Check ", _jsx(_components.strong, {
                children: "Automatically manage signing"
              }), " in ", _jsx(_components.strong, {
                children: "Signing & Capabilities"
              }), " under ", _jsx(_components.strong, {
                children: "TARGETS"
              }), ", then configure your Apple developer account and ", _jsx(_components.strong, {
                children: "Bundle Identifier"
              }), " under each target."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/run-compile-ios-step-3.png",
                alt: ""
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Click ", _jsx(_components.strong, {
                children: "Start compiling"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "After successful compilation, you see the app icon on your device."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["If an untrusted developer prompt pops up on the device, first tap ", _jsx(_components.strong, {
                children: "Cancel"
              }), " to close the prompt, then open ", _jsx(_components.strong, {
                children: "Settings > General > VPN and Device Management"
              }), " on the iOS device, and choose to trust the developer."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Open the ", _jsx(_components.strong, {
                children: "API Example App"
              }), ", select an example you want to try, then enter the channel name. For example, ", _jsx(_components.em, {
                children: "test"
              }), ", and tap ", _jsx(_components.strong, {
                children: "Join Channel"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To test various audio and video interaction use-cases, connect to the ", _jsx(_components.a, {
                href: "https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html",
                children: "Agora web demo"
              }), ", or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/run-compile-ios-step-8.png",
                alt: ""
              })
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
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Open the file ", _jsx(_components.code, {
                children: "APIExample.xcworkspace"
              }), " in Xcode. Check ", _jsx(_components.strong, {
                children: "Automatically manage signing"
              }), " in ", _jsx(_components.strong, {
                children: "Signing & Capabilities"
              }), " under ", _jsx(_components.strong, {
                children: "TARGETS"
              }), ", and then configure your Apple developer account and ", _jsx(_components.strong, {
                children: "Bundle Identifier"
              }), " under each target."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/run-compile-macos-step-1.jpeg",
                alt: ""
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Click ", _jsx(_components.strong, {
                children: "Start compiling"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "After successful compilation, the sample project window pops up."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Select an example you want to try, then enter a channel name, such as ", _jsx(_components.em, {
                children: "test"
              }), ", and click the ", _jsx(_components.strong, {
                children: "Join Channel"
              }), "."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/run-compile-macos-step-4.png",
                alt: ""
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To test various audio and video interaction use-cases, connect to the ", _jsx(_components.a, {
                href: "https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html",
                children: "Agora web demo"
              }), ", or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/run-compile-macos-step-5.png",
                alt: ""
              })
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
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Use the following command to run the sample project."
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
                      children: "npm"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " run"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " dev"
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
              children: ["On the demo page, enter your ", _jsx(_components.a, {
                href: "/en/introduction/account#get-the-app-id-and-app-certificate",
                children: "App ID"
              }), ", ", _jsx(_components.a, {
                href: "/en/introduction/account#generate-temporary-tokens",
                children: "token"
              }), ", and channel name and join the channel."]
            }), `
`, _jsx(_components.p, {
              children: "The channel name must be the same as the channel ID you used to generate the token."
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
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Execute the following command in the project root directory to run the sample project."
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Target platform Android"
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
                          children: "yarn"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " example"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " android"
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
                  children: "Target platform iOS"
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
                          children: "yarn"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " example"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " ios"
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
              children: "After the operation is complete, the following application appears on your device:"
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/run-compile-rn-step-2.png",
                alt: ""
              })
            }), `
`, _jsx(_components.p, {
              children: "Showing Android as an example"
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Select the demo you want to experience from the menu. Choose ", _jsx(_components.strong, {
                children: "JoinChannelVideo"
              }), " under ", _jsx(_components.strong, {
                children: "Basic"
              }), " as an example, and click ", _jsx(_components.strong, {
                children: "join channel"
              }), "."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/run-compile-rn-step-3.png",
                alt: ""
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To test various audio and video interaction use-cases, connect to the ", _jsx(_components.a, {
                href: "https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html",
                children: "Agora web demo"
              }), ", or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other."]
            }), `
`]
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
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["The ", _jsx(_components.code, {
                children: "API-Example"
              }), " folder contains two folders, ", _jsx(_components.code, {
                children: "Basic"
              }), " and ", _jsx(_components.code, {
                children: "Advanced"
              }), ", that contain usage examples of basic and advanced use-cases of Agora SDK. Select the demo you want to run and click ", _jsx(_components.strong, {
                children: "Play"
              }), " to compile."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/run-compile-unity-step-1.png",
                alt: ""
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Choose video calls as an example. After successful compilation, you see your local video preview."
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/run-compile-unity-step-2.png",
                alt: ""
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To test various audio and video interaction use-cases, connect to the ", _jsx(_components.a, {
                href: "https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html",
                children: "Agora web demo"
              }), ", or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/run-compile-unity-step-3.png",
                alt: ""
              })
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
        }), _jsx(_components.p, {
          children: "In the Unreal Editor, you can compile and run the sample project at the main level or any sublevel."
        }), _jsxs(CodeBlockTabs, {
          defaultValue: "Main level",
          children: [_jsxs(CodeBlockTabsList, {
            children: [_jsx(CodeBlockTabsTrigger, {
              value: "Main level",
              children: "Main Level"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "sub level",
              children: "Sub Level"
            })]
          }), _jsx(CodeBlockTab, {
            value: "Main level",
            children: _jsxs(_components.ol, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["In the C++ API example folder, double-click ", _jsx(_components.code, {
                    children: "AgoraExample.uproject"
                  }), " to open the project."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Double-click ", _jsx(_components.strong, {
                    children: "MainLevel"
                  }), ", then click ", _jsx(_components.strong, {
                    children: "Compile"
                  }), " and ", _jsx(_components.strong, {
                    children: "Run"
                  }), " the sample project. On Windows, you see the following interface:"]
                }), `
`, _jsx(_components.p, {
                  children: _jsx(_components.img, {
                    src: "https://assets-docs.agora.io/images/video-sdk/run-compile-unreal-tab-1-step-3.png",
                    alt: ""
                  })
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Fill in the text box with the App ID and temporary token you obtained from the Agora Console, and the channel name you used to generate the token."
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Click the button on the left to navigate from the main level to the sub-levels of the API example to experience the selected demo. Choose ", _jsx(_components.strong, {
                    children: "BasicVideoCallScene"
                  }), " as an example, click ", _jsx(_components.strong, {
                    children: "JoinChannel"
                  }), " to join the channel. You see yourself in the local view."]
                }), `
`, _jsx(_components.p, {
                  children: _jsx(_components.img, {
                    src: "https://assets-docs.agora.io/images/video-sdk/run-compile-unreal-tab-1-step-4.png",
                    alt: ""
                  })
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["To test various audio and video interaction use-cases, connect to the ", _jsx(_components.a, {
                    href: "https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html",
                    children: "Agora web demo"
                  }), ", or install and run the sample project on a second device. Make sure you use the same App ID on both devices. When you join the same channel from two devices, you can see and hear each other."]
                }), `
`]
              }), `
`]
            })
          }), _jsx(CodeBlockTab, {
            value: "sub level",
            children: _jsxs(_components.ol, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["In the C++ API example folder, double-click ", _jsx(_components.code, {
                    children: "AgoraExample.uproject"
                  }), " to open the project."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Choose ", _jsx(_components.strong, {
                    children: "BasicVideoCallScene"
                  }), " as an example, double-click the sub-level in the Content Browser, and then click the  ", _jsx(_components.strong, {
                    children: "BP_AgoraActor"
                  }), " blueprint in the ", _jsx(_components.strong, {
                    children: "World Outliner panel"
                  }), ". Fill in the App ID, temporary token, and channel name of your project in the ", _jsx(_components.strong, {
                    children: "Details panel"
                  }), "."]
                }), `
`, _jsx(_components.p, {
                  children: _jsx(_components.img, {
                    src: "https://assets-docs.agora.io/images/video-sdk/run-compile-unreal-tab-2-step-2.png",
                    alt: ""
                  })
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Click ", _jsx(_components.strong, {
                    children: "Compile"
                  }), " and run the sample project at the sublevel. You see the following interface:"]
                }), `
`, _jsx(_components.p, {
                  children: _jsx(_components.img, {
                    src: "https://assets-docs.agora.io/images/video-sdk/run-compile-unreal-tab-2-step-4.png",
                    alt: ""
                  })
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Click ", _jsx(_components.strong, {
                    children: "JoinChannel"
                  }), " to join the channel. You see yourself in the local view."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["To test various audio and video interaction use-cases, connect to the ", _jsx(_components.a, {
                    href: "https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html",
                    children: "Agora web demo"
                  }), ", or install and run the sample project on a second device. Make sure you use the same App ID on both devices. When you join the same channel from two devices, you can see and hear each other."]
                }), `
`]
              }), `
`]
            })
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "web",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "web"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "From the menu, choose the feature or use-case you want to experience."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["As an example, try the screen sharing demo, click ", _jsx(_components.strong, {
                children: "Join as host"
              }), " to join a channel as the host. Ask a friend to run the sample project on another device and ", _jsx(_components.strong, {
                children: "Join as audience"
              }), ", using the same app ID, app certificate, and channel name. Now you can share the screen with your friend."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/run-compile-web-step-2.png",
                alt: ""
              })
            }), `
`]
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
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Open the file ", _jsx(_components.code, {
                children: "/APIExample/APIExample.sln"
              }), " in Visual Studio."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Click ", _jsx(_components.strong, {
                children: "Start compiling"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "After compilation is complete, you see the following window on your device:"
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/run-compile-windows-step-3.png",
                alt: ""
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Choose any demo you want to experience. Taking the ", _jsx(_components.strong, {
                children: "Live Broadcasting"
              }), " as an example, enter the channel name you used when generating the temporary token in ", _jsx(_components.strong, {
                children: "Channel Name"
              }), ", then click ", _jsx(_components.strong, {
                children: "Join Channel"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To test various audio and video interaction use-cases, use the ", _jsx(_components.a, {
                href: "https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html",
                children: "Agora web demo"
              }), ", or install and run the sample project on a second device. Make sure you use the same app ID on both devices. When you join the same channel from two devices, you can see and hear each other."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/run-compile-windows-step-5.png",
                alt: ""
              })
            }), `
`]
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
