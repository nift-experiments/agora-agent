import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Integrate an extension",
  description: "Integrate extensions from Extensions Marketplace directly into your app."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;web&#x22;,&#x22;windows&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    Extensions are add-ons designed to rapidly extend the functionality of your app. [Extensions Marketplace](https://www.agora.io/en/agora-extensions-marketplace/) is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning.

    In the Agora Extensions Marketplace:

    * Vendors create and publish extensions to provide functionality such as audio and video processing.
    * App developers use extensions to quickly implement fun and interactive functionality.

    This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension.

    ## Understand the tech [#understand-the-tech]

    An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels.

    **Extension call workflow**

    ![img](https://assets-docs.agora.io/images/video-sdk/extension-callflow.svg)

    A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline.

    ## Prerequisites [#prerequisites]

    To test the code used in this page you need to have:

    * An Agora [account](/en/introduction/account) and [project](/en/introduction/account).

    * A computer with Internet access.
      Ensure that no firewall is blocking your network communication.

    * Implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk).

    ## Project setup [#project-setup]

    In order to integrate an extension into your project:

    1. **Activate an extension**

       1. Log in to [Agora Console](https://console.agora.io/v2).

       2. In the left navigation panel, click **Extension Marketplace**, then click the extension you want to activate.

          You are now on the extension detail page.

       3. Select a pricing plan and click **Buy and Activate**.
          * If you have already created an Agora project:

            The **Projects** section appears and lists all of your projects.
          * If you have not created an Agora project:

            [Create a new project](/en/introduction/account), the project appears in the **Projects** section.

       4. Under **Projects** on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the **Action** column.

    2. **Get the apiKey and apiSecret for the extension**

       If required for the extension, to get the extension apiKey and apiSecret, in the **Projects** extension detail page, click **View** in the **Secret** column.

    3. **Download the extension**

       In the extension detail page, click **Download**, then unzip the extension in a local directory.

    4. **Install the extension in your project**

       * Android Archive file (\`.aar\`)

         1. Save the extension \`.aar\` file to \`/app/libs\` in your project.

         2. In \`/Gradle Scripts/build.gradle(Module: <ProjectName> app)\`, add the following line under \`dependencies\`:

            \`\`\`java
            implementation fileTree(include: ['*.jar', '*.aar'], dir: 'libs')
            \`\`\`

       * Shared Library (\`.so\`)

         Save the \`.so\` file to the following paths in your project:

         1. \`/app/src/main/jniLibs/arm64-v8a\`

         2. \`/app/src/main/jniLibs/armeabi-v7a\`

    You are now ready to integrate the extension in your app.

    ## Integrate the extension into your project [#integrate-the-extension-into-your-project]

    The watermark extension adds a watermark on video streamed to your local client. This section shows you how to implement the watermark extension
    in your Agora project:

    1. **Import the necessary classes**

       1. Download the [watermark extension](https://web-cdn.agora.io/docs-files/1630400262363) and follow the steps for \`.aar\` files in [setup](#project-setup).

       2. In \`app/src/main/java/com.example.<projectname>/MainActivity\`:

          1. Add the following lines to import the Android classes used by the extension:

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
                 import org.json.JSONException;
                     import org.json.JSONObject;
                 \`\`\`
               </CodeBlockTab>

               <CodeBlockTab value="kotlin">
                 \`\`\`kotlin
                 import org.json.JSONException
                     import org.json.JSONObject
                 \`\`\`
               </CodeBlockTab>
             </CodeBlockTabs>
          2. Add the following lines to import the Agora classes used by the extension:

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
                 // ExtensionManager is used to pass in basic info about the extension
                     import io.agora.extension.ExtensionManager;
                     import io.agora.rtc2.IMediaExtensionObserver;
                 \`\`\`
               </CodeBlockTab>

               <CodeBlockTab value="kotlin">
                 \`\`\`kotlin
                 // ExtensionManager is used to pass in basic info about the extension
                     import io.agora.extension.ExtensionManager
                     import io.agora.rtc2.IMediaExtensionObserver
                 \`\`\`
               </CodeBlockTab>
             </CodeBlockTabs>
    2. **Add the extension and register the event handler**

       In \`setupVideoSDKEngine\`, add the following code before \`agoraEngine = RtcEngine.create(config);\`:

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
           config.addExtension(ExtensionManager.EXTENSION_NAME);
             // Register IMediaExtensionObserver to receive events from the extension.
             config.mExtensionObserver = new IMediaExtensionObserver() {
               @Override
               public void onEvent(String vendor, String extension, String key, String value) {
                 // Add callback handling logics for extension events.
                 showMessage("Extension: " + extension + "
            Key: " + key + "
           Value:" + value);
               }

               @Override
               public void onStarted(String provider, String extension) {
                 showMessage("Extension started");
               }

               @Override
               public void onStopped(String provider, String extension) {
                 showMessage("Extension stopped");
               }

               @Override
               public void onError(String provider, String extension, int error, String message) {
                 showMessage(message);
               }
             };
           \`\`\`
         </CodeBlockTab>

         <CodeBlockTab value="kotlin">
           \`\`\`kotlin
           config.addExtension(ExtensionManager.EXTENSION_NAME)

             // Register IMediaExtensionObserver to receive events from the extension.
             config.mExtensionObserver = object : IMediaExtensionObserver {
               override fun onEvent(vendor: String, extension: String, key: String, value: String) {
                 // Add callback handling logics for extension events.
                 showMessage("Extension: $extension
            Key: $key
           Value: $value")
               }

               override fun onStarted(provider: String, extension: String) {
                 showMessage("Extension started")
               }

               override fun onStopped(provider: String, extension: String) {
                 showMessage("Extension stopped")
               }

               override fun onError(provider: String, extension: String, error: Int, message: String) {
                 showMessage(message)
               }
             }
           \`\`\`
         </CodeBlockTab>
       </CodeBlockTabs>
    3. **Enable the extension**

       Call \`enableExtension\` to enable the extension. To enable multiple extensions, call \`enableExtension\` as many times. The sequence of enabling multiple extensions determines the order of these extensions in the transmission pipeline. For example, if you enable extension A before extension B, extension A processes data from the SDK before extension B.

       In \`setupVideoSDKEngine\`, add the following code before \`agoraEngine = RtcEngine.create(config);\`:

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
           agoraEngine.enableExtension(ExtensionManager.EXTENSION_VENDOR_NAME, ExtensionManager.EXTENSION_VIDEO_FILTER_NAME, true);
           \`\`\`
         </CodeBlockTab>

         <CodeBlockTab value="kotlin">
           \`\`\`kotlin
           agoraEngine.enableExtension(
               ExtensionManager.EXTENSION_VENDOR_NAME,
               ExtensionManager.EXTENSION_VIDEO_FILTER_NAME,
               true
             )
           \`\`\`
         </CodeBlockTab>
       </CodeBlockTabs>
    4. **Set extension properties**

       In the \`joinChannel(View view)\` method, add the following code after \`agoraEngine.joinChannel\`:

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
           JSONObject o = new JSONObject();
             try {
               // Pass in the key-value pairs defined by the extension provider to configure the feature you want to use.
               o.put("plugin.watermark.wmStr", "Agora");
               o.put("plugin.watermark.wmEffectEnabled", true);

               // Call setExtensionProperty to use the watermark feature.
               agoraEngine.setExtensionProperty(ExtensionManager.EXTENSION_VENDOR_NAME,
                   ExtensionManager.EXTENSION_VIDEO_FILTER_NAME, "key", o.toString());
             } catch (JSONException e) {
               e.printStackTrace();
             }
           \`\`\`
         </CodeBlockTab>

         <CodeBlockTab value="kotlin">
           \`\`\`kotlin
           val o = JSONObject()
             try {
               // Pass in the key-value pairs defined by the extension provider to configure the feature you want to use.
               o.put("plugin.watermark.wmStr", "Agora")
               o.put("plugin.watermark.wmEffectEnabled", true)

               // Call setExtensionProperty to use the watermark feature.
               agoraEngine.setExtensionProperty(
                 ExtensionManager.EXTENSION_VENDOR_NAME,
                 ExtensionManager.EXTENSION_VIDEO_FILTER_NAME,
                 "key",
                 o.toString()
               )
             } catch (e: JSONException) {
               e.printStackTrace()
             }
           \`\`\`
         </CodeBlockTab>
       </CodeBlockTabs>

    ## Test your implementation [#test-your-implementation]

    To ensure that you have integrated the extension in your app:

    1. Connect the Android device to the computer.

    2. Click \`Run app\` on your Android Studio. A moment later you will see the project installed on your device.

    3. When the app launches, you can see yourself and the watermark \`Agora\` on the local view.

    ## Reference [#reference]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference]

    * [\`RtcEngineConfig.addExtension\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_addextension)

    * [\`enableExtension\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_enableextension)

    * [\`getExtensionProperty\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_getextensionproperty)

    * [\`setExtensionProperty\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setextensionproperty)

    * [\`IMediaExtensionObserver\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_imediaextensionobserver.html)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    Extensions are add-ons designed to rapidly extend the functionality of your app. [Extensions Marketplace](https://www.agora.io/en/agora-extensions-marketplace/) is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning.

    In the Agora Extensions Marketplace:

    * Vendors create and publish extensions to provide functionality such as audio and video processing.
    * App developers use extensions to quickly implement fun and interactive functionality.

    This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension.

    ## Understand the tech [#understand-the-tech-1]

    An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels.

    **Extension call workflow**

    ![img](https://assets-docs.agora.io/images/video-sdk/extension-callflow.svg)

    A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline.

    ## Prerequisites [#prerequisites-1]

    To test the code used in this page you need to have:

    * An Agora [account](/en/introduction/account) and [project](/en/introduction/account).

    * A computer with Internet access.
      Ensure that no firewall is blocking your network communication.

    * Implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk).

    ## Project setup [#project-setup-1]

    In order to integrate an extension into your project:

    1. **Activate an extension**

       1. Log in to [Agora Console](https://console.agora.io/v2).

       2. In the left navigation panel, click **Extension Marketplace**, then click the extension you want to activate.

          You are now on the extension detail page.

       3. Select a pricing plan and click **Buy and Activate**.
          * If you have already created an Agora project:

            The **Projects** section appears and lists all of your projects.
          * If you have not created an Agora project:

            [Create a new project](/en/introduction/account), the project appears in the **Projects** section.

       4. Under **Projects** on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the **Action** column.

    2. **Get the apiKey and apiSecret for the extension**

       If required for the extension, to get the extension apiKey and apiSecret, in the **Projects** extension detail page, click **View** in the **Secret** column.

    3. **Download the extension**

       In the extension detail page, click **Download**, then unzip the extension in a local directory.

    4. **Install the extension in your project**

       1. Save the extension \`.framework\` or \`.xcframwork\` files to your project folder.

       2. In Xcode, open your project and select your target. Go to **General** > **Frameworks, Libraries, and Embedded Content**.

       3. Click &#x2A;*+** > &#x2A;*Add Other…** > **Add Files** and select the \`.framework\` or \`.xcframwork\` files you saved earlier.

    You are now ready to integrate the extension in your app.

    ## Integrate the extension into your project [#integrate-the-extension-into-your-project-1]

    To use an extension in your Agora project:

    * The implementation procedure varies according to extensions. Each extension vendor provides their own implementation guides, which is validated by Agora before the official release of the extension.

    * To implement the extension in your project, go to the detail page of the extension on [Agora Console](https://console.agora.io/v2), click **Implementation guides**, and follow the steps on the page.

    ## Test your implementation [#test-your-implementation-1]

    To ensure that you have integrated the extension in your app:

    1. Connect a device to the computer.

    2. In Xcode, Click \`Run\`. A moment later you will see the project installed on your device.

    3. Connect to a channel and test your effect.

    Agora provides an open-source sample project [SimpleFilter](https://github.com/AgoraIO/API-Examples/tree/main/iOS/APIExample/SimpleFilter) on GitHub for your reference.

    ## Reference [#reference-1]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    Extensions are add-ons designed to rapidly extend the functionality of your app. [Extensions Marketplace](https://www.agora.io/en/agora-extensions-marketplace/) is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning.

    In the Agora Extensions Marketplace:

    * Vendors create and publish extensions to provide functionality such as audio and video processing.
    * App developers use extensions to quickly implement fun and interactive functionality.

    This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension.

    ## Understand the tech [#understand-the-tech-2]

    An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels.

    **Extension call workflow**

    ![img](https://assets-docs.agora.io/images/video-sdk/extension-callflow.svg)

    A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline.

    ## Prerequisites [#prerequisites-2]

    To test the code used in this page you need to have:

    * An Agora [account](/en/introduction/account) and [project](/en/introduction/account).

    * A computer with Internet access.
      Ensure that no firewall is blocking your network communication.

    * Implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk).

    ## Project setup [#project-setup-2]

    In order to integrate an extension into your project:

    1. **Activate an extension**

       1. Log in to [Agora Console](https://console.agora.io/v2).

       2. In the left navigation panel, click **Extension Marketplace**, then click the extension you want to activate.

          You are now on the extension detail page.

       3. Select a pricing plan and click **Buy and Activate**.
          * If you have already created an Agora project:

            The **Projects** section appears and lists all of your projects.
          * If you have not created an Agora project:

            [Create a new project](/en/introduction/account), the project appears in the **Projects** section.

       4. Under **Projects** on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the **Action** column.

    2. **Get the apiKey and apiSecret for the extension**

       If required for the extension, to get the extension apiKey and apiSecret, in the **Projects** extension detail page, click **View** in the **Secret** column.

    3. **Download the extension**

       In the extension detail page, click **Download**, then unzip the extension in a local directory.

    4. **Install the extension in your project**

       1. Save the extension \`.framework\` or \`.xcframwork\` files to your project folder.

       2. In Xcode, open your project and select your target. Go to **General** > **Frameworks, Libraries, and Embedded Content**.

       3. Click &#x2A;*+** > &#x2A;*Add Other…** > **Add Files** and select the \`.framework\` or \`.xcframwork\` files you saved earlier.

    You are now ready to integrate the extension in your app.

    ## Integrate the extension into your project [#integrate-the-extension-into-your-project-2]

    To use an extension in your Agora project:

    * The implementation procedure varies according to extensions. Each extension vendor provides their own implementation guides, which is validated by Agora before the official release of the extension.

    * To implement the extension in your project, go to the detail page of the extension on [Agora Console](https://console.agora.io/v2), click **Implementation guides**, and follow the steps on the page.

    ## Test your implementation [#test-your-implementation-2]

    To ensure that you have integrated the extension in your app:

    1. In Xcode, Click \`Run\`. A moment later you will see the project installed on your device.

    2. Connect to a channel and test your effect.

    ## Reference [#reference-2]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    Extensions are add-ons designed to rapidly extend the functionality of your app. [Extensions Marketplace](https://www.agora.io/en/agora-extensions-marketplace/) is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning.

    In the Agora Extensions Marketplace:

    * Vendors create and publish extensions to provide functionality such as audio and video processing.
    * App developers use extensions to quickly implement fun and interactive functionality.

    This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension.

    ## Understand the tech [#understand-the-tech-3]

    An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels.

    **Extension call workflow**

    ![img](https://assets-docs.agora.io/images/video-sdk/extension-callflow.svg)

    A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline.

    ## Prerequisites [#prerequisites-3]

    To test the code used in this page you need to have:

    * An Agora [account](/en/introduction/account) and [project](/en/introduction/account).

    * A computer with Internet access.
      Ensure that no firewall is blocking your network communication.

    * Implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk).

    - A [supported browser](../../reference/supported-platforms.md).

    - Physical media input devices, such as a camera and a microphone.

    - A JavaScript package manager such as [npm](https://www.npmjs.com/package/npm).

    ## Project setup [#project-setup-3]

    In order to integrate an extension into your project:

    1. **Activate an extension**

       1. Log in to [Agora Console](https://console.agora.io/v2).

       2. In the left navigation panel, click **Extension Marketplace**, then click the extension you want to activate.

          You are now on the extension detail page.

       3. Select a pricing plan and click **Buy and Activate**.
          * If you have already created an Agora project:

            The **Projects** section appears and lists all of your projects.
          * If you have not created an Agora project:

            [Create a new project](/en/introduction/account), the project appears in the **Projects** section.

       4. Under **Projects** on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the **Action** column.

    2. **Get the apiKey and apiSecret for the extension**

       If required for the extension, to get the extension apiKey and apiSecret, in the **Projects** extension detail page, click **View** in the **Secret** column.

    3. **Download the extension**

       In the extension detail page, click **Download**, you are taken to the npm page for the extension.

    4. **Install the extension in your project**

       1. In the extension npm page, copy the **Install** command.

       2. In the root of your project, install the extension package. For example, for AI Noise Suppression:

          \`\`\`bash
          npm i agora-extension-ai-denoiser
          \`\`\`

    You are now ready to integrate the extension in your app.

    ## Integrate the extension into your project [#integrate-the-extension-into-your-project-3]

    To use an extension in your Agora project:

    * The implementation procedure varies according to extensions. Each extension vendor provides their own implementation guides, which is validated by Agora before the official release of the extension.

    * To implement the extension in your project, go to the detail page of the extension on [Extensions Marketplace](https://console.agora.io/v2/extensions-marketplace), click **Implementation guides**, and follow the steps on the page.

    To learn how to use a Web extension, see [AI Noise Suppression](/en/realtime-media/rtc/build/enhance-the-audio-experience/ai-noise-suppression).

    ## Test your implementation [#test-your-implementation-3]

    To ensure that you have integrated the extension in your app:

    1. [Generate a temporary token](/en/introduction/account) in Agora Console.

    2. In your browser, navigate to the [Agora web demo](https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html) and update *App ID*, *Channel*, and *Token* with the values for your temporary token, then click **Join**.

    3. In **main.js**, update \`appID\`, \`channel\` and \`token\` with your values.

    4. Start the dev server

       Execute the following command in the terminal:

       \`\`\`bash
       npm run dev
       \`\`\`

       Use the URL displayed in the terminal to open the app in your browser.

    5. Try out the extension that you have integrated.

    ## Reference [#reference-3]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-1]

    * <Link to="https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#registerextensions">
        \`AgoraRTC.registerExtensions\`
      </Link>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    Extensions are add-ons designed to rapidly extend the functionality of your app. [Extensions Marketplace](https://www.agora.io/en/agora-extensions-marketplace/) is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning.

    In the Agora Extensions Marketplace:

    * Vendors create and publish extensions to provide functionality such as audio and video processing.
    * App developers use extensions to quickly implement fun and interactive functionality.

    This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension.

    ## Understand the tech [#understand-the-tech-4]

    An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels.

    **Extension call workflow**

    ![img](https://assets-docs.agora.io/images/video-sdk/extension-callflow.svg)

    A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline.

    ## Prerequisites [#prerequisites-4]

    To test the code used in this page you need to have:

    * An Agora [account](/en/introduction/account) and [project](/en/introduction/account).

    * A computer with Internet access.
      Ensure that no firewall is blocking your network communication.

    * Same setup as the [RTC SDK quickstart prerequisites](/en/realtime-media/rtc/get-started-sdk) for Video Calling.

    ## Project setup [#project-setup-4]

    In order to integrate an extension into your project:

    1. **Activate an extension**

       1. Log in to [Agora Console](https://console.agora.io/v2).

       2. In the left navigation panel, click **Extension Marketplace**, then click the extension you want to activate.

          You are now on the extension detail page.

       3. Select a pricing plan and click **Buy and Activate**.
          * If you have already created an Agora project:

            The **Projects** section appears and lists all of your projects.
          * If you have not created an Agora project:

            [Create a new project](/en/introduction/account), the project appears in the **Projects** section.

       4. Under **Projects** on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the **Action** column.

    2. **Get the apiKey and apiSecret for the extension**

       If required for the extension, to get the extension apiKey and apiSecret, in the **Projects** extension detail page, click **View** in the **Secret** column.

    3. **Download the extension**

       In the extension detail page, click **Download**, then unzip the extension in a local directory.

    4. **Install the extension in your project**

       Add the extension \`.dll\` to your project.

    You are now ready to integrate the extension in your app.

    ## Integrate the extension into your project [#integrate-the-extension-into-your-project-4]

    Integrating an extension into your project involves a few important steps to ensure seamless interaction between the extension and Agora RTC SDK. Each of these steps plays a crucial role to ensure that the extension works correctly and efficiently within your Agora project:

    1. **Define variables to integrate an extension with Agora RTC SDK**

       In \`AgoraImplementationDlg.h\`, add the following declarations to the \`CAgoraImplementationDlg\` class before \`setupVideoSDKEngine();\`:

       \`\`\`cpp
       // File path to the dynamic library (.dll file on Windows) that contains the implementation of the extension provider.
       const char* extensionLibrarayPath = "<extension dynamic library path and name>"; // For example : "/ library / libagora_segmentation_extension.dll"
       const char * extensionProvider = "<extension library path and name>"; // For example : "agora.io";
       const char* extensionName = "<extension name>"; // For example : "libagora_segmentation_extension.dll";

       // The key is a string that identifies a specific property of the extension,
       // and value is the new value for that property.
       // What these keys are and what values they can take is entirely up to the extension.
       // For example, an extension might have a property that controls the quality of a video stream, with a key named "videoQuality".
       // To set this property to "high", you would call setExtensionProperty() with "videoQuality" as the key and "high" as the value.
       const char* extensionKey = "<name of the extension property you want to set>";
       const char* extensionValue = "<new value of the property>";

       // When using methods that take a MEDIA_SOURCE_TYPE parameter, you would specify the value that corresponds to the type of media source
       // you want the method to operate on. For example, if you want to use the second camera to capture video, set this parameter to "SECONDARY_CAMERA_SOURCE".
       // The default value is UNKNOWN_MEDIA_SOURCE.
       agora::media::MEDIA_SOURCE_TYPE extensionMediaType = agora::media::UNKNOWN_MEDIA_SOURCE; // insert the media souce type as per your context
       \`\`\`

    2. **Register extension callbacks to the \`IRtcEngineEventHandler\` event handler**

       1. In \`AgoraImplementationDlg.h\`, add the following declarations to the \`AgoraEventHandler\` class after \`onLeaveChannel\`:

          \`\`\`cpp
          virtual void onExtensionEvent(const char* provider, const char* extension, const char* key, const char* value)override;
          virtual void onExtensionStopped(const char* provider, const char* extension)override;
          virtual void onExtensionStarted(const char* provider, const char* extension)override;
          virtual void onExtensionError(const char* provider, const char* extension, int error, const char* errorMessage)override;
          \`\`\`
       2. Define these callbacks in \`AgoraImplementationDlg.cpp\`:

          \`\`\`cpp
          // Extension Callbacks
          void AgoraEventHandler::onExtensionEvent(const char* provider, const char* extension, const char* key, const char* value)
          {
            // Handle the event
            CString extension_provider(provider);
            CString extension_name(extension);
            CString extension_key(key);
            CString extension_value(value);

            CString message;
            message.Format(_T("Extension Provider: %s\\nExtension Name: %s\\nKey: %s\\nValue: %s\\n is enabled to run."), extension_provider, extension_name);
            AfxMessageBox(message);
          }

          void AgoraEventHandler::onExtensionStopped(const char* provider, const char* extension)
          {
            AfxMessageBox(L"Extension stopped.");
          }

          void AgoraEventHandler::onExtensionStarted(const char* provider, const char* extension)
          {
            AfxMessageBox(Extension started);
          }

          void AgoraEventHandler::onExtensionError(const char* provider, const char* extension, int error, const char* errorMessage)
          {
            // Handle the error event
            CString error_message(errorMessage);
            CString message;
            message.Format(_T("Error: %s\\n with error code %d"), error_message, error);
            AfxMessageBox(message);
          }
          \`\`\`

    3. **Enable the extension and set the extension properties**

       To use the extension you downloaded in your app:

       1. Load the extension.
       2. Register the extension.
       3. Enable the extension.
       4. Set the extension property.

       To accomplish these tasks, do the following:

       1. In \`AgoraImplementationDlg.h\`, declare \`setupMarketExtension()\` before \`setupVideoSDKEngine();\`:

          \`\`\`cpp
          // Function to load, register and enable the extension. Here you also set the extension propertties for your specific extension
          void setupMarketExtension(IRtcEngine* agoraEngine);
          \`\`\`
       2. In \`AgoraImplementationDlg.cpp\`, put the following in the \`setupVideoSDKEngine\` function just after
          initializing Agora Engine \`agoraEngine->initialize(context);\`:

          \`\`\`cpp
          // Integrate extension to the Agora SDK.
          setupMarketExtension(agoraEngine);
          \`\`\`
       3. Define \`setupMarketExtension()\`:

          \`\`\`cpp
          void CAgoraImplementationDlg::setupMarketExtension(IRtcEngine* agoraEngine)
          {
            // Load the extension with the file path to the dynamic library (.dll file on Windows) and a boolean flag 'unload_after_use' is true here mean
            // unload the dynamic library after it has been used.
            agoraEngine->loadExtensionProvider(extensionLibrarayPath,true);

            // Register the extension
            agoraEngine->registerExtension(extensionProvider, extensionName, extensionMediaType);

            // Enable the extension
            agoraEngine->enableExtension(extensionProvider, extensionName, true, extensionMediaType);

            // Set Extension property. The extension key and extension value would be specific to the extension you are using.
            // This function is used to set the value of a specific property of an extension
            agoraEngine->setExtensionProperty(extensionProvider, extensionName, extensionKey, extensionValue, extensionMediaType);
          }
          \`\`\`

    4. **Disable the extension before closing the application**

       You must unload and disable all extensions before the app closes. As you set \`unload_after_use\` to
       \`true\` in \`loadExtensionProvider()\`, the extension dynamic link library unloads automatically after it has
       been used. You disable the extension to prevent any potential memory leaks or unanticipated
       effects. To do this, put the following in \`OnClose()\` before \`agoraEngine->release();\`:

       \`\`\`cpp
       // Disable extension by making 'eanbled' flag as false .
       agoraEngine->enableExtension(extensionProvider, extensionName, false);
       \`\`\`

    ## Test your implementation [#test-your-implementation-4]

    To ensure that you have integrated the extension in your app:

    1. [Generate a temporary token](/en/introduction/account) in Agora Console .

    2. In your browser, navigate to the [Agora web demo](https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html) and update *App ID*, *Channel*, and *Token* with the values for your temporary token, then click **Join**.

    3. In \`CAgoraImplementationDlg.h\`, update \`appId\`, \`channelName\` and \`token\` with the values for your temporary token.

    4. Set the values for variables and properties in the framework code for your extension in use.

    5. In Visual Studio, click **Local Windows Debugger**. A moment later you see the project running on your development device.

       If this is the first time you run the project, you need to grant microphone and camera access to your app.

    6. Experience the features of your new extension.

    ## Reference [#reference-4]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-2]

    * [\`loadExtensionProvider\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_loadextensionprovider)

    * [\`registerExtension\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_registerextension)

    * [\`enableExtension\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_enableextension)

    * [\`setExtensionProperty\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setextensionproperty)

    * [\`MEDIA_SOURCE_TYPE\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/enum_mediasourcetype.html)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    Extensions are add-ons designed to rapidly extend the functionality of your app. [Extensions Marketplace](https://www.agora.io/en/agora-extensions-marketplace/) is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning.

    In the Agora Extensions Marketplace:

    * Vendors create and publish extensions to provide functionality such as audio and video processing.
    * App developers use extensions to quickly implement fun and interactive functionality.

    This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension.

    ## Understand the tech [#understand-the-tech-5]

    An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels.

    **Extension call workflow**

    ![img](https://assets-docs.agora.io/images/video-sdk/extension-callflow.svg)

    A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline.

    ## Prerequisites [#prerequisites-5]

    To test the code used in this page you need to have:

    * An Agora [account](/en/introduction/account) and [project](/en/introduction/account).
    * A computer with Internet access.
      Ensure that no firewall is blocking your network communication.

    - Physical media input devices, such as a camera and a microphone.
    - A JavaScript package manager such as [npm](https://www.npmjs.com/package/npm).

    ## Project setup [#project-setup-5]

    In order to integrate an extension into your project:

    1. **Activate an extension**

       1. Log in to [Agora Console](https://console.agora.io/v2).

       2. In the left navigation panel, click **Extension Marketplace**, then click the extension you want to activate.

          You are now on the extension detail page.

       3. Select a pricing plan and click **Buy and Activate**.
          * If you have already created an Agora project:

            The **Projects** section appears and lists all of your projects.
          * If you have not created an Agora project:

            [Create a new project](/en/introduction/account), the project appears in the **Projects** section.

       4. Under **Projects** on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the **Action** column.

    2. **Get the apiKey and apiSecret for the extension**

       If required for the extension, to get the extension apiKey and apiSecret, in the **Projects** extension detail page, click **View** in the **Secret** column.

    You are now ready to integrate the extension in your app.

    ## Integrate the extension into your project [#integrate-the-extension-into-your-project-5]

    This section shows you how to implement the video filter extension in your app:

    1. **Add the required variables**

       To integrate the extension, in \`preload.js\`, add the following variables to declarations:

       \`\`\`javascript
       var path = "agora_segmentation_extension";
       var provider = "agora_video_filters_segmentation";
       var extension = "portrait_segmentation";
       var enableExtension = false;
       \`\`\`

    2. **Implement the logic to load and enable the extension**

       To load the extension in your app, call \`loadExtensionProvider\` and pass the extension path. To enable the extension, call \`enableExtension\` and pass the provider name and extension name. To implement this workflow, in \`preload.js\`, add the following method before \`window.onload = () =>\`:

       \`\`\`javascript
       function enableExtension()
       {
         if (!path) {
           console.log('path is invalid');
           return;
         }
         if (!provider) {
           console.log('provider is invalid');
           return;
         }
         if (!extension) {
           console.log('extension is invalid');
           return;
         }
         agoraEngine.loadExtensionProvider(path);
         agoraEngine.enableExtension(provider, extension, enableExtension);
       };
       \`\`\`

    3. **Implement the logic to disable the extension**

       To disable the extension, call \`enableExtension\` and pass the \`provider\`, \`extension\`, and \`enableExtension\` variables as parameters. The \`enableExtension\` variable is set to \`false\` to disable the extension. To implement this logic, in \`preload.js\`, add the following method before \`window.onload = () =>\`:

       \`\`\`javascript
       function disableExtension()
       {
         agoraEngine.enableExtension(provider, extension, enableExtension);
       };
       \`\`\`

    4. **Setup an event listener to enable and disable the extension with a button**

       When the user presses **Enable Extension**, your app loads and starts the extension with a call to the \`enableExtension\` method. When the user presses the button again, your app disables the extension with a call to the \`disableExtension\` method. To implement this workflow, in \`preload.js\`, add the following method before \`document.getElementById("leave").onclick = async function ()\`:

       \`\`\`javascript
       document.getElementById("extension").onclick = async function ()
       {
         enableExtension = !enableExtension;
         if(isExtension)
         {
           enableExtension();
           document.getElementById("extension").innerHTML = "Disable Extension";
         }
         {
           disableExtension();
           document.getElementById("extension").innerHTML = "Enable Extension";
         }
       }
       \`\`\`

    5. **Implement the required callbacks to manage the extension**

       RTC SDK provides the following callbacks to manage an extension:

       * \`onExtensionStarted\`: Occurs when the extension is enabled.
       * \`onExtensionError\`: Occurs when the extension runs incorrectly.
       * \`onExtensionStopped\`: Occurs when the extension is disabled.
       * \`onExtensionEvent\`: The event callback of the extension.

       To implement these callbacks, in \`preload.js\`, add the following callbacks before \`onUserJoined\`:

       \`\`\`javascript
       onExtensionError:( provider, extName, error, msg) =>
       {
         console.log("Error :" + error, "Error detail :" + msg);
       },
       onExtensionEvent:( provider, extName, key, value) =>
       {
       },
       onExtensionStarted:(provider, extName) =>
       {
       },
       onExtensionStopped:(provider, extName) =>
       {
       }
       \`\`\`

    ## Test your implementation [#test-your-implementation-5]

    To ensure that you have integrated the extension in your app:

    1. In **preload.js**, update \`appID\`, \`channel\` and \`token\` with your values.

    2. Run the app

       Execute the following command in the terminal:

       \`\`\`bash
       npm start
       \`\`\`

       You see your app opens a window named **Get started with Video Calling**.

    3. Press Join to connect to the same channel as your web demo.

    4. Press **Enable Extension**. Your app start using the Agora video filter extension.

    ## Reference [#reference-5]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-3]

    * [\`loadExtensionProvider\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_loadextensionprovider)

    * [\`setExtensionProperty\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setextensionproperty)

    * [\`enableExtension\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_enableextension)

    * [\`onExtensionStarted\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onextensionstarted)

    * [\`onExtensionStopped\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onextensionstopped)

    * [\`onExtensionError\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onextensionerror)

    * [\`onExtensionEvent\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onextensionevent)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    Extensions are add-ons designed to rapidly extend the functionality of your app. [Extensions Marketplace](https://www.agora.io/en/agora-extensions-marketplace/) is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning.

    In the Agora Extensions Marketplace:

    * Vendors create and publish extensions to provide functionality such as audio and video processing.
    * App developers use extensions to quickly implement fun and interactive functionality.

    This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension.

    ## Understand the tech [#understand-the-tech-6]

    An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels.

    **Extension call workflow**

    ![img](https://assets-docs.agora.io/images/video-sdk/extension-callflow.svg)

    A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline.

    ## Prerequisites [#prerequisites-6]

    To test the code used in this page you need to have:

    * An Agora [account](/en/introduction/account) and [project](/en/introduction/account).

    * A computer with Internet access.
      Ensure that no firewall is blocking your network communication.

    * Implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk).

    - [Flutter](https://docs.flutter.dev/get-started/install) 2.0.0 or higher

    - Dart 2.15.1 or higher

    - [Android Studio](https://developer.android.com/studio), IntelliJ, VS Code, or any other IDE that supports Flutter, see [Set up an editor](https://docs.flutter.dev/get-started/editor).

    - If your target platform is iOS:
      * Xcode on macOS (latest version recommended)
      * A physical iOS device
      * iOS version 12.0 or later

    - If your target platform is Android:
      * Android Studio on macOS or Windows (latest version recommended)
      * An Android emulator or a physical Android device.

    - If you are developing a desktop application for Windows, macOS or Linux, make sure your development device meets the [Flutter desktop development requirements](https://docs.flutter.dev/development/platform-integration/desktop).

    ## Project setup [#project-setup-6]

    In order to integrate an extension into your project:

    1. **Activate an extension**

       1. Log in to [Agora Console](https://console.agora.io/v2).

       2. In the left navigation panel, click **Extension Marketplace**, then click the extension you want to activate.

          You are now on the extension detail page.

       3. Select a pricing plan and click **Buy and Activate**.
          * If you have already created an Agora project:

            The **Projects** section appears and lists all of your projects.
          * If you have not created an Agora project:

            [Create a new project](/en/introduction/account), the project appears in the **Projects** section.

       4. Under **Projects** on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the **Action** column.

    2. **Get the apiKey and apiSecret for the extension**

       If required for the extension, to get the extension apiKey and apiSecret, in the **Projects** extension detail page, click **View** in the **Secret** column.

    3. Open your Flutter project

       Load the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) Video Calling project you created previously.

    4. Get the extension

       Visit the [Agora Extensions Marketplace](https://www.agora.io/en/agora-extensions-marketplace/) and follow the procedure to download and install the desired extension.

    You are now ready to integrate the extension in your app.

    ## Integrate the extension into your project [#integrate-the-extension-into-your-project-6]

    This section presents the framework code you add to your Flutter project to integrate an extension.

    1. **Load the extension provider**

       You call \`loadExtensionProvider\` during Agora Engine initialization to specify the extension library path. To do this, add the following code to the \`setupVideoSDKEngine\` method after you initialize the engine with \`agoraEngine.initialize\`:

       \`\`\`dart
       agoraEngine.loadExtensionProvider("<extensionLibraryPath>");
       \`\`\`

    2. **Enable the extension**

       To enable the extension, add the following code to the \`setupVideoSDKEngine\` method before \`await agoraEngine.enableVideo();\`:

       \`\`\`dart
       // Extensions marketplace hosts both third-party extensions as well as those developed by Agora. To use an Agora extensions, you do not need to call addExtension or enableExtension.
       agoraEngine.enableExtension(
         provider: "<The name of the extension provider>",
         extension: "<extensionName>",
         type: MediaSourceType.unknownMediaSource,
         enable: true
       );
       \`\`\`

       If the extension uses the second camera to capture video, set the type parameter to \`secondaryCameraSource\`.

       To enable multiple extensions, call \`enableExtension\` for each extension. The calls to \`enableExtension\` determines the order of each extension in the transmission pipeline. For example, if you enable extension A before extension B, extension A processes data from RTC SDK before extension B.

    3. **Set extension properties**

       To customize the extension for your particular app, set suitable values for the extension properties. Refer to the extension documentation for a list of available property names and allowable values. To set a property, add the following code to the \`setupVideoSDKEngine\` method after \`agoraEngine.enableExtension\`:

       \`\`\`dart
       agoraEngine.setExtensionProperty(
         provider: "<providerName>",
         extension: "<extensionName>",
         key: "<keyName>",
         value: "<keyValue>");
       \`\`\`

    ## Test your implementation [#test-your-implementation-6]

    To ensure that you have integrated the extension in your app:

    1. Set the variables and properties in the framework code to values suitable for your chosen extension.

    2. In your IDE, open \`/lib/main.dart\` and update \`appId\`, \`channelName\` and \`token\` with the values from Agora Console.

    3. Connect a test device to your development device.

    4. In your IDE, click **Run app** or execute the \`flutter run\` command in the terminal. A moment later, you see the project installed on your device.

       If this is the first time you run the app, grant camera and microphone permissions.

    5. Join the same channel from another test device or the [Agora web demo](https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html).

    6. Experience the features of your new extension.

    ## Reference [#reference-6]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-4]

    * [\`enableExtension\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_enableextension)

    * [\`loadExtensionProvider\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_loadextensionprovider)

    * [\`setExtensionProperty\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setextensionproperty)

    * [\`onExtensionStarted\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onextensionstarted)

    * [\`onExtensionStopped\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onextensionstopped)

    * [\`onExtensionError\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onextensionerror)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    Extensions are add-ons designed to rapidly extend the functionality of your app. [Extensions Marketplace](https://www.agora.io/en/agora-extensions-marketplace/) is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning.

    In the Agora Extensions Marketplace:

    * Vendors create and publish extensions to provide functionality such as audio and video processing.
    * App developers use extensions to quickly implement fun and interactive functionality.

    This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension.

    ## Understand the tech [#understand-the-tech-7]

    An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels.

    **Extension call workflow**

    ![img](https://assets-docs.agora.io/images/video-sdk/extension-callflow.svg)

    A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline.

    ## Prerequisites [#prerequisites-7]

    To test the code used in this page you need to have:

    * An Agora [account](/en/introduction/account) and [project](/en/introduction/account).

    * A computer with Internet access.
      Ensure that no firewall is blocking your network communication.

    * Implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk).

    - React Native 0.60 or later. For more information, see [Setting up the development environment](https://reactnative.dev/docs/environment-setup).
    - Node 10 or later
    - For iOS
      * A machine running macOS
      * Xcode 10 or later
      * CocoaPods
      * A physical or virtual mobile device running iOS 9.0 or later. If you use React Native 0.63 or later, ensure your iOS version is 10.0 or later.
    - For Android
      * A machine running macOS, Windows, or Linux
      * [Java Development Kit (JDK) 11](https://openjdk.org/projects/jdk/11/) or later
      * Android Studio
      * A physical or virtual mobile device running Android 5.0 or later

    ## Project setup [#project-setup-7]

    In order to integrate an extension into your project:

    1. **Activate an extension**

       1. Log in to [Agora Console](https://console.agora.io/v2).

       2. In the left navigation panel, click **Extension Marketplace**, then click the extension you want to activate.

          You are now on the extension detail page.

       3. Select a pricing plan and click **Buy and Activate**.
          * If you have already created an Agora project:

            The **Projects** section appears and lists all of your projects.
          * If you have not created an Agora project:

            [Create a new project](/en/introduction/account), the project appears in the **Projects** section.

       4. Under **Projects** on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the **Action** column.

    2. **Get the apiKey and apiSecret for the extension**

       If required for the extension, to get the extension apiKey and apiSecret, in the **Projects** extension detail page, click **View** in the **Secret** column.

    3. Open your React-native project

       Load the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) Video Calling project you created previously.

    4. Get the extension

       Visit the [Agora Extensions Marketplace](https://www.agora.io/en/agora-extensions-marketplace/) and follow the procedure to download and install the desired extension.

    You are now ready to integrate the extension in your app.

    ## Integrate the extension into your project [#integrate-the-extension-into-your-project-7]

    This section presents the framework code you add to your React Native project to integrate an extension.

    ### Implement the user interface [#implement-the-user-interface]

    You can use a \`switch\` to enable and disable the extension you wish to integrate. To do this, follow these steps:

    1. **Import the necessary modules**

       Add the following import from \`react-native\` before \`Text,\`:

       \`\`\`ts
       Switch,
       \`\`\`

    2. **Render the switch**

       Add the following code in the return statement, after \`Leave </Text>\`:

       \`\`\`ts
       <Switch
         onValueChange={() => {
           if (enable_extension) {
             disableExtension();
             setEnableExtension(false);
           } else {
             enableExtension();
             setEnableExtension(true);
           }
         }}
       />
       \`\`\`

    ### Integrate the extension [#integrate-the-extension]

    1. **Declarations for the extension**

       You can create constants for the extension provider and extension name that you need to integrate.

       \`\`\`ts
       const extprovider = 'agora_segmentation';
       const extension = 'PortraitSegmentation';
       \`\`\`

       You also need a state variable to keep track of the status of your extension. Inside \`App\`, add the following code along with the other declarations:

       \`\`\`ts
       const [enable_extension, setEnableExtension] = useState(false);
       \`\`\`

    2. **Enable the extension**

       You call \`enableExtension\` to enable your extension. To do this using the \`switch\`, add the following code after the \`leave\` function:

       \`\`\`ts
       const enableExtension = () => {
         if (Platform.OS === 'android') {
           agoraEngineRef.current?.loadExtensionProvider(\`\${extprovider}_extension\`);
         }
         agoraEngineRef.current?.enableExtension(extprovider, extension, true);
         setEnableExtension(true);
       };
       \`\`\`

    3. **Disable the extension**

       You call \`disableExtension\` to disable your extension. To do this using the \`switch\`, add the following code after the \`enableExtension\` function:

       \`\`\`ts
       const disableExtension = () => {
         agoraEngineRef.current?.enableExtension(extprovider, extension, false);
         setEnableExtension(false);
       };
       \`\`\`

    4. **Add the necessary callbacks**

       To get notified of important events, add the following callbacks to \`agoraEngine.registerEventHandler({\`:

       \`\`\`ts
       onExtensionErrored: (
         provider: string,
         extName: string,
         error: number,
         msg: string,
       ) => {
         console.log(
         'onExtensionErrored',
         'provider',
         provider,
         'extName',
         extName,
         'error',
         error,
         'msg',
         msg,
         );
       },
       onExtensionEvent: (
         provider: string,
         extName: string,
         key: string,
         value: string,
       ) => {
         console.log(
         'onExtensionEvent',
         'provider',
         provider,
         'extName',
         extName,
         'key',
         key,
         'value',
         value,
         );
       },
       onExtensionStarted: (provider: string, extName: string) => {
         console.log(
         'onExtensionStarted',
         'provider',
         provider,
         'extName',
         extName,
         );
         setEnableExtension(true);
       },
       onExtensionStopped: (provider: string, extName: string) => {
         console.log(
         'onExtensionStopped',
         'provider',
         provider,
         'extName',
         extName,
         );
         setEnableExtension(false);
       },
       \`\`\`

    ## Test your implementation [#test-your-implementation-7]

    To ensure that you have integrated the extension in your app:

    1. Run your app:

       * *Android*

         1. Enable Developer options on your Android device, and then connect it to your computer using a USB cable.
         2. Run \`npx react-native run-android\` in the project root directory.

       * *iOS:*

         1. Run your app with Xcode.

       If this is the first time you run the project, you need to grant microphone and camera access to your app.

    2. Click Join to start a call.

    3. Join the same channel from another test device or the [Agora web demo](https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html).

    4. Experience the features of your new extension.

    ## Reference [#reference-7]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    Extensions are add-ons designed to rapidly extend the functionality of your game. [Extensions Marketplace](https://www.agora.io/en/agora-extensions-marketplace/) is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning.

    In the Agora Extensions Marketplace:

    * Vendors create and publish extensions to provide functionality such as audio and video processing.
    * App developers use extensions to quickly implement fun and interactive functionality.

    This page shows you how to integrate an extension from Agora Extensions Marketplace into your game. There can be specific guidance for each extension.

    ## Understand the tech [#understand-the-tech-8]

    An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels.

    **Extension call workflow**

    ![img](https://assets-docs.agora.io/images/video-sdk/extension-callflow.svg)

    A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline.

    ## Prerequisites [#prerequisites-8]

    To test the code used in this page you need to have:

    * An Agora [account](/en/introduction/account) and [project](/en/introduction/account).

    * A computer with Internet access.
      Ensure that no firewall is blocking your network communication.

    * Implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk)

    - [Unity Hub](https://unity.com/download)
    - [Unity Editor 2017.X LTS or higher](https://unity.com/releases/editor/archive)
    - Microsoft Visual Studio 2017 or higher

    ## Project setup [#project-setup-8]

    In order to integrate an extension into your project:

    1. **Activate an extension**

       1. Log in to [Agora Console](https://console.agora.io/v2).

       2. In the left navigation panel, click **Extension Marketplace**, then click the extension you want to activate.

          You are now on the extension detail page.

       3. Select a pricing plan and click **Buy and Activate**.
          * If you have already created an Agora project:

            The **Projects** section appears and lists all of your projects.
          * If you have not created an Agora project:

            [Create a new project](/en/introduction/account), the project appears in the **Projects** section.

       4. Under **Projects** on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the **Action** column.

    2. **Get the apiKey and apiSecret for the extension**

       If required for the extension, to get the extension apiKey and apiSecret, in the **Projects** extension detail page, click **View** in the **Secret** column.

    3. Open your Unity project

       Load the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) Video Calling project you created previously.

    4. Get the extension

       Visit the [Agora Extensions Marketplace](https://www.agora.io/en/agora-extensions-marketplace/) and follow the procedure to download and install the desired extension.

    You are now ready to integrate the extension in your game.

    ## Integrate the extension into your project [#integrate-the-extension-into-your-project-8]

    This section presents the framework code you add to your Unity project to integrate an extension.

    1. **Load the extension provider**

       You call \`loadExtensionProvider\` during Agora Engine initialization to specify the extension library path. To do this, add the following code to the \`SetupVideoSDKEngine\` method after you initialize the engine with \`RtcEngine.Initialize\`:

       \`\`\`csharp
       RtcEngine.LoadExtensionProvider("<extensionLibraryPath>");
       \`\`\`

    2. **Enable the extension**

       To enable the extension, add the following code to the \`Join\` method before \`RtcEngine.EnableVideo();\`:

       \`\`\`csharp
       RtcEngine.EnableExtension(
         provider: "<The name of the extension provider>",
         extension: "<extensionName>",
         enable: true,
         type: MEDIA_SOURCE_TYPE.UNKNOWN_MEDIA_SOURCE
       );
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           Extensions marketplace hosts both third-party extensions as well as those developed by Agora. To use an Agora extension, you do not need to call EnableExtension.
         </CalloutDescription>
       </CalloutContainer>

       To enable multiple extensions, call \`EnableExtension\` for each extension. The calls to \`EnableExtension\` determines the order of each extension in the transmission pipeline. For example, if you enable extension A before extension B, RTC SDK processes data from extension A before extension B.

    3. **Set extension properties**

       To customize the extension for your particular game, set suitable values for the extension properties. Refer to the extension documentation for a list of available property names and allowable values. To set a property, add the following code to the \`Join\` method after \`RtcEngine.EnableExtension\`:

       \`\`\`csharp
       RtcEngine.SetExtensionProperty(
         provider: "<providerName>",
         extension: "<extensionName>",
         key: "<keyName>",
         value: "<keyValue>"
       );
       \`\`\`

    ## Test your implementation [#test-your-implementation-8]

    To ensure that you have integrated the extension in your game:

    1. Set the variables and properties in the project code to values suitable for your chosen extension.

    2. Generate a temporary token in Agora Console.

    3. In your browser, navigate to the [Agora web demo](https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html) and update *App ID*, *Channel*, and *Token* with the values for your temporary token, then click **Join**.

    4. In **Unity Editor**, in \`Assets/Agora-RTC-Plugin/Agora-Unity-RTC-SDK/Code/JoinChannelVideo.cs\`, update \`_appID\`, \`_channelName\`, and \`_token\` with the values for your temporary token.

    5. In **Unity Editor**, click **Play**. A moment later you see the game installed on your device.

    6. Click Join to start a call.

    7. Experience the features of your new extension.

    ## Reference [#reference-8]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-5]

    * [\`EnableExtension\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_enableextension)

    * [\`LoadExtensionProvider\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_loadextensionprovider)

    * [\`SetExtensionProperty\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setextensionproperty)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Extensions are add-ons designed to rapidly extend the functionality of your app. Extensions Marketplace is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning."
  }, {
    heading: undefined,
    content: "In the Agora Extensions Marketplace:"
  }, {
    heading: undefined,
    content: "Vendors create and publish extensions to provide functionality such as audio and video processing."
  }, {
    heading: undefined,
    content: "App developers use extensions to quickly implement fun and interactive functionality."
  }, {
    heading: undefined,
    content: "This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension."
  }, {
    heading: "understand-the-tech",
    content: "An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
  }, {
    heading: "understand-the-tech",
    content: "**Extension call workflow**"
  }, {
    heading: "understand-the-tech",
    content: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline."
  }, {
    heading: "prerequisites",
    content: "To test the code used in this page you need to have:"
  }, {
    heading: "prerequisites",
    content: "An Agora account and project."
  }, {
    heading: "prerequisites",
    content: `A computer with Internet access.
Ensure that no firewall is blocking your network communication.`
  }, {
    heading: "prerequisites",
    content: "Implemented the SDK quickstart."
  }, {
    heading: "project-setup",
    content: "In order to integrate an extension into your project:"
  }, {
    heading: "project-setup",
    content: "**Activate an extension**"
  }, {
    heading: "project-setup",
    content: "Log in to Agora Console."
  }, {
    heading: "project-setup",
    content: "In the left navigation panel, click **Extension Marketplace**, then click the extension you want to activate."
  }, {
    heading: "project-setup",
    content: "You are now on the extension detail page."
  }, {
    heading: "project-setup",
    content: "Select a pricing plan and click **Buy and Activate**."
  }, {
    heading: "project-setup",
    content: "If you have already created an Agora project:"
  }, {
    heading: "project-setup",
    content: "The **Projects** section appears and lists all of your projects."
  }, {
    heading: "project-setup",
    content: "If you have not created an Agora project:"
  }, {
    heading: "project-setup",
    content: "Create a new project, the project appears in the **Projects** section."
  }, {
    heading: "project-setup",
    content: "Under **Projects** on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the **Action** column."
  }, {
    heading: "project-setup",
    content: "**Get the apiKey and apiSecret for the extension**"
  }, {
    heading: "project-setup",
    content: "If required for the extension, to get the extension apiKey and apiSecret, in the **Projects** extension detail page, click **View** in the **Secret** column."
  }, {
    heading: "project-setup",
    content: "**Download the extension**"
  }, {
    heading: "project-setup",
    content: "In the extension detail page, click **Download**, then unzip the extension in a local directory."
  }, {
    heading: "project-setup",
    content: "**Install the extension in your project**"
  }, {
    heading: "project-setup",
    content: "Android Archive file (`.aar`)"
  }, {
    heading: "project-setup",
    content: "Save the extension `.aar` file to `/app/libs` in your project."
  }, {
    heading: "project-setup",
    content: "In `/Gradle Scripts/build.gradle(Module: <ProjectName> app)`, add the following line under `dependencies`:"
  }, {
    heading: "project-setup",
    content: "Shared Library (`.so`)"
  }, {
    heading: "project-setup",
    content: "Save the `.so` file to the following paths in your project:"
  }, {
    heading: "project-setup",
    content: "`/app/src/main/jniLibs/arm64-v8a`"
  }, {
    heading: "project-setup",
    content: "`/app/src/main/jniLibs/armeabi-v7a`"
  }, {
    heading: "project-setup",
    content: "You are now ready to integrate the extension in your app."
  }, {
    heading: "integrate-the-extension-into-your-project",
    content: `The watermark extension adds a watermark on video streamed to your local client. This section shows you how to implement the watermark extension
in your Agora project:`
  }, {
    heading: "integrate-the-extension-into-your-project",
    content: "**Import the necessary classes**"
  }, {
    heading: "integrate-the-extension-into-your-project",
    content: "Download the watermark extension and follow the steps for `.aar` files in setup."
  }, {
    heading: "integrate-the-extension-into-your-project",
    content: "In `app/src/main/java/com.example.<projectname>/MainActivity`:"
  }, {
    heading: "integrate-the-extension-into-your-project",
    content: "Add the following lines to import the Android classes used by the extension:"
  }, {
    heading: "integrate-the-extension-into-your-project",
    content: "Add the following lines to import the Agora classes used by the extension:"
  }, {
    heading: "integrate-the-extension-into-your-project",
    content: "**Add the extension and register the event handler**"
  }, {
    heading: "integrate-the-extension-into-your-project",
    content: "In `setupVideoSDKEngine`, add the following code before `agoraEngine = RtcEngine.create(config);`:"
  }, {
    heading: "integrate-the-extension-into-your-project",
    content: "**Enable the extension**"
  }, {
    heading: "integrate-the-extension-into-your-project",
    content: "Call `enableExtension` to enable the extension. To enable multiple extensions, call `enableExtension` as many times. The sequence of enabling multiple extensions determines the order of these extensions in the transmission pipeline. For example, if you enable extension A before extension B, extension A processes data from the SDK before extension B."
  }, {
    heading: "integrate-the-extension-into-your-project",
    content: "In `setupVideoSDKEngine`, add the following code before `agoraEngine = RtcEngine.create(config);`:"
  }, {
    heading: "integrate-the-extension-into-your-project",
    content: "**Set extension properties**"
  }, {
    heading: "integrate-the-extension-into-your-project",
    content: "In the `joinChannel(View view)` method, add the following code after `agoraEngine.joinChannel`:"
  }, {
    heading: "test-your-implementation",
    content: "To ensure that you have integrated the extension in your app:"
  }, {
    heading: "test-your-implementation",
    content: "Connect the Android device to the computer."
  }, {
    heading: "test-your-implementation",
    content: "Click `Run app` on your Android Studio. A moment later you will see the project installed on your device."
  }, {
    heading: "test-your-implementation",
    content: "When the app launches, you can see yourself and the watermark `Agora` on the local view."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference",
    content: "`RtcEngineConfig.addExtension`"
  }, {
    heading: "api-reference",
    content: "`enableExtension`"
  }, {
    heading: "api-reference",
    content: "`getExtensionProperty`"
  }, {
    heading: "api-reference",
    content: "`setExtensionProperty`"
  }, {
    heading: "api-reference",
    content: "`IMediaExtensionObserver`"
  }, {
    heading: "api-reference",
    content: "Extensions are add-ons designed to rapidly extend the functionality of your app. Extensions Marketplace is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning."
  }, {
    heading: "api-reference",
    content: "In the Agora Extensions Marketplace:"
  }, {
    heading: "api-reference",
    content: "Vendors create and publish extensions to provide functionality such as audio and video processing."
  }, {
    heading: "api-reference",
    content: "App developers use extensions to quickly implement fun and interactive functionality."
  }, {
    heading: "api-reference",
    content: "This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension."
  }, {
    heading: "understand-the-tech-1",
    content: "An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
  }, {
    heading: "understand-the-tech-1",
    content: "**Extension call workflow**"
  }, {
    heading: "understand-the-tech-1",
    content: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline."
  }, {
    heading: "prerequisites-1",
    content: "To test the code used in this page you need to have:"
  }, {
    heading: "prerequisites-1",
    content: "An Agora account and project."
  }, {
    heading: "prerequisites-1",
    content: `A computer with Internet access.
Ensure that no firewall is blocking your network communication.`
  }, {
    heading: "prerequisites-1",
    content: "Implemented the SDK quickstart."
  }, {
    heading: "project-setup-1",
    content: "In order to integrate an extension into your project:"
  }, {
    heading: "project-setup-1",
    content: "**Activate an extension**"
  }, {
    heading: "project-setup-1",
    content: "Log in to Agora Console."
  }, {
    heading: "project-setup-1",
    content: "In the left navigation panel, click **Extension Marketplace**, then click the extension you want to activate."
  }, {
    heading: "project-setup-1",
    content: "You are now on the extension detail page."
  }, {
    heading: "project-setup-1",
    content: "Select a pricing plan and click **Buy and Activate**."
  }, {
    heading: "project-setup-1",
    content: "If you have already created an Agora project:"
  }, {
    heading: "project-setup-1",
    content: "The **Projects** section appears and lists all of your projects."
  }, {
    heading: "project-setup-1",
    content: "If you have not created an Agora project:"
  }, {
    heading: "project-setup-1",
    content: "Create a new project, the project appears in the **Projects** section."
  }, {
    heading: "project-setup-1",
    content: "Under **Projects** on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the **Action** column."
  }, {
    heading: "project-setup-1",
    content: "**Get the apiKey and apiSecret for the extension**"
  }, {
    heading: "project-setup-1",
    content: "If required for the extension, to get the extension apiKey and apiSecret, in the **Projects** extension detail page, click **View** in the **Secret** column."
  }, {
    heading: "project-setup-1",
    content: "**Download the extension**"
  }, {
    heading: "project-setup-1",
    content: "In the extension detail page, click **Download**, then unzip the extension in a local directory."
  }, {
    heading: "project-setup-1",
    content: "**Install the extension in your project**"
  }, {
    heading: "project-setup-1",
    content: "Save the extension `.framework` or `.xcframwork` files to your project folder."
  }, {
    heading: "project-setup-1",
    content: "In Xcode, open your project and select your target. Go to **General** > **Frameworks, Libraries, and Embedded Content**."
  }, {
    heading: "project-setup-1",
    content: "Click &#x2A;*+** > &#x2A;*Add Other…** > **Add Files** and select the `.framework` or `.xcframwork` files you saved earlier."
  }, {
    heading: "project-setup-1",
    content: "You are now ready to integrate the extension in your app."
  }, {
    heading: "integrate-the-extension-into-your-project-1",
    content: "To use an extension in your Agora project:"
  }, {
    heading: "integrate-the-extension-into-your-project-1",
    content: "The implementation procedure varies according to extensions. Each extension vendor provides their own implementation guides, which is validated by Agora before the official release of the extension."
  }, {
    heading: "integrate-the-extension-into-your-project-1",
    content: "To implement the extension in your project, go to the detail page of the extension on Agora Console, click **Implementation guides**, and follow the steps on the page."
  }, {
    heading: "test-your-implementation-1",
    content: "To ensure that you have integrated the extension in your app:"
  }, {
    heading: "test-your-implementation-1",
    content: "Connect a device to the computer."
  }, {
    heading: "test-your-implementation-1",
    content: "In Xcode, Click `Run`. A moment later you will see the project installed on your device."
  }, {
    heading: "test-your-implementation-1",
    content: "Connect to a channel and test your effect."
  }, {
    heading: "test-your-implementation-1",
    content: "Agora provides an open-source sample project SimpleFilter on GitHub for your reference."
  }, {
    heading: "reference-1",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference-1",
    content: "Extensions are add-ons designed to rapidly extend the functionality of your app. Extensions Marketplace is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning."
  }, {
    heading: "reference-1",
    content: "In the Agora Extensions Marketplace:"
  }, {
    heading: "reference-1",
    content: "Vendors create and publish extensions to provide functionality such as audio and video processing."
  }, {
    heading: "reference-1",
    content: "App developers use extensions to quickly implement fun and interactive functionality."
  }, {
    heading: "reference-1",
    content: "This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension."
  }, {
    heading: "understand-the-tech-2",
    content: "An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
  }, {
    heading: "understand-the-tech-2",
    content: "**Extension call workflow**"
  }, {
    heading: "understand-the-tech-2",
    content: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline."
  }, {
    heading: "prerequisites-2",
    content: "To test the code used in this page you need to have:"
  }, {
    heading: "prerequisites-2",
    content: "An Agora account and project."
  }, {
    heading: "prerequisites-2",
    content: `A computer with Internet access.
Ensure that no firewall is blocking your network communication.`
  }, {
    heading: "prerequisites-2",
    content: "Implemented the SDK quickstart."
  }, {
    heading: "project-setup-2",
    content: "In order to integrate an extension into your project:"
  }, {
    heading: "project-setup-2",
    content: "**Activate an extension**"
  }, {
    heading: "project-setup-2",
    content: "Log in to Agora Console."
  }, {
    heading: "project-setup-2",
    content: "In the left navigation panel, click **Extension Marketplace**, then click the extension you want to activate."
  }, {
    heading: "project-setup-2",
    content: "You are now on the extension detail page."
  }, {
    heading: "project-setup-2",
    content: "Select a pricing plan and click **Buy and Activate**."
  }, {
    heading: "project-setup-2",
    content: "If you have already created an Agora project:"
  }, {
    heading: "project-setup-2",
    content: "The **Projects** section appears and lists all of your projects."
  }, {
    heading: "project-setup-2",
    content: "If you have not created an Agora project:"
  }, {
    heading: "project-setup-2",
    content: "Create a new project, the project appears in the **Projects** section."
  }, {
    heading: "project-setup-2",
    content: "Under **Projects** on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the **Action** column."
  }, {
    heading: "project-setup-2",
    content: "**Get the apiKey and apiSecret for the extension**"
  }, {
    heading: "project-setup-2",
    content: "If required for the extension, to get the extension apiKey and apiSecret, in the **Projects** extension detail page, click **View** in the **Secret** column."
  }, {
    heading: "project-setup-2",
    content: "**Download the extension**"
  }, {
    heading: "project-setup-2",
    content: "In the extension detail page, click **Download**, then unzip the extension in a local directory."
  }, {
    heading: "project-setup-2",
    content: "**Install the extension in your project**"
  }, {
    heading: "project-setup-2",
    content: "Save the extension `.framework` or `.xcframwork` files to your project folder."
  }, {
    heading: "project-setup-2",
    content: "In Xcode, open your project and select your target. Go to **General** > **Frameworks, Libraries, and Embedded Content**."
  }, {
    heading: "project-setup-2",
    content: "Click &#x2A;*+** > &#x2A;*Add Other…** > **Add Files** and select the `.framework` or `.xcframwork` files you saved earlier."
  }, {
    heading: "project-setup-2",
    content: "You are now ready to integrate the extension in your app."
  }, {
    heading: "integrate-the-extension-into-your-project-2",
    content: "To use an extension in your Agora project:"
  }, {
    heading: "integrate-the-extension-into-your-project-2",
    content: "The implementation procedure varies according to extensions. Each extension vendor provides their own implementation guides, which is validated by Agora before the official release of the extension."
  }, {
    heading: "integrate-the-extension-into-your-project-2",
    content: "To implement the extension in your project, go to the detail page of the extension on Agora Console, click **Implementation guides**, and follow the steps on the page."
  }, {
    heading: "test-your-implementation-2",
    content: "To ensure that you have integrated the extension in your app:"
  }, {
    heading: "test-your-implementation-2",
    content: "In Xcode, Click `Run`. A moment later you will see the project installed on your device."
  }, {
    heading: "test-your-implementation-2",
    content: "Connect to a channel and test your effect."
  }, {
    heading: "reference-2",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference-2",
    content: "Extensions are add-ons designed to rapidly extend the functionality of your app. Extensions Marketplace is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning."
  }, {
    heading: "reference-2",
    content: "In the Agora Extensions Marketplace:"
  }, {
    heading: "reference-2",
    content: "Vendors create and publish extensions to provide functionality such as audio and video processing."
  }, {
    heading: "reference-2",
    content: "App developers use extensions to quickly implement fun and interactive functionality."
  }, {
    heading: "reference-2",
    content: "This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension."
  }, {
    heading: "understand-the-tech-3",
    content: "An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
  }, {
    heading: "understand-the-tech-3",
    content: "**Extension call workflow**"
  }, {
    heading: "understand-the-tech-3",
    content: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline."
  }, {
    heading: "prerequisites-3",
    content: "To test the code used in this page you need to have:"
  }, {
    heading: "prerequisites-3",
    content: "An Agora account and project."
  }, {
    heading: "prerequisites-3",
    content: `A computer with Internet access.
Ensure that no firewall is blocking your network communication.`
  }, {
    heading: "prerequisites-3",
    content: "Implemented the SDK quickstart."
  }, {
    heading: "prerequisites-3",
    content: "A supported browser."
  }, {
    heading: "prerequisites-3",
    content: "Physical media input devices, such as a camera and a microphone."
  }, {
    heading: "prerequisites-3",
    content: "A JavaScript package manager such as npm."
  }, {
    heading: "project-setup-3",
    content: "In order to integrate an extension into your project:"
  }, {
    heading: "project-setup-3",
    content: "**Activate an extension**"
  }, {
    heading: "project-setup-3",
    content: "Log in to Agora Console."
  }, {
    heading: "project-setup-3",
    content: "In the left navigation panel, click **Extension Marketplace**, then click the extension you want to activate."
  }, {
    heading: "project-setup-3",
    content: "You are now on the extension detail page."
  }, {
    heading: "project-setup-3",
    content: "Select a pricing plan and click **Buy and Activate**."
  }, {
    heading: "project-setup-3",
    content: "If you have already created an Agora project:"
  }, {
    heading: "project-setup-3",
    content: "The **Projects** section appears and lists all of your projects."
  }, {
    heading: "project-setup-3",
    content: "If you have not created an Agora project:"
  }, {
    heading: "project-setup-3",
    content: "Create a new project, the project appears in the **Projects** section."
  }, {
    heading: "project-setup-3",
    content: "Under **Projects** on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the **Action** column."
  }, {
    heading: "project-setup-3",
    content: "**Get the apiKey and apiSecret for the extension**"
  }, {
    heading: "project-setup-3",
    content: "If required for the extension, to get the extension apiKey and apiSecret, in the **Projects** extension detail page, click **View** in the **Secret** column."
  }, {
    heading: "project-setup-3",
    content: "**Download the extension**"
  }, {
    heading: "project-setup-3",
    content: "In the extension detail page, click **Download**, you are taken to the npm page for the extension."
  }, {
    heading: "project-setup-3",
    content: "**Install the extension in your project**"
  }, {
    heading: "project-setup-3",
    content: "In the extension npm page, copy the **Install** command."
  }, {
    heading: "project-setup-3",
    content: "In the root of your project, install the extension package. For example, for AI Noise Suppression:"
  }, {
    heading: "project-setup-3",
    content: "You are now ready to integrate the extension in your app."
  }, {
    heading: "integrate-the-extension-into-your-project-3",
    content: "To use an extension in your Agora project:"
  }, {
    heading: "integrate-the-extension-into-your-project-3",
    content: "The implementation procedure varies according to extensions. Each extension vendor provides their own implementation guides, which is validated by Agora before the official release of the extension."
  }, {
    heading: "integrate-the-extension-into-your-project-3",
    content: "To implement the extension in your project, go to the detail page of the extension on Extensions Marketplace, click **Implementation guides**, and follow the steps on the page."
  }, {
    heading: "integrate-the-extension-into-your-project-3",
    content: "To learn how to use a Web extension, see AI Noise Suppression."
  }, {
    heading: "test-your-implementation-3",
    content: "To ensure that you have integrated the extension in your app:"
  }, {
    heading: "test-your-implementation-3",
    content: "Generate a temporary token in Agora Console."
  }, {
    heading: "test-your-implementation-3",
    content: "In your browser, navigate to the Agora web demo and update *App ID*, *Channel*, and *Token* with the values for your temporary token, then click **Join**."
  }, {
    heading: "test-your-implementation-3",
    content: "In **main.js**, update `appID`, `channel` and `token` with your values."
  }, {
    heading: "test-your-implementation-3",
    content: "Start the dev server"
  }, {
    heading: "test-your-implementation-3",
    content: "Execute the following command in the terminal:"
  }, {
    heading: "test-your-implementation-3",
    content: "Use the URL displayed in the terminal to open the app in your browser."
  }, {
    heading: "test-your-implementation-3",
    content: "Try out the extension that you have integrated."
  }, {
    heading: "reference-3",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-1",
    content: "Extensions are add-ons designed to rapidly extend the functionality of your app. Extensions Marketplace is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning."
  }, {
    heading: "api-reference-1",
    content: "In the Agora Extensions Marketplace:"
  }, {
    heading: "api-reference-1",
    content: "Vendors create and publish extensions to provide functionality such as audio and video processing."
  }, {
    heading: "api-reference-1",
    content: "App developers use extensions to quickly implement fun and interactive functionality."
  }, {
    heading: "api-reference-1",
    content: "This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension."
  }, {
    heading: "understand-the-tech-4",
    content: "An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
  }, {
    heading: "understand-the-tech-4",
    content: "**Extension call workflow**"
  }, {
    heading: "understand-the-tech-4",
    content: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline."
  }, {
    heading: "prerequisites-4",
    content: "To test the code used in this page you need to have:"
  }, {
    heading: "prerequisites-4",
    content: "An Agora account and project."
  }, {
    heading: "prerequisites-4",
    content: `A computer with Internet access.
Ensure that no firewall is blocking your network communication.`
  }, {
    heading: "prerequisites-4",
    content: "Same setup as the RTC SDK quickstart prerequisites for Video Calling."
  }, {
    heading: "project-setup-4",
    content: "In order to integrate an extension into your project:"
  }, {
    heading: "project-setup-4",
    content: "**Activate an extension**"
  }, {
    heading: "project-setup-4",
    content: "Log in to Agora Console."
  }, {
    heading: "project-setup-4",
    content: "In the left navigation panel, click **Extension Marketplace**, then click the extension you want to activate."
  }, {
    heading: "project-setup-4",
    content: "You are now on the extension detail page."
  }, {
    heading: "project-setup-4",
    content: "Select a pricing plan and click **Buy and Activate**."
  }, {
    heading: "project-setup-4",
    content: "If you have already created an Agora project:"
  }, {
    heading: "project-setup-4",
    content: "The **Projects** section appears and lists all of your projects."
  }, {
    heading: "project-setup-4",
    content: "If you have not created an Agora project:"
  }, {
    heading: "project-setup-4",
    content: "Create a new project, the project appears in the **Projects** section."
  }, {
    heading: "project-setup-4",
    content: "Under **Projects** on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the **Action** column."
  }, {
    heading: "project-setup-4",
    content: "**Get the apiKey and apiSecret for the extension**"
  }, {
    heading: "project-setup-4",
    content: "If required for the extension, to get the extension apiKey and apiSecret, in the **Projects** extension detail page, click **View** in the **Secret** column."
  }, {
    heading: "project-setup-4",
    content: "**Download the extension**"
  }, {
    heading: "project-setup-4",
    content: "In the extension detail page, click **Download**, then unzip the extension in a local directory."
  }, {
    heading: "project-setup-4",
    content: "**Install the extension in your project**"
  }, {
    heading: "project-setup-4",
    content: "Add the extension `.dll` to your project."
  }, {
    heading: "project-setup-4",
    content: "You are now ready to integrate the extension in your app."
  }, {
    heading: "integrate-the-extension-into-your-project-4",
    content: "Integrating an extension into your project involves a few important steps to ensure seamless interaction between the extension and Agora RTC SDK. Each of these steps plays a crucial role to ensure that the extension works correctly and efficiently within your Agora project:"
  }, {
    heading: "integrate-the-extension-into-your-project-4",
    content: "**Define variables to integrate an extension with Agora RTC SDK**"
  }, {
    heading: "integrate-the-extension-into-your-project-4",
    content: "In `AgoraImplementationDlg.h`, add the following declarations to the `CAgoraImplementationDlg` class before `setupVideoSDKEngine();`:"
  }, {
    heading: "integrate-the-extension-into-your-project-4",
    content: "**Register extension callbacks to the `IRtcEngineEventHandler` event handler**"
  }, {
    heading: "integrate-the-extension-into-your-project-4",
    content: "In `AgoraImplementationDlg.h`, add the following declarations to the `AgoraEventHandler` class after `onLeaveChannel`:"
  }, {
    heading: "integrate-the-extension-into-your-project-4",
    content: "Define these callbacks in `AgoraImplementationDlg.cpp`:"
  }, {
    heading: "integrate-the-extension-into-your-project-4",
    content: "**Enable the extension and set the extension properties**"
  }, {
    heading: "integrate-the-extension-into-your-project-4",
    content: "To use the extension you downloaded in your app:"
  }, {
    heading: "integrate-the-extension-into-your-project-4",
    content: "Load the extension."
  }, {
    heading: "integrate-the-extension-into-your-project-4",
    content: "Register the extension."
  }, {
    heading: "integrate-the-extension-into-your-project-4",
    content: "Enable the extension."
  }, {
    heading: "integrate-the-extension-into-your-project-4",
    content: "Set the extension property."
  }, {
    heading: "integrate-the-extension-into-your-project-4",
    content: "To accomplish these tasks, do the following:"
  }, {
    heading: "integrate-the-extension-into-your-project-4",
    content: "In `AgoraImplementationDlg.h`, declare `setupMarketExtension()` before `setupVideoSDKEngine();`:"
  }, {
    heading: "integrate-the-extension-into-your-project-4",
    content: "In `AgoraImplementationDlg.cpp`, put the following in the `setupVideoSDKEngine` function just after\ninitializing Agora Engine `agoraEngine->initialize(context);`:"
  }, {
    heading: "integrate-the-extension-into-your-project-4",
    content: "Define `setupMarketExtension()`:"
  }, {
    heading: "integrate-the-extension-into-your-project-4",
    content: "**Disable the extension before closing the application**"
  }, {
    heading: "integrate-the-extension-into-your-project-4",
    content: "You must unload and disable all extensions before the app closes. As you set `unload_after_use` to\n`true` in `loadExtensionProvider()`, the extension dynamic link library unloads automatically after it has\nbeen used. You disable the extension to prevent any potential memory leaks or unanticipated\neffects. To do this, put the following in `OnClose()` before `agoraEngine->release();`:"
  }, {
    heading: "test-your-implementation-4",
    content: "To ensure that you have integrated the extension in your app:"
  }, {
    heading: "test-your-implementation-4",
    content: "Generate a temporary token in Agora Console ."
  }, {
    heading: "test-your-implementation-4",
    content: "In your browser, navigate to the Agora web demo and update *App ID*, *Channel*, and *Token* with the values for your temporary token, then click **Join**."
  }, {
    heading: "test-your-implementation-4",
    content: "In `CAgoraImplementationDlg.h`, update `appId`, `channelName` and `token` with the values for your temporary token."
  }, {
    heading: "test-your-implementation-4",
    content: "Set the values for variables and properties in the framework code for your extension in use."
  }, {
    heading: "test-your-implementation-4",
    content: "In Visual Studio, click **Local Windows Debugger**. A moment later you see the project running on your development device."
  }, {
    heading: "test-your-implementation-4",
    content: "If this is the first time you run the project, you need to grant microphone and camera access to your app."
  }, {
    heading: "test-your-implementation-4",
    content: "Experience the features of your new extension."
  }, {
    heading: "reference-4",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-2",
    content: "`loadExtensionProvider`"
  }, {
    heading: "api-reference-2",
    content: "`registerExtension`"
  }, {
    heading: "api-reference-2",
    content: "`enableExtension`"
  }, {
    heading: "api-reference-2",
    content: "`setExtensionProperty`"
  }, {
    heading: "api-reference-2",
    content: "`MEDIA_SOURCE_TYPE`"
  }, {
    heading: "api-reference-2",
    content: "Extensions are add-ons designed to rapidly extend the functionality of your app. Extensions Marketplace is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning."
  }, {
    heading: "api-reference-2",
    content: "In the Agora Extensions Marketplace:"
  }, {
    heading: "api-reference-2",
    content: "Vendors create and publish extensions to provide functionality such as audio and video processing."
  }, {
    heading: "api-reference-2",
    content: "App developers use extensions to quickly implement fun and interactive functionality."
  }, {
    heading: "api-reference-2",
    content: "This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension."
  }, {
    heading: "understand-the-tech-5",
    content: "An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
  }, {
    heading: "understand-the-tech-5",
    content: "**Extension call workflow**"
  }, {
    heading: "understand-the-tech-5",
    content: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline."
  }, {
    heading: "prerequisites-5",
    content: "To test the code used in this page you need to have:"
  }, {
    heading: "prerequisites-5",
    content: "An Agora account and project."
  }, {
    heading: "prerequisites-5",
    content: `A computer with Internet access.
Ensure that no firewall is blocking your network communication.`
  }, {
    heading: "prerequisites-5",
    content: "Physical media input devices, such as a camera and a microphone."
  }, {
    heading: "prerequisites-5",
    content: "A JavaScript package manager such as npm."
  }, {
    heading: "project-setup-5",
    content: "In order to integrate an extension into your project:"
  }, {
    heading: "project-setup-5",
    content: "**Activate an extension**"
  }, {
    heading: "project-setup-5",
    content: "Log in to Agora Console."
  }, {
    heading: "project-setup-5",
    content: "In the left navigation panel, click **Extension Marketplace**, then click the extension you want to activate."
  }, {
    heading: "project-setup-5",
    content: "You are now on the extension detail page."
  }, {
    heading: "project-setup-5",
    content: "Select a pricing plan and click **Buy and Activate**."
  }, {
    heading: "project-setup-5",
    content: "If you have already created an Agora project:"
  }, {
    heading: "project-setup-5",
    content: "The **Projects** section appears and lists all of your projects."
  }, {
    heading: "project-setup-5",
    content: "If you have not created an Agora project:"
  }, {
    heading: "project-setup-5",
    content: "Create a new project, the project appears in the **Projects** section."
  }, {
    heading: "project-setup-5",
    content: "Under **Projects** on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the **Action** column."
  }, {
    heading: "project-setup-5",
    content: "**Get the apiKey and apiSecret for the extension**"
  }, {
    heading: "project-setup-5",
    content: "If required for the extension, to get the extension apiKey and apiSecret, in the **Projects** extension detail page, click **View** in the **Secret** column."
  }, {
    heading: "project-setup-5",
    content: "You are now ready to integrate the extension in your app."
  }, {
    heading: "integrate-the-extension-into-your-project-5",
    content: "This section shows you how to implement the video filter extension in your app:"
  }, {
    heading: "integrate-the-extension-into-your-project-5",
    content: "**Add the required variables**"
  }, {
    heading: "integrate-the-extension-into-your-project-5",
    content: "To integrate the extension, in `preload.js`, add the following variables to declarations:"
  }, {
    heading: "integrate-the-extension-into-your-project-5",
    content: "**Implement the logic to load and enable the extension**"
  }, {
    heading: "integrate-the-extension-into-your-project-5",
    content: "To load the extension in your app, call `loadExtensionProvider` and pass the extension path. To enable the extension, call `enableExtension` and pass the provider name and extension name. To implement this workflow, in `preload.js`, add the following method before `window.onload = () =>`:"
  }, {
    heading: "integrate-the-extension-into-your-project-5",
    content: "**Implement the logic to disable the extension**"
  }, {
    heading: "integrate-the-extension-into-your-project-5",
    content: "To disable the extension, call `enableExtension` and pass the `provider`, `extension`, and `enableExtension` variables as parameters. The `enableExtension` variable is set to `false` to disable the extension. To implement this logic, in `preload.js`, add the following method before `window.onload = () =>`:"
  }, {
    heading: "integrate-the-extension-into-your-project-5",
    content: "**Setup an event listener to enable and disable the extension with a button**"
  }, {
    heading: "integrate-the-extension-into-your-project-5",
    content: 'When the user presses **Enable Extension**, your app loads and starts the extension with a call to the `enableExtension` method. When the user presses the button again, your app disables the extension with a call to the `disableExtension` method. To implement this workflow, in `preload.js`, add the following method before `document.getElementById("leave").onclick = async function ()`:'
  }, {
    heading: "integrate-the-extension-into-your-project-5",
    content: "**Implement the required callbacks to manage the extension**"
  }, {
    heading: "integrate-the-extension-into-your-project-5",
    content: "RTC SDK provides the following callbacks to manage an extension:"
  }, {
    heading: "integrate-the-extension-into-your-project-5",
    content: "`onExtensionStarted`: Occurs when the extension is enabled."
  }, {
    heading: "integrate-the-extension-into-your-project-5",
    content: "`onExtensionError`: Occurs when the extension runs incorrectly."
  }, {
    heading: "integrate-the-extension-into-your-project-5",
    content: "`onExtensionStopped`: Occurs when the extension is disabled."
  }, {
    heading: "integrate-the-extension-into-your-project-5",
    content: "`onExtensionEvent`: The event callback of the extension."
  }, {
    heading: "integrate-the-extension-into-your-project-5",
    content: "To implement these callbacks, in `preload.js`, add the following callbacks before `onUserJoined`:"
  }, {
    heading: "test-your-implementation-5",
    content: "To ensure that you have integrated the extension in your app:"
  }, {
    heading: "test-your-implementation-5",
    content: "In **preload.js**, update `appID`, `channel` and `token` with your values."
  }, {
    heading: "test-your-implementation-5",
    content: "Run the app"
  }, {
    heading: "test-your-implementation-5",
    content: "Execute the following command in the terminal:"
  }, {
    heading: "test-your-implementation-5",
    content: "You see your app opens a window named **Get started with Video Calling**."
  }, {
    heading: "test-your-implementation-5",
    content: "Press Join to connect to the same channel as your web demo."
  }, {
    heading: "test-your-implementation-5",
    content: "Press **Enable Extension**. Your app start using the Agora video filter extension."
  }, {
    heading: "reference-5",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-3",
    content: "`loadExtensionProvider`"
  }, {
    heading: "api-reference-3",
    content: "`setExtensionProperty`"
  }, {
    heading: "api-reference-3",
    content: "`enableExtension`"
  }, {
    heading: "api-reference-3",
    content: "`onExtensionStarted`"
  }, {
    heading: "api-reference-3",
    content: "`onExtensionStopped`"
  }, {
    heading: "api-reference-3",
    content: "`onExtensionError`"
  }, {
    heading: "api-reference-3",
    content: "`onExtensionEvent`"
  }, {
    heading: "api-reference-3",
    content: "Extensions are add-ons designed to rapidly extend the functionality of your app. Extensions Marketplace is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning."
  }, {
    heading: "api-reference-3",
    content: "In the Agora Extensions Marketplace:"
  }, {
    heading: "api-reference-3",
    content: "Vendors create and publish extensions to provide functionality such as audio and video processing."
  }, {
    heading: "api-reference-3",
    content: "App developers use extensions to quickly implement fun and interactive functionality."
  }, {
    heading: "api-reference-3",
    content: "This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension."
  }, {
    heading: "understand-the-tech-6",
    content: "An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
  }, {
    heading: "understand-the-tech-6",
    content: "**Extension call workflow**"
  }, {
    heading: "understand-the-tech-6",
    content: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline."
  }, {
    heading: "prerequisites-6",
    content: "To test the code used in this page you need to have:"
  }, {
    heading: "prerequisites-6",
    content: "An Agora account and project."
  }, {
    heading: "prerequisites-6",
    content: `A computer with Internet access.
Ensure that no firewall is blocking your network communication.`
  }, {
    heading: "prerequisites-6",
    content: "Implemented the SDK quickstart."
  }, {
    heading: "prerequisites-6",
    content: "Flutter 2.0.0 or higher"
  }, {
    heading: "prerequisites-6",
    content: "Dart 2.15.1 or higher"
  }, {
    heading: "prerequisites-6",
    content: "Android Studio, IntelliJ, VS Code, or any other IDE that supports Flutter, see Set up an editor."
  }, {
    heading: "prerequisites-6",
    content: "If your target platform is iOS:"
  }, {
    heading: "prerequisites-6",
    content: "Xcode on macOS (latest version recommended)"
  }, {
    heading: "prerequisites-6",
    content: "A physical iOS device"
  }, {
    heading: "prerequisites-6",
    content: "iOS version 12.0 or later"
  }, {
    heading: "prerequisites-6",
    content: "If your target platform is Android:"
  }, {
    heading: "prerequisites-6",
    content: "Android Studio on macOS or Windows (latest version recommended)"
  }, {
    heading: "prerequisites-6",
    content: "An Android emulator or a physical Android device."
  }, {
    heading: "prerequisites-6",
    content: "If you are developing a desktop application for Windows, macOS or Linux, make sure your development device meets the Flutter desktop development requirements."
  }, {
    heading: "project-setup-6",
    content: "In order to integrate an extension into your project:"
  }, {
    heading: "project-setup-6",
    content: "**Activate an extension**"
  }, {
    heading: "project-setup-6",
    content: "Log in to Agora Console."
  }, {
    heading: "project-setup-6",
    content: "In the left navigation panel, click **Extension Marketplace**, then click the extension you want to activate."
  }, {
    heading: "project-setup-6",
    content: "You are now on the extension detail page."
  }, {
    heading: "project-setup-6",
    content: "Select a pricing plan and click **Buy and Activate**."
  }, {
    heading: "project-setup-6",
    content: "If you have already created an Agora project:"
  }, {
    heading: "project-setup-6",
    content: "The **Projects** section appears and lists all of your projects."
  }, {
    heading: "project-setup-6",
    content: "If you have not created an Agora project:"
  }, {
    heading: "project-setup-6",
    content: "Create a new project, the project appears in the **Projects** section."
  }, {
    heading: "project-setup-6",
    content: "Under **Projects** on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the **Action** column."
  }, {
    heading: "project-setup-6",
    content: "**Get the apiKey and apiSecret for the extension**"
  }, {
    heading: "project-setup-6",
    content: "If required for the extension, to get the extension apiKey and apiSecret, in the **Projects** extension detail page, click **View** in the **Secret** column."
  }, {
    heading: "project-setup-6",
    content: "Open your Flutter project"
  }, {
    heading: "project-setup-6",
    content: "Load the SDK quickstart Video Calling project you created previously."
  }, {
    heading: "project-setup-6",
    content: "Get the extension"
  }, {
    heading: "project-setup-6",
    content: "Visit the Agora Extensions Marketplace and follow the procedure to download and install the desired extension."
  }, {
    heading: "project-setup-6",
    content: "You are now ready to integrate the extension in your app."
  }, {
    heading: "integrate-the-extension-into-your-project-6",
    content: "This section presents the framework code you add to your Flutter project to integrate an extension."
  }, {
    heading: "integrate-the-extension-into-your-project-6",
    content: "**Load the extension provider**"
  }, {
    heading: "integrate-the-extension-into-your-project-6",
    content: "You call `loadExtensionProvider` during Agora Engine initialization to specify the extension library path. To do this, add the following code to the `setupVideoSDKEngine` method after you initialize the engine with `agoraEngine.initialize`:"
  }, {
    heading: "integrate-the-extension-into-your-project-6",
    content: "**Enable the extension**"
  }, {
    heading: "integrate-the-extension-into-your-project-6",
    content: "To enable the extension, add the following code to the `setupVideoSDKEngine` method before `await agoraEngine.enableVideo();`:"
  }, {
    heading: "integrate-the-extension-into-your-project-6",
    content: "If the extension uses the second camera to capture video, set the type parameter to `secondaryCameraSource`."
  }, {
    heading: "integrate-the-extension-into-your-project-6",
    content: "To enable multiple extensions, call `enableExtension` for each extension. The calls to `enableExtension` determines the order of each extension in the transmission pipeline. For example, if you enable extension A before extension B, extension A processes data from RTC SDK before extension B."
  }, {
    heading: "integrate-the-extension-into-your-project-6",
    content: "**Set extension properties**"
  }, {
    heading: "integrate-the-extension-into-your-project-6",
    content: "To customize the extension for your particular app, set suitable values for the extension properties. Refer to the extension documentation for a list of available property names and allowable values. To set a property, add the following code to the `setupVideoSDKEngine` method after `agoraEngine.enableExtension`:"
  }, {
    heading: "test-your-implementation-6",
    content: "To ensure that you have integrated the extension in your app:"
  }, {
    heading: "test-your-implementation-6",
    content: "Set the variables and properties in the framework code to values suitable for your chosen extension."
  }, {
    heading: "test-your-implementation-6",
    content: "In your IDE, open `/lib/main.dart` and update `appId`, `channelName` and `token` with the values from Agora Console."
  }, {
    heading: "test-your-implementation-6",
    content: "Connect a test device to your development device."
  }, {
    heading: "test-your-implementation-6",
    content: "In your IDE, click **Run app** or execute the `flutter run` command in the terminal. A moment later, you see the project installed on your device."
  }, {
    heading: "test-your-implementation-6",
    content: "If this is the first time you run the app, grant camera and microphone permissions."
  }, {
    heading: "test-your-implementation-6",
    content: "Join the same channel from another test device or the Agora web demo."
  }, {
    heading: "test-your-implementation-6",
    content: "Experience the features of your new extension."
  }, {
    heading: "reference-6",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-4",
    content: "`enableExtension`"
  }, {
    heading: "api-reference-4",
    content: "`loadExtensionProvider`"
  }, {
    heading: "api-reference-4",
    content: "`setExtensionProperty`"
  }, {
    heading: "api-reference-4",
    content: "`onExtensionStarted`"
  }, {
    heading: "api-reference-4",
    content: "`onExtensionStopped`"
  }, {
    heading: "api-reference-4",
    content: "`onExtensionError`"
  }, {
    heading: "api-reference-4",
    content: "Extensions are add-ons designed to rapidly extend the functionality of your app. Extensions Marketplace is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning."
  }, {
    heading: "api-reference-4",
    content: "In the Agora Extensions Marketplace:"
  }, {
    heading: "api-reference-4",
    content: "Vendors create and publish extensions to provide functionality such as audio and video processing."
  }, {
    heading: "api-reference-4",
    content: "App developers use extensions to quickly implement fun and interactive functionality."
  }, {
    heading: "api-reference-4",
    content: "This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension."
  }, {
    heading: "understand-the-tech-7",
    content: "An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
  }, {
    heading: "understand-the-tech-7",
    content: "**Extension call workflow**"
  }, {
    heading: "understand-the-tech-7",
    content: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline."
  }, {
    heading: "prerequisites-7",
    content: "To test the code used in this page you need to have:"
  }, {
    heading: "prerequisites-7",
    content: "An Agora account and project."
  }, {
    heading: "prerequisites-7",
    content: `A computer with Internet access.
Ensure that no firewall is blocking your network communication.`
  }, {
    heading: "prerequisites-7",
    content: "Implemented the SDK quickstart."
  }, {
    heading: "prerequisites-7",
    content: "React Native 0.60 or later. For more information, see Setting up the development environment."
  }, {
    heading: "prerequisites-7",
    content: "Node 10 or later"
  }, {
    heading: "prerequisites-7",
    content: "For iOS"
  }, {
    heading: "prerequisites-7",
    content: "A machine running macOS"
  }, {
    heading: "prerequisites-7",
    content: "Xcode 10 or later"
  }, {
    heading: "prerequisites-7",
    content: "CocoaPods"
  }, {
    heading: "prerequisites-7",
    content: "A physical or virtual mobile device running iOS 9.0 or later. If you use React Native 0.63 or later, ensure your iOS version is 10.0 or later."
  }, {
    heading: "prerequisites-7",
    content: "For Android"
  }, {
    heading: "prerequisites-7",
    content: "A machine running macOS, Windows, or Linux"
  }, {
    heading: "prerequisites-7",
    content: "Java Development Kit (JDK) 11 or later"
  }, {
    heading: "prerequisites-7",
    content: "Android Studio"
  }, {
    heading: "prerequisites-7",
    content: "A physical or virtual mobile device running Android 5.0 or later"
  }, {
    heading: "project-setup-7",
    content: "In order to integrate an extension into your project:"
  }, {
    heading: "project-setup-7",
    content: "**Activate an extension**"
  }, {
    heading: "project-setup-7",
    content: "Log in to Agora Console."
  }, {
    heading: "project-setup-7",
    content: "In the left navigation panel, click **Extension Marketplace**, then click the extension you want to activate."
  }, {
    heading: "project-setup-7",
    content: "You are now on the extension detail page."
  }, {
    heading: "project-setup-7",
    content: "Select a pricing plan and click **Buy and Activate**."
  }, {
    heading: "project-setup-7",
    content: "If you have already created an Agora project:"
  }, {
    heading: "project-setup-7",
    content: "The **Projects** section appears and lists all of your projects."
  }, {
    heading: "project-setup-7",
    content: "If you have not created an Agora project:"
  }, {
    heading: "project-setup-7",
    content: "Create a new project, the project appears in the **Projects** section."
  }, {
    heading: "project-setup-7",
    content: "Under **Projects** on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the **Action** column."
  }, {
    heading: "project-setup-7",
    content: "**Get the apiKey and apiSecret for the extension**"
  }, {
    heading: "project-setup-7",
    content: "If required for the extension, to get the extension apiKey and apiSecret, in the **Projects** extension detail page, click **View** in the **Secret** column."
  }, {
    heading: "project-setup-7",
    content: "Open your React-native project"
  }, {
    heading: "project-setup-7",
    content: "Load the SDK quickstart Video Calling project you created previously."
  }, {
    heading: "project-setup-7",
    content: "Get the extension"
  }, {
    heading: "project-setup-7",
    content: "Visit the Agora Extensions Marketplace and follow the procedure to download and install the desired extension."
  }, {
    heading: "project-setup-7",
    content: "You are now ready to integrate the extension in your app."
  }, {
    heading: "integrate-the-extension-into-your-project-7",
    content: "This section presents the framework code you add to your React Native project to integrate an extension."
  }, {
    heading: "implement-the-user-interface",
    content: "You can use a `switch` to enable and disable the extension you wish to integrate. To do this, follow these steps:"
  }, {
    heading: "implement-the-user-interface",
    content: "**Import the necessary modules**"
  }, {
    heading: "implement-the-user-interface",
    content: "Add the following import from `react-native` before `Text,`:"
  }, {
    heading: "implement-the-user-interface",
    content: "**Render the switch**"
  }, {
    heading: "implement-the-user-interface",
    content: "Add the following code in the return statement, after `Leave </Text>`:"
  }, {
    heading: "integrate-the-extension",
    content: "**Declarations for the extension**"
  }, {
    heading: "integrate-the-extension",
    content: "You can create constants for the extension provider and extension name that you need to integrate."
  }, {
    heading: "integrate-the-extension",
    content: "You also need a state variable to keep track of the status of your extension. Inside `App`, add the following code along with the other declarations:"
  }, {
    heading: "integrate-the-extension",
    content: "**Enable the extension**"
  }, {
    heading: "integrate-the-extension",
    content: "You call `enableExtension` to enable your extension. To do this using the `switch`, add the following code after the `leave` function:"
  }, {
    heading: "integrate-the-extension",
    content: "**Disable the extension**"
  }, {
    heading: "integrate-the-extension",
    content: "You call `disableExtension` to disable your extension. To do this using the `switch`, add the following code after the `enableExtension` function:"
  }, {
    heading: "integrate-the-extension",
    content: "**Add the necessary callbacks**"
  }, {
    heading: "integrate-the-extension",
    content: "To get notified of important events, add the following callbacks to `agoraEngine.registerEventHandler({`:"
  }, {
    heading: "test-your-implementation-7",
    content: "To ensure that you have integrated the extension in your app:"
  }, {
    heading: "test-your-implementation-7",
    content: "Run your app:"
  }, {
    heading: "test-your-implementation-7",
    content: "*Android*"
  }, {
    heading: "test-your-implementation-7",
    content: "Enable Developer options on your Android device, and then connect it to your computer using a USB cable."
  }, {
    heading: "test-your-implementation-7",
    content: "Run `npx react-native run-android` in the project root directory."
  }, {
    heading: "test-your-implementation-7",
    content: "*iOS:*"
  }, {
    heading: "test-your-implementation-7",
    content: "Run your app with Xcode."
  }, {
    heading: "test-your-implementation-7",
    content: "If this is the first time you run the project, you need to grant microphone and camera access to your app."
  }, {
    heading: "test-your-implementation-7",
    content: "Click Join to start a call."
  }, {
    heading: "test-your-implementation-7",
    content: "Join the same channel from another test device or the Agora web demo."
  }, {
    heading: "test-your-implementation-7",
    content: "Experience the features of your new extension."
  }, {
    heading: "reference-7",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference-7",
    content: "Extensions are add-ons designed to rapidly extend the functionality of your game. Extensions Marketplace is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning."
  }, {
    heading: "reference-7",
    content: "In the Agora Extensions Marketplace:"
  }, {
    heading: "reference-7",
    content: "Vendors create and publish extensions to provide functionality such as audio and video processing."
  }, {
    heading: "reference-7",
    content: "App developers use extensions to quickly implement fun and interactive functionality."
  }, {
    heading: "reference-7",
    content: "This page shows you how to integrate an extension from Agora Extensions Marketplace into your game. There can be specific guidance for each extension."
  }, {
    heading: "understand-the-tech-8",
    content: "An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
  }, {
    heading: "understand-the-tech-8",
    content: "**Extension call workflow**"
  }, {
    heading: "understand-the-tech-8",
    content: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline."
  }, {
    heading: "prerequisites-8",
    content: "To test the code used in this page you need to have:"
  }, {
    heading: "prerequisites-8",
    content: "An Agora account and project."
  }, {
    heading: "prerequisites-8",
    content: `A computer with Internet access.
Ensure that no firewall is blocking your network communication.`
  }, {
    heading: "prerequisites-8",
    content: "Implemented the SDK quickstart"
  }, {
    heading: "prerequisites-8",
    content: "Unity Hub"
  }, {
    heading: "prerequisites-8",
    content: "Unity Editor 2017.X LTS or higher"
  }, {
    heading: "prerequisites-8",
    content: "Microsoft Visual Studio 2017 or higher"
  }, {
    heading: "project-setup-8",
    content: "In order to integrate an extension into your project:"
  }, {
    heading: "project-setup-8",
    content: "**Activate an extension**"
  }, {
    heading: "project-setup-8",
    content: "Log in to Agora Console."
  }, {
    heading: "project-setup-8",
    content: "In the left navigation panel, click **Extension Marketplace**, then click the extension you want to activate."
  }, {
    heading: "project-setup-8",
    content: "You are now on the extension detail page."
  }, {
    heading: "project-setup-8",
    content: "Select a pricing plan and click **Buy and Activate**."
  }, {
    heading: "project-setup-8",
    content: "If you have already created an Agora project:"
  }, {
    heading: "project-setup-8",
    content: "The **Projects** section appears and lists all of your projects."
  }, {
    heading: "project-setup-8",
    content: "If you have not created an Agora project:"
  }, {
    heading: "project-setup-8",
    content: "Create a new project, the project appears in the **Projects** section."
  }, {
    heading: "project-setup-8",
    content: "Under **Projects** on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the **Action** column."
  }, {
    heading: "project-setup-8",
    content: "**Get the apiKey and apiSecret for the extension**"
  }, {
    heading: "project-setup-8",
    content: "If required for the extension, to get the extension apiKey and apiSecret, in the **Projects** extension detail page, click **View** in the **Secret** column."
  }, {
    heading: "project-setup-8",
    content: "Open your Unity project"
  }, {
    heading: "project-setup-8",
    content: "Load the SDK quickstart Video Calling project you created previously."
  }, {
    heading: "project-setup-8",
    content: "Get the extension"
  }, {
    heading: "project-setup-8",
    content: "Visit the Agora Extensions Marketplace and follow the procedure to download and install the desired extension."
  }, {
    heading: "project-setup-8",
    content: "You are now ready to integrate the extension in your game."
  }, {
    heading: "integrate-the-extension-into-your-project-8",
    content: "This section presents the framework code you add to your Unity project to integrate an extension."
  }, {
    heading: "integrate-the-extension-into-your-project-8",
    content: "**Load the extension provider**"
  }, {
    heading: "integrate-the-extension-into-your-project-8",
    content: "You call `loadExtensionProvider` during Agora Engine initialization to specify the extension library path. To do this, add the following code to the `SetupVideoSDKEngine` method after you initialize the engine with `RtcEngine.Initialize`:"
  }, {
    heading: "integrate-the-extension-into-your-project-8",
    content: "**Enable the extension**"
  }, {
    heading: "integrate-the-extension-into-your-project-8",
    content: "To enable the extension, add the following code to the `Join` method before `RtcEngine.EnableVideo();`:"
  }, {
    heading: "integrate-the-extension-into-your-project-8",
    content: "Extensions marketplace hosts both third-party extensions as well as those developed by Agora. To use an Agora extension, you do not need to call EnableExtension."
  }, {
    heading: "integrate-the-extension-into-your-project-8",
    content: "To enable multiple extensions, call `EnableExtension` for each extension. The calls to `EnableExtension` determines the order of each extension in the transmission pipeline. For example, if you enable extension A before extension B, RTC SDK processes data from extension A before extension B."
  }, {
    heading: "integrate-the-extension-into-your-project-8",
    content: "**Set extension properties**"
  }, {
    heading: "integrate-the-extension-into-your-project-8",
    content: "To customize the extension for your particular game, set suitable values for the extension properties. Refer to the extension documentation for a list of available property names and allowable values. To set a property, add the following code to the `Join` method after `RtcEngine.EnableExtension`:"
  }, {
    heading: "test-your-implementation-8",
    content: "To ensure that you have integrated the extension in your game:"
  }, {
    heading: "test-your-implementation-8",
    content: "Set the variables and properties in the project code to values suitable for your chosen extension."
  }, {
    heading: "test-your-implementation-8",
    content: "Generate a temporary token in Agora Console."
  }, {
    heading: "test-your-implementation-8",
    content: "In your browser, navigate to the Agora web demo and update *App ID*, *Channel*, and *Token* with the values for your temporary token, then click **Join**."
  }, {
    heading: "test-your-implementation-8",
    content: "In **Unity Editor**, in `Assets/Agora-RTC-Plugin/Agora-Unity-RTC-SDK/Code/JoinChannelVideo.cs`, update `_appID`, `_channelName`, and `_token` with the values for your temporary token."
  }, {
    heading: "test-your-implementation-8",
    content: "In **Unity Editor**, click **Play**. A moment later you see the game installed on your device."
  }, {
    heading: "test-your-implementation-8",
    content: "Click Join to start a call."
  }, {
    heading: "test-your-implementation-8",
    content: "Experience the features of your new extension."
  }, {
    heading: "reference-8",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-5",
    content: "`EnableExtension`"
  }, {
    heading: "api-reference-5",
    content: "`LoadExtensionProvider`"
  }, {
    heading: "api-reference-5",
    content: "`SetExtensionProperty`"
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
    id: "integrate-the-extension-into-your-project",
    content: "Integrate the extension into your project"
  }, {
    id: "test-your-implementation",
    content: "Test your implementation"
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
    id: "project-setup-1",
    content: "Project setup"
  }, {
    id: "integrate-the-extension-into-your-project-1",
    content: "Integrate the extension into your project"
  }, {
    id: "test-your-implementation-1",
    content: "Test your implementation"
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
    id: "integrate-the-extension-into-your-project-2",
    content: "Integrate the extension into your project"
  }, {
    id: "test-your-implementation-2",
    content: "Test your implementation"
  }, {
    id: "reference-2",
    content: "Reference"
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
    id: "integrate-the-extension-into-your-project-3",
    content: "Integrate the extension into your project"
  }, {
    id: "test-your-implementation-3",
    content: "Test your implementation"
  }, {
    id: "reference-3",
    content: "Reference"
  }, {
    id: "api-reference-1",
    content: "API reference"
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
    id: "integrate-the-extension-into-your-project-4",
    content: "Integrate the extension into your project"
  }, {
    id: "test-your-implementation-4",
    content: "Test your implementation"
  }, {
    id: "reference-4",
    content: "Reference"
  }, {
    id: "api-reference-2",
    content: "API reference"
  }, {
    id: "understand-the-tech-5",
    content: "Understand the tech"
  }, {
    id: "prerequisites-5",
    content: "Prerequisites"
  }, {
    id: "project-setup-5",
    content: "Project setup"
  }, {
    id: "integrate-the-extension-into-your-project-5",
    content: "Integrate the extension into your project"
  }, {
    id: "test-your-implementation-5",
    content: "Test your implementation"
  }, {
    id: "reference-5",
    content: "Reference"
  }, {
    id: "api-reference-3",
    content: "API reference"
  }, {
    id: "understand-the-tech-6",
    content: "Understand the tech"
  }, {
    id: "prerequisites-6",
    content: "Prerequisites"
  }, {
    id: "project-setup-6",
    content: "Project setup"
  }, {
    id: "integrate-the-extension-into-your-project-6",
    content: "Integrate the extension into your project"
  }, {
    id: "test-your-implementation-6",
    content: "Test your implementation"
  }, {
    id: "reference-6",
    content: "Reference"
  }, {
    id: "api-reference-4",
    content: "API reference"
  }, {
    id: "understand-the-tech-7",
    content: "Understand the tech"
  }, {
    id: "prerequisites-7",
    content: "Prerequisites"
  }, {
    id: "project-setup-7",
    content: "Project setup"
  }, {
    id: "integrate-the-extension-into-your-project-7",
    content: "Integrate the extension into your project"
  }, {
    id: "implement-the-user-interface",
    content: "Implement the user interface"
  }, {
    id: "integrate-the-extension",
    content: "Integrate the extension"
  }, {
    id: "test-your-implementation-7",
    content: "Test your implementation"
  }, {
    id: "reference-7",
    content: "Reference"
  }, {
    id: "understand-the-tech-8",
    content: "Understand the tech"
  }, {
    id: "prerequisites-8",
    content: "Prerequisites"
  }, {
    id: "project-setup-8",
    content: "Project setup"
  }, {
    id: "integrate-the-extension-into-your-project-8",
    content: "Integrate the extension into your project"
  }, {
    id: "test-your-implementation-8",
    content: "Test your implementation"
  }, {
    id: "reference-8",
    content: "Reference"
  }, {
    id: "api-reference-5",
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
  url: "#project-setup",
  title: _jsx(_Fragment, {
    children: "Project setup"
  })
}, {
  depth: 2,
  url: "#integrate-the-extension-into-your-project",
  title: _jsx(_Fragment, {
    children: "Integrate the extension into your project"
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
  url: "#project-setup-1",
  title: _jsx(_Fragment, {
    children: "Project setup"
  })
}, {
  depth: 2,
  url: "#integrate-the-extension-into-your-project-1",
  title: _jsx(_Fragment, {
    children: "Integrate the extension into your project"
  })
}, {
  depth: 2,
  url: "#test-your-implementation-1",
  title: _jsx(_Fragment, {
    children: "Test your implementation"
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
  url: "#integrate-the-extension-into-your-project-2",
  title: _jsx(_Fragment, {
    children: "Integrate the extension into your project"
  })
}, {
  depth: 2,
  url: "#test-your-implementation-2",
  title: _jsx(_Fragment, {
    children: "Test your implementation"
  })
}, {
  depth: 2,
  url: "#reference-2",
  title: _jsx(_Fragment, {
    children: "Reference"
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
  url: "#integrate-the-extension-into-your-project-3",
  title: _jsx(_Fragment, {
    children: "Integrate the extension into your project"
  })
}, {
  depth: 2,
  url: "#test-your-implementation-3",
  title: _jsx(_Fragment, {
    children: "Test your implementation"
  })
}, {
  depth: 2,
  url: "#reference-3",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference-1",
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
  url: "#project-setup-4",
  title: _jsx(_Fragment, {
    children: "Project setup"
  })
}, {
  depth: 2,
  url: "#integrate-the-extension-into-your-project-4",
  title: _jsx(_Fragment, {
    children: "Integrate the extension into your project"
  })
}, {
  depth: 2,
  url: "#test-your-implementation-4",
  title: _jsx(_Fragment, {
    children: "Test your implementation"
  })
}, {
  depth: 2,
  url: "#reference-4",
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
}, {
  depth: 2,
  url: "#integrate-the-extension-into-your-project-5",
  title: _jsx(_Fragment, {
    children: "Integrate the extension into your project"
  })
}, {
  depth: 2,
  url: "#test-your-implementation-5",
  title: _jsx(_Fragment, {
    children: "Test your implementation"
  })
}, {
  depth: 2,
  url: "#reference-5",
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
  url: "#understand-the-tech-6",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-6",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#project-setup-6",
  title: _jsx(_Fragment, {
    children: "Project setup"
  })
}, {
  depth: 2,
  url: "#integrate-the-extension-into-your-project-6",
  title: _jsx(_Fragment, {
    children: "Integrate the extension into your project"
  })
}, {
  depth: 2,
  url: "#test-your-implementation-6",
  title: _jsx(_Fragment, {
    children: "Test your implementation"
  })
}, {
  depth: 2,
  url: "#reference-6",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference-4",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-7",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-7",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#project-setup-7",
  title: _jsx(_Fragment, {
    children: "Project setup"
  })
}, {
  depth: 2,
  url: "#integrate-the-extension-into-your-project-7",
  title: _jsx(_Fragment, {
    children: "Integrate the extension into your project"
  })
}, {
  depth: 3,
  url: "#implement-the-user-interface",
  title: _jsx(_Fragment, {
    children: "Implement the user interface"
  })
}, {
  depth: 3,
  url: "#integrate-the-extension",
  title: _jsx(_Fragment, {
    children: "Integrate the extension"
  })
}, {
  depth: 2,
  url: "#test-your-implementation-7",
  title: _jsx(_Fragment, {
    children: "Test your implementation"
  })
}, {
  depth: 2,
  url: "#reference-7",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-8",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-8",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#project-setup-8",
  title: _jsx(_Fragment, {
    children: "Project setup"
  })
}, {
  depth: 2,
  url: "#integrate-the-extension-into-your-project-8",
  title: _jsx(_Fragment, {
    children: "Integrate the extension into your project"
  })
}, {
  depth: 2,
  url: "#test-your-implementation-8",
  title: _jsx(_Fragment, {
    children: "Test your implementation"
  })
}, {
  depth: 2,
  url: "#reference-8",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference-5",
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
  return _jsxs(_PlatformTabsGroup, {
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
      }), _jsxs(_components.p, {
        children: ["Extensions are add-ons designed to rapidly extend the functionality of your app. ", _jsx(_components.a, {
          href: "https://www.agora.io/en/agora-extensions-marketplace/",
          children: "Extensions Marketplace"
        }), " is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning."]
      }), _jsx(_components.p, {
        children: "In the Agora Extensions Marketplace:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Vendors create and publish extensions to provide functionality such as audio and video processing."
        }), `
`, _jsx(_components.li, {
          children: "App developers use extensions to quickly implement fun and interactive functionality."
        }), `
`]
      }), _jsx(_components.p, {
        children: "This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension."
      }), _jsx(_components.h2, {
        id: "understand-the-tech",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Extension call workflow"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/extension-callflow.svg",
          alt: "img"
        })
      }), _jsx(_components.p, {
        children: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline."
      }), _jsx(_components.h2, {
        id: "prerequisites",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "To test the code used in this page you need to have:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["An Agora ", _jsx(_components.a, {
              href: "/en/introduction/account",
              children: "account"
            }), " and ", _jsx(_components.a, {
              href: "/en/introduction/account",
              children: "project"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: `A computer with Internet access.
Ensure that no firewall is blocking your network communication.`
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Implemented the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "project-setup",
        children: "Project setup"
      }), _jsx(_components.p, {
        children: "In order to integrate an extension into your project:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Activate an extension"
            })
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Log in to ", _jsx(_components.a, {
                  href: "https://console.agora.io/v2",
                  children: "Agora Console"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In the left navigation panel, click ", _jsx(_components.strong, {
                  children: "Extension Marketplace"
                }), ", then click the extension you want to activate."]
              }), `
`, _jsx(_components.p, {
                children: "You are now on the extension detail page."
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Select a pricing plan and click ", _jsx(_components.strong, {
                  children: "Buy and Activate"
                }), "."]
              }), `
`, _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: "If you have already created an Agora project:"
                  }), `
`, _jsxs(_components.p, {
                    children: ["The ", _jsx(_components.strong, {
                      children: "Projects"
                    }), " section appears and lists all of your projects."]
                  }), `
`]
                }), `
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: "If you have not created an Agora project:"
                  }), `
`, _jsxs(_components.p, {
                    children: [_jsx(_components.a, {
                      href: "/en/introduction/account",
                      children: "Create a new project"
                    }), ", the project appears in the ", _jsx(_components.strong, {
                      children: "Projects"
                    }), " section."]
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Under ", _jsx(_components.strong, {
                  children: "Projects"
                }), " on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the ", _jsx(_components.strong, {
                  children: "Action"
                }), " column."]
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
              children: "Get the apiKey and apiSecret for the extension"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["If required for the extension, to get the extension apiKey and apiSecret, in the ", _jsx(_components.strong, {
              children: "Projects"
            }), " extension detail page, click ", _jsx(_components.strong, {
              children: "View"
            }), " in the ", _jsx(_components.strong, {
              children: "Secret"
            }), " column."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Download the extension"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["In the extension detail page, click ", _jsx(_components.strong, {
              children: "Download"
            }), ", then unzip the extension in a local directory."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Install the extension in your project"
            })
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Android Archive file (", _jsx(_components.code, {
                  children: ".aar"
                }), ")"]
              }), `
`, _jsxs(_components.ol, {
                children: [`
`, _jsxs(_components.li, {
                  children: [`
`, _jsxs(_components.p, {
                    children: ["Save the extension ", _jsx(_components.code, {
                      children: ".aar"
                    }), " file to ", _jsx(_components.code, {
                      children: "/app/libs"
                    }), " in your project."]
                  }), `
`]
                }), `
`, _jsxs(_components.li, {
                  children: [`
`, _jsxs(_components.p, {
                    children: ["In ", _jsx(_components.code, {
                      children: "/Gradle Scripts/build.gradle(Module: <ProjectName> app)"
                    }), ", add the following line under ", _jsx(_components.code, {
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
                            children: "(include"
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
                            children: "'*.jar'"
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
                            children: "'*.aar'"
                          }), _jsx(_components.span, {
                            style: {
                              "--shiki-light": "#24292E",
                              "--shiki-dark": "#E1E4E8"
                            },
                            children: "], dir"
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
                            children: " 'libs'"
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
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Shared Library (", _jsx(_components.code, {
                  children: ".so"
                }), ")"]
              }), `
`, _jsxs(_components.p, {
                children: ["Save the ", _jsx(_components.code, {
                  children: ".so"
                }), " file to the following paths in your project:"]
              }), `
`, _jsxs(_components.ol, {
                children: [`
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: _jsx(_components.code, {
                      children: "/app/src/main/jniLibs/arm64-v8a"
                    })
                  }), `
`]
                }), `
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: _jsx(_components.code, {
                      children: "/app/src/main/jniLibs/armeabi-v7a"
                    })
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
`]
      }), _jsx(_components.p, {
        children: "You are now ready to integrate the extension in your app."
      }), _jsx(_components.h2, {
        id: "integrate-the-extension-into-your-project",
        children: "Integrate the extension into your project"
      }), _jsx(_components.p, {
        children: `The watermark extension adds a watermark on video streamed to your local client. This section shows you how to implement the watermark extension
in your Agora project:`
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Import the necessary classes"
            })
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Download the ", _jsx(_components.a, {
                  href: "https://web-cdn.agora.io/docs-files/1630400262363",
                  children: "watermark extension"
                }), " and follow the steps for ", _jsx(_components.code, {
                  children: ".aar"
                }), " files in ", _jsx(_components.a, {
                  href: "#project-setup",
                  children: "setup"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In ", _jsx(_components.code, {
                  children: "app/src/main/java/com.example.<projectname>/MainActivity"
                }), ":"]
              }), `
`, _jsxs(_components.ol, {
                children: [`
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: "Add the following lines to import the Android classes used by the extension:"
                  }), `
`, _jsxs(CodeBlockTabs, {
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
                            children: [_jsxs(_components.span, {
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
                                children: " org.json.JSONException;"
                              })]
                            }), `
`, _jsxs(_components.span, {
                              className: "line",
                              children: [_jsx(_components.span, {
                                style: {
                                  "--shiki-light": "#D73A49",
                                  "--shiki-dark": "#F97583"
                                },
                                children: "    import"
                              }), _jsx(_components.span, {
                                style: {
                                  "--shiki-light": "#24292E",
                                  "--shiki-dark": "#E1E4E8"
                                },
                                children: " org.json.JSONObject;"
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
                            children: [_jsxs(_components.span, {
                              className: "line",
                              children: [_jsx(_components.span, {
                                style: {
                                  "--shiki-light": "#D73A49",
                                  "--shiki-dark": "#F97583"
                                },
                                children: "import"
                              }), _jsx(_components.span, {
                                style: {
                                  "--shiki-light": "#6F42C1",
                                  "--shiki-dark": "#B392F0"
                                },
                                children: " org.json.JSONException"
                              })]
                            }), `
`, _jsxs(_components.span, {
                              className: "line",
                              children: [_jsx(_components.span, {
                                style: {
                                  "--shiki-light": "#D73A49",
                                  "--shiki-dark": "#F97583"
                                },
                                children: "    import"
                              }), _jsx(_components.span, {
                                style: {
                                  "--shiki-light": "#6F42C1",
                                  "--shiki-dark": "#B392F0"
                                },
                                children: " org.json.JSONObject"
                              })]
                            })]
                          })
                        })
                      })
                    })]
                  }), `
`]
                }), `
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: "Add the following lines to import the Agora classes used by the extension:"
                  }), `
