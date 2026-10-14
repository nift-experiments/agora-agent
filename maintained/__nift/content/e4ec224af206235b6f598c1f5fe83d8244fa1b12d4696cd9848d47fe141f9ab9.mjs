import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Banuba AR Face Filter",
  description: "Enable augmented reality features in video calls such as face filters, face touch up filters and virtual backgrounds."
};
export let _markdown = `

This guide is provided by Banuba. Agora is planning a documentation upgrade program for all extensions on the marketplace. Please stay tuned.

By integrating Banuba Face AR SDK and Agora.io SDK you can enable augmented reality features in video calls such as face filters, face touch up filters and virtual backgrounds. You can find the integration examples below.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="android" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="android" />

    ## Prerequisites [#prerequisites]

    * The latest Banuba SDK archive
    * [Banuba Extension files for Android](https://f.hubspotusercontent10.net/hubfs/4992313/Agora_Banuba_Extension/AgoraBanubaExtension2\\(Android\\).zip)
    * Banuba trial client token.

    To receive a trial token or a full commercial licence from Banuba - please fill in our form on [form on banuba.com](https://www.banuba.com/face-filters-sdk) website, or contact us via [info@banuba.com](mailto\\:info@banuba.com).

    ## Integrate Banuba Face AR extension [#integrate-banuba-face-ar-extension]

    ### Get Started [#get-started]

    1. Make sure that you have Android **NDK** and **CMake** are installed! Project contains C++ sources, so this is required! Recommended NDK versions is 21.1.6352462, required CMake version is 3.9, 3.14 or above is recommended (Android SDK manager provides 3.18.1, it should be installed).
    2. Get the latest Banuba SDK archive, [Banuba trial client token](https://www.banuba.com/facear-sdk/face-filters).
       To receive full commercial license from Banuba - please fill in our form on [form on banuba.com](https://www.banuba.com/face-filters-sdk) website, or contact us via [info@banuba.com](mailto\\:info@banuba.com).
    3. Copy \`.aar\` file from the Banuba SDK archive into \`libs\` dir:
       > \`banuba_effect_player-release.aar\` => \`libs/\`
    4. Copy \`include/bnb\` directory into \`libs/bnb_sdk/\`:
       > \`include/bnb\` => \`libs/bnb_sdk/bnb\`
    5. Get [the latest Agora RTC SDK archive](https://console.agora.io/marketplace/extension/introduce?serviceName=banuba).
    6. Copy \`jar\` files from the Agora RTC SDK archive into \`libs\` dir:
       > \`agora-rtc-sdk.jar\` => \`libs/\`
    7. Copy architecture folders from the Agora RTC SDK archive into \`jniLibs\` dir:
       > \`arm64-v8a\`, \`armeabi-v7a\` and \`x86_64\` => \`libs/jniLibs/\`
    8. Copy Agora SDK headers (\`*.h\` files) into \`libs/agora_rtc_sdk/include\`:
       > \`low_level_api/include\` => \`libs/agora_rtc_sdk/include\`
    9. Copy and Paste your Banuba client token into appropriate section of \`app/src/main/java/com/banuba/sdk/agorapluginexample/ClientToken.kt\` with " " symbols. For example: BANUBA\\_CLIENT\\_TOKEN = "place\\_your\\_token\\_here"
    10. Visit [agora.io](https://console.agora.io) to sign up and get token, app ID and channel ID.
    11. Copy and Paste your Agora token, app ID and channel ID into appropriate section of \`app/src/main/java/com/banuba/sdk/agorapluginexample/ClientToken.kt\` with " " symbols. For example: AGORA\\_APP\\_ID = "place\\_your\\_token\\_here"
    12. Open the project in Android Studio and run the necessary target using the usual steps.

    #### How to use \`BanubaFiltersAgoraExtension\` [#how-to-use-banubafiltersagoraextension]

    Add following imports:

    \`\`\`kotlin
    import com.banuba.agora.plugin.BanubaEffectsLoader
    import com.banuba.agora.plugin.BanubaExtensionManager
    import com.banuba.agora.plugin.BanubaResourceManager
    import com.banuba.agora.plugin.model.ArEffect
    import com.banuba.sdk.utils.ContextProvider
    \`\`\`

    Add extension to RtcEngineConfig:

    \`\`\`kotlin
    RtcEngineConfig().apply {
        ...
        System.loadLibrary("banuba")
        addExtension(BanubaExtensionManager.EXTENSION_NAME)
        ContextProvider.setContext(mContext)
        ...
    }
    \`\`\`

    Create and initialize BanubaResourceManager:

    \`\`\`kotlin
    private val banubaResourceManager by lazy(LazyThreadSafetyMode.NONE) {
        BanubaResourceManager(this)
    }
    \`\`\`

    \`\`\`kotlin
    override fun onCreate(savedInstanceState: Bundle?) {
        ...
        banubaResourceManager.prepare()
    }
    \`\`\`

    After those steps enable and initialize extension:

    \`\`\`kotlin
    agoraRtc.enableExtension(
        BanubaExtensionManager.VENDOR_NAME,
        BanubaExtensionManager.VIDEO_FILTER_NAME,
        true
    )
    \`\`\`

    \`\`\`kotlin
    private fun initBanubaPlugin() {
        agoraRtc.setExtensionProperty(
            BanubaExtensionManager.VENDOR_NAME,
            BanubaExtensionManager.VIDEO_FILTER_NAME,
            BanubaExtensionManager.KEY_SET_RESOURCES_PATH,
            banubaResourceManager.resourcesPath
        )
        agoraRtc.setExtensionProperty(
            BanubaExtensionManager.VENDOR_NAME,
            BanubaExtensionManager.VIDEO_FILTER_NAME,
            BanubaExtensionManager.KEY_SET_EFFECTS_PATH,
            banubaResourceManager.effectsPath
        )
        agoraRtc.setExtensionProperty(
            BanubaExtensionManager.VENDOR_NAME,
            BanubaExtensionManager.VIDEO_FILTER_NAME,
            BanubaExtensionManager.KEY_SET_TOKEN,
            BANUBA_CLIENT_TOKEN
        )
    }
    \`\`\`

    To enable/disable effects use the following code:

    \`\`\`kotlin
    private val onEffectPrepared = object : BanubaResourceManager.EffectPreparedCallback {
        override fun onPrepared(effectName: String) {
            sendEffectToFilter(effectName)
        }
    }

    private fun sendEffectToFilter(effect: String) {
        agoraRtc.setExtensionProperty(
            BanubaExtensionManager.VENDOR_NAME,
            BanubaExtensionManager.VIDEO_FILTER_NAME,
            BanubaExtensionManager.KEY_LOAD_EFFECT,
            effect
        )
    }
    \`\`\`

    \`\`\`kotlin
    banubaResourceManager.prepareEffect(Effect name, onEffectPrepared)
    \`\`\`

    #### Effects managing [#effects-managing]

    To retrieve current effects use the following code:

    \`\`\`kotlin
    val effects: List<ArEffect> = BanubaEffectsLoader(this).loadEffects()
    \`\`\`

    ArEffect contains following information:\\
    \`name: String\` - pass to \`banubaResourceManager.prepareEffect(Effect name, onEffectPrepared)\`. Also can be used to display label on the UI\\
    \`preview: Bitmap\` - can be used as preview image

    To modify effects, add or remove effect folder in \`app/src/main/assets/effects\` directory.
    By default sample contains the following effects:

    1. \`ElvisUnleashed\`
    2. \`EnglandEightPieceCap\`
    3. \`FashionHistory1940_male\`
    4. \`MorphingHatBow\`
    5. \`Nerd\`
    6. \`SnapBubblesGlasses\`
    7. \`Space\`
    8. \`StarGlow\`
    9. \`TitanicJack\`

    ## Run the demo [#run-the-demo]

    * [Demo app (public)](https://f.hubspotusercontent10.net/hubfs/4992313/Agora_Banuba_Extension/AgoraBanubaDemoApp\\(Android\\).apk)
    * [Github repository](https://github.com/Banuba/agora-plugin-filters-android)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="ios" />

    ## Prerequisites [#prerequisites-1]

    * The latest Banuba SDK archive
    * [Banuba Extension files for iOS](https://www.banuba.com/faq/how-to-integrate-banuba-sdk-with-agora-sdk)
    * Banuba trial client token.

    To receive a trial token or a full commercial licence from Banuba - please fill in our form on [form on banuba.com](https://www.banuba.com/face-filters-sdk) website, or contact us via [info@banuba.com](mailto\\:info@banuba.com).

    ## Integrate Banuba Face AR extension [#integrate-banuba-face-ar-extension-1]

    ### Get Started [#get-started-1]

    1. Get the following Banuba trial client token.
       To receive a trial token or a full commercial licence from Banuba - please fill in our form on [form on banuba.com](https://www.banuba.com/face-filters-sdk) website, or contact us via [info@banuba.com](mailto\\:info@banuba.com).

    2. Execute \`pod install\` to get the Banuba SDK.

    3. Open the \`BanubaAgoraFilters.xcworkspace\` file in Xcode.

    4. Copy and Paste your Banuba client token into the appropriate section of \`/BanubaAgoraFilters/Token.swift\` with " " symbols. For example:

       \`\`\`swift
       let banubaClientToken = "Banuba Token"
       \`\`\`

    5. Visit agora.io to sign up and get the token, app and channel ID.

    6. Copy and Paste your agora token, app and chanel ID into appropriate section of \`/BanubaAgoraFilters/Token.swift\` with " " symbols. For example:

       \`\`\`swift
       internal let agoraAppID = "Agora App ID"
       internal let agoraClientToken = "Agora Token"
       internal let agoraChannelId = "Agora Channel ID"
       \`\`\`

    7. Donwload the needed effects from [here](https://docs.banuba.com/face-ar-sdk-v1/overview/demo_face_filters). This guarantees, that you will use the up-to-date version of the effects. The effects must be copied to the \`agora-plugin-filters-ios -> BanubaAgoraFilters -> effects\` folder.

    8. Open the \`BanubaAgoraFilters.xcodeproj\` project in Xcode and run the \`BanubaAgoraFilters\` target.

    If you have any problems with installing Agora frameworks with Swift Package Manager refer to this [page](https://github.com/AgoraIO/AgoraRtcEngine_iOS)

    #### Connecting Banuba SDK and AgoraRtcKit to your own project [#connecting-banuba-sdk-and-agorartckit-to-your-own-project]

    Connecting Banuba SDK to your project is similar to the steps in the Getting Started section. As for AgoraRtcKit, we advise to use Swift Package Manager. You should use the following settings:
    URL: \`https://github.com/AgoraIO/AgoraRtcEngine_iOS.git\`
    Version Rule: \`Up to next minor\`
    Version: \`4.0.0\`

    #### How to use \`BanubaFiltersAgoraExtension\` [#how-to-use-banubafiltersagoraextension-1]

    To control \`BanubaFiltersAgoraExtension\` with Agora libs look available keys listed below:

    \`\`\`swift
    public struct BanubaPluginKeys {
        public static let vendorName = "Banuba"
        public static let extensionName = "BanubaFilter"
        public static let loadEffect = "load_effect"
        public static let unloadEffect = "unload_effect"
        public static let setEffectsPath = "set_effects_path"
        public static let setToken = "set_token"
    }
    \`\`\`

    To enable/disable \`BanubaFiltersAgoraExtension\` use the following method:

    \`\`\`swift
    import BanubaFiltersAgoraExtension

    agoraKit?.enableExtension(
        withVendor: BanubaPluginKeys.vendorName,
        extension: BanubaPluginKeys.extensionName,
        enabled: true
    )
    \`\`\`

    Before applying an effect on your video you have to initialize \`BanubaFiltersAgoraExtension\` with the path to effects and banuba client token. Look how it can be achieved:

    \`\`\`swift
    agoraKit?.setExtensionPropertyWithVendor(
        BanubaPluginKeys.vendorName,
        extension: BanubaPluginKeys.extensionName,
        key: BanubaPluginKeys.setEffectsPath,
        value: "place_path_to_effects_folder_here"
    )

    agoraKit?.setExtensionPropertyWithVendor(
        BanubaPluginKeys.vendorName,
        extension: BanubaPluginKeys.extensionName,
        key: BanubaPluginKeys.setToken,
        value: "place_your_banuba_token_here".trimmingCharacters(in: .whitespacesAndNewlines)
    )
    \`\`\`

    After those steps you can tell \`BanubaFiltersAgoraExtension\` to enable or disable the mask:

    \`\`\`swift
    agoraKit?.setExtensionPropertyWithVendor(
        BanubaPluginKeys.vendorName,
        extension: BanubaPluginKeys.extensionName,
        key: BanubaPluginKeys.loadEffect,
        value: "put_effect_name_here"
    )

    agoraKit?.setExtensionPropertyWithVendor(
        BanubaPluginKeys.vendorName,
        extension: BanubaPluginKeys.extensionName,
        key: BanubaPluginKeys.unloadEffect,
        value: " "
    )
    \`\`\`

    If the mask has parameters and you want to change them, you can do it the next way:

    \`\`\`swift
    agoraKit?.setExtensionPropertyWithVendor(
        BanubaPluginKeys.vendorName,
        extension: BanubaPluginKeys.extensionName,
        key: BanubaPluginKeys.evalJSMethod,
        value: string
    )
    \`\`\`

    \`string\` must be a string with method's name and parameters. You can find an example in our [documentation](https://docs.banuba.com/face-ar-sdk-v1/effect_api/face_beauty).

    #### How to build \`BanubaFiltersAgoraExtension\` [#how-to-build-banubafiltersagoraextension]

    To build the \`BanubaFiltersAgoraExtension\` manually, please follow the steps bellow:

    1. Execute \`pod install\` to get the Banuba SDK.

    2. Open the \`BanubaAgoraFilters.xcworkspace\` file in Xcode.

    3. Choose **File->Packages->Reset Package Cashes** from Xcode menu.

    4. Build the target \`BanubaFiltersAgoraExtension\`. It will be built with your Swift version. After this you should open the section **Products** in the **Project Navigator** (the left part of the Xcode screen). Click on the \`BanubaFiltersAgoraExtension\` with the right click of the mouse and choose **Show in Finder**. Copy the \`BanubaFiltersAgoraExtension.framework\` from the folder.

    5. Then put the framework to the \`/Frameworks\` folder of the \`BanubaAgoraFilters.xcodeproj\` (or of your project). Then you can build BanubaAgoraFilters or your project.

    The reconnection of the \`BanubaFiltersAgoraExtension.framework\` to the example project may be required. To do it, you should remove the \`BanubaFiltersAgoraExtension.framework\` from the Project Settings: **General-> Frameworks, Libraries and Embedded Content**. Then you should drag\\&drop the \`BanubaFiltersAgoraExtension.framework\` to this section. You should choose **Embed\\&Sign** for this framework.

    #### Effects managing [#effects-managing-1]

    To retrieve effects list use the following code:

    \`\`\`swift
    let effectsPath = BanubaEffectsManager.effectsURL.path
    let effectsService = EffectsService(effectsPath: effectsPath)
    let effectViewModels =
        effectsService
        .getEffectNames()
        .sorted()
        .compactMap { effectName in
            guard let effectPreviewImage = effectsService.getEffectPreview(effectName) else {
                return nil
            }

            let effectViewModel = EffectViewModel(image: effectPreviewImage, effectName: effectName)
            return effectViewModel
        }
    \`\`\`

    \`EffectViewModel\` has the following properties:

    \`\`\`swift
    class EffectViewModel {
        let image: UIImage
        let effectName: String?
        var cancelEffectModel: Bool {
            return effectName == nil
        }
    }
    \`\`\`

    ## Run the demo [#run-the-demo-1]

    * [Demo app (distribution by request via support channels at the bottom of the page)](https://appcenter.ms/users/andrei.sak-banuba.com/apps/BanubaAgoraExtensionSample)
    * [Github repository](https://github.com/Banuba/agora-plugin-filters-ios)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This guide is provided by Banuba. Agora is planning a documentation upgrade program for all extensions on the marketplace. Please stay tuned."
  }, {
    heading: undefined,
    content: "By integrating Banuba Face AR SDK and Agora.io SDK you can enable augmented reality features in video calls such as face filters, face touch up filters and virtual backgrounds. You can find the integration examples below."
  }, {
    heading: "prerequisites",
    content: "The latest Banuba SDK archive"
  }, {
    heading: "prerequisites",
    content: "Banuba Extension files for Android"
  }, {
    heading: "prerequisites",
    content: "Banuba trial client token."
  }, {
    heading: "prerequisites",
    content: "To receive a trial token or a full commercial licence from Banuba - please fill in our form on form on banuba.com website, or contact us via info\\@banuba.com."
  }, {
    heading: "get-started",
    content: "Make sure that you have Android **NDK** and **CMake** are installed! Project contains C++ sources, so this is required! Recommended NDK versions is 21.1.6352462, required CMake version is 3.9, 3.14 or above is recommended (Android SDK manager provides 3.18.1, it should be installed)."
  }, {
    heading: "get-started",
    content: `Get the latest Banuba SDK archive, Banuba trial client token.
