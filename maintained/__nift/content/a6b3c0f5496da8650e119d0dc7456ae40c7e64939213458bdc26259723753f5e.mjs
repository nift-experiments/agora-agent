import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I reduce the app size after integrating the RTC SDK Native SDK?"
};
export let _markdown = `

<CalloutContainer type="info">
  <CalloutDescription>
    This page applies to SDKs earlier than v3.6.2 only. As of v3.6.2, Agora offers additional methods for reducing app size. See [Reduce App Size](/en/realtime-media/rtc/build/optimize-and-operate/app-size-optimization) for the latest details.
  </CalloutDescription>
</CalloutContainer>

This article describes how to reduce the app size after integrating the RTC SDK Native SDK.

## Solution 1: Use the Audio SDK [#solution-1-use-the-audio-sdk]

The RTC SDK supports both audio and video functions, so the package size is larger. If you only need to use the audio functions, Agora recommends integrating the Audio SDK.

## Solution 2: Remove unnecessary extension libraries [#solution-2-remove-unnecessary-extension-libraries]

The SDK provides extension libraries that can be optionally integrated into the project. The name of extension libraries is suffixed with \`Extension\`.

If you do not need the extension functions, you can directly remove the corresponding extension libraries to reduce the app size.

### Deep-learning noise reduction library [#deep-learning-noise-reduction-library]

The SDK enables traditional noise reduction by default to reduce most of the stationary background noise. Deep-learning noise reduction adds non-stationary background noise reduction based on the traditional noise reduction. After integrating the deep-learning noise reduction library, you can call \`enableDeepLearningDenoise\` to enable the deep-learning noise reduction. See [v3.3.0 Release Notes](/en/3.x/interactive-live-streaming/introduction/release-notes#v330).

The following table shows the extension library name for each platform and the increase in the app size after integration.

| Platform | Architecture | Library name                          | App size increase after integration (KB) |
| :------- | :----------- | :------------------------------------ | :--------------------------------------- |
| Android  | arm64-v8a    | \`libagora_ai_denoise_extension.so\`    | 1120                                     |
| Android  | armeabi-v7a  | \`libagora_ai_denoise_extension.so\`    | 792                                      |
| iOS      | arm64        | \`AgoraAIDenoiseExtension.xcframework\` | 502                                      |
| iOS      | armv7        | \`AgoraAIDenoiseExtension.xcframework\` | 448                                      |
| macOS    | arm64        | \`AgoraAIDenoiseExtension.framework\`   | 496                                      |
| macOS    | x86\\_64      | \`AgoraAIDenoiseExtension.framework\`   | 588                                      |
| Windows  | x86          | \`libagora_ai_denoise_extension.dll\`   | 5312                                     |
| Windows  | x86\\_64      | \`libagora_ai_denoise_extension.dll\`   | 5424                                     |

### AV1 library (beta feature) [#av1-library-beta-feature]

The AV1 function improves the clarity of texts when users share the screen. To use this function, contact [support@agora.io](mailto\\:support@agora.io).

The following table shows the extension library name for each platform and the increase in the app size after integration.

| Platform | Architecture | Library name                      | App size increase after integration (KB) |
| :------- | :----------- | :-------------------------------- | :--------------------------------------- |
| Android  | arm64-v8a    | \`libagora_dav1d_extension.so\`     | 696                                      |
| Android  | armeabi-v7a  | \`libagora_dav1d_extension.so\`     | 608                                      |
| iOS      | arm64        | \`AgoraDav1dExtension.xcframework\` | 959                                      |
| iOS      | armv7        | \`AgoraDav1dExtension.xcframework\` | 746                                      |
| macOS    | x86\\_64      | \`AgoraDav1dExtension.framework\`   | 1316                                     |
| Windows  | x86          | \`libagora_dav1d_extension.dll\`    | 1252                                     |
| Windows  | x86\\_64      | \`libagora_dav1d_extension.dll\`    | 1756                                     |

### JND library (beta feature) [#jnd-library-beta-feature]

The JND (Just-noticeable difference) function is used for video perceptual coding, which reduces bandwidth consumption while keeping the same image quality. For example, this function can improve video smoothness in bandwidth-constrained scenarios, and reduce network traffic consumption in mobile network scenarios. To use this function, contact [support@agora.io](https://agora-ticket.agora.io/).

The following table shows the extension library name for each platform and the increase in the app size after integration.

| Platform | Architecture | Library name                    | App size increase after integration (KB) |
| :------- | :----------- | :------------------------------ | :--------------------------------------- |
| Android  | arm64-v8a    | \`libagora_jnd_extension.so\`     | 1172                                     |
| Android  | armeabi-v7a  | \`libagora_jnd_extension.so\`     | 816                                      |
| iOS      | arm64        | \`AgoraJNDExtension.xcframework\` | 78                                       |
| iOS      | armv7        | \`AgoraJNDExtension.xcframework\` | 69                                       |
| macOS    | arm64        | \`AgoraJNDExtension.framework\`   | 720                                      |
| macOS    | x86\\_64      | \`AgoraJNDExtension.framework\`   | 616                                      |
| Windows  | x86          | \`libagora_jnd_extension.dll\`    | 1528                                     |
| Windows  | x86\\_64      | \`libagora_jnd_extension.dll\`    | 1948                                     |

### Virtual background library (beta feature) [#virtual-background-library-beta-feature]

After integrating the virtual background library, you can call \`enableVirtualBackground\` to enable the virtual background. See [v3.5.0 Release Notes](/en/3.x/interactive-live-streaming/introduction/release-notes#v350).

The following table shows the extension library name for each platform and the increase in the app size after integration.

| Platform | Architecture | Library name                                  | App size increase after integration (KB) |
| :------- | :----------- | :-------------------------------------------- | :--------------------------------------- |
| Android  | arm64-v8a    | \`libagora_segmentation_extension.so\`          | 3331                                     |
| Android  | armeabi-v7a  | \`libagora_segmentation_extension.so\`          | 2232                                     |
| iOS      | arm64        | \`AgoraVideoSegmentationExtension.xcframework\` | 2210                                     |
| iOS      | armv7        | \`AgoraVideoSegmentationExtension.xcframework\` | 1514                                     |
| macOS    | arm64        | \`AgoraVideoSegmentationExtension.framework\`   | 2802                                     |
| macOS    | x86\\_64      | \`AgoraVideoSegmentationExtension.framework\`   | 2449                                     |
| Windows  | x86          | \`libagora_segmentation_extension.dll\`         | 4401                                     |
| Windows  | x86\\_64      | \`libagora_segmentation_extension.dll\`         | 5193                                     |

### ROI library (beta feature） [#roi-library-beta-feature]

The ROI (Region of Interest) function is applied to the face or virtual background segmentation algorithm for face or portrait recognition. In the encoding process, higher quality encoding is used for the ROI to achieve a clearer face or portrait. To use this function, contact [support@agora.io](mailto\\:support@agora.io).

The following table shows the extension library name for each platform and the increase in the app size after integration.

| Platform | Architecture | Library name                 | App size increase after integration (KB) |
| :------- | :----------- | :--------------------------- | :--------------------------------------- |
| Android  | arm64-v8a    | \`libagora_fd_extension.so\`   | 1558                                     |
| Android  | armeabi-v7a  | \`libagora_fd_extension.so\`   | 977                                      |
| iOS      | armv7        | \`AgoraFDExtension.framework\` | 2602                                     |
| iOS      | arm64        | \`AgoraFDExtension.framework\` | 3534                                     |
| macOS    | x86\\_64      | \`AgoraFDExtension.framework\` | 1674                                     |
| macOS    | arm64        | \`AgoraFDExtension.framework\` | 904                                      |
| Windows  | x86\\_64      | \`libagora_fd_extension.dll\`  | 1993                                     |
| Windows  | x86          | \`libagora_fd_extension.dll\`  | 1605                                     |

### Super resolution library (beta feature) [#super-resolution-library-beta-feature]

After integrating the super resolution library, you can call \`enableRemoteSuperResolution\` to enable super resolution. See [v3.5.1 Release Notes](/en/3.x/interactive-live-streaming/introduction/release-notes#v351).

The following table shows the extension library name for each platform and the increase in the app size after integration.

| Platform | Architecture | Library name                                | App size increase after integration (KB) |
| :------- | :----------- | :------------------------------------------ | :--------------------------------------- |
| Android  | arm64-v8a    | \`libagora_super_resolution_extension.so\`    | 837                                      |
| Android  | armeabi-v7a  | \`libagora_super_resolution_extension.so\`    | 550                                      |
| iOS      | arm64        | \`AgoraSuperResolutionExtension.xcframework\` | 342                                      |
| iOS      | armv7        | \`AgoraSuperResolutionExtension.xcframework\` | 340                                      |

### Image enhancement library [#image-enhancement-library]

As of v3.6.0, ensure that you have integrated the image enhancement library before you call \`setBeautyEffectOptions\` to enable the image enhancement function. See [v3.6.0 Release Notes](/en/3.x/interactive-live-streaming/introduction/release-notes#v360).

The following table shows the extension library name for each platform and the increase in the app size after integration.

| Platform | Architecture | Library name                             | App size increase after integration (KB) |
| :------- | :----------- | :--------------------------------------- | :--------------------------------------- |
| Android  | arm64-v8a    | \`libagora_video_process_extension.so\`    | 1290                                     |
| Android  | armeabi-v7a  | \`libagora_video_process_extension.so\`    | 962                                      |
| iOS      | arm64        | \`AgoraVideoProcessExtension.xcframework\` | 819                                      |
| iOS      | armv7        | \`AgoraVideoProcessExtension.xcframework\` | 768                                      |
| macOS    | arm64        | \`AgoraVideoProcessExtension.framework\`   | 1785                                     |
| macOS    | x86\\_64      | \`AgoraVideoProcessExtension.framework\`   | 895                                      |
| Windows  | x86          | \`libagora_video_process_extension.dll\`   | 2171                                     |
| Windows  | x86\\_64      | \`libagora_video_process_extension.dll\`   | 2541                                     |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page applies to SDKs earlier than v3.6.2 only. As of v3.6.2, Agora offers additional methods for reducing app size. See Reduce App Size for the latest details."
  }, {
    heading: undefined,
    content: "This article describes how to reduce the app size after integrating the RTC SDK Native SDK."
  }, {
    heading: "solution-1-use-the-audio-sdk",
    content: "The RTC SDK supports both audio and video functions, so the package size is larger. If you only need to use the audio functions, Agora recommends integrating the Audio SDK."
  }, {
    heading: "solution-2-remove-unnecessary-extension-libraries",
    content: "The SDK provides extension libraries that can be optionally integrated into the project. The name of extension libraries is suffixed with `Extension`."
  }, {
    heading: "solution-2-remove-unnecessary-extension-libraries",
    content: "If you do not need the extension functions, you can directly remove the corresponding extension libraries to reduce the app size."
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "The SDK enables traditional noise reduction by default to reduce most of the stationary background noise. Deep-learning noise reduction adds non-stationary background noise reduction based on the traditional noise reduction. After integrating the deep-learning noise reduction library, you can call `enableDeepLearningDenoise` to enable the deep-learning noise reduction. See v3.3.0 Release Notes."
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "The following table shows the extension library name for each platform and the increase in the app size after integration."
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "Platform"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "Architecture"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "Library name"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "App size increase after integration (KB)"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "Android"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "arm64-v8a"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "`libagora_ai_denoise_extension.so`"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "1120"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "Android"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "armeabi-v7a"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "`libagora_ai_denoise_extension.so`"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "792"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "iOS"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "arm64"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "`AgoraAIDenoiseExtension.xcframework`"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "502"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "iOS"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "armv7"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "`AgoraAIDenoiseExtension.xcframework`"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "448"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "macOS"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "arm64"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "`AgoraAIDenoiseExtension.framework`"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "496"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "macOS"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "x86\\_64"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "`AgoraAIDenoiseExtension.framework`"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "588"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "Windows"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "x86"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "`libagora_ai_denoise_extension.dll`"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "5312"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "Windows"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "x86\\_64"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "`libagora_ai_denoise_extension.dll`"
  }, {
    heading: "deep-learning-noise-reduction-library",
    content: "5424"
  }, {
    heading: "av1-library-beta-feature",
    content: "The AV1 function improves the clarity of texts when users share the screen. To use this function, contact support\\@agora.io."
  }, {
    heading: "av1-library-beta-feature",
    content: "The following table shows the extension library name for each platform and the increase in the app size after integration."
  }, {
    heading: "av1-library-beta-feature",
    content: "Platform"
  }, {
    heading: "av1-library-beta-feature",
    content: "Architecture"
  }, {
    heading: "av1-library-beta-feature",
    content: "Library name"
  }, {
    heading: "av1-library-beta-feature",
    content: "App size increase after integration (KB)"
  }, {
    heading: "av1-library-beta-feature",
    content: "Android"
  }, {
    heading: "av1-library-beta-feature",
    content: "arm64-v8a"
  }, {
    heading: "av1-library-beta-feature",
    content: "`libagora_dav1d_extension.so`"
  }, {
    heading: "av1-library-beta-feature",
    content: "696"
  }, {
    heading: "av1-library-beta-feature",
    content: "Android"
  }, {
    heading: "av1-library-beta-feature",
    content: "armeabi-v7a"
  }, {
    heading: "av1-library-beta-feature",
    content: "`libagora_dav1d_extension.so`"
  }, {
    heading: "av1-library-beta-feature",
    content: "608"
  }, {
    heading: "av1-library-beta-feature",
    content: "iOS"
  }, {
    heading: "av1-library-beta-feature",
    content: "arm64"
  }, {
    heading: "av1-library-beta-feature",
    content: "`AgoraDav1dExtension.xcframework`"
  }, {
    heading: "av1-library-beta-feature",
    content: "959"
  }, {
    heading: "av1-library-beta-feature",
    content: "iOS"
  }, {
    heading: "av1-library-beta-feature",
    content: "armv7"
  }, {
    heading: "av1-library-beta-feature",
    content: "`AgoraDav1dExtension.xcframework`"
  }, {
    heading: "av1-library-beta-feature",
    content: "746"
  }, {
    heading: "av1-library-beta-feature",
    content: "macOS"
  }, {
    heading: "av1-library-beta-feature",
    content: "x86\\_64"
  }, {
    heading: "av1-library-beta-feature",
    content: "`AgoraDav1dExtension.framework`"
  }, {
    heading: "av1-library-beta-feature",
    content: "1316"
  }, {
    heading: "av1-library-beta-feature",
    content: "Windows"
  }, {
    heading: "av1-library-beta-feature",
    content: "x86"
  }, {
    heading: "av1-library-beta-feature",
    content: "`libagora_dav1d_extension.dll`"
  }, {
    heading: "av1-library-beta-feature",
    content: "1252"
  }, {
    heading: "av1-library-beta-feature",
    content: "Windows"
  }, {
    heading: "av1-library-beta-feature",
    content: "x86\\_64"
  }, {
    heading: "av1-library-beta-feature",
    content: "`libagora_dav1d_extension.dll`"
  }, {
    heading: "av1-library-beta-feature",
    content: "1756"
  }, {
    heading: "jnd-library-beta-feature",
    content: "The JND (Just-noticeable difference) function is used for video perceptual coding, which reduces bandwidth consumption while keeping the same image quality. For example, this function can improve video smoothness in bandwidth-constrained scenarios, and reduce network traffic consumption in mobile network scenarios. To use this function, contact support\\@agora.io."
  }, {
    heading: "jnd-library-beta-feature",
    content: "The following table shows the extension library name for each platform and the increase in the app size after integration."
  }, {
    heading: "jnd-library-beta-feature",
    content: "Platform"
  }, {
    heading: "jnd-library-beta-feature",
    content: "Architecture"
  }, {
    heading: "jnd-library-beta-feature",
    content: "Library name"
  }, {
    heading: "jnd-library-beta-feature",
    content: "App size increase after integration (KB)"
  }, {
    heading: "jnd-library-beta-feature",
    content: "Android"
  }, {
    heading: "jnd-library-beta-feature",
    content: "arm64-v8a"
  }, {
    heading: "jnd-library-beta-feature",
    content: "`libagora_jnd_extension.so`"
  }, {
    heading: "jnd-library-beta-feature",
    content: "1172"
  }, {
    heading: "jnd-library-beta-feature",
    content: "Android"
  }, {
    heading: "jnd-library-beta-feature",
    content: "armeabi-v7a"
  }, {
    heading: "jnd-library-beta-feature",
    content: "`libagora_jnd_extension.so`"
  }, {
    heading: "jnd-library-beta-feature",
    content: "816"
  }, {
    heading: "jnd-library-beta-feature",
    content: "iOS"
  }, {
    heading: "jnd-library-beta-feature",
    content: "arm64"
  }, {
    heading: "jnd-library-beta-feature",
    content: "`AgoraJNDExtension.xcframework`"
  }, {
    heading: "jnd-library-beta-feature",
    content: "78"
  }, {
    heading: "jnd-library-beta-feature",
    content: "iOS"
  }, {
    heading: "jnd-library-beta-feature",
    content: "armv7"
  }, {
    heading: "jnd-library-beta-feature",
    content: "`AgoraJNDExtension.xcframework`"
  }, {
    heading: "jnd-library-beta-feature",
    content: "69"
  }, {
    heading: "jnd-library-beta-feature",
    content: "macOS"
  }, {
    heading: "jnd-library-beta-feature",
    content: "arm64"
  }, {
    heading: "jnd-library-beta-feature",
    content: "`AgoraJNDExtension.framework`"
  }, {
    heading: "jnd-library-beta-feature",
    content: "720"
  }, {
    heading: "jnd-library-beta-feature",
    content: "macOS"
  }, {
    heading: "jnd-library-beta-feature",
    content: "x86\\_64"
  }, {
    heading: "jnd-library-beta-feature",
    content: "`AgoraJNDExtension.framework`"
  }, {
    heading: "jnd-library-beta-feature",
    content: "616"
  }, {
    heading: "jnd-library-beta-feature",
    content: "Windows"
  }, {
    heading: "jnd-library-beta-feature",
    content: "x86"
  }, {
    heading: "jnd-library-beta-feature",
    content: "`libagora_jnd_extension.dll`"
  }, {
    heading: "jnd-library-beta-feature",
    content: "1528"
  }, {
    heading: "jnd-library-beta-feature",
    content: "Windows"
  }, {
    heading: "jnd-library-beta-feature",
    content: "x86\\_64"
  }, {
    heading: "jnd-library-beta-feature",
    content: "`libagora_jnd_extension.dll`"
  }, {
    heading: "jnd-library-beta-feature",
    content: "1948"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "After integrating the virtual background library, you can call `enableVirtualBackground` to enable the virtual background. See v3.5.0 Release Notes."
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "The following table shows the extension library name for each platform and the increase in the app size after integration."
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "Platform"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "Architecture"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "Library name"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "App size increase after integration (KB)"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "Android"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "arm64-v8a"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "`libagora_segmentation_extension.so`"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "3331"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "Android"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "armeabi-v7a"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "`libagora_segmentation_extension.so`"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "2232"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "iOS"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "arm64"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "`AgoraVideoSegmentationExtension.xcframework`"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "2210"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "iOS"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "armv7"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "`AgoraVideoSegmentationExtension.xcframework`"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "1514"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "macOS"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "arm64"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "`AgoraVideoSegmentationExtension.framework`"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "2802"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "macOS"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "x86\\_64"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "`AgoraVideoSegmentationExtension.framework`"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "2449"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "Windows"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "x86"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "`libagora_segmentation_extension.dll`"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "4401"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "Windows"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "x86\\_64"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "`libagora_segmentation_extension.dll`"
  }, {
    heading: "virtual-background-library-beta-feature",
    content: "5193"
  }, {
    heading: "roi-library-beta-feature",
    content: "The ROI (Region of Interest) function is applied to the face or virtual background segmentation algorithm for face or portrait recognition. In the encoding process, higher quality encoding is used for the ROI to achieve a clearer face or portrait. To use this function, contact support\\@agora.io."
  }, {
    heading: "roi-library-beta-feature",
    content: "The following table shows the extension library name for each platform and the increase in the app size after integration."
  }, {
    heading: "roi-library-beta-feature",
    content: "Platform"
  }, {
    heading: "roi-library-beta-feature",
    content: "Architecture"
  }, {
    heading: "roi-library-beta-feature",
    content: "Library name"
  }, {
    heading: "roi-library-beta-feature",
    content: "App size increase after integration (KB)"
  }, {
    heading: "roi-library-beta-feature",
    content: "Android"
  }, {
    heading: "roi-library-beta-feature",
    content: "arm64-v8a"
  }, {
    heading: "roi-library-beta-feature",
    content: "`libagora_fd_extension.so`"
  }, {
    heading: "roi-library-beta-feature",
    content: "1558"
  }, {
    heading: "roi-library-beta-feature",
    content: "Android"
  }, {
    heading: "roi-library-beta-feature",
    content: "armeabi-v7a"
  }, {
    heading: "roi-library-beta-feature",
    content: "`libagora_fd_extension.so`"
  }, {
    heading: "roi-library-beta-feature",
    content: "977"
  }, {
    heading: "roi-library-beta-feature",
    content: "iOS"
  }, {
    heading: "roi-library-beta-feature",
    content: "armv7"
  }, {
    heading: "roi-library-beta-feature",
    content: "`AgoraFDExtension.framework`"
  }, {
    heading: "roi-library-beta-feature",
    content: "2602"
  }, {
    heading: "roi-library-beta-feature",
    content: "iOS"
  }, {
    heading: "roi-library-beta-feature",
    content: "arm64"
  }, {
    heading: "roi-library-beta-feature",
    content: "`AgoraFDExtension.framework`"
  }, {
    heading: "roi-library-beta-feature",
    content: "3534"
  }, {
    heading: "roi-library-beta-feature",
    content: "macOS"
  }, {
    heading: "roi-library-beta-feature",
    content: "x86\\_64"
  }, {
    heading: "roi-library-beta-feature",
    content: "`AgoraFDExtension.framework`"
  }, {
    heading: "roi-library-beta-feature",
    content: "1674"
  }, {
    heading: "roi-library-beta-feature",
    content: "macOS"
  }, {
    heading: "roi-library-beta-feature",
    content: "arm64"
  }, {
    heading: "roi-library-beta-feature",
    content: "`AgoraFDExtension.framework`"
  }, {
    heading: "roi-library-beta-feature",
    content: "904"
  }, {
    heading: "roi-library-beta-feature",
    content: "Windows"
  }, {
    heading: "roi-library-beta-feature",
    content: "x86\\_64"
  }, {
    heading: "roi-library-beta-feature",
    content: "`libagora_fd_extension.dll`"
  }, {
    heading: "roi-library-beta-feature",
    content: "1993"
  }, {
    heading: "roi-library-beta-feature",
    content: "Windows"
  }, {
    heading: "roi-library-beta-feature",
    content: "x86"
  }, {
    heading: "roi-library-beta-feature",
    content: "`libagora_fd_extension.dll`"
  }, {
    heading: "roi-library-beta-feature",
    content: "1605"
  }, {
    heading: "super-resolution-library-beta-feature",
    content: "After integrating the super resolution library, you can call `enableRemoteSuperResolution` to enable super resolution. See v3.5.1 Release Notes."
  }, {
    heading: "super-resolution-library-beta-feature",
    content: "The following table shows the extension library name for each platform and the increase in the app size after integration."
  }, {
    heading: "super-resolution-library-beta-feature",
    content: "Platform"
  }, {
    heading: "super-resolution-library-beta-feature",
    content: "Architecture"
  }, {
    heading: "super-resolution-library-beta-feature",
    content: "Library name"
  }, {
    heading: "super-resolution-library-beta-feature",
    content: "App size increase after integration (KB)"
  }, {
    heading: "super-resolution-library-beta-feature",
    content: "Android"
  }, {
    heading: "super-resolution-library-beta-feature",
    content: "arm64-v8a"
  }, {
    heading: "super-resolution-library-beta-feature",
    content: "`libagora_super_resolution_extension.so`"
  }, {
    heading: "super-resolution-library-beta-feature",
    content: "837"
  }, {
    heading: "super-resolution-library-beta-feature",
    content: "Android"
  }, {
    heading: "super-resolution-library-beta-feature",
    content: "armeabi-v7a"
  }, {
    heading: "super-resolution-library-beta-feature",
    content: "`libagora_super_resolution_extension.so`"
  }, {
    heading: "super-resolution-library-beta-feature",
    content: "550"
  }, {
    heading: "super-resolution-library-beta-feature",
    content: "iOS"
  }, {
    heading: "super-resolution-library-beta-feature",
    content: "arm64"
  }, {
    heading: "super-resolution-library-beta-feature",
    content: "`AgoraSuperResolutionExtension.xcframework`"
  }, {
    heading: "super-resolution-library-beta-feature",
    content: "342"
  }, {
    heading: "super-resolution-library-beta-feature",
    content: "iOS"
  }, {
    heading: "super-resolution-library-beta-feature",
    content: "armv7"
  }, {
    heading: "super-resolution-library-beta-feature",
    content: "`AgoraSuperResolutionExtension.xcframework`"
  }, {
    heading: "super-resolution-library-beta-feature",
    content: "340"
  }, {
    heading: "image-enhancement-library",
    content: "As of v3.6.0, ensure that you have integrated the image enhancement library before you call `setBeautyEffectOptions` to enable the image enhancement function. See v3.6.0 Release Notes."
  }, {
    heading: "image-enhancement-library",
    content: "The following table shows the extension library name for each platform and the increase in the app size after integration."
  }, {
    heading: "image-enhancement-library",
    content: "Platform"
  }, {
    heading: "image-enhancement-library",
    content: "Architecture"
  }, {
    heading: "image-enhancement-library",
    content: "Library name"
  }, {
    heading: "image-enhancement-library",
    content: "App size increase after integration (KB)"
  }, {
    heading: "image-enhancement-library",
    content: "Android"
  }, {
    heading: "image-enhancement-library",
    content: "arm64-v8a"
  }, {
    heading: "image-enhancement-library",
    content: "`libagora_video_process_extension.so`"
  }, {
    heading: "image-enhancement-library",
    content: "1290"
  }, {
    heading: "image-enhancement-library",
    content: "Android"
  }, {
    heading: "image-enhancement-library",
    content: "armeabi-v7a"
  }, {
    heading: "image-enhancement-library",
    content: "`libagora_video_process_extension.so`"
  }, {
    heading: "image-enhancement-library",
    content: "962"
  }, {
    heading: "image-enhancement-library",
    content: "iOS"
  }, {
    heading: "image-enhancement-library",
    content: "arm64"
  }, {
    heading: "image-enhancement-library",
    content: "`AgoraVideoProcessExtension.xcframework`"
  }, {
    heading: "image-enhancement-library",
    content: "819"
  }, {
    heading: "image-enhancement-library",
    content: "iOS"
  }, {
    heading: "image-enhancement-library",
    content: "armv7"
  }, {
    heading: "image-enhancement-library",
    content: "`AgoraVideoProcessExtension.xcframework`"
  }, {
    heading: "image-enhancement-library",
    content: "768"
  }, {
    heading: "image-enhancement-library",
    content: "macOS"
  }, {
    heading: "image-enhancement-library",
    content: "arm64"
  }, {
    heading: "image-enhancement-library",
    content: "`AgoraVideoProcessExtension.framework`"
  }, {
    heading: "image-enhancement-library",
    content: "1785"
  }, {
    heading: "image-enhancement-library",
    content: "macOS"
  }, {
    heading: "image-enhancement-library",
    content: "x86\\_64"
  }, {
    heading: "image-enhancement-library",
    content: "`AgoraVideoProcessExtension.framework`"
  }, {
    heading: "image-enhancement-library",
    content: "895"
  }, {
    heading: "image-enhancement-library",
    content: "Windows"
  }, {
    heading: "image-enhancement-library",
    content: "x86"
  }, {
    heading: "image-enhancement-library",
    content: "`libagora_video_process_extension.dll`"
  }, {
    heading: "image-enhancement-library",
    content: "2171"
  }, {
    heading: "image-enhancement-library",
    content: "Windows"
  }, {
    heading: "image-enhancement-library",
    content: "x86\\_64"
  }, {
    heading: "image-enhancement-library",
    content: "`libagora_video_process_extension.dll`"
  }, {
    heading: "image-enhancement-library",
    content: "2541"
  }],
  headings: [{
    id: "solution-1-use-the-audio-sdk",
    content: "Solution 1: Use the Audio SDK"
  }, {
    id: "solution-2-remove-unnecessary-extension-libraries",
    content: "Solution 2: Remove unnecessary extension libraries"
  }, {
    id: "deep-learning-noise-reduction-library",
    content: "Deep-learning noise reduction library"
  }, {
    id: "av1-library-beta-feature",
    content: "AV1 library (beta feature)"
  }, {
    id: "jnd-library-beta-feature",
    content: "JND library (beta feature)"
  }, {
    id: "virtual-background-library-beta-feature",
    content: "Virtual background library (beta feature)"
  }, {
    id: "roi-library-beta-feature",
    content: "ROI library (beta feature）"
  }, {
    id: "super-resolution-library-beta-feature",
    content: "Super resolution library (beta feature)"
  }, {
    id: "image-enhancement-library",
    content: "Image enhancement library"
  }]
};
export let toc = [{
  depth: 2,
  url: "#solution-1-use-the-audio-sdk",
  title: _jsx(_Fragment, {
    children: "Solution 1: Use the Audio SDK"
  })
}, {
  depth: 2,
  url: "#solution-2-remove-unnecessary-extension-libraries",
  title: _jsx(_Fragment, {
    children: "Solution 2: Remove unnecessary extension libraries"
  })
}, {
  depth: 3,
  url: "#deep-learning-noise-reduction-library",
  title: _jsx(_Fragment, {
    children: "Deep-learning noise reduction library"
  })
}, {
  depth: 3,
  url: "#av1-library-beta-feature",
  title: _jsx(_Fragment, {
    children: "AV1 library (beta feature)"
  })
}, {
  depth: 3,
  url: "#jnd-library-beta-feature",
  title: _jsx(_Fragment, {
    children: "JND library (beta feature)"
  })
}, {
  depth: 3,
  url: "#virtual-background-library-beta-feature",
  title: _jsx(_Fragment, {
    children: "Virtual background library (beta feature)"
  })
}, {
  depth: 3,
  url: "#roi-library-beta-feature",
  title: _jsx(_Fragment, {
    children: "ROI library (beta feature）"
  })
}, {
  depth: 3,
  url: "#super-resolution-library-beta-feature",
  title: _jsx(_Fragment, {
    children: "Super resolution library (beta feature)"
  })
}, {
  depth: 3,
  url: "#image-enhancement-library",
  title: _jsx(_Fragment, {
    children: "Image enhancement library"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["This page applies to SDKs earlier than v3.6.2 only. As of v3.6.2, Agora offers additional methods for reducing app size. See ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/optimize-and-operate/app-size-optimization",
            children: "Reduce App Size"
          }), " for the latest details."]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "This article describes how to reduce the app size after integrating the RTC SDK Native SDK."
    }), `
