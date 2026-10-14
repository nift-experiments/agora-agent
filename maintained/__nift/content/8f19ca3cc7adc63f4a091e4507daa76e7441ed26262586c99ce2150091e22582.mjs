import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AI Noise Suppression",
  description: "Suppress hundreds of types of noise and reduce distortion for human voice"
};
export let _markdown = `

AI Noise Suppression enables you to suppress hundreds of types of noise and reduce distortion in human voices when multiple people speak at the same time. In use-cases such as online meetings, online chat rooms, video consultations with doctors, and online gaming, AI Noise Suppression makes virtual communication as smooth as face-to-face interaction.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;web&#x22;,&#x22;electron&#x22;,&#x22;react-native&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    <a name="type" />

    AI Noise Suppression reduces the following types of noise:

    * Television
    * Kitchen
    * Street, such as birds chirping, traffic, and subway sounds
    * Machine, such as fans, air conditioners, vacuum cleaners, and copiers
    * Office, such as keyboard and mouse clicks
    * Household, such as doors opening, creaking chairs, crying babies, and house renovations
    * Constant knocking
    * Beeps and clapping
    * Music

    You can choose following noise reduction strategies:

    * Default: Reduces noise to a comfortable level without distorting human voice.
    * Custom: A more enhanced or customized noise reduction strategy for your business use-case. Contact [support@agora.io](mailto\\:support@agora.io) for details.

    Want to try out AI Noise Suppression? Use the <a href="https://webdemo-global.agora.io/example/extension/aiDenoiser/index.html">online demo</a>.

    ## Understand the tech [#understand-the-tech]

    In the pre-processing stage, AI Noise Suppression uses deep learning noise reduction algorithms to modify <audio /> data in the extensions pipeline.

    **AI noise suppression**

    ![image](https://assets-docs.agora.io/images/extensions-marketplace/ai-noise-suppression.svg)

    ## Prerequisites [#prerequisites]

    Ensure that you have implemented the [SDK quickstart](../../index.mdx) in your project.

    ## Enable AI Noise Suppression [#enable-ai-noise-suppression]

    This section shows you how to integrate AI Noise Suppression into your app.

    Call \`setAINSMode\` to enable the AI noise suppression feature, and select a noise suppression mode:

    <CodeBlockTabs defaultValue="java">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="java">
          Java
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="kotlin">
          Kotlin
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="java">
        \`\`\`java
        // Noise reductions modes
        // 0 -> Balance mode
        // 1 -> Aggressive mode
        // 2 -> Aggressive mode with low latency
        int mode = 1;
        // Set the mode for Audio AI Noise Suppression
        int result = rtcEngine.setAINSMode(true, mode);
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="kotlin">
        \`\`\`kotlin
        // Noise reductions modes
        // 0 -> Balance mode
        // 1 -> Aggressive mode
        // 2 -> Aggressive mode with low latency
        val mode = 1
        // Set the mode for Audio AI Noise Suppression
        val result = rtcEngine.setAINSMode(true, mode)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ## Reference [#reference]

    This section completes the information on this page, or points you to documentation that explains other aspects about this product.

    ### API reference [#api-reference]

    * <Link to="https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setainsmode">
        \`setAINSMode\`
      </Link>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    <a name="type" />

    AI Noise Suppression reduces the following types of noise:

    * Television
    * Kitchen
    * Street, such as birds chirping, traffic, and subway sounds
    * Machine, such as fans, air conditioners, vacuum cleaners, and copiers
    * Office, such as keyboard and mouse clicks
    * Household, such as doors opening, creaking chairs, crying babies, and house renovations
    * Constant knocking
    * Beeps and clapping
    * Music

    You can choose following noise reduction strategies:

    * Default: Reduces noise to a comfortable level without distorting human voice.
    * Custom: A more enhanced or customized noise reduction strategy for your business use-case. Contact [support@agora.io](mailto\\:support@agora.io) for details.

    Want to try out AI Noise Suppression? Use the <a href="https://webdemo-global.agora.io/example/extension/aiDenoiser/index.html">online demo</a>.

    ## Understand the tech [#understand-the-tech-1]

    In the pre-processing stage, AI Noise Suppression uses deep learning noise reduction algorithms to modify <audio /> data in the extensions pipeline.

    **AI noise suppression**

    ![image](https://assets-docs.agora.io/images/extensions-marketplace/ai-noise-suppression.svg)

    ## Prerequisites [#prerequisites-1]

    Ensure that you have implemented the [SDK quickstart](../../index.mdx) in your project.

    ## Enable AI Noise Suppression [#enable-ai-noise-suppression-1]

    This section shows you how to integrate AI Noise Suppression into your app.

    Call \`setAINSMode\` to enable the AI noise suppression feature, and select a noise suppression mode:

    \`\`\`swift
    // Set AINS mode to AINS_MODE_BALANCED (0)
    // Set AINS mode to AINS_MODE_AGGRESSIVE (1)
    // Set AINS mode to AINS_MODE_ULTRALOWLATENCY (2)

    let result = agoraKit.setAINSMode(true, mode: 2)
    \`\`\`

    When AI Noise Suppression is enabled, if RTC SDK detects that the device performance is not sufficient, it:

    * Disables AI Noise Suppression
    * Enables traditional noise reduction
    * Throws the \`WARN_APM_AINS_CLOSED\` (-1054) error code

    ## Reference [#reference-1]

    This section completes the information on this page, or points you to documentation that explains other aspects about this product.

    ### Minimum device requirements [#minimum-device-requirements]

    * iOS iPhone 6S
    * iPadOS
    * iPad Pro (2nd generation)
    * iPad mini (5th generation)
    * iPad Air (3rd generation)
    * macOS MacBook Pro 2015

    ### API reference [#api-reference-1]

    * <Link to="https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setainsmode(_:mode:)">
        \`setAINSMode\`
      </Link>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    Try out the [online demo](https://webdemo-global.agora.io/index.html) for [AI noise suppression](https://webdemo-global.agora.io/example/plugin/aiDenoiser/index.html).

    <a name="type" />

    AI Noise Suppression reduces the following types of noise:

    * Television
    * Kitchen
    * Street, such as birds chirping, traffic, and subway sounds
    * Machine, such as fans, air conditioners, vacuum cleaners, and copiers
    * Office, such as keyboard and mouse clicks
    * Household, such as doors opening, creaking chairs, crying babies, and house renovations
    * Constant knocking
    * Beeps and clapping
    * Music

    You can choose following noise reduction strategies:

    * Default: Reduces noise to a comfortable level without distorting human voice.
    * Custom: A more enhanced or customized noise reduction strategy for your business use-case. Contact [support@agora.io](mailto\\:support@agora.io) for details.

    Want to try out AI Noise Suppression? Use the <a href="https://webdemo-global.agora.io/example/extension/aiDenoiser/index.html">online demo</a>.

    ## Understand the tech [#understand-the-tech-2]

    In the pre-processing stage, AI Noise Suppression uses deep learning noise reduction algorithms to modify <audio /> data in the extensions pipeline.

    **AI noise suppression**

    ![image](https://assets-docs.agora.io/images/extensions-marketplace/ai-noise-suppression.svg)

    ## Prerequisites [#prerequisites-2]

    Ensure that you have implemented the [SDK quickstart](../../index.mdx) in your project.

    ## Enable AI Noise Suppression [#enable-ai-noise-suppression-2]

    This section shows you how to integrate AI Noise Suppression into your app.

    <CalloutContainer type="info">
      <CalloutDescription>
        The following implementation steps apply to the latest version of the AI Noise Suppression extension. Refer to the [extension release notes](/en/realtime-media/rtc/reference/release-notes) for details.
      </CalloutDescription>
    </CalloutContainer>

    1. Integrate AI Noise Suppression into your app

       To install the AI Noise Suppression extension ([agora-extension-ai-denoiser](https://www.npmjs.com/package/agora-extension-ai-denoiser)), in the root of your project run the following command:

       \`\`\`javascript
       npm install agora-extension-ai-denoiser
       \`\`\`

    2. Import AI Noise Suppression

       Add the following code to your \`.js\` file.

       \`\`\`javascript
       import {AIDenoiserExtension} from "agora-extension-ai-denoiser";
       \`\`\`

    3. Dynamically load the Wasm dependencies

       The AI Noise Suppression extension depends on a few Wasm files. To ensure that the browser can load and execute these files, do the following:

       1. Publish the files located in the \`node_modules/agora-extension-ai-denoiser/external\` directory to the CDN or static resource server, and put them under one public path. In subsequent steps, you need to pass in the public path URL to create an\` AIDenoiserExtension\` instance. The extension then dynamically loads these files.

          <CalloutContainer type="info">
            <CalloutDescription>
              * If the host URL of the Wasm files is not the same as that of the web application, enable the CORS policy.
              * Do not put the Wasm files in an HTTP service, loading HTTP resources in the HTTPS domain is blocked by the browsers' security policy.
            </CalloutDescription>
          </CalloutContainer>

       2. If you have enabled the Content Security Policy (CSP), because Wasm files are not allowed to load in Chrome and Edge by default, you need to configure the CSP as follows:

          * For versions later than Chrome 97 and Edge 97 (Chrome 97 and Edge 97 included): Add \`'wasm-unsafe-eval'\` and \`blob:\` in the [\`script-src\`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) options. For example:
            \`\`\`xml
            <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'wasm-unsafe-eval' blob:">
            \`\`\`

          * For versions earlier than Chrome 97 and Edge 97: Add \`'unsafe-eval'\` and \`blob:\` in the \`script-src\` options.

    4. Register the AI Noise Suppression extension

       Call <Link to="https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#registerextensions">AgoraRTC.registerExtensions</Link>, and pass in the created \`AIDenoiserExtension\` instance. Optionally, listen for the callback reporting that the Wasm and JS files fail to load.

       \`\`\`typescript
       // Create an AIDenoiserExtension instance, and pass in the host URL of the Wasm files
       const denoiser = new AIDenoiserExtension({assetsPath:'./external'});
       // Check compatibility
       if (!denoiser.checkCompatibility()) {
         // The extension might not be supported in the current browser. You can stop executing further code logic
         console.error("Does not support AI Denoiser!");
       }
       // Register the extension
       AgoraRTC.registerExtensions([denoiser]);
       // (Optional) Listen for the callback reporting that the Wasm files fail to load
       denoiser.onloaderror = (e) => {
         // If the Wasm files fail to load, you can disable the extension, for example:
         // openDenoiserButton.enabled = false;
         console.log(e);
       }
       \`\`\`

       Best practice is to create one \`AIDenoiserExtension\` instance only.

    5. Create an \`IAIDenoiserProcessor\` instance

       Call the \`createProcessor\` method to create a \`processor\`, and set whether to enable the extension by default. If you do not set the default state, the extension inherits the previous state.

       \`\`\`typescript
       // Create a processor
       const processor = denoiser.createProcessor();
       // Enable the extension by default
       processor.enable();
       // Disable the extension by default
       // processor.disable();
       \`\`\`

    6. Inject the extension to the audio processing pipeline

       Call [pipe](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/imicrophoneaudiotrack.html#pipe) and specify the [processorDestination](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/imicrophoneaudiotrack.html#processordestination) property.

       \`\`\`typescript
       // Create a local video track
       const audioTrack = await AgoraRTC.createMicrophoneAudioTrack();
       // Inject the extension to the audio processing pipeline
       audioTrack.pipe(processor).pipe(audioTrack.processorDestination);
       await processor.enable();
       \`\`\`

    7. Enable or disable the extension

       Call the \`enable\` or \`disable\` methods as needed.

       \`\`\`typescript
       () => {
         if (processor.enabled) {
           await processor.disable();
         } else {
           await processor.enable();
         }
       }
       \`\`\`

    8. Set the noise suppression mode and level

       \`\`\`javascript
       // Listen for the callback reporting that the noise suppression process takes too long
       processor.on("overload", async (elapsedTime) => {
         console.log("overload!!!");
         // Switch to steady-state noise reduction mode, temporarily disable AI noise reduction.
         await processor.setMode("STATIONARY_NS");
         // Completely disable AI noise reduction and use the browser's built-in noise reduction.
         // await processor.disable()
       });
       \`\`\`

    9. Dump audio data

       Best practice for logging is to dump audio data. This significantly improves the efficiency of troubleshooting. To do this, call the \`dump\` method and listen for the \`dump\` and \`dumpend\` events to dump the audio data during the noise suppression process.

       \`\`\`typescript
       processor.on("dump", (blob, name) => {
         // Dump the audio data files generated during the noise suppression process to your local machine in .pcm format.
         const objectURL = URL.createObjectURL(blob);
         const tag = document.createElement("a");
         tag.download = name;
         tag.href = objectURL;
         tag.click();
         setTimeout(() => {URL.revokeObjectURL(objectURL);}, 0);
       });

       processor.on("dumpend", () => {
         console.log("dump ended!!");
       });

       processor.dump();
       \`\`\`

    ## Reference [#reference-2]

    This section completes the information on this page, or points you to documentation that explains other aspects about this product.

    * For a working example, check out the [AI Denoiser web demo](https://webdemo-global.agora.io/example/extension/aiDenoiser/index.html) and the associated [source code](https://github.com/AgoraIO/API-Examples-Web/tree/main/Demo/aiDenoiser).

    ### API reference [#api-reference-2]

    This section provides the API reference for the AI Denoiser extension.

    #### IAIDenoiserExtension [#iaidenoiserextension]

    ##### checkCompatibility [#checkcompatibility]

    Checks whether the current browser supports the AI Denoiser extension. The result returned by this method is for reference only.

    \`\`\`typescript
    checkCompatibility(): boolean;
    \`\`\`

    *Since v1.1.0*

    ##### createProcessor [#createprocessor]

    Creates an \`IAIDenoiserProcessor\` instance.

    \`\`\`typescript
    createProcessor(): IAIDenoiserProcessor;
    \`\`\`

    ##### setLogLevel [#setloglevel]

    Sets the log level. For available log levels, see [AIDenoiserLogLevel](#aidenoiserloglevel).

    \`\`\`typescript
    public setLogLevel(level: AIDenoiserLogLevel)
    \`\`\`

    *Since v2.0.0*

    ##### onloaderror [#onloaderror]

    Callback for Wasm dependency file loading failures.

    \`\`\`typescript
    onloaderror?: (error: Error) => void;
    \`\`\`

    *Deprecated since v2.0.0*

    #### IAIDenoiserProcessor [#iaidenoiserprocessor]

    ##### kind [#kind]

    The processor type, either video or audio.

    \`\`\`typescript
    get kind(): 'video' | 'audio';
    \`\`\`

    ##### enabled [#enabled]

    Whether the extension is enabled:

    * \`true\`: Enabled.
    * \`false\`: Not enabled.

    \`\`\`typescript
    get enabled(): boolean;
    \`\`\`

    ##### enable [#enable]

    Enables the AI denoising feature.

    \`\`\`typescript
    enable(): void | Promise<void>;
    \`\`\`

    ##### disable [#disable]

    Disables the AI denoising feature.

    \`\`\`typescript
    disable(): void | Promise<void>;
    \`\`\`

    This method must be called after [\`pipe\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/imicrophoneaudiotrack.html).

    ##### setMode [#setmode]

    Sets the denoising mode.

    \`\`\`typescript
    setMode(mode: AIDenoiserProcessorMode): Promise<void>;
    \`\`\`

    *Since v1.1.0*

    You can call this method in the [onoverload](#onoverload) callback to switch to stationary noise suppression to reduce overhead. See [AIDenoiserProcessorMode](#aidenoiserprocessormode) for details.

    This method must be called after [\`pipe\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/imicrophoneaudiotrack.html).

    ##### setLevel [#setlevel]

    Sets the denoising intensity. See [AIDenoiserProcessorLevel](#aidenoiserprocessorlevel) for details.

    \`\`\`typescript
    setLevel(level: AIDenoiserProcessorLevel): Promise<void>;
    \`\`\`

    *Since v1.1.0*

    This method must be called after [\`pipe\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/imicrophoneaudiotrack.html).

    ##### setLatency [#setlatency]

    Sets the denoising latency level. See [AIDenoiserProcessorLatency](#aidenoiserprocessorlatency) for details.

    \`\`\`typescript
    setLatency(latency: AIDenoiserProcessorLatency): Promise<void>;
    \`\`\`

    *Since v2.0.0*

    This method must be called after [\`pipe\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/imicrophoneaudiotrack.html).

    ##### dump [#dump]

    Dumps audio data during the denoising process to help troubleshoot and analyze denoising issues.

    \`\`\`typescript
    dump(): void;
    \`\`\`

    This method must be called after [\`pipe\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/imicrophoneaudiotrack.html).

    Calling this method triggers 9 \`dump\` events, returning audio data processed by the extension 30 seconds before and 60 seconds after the method call, for a total of 9 audio files (see audio file description). Then it triggers the \`dumpend\` event, indicating that the audio data dump has completed.

    **Audio file description**

    Each audio file is encoded in PCM format with a duration of 30 seconds. The filename contains the following information:

    * The processing stage of the audio data, one of the following:
      * \`input\`: Audio data awaiting denoising.
      * \`ns_out\`: Audio data after noise suppression.
      * \`agc_out\`: Audio data after voice enhancement.
    * Audio sample rate.
    * Number of channels.
    * Dump time: If the dump time is T (in seconds), the file contains audio data from the range \\[T-30, T].

    Example audio filename: \`input_16000hz_1ch_0.pcm\`

    **Note**

    * If you disable AI denoising before the \`dump\` event triggers 9 times, the dump process terminates immediately and triggers the \`dumpend\` event. In this case, fewer than 9 audio data files are returned.
    * If the extension processes less than 30 seconds of audio, the corresponding audio file duration is also less than 30 seconds.

    ##### ondump [#ondump]

    Callback for dumping audio data.

    \`\`\`typescript
    ondump?: (blob: Blob, name: string) => void;
    \`\`\`

    *Deprecated since v2.0.0*

    This callback returns the following parameters:

    * \`blob\`: The audio data file.
    * \`name\`: The name of the audio data file.

    ##### ondumpend [#ondumpend]

    Callback indicating that audio data dumping has completed.

    \`\`\`typescript
    ondumpend?: () => void;
    \`\`\`

    *Deprecated since v2.0.0*

    ##### onoverload [#onoverload]

    Callback for when denoising processing takes too long.

    \`\`\`typescript
    onoverload?: (elapsedTime: number) => void;
    \`\`\`

    *Deprecated since v2.0.0*

    **Parameters**

    * \`elapsedTime\`: The time (in milliseconds) the extension takes to process one audio frame. This value is for reference only; precision depends on the browser's timing accuracy. For example, Firefox has lower time precision.

    ##### on callbacks [#on-callbacks]

    Listens for events.

    \`\`\`typescript
    on(event: "pipeerror", listener: AIDenoiserProcessorPipeErrorCallback): void;
    on(event: "overload", listener: AIDenoiserProcessorOverloadCallback): void;
    on(event: "dump", listener: AIDenoiserProcessorDumpCallback): void;
    on(event: "dumpend", listener: AIDenoiserProcessorDumpEndCallback): void;
    \`\`\`

    Since v2.0.0, the AI Denoiser extension listens for the following events using the \`on\` method:

    * \`pipeerror\`: Wasm dependency file loading failure event. Replaces the \`onloaderror\` callback.
    * \`overload\`: Denoising processing takes too long event. Replaces the \`onoverload\` callback.
    * \`dump\`: Audio data dump event. Replaces the \`ondump\` callback.
    * \`dumpend\`: Audio data dump completed event. Replaces the \`ondumpend\` callback.

    #### Type definitions [#type-definitions]

    ##### AIDenoiserExtensionOptions [#aidenoiserextensionoptions]

    AI Denoiser extension initialization parameters.

    \`\`\`typescript
    export interface AIDenoiserExtensionOptions {
     assetsPath: string
    }
    \`\`\`

    **Parameters**

    * \`assetsPath\`: The URL path to the Wasm files required by the AI Denoiser extension. Do not include a trailing slash in the path, for example, \`./external\`.

    The extension constructs the full path to the Wasm file based on \`assetsPath\`. If an incorrect path causes the Wasm file to fail loading, you receive a \`pipeerror\` event.

    ##### AIDenoiserProcessorMode [#aidenoiserprocessormode]

    Denoising mode.

    \`\`\`typescript
    export enum AIDenoiserProcessorMode {
     NSNG = "NSNG",
     STATIONARY_NS = "STATIONARY_NS",
    }
    \`\`\`

    **Values**

    * \`NSNG\`: Hybrid noise reduction. This mode suppresses both stationary and non-stationary noise types.
    * \`STATIONARY_NS\`: Stationary noise suppression. This mode only suppresses stationary noise. Use this mode only when AI denoising processing takes too long.

    ##### AIDenoiserProcessorLevel [#aidenoiserprocessorlevel]

    Denoising intensity.

    \`\`\`typescript
    export enum AIDenoiserProcessorLevel {
     SOFT = "SOFT",
     AGGRESSIVE = "AGGRESSIVE",
    }
    \`\`\`

    **Values**

    * \`SOFT\`: (Recommended) Soft denoising.
    * \`AGGRESSIVE\`: Aggressive denoising. Increasing the denoising intensity to aggressive increases the probability of damaging the voice signal.

    ##### AIDenoiserLogLevel [#aidenoiserloglevel]

    AI Denoiser extension log level.

    \`\`\`typescript
    export enum AIDenoiserLogLevel {
     DEBUG = "DEBUG",
     INFO = "INFO",
     WARN = "WARN",
     ERROR = "ERROR",
     NONE = "NONE",
    }
    \`\`\`

    **Values**

    * \`DEBUG\`: (0) Prints debug information, general information, warnings, and error logs.
    * \`INFO\`: (1) Prints general information, warnings, and error logs.
    * \`WARN\`: (2) Prints warnings and error logs.
    * \`ERROR\`: (3) Prints error logs only.
    * \`NONE\`: (4) Prints no logs.

    ##### AIDenoiserProcessorLatency [#aidenoiserprocessorlatency]

    AI denoising latency level.

    \`\`\`typescript
    export enum AIDenoiserProcessorLatency {
     LOW = "LOW",
     FULL = "FULL",
    }
    \`\`\`

    **Values**

    * \`LOW\`: Low latency mode (approximately 40 ms). In this mode, denoising performance is slightly reduced.
    * \`FULL\`: High latency mode.

    ### Considerations [#considerations]

    Currently, AI Noise Suppression has the following limitations:

    * If only some of the audio tracks on the current web page enable AI Noise Suppression, audio tracks that do not enable AI Noise Suppression could be affected. This is because AI Noise Suppression turns on AEC and AGC and turns off NS in the browser.
    * Although AI Noise Suppression supports Safari v14.1 and greater, there are performance issues. Best practice is to not support Safari.
    * AI Noise Suppression does not support browsers on mobile devices.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    <a name="type" />

    AI Noise Suppression reduces the following types of noise:

    * Television
    * Kitchen
    * Street, such as birds chirping, traffic, and subway sounds
    * Machine, such as fans, air conditioners, vacuum cleaners, and copiers
    * Office, such as keyboard and mouse clicks
    * Household, such as doors opening, creaking chairs, crying babies, and house renovations
    * Constant knocking
    * Beeps and clapping
    * Music

    You can choose following noise reduction strategies:

    * Default: Reduces noise to a comfortable level without distorting human voice.
    * Custom: A more enhanced or customized noise reduction strategy for your business use-case. Contact [support@agora.io](mailto\\:support@agora.io) for details.

    Want to try out AI Noise Suppression? Use the <a href="https://webdemo-global.agora.io/example/extension/aiDenoiser/index.html">online demo</a>.

    ## Understand the tech [#understand-the-tech-3]

    In the pre-processing stage, AI Noise Suppression uses deep learning noise reduction algorithms to modify <audio /> data in the extensions pipeline.

    **AI noise suppression**

    ![image](https://assets-docs.agora.io/images/extensions-marketplace/ai-noise-suppression.svg)

    ## Prerequisites [#prerequisites-3]

    Ensure that you have implemented the [SDK quickstart](../../index.mdx) in your project.

    ## Enable AI Noise Suppression [#enable-ai-noise-suppression-3]

    This section shows you how to integrate AI Noise Suppression into your app.

    Call \`setAINSMode\` to enable the AI noise suppression feature, and select a noise suppression mode:

    \`\`\`javascript
    const enabled = true; // Enable or disable AINS

    const result = rtcEngine.setAINSMode(enabled, AudioAinsMode.AinsModeUltralowlatency);

    if (result === 0) {
      // AINS mode set successfully
    } else {
      // Failed to enable AINS
    }
    \`\`\`

    ## Reference [#reference-3]

    This section completes the information on this page, or points you to documentation that explains other aspects about this product.

    ### API reference [#api-reference-3]

    * [\`setAINSMode\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setainsmode)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    <a name="type" />

    AI Noise Suppression reduces the following types of noise:

    * Television
    * Kitchen
    * Street, such as birds chirping, traffic, and subway sounds
    * Machine, such as fans, air conditioners, vacuum cleaners, and copiers
    * Office, such as keyboard and mouse clicks
    * Household, such as doors opening, creaking chairs, crying babies, and house renovations
    * Constant knocking
    * Beeps and clapping
    * Music

    You can choose following noise reduction strategies:

    * Default: Reduces noise to a comfortable level without distorting human voice.
    * Custom: A more enhanced or customized noise reduction strategy for your business use-case. Contact [support@agora.io](mailto\\:support@agora.io) for details.

    Want to try out AI Noise Suppression? Use the <a href="https://webdemo-global.agora.io/example/extension/aiDenoiser/index.html">online demo</a>.

    ## Understand the tech [#understand-the-tech-4]

    In the pre-processing stage, AI Noise Suppression uses deep learning noise reduction algorithms to modify <audio /> data in the extensions pipeline.

    **AI noise suppression**

    ![image](https://assets-docs.agora.io/images/extensions-marketplace/ai-noise-suppression.svg)

    ## Prerequisites [#prerequisites-4]

    Ensure that you have implemented the [SDK quickstart](../../index.mdx) in your project.

    ## Enable AI Noise Suppression [#enable-ai-noise-suppression-4]

    This section shows you how to integrate AI Noise Suppression into your app.

    Call \`setAINSMode\` to enable the AI noise suppression feature, and select a noise suppression mode:

    \`\`\`typescript
    const setAINSMode = () => {
      try {
        // Enable or disable AINS
        const enabled = true;

        // Choose the AINS mode based on your requirements
        const mode = AgoraRtcEngine.AudioAinsMode.AINS_MODE_ULTRALOWLATENCY;

        // Call setAINSMode method
        const result = rtcEngine.setAINSMode(enabled, mode);
      } catch (error) {
        console.error('Error setting AINS mode:', error);
      }
    };
    \`\`\`

    ## Reference [#reference-4]

    This section completes the information on this page, or points you to documentation that explains other aspects about this product.

    ### API reference [#api-reference-4]

    * [\`setAINSMode\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setainsmode)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "AI Noise Suppression enables you to suppress hundreds of types of noise and reduce distortion in human voices when multiple people speak at the same time. In use-cases such as online meetings, online chat rooms, video consultations with doctors, and online gaming, AI Noise Suppression makes virtual communication as smooth as face-to-face interaction."
  }, {
    heading: undefined,
    content: "AI Noise Suppression reduces the following types of noise:"
  }, {
    heading: undefined,
    content: "Television"
  }, {
    heading: undefined,
    content: "Kitchen"
  }, {
    heading: undefined,
    content: "Street, such as birds chirping, traffic, and subway sounds"
  }, {
    heading: undefined,
    content: "Machine, such as fans, air conditioners, vacuum cleaners, and copiers"
  }, {
    heading: undefined,
    content: "Office, such as keyboard and mouse clicks"
  }, {
    heading: undefined,
    content: "Household, such as doors opening, creaking chairs, crying babies, and house renovations"
  }, {
    heading: undefined,
    content: "Constant knocking"
  }, {
    heading: undefined,
    content: "Beeps and clapping"
  }, {
    heading: undefined,
    content: "Music"
  }, {
    heading: undefined,
    content: "You can choose following noise reduction strategies:"
  }, {
    heading: undefined,
    content: "Default: Reduces noise to a comfortable level without distorting human voice."
  }, {
    heading: undefined,
    content: "Custom: A more enhanced or customized noise reduction strategy for your business use-case. Contact support\\@agora.io for details."
  }, {
    heading: undefined,
    content: "Want to try out AI Noise Suppression? Use the online demo."
  }, {
    heading: "understand-the-tech",
    content: "In the pre-processing stage, AI Noise Suppression uses deep learning noise reduction algorithms to modify  data in the extensions pipeline."
  }, {
    heading: "understand-the-tech",
    content: "**AI noise suppression**"
  }, {
    heading: "prerequisites",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "enable-ai-noise-suppression",
    content: "This section shows you how to integrate AI Noise Suppression into your app."
  }, {
    heading: "enable-ai-noise-suppression",
    content: "Call `setAINSMode` to enable the AI noise suppression feature, and select a noise suppression mode:"
  }, {
    heading: "reference",
    content: "This section completes the information on this page, or points you to documentation that explains other aspects about this product."
  }, {
    heading: "api-reference",
    content: "AI Noise Suppression reduces the following types of noise:"
  }, {
    heading: "api-reference",
    content: "Television"
  }, {
    heading: "api-reference",
    content: "Kitchen"
  }, {
    heading: "api-reference",
    content: "Street, such as birds chirping, traffic, and subway sounds"
  }, {
    heading: "api-reference",
    content: "Machine, such as fans, air conditioners, vacuum cleaners, and copiers"
  }, {
    heading: "api-reference",
    content: "Office, such as keyboard and mouse clicks"
  }, {
    heading: "api-reference",
    content: "Household, such as doors opening, creaking chairs, crying babies, and house renovations"
  }, {
    heading: "api-reference",
    content: "Constant knocking"
  }, {
    heading: "api-reference",
    content: "Beeps and clapping"
  }, {
    heading: "api-reference",
    content: "Music"
  }, {
    heading: "api-reference",
    content: "You can choose following noise reduction strategies:"
  }, {
    heading: "api-reference",
    content: "Default: Reduces noise to a comfortable level without distorting human voice."
  }, {
    heading: "api-reference",
    content: "Custom: A more enhanced or customized noise reduction strategy for your business use-case. Contact support\\@agora.io for details."
  }, {
    heading: "api-reference",
    content: "Want to try out AI Noise Suppression? Use the online demo."
  }, {
    heading: "understand-the-tech-1",
    content: "In the pre-processing stage, AI Noise Suppression uses deep learning noise reduction algorithms to modify  data in the extensions pipeline."
  }, {
    heading: "understand-the-tech-1",
    content: "**AI noise suppression**"
  }, {
    heading: "prerequisites-1",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "enable-ai-noise-suppression-1",
    content: "This section shows you how to integrate AI Noise Suppression into your app."
  }, {
    heading: "enable-ai-noise-suppression-1",
    content: "Call `setAINSMode` to enable the AI noise suppression feature, and select a noise suppression mode:"
  }, {
    heading: "enable-ai-noise-suppression-1",
    content: "When AI Noise Suppression is enabled, if RTC SDK detects that the device performance is not sufficient, it:"
  }, {
    heading: "enable-ai-noise-suppression-1",
    content: "Disables AI Noise Suppression"
  }, {
    heading: "enable-ai-noise-suppression-1",
    content: "Enables traditional noise reduction"
  }, {
    heading: "enable-ai-noise-suppression-1",
    content: "Throws the `WARN_APM_AINS_CLOSED` (-1054) error code"
  }, {
    heading: "reference-1",
    content: "This section completes the information on this page, or points you to documentation that explains other aspects about this product."
  }, {
    heading: "minimum-device-requirements",
    content: "iOS iPhone 6S"
  }, {
    heading: "minimum-device-requirements",
    content: "iPadOS"
  }, {
    heading: "minimum-device-requirements",
    content: "iPad Pro (2nd generation)"
  }, {
    heading: "minimum-device-requirements",
    content: "iPad mini (5th generation)"
  }, {
    heading: "minimum-device-requirements",
    content: "iPad Air (3rd generation)"
  }, {
    heading: "minimum-device-requirements",
    content: "macOS MacBook Pro 2015"
  }, {
    heading: "api-reference-1",
    content: "Try out the online demo for AI noise suppression."
  }, {
    heading: "api-reference-1",
    content: "AI Noise Suppression reduces the following types of noise:"
  }, {
    heading: "api-reference-1",
    content: "Television"
  }, {
    heading: "api-reference-1",
    content: "Kitchen"
  }, {
    heading: "api-reference-1",
    content: "Street, such as birds chirping, traffic, and subway sounds"
  }, {
    heading: "api-reference-1",
    content: "Machine, such as fans, air conditioners, vacuum cleaners, and copiers"
  }, {
    heading: "api-reference-1",
    content: "Office, such as keyboard and mouse clicks"
  }, {
    heading: "api-reference-1",
    content: "Household, such as doors opening, creaking chairs, crying babies, and house renovations"
  }, {
    heading: "api-reference-1",
    content: "Constant knocking"
  }, {
    heading: "api-reference-1",
    content: "Beeps and clapping"
  }, {
    heading: "api-reference-1",
    content: "Music"
  }, {
    heading: "api-reference-1",
    content: "You can choose following noise reduction strategies:"
  }, {
    heading: "api-reference-1",
    content: "Default: Reduces noise to a comfortable level without distorting human voice."
  }, {
    heading: "api-reference-1",
    content: "Custom: A more enhanced or customized noise reduction strategy for your business use-case. Contact support\\@agora.io for details."
  }, {
    heading: "api-reference-1",
    content: "Want to try out AI Noise Suppression? Use the online demo."
  }, {
    heading: "understand-the-tech-2",
    content: "In the pre-processing stage, AI Noise Suppression uses deep learning noise reduction algorithms to modify  data in the extensions pipeline."
  }, {
    heading: "understand-the-tech-2",
    content: "**AI noise suppression**"
  }, {
    heading: "prerequisites-2",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "This section shows you how to integrate AI Noise Suppression into your app."
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "The following implementation steps apply to the latest version of the AI Noise Suppression extension. Refer to the extension release notes for details."
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "Integrate AI Noise Suppression into your app"
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "To install the AI Noise Suppression extension (agora-extension-ai-denoiser), in the root of your project run the following command:"
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "Import AI Noise Suppression"
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "Add the following code to your `.js` file."
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "Dynamically load the Wasm dependencies"
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "The AI Noise Suppression extension depends on a few Wasm files. To ensure that the browser can load and execute these files, do the following:"
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "Publish the files located in the `node_modules/agora-extension-ai-denoiser/external` directory to the CDN or static resource server, and put them under one public path. In subsequent steps, you need to pass in the public path URL to create an` AIDenoiserExtension` instance. The extension then dynamically loads these files."
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "If the host URL of the Wasm files is not the same as that of the web application, enable the CORS policy."
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "Do not put the Wasm files in an HTTP service, loading HTTP resources in the HTTPS domain is blocked by the browsers' security policy."
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "If you have enabled the Content Security Policy (CSP), because Wasm files are not allowed to load in Chrome and Edge by default, you need to configure the CSP as follows:"
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "For versions later than Chrome 97 and Edge 97 (Chrome 97 and Edge 97 included): Add `'wasm-unsafe-eval'` and `blob:` in the `script-src` options. For example:"
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "For versions earlier than Chrome 97 and Edge 97: Add `'unsafe-eval'` and `blob:` in the `script-src` options."
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "Register the AI Noise Suppression extension"
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "Call AgoraRTC.registerExtensions, and pass in the created `AIDenoiserExtension` instance. Optionally, listen for the callback reporting that the Wasm and JS files fail to load."
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "Best practice is to create one `AIDenoiserExtension` instance only."
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "Create an `IAIDenoiserProcessor` instance"
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "Call the `createProcessor` method to create a `processor`, and set whether to enable the extension by default. If you do not set the default state, the extension inherits the previous state."
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "Inject the extension to the audio processing pipeline"
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "Call pipe and specify the processorDestination property."
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "Enable or disable the extension"
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "Call the `enable` or `disable` methods as needed."
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "Set the noise suppression mode and level"
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "Dump audio data"
  }, {
    heading: "enable-ai-noise-suppression-2",
    content: "Best practice for logging is to dump audio data. This significantly improves the efficiency of troubleshooting. To do this, call the `dump` method and listen for the `dump` and `dumpend` events to dump the audio data during the noise suppression process."
  }, {
    heading: "reference-2",
    content: "This section completes the information on this page, or points you to documentation that explains other aspects about this product."
  }, {
    heading: "reference-2",
    content: "For a working example, check out the AI Denoiser web demo and the associated source code."
  }, {
    heading: "api-reference-2",
    content: "This section provides the API reference for the AI Denoiser extension."
  }, {
    heading: "checkcompatibility",
    content: "Checks whether the current browser supports the AI Denoiser extension. The result returned by this method is for reference only."
  }, {
    heading: "checkcompatibility",
    content: "*Since v1.1.0*"
  }, {
    heading: "createprocessor",
    content: "Creates an `IAIDenoiserProcessor` instance."
  }, {
    heading: "setloglevel",
    content: "Sets the log level. For available log levels, see AIDenoiserLogLevel."
  }, {
    heading: "setloglevel",
    content: "*Since v2.0.0*"
  }, {
    heading: "onloaderror",
    content: "Callback for Wasm dependency file loading failures."
  }, {
    heading: "onloaderror",
    content: "*Deprecated since v2.0.0*"
  }, {
    heading: "kind",
    content: "The processor type, either video or audio."
  }, {
    heading: "enabled",
    content: "Whether the extension is enabled:"
  }, {
    heading: "enabled",
    content: "`true`: Enabled."
  }, {
    heading: "enabled",
    content: "`false`: Not enabled."
  }, {
    heading: "enable",
    content: "Enables the AI denoising feature."
  }, {
    heading: "disable",
    content: "Disables the AI denoising feature."
  }, {
    heading: "disable",
    content: "This method must be called after `pipe`."
  }, {
    heading: "setmode",
    content: "Sets the denoising mode."
  }, {
    heading: "setmode",
    content: "*Since v1.1.0*"
  }, {
    heading: "setmode",
    content: "You can call this method in the onoverload callback to switch to stationary noise suppression to reduce overhead. See AIDenoiserProcessorMode for details."
  }, {
    heading: "setmode",
    content: "This method must be called after `pipe`."
  }, {
    heading: "setlevel",
    content: "Sets the denoising intensity. See AIDenoiserProcessorLevel for details."
  }, {
    heading: "setlevel",
    content: "*Since v1.1.0*"
  }, {
    heading: "setlevel",
    content: "This method must be called after `pipe`."
  }, {
    heading: "setlatency",
    content: "Sets the denoising latency level. See AIDenoiserProcessorLatency for details."
  }, {
    heading: "setlatency",
    content: "*Since v2.0.0*"
  }, {
    heading: "setlatency",
    content: "This method must be called after `pipe`."
  }, {
    heading: "dump",
    content: "Dumps audio data during the denoising process to help troubleshoot and analyze denoising issues."
  }, {
    heading: "dump",
    content: "This method must be called after `pipe`."
  }, {
    heading: "dump",
    content: "Calling this method triggers 9 `dump` events, returning audio data processed by the extension 30 seconds before and 60 seconds after the method call, for a total of 9 audio files (see audio file description). Then it triggers the `dumpend` event, indicating that the audio data dump has completed."
  }, {
    heading: "dump",
    content: "**Audio file description**"
  }, {
    heading: "dump",
    content: "Each audio file is encoded in PCM format with a duration of 30 seconds. The filename contains the following information:"
  }, {
    heading: "dump",
    content: "The processing stage of the audio data, one of the following:"
  }, {
    heading: "dump",
    content: "`input`: Audio data awaiting denoising."
  }, {
    heading: "dump",
    content: "`ns_out`: Audio data after noise suppression."
  }, {
    heading: "dump",
    content: "`agc_out`: Audio data after voice enhancement."
  }, {
    heading: "dump",
    content: "Audio sample rate."
  }, {
    heading: "dump",
    content: "Number of channels."
  }, {
    heading: "dump",
    content: "Dump time: If the dump time is T (in seconds), the file contains audio data from the range \\[T-30, T]."
  }, {
    heading: "dump",
    content: "Example audio filename: `input_16000hz_1ch_0.pcm`"
  }, {
    heading: "dump",
    content: "**Note**"
  }, {
    heading: "dump",
    content: "If you disable AI denoising before the `dump` event triggers 9 times, the dump process terminates immediately and triggers the `dumpend` event. In this case, fewer than 9 audio data files are returned."
  }, {
    heading: "dump",
    content: "If the extension processes less than 30 seconds of audio, the corresponding audio file duration is also less than 30 seconds."
  }, {
    heading: "ondump",
    content: "Callback for dumping audio data."
  }, {
    heading: "ondump",
    content: "*Deprecated since v2.0.0*"
  }, {
    heading: "ondump",
    content: "This callback returns the following parameters:"
  }, {
    heading: "ondump",
    content: "`blob`: The audio data file."
  }, {
    heading: "ondump",
    content: "`name`: The name of the audio data file."
  }, {
    heading: "ondumpend",
    content: "Callback indicating that audio data dumping has completed."
  }, {
    heading: "ondumpend",
    content: "*Deprecated since v2.0.0*"
  }, {
    heading: "onoverload",
    content: "Callback for when denoising processing takes too long."
  }, {
    heading: "onoverload",
    content: "*Deprecated since v2.0.0*"
  }, {
    heading: "onoverload",
    content: "**Parameters**"
  }, {
    heading: "onoverload",
    content: "`elapsedTime`: The time (in milliseconds) the extension takes to process one audio frame. This value is for reference only; precision depends on the browser's timing accuracy. For example, Firefox has lower time precision."
  }, {
    heading: "on-callbacks",
    content: "Listens for events."
  }, {
    heading: "on-callbacks",
    content: "Since v2.0.0, the AI Denoiser extension listens for the following events using the `on` method:"
  }, {
    heading: "on-callbacks",
    content: "`pipeerror`: Wasm dependency file loading failure event. Replaces the `onloaderror` callback."
  }, {
    heading: "on-callbacks",
    content: "`overload`: Denoising processing takes too long event. Replaces the `onoverload` callback."
  }, {
    heading: "on-callbacks",
    content: "`dump`: Audio data dump event. Replaces the `ondump` callback."
  }, {
    heading: "on-callbacks",
    content: "`dumpend`: Audio data dump completed event. Replaces the `ondumpend` callback."
  }, {
    heading: "aidenoiserextensionoptions",
    content: "AI Denoiser extension initialization parameters."
  }, {
    heading: "aidenoiserextensionoptions",
    content: "**Parameters**"
  }, {
    heading: "aidenoiserextensionoptions",
    content: "`assetsPath`: The URL path to the Wasm files required by the AI Denoiser extension. Do not include a trailing slash in the path, for example, `./external`."
  }, {
    heading: "aidenoiserextensionoptions",
    content: "The extension constructs the full path to the Wasm file based on `assetsPath`. If an incorrect path causes the Wasm file to fail loading, you receive a `pipeerror` event."
  }, {
    heading: "aidenoiserprocessormode",
    content: "Denoising mode."
  }, {
    heading: "aidenoiserprocessormode",
    content: "**Values**"
  }, {
    heading: "aidenoiserprocessormode",
    content: "`NSNG`: Hybrid noise reduction. This mode suppresses both stationary and non-stationary noise types."
  }, {
    heading: "aidenoiserprocessormode",
    content: "`STATIONARY_NS`: Stationary noise suppression. This mode only suppresses stationary noise. Use this mode only when AI denoising processing takes too long."
  }, {
    heading: "aidenoiserprocessorlevel",
    content: "Denoising intensity."
  }, {
    heading: "aidenoiserprocessorlevel",
    content: "**Values**"
  }, {
    heading: "aidenoiserprocessorlevel",
    content: "`SOFT`: (Recommended) Soft denoising."
  }, {
    heading: "aidenoiserprocessorlevel",
    content: "`AGGRESSIVE`: Aggressive denoising. Increasing the denoising intensity to aggressive increases the probability of damaging the voice signal."
  }, {
    heading: "aidenoiserloglevel",
    content: "AI Denoiser extension log level."
  }, {
    heading: "aidenoiserloglevel",
    content: "**Values**"
  }, {
    heading: "aidenoiserloglevel",
    content: "`DEBUG`: (0) Prints debug information, general information, warnings, and error logs."
  }, {
    heading: "aidenoiserloglevel",
    content: "`INFO`: (1) Prints general information, warnings, and error logs."
  }, {
    heading: "aidenoiserloglevel",
    content: "`WARN`: (2) Prints warnings and error logs."
  }, {
    heading: "aidenoiserloglevel",
    content: "`ERROR`: (3) Prints error logs only."
  }, {
    heading: "aidenoiserloglevel",
    content: "`NONE`: (4) Prints no logs."
  }, {
    heading: "aidenoiserprocessorlatency",
    content: "AI denoising latency level."
  }, {
    heading: "aidenoiserprocessorlatency",
    content: "**Values**"
  }, {
    heading: "aidenoiserprocessorlatency",
    content: "`LOW`: Low latency mode (approximately 40 ms). In this mode, denoising performance is slightly reduced."
  }, {
    heading: "aidenoiserprocessorlatency",
    content: "`FULL`: High latency mode."
  }, {
    heading: "considerations",
    content: "Currently, AI Noise Suppression has the following limitations:"
  }, {
    heading: "considerations",
    content: "If only some of the audio tracks on the current web page enable AI Noise Suppression, audio tracks that do not enable AI Noise Suppression could be affected. This is because AI Noise Suppression turns on AEC and AGC and turns off NS in the browser."
  }, {
    heading: "considerations",
    content: "Although AI Noise Suppression supports Safari v14.1 and greater, there are performance issues. Best practice is to not support Safari."
  }, {
    heading: "considerations",
    content: "AI Noise Suppression does not support browsers on mobile devices."
  }, {
    heading: "considerations",
    content: "AI Noise Suppression reduces the following types of noise:"
  }, {
    heading: "considerations",
    content: "Television"
  }, {
    heading: "considerations",
    content: "Kitchen"
  }, {
    heading: "considerations",
    content: "Street, such as birds chirping, traffic, and subway sounds"
  }, {
    heading: "considerations",
    content: "Machine, such as fans, air conditioners, vacuum cleaners, and copiers"
  }, {
    heading: "considerations",
    content: "Office, such as keyboard and mouse clicks"
  }, {
    heading: "considerations",
    content: "Household, such as doors opening, creaking chairs, crying babies, and house renovations"
  }, {
    heading: "considerations",
    content: "Constant knocking"
  }, {
    heading: "considerations",
    content: "Beeps and clapping"
  }, {
    heading: "considerations",
    content: "Music"
  }, {
    heading: "considerations",
    content: "You can choose following noise reduction strategies:"
  }, {
    heading: "considerations",
    content: "Default: Reduces noise to a comfortable level without distorting human voice."
  }, {
    heading: "considerations",
    content: "Custom: A more enhanced or customized noise reduction strategy for your business use-case. Contact support\\@agora.io for details."
  }, {
    heading: "considerations",
    content: "Want to try out AI Noise Suppression? Use the online demo."
  }, {
    heading: "understand-the-tech-3",
    content: "In the pre-processing stage, AI Noise Suppression uses deep learning noise reduction algorithms to modify  data in the extensions pipeline."
  }, {
    heading: "understand-the-tech-3",
    content: "**AI noise suppression**"
  }, {
    heading: "prerequisites-3",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "enable-ai-noise-suppression-3",
    content: "This section shows you how to integrate AI Noise Suppression into your app."
  }, {
    heading: "enable-ai-noise-suppression-3",
    content: "Call `setAINSMode` to enable the AI noise suppression feature, and select a noise suppression mode:"
  }, {
    heading: "reference-3",
    content: "This section completes the information on this page, or points you to documentation that explains other aspects about this product."
  }, {
    heading: "api-reference-3",
    content: "`setAINSMode`"
  }, {
    heading: "api-reference-3",
    content: "AI Noise Suppression reduces the following types of noise:"
  }, {
    heading: "api-reference-3",
    content: "Television"
  }, {
    heading: "api-reference-3",
    content: "Kitchen"
  }, {
    heading: "api-reference-3",
    content: "Street, such as birds chirping, traffic, and subway sounds"
  }, {
    heading: "api-reference-3",
    content: "Machine, such as fans, air conditioners, vacuum cleaners, and copiers"
  }, {
    heading: "api-reference-3",
    content: "Office, such as keyboard and mouse clicks"
  }, {
    heading: "api-reference-3",
    content: "Household, such as doors opening, creaking chairs, crying babies, and house renovations"
  }, {
    heading: "api-reference-3",
    content: "Constant knocking"
  }, {
    heading: "api-reference-3",
    content: "Beeps and clapping"
  }, {
    heading: "api-reference-3",
    content: "Music"
  }, {
    heading: "api-reference-3",
    content: "You can choose following noise reduction strategies:"
  }, {
    heading: "api-reference-3",
    content: "Default: Reduces noise to a comfortable level without distorting human voice."
  }, {
    heading: "api-reference-3",
    content: "Custom: A more enhanced or customized noise reduction strategy for your business use-case. Contact support\\@agora.io for details."
  }, {
    heading: "api-reference-3",
    content: "Want to try out AI Noise Suppression? Use the online demo."
  }, {
    heading: "understand-the-tech-4",
    content: "In the pre-processing stage, AI Noise Suppression uses deep learning noise reduction algorithms to modify  data in the extensions pipeline."
  }, {
    heading: "understand-the-tech-4",
    content: "**AI noise suppression**"
  }, {
    heading: "prerequisites-4",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "enable-ai-noise-suppression-4",
    content: "This section shows you how to integrate AI Noise Suppression into your app."
  }, {
    heading: "enable-ai-noise-suppression-4",
    content: "Call `setAINSMode` to enable the AI noise suppression feature, and select a noise suppression mode:"
  }, {
    heading: "reference-4",
    content: "This section completes the information on this page, or points you to documentation that explains other aspects about this product."
  }, {
    heading: "api-reference-4",
    content: "`setAINSMode`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "enable-ai-noise-suppression",
    content: "Enable AI Noise Suppression"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "api-reference",
    content: "API reference"
  }, {
    id: "understand-the-tech-1",
    content: "Understand the tech"
  }, {
    id: "prerequisites-1",
    content: "Prerequisites"
  }, {
    id: "enable-ai-noise-suppression-1",
    content: "Enable AI Noise Suppression"
  }, {
    id: "reference-1",
    content: "Reference"
  }, {
    id: "minimum-device-requirements",
    content: "Minimum device requirements"
  }, {
    id: "api-reference-1",
    content: "API reference"
  }, {
    id: "understand-the-tech-2",
    content: "Understand the tech"
  }, {
    id: "prerequisites-2",
    content: "Prerequisites"
  }, {
    id: "enable-ai-noise-suppression-2",
    content: "Enable AI Noise Suppression"
  }, {
    id: "reference-2",
    content: "Reference"
  }, {
    id: "api-reference-2",
    content: "API reference"
  }, {
    id: "iaidenoiserextension",
    content: "IAIDenoiserExtension"
  }, {
    id: "checkcompatibility",
    content: "checkCompatibility"
  }, {
    id: "createprocessor",
    content: "createProcessor"
  }, {
    id: "setloglevel",
    content: "setLogLevel"
  }, {
    id: "onloaderror",
    content: "onloaderror"
  }, {
    id: "iaidenoiserprocessor",
    content: "IAIDenoiserProcessor"
  }, {
    id: "kind",
    content: "kind"
  }, {
    id: "enabled",
    content: "enabled"
  }, {
    id: "enable",
    content: "enable"
  }, {
    id: "disable",
    content: "disable"
  }, {
    id: "setmode",
    content: "setMode"
  }, {
    id: "setlevel",
    content: "setLevel"
  }, {
    id: "setlatency",
    content: "setLatency"
  }, {
    id: "dump",
    content: "dump"
  }, {
    id: "ondump",
    content: "ondump"
  }, {
    id: "ondumpend",
    content: "ondumpend"
  }, {
    id: "onoverload",
    content: "onoverload"
  }, {
    id: "on-callbacks",
    content: "on callbacks"
  }, {
    id: "type-definitions",
    content: "Type definitions"
  }, {
    id: "aidenoiserextensionoptions",
    content: "AIDenoiserExtensionOptions"
  }, {
    id: "aidenoiserprocessormode",
    content: "AIDenoiserProcessorMode"
  }, {
    id: "aidenoiserprocessorlevel",
    content: "AIDenoiserProcessorLevel"
  }, {
    id: "aidenoiserloglevel",
    content: "AIDenoiserLogLevel"
  }, {
    id: "aidenoiserprocessorlatency",
    content: "AIDenoiserProcessorLatency"
  }, {
    id: "considerations",
    content: "Considerations"
  }, {
    id: "understand-the-tech-3",
    content: "Understand the tech"
  }, {
    id: "prerequisites-3",
    content: "Prerequisites"
  }, {
    id: "enable-ai-noise-suppression-3",
    content: "Enable AI Noise Suppression"
  }, {
    id: "reference-3",
    content: "Reference"
  }, {
    id: "api-reference-3",
    content: "API reference"
  }, {
    id: "understand-the-tech-4",
    content: "Understand the tech"
  }, {
    id: "prerequisites-4",
    content: "Prerequisites"
  }, {
    id: "enable-ai-noise-suppression-4",
    content: "Enable AI Noise Suppression"
  }, {
    id: "reference-4",
    content: "Reference"
  }, {
    id: "api-reference-4",
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
  url: "#enable-ai-noise-suppression",
  title: _jsx(_Fragment, {
    children: "Enable AI Noise Suppression"
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
  url: "#enable-ai-noise-suppression-1",
  title: _jsx(_Fragment, {
    children: "Enable AI Noise Suppression"
  })
}, {
  depth: 2,
  url: "#reference-1",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#minimum-device-requirements",
  title: _jsx(_Fragment, {
    children: "Minimum device requirements"
  })
}, {
  depth: 3,
  url: "#api-reference-1",
  title: _jsx(_Fragment, {
    children: "API reference"
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
  url: "#enable-ai-noise-suppression-2",
  title: _jsx(_Fragment, {
    children: "Enable AI Noise Suppression"
  })
}, {
  depth: 2,
  url: "#reference-2",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference-2",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 4,
  url: "#iaidenoiserextension",
  title: _jsx(_Fragment, {
    children: "IAIDenoiserExtension"
  })
}, {
  depth: 5,
  url: "#checkcompatibility",
  title: _jsx(_Fragment, {
    children: "checkCompatibility"
  })
}, {
  depth: 5,
  url: "#createprocessor",
  title: _jsx(_Fragment, {
    children: "createProcessor"
  })
}, {
  depth: 5,
  url: "#setloglevel",
  title: _jsx(_Fragment, {
    children: "setLogLevel"
  })
}, {
  depth: 5,
  url: "#onloaderror",
  title: _jsx(_Fragment, {
    children: "onloaderror"
  })
}, {
  depth: 4,
  url: "#iaidenoiserprocessor",
  title: _jsx(_Fragment, {
    children: "IAIDenoiserProcessor"
  })
}, {
  depth: 5,
  url: "#kind",
  title: _jsx(_Fragment, {
    children: "kind"
  })
}, {
  depth: 5,
  url: "#enabled",
  title: _jsx(_Fragment, {
    children: "enabled"
  })
}, {
  depth: 5,
  url: "#enable",
  title: _jsx(_Fragment, {
    children: "enable"
  })
}, {
  depth: 5,
  url: "#disable",
  title: _jsx(_Fragment, {
    children: "disable"
  })
}, {
  depth: 5,
  url: "#setmode",
  title: _jsx(_Fragment, {
    children: "setMode"
  })
}, {
  depth: 5,
  url: "#setlevel",
  title: _jsx(_Fragment, {
    children: "setLevel"
  })
}, {
  depth: 5,
  url: "#setlatency",
  title: _jsx(_Fragment, {
    children: "setLatency"
  })
}, {
  depth: 5,
  url: "#dump",
  title: _jsx(_Fragment, {
    children: "dump"
  })
}, {
  depth: 5,
  url: "#ondump",
  title: _jsx(_Fragment, {
    children: "ondump"
  })
}, {
  depth: 5,
  url: "#ondumpend",
  title: _jsx(_Fragment, {
    children: "ondumpend"
  })
}, {
  depth: 5,
  url: "#onoverload",
  title: _jsx(_Fragment, {
    children: "onoverload"
  })
}, {
  depth: 5,
  url: "#on-callbacks",
  title: _jsx(_Fragment, {
    children: "on callbacks"
  })
}, {
  depth: 4,
  url: "#type-definitions",
  title: _jsx(_Fragment, {
    children: "Type definitions"
  })
}, {
  depth: 5,
  url: "#aidenoiserextensionoptions",
  title: _jsx(_Fragment, {
    children: "AIDenoiserExtensionOptions"
  })
}, {
  depth: 5,
  url: "#aidenoiserprocessormode",
  title: _jsx(_Fragment, {
    children: "AIDenoiserProcessorMode"
  })
}, {
  depth: 5,
  url: "#aidenoiserprocessorlevel",
  title: _jsx(_Fragment, {
    children: "AIDenoiserProcessorLevel"
  })
}, {
  depth: 5,
  url: "#aidenoiserloglevel",
  title: _jsx(_Fragment, {
    children: "AIDenoiserLogLevel"
  })
}, {
  depth: 5,
  url: "#aidenoiserprocessorlatency",
  title: _jsx(_Fragment, {
    children: "AIDenoiserProcessorLatency"
  })
}, {
  depth: 3,
  url: "#considerations",
  title: _jsx(_Fragment, {
    children: "Considerations"
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
  url: "#enable-ai-noise-suppression-3",
  title: _jsx(_Fragment, {
    children: "Enable AI Noise Suppression"
  })
}, {
  depth: 2,
  url: "#reference-3",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference-3",
  title: _jsx(_Fragment, {
    children: "API reference"
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
  url: "#enable-ai-noise-suppression-4",
  title: _jsx(_Fragment, {
    children: "Enable AI Noise Suppression"
  })
}, {
  depth: 2,
  url: "#reference-4",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference-4",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger, Link, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CodeBlockTab)
    _missingMdxReference("CodeBlockTab", true);
  if (!CodeBlockTabs)
    _missingMdxReference("CodeBlockTabs", true);
  if (!CodeBlockTabsList)
    _missingMdxReference("CodeBlockTabsList", true);
  if (!CodeBlockTabsTrigger)
    _missingMdxReference("CodeBlockTabsTrigger", true);
  if (!Link)
    _missingMdxReference("Link", true);
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "AI Noise Suppression enables you to suppress hundreds of types of noise and reduce distortion in human voices when multiple people speak at the same time. In use-cases such as online meetings, online chat rooms, video consultations with doctors, and online gaming, AI Noise Suppression makes virtual communication as smooth as face-to-face interaction."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","ios","web","electron","react-native"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsx("a", {
          name: "type"
        }), _jsx(_components.p, {
          children: "AI Noise Suppression reduces the following types of noise:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Television"
          }), `
