import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Release notes",
  description: "Information about changes in the releases of different extensions."
};
export let _markdown = `

This page provides release notes for the Extensions Marketplace SDK extensions.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;web&#x22;]" showTabs="false">
  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    ## AI Noise Suppression [#ai-noise-suppression]

    <CalloutContainer type="info">
      <CalloutDescription>
        Agora charges additionally for this extension. See [Pricing](/en/realtime-media/rtc/reference/pricing-legacy#ai-noise-suppression-pricing).
      </CalloutDescription>
    </CalloutContainer>

    <Accordions type="multiple">
      <Accordion title="v2.0.2" id="v202" headingLevel="3" value="v202">
        Released on June 24, 2026.

        #### New features [#new-features]

        * Added background voice removal.
        * Suitable for noisy environments or scenarios with multiple speakers to further highlight the target voice and improve audio capture.
      </Accordion>

      <Accordion title="v2.0.1" id="v201" headingLevel="3" value="v201">
        Released on April 1, 2026.

        #### Compatibility changes [#compatibility-changes]

        This version no longer supports calling the \`disable\` method before \`pipe\` to disable the processor. Ensure that you call \`pipe\` before invoking \`disable\`.

        #### New features [#new-features-1]

        * Added the \`setLogLevel\` method to the \`IAIDenoiserExtension\` interface class to set the log level for the plugin and WASM module.
        * Added the \`setLatency\` method to the \`IAIDenoiserProcessor\` interface class to configure latency for noise reduction processing.

        #### Improvements [#improvements]

        * Updated the noise reduction algorithm for improved noise suppression, voice fidelity, and overall robustness.
        * Significantly improved voice fidelity after AI noise suppression in scenarios with sampling rates of 16 kHz and above.
        * Optimized CPU resource allocation strategy to enhance runtime efficiency.

        #### API changes [#api-changes]

        The implementation of callbacks has been revised in this version. The original callbacks \`onloaderror\`, \`onoverload\`, \`ondump\`, and \`ondumpend\` are deprecated. Use the \`on\` method with event names \`"pipeerror"\`, \`"overload"\`, \`"dump"\`, or \`"dumpend"\` to listen for the corresponding events instead.
      </Accordion>

      <Accordion title="v1.1.0" id="v110" headingLevel="3" value="v110">
        #### Improvement [#improvement]

        This release improves the calculation performance of the AI-powered noise suppression algorithm.

        #### New features [#new-features-2]

        This release adds the following APIs and parameters:

        * **APIs**:
          * \`checkCompatibility\`: Checks whether the AI Noise Suppression extension is supported on the current browser.
          * \`setMode\`: Sets the noise suppression mode as AI noise suppression or stationary noise suppression.
          * \`setLevel\`: Sets the AI noise suppression level.
        * **Parameters**:
          * \`elapsedTime\` in \`onoverload\`: Reports the time in ms that the extension needs to process one audio frame.

        For API details, see [AI Noise Suppression](/en/realtime-media/rtc/build/enhance-the-audio-experience/ai-noise-suppression).

        #### Compatibility changes [#compatibility-changes-1]

        This release brings the following changes:

        * AI Noise Suppression supports Agora RTC SDK for Web v4.15.0 or later.
        * The extension has Wasm dependencies only. Because JS dependencies are removed, you need to publish the Wasm files located in the \`node_modules/agora-extension-ai-denoiser/external\` directory again. If you have enabled the Content Security Policy (CSP), you need to modify the CSP configuration.
        * The audio data is dumped in PCM format instead of WAV format.
        * To adjust the intensity of noise suppression, best practice is to call \`setLevel\`.
      </Accordion>

      <Accordion title="v1.0.0" id="v100" headingLevel="3" value="v100">
        First release.
      </Accordion>
    </Accordions>

    ## Noise suppression for use cases involving AI [#noise-suppression-for-use-cases-involving-ai]

    ### v1.0.0-beta2 [#v100-beta2]

    \`agora-conversational-ai-denoiser\` v1.0.0-beta2 was released on March 5, 2025, to enhance the user experience in applications powered by Agora Conversational AI Engine.

    <CalloutContainer type="warning">
      <CalloutDescription>
        The \`agora-conversational-ai-denoiser\` plugin has high CPU usage. Agora recommends using it only for AI-related use cases.
      </CalloutDescription>
    </CalloutContainer>

    #### Key features: [#key-features]

    * Significantly improved voice protection, especially for singing.
    * Reduced risk of audio capture and playback stuttering during operation.
    * When AI noise suppression is enabled, the default maximum AGC gain is reduced from 24dB to 12dB.

    ## Virtual background [#virtual-background]

    ### Key features [#key-features-1]

    * Seamless Integration.
      * Integrate directly through an HTML \`<script>\` tag or through npm using:

        \`\`\`js
        import VirtualBackgroundExtension from "agora-extension-virtual-background"
        \`\`\`
      * Works within Agora WebRTC video processing pipelines.

    * Support for multiple background types.
      * **Blurred Background**: Users can blur their actual background with low, medium, or high blur intensity.
      * **Image Background**: Allows replacing the background with an image (\`HTMLImageElement\`).
      * **Video Background**: Supports setting a video as the virtual background.
      * **Solid Color Background**: Allows setting a solid color as the background.

    ### Browser support and limitations [#browser-support-and-limitations]

    * **Safari and Firefox – Limited Support**

      While the virtual background feature may work on Safari and Firefox, it is not officially supported due to performance limitations. Safari users may experience reduced performance due to browser-specific constraints, while Firefox users may encounter video freezing when minimizing the browser or switching tabs. For optimal performance and reliability, we recommend using the latest version of Chrome on desktop.

    * **Mobile Browsers - Not optimal**

      The virtual background feature requires significant CPU and GPU processing power, which exceeds the capabilities of most mobile devices. Due to these hardware-intensive requirements, performance on mobile browsers is inconsistent and varies across devices.

    <Accordions type="multiple">
      <Accordion title="v2.1.0" id="v210" headingLevel="3" value="v210">
        v2.1.0 was released on April 29, 2025, with the following changes:

        * Optimizes memory and CPU usage.
        * Fixes black screen issues at specific resolutions.
      </Accordion>

      <Accordion title="v2.0.0" id="v200" headingLevel="3" value="v200">
        v2.0.0 was released on December 18, 2024.

        This release upgrades the extension algorithm to version 2.0.0. [Virtual Background 2.0.0](https://www.npmjs.com/package/agora-extension-virtual-background/v/2.0.0) provides a more distinct face edge and clearer and more stable video images.

        #### New features [#new-features-3]

        * Support for VP9 codec, which provides better video compression and quality.

        #### Improvements [#improvements-1]

        * Dynamic background switching. Users can change backgrounds without restarting the video stream.
        * Ability to disable/re-enable virtual backgrounds dynamically.
        * Processor optimization for better real-time segmentation.

        #### Upgrading considerations [#upgrading-considerations]

        Version 2.0.0 is suitable for users who prioritize quality over frame rate especially in use-cases requiring:

        * Superior portrait edge detection
        * Complex background handling
        * Premium video quality

        It is recommended for high-end devices such as Apple M1/M2, latest iPhones (A13 Bionic and newer), and premium Android devices (Snapdragon 865 or equivalent).

        Version 1.3.0 is suitable for mid-range devices and is recommended for users who prioritize smooth performance over edge precision such as in standard video conferencing.
      </Accordion>

      <Accordion title="v1.2.0" id="v120" headingLevel="3" value="v120">
        v1.2.0 was released on December 10, 2023.

        #### Compatibility changes [#compatibility-changes-2]

        As of this version, the Virtual Background extension incorporates the necessary Wasm module. You no longer need to publish the Wasm file separately, and pass the \`wasmDir\` parameter when calling the \`init\` method to initialize the extension.

        #### Improvements [#improvements-2]

        This release upgrades the background segmentation algorithm of the extension, optimizing the segmentation effects on the subject, edges, and fingers in complex static and dynamic backgrounds.

        #### Fixed issues [#fixed-issues]

        This release fixed the issue that \`checkCompatibility\` could return inaccurate results on specific devices.

        #### API changes [#api-changes-1]

        The \`wasmDir\` parameter of the \`init\` method is now optional.
      </Accordion>

      <Accordion title="v1.1.3" id="v113" headingLevel="3" value="v113">
        #### Fixed issues [#fixed-issues-1]

        This release fixes the occasional issue of jagged background images on Chrome for Android.
      </Accordion>

      <Accordion title="v1.1.2" id="v112" headingLevel="3" value="v112">
        #### New features [#new-features-4]

        You can now specify the \`fit\` property when calling \`setOptions\`. This sets how the background is resized to fit the container.

        #### Compatibility changes [#compatibility-changes-3]

        Virtual Background supports Agora RTC SDK for Web v4.15.0 or later.
      </Accordion>

      <Accordion title="v1.1.1" id="v111" headingLevel="3" value="v111">
        #### New features [#new-features-5]

        You can now call \`checkCompatibility\` and test if the extension is supported on the current browser.

        #### Fixed issues [#fixed-issues-2]

        A black bar is no longer displayed to the left of the virtual background.
      </Accordion>

      <Accordion title="v1.1.0" id="v110-1" headingLevel="3" value="v110-1">
        #### New features [#new-features-6]

        You can create multiple \`VirtualBackgroundProcessor\` instances to process multiple video streams.
      </Accordion>

      <Accordion title="v1.0.0" id="v100-1" headingLevel="3" value="v100-1">
        First release.
      </Accordion>
    </Accordions>

    ## Super Clarity extension [#super-clarity-extension]

    This extension leverages Agora's AI quality enhancement algorithm to intelligently improve video quality without altering the resolution, thereby optimizing the viewing experience at the receiving end.

    <Accordions type="multiple">
      <Accordion title="v2.0.1" id="v201-1" headingLevel="3" value="v201-1">
        Released on April 1, 2026.

        This version optimizes the sharpening algorithm, improving video experience in some scenarios.
      </Accordion>

      <Accordion title="v2.0.0" id="v200-1" headingLevel="3" value="v200-1">
        Released on November 18, 2025.

        #### Improvements [#improvements-3]

        This version includes the following improvements:

        * Reduces extension size by approximately 30%.
        * Handles WebGL context loss to improve video robustness.
        * Improves smoothness when the sender app goes to the background by aligning frame rates.
        * Expands compatibility with Safari browser.
      </Accordion>

      <Accordion title="v1.0.1" id="v101" headingLevel="3" value="v101">
        Released on November 10, 2024. This is the first version of \`agora-extension-super-clarity\`.
      </Accordion>
    </Accordions>

    ## Watermark extension [#watermark-extension]

    ### v1.0.0 [#v100]

    Released on November 18, 2025.

    This is the first version of \`agora-extension-video-watermark\`.

    ## Video Compositor extension [#video-compositor-extension]

    This extension enables local users to seamlessly merge multiple video streams and images into a single video track. This feature allows for the simultaneous display of multiple video feeds in the same video container.

    ### v1.0.0-beta [#v100-beta]

    Released on October 25, 2022.

    This is the first version of \`agora-extension-video-compositor\`.

    ## Beauty Effect extension [#beauty-effect-extension]

    This extension enables your users to apply beauty effects to their videos. They can adjust settings for whitening, skin smoothing, acne removal, and redness to achieve a natural beauty effect.

    ### v1.0.2-beta [#v102-beta]

    Released on November 26, 2022.

    This is the first version of \`agora-extension-beauty-effect\`.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page provides release notes for the Extensions Marketplace SDK extensions."
  }, {
    heading: "ai-noise-suppression",
    content: "Agora charges additionally for this extension. See Pricing."
  }, {
    heading: "ai-noise-suppression",
    content: "Released on June 24, 2026."
  }, {
    heading: "new-features",
    content: "Added background voice removal."
  }, {
    heading: "new-features",
    content: "Suitable for noisy environments or scenarios with multiple speakers to further highlight the target voice and improve audio capture."
  }, {
    heading: "new-features",
    content: "Released on April 1, 2026."
  }, {
    heading: "compatibility-changes",
    content: "This version no longer supports calling the `disable` method before `pipe` to disable the processor. Ensure that you call `pipe` before invoking `disable`."
  }, {
    heading: "new-features-1",
    content: "Added the `setLogLevel` method to the `IAIDenoiserExtension` interface class to set the log level for the plugin and WASM module."
  }, {
    heading: "new-features-1",
    content: "Added the `setLatency` method to the `IAIDenoiserProcessor` interface class to configure latency for noise reduction processing."
  }, {
    heading: "improvements",
    content: "Updated the noise reduction algorithm for improved noise suppression, voice fidelity, and overall robustness."
  }, {
    heading: "improvements",
    content: "Significantly improved voice fidelity after AI noise suppression in scenarios with sampling rates of 16 kHz and above."
  }, {
    heading: "improvements",
    content: "Optimized CPU resource allocation strategy to enhance runtime efficiency."
  }, {
    heading: "api-changes",
    content: 'The implementation of callbacks has been revised in this version. The original callbacks `onloaderror`, `onoverload`, `ondump`, and `ondumpend` are deprecated. Use the `on` method with event names `"pipeerror"`, `"overload"`, `"dump"`, or `"dumpend"` to listen for the corresponding events instead.'
  }, {
    heading: "improvement",
    content: "This release improves the calculation performance of the AI-powered noise suppression algorithm."
  }, {
    heading: "new-features-2",
    content: "This release adds the following APIs and parameters:"
  }, {
    heading: "new-features-2",
    content: "**APIs**:"
  }, {
    heading: "new-features-2",
    content: "`checkCompatibility`: Checks whether the AI Noise Suppression extension is supported on the current browser."
  }, {
    heading: "new-features-2",
    content: "`setMode`: Sets the noise suppression mode as AI noise suppression or stationary noise suppression."
  }, {
    heading: "new-features-2",
    content: "`setLevel`: Sets the AI noise suppression level."
  }, {
    heading: "new-features-2",
    content: "**Parameters**:"
  }, {
    heading: "new-features-2",
    content: "`elapsedTime` in `onoverload`: Reports the time in ms that the extension needs to process one audio frame."
  }, {
    heading: "new-features-2",
    content: "For API details, see AI Noise Suppression."
  }, {
    heading: "compatibility-changes-1",
    content: "This release brings the following changes:"
  }, {
    heading: "compatibility-changes-1",
    content: "AI Noise Suppression supports Agora RTC SDK for Web v4.15.0 or later."
  }, {
    heading: "compatibility-changes-1",
    content: "The extension has Wasm dependencies only. Because JS dependencies are removed, you need to publish the Wasm files located in the `node_modules/agora-extension-ai-denoiser/external` directory again. If you have enabled the Content Security Policy (CSP), you need to modify the CSP configuration."
  }, {
    heading: "compatibility-changes-1",
    content: "The audio data is dumped in PCM format instead of WAV format."
  }, {
    heading: "compatibility-changes-1",
    content: "To adjust the intensity of noise suppression, best practice is to call `setLevel`."
  }, {
    heading: "compatibility-changes-1",
    content: "First release."
  }, {
    heading: "v100-beta2",
    content: "`agora-conversational-ai-denoiser` v1.0.0-beta2 was released on March 5, 2025, to enhance the user experience in applications powered by Agora Conversational AI Engine."
  }, {
    heading: "v100-beta2",
    content: "The `agora-conversational-ai-denoiser` plugin has high CPU usage. Agora recommends using it only for AI-related use cases."
  }, {
    heading: "key-features",
    content: "Significantly improved voice protection, especially for singing."
  }, {
    heading: "key-features",
    content: "Reduced risk of audio capture and playback stuttering during operation."
  }, {
    heading: "key-features",
    content: "When AI noise suppression is enabled, the default maximum AGC gain is reduced from 24dB to 12dB."
  }, {
    heading: "key-features-1",
    content: "Seamless Integration."
  }, {
    heading: "key-features-1",
    content: "Integrate directly through an HTML `<script>` tag or through npm using:"
  }, {
    heading: "key-features-1",
    content: "Works within Agora WebRTC video processing pipelines."
  }, {
    heading: "key-features-1",
    content: "Support for multiple background types."
  }, {
    heading: "key-features-1",
    content: "**Blurred Background**: Users can blur their actual background with low, medium, or high blur intensity."
  }, {
    heading: "key-features-1",
    content: "**Image Background**: Allows replacing the background with an image (`HTMLImageElement`)."
  }, {
    heading: "key-features-1",
    content: "**Video Background**: Supports setting a video as the virtual background."
  }, {
    heading: "key-features-1",
    content: "**Solid Color Background**: Allows setting a solid color as the background."
  }, {
    heading: "browser-support-and-limitations",
    content: "**Safari and Firefox – Limited Support**"
  }, {
    heading: "browser-support-and-limitations",
    content: "While the virtual background feature may work on Safari and Firefox, it is not officially supported due to performance limitations. Safari users may experience reduced performance due to browser-specific constraints, while Firefox users may encounter video freezing when minimizing the browser or switching tabs. For optimal performance and reliability, we recommend using the latest version of Chrome on desktop."
  }, {
    heading: "browser-support-and-limitations",
    content: "**Mobile Browsers - Not optimal**"
  }, {
    heading: "browser-support-and-limitations",
    content: "The virtual background feature requires significant CPU and GPU processing power, which exceeds the capabilities of most mobile devices. Due to these hardware-intensive requirements, performance on mobile browsers is inconsistent and varies across devices."
  }, {
    heading: "browser-support-and-limitations",
    content: "v2.1.0 was released on April 29, 2025, with the following changes:"
  }, {
    heading: "browser-support-and-limitations",
    content: "Optimizes memory and CPU usage."
  }, {
    heading: "browser-support-and-limitations",
    content: "Fixes black screen issues at specific resolutions."
  }, {
    heading: "browser-support-and-limitations",
    content: "v2.0.0 was released on December 18, 2024."
  }, {
    heading: "browser-support-and-limitations",
    content: "This release upgrades the extension algorithm to version 2.0.0. Virtual Background 2.0.0 provides a more distinct face edge and clearer and more stable video images."
  }, {
    heading: "new-features-3",
    content: "Support for VP9 codec, which provides better video compression and quality."
  }, {
    heading: "improvements-1",
    content: "Dynamic background switching. Users can change backgrounds without restarting the video stream."
  }, {
    heading: "improvements-1",
    content: "Ability to disable/re-enable virtual backgrounds dynamically."
  }, {
    heading: "improvements-1",
    content: "Processor optimization for better real-time segmentation."
  }, {
    heading: "upgrading-considerations",
    content: "Version 2.0.0 is suitable for users who prioritize quality over frame rate especially in use-cases requiring:"
  }, {
    heading: "upgrading-considerations",
    content: "Superior portrait edge detection"
  }, {
    heading: "upgrading-considerations",
    content: "Complex background handling"
  }, {
    heading: "upgrading-considerations",
    content: "Premium video quality"
  }, {
    heading: "upgrading-considerations",
    content: "It is recommended for high-end devices such as Apple M1/M2, latest iPhones (A13 Bionic and newer), and premium Android devices (Snapdragon 865 or equivalent)."
  }, {
    heading: "upgrading-considerations",
    content: "Version 1.3.0 is suitable for mid-range devices and is recommended for users who prioritize smooth performance over edge precision such as in standard video conferencing."
  }, {
    heading: "upgrading-considerations",
    content: "v1.2.0 was released on December 10, 2023."
  }, {
    heading: "compatibility-changes-2",
    content: "As of this version, the Virtual Background extension incorporates the necessary Wasm module. You no longer need to publish the Wasm file separately, and pass the `wasmDir` parameter when calling the `init` method to initialize the extension."
  }, {
    heading: "improvements-2",
    content: "This release upgrades the background segmentation algorithm of the extension, optimizing the segmentation effects on the subject, edges, and fingers in complex static and dynamic backgrounds."
  }, {
    heading: "fixed-issues",
    content: "This release fixed the issue that `checkCompatibility` could return inaccurate results on specific devices."
  }, {
    heading: "api-changes-1",
    content: "The `wasmDir` parameter of the `init` method is now optional."
  }, {
    heading: "fixed-issues-1",
    content: "This release fixes the occasional issue of jagged background images on Chrome for Android."
  }, {
    heading: "new-features-4",
    content: "You can now specify the `fit` property when calling `setOptions`. This sets how the background is resized to fit the container."
  }, {
    heading: "compatibility-changes-3",
    content: "Virtual Background supports Agora RTC SDK for Web v4.15.0 or later."
  }, {
    heading: "new-features-5",
    content: "You can now call `checkCompatibility` and test if the extension is supported on the current browser."
  }, {
    heading: "fixed-issues-2",
    content: "A black bar is no longer displayed to the left of the virtual background."
  }, {
    heading: "new-features-6",
    content: "You can create multiple `VirtualBackgroundProcessor` instances to process multiple video streams."
  }, {
    heading: "new-features-6",
    content: "First release."
  }, {
    heading: "super-clarity-extension",
    content: "This extension leverages Agora's AI quality enhancement algorithm to intelligently improve video quality without altering the resolution, thereby optimizing the viewing experience at the receiving end."
  }, {
    heading: "super-clarity-extension",
    content: "Released on April 1, 2026."
  }, {
    heading: "super-clarity-extension",
    content: "This version optimizes the sharpening algorithm, improving video experience in some scenarios."
  }, {
    heading: "super-clarity-extension",
    content: "Released on November 18, 2025."
  }, {
    heading: "improvements-3",
    content: "This version includes the following improvements:"
  }, {
    heading: "improvements-3",
    content: "Reduces extension size by approximately 30%."
  }, {
    heading: "improvements-3",
    content: "Handles WebGL context loss to improve video robustness."
  }, {
    heading: "improvements-3",
    content: "Improves smoothness when the sender app goes to the background by aligning frame rates."
  }, {
    heading: "improvements-3",
    content: "Expands compatibility with Safari browser."
  }, {
    heading: "improvements-3",
    content: "Released on November 10, 2024. This is the first version of `agora-extension-super-clarity`."
  }, {
    heading: "v100",
    content: "Released on November 18, 2025."
  }, {
    heading: "v100",
    content: "This is the first version of `agora-extension-video-watermark`."
  }, {
    heading: "video-compositor-extension",
    content: "This extension enables local users to seamlessly merge multiple video streams and images into a single video track. This feature allows for the simultaneous display of multiple video feeds in the same video container."
  }, {
    heading: "v100-beta",
    content: "Released on October 25, 2022."
  }, {
    heading: "v100-beta",
    content: "This is the first version of `agora-extension-video-compositor`."
  }, {
    heading: "beauty-effect-extension",
    content: "This extension enables your users to apply beauty effects to their videos. They can adjust settings for whitening, skin smoothing, acne removal, and redness to achieve a natural beauty effect."
  }, {
    heading: "v102-beta",
    content: "Released on November 26, 2022."
  }, {
    heading: "v102-beta",
    content: "This is the first version of `agora-extension-beauty-effect`."
  }],
  headings: [{
    id: "ai-noise-suppression",
    content: "AI Noise Suppression"
  }, {
    id: "new-features",
    content: "New features"
  }, {
    id: "compatibility-changes",
    content: "Compatibility changes"
  }, {
    id: "new-features-1",
    content: "New features"
  }, {
    id: "improvements",
    content: "Improvements"
  }, {
    id: "api-changes",
    content: "API changes"
  }, {
    id: "improvement",
    content: "Improvement"
  }, {
    id: "new-features-2",
    content: "New features"
  }, {
    id: "compatibility-changes-1",
    content: "Compatibility changes"
  }, {
    id: "noise-suppression-for-use-cases-involving-ai",
    content: "Noise suppression for use cases involving AI"
  }, {
    id: "v100-beta2",
    content: "v1.0.0-beta2"
  }, {
    id: "key-features",
    content: "Key features:"
  }, {
    id: "virtual-background",
    content: "Virtual background"
  }, {
    id: "key-features-1",
    content: "Key features"
  }, {
    id: "browser-support-and-limitations",
    content: "Browser support and limitations"
  }, {
    id: "new-features-3",
    content: "New features"
  }, {
    id: "improvements-1",
    content: "Improvements"
  }, {
    id: "upgrading-considerations",
    content: "Upgrading considerations"
  }, {
    id: "compatibility-changes-2",
    content: "Compatibility changes"
  }, {
    id: "improvements-2",
    content: "Improvements"
  }, {
    id: "fixed-issues",
    content: "Fixed issues"
  }, {
    id: "api-changes-1",
    content: "API changes"
  }, {
    id: "fixed-issues-1",
    content: "Fixed issues"
  }, {
    id: "new-features-4",
    content: "New features"
  }, {
    id: "compatibility-changes-3",
    content: "Compatibility changes"
  }, {
    id: "new-features-5",
    content: "New features"
  }, {
    id: "fixed-issues-2",
    content: "Fixed issues"
  }, {
    id: "new-features-6",
    content: "New features"
  }, {
    id: "super-clarity-extension",
    content: "Super Clarity extension"
  }, {
    id: "improvements-3",
    content: "Improvements"
  }, {
    id: "watermark-extension",
    content: "Watermark extension"
  }, {
    id: "v100",
    content: "v1.0.0"
  }, {
    id: "video-compositor-extension",
    content: "Video Compositor extension"
  }, {
    id: "v100-beta",
    content: "v1.0.0-beta"
  }, {
    id: "beauty-effect-extension",
    content: "Beauty Effect extension"
  }, {
    id: "v102-beta",
    content: "v1.0.2-beta"
  }]
};
export let toc = [{
  depth: 2,
  url: "#ai-noise-suppression",
  title: _jsx(_Fragment, {
    children: "AI Noise Suppression"
  })
}, {
  depth: 4,
  url: "#new-features",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#compatibility-changes",
  title: _jsx(_Fragment, {
    children: "Compatibility changes"
  })
}, {
  depth: 4,
  url: "#new-features-1",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#api-changes",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#improvement",
  title: _jsx(_Fragment, {
    children: "Improvement"
  })
}, {
  depth: 4,
  url: "#new-features-2",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#compatibility-changes-1",
  title: _jsx(_Fragment, {
    children: "Compatibility changes"
  })
}, {
  depth: 2,
  url: "#noise-suppression-for-use-cases-involving-ai",
  title: _jsx(_Fragment, {
    children: "Noise suppression for use cases involving AI"
  })
}, {
  depth: 3,
  url: "#v100-beta2",
  title: _jsx(_Fragment, {
    children: "v1.0.0-beta2"
  })
}, {
  depth: 4,
  url: "#key-features",
  title: _jsx(_Fragment, {
    children: "Key features:"
  })
}, {
  depth: 2,
  url: "#virtual-background",
  title: _jsx(_Fragment, {
    children: "Virtual background"
  })
}, {
  depth: 3,
  url: "#key-features-1",
  title: _jsx(_Fragment, {
    children: "Key features"
  })
}, {
  depth: 3,
  url: "#browser-support-and-limitations",
  title: _jsx(_Fragment, {
    children: "Browser support and limitations"
  })
}, {
  depth: 4,
  url: "#new-features-3",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-1",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#upgrading-considerations",
  title: _jsx(_Fragment, {
    children: "Upgrading considerations"
  })
}, {
  depth: 4,
  url: "#compatibility-changes-2",
  title: _jsx(_Fragment, {
    children: "Compatibility changes"
  })
}, {
  depth: 4,
  url: "#improvements-2",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#api-changes-1",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#fixed-issues-1",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#new-features-4",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#compatibility-changes-3",
  title: _jsx(_Fragment, {
    children: "Compatibility changes"
  })
}, {
  depth: 4,
  url: "#new-features-5",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#fixed-issues-2",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#new-features-6",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 2,
  url: "#super-clarity-extension",
  title: _jsx(_Fragment, {
    children: "Super Clarity extension"
  })
}, {
  depth: 4,
  url: "#improvements-3",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 2,
  url: "#watermark-extension",
  title: _jsx(_Fragment, {
    children: "Watermark extension"
  })
}, {
  depth: 3,
  url: "#v100",
  title: _jsx(_Fragment, {
    children: "v1.0.0"
  })
}, {
  depth: 2,
  url: "#video-compositor-extension",
  title: _jsx(_Fragment, {
    children: "Video Compositor extension"
  })
}, {
  depth: 3,
  url: "#v100-beta",
  title: _jsx(_Fragment, {
    children: "v1.0.0-beta"
  })
}, {
  depth: 2,
  url: "#beauty-effect-extension",
  title: _jsx(_Fragment, {
    children: "Beauty Effect extension"
  })
}, {
  depth: 3,
  url: "#v102-beta",
  title: _jsx(_Fragment, {
    children: "v1.0.2-beta"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { Accordion, Accordions, CalloutContainer, CalloutDescription, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!Accordion)
    _missingMdxReference("Accordion", true);
  if (!Accordions)
    _missingMdxReference("Accordions", true);
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
      children: "This page provides release notes for the Extensions Marketplace SDK extensions."
    }), `