`, _jsx(_components.h2, {
      id: "solution-1-use-the-audio-sdk",
      children: "Solution 1: Use the Audio SDK"
    }), `
`, _jsx(_components.p, {
      children: "The RTC SDK supports both audio and video functions, so the package size is larger. If you only need to use the audio functions, Agora recommends integrating the Audio SDK."
    }), `
`, _jsx(_components.h2, {
      id: "solution-2-remove-unnecessary-extension-libraries",
      children: "Solution 2: Remove unnecessary extension libraries"
    }), `
`, _jsxs(_components.p, {
      children: ["The SDK provides extension libraries that can be optionally integrated into the project. The name of extension libraries is suffixed with ", _jsx(_components.code, {
        children: "Extension"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "If you do not need the extension functions, you can directly remove the corresponding extension libraries to reduce the app size."
    }), `
`, _jsx(_components.h3, {
      id: "deep-learning-noise-reduction-library",
      children: "Deep-learning noise reduction library"
    }), `
`, _jsxs(_components.p, {
      children: ["The SDK enables traditional noise reduction by default to reduce most of the stationary background noise. Deep-learning noise reduction adds non-stationary background noise reduction based on the traditional noise reduction. After integrating the deep-learning noise reduction library, you can call ", _jsx(_components.code, {
        children: "enableDeepLearningDenoise"
      }), " to enable the deep-learning noise reduction. See ", _jsx(_components.a, {
        href: "/en/3.x/interactive-live-streaming/introduction/release-notes#v330",
        children: "v3.3.0 Release Notes"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "The following table shows the extension library name for each platform and the increase in the app size after integration."
    }), `
