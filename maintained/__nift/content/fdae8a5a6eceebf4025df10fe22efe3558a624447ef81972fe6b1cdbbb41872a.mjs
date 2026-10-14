import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Supported platforms",
  description: "A list of platforms supported by Signaling SDK."
};
export let _markdown = `

This section lists the platforms and products you use to develop apps that interact with Agora SDRTN®.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;web&#x22;,&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;windows&#x22;,&#x22;linux-cpp&#x22;,&#x22;linux-java&#x22;,&#x22;unity&#x22;]" showTabs="true">
  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    ### Supported browsers [#supported-browsers]

    Minimum supported versions:

    * Chrome
      * macOS 90.0.4430.72
      * Windows 90.0.4430.72
      * Linux 93.0
      * Android 97.0.4692.70
      * iOS 120.0.6099.199
    * Safari
      * macOS 15.6
      * iOS 15.6
    * Microsoft Edge
      * macOS 116.0.1938.81
      * Windows 116.0.1938.81
    * Firefox
      * macOS 85.0.1
      * Windows 85.0.1 (x64)

    ### Dependencies [#dependencies]

    When you integrate Signaling features into your app, Signaling SDK has the following dependencies:

    | Name                           | Minimum version | License               | Dependency |
    | :----------------------------- | :-------------- | :-------------------- | :--------- |
    | @thi.ng/cache                  | 1.0.70          | Apache 2.0            | Transitive |
    | @types/format-util             | 1.0.1           | MIT                   | Transitive |
    | @types/google-closure-compiler | 0.0.18          | MIT                   | Transitive |
    | @types/node-forge              | 1.3.1           | BSD 2-Clause          | Transitive |
    | abortcontroller-polyfill       | 1.7.1           | MIT                   | Transitive |
    | console-polyfill               | 0.3.0           | MIT                   | Transitive |
    | core-js                        | 3.9.0           | MIT                   | Transitive |
    | debug                          | 4.3.4           | MIT                   | Transitive |
    | dotenv                         | 8.2.0           | BSD 2-Clause          | Transitive |
    | events                         | 3.2.0           | MIT                   | Transitive |
    | format-util                    | 1.0.5           | MIT                   | Transitive |
    | gud                            | 1.0.0           | MIT                   | Transitive |
    | is-mobile                      | 3.1.1           | MIT                   | Transitive |
    | is-what                        | 3.14.1          | MIT                   | Transitive |
    | lodash                         | 4.17.21         | MIT                   | Transitive |
    | long                           | 4.0.0           | Apache 2.0            | Transitive |
    | lru-cache                      | 6.0.0           | ISC                   | Transitive |
    | never throw                    | 5.0.1           | MIT                   | Transitive |
    | node-forge                     | 1.3.1           | BSD 3-Clause or GPL 2 | Transitive |
    | promise-polyfill               | 8.2.0           | MIT                   | Transitive |
    | protobufjs                     | 6.10.2          | MIT                   | Transitive |
    | regenerator-runtime            | 0.13.9          | MIT                   | Transitive |
    | rxjs                           | 6.6.3           | Apache 2.0            | Transitive |
    | rxjs-etc                       | 10.6.0          | MIT                   | Transitive |
    | rxjs-websockets                | 8.0.1           | ISC                   | Transitive |
    | safe-json-stringify            | 1.2.0           | MIT                   | Transitive |
    | tslib                          | 2.1.0           | BSD Zero Clause       | Transitive |
    | uuid                           | 3.4.0           | MIT                   | Transitive |
    | webcrypto-shim                 | 0.1.6           | MIT                   | Transitive |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    | Target architecture                | Minimum version of the operating environment | Minimum operating system version |
    | :--------------------------------- | :------------------------------------------- | :------------------------------- |
    | armeabi-v7, arm64-v8a, x86, x86-64 | JVM 8                                        | Android 7.0                      |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    | Platform | Target architecture | Minimum operating system version |
    | :------- | :------------------ | :------------------------------- |
    | iOS      | armv7, arm64        | 11.0                             |
    | macOS    | x86-64, arm64       | 10.10                            |
    | VisionOS | arm64               | 1.0                              |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    | Platform | Target architecture | Minimum operating system version |
    | :------- | :------------------ | :------------------------------- |
    | iOS      | armv7, arm64        | 11.0                             |
    | macOS    | x86-64, arm64       | 10.10                            |
    | VisionOS | arm64               | 1.0                              |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    | Target Platform | Target architecture             | Minimum version of the development environment |
    | :-------------- | :------------------------------ | :--------------------------------------------- |
    | Android         | * armeabi-v7a
    * arm64-v8a
    * x86 | - macOS 10.15
    - Windows 10                     |
    | iOS             | -                               | macOS 10.15                                    |

    <CalloutContainer type="info">
      <CalloutDescription>
        * For further details on environment requirements, see [Install Flutter](https://docs.flutter.dev/get-started/install).
        * Execute the \`flutter doctor\` command to check that the development and running environments meet the requirements.
      </CalloutDescription>
    </CalloutContainer>

    ### Licensing [#licensing]

    | Name                  | Minimum Version | License                                                                | How to Obtain a License |
    | --------------------- | --------------- | ---------------------------------------------------------------------- | ----------------------- |
    | Flutter SDK           | 3.10.0          | [BSD 3-Clause](https://github.com/flutter/flutter/blob/master/LICENSE) | Download it yourself    |
    | Dart SDK              | 3.0             | [BSD 3-Clause](https://github.com/dart-lang/sdk/blob/master/LICENSE)   | Download it yourself    |
    | json\\_annotation      | 4.4.0           | [BSD-3-Clause](https://pub.dev/packages/json_annotation/license)       | Transitive Dependencies |
    | ffi                   | 1.1.2           | [BSD 3-Clause](https://pub.dev/packages/ffi/license)                   | Transitive Dependencies |
    | async                 | 2.8.2           | [BSD 3-Clause](https://pub.dev/packages/async/license)                 | Transitive Dependencies |
    | meta                  | 1.7.0           | [BSD 3-Clause](https://pub.dev/packages/meta/license)                  | Transitive Dependencies |
    | iris\\_method\\_channel | 2.2.0           | [MIT](https://pub.dev/packages/iris_method_channel/license)            | Transitive Dependencies |
    | flutter\\_lints        | 1.0.0           | [BSD 3-Clause](https://pub.dev/packages/flutter_lints/license)         | Transitive Dependencies |
    | build\\_runner         | 2.1.7           | [BSD 3-Clause](https://pub.dev/packages/build_runner/license)          | Transitive Dependencies |
    | json\\_serializable    | 6.1.1           | [BSD 3-Clause](https://pub.dev/packages/json_serializable/license)     | Transitive Dependencies |
    | ffigen                | 4.1.2           | [BSD 3-Clause](https://pub.dev/packages/ffigen/license)                | Transitive Dependencies |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    | Target Platform | Target architecture             | Minimum version of the development environment |
    | :-------------- | :------------------------------ | :--------------------------------------------- |
    | Android         | * armeabi-v7a
    * arm64-v8a
    * x86 | - macOS 10.15
    - Windows 10                     |
    | iOS             | -                               | macOS 10.15                                    |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    * *Platforms*:

      | Target Platform | Operating system version                                                               | IDE version                           |
      | :-------------- | :------------------------------------------------------------------------------------- | :------------------------------------ |
      | Windows         | Windows 10 or later. Signaling SDK supports the following architectures:- x86
      - x86-64 | Microsoft Visual Studio 2017 or later |

    * C++ 11 and above

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="linux-cpp">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="linux-cpp" />

    | Target architecture | Minimum version of the operating environment | Minimum operating system version                 |
    | :------------------ | :------------------------------------------- | :----------------------------------------------- |
    | x86-64              | C++ 14                                       | Ubuntu 18.04 LTS (64-bit) or Debian 9.9 (64-bit) |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="linux-java">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="linux-java" />

    | Target architecture     | Minimum version of the operating environment | Minimum operating system version                 |
    | :---------------------- | :------------------------------------------- | :----------------------------------------------- |
    | aarch64 (arm64), x86-64 | JVM 8                                        | Ubuntu 18.04 LTS (64-bit) or Debian 9.9 (64-bit) |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    | Name        | Minimum Version | License                                    | How to Obtain a License |
    | ----------- | --------------- | :----------------------------------------- | ----------------------- |
    | UnityEditor | 2018.4.26f1     | [Unity License](https://unity3d.com/legal) | User self-application   |

    * Android

      | Target Architecture                 | Scripting Runtime   | Minimum Operating System Version |
      | ----------------------------------- | ------------------- | -------------------------------- |
      | armeabi-v7a, arm64-v8a, x86, x86-64 | .NET 4.x Equivalent | Android 4.1                      |

    * iOS

      | Target Architecture | Scripting Runtime   | Minimum Operating System Version |
      | ------------------- | ------------------- | -------------------------------- |
      | arm64, armv7        | .NET 4.x Equivalent | iOS 9.0                          |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This section lists the platforms and products you use to develop apps that interact with Agora SDRTN®."
  }, {
    heading: "supported-browsers",
    content: "Minimum supported versions:"
  }, {
    heading: "supported-browsers",
    content: "Chrome"
  }, {
    heading: "supported-browsers",
    content: "macOS 90.0.4430.72"
  }, {
    heading: "supported-browsers",
    content: "Windows 90.0.4430.72"
  }, {
    heading: "supported-browsers",
    content: "Linux 93.0"
  }, {
    heading: "supported-browsers",
    content: "Android 97.0.4692.70"
  }, {
    heading: "supported-browsers",
    content: "iOS 120.0.6099.199"
  }, {
    heading: "supported-browsers",
    content: "Safari"
  }, {
    heading: "supported-browsers",
    content: "macOS 15.6"
  }, {
    heading: "supported-browsers",
    content: "iOS 15.6"
  }, {
    heading: "supported-browsers",
    content: "Microsoft Edge"
  }, {
    heading: "supported-browsers",
    content: "macOS 116.0.1938.81"
  }, {
    heading: "supported-browsers",
    content: "Windows 116.0.1938.81"
  }, {
    heading: "supported-browsers",
    content: "Firefox"
  }, {
    heading: "supported-browsers",
    content: "macOS 85.0.1"
  }, {
    heading: "supported-browsers",
    content: "Windows 85.0.1 (x64)"
  }, {
    heading: "dependencies",
    content: "When you integrate Signaling features into your app, Signaling SDK has the following dependencies:"
  }, {
    heading: "dependencies",
    content: "Name"
  }, {
    heading: "dependencies",
    content: "Minimum version"
  }, {
    heading: "dependencies",
    content: "License"
  }, {
    heading: "dependencies",
    content: "Dependency"
  }, {
    heading: "dependencies",
    content: "@thi.ng/cache"
  }, {
    heading: "dependencies",
    content: "1.0.70"
  }, {
    heading: "dependencies",
    content: "Apache 2.0"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "@types/format-util"
  }, {
    heading: "dependencies",
    content: "1.0.1"
  }, {
    heading: "dependencies",
    content: "MIT"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "@types/google-closure-compiler"
  }, {
    heading: "dependencies",
    content: "0.0.18"
  }, {
    heading: "dependencies",
    content: "MIT"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "@types/node-forge"
  }, {
    heading: "dependencies",
    content: "1.3.1"
  }, {
    heading: "dependencies",
    content: "BSD 2-Clause"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "abortcontroller-polyfill"
  }, {
    heading: "dependencies",
    content: "1.7.1"
  }, {
    heading: "dependencies",
    content: "MIT"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "console-polyfill"
  }, {
    heading: "dependencies",
    content: "0.3.0"
  }, {
    heading: "dependencies",
    content: "MIT"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "core-js"
  }, {
    heading: "dependencies",
    content: "3.9.0"
  }, {
    heading: "dependencies",
    content: "MIT"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "debug"
  }, {
    heading: "dependencies",
    content: "4.3.4"
  }, {
    heading: "dependencies",
    content: "MIT"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "dotenv"
  }, {
    heading: "dependencies",
    content: "8.2.0"
  }, {
    heading: "dependencies",
    content: "BSD 2-Clause"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "events"
  }, {
    heading: "dependencies",
    content: "3.2.0"
  }, {
    heading: "dependencies",
    content: "MIT"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "format-util"
  }, {
    heading: "dependencies",
    content: "1.0.5"
  }, {
    heading: "dependencies",
    content: "MIT"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "gud"
  }, {
    heading: "dependencies",
    content: "1.0.0"
  }, {
    heading: "dependencies",
    content: "MIT"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "is-mobile"
  }, {
    heading: "dependencies",
    content: "3.1.1"
  }, {
    heading: "dependencies",
    content: "MIT"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "is-what"
  }, {
    heading: "dependencies",
    content: "3.14.1"
  }, {
    heading: "dependencies",
    content: "MIT"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "lodash"
  }, {
    heading: "dependencies",
    content: "4.17.21"
  }, {
    heading: "dependencies",
    content: "MIT"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "long"
  }, {
    heading: "dependencies",
    content: "4.0.0"
  }, {
    heading: "dependencies",
    content: "Apache 2.0"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "lru-cache"
  }, {
    heading: "dependencies",
    content: "6.0.0"
  }, {
    heading: "dependencies",
    content: "ISC"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "never throw"
  }, {
    heading: "dependencies",
    content: "5.0.1"
  }, {
    heading: "dependencies",
    content: "MIT"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "node-forge"
  }, {
    heading: "dependencies",
    content: "1.3.1"
  }, {
    heading: "dependencies",
    content: "BSD 3-Clause or GPL 2"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "promise-polyfill"
  }, {
    heading: "dependencies",
    content: "8.2.0"
  }, {
    heading: "dependencies",
    content: "MIT"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "protobufjs"
  }, {
    heading: "dependencies",
    content: "6.10.2"
  }, {
    heading: "dependencies",
    content: "MIT"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "regenerator-runtime"
  }, {
    heading: "dependencies",
    content: "0.13.9"
  }, {
    heading: "dependencies",
    content: "MIT"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "rxjs"
  }, {
    heading: "dependencies",
    content: "6.6.3"
  }, {
    heading: "dependencies",
    content: "Apache 2.0"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "rxjs-etc"
  }, {
    heading: "dependencies",
    content: "10.6.0"
  }, {
    heading: "dependencies",
    content: "MIT"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "rxjs-websockets"
  }, {
    heading: "dependencies",
    content: "8.0.1"
  }, {
    heading: "dependencies",
    content: "ISC"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "safe-json-stringify"
  }, {
    heading: "dependencies",
    content: "1.2.0"
  }, {
    heading: "dependencies",
    content: "MIT"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "tslib"
  }, {
    heading: "dependencies",
    content: "2.1.0"
  }, {
    heading: "dependencies",
    content: "BSD Zero Clause"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "uuid"
  }, {
    heading: "dependencies",
    content: "3.4.0"
  }, {
    heading: "dependencies",
    content: "MIT"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "webcrypto-shim"
  }, {
    heading: "dependencies",
    content: "0.1.6"
  }, {
    heading: "dependencies",
    content: "MIT"
  }, {
    heading: "dependencies",
    content: "Transitive"
  }, {
    heading: "dependencies",
    content: "Target architecture"
  }, {
    heading: "dependencies",
    content: "Minimum version of the operating environment"
  }, {
    heading: "dependencies",
    content: "Minimum operating system version"
  }, {
    heading: "dependencies",
    content: "armeabi-v7, arm64-v8a, x86, x86-64"
  }, {
    heading: "dependencies",
    content: "JVM 8"
  }, {
    heading: "dependencies",
    content: "Android 7.0"
  }, {
    heading: "dependencies",
    content: "Platform"
  }, {
    heading: "dependencies",
    content: "Target architecture"
  }, {
    heading: "dependencies",
    content: "Minimum operating system version"
  }, {
    heading: "dependencies",
    content: "iOS"
  }, {
    heading: "dependencies",
    content: "armv7, arm64"
  }, {
    heading: "dependencies",
    content: "11.0"
  }, {
    heading: "dependencies",
    content: "macOS"
  }, {
    heading: "dependencies",
    content: "x86-64, arm64"
  }, {
    heading: "dependencies",
    content: "10.10"
  }, {
    heading: "dependencies",
    content: "VisionOS"
  }, {
    heading: "dependencies",
    content: "arm64"
  }, {
    heading: "dependencies",
    content: "1.0"
  }, {
    heading: "dependencies",
    content: "Platform"
  }, {
    heading: "dependencies",
    content: "Target architecture"
  }, {
    heading: "dependencies",
    content: "Minimum operating system version"
  }, {
    heading: "dependencies",
    content: "iOS"
  }, {
    heading: "dependencies",
    content: "armv7, arm64"
  }, {
    heading: "dependencies",
    content: "11.0"
  }, {
    heading: "dependencies",
    content: "macOS"
  }, {
    heading: "dependencies",
    content: "x86-64, arm64"
  }, {
    heading: "dependencies",
    content: "10.10"
  }, {
    heading: "dependencies",
    content: "VisionOS"
  }, {
    heading: "dependencies",
    content: "arm64"
  }, {
    heading: "dependencies",
    content: "1.0"
  }, {
    heading: "dependencies",
    content: "Target Platform"
  }, {
    heading: "dependencies",
    content: "Target architecture"
  }, {
    heading: "dependencies",
    content: "Minimum version of the development environment"
  }, {
    heading: "dependencies",
    content: "Android"
  }, {
    heading: "dependencies",
    content: `* armeabi-v7a