`, _jsx(_components.li, {
            children: "Kitchen"
          }), `
`, _jsx(_components.li, {
            children: "Street, such as birds chirping, traffic, and subway sounds"
          }), `
`, _jsx(_components.li, {
            children: "Machine, such as fans, air conditioners, vacuum cleaners, and copiers"
          }), `
`, _jsx(_components.li, {
            children: "Office, such as keyboard and mouse clicks"
          }), `
`, _jsx(_components.li, {
            children: "Household, such as doors opening, creaking chairs, crying babies, and house renovations"
          }), `
`, _jsx(_components.li, {
            children: "Constant knocking"
          }), `
`, _jsx(_components.li, {
            children: "Beeps and clapping"
          }), `
`, _jsx(_components.li, {
            children: "Music"
          }), `
`]
        }), _jsx(_components.p, {
          children: "You can choose following noise reduction strategies:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Default: Reduces noise to a comfortable level without distorting human voice."
          }), `
`, _jsxs(_components.li, {
            children: ["Custom: A more enhanced or customized noise reduction strategy for your business use-case. Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), " for details."]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Want to try out AI Noise Suppression? Use the ", _jsx("a", {
            href: "https://webdemo-global.agora.io/example/extension/aiDenoiser/index.html",
            children: "online demo"
          }), "."]
        }), _jsx(_components.h2, {
          id: "understand-the-tech",
          children: "Understand the tech"
        }), _jsxs(_components.p, {
          children: ["In the pre-processing stage, AI Noise Suppression uses deep learning noise reduction algorithms to modify ", _jsx("audio", {
            src: ""
          }), " data in the extensions pipeline."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "AI noise suppression"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/extensions-marketplace/ai-noise-suppression.svg",
            alt: "image"
          })
        }), _jsx(_components.h2, {
          id: "prerequisites",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "../../index.mdx",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "enable-ai-noise-suppression",
          children: "Enable AI Noise Suppression"
        }), _jsx(_components.p, {
          children: "This section shows you how to integrate AI Noise Suppression into your app."
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setAINSMode"
          }), " to enable the AI noise suppression feature, and select a noise suppression mode:"]
        }), _jsxs(CodeBlockTabs, {
          defaultValue: "java",
          children: [_jsxs(CodeBlockTabsList, {
            children: [_jsx(CodeBlockTabsTrigger, {
              value: "java",
              children: "Java"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "kotlin",
              children: "Kotlin"
            })]
          }), _jsx(CodeBlockTab, {
            value: "java",
            children: _jsx(_Fragment, {
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
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Noise reductions modes"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// 0 -> Balance mode"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// 1 -> Aggressive mode"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// 2 -> Aggressive mode with low latency"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "int"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " mode "
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
                      children: " 1"
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
                      children: "// Set the mode for Audio AI Noise Suppression"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "int"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " result "
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
                      children: " rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setAINSMode"
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
                      children: ", mode);"
                    })]
                  })]
                })
              })
            })
          }), _jsx(CodeBlockTab, {
            value: "kotlin",
            children: _jsx(_Fragment, {
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
                      children: "// Noise reductions modes"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// 0 -> Balance mode"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// 1 -> Aggressive mode"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// 2 -> Aggressive mode with low latency"
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
                      children: " mode "
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
                      children: " 1"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the mode for Audio AI Noise Suppression"
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
                      children: " result "
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
                      children: " rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setAINSMode"
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
                      children: ", mode)"
                    })]
                  })]
                })
              })
            })
          })]
        }), _jsx(_components.h2, {
          id: "reference",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section completes the information on this page, or points you to documentation that explains other aspects about this product."
        }), _jsx(_components.h3, {
          id: "api-reference",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(Link, {
              to: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setainsmode",
              children: _jsx(_components.code, {
                children: "setAINSMode"
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
        }), _jsx("a", {
          name: "type"
        }), _jsx(_components.p, {
          children: "AI Noise Suppression reduces the following types of noise:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Television"
          }), `