To receive full commercial license from Banuba - please fill in our form on form on banuba.com website, or contact us via info\\@banuba.com.`
  }, {
    heading: "get-started",
    content: "Copy `.aar` file from the Banuba SDK archive into `libs` dir:"
  }, {
    heading: "get-started",
    content: "> `banuba_effect_player-release.aar` => `libs/`"
  }, {
    heading: "get-started",
    content: "Copy `include/bnb` directory into `libs/bnb_sdk/`:"
  }, {
    heading: "get-started",
    content: "> `include/bnb` => `libs/bnb_sdk/bnb`"
  }, {
    heading: "get-started",
    content: "Get the latest Agora RTC SDK archive."
  }, {
    heading: "get-started",
    content: "Copy `jar` files from the Agora RTC SDK archive into `libs` dir:"
  }, {
    heading: "get-started",
    content: "> `agora-rtc-sdk.jar` => `libs/`"
  }, {
    heading: "get-started",
    content: "Copy architecture folders from the Agora RTC SDK archive into `jniLibs` dir:"
  }, {
    heading: "get-started",
    content: "> `arm64-v8a`, `armeabi-v7a` and `x86_64` => `libs/jniLibs/`"
  }, {
    heading: "get-started",
    content: "Copy Agora SDK headers (`*.h` files) into `libs/agora_rtc_sdk/include`:"
  }, {
    heading: "get-started",
    content: "> `low_level_api/include` => `libs/agora_rtc_sdk/include`"
  }, {
    heading: "get-started",
    content: 'Copy and Paste your Banuba client token into appropriate section of `app/src/main/java/com/banuba/sdk/agorapluginexample/ClientToken.kt` with " " symbols. For example: BANUBA\\_CLIENT\\_TOKEN = "place\\_your\\_token\\_here"'
  }, {
    heading: "get-started",
    content: "Visit agora.io to sign up and get token, app ID and channel ID."
  }, {
    heading: "get-started",
    content: 'Copy and Paste your Agora token, app ID and channel ID into appropriate section of `app/src/main/java/com/banuba/sdk/agorapluginexample/ClientToken.kt` with " " symbols. For example: AGORA\\_APP\\_ID = "place\\_your\\_token\\_here"'
  }, {
    heading: "get-started",
    content: "Open the project in Android Studio and run the necessary target using the usual steps."
  }, {
    heading: "how-to-use-banubafiltersagoraextension",
    content: "Add following imports:"
  }, {
    heading: "how-to-use-banubafiltersagoraextension",
    content: "Add extension to RtcEngineConfig:"
  }, {
    heading: "how-to-use-banubafiltersagoraextension",
    content: "Create and initialize BanubaResourceManager:"
  }, {
    heading: "how-to-use-banubafiltersagoraextension",
    content: "After those steps enable and initialize extension:"
  }, {
    heading: "how-to-use-banubafiltersagoraextension",
    content: "To enable/disable effects use the following code:"
  }, {
    heading: "effects-managing",
    content: "To retrieve current effects use the following code:"
  }, {
    heading: "effects-managing",
    content: "ArEffect contains following information:\\\n`name: String` - pass to `banubaResourceManager.prepareEffect(Effect name, onEffectPrepared)`. Also can be used to display label on the UI\\\n`preview: Bitmap` - can be used as preview image"
  }, {
    heading: "effects-managing",
    content: "To modify effects, add or remove effect folder in `app/src/main/assets/effects` directory.\nBy default sample contains the following effects:"
  }, {
    heading: "effects-managing",
    content: "`ElvisUnleashed`"
  }, {
    heading: "effects-managing",
    content: "`EnglandEightPieceCap`"
  }, {
    heading: "effects-managing",
    content: "`FashionHistory1940_male`"
  }, {
    heading: "effects-managing",
    content: "`MorphingHatBow`"
  }, {
    heading: "effects-managing",
    content: "`Nerd`"
  }, {
    heading: "effects-managing",
    content: "`SnapBubblesGlasses`"
  }, {
    heading: "effects-managing",
    content: "`Space`"
  }, {
    heading: "effects-managing",
    content: "`StarGlow`"
  }, {
    heading: "effects-managing",
    content: "`TitanicJack`"
  }, {
    heading: "run-the-demo",
    content: "Demo app (public)"
  }, {
    heading: "run-the-demo",
    content: "Github repository"
  }, {
    heading: "prerequisites-1",
    content: "The latest Banuba SDK archive"
  }, {
    heading: "prerequisites-1",
    content: "Banuba Extension files for iOS"
  }, {
    heading: "prerequisites-1",
    content: "Banuba trial client token."
  }, {
    heading: "prerequisites-1",
    content: "To receive a trial token or a full commercial licence from Banuba - please fill in our form on form on banuba.com website, or contact us via info\\@banuba.com."
  }, {
    heading: "get-started-1",
    content: `Get the following Banuba trial client token.