`, _jsx(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["web"]',
      showTabs: "false",
      children: _jsxs(_PlatformPanel, {
        platform: "web",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "web"
        }), _jsx(_components.h2, {
          id: "ai-noise-suppression",
          children: "AI Noise Suppression"
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Agora charges additionally for this extension. See ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/reference/pricing-legacy#ai-noise-suppression-pricing",
                children: "Pricing"
              }), "."]
            })
          })
        }), _jsxs(Accordions, {
          type: "multiple",
          openFirst: true,
          children: [_jsxs(Accordion, {
            title: "v2.0.2",
            id: "v202",
            headingLevel: 3,
            value: "v202",
            children: [_jsx(_components.p, {
              children: "Released on June 24, 2026."
            }), _jsx(_components.h4, {
              id: "new-features",
              children: "New features"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Added background voice removal."
              }), `
`, _jsx(_components.li, {
                children: "Suitable for noisy environments or scenarios with multiple speakers to further highlight the target voice and improve audio capture."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.0.1",
            id: "v201",
            headingLevel: 3,
            value: "v201",
            children: [_jsx(_components.p, {
              children: "Released on April 1, 2026."
            }), _jsx(_components.h4, {
              id: "compatibility-changes",
              children: "Compatibility changes"
            }), _jsxs(_components.p, {
              children: ["This version no longer supports calling the ", _jsx(_components.code, {
                children: "disable"
              }), " method before ", _jsx(_components.code, {
                children: "pipe"
              }), " to disable the processor. Ensure that you call ", _jsx(_components.code, {
                children: "pipe"
              }), " before invoking ", _jsx(_components.code, {
                children: "disable"
              }), "."]
            }), _jsx(_components.h4, {
              id: "new-features-1",
              children: "New features"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["Added the ", _jsx(_components.code, {
                  children: "setLogLevel"
                }), " method to the ", _jsx(_components.code, {
                  children: "IAIDenoiserExtension"
                }), " interface class to set the log level for the plugin and WASM module."]
              }), `