`, _jsx(_components.li, {
            children: "Kitchen"
          }), `
`, _jsx(_components.li, {
            children: "Street, such as birds chirping, traffic, and subway sounds"
          }), `
`, _jsx(_components.li, {
            children: "Machine, such as fans, air conditioners, vacuum cleaners, and copiers"
          }), `
`, _jsx(_components.li, {
            children: "Office, such as keyboard and mouse clicks"
          }), `
`, _jsx(_components.li, {
            children: "Household, such as doors opening, creaking chairs, crying babies, and house renovations"
          }), `
`, _jsx(_components.li, {
            children: "Constant knocking"
          }), `
`, _jsx(_components.li, {
            children: "Beeps and clapping"
          }), `
`, _jsx(_components.li, {
            children: "Music"
          }), `
`]
        }), _jsx(_components.p, {
          children: "You can choose following noise reduction strategies:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Default: Reduces noise to a comfortable level without distorting human voice."
          }), `
`, _jsxs(_components.li, {
            children: ["Custom: A more enhanced or customized noise reduction strategy for your business use-case. Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), " for details."]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Want to try out AI Noise Suppression? Use the ", _jsx("a", {
            href: "https://webdemo-global.agora.io/example/extension/aiDenoiser/index.html",
            children: "online demo"
          }), "."]
        }), _jsx(_components.h2, {
          id: "understand-the-tech-1",
          children: "Understand the tech"
        }), _jsxs(_components.p, {
          children: ["In the pre-processing stage, AI Noise Suppression uses deep learning noise reduction algorithms to modify ", _jsx("audio", {
            src: ""
          }), " data in the extensions pipeline."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "AI noise suppression"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/extensions-marketplace/ai-noise-suppression.svg",
            alt: "image"
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-1",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "../../index.mdx",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "enable-ai-noise-suppression-1",
          children: "Enable AI Noise Suppression"
        }), _jsx(_components.p, {
          children: "This section shows you how to integrate AI Noise Suppression into your app."
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setAINSMode"
          }), " to enable the AI noise suppression feature, and select a noise suppression mode:"]
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
            icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set AINS mode to AINS_MODE_BALANCED (0)"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set AINS mode to AINS_MODE_AGGRESSIVE (1)"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set AINS mode to AINS_MODE_ULTRALOWLATENCY (2)"
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
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " result "
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
                  children: " agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setAINSMode"
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
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "mode"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "2"
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
        }), _jsx(_components.p, {
          children: "When AI Noise Suppression is enabled, if RTC SDK detects that the device performance is not sufficient, it:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Disables AI Noise Suppression"
          }), `