`, _jsxs(CodeBlockTabs, {
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
                                children: "// ExtensionManager is used to pass in basic info about the extension"
                              })
                            }), `
`, _jsxs(_components.span, {
                              className: "line",
                              children: [_jsx(_components.span, {
                                style: {
                                  "--shiki-light": "#D73A49",
                                  "--shiki-dark": "#F97583"
                                },
                                children: "    import"
                              }), _jsx(_components.span, {
                                style: {
                                  "--shiki-light": "#24292E",
                                  "--shiki-dark": "#E1E4E8"
                                },
                                children: " io.agora.extension.ExtensionManager;"
                              })]
                            }), `
`, _jsxs(_components.span, {
                              className: "line",
                              children: [_jsx(_components.span, {
                                style: {
                                  "--shiki-light": "#D73A49",
                                  "--shiki-dark": "#F97583"
                                },
                                children: "    import"
                              }), _jsx(_components.span, {
                                style: {
                                  "--shiki-light": "#24292E",
                                  "--shiki-dark": "#E1E4E8"
                                },
                                children: " io.agora.rtc2.IMediaExtensionObserver;"
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
                                children: "// ExtensionManager is used to pass in basic info about the extension"
                              })
                            }), `
`, _jsxs(_components.span, {
                              className: "line",
                              children: [_jsx(_components.span, {
                                style: {
                                  "--shiki-light": "#D73A49",
                                  "--shiki-dark": "#F97583"
                                },
                                children: "    import"
                              }), _jsx(_components.span, {
                                style: {
                                  "--shiki-light": "#6F42C1",
                                  "--shiki-dark": "#B392F0"
                                },
                                children: " io.agora.extension.ExtensionManager"
                              })]
                            }), `