`, _jsxs(_components.table, {
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
            children: "Architecture"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Library name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "App size increase after integration (KB)"
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
            children: "arm64-v8a"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_ai_denoise_extension.so"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1120"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Android"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "armeabi-v7a"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_ai_denoise_extension.so"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "792"
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
            children: "arm64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraAIDenoiseExtension.xcframework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "502"
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
            children: "armv7"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraAIDenoiseExtension.xcframework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "448"
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
            children: "arm64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraAIDenoiseExtension.framework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "496"
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
            children: "x86_64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraAIDenoiseExtension.framework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "588"
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
            children: "x86"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_ai_denoise_extension.dll"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "5312"
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
            children: "x86_64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_ai_denoise_extension.dll"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "5424"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "av1-library-beta-feature",
      children: "AV1 library (beta feature)"
    }), `
`, _jsxs(_components.p, {
      children: ["The AV1 function improves the clarity of texts when users share the screen. To use this function, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "The following table shows the extension library name for each platform and the increase in the app size after integration."
    }), `
`, _jsxs(_components.table, {
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
            children: "Architecture"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Library name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "App size increase after integration (KB)"
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
            children: "arm64-v8a"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_dav1d_extension.so"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "696"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Android"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "armeabi-v7a"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_dav1d_extension.so"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "608"
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
            children: "arm64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraDav1dExtension.xcframework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "959"
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
            children: "armv7"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraDav1dExtension.xcframework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "746"
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
            children: "x86_64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraDav1dExtension.framework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1316"
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
            children: "x86"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_dav1d_extension.dll"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1252"
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
            children: "x86_64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_dav1d_extension.dll"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1756"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "jnd-library-beta-feature",
      children: "JND library (beta feature)"
    }), `