`, _jsx(_components.li, {
            children: "Enables traditional noise reduction"
          }), `
`, _jsxs(_components.li, {
            children: ["Throws the ", _jsx(_components.code, {
              children: "WARN_APM_AINS_CLOSED"
            }), " (-1054) error code"]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "reference-1",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section completes the information on this page, or points you to documentation that explains other aspects about this product."
        }), _jsx(_components.h3, {
          id: "minimum-device-requirements",
          children: "Minimum device requirements"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "iOS iPhone 6S"
          }), `
`, _jsx(_components.li, {
            children: "iPadOS"
          }), `
`, _jsx(_components.li, {
            children: "iPad Pro (2nd generation)"
          }), `
`, _jsx(_components.li, {
            children: "iPad mini (5th generation)"
          }), `
`, _jsx(_components.li, {
            children: "iPad Air (3rd generation)"
          }), `
`, _jsx(_components.li, {
            children: "macOS MacBook Pro 2015"
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-1",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(Link, {
              to: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setainsmode(_:mode:)",
              children: _jsx(_components.code, {
                children: "setAINSMode"
              })
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
        }), _jsxs(_components.p, {
          children: ["Try out the ", _jsx(_components.a, {
            href: "https://webdemo-global.agora.io/index.html",
            children: "online demo"
          }), " for ", _jsx(_components.a, {
            href: "https://webdemo-global.agora.io/example/plugin/aiDenoiser/index.html",
            children: "AI noise suppression"
          }), "."]
        }), _jsx("a", {
          name: "type"
        }), _jsx(_components.p, {
          children: "AI Noise Suppression reduces the following types of noise:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Television"
          }), `