`, _jsxs(_components.span, {
                              className: "line",
                              children: [_jsx(_components.span, {
                                style: {
                                  "--shiki-light": "#D73A49",
                                  "--shiki-dark": "#F97583"
                                },
                                children: "    import"
                              }), _jsx(_components.span, {
                                style: {
                                  "--shiki-light": "#6F42C1",
                                  "--shiki-dark": "#B392F0"
                                },
                                children: " io.agora.rtc2.IMediaExtensionObserver"
                              })]
                            })]
                          })
                        })
                      })
                    })]
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
            children: _jsx(_components.strong, {
              children: "Add the extension and register the event handler"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["In ", _jsx(_components.code, {
              children: "setupVideoSDKEngine"
            }), ", add the following code before ", _jsx(_components.code, {
              children: "agoraEngine = RtcEngine.create(config);"
            }), ":"]
          }), `
`, _jsxs(CodeBlockTabs, {
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
                    children: [_jsxs(_components.span, {
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
                        children: "(ExtensionManager.EXTENSION_NAME);"
                      })]
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "  // Register IMediaExtensionObserver to receive events from the extension."
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  config.mExtensionObserver "
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
                        children: " IMediaExtensionObserver"
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
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    @"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "Override"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "    public"
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
                        children: " onEvent"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(String "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: "vendor"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ", String "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: "extension"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ", String "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: "key"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ", String "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: "value"
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
                        children: "      // Add callback handling logics for extension events."
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "      showMessage"
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
                        children: '"Extension: "'
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " +"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " extension "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "+"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: ' "'
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: ' Key: "'
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " +"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " key "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "+"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: ' "'
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: 'Value:"'
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " +"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " value);"
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
                        children: "    @"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "Override"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "    public"
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
                        children: " onStarted"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(String "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: "provider"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ", String "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: "extension"
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
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "      showMessage"
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
                        children: '"Extension started"'
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
                        children: "    }"
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
                        children: "    @"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "Override"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "    public"
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
                        children: " onStopped"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(String "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: "provider"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ", String "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: "extension"
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
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "      showMessage"
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
                        children: '"Extension stopped"'
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
                        children: "    }"
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
                        children: "    @"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "Override"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "    public"
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
                        children: " onError"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(String "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: "provider"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ", String "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: "extension"
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
                        children: "int"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " error"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ", String "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: "message"
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
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "      showMessage"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(message);"
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
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  };"
                      })
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
                    children: [_jsxs(_components.span, {
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
                        children: "(ExtensionManager.EXTENSION_NAME)"
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
                        children: "  // Register IMediaExtensionObserver to receive events from the extension."
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  config.mExtensionObserver "
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
                        children: " object"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " : "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "IMediaExtensionObserver"
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
                        children: "    override"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " fun"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " onEvent"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(vendor: "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "String"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ", extension: "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "String"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ", key: "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "String"
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
                        children: "value"
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
                        children: "String"
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
                        children: "      // Add callback handling logics for extension events."
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "      showMessage"
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
                        children: '"Extension: '
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "$extension"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " Key: "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "$key"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: "Value: "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "$value"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: '"'
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ")"
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
                        children: "    override"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " fun"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " onStarted"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(provider: "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "String"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ", extension: "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "String"
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
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "      showMessage"
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
                        children: '"Extension started"'
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ")"
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
                        children: "    override"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " fun"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " onStopped"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(provider: "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "String"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ", extension: "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "String"
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
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "      showMessage"
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
                        children: '"Extension stopped"'
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ")"
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
                        children: "    override"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " fun"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " onError"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(provider: "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "String"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ", extension: "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "String"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ", error: "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "Int"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ", message: "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "String"
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
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "      showMessage"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(message)"
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
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  }"
                      })
                    })]
                  })
                })
              })
            })]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Enable the extension"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.code, {
              children: "enableExtension"
            }), " to enable the extension. To enable multiple extensions, call ", _jsx(_components.code, {
              children: "enableExtension"
            }), " as many times. The sequence of enabling multiple extensions determines the order of these extensions in the transmission pipeline. For example, if you enable extension A before extension B, extension A processes data from the SDK before extension B."]
          }), `