To receive a trial token or a full commercial licence from Banuba - please fill in our form on form on banuba.com website, or contact us via info\\@banuba.com.`
  }, {
    heading: "get-started-1",
    content: "Execute `pod install` to get the Banuba SDK."
  }, {
    heading: "get-started-1",
    content: "Open the `BanubaAgoraFilters.xcworkspace` file in Xcode."
  }, {
    heading: "get-started-1",
    content: 'Copy and Paste your Banuba client token into the appropriate section of `/BanubaAgoraFilters/Token.swift` with " " symbols. For example:'
  }, {
    heading: "get-started-1",
    content: "Visit agora.io to sign up and get the token, app and channel ID."
  }, {
    heading: "get-started-1",
    content: 'Copy and Paste your agora token, app and chanel ID into appropriate section of `/BanubaAgoraFilters/Token.swift` with " " symbols. For example:'
  }, {
    heading: "get-started-1",
    content: "Donwload the needed effects from here. This guarantees, that you will use the up-to-date version of the effects. The effects must be copied to the `agora-plugin-filters-ios -> BanubaAgoraFilters -> effects` folder."
  }, {
    heading: "get-started-1",
    content: "Open the `BanubaAgoraFilters.xcodeproj` project in Xcode and run the `BanubaAgoraFilters` target."
  }, {
    heading: "get-started-1",
    content: "If you have any problems with installing Agora frameworks with Swift Package Manager refer to this page"
  }, {
    heading: "connecting-banuba-sdk-and-agorartckit-to-your-own-project",
    content: "Connecting Banuba SDK to your project is similar to the steps in the Getting Started section. As for AgoraRtcKit, we advise to use Swift Package Manager. You should use the following settings:\nURL: `https://github.com/AgoraIO/AgoraRtcEngine_iOS.git`\nVersion Rule: `Up to next minor`\nVersion: `4.0.0`"
  }, {
    heading: "how-to-use-banubafiltersagoraextension-1",
    content: "To control `BanubaFiltersAgoraExtension` with Agora libs look available keys listed below:"
  }, {
    heading: "how-to-use-banubafiltersagoraextension-1",
    content: "To enable/disable `BanubaFiltersAgoraExtension` use the following method:"
  }, {
    heading: "how-to-use-banubafiltersagoraextension-1",
    content: "Before applying an effect on your video you have to initialize `BanubaFiltersAgoraExtension` with the path to effects and banuba client token. Look how it can be achieved:"
  }, {
    heading: "how-to-use-banubafiltersagoraextension-1",
    content: "After those steps you can tell `BanubaFiltersAgoraExtension` to enable or disable the mask:"
  }, {
    heading: "how-to-use-banubafiltersagoraextension-1",
    content: "If the mask has parameters and you want to change them, you can do it the next way:"
  }, {
    heading: "how-to-use-banubafiltersagoraextension-1",
    content: "`string` must be a string with method's name and parameters. You can find an example in our documentation."
  }, {
    heading: "how-to-build-banubafiltersagoraextension",
    content: "To build the `BanubaFiltersAgoraExtension` manually, please follow the steps bellow:"
  }, {
    heading: "how-to-build-banubafiltersagoraextension",
    content: "Execute `pod install` to get the Banuba SDK."
  }, {
    heading: "how-to-build-banubafiltersagoraextension",
    content: "Open the `BanubaAgoraFilters.xcworkspace` file in Xcode."
  }, {
    heading: "how-to-build-banubafiltersagoraextension",
    content: "Choose **File->Packages->Reset Package Cashes** from Xcode menu."
  }, {
    heading: "how-to-build-banubafiltersagoraextension",
    content: "Build the target `BanubaFiltersAgoraExtension`. It will be built with your Swift version. After this you should open the section **Products** in the **Project Navigator** (the left part of the Xcode screen). Click on the `BanubaFiltersAgoraExtension` with the right click of the mouse and choose **Show in Finder**. Copy the `BanubaFiltersAgoraExtension.framework` from the folder."
  }, {
    heading: "how-to-build-banubafiltersagoraextension",
    content: "Then put the framework to the `/Frameworks` folder of the `BanubaAgoraFilters.xcodeproj` (or of your project). Then you can build BanubaAgoraFilters or your project."
  }, {
    heading: "how-to-build-banubafiltersagoraextension",
    content: "The reconnection of the `BanubaFiltersAgoraExtension.framework` to the example project may be required. To do it, you should remove the `BanubaFiltersAgoraExtension.framework` from the Project Settings: **General-> Frameworks, Libraries and Embedded Content**. Then you should drag\\&drop the `BanubaFiltersAgoraExtension.framework` to this section. You should choose **Embed\\&Sign** for this framework."
  }, {
    heading: "effects-managing-1",
    content: "To retrieve effects list use the following code:"
  }, {
    heading: "effects-managing-1",
    content: "`EffectViewModel` has the following properties:"
  }, {
    heading: "run-the-demo-1",
    content: "Demo app (distribution by request via support channels at the bottom of the page)"
  }, {
    heading: "run-the-demo-1",
    content: "Github repository"
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "integrate-banuba-face-ar-extension",
    content: "Integrate Banuba Face AR extension"
  }, {
    id: "get-started",
    content: "Get Started"
  }, {
    id: "how-to-use-banubafiltersagoraextension",
    content: "How to use `BanubaFiltersAgoraExtension`"
  }, {
    id: "effects-managing",
    content: "Effects managing"
  }, {
    id: "run-the-demo",
    content: "Run the demo"
  }, {
    id: "prerequisites-1",
    content: "Prerequisites"
  }, {
    id: "integrate-banuba-face-ar-extension-1",
    content: "Integrate Banuba Face AR extension"
  }, {
    id: "get-started-1",
    content: "Get Started"
  }, {
    id: "connecting-banuba-sdk-and-agorartckit-to-your-own-project",
    content: "Connecting Banuba SDK and AgoraRtcKit to your own project"
  }, {
    id: "how-to-use-banubafiltersagoraextension-1",
    content: "How to use `BanubaFiltersAgoraExtension`"
  }, {
    id: "how-to-build-banubafiltersagoraextension",
    content: "How to build `BanubaFiltersAgoraExtension`"
  }, {
    id: "effects-managing-1",
    content: "Effects managing"
  }, {
    id: "run-the-demo-1",
    content: "Run the demo"
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
  url: "#integrate-banuba-face-ar-extension",
  title: _jsx(_Fragment, {
    children: "Integrate Banuba Face AR extension"
  })
}, {
  depth: 3,
  url: "#get-started",
  title: _jsx(_Fragment, {
    children: "Get Started"
  })
}, {
  depth: 4,
  url: "#how-to-use-banubafiltersagoraextension",
  title: _jsxs(_Fragment, {
    children: ["How to use ", _jsx("code", {
      children: "BanubaFiltersAgoraExtension"
    })]
  })
}, {
  depth: 4,
  url: "#effects-managing",
  title: _jsx(_Fragment, {
    children: "Effects managing"
  })
}, {
  depth: 2,
  url: "#run-the-demo",
  title: _jsx(_Fragment, {
    children: "Run the demo"
  })
}, {
  depth: 2,
  url: "#prerequisites-1",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#integrate-banuba-face-ar-extension-1",
  title: _jsx(_Fragment, {
    children: "Integrate Banuba Face AR extension"
  })
}, {
  depth: 3,
  url: "#get-started-1",
  title: _jsx(_Fragment, {
    children: "Get Started"
  })
}, {
  depth: 4,
  url: "#connecting-banuba-sdk-and-agorartckit-to-your-own-project",
  title: _jsx(_Fragment, {
    children: "Connecting Banuba SDK and AgoraRtcKit to your own project"
  })
}, {
  depth: 4,
  url: "#how-to-use-banubafiltersagoraextension-1",
  title: _jsxs(_Fragment, {
    children: ["How to use ", _jsx("code", {
      children: "BanubaFiltersAgoraExtension"
    })]
  })
}, {
  depth: 4,
  url: "#how-to-build-banubafiltersagoraextension",
  title: _jsxs(_Fragment, {
    children: ["How to build ", _jsx("code", {
      children: "BanubaFiltersAgoraExtension"
    })]
  })
}, {
  depth: 4,
  url: "#effects-managing-1",
  title: _jsx(_Fragment, {
    children: "Effects managing"
  })
}, {
  depth: 2,
  url: "#run-the-demo-1",
  title: _jsx(_Fragment, {
    children: "Run the demo"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
      children: "This guide is provided by Banuba. Agora is planning a documentation upgrade program for all extensions on the marketplace. Please stay tuned."
    }), `
`, _jsx(_components.p, {
      children: "By integrating Banuba Face AR SDK and Agora.io SDK you can enable augmented reality features in video calls such as face filters, face touch up filters and virtual backgrounds. You can find the integration examples below."
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
        }), _jsx(_components.h2, {
          id: "prerequisites",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The latest Banuba SDK archive"
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://f.hubspotusercontent10.net/hubfs/4992313/Agora_Banuba_Extension/AgoraBanubaExtension2(Android).zip",
              children: "Banuba Extension files for Android"
            })
          }), `
`, _jsx(_components.li, {
            children: "Banuba trial client token."
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["To receive a trial token or a full commercial licence from Banuba - please fill in our form on ", _jsx(_components.a, {
            href: "https://www.banuba.com/face-filters-sdk",
            children: "form on banuba.com"
          }), " website, or contact us via ", _jsx(_components.a, {
            href: "mailto:info@banuba.com",
            children: "info@banuba.com"
          }), "."]
        }), _jsx(_components.h2, {
          id: "integrate-banuba-face-ar-extension",
          children: "Integrate Banuba Face AR extension"
        }), _jsx(_components.h3, {
          id: "get-started",
          children: "Get Started"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Make sure that you have Android ", _jsx(_components.strong, {
              children: "NDK"
            }), " and ", _jsx(_components.strong, {
              children: "CMake"
            }), " are installed! Project contains C++ sources, so this is required! Recommended NDK versions is 21.1.6352462, required CMake version is 3.9, 3.14 or above is recommended (Android SDK manager provides 3.18.1, it should be installed)."]
          }), `
`, _jsxs(_components.li, {
            children: ["Get the latest Banuba SDK archive, ", _jsx(_components.a, {
              href: "https://www.banuba.com/facear-sdk/face-filters",
              children: "Banuba trial client token"
            }), `.
To receive full commercial license from Banuba - please fill in our form on `, _jsx(_components.a, {
              href: "https://www.banuba.com/face-filters-sdk",
              children: "form on banuba.com"
            }), " website, or contact us via ", _jsx(_components.a, {
              href: "mailto:info@banuba.com",
              children: "info@banuba.com"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["Copy ", _jsx(_components.code, {
              children: ".aar"
            }), " file from the Banuba SDK archive into ", _jsx(_components.code, {
              children: "libs"
            }), " dir:", `
`, _jsxs(_components.blockquote, {
              children: [`
`, _jsxs(_components.p, {
                children: [_jsx(_components.code, {
                  children: "banuba_effect_player-release.aar"
                }), " => ", _jsx(_components.code, {
                  children: "libs/"
                })]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: ["Copy ", _jsx(_components.code, {
              children: "include/bnb"
            }), " directory into ", _jsx(_components.code, {
              children: "libs/bnb_sdk/"
            }), ":", `
`, _jsxs(_components.blockquote, {
              children: [`
`, _jsxs(_components.p, {
                children: [_jsx(_components.code, {
                  children: "include/bnb"
                }), " => ", _jsx(_components.code, {
                  children: "libs/bnb_sdk/bnb"
                })]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: ["Get ", _jsx(_components.a, {
              href: "https://console.agora.io/marketplace/extension/introduce?serviceName=banuba",
              children: "the latest Agora RTC SDK archive"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["Copy ", _jsx(_components.code, {
              children: "jar"
            }), " files from the Agora RTC SDK archive into ", _jsx(_components.code, {
              children: "libs"
            }), " dir:", `
`, _jsxs(_components.blockquote, {
              children: [`
`, _jsxs(_components.p, {
                children: [_jsx(_components.code, {
                  children: "agora-rtc-sdk.jar"
                }), " => ", _jsx(_components.code, {
                  children: "libs/"
                })]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: ["Copy architecture folders from the Agora RTC SDK archive into ", _jsx(_components.code, {
              children: "jniLibs"
            }), " dir:", `
`, _jsxs(_components.blockquote, {
              children: [`
`, _jsxs(_components.p, {
                children: [_jsx(_components.code, {
                  children: "arm64-v8a"
                }), ", ", _jsx(_components.code, {
                  children: "armeabi-v7a"
                }), " and ", _jsx(_components.code, {
                  children: "x86_64"
                }), " => ", _jsx(_components.code, {
                  children: "libs/jniLibs/"
                })]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: ["Copy Agora SDK headers (", _jsx(_components.code, {
              children: "*.h"
            }), " files) into ", _jsx(_components.code, {
              children: "libs/agora_rtc_sdk/include"
            }), ":", `
`, _jsxs(_components.blockquote, {
              children: [`
`, _jsxs(_components.p, {
                children: [_jsx(_components.code, {
                  children: "low_level_api/include"
                }), " => ", _jsx(_components.code, {
                  children: "libs/agora_rtc_sdk/include"
                })]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: ["Copy and Paste your Banuba client token into appropriate section of ", _jsx(_components.code, {
              children: "app/src/main/java/com/banuba/sdk/agorapluginexample/ClientToken.kt"
            }), ' with " " symbols. For example: BANUBA_CLIENT_TOKEN = "place_your_token_here"']
          }), `
`, _jsxs(_components.li, {
            children: ["Visit ", _jsx(_components.a, {
              href: "https://console.agora.io",
              children: "agora.io"
            }), " to sign up and get token, app ID and channel ID."]
          }), `
`, _jsxs(_components.li, {
            children: ["Copy and Paste your Agora token, app ID and channel ID into appropriate section of ", _jsx(_components.code, {
              children: "app/src/main/java/com/banuba/sdk/agorapluginexample/ClientToken.kt"
            }), ' with " " symbols. For example: AGORA_APP_ID = "place_your_token_here"']
          }), `
`, _jsx(_components.li, {
            children: "Open the project in Android Studio and run the necessary target using the usual steps."
          }), `
`]
        }), _jsxs(_components.h4, {
          id: "how-to-use-banubafiltersagoraextension",
          children: ["How to use ", _jsx(_components.code, {
            children: "BanubaFiltersAgoraExtension"
          })]
        }), _jsx(_components.p, {
          children: "Add following imports:"
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
                  children: " com.banuba.agora.plugin.BanubaEffectsLoader"
                })]
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " com.banuba.agora.plugin.BanubaExtensionManager"
                })]
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " com.banuba.agora.plugin.BanubaResourceManager"
                })]
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " com.banuba.agora.plugin.model.ArEffect"
                })]
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " com.banuba.sdk.utils.ContextProvider"
                })]
              })]
            })
          })
        }), _jsx(_components.p, {
          children: "Add extension to RtcEngineConfig:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "RtcEngineConfig"
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
                  children: "apply"
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
                  children: "    .."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    System."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "loadLibrary"
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
                  children: '"banuba"'
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
                  children: "    addExtension"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(BanubaExtensionManager.EXTENSION_NAME)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    ContextProvider."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setContext"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(mContext)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    .."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
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
          children: "Create and initialize BanubaResourceManager:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
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
                  children: " val"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " banubaResourceManager "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "by"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " lazy"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(LazyThreadSafetyMode.NONE) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "    BanubaResourceManager"
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
                  children: "this"
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
                  children: "}"
                })
              })]
            })
          })
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
            icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "override"
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
                  children: " onCreate"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(savedInstanceState: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Bundle"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "?) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    .."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    banubaResourceManager."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "prepare"
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
        }), _jsx(_components.p, {
          children: "After those steps enable and initialize extension:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraRtc."
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
                  children: "    BanubaExtensionManager.VENDOR_NAME,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    BanubaExtensionManager.VIDEO_FILTER_NAME,"
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
                  children: ")"
                })
              })]
            })
          })
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
            icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
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
                  children: " fun"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " initBanubaPlugin"
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
                  children: "    agoraRtc."
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
                  children: "        BanubaExtensionManager.VENDOR_NAME,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        BanubaExtensionManager.VIDEO_FILTER_NAME,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        BanubaExtensionManager.KEY_SET_RESOURCES_PATH,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        banubaResourceManager.resourcesPath"
                })
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
                  children: "    agoraRtc."
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
                  children: "        BanubaExtensionManager.VENDOR_NAME,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        BanubaExtensionManager.VIDEO_FILTER_NAME,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        BanubaExtensionManager.KEY_SET_EFFECTS_PATH,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        banubaResourceManager.effectsPath"
                })
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
                  children: "    agoraRtc."
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
                  children: "        BanubaExtensionManager.VENDOR_NAME,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        BanubaExtensionManager.VIDEO_FILTER_NAME,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        BanubaExtensionManager.KEY_SET_TOKEN,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        BANUBA_CLIENT_TOKEN"
                })
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
          children: "To enable/disable effects use the following code:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
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
                  children: " val"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " onEffectPrepared "
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
                  children: "BanubaResourceManager"
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
                  children: "EffectPreparedCallback"
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
                  children: " onPrepared"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(effectName: "
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
                  children: "        sendEffectToFilter"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(effectName)"
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
                  children: "private"
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
                  children: " sendEffectToFilter"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(effect: "
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    agoraRtc."
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
                  children: "        BanubaExtensionManager.VENDOR_NAME,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        BanubaExtensionManager.VIDEO_FILTER_NAME,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        BanubaExtensionManager.KEY_LOAD_EFFECT,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        effect"
                })
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
            icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "banubaResourceManager."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "prepareEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(Effect name, onEffectPrepared)"
                })]
              })
            })
          })
        }), _jsx(_components.h4, {
          id: "effects-managing",
          children: "Effects managing"
        }), _jsx(_components.p, {
          children: "To retrieve current effects use the following code:"
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
                  children: " effects: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "List"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "ArEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "> "
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
                  children: " BanubaEffectsLoader"
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
                  children: "this"
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
                  children: "loadEffects"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
                })]
              })
            })
          })
        }), _jsxs(_components.p, {
          children: ["ArEffect contains following information:", _jsx(_components.br, {}), `
`, _jsx(_components.code, {
            children: "name: String"
          }), " - pass to ", _jsx(_components.code, {
            children: "banubaResourceManager.prepareEffect(Effect name, onEffectPrepared)"
          }), ". Also can be used to display label on the UI", _jsx(_components.br, {}), `
`, _jsx(_components.code, {
            children: "preview: Bitmap"
          }), " - can be used as preview image"]
        }), _jsxs(_components.p, {
          children: ["To modify effects, add or remove effect folder in ", _jsx(_components.code, {
            children: "app/src/main/assets/effects"
          }), ` directory.
By default sample contains the following effects:`]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "ElvisUnleashed"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "EnglandEightPieceCap"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "FashionHistory1940_male"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "MorphingHatBow"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "Nerd"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "SnapBubblesGlasses"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "Space"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "StarGlow"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "TitanicJack"
            })
          }), `
`]
        }), _jsx(_components.h2, {
          id: "run-the-demo",
          children: "Run the demo"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://f.hubspotusercontent10.net/hubfs/4992313/Agora_Banuba_Extension/AgoraBanubaDemoApp(Android).apk",
              children: "Demo app (public)"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/Banuba/agora-plugin-filters-android",
              children: "Github repository"
            })
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
        }), _jsx(_components.h2, {
          id: "prerequisites-1",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The latest Banuba SDK archive"
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://www.banuba.com/faq/how-to-integrate-banuba-sdk-with-agora-sdk",
              children: "Banuba Extension files for iOS"
            })
          }), `
`, _jsx(_components.li, {
            children: "Banuba trial client token."
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["To receive a trial token or a full commercial licence from Banuba - please fill in our form on ", _jsx(_components.a, {
            href: "https://www.banuba.com/face-filters-sdk",
            children: "form on banuba.com"
          }), " website, or contact us via ", _jsx(_components.a, {
            href: "mailto:info@banuba.com",
            children: "info@banuba.com"
          }), "."]
        }), _jsx(_components.h2, {
          id: "integrate-banuba-face-ar-extension-1",
          children: "Integrate Banuba Face AR extension"
        }), _jsx(_components.h3, {
          id: "get-started-1",
          children: "Get Started"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [`Get the following Banuba trial client token.
To receive a trial token or a full commercial licence from Banuba - please fill in our form on `, _jsx(_components.a, {
                href: "https://www.banuba.com/face-filters-sdk",
                children: "form on banuba.com"
              }), " website, or contact us via ", _jsx(_components.a, {
                href: "mailto:info@banuba.com",
                children: "info@banuba.com"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Execute ", _jsx(_components.code, {
                children: "pod install"
              }), " to get the Banuba SDK."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Open the ", _jsx(_components.code, {
                children: "BanubaAgoraFilters.xcworkspace"
              }), " file in Xcode."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Copy and Paste your Banuba client token into the appropriate section of ", _jsx(_components.code, {
                children: "/BanubaAgoraFilters/Token.swift"
              }), ' with " " symbols. For example:']
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
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
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
                      children: " banubaClientToken "
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
                      children: ' "Banuba Token"'
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
              children: "Visit agora.io to sign up and get the token, app and channel ID."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Copy and Paste your agora token, app and chanel ID into appropriate section of ", _jsx(_components.code, {
                children: "/BanubaAgoraFilters/Token.swift"
              }), ' with " " symbols. For example:']
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
                      children: "internal"
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
                      children: " agoraAppID "
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
                      children: ' "Agora App ID"'
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "internal"
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
                      children: " agoraClientToken "
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
                      children: ' "Agora Token"'
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "internal"
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
                      children: " agoraChannelId "
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
                      children: ' "Agora Channel ID"'
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
              children: ["Donwload the needed effects from ", _jsx(_components.a, {
                href: "https://docs.banuba.com/face-ar-sdk-v1/overview/demo_face_filters",
                children: "here"
              }), ". This guarantees, that you will use the up-to-date version of the effects. The effects must be copied to the ", _jsx(_components.code, {
                children: "agora-plugin-filters-ios -> BanubaAgoraFilters -> effects"
              }), " folder."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Open the ", _jsx(_components.code, {
                children: "BanubaAgoraFilters.xcodeproj"
              }), " project in Xcode and run the ", _jsx(_components.code, {
                children: "BanubaAgoraFilters"
              }), " target."]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["If you have any problems with installing Agora frameworks with Swift Package Manager refer to this ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/AgoraRtcEngine_iOS",
            children: "page"
          })]
        }), _jsx(_components.h4, {
          id: "connecting-banuba-sdk-and-agorartckit-to-your-own-project",
          children: "Connecting Banuba SDK and AgoraRtcKit to your own project"
        }), _jsxs(_components.p, {
          children: [`Connecting Banuba SDK to your project is similar to the steps in the Getting Started section. As for AgoraRtcKit, we advise to use Swift Package Manager. You should use the following settings:
URL: `, _jsx(_components.code, {
            children: "https://github.com/AgoraIO/AgoraRtcEngine_iOS.git"
          }), `
Version Rule: `, _jsx(_components.code, {
            children: "Up to next minor"
          }), `
Version: `, _jsx(_components.code, {
            children: "4.0.0"
          })]
        }), _jsxs(_components.h4, {
          id: "how-to-use-banubafiltersagoraextension-1",
          children: ["How to use ", _jsx(_components.code, {
            children: "BanubaFiltersAgoraExtension"
          })]
        }), _jsxs(_components.p, {
          children: ["To control ", _jsx(_components.code, {
            children: "BanubaFiltersAgoraExtension"
          }), " with Agora libs look available keys listed below:"]
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
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "public"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " struct"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " BanubaPluginKeys"
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
                  children: "    public"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " static"
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
                  children: " vendorName "
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
                  children: ' "Banuba"'
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
                  children: " static"
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
                  children: ' "BanubaFilter"'
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
                  children: " static"
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
                  children: " loadEffect "
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
                  children: ' "load_effect"'
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
                  children: " static"
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
                  children: " unloadEffect "
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
                  children: ' "unload_effect"'
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
                  children: " static"
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
                  children: " setEffectsPath "
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
                  children: ' "set_effects_path"'
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
                  children: " static"
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
                  children: " setToken "
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
                  children: ' "set_token"'
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
        }), _jsxs(_components.p, {
          children: ["To enable/disable ", _jsx(_components.code, {
            children: "BanubaFiltersAgoraExtension"
          }), " use the following method:"]
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
                  children: " BanubaFiltersAgoraExtension"
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
                  children: "agoraKit"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "?"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    withVendor"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": BanubaPluginKeys.vendorName,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    extension"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": BanubaPluginKeys.extensionName,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    enabled"
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
                })]
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
        }), _jsxs(_components.p, {
          children: ["Before applying an effect on your video you have to initialize ", _jsx(_components.code, {
            children: "BanubaFiltersAgoraExtension"
          }), " with the path to effects and banuba client token. Look how it can be achieved:"]
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
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "?"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setExtensionPropertyWithVendor"
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
                  children: "    BanubaPluginKeys.vendorName,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    extension"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": BanubaPluginKeys.extensionName,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    key"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": BanubaPluginKeys.setEffectsPath,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    value"
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
                  children: '"place_path_to_effects_folder_here"'
                })]
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
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "?"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setExtensionPropertyWithVendor"
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
                  children: "    BanubaPluginKeys.vendorName,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    extension"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": BanubaPluginKeys.extensionName,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    key"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": BanubaPluginKeys.setToken,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    value"
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
                  children: '"place_your_banuba_token_here"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "trimmingCharacters"
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
                  children: "in"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": .whitespacesAndNewlines)"
                })]
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
        }), _jsxs(_components.p, {
          children: ["After those steps you can tell ", _jsx(_components.code, {
            children: "BanubaFiltersAgoraExtension"
          }), " to enable or disable the mask:"]
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
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "?"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setExtensionPropertyWithVendor"
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
                  children: "    BanubaPluginKeys.vendorName,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    extension"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": BanubaPluginKeys.extensionName,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    key"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": BanubaPluginKeys.loadEffect,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    value"
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
                  children: '"put_effect_name_here"'
                })]
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
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "?"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setExtensionPropertyWithVendor"
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
                  children: "    BanubaPluginKeys.vendorName,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    extension"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": BanubaPluginKeys.extensionName,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    key"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": BanubaPluginKeys.unloadEffect,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    value"
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
                  children: '" "'
                })]
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
        }), _jsx(_components.p, {
          children: "If the mask has parameters and you want to change them, you can do it the next way:"
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
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "?"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setExtensionPropertyWithVendor"
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
                  children: "    BanubaPluginKeys.vendorName,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    extension"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": BanubaPluginKeys.extensionName,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    key"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": BanubaPluginKeys.evalJSMethod,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    value"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": string"
                })]
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
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "string"
          }), " must be a string with method's name and parameters. You can find an example in our ", _jsx(_components.a, {
            href: "https://docs.banuba.com/face-ar-sdk-v1/effect_api/face_beauty",
            children: "documentation"
          }), "."]
        }), _jsxs(_components.h4, {
          id: "how-to-build-banubafiltersagoraextension",
          children: ["How to build ", _jsx(_components.code, {
            children: "BanubaFiltersAgoraExtension"
          })]
        }), _jsxs(_components.p, {
          children: ["To build the ", _jsx(_components.code, {
            children: "BanubaFiltersAgoraExtension"
          }), " manually, please follow the steps bellow:"]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Execute ", _jsx(_components.code, {
                children: "pod install"
              }), " to get the Banuba SDK."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Open the ", _jsx(_components.code, {
                children: "BanubaAgoraFilters.xcworkspace"
              }), " file in Xcode."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Choose ", _jsx(_components.strong, {
                children: "File->Packages->Reset Package Cashes"
              }), " from Xcode menu."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Build the target ", _jsx(_components.code, {
                children: "BanubaFiltersAgoraExtension"
              }), ". It will be built with your Swift version. After this you should open the section ", _jsx(_components.strong, {
                children: "Products"
              }), " in the ", _jsx(_components.strong, {
                children: "Project Navigator"
              }), " (the left part of the Xcode screen). Click on the ", _jsx(_components.code, {
                children: "BanubaFiltersAgoraExtension"
              }), " with the right click of the mouse and choose ", _jsx(_components.strong, {
                children: "Show in Finder"
              }), ". Copy the ", _jsx(_components.code, {
                children: "BanubaFiltersAgoraExtension.framework"
              }), " from the folder."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Then put the framework to the ", _jsx(_components.code, {
                children: "/Frameworks"
              }), " folder of the ", _jsx(_components.code, {
                children: "BanubaAgoraFilters.xcodeproj"
              }), " (or of your project). Then you can build BanubaAgoraFilters or your project."]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["The reconnection of the ", _jsx(_components.code, {
            children: "BanubaFiltersAgoraExtension.framework"
          }), " to the example project may be required. To do it, you should remove the ", _jsx(_components.code, {
            children: "BanubaFiltersAgoraExtension.framework"
          }), " from the Project Settings: ", _jsx(_components.strong, {
            children: "General-> Frameworks, Libraries and Embedded Content"
          }), ". Then you should drag&drop the ", _jsx(_components.code, {
            children: "BanubaFiltersAgoraExtension.framework"
          }), " to this section. You should choose ", _jsx(_components.strong, {
            children: "Embed&Sign"
          }), " for this framework."]
        }), _jsx(_components.h4, {
          id: "effects-managing-1",
          children: "Effects managing"
        }), _jsx(_components.p, {
          children: "To retrieve effects list use the following code:"
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
              children: [_jsxs(_components.span, {
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
                  children: " effectsPath "
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
                  children: " BanubaEffectsManager.effectsURL.path"
                })]
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
                  children: " effectsService "
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
                  children: " EffectsService"
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
                  children: "effectsPath"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": effectsPath)"
                })]
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
                  children: " effectViewModels "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    effectsService"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    ."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "getEffectNames"
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
                  children: "    ."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "sorted"
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
                  children: "    ."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "compactMap"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " { effectName "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "in"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        guard"
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
                  children: " effectPreviewImage "
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
                  children: " effectsService."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "getEffectPreview"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(effectName) "
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
                  children: "            return"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " nil"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        }"
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
                  children: "        let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " effectViewModel "
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
                  children: " EffectViewModel"
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
                  children: "image"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": effectPreviewImage, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "effectName"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": effectName)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        return"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " effectViewModel"
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
              })]
            })
          })
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "EffectViewModel"
          }), " has the following properties:"]
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
                  children: " EffectViewModel"
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
                  children: "    let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " image: UIImage"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " effectName: "
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
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " cancelEffectModel: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "Bool"
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
                  children: "        return"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " effectName "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "=="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " nil"
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
                  children: "}"
                })
              })]
            })
          })
        }), _jsx(_components.h2, {
          id: "run-the-demo-1",
          children: "Run the demo"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://appcenter.ms/users/andrei.sak-banuba.com/apps/BanubaAgoraExtensionSample",
              children: "Demo app (distribution by request via support channels at the bottom of the page)"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/Banuba/agora-plugin-filters-ios",
              children: "Github repository"
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