`, _jsxs(_components.p, {
      children: ["The JND (Just-noticeable difference) function is used for video perceptual coding, which reduces bandwidth consumption while keeping the same image quality. For example, this function can improve video smoothness in bandwidth-constrained scenarios, and reduce network traffic consumption in mobile network scenarios. To use this function, contact ", _jsx(_components.a, {
        href: "https://agora-ticket.agora.io/",
        children: "support@agora.io"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "The following table shows the extension library name for each platform and the increase in the app size after integration."
    }), `
`, _jsxs(_components.table, {
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
            children: "Architecture"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Library name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "App size increase after integration (KB)"
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
            children: "arm64-v8a"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_jnd_extension.so"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1172"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Android"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "armeabi-v7a"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_jnd_extension.so"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "816"
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
            children: "arm64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraJNDExtension.xcframework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "78"
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
            children: "armv7"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraJNDExtension.xcframework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "69"
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
            children: "arm64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraJNDExtension.framework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "720"
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
            children: "x86_64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraJNDExtension.framework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "616"
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
            children: "x86"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_jnd_extension.dll"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1528"
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
            children: "x86_64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_jnd_extension.dll"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1948"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "virtual-background-library-beta-feature",
      children: "Virtual background library (beta feature)"
    }), `
`, _jsxs(_components.p, {
      children: ["After integrating the virtual background library, you can call ", _jsx(_components.code, {
        children: "enableVirtualBackground"
      }), " to enable the virtual background. See ", _jsx(_components.a, {
        href: "/en/3.x/interactive-live-streaming/introduction/release-notes#v350",
        children: "v3.5.0 Release Notes"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "The following table shows the extension library name for each platform and the increase in the app size after integration."
    }), `