`, _jsxs(_components.p, {
            children: ["In ", _jsx(_components.code, {
              children: "setupVideoSDKEngine"
            }), ", add the following code before ", _jsx(_components.code, {
              children: "agoraEngine = RtcEngine.create(config);"
            }), ":"]
          }), `
`, _jsxs(CodeBlockTabs, {
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
                  children: _jsx(_components.code, {
                    children: _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "agoraEngine."
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
                        children: "(ExtensionManager.EXTENSION_VENDOR_NAME, ExtensionManager.EXTENSION_VIDEO_FILTER_NAME, "
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
                    children: [_jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "agoraEngine."
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
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    ExtensionManager.EXTENSION_VENDOR_NAME,"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    ExtensionManager.EXTENSION_VIDEO_FILTER_NAME,"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "    true"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  )"
                      })
                    })]
                  })
                })
              })
            })]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Set extension properties"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["In the ", _jsx(_components.code, {
              children: "joinChannel(View view)"
            }), " method, add the following code after ", _jsx(_components.code, {
              children: "agoraEngine.joinChannel"
            }), ":"]
          }), `
`, _jsxs(CodeBlockTabs, {
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
                    children: [_jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "JSONObject o "
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
                        children: "    // Pass in the key-value pairs defined by the extension provider to configure the feature you want to use."
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    o."
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
                        children: '"plugin.watermark.wmStr"'
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
                        children: '"Agora"'
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
                        children: "    o."
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
                        children: '"plugin.watermark.wmEffectEnabled"'
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
                        children: "true"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ");"
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
                        children: "    // Call setExtensionProperty to use the watermark feature."
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    agoraEngine."
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
                        children: "(ExtensionManager.EXTENSION_VENDOR_NAME,"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "        ExtensionManager.EXTENSION_VIDEO_FILTER_NAME, "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: '"key"'
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ", o."
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
                        children: "    e."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "printStackTrace"
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
                        children: " o "
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
                        children: " JSONObject"
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
                        children: "    // Pass in the key-value pairs defined by the extension provider to configure the feature you want to use."
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    o."
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
                        children: '"plugin.watermark.wmStr"'
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
                        children: '"Agora"'
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
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    o."
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
                        children: '"plugin.watermark.wmEffectEnabled"'
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
                        children: "true"
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
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "    // Call setExtensionProperty to use the watermark feature."
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    agoraEngine."
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
                        children: "      ExtensionManager.EXTENSION_VENDOR_NAME,"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "      ExtensionManager.EXTENSION_VIDEO_FILTER_NAME,"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: '      "key"'
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
                        children: "      o."
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
                        children: "    )"
                      })
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
                        children: " (e: "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "JSONException"
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
                        children: "    e."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "printStackTrace"
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
                        children: "  }"
                      })
                    })]
                  })
                })
              })
            })]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "test-your-implementation",
        children: "Test your implementation"
      }), _jsx(_components.p, {
        children: "To ensure that you have integrated the extension in your app:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Connect the Android device to the computer."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Click ", _jsx(_components.code, {
              children: "Run app"
            }), " on your Android Studio. A moment later you will see the project installed on your device."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["When the app launches, you can see yourself and the watermark ", _jsx(_components.code, {
              children: "Agora"
            }), " on the local view."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "reference",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_addextension",
              children: _jsx(_components.code, {
                children: "RtcEngineConfig.addExtension"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_enableextension",
              children: _jsx(_components.code, {
                children: "enableExtension"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_getextensionproperty",
              children: _jsx(_components.code, {
                children: "getExtensionProperty"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setextensionproperty",
              children: _jsx(_components.code, {
                children: "setExtensionProperty"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_imediaextensionobserver.html",
              children: _jsx(_components.code, {
                children: "IMediaExtensionObserver"
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
      }), _jsxs(_components.p, {
        children: ["Extensions are add-ons designed to rapidly extend the functionality of your app. ", _jsx(_components.a, {
          href: "https://www.agora.io/en/agora-extensions-marketplace/",
          children: "Extensions Marketplace"
        }), " is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning."]
      }), _jsx(_components.p, {
        children: "In the Agora Extensions Marketplace:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Vendors create and publish extensions to provide functionality such as audio and video processing."
        }), `