* arm64-v8a
* x86`
  }, {
    heading: "dependencies",
    content: `* macOS 10.15
* Windows 10`
  }, {
    heading: "dependencies",
    content: "iOS"
  }, {
    heading: "dependencies",
    content: "-"
  }, {
    heading: "dependencies",
    content: "macOS 10.15"
  }, {
    heading: "dependencies",
    content: "For further details on environment requirements, see Install Flutter."
  }, {
    heading: "dependencies",
    content: "Execute the `flutter doctor` command to check that the development and running environments meet the requirements."
  }, {
    heading: "licensing",
    content: "Name"
  }, {
    heading: "licensing",
    content: "Minimum Version"
  }, {
    heading: "licensing",
    content: "License"
  }, {
    heading: "licensing",
    content: "How to Obtain a License"
  }, {
    heading: "licensing",
    content: "Flutter SDK"
  }, {
    heading: "licensing",
    content: "3.10.0"
  }, {
    heading: "licensing",
    content: "BSD 3-Clause"
  }, {
    heading: "licensing",
    content: "Download it yourself"
  }, {
    heading: "licensing",
    content: "Dart SDK"
  }, {
    heading: "licensing",
    content: "3.0"
  }, {
    heading: "licensing",
    content: "BSD 3-Clause"
  }, {
    heading: "licensing",
    content: "Download it yourself"
  }, {
    heading: "licensing",
    content: "json\\_annotation"
  }, {
    heading: "licensing",
    content: "4.4.0"
  }, {
    heading: "licensing",
    content: "BSD-3-Clause"
  }, {
    heading: "licensing",
    content: "Transitive Dependencies"
  }, {
    heading: "licensing",
    content: "ffi"
  }, {
    heading: "licensing",
    content: "1.1.2"
  }, {
    heading: "licensing",
    content: "BSD 3-Clause"
  }, {
    heading: "licensing",
    content: "Transitive Dependencies"
  }, {
    heading: "licensing",
    content: "async"
  }, {
    heading: "licensing",
    content: "2.8.2"
  }, {
    heading: "licensing",
    content: "BSD 3-Clause"
  }, {
    heading: "licensing",
    content: "Transitive Dependencies"
  }, {
    heading: "licensing",
    content: "meta"
  }, {
    heading: "licensing",
    content: "1.7.0"
  }, {
    heading: "licensing",
    content: "BSD 3-Clause"
  }, {
    heading: "licensing",
    content: "Transitive Dependencies"
  }, {
    heading: "licensing",
    content: "iris\\_method\\_channel"
  }, {
    heading: "licensing",
    content: "2.2.0"
  }, {
    heading: "licensing",
    content: "MIT"
  }, {
    heading: "licensing",
    content: "Transitive Dependencies"
  }, {
    heading: "licensing",
    content: "flutter\\_lints"
  }, {
    heading: "licensing",
    content: "1.0.0"
  }, {
    heading: "licensing",
    content: "BSD 3-Clause"
  }, {
    heading: "licensing",
    content: "Transitive Dependencies"
  }, {
    heading: "licensing",
    content: "build\\_runner"
  }, {
    heading: "licensing",
    content: "2.1.7"
  }, {
    heading: "licensing",
    content: "BSD 3-Clause"
  }, {
    heading: "licensing",
    content: "Transitive Dependencies"
  }, {
    heading: "licensing",
    content: "json\\_serializable"
  }, {
    heading: "licensing",
    content: "6.1.1"
  }, {
    heading: "licensing",
    content: "BSD 3-Clause"
  }, {
    heading: "licensing",
    content: "Transitive Dependencies"
  }, {
    heading: "licensing",
    content: "ffigen"
  }, {
    heading: "licensing",
    content: "4.1.2"
  }, {
    heading: "licensing",
    content: "BSD 3-Clause"
  }, {
    heading: "licensing",
    content: "Transitive Dependencies"
  }, {
    heading: "licensing",
    content: "Target Platform"
  }, {
    heading: "licensing",
    content: "Target architecture"
  }, {
    heading: "licensing",
    content: "Minimum version of the development environment"
  }, {
    heading: "licensing",
    content: "Android"
  }, {
    heading: "licensing",
    content: `* armeabi-v7a
