import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "SDK logs",
  description: "Collect SDK logs for trouble shooting."
};
export let _markdown = '\n\n<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;web&#x22;,&#x22;react-native&#x22;,&#x22;windows&#x22;,&#x22;unity&#x22;,&#x22;flutter&#x22;]" showTabs="true">\n  <_PlatformPanel platform="android">\n    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />\n\n    If you’re troubleshooting an issue with the Agora Chat SDK, Agora support team might ask you to send the SDK logs. Logs record information about events that occurred in the SDK. These include errors and warnings as well as informational events.\n\n    By default, the SDK generates three log files, `easemob.log` and two `easemob_Y-m-d_H-M-S.log` files, each with a maximum size of 2048 KB (2 MB). These log files are encoded in UTF-8. The SDK writes the latest logs in `easemob.log`. When `easemob.log` is full, the SDK renames it to the name of the current time-dependent log file. If there are more than three log files, the SDK deletes the earliest log file, and creates a new `easemob.log` to record the latest logs.\n\n    For example, the SDK generates `easemob.log` to record logs at 8:00:00 a.m. on January 1, 2024. If this file is completely written at 8:30:00 a.m., the SDK renames it `easemob_2024-01-01_08-30-00.log`. At 9:30:00 a.m. and 10:30:30 a.m., the SDK generates `easemob_2024-01-01_09-30-30.log` and `easemob_2024-01-01_10-30-30.log`. At this time, `easemob_2024-01-01_08-30-00.log` will be removed before the SDK generates `easemob.log` to record the latest logs.\n\n    ## Collect SDK logs [#collect-sdk-logs]\n\n    To access SDK logs, take the following steps:\n\n    1. Enable the debug mode.\n\n       In this mode, the SDK outputs all types of logs, including debugging information, warnings, and errors.\n\n       ```java\n       ChatClient.getInstance().setDebugMode(true);\n       ```\n\n       If you only require error logs, disable the debug mode.\n\n       ```java\n       ChatClient.getInstance().setDebugMode(false);\n       ```\n\n    2. Get local logs.\n\n       Open the logs directory `/sdcard/Android/data/{package name}/{appkey}/core_log/` which contains the SDK logs.\n\n       ```bash\n       adb pull /sdcard/android/data/{package name}/{appkey}/core_log\n       ```\n\n    <_PlatformProcessedMarker close="true" />\n  </_PlatformPanel>\n\n  <_PlatformPanel platform="ios">\n    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />\n\n    If you’re troubleshooting an issue with the Agora Chat SDK, Agora support team might ask you to send the SDK logs. Logs record information about events that occurred in the SDK. These include errors and warnings as well as informational events.\n\n    By default, the SDK generates three log files, `easemob.log` and two `easemob_Y-m-d_H-M-S.log` files, each with a maximum size of 2048 KB (2 MB). These log files are encoded in UTF-8. The SDK writes the latest logs in `easemob.log`. When `easemob.log` is full, the SDK renames it to the name of the current time-dependent log file. If there are more than three log files, the SDK deletes the earliest log file, and creates a new `easemob.log` to record the latest logs.\n\n    For example, the SDK generates `easemob.log` to record logs at 8:00:00 a.m. on January 1, 2024. If this file is completely written at 8:30:00 a.m., the SDK renames it `easemob_2024-01-01_08-30-00.log`. At 9:30:00 a.m. and 10:30:30 a.m., the SDK generates `easemob_2024-01-01_09-30-30.log` and `easemob_2024-01-01_10-30-30.log`. At this time, `easemob_2024-01-01_08-30-00.log` will be removed before the SDK generates `easemob.log` to record the latest logs.\n\n    `AgoraChatOptions#AgoraChatLogLevel` specifies the log level for output.\n\n    * (default) `AgoraChatLogLevelDebug`: All logs;\n    * `AgoraChatLogLevelWarning`: Warnings and errors.\n    * `AgoraChatLogLevelError`: Errors.\n\n    If you want to output SDK logs on the XCode console, you can enable log output during SDK initialization.\n\n    ```objc\n    AgoraChatOptions* option = [AgoraChatOptions optionsWithAppkey:@""];\n    // Output logs on the XCode console\n    option.enableConsoleLog = YES;\n    // Set the log level. The default value is `AgoraChatLogLevelDebug`, indicating all logs are output.\n    option.logLevel = AgoraChatLogLevelDebug;\n    [ChatClient.sharedClient initializeSDKWithOptions:option];\n    ```\n\n    ## Collect SDK logs [#collect-sdk-logs-1]\n\n    Here, a simulator is used as an example.\n    To access SDK logs, take the following steps:\n\n    1. Copy the app sandbox path printed by `NSHomeDirectory()`.\n    2. In the Finder on your Mac system, select **Go > Go to Folder**.\n    3. Press **Ctrl+V** to paste the path and press **Return**.\n    4. Open the logs directory `{app sandbox path}/Library/Application Support/HyphenateSDK/easemobLog/` which contains the SDK logs.\n\n    <_PlatformProcessedMarker close="true" />\n  </_PlatformPanel>\n\n  <_PlatformPanel platform="web">\n    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />\n\n    If you’re troubleshooting an issue with the Agora Chat SDK, Agora support team might ask you to send the SDK logs. Logs record information about events that occurred in the SDK. These include errors and warnings as well as informational events.\n\n    ## Collecting SDK logs [#collecting-sdk-logs]\n\n    * Enable log output:\n\n      ```javascript\n      AC.logger.enableAll();\n      ```\n\n    * Disable log output:\n\n      ```javascript\n      AC.logger.disableAll();\n      ```\n\n    * Set the level of logs to be output:\n\n      ```javascript\n      // 0 - 5 or \'TRACE\'，\'DEBUG\'，\'INFO\'，\'WARN\'，\'ERROR\'，\'SILENT\'.\n      AC.logger.setLevel(0);\n      ```\n\n    * Set whether to cache logs:\n\n      ```javascript\n      AC.logger.setConfig({\n        useCache: false, // Whether to cache logs.\n        maxCache: 3 * 1024 * 1024, // The maximum number of bytes of logs that can be cached.\n      });\n      // Cache logs of all levels\n      AC.logger.setLevel(0);\n      ```\n\n    * Download logs:\n\n      ```javascript\n      AC.logger.download();\n      ```\n\n    <_PlatformProcessedMarker close="true" />\n  </_PlatformPanel>\n\n  <_PlatformPanel platform="react-native">\n    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />\n\n    If you’re troubleshooting an issue with the Agora Chat SDK, Agora support team might ask you to send the SDK logs. Logs record information about events that occurred in the SDK. These include errors and warnings as well as informational events.\n\n    ## Collect SDK logs [#collect-sdk-logs-2]\n\n    To output logs on the console, you need to enable the debug mode by setting `debugModel` to `true` during SDK initialization.\n\n    ```typescript\n    chatlog.log(`${ChatClient.TAG}: login: `, userName, "******", isPassword);\n    ```\n\n    <_PlatformProcessedMarker close="true" />\n  </_PlatformPanel>\n\n  <_PlatformPanel platform="windows">\n    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />\n\n    If you’re troubleshooting an issue with the Agora Chat SDK, Agora support team might ask you to send the SDK logs. Logs record information about events that occurred in the SDK. These include errors and warnings as well as informational events.\n\n    By default, the SDK generates three log files, `easemob.log` and two `easemob_YYYY-MM-DD_HH-MM-SS.log` files, each with a maximum size of 2048 KB (2 MB). These log files are encoded in UTF-8. The SDK writes the latest logs in `easemob.log`. When `easemob.log` is full, the SDK renames it to the name of the current time-dependent log file. If there are more than three log files, the SDK deletes the earliest log file, and creates a new `easemob.log` to record the latest logs.\n\n    For example, the SDK generates `easemob.log` to record logs at 8:00:00 a.m. on January 1, 2024. If this file is completely written at 8:30:00 a.m., the SDK renames it `easemob_2024-01-01_08-30-00.log`. At 9:30:00 a.m. and 10:30:30 a.m., the SDK generates `easemob_2024-01-01_09-30-30.log` and `easemob_2024-01-01_10-30-30.log`. At this time, `easemob_2024-01-01_08-30-00.log` will be removed before the SDK generates `easemob.log` to record the latest logs.\n\n    In debugging mode, the SDK outputs all types of logs, including debugging information, warnings, and errors. By default, the SDK only outputs error logs. Therefore, to output all logs, enable the debugging mode.\n\n    ```csharp\n    Options options = new Options("YourAppKey");\n    options.DebugMode = true;\n    SDKClient.Instance.InitWithOptions(options);\n    ```\n\n    ## Collect SDK logs [#collect-sdk-logs-3]\n\n    Windows SDK logs reside in the `sdkdata\\easemobLog` directory which is at the same level as the directory of the executable program.\n\n    <_PlatformProcessedMarker close="true" />\n  </_PlatformPanel>\n\n  <_PlatformPanel platform="unity">\n    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />\n\n    If you’re troubleshooting an issue with the Agora Chat SDK, Agora support team might ask you to send the SDK logs. Logs record information about events that occurred in the SDK. These include errors and warnings as well as informational events.\n\n    By default, the SDK generates three log files, `easemob.log` and two `easemob_Y-m-d_H-M-S.log` files, each with a maximum size of 2048 KB (2 MB). These log files are encoded in UTF-8. The SDK writes the latest logs in `easemob.log`. When `easemob.log` is full, the SDK renames it to the name of the current time-dependent log file. If there are more than three log files, the SDK deletes the earliest log file, and creates a new `easemob.log` to record the latest logs.\n\n    For example, the SDK generates `easemob.log` to record logs at 8:00:00 a.m. on January 1, 2024. If this file is completely written at 8:30:00 a.m., the SDK renames it `easemob_2024-01-01_08-30-00.log`. At 9:30:00 a.m. and 10:30:30 a.m., the SDK generates `easemob_2024-01-01_09-30-30.log` and `easemob_2024-01-01_10-30-30.log`. At this time, `easemob_2024-01-01_08-30-00.log` will be removed before the SDK generates `easemob.log` to record the latest logs.\n\n    In debugging mode, the SDK outputs all types of logs, including debugging information, warnings, and errors. By default, the SDK only outputs error logs. Therefore, to output all logs, enable the debugging mode.\n\n    ```csharp\n    Options options = new Options(appkey);\n    options.AutoLogin = false;\n    options.UsingHttpsOnly = true;\n    options.DebugMode = true;\n    SDKClient.Instance.InitWithOptions(options);\n    ```\n\n    ## Collect SDK logs [#collect-sdk-logs-4]\n\n    * Unity Mac\n\n      The log path is `/Users/XXX/Library/Application Support/YYY/ZZZ/sdkdata/easemobLog` or `/Users/XXX/Library/Application Support/com.YYY.ZZZ/sdkdata/easemobLog`.\n\n      1. `XXX` indicates the Mac username.\n      2. `YYY` indicates the company name, which is `DefaultCompany` by default.\n      3. `ZZZ` indicates the app name.\n\n    * Unity Windows\n\n      The log path is `C:\\Users\\XXX\\AppData\\LocalLow\\YYY\\ZZZ\\sdkdata\\easemobLog`.\n\n      1. `XXX` indicates the Windows username.\n      2. `YYY` indicates the company name set in Unity, which is `DefaultCompany` by default.\n      3. `ZZZ` indicates the app name.\n\n    * Unity iOS\n\n      The local logs are obtained in the same way as the iOS platform.\n\n      Here, a simulator is used as an example.\n\n      To access SDK logs, take the following steps:\n\n      1. Copy the app sandbox path printed by `NSHomeDirectory()`.\n      2. In the Finder on your Mac system, select **Go > Go to Folder**.\n      3. Press **Ctrl+V** to paste the path and press **Return**.\n      4. Open the logs directory `{app sandbox path}/Library/Application Support/HyphenateSDK/easemobLog/` which contains the SDK logs.\n\n    * Unity Android\n\n      In Android Studio, you can choose **View** > **Tool Windows** > **Device File Explorer** and check the log folder on your device by accessing `/data/data//sdkdata/easemobLog`.\n\n    <_PlatformProcessedMarker close="true" />\n  </_PlatformPanel>\n\n  <_PlatformPanel platform="flutter">\n    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />\n\n    This platform does not support logs.\n\n    <_PlatformProcessedMarker close="true" />\n  </_PlatformPanel>\n</_PlatformTabsGroup>\n';
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "If you’re troubleshooting an issue with the Agora Chat SDK, Agora support team might ask you to send the SDK logs. Logs record information about events that occurred in the SDK. These include errors and warnings as well as informational events."
  }, {
    heading: undefined,
    content: "By default, the SDK generates three log files, `easemob.log` and two `easemob_Y-m-d_H-M-S.log` files, each with a maximum size of 2048 KB (2 MB). These log files are encoded in UTF-8. The SDK writes the latest logs in `easemob.log`. When `easemob.log` is full, the SDK renames it to the name of the current time-dependent log file. If there are more than three log files, the SDK deletes the earliest log file, and creates a new `easemob.log` to record the latest logs."
  }, {
    heading: undefined,
    content: "For example, the SDK generates `easemob.log` to record logs at 8:00:00 a.m. on January 1, 2024. If this file is completely written at 8:30:00 a.m., the SDK renames it `easemob_2024-01-01_08-30-00.log`. At 9:30:00 a.m. and 10:30:30 a.m., the SDK generates `easemob_2024-01-01_09-30-30.log` and `easemob_2024-01-01_10-30-30.log`. At this time, `easemob_2024-01-01_08-30-00.log` will be removed before the SDK generates `easemob.log` to record the latest logs."
  }, {
    heading: "collect-sdk-logs",
    content: "To access SDK logs, take the following steps:"
  }, {
    heading: "collect-sdk-logs",
    content: "Enable the debug mode."
  }, {
    heading: "collect-sdk-logs",
    content: "In this mode, the SDK outputs all types of logs, including debugging information, warnings, and errors."
  }, {
    heading: "collect-sdk-logs",
    content: "If you only require error logs, disable the debug mode."
  }, {
    heading: "collect-sdk-logs",
    content: "Get local logs."
  }, {
    heading: "collect-sdk-logs",
    content: "Open the logs directory `/sdcard/Android/data/{package name}/{appkey}/core_log/` which contains the SDK logs."
  }, {
    heading: "collect-sdk-logs",
    content: "If you’re troubleshooting an issue with the Agora Chat SDK, Agora support team might ask you to send the SDK logs. Logs record information about events that occurred in the SDK. These include errors and warnings as well as informational events."
  }, {
    heading: "collect-sdk-logs",
    content: "By default, the SDK generates three log files, `easemob.log` and two `easemob_Y-m-d_H-M-S.log` files, each with a maximum size of 2048 KB (2 MB). These log files are encoded in UTF-8. The SDK writes the latest logs in `easemob.log`. When `easemob.log` is full, the SDK renames it to the name of the current time-dependent log file. If there are more than three log files, the SDK deletes the earliest log file, and creates a new `easemob.log` to record the latest logs."
  }, {
    heading: "collect-sdk-logs",
    content: "For example, the SDK generates `easemob.log` to record logs at 8:00:00 a.m. on January 1, 2024. If this file is completely written at 8:30:00 a.m., the SDK renames it `easemob_2024-01-01_08-30-00.log`. At 9:30:00 a.m. and 10:30:30 a.m., the SDK generates `easemob_2024-01-01_09-30-30.log` and `easemob_2024-01-01_10-30-30.log`. At this time, `easemob_2024-01-01_08-30-00.log` will be removed before the SDK generates `easemob.log` to record the latest logs."
  }, {
    heading: "collect-sdk-logs",
    content: "`AgoraChatOptions#AgoraChatLogLevel` specifies the log level for output."
  }, {
    heading: "collect-sdk-logs",
    content: "(default) `AgoraChatLogLevelDebug`: All logs;"
  }, {
    heading: "collect-sdk-logs",
    content: "`AgoraChatLogLevelWarning`: Warnings and errors."
  }, {
    heading: "collect-sdk-logs",
    content: "`AgoraChatLogLevelError`: Errors."
  }, {
    heading: "collect-sdk-logs",
    content: "If you want to output SDK logs on the XCode console, you can enable log output during SDK initialization."
  }, {
    heading: "collect-sdk-logs-1",
    content: `Here, a simulator is used as an example.
To access SDK logs, take the following steps:`
  }, {
    heading: "collect-sdk-logs-1",
    content: "Copy the app sandbox path printed by `NSHomeDirectory()`."
  }, {
    heading: "collect-sdk-logs-1",
    content: "In the Finder on your Mac system, select **Go > Go to Folder**."
  }, {
    heading: "collect-sdk-logs-1",
    content: "Press **Ctrl+V** to paste the path and press **Return**."
  }, {
    heading: "collect-sdk-logs-1",
    content: "Open the logs directory `{app sandbox path}/Library/Application Support/HyphenateSDK/easemobLog/` which contains the SDK logs."
  }, {
    heading: "collect-sdk-logs-1",
    content: "If you’re troubleshooting an issue with the Agora Chat SDK, Agora support team might ask you to send the SDK logs. Logs record information about events that occurred in the SDK. These include errors and warnings as well as informational events."
  }, {
    heading: "collecting-sdk-logs",
    content: "Enable log output:"
  }, {
    heading: "collecting-sdk-logs",
    content: "Disable log output:"
  }, {
    heading: "collecting-sdk-logs",
    content: "Set the level of logs to be output:"
  }, {
    heading: "collecting-sdk-logs",
    content: "Set whether to cache logs:"
  }, {
    heading: "collecting-sdk-logs",
    content: "Download logs:"
  }, {
    heading: "collecting-sdk-logs",
    content: "If you’re troubleshooting an issue with the Agora Chat SDK, Agora support team might ask you to send the SDK logs. Logs record information about events that occurred in the SDK. These include errors and warnings as well as informational events."
  }, {
    heading: "collect-sdk-logs-2",
    content: "To output logs on the console, you need to enable the debug mode by setting `debugModel` to `true` during SDK initialization."
  }, {
    heading: "collect-sdk-logs-2",
    content: "If you’re troubleshooting an issue with the Agora Chat SDK, Agora support team might ask you to send the SDK logs. Logs record information about events that occurred in the SDK. These include errors and warnings as well as informational events."
  }, {
    heading: "collect-sdk-logs-2",
    content: "By default, the SDK generates three log files, `easemob.log` and two `easemob_YYYY-MM-DD_HH-MM-SS.log` files, each with a maximum size of 2048 KB (2 MB). These log files are encoded in UTF-8. The SDK writes the latest logs in `easemob.log`. When `easemob.log` is full, the SDK renames it to the name of the current time-dependent log file. If there are more than three log files, the SDK deletes the earliest log file, and creates a new `easemob.log` to record the latest logs."
  }, {
    heading: "collect-sdk-logs-2",
    content: "For example, the SDK generates `easemob.log` to record logs at 8:00:00 a.m. on January 1, 2024. If this file is completely written at 8:30:00 a.m., the SDK renames it `easemob_2024-01-01_08-30-00.log`. At 9:30:00 a.m. and 10:30:30 a.m., the SDK generates `easemob_2024-01-01_09-30-30.log` and `easemob_2024-01-01_10-30-30.log`. At this time, `easemob_2024-01-01_08-30-00.log` will be removed before the SDK generates `easemob.log` to record the latest logs."
  }, {
    heading: "collect-sdk-logs-2",
    content: "In debugging mode, the SDK outputs all types of logs, including debugging information, warnings, and errors. By default, the SDK only outputs error logs. Therefore, to output all logs, enable the debugging mode."
  }, {
    heading: "collect-sdk-logs-3",
    content: "Windows SDK logs reside in the `sdkdata\\easemobLog` directory which is at the same level as the directory of the executable program."
  }, {
    heading: "collect-sdk-logs-3",
    content: "If you’re troubleshooting an issue with the Agora Chat SDK, Agora support team might ask you to send the SDK logs. Logs record information about events that occurred in the SDK. These include errors and warnings as well as informational events."
  }, {
    heading: "collect-sdk-logs-3",
    content: "By default, the SDK generates three log files, `easemob.log` and two `easemob_Y-m-d_H-M-S.log` files, each with a maximum size of 2048 KB (2 MB). These log files are encoded in UTF-8. The SDK writes the latest logs in `easemob.log`. When `easemob.log` is full, the SDK renames it to the name of the current time-dependent log file. If there are more than three log files, the SDK deletes the earliest log file, and creates a new `easemob.log` to record the latest logs."
  }, {
    heading: "collect-sdk-logs-3",
    content: "For example, the SDK generates `easemob.log` to record logs at 8:00:00 a.m. on January 1, 2024. If this file is completely written at 8:30:00 a.m., the SDK renames it `easemob_2024-01-01_08-30-00.log`. At 9:30:00 a.m. and 10:30:30 a.m., the SDK generates `easemob_2024-01-01_09-30-30.log` and `easemob_2024-01-01_10-30-30.log`. At this time, `easemob_2024-01-01_08-30-00.log` will be removed before the SDK generates `easemob.log` to record the latest logs."
  }, {
    heading: "collect-sdk-logs-3",
    content: "In debugging mode, the SDK outputs all types of logs, including debugging information, warnings, and errors. By default, the SDK only outputs error logs. Therefore, to output all logs, enable the debugging mode."
  }, {
    heading: "collect-sdk-logs-4",
    content: "Unity Mac"
  }, {
    heading: "collect-sdk-logs-4",
    content: "The log path is `/Users/XXX/Library/Application Support/YYY/ZZZ/sdkdata/easemobLog` or `/Users/XXX/Library/Application Support/com.YYY.ZZZ/sdkdata/easemobLog`."
  }, {
    heading: "collect-sdk-logs-4",
    content: "`XXX` indicates the Mac username."
  }, {
    heading: "collect-sdk-logs-4",
    content: "`YYY` indicates the company name, which is `DefaultCompany` by default."
  }, {
    heading: "collect-sdk-logs-4",
    content: "`ZZZ` indicates the app name."
  }, {
    heading: "collect-sdk-logs-4",
    content: "Unity Windows"
  }, {
    heading: "collect-sdk-logs-4",
    content: "The log path is `C:\\Users\\XXX\\AppData\\LocalLow\\YYY\\ZZZ\\sdkdata\\easemobLog`."
  }, {
    heading: "collect-sdk-logs-4",
    content: "`XXX` indicates the Windows username."
  }, {
    heading: "collect-sdk-logs-4",
    content: "`YYY` indicates the company name set in Unity, which is `DefaultCompany` by default."
  }, {
    heading: "collect-sdk-logs-4",
    content: "`ZZZ` indicates the app name."
  }, {
    heading: "collect-sdk-logs-4",
    content: "Unity iOS"
  }, {
    heading: "collect-sdk-logs-4",
    content: "The local logs are obtained in the same way as the iOS platform."
  }, {
    heading: "collect-sdk-logs-4",
    content: "Here, a simulator is used as an example."
  }, {
    heading: "collect-sdk-logs-4",
    content: "To access SDK logs, take the following steps:"
  }, {
    heading: "collect-sdk-logs-4",
    content: "Copy the app sandbox path printed by `NSHomeDirectory()`."
  }, {
    heading: "collect-sdk-logs-4",
    content: "In the Finder on your Mac system, select **Go > Go to Folder**."
  }, {
    heading: "collect-sdk-logs-4",
    content: "Press **Ctrl+V** to paste the path and press **Return**."
  }, {
    heading: "collect-sdk-logs-4",
    content: "Open the logs directory `{app sandbox path}/Library/Application Support/HyphenateSDK/easemobLog/` which contains the SDK logs."
  }, {
    heading: "collect-sdk-logs-4",
    content: "Unity Android"
  }, {
    heading: "collect-sdk-logs-4",
    content: "In Android Studio, you can choose **View** > **Tool Windows** > **Device File Explorer** and check the log folder on your device by accessing `/data/data//sdkdata/easemobLog`."
  }, {
    heading: "collect-sdk-logs-4",
    content: "This platform does not support logs."
  }],
  headings: [{
    id: "collect-sdk-logs",
    content: "Collect SDK logs"
  }, {
    id: "collect-sdk-logs-1",
    content: "Collect SDK logs"
  }, {
    id: "collecting-sdk-logs",
    content: "Collecting SDK logs"
  }, {
    id: "collect-sdk-logs-2",
    content: "Collect SDK logs"
  }, {
    id: "collect-sdk-logs-3",
    content: "Collect SDK logs"
  }, {
    id: "collect-sdk-logs-4",
    content: "Collect SDK logs"
  }]
};
export let toc = [{
  depth: 2,
  url: "#collect-sdk-logs",
  title: _jsx(_Fragment, {
    children: "Collect SDK logs"
  })
}, {
  depth: 2,
  url: "#collect-sdk-logs-1",
  title: _jsx(_Fragment, {
    children: "Collect SDK logs"
  })
}, {
  depth: 2,
  url: "#collecting-sdk-logs",
  title: _jsx(_Fragment, {
    children: "Collecting SDK logs"
  })
}, {
  depth: 2,
  url: "#collect-sdk-logs-2",
  title: _jsx(_Fragment, {
    children: "Collect SDK logs"
  })
}, {
  depth: 2,
  url: "#collect-sdk-logs-3",
  title: _jsx(_Fragment, {
    children: "Collect SDK logs"
  })
}, {
  depth: 2,
  url: "#collect-sdk-logs-4",
  title: _jsx(_Fragment, {
    children: "Collect SDK logs"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    div: "div",
    h2: "h2",
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
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "web",
    platforms: '["android","ios","web","react-native","windows","unity","flutter"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "android",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "android"
      }), _jsx(_components.p, {
        children: "If you’re troubleshooting an issue with the Agora Chat SDK, Agora support team might ask you to send the SDK logs. Logs record information about events that occurred in the SDK. These include errors and warnings as well as informational events."
      }), _jsxs(_components.p, {
        children: ["By default, the SDK generates three log files, ", _jsx(_components.code, {
          children: "easemob.log"
        }), " and two ", _jsx(_components.code, {
          children: "easemob_Y-m-d_H-M-S.log"
        }), " files, each with a maximum size of 2048 KB (2 MB). These log files are encoded in UTF-8. The SDK writes the latest logs in ", _jsx(_components.code, {
          children: "easemob.log"
        }), ". When ", _jsx(_components.code, {
          children: "easemob.log"
        }), " is full, the SDK renames it to the name of the current time-dependent log file. If there are more than three log files, the SDK deletes the earliest log file, and creates a new ", _jsx(_components.code, {
          children: "easemob.log"
        }), " to record the latest logs."]
      }), _jsxs(_components.p, {
        children: ["For example, the SDK generates ", _jsx(_components.code, {
          children: "easemob.log"
        }), " to record logs at 8:00", _jsx(_components.div, {}), " a.m. on January 1, 2024. If this file is completely written at 8:30", _jsx(_components.div, {}), " a.m., the SDK renames it ", _jsx(_components.code, {
          children: "easemob_2024-01-01_08-30-00.log"
        }), ". At 9:30", _jsx(_components.div, {}), " a.m. and 10:30", _jsx(_components.div, {}), " a.m., the SDK generates ", _jsx(_components.code, {
          children: "easemob_2024-01-01_09-30-30.log"
        }), " and ", _jsx(_components.code, {
          children: "easemob_2024-01-01_10-30-30.log"
        }), ". At this time, ", _jsx(_components.code, {
          children: "easemob_2024-01-01_08-30-00.log"
        }), " will be removed before the SDK generates ", _jsx(_components.code, {
          children: "easemob.log"
        }), " to record the latest logs."]
      }), _jsx(_components.h2, {
        id: "collect-sdk-logs",
        children: "Collect SDK logs"
      }), _jsx(_components.p, {
        children: "To access SDK logs, take the following steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Enable the debug mode."
          }), `
`, _jsx(_components.p, {
            children: "In this mode, the SDK outputs all types of logs, including debugging information, warnings, and errors."
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
                    children: "ChatClient."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "getInstance"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "()."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setDebugMode"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "true"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ");"
                  })]
                })
              })
            })
          }), `
`, _jsx(_components.p, {
            children: "If you only require error logs, disable the debug mode."
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
                    children: "ChatClient."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "getInstance"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "()."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setDebugMode"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
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
                    children: ");"
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
            children: "Get local logs."
          }), `
`, _jsxs(_components.p, {
            children: ["Open the logs directory ", _jsx(_components.code, {
              children: "/sdcard/Android/data/{package name}/{appkey}/core_log/"
            }), " which contains the SDK logs."]
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
                    children: "adb"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " pull"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " /sdcard/android/data/{package"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " name}/{appkey}/core_log"
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
        canonicalPlatform: "web",
        platform: "ios"
      }), _jsx(_components.p, {
        children: "If you’re troubleshooting an issue with the Agora Chat SDK, Agora support team might ask you to send the SDK logs. Logs record information about events that occurred in the SDK. These include errors and warnings as well as informational events."
      }), _jsxs(_components.p, {
        children: ["By default, the SDK generates three log files, ", _jsx(_components.code, {
          children: "easemob.log"
        }), " and two ", _jsx(_components.code, {
          children: "easemob_Y-m-d_H-M-S.log"
        }), " files, each with a maximum size of 2048 KB (2 MB). These log files are encoded in UTF-8. The SDK writes the latest logs in ", _jsx(_components.code, {
          children: "easemob.log"
        }), ". When ", _jsx(_components.code, {
          children: "easemob.log"
        }), " is full, the SDK renames it to the name of the current time-dependent log file. If there are more than three log files, the SDK deletes the earliest log file, and creates a new ", _jsx(_components.code, {
          children: "easemob.log"
        }), " to record the latest logs."]
      }), _jsxs(_components.p, {
        children: ["For example, the SDK generates ", _jsx(_components.code, {
          children: "easemob.log"
        }), " to record logs at 8:00", _jsx(_components.div, {}), " a.m. on January 1, 2024. If this file is completely written at 8:30", _jsx(_components.div, {}), " a.m., the SDK renames it ", _jsx(_components.code, {
          children: "easemob_2024-01-01_08-30-00.log"
        }), ". At 9:30", _jsx(_components.div, {}), " a.m. and 10:30", _jsx(_components.div, {}), " a.m., the SDK generates ", _jsx(_components.code, {
          children: "easemob_2024-01-01_09-30-30.log"
        }), " and ", _jsx(_components.code, {
          children: "easemob_2024-01-01_10-30-30.log"
        }), ". At this time, ", _jsx(_components.code, {
          children: "easemob_2024-01-01_08-30-00.log"
        }), " will be removed before the SDK generates ", _jsx(_components.code, {
          children: "easemob.log"
        }), " to record the latest logs."]
      }), _jsxs(_components.p, {
        children: [_jsx(_components.code, {
          children: "AgoraChatOptions#AgoraChatLogLevel"
        }), " specifies the log level for output."]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["(default) ", _jsx(_components.code, {
            children: "AgoraChatLogLevelDebug"
          }), ": All logs;"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AgoraChatLogLevelWarning"
          }), ": Warnings and errors."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AgoraChatLogLevelError"
          }), ": Errors."]
        }), `
`]
      }), _jsx(_components.p, {
        children: "If you want to output SDK logs on the XCode console, you can enable log output during SDK initialization."
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
                children: "AgoraChatOptions"
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
                children: " option "
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
                children: " [AgoraChatOptions "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "optionsWithAppkey:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '@""'
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
                children: "// Output logs on the XCode console"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "option.enableConsoleLog "
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
                children: " YES"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set the log level. The default value is `AgoraChatLogLevelDebug`, indicating all logs are output."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "option.logLevel "
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
                children: " AgoraChatLogLevelDebug;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "[ChatClient.sharedClient "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "initializeSDKWithOptions:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "option];"
              })]
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "collect-sdk-logs-1",
        children: "Collect SDK logs"
      }), _jsx(_components.p, {
        children: `Here, a simulator is used as an example.
To access SDK logs, take the following steps:`
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: ["Copy the app sandbox path printed by ", _jsx(_components.code, {
            children: "NSHomeDirectory()"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["In the Finder on your Mac system, select ", _jsx(_components.strong, {
            children: "Go > Go to Folder"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["Press ", _jsx(_components.strong, {
            children: "Ctrl+V"
          }), " to paste the path and press ", _jsx(_components.strong, {
            children: "Return"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["Open the logs directory ", _jsx(_components.code, {
            children: "{app sandbox path}/Library/Application Support/HyphenateSDK/easemobLog/"
          }), " which contains the SDK logs."]
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
        children: "If you’re troubleshooting an issue with the Agora Chat SDK, Agora support team might ask you to send the SDK logs. Logs record information about events that occurred in the SDK. These include errors and warnings as well as informational events."
      }), _jsx(_components.h2, {
        id: "collecting-sdk-logs",
        children: "Collecting SDK logs"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Enable log output:"
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "AC"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ".logger."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "enableAll"
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
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Disable log output:"
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "AC"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ".logger."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "disableAll"
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
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Set the level of logs to be output:"
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
                    children: "// 0 - 5 or 'TRACE'，'DEBUG'，'INFO'，'WARN'，'ERROR'，'SILENT'."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "AC"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ".logger."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setLevel"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
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
                    children: ");"
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
            children: "Set whether to cache logs:"
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
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "AC"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ".logger."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setConfig"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "({"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  useCache: "
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
                    children: ", "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Whether to cache logs."
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  maxCache: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "3"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " *"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " 1024"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " *"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " 1024"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// The maximum number of bytes of logs that can be cached."
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
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Cache logs of all levels"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "AC"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ".logger."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setLevel"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
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
                    children: ");"
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
            children: "Download logs:"
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "AC"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ".logger."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "download"
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
      }), _jsx(_components.p, {
        children: "If you’re troubleshooting an issue with the Agora Chat SDK, Agora support team might ask you to send the SDK logs. Logs record information about events that occurred in the SDK. These include errors and warnings as well as informational events."
      }), _jsx(_components.h2, {
        id: "collect-sdk-logs-2",
        children: "Collect SDK logs"
      }), _jsxs(_components.p, {
        children: ["To output logs on the console, you need to enable the debug mode by setting ", _jsx(_components.code, {
          children: "debugModel"
        }), " to ", _jsx(_components.code, {
          children: "true"
        }), " during SDK initialization."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "chatlog."
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
                children: "ChatClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "TAG"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "}: login: `"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", userName, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"******"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", isPassword);"
              })]
            })
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
      }), _jsx(_components.p, {
        children: "If you’re troubleshooting an issue with the Agora Chat SDK, Agora support team might ask you to send the SDK logs. Logs record information about events that occurred in the SDK. These include errors and warnings as well as informational events."
      }), _jsxs(_components.p, {
        children: ["By default, the SDK generates three log files, ", _jsx(_components.code, {
          children: "easemob.log"
        }), " and two ", _jsx(_components.code, {
          children: "easemob_YYYY-MM-DD_HH-MM-SS.log"
        }), " files, each with a maximum size of 2048 KB (2 MB). These log files are encoded in UTF-8. The SDK writes the latest logs in ", _jsx(_components.code, {
          children: "easemob.log"
        }), ". When ", _jsx(_components.code, {
          children: "easemob.log"
        }), " is full, the SDK renames it to the name of the current time-dependent log file. If there are more than three log files, the SDK deletes the earliest log file, and creates a new ", _jsx(_components.code, {
          children: "easemob.log"
        }), " to record the latest logs."]
      }), _jsxs(_components.p, {
        children: ["For example, the SDK generates ", _jsx(_components.code, {
          children: "easemob.log"
        }), " to record logs at 8:00", _jsx(_components.div, {}), " a.m. on January 1, 2024. If this file is completely written at 8:30", _jsx(_components.div, {}), " a.m., the SDK renames it ", _jsx(_components.code, {
          children: "easemob_2024-01-01_08-30-00.log"
        }), ". At 9:30", _jsx(_components.div, {}), " a.m. and 10:30", _jsx(_components.div, {}), " a.m., the SDK generates ", _jsx(_components.code, {
          children: "easemob_2024-01-01_09-30-30.log"
        }), " and ", _jsx(_components.code, {
          children: "easemob_2024-01-01_10-30-30.log"
        }), ". At this time, ", _jsx(_components.code, {
          children: "easemob_2024-01-01_08-30-00.log"
        }), " will be removed before the SDK generates ", _jsx(_components.code, {
          children: "easemob.log"
        }), " to record the latest logs."]
      }), _jsx(_components.p, {
        children: "In debugging mode, the SDK outputs all types of logs, including debugging information, warnings, and errors. By default, the SDK only outputs error logs. Therefore, to output all logs, enable the debugging mode."
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
          icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Options"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " options"
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " Options"
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
                children: '"YourAppKey"'
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
                children: "options.DebugMode "
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
                children: " true"
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
                children: "SDKClient.Instance."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "InitWithOptions"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(options);"
              })]
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "collect-sdk-logs-3",
        children: "Collect SDK logs"
      }), _jsxs(_components.p, {
        children: ["Windows SDK logs reside in the ", _jsx(_components.code, {
          children: "sdkdata\\easemobLog"
        }), " directory which is at the same level as the directory of the executable program."]
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
        children: "If you’re troubleshooting an issue with the Agora Chat SDK, Agora support team might ask you to send the SDK logs. Logs record information about events that occurred in the SDK. These include errors and warnings as well as informational events."
      }), _jsxs(_components.p, {
        children: ["By default, the SDK generates three log files, ", _jsx(_components.code, {
          children: "easemob.log"
        }), " and two ", _jsx(_components.code, {
          children: "easemob_Y-m-d_H-M-S.log"
        }), " files, each with a maximum size of 2048 KB (2 MB). These log files are encoded in UTF-8. The SDK writes the latest logs in ", _jsx(_components.code, {
          children: "easemob.log"
        }), ". When ", _jsx(_components.code, {
          children: "easemob.log"
        }), " is full, the SDK renames it to the name of the current time-dependent log file. If there are more than three log files, the SDK deletes the earliest log file, and creates a new ", _jsx(_components.code, {
          children: "easemob.log"
        }), " to record the latest logs."]
      }), _jsxs(_components.p, {
        children: ["For example, the SDK generates ", _jsx(_components.code, {
          children: "easemob.log"
        }), " to record logs at 8:00", _jsx(_components.div, {}), " a.m. on January 1, 2024. If this file is completely written at 8:30", _jsx(_components.div, {}), " a.m., the SDK renames it ", _jsx(_components.code, {
          children: "easemob_2024-01-01_08-30-00.log"
        }), ". At 9:30", _jsx(_components.div, {}), " a.m. and 10:30", _jsx(_components.div, {}), " a.m., the SDK generates ", _jsx(_components.code, {
          children: "easemob_2024-01-01_09-30-30.log"
        }), " and ", _jsx(_components.code, {
          children: "easemob_2024-01-01_10-30-30.log"
        }), ". At this time, ", _jsx(_components.code, {
          children: "easemob_2024-01-01_08-30-00.log"
        }), " will be removed before the SDK generates ", _jsx(_components.code, {
          children: "easemob.log"
        }), " to record the latest logs."]
      }), _jsx(_components.p, {
        children: "In debugging mode, the SDK outputs all types of logs, including debugging information, warnings, and errors. By default, the SDK only outputs error logs. Therefore, to output all logs, enable the debugging mode."
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
          icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Options"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " options"
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " Options"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(appkey);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "options.AutoLogin "
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
                children: " false"
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
                children: "options.UsingHttpsOnly "
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
                children: " true"
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
                children: "options.DebugMode "
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
                children: " true"
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
                children: "SDKClient.Instance."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "InitWithOptions"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(options);"
              })]
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "collect-sdk-logs-4",
        children: "Collect SDK logs"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Unity Mac"
          }), `
`, _jsxs(_components.p, {
            children: ["The log path is ", _jsx(_components.code, {
              children: "/Users/XXX/Library/Application Support/YYY/ZZZ/sdkdata/easemobLog"
            }), " or ", _jsx(_components.code, {
              children: "/Users/XXX/Library/Application Support/com.YYY.ZZZ/sdkdata/easemobLog"
            }), "."]
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "XXX"
              }), " indicates the Mac username."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "YYY"
              }), " indicates the company name, which is ", _jsx(_components.code, {
                children: "DefaultCompany"
              }), " by default."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "ZZZ"
              }), " indicates the app name."]
            }), `
`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Unity Windows"
          }), `
`, _jsxs(_components.p, {
            children: ["The log path is ", _jsx(_components.code, {
              children: "C:\\Users\\XXX\\AppData\\LocalLow\\YYY\\ZZZ\\sdkdata\\easemobLog"
            }), "."]
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "XXX"
              }), " indicates the Windows username."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "YYY"
              }), " indicates the company name set in Unity, which is ", _jsx(_components.code, {
                children: "DefaultCompany"
              }), " by default."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "ZZZ"
              }), " indicates the app name."]
            }), `
`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Unity iOS"
          }), `
`, _jsx(_components.p, {
            children: "The local logs are obtained in the same way as the iOS platform."
          }), `
`, _jsx(_components.p, {
            children: "Here, a simulator is used as an example."
          }), `
`, _jsx(_components.p, {
            children: "To access SDK logs, take the following steps:"
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Copy the app sandbox path printed by ", _jsx(_components.code, {
                children: "NSHomeDirectory()"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["In the Finder on your Mac system, select ", _jsx(_components.strong, {
                children: "Go > Go to Folder"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["Press ", _jsx(_components.strong, {
                children: "Ctrl+V"
              }), " to paste the path and press ", _jsx(_components.strong, {
                children: "Return"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["Open the logs directory ", _jsx(_components.code, {
                children: "{app sandbox path}/Library/Application Support/HyphenateSDK/easemobLog/"
              }), " which contains the SDK logs."]
            }), `
`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Unity Android"
          }), `
`, _jsxs(_components.p, {
            children: ["In Android Studio, you can choose ", _jsx(_components.strong, {
              children: "View"
            }), " > ", _jsx(_components.strong, {
              children: "Tool Windows"
            }), " > ", _jsx(_components.strong, {
              children: "Device File Explorer"
            }), " and check the log folder on your device by accessing ", _jsx(_components.code, {
              children: "/data/data//sdkdata/easemobLog"
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
        children: "This platform does not support logs."
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