`, _jsxs(_components.li, {
                children: ["Added the ", _jsx(_components.code, {
                  children: "setLatency"
                }), " method to the ", _jsx(_components.code, {
                  children: "IAIDenoiserProcessor"
                }), " interface class to configure latency for noise reduction processing."]
              }), `
`]
            }), _jsx(_components.h4, {
              id: "improvements",
              children: "Improvements"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Updated the noise reduction algorithm for improved noise suppression, voice fidelity, and overall robustness."
              }), `
`, _jsx(_components.li, {
                children: "Significantly improved voice fidelity after AI noise suppression in scenarios with sampling rates of 16 kHz and above."
              }), `
`, _jsx(_components.li, {
                children: "Optimized CPU resource allocation strategy to enhance runtime efficiency."
              }), `
`]
            }), _jsx(_components.h4, {
              id: "api-changes",
              children: "API changes"
            }), _jsxs(_components.p, {
              children: ["The implementation of callbacks has been revised in this version. The original callbacks ", _jsx(_components.code, {
                children: "onloaderror"
              }), ", ", _jsx(_components.code, {
                children: "onoverload"
              }), ", ", _jsx(_components.code, {
                children: "ondump"
              }), ", and ", _jsx(_components.code, {
                children: "ondumpend"
              }), " are deprecated. Use the ", _jsx(_components.code, {
                children: "on"
              }), " method with event names ", _jsx(_components.code, {
                children: '"pipeerror"'
              }), ", ", _jsx(_components.code, {
                children: '"overload"'
              }), ", ", _jsx(_components.code, {
                children: '"dump"'
              }), ", or ", _jsx(_components.code, {
                children: '"dumpend"'
              }), " to listen for the corresponding events instead."]
            })]
          }), _jsxs(Accordion, {
            title: "v1.1.0",
            id: "v110",
            headingLevel: 3,
            value: "v110",
            children: [_jsx(_components.h4, {
              id: "improvement",
              children: "Improvement"
            }), _jsx(_components.p, {
              children: "This release improves the calculation performance of the AI-powered noise suppression algorithm."
            }), _jsx(_components.h4, {
              id: "new-features-2",
              children: "New features"
            }), _jsx(_components.p, {
              children: "This release adds the following APIs and parameters:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "APIs"
                }), ":", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "checkCompatibility"
                    }), ": Checks whether the AI Noise Suppression extension is supported on the current browser."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "setMode"
                    }), ": Sets the noise suppression mode as AI noise suppression or stationary noise suppression."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "setLevel"
                    }), ": Sets the AI noise suppression level."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Parameters"
                }), ":", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "elapsedTime"
                    }), " in ", _jsx(_components.code, {
                      children: "onoverload"
                    }), ": Reports the time in ms that the extension needs to process one audio frame."]
                  }), `