`, _jsx(_components.li, {
          children: "App developers use extensions to quickly implement fun and interactive functionality."
        }), `
`]
      }), _jsx(_components.p, {
        children: "This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-1",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Extension call workflow"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/extension-callflow.svg",
          alt: "img"
        })
      }), _jsx(_components.p, {
        children: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline."
      }), _jsx(_components.h2, {
        id: "prerequisites-1",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "To test the code used in this page you need to have:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["An Agora ", _jsx(_components.a, {
              href: "/en/introduction/account",
              children: "account"
            }), " and ", _jsx(_components.a, {
              href: "/en/introduction/account",
              children: "project"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: `A computer with Internet access.
Ensure that no firewall is blocking your network communication.`
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Implemented the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "project-setup-1",
        children: "Project setup"
      }), _jsx(_components.p, {
        children: "In order to integrate an extension into your project:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Activate an extension"
            })
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Log in to ", _jsx(_components.a, {
                  href: "https://console.agora.io/v2",
                  children: "Agora Console"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In the left navigation panel, click ", _jsx(_components.strong, {
                  children: "Extension Marketplace"
                }), ", then click the extension you want to activate."]
              }), `
`, _jsx(_components.p, {
                children: "You are now on the extension detail page."
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Select a pricing plan and click ", _jsx(_components.strong, {
                  children: "Buy and Activate"
                }), "."]
              }), `