`, _jsxs(_components.table, {
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
            children: "Architecture"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Library name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "App size increase after integration (KB)"
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
            children: "arm64-v8a"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_segmentation_extension.so"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "3331"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Android"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "armeabi-v7a"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_segmentation_extension.so"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2232"
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
            children: "arm64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraVideoSegmentationExtension.xcframework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2210"
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
            children: "armv7"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraVideoSegmentationExtension.xcframework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1514"
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
            children: "arm64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraVideoSegmentationExtension.framework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2802"
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
            children: "x86_64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraVideoSegmentationExtension.framework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2449"
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
            children: "x86"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_segmentation_extension.dll"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "4401"
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
            children: "x86_64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_segmentation_extension.dll"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "5193"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "roi-library-beta-feature",
      children: "ROI library (beta feature）"
    }), `
`, _jsxs(_components.p, {
      children: ["The ROI (Region of Interest) function is applied to the face or virtual background segmentation algorithm for face or portrait recognition. In the encoding process, higher quality encoding is used for the ROI to achieve a clearer face or portrait. To use this function, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "The following table shows the extension library name for each platform and the increase in the app size after integration."
    }), `
`, _jsxs(_components.table, {
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
            children: "Architecture"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Library name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "App size increase after integration (KB)"
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
            children: "arm64-v8a"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_fd_extension.so"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1558"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Android"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "armeabi-v7a"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_fd_extension.so"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "977"
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
            children: "armv7"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraFDExtension.framework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2602"
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
            children: "arm64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraFDExtension.framework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "3534"
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
            children: "x86_64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraFDExtension.framework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1674"
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
            children: "arm64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraFDExtension.framework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "904"
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
            children: "x86_64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_fd_extension.dll"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1993"
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
            children: "x86"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_fd_extension.dll"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1605"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "super-resolution-library-beta-feature",
      children: "Super resolution library (beta feature)"
    }), `