`, _jsx(_components.li, {
            children: "Kitchen"
          }), `
`, _jsx(_components.li, {
            children: "Street, such as birds chirping, traffic, and subway sounds"
          }), `
`, _jsx(_components.li, {
            children: "Machine, such as fans, air conditioners, vacuum cleaners, and copiers"
          }), `
`, _jsx(_components.li, {
            children: "Office, such as keyboard and mouse clicks"
          }), `
`, _jsx(_components.li, {
            children: "Household, such as doors opening, creaking chairs, crying babies, and house renovations"
          }), `
`, _jsx(_components.li, {
            children: "Constant knocking"
          }), `
`, _jsx(_components.li, {
            children: "Beeps and clapping"
          }), `
`, _jsx(_components.li, {
            children: "Music"
          }), `
`]
        }), _jsx(_components.p, {
          children: "You can choose following noise reduction strategies:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Default: Reduces noise to a comfortable level without distorting human voice."
          }), `
`, _jsxs(_components.li, {
            children: ["Custom: A more enhanced or customized noise reduction strategy for your business use-case. Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), " for details."]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Want to try out AI Noise Suppression? Use the ", _jsx("a", {
            href: "https://webdemo-global.agora.io/example/extension/aiDenoiser/index.html",
            children: "online demo"
          }), "."]
        }), _jsx(_components.h2, {
          id: "understand-the-tech-2",
          children: "Understand the tech"
        }), _jsxs(_components.p, {
          children: ["In the pre-processing stage, AI Noise Suppression uses deep learning noise reduction algorithms to modify ", _jsx("audio", {
            src: ""
          }), " data in the extensions pipeline."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "AI noise suppression"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/extensions-marketplace/ai-noise-suppression.svg",
            alt: "image"
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-2",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "../../index.mdx",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "enable-ai-noise-suppression-2",
          children: "Enable AI Noise Suppression"
        }), _jsx(_components.p, {
          children: "This section shows you how to integrate AI Noise Suppression into your app."
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["The following implementation steps apply to the latest version of the AI Noise Suppression extension. Refer to the ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/reference/release-notes",
                children: "extension release notes"
              }), " for details."]
            })
          })
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Integrate AI Noise Suppression into your app"
            }), `