`, _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: "If you have already created an Agora project:"
                  }), `
`, _jsxs(_components.p, {
                    children: ["The ", _jsx(_components.strong, {
                      children: "Projects"
                    }), " section appears and lists all of your projects."]
                  }), `
`]
                }), `
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: "If you have not created an Agora project:"
                  }), `
`, _jsxs(_components.p, {
                    children: [_jsx(_components.a, {
                      href: "/en/introduction/account",
                      children: "Create a new project"
                    }), ", the project appears in the ", _jsx(_components.strong, {
                      children: "Projects"
                    }), " section."]
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Under ", _jsx(_components.strong, {
                  children: "Projects"
                }), " on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the ", _jsx(_components.strong, {
                  children: "Action"
                }), " column."]
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
              children: "Get the apiKey and apiSecret for the extension"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["If required for the extension, to get the extension apiKey and apiSecret, in the ", _jsx(_components.strong, {
              children: "Projects"
            }), " extension detail page, click ", _jsx(_components.strong, {
              children: "View"
            }), " in the ", _jsx(_components.strong, {
              children: "Secret"
            }), " column."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Download the extension"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["In the extension detail page, click ", _jsx(_components.strong, {
              children: "Download"
            }), ", then unzip the extension in a local directory."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Install the extension in your project"
            })
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Save the extension ", _jsx(_components.code, {
                  children: ".framework"
                }), " or ", _jsx(_components.code, {
                  children: ".xcframwork"
                }), " files to your project folder."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In Xcode, open your project and select your target. Go to ", _jsx(_components.strong, {
                  children: "General"
                }), " > ", _jsx(_components.strong, {
                  children: "Frameworks, Libraries, and Embedded Content"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Click ", _jsx(_components.strong, {
                  children: "+"
                }), " > ", _jsx(_components.strong, {
                  children: "Add Other…"
                }), " > ", _jsx(_components.strong, {
                  children: "Add Files"
                }), " and select the ", _jsx(_components.code, {
                  children: ".framework"
                }), " or ", _jsx(_components.code, {
                  children: ".xcframwork"
                }), " files you saved earlier."]
              }), `
`]
            }), `
`]
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "You are now ready to integrate the extension in your app."
      }), _jsx(_components.h2, {
        id: "integrate-the-extension-into-your-project-1",
        children: "Integrate the extension into your project"
      }), _jsx(_components.p, {
        children: "To use an extension in your Agora project:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The implementation procedure varies according to extensions. Each extension vendor provides their own implementation guides, which is validated by Agora before the official release of the extension."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["To implement the extension in your project, go to the detail page of the extension on ", _jsx(_components.a, {
              href: "https://console.agora.io/v2",
              children: "Agora Console"
            }), ", click ", _jsx(_components.strong, {
              children: "Implementation guides"
            }), ", and follow the steps on the page."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "test-your-implementation-1",
        children: "Test your implementation"
      }), _jsx(_components.p, {
        children: "To ensure that you have integrated the extension in your app:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Connect a device to the computer."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In Xcode, Click ", _jsx(_components.code, {
              children: "Run"
            }), ". A moment later you will see the project installed on your device."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Connect to a channel and test your effect."
          }), `
`]
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["Agora provides an open-source sample project ", _jsx(_components.a, {
          href: "https://github.com/AgoraIO/API-Examples/tree/main/iOS/APIExample/SimpleFilter",
          children: "SimpleFilter"
        }), " on GitHub for your reference."]
      }), _jsx(_components.h2, {
        id: "reference-1",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
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
        children: ["Extensions are add-ons designed to rapidly extend the functionality of your app. ", _jsx(_components.a, {
          href: "https://www.agora.io/en/agora-extensions-marketplace/",
          children: "Extensions Marketplace"
        }), " is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning."]
      }), _jsx(_components.p, {
        children: "In the Agora Extensions Marketplace:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Vendors create and publish extensions to provide functionality such as audio and video processing."
        }), `
`, _jsx(_components.li, {
          children: "App developers use extensions to quickly implement fun and interactive functionality."
        }), `
`]
      }), _jsx(_components.p, {
        children: "This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-2",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Extension call workflow"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/extension-callflow.svg",
          alt: "img"
        })
      }), _jsx(_components.p, {
        children: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline."
      }), _jsx(_components.h2, {
        id: "prerequisites-2",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "To test the code used in this page you need to have:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["An Agora ", _jsx(_components.a, {
              href: "/en/introduction/account",
              children: "account"
            }), " and ", _jsx(_components.a, {
              href: "/en/introduction/account",
              children: "project"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: `A computer with Internet access.
Ensure that no firewall is blocking your network communication.`
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Implemented the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "project-setup-2",
        children: "Project setup"
      }), _jsx(_components.p, {
        children: "In order to integrate an extension into your project:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Activate an extension"
            })
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Log in to ", _jsx(_components.a, {
                  href: "https://console.agora.io/v2",
                  children: "Agora Console"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In the left navigation panel, click ", _jsx(_components.strong, {
                  children: "Extension Marketplace"
                }), ", then click the extension you want to activate."]
              }), `
`, _jsx(_components.p, {
                children: "You are now on the extension detail page."
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Select a pricing plan and click ", _jsx(_components.strong, {
                  children: "Buy and Activate"
                }), "."]
              }), `
`, _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: "If you have already created an Agora project:"
                  }), `
`, _jsxs(_components.p, {
                    children: ["The ", _jsx(_components.strong, {
                      children: "Projects"
                    }), " section appears and lists all of your projects."]
                  }), `
`]
                }), `
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: "If you have not created an Agora project:"
                  }), `
`, _jsxs(_components.p, {
                    children: [_jsx(_components.a, {
                      href: "/en/introduction/account",
                      children: "Create a new project"
                    }), ", the project appears in the ", _jsx(_components.strong, {
                      children: "Projects"
                    }), " section."]
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Under ", _jsx(_components.strong, {
                  children: "Projects"
                }), " on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the ", _jsx(_components.strong, {
                  children: "Action"
                }), " column."]
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
              children: "Get the apiKey and apiSecret for the extension"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["If required for the extension, to get the extension apiKey and apiSecret, in the ", _jsx(_components.strong, {
              children: "Projects"
            }), " extension detail page, click ", _jsx(_components.strong, {
              children: "View"
            }), " in the ", _jsx(_components.strong, {
              children: "Secret"
            }), " column."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Download the extension"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["In the extension detail page, click ", _jsx(_components.strong, {
              children: "Download"
            }), ", then unzip the extension in a local directory."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Install the extension in your project"
            })
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Save the extension ", _jsx(_components.code, {
                  children: ".framework"
                }), " or ", _jsx(_components.code, {
                  children: ".xcframwork"
                }), " files to your project folder."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In Xcode, open your project and select your target. Go to ", _jsx(_components.strong, {
                  children: "General"
                }), " > ", _jsx(_components.strong, {
                  children: "Frameworks, Libraries, and Embedded Content"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Click ", _jsx(_components.strong, {
                  children: "+"
                }), " > ", _jsx(_components.strong, {
                  children: "Add Other…"
                }), " > ", _jsx(_components.strong, {
                  children: "Add Files"
                }), " and select the ", _jsx(_components.code, {
                  children: ".framework"
                }), " or ", _jsx(_components.code, {
                  children: ".xcframwork"
                }), " files you saved earlier."]
              }), `
`]
            }), `
`]
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "You are now ready to integrate the extension in your app."
      }), _jsx(_components.h2, {
        id: "integrate-the-extension-into-your-project-2",
        children: "Integrate the extension into your project"
      }), _jsx(_components.p, {
        children: "To use an extension in your Agora project:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The implementation procedure varies according to extensions. Each extension vendor provides their own implementation guides, which is validated by Agora before the official release of the extension."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["To implement the extension in your project, go to the detail page of the extension on ", _jsx(_components.a, {
              href: "https://console.agora.io/v2",
              children: "Agora Console"
            }), ", click ", _jsx(_components.strong, {
              children: "Implementation guides"
            }), ", and follow the steps on the page."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "test-your-implementation-2",
        children: "Test your implementation"
      }), _jsx(_components.p, {
        children: "To ensure that you have integrated the extension in your app:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In Xcode, Click ", _jsx(_components.code, {
              children: "Run"
            }), ". A moment later you will see the project installed on your device."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Connect to a channel and test your effect."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "reference-2",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
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
        children: ["Extensions are add-ons designed to rapidly extend the functionality of your app. ", _jsx(_components.a, {
          href: "https://www.agora.io/en/agora-extensions-marketplace/",
          children: "Extensions Marketplace"
        }), " is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning."]
      }), _jsx(_components.p, {
        children: "In the Agora Extensions Marketplace:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Vendors create and publish extensions to provide functionality such as audio and video processing."
        }), `
`, _jsx(_components.li, {
          children: "App developers use extensions to quickly implement fun and interactive functionality."
        }), `
`]
      }), _jsx(_components.p, {
        children: "This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-3",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Extension call workflow"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/extension-callflow.svg",
          alt: "img"
        })
      }), _jsx(_components.p, {
        children: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline."
      }), _jsx(_components.h2, {
        id: "prerequisites-3",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "To test the code used in this page you need to have:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["An Agora ", _jsx(_components.a, {
              href: "/en/introduction/account",
              children: "account"
            }), " and ", _jsx(_components.a, {
              href: "/en/introduction/account",
              children: "project"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: `A computer with Internet access.
Ensure that no firewall is blocking your network communication.`
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Implemented the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["A ", _jsx(_components.a, {
              href: "../../reference/supported-platforms.md",
              children: "supported browser"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Physical media input devices, such as a camera and a microphone."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["A JavaScript package manager such as ", _jsx(_components.a, {
              href: "https://www.npmjs.com/package/npm",
              children: "npm"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "project-setup-3",
        children: "Project setup"
      }), _jsx(_components.p, {
        children: "In order to integrate an extension into your project:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Activate an extension"
            })
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Log in to ", _jsx(_components.a, {
                  href: "https://console.agora.io/v2",
                  children: "Agora Console"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In the left navigation panel, click ", _jsx(_components.strong, {
                  children: "Extension Marketplace"
                }), ", then click the extension you want to activate."]
              }), `
`, _jsx(_components.p, {
                children: "You are now on the extension detail page."
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Select a pricing plan and click ", _jsx(_components.strong, {
                  children: "Buy and Activate"
                }), "."]
              }), `
`, _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: "If you have already created an Agora project:"
                  }), `
`, _jsxs(_components.p, {
                    children: ["The ", _jsx(_components.strong, {
                      children: "Projects"
                    }), " section appears and lists all of your projects."]
                  }), `
`]
                }), `
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: "If you have not created an Agora project:"
                  }), `
`, _jsxs(_components.p, {
                    children: [_jsx(_components.a, {
                      href: "/en/introduction/account",
                      children: "Create a new project"
                    }), ", the project appears in the ", _jsx(_components.strong, {
                      children: "Projects"
                    }), " section."]
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Under ", _jsx(_components.strong, {
                  children: "Projects"
                }), " on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the ", _jsx(_components.strong, {
                  children: "Action"
                }), " column."]
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
              children: "Get the apiKey and apiSecret for the extension"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["If required for the extension, to get the extension apiKey and apiSecret, in the ", _jsx(_components.strong, {
              children: "Projects"
            }), " extension detail page, click ", _jsx(_components.strong, {
              children: "View"
            }), " in the ", _jsx(_components.strong, {
              children: "Secret"
            }), " column."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Download the extension"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["In the extension detail page, click ", _jsx(_components.strong, {
              children: "Download"
            }), ", you are taken to the npm page for the extension."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Install the extension in your project"
            })
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In the extension npm page, copy the ", _jsx(_components.strong, {
                  children: "Install"
                }), " command."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "In the root of your project, install the extension package. For example, for AI Noise Suppression:"
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
                        children: " i"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " agora-extension-ai-denoiser"
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
      }), _jsx(_components.p, {
        children: "You are now ready to integrate the extension in your app."
      }), _jsx(_components.h2, {
        id: "integrate-the-extension-into-your-project-3",
        children: "Integrate the extension into your project"
      }), _jsx(_components.p, {
        children: "To use an extension in your Agora project:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The implementation procedure varies according to extensions. Each extension vendor provides their own implementation guides, which is validated by Agora before the official release of the extension."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["To implement the extension in your project, go to the detail page of the extension on ", _jsx(_components.a, {
              href: "https://console.agora.io/v2/extensions-marketplace",
              children: "Extensions Marketplace"
            }), ", click ", _jsx(_components.strong, {
              children: "Implementation guides"
            }), ", and follow the steps on the page."]
          }), `
`]
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["To learn how to use a Web extension, see ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/build/enhance-the-audio-experience/ai-noise-suppression",
          children: "AI Noise Suppression"
        }), "."]
      }), _jsx(_components.h2, {
        id: "test-your-implementation-3",
        children: "Test your implementation"
      }), _jsx(_components.p, {
        children: "To ensure that you have integrated the extension in your app:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.a, {
              href: "/en/introduction/account",
              children: "Generate a temporary token"
            }), " in Agora Console."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In your browser, navigate to the ", _jsx(_components.a, {
              href: "https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html",
              children: "Agora web demo"
            }), " and update ", _jsx(_components.em, {
              children: "App ID"
            }), ", ", _jsx(_components.em, {
              children: "Channel"
            }), ", and ", _jsx(_components.em, {
              children: "Token"
            }), " with the values for your temporary token, then click ", _jsx(_components.strong, {
              children: "Join"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In ", _jsx(_components.strong, {
              children: "main.js"
            }), ", update ", _jsx(_components.code, {
              children: "appID"
            }), ", ", _jsx(_components.code, {
              children: "channel"
            }), " and ", _jsx(_components.code, {
              children: "token"
            }), " with your values."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Start the dev server"
          }), `
`, _jsx(_components.p, {
            children: "Execute the following command in the terminal:"
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
            children: "Use the URL displayed in the terminal to open the app in your browser."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Try out the extension that you have integrated."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "reference-3",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference-1",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(Link, {
            to: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#registerextensions",
            children: _jsx(_components.code, {
              children: "AgoraRTC.registerExtensions"
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
      }), _jsxs(_components.p, {
        children: ["Extensions are add-ons designed to rapidly extend the functionality of your app. ", _jsx(_components.a, {
          href: "https://www.agora.io/en/agora-extensions-marketplace/",
          children: "Extensions Marketplace"
        }), " is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning."]
      }), _jsx(_components.p, {
        children: "In the Agora Extensions Marketplace:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Vendors create and publish extensions to provide functionality such as audio and video processing."
        }), `
`, _jsx(_components.li, {
          children: "App developers use extensions to quickly implement fun and interactive functionality."
        }), `
`]
      }), _jsx(_components.p, {
        children: "This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-4",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Extension call workflow"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/extension-callflow.svg",
          alt: "img"
        })
      }), _jsx(_components.p, {
        children: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline."
      }), _jsx(_components.h2, {
        id: "prerequisites-4",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "To test the code used in this page you need to have:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["An Agora ", _jsx(_components.a, {
              href: "/en/introduction/account",
              children: "account"
            }), " and ", _jsx(_components.a, {
              href: "/en/introduction/account",
              children: "project"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: `A computer with Internet access.
Ensure that no firewall is blocking your network communication.`
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Same setup as the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "RTC SDK quickstart prerequisites"
            }), " for Video Calling."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "project-setup-4",
        children: "Project setup"
      }), _jsx(_components.p, {
        children: "In order to integrate an extension into your project:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Activate an extension"
            })
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Log in to ", _jsx(_components.a, {
                  href: "https://console.agora.io/v2",
                  children: "Agora Console"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In the left navigation panel, click ", _jsx(_components.strong, {
                  children: "Extension Marketplace"
                }), ", then click the extension you want to activate."]
              }), `
`, _jsx(_components.p, {
                children: "You are now on the extension detail page."
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Select a pricing plan and click ", _jsx(_components.strong, {
                  children: "Buy and Activate"
                }), "."]
              }), `
`, _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: "If you have already created an Agora project:"
                  }), `
`, _jsxs(_components.p, {
                    children: ["The ", _jsx(_components.strong, {
                      children: "Projects"
                    }), " section appears and lists all of your projects."]
                  }), `
`]
                }), `
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: "If you have not created an Agora project:"
                  }), `