`]
                }), `
`]
              }), `
`]
            }), _jsxs(_components.p, {
              children: ["For API details, see ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/build/enhance-the-audio-experience/ai-noise-suppression",
                children: "AI Noise Suppression"
              }), "."]
            }), _jsx(_components.h4, {
              id: "compatibility-changes-1",
              children: "Compatibility changes"
            }), _jsx(_components.p, {
              children: "This release brings the following changes:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "AI Noise Suppression supports Agora RTC SDK for Web v4.15.0 or later."
              }), `
`, _jsxs(_components.li, {
                children: ["The extension has Wasm dependencies only. Because JS dependencies are removed, you need to publish the Wasm files located in the ", _jsx(_components.code, {
                  children: "node_modules/agora-extension-ai-denoiser/external"
                }), " directory again. If you have enabled the Content Security Policy (CSP), you need to modify the CSP configuration."]
              }), `
`, _jsx(_components.li, {
                children: "The audio data is dumped in PCM format instead of WAV format."
              }), `
`, _jsxs(_components.li, {
                children: ["To adjust the intensity of noise suppression, best practice is to call ", _jsx(_components.code, {
                  children: "setLevel"
                }), "."]
              }), `
`]
            })]
          }), _jsx(Accordion, {
            title: "v1.0.0",
            id: "v100",
            headingLevel: 3,
            value: "v100",
            children: _jsx(_components.p, {
              children: "First release."
            })
          })]
        }), _jsx(_components.h2, {
          id: "noise-suppression-for-use-cases-involving-ai",
          children: "Noise suppression for use cases involving AI"
        }), _jsx(_components.h3, {
          id: "v100-beta2",
          children: "v1.0.0-beta2"
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "agora-conversational-ai-denoiser"
          }), " v1.0.0-beta2 was released on March 5, 2025, to enhance the user experience in applications powered by Agora Conversational AI Engine."]
        }), _jsx(CalloutContainer, {
          type: "warning",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["The ", _jsx(_components.code, {
                children: "agora-conversational-ai-denoiser"
              }), " plugin has high CPU usage. Agora recommends using it only for AI-related use cases."]
            })
          })
        }), _jsx(_components.h4, {
          id: "key-features",
          children: "Key features:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Significantly improved voice protection, especially for singing."
          }), `