* arm64-v8a
* x86`
  }, {
    heading: "licensing",
    content: `* macOS 10.15
* Windows 10`
  }, {
    heading: "licensing",
    content: "iOS"
  }, {
    heading: "licensing",
    content: "-"
  }, {
    heading: "licensing",
    content: "macOS 10.15"
  }, {
    heading: "licensing",
    content: "*Platforms*:"
  }, {
    heading: "licensing",
    content: "Target Platform"
  }, {
    heading: "licensing",
    content: "Operating system version"
  }, {
    heading: "licensing",
    content: "IDE version"
  }, {
    heading: "licensing",
    content: "Windows"
  }, {
    heading: "licensing",
    content: `Windows 10 or later. Signaling SDK supports the following architectures:- x86
- x86-64`
  }, {
    heading: "licensing",
    content: "Microsoft Visual Studio 2017 or later"
  }, {
    heading: "licensing",
    content: "C++ 11 and above"
  }, {
    heading: "licensing",
    content: "Target architecture"
  }, {
    heading: "licensing",
    content: "Minimum version of the operating environment"
  }, {
    heading: "licensing",
    content: "Minimum operating system version"
  }, {
    heading: "licensing",
    content: "x86-64"
  }, {
    heading: "licensing",
    content: "C++ 14"
  }, {
    heading: "licensing",
    content: "Ubuntu 18.04 LTS (64-bit) or Debian 9.9 (64-bit)"
  }, {
    heading: "licensing",
    content: "Target architecture"
  }, {
    heading: "licensing",
    content: "Minimum version of the operating environment"
  }, {
    heading: "licensing",
    content: "Minimum operating system version"
  }, {
    heading: "licensing",
    content: "aarch64 (arm64), x86-64"
  }, {
    heading: "licensing",
    content: "JVM 8"
  }, {
    heading: "licensing",
    content: "Ubuntu 18.04 LTS (64-bit) or Debian 9.9 (64-bit)"
  }, {
    heading: "licensing",
    content: "Name"
  }, {
    heading: "licensing",
    content: "Minimum Version"
  }, {
    heading: "licensing",
    content: "License"
  }, {
    heading: "licensing",
    content: "How to Obtain a License"
  }, {
    heading: "licensing",
    content: "UnityEditor"
  }, {
    heading: "licensing",
    content: "2018.4.26f1"
  }, {
    heading: "licensing",
    content: "Unity License"
  }, {
    heading: "licensing",
    content: "User self-application"
  }, {
    heading: "licensing",
    content: "Android"
  }, {
    heading: "licensing",
    content: "Target Architecture"
  }, {
    heading: "licensing",
    content: "Scripting Runtime"
  }, {
    heading: "licensing",
    content: "Minimum Operating System Version"
  }, {
    heading: "licensing",
    content: "armeabi-v7a, arm64-v8a, x86, x86-64"
  }, {
    heading: "licensing",
    content: ".NET 4.x Equivalent"
  }, {
    heading: "licensing",
    content: "Android 4.1"
  }, {
    heading: "licensing",
    content: "iOS"
  }, {
    heading: "licensing",
    content: "Target Architecture"
  }, {
    heading: "licensing",
    content: "Scripting Runtime"
  }, {
    heading: "licensing",
    content: "Minimum Operating System Version"
  }, {
    heading: "licensing",
    content: "arm64, armv7"
  }, {
    heading: "licensing",
    content: ".NET 4.x Equivalent"
  }, {
    heading: "licensing",
    content: "iOS 9.0"
  }],
  headings: [{
    id: "supported-browsers",
    content: "Supported browsers"
  }, {
    id: "dependencies",
    content: "Dependencies"
  }, {
    id: "licensing",
    content: "Licensing"
  }]
};
export let toc = [{
  depth: 3,
  url: "#supported-browsers",
  title: _jsx(_Fragment, {
    children: "Supported browsers"
  })
}, {
  depth: 3,
  url: "#dependencies",
  title: _jsx(_Fragment, {
    children: "Dependencies"
  })
}, {
  depth: 3,
  url: "#licensing",
  title: _jsx(_Fragment, {
    children: "Licensing"
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
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This section lists the platforms and products you use to develop apps that interact with Agora SDRTN®."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["web","android","ios","macos","flutter","react-native","windows","linux-cpp","linux-java","unity"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "web",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "web"
        }), _jsx(_components.h3, {
          id: "supported-browsers",
          children: "Supported browsers"
        }), _jsx(_components.p, {
          children: "Minimum supported versions:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Chrome", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "macOS 90.0.4430.72"
              }), `