`, _jsxs(_components.p, {
              children: ["To install the AI Noise Suppression extension (", _jsx(_components.a, {
                href: "https://www.npmjs.com/package/agora-extension-ai-denoiser",
                children: "agora-extension-ai-denoiser"
              }), "), in the root of your project run the following command:"]
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
                      children: "npm install agora"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "-"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "extension"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "-"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "ai"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "-"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "denoiser"
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
              children: "Import AI Noise Suppression"
            }), `
`, _jsxs(_components.p, {
              children: ["Add the following code to your ", _jsx(_components.code, {
                children: ".js"
              }), " file."]
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
                      children: " {AIDenoiserExtension} "
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
                      children: ' "agora-extension-ai-denoiser"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
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
              children: "Dynamically load the Wasm dependencies"
            }), `
`, _jsx(_components.p, {
              children: "The AI Noise Suppression extension depends on a few Wasm files. To ensure that the browser can load and execute these files, do the following:"
            }), `
`, _jsxs(_components.ol, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Publish the files located in the ", _jsx(_components.code, {
                    children: "node_modules/agora-extension-ai-denoiser/external"
                  }), " directory to the CDN or static resource server, and put them under one public path. In subsequent steps, you need to pass in the public path URL to create an", _jsx(_components.code, {
                    children: " AIDenoiserExtension"
                  }), " instance. The extension then dynamically loads these files."]
                }), `
`, _jsx(CalloutContainer, {
                  type: "info",
                  children: _jsx(CalloutDescription, {
                    children: _jsxs(_components.ul, {
                      children: [`
`, _jsx(_components.li, {
                        children: "If the host URL of the Wasm files is not the same as that of the web application, enable the CORS policy."
                      }), `
`, _jsx(_components.li, {
                        children: "Do not put the Wasm files in an HTTP service, loading HTTP resources in the HTTPS domain is blocked by the browsers' security policy."
                      }), `
`]
                    })
                  })
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "If you have enabled the Content Security Policy (CSP), because Wasm files are not allowed to load in Chrome and Edge by default, you need to configure the CSP as follows:"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsxs(_components.p, {
                      children: ["For versions later than Chrome 97 and Edge 97 (Chrome 97 and Edge 97 included): Add ", _jsx(_components.code, {
                        children: "'wasm-unsafe-eval'"
                      }), " and ", _jsx(_components.code, {
                        children: "blob:"
                      }), " in the ", _jsx(_components.a, {
                        href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src",
                        children: _jsx(_components.code, {
                          children: "script-src"
                        })
                      }), " options. For example:"]
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
                              children: "<"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#22863A",
                                "--shiki-dark": "#85E89D"
                              },
                              children: "meta"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: " http-equiv"
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
                              children: '"Content-Security-Policy"'
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: " content"
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
                              children: `"script-src 'self' 'wasm-unsafe-eval' blob:"`
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
`, _jsxs(_components.p, {
                      children: ["For versions earlier than Chrome 97 and Edge 97: Add ", _jsx(_components.code, {
                        children: "'unsafe-eval'"
                      }), " and ", _jsx(_components.code, {
                        children: "blob:"
                      }), " in the ", _jsx(_components.code, {
                        children: "script-src"
                      }), " options."]
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
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Register the AI Noise Suppression extension"
            }), `
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(Link, {
                to: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#registerextensions",
                children: "AgoraRTC.registerExtensions"
              }), ", and pass in the created ", _jsx(_components.code, {
                children: "AIDenoiserExtension"
              }), " instance. Optionally, listen for the callback reporting that the Wasm and JS files fail to load."]
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
                      children: "// Create an AIDenoiserExtension instance, and pass in the host URL of the Wasm files"
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
                      children: " denoiser"
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
                      children: " AIDenoiserExtension"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "({assetsPath:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "'./external'"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "});"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Check compatibility"
                    })
                  }), `
