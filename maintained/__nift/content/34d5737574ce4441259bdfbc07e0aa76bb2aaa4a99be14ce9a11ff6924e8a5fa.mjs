import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Manual install",
  description: "Install the Signaling SDK for your platform, using a package manager or a downloaded package."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;web&#x22;,&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;linux-java&#x22;,&#x22;linux-cpp&#x22;,&#x22;windows&#x22;,&#x22;unity&#x22;,&#x22;flutter&#x22;]" showTabs="true">
  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    To manually install the Signaling SDK for Web, do one of the following:

    ## Through the Agora website [#through-the-agora-website]

    1. Extract the files in Agora [Signaling SDK](/en/api-reference/sdks?product=signaling\\&platform=web) to a local folder. In the SDK folder, find the JS file in the \`libs\` folder, and save it to your project directory.

    2. Open the HTML file in your project directory, and add the following code to refer to the JS file:

       \`\`\`javascript
       <script src="path to the JS file"></script>
       \`\`\`

    3. To enable smart completions and type checking, take the following steps:

       1. Go to \`libs/agora-rtm-sdk.d.ts\` in the SDK folder, and save the TS file to your project directory.

       2. Add the following line to the beginning of the JS or TS file. Replace \`path to the TS file\` with the path to \`agora-rtm-sdk.d.ts\`.

          \`\`\`javascript
          /// <reference path="path to the TS file" />
          \`\`\`

    ## Through npm [#through-npm]

    1. In \`package.json\` for your project, add \`agora-rtm-sdk\` and its version number to the \`dependencies\` field:

       \`\`\`json
       "dependencies": {
         "agora-rtm-sdk": "^2.1.4-beta.0",
         "cors-anywhere": "^0.4.4",
         "livereload-js": "^4.0.1",
         "url": "^0.11.1"
       },
       \`\`\`

    2. Install the dependencies:

       \`\`\`bash
       pnpm install
       \`\`\`

    3. In your code, import \`RTM\` from \`agora-rtm-sdk\`:

       \`\`\`javascript
       // Import the SDK
       import AgoraRTM from 'agora-rtm-sdk';

       // Create a client instance
       const signalingEngine = new AgoraRTM.RTM('app-id', 'user-id', { token: 'temporary-token' });

       // Listen for events
       signalingEngine.addEventListener('message', (eventArgs) => {
         console.log(\`\${eventArgs.publisher}: \${eventArgs.message}\`);
       });

       // Login
       try {
         await signalingEngine.login();
       } catch (err) {
         console.log({ err }, 'error occurs at login.');
       }

       // Send channel message
       try {
         await signalingEngine.publish('channel', 'hello world');
       } catch (err) {
         console.log({ err }, 'error occurs at publish message');
       }
       \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    To manually install the Signaling SDK for Android, do one of the following:

    ## Automatically integrate the SDK with Maven Central [#automatically-integrate-the-sdk-with-maven-central]

    1. Open the \`settings.gradle\` file in the project's root directory and add the Maven Central dependency, if it doesn't already exist:

       \`\`\`text
       repositories {
           mavenCentral()
       }
       \`\`\`

    2. Add the \`io.agora.rtm:rtm-sdk\` dependency in the \`/app/build.gradle\` file under your project. Replace \`x.y.z\` with the SDK version number, such as \`2.3.0\`. To get the latest version number, see the [Release notes](/en/realtime-media/rtm/reference/release-notes).

       \`\`\`text
       dependencies {
           implementation 'io.agora.rtm:rtm-sdk:x.y.z'
       }
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           To resolve integration issues when co-integrating with the RTC SDK, use \`io.agora.rtm:rtm-sdk-lite\` instead.
         </CalloutDescription>
       </CalloutContainer>

    ## Manually copy the SDK files [#manually-copy-the-sdk-files]

    To manually install the Signaling SDK for Android from a downloaded package:

    1. Extract [Signaling SDK](/en/api-reference/sdks?product=signaling\\&platform=android) to a local directory, such as \`<unzipped_package>\`.

    2. Copy the following files or folders from the \`rtm/sdk\` folder of the extracted package to your Android project.

       | File or folder      | Path in your project                  |
       | ------------------- | ------------------------------------- |
       | \`agora-rtm-sdk.jar\` | \`/app/libs/\`                          |
       | \`/arm64-v8a/\`       | \`~/app/src/main/jniLibs/arm64-v8a/\`   |
       | \`/armeabi-v7a/\`     | \`~/app/src/main/jniLibs/armeabi-v7a/\` |
       | \`/x86/\`             | \`~/app/src/main/jniLibs/x86/\`         |
       | \`/x86_64/\`          | \`~/app/src/main/jniLibs/x86_64/\`      |

       Each architecture folder contains \`libagora-rtm-sdk.so\` and \`libaosl.so\`. Copy both.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    To manually install the Signaling SDK for iOS, do one of the following:

    ## Automatically integrate the SDK with CocoaPods [#automatically-integrate-the-sdk-with-cocoapods]

    1. [Ensure that you have installed CocoaPods](https://guides.cocoapods.org/using/getting-started.html#getting-started).

    2. In Terminal, navigate to the project path, and run the \`pod init\` command to create a \`Podfile\` in the project folder.

    3. Open the \`Podfile\`, delete all contents, and input the following code:

       \`\`\`bash
       target 'Your App' do
           use_frameworks!
           pod 'AgoraRtm_iOS'
       end
       \`\`\`

    4. Replace \`Your App\` with the target name of your project.

    5. Go back to Terminal, and run the \`pod update\` command to update the local libraries.

    6. Run the \`pod install\` command to install the Signaling SDK. Once you successfully install the SDK, it shows \`Pod installation complete!\` in Terminal, and you can see an \`xcworkspace\` file in the project folder.

    7. Open the generated \`xcworkspace\` file.

    ## Manually add the SDK files [#manually-add-the-sdk-files]

    ### v1.4.4 or later [#v144-or-later]

    iOS apps integrated with Signaling SDK v1.4.4 cannot be published on the App Store due to review issues. If you want to publish your app on the App Store, you must use other versions of the SDK.

    1. Extract the files in [Signaling SDK](/en/api-reference/sdks?product=signaling\\&platform=ios) to a local folder.

    2. Copy \`AgoraRtmKit.xcframework\` from the SDK to your project.

    3. Open Xcode, and navigate to **TARGETS > Project Name > General > Frameworks, Libraries, and Embedded Content**.

    4. Click **+ > Add Other... > Add Files** to add the corresponding library. Ensure that the Embed attribute of the dynamic library is **Embed & Sign**.

    Once the dynamic library is added, the project automatically links to other system libraries.

    The SDK uses the XCFramework. **If you are using a build tool that does not support XCFramework integration**, Agora provides the following scripts to help you integrate:

    * Use the \`change_to_all_arch.sh\` script to convert the XCFramework to the universal framework.
    * If you need to publish an iOS app on the App Store, use the \`remove_simulator_arch.sh\` script to remove the simulator before packaging the app.

    The steps to execute these scripts are as follows:

    1. Copy the above script files to your project, and execute the following code to generate \`AgoraRtmKit.framework\`:

       \`\`\`bash
       sh change_to_all_arch.sh "<AgoraRtmKit.xcframework path>"
       sh remove_simulator_arch.sh "<AgoraRtmKit.framework path>"
       \`\`\`

    2. In Xcode, go to the **TARGETS > Project Name > Build Phases > Link Binary with Libraries*&#x2A; menu, and click &#x2A;*+** to add \`AgoraRtmKit.xcframework\`. Ensure that the **Embed** attribute of the dynamic library is **Embed & Sign**.

    ### Earlier than v1.4.4 [#earlier-than-v144]

    1. Copy the \`AgoraRtmKit.framework\` file in the \`libs\` folder to the project folder.

    2. In Xcode, go to the **TARGETS > Project Name > Build Phases > Link Binary with Libraries*&#x2A; menu, and click &#x2A;*+** to add the following frameworks and libraries. To add the \`AgoraRtmKit.framework\` file, remember to click &#x2A;*Add Other...*&#x2A; after clicking &#x2A;*+**.

       * \`AgoraRtmKit.framework\`
       * \`libc++.tbd\`
       * \`libresolv.tbd\`
       * \`SystemConfiguration.framework\`
       * \`CoreTelephony.framework\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    To manually install the Signaling SDK for macOS, do one of the following:

    ## Automatically integrate the SDK with CocoaPods [#automatically-integrate-the-sdk-with-cocoapods-1]

    1. [Ensure that you have installed CocoaPods](https://guides.cocoapods.org/using/getting-started.html#getting-started).

    2. In Terminal, navigate to the project path, and run the \`pod init\` command to create a \`Podfile\` in the project folder.

    3. Open the \`Podfile\`, delete all contents, and input the following code:

       \`\`\`bash
       target 'Your App' do
           use_frameworks!
           pod 'AgoraRtm_macOS'
       end
       \`\`\`

    4. Replace \`Your App\` with the target name of your project.

    5. Go back to Terminal, and run the \`pod update\` command to update the local libraries.

    6. Run the \`pod install\` command to install the Signaling SDK. Once you successfully install the SDK, it shows \`Pod installation complete!\` in Terminal, and you can see an \`xcworkspace\` file in the project folder.

    7. Open the generated \`xcworkspace\` file.

    ## Manually add the SDK files [#manually-add-the-sdk-files-1]

    ### v1.4.4 or later [#v144-or-later-1]

    Apps integrated with Signaling SDK v1.4.4 cannot be published on the App Store due to review issues. If you want to publish your app on the App Store, you must use other versions of the SDK.

    1. Extract the files in [Signaling SDK](/en/api-reference/sdks?product=signaling\\&platform=macos) to a local folder.

    2. Copy \`AgoraRtmKit.xcframework\` from the SDK to your project.

    3. Open Xcode, and navigate to **TARGETS > Project Name > General > Frameworks, Libraries, and Embedded Content**.

    4. Click **+ > Add Other... > Add Files** to add the corresponding library. Ensure that the Embed attribute of the dynamic library is **Embed & Sign**.

    Once the dynamic library is added, the project automatically links to other system libraries.

    The SDK uses the XCFramework. **If you are using a build tool that does not support XCFramework integration**, Agora provides the following scripts to help you integrate:

    * Use the \`change_to_all_arch.sh\` script to convert the XCFramework to the universal framework.
    * If you need to publish an app on the App Store, use the \`remove_simulator_arch.sh\` script to remove the simulator before packaging the app.

    The steps to execute these scripts are as follows:

    1. Copy the above script files to your project, and execute the following code to generate \`AgoraRtmKit.framework\`:

       \`\`\`bash
       sh change_to_all_arch.sh "<AgoraRtmKit.xcframework path>"
       sh remove_simulator_arch.sh "<AgoraRtmKit.framework path>"
       \`\`\`

    2. In Xcode, go to the **TARGETS > Project Name > Build Phases > Link Binary with Libraries*&#x2A; menu, and click &#x2A;*+** to add \`AgoraRtmKit.xcframework\`. Ensure that the **Embed** attribute of the dynamic library is **Embed & Sign**.

    ### Earlier than v1.4.4 [#earlier-than-v144-1]

    1. Copy the \`AgoraRtmKit.framework\` file in the \`libs\` folder to the project folder.

    2. In Xcode, go to the **TARGETS > Project Name > Build Phases > Link Binary with Libraries*&#x2A; menu, and click &#x2A;*+** to add the following frameworks and libraries. To add the \`AgoraRtmKit.framework\` file, remember to click &#x2A;*Add Other...*&#x2A; after clicking &#x2A;*+**.

       * \`AgoraRtmKit.framework\`
       * \`libc++.tbd\`
       * \`libresolv.tbd\`
       * \`SystemConfiguration.framework\`
       * \`CoreTelephony.framework\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="linux-java">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="linux-java" />

    To install the Signaling SDK for Linux Java using Maven:

    1. Create a file named \`pom.xml\` in \`RTM_quickstart\` with the following content:

       \`\`\`xml
       <?xml version="1.0" encoding="UTF-8"?>
       <project xmlns="http://maven.apache.org/POM/4.0.0"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
           <modelVersion>4.0.0</modelVersion>

           <groupId>io.agora</groupId>
           <artifactId>RTM-Java-Demo</artifactId>
           <version>1.0-SNAPSHOT</version>

           <properties>
               <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
               <maven.compiler.source>1.8</maven.compiler.source>
               <maven.compiler.target>1.8</maven.compiler.target>
           </properties>

           <!-- [!code highlight:7] -->
           <dependencies>
               <dependency>
                   <groupId>io.agora</groupId>
                   <artifactId>rtm-java-aarch64</artifactId>
                   <version>x.y.z</version>
               </dependency>
           </dependencies>

           <build>
               <plugins>
                   <plugin>
                       <groupId>org.apache.maven.plugins</groupId>
                       <artifactId>maven-shade-plugin</artifactId>
                       <version>3.2.0</version>
                       <executions>
                           <!-- Attach the shade into the package phase -->
                           <execution>
                               <phase>package</phase>
                               <goals>
                                   <goal>shade</goal>
                               </goals>
                               <configuration>
                                   <transformers>
                                       <transformer implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">
                                           <mainClass>io.agora.RtmJavaDemo</mainClass>
                                       </transformer>
                                   </transformers>
                               </configuration>
                           </execution>
                       </executions>
                   </plugin>
               </plugins>
           </build>
       </project>
       \`\`\`

       Replace \`x.y.z\` with the specific SDK version number, such as \`2.3.0\`. To get the latest version number, check the [Release notes](/en/realtime-media/rtm/reference/release-notes).

       The \`artifactId\` is architecture-specific. Use \`rtm-java-aarch64\` for aarch64 (arm64) devices, or \`rtm-java-x86_64\` for x86-64 devices.

    2. Maven doesn't distribute the native libraries the SDK depends on, so [download](/en/api-reference/sdks?product=signaling\\&platform=linux-java) the SDK package separately, unzip it, and copy the \`*.so\` files to the \`lib\` folder.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="linux-cpp">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="linux-cpp" />

    To manually install the Signaling SDK for Linux C++:

    1. Extract the files in Agora [Signaling SDK](/en/api-reference/sdks?product=signaling\\&platform=linux-cpp) to a local folder.

    2. Copy the \`*.so\` file in the SDK folder into your \`lib\` folder, and copy the \`*.h\` file in the SDK folder into your \`include\` folder.

    3. Create a file named \`CMakeLists.txt\` under the \`RTM_quickstart\` directory to use CMake to build the project. The text file should contain the following content:

       \`\`\`text
       cmake_minimum_required(VERSION 2.8)
       project(rtmQuickstart)

       set(TARGET_NAME rtmQuickstart)
       set(SOURCES rtmQuickstart.cpp)
       set(HEADERS)

       set(TARGET_BUILD_TYPE "Debug")
       set(CMAKE_CXX_FLAGS "-fPIC -O2 -g -std=c++11 -msse2")

       include_directories(\${CMAKE_SOURCE_DIR}/include)
       link_directories(\${CMAKE_SOURCE_DIR}/lib)

       add_executable(\${TARGET_NAME} \${SOURCES} \${HEADERS})
       target_link_libraries(\${TARGET_NAME} agora_rtm_sdk pthread)
       \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    To manually install the Signaling SDK for Windows:

    1. Extract the files in Agora [Signaling SDK](/en/api-reference/sdks?product=signaling\\&platform=windows) to a local folder.

    2. Copy all subfolders of the SDK folder to the solution directory of your Visual Studio project.

       Ensure that the subfolders are in the same location as your \`*.sln\` file.

    3. Configure the project properties.

       1. In Visual Studio, right-click the project name in the Solution Explorer window, click **Properties**, then click **OK**.

       2. Select **C/C++ > General > Additional Include Directories**, then click **Edit**.

       3. In the window, input \`$(SolutionDir)include\`.

       4. Select **Linker > General > Additional Library Directories**, then click **Edit**.

       5. In the window, input \`$(SolutionDir)lib\`.

       6. Select **Linker > Input > Additional Dependencies**, then click **Edit**.

       7. In the window, input \`agora_rtm_sdk.lib\`.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    To manually install the Signaling SDK for Unity:

    1. Extract the latest version of the Agora [Signaling SDK for Unity](/en/api-reference/sdks?product=signaling\\&platform=unity) to a local folder.

    2. In the Unity Editor, select **Assets** > **Import Package** > **Custom Package**.

    3. Select the Agora Signaling Unity asset package and click **Open**.

    4. All packages of the SDK are chosen by default. Uncheck the packages you do not need and click **Import**.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    To manually install the Signaling SDK for Flutter:

    1. Open a terminal and execute the following command to create a new Flutter project:

       \`\`\`bash
       flutter create project_name
       \`\`\`

    2. Open the project in your IDE. Add the Signaling SDK dependency to \`pubspec.yaml\` under \`dependencies\`:

       \`\`\`yaml
       dependencies:
         # Add the Signaling SDK dependency, use the latest version number
         agora_rtm: ^2.2.1
       \`\`\`

    <CalloutContainer type="info">
      <CalloutDescription>
        To integrate Signaling SDK version 2.2.1 or above and RTC SDK version 4.3.0 or above at the same time, refer to [Handle integration issues](/en/api-reference/faq/integration/rtm2_rtc_integration_issue).
      </CalloutDescription>
    </CalloutContainer>

    1. To install the dependencies, open the terminal and execute the following command in the project path:

       \`\`\`bash
       flutter pub get
       \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To manually install the Signaling SDK for Web, do one of the following:"
  }, {
    heading: "through-the-agora-website",
    content: "Extract the files in Agora Signaling SDK to a local folder. In the SDK folder, find the JS file in the `libs` folder, and save it to your project directory."
  }, {
    heading: "through-the-agora-website",
    content: "Open the HTML file in your project directory, and add the following code to refer to the JS file:"
  }, {
    heading: "through-the-agora-website",
    content: "To enable smart completions and type checking, take the following steps:"
  }, {
    heading: "through-the-agora-website",
    content: "Go to `libs/agora-rtm-sdk.d.ts` in the SDK folder, and save the TS file to your project directory."
  }, {
    heading: "through-the-agora-website",
    content: "Add the following line to the beginning of the JS or TS file. Replace `path to the TS file` with the path to `agora-rtm-sdk.d.ts`."
  }, {
    heading: "through-npm",
    content: "In `package.json` for your project, add `agora-rtm-sdk` and its version number to the `dependencies` field:"
  }, {
    heading: "through-npm",
    content: "Install the dependencies:"
  }, {
    heading: "through-npm",
    content: "In your code, import `RTM` from `agora-rtm-sdk`:"
  }, {
    heading: "through-npm",
    content: "To manually install the Signaling SDK for Android, do one of the following:"
  }, {
    heading: "automatically-integrate-the-sdk-with-maven-central",
    content: "Open the `settings.gradle` file in the project's root directory and add the Maven Central dependency, if it doesn't already exist:"
  }, {
    heading: "automatically-integrate-the-sdk-with-maven-central",
    content: "Add the `io.agora.rtm:rtm-sdk` dependency in the `/app/build.gradle` file under your project. Replace `x.y.z` with the SDK version number, such as `2.3.0`. To get the latest version number, see the Release notes."
  }, {
    heading: "automatically-integrate-the-sdk-with-maven-central",
    content: "To resolve integration issues when co-integrating with the RTC SDK, use `io.agora.rtm:rtm-sdk-lite` instead."
  }, {
    heading: "manually-copy-the-sdk-files",
    content: "To manually install the Signaling SDK for Android from a downloaded package:"
  }, {
    heading: "manually-copy-the-sdk-files",
    content: "Extract Signaling SDK to a local directory, such as `<unzipped_package>`."
  }, {
    heading: "manually-copy-the-sdk-files",
    content: "Copy the following files or folders from the `rtm/sdk` folder of the extracted package to your Android project."
  }, {
    heading: "manually-copy-the-sdk-files",
    content: "File or folder"
  }, {
    heading: "manually-copy-the-sdk-files",
    content: "Path in your project"
  }, {
    heading: "manually-copy-the-sdk-files",
    content: "`agora-rtm-sdk.jar`"
  }, {
    heading: "manually-copy-the-sdk-files",
    content: "`/app/libs/`"
  }, {
    heading: "manually-copy-the-sdk-files",
    content: "`/arm64-v8a/`"
  }, {
    heading: "manually-copy-the-sdk-files",
    content: "`~/app/src/main/jniLibs/arm64-v8a/`"
  }, {
    heading: "manually-copy-the-sdk-files",
    content: "`/armeabi-v7a/`"
  }, {
    heading: "manually-copy-the-sdk-files",
    content: "`~/app/src/main/jniLibs/armeabi-v7a/`"
  }, {
    heading: "manually-copy-the-sdk-files",
    content: "`/x86/`"
  }, {
    heading: "manually-copy-the-sdk-files",
    content: "`~/app/src/main/jniLibs/x86/`"
  }, {
    heading: "manually-copy-the-sdk-files",
    content: "`/x86_64/`"
  }, {
    heading: "manually-copy-the-sdk-files",
    content: "`~/app/src/main/jniLibs/x86_64/`"
  }, {
    heading: "manually-copy-the-sdk-files",
    content: "Each architecture folder contains `libagora-rtm-sdk.so` and `libaosl.so`. Copy both."
  }, {
    heading: "manually-copy-the-sdk-files",
    content: "To manually install the Signaling SDK for iOS, do one of the following:"
  }, {
    heading: "automatically-integrate-the-sdk-with-cocoapods",
    content: "Ensure that you have installed CocoaPods."
  }, {
    heading: "automatically-integrate-the-sdk-with-cocoapods",
    content: "In Terminal, navigate to the project path, and run the `pod init` command to create a `Podfile` in the project folder."
  }, {
    heading: "automatically-integrate-the-sdk-with-cocoapods",
    content: "Open the `Podfile`, delete all contents, and input the following code:"
  }, {
    heading: "automatically-integrate-the-sdk-with-cocoapods",
    content: "Replace `Your App` with the target name of your project."
  }, {
    heading: "automatically-integrate-the-sdk-with-cocoapods",
    content: "Go back to Terminal, and run the `pod update` command to update the local libraries."
  }, {
    heading: "automatically-integrate-the-sdk-with-cocoapods",
    content: "Run the `pod install` command to install the Signaling SDK. Once you successfully install the SDK, it shows `Pod installation complete!` in Terminal, and you can see an `xcworkspace` file in the project folder."
  }, {
    heading: "automatically-integrate-the-sdk-with-cocoapods",
    content: "Open the generated `xcworkspace` file."
  }, {
    heading: "v144-or-later",
    content: "iOS apps integrated with Signaling SDK v1.4.4 cannot be published on the App Store due to review issues. If you want to publish your app on the App Store, you must use other versions of the SDK."
  }, {
    heading: "v144-or-later",
    content: "Extract the files in Signaling SDK to a local folder."
  }, {
    heading: "v144-or-later",
    content: "Copy `AgoraRtmKit.xcframework` from the SDK to your project."
  }, {
    heading: "v144-or-later",
    content: "Open Xcode, and navigate to **TARGETS > Project Name > General > Frameworks, Libraries, and Embedded Content**."
  }, {
    heading: "v144-or-later",
    content: "Click **+ > Add Other... > Add Files** to add the corresponding library. Ensure that the Embed attribute of the dynamic library is **Embed & Sign**."
  }, {
    heading: "v144-or-later",
    content: "Once the dynamic library is added, the project automatically links to other system libraries."
  }, {
    heading: "v144-or-later",
    content: "The SDK uses the XCFramework. **If you are using a build tool that does not support XCFramework integration**, Agora provides the following scripts to help you integrate:"
  }, {
    heading: "v144-or-later",
    content: "Use the `change_to_all_arch.sh` script to convert the XCFramework to the universal framework."
  }, {
    heading: "v144-or-later",
    content: "If you need to publish an iOS app on the App Store, use the `remove_simulator_arch.sh` script to remove the simulator before packaging the app."
  }, {
    heading: "v144-or-later",
    content: "The steps to execute these scripts are as follows:"
  }, {
    heading: "v144-or-later",
    content: "Copy the above script files to your project, and execute the following code to generate `AgoraRtmKit.framework`:"
  }, {
    heading: "v144-or-later",
    content: "In Xcode, go to the **TARGETS > Project Name > Build Phases > Link Binary with Libraries*&#x2A; menu, and click &#x2A;*+** to add `AgoraRtmKit.xcframework`. Ensure that the **Embed** attribute of the dynamic library is **Embed & Sign**."
  }, {
    heading: "earlier-than-v144",
    content: "Copy the `AgoraRtmKit.framework` file in the `libs` folder to the project folder."
  }, {
    heading: "earlier-than-v144",
    content: "In Xcode, go to the **TARGETS > Project Name > Build Phases > Link Binary with Libraries*&#x2A; menu, and click &#x2A;*+** to add the following frameworks and libraries. To add the `AgoraRtmKit.framework` file, remember to click &#x2A;*Add Other...*&#x2A; after clicking &#x2A;*+**."
  }, {
    heading: "earlier-than-v144",
    content: "`AgoraRtmKit.framework`"
  }, {
    heading: "earlier-than-v144",
    content: "`libc++.tbd`"
  }, {
    heading: "earlier-than-v144",
    content: "`libresolv.tbd`"
  }, {
    heading: "earlier-than-v144",
    content: "`SystemConfiguration.framework`"
  }, {
    heading: "earlier-than-v144",
    content: "`CoreTelephony.framework`"
  }, {
    heading: "earlier-than-v144",
    content: "To manually install the Signaling SDK for macOS, do one of the following:"
  }, {
    heading: "automatically-integrate-the-sdk-with-cocoapods-1",
    content: "Ensure that you have installed CocoaPods."
  }, {
    heading: "automatically-integrate-the-sdk-with-cocoapods-1",
    content: "In Terminal, navigate to the project path, and run the `pod init` command to create a `Podfile` in the project folder."
  }, {
    heading: "automatically-integrate-the-sdk-with-cocoapods-1",
    content: "Open the `Podfile`, delete all contents, and input the following code:"
  }, {
    heading: "automatically-integrate-the-sdk-with-cocoapods-1",
    content: "Replace `Your App` with the target name of your project."
  }, {
    heading: "automatically-integrate-the-sdk-with-cocoapods-1",
    content: "Go back to Terminal, and run the `pod update` command to update the local libraries."
  }, {
    heading: "automatically-integrate-the-sdk-with-cocoapods-1",
    content: "Run the `pod install` command to install the Signaling SDK. Once you successfully install the SDK, it shows `Pod installation complete!` in Terminal, and you can see an `xcworkspace` file in the project folder."
  }, {
    heading: "automatically-integrate-the-sdk-with-cocoapods-1",
    content: "Open the generated `xcworkspace` file."
  }, {
    heading: "v144-or-later-1",
    content: "Apps integrated with Signaling SDK v1.4.4 cannot be published on the App Store due to review issues. If you want to publish your app on the App Store, you must use other versions of the SDK."
  }, {
    heading: "v144-or-later-1",
    content: "Extract the files in Signaling SDK to a local folder."
  }, {
    heading: "v144-or-later-1",
    content: "Copy `AgoraRtmKit.xcframework` from the SDK to your project."
  }, {
    heading: "v144-or-later-1",
    content: "Open Xcode, and navigate to **TARGETS > Project Name > General > Frameworks, Libraries, and Embedded Content**."
  }, {
    heading: "v144-or-later-1",
    content: "Click **+ > Add Other... > Add Files** to add the corresponding library. Ensure that the Embed attribute of the dynamic library is **Embed & Sign**."
  }, {
    heading: "v144-or-later-1",
    content: "Once the dynamic library is added, the project automatically links to other system libraries."
  }, {
    heading: "v144-or-later-1",
    content: "The SDK uses the XCFramework. **If you are using a build tool that does not support XCFramework integration**, Agora provides the following scripts to help you integrate:"
  }, {
    heading: "v144-or-later-1",
    content: "Use the `change_to_all_arch.sh` script to convert the XCFramework to the universal framework."
  }, {
    heading: "v144-or-later-1",
    content: "If you need to publish an app on the App Store, use the `remove_simulator_arch.sh` script to remove the simulator before packaging the app."
  }, {
    heading: "v144-or-later-1",
    content: "The steps to execute these scripts are as follows:"
  }, {
    heading: "v144-or-later-1",
    content: "Copy the above script files to your project, and execute the following code to generate `AgoraRtmKit.framework`:"
  }, {
    heading: "v144-or-later-1",
    content: "In Xcode, go to the **TARGETS > Project Name > Build Phases > Link Binary with Libraries*&#x2A; menu, and click &#x2A;*+** to add `AgoraRtmKit.xcframework`. Ensure that the **Embed** attribute of the dynamic library is **Embed & Sign**."
  }, {
    heading: "earlier-than-v144-1",
    content: "Copy the `AgoraRtmKit.framework` file in the `libs` folder to the project folder."
  }, {
    heading: "earlier-than-v144-1",
    content: "In Xcode, go to the **TARGETS > Project Name > Build Phases > Link Binary with Libraries*&#x2A; menu, and click &#x2A;*+** to add the following frameworks and libraries. To add the `AgoraRtmKit.framework` file, remember to click &#x2A;*Add Other...*&#x2A; after clicking &#x2A;*+**."
  }, {
    heading: "earlier-than-v144-1",
    content: "`AgoraRtmKit.framework`"
  }, {
    heading: "earlier-than-v144-1",
    content: "`libc++.tbd`"
  }, {
    heading: "earlier-than-v144-1",
    content: "`libresolv.tbd`"
  }, {
    heading: "earlier-than-v144-1",
    content: "`SystemConfiguration.framework`"
  }, {
    heading: "earlier-than-v144-1",
    content: "`CoreTelephony.framework`"
  }, {
    heading: "earlier-than-v144-1",
    content: "To install the Signaling SDK for Linux Java using Maven:"
  }, {
    heading: "earlier-than-v144-1",
    content: "Create a file named `pom.xml` in `RTM_quickstart` with the following content:"
  }, {
    heading: "earlier-than-v144-1",
    content: "Replace `x.y.z` with the specific SDK version number, such as `2.3.0`. To get the latest version number, check the Release notes."
  }, {
    heading: "earlier-than-v144-1",
    content: "The `artifactId` is architecture-specific. Use `rtm-java-aarch64` for aarch64 (arm64) devices, or `rtm-java-x86_64` for x86-64 devices."
  }, {
    heading: "earlier-than-v144-1",
    content: "Maven doesn't distribute the native libraries the SDK depends on, so download the SDK package separately, unzip it, and copy the `*.so` files to the `lib` folder."
  }, {
    heading: "earlier-than-v144-1",
    content: "To manually install the Signaling SDK for Linux C++:"
  }, {
    heading: "earlier-than-v144-1",
    content: "Extract the files in Agora Signaling SDK to a local folder."
  }, {
    heading: "earlier-than-v144-1",
    content: "Copy the `*.so` file in the SDK folder into your `lib` folder, and copy the `*.h` file in the SDK folder into your `include` folder."
  }, {
    heading: "earlier-than-v144-1",
    content: "Create a file named `CMakeLists.txt` under the `RTM_quickstart` directory to use CMake to build the project. The text file should contain the following content:"
  }, {
    heading: "earlier-than-v144-1",
    content: "To manually install the Signaling SDK for Windows:"
  }, {
    heading: "earlier-than-v144-1",
    content: "Extract the files in Agora Signaling SDK to a local folder."
  }, {
    heading: "earlier-than-v144-1",
    content: "Copy all subfolders of the SDK folder to the solution directory of your Visual Studio project."
  }, {
    heading: "earlier-than-v144-1",
    content: "Ensure that the subfolders are in the same location as your `*.sln` file."
  }, {
    heading: "earlier-than-v144-1",
    content: "Configure the project properties."
  }, {
    heading: "earlier-than-v144-1",
    content: "In Visual Studio, right-click the project name in the Solution Explorer window, click **Properties**, then click **OK**."
  }, {
    heading: "earlier-than-v144-1",
    content: "Select **C/C++ > General > Additional Include Directories**, then click **Edit**."
  }, {
    heading: "earlier-than-v144-1",
    content: "In the window, input `$(SolutionDir)include`."
  }, {
    heading: "earlier-than-v144-1",
    content: "Select **Linker > General > Additional Library Directories**, then click **Edit**."
  }, {
    heading: "earlier-than-v144-1",
    content: "In the window, input `$(SolutionDir)lib`."
  }, {
    heading: "earlier-than-v144-1",
    content: "Select **Linker > Input > Additional Dependencies**, then click **Edit**."
  }, {
    heading: "earlier-than-v144-1",
    content: "In the window, input `agora_rtm_sdk.lib`."
  }, {
    heading: "earlier-than-v144-1",
    content: "To manually install the Signaling SDK for Unity:"
  }, {
    heading: "earlier-than-v144-1",
    content: "Extract the latest version of the Agora Signaling SDK for Unity to a local folder."
  }, {
    heading: "earlier-than-v144-1",
    content: "In the Unity Editor, select **Assets** > **Import Package** > **Custom Package**."
  }, {
    heading: "earlier-than-v144-1",
    content: "Select the Agora Signaling Unity asset package and click **Open**."
  }, {
    heading: "earlier-than-v144-1",
    content: "All packages of the SDK are chosen by default. Uncheck the packages you do not need and click **Import**."
  }, {
    heading: "earlier-than-v144-1",
    content: "To manually install the Signaling SDK for Flutter:"
  }, {
    heading: "earlier-than-v144-1",
    content: "Open a terminal and execute the following command to create a new Flutter project:"
  }, {
    heading: "earlier-than-v144-1",
    content: "Open the project in your IDE. Add the Signaling SDK dependency to `pubspec.yaml` under `dependencies`:"
  }, {
    heading: "earlier-than-v144-1",
    content: "To integrate Signaling SDK version 2.2.1 or above and RTC SDK version 4.3.0 or above at the same time, refer to Handle integration issues."
  }, {
    heading: "earlier-than-v144-1",
    content: "To install the dependencies, open the terminal and execute the following command in the project path:"
  }],
  headings: [{
    id: "through-the-agora-website",
    content: "Through the Agora website"
  }, {
    id: "through-npm",
    content: "Through npm"
  }, {
    id: "automatically-integrate-the-sdk-with-maven-central",
    content: "Automatically integrate the SDK with Maven Central"
  }, {
    id: "manually-copy-the-sdk-files",
    content: "Manually copy the SDK files"
  }, {
    id: "automatically-integrate-the-sdk-with-cocoapods",
    content: "Automatically integrate the SDK with CocoaPods"
  }, {
    id: "manually-add-the-sdk-files",
    content: "Manually add the SDK files"
  }, {
    id: "v144-or-later",
    content: "v1.4.4 or later"
  }, {
    id: "earlier-than-v144",
    content: "Earlier than v1.4.4"
  }, {
    id: "automatically-integrate-the-sdk-with-cocoapods-1",
    content: "Automatically integrate the SDK with CocoaPods"
  }, {
    id: "manually-add-the-sdk-files-1",
    content: "Manually add the SDK files"
  }, {
    id: "v144-or-later-1",
    content: "v1.4.4 or later"
  }, {
    id: "earlier-than-v144-1",
    content: "Earlier than v1.4.4"
  }]
};
export let toc = [{
  depth: 2,
  url: "#through-the-agora-website",
  title: _jsx(_Fragment, {
    children: "Through the Agora website"
  })
}, {
  depth: 2,
  url: "#through-npm",
  title: _jsx(_Fragment, {
    children: "Through npm"
  })
}, {
  depth: 2,
  url: "#automatically-integrate-the-sdk-with-maven-central",
  title: _jsx(_Fragment, {
    children: "Automatically integrate the SDK with Maven Central"
  })
}, {
  depth: 2,
  url: "#manually-copy-the-sdk-files",
  title: _jsx(_Fragment, {
    children: "Manually copy the SDK files"
  })
}, {
  depth: 2,
  url: "#automatically-integrate-the-sdk-with-cocoapods",
  title: _jsx(_Fragment, {
    children: "Automatically integrate the SDK with CocoaPods"
  })
}, {
  depth: 2,
  url: "#manually-add-the-sdk-files",
  title: _jsx(_Fragment, {
    children: "Manually add the SDK files"
  })
}, {
  depth: 3,
  url: "#v144-or-later",
  title: _jsx(_Fragment, {
    children: "v1.4.4 or later"
  })
}, {
  depth: 3,
  url: "#earlier-than-v144",
  title: _jsx(_Fragment, {
    children: "Earlier than v1.4.4"
  })
}, {
  depth: 2,
  url: "#automatically-integrate-the-sdk-with-cocoapods-1",
  title: _jsx(_Fragment, {
    children: "Automatically integrate the SDK with CocoaPods"
  })
}, {
  depth: 2,
  url: "#manually-add-the-sdk-files-1",
  title: _jsx(_Fragment, {
    children: "Manually add the SDK files"
  })
}, {
  depth: 3,
  url: "#v144-or-later-1",
  title: _jsx(_Fragment, {
    children: "v1.4.4 or later"
  })
}, {
  depth: 3,
  url: "#earlier-than-v144-1",
  title: _jsx(_Fragment, {
    children: "Earlier than v1.4.4"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
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
  }, { CalloutContainer, CalloutDescription, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "web",
    platforms: '["web","android","ios","macos","linux-java","linux-cpp","windows","unity","flutter"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "web",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "web"
      }), _jsx(_components.p, {
        children: "To manually install the Signaling SDK for Web, do one of the following:"
      }), _jsx(_components.h2, {
        id: "through-the-agora-website",
        children: "Through the Agora website"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Extract the files in Agora ", _jsx(_components.a, {
              href: "/en/api-reference/sdks?product=signaling&platform=web",
              children: "Signaling SDK"
            }), " to a local folder. In the SDK folder, find the JS file in the ", _jsx(_components.code, {
              children: "libs"
            }), " folder, and save it to your project directory."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Open the HTML file in your project directory, and add the following code to refer to the JS file:"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
              children: _jsx(_components.code, {
                children: _jsxs(_components.span, {
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
                    children: "script"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " src"
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
                    children: '"path to the JS file"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "></"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "script"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
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
            children: "To enable smart completions and type checking, take the following steps:"
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Go to ", _jsx(_components.code, {
                  children: "libs/agora-rtm-sdk.d.ts"
                }), " in the SDK folder, and save the TS file to your project directory."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Add the following line to the beginning of the JS or TS file. Replace ", _jsx(_components.code, {
                  children: "path to the TS file"
                }), " with the path to ", _jsx(_components.code, {
                  children: "agora-rtm-sdk.d.ts"
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
                  icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
                  children: _jsx(_components.code, {
                    children: _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "/// <"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#22863A",
                          "--shiki-dark": "#85E89D"
                        },
                        children: "reference"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " path"
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
                        children: '"path to the TS file"'
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: " />"
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
`]
      }), _jsx(_components.h2, {
        id: "through-npm",
        children: "Through npm"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In ", _jsx(_components.code, {
              children: "package.json"
            }), " for your project, add ", _jsx(_components.code, {
              children: "agora-rtm-sdk"
            }), " and its version number to the ", _jsx(_components.code, {
              children: "dependencies"
            }), " field:"]
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
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"dependencies"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: '  "agora-rtm-sdk"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"^2.1.4-beta.0"'
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: '  "cors-anywhere"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"^0.4.4"'
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: '  "livereload-js"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"^4.0.1"'
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: '  "url"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"^0.11.1"'
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "},"
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
            children: "Install the dependencies:"
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
                    children: "pnpm"
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
`, _jsxs(_components.p, {
            children: ["In your code, import ", _jsx(_components.code, {
              children: "RTM"
            }), " from ", _jsx(_components.code, {
              children: "agora-rtm-sdk"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Import the SDK"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "import"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " AgoraRTM "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "from"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " 'agora-rtm-sdk'"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ";"
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
                    children: "// Create a client instance"
                  })
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
                    children: " signalingEngine"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " ="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " new"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " AgoraRTM."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "RTM"
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
                    children: "'app-id'"
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
                    children: "'user-id'"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", { token: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'temporary-token'"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " });"
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
                    children: "// Listen for events"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "signalingEngine."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "addEventListener"
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
                    children: "'message'"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", ("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: "eventArgs"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ") "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "=>"
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
                    children: "  console."
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
                    children: "`${"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "eventArgs"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "publisher"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "}: ${"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "eventArgs"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "message"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "}`"
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
                    children: "});"
                  })
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
                    children: "// Login"
                  })
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "  await"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " signalingEngine."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "login"
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
                    children: " (err) {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  console."
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
                    children: "({ err }, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'error occurs at login.'"
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
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Send channel message"
                  })
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "  await"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " signalingEngine."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "publish"
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
                    children: "'channel'"
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
                    children: "'hello world'"
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
                    children: " (err) {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  console."
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
                    children: "({ err }, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'error occurs at publish message'"
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
      platform: "android",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "android"
      }), _jsx(_components.p, {
        children: "To manually install the Signaling SDK for Android, do one of the following:"
      }), _jsx(_components.h2, {
        id: "automatically-integrate-the-sdk-with-maven-central",
        children: "Automatically integrate the SDK with Maven Central"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Open the ", _jsx(_components.code, {
              children: "settings.gradle"
            }), " file in the project's root directory and add the Maven Central dependency, if it doesn't already exist:"]
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "repositories"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    mavenCentral"
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
            children: ["Add the ", _jsx(_components.code, {
              children: "io.agora.rtm:rtm-sdk"
            }), " dependency in the ", _jsx(_components.code, {
              children: "/app/build.gradle"
            }), " file under your project. Replace ", _jsx(_components.code, {
              children: "x.y.z"
            }), " with the SDK version number, such as ", _jsx(_components.code, {
              children: "2.3.0"
            }), ". To get the latest version number, see the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtm/reference/release-notes",
              children: "Release notes"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "dependencies"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    implementation"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " 'io.agora.rtm:rtm-sdk:x.y.z'"
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
`, _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["To resolve integration issues when co-integrating with the RTC SDK, use ", _jsx(_components.code, {
                  children: "io.agora.rtm:rtm-sdk-lite"
                }), " instead."]
              })
            })
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "manually-copy-the-sdk-files",
        children: "Manually copy the SDK files"
      }), _jsx(_components.p, {
        children: "To manually install the Signaling SDK for Android from a downloaded package:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Extract ", _jsx(_components.a, {
              href: "/en/api-reference/sdks?product=signaling&platform=android",
              children: "Signaling SDK"
            }), " to a local directory, such as ", _jsx(_components.code, {
              children: "<unzipped_package>"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Copy the following files or folders from the ", _jsx(_components.code, {
              children: "rtm/sdk"
            }), " folder of the extracted package to your Android project."]
          }), `
`, _jsxs(_components.table, {
            children: [_jsx(_components.thead, {
              children: _jsxs(_components.tr, {
                children: [_jsx(_components.th, {
                  children: "File or folder"
                }), _jsx(_components.th, {
                  children: "Path in your project"
                })]
              })
            }), _jsxs(_components.tbody, {
              children: [_jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "agora-rtm-sdk.jar"
                  })
                }), _jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "/app/libs/"
                  })
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "/arm64-v8a/"
                  })
                }), _jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "~/app/src/main/jniLibs/arm64-v8a/"
                  })
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "/armeabi-v7a/"
                  })
                }), _jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "~/app/src/main/jniLibs/armeabi-v7a/"
                  })
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "/x86/"
                  })
                }), _jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "~/app/src/main/jniLibs/x86/"
                  })
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "/x86_64/"
                  })
                }), _jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "~/app/src/main/jniLibs/x86_64/"
                  })
                })]
              })]
            })]
          }), `
`, _jsxs(_components.p, {
            children: ["Each architecture folder contains ", _jsx(_components.code, {
              children: "libagora-rtm-sdk.so"
            }), " and ", _jsx(_components.code, {
              children: "libaosl.so"
            }), ". Copy both."]
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
      }), _jsx(_components.p, {
        children: "To manually install the Signaling SDK for iOS, do one of the following:"
      }), _jsx(_components.h2, {
        id: "automatically-integrate-the-sdk-with-cocoapods",
        children: "Automatically integrate the SDK with CocoaPods"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.a, {
              href: "https://guides.cocoapods.org/using/getting-started.html#getting-started",
              children: "Ensure that you have installed CocoaPods"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In Terminal, navigate to the project path, and run the ", _jsx(_components.code, {
              children: "pod init"
            }), " command to create a ", _jsx(_components.code, {
              children: "Podfile"
            }), " in the project folder."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Open the ", _jsx(_components.code, {
              children: "Podfile"
            }), ", delete all contents, and input the following code:"]
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
                    children: "target"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " 'Your App'"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " do"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    use_frameworks!"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    pod"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " 'AgoraRtm_iOS'"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "end"
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
            children: ["Replace ", _jsx(_components.code, {
              children: "Your App"
            }), " with the target name of your project."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Go back to Terminal, and run the ", _jsx(_components.code, {
              children: "pod update"
            }), " command to update the local libraries."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Run the ", _jsx(_components.code, {
              children: "pod install"
            }), " command to install the Signaling SDK. Once you successfully install the SDK, it shows ", _jsx(_components.code, {
              children: "Pod installation complete!"
            }), " in Terminal, and you can see an ", _jsx(_components.code, {
              children: "xcworkspace"
            }), " file in the project folder."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Open the generated ", _jsx(_components.code, {
              children: "xcworkspace"
            }), " file."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "manually-add-the-sdk-files",
        children: "Manually add the SDK files"
      }), _jsx(_components.h3, {
        id: "v144-or-later",
        children: "v1.4.4 or later"
      }), _jsx(_components.p, {
        children: "iOS apps integrated with Signaling SDK v1.4.4 cannot be published on the App Store due to review issues. If you want to publish your app on the App Store, you must use other versions of the SDK."
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Extract the files in ", _jsx(_components.a, {
              href: "/en/api-reference/sdks?product=signaling&platform=ios",
              children: "Signaling SDK"
            }), " to a local folder."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Copy ", _jsx(_components.code, {
              children: "AgoraRtmKit.xcframework"
            }), " from the SDK to your project."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Open Xcode, and navigate to ", _jsx(_components.strong, {
              children: "TARGETS > Project Name > General > Frameworks, Libraries, and Embedded Content"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Click ", _jsx(_components.strong, {
              children: "+ > Add Other... > Add Files"
            }), " to add the corresponding library. Ensure that the Embed attribute of the dynamic library is ", _jsx(_components.strong, {
              children: "Embed & Sign"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "Once the dynamic library is added, the project automatically links to other system libraries."
      }), _jsxs(_components.p, {
        children: ["The SDK uses the XCFramework. ", _jsx(_components.strong, {
          children: "If you are using a build tool that does not support XCFramework integration"
        }), ", Agora provides the following scripts to help you integrate:"]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["Use the ", _jsx(_components.code, {
            children: "change_to_all_arch.sh"
          }), " script to convert the XCFramework to the universal framework."]
        }), `
`, _jsxs(_components.li, {
          children: ["If you need to publish an iOS app on the App Store, use the ", _jsx(_components.code, {
            children: "remove_simulator_arch.sh"
          }), " script to remove the simulator before packaging the app."]
        }), `
`]
      }), _jsx(_components.p, {
        children: "The steps to execute these scripts are as follows:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Copy the above script files to your project, and execute the following code to generate ", _jsx(_components.code, {
              children: "AgoraRtmKit.framework"
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
              icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "sh"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " change_to_all_arch.sh"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: ' "<AgoraRtmKit.xcframework path>"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "sh"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " remove_simulator_arch.sh"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: ' "<AgoraRtmKit.framework path>"'
                  })]
                })]
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In Xcode, go to the ", _jsx(_components.strong, {
              children: "TARGETS > Project Name > Build Phases > Link Binary with Libraries"
            }), " menu, and click ", _jsx(_components.strong, {
              children: "+"
            }), " to add ", _jsx(_components.code, {
              children: "AgoraRtmKit.xcframework"
            }), ". Ensure that the ", _jsx(_components.strong, {
              children: "Embed"
            }), " attribute of the dynamic library is ", _jsx(_components.strong, {
              children: "Embed & Sign"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "earlier-than-v144",
        children: "Earlier than v1.4.4"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Copy the ", _jsx(_components.code, {
              children: "AgoraRtmKit.framework"
            }), " file in the ", _jsx(_components.code, {
              children: "libs"
            }), " folder to the project folder."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In Xcode, go to the ", _jsx(_components.strong, {
              children: "TARGETS > Project Name > Build Phases > Link Binary with Libraries"
            }), " menu, and click ", _jsx(_components.strong, {
              children: "+"
            }), " to add the following frameworks and libraries. To add the ", _jsx(_components.code, {
              children: "AgoraRtmKit.framework"
            }), " file, remember to click ", _jsx(_components.strong, {
              children: "Add Other..."
            }), " after clicking ", _jsx(_components.strong, {
              children: "+"
            }), "."]
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "AgoraRtmKit.framework"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "libc++.tbd"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "libresolv.tbd"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "SystemConfiguration.framework"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "CoreTelephony.framework"
              })
            }), `
`]
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
      }), _jsx(_components.p, {
        children: "To manually install the Signaling SDK for macOS, do one of the following:"
      }), _jsx(_components.h2, {
        id: "automatically-integrate-the-sdk-with-cocoapods-1",
        children: "Automatically integrate the SDK with CocoaPods"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.a, {
              href: "https://guides.cocoapods.org/using/getting-started.html#getting-started",
              children: "Ensure that you have installed CocoaPods"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In Terminal, navigate to the project path, and run the ", _jsx(_components.code, {
              children: "pod init"
            }), " command to create a ", _jsx(_components.code, {
              children: "Podfile"
            }), " in the project folder."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Open the ", _jsx(_components.code, {
              children: "Podfile"
            }), ", delete all contents, and input the following code:"]
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
                    children: "target"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " 'Your App'"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " do"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    use_frameworks!"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    pod"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " 'AgoraRtm_macOS'"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "end"
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
            children: ["Replace ", _jsx(_components.code, {
              children: "Your App"
            }), " with the target name of your project."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Go back to Terminal, and run the ", _jsx(_components.code, {
              children: "pod update"
            }), " command to update the local libraries."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Run the ", _jsx(_components.code, {
              children: "pod install"
            }), " command to install the Signaling SDK. Once you successfully install the SDK, it shows ", _jsx(_components.code, {
              children: "Pod installation complete!"
            }), " in Terminal, and you can see an ", _jsx(_components.code, {
              children: "xcworkspace"
            }), " file in the project folder."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Open the generated ", _jsx(_components.code, {
              children: "xcworkspace"
            }), " file."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "manually-add-the-sdk-files-1",
        children: "Manually add the SDK files"
      }), _jsx(_components.h3, {
        id: "v144-or-later-1",
        children: "v1.4.4 or later"
      }), _jsx(_components.p, {
        children: "Apps integrated with Signaling SDK v1.4.4 cannot be published on the App Store due to review issues. If you want to publish your app on the App Store, you must use other versions of the SDK."
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Extract the files in ", _jsx(_components.a, {
              href: "/en/api-reference/sdks?product=signaling&platform=macos",
              children: "Signaling SDK"
            }), " to a local folder."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Copy ", _jsx(_components.code, {
              children: "AgoraRtmKit.xcframework"
            }), " from the SDK to your project."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Open Xcode, and navigate to ", _jsx(_components.strong, {
              children: "TARGETS > Project Name > General > Frameworks, Libraries, and Embedded Content"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Click ", _jsx(_components.strong, {
              children: "+ > Add Other... > Add Files"
            }), " to add the corresponding library. Ensure that the Embed attribute of the dynamic library is ", _jsx(_components.strong, {
              children: "Embed & Sign"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "Once the dynamic library is added, the project automatically links to other system libraries."
      }), _jsxs(_components.p, {
        children: ["The SDK uses the XCFramework. ", _jsx(_components.strong, {
          children: "If you are using a build tool that does not support XCFramework integration"
        }), ", Agora provides the following scripts to help you integrate:"]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["Use the ", _jsx(_components.code, {
            children: "change_to_all_arch.sh"
          }), " script to convert the XCFramework to the universal framework."]
        }), `
`, _jsxs(_components.li, {
          children: ["If you need to publish an app on the App Store, use the ", _jsx(_components.code, {
            children: "remove_simulator_arch.sh"
          }), " script to remove the simulator before packaging the app."]
        }), `
`]
      }), _jsx(_components.p, {
        children: "The steps to execute these scripts are as follows:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Copy the above script files to your project, and execute the following code to generate ", _jsx(_components.code, {
              children: "AgoraRtmKit.framework"
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
              icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "sh"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " change_to_all_arch.sh"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: ' "<AgoraRtmKit.xcframework path>"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "sh"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " remove_simulator_arch.sh"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: ' "<AgoraRtmKit.framework path>"'
                  })]
                })]
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In Xcode, go to the ", _jsx(_components.strong, {
              children: "TARGETS > Project Name > Build Phases > Link Binary with Libraries"
            }), " menu, and click ", _jsx(_components.strong, {
              children: "+"
            }), " to add ", _jsx(_components.code, {
              children: "AgoraRtmKit.xcframework"
            }), ". Ensure that the ", _jsx(_components.strong, {
              children: "Embed"
            }), " attribute of the dynamic library is ", _jsx(_components.strong, {
              children: "Embed & Sign"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "earlier-than-v144-1",
        children: "Earlier than v1.4.4"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Copy the ", _jsx(_components.code, {
              children: "AgoraRtmKit.framework"
            }), " file in the ", _jsx(_components.code, {
              children: "libs"
            }), " folder to the project folder."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In Xcode, go to the ", _jsx(_components.strong, {
              children: "TARGETS > Project Name > Build Phases > Link Binary with Libraries"
            }), " menu, and click ", _jsx(_components.strong, {
              children: "+"
            }), " to add the following frameworks and libraries. To add the ", _jsx(_components.code, {
              children: "AgoraRtmKit.framework"
            }), " file, remember to click ", _jsx(_components.strong, {
              children: "Add Other..."
            }), " after clicking ", _jsx(_components.strong, {
              children: "+"
            }), "."]
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "AgoraRtmKit.framework"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "libc++.tbd"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "libresolv.tbd"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "SystemConfiguration.framework"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "CoreTelephony.framework"
              })
            }), `
`]
          }), `
`]
        }), `
`]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "linux-java",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "linux-java"
      }), _jsx(_components.p, {
        children: "To install the Signaling SDK for Linux Java using Maven:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Create a file named ", _jsx(_components.code, {
              children: "pom.xml"
            }), " in ", _jsx(_components.code, {
              children: "RTM_quickstart"
            }), " with the following content:"]
          }), `
`, _jsx(_Fragment, {
            children: _jsx(_components.pre, {
              className: "shiki shiki-themes github-light github-dark has-highlighted",
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
                    children: '"UTF-8"'
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
                    children: "project"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " xmlns"
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
                    children: '"http://maven.apache.org/POM/4.0.0"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "         xmlns:xsi"
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
                    children: '"http://www.w3.org/2001/XMLSchema-instance"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "         xsi:schemaLocation"
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
                    children: '"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
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
                    children: "modelVersion"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">4.0.0</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "modelVersion"
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
                    children: "    <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "groupId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">io.agora</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "groupId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
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
                    children: "artifactId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">RTM-Java-Demo</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "artifactId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
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
                    children: "version"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">1.0-SNAPSHOT</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "version"
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
                    children: "    <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "properties"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "project.build.sourceEncoding"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">UTF-8</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "project.build.sourceEncoding"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "maven.compiler.source"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">1.8</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "maven.compiler.source"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "maven.compiler.target"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">1.8</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "maven.compiler.target"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "properties"
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
                  className: "line highlighted",
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
                    children: "dependencies"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line highlighted",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "dependency"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line highlighted",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "groupId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">io.agora</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "groupId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line highlighted",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "artifactId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">rtm-java-aarch64</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "artifactId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line highlighted",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "version"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">x.y.z</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "version"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line highlighted",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "dependency"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line highlighted",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "dependencies"
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
                    children: "    <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "build"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "plugins"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "plugin"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "groupId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">org.apache.maven.plugins</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "groupId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "artifactId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">maven-shade-plugin</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "artifactId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "version"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">3.2.0</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "version"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "executions"
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
                    children: "                    <!-- Attach the shade into the package phase -->"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                    <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "execution"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "phase"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">package</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "phase"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "goals"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                            <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "goal"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">shade</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "goal"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                        </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "goals"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "configuration"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                            <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "transformers"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                                <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "transformer"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " implementation"
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
                    children: '"org.apache.maven.plugins.shade.resource.ManifestResourceTransformer"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                                    <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "mainClass"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">io.agora.RtmJavaDemo</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "mainClass"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                                </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "transformer"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                            </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "transformers"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                        </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "configuration"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                    </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "execution"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "executions"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "plugin"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "plugins"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "build"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
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
                    children: "project"
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
`, _jsxs(_components.p, {
            children: ["Replace ", _jsx(_components.code, {
              children: "x.y.z"
            }), " with the specific SDK version number, such as ", _jsx(_components.code, {
              children: "2.3.0"
            }), ". To get the latest version number, check the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtm/reference/release-notes",
              children: "Release notes"
            }), "."]
          }), `
`, _jsxs(_components.p, {
            children: ["The ", _jsx(_components.code, {
              children: "artifactId"
            }), " is architecture-specific. Use ", _jsx(_components.code, {
              children: "rtm-java-aarch64"
            }), " for aarch64 (arm64) devices, or ", _jsx(_components.code, {
              children: "rtm-java-x86_64"
            }), " for x86-64 devices."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Maven doesn't distribute the native libraries the SDK depends on, so ", _jsx(_components.a, {
              href: "/en/api-reference/sdks?product=signaling&platform=linux-java",
              children: "download"
            }), " the SDK package separately, unzip it, and copy the ", _jsx(_components.code, {
              children: "*.so"
            }), " files to the ", _jsx(_components.code, {
              children: "lib"
            }), " folder."]
          }), `
`]
        }), `
`]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "linux-cpp",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "linux-cpp"
      }), _jsx(_components.p, {
        children: "To manually install the Signaling SDK for Linux C++:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Extract the files in Agora ", _jsx(_components.a, {
              href: "/en/api-reference/sdks?product=signaling&platform=linux-cpp",
              children: "Signaling SDK"
            }), " to a local folder."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Copy the ", _jsx(_components.code, {
              children: "*.so"
            }), " file in the SDK folder into your ", _jsx(_components.code, {
              children: "lib"
            }), " folder, and copy the ", _jsx(_components.code, {
              children: "*.h"
            }), " file in the SDK folder into your ", _jsx(_components.code, {
              children: "include"
            }), " folder."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Create a file named ", _jsx(_components.code, {
              children: "CMakeLists.txt"
            }), " under the ", _jsx(_components.code, {
              children: "RTM_quickstart"
            }), " directory to use CMake to build the project. The text file should contain the following content:"]
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "cmake_minimum_required(VERSION"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " 2.8"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ")"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "project(rtmQuickstart"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ")"
                  })]
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
                    children: "set"
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
                    children: "TARGET_NAME"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " rtmQuickstart"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ")"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "set"
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
                    children: "SOURCES"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " rtmQuickstart.cpp"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ")"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "set"
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
                    children: "HEADERS"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ")"
                  })]
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
                    children: "set"
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
                    children: "TARGET_BUILD_TYPE"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: ' "Debug"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ")"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "set"
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
                    children: "CMAKE_CXX_FLAGS"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: ' "-fPIC -O2 -g -std=c++11 -msse2"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ")"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line"
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "include_directories($"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "{CMAKE_SOURCE_DIR}"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "/include"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ")"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "link_directories($"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "{CMAKE_SOURCE_DIR}"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "/lib"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ")"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line"
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "add_executable($"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "{TARGET_NAME}"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " ${SOURCES} ${HEADERS})"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "target_link_libraries($"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "{TARGET_NAME}"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " agora_rtm_sdk"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " pthread"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ")"
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
      platform: "windows",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "windows"
      }), _jsx(_components.p, {
        children: "To manually install the Signaling SDK for Windows:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Extract the files in Agora ", _jsx(_components.a, {
              href: "/en/api-reference/sdks?product=signaling&platform=windows",
              children: "Signaling SDK"
            }), " to a local folder."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Copy all subfolders of the SDK folder to the solution directory of your Visual Studio project."
          }), `
`, _jsxs(_components.p, {
            children: ["Ensure that the subfolders are in the same location as your ", _jsx(_components.code, {
              children: "*.sln"
            }), " file."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Configure the project properties."
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In Visual Studio, right-click the project name in the Solution Explorer window, click ", _jsx(_components.strong, {
                  children: "Properties"
                }), ", then click ", _jsx(_components.strong, {
                  children: "OK"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Select ", _jsx(_components.strong, {
                  children: "C/C++ > General > Additional Include Directories"
                }), ", then click ", _jsx(_components.strong, {
                  children: "Edit"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In the window, input ", _jsx(_components.code, {
                  children: "$(SolutionDir)include"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Select ", _jsx(_components.strong, {
                  children: "Linker > General > Additional Library Directories"
                }), ", then click ", _jsx(_components.strong, {
                  children: "Edit"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In the window, input ", _jsx(_components.code, {
                  children: "$(SolutionDir)lib"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Select ", _jsx(_components.strong, {
                  children: "Linker > Input > Additional Dependencies"
                }), ", then click ", _jsx(_components.strong, {
                  children: "Edit"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In the window, input ", _jsx(_components.code, {
                  children: "agora_rtm_sdk.lib"
                }), "."]
              }), `
`]
            }), `
`]
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
      }), _jsx(_components.p, {
        children: "To manually install the Signaling SDK for Unity:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Extract the latest version of the Agora ", _jsx(_components.a, {
              href: "/en/api-reference/sdks?product=signaling&platform=unity",
              children: "Signaling SDK for Unity"
            }), " to a local folder."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In the Unity Editor, select ", _jsx(_components.strong, {
              children: "Assets"
            }), " > ", _jsx(_components.strong, {
              children: "Import Package"
            }), " > ", _jsx(_components.strong, {
              children: "Custom Package"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Select the Agora Signaling Unity asset package and click ", _jsx(_components.strong, {
              children: "Open"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["All packages of the SDK are chosen by default. Uncheck the packages you do not need and click ", _jsx(_components.strong, {
              children: "Import"
            }), "."]
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
      }), _jsx(_components.p, {
        children: "To manually install the Signaling SDK for Flutter:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Open a terminal and execute the following command to create a new Flutter project:"
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
                    children: " create"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " project_name"
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
            children: ["Open the project in your IDE. Add the Signaling SDK dependency to ", _jsx(_components.code, {
              children: "pubspec.yaml"
            }), " under ", _jsx(_components.code, {
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
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "dependencies"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ":"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "  # Add the Signaling SDK dependency, use the latest version number"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "  agora_rtm"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "^2.2.1"
                  })]
                })]
              })
            })
          }), `
`]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["To integrate Signaling SDK version 2.2.1 or above and RTC SDK version 4.3.0 or above at the same time, refer to ", _jsx(_components.a, {
              href: "/en/api-reference/faq/integration/rtm2_rtc_integration_issue",
              children: "Handle integration issues"
            }), "."]
          })
        })
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "To install the dependencies, open the terminal and execute the following command in the project path:"
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
`]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
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