`, _jsx(_components.li, {
                children: "Windows 90.0.4430.72"
              }), `
`, _jsx(_components.li, {
                children: "Linux 93.0"
              }), `
`, _jsx(_components.li, {
                children: "Android 97.0.4692.70"
              }), `
`, _jsx(_components.li, {
                children: "iOS 120.0.6099.199"
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: ["Safari", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "macOS 15.6"
              }), `
`, _jsx(_components.li, {
                children: "iOS 15.6"
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: ["Microsoft Edge", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "macOS 116.0.1938.81"
              }), `
`, _jsx(_components.li, {
                children: "Windows 116.0.1938.81"
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: ["Firefox", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "macOS 85.0.1"
              }), `
`, _jsx(_components.li, {
                children: "Windows 85.0.1 (x64)"
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "dependencies",
          children: "Dependencies"
        }), _jsx(_components.p, {
          children: "When you integrate Signaling features into your app, Signaling SDK has the following dependencies:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Name"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Minimum version"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "License"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Dependency"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "@thi.ng/cache"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "1.0.70"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Apache 2.0"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "@types/format-util"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "1.0.1"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "MIT"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "@types/google-closure-compiler"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "0.0.18"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "MIT"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "@types/node-forge"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "1.3.1"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "BSD 2-Clause"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "abortcontroller-polyfill"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "1.7.1"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "MIT"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "console-polyfill"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "0.3.0"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "MIT"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "core-js"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "3.9.0"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "MIT"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "debug"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "4.3.4"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "MIT"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "dotenv"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "8.2.0"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "BSD 2-Clause"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "events"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "3.2.0"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "MIT"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "format-util"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "1.0.5"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "MIT"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "gud"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "1.0.0"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "MIT"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "is-mobile"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "3.1.1"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "MIT"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "is-what"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "3.14.1"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "MIT"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "lodash"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "4.17.21"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "MIT"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "long"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "4.0.0"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Apache 2.0"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "lru-cache"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "6.0.0"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "ISC"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "never throw"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "5.0.1"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "MIT"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "node-forge"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "1.3.1"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "BSD 3-Clause or GPL 2"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "promise-polyfill"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "8.2.0"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "MIT"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "protobufjs"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "6.10.2"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "MIT"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "regenerator-runtime"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "0.13.9"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "MIT"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "rxjs"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "6.6.3"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Apache 2.0"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "rxjs-etc"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "10.6.0"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "MIT"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "rxjs-websockets"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "8.0.1"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "ISC"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "safe-json-stringify"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "1.2.0"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "MIT"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "tslib"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "2.1.0"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "BSD Zero Clause"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "uuid"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "3.4.0"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "MIT"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "webcrypto-shim"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "0.1.6"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "MIT"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Transitive"
              })]
            })]
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
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Target architecture"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Minimum version of the operating environment"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Minimum operating system version"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "armeabi-v7, arm64-v8a, x86, x86-64"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "JVM 8"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Android 7.0"
              })]
            })
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "ios",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "ios"
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
                children: "Target architecture"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Minimum operating system version"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "iOS"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "armv7, arm64"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "11.0"
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
                children: "x86-64, arm64"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "10.10"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "VisionOS"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "arm64"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "1.0"
              })]
            })]
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "macos",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "macos"
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
                children: "Target architecture"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Minimum operating system version"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "iOS"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "armv7, arm64"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "11.0"
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
                children: "x86-64, arm64"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "10.10"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "VisionOS"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "arm64"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "1.0"
              })]
            })]
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "flutter",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "flutter"
        }), _jsxs(_components.table, {
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
                children: "Target architecture"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Minimum version of the development environment"
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
                    children: "armeabi-v7a"
                  }), `