`, _jsxs(_components.p, {
                    children: [_jsx(_components.a, {
                      href: "/en/introduction/account",
                      children: "Create a new project"
                    }), ", the project appears in the ", _jsx(_components.strong, {
                      children: "Projects"
                    }), " section."]
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Under ", _jsx(_components.strong, {
                  children: "Projects"
                }), " on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the ", _jsx(_components.strong, {
                  children: "Action"
                }), " column."]
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
              children: "Get the apiKey and apiSecret for the extension"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["If required for the extension, to get the extension apiKey and apiSecret, in the ", _jsx(_components.strong, {
              children: "Projects"
            }), " extension detail page, click ", _jsx(_components.strong, {
              children: "View"
            }), " in the ", _jsx(_components.strong, {
              children: "Secret"
            }), " column."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Download the extension"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["In the extension detail page, click ", _jsx(_components.strong, {
              children: "Download"
            }), ", then unzip the extension in a local directory."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Install the extension in your project"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["Add the extension ", _jsx(_components.code, {
              children: ".dll"
            }), " to your project."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "You are now ready to integrate the extension in your app."
      }), _jsx(_components.h2, {
        id: "integrate-the-extension-into-your-project-4",
        children: "Integrate the extension into your project"
      }), _jsx(_components.p, {
        children: "Integrating an extension into your project involves a few important steps to ensure seamless interaction between the extension and Agora RTC SDK. Each of these steps plays a crucial role to ensure that the extension works correctly and efficiently within your Agora project:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Define variables to integrate an extension with Agora RTC SDK"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["In ", _jsx(_components.code, {
              children: "AgoraImplementationDlg.h"
            }), ", add the following declarations to the ", _jsx(_components.code, {
              children: "CAgoraImplementationDlg"
            }), " class before ", _jsx(_components.code, {
              children: "setupVideoSDKEngine();"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// File path to the dynamic library (.dll file on Windows) that contains the implementation of the extension provider."
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " char*"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " extensionLibrarayPath "
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
                    children: ' "<extension dynamic library path and name>"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ";"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: ' // For example : "/ library / libagora_segmentation_extension.dll"'
                  })]
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " char"
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
                    children: " extensionProvider "
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
                    children: ' "<extension library path and name>"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ";"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: ' // For example : "agora.io";'
                  })]
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " char*"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " extensionName "
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
                    children: ' "<extension name>"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ";"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: ' // For example : "libagora_segmentation_extension.dll";'
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
                    children: "// The key is a string that identifies a specific property of the extension,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// and value is the new value for that property."
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// What these keys are and what values they can take is entirely up to the extension."
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: '// For example, an extension might have a property that controls the quality of a video stream, with a key named "videoQuality".'
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: '// To set this property to "high", you would call setExtensionProperty() with "videoQuality" as the key and "high" as the value.'
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " char*"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " extensionKey "
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
                    children: ' "<name of the extension property you want to set>"'
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
                    children: "const"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " char*"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " extensionValue "
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
                    children: ' "<new value of the property>"'
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
                    children: "// When using methods that take a MEDIA_SOURCE_TYPE parameter, you would specify the value that corresponds to the type of media source"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: '// you want the method to operate on. For example, if you want to use the second camera to capture video, set this parameter to "SECONDARY_CAMERA_SOURCE".'
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// The default value is UNKNOWN_MEDIA_SOURCE."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
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
                    children: "media"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "::MEDIA_SOURCE_TYPE extensionMediaType "
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
                    children: " agora"
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
                    children: "media"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "::UNKNOWN_MEDIA_SOURCE;"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: " // insert the media souce type as per your context"
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
            children: _jsxs(_components.strong, {
              children: ["Register extension callbacks to the ", _jsx(_components.code, {
                children: "IRtcEngineEventHandler"
              }), " event handler"]
            })
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In ", _jsx(_components.code, {
                  children: "AgoraImplementationDlg.h"
                }), ", add the following declarations to the ", _jsx(_components.code, {
                  children: "AgoraEventHandler"
                }), " class after ", _jsx(_components.code, {
                  children: "onLeaveChannel"
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
                  icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                  children: _jsxs(_components.code, {
                    children: [_jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "virtual"
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
                        children: " onExtensionEvent"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "("
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " char*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " provider"
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
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " char*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " extension"
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
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " char*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " key"
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
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " char*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " value"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ")"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "override"
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
                        children: "virtual"
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
                        children: " onExtensionStopped"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "("
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " char*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " provider"
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
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " char*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " extension"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ")"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "override"
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
                        children: "virtual"
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
                        children: " onExtensionStarted"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "("
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " char*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " provider"
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
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " char*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " extension"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ")"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "override"
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
                        children: "virtual"
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
                        children: " onExtensionError"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "("
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " char*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " provider"
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
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " char*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " extension"
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
                        children: "int"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " error"
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
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " char*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " errorMessage"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ")"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "override"
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
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Define these callbacks in ", _jsx(_components.code, {
                  children: "AgoraImplementationDlg.cpp"
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
                  icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                  children: _jsxs(_components.code, {
                    children: [_jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "// Extension Callbacks"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "void"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " AgoraEventHandler"
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
                        children: "onExtensionEvent"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "("
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " char*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " provider"
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
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " char*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " extension"
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
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " char*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " key"
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
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " char*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " value"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ")"
                      })]
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "{"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "  // Handle the event"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  CString "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "extension_provider"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(provider);"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  CString "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "extension_name"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(extension);"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  CString "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "extension_key"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(key);"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  CString "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "extension_value"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(value);"
                      })]
                    }), `
`, _jsx(_components.span, {
                      className: "line"
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  CString message;"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  message."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "Format"
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
                        children: "_T"
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
                        children: '"Extension Provider: '
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "%s\\n"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: "Extension Name: "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "%s\\n"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: "Key: "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "%s\\n"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: "Value: "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "%s\\n"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: ' is enabled to run."'
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "), extension_provider, extension_name);"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "  AfxMessageBox"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(message);"
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
                        children: "void"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " AgoraEventHandler"
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
                        children: "onExtensionStopped"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "("
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " char*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " provider"
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
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " char*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " extension"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ")"
                      })]
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "{"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "  AfxMessageBox"
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
                        children: 'L"Extension stopped."'
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
                        children: "void"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " AgoraEventHandler"
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
                        children: "onExtensionStarted"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "("
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " char*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " provider"
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
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " char*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " extension"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ")"
                      })]
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "{"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "  AfxMessageBox"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(Extension started);"
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
                        children: "void"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " AgoraEventHandler"
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
                        children: "onExtensionError"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "("
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " char*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " provider"
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
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " char*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " extension"
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
                        children: "int"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " error"
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
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " char*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " errorMessage"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ")"
                      })]
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "{"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "  // Handle the error event"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  CString "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "error_message"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(errorMessage);"
                      })]
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  CString message;"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  message."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "Format"
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
                        children: "_T"
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
                        children: '"Error: '
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "%s\\n"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " with error code "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "%d"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: '"'
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "), error_message, error);"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "  AfxMessageBox"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(message);"
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
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Enable the extension and set the extension properties"
            })
          }), `
`, _jsx(_components.p, {
            children: "To use the extension you downloaded in your app:"
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsx(_components.li, {
              children: "Load the extension."
            }), `
`, _jsx(_components.li, {
              children: "Register the extension."
            }), `
`, _jsx(_components.li, {
              children: "Enable the extension."
            }), `
`, _jsx(_components.li, {
              children: "Set the extension property."
            }), `
`]
          }), `
`, _jsx(_components.p, {
            children: "To accomplish these tasks, do the following:"
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In ", _jsx(_components.code, {
                  children: "AgoraImplementationDlg.h"
                }), ", declare ", _jsx(_components.code, {
                  children: "setupMarketExtension()"
                }), " before ", _jsx(_components.code, {
                  children: "setupVideoSDKEngine();"
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
                  icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                  children: _jsxs(_components.code, {
                    children: [_jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "// Function to load, register and enable the extension. Here you also set the extension propertties for your specific extension"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "void"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " setupMarketExtension"
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
                        children: "IRtcEngine"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " agoraEngine"
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
`, _jsxs(_components.p, {
                children: ["In ", _jsx(_components.code, {
                  children: "AgoraImplementationDlg.cpp"
                }), ", put the following in the ", _jsx(_components.code, {
                  children: "setupVideoSDKEngine"
                }), ` function just after
initializing Agora Engine `, _jsx(_components.code, {
                  children: "agoraEngine->initialize(context);"
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
                  icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                  children: _jsxs(_components.code, {
                    children: [_jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "// Integrate extension to the Agora SDK."
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "setupMarketExtension"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(agoraEngine);"
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
                children: ["Define ", _jsx(_components.code, {
                  children: "setupMarketExtension()"
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
                  icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                  children: _jsxs(_components.code, {
                    children: [_jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "void"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " CAgoraImplementationDlg"
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
                        children: "setupMarketExtension"
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
                        children: "IRtcEngine"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " agoraEngine"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ")"
                      })]
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "{"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "  // Load the extension with the file path to the dynamic library (.dll file on Windows) and a boolean flag 'unload_after_use' is true here mean"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "  // unload the dynamic library after it has been used."
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  agoraEngine->"
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
                        children: "(extensionLibrarayPath,"
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
                        children: "  // Register the extension"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  agoraEngine->"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "registerExtension"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(extensionProvider, extensionName, extensionMediaType);"
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
                        children: "  // Enable the extension"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  agoraEngine->"
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
                        children: "(extensionProvider, extensionName, "
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
                        children: ", extensionMediaType);"
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
                        children: "  // Set Extension property. The extension key and extension value would be specific to the extension you are using."
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "  // This function is used to set the value of a specific property of an extension"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  agoraEngine->"
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
                        children: "(extensionProvider, extensionName, extensionKey, extensionValue, extensionMediaType);"
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
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Disable the extension before closing the application"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["You must unload and disable all extensions before the app closes. As you set ", _jsx(_components.code, {
              children: "unload_after_use"
            }), ` to
`, _jsx(_components.code, {
              children: "true"
            }), " in ", _jsx(_components.code, {
              children: "loadExtensionProvider()"
            }), `, the extension dynamic link library unloads automatically after it has
been used. You disable the extension to prevent any potential memory leaks or unanticipated
effects. To do this, put the following in `, _jsx(_components.code, {
              children: "OnClose()"
            }), " before ", _jsx(_components.code, {
              children: "agoraEngine->release();"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Disable extension by making 'eanbled' flag as false ."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "agoraEngine->"
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
                    children: "(extensionProvider, extensionName, "
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
                })]
              })
            })
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "test-your-implementation-4",
        children: "Test your implementation"
      }), _jsx(_components.p, {
        children: "To ensure that you have integrated the extension in your app:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.a, {
              href: "/en/introduction/account",
              children: "Generate a temporary token"
            }), " in Agora Console ."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In your browser, navigate to the ", _jsx(_components.a, {
              href: "https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html",
              children: "Agora web demo"
            }), " and update ", _jsx(_components.em, {
              children: "App ID"
            }), ", ", _jsx(_components.em, {
              children: "Channel"
            }), ", and ", _jsx(_components.em, {
              children: "Token"
            }), " with the values for your temporary token, then click ", _jsx(_components.strong, {
              children: "Join"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In ", _jsx(_components.code, {
              children: "CAgoraImplementationDlg.h"
            }), ", update ", _jsx(_components.code, {
              children: "appId"
            }), ", ", _jsx(_components.code, {
              children: "channelName"
            }), " and ", _jsx(_components.code, {
              children: "token"
            }), " with the values for your temporary token."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Set the values for variables and properties in the framework code for your extension in use."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In Visual Studio, click ", _jsx(_components.strong, {
              children: "Local Windows Debugger"
            }), ". A moment later you see the project running on your development device."]
          }), `
`, _jsx(_components.p, {
            children: "If this is the first time you run the project, you need to grant microphone and camera access to your app."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Experience the features of your new extension."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "reference-4",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference-2",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_loadextensionprovider",
              children: _jsx(_components.code, {
                children: "loadExtensionProvider"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_registerextension",
              children: _jsx(_components.code, {
                children: "registerExtension"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_enableextension",
              children: _jsx(_components.code, {
                children: "enableExtension"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setextensionproperty",
              children: _jsx(_components.code, {
                children: "setExtensionProperty"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/enum_mediasourcetype.html",
              children: _jsx(_components.code, {
                children: "MEDIA_SOURCE_TYPE"
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
      }), _jsxs(_components.p, {
        children: ["Extensions are add-ons designed to rapidly extend the functionality of your app. ", _jsx(_components.a, {
          href: "https://www.agora.io/en/agora-extensions-marketplace/",
          children: "Extensions Marketplace"
        }), " is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning."]
      }), _jsx(_components.p, {
        children: "In the Agora Extensions Marketplace:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Vendors create and publish extensions to provide functionality such as audio and video processing."
        }), `
`, _jsx(_components.li, {
          children: "App developers use extensions to quickly implement fun and interactive functionality."
        }), `
`]
      }), _jsx(_components.p, {
        children: "This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-5",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Extension call workflow"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/extension-callflow.svg",
          alt: "img"
        })
      }), _jsx(_components.p, {
        children: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline."
      }), _jsx(_components.h2, {
        id: "prerequisites-5",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "To test the code used in this page you need to have:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["An Agora ", _jsx(_components.a, {
            href: "/en/introduction/account",
            children: "account"
          }), " and ", _jsx(_components.a, {
            href: "/en/introduction/account",
            children: "project"
          }), "."]
        }), `
`, _jsx(_components.li, {
          children: `A computer with Internet access.
Ensure that no firewall is blocking your network communication.`
        }), `
`]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Physical media input devices, such as a camera and a microphone."
        }), `
`, _jsxs(_components.li, {
          children: ["A JavaScript package manager such as ", _jsx(_components.a, {
            href: "https://www.npmjs.com/package/npm",
            children: "npm"
          }), "."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "project-setup-5",
        children: "Project setup"
      }), _jsx(_components.p, {
        children: "In order to integrate an extension into your project:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Activate an extension"
            })
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Log in to ", _jsx(_components.a, {
                  href: "https://console.agora.io/v2",
                  children: "Agora Console"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In the left navigation panel, click ", _jsx(_components.strong, {
                  children: "Extension Marketplace"
                }), ", then click the extension you want to activate."]
              }), `
`, _jsx(_components.p, {
                children: "You are now on the extension detail page."
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Select a pricing plan and click ", _jsx(_components.strong, {
                  children: "Buy and Activate"
                }), "."]
              }), `
`, _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: "If you have already created an Agora project:"
                  }), `
`, _jsxs(_components.p, {
                    children: ["The ", _jsx(_components.strong, {
                      children: "Projects"
                    }), " section appears and lists all of your projects."]
                  }), `
`]
                }), `
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: "If you have not created an Agora project:"
                  }), `
`, _jsxs(_components.p, {
                    children: [_jsx(_components.a, {
                      href: "/en/introduction/account",
                      children: "Create a new project"
                    }), ", the project appears in the ", _jsx(_components.strong, {
                      children: "Projects"
                    }), " section."]
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Under ", _jsx(_components.strong, {
                  children: "Projects"
                }), " on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the ", _jsx(_components.strong, {
                  children: "Action"
                }), " column."]
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
              children: "Get the apiKey and apiSecret for the extension"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["If required for the extension, to get the extension apiKey and apiSecret, in the ", _jsx(_components.strong, {
              children: "Projects"
            }), " extension detail page, click ", _jsx(_components.strong, {
              children: "View"
            }), " in the ", _jsx(_components.strong, {
              children: "Secret"
            }), " column."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "You are now ready to integrate the extension in your app."
      }), _jsx(_components.h2, {
        id: "integrate-the-extension-into-your-project-5",
        children: "Integrate the extension into your project"
      }), _jsx(_components.p, {
        children: "This section shows you how to implement the video filter extension in your app:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Add the required variables"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["To integrate the extension, in ", _jsx(_components.code, {
              children: "preload.js"
            }), ", add the following variables to declarations:"]
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "var"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " path "
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
                    children: ' "agora_segmentation_extension"'
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
                    children: "var"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " provider "
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
                    children: ' "agora_video_filters_segmentation"'
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
                    children: "var"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " extension "
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
                    children: ' "portrait_segmentation"'
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
                    children: "var"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " enableExtension "
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
              children: "Implement the logic to load and enable the extension"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["To load the extension in your app, call ", _jsx(_components.code, {
              children: "loadExtensionProvider"
            }), " and pass the extension path. To enable the extension, call ", _jsx(_components.code, {
              children: "enableExtension"
            }), " and pass the provider name and extension name. To implement this workflow, in ", _jsx(_components.code, {
              children: "preload.js"
            }), ", add the following method before ", _jsx(_components.code, {
              children: "window.onload = () =>"
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
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "function"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " enableExtension"
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
                    children: "{"
                  })
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
                    children: "path) {"
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
                    children: "'path is invalid'"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    return"
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
                    children: "  }"
                  })
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
                    children: "provider) {"
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
                    children: "'provider is invalid'"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    return"
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
                    children: "  }"
                  })
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
                    children: "extension) {"
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
                    children: "'extension is invalid'"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    return"
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
                    children: "  }"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  agoraEngine."
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
                    children: "(path);"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  agoraEngine."
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
                    children: "(provider, extension, enableExtension);"
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
              children: "Implement the logic to disable the extension"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["To disable the extension, call ", _jsx(_components.code, {
              children: "enableExtension"
            }), " and pass the ", _jsx(_components.code, {
              children: "provider"
            }), ", ", _jsx(_components.code, {
              children: "extension"
            }), ", and ", _jsx(_components.code, {
              children: "enableExtension"
            }), " variables as parameters. The ", _jsx(_components.code, {
              children: "enableExtension"
            }), " variable is set to ", _jsx(_components.code, {
              children: "false"
            }), " to disable the extension. To implement this logic, in ", _jsx(_components.code, {
              children: "preload.js"
            }), ", add the following method before ", _jsx(_components.code, {
              children: "window.onload = () =>"
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
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "function"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " disableExtension"
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
                    children: "{"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  agoraEngine."
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
                    children: "(provider, extension, enableExtension);"
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
              children: "Setup an event listener to enable and disable the extension with a button"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["When the user presses ", _jsx(_components.strong, {
              children: "Enable Extension"
            }), ", your app loads and starts the extension with a call to the ", _jsx(_components.code, {
              children: "enableExtension"
            }), " method. When the user presses the button again, your app disables the extension with a call to the ", _jsx(_components.code, {
              children: "disableExtension"
            }), " method. To implement this workflow, in ", _jsx(_components.code, {
              children: "preload.js"
            }), ", add the following method before ", _jsx(_components.code, {
              children: 'document.getElementById("leave").onclick = async function ()'
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
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "document."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "getElementById"
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
                    children: '"extension"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ")."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "onclick"
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
                    children: " async"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " function"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " ()"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "{"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  enableExtension "
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
                    children: " !"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "enableExtension;"
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
                    children: "(isExtension)"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  {"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    enableExtension"
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
                    children: "    document."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "getElementById"
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
                    children: '"extension"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ").innerHTML "
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
                    children: ' "Disable Extension"'
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
                    children: "  {"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    disableExtension"
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
                    children: "    document."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "getElementById"
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
                    children: '"extension"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ").innerHTML "
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
                    children: ' "Enable Extension"'
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
            children: _jsx(_components.strong, {
              children: "Implement the required callbacks to manage the extension"
            })
          }), `
`, _jsx(_components.p, {
            children: "RTC SDK provides the following callbacks to manage an extension:"
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "onExtensionStarted"
              }), ": Occurs when the extension is enabled."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "onExtensionError"
              }), ": Occurs when the extension runs incorrectly."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "onExtensionStopped"
              }), ": Occurs when the extension is disabled."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "onExtensionEvent"
              }), ": The event callback of the extension."]
            }), `
`]
          }), `
`, _jsxs(_components.p, {
            children: ["To implement these callbacks, in ", _jsx(_components.code, {
              children: "preload.js"
            }), ", add the following callbacks before ", _jsx(_components.code, {
              children: "onUserJoined"
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
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "onExtensionError"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ":( "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: "provider"
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
                    children: "extName"
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
                    children: "error"
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
                    children: "msg"
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
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "{"
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
                    children: "("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"Error :"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " +"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " error, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"Error detail :"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " +"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " msg);"
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
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "onExtensionEvent"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ":( "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: "provider"
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
                    children: "extName"
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
                    children: "key"
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
                    children: "value"
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
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "{"
                  })
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
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "onExtensionStarted"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ":("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: "provider"
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
                    children: "extName"
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
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "{"
                  })
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
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "onExtensionStopped"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ":("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: "provider"
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
                    children: "extName"
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
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "{"
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
`]
      }), _jsx(_components.h2, {
        id: "test-your-implementation-5",
        children: "Test your implementation"
      }), _jsx(_components.p, {
        children: "To ensure that you have integrated the extension in your app:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In ", _jsx(_components.strong, {
              children: "preload.js"
            }), ", update ", _jsx(_components.code, {
              children: "appID"
            }), ", ", _jsx(_components.code, {
              children: "channel"
            }), " and ", _jsx(_components.code, {
              children: "token"
            }), " with your values."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Run the app"
          }), `
`, _jsx(_components.p, {
            children: "Execute the following command in the terminal:"
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
                    children: " start"
                  })]
                })
              })
            })
          }), `
`, _jsxs(_components.p, {
            children: ["You see your app opens a window named ", _jsx(_components.strong, {
              children: "Get started with Video Calling"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Press Join to connect to the same channel as your web demo."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Press ", _jsx(_components.strong, {
              children: "Enable Extension"
            }), ". Your app start using the Agora video filter extension."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "reference-5",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference-3",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_loadextensionprovider",
              children: _jsx(_components.code, {
                children: "loadExtensionProvider"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setextensionproperty",
              children: _jsx(_components.code, {
                children: "setExtensionProperty"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_enableextension",
              children: _jsx(_components.code, {
                children: "enableExtension"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onextensionstarted",
              children: _jsx(_components.code, {
                children: "onExtensionStarted"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onextensionstopped",
              children: _jsx(_components.code, {
                children: "onExtensionStopped"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onextensionerror",
              children: _jsx(_components.code, {
                children: "onExtensionError"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onextensionevent",
              children: _jsx(_components.code, {
                children: "onExtensionEvent"
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
      }), _jsxs(_components.p, {
        children: ["Extensions are add-ons designed to rapidly extend the functionality of your app. ", _jsx(_components.a, {
          href: "https://www.agora.io/en/agora-extensions-marketplace/",
          children: "Extensions Marketplace"
        }), " is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning."]
      }), _jsx(_components.p, {
        children: "In the Agora Extensions Marketplace:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Vendors create and publish extensions to provide functionality such as audio and video processing."
        }), `
`, _jsx(_components.li, {
          children: "App developers use extensions to quickly implement fun and interactive functionality."
        }), `
`]
      }), _jsx(_components.p, {
        children: "This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-6",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Extension call workflow"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/extension-callflow.svg",
          alt: "img"
        })
      }), _jsx(_components.p, {
        children: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline."
      }), _jsx(_components.h2, {
        id: "prerequisites-6",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "To test the code used in this page you need to have:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["An Agora ", _jsx(_components.a, {
              href: "/en/introduction/account",
              children: "account"
            }), " and ", _jsx(_components.a, {
              href: "/en/introduction/account",
              children: "project"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: `A computer with Internet access.
Ensure that no firewall is blocking your network communication.`
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Implemented the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.a, {
              href: "https://docs.flutter.dev/get-started/install",
              children: "Flutter"
            }), " 2.0.0 or higher"]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Dart 2.15.1 or higher"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.a, {
              href: "https://developer.android.com/studio",
              children: "Android Studio"
            }), ", IntelliJ, VS Code, or any other IDE that supports Flutter, see ", _jsx(_components.a, {
              href: "https://docs.flutter.dev/get-started/editor",
              children: "Set up an editor"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "If your target platform is iOS:"
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Xcode on macOS (latest version recommended)"
            }), `
`, _jsx(_components.li, {
              children: "A physical iOS device"
            }), `
`, _jsx(_components.li, {
              children: "iOS version 12.0 or later"
            }), `
`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "If your target platform is Android:"
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Android Studio on macOS or Windows (latest version recommended)"
            }), `
`, _jsx(_components.li, {
              children: "An Android emulator or a physical Android device."
            }), `
`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["If you are developing a desktop application for Windows, macOS or Linux, make sure your development device meets the ", _jsx(_components.a, {
              href: "https://docs.flutter.dev/development/platform-integration/desktop",
              children: "Flutter desktop development requirements"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "project-setup-6",
        children: "Project setup"
      }), _jsx(_components.p, {
        children: "In order to integrate an extension into your project:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Activate an extension"
            })
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Log in to ", _jsx(_components.a, {
                  href: "https://console.agora.io/v2",
                  children: "Agora Console"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In the left navigation panel, click ", _jsx(_components.strong, {
                  children: "Extension Marketplace"
                }), ", then click the extension you want to activate."]
              }), `
`, _jsx(_components.p, {
                children: "You are now on the extension detail page."
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Select a pricing plan and click ", _jsx(_components.strong, {
                  children: "Buy and Activate"
                }), "."]
              }), `
`, _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: "If you have already created an Agora project:"
                  }), `
`, _jsxs(_components.p, {
                    children: ["The ", _jsx(_components.strong, {
                      children: "Projects"
                    }), " section appears and lists all of your projects."]
                  }), `
`]
                }), `
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: "If you have not created an Agora project:"
                  }), `