`, _jsxs(_components.p, {
      children: ["After integrating the super resolution library, you can call ", _jsx(_components.code, {
        children: "enableRemoteSuperResolution"
      }), " to enable super resolution. See ", _jsx(_components.a, {
        href: "/en/3.x/interactive-live-streaming/introduction/release-notes#v351",
        children: "v3.5.1 Release Notes"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "The following table shows the extension library name for each platform and the increase in the app size after integration."
    }), `
`, _jsxs(_components.table, {
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
            children: "Architecture"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Library name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "App size increase after integration (KB)"
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
            children: "arm64-v8a"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_super_resolution_extension.so"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "837"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Android"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "armeabi-v7a"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_super_resolution_extension.so"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "550"
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
            children: "arm64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraSuperResolutionExtension.xcframework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "342"
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
            children: "armv7"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraSuperResolutionExtension.xcframework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "340"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "image-enhancement-library",
      children: "Image enhancement library"
    }), `
`, _jsxs(_components.p, {
      children: ["As of v3.6.0, ensure that you have integrated the image enhancement library before you call ", _jsx(_components.code, {
        children: "setBeautyEffectOptions"
      }), " to enable the image enhancement function. See ", _jsx(_components.a, {
        href: "/en/3.x/interactive-live-streaming/introduction/release-notes#v360",
        children: "v3.6.0 Release Notes"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "The following table shows the extension library name for each platform and the increase in the app size after integration."
    }), `
`, _jsxs(_components.table, {
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
            children: "Architecture"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Library name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "App size increase after integration (KB)"
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
            children: "arm64-v8a"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_video_process_extension.so"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1290"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Android"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "armeabi-v7a"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_video_process_extension.so"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "962"
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
            children: "arm64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraVideoProcessExtension.xcframework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "819"
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
            children: "armv7"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraVideoProcessExtension.xcframework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "768"
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
            children: "arm64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraVideoProcessExtension.framework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1785"
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
            children: "x86_64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "AgoraVideoProcessExtension.framework"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "895"
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
            children: "x86"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_video_process_extension.dll"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2171"
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
            children: "x86_64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "libagora_video_process_extension.dll"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2541"
          })]
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