`, _jsxs(_components.span, {
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
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "!"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "denoiser."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "checkCompatibility"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()) {"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // The extension might not be supported in the current browser. You can stop executing further code logic"
                    })
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
                      children: "error"
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
                      children: '"Does not support AI Denoiser!"'
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
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Register the extension"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "AgoraRTC."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "registerExtensions"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "([denoiser]);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// (Optional) Listen for the callback reporting that the Wasm files fail to load"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "denoiser."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "onloaderror"
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
                      children: " ("
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
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // If the Wasm files fail to load, you can disable the extension, for example:"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // openDenoiserButton.enabled = false;"
                    })
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
                      children: "(e);"
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
`, _jsxs(_components.p, {
              children: ["Best practice is to create one ", _jsx(_components.code, {
                children: "AIDenoiserExtension"
              }), " instance only."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Create an ", _jsx(_components.code, {
                children: "IAIDenoiserProcessor"
              }), " instance"]
            }), `
`, _jsxs(_components.p, {
              children: ["Call the ", _jsx(_components.code, {
                children: "createProcessor"
              }), " method to create a ", _jsx(_components.code, {
                children: "processor"
              }), ", and set whether to enable the extension by default. If you do not set the default state, the extension inherits the previous state."]
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
                      children: "// Create a processor"
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
                      children: " processor"
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
                      children: " denoiser."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "createProcessor"
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
                      children: "// Enable the extension by default"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "processor."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "enable"
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
                      children: "// Disable the extension by default"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// processor.disable();"
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
              children: "Inject the extension to the audio processing pipeline"
            }), `
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/imicrophoneaudiotrack.html#pipe",
                children: "pipe"
              }), " and specify the ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/imicrophoneaudiotrack.html#processordestination",
                children: "processorDestination"
              }), " property."]
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
                      children: "// Create a local video track"
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
                      children: " audioTrack"
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
                      children: " await"
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
                      children: "createMicrophoneAudioTrack"
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
                      children: "// Inject the extension to the audio processing pipeline"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioTrack."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pipe"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(processor)."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pipe"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(audioTrack.processorDestination);"
                    })]
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
                      children: " processor."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "enable"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
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
              children: "Enable or disable the extension"
            }), `
`, _jsxs(_components.p, {
              children: ["Call the ", _jsx(_components.code, {
                children: "enable"
              }), " or ", _jsx(_components.code, {
                children: "disable"
              }), " methods as needed."]
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
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "() "
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
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  if"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " (processor.enabled) {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    await"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " processor."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "disable"
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
                      children: "  } "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "else"
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
                      children: "    await"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " processor."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "enable"
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
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Set the noise suppression mode and level"
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
                      children: "// Listen for the callback reporting that the noise suppression process takes too long"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "processor."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "on"
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
                      children: '"overload"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "async"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " ("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: "elapsedTime"
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
                      children: '"overload!!!"'
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
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Switch to steady-state noise reduction mode, temporarily disable AI noise reduction."
                    })
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
                      children: " processor."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setMode"
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
                      children: '"STATIONARY_NS"'
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
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Completely disable AI noise reduction and use the browser's built-in noise reduction."
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // await processor.disable()"
                    })
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
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Dump audio data"
            }), `
`, _jsxs(_components.p, {
              children: ["Best practice for logging is to dump audio data. This significantly improves the efficiency of troubleshooting. To do this, call the ", _jsx(_components.code, {
                children: "dump"
              }), " method and listen for the ", _jsx(_components.code, {
                children: "dump"
              }), " and ", _jsx(_components.code, {
                children: "dumpend"
              }), " events to dump the audio data during the noise suppression process."]
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
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "processor."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "on"
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
                      children: '"dump"'
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
                      children: "blob"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: "name"
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
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Dump the audio data files generated during the noise suppression process to your local machine in .pcm format."
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  const"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " objectURL"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " URL"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "createObjectURL"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(blob);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  const"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " tag"
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
                      children: " document."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "createElement"
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
                      children: '"a"'
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
                      children: "  tag.download "
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
                      children: " name;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  tag.href "
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
                      children: " objectURL;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  tag."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "click"
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "  setTimeout"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(() "
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
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "URL"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "revokeObjectURL"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(objectURL);}, "
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
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "processor."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "on"
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
                      children: '"dumpend"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", () "
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
                      children: '"dump ended!!"'
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
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "processor."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "dump"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "reference-2",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section completes the information on this page, or points you to documentation that explains other aspects about this product."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["For a working example, check out the ", _jsx(_components.a, {
              href: "https://webdemo-global.agora.io/example/extension/aiDenoiser/index.html",
              children: "AI Denoiser web demo"
            }), " and the associated ", _jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples-Web/tree/main/Demo/aiDenoiser",
              children: "source code"
            }), "."]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-2",
          children: "API reference"
        }), _jsx(_components.p, {
          children: "This section provides the API reference for the AI Denoiser extension."
        }), _jsx(_components.h4, {
          id: "iaidenoiserextension",
          children: "IAIDenoiserExtension"
        }), _jsx(_components.h5, {
          id: "checkcompatibility",
          children: "checkCompatibility"
        }), _jsx(_components.p, {
          children: "Checks whether the current browser supports the AI Denoiser extension. The result returned by this method is for reference only."
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "checkCompatibility"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(): boolean;"
                })]
              })
            })
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.em, {
            children: "Since v1.1.0"
          })
        }), _jsx(_components.h5, {
          id: "createprocessor",
          children: "createProcessor"
        }), _jsxs(_components.p, {
          children: ["Creates an ", _jsx(_components.code, {
            children: "IAIDenoiserProcessor"
          }), " instance."]
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "createProcessor"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(): IAIDenoiserProcessor;"
                })]
              })
            })
          })
        }), _jsx(_components.h5, {
          id: "setloglevel",
          children: "setLogLevel"
        }), _jsxs(_components.p, {
          children: ["Sets the log level. For available log levels, see ", _jsx(_components.a, {
            href: "#aidenoiserloglevel",
            children: "AIDenoiserLogLevel"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "public "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLogLevel"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(level: AIDenoiserLogLevel)"
                })]
              })
            })
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.em, {
            children: "Since v2.0.0"
          })
        }), _jsx(_components.h5, {
          id: "onloaderror",
          children: "onloaderror"
        }), _jsx(_components.p, {
          children: "Callback for Wasm dependency file loading failures."
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
                  children: "onloaderror"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "?:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "error"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " Error"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              })
            })
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.em, {
            children: "Deprecated since v2.0.0"
          })
        }), _jsx(_components.h4, {
          id: "iaidenoiserprocessor",
          children: "IAIDenoiserProcessor"
        }), _jsx(_components.h5, {
          id: "kind",
          children: "kind"
        }), _jsx(_components.p, {
          children: "The processor type, either video or audio."
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
                  children: "get "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "kind"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(): "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'video'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " |"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'audio'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              })
            })
          })
        }), _jsx(_components.h5, {
          id: "enabled",
          children: "enabled"
        }), _jsx(_components.p, {
          children: "Whether the extension is enabled:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "true"
            }), ": Enabled."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "false"
            }), ": Not enabled."]
          }), `
`]
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
                  children: "get "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "enabled"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(): boolean;"
                })]
              })
            })
          })
        }), _jsx(_components.h5, {
          id: "enable",
          children: "enable"
        }), _jsx(_components.p, {
          children: "Enables the AI denoising feature."
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "enable"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(): "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " |"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " Promise"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<void>"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              })
            })
          })
        }), _jsx(_components.h5, {
          id: "disable",
          children: "disable"
        }), _jsx(_components.p, {
          children: "Disables the AI denoising feature."
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "disable"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(): "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " |"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " Promise"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<void>"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              })
            })
          })
        }), _jsxs(_components.p, {
          children: ["This method must be called after ", _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/imicrophoneaudiotrack.html",
            children: _jsx(_components.code, {
              children: "pipe"
            })
          }), "."]
        }), _jsx(_components.h5, {
          id: "setmode",
          children: "setMode"
        }), _jsx(_components.p, {
          children: "Sets the denoising mode."
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setMode"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(mode: AIDenoiserProcessorMode): "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "Promise"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<void>"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              })
            })
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.em, {
            children: "Since v1.1.0"
          })
        }), _jsxs(_components.p, {
          children: ["You can call this method in the ", _jsx(_components.a, {
            href: "#onoverload",
            children: "onoverload"
          }), " callback to switch to stationary noise suppression to reduce overhead. See ", _jsx(_components.a, {
            href: "#aidenoiserprocessormode",
            children: "AIDenoiserProcessorMode"
          }), " for details."]
        }), _jsxs(_components.p, {
          children: ["This method must be called after ", _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/imicrophoneaudiotrack.html",
            children: _jsx(_components.code, {
              children: "pipe"
            })
          }), "."]
        }), _jsx(_components.h5, {
          id: "setlevel",
          children: "setLevel"
        }), _jsxs(_components.p, {
          children: ["Sets the denoising intensity. See ", _jsx(_components.a, {
            href: "#aidenoiserprocessorlevel",
            children: "AIDenoiserProcessorLevel"
          }), " for details."]
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLevel"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(level: AIDenoiserProcessorLevel): "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "Promise"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<void>"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              })
            })
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.em, {
            children: "Since v1.1.0"
          })
        }), _jsxs(_components.p, {
          children: ["This method must be called after ", _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/imicrophoneaudiotrack.html",
            children: _jsx(_components.code, {
              children: "pipe"
            })
          }), "."]
        }), _jsx(_components.h5, {
          id: "setlatency",
          children: "setLatency"
        }), _jsxs(_components.p, {
          children: ["Sets the denoising latency level. See ", _jsx(_components.a, {
            href: "#aidenoiserprocessorlatency",
            children: "AIDenoiserProcessorLatency"
          }), " for details."]
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLatency"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(latency: AIDenoiserProcessorLatency): "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "Promise"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<void>"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              })
            })
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.em, {
            children: "Since v2.0.0"
          })
        }), _jsxs(_components.p, {
          children: ["This method must be called after ", _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/imicrophoneaudiotrack.html",
            children: _jsx(_components.code, {
              children: "pipe"
            })
          }), "."]
        }), _jsx(_components.h5, {
          id: "dump",
          children: "dump"
        }), _jsx(_components.p, {
          children: "Dumps audio data during the denoising process to help troubleshoot and analyze denoising issues."
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "dump"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(): "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              })
            })
          })
        }), _jsxs(_components.p, {
          children: ["This method must be called after ", _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/imicrophoneaudiotrack.html",
            children: _jsx(_components.code, {
              children: "pipe"
            })
          }), "."]
        }), _jsxs(_components.p, {
          children: ["Calling this method triggers 9 ", _jsx(_components.code, {
            children: "dump"
          }), " events, returning audio data processed by the extension 30 seconds before and 60 seconds after the method call, for a total of 9 audio files (see audio file description). Then it triggers the ", _jsx(_components.code, {
            children: "dumpend"
          }), " event, indicating that the audio data dump has completed."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Audio file description"
          })
        }), _jsx(_components.p, {
          children: "Each audio file is encoded in PCM format with a duration of 30 seconds. The filename contains the following information:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The processing stage of the audio data, one of the following:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "input"
                }), ": Audio data awaiting denoising."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "ns_out"
                }), ": Audio data after noise suppression."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "agc_out"
                }), ": Audio data after voice enhancement."]
              }), `
`]
            }), `
`]
          }), `
`, _jsx(_components.li, {
            children: "Audio sample rate."
          }), `
`, _jsx(_components.li, {
            children: "Number of channels."
          }), `
`, _jsx(_components.li, {
            children: "Dump time: If the dump time is T (in seconds), the file contains audio data from the range [T-30, T]."
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Example audio filename: ", _jsx(_components.code, {
            children: "input_16000hz_1ch_0.pcm"
          })]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Note"
          })
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["If you disable AI denoising before the ", _jsx(_components.code, {
              children: "dump"
            }), " event triggers 9 times, the dump process terminates immediately and triggers the ", _jsx(_components.code, {
              children: "dumpend"
            }), " event. In this case, fewer than 9 audio data files are returned."]
          }), `
`, _jsx(_components.li, {
            children: "If the extension processes less than 30 seconds of audio, the corresponding audio file duration is also less than 30 seconds."
          }), `
`]
        }), _jsx(_components.h5, {
          id: "ondump",
          children: "ondump"
        }), _jsx(_components.p, {
          children: "Callback for dumping audio data."
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
                  children: "ondump"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "?:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "blob"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " Blob"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "name"
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
                  children: " string"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              })
            })
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.em, {
            children: "Deprecated since v2.0.0"
          })
        }), _jsx(_components.p, {
          children: "This callback returns the following parameters:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "blob"
            }), ": The audio data file."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "name"
            }), ": The name of the audio data file."]
          }), `
`]
        }), _jsx(_components.h5, {
          id: "ondumpend",
          children: "ondumpend"
        }), _jsx(_components.p, {
          children: "Callback indicating that audio data dumping has completed."
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
                  children: "ondumpend"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "?:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " () "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "=>"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              })
            })
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.em, {
            children: "Deprecated since v2.0.0"
          })
        }), _jsx(_components.h5, {
          id: "onoverload",
          children: "onoverload"
        }), _jsx(_components.p, {
          children: "Callback for when denoising processing takes too long."
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
                  children: "onoverload"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "?:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "elapsedTime"
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
                  children: " number"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              })
            })
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.em, {
            children: "Deprecated since v2.0.0"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Parameters"
          })
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "elapsedTime"
            }), ": The time (in milliseconds) the extension takes to process one audio frame. This value is for reference only; precision depends on the browser's timing accuracy. For example, Firefox has lower time precision."]
          }), `