`, _jsx(_components.li, {
            children: "Reduced risk of audio capture and playback stuttering during operation."
          }), `
`, _jsx(_components.li, {
            children: "When AI noise suppression is enabled, the default maximum AGC gain is reduced from 24dB to 12dB."
          }), `
`]
        }), _jsx(_components.h2, {
          id: "virtual-background",
          children: "Virtual background"
        }), _jsx(_components.h3, {
          id: "key-features-1",
          children: "Key features"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Seamless Integration."
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Integrate directly through an HTML ", _jsx(_components.code, {
                    children: "<script>"
                  }), " tag or through npm using:"]
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
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "import"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " VirtualBackgroundExtension "
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
                          children: ' "agora-extension-virtual-background"'
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
                  children: "Works within Agora WebRTC video processing pipelines."
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
              children: "Support for multiple background types."
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Blurred Background"
                }), ": Users can blur their actual background with low, medium, or high blur intensity."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Image Background"
                }), ": Allows replacing the background with an image (", _jsx(_components.code, {
                  children: "HTMLImageElement"
                }), ")."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Video Background"
                }), ": Supports setting a video as the virtual background."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Solid Color Background"
                }), ": Allows setting a solid color as the background."]
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "browser-support-and-limitations",
          children: "Browser support and limitations"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Safari and Firefox – Limited Support"
              })
            }), `