`, _jsxs(_components.p, {
                    children: [_jsx(_components.a, {
                      href: "/en/introduction/account",
                      children: "Create a new project"
                    }), ", the project appears in the ", _jsx(_components.strong, {
                      children: "Projects"
                    }), " section."]
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Under ", _jsx(_components.strong, {
                  children: "Projects"
                }), " on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the ", _jsx(_components.strong, {
                  children: "Action"
                }), " column."]
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
              children: "Get the apiKey and apiSecret for the extension"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["If required for the extension, to get the extension apiKey and apiSecret, in the ", _jsx(_components.strong, {
              children: "Projects"
            }), " extension detail page, click ", _jsx(_components.strong, {
              children: "View"
            }), " in the ", _jsx(_components.strong, {
              children: "Secret"
            }), " column."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Open your Flutter project"
          }), `
`, _jsxs(_components.p, {
            children: ["Load the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), " Video Calling project you created previously."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get the extension"
          }), `
`, _jsxs(_components.p, {
            children: ["Visit the ", _jsx(_components.a, {
              href: "https://www.agora.io/en/agora-extensions-marketplace/",
              children: "Agora Extensions Marketplace"
            }), " and follow the procedure to download and install the desired extension."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "You are now ready to integrate the extension in your app."
      }), _jsx(_components.h2, {
        id: "integrate-the-extension-into-your-project-6",
        children: "Integrate the extension into your project"
      }), _jsx(_components.p, {
        children: "This section presents the framework code you add to your Flutter project to integrate an extension."
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Load the extension provider"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["You call ", _jsx(_components.code, {
              children: "loadExtensionProvider"
            }), " during Agora Engine initialization to specify the extension library path. To do this, add the following code to the ", _jsx(_components.code, {
              children: "setupVideoSDKEngine"
            }), " method after you initialize the engine with ", _jsx(_components.code, {
              children: "agoraEngine.initialize"
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
                    children: "agoraEngine."
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
                    children: "("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"<extensionLibraryPath>"'
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
            children: _jsx(_components.strong, {
              children: "Enable the extension"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["To enable the extension, add the following code to the ", _jsx(_components.code, {
              children: "setupVideoSDKEngine"
            }), " method before ", _jsx(_components.code, {
              children: "await agoraEngine.enableVideo();"
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
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Extensions marketplace hosts both third-party extensions as well as those developed by Agora. To use an Agora extensions, you do not need to call addExtension or enableExtension."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "agoraEngine."
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
                    children: ' "<The name of the extension provider>"'
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
                    children: ' "<extensionName>"'
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
                    children: "  type"
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
                    children: " MediaSourceType"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ".unknownMediaSource,"
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
          }), `
`, _jsxs(_components.p, {
            children: ["If the extension uses the second camera to capture video, set the type parameter to ", _jsx(_components.code, {
              children: "secondaryCameraSource"
            }), "."]
          }), `
`, _jsxs(_components.p, {
            children: ["To enable multiple extensions, call ", _jsx(_components.code, {
              children: "enableExtension"
            }), " for each extension. The calls to ", _jsx(_components.code, {
              children: "enableExtension"
            }), " determines the order of each extension in the transmission pipeline. For example, if you enable extension A before extension B, extension A processes data from RTC SDK before extension B."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Set extension properties"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["To customize the extension for your particular app, set suitable values for the extension properties. Refer to the extension documentation for a list of available property names and allowable values. To set a property, add the following code to the ", _jsx(_components.code, {
              children: "setupVideoSDKEngine"
            }), " method after ", _jsx(_components.code, {
              children: "agoraEngine.enableExtension"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "agoraEngine."
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
                    children: ' "<providerName>"'
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
                    children: ' "<extensionName>"'
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
                    children: "  key"
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
                    children: ' "<keyName>"'
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
                    children: "  value"
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
                    children: ' "<keyValue>"'
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
`]
      }), _jsx(_components.h2, {
        id: "test-your-implementation-6",
        children: "Test your implementation"
      }), _jsx(_components.p, {
        children: "To ensure that you have integrated the extension in your app:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Set the variables and properties in the framework code to values suitable for your chosen extension."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In your IDE, open ", _jsx(_components.code, {
              children: "/lib/main.dart"
            }), " and update ", _jsx(_components.code, {
              children: "appId"
            }), ", ", _jsx(_components.code, {
              children: "channelName"
            }), " and ", _jsx(_components.code, {
              children: "token"
            }), " with the values from Agora Console."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Connect a test device to your development device."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In your IDE, click ", _jsx(_components.strong, {
              children: "Run app"
            }), " or execute the ", _jsx(_components.code, {
              children: "flutter run"
            }), " command in the terminal. A moment later, you see the project installed on your device."]
          }), `
`, _jsx(_components.p, {
            children: "If this is the first time you run the app, grant camera and microphone permissions."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Join the same channel from another test device or the ", _jsx(_components.a, {
              href: "https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html",
              children: "Agora web demo"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Experience the features of your new extension."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "reference-6",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference-4",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_enableextension",
              children: _jsx(_components.code, {
                children: "enableExtension"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_loadextensionprovider",
              children: _jsx(_components.code, {
                children: "loadExtensionProvider"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setextensionproperty",
              children: _jsx(_components.code, {
                children: "setExtensionProperty"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onextensionstarted",
              children: _jsx(_components.code, {
                children: "onExtensionStarted"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onextensionstopped",
              children: _jsx(_components.code, {
                children: "onExtensionStopped"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onextensionerror",
              children: _jsx(_components.code, {
                children: "onExtensionError"
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
      }), _jsxs(_components.p, {
        children: ["Extensions are add-ons designed to rapidly extend the functionality of your app. ", _jsx(_components.a, {
          href: "https://www.agora.io/en/agora-extensions-marketplace/",
          children: "Extensions Marketplace"
        }), " is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning."]
      }), _jsx(_components.p, {
        children: "In the Agora Extensions Marketplace:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Vendors create and publish extensions to provide functionality such as audio and video processing."
        }), `
`, _jsx(_components.li, {
          children: "App developers use extensions to quickly implement fun and interactive functionality."
        }), `
`]
      }), _jsx(_components.p, {
        children: "This page shows you how to integrate an extension from Agora Extensions Marketplace into your app. There can be specific guidance for each extension."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-7",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Extension call workflow"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/extension-callflow.svg",
          alt: "img"
        })
      }), _jsx(_components.p, {
        children: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline."
      }), _jsx(_components.h2, {
        id: "prerequisites-7",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "To test the code used in this page you need to have:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["An Agora ", _jsx(_components.a, {
              href: "/en/introduction/account",
              children: "account"
            }), " and ", _jsx(_components.a, {
              href: "/en/introduction/account",
              children: "project"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: `A computer with Internet access.
Ensure that no firewall is blocking your network communication.`
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Implemented the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["React Native 0.60 or later. For more information, see ", _jsx(_components.a, {
            href: "https://reactnative.dev/docs/environment-setup",
            children: "Setting up the development environment"
          }), "."]
        }), `
`, _jsx(_components.li, {
          children: "Node 10 or later"
        }), `
`, _jsxs(_components.li, {
          children: ["For iOS", `
`, _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "A machine running macOS"
            }), `
`, _jsx(_components.li, {
              children: "Xcode 10 or later"
            }), `
`, _jsx(_components.li, {
              children: "CocoaPods"
            }), `
`, _jsx(_components.li, {
              children: "A physical or virtual mobile device running iOS 9.0 or later. If you use React Native 0.63 or later, ensure your iOS version is 10.0 or later."
            }), `
`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: ["For Android", `
`, _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "A machine running macOS, Windows, or Linux"
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.a, {
                href: "https://openjdk.org/projects/jdk/11/",
                children: "Java Development Kit (JDK) 11"
              }), " or later"]
            }), `
`, _jsx(_components.li, {
              children: "Android Studio"
            }), `
`, _jsx(_components.li, {
              children: "A physical or virtual mobile device running Android 5.0 or later"
            }), `
`]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "project-setup-7",
        children: "Project setup"
      }), _jsx(_components.p, {
        children: "In order to integrate an extension into your project:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Activate an extension"
            })
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Log in to ", _jsx(_components.a, {
                  href: "https://console.agora.io/v2",
                  children: "Agora Console"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In the left navigation panel, click ", _jsx(_components.strong, {
                  children: "Extension Marketplace"
                }), ", then click the extension you want to activate."]
              }), `
`, _jsx(_components.p, {
                children: "You are now on the extension detail page."
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Select a pricing plan and click ", _jsx(_components.strong, {
                  children: "Buy and Activate"
                }), "."]
              }), `
`, _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: "If you have already created an Agora project:"
                  }), `
`, _jsxs(_components.p, {
                    children: ["The ", _jsx(_components.strong, {
                      children: "Projects"
                    }), " section appears and lists all of your projects."]
                  }), `
`]
                }), `
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: "If you have not created an Agora project:"
                  }), `
`, _jsxs(_components.p, {
                    children: [_jsx(_components.a, {
                      href: "/en/introduction/account",
                      children: "Create a new project"
                    }), ", the project appears in the ", _jsx(_components.strong, {
                      children: "Projects"
                    }), " section."]
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Under ", _jsx(_components.strong, {
                  children: "Projects"
                }), " on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the ", _jsx(_components.strong, {
                  children: "Action"
                }), " column."]
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
              children: "Get the apiKey and apiSecret for the extension"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["If required for the extension, to get the extension apiKey and apiSecret, in the ", _jsx(_components.strong, {
              children: "Projects"
            }), " extension detail page, click ", _jsx(_components.strong, {
              children: "View"
            }), " in the ", _jsx(_components.strong, {
              children: "Secret"
            }), " column."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Open your React-native project"
          }), `
`, _jsxs(_components.p, {
            children: ["Load the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), " Video Calling project you created previously."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get the extension"
          }), `
`, _jsxs(_components.p, {
            children: ["Visit the ", _jsx(_components.a, {
              href: "https://www.agora.io/en/agora-extensions-marketplace/",
              children: "Agora Extensions Marketplace"
            }), " and follow the procedure to download and install the desired extension."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "You are now ready to integrate the extension in your app."
      }), _jsx(_components.h2, {
        id: "integrate-the-extension-into-your-project-7",
        children: "Integrate the extension into your project"
      }), _jsx(_components.p, {
        children: "This section presents the framework code you add to your React Native project to integrate an extension."
      }), _jsx(_components.h3, {
        id: "implement-the-user-interface",
        children: "Implement the user interface"
      }), _jsxs(_components.p, {
        children: ["You can use a ", _jsx(_components.code, {
          children: "switch"
        }), " to enable and disable the extension you wish to integrate. To do this, follow these steps:"]
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Import the necessary modules"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["Add the following import from ", _jsx(_components.code, {
              children: "react-native"
            }), " before ", _jsx(_components.code, {
              children: "Text,"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
              children: _jsx(_components.code, {
                children: _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "Switch,"
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
            children: _jsx(_components.strong, {
              children: "Render the switch"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["Add the following code in the return statement, after ", _jsx(_components.code, {
              children: "Leave </Text>"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "Switch"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  onValueChange"
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
                    children: "{() => {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    if"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " (enable_extension) {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "      disableExtension"
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
                    children: "      setEnableExtension"
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
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    } "
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "      enableExtension"
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
                    children: "      setEnableExtension"
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
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  }}"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "/>"
                  })
                })]
              })
            })
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "integrate-the-extension",
        children: "Integrate the extension"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Declarations for the extension"
            })
          }), `
`, _jsx(_components.p, {
            children: "You can create constants for the extension provider and extension name that you need to integrate."
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "const"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " extprovider"
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
                    children: " 'agora_segmentation'"
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
                    children: "const"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " extension"
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
                    children: " 'PortraitSegmentation'"
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
          }), `
`, _jsxs(_components.p, {
            children: ["You also need a state variable to keep track of the status of your extension. Inside ", _jsx(_components.code, {
              children: "App"
            }), ", add the following code along with the other declarations:"]
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
              children: _jsx(_components.code, {
                children: _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "const"
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
                    children: "enable_extension"
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
                    children: "setEnableExtension"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
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
                    children: " useState"
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
            children: _jsx(_components.strong, {
              children: "Enable the extension"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["You call ", _jsx(_components.code, {
              children: "enableExtension"
            }), " to enable your extension. To do this using the ", _jsx(_components.code, {
              children: "switch"
            }), ", add the following code after the ", _jsx(_components.code, {
              children: "leave"
            }), " function:"]
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "const"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " enableExtension"
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
                    children: "  if"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " (Platform."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "OS"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " ==="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " 'android'"
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
                    children: "    agoraEngineRef.current?."
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
                    children: "extprovider"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "}_extension`"
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
                    children: "  }"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  agoraEngineRef.current?."
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
                    children: "(extprovider, extension, "
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
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "  setEnableExtension"
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
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Disable the extension"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["You call ", _jsx(_components.code, {
              children: "disableExtension"
            }), " to disable your extension. To do this using the ", _jsx(_components.code, {
              children: "switch"
            }), ", add the following code after the ", _jsx(_components.code, {
              children: "enableExtension"
            }), " function:"]
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "const"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " disableExtension"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  agoraEngineRef.current?."
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
                    children: "(extprovider, extension, "
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
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "  setEnableExtension"
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
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Add the necessary callbacks"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["To get notified of important events, add the following callbacks to ", _jsx(_components.code, {
              children: "agoraEngine.registerEventHandler({"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "onExtensionErrored"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": ("
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  provider: string,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  extName: string,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  error: number,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  msg: string,"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
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
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "  'onExtensionErrored'"
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
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "  'provider'"
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
                    children: "  provider,"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "  'extName'"
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
                    children: "  extName,"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "  'error'"
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
                    children: "  error,"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "  'msg'"
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
                    children: "  msg,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  );"
                  })
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
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "onExtensionEvent"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": ("
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  provider: string,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  extName: string,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  key: string,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  value: string,"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
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
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "  'onExtensionEvent'"
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
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "  'provider'"
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
                    children: "  provider,"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "  'extName'"
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
                    children: "  extName,"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "  'key'"
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
                    children: "  key,"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "  'value'"
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
                    children: "  value,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  );"
                  })
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
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "onExtensionStarted"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": ("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: "provider"
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
                    children: ", "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: "extName"
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
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "  'onExtensionStarted'"
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
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "  'provider'"
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
                    children: "  provider,"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "  'extName'"
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
                    children: "  extName,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  );"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "  setEnableExtension"
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
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "onExtensionStopped"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": ("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: "provider"
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
                    children: ", "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: "extName"
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
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "  'onExtensionStopped'"
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
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "  'provider'"
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
                    children: "  provider,"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "  'extName'"
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
                    children: "  extName,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  );"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "  setEnableExtension"
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
`]
      }), _jsx(_components.h2, {
        id: "test-your-implementation-7",
        children: "Test your implementation"
      }), _jsx(_components.p, {
        children: "To ensure that you have integrated the extension in your app:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Run your app:"
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: _jsx(_components.em, {
                  children: "Android"
                })
              }), `
`, _jsxs(_components.ol, {
                children: [`
`, _jsx(_components.li, {
                  children: "Enable Developer options on your Android device, and then connect it to your computer using a USB cable."
                }), `
`, _jsxs(_components.li, {
                  children: ["Run ", _jsx(_components.code, {
                    children: "npx react-native run-android"
                  }), " in the project root directory."]
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: _jsx(_components.em, {
                  children: "iOS:"
                })
              }), `
`, _jsxs(_components.ol, {
                children: [`
`, _jsx(_components.li, {
                  children: "Run your app with Xcode."
                }), `
`]
              }), `
`]
            }), `
`]
          }), `
`, _jsx(_components.p, {
            children: "If this is the first time you run the project, you need to grant microphone and camera access to your app."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Click Join to start a call."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Join the same channel from another test device or the ", _jsx(_components.a, {
              href: "https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html",
              children: "Agora web demo"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Experience the features of your new extension."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "reference-7",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
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
        children: ["Extensions are add-ons designed to rapidly extend the functionality of your game. ", _jsx(_components.a, {
          href: "https://www.agora.io/en/agora-extensions-marketplace/",
          children: "Extensions Marketplace"
        }), " is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning."]
      }), _jsx(_components.p, {
        children: "In the Agora Extensions Marketplace:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Vendors create and publish extensions to provide functionality such as audio and video processing."
        }), `
`, _jsx(_components.li, {
          children: "App developers use extensions to quickly implement fun and interactive functionality."
        }), `
`]
      }), _jsx(_components.p, {
        children: "This page shows you how to integrate an extension from Agora Extensions Marketplace into your game. There can be specific guidance for each extension."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-8",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Extension call workflow"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/extension-callflow.svg",
          alt: "img"
        })
      }), _jsx(_components.p, {
        children: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline."
      }), _jsx(_components.h2, {
        id: "prerequisites-8",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "To test the code used in this page you need to have:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["An Agora ", _jsx(_components.a, {
              href: "/en/introduction/account",
              children: "account"
            }), " and ", _jsx(_components.a, {
              href: "/en/introduction/account",
              children: "project"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: `A computer with Internet access.
Ensure that no firewall is blocking your network communication.`
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Implemented the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            })]
          }), `
`]
        }), `
`]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://unity.com/download",
            children: "Unity Hub"
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://unity.com/releases/editor/archive",
            children: "Unity Editor 2017.X LTS or higher"
          })
        }), `
`, _jsx(_components.li, {
          children: "Microsoft Visual Studio 2017 or higher"
        }), `
`]
      }), _jsx(_components.h2, {
        id: "project-setup-8",
        children: "Project setup"
      }), _jsx(_components.p, {
        children: "In order to integrate an extension into your project:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Activate an extension"
            })
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Log in to ", _jsx(_components.a, {
                  href: "https://console.agora.io/v2",
                  children: "Agora Console"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In the left navigation panel, click ", _jsx(_components.strong, {
                  children: "Extension Marketplace"
                }), ", then click the extension you want to activate."]
              }), `
`, _jsx(_components.p, {
                children: "You are now on the extension detail page."
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Select a pricing plan and click ", _jsx(_components.strong, {
                  children: "Buy and Activate"
                }), "."]
              }), `
`, _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: "If you have already created an Agora project:"
                  }), `
`, _jsxs(_components.p, {
                    children: ["The ", _jsx(_components.strong, {
                      children: "Projects"
                    }), " section appears and lists all of your projects."]
                  }), `
`]
                }), `
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: "If you have not created an Agora project:"
                  }), `
`, _jsxs(_components.p, {
                    children: [_jsx(_components.a, {
                      href: "/en/introduction/account",
                      children: "Create a new project"
                    }), ", the project appears in the ", _jsx(_components.strong, {
                      children: "Projects"
                    }), " section."]
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Under ", _jsx(_components.strong, {
                  children: "Projects"
                }), " on the extension detail page, find the project in which you want to use the extension, then turn on the switch in the ", _jsx(_components.strong, {
                  children: "Action"
                }), " column."]
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
              children: "Get the apiKey and apiSecret for the extension"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["If required for the extension, to get the extension apiKey and apiSecret, in the ", _jsx(_components.strong, {
              children: "Projects"
            }), " extension detail page, click ", _jsx(_components.strong, {
              children: "View"
            }), " in the ", _jsx(_components.strong, {
              children: "Secret"
            }), " column."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Open your Unity project"
          }), `
`, _jsxs(_components.p, {
            children: ["Load the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), " Video Calling project you created previously."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get the extension"
          }), `
`, _jsxs(_components.p, {
            children: ["Visit the ", _jsx(_components.a, {
              href: "https://www.agora.io/en/agora-extensions-marketplace/",
              children: "Agora Extensions Marketplace"
            }), " and follow the procedure to download and install the desired extension."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "You are now ready to integrate the extension in your game."
      }), _jsx(_components.h2, {
        id: "integrate-the-extension-into-your-project-8",
        children: "Integrate the extension into your project"
      }), _jsx(_components.p, {
        children: "This section presents the framework code you add to your Unity project to integrate an extension."
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Load the extension provider"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["You call ", _jsx(_components.code, {
              children: "loadExtensionProvider"
            }), " during Agora Engine initialization to specify the extension library path. To do this, add the following code to the ", _jsx(_components.code, {
              children: "SetupVideoSDKEngine"
            }), " method after you initialize the engine with ", _jsx(_components.code, {
              children: "RtcEngine.Initialize"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
              children: _jsx(_components.code, {
                children: _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "RtcEngine."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "LoadExtensionProvider"
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
                    children: '"<extensionLibraryPath>"'
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
            children: _jsx(_components.strong, {
              children: "Enable the extension"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["To enable the extension, add the following code to the ", _jsx(_components.code, {
              children: "Join"
            }), " method before ", _jsx(_components.code, {
              children: "RtcEngine.EnableVideo();"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "RtcEngine."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "EnableExtension"
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "  provider"
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
                    children: '"<The name of the extension provider>"'
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "  extension"
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
                    children: '"<extensionName>"'
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "  enable"
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
                    children: "true"
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "  type"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": MEDIA_SOURCE_TYPE.UNKNOWN_MEDIA_SOURCE"
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
          }), `
`, _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsx(_components.p, {
                children: "Extensions marketplace hosts both third-party extensions as well as those developed by Agora. To use an Agora extension, you do not need to call EnableExtension."
              })
            })
          }), `
`, _jsxs(_components.p, {
            children: ["To enable multiple extensions, call ", _jsx(_components.code, {
              children: "EnableExtension"
            }), " for each extension. The calls to ", _jsx(_components.code, {
              children: "EnableExtension"
            }), " determines the order of each extension in the transmission pipeline. For example, if you enable extension A before extension B, RTC SDK processes data from extension A before extension B."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Set extension properties"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["To customize the extension for your particular game, set suitable values for the extension properties. Refer to the extension documentation for a list of available property names and allowable values. To set a property, add the following code to the ", _jsx(_components.code, {
              children: "Join"
            }), " method after ", _jsx(_components.code, {
              children: "RtcEngine.EnableExtension"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "RtcEngine."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "SetExtensionProperty"
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "  provider"
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
                    children: '"<providerName>"'
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "  extension"
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
                    children: '"<extensionName>"'
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "  key"
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
                    children: '"<keyName>"'
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "  value"
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
                    children: '"<keyValue>"'
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
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "test-your-implementation-8",
        children: "Test your implementation"
      }), _jsx(_components.p, {
        children: "To ensure that you have integrated the extension in your game:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Set the variables and properties in the project code to values suitable for your chosen extension."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Generate a temporary token in Agora Console."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In your browser, navigate to the ", _jsx(_components.a, {
              href: "https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html",
              children: "Agora web demo"
            }), " and update ", _jsx(_components.em, {
              children: "App ID"
            }), ", ", _jsx(_components.em, {
              children: "Channel"
            }), ", and ", _jsx(_components.em, {
              children: "Token"
            }), " with the values for your temporary token, then click ", _jsx(_components.strong, {
              children: "Join"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In ", _jsx(_components.strong, {
              children: "Unity Editor"
            }), ", in ", _jsx(_components.code, {
              children: "Assets/Agora-RTC-Plugin/Agora-Unity-RTC-SDK/Code/JoinChannelVideo.cs"
            }), ", update ", _jsx(_components.code, {
              children: "_appID"
            }), ", ", _jsx(_components.code, {
              children: "_channelName"
            }), ", and ", _jsx(_components.code, {
              children: "_token"
            }), " with the values for your temporary token."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In ", _jsx(_components.strong, {
              children: "Unity Editor"
            }), ", click ", _jsx(_components.strong, {
              children: "Play"
            }), ". A moment later you see the game installed on your device."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Click Join to start a call."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Experience the features of your new extension."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "reference-8",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference-5",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_enableextension",
              children: _jsx(_components.code, {
                children: "EnableExtension"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_loadextensionprovider",
              children: _jsx(_components.code, {
                children: "LoadExtensionProvider"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setextensionproperty",
              children: _jsx(_components.code, {
                children: "SetExtensionProperty"
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