`, _jsx(_components.li, {
                    children: "arm64-v8a"
                  }), `
`, _jsx(_components.li, {
                    children: "x86"
                  }), `
`]
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "macOS 10.15"
                  }), `
`, _jsx(_components.li, {
                    children: "Windows 10"
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
                children: "-"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "macOS 10.15"
              })]
            })]
          })]
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["For further details on environment requirements, see ", _jsx(_components.a, {
                  href: "https://docs.flutter.dev/get-started/install",
                  children: "Install Flutter"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: ["Execute the ", _jsx(_components.code, {
                  children: "flutter doctor"
                }), " command to check that the development and running environments meet the requirements."]
              }), `
`]
            })
          })
        }), _jsx(_components.h3, {
          id: "licensing",
          children: "Licensing"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Name"
              }), _jsx(_components.th, {
                children: "Minimum Version"
              }), _jsx(_components.th, {
                children: "License"
              }), _jsx(_components.th, {
                children: "How to Obtain a License"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Flutter SDK"
              }), _jsx(_components.td, {
                children: "3.10.0"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/flutter/flutter/blob/master/LICENSE",
                  children: "BSD 3-Clause"
                })
              }), _jsx(_components.td, {
                children: "Download it yourself"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Dart SDK"
              }), _jsx(_components.td, {
                children: "3.0"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/dart-lang/sdk/blob/master/LICENSE",
                  children: "BSD 3-Clause"
                })
              }), _jsx(_components.td, {
                children: "Download it yourself"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "json_annotation"
              }), _jsx(_components.td, {
                children: "4.4.0"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://pub.dev/packages/json_annotation/license",
                  children: "BSD-3-Clause"
                })
              }), _jsx(_components.td, {
                children: "Transitive Dependencies"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "ffi"
              }), _jsx(_components.td, {
                children: "1.1.2"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://pub.dev/packages/ffi/license",
                  children: "BSD 3-Clause"
                })
              }), _jsx(_components.td, {
                children: "Transitive Dependencies"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "async"
              }), _jsx(_components.td, {
                children: "2.8.2"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://pub.dev/packages/async/license",
                  children: "BSD 3-Clause"
                })
              }), _jsx(_components.td, {
                children: "Transitive Dependencies"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "meta"
              }), _jsx(_components.td, {
                children: "1.7.0"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://pub.dev/packages/meta/license",
                  children: "BSD 3-Clause"
                })
              }), _jsx(_components.td, {
                children: "Transitive Dependencies"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "iris_method_channel"
              }), _jsx(_components.td, {
                children: "2.2.0"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://pub.dev/packages/iris_method_channel/license",
                  children: "MIT"
                })
              }), _jsx(_components.td, {
                children: "Transitive Dependencies"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "flutter_lints"
              }), _jsx(_components.td, {
                children: "1.0.0"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://pub.dev/packages/flutter_lints/license",
                  children: "BSD 3-Clause"
                })
              }), _jsx(_components.td, {
                children: "Transitive Dependencies"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "build_runner"
              }), _jsx(_components.td, {
                children: "2.1.7"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://pub.dev/packages/build_runner/license",
                  children: "BSD 3-Clause"
                })
              }), _jsx(_components.td, {
                children: "Transitive Dependencies"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "json_serializable"
              }), _jsx(_components.td, {
                children: "6.1.1"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://pub.dev/packages/json_serializable/license",
                  children: "BSD 3-Clause"
                })
              }), _jsx(_components.td, {
                children: "Transitive Dependencies"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "ffigen"
              }), _jsx(_components.td, {
                children: "4.1.2"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://pub.dev/packages/ffigen/license",
                  children: "BSD 3-Clause"
                })
              }), _jsx(_components.td, {
                children: "Transitive Dependencies"
              })]
            })]
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "react-native",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "react-native"
        }), _jsxs(_components.table, {
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
                children: "Target architecture"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Minimum version of the development environment"
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
                    children: "armeabi-v7a"
                  }), `