`, _jsx(_components.p, {
              children: "While the virtual background feature may work on Safari and Firefox, it is not officially supported due to performance limitations. Safari users may experience reduced performance due to browser-specific constraints, while Firefox users may encounter video freezing when minimizing the browser or switching tabs. For optimal performance and reliability, we recommend using the latest version of Chrome on desktop."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Mobile Browsers - Not optimal"
              })
            }), `
`, _jsx(_components.p, {
              children: "The virtual background feature requires significant CPU and GPU processing power, which exceeds the capabilities of most mobile devices. Due to these hardware-intensive requirements, performance on mobile browsers is inconsistent and varies across devices."
            }), `
`]
          }), `
`]
        }), _jsxs(Accordions, {
          type: "multiple",
          openFirst: true,
          children: [_jsxs(Accordion, {
            title: "v2.1.0",
            id: "v210",
            headingLevel: 3,
            value: "v210",
            children: [_jsx(_components.p, {
              children: "v2.1.0 was released on April 29, 2025, with the following changes:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Optimizes memory and CPU usage."
              }), `
`, _jsx(_components.li, {
                children: "Fixes black screen issues at specific resolutions."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.0.0",
            id: "v200",
            headingLevel: 3,
            value: "v200",
            children: [_jsx(_components.p, {
              children: "v2.0.0 was released on December 18, 2024."
            }), _jsxs(_components.p, {
              children: ["This release upgrades the extension algorithm to version 2.0.0. ", _jsx(_components.a, {
                href: "https://www.npmjs.com/package/agora-extension-virtual-background/v/2.0.0",
                children: "Virtual Background 2.0.0"
              }), " provides a more distinct face edge and clearer and more stable video images."]
            }), _jsx(_components.h4, {
              id: "new-features-3",
              children: "New features"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Support for VP9 codec, which provides better video compression and quality."
              }), `