`]
        }), _jsx(_components.h5, {
          id: "on-callbacks",
          children: "on callbacks"
        }), _jsx(_components.p, {
          children: "Listens for events."
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
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "on"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(event: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"pipeerror"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", listener: AIDenoiserProcessorPipeErrorCallback): "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "void"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "on"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(event: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"overload"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", listener: AIDenoiserProcessorOverloadCallback): "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "void"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "on"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(event: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"dump"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", listener: AIDenoiserProcessorDumpCallback): "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "void"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "on"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(event: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"dumpend"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", listener: AIDenoiserProcessorDumpEndCallback): "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              })]
            })
          })
        }), _jsxs(_components.p, {
          children: ["Since v2.0.0, the AI Denoiser extension listens for the following events using the ", _jsx(_components.code, {
            children: "on"
          }), " method:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "pipeerror"
            }), ": Wasm dependency file loading failure event. Replaces the ", _jsx(_components.code, {
              children: "onloaderror"
            }), " callback."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "overload"
            }), ": Denoising processing takes too long event. Replaces the ", _jsx(_components.code, {
              children: "onoverload"
            }), " callback."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "dump"
            }), ": Audio data dump event. Replaces the ", _jsx(_components.code, {
              children: "ondump"
            }), " callback."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "dumpend"
            }), ": Audio data dump completed event. Replaces the ", _jsx(_components.code, {
              children: "ondumpend"
            }), " callback."]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "type-definitions",
          children: "Type definitions"
        }), _jsx(_components.h5, {
          id: "aidenoiserextensionoptions",
          children: "AIDenoiserExtensionOptions"
        }), _jsx(_components.p, {
          children: "AI Denoiser extension initialization parameters."
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
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
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
                  children: " interface"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " AIDenoiserExtensionOptions"
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
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: " assetsPath"
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
                  children: " string"
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
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Parameters"
          })
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "assetsPath"
            }), ": The URL path to the Wasm files required by the AI Denoiser extension. Do not include a trailing slash in the path, for example, ", _jsx(_components.code, {
              children: "./external"
            }), "."]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["The extension constructs the full path to the Wasm file based on ", _jsx(_components.code, {
            children: "assetsPath"
          }), ". If an incorrect path causes the Wasm file to fail loading, you receive a ", _jsx(_components.code, {
            children: "pipeerror"
          }), " event."]
        }), _jsx(_components.h5, {
          id: "aidenoiserprocessormode",
          children: "AIDenoiserProcessorMode"
        }), _jsx(_components.p, {
          children: "Denoising mode."
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
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
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
                  children: " enum"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " AIDenoiserProcessorMode"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " NSNG"
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
                  children: ' "NSNG"'
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
                  children: " STATIONARY_NS"
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
                  children: ' "STATIONARY_NS"'
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
                  children: "}"
                })
              })]
            })
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Values"
          })
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "NSNG"
            }), ": Hybrid noise reduction. This mode suppresses both stationary and non-stationary noise types."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "STATIONARY_NS"
            }), ": Stationary noise suppression. This mode only suppresses stationary noise. Use this mode only when AI denoising processing takes too long."]
          }), `
`]
        }), _jsx(_components.h5, {
          id: "aidenoiserprocessorlevel",
          children: "AIDenoiserProcessorLevel"
        }), _jsx(_components.p, {
          children: "Denoising intensity."
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
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
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
                  children: " enum"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " AIDenoiserProcessorLevel"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " SOFT"
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
                  children: ' "SOFT"'
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
                  children: " AGGRESSIVE"
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
                  children: ' "AGGRESSIVE"'
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
                  children: "}"
                })
              })]
            })
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Values"
          })
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "SOFT"
            }), ": (Recommended) Soft denoising."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AGGRESSIVE"
            }), ": Aggressive denoising. Increasing the denoising intensity to aggressive increases the probability of damaging the voice signal."]
          }), `
`]
        }), _jsx(_components.h5, {
          id: "aidenoiserloglevel",
          children: "AIDenoiserLogLevel"
        }), _jsx(_components.p, {
          children: "AI Denoiser extension log level."
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
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
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
                  children: " enum"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " AIDenoiserLogLevel"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " DEBUG"
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
                  children: ' "DEBUG"'
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
                  children: " INFO"
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
                  children: ' "INFO"'
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
                  children: " WARN"
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
                  children: ' "WARN"'
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
                  children: " ERROR"
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
                  children: ' "ERROR"'
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
                  children: " NONE"
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
                  children: ' "NONE"'
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
                  children: "}"
                })
              })]
            })
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Values"
          })
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "DEBUG"
            }), ": (0) Prints debug information, general information, warnings, and error logs."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "INFO"
            }), ": (1) Prints general information, warnings, and error logs."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "WARN"
            }), ": (2) Prints warnings and error logs."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "ERROR"
            }), ": (3) Prints error logs only."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "NONE"
            }), ": (4) Prints no logs."]
          }), `
`]
        }), _jsx(_components.h5, {
          id: "aidenoiserprocessorlatency",
          children: "AIDenoiserProcessorLatency"
        }), _jsx(_components.p, {
          children: "AI denoising latency level."
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
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
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
                  children: " enum"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " AIDenoiserProcessorLatency"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " LOW"
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
                  children: ' "LOW"'
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
                  children: " FULL"
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
                  children: ' "FULL"'
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
                  children: "}"
                })
              })]
            })
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Values"
          })
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "LOW"
            }), ": Low latency mode (approximately 40 ms). In this mode, denoising performance is slightly reduced."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "FULL"
            }), ": High latency mode."]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "considerations",
          children: "Considerations"
        }), _jsx(_components.p, {
          children: "Currently, AI Noise Suppression has the following limitations:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "If only some of the audio tracks on the current web page enable AI Noise Suppression, audio tracks that do not enable AI Noise Suppression could be affected. This is because AI Noise Suppression turns on AEC and AGC and turns off NS in the browser."
          }), `
`, _jsx(_components.li, {
            children: "Although AI Noise Suppression supports Safari v14.1 and greater, there are performance issues. Best practice is to not support Safari."
          }), `
`, _jsx(_components.li, {
            children: "AI Noise Suppression does not support browsers on mobile devices."
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
        }), _jsx("a", {
          name: "type"
        }), _jsx(_components.p, {
          children: "AI Noise Suppression reduces the following types of noise:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Television"
          }), `
`, _jsx(_components.li, {
            children: "Kitchen"
          }), `
`, _jsx(_components.li, {
            children: "Street, such as birds chirping, traffic, and subway sounds"
          }), `
`, _jsx(_components.li, {
            children: "Machine, such as fans, air conditioners, vacuum cleaners, and copiers"
          }), `
`, _jsx(_components.li, {
            children: "Office, such as keyboard and mouse clicks"
          }), `
`, _jsx(_components.li, {
            children: "Household, such as doors opening, creaking chairs, crying babies, and house renovations"
          }), `
`, _jsx(_components.li, {
            children: "Constant knocking"
          }), `
`, _jsx(_components.li, {
            children: "Beeps and clapping"
          }), `
`, _jsx(_components.li, {
            children: "Music"
          }), `
`]
        }), _jsx(_components.p, {
          children: "You can choose following noise reduction strategies:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Default: Reduces noise to a comfortable level without distorting human voice."
          }), `
`, _jsxs(_components.li, {
            children: ["Custom: A more enhanced or customized noise reduction strategy for your business use-case. Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), " for details."]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Want to try out AI Noise Suppression? Use the ", _jsx("a", {
            href: "https://webdemo-global.agora.io/example/extension/aiDenoiser/index.html",
            children: "online demo"
          }), "."]
        }), _jsx(_components.h2, {
          id: "understand-the-tech-3",
          children: "Understand the tech"
        }), _jsxs(_components.p, {
          children: ["In the pre-processing stage, AI Noise Suppression uses deep learning noise reduction algorithms to modify ", _jsx("audio", {
            src: ""
          }), " data in the extensions pipeline."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "AI noise suppression"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/extensions-marketplace/ai-noise-suppression.svg",
            alt: "image"
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-3",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "../../index.mdx",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "enable-ai-noise-suppression-3",
          children: "Enable AI Noise Suppression"
        }), _jsx(_components.p, {
          children: "This section shows you how to integrate AI Noise Suppression into your app."
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setAINSMode"
          }), " to enable the AI noise suppression feature, and select a noise suppression mode:"]
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
                  children: " enabled"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
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
                  children: "; "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Enable or disable AINS"
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
                  children: " rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAINSMode"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(enabled, AudioAinsMode.AinsModeUltralowlatency);"
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
                  children: "if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (result "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "==="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ") {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // AINS mode set successfully"
                })
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
                  children: "else"
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
                  children: "  // Failed to enable AINS"
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
        }), _jsx(_components.h2, {
          id: "reference-3",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section completes the information on this page, or points you to documentation that explains other aspects about this product."
        }), _jsx(_components.h3, {
          id: "api-reference-3",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setainsmode",
              children: _jsx(_components.code, {
                children: "setAINSMode"
              })
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
        }), _jsx("a", {
          name: "type"
        }), _jsx(_components.p, {
          children: "AI Noise Suppression reduces the following types of noise:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Television"
          }), `
`, _jsx(_components.li, {
            children: "Kitchen"
          }), `
`, _jsx(_components.li, {
            children: "Street, such as birds chirping, traffic, and subway sounds"
          }), `
`, _jsx(_components.li, {
            children: "Machine, such as fans, air conditioners, vacuum cleaners, and copiers"
          }), `
`, _jsx(_components.li, {
            children: "Office, such as keyboard and mouse clicks"
          }), `
`, _jsx(_components.li, {
            children: "Household, such as doors opening, creaking chairs, crying babies, and house renovations"
          }), `
`, _jsx(_components.li, {
            children: "Constant knocking"
          }), `
`, _jsx(_components.li, {
            children: "Beeps and clapping"
          }), `
`, _jsx(_components.li, {
            children: "Music"
          }), `
`]
        }), _jsx(_components.p, {
          children: "You can choose following noise reduction strategies:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Default: Reduces noise to a comfortable level without distorting human voice."
          }), `
`, _jsxs(_components.li, {
            children: ["Custom: A more enhanced or customized noise reduction strategy for your business use-case. Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), " for details."]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Want to try out AI Noise Suppression? Use the ", _jsx("a", {
            href: "https://webdemo-global.agora.io/example/extension/aiDenoiser/index.html",
            children: "online demo"
          }), "."]
        }), _jsx(_components.h2, {
          id: "understand-the-tech-4",
          children: "Understand the tech"
        }), _jsxs(_components.p, {
          children: ["In the pre-processing stage, AI Noise Suppression uses deep learning noise reduction algorithms to modify ", _jsx("audio", {
            src: ""
          }), " data in the extensions pipeline."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "AI noise suppression"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/extensions-marketplace/ai-noise-suppression.svg",
            alt: "image"
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-4",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "../../index.mdx",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "enable-ai-noise-suppression-4",
          children: "Enable AI Noise Suppression"
        }), _jsx(_components.p, {
          children: "This section shows you how to integrate AI Noise Suppression into your app."
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setAINSMode"
          }), " to enable the AI noise suppression feature, and select a noise suppression mode:"]
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " setAINSMode"
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
                  children: " () "
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
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // Enable or disable AINS"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " enabled"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
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
                  children: "    // Choose the AINS mode based on your requirements"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " mode"
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
                  children: " AgoraRtcEngine.AudioAinsMode."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "AINS_MODE_ULTRALOWLATENCY"
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
                  children: "    // Call setAINSMode method"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    const"
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
                  children: " rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAINSMode"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(enabled, mode);"
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
                  children: "error"
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
                  children: "'Error setting AINS mode:'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", error);"
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
                  children: "};"
                })
              })]
            })
          })
        }), _jsx(_components.h2, {
          id: "reference-4",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section completes the information on this page, or points you to documentation that explains other aspects about this product."
        }), _jsx(_components.h3, {
          id: "api-reference-4",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setainsmode",
              children: _jsx(_components.code, {
                children: "setAINSMode"
              })
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