`, _jsx(_components.li, {
                    children: "arm64-v8a"
                  }), `
`, _jsx(_components.li, {
                    children: "x86"
                  }), `
`]
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "macOS 10.15"
                  }), `
`, _jsx(_components.li, {
                    children: "Windows 10"
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
                children: "-"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "macOS 10.15"
              })]
            })]
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
                      children: "Windows 10 or later. Signaling SDK supports the following architectures:"
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
`, _jsx(_components.p, {
              children: "C++ 11 and above"
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
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Target architecture"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Minimum version of the operating environment"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Minimum operating system version"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "x86-64"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "C++ 14"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Ubuntu 18.04 LTS (64-bit) or Debian 9.9 (64-bit)"
              })]
            })
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "linux-java",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "linux-java"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Target architecture"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Minimum version of the operating environment"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Minimum operating system version"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "aarch64 (arm64), x86-64"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "JVM 8"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Ubuntu 18.04 LTS (64-bit) or Debian 9.9 (64-bit)"
              })]
            })
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "unity",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "unity"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Name"
              }), _jsx(_components.th, {
                children: "Minimum Version"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "License"
              }), _jsx(_components.th, {
                children: "How to Obtain a License"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "UnityEditor"
              }), _jsx(_components.td, {
                children: "2018.4.26f1"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.a, {
                  href: "https://unity3d.com/legal",
                  children: "Unity License"
                })
              }), _jsx(_components.td, {
                children: "User self-application"
              })]
            })
          })]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Android"
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    children: "Target Architecture"
                  }), _jsx(_components.th, {
                    children: "Scripting Runtime"
                  }), _jsx(_components.th, {
                    children: "Minimum Operating System Version"
                  })]
                })
              }), _jsx(_components.tbody, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: "armeabi-v7a, arm64-v8a, x86, x86-64"
                  }), _jsx(_components.td, {
                    children: ".NET 4.x Equivalent"
                  }), _jsx(_components.td, {
                    children: "Android 4.1"
                  })]
                })
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "iOS"
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    children: "Target Architecture"
                  }), _jsx(_components.th, {
                    children: "Scripting Runtime"
                  }), _jsx(_components.th, {
                    children: "Minimum Operating System Version"
                  })]
                })
              }), _jsx(_components.tbody, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: "arm64, armv7"
                  }), _jsx(_components.td, {
                    children: ".NET 4.x Equivalent"
                  }), _jsx(_components.td, {
                    children: "iOS 9.0"
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