`]
            }), _jsx(_components.h4, {
              id: "improvements-1",
              children: "Improvements"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Dynamic background switching. Users can change backgrounds without restarting the video stream."
              }), `
`, _jsx(_components.li, {
                children: "Ability to disable/re-enable virtual backgrounds dynamically."
              }), `
`, _jsx(_components.li, {
                children: "Processor optimization for better real-time segmentation."
              }), `
`]
            }), _jsx(_components.h4, {
              id: "upgrading-considerations",
              children: "Upgrading considerations"
            }), _jsx(_components.p, {
              children: "Version 2.0.0 is suitable for users who prioritize quality over frame rate especially in use-cases requiring:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Superior portrait edge detection"
              }), `
`, _jsx(_components.li, {
                children: "Complex background handling"
              }), `
`, _jsx(_components.li, {
                children: "Premium video quality"
              }), `
`]
            }), _jsx(_components.p, {
              children: "It is recommended for high-end devices such as Apple M1/M2, latest iPhones (A13 Bionic and newer), and premium Android devices (Snapdragon 865 or equivalent)."
            }), _jsx(_components.p, {
              children: "Version 1.3.0 is suitable for mid-range devices and is recommended for users who prioritize smooth performance over edge precision such as in standard video conferencing."
            })]
          }), _jsxs(Accordion, {
            title: "v1.2.0",
            id: "v120",
            headingLevel: 3,
            value: "v120",
            children: [_jsx(_components.p, {
              children: "v1.2.0 was released on December 10, 2023."
            }), _jsx(_components.h4, {
              id: "compatibility-changes-2",
              children: "Compatibility changes"
            }), _jsxs(_components.p, {
              children: ["As of this version, the Virtual Background extension incorporates the necessary Wasm module. You no longer need to publish the Wasm file separately, and pass the ", _jsx(_components.code, {
                children: "wasmDir"
              }), " parameter when calling the ", _jsx(_components.code, {
                children: "init"
              }), " method to initialize the extension."]
            }), _jsx(_components.h4, {
              id: "improvements-2",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release upgrades the background segmentation algorithm of the extension, optimizing the segmentation effects on the subject, edges, and fingers in complex static and dynamic backgrounds."
            }), _jsx(_components.h4, {
              id: "fixed-issues",
              children: "Fixed issues"
            }), _jsxs(_components.p, {
              children: ["This release fixed the issue that ", _jsx(_components.code, {
                children: "checkCompatibility"
              }), " could return inaccurate results on specific devices."]
            }), _jsx(_components.h4, {
              id: "api-changes-1",
              children: "API changes"
            }), _jsxs(_components.p, {
              children: ["The ", _jsx(_components.code, {
                children: "wasmDir"
              }), " parameter of the ", _jsx(_components.code, {
                children: "init"
              }), " method is now optional."]
            })]
          }), _jsxs(Accordion, {
            title: "v1.1.3",
            id: "v113",
            headingLevel: 3,
            value: "v113",
            children: [_jsx(_components.h4, {
              id: "fixed-issues-1",
              children: "Fixed issues"
            }), _jsx(_components.p, {
              children: "This release fixes the occasional issue of jagged background images on Chrome for Android."
            })]
          }), _jsxs(Accordion, {
            title: "v1.1.2",
            id: "v112",
            headingLevel: 3,
            value: "v112",
            children: [_jsx(_components.h4, {
              id: "new-features-4",
              children: "New features"
            }), _jsxs(_components.p, {
              children: ["You can now specify the ", _jsx(_components.code, {
                children: "fit"
              }), " property when calling ", _jsx(_components.code, {
                children: "setOptions"
              }), ". This sets how the background is resized to fit the container."]
            }), _jsx(_components.h4, {
              id: "compatibility-changes-3",
              children: "Compatibility changes"
            }), _jsx(_components.p, {
              children: "Virtual Background supports Agora RTC SDK for Web v4.15.0 or later."
            })]
          }), _jsxs(Accordion, {
            title: "v1.1.1",
            id: "v111",
            headingLevel: 3,
            value: "v111",
            children: [_jsx(_components.h4, {
              id: "new-features-5",
              children: "New features"
            }), _jsxs(_components.p, {
              children: ["You can now call ", _jsx(_components.code, {
                children: "checkCompatibility"
              }), " and test if the extension is supported on the current browser."]
            }), _jsx(_components.h4, {
              id: "fixed-issues-2",
              children: "Fixed issues"
            }), _jsx(_components.p, {
              children: "A black bar is no longer displayed to the left of the virtual background."
            })]
          }), _jsxs(Accordion, {
            title: "v1.1.0",
            id: "v110-1",
            headingLevel: 3,
            value: "v110-1",
            children: [_jsx(_components.h4, {
              id: "new-features-6",
              children: "New features"
            }), _jsxs(_components.p, {
              children: ["You can create multiple ", _jsx(_components.code, {
                children: "VirtualBackgroundProcessor"
              }), " instances to process multiple video streams."]
            })]
          }), _jsx(Accordion, {
            title: "v1.0.0",
            id: "v100-1",
            headingLevel: 3,
            value: "v100-1",
            children: _jsx(_components.p, {
              children: "First release."
            })
          })]
        }), _jsx(_components.h2, {
          id: "super-clarity-extension",
          children: "Super Clarity extension"
        }), _jsx(_components.p, {
          children: "This extension leverages Agora's AI quality enhancement algorithm to intelligently improve video quality without altering the resolution, thereby optimizing the viewing experience at the receiving end."
        }), _jsxs(Accordions, {
          type: "multiple",
          openFirst: true,
          children: [_jsxs(Accordion, {
            title: "v2.0.1",
            id: "v201-1",
            headingLevel: 3,
            value: "v201-1",
            children: [_jsx(_components.p, {
              children: "Released on April 1, 2026."
            }), _jsx(_components.p, {
              children: "This version optimizes the sharpening algorithm, improving video experience in some scenarios."
            })]
          }), _jsxs(Accordion, {
            title: "v2.0.0",
            id: "v200-1",
            headingLevel: 3,
            value: "v200-1",
            children: [_jsx(_components.p, {
              children: "Released on November 18, 2025."
            }), _jsx(_components.h4, {
              id: "improvements-3",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This version includes the following improvements:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Reduces extension size by approximately 30%."
              }), `
`, _jsx(_components.li, {
                children: "Handles WebGL context loss to improve video robustness."
              }), `
`, _jsx(_components.li, {
                children: "Improves smoothness when the sender app goes to the background by aligning frame rates."
              }), `
`, _jsx(_components.li, {
                children: "Expands compatibility with Safari browser."
              }), `
`]
            })]
          }), _jsx(Accordion, {
            title: "v1.0.1",
            id: "v101",
            headingLevel: 3,
            value: "v101",
            children: _jsxs(_components.p, {
              children: ["Released on November 10, 2024. This is the first version of ", _jsx(_components.code, {
                children: "agora-extension-super-clarity"
              }), "."]
            })
          })]
        }), _jsx(_components.h2, {
          id: "watermark-extension",
          children: "Watermark extension"
        }), _jsx(_components.h3, {
          id: "v100",
          children: "v1.0.0"
        }), _jsx(_components.p, {
          children: "Released on November 18, 2025."
        }), _jsxs(_components.p, {
          children: ["This is the first version of ", _jsx(_components.code, {
            children: "agora-extension-video-watermark"
          }), "."]
        }), _jsx(_components.h2, {
          id: "video-compositor-extension",
          children: "Video Compositor extension"
        }), _jsx(_components.p, {
          children: "This extension enables local users to seamlessly merge multiple video streams and images into a single video track. This feature allows for the simultaneous display of multiple video feeds in the same video container."
        }), _jsx(_components.h3, {
          id: "v100-beta",
          children: "v1.0.0-beta"
        }), _jsx(_components.p, {
          children: "Released on October 25, 2022."
        }), _jsxs(_components.p, {
          children: ["This is the first version of ", _jsx(_components.code, {
            children: "agora-extension-video-compositor"
          }), "."]
        }), _jsx(_components.h2, {
          id: "beauty-effect-extension",
          children: "Beauty Effect extension"
        }), _jsx(_components.p, {
          children: "This extension enables your users to apply beauty effects to their videos. They can adjust settings for whitening, skin smoothing, acne removal, and redness to achieve a natural beauty effect."
        }), _jsx(_components.h3, {
          id: "v102-beta",
          children: "v1.0.2-beta"
        }), _jsx(_components.p, {
          children: "Released on November 26, 2022."
        }), _jsxs(_components.p, {
          children: ["This is the first version of ", _jsx(_components.code, {
            children: "agora-extension-beauty-effect"
          }), "."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })
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
