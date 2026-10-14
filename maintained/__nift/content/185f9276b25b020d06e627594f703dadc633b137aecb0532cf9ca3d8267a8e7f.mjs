import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "HTEffect 3D Avatar",
  description: "Integrate and use HT Portrait 3D special effects in your Android or iOS app."
};
export let _markdown = `

The HTEffect 3D Avatar extension enables you to quickly and seamlessly integrate 3D portrait special effects capabilities into your app. It encapsulates the Hongtu HTAvatar core API. You call API functions by setting the appropriate extension parameters.

<Tabs defaultValue="android" groupId="platform">
  <TabsList>
    <TabsTrigger value="android">
      Android
    </TabsTrigger>

    <TabsTrigger value="ios">
      iOS
    </TabsTrigger>
  </TabsList>

  <TabsContent value="android">
    ## Understand the tech [#understand-the-tech]

    You use RTC SDK methods to pass the appropriate \`key\` and \`value\` parameters to the extension. The \`key\` parameter corresponds exactly to the Hongtu API name, and the \`value\` parameter wraps some or all API parameters in JSON format.

    ## Prerequisites [#prerequisites]

    * Android Studio 4.1 or later.
    * A physical Android device.
    * Implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk).

    ## Project setup [#project-setup]

    1. Download the [Android package](https://github.com/Texeljoy/AgoraHTAvatarExtension/tree/master/Android/ALL_ARCHITECTURE).

    2. Copy all \`.aar\` files to \`/app/libs\`.

    3. Contact [support@agora.io](mailto\\:support@agora.io) to obtain the resource package and save the required model and prop files to \`/app/src/main/assets\`.

    4. Add the Gradle dependency:

       \`\`\`text
       implementation fileTree(dir: "libs", include: ["*.jar", "*.aar"])
       \`\`\`

    5. Import the required Agora classes.

    ## Integrate the extension [#integrate-the-extension]

    ### Enable the plug-in [#enable-the-plug-in]

    \`\`\`java
    private void enableExtension(boolean enabled) {
      agoraEngine.enableExtension("Texeljoy", "HTAvatar", enabled);
    }
    \`\`\`

    ### Initialize the plug-in [#initialize-the-plug-in]

    \`\`\`java
    private void initExtension() {
      try {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("license", HTKey);
        setExtensionProperty("htARInitOffline", jsonObject.toString());
      } catch (JSONException e) {
        Log.e(TAG, e.toString());
      }
    }
    \`\`\`

    ### Set up a 3D effect [#set-up-a-3d-effect]

    Call \`setExtensionProperty\` with keys such as \`htARRenderEnable\` and \`htARSetModel\` to enable effects and switch models.

    ## Reference [#reference]

    ### Sample project [#sample-project]

    Run the sample project from [AgoraHTAvatarExtensionDemo](https://github.com/Texeljoy/AgoraHTAvatarExtensionDemo/tree/master/Android).

    ### API reference [#api-reference]

    * [RtcEngineConfig.addExtension](/en/api-reference/rtc/android/class-and-enum/classes/class-rtcengineconfig)
    * [enableExtension](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_enableextension)
    * [setExtensionProperty](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setextensionproperty)
    * [IMediaExtensionObserver](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_imediaextensionobserver.html)

    ### Interface description [#interface-description]

    When you call \`setExtensionProperty\`, the following keys and their corresponding functions are supported:

    #### Initialization [#initialization]

    | Key                                 | Description                             |
    | :---------------------------------- | :-------------------------------------- |
    | [htARInitOffline](#htarinitoffline) | Initialization, offline authentication. |

    #### Destroy [#destroy]

    | Key                                                     | Description                |
    | :------------------------------------------------------ | :------------------------- |
    | [htARReleaseBufferRenderer](#htarreleasebufferrenderer) | Resource release function. |

    #### Functional interface [#functional-interface]

    | Key                                   | Description                                         |
    | :------------------------------------ | :-------------------------------------------------- |
    | [htARRenderEnable](#htarrenderenable) | Turn on/off the AR special effects function.        |
    | [htARSetModel](#htarsetmodel)         | Switch AR model function.                           |
    | [htARMirror](#htarmirror)             | Set whether the image has a mirror function.        |
    | [htARImageFormat](#htarimageformat)   | Set image format function.                          |
    | [htARRotation](#htarrotation)         | Set image rotation angle function.                  |
    | [htARMaxFaces](#htarmaxfaces)         | Set the maximum number of supported faces function. |
    | [htARCopyResource](#htarcopyresource) | Copy the resource path to the sandbox function.     |

    ### Value description of method keys [#value-description-of-method-keys]

    #### htARInitOffline [#htarinitoffline]

    \`value\` contains the following parameters:

    | Value parameter | Description                                 |
    | :-------------- | :------------------------------------------ |
    | \`license\`       | String type, AR offline authentication key. |

    #### htARReleaseBufferRenderer [#htarreleasebufferrenderer]

    \`value\` contains the following parameters:

    | Value parameter | Description                                             |
    | :-------------- | :------------------------------------------------------ |
    | \`enable\`        | BOOL type, whether to confirm the release of resources. |

    #### htARRenderEnable [#htarrenderenable]

    \`value\` contains the following parameters:

    | Value parameter | Description                                   |
    | :-------------- | :-------------------------------------------- |
    | \`enable\`        | BOOL type, whether to enable the AR function. |

    #### htARSetModel [#htarsetmodel]

    \`value\` contains the following parameters:

    | Value parameter | Description                         |
    | :-------------- | :---------------------------------- |
    | \`name\`          | String type, the name of the model. |

    #### htARMirror [#htarmirror]

    \`value\` contains the following parameters:

    | Value parameter | Description                                                                                  |
    | :-------------- | :------------------------------------------------------------------------------------------- |
    | \`isMirror\`      | BOOL type, whether to set the mirror display of prop special effects. The default is \`true\`. |

    #### htARImageFormat [#htarimageformat]

    \`value\` contains the following parameters:

    | Value parameter | Description                                                                                                                                                                                                                         |
    | :-------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`imageFormat\`   | Int type, enumeration value of image format. For details, see [HTEARImageFormat](https://gitee.com/htai-open/agora-htavatar-extension/blob/master/iOS/ALL_ARCHITECTURE/Release/HTEffectAR.framework/Headers/HTEffectARInterface.h). |

    #### htARRotation [#htarrotation]

    \`value\` contains the following parameters:

    | Value parameter | Description                                                                                                                                                                                                                                 |
    | :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | \`rotation\`      | Int type, enumeration value of image rotation angle. For details, see [HTEAROrientation](https://gitee.com/htai-open/agora-htavatar-extension/blob/master/iOS/ALL_ARCHITECTURE/Release/HTEffectAR.framework/Headers/HTEffectARInterface.h). |

    #### htARMaxFaces [#htarmaxfaces]

    \`value\` contains the following parameters:

    | Value parameter | Description                                                                   |
    | :-------------- | :---------------------------------------------------------------------------- |
    | \`maxFaces\`      | Int type, the maximum number of supported faces. The value range is \`[1, 5]\`. |

    #### htARCopyResource [#htarcopyresource]

    \`value\` contains the following parameters:

    | Value parameter | Description                                                   |
    | :-------------- | :------------------------------------------------------------ |
    | \`path\`          | String type, the path that needs to be copied to the sandbox. |
  </TabsContent>

  <TabsContent value="ios">
    ## Understand the tech [#understand-the-tech-1]

    You use RTC SDK methods to pass the appropriate \`key\` and \`value\` parameters to the extension. The \`key\` parameter corresponds exactly to the Hongtu API name, and the \`value\` parameter wraps some or all API parameters in JSON format.

    ## Prerequisites [#prerequisites-1]

    * Xcode 12.0 or later.
    * A physical iOS device.
    * Implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk).

    ## Project setup [#project-setup-1]

    1. Download the [iOS package](https://github.com/Texeljoy/AgoraHTAvatarExtension/tree/master/iOS/ALL_ARCHITECTURE/Release).
    2. Copy the \`.framework\` library files to your project folder.
    3. Save \`HTKey.h\` and \`HTEffect.bundle\` to the project folder.
    4. Ensure the dynamic libraries are set to **Embed & Sign**.

    ## Integrate the extension [#integrate-the-extension-1]

    ### Enable the plug-in [#enable-the-plug-in-1]

    \`\`\`objc
    [self.agoraKit enableExtensionWithVendor:@"Texeljoy"
                                   extension:@"HTAvatar"
                                     enabled:self.enable];
    \`\`\`

    ### Initialize the plug-in [#initialize-the-plug-in-1]

    Use \`setExtensionPropertyWithVendor\` to call \`htARCopyResource\`, \`htARInitOffline\`, and optional image format configuration.

    ### Set up a 3D effect [#set-up-a-3d-effect-1]

    Call \`setExtensionPropertyWithVendor\` with keys such as \`htARRenderEnable\` and \`htARSetModel\` to enable effects and switch models.

    ## Reference [#reference-1]

    ### Sample project [#sample-project-1]

    Run the sample project from [AgoraHTAvatarExtensionDemo](https://github.com/Texeljoy/AgoraHTAvatarExtensionDemo/tree/master/iOS).

    ### API reference [#api-reference-1]

    * [enableExtensionWithVendor](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enableextension\\(withvendor\\:extension\\:enabled:\\)?language=objc)
    * [setExtensionPropertyWithVendor](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setextensionpropertywithvendor\\(_\\:extension\\:extensioninfo\\:key\\:value:\\)?language=objc)

    ### Interface description [#interface-description-1]

    When you call \`setExtensionPropertyWithVendor\`, the following keys and their corresponding functions are supported:

    #### Initialization [#initialization-1]

    | Key                                   | Description                             |
    | :------------------------------------ | :-------------------------------------- |
    | [htARInitOffline](#htarinitoffline-1) | Initialization, offline authentication. |

    #### Destroy [#destroy-1]

    | Key                                                       | Description                |
    | :-------------------------------------------------------- | :------------------------- |
    | [htARReleaseBufferRenderer](#htarreleasebufferrenderer-1) | Resource release function. |

    #### Functional interface [#functional-interface-1]

    | Key                                     | Description                                         |
    | :-------------------------------------- | :-------------------------------------------------- |
    | [htARRenderEnable](#htarrenderenable-1) | Turn on/off the AR special effects function.        |
    | [htARSetModel](#htarsetmodel-1)         | Switch AR model function.                           |
    | [htARMirror](#htarmirror-1)             | Set whether the image has a mirror function.        |
    | [htARImageFormat](#htarimageformat-1)   | Set image format function.                          |
    | [htARRotation](#htarrotation-1)         | Set image rotation angle function.                  |
    | [htARMaxFaces](#htarmaxfaces-1)         | Set the maximum number of supported faces function. |
    | [htARCopyResource](#htarcopyresource-1) | Copy the resource path to the sandbox function.     |

    ### Value description of method keys [#value-description-of-method-keys-1]

    #### htARInitOffline [#htarinitoffline-1]

    \`value\` contains the following parameters:

    | Value parameter | Description                                 |
    | :-------------- | :------------------------------------------ |
    | \`license\`       | String type, AR offline authentication key. |

    #### htARReleaseBufferRenderer [#htarreleasebufferrenderer-1]

    \`value\` contains the following parameters:

    | Value parameter | Description                                             |
    | :-------------- | :------------------------------------------------------ |
    | \`enable\`        | BOOL type, whether to confirm the release of resources. |

    #### htARRenderEnable [#htarrenderenable-1]

    \`value\` contains the following parameters:

    | Value parameter | Description                                   |
    | :-------------- | :-------------------------------------------- |
    | \`enable\`        | BOOL type, whether to enable the AR function. |

    #### htARSetModel [#htarsetmodel-1]

    \`value\` contains the following parameters:

    | Value parameter | Description                         |
    | :-------------- | :---------------------------------- |
    | \`name\`          | String type, the name of the model. |

    #### htARMirror [#htarmirror-1]

    \`value\` contains the following parameters:

    | Value parameter | Description                                                                                  |
    | :-------------- | :------------------------------------------------------------------------------------------- |
    | \`isMirror\`      | BOOL type, whether to set the mirror display of prop special effects. The default is \`true\`. |

    #### htARImageFormat [#htarimageformat-1]

    \`value\` contains the following parameters:

    | Value parameter | Description                                                                                                                                                                                                                         |
    | :-------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`imageFormat\`   | Int type, enumeration value of image format. For details, see [HTEARImageFormat](https://gitee.com/htai-open/agora-htavatar-extension/blob/master/iOS/ALL_ARCHITECTURE/Release/HTEffectAR.framework/Headers/HTEffectARInterface.h). |

    #### htARRotation [#htarrotation-1]

    \`value\` contains the following parameters:

    | Value parameter | Description                                                                                                                                                                                                                                 |
    | :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | \`rotation\`      | Int type, enumeration value of image rotation angle. For details, see [HTEAROrientation](https://gitee.com/htai-open/agora-htavatar-extension/blob/master/iOS/ALL_ARCHITECTURE/Release/HTEffectAR.framework/Headers/HTEffectARInterface.h). |

    #### htARMaxFaces [#htarmaxfaces-1]

    \`value\` contains the following parameters:

    | Value parameter | Description                                                                   |
    | :-------------- | :---------------------------------------------------------------------------- |
    | \`maxFaces\`      | Int type, the maximum number of supported faces. The value range is \`[1, 5]\`. |

    #### htARCopyResource [#htarcopyresource-1]

    \`value\` contains the following parameters:

    | Value parameter | Description                                                   |
    | :-------------- | :------------------------------------------------------------ |
    | \`path\`          | String type, the path that needs to be copied to the sandbox. |
  </TabsContent>
</Tabs>

## Interface description [#interface-description-2]

When calling \`setExtensionProperty\` on Android or \`setExtensionPropertyWithVendor\` on iOS, use the following keys to call the corresponding HTAvatar functions.

### Initialization [#initialization-2]

| Key                                   | Description                         |
| :------------------------------------ | :---------------------------------- |
| [\`htARInitOffline\`](#htarinitoffline) | Initializes offline authentication. |

### Destroy [#destroy-2]

| Key                                                       | Description         |
| :-------------------------------------------------------- | :------------------ |
| [\`htARReleaseBufferRenderer\`](#htarreleasebufferrenderer) | Releases resources. |

### Functional interface [#functional-interface-2]

| Key                                     | Description                                 |
| :-------------------------------------- | :------------------------------------------ |
| [\`htARRenderEnable\`](#htarrenderenable) | Turns AR special effects on or off.         |
| [\`htARSetModel\`](#htarsetmodel)         | Switches the AR model.                      |
| [\`htARMirror\`](#htarmirror)             | Sets whether the image uses mirroring.      |
| [\`htARImageFormat\`](#htarimageformat)   | Sets the image format.                      |
| [\`htARRotation\`](#htarrotation)         | Sets the image rotation angle.              |
| [\`htARMaxFaces\`](#htarmaxfaces)         | Sets the maximum number of supported faces. |
| [\`htARCopyResource\`](#htarcopyresource) | Copies the resource path to the sandbox.    |

## Value description of method keys [#value-description-of-method-keys-2]

### htARInitOffline [#htarinitoffline-2]

\`value\` contains the following parameter:

| Value parameter | Description                                |
| :-------------- | :----------------------------------------- |
| \`license\`       | String. The AR offline authentication key. |

### htARReleaseBufferRenderer [#htarreleasebufferrenderer-2]

\`value\` contains the following parameter:

| Value parameter | Description                                   |
| :-------------- | :-------------------------------------------- |
| \`enable\`        | Boolean. Whether to confirm resource release. |

### htARRenderEnable [#htarrenderenable-2]

\`value\` contains the following parameter:

| Value parameter | Description                    |
| :-------------- | :----------------------------- |
| \`enable\`        | Boolean. Whether to enable AR. |

### htARSetModel [#htarsetmodel-2]

\`value\` contains the following parameter:

| Value parameter | Description             |
| :-------------- | :---------------------- |
| \`name\`          | String. The model name. |

### htARMirror [#htarmirror-2]

\`value\` contains the following parameter:

| Value parameter | Description                                                           |
| :-------------- | :-------------------------------------------------------------------- |
| \`isMirror\`      | Boolean. Whether to mirror prop effects. The default value is \`true\`. |

### htARImageFormat [#htarimageformat-2]

\`value\` contains the following parameter:

| Value parameter | Description                                                                                                                                                                                                                                 |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`imageFormat\`   | Integer. The image format enumeration value. For specific values, see [HTEARImageFormat](https://gitee.com/htai-open/agora-htavatar-extension/blob/master/iOS/ALL_ARCHITECTURE/Release/HTEffectAR.framework/Headers/HTEffectARInterface.h). |

### htARRotation [#htarrotation-2]

\`value\` contains the following parameter:

| Value parameter | Description                                                                                                                                                                                                                                         |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`rotation\`      | Integer. The image rotation angle enumeration value. For specific values, see [HTEAROrientation](https://gitee.com/htai-open/agora-htavatar-extension/blob/master/iOS/ALL_ARCHITECTURE/Release/HTEffectAR.framework/Headers/HTEffectARInterface.h). |

### htARMaxFaces [#htarmaxfaces-2]

\`value\` contains the following parameter:

| Value parameter | Description                                                                  |
| :-------------- | :--------------------------------------------------------------------------- |
| \`maxFaces\`      | Integer. The maximum number of supported faces. The value range is \`[1, 5]\`. |

### htARCopyResource [#htarcopyresource-2]

\`value\` contains the following parameter:

| Value parameter | Description                              |
| :-------------- | :--------------------------------------- |
| \`path\`          | String. The path to copy to the sandbox. |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The HTEffect 3D Avatar extension enables you to quickly and seamlessly integrate 3D portrait special effects capabilities into your app. It encapsulates the Hongtu HTAvatar core API. You call API functions by setting the appropriate extension parameters."
  }, {
    heading: "understand-the-tech",
    content: "You use RTC SDK methods to pass the appropriate `key` and `value` parameters to the extension. The `key` parameter corresponds exactly to the Hongtu API name, and the `value` parameter wraps some or all API parameters in JSON format."
  }, {
    heading: "prerequisites",
    content: "Android Studio 4.1 or later."
  }, {
    heading: "prerequisites",
    content: "A physical Android device."
  }, {
    heading: "prerequisites",
    content: "Implemented the SDK quickstart."
  }, {
    heading: "project-setup",
    content: "Download the Android package."
  }, {
    heading: "project-setup",
    content: "Copy all `.aar` files to `/app/libs`."
  }, {
    heading: "project-setup",
    content: "Contact support\\@agora.io to obtain the resource package and save the required model and prop files to `/app/src/main/assets`."
  }, {
    heading: "project-setup",
    content: "Add the Gradle dependency:"
  }, {
    heading: "project-setup",
    content: "Import the required Agora classes."
  }, {
    heading: "set-up-a-3d-effect",
    content: "Call `setExtensionProperty` with keys such as `htARRenderEnable` and `htARSetModel` to enable effects and switch models."
  }, {
    heading: "sample-project",
    content: "Run the sample project from AgoraHTAvatarExtensionDemo."
  }, {
    heading: "api-reference",
    content: "RtcEngineConfig.addExtension"
  }, {
    heading: "api-reference",
    content: "enableExtension"
  }, {
    heading: "api-reference",
    content: "setExtensionProperty"
  }, {
    heading: "api-reference",
    content: "IMediaExtensionObserver"
  }, {
    heading: "interface-description",
    content: "When you call `setExtensionProperty`, the following keys and their corresponding functions are supported:"
  }, {
    heading: "initialization",
    content: "Key"
  }, {
    heading: "initialization",
    content: "Description"
  }, {
    heading: "initialization",
    content: "htARInitOffline"
  }, {
    heading: "initialization",
    content: "Initialization, offline authentication."
  }, {
    heading: "destroy",
    content: "Key"
  }, {
    heading: "destroy",
    content: "Description"
  }, {
    heading: "destroy",
    content: "htARReleaseBufferRenderer"
  }, {
    heading: "destroy",
    content: "Resource release function."
  }, {
    heading: "functional-interface",
    content: "Key"
  }, {
    heading: "functional-interface",
    content: "Description"
  }, {
    heading: "functional-interface",
    content: "htARRenderEnable"
  }, {
    heading: "functional-interface",
    content: "Turn on/off the AR special effects function."
  }, {
    heading: "functional-interface",
    content: "htARSetModel"
  }, {
    heading: "functional-interface",
    content: "Switch AR model function."
  }, {
    heading: "functional-interface",
    content: "htARMirror"
  }, {
    heading: "functional-interface",
    content: "Set whether the image has a mirror function."
  }, {
    heading: "functional-interface",
    content: "htARImageFormat"
  }, {
    heading: "functional-interface",
    content: "Set image format function."
  }, {
    heading: "functional-interface",
    content: "htARRotation"
  }, {
    heading: "functional-interface",
    content: "Set image rotation angle function."
  }, {
    heading: "functional-interface",
    content: "htARMaxFaces"
  }, {
    heading: "functional-interface",
    content: "Set the maximum number of supported faces function."
  }, {
    heading: "functional-interface",
    content: "htARCopyResource"
  }, {
    heading: "functional-interface",
    content: "Copy the resource path to the sandbox function."
  }, {
    heading: "htarinitoffline",
    content: "`value` contains the following parameters:"
  }, {
    heading: "htarinitoffline",
    content: "Value parameter"
  }, {
    heading: "htarinitoffline",
    content: "Description"
  }, {
    heading: "htarinitoffline",
    content: "`license`"
  }, {
    heading: "htarinitoffline",
    content: "String type, AR offline authentication key."
  }, {
    heading: "htarreleasebufferrenderer",
    content: "`value` contains the following parameters:"
  }, {
    heading: "htarreleasebufferrenderer",
    content: "Value parameter"
  }, {
    heading: "htarreleasebufferrenderer",
    content: "Description"
  }, {
    heading: "htarreleasebufferrenderer",
    content: "`enable`"
  }, {
    heading: "htarreleasebufferrenderer",
    content: "BOOL type, whether to confirm the release of resources."
  }, {
    heading: "htarrenderenable",
    content: "`value` contains the following parameters:"
  }, {
    heading: "htarrenderenable",
    content: "Value parameter"
  }, {
    heading: "htarrenderenable",
    content: "Description"
  }, {
    heading: "htarrenderenable",
    content: "`enable`"
  }, {
    heading: "htarrenderenable",
    content: "BOOL type, whether to enable the AR function."
  }, {
    heading: "htarsetmodel",
    content: "`value` contains the following parameters:"
  }, {
    heading: "htarsetmodel",
    content: "Value parameter"
  }, {
    heading: "htarsetmodel",
    content: "Description"
  }, {
    heading: "htarsetmodel",
    content: "`name`"
  }, {
    heading: "htarsetmodel",
    content: "String type, the name of the model."
  }, {
    heading: "htarmirror",
    content: "`value` contains the following parameters:"
  }, {
    heading: "htarmirror",
    content: "Value parameter"
  }, {
    heading: "htarmirror",
    content: "Description"
  }, {
    heading: "htarmirror",
    content: "`isMirror`"
  }, {
    heading: "htarmirror",
    content: "BOOL type, whether to set the mirror display of prop special effects. The default is `true`."
  }, {
    heading: "htarimageformat",
    content: "`value` contains the following parameters:"
  }, {
    heading: "htarimageformat",
    content: "Value parameter"
  }, {
    heading: "htarimageformat",
    content: "Description"
  }, {
    heading: "htarimageformat",
    content: "`imageFormat`"
  }, {
    heading: "htarimageformat",
    content: "Int type, enumeration value of image format. For details, see HTEARImageFormat."
  }, {
    heading: "htarrotation",
    content: "`value` contains the following parameters:"
  }, {
    heading: "htarrotation",
    content: "Value parameter"
  }, {
    heading: "htarrotation",
    content: "Description"
  }, {
    heading: "htarrotation",
    content: "`rotation`"
  }, {
    heading: "htarrotation",
    content: "Int type, enumeration value of image rotation angle. For details, see HTEAROrientation."
  }, {
    heading: "htarmaxfaces",
    content: "`value` contains the following parameters:"
  }, {
    heading: "htarmaxfaces",
    content: "Value parameter"
  }, {
    heading: "htarmaxfaces",
    content: "Description"
  }, {
    heading: "htarmaxfaces",
    content: "`maxFaces`"
  }, {
    heading: "htarmaxfaces",
    content: "Int type, the maximum number of supported faces. The value range is `[1, 5]`."
  }, {
    heading: "htarcopyresource",
    content: "`value` contains the following parameters:"
  }, {
    heading: "htarcopyresource",
    content: "Value parameter"
  }, {
    heading: "htarcopyresource",
    content: "Description"
  }, {
    heading: "htarcopyresource",
    content: "`path`"
  }, {
    heading: "htarcopyresource",
    content: "String type, the path that needs to be copied to the sandbox."
  }, {
    heading: "understand-the-tech-1",
    content: "You use RTC SDK methods to pass the appropriate `key` and `value` parameters to the extension. The `key` parameter corresponds exactly to the Hongtu API name, and the `value` parameter wraps some or all API parameters in JSON format."
  }, {
    heading: "prerequisites-1",
    content: "Xcode 12.0 or later."
  }, {
    heading: "prerequisites-1",
    content: "A physical iOS device."
  }, {
    heading: "prerequisites-1",
    content: "Implemented the SDK quickstart."
  }, {
    heading: "project-setup-1",
    content: "Download the iOS package."
  }, {
    heading: "project-setup-1",
    content: "Copy the `.framework` library files to your project folder."
  }, {
    heading: "project-setup-1",
    content: "Save `HTKey.h` and `HTEffect.bundle` to the project folder."
  }, {
    heading: "project-setup-1",
    content: "Ensure the dynamic libraries are set to **Embed & Sign**."
  }, {
    heading: "initialize-the-plug-in-1",
    content: "Use `setExtensionPropertyWithVendor` to call `htARCopyResource`, `htARInitOffline`, and optional image format configuration."
  }, {
    heading: "set-up-a-3d-effect-1",
    content: "Call `setExtensionPropertyWithVendor` with keys such as `htARRenderEnable` and `htARSetModel` to enable effects and switch models."
  }, {
    heading: "sample-project-1",
    content: "Run the sample project from AgoraHTAvatarExtensionDemo."
  }, {
    heading: "api-reference-1",
    content: "enableExtensionWithVendor"
  }, {
    heading: "api-reference-1",
    content: "setExtensionPropertyWithVendor"
  }, {
    heading: "interface-description-1",
    content: "When you call `setExtensionPropertyWithVendor`, the following keys and their corresponding functions are supported:"
  }, {
    heading: "initialization-1",
    content: "Key"
  }, {
    heading: "initialization-1",
    content: "Description"
  }, {
    heading: "initialization-1",
    content: "htARInitOffline"
  }, {
    heading: "initialization-1",
    content: "Initialization, offline authentication."
  }, {
    heading: "destroy-1",
    content: "Key"
  }, {
    heading: "destroy-1",
    content: "Description"
  }, {
    heading: "destroy-1",
    content: "htARReleaseBufferRenderer"
  }, {
    heading: "destroy-1",
    content: "Resource release function."
  }, {
    heading: "functional-interface-1",
    content: "Key"
  }, {
    heading: "functional-interface-1",
    content: "Description"
  }, {
    heading: "functional-interface-1",
    content: "htARRenderEnable"
  }, {
    heading: "functional-interface-1",
    content: "Turn on/off the AR special effects function."
  }, {
    heading: "functional-interface-1",
    content: "htARSetModel"
  }, {
    heading: "functional-interface-1",
    content: "Switch AR model function."
  }, {
    heading: "functional-interface-1",
    content: "htARMirror"
  }, {
    heading: "functional-interface-1",
    content: "Set whether the image has a mirror function."
  }, {
    heading: "functional-interface-1",
    content: "htARImageFormat"
  }, {
    heading: "functional-interface-1",
    content: "Set image format function."
  }, {
    heading: "functional-interface-1",
    content: "htARRotation"
  }, {
    heading: "functional-interface-1",
    content: "Set image rotation angle function."
  }, {
    heading: "functional-interface-1",
    content: "htARMaxFaces"
  }, {
    heading: "functional-interface-1",
    content: "Set the maximum number of supported faces function."
  }, {
    heading: "functional-interface-1",
    content: "htARCopyResource"
  }, {
    heading: "functional-interface-1",
    content: "Copy the resource path to the sandbox function."
  }, {
    heading: "htarinitoffline-1",
    content: "`value` contains the following parameters:"
  }, {
    heading: "htarinitoffline-1",
    content: "Value parameter"
  }, {
    heading: "htarinitoffline-1",
    content: "Description"
  }, {
    heading: "htarinitoffline-1",
    content: "`license`"
  }, {
    heading: "htarinitoffline-1",
    content: "String type, AR offline authentication key."
  }, {
    heading: "htarreleasebufferrenderer-1",
    content: "`value` contains the following parameters:"
  }, {
    heading: "htarreleasebufferrenderer-1",
    content: "Value parameter"
  }, {
    heading: "htarreleasebufferrenderer-1",
    content: "Description"
  }, {
    heading: "htarreleasebufferrenderer-1",
    content: "`enable`"
  }, {
    heading: "htarreleasebufferrenderer-1",
    content: "BOOL type, whether to confirm the release of resources."
  }, {
    heading: "htarrenderenable-1",
    content: "`value` contains the following parameters:"
  }, {
    heading: "htarrenderenable-1",
    content: "Value parameter"
  }, {
    heading: "htarrenderenable-1",
    content: "Description"
  }, {
    heading: "htarrenderenable-1",
    content: "`enable`"
  }, {
    heading: "htarrenderenable-1",
    content: "BOOL type, whether to enable the AR function."
  }, {
    heading: "htarsetmodel-1",
    content: "`value` contains the following parameters:"
  }, {
    heading: "htarsetmodel-1",
    content: "Value parameter"
  }, {
    heading: "htarsetmodel-1",
    content: "Description"
  }, {
    heading: "htarsetmodel-1",
    content: "`name`"
  }, {
    heading: "htarsetmodel-1",
    content: "String type, the name of the model."
  }, {
    heading: "htarmirror-1",
    content: "`value` contains the following parameters:"
  }, {
    heading: "htarmirror-1",
    content: "Value parameter"
  }, {
    heading: "htarmirror-1",
    content: "Description"
  }, {
    heading: "htarmirror-1",
    content: "`isMirror`"
  }, {
    heading: "htarmirror-1",
    content: "BOOL type, whether to set the mirror display of prop special effects. The default is `true`."
  }, {
    heading: "htarimageformat-1",
    content: "`value` contains the following parameters:"
  }, {
    heading: "htarimageformat-1",
    content: "Value parameter"
  }, {
    heading: "htarimageformat-1",
    content: "Description"
  }, {
    heading: "htarimageformat-1",
    content: "`imageFormat`"
  }, {
    heading: "htarimageformat-1",
    content: "Int type, enumeration value of image format. For details, see HTEARImageFormat."
  }, {
    heading: "htarrotation-1",
    content: "`value` contains the following parameters:"
  }, {
    heading: "htarrotation-1",
    content: "Value parameter"
  }, {
    heading: "htarrotation-1",
    content: "Description"
  }, {
    heading: "htarrotation-1",
    content: "`rotation`"
  }, {
    heading: "htarrotation-1",
    content: "Int type, enumeration value of image rotation angle. For details, see HTEAROrientation."
  }, {
    heading: "htarmaxfaces-1",
    content: "`value` contains the following parameters:"
  }, {
    heading: "htarmaxfaces-1",
    content: "Value parameter"
  }, {
    heading: "htarmaxfaces-1",
    content: "Description"
  }, {
    heading: "htarmaxfaces-1",
    content: "`maxFaces`"
  }, {
    heading: "htarmaxfaces-1",
    content: "Int type, the maximum number of supported faces. The value range is `[1, 5]`."
  }, {
    heading: "htarcopyresource-1",
    content: "`value` contains the following parameters:"
  }, {
    heading: "htarcopyresource-1",
    content: "Value parameter"
  }, {
    heading: "htarcopyresource-1",
    content: "Description"
  }, {
    heading: "htarcopyresource-1",
    content: "`path`"
  }, {
    heading: "htarcopyresource-1",
    content: "String type, the path that needs to be copied to the sandbox."
  }, {
    heading: "interface-description-2",
    content: "When calling `setExtensionProperty` on Android or `setExtensionPropertyWithVendor` on iOS, use the following keys to call the corresponding HTAvatar functions."
  }, {
    heading: "initialization-2",
    content: "Key"
  }, {
    heading: "initialization-2",
    content: "Description"
  }, {
    heading: "initialization-2",
    content: "`htARInitOffline`"
  }, {
    heading: "initialization-2",
    content: "Initializes offline authentication."
  }, {
    heading: "destroy-2",
    content: "Key"
  }, {
    heading: "destroy-2",
    content: "Description"
  }, {
    heading: "destroy-2",
    content: "`htARReleaseBufferRenderer`"
  }, {
    heading: "destroy-2",
    content: "Releases resources."
  }, {
    heading: "functional-interface-2",
    content: "Key"
  }, {
    heading: "functional-interface-2",
    content: "Description"
  }, {
    heading: "functional-interface-2",
    content: "`htARRenderEnable`"
  }, {
    heading: "functional-interface-2",
    content: "Turns AR special effects on or off."
  }, {
    heading: "functional-interface-2",
    content: "`htARSetModel`"
  }, {
    heading: "functional-interface-2",
    content: "Switches the AR model."
  }, {
    heading: "functional-interface-2",
    content: "`htARMirror`"
  }, {
    heading: "functional-interface-2",
    content: "Sets whether the image uses mirroring."
  }, {
    heading: "functional-interface-2",
    content: "`htARImageFormat`"
  }, {
    heading: "functional-interface-2",
    content: "Sets the image format."
  }, {
    heading: "functional-interface-2",
    content: "`htARRotation`"
  }, {
    heading: "functional-interface-2",
    content: "Sets the image rotation angle."
  }, {
    heading: "functional-interface-2",
    content: "`htARMaxFaces`"
  }, {
    heading: "functional-interface-2",
    content: "Sets the maximum number of supported faces."
  }, {
    heading: "functional-interface-2",
    content: "`htARCopyResource`"
  }, {
    heading: "functional-interface-2",
    content: "Copies the resource path to the sandbox."
  }, {
    heading: "htarinitoffline-2",
    content: "`value` contains the following parameter:"
  }, {
    heading: "htarinitoffline-2",
    content: "Value parameter"
  }, {
    heading: "htarinitoffline-2",
    content: "Description"
  }, {
    heading: "htarinitoffline-2",
    content: "`license`"
  }, {
    heading: "htarinitoffline-2",
    content: "String. The AR offline authentication key."
  }, {
    heading: "htarreleasebufferrenderer-2",
    content: "`value` contains the following parameter:"
  }, {
    heading: "htarreleasebufferrenderer-2",
    content: "Value parameter"
  }, {
    heading: "htarreleasebufferrenderer-2",
    content: "Description"
  }, {
    heading: "htarreleasebufferrenderer-2",
    content: "`enable`"
  }, {
    heading: "htarreleasebufferrenderer-2",
    content: "Boolean. Whether to confirm resource release."
  }, {
    heading: "htarrenderenable-2",
    content: "`value` contains the following parameter:"
  }, {
    heading: "htarrenderenable-2",
    content: "Value parameter"
  }, {
    heading: "htarrenderenable-2",
    content: "Description"
  }, {
    heading: "htarrenderenable-2",
    content: "`enable`"
  }, {
    heading: "htarrenderenable-2",
    content: "Boolean. Whether to enable AR."
  }, {
    heading: "htarsetmodel-2",
    content: "`value` contains the following parameter:"
  }, {
    heading: "htarsetmodel-2",
    content: "Value parameter"
  }, {
    heading: "htarsetmodel-2",
    content: "Description"
  }, {
    heading: "htarsetmodel-2",
    content: "`name`"
  }, {
    heading: "htarsetmodel-2",
    content: "String. The model name."
  }, {
    heading: "htarmirror-2",
    content: "`value` contains the following parameter:"
  }, {
    heading: "htarmirror-2",
    content: "Value parameter"
  }, {
    heading: "htarmirror-2",
    content: "Description"
  }, {
    heading: "htarmirror-2",
    content: "`isMirror`"
  }, {
    heading: "htarmirror-2",
    content: "Boolean. Whether to mirror prop effects. The default value is `true`."
  }, {
    heading: "htarimageformat-2",
    content: "`value` contains the following parameter:"
  }, {
    heading: "htarimageformat-2",
    content: "Value parameter"
  }, {
    heading: "htarimageformat-2",
    content: "Description"
  }, {
    heading: "htarimageformat-2",
    content: "`imageFormat`"
  }, {
    heading: "htarimageformat-2",
    content: "Integer. The image format enumeration value. For specific values, see HTEARImageFormat."
  }, {
    heading: "htarrotation-2",
    content: "`value` contains the following parameter:"
  }, {
    heading: "htarrotation-2",
    content: "Value parameter"
  }, {
    heading: "htarrotation-2",
    content: "Description"
  }, {
    heading: "htarrotation-2",
    content: "`rotation`"
  }, {
    heading: "htarrotation-2",
    content: "Integer. The image rotation angle enumeration value. For specific values, see HTEAROrientation."
  }, {
    heading: "htarmaxfaces-2",
    content: "`value` contains the following parameter:"
  }, {
    heading: "htarmaxfaces-2",
    content: "Value parameter"
  }, {
    heading: "htarmaxfaces-2",
    content: "Description"
  }, {
    heading: "htarmaxfaces-2",
    content: "`maxFaces`"
  }, {
    heading: "htarmaxfaces-2",
    content: "Integer. The maximum number of supported faces. The value range is `[1, 5]`."
  }, {
    heading: "htarcopyresource-2",
    content: "`value` contains the following parameter:"
  }, {
    heading: "htarcopyresource-2",
    content: "Value parameter"
  }, {
    heading: "htarcopyresource-2",
    content: "Description"
  }, {
    heading: "htarcopyresource-2",
    content: "`path`"
  }, {
    heading: "htarcopyresource-2",
    content: "String. The path to copy to the sandbox."
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
    id: "enable-the-plug-in",
    content: "Enable the plug-in"
  }, {
    id: "initialize-the-plug-in",
    content: "Initialize the plug-in"
  }, {
    id: "set-up-a-3d-effect",
    content: "Set up a 3D effect"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "sample-project",
    content: "Sample project"
  }, {
    id: "api-reference",
    content: "API reference"
  }, {
    id: "interface-description",
    content: "Interface description"
  }, {
    id: "initialization",
    content: "Initialization"
  }, {
    id: "destroy",
    content: "Destroy"
  }, {
    id: "functional-interface",
    content: "Functional interface"
  }, {
    id: "value-description-of-method-keys",
    content: "Value description of method keys"
  }, {
    id: "htarinitoffline",
    content: "htARInitOffline"
  }, {
    id: "htarreleasebufferrenderer",
    content: "htARReleaseBufferRenderer"
  }, {
    id: "htarrenderenable",
    content: "htARRenderEnable"
  }, {
    id: "htarsetmodel",
    content: "htARSetModel"
  }, {
    id: "htarmirror",
    content: "htARMirror"
  }, {
    id: "htarimageformat",
    content: "htARImageFormat"
  }, {
    id: "htarrotation",
    content: "htARRotation"
  }, {
    id: "htarmaxfaces",
    content: "htARMaxFaces"
  }, {
    id: "htarcopyresource",
    content: "htARCopyResource"
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
    id: "enable-the-plug-in-1",
    content: "Enable the plug-in"
  }, {
    id: "initialize-the-plug-in-1",
    content: "Initialize the plug-in"
  }, {
    id: "set-up-a-3d-effect-1",
    content: "Set up a 3D effect"
  }, {
    id: "reference-1",
    content: "Reference"
  }, {
    id: "sample-project-1",
    content: "Sample project"
  }, {
    id: "api-reference-1",
    content: "API reference"
  }, {
    id: "interface-description-1",
    content: "Interface description"
  }, {
    id: "initialization-1",
    content: "Initialization"
  }, {
    id: "destroy-1",
    content: "Destroy"
  }, {
    id: "functional-interface-1",
    content: "Functional interface"
  }, {
    id: "value-description-of-method-keys-1",
    content: "Value description of method keys"
  }, {
    id: "htarinitoffline-1",
    content: "htARInitOffline"
  }, {
    id: "htarreleasebufferrenderer-1",
    content: "htARReleaseBufferRenderer"
  }, {
    id: "htarrenderenable-1",
    content: "htARRenderEnable"
  }, {
    id: "htarsetmodel-1",
    content: "htARSetModel"
  }, {
    id: "htarmirror-1",
    content: "htARMirror"
  }, {
    id: "htarimageformat-1",
    content: "htARImageFormat"
  }, {
    id: "htarrotation-1",
    content: "htARRotation"
  }, {
    id: "htarmaxfaces-1",
    content: "htARMaxFaces"
  }, {
    id: "htarcopyresource-1",
    content: "htARCopyResource"
  }, {
    id: "interface-description-2",
    content: "Interface description"
  }, {
    id: "initialization-2",
    content: "Initialization"
  }, {
    id: "destroy-2",
    content: "Destroy"
  }, {
    id: "functional-interface-2",
    content: "Functional interface"
  }, {
    id: "value-description-of-method-keys-2",
    content: "Value description of method keys"
  }, {
    id: "htarinitoffline-2",
    content: "htARInitOffline"
  }, {
    id: "htarreleasebufferrenderer-2",
    content: "htARReleaseBufferRenderer"
  }, {
    id: "htarrenderenable-2",
    content: "htARRenderEnable"
  }, {
    id: "htarsetmodel-2",
    content: "htARSetModel"
  }, {
    id: "htarmirror-2",
    content: "htARMirror"
  }, {
    id: "htarimageformat-2",
    content: "htARImageFormat"
  }, {
    id: "htarrotation-2",
    content: "htARRotation"
  }, {
    id: "htarmaxfaces-2",
    content: "htARMaxFaces"
  }, {
    id: "htarcopyresource-2",
    content: "htARCopyResource"
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
  url: "#enable-the-plug-in",
  title: _jsx(_Fragment, {
    children: "Enable the plug-in"
  })
}, {
  depth: 3,
  url: "#initialize-the-plug-in",
  title: _jsx(_Fragment, {
    children: "Initialize the plug-in"
  })
}, {
  depth: 3,
  url: "#set-up-a-3d-effect",
  title: _jsx(_Fragment, {
    children: "Set up a 3D effect"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#sample-project",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 3,
  url: "#api-reference",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#interface-description",
  title: _jsx(_Fragment, {
    children: "Interface description"
  })
}, {
  depth: 4,
  url: "#initialization",
  title: _jsx(_Fragment, {
    children: "Initialization"
  })
}, {
  depth: 4,
  url: "#destroy",
  title: _jsx(_Fragment, {
    children: "Destroy"
  })
}, {
  depth: 4,
  url: "#functional-interface",
  title: _jsx(_Fragment, {
    children: "Functional interface"
  })
}, {
  depth: 3,
  url: "#value-description-of-method-keys",
  title: _jsx(_Fragment, {
    children: "Value description of method keys"
  })
}, {
  depth: 4,
  url: "#htarinitoffline",
  title: _jsx(_Fragment, {
    children: "htARInitOffline"
  })
}, {
  depth: 4,
  url: "#htarreleasebufferrenderer",
  title: _jsx(_Fragment, {
    children: "htARReleaseBufferRenderer"
  })
}, {
  depth: 4,
  url: "#htarrenderenable",
  title: _jsx(_Fragment, {
    children: "htARRenderEnable"
  })
}, {
  depth: 4,
  url: "#htarsetmodel",
  title: _jsx(_Fragment, {
    children: "htARSetModel"
  })
}, {
  depth: 4,
  url: "#htarmirror",
  title: _jsx(_Fragment, {
    children: "htARMirror"
  })
}, {
  depth: 4,
  url: "#htarimageformat",
  title: _jsx(_Fragment, {
    children: "htARImageFormat"
  })
}, {
  depth: 4,
  url: "#htarrotation",
  title: _jsx(_Fragment, {
    children: "htARRotation"
  })
}, {
  depth: 4,
  url: "#htarmaxfaces",
  title: _jsx(_Fragment, {
    children: "htARMaxFaces"
  })
}, {
  depth: 4,
  url: "#htarcopyresource",
  title: _jsx(_Fragment, {
    children: "htARCopyResource"
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
  url: "#enable-the-plug-in-1",
  title: _jsx(_Fragment, {
    children: "Enable the plug-in"
  })
}, {
  depth: 3,
  url: "#initialize-the-plug-in-1",
  title: _jsx(_Fragment, {
    children: "Initialize the plug-in"
  })
}, {
  depth: 3,
  url: "#set-up-a-3d-effect-1",
  title: _jsx(_Fragment, {
    children: "Set up a 3D effect"
  })
}, {
  depth: 2,
  url: "#reference-1",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#sample-project-1",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 3,
  url: "#api-reference-1",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#interface-description-1",
  title: _jsx(_Fragment, {
    children: "Interface description"
  })
}, {
  depth: 4,
  url: "#initialization-1",
  title: _jsx(_Fragment, {
    children: "Initialization"
  })
}, {
  depth: 4,
  url: "#destroy-1",
  title: _jsx(_Fragment, {
    children: "Destroy"
  })
}, {
  depth: 4,
  url: "#functional-interface-1",
  title: _jsx(_Fragment, {
    children: "Functional interface"
  })
}, {
  depth: 3,
  url: "#value-description-of-method-keys-1",
  title: _jsx(_Fragment, {
    children: "Value description of method keys"
  })
}, {
  depth: 4,
  url: "#htarinitoffline-1",
  title: _jsx(_Fragment, {
    children: "htARInitOffline"
  })
}, {
  depth: 4,
  url: "#htarreleasebufferrenderer-1",
  title: _jsx(_Fragment, {
    children: "htARReleaseBufferRenderer"
  })
}, {
  depth: 4,
  url: "#htarrenderenable-1",
  title: _jsx(_Fragment, {
    children: "htARRenderEnable"
  })
}, {
  depth: 4,
  url: "#htarsetmodel-1",
  title: _jsx(_Fragment, {
    children: "htARSetModel"
  })
}, {
  depth: 4,
  url: "#htarmirror-1",
  title: _jsx(_Fragment, {
    children: "htARMirror"
  })
}, {
  depth: 4,
  url: "#htarimageformat-1",
  title: _jsx(_Fragment, {
    children: "htARImageFormat"
  })
}, {
  depth: 4,
  url: "#htarrotation-1",
  title: _jsx(_Fragment, {
    children: "htARRotation"
  })
}, {
  depth: 4,
  url: "#htarmaxfaces-1",
  title: _jsx(_Fragment, {
    children: "htARMaxFaces"
  })
}, {
  depth: 4,
  url: "#htarcopyresource-1",
  title: _jsx(_Fragment, {
    children: "htARCopyResource"
  })
}, {
  depth: 2,
  url: "#interface-description-2",
  title: _jsx(_Fragment, {
    children: "Interface description"
  })
}, {
  depth: 3,
  url: "#initialization-2",
  title: _jsx(_Fragment, {
    children: "Initialization"
  })
}, {
  depth: 3,
  url: "#destroy-2",
  title: _jsx(_Fragment, {
    children: "Destroy"
  })
}, {
  depth: 3,
  url: "#functional-interface-2",
  title: _jsx(_Fragment, {
    children: "Functional interface"
  })
}, {
  depth: 2,
  url: "#value-description-of-method-keys-2",
  title: _jsx(_Fragment, {
    children: "Value description of method keys"
  })
}, {
  depth: 3,
  url: "#htarinitoffline-2",
  title: _jsx(_Fragment, {
    children: "htARInitOffline"
  })
}, {
  depth: 3,
  url: "#htarreleasebufferrenderer-2",
  title: _jsx(_Fragment, {
    children: "htARReleaseBufferRenderer"
  })
}, {
  depth: 3,
  url: "#htarrenderenable-2",
  title: _jsx(_Fragment, {
    children: "htARRenderEnable"
  })
}, {
  depth: 3,
  url: "#htarsetmodel-2",
  title: _jsx(_Fragment, {
    children: "htARSetModel"
  })
}, {
  depth: 3,
  url: "#htarmirror-2",
  title: _jsx(_Fragment, {
    children: "htARMirror"
  })
}, {
  depth: 3,
  url: "#htarimageformat-2",
  title: _jsx(_Fragment, {
    children: "htARImageFormat"
  })
}, {
  depth: 3,
  url: "#htarrotation-2",
  title: _jsx(_Fragment, {
    children: "htARRotation"
  })
}, {
  depth: 3,
  url: "#htarmaxfaces-2",
  title: _jsx(_Fragment, {
    children: "htARMaxFaces"
  })
}, {
  depth: 3,
  url: "#htarcopyresource-2",
  title: _jsx(_Fragment, {
    children: "htARCopyResource"
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
  }, { Tabs, TabsContent, TabsList, TabsTrigger } = _components;
  if (!Tabs)
    _missingMdxReference("Tabs", true);
  if (!TabsContent)
    _missingMdxReference("TabsContent", true);
  if (!TabsList)
    _missingMdxReference("TabsList", true);
  if (!TabsTrigger)
    _missingMdxReference("TabsTrigger", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The HTEffect 3D Avatar extension enables you to quickly and seamlessly integrate 3D portrait special effects capabilities into your app. It encapsulates the Hongtu HTAvatar core API. You call API functions by setting the appropriate extension parameters."
    }), `
`, _jsxs(Tabs, {
      defaultValue: "android",
      groupId: "platform",
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "android",
          children: "Android"
        }), _jsx(TabsTrigger, {
          value: "ios",
          children: "iOS"
        })]
      }), _jsxs(TabsContent, {
        value: "android",
        children: [_jsx(_components.h2, {
          id: "understand-the-tech",
          children: "Understand the tech"
        }), _jsxs(_components.p, {
          children: ["You use RTC SDK methods to pass the appropriate ", _jsx(_components.code, {
            children: "key"
          }), " and ", _jsx(_components.code, {
            children: "value"
          }), " parameters to the extension. The ", _jsx(_components.code, {
            children: "key"
          }), " parameter corresponds exactly to the Hongtu API name, and the ", _jsx(_components.code, {
            children: "value"
          }), " parameter wraps some or all API parameters in JSON format."]
        }), _jsx(_components.h2, {
          id: "prerequisites",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Android Studio 4.1 or later."
          }), `
`, _jsx(_components.li, {
            children: "A physical Android device."
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
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Download the ", _jsx(_components.a, {
                href: "https://github.com/Texeljoy/AgoraHTAvatarExtension/tree/master/Android/ALL_ARCHITECTURE",
                children: "Android package"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Copy all ", _jsx(_components.code, {
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
              children: ["Contact ", _jsx(_components.a, {
                href: "mailto:support@agora.io",
                children: "support@agora.io"
              }), " to obtain the resource package and save the required model and prop files to ", _jsx(_components.code, {
                children: "/app/src/main/assets"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Add the Gradle dependency:"
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
              children: "Import the required Agora classes."
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "integrate-the-extension",
          children: "Integrate the extension"
        }), _jsx(_components.h3, {
          id: "enable-the-plug-in",
          children: "Enable the plug-in"
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
                  children: " enableExtension"
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
                  children: "boolean"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " enabled) {"
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
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"Texeljoy"'
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
                  children: '"HTAvatar"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", enabled);"
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
        }), _jsx(_components.h3, {
          id: "initialize-the-plug-in",
          children: "Initialize the plug-in"
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
                  children: '"license"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", HTKey);"
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
                  children: '"htARInitOffline"'
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
          id: "set-up-a-3d-effect",
          children: "Set up a 3D effect"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setExtensionProperty"
          }), " with keys such as ", _jsx(_components.code, {
            children: "htARRenderEnable"
          }), " and ", _jsx(_components.code, {
            children: "htARSetModel"
          }), " to enable effects and switch models."]
        }), _jsx(_components.h2, {
          id: "reference",
          children: "Reference"
        }), _jsx(_components.h3, {
          id: "sample-project",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Run the sample project from ", _jsx(_components.a, {
            href: "https://github.com/Texeljoy/AgoraHTAvatarExtensionDemo/tree/master/Android",
            children: "AgoraHTAvatarExtensionDemo"
          }), "."]
        }), _jsx(_components.h3, {
          id: "api-reference",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/rtc/android/class-and-enum/classes/class-rtcengineconfig",
              children: "RtcEngineConfig.addExtension"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_enableextension",
              children: "enableExtension"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setextensionproperty",
              children: "setExtensionProperty"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_imediaextensionobserver.html",
              children: "IMediaExtensionObserver"
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "interface-description",
          children: "Interface description"
        }), _jsxs(_components.p, {
          children: ["When you call ", _jsx(_components.code, {
            children: "setExtensionProperty"
          }), ", the following keys and their corresponding functions are supported:"]
        }), _jsx(_components.h4, {
          id: "initialization",
          children: "Initialization"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Key"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.a, {
                  href: "#htarinitoffline",
                  children: "htARInitOffline"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Initialization, offline authentication."
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "destroy",
          children: "Destroy"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Key"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.a, {
                  href: "#htarreleasebufferrenderer",
                  children: "htARReleaseBufferRenderer"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Resource release function."
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "functional-interface",
          children: "Functional interface"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Key"
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
                children: _jsx(_components.a, {
                  href: "#htarrenderenable",
                  children: "htARRenderEnable"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Turn on/off the AR special effects function."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.a, {
                  href: "#htarsetmodel",
                  children: "htARSetModel"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Switch AR model function."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.a, {
                  href: "#htarmirror",
                  children: "htARMirror"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Set whether the image has a mirror function."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.a, {
                  href: "#htarimageformat",
                  children: "htARImageFormat"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Set image format function."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.a, {
                  href: "#htarrotation",
                  children: "htARRotation"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Set image rotation angle function."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.a, {
                  href: "#htarmaxfaces",
                  children: "htARMaxFaces"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Set the maximum number of supported faces function."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.a, {
                  href: "#htarcopyresource",
                  children: "htARCopyResource"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Copy the resource path to the sandbox function."
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "value-description-of-method-keys",
          children: "Value description of method keys"
        }), _jsx(_components.h4, {
          id: "htarinitoffline",
          children: "htARInitOffline"
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "value"
          }), " contains the following parameters:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value parameter"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "license"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String type, AR offline authentication key."
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "htarreleasebufferrenderer",
          children: "htARReleaseBufferRenderer"
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "value"
          }), " contains the following parameters:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value parameter"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "enable"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "BOOL type, whether to confirm the release of resources."
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "htarrenderenable",
          children: "htARRenderEnable"
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "value"
          }), " contains the following parameters:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value parameter"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "enable"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "BOOL type, whether to enable the AR function."
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "htarsetmodel",
          children: "htARSetModel"
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "value"
          }), " contains the following parameters:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value parameter"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "name"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String type, the name of the model."
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "htarmirror",
          children: "htARMirror"
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "value"
          }), " contains the following parameters:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value parameter"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "isMirror"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["BOOL type, whether to set the mirror display of prop special effects. The default is ", _jsx(_components.code, {
                  children: "true"
                }), "."]
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "htarimageformat",
          children: "htARImageFormat"
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "value"
          }), " contains the following parameters:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value parameter"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "imageFormat"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Int type, enumeration value of image format. For details, see ", _jsx(_components.a, {
                  href: "https://gitee.com/htai-open/agora-htavatar-extension/blob/master/iOS/ALL_ARCHITECTURE/Release/HTEffectAR.framework/Headers/HTEffectARInterface.h",
                  children: "HTEARImageFormat"
                }), "."]
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "htarrotation",
          children: "htARRotation"
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "value"
          }), " contains the following parameters:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value parameter"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "rotation"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Int type, enumeration value of image rotation angle. For details, see ", _jsx(_components.a, {
                  href: "https://gitee.com/htai-open/agora-htavatar-extension/blob/master/iOS/ALL_ARCHITECTURE/Release/HTEffectAR.framework/Headers/HTEffectARInterface.h",
                  children: "HTEAROrientation"
                }), "."]
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "htarmaxfaces",
          children: "htARMaxFaces"
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "value"
          }), " contains the following parameters:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value parameter"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "maxFaces"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Int type, the maximum number of supported faces. The value range is ", _jsx(_components.code, {
                  children: "[1, 5]"
                }), "."]
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "htarcopyresource",
          children: "htARCopyResource"
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "value"
          }), " contains the following parameters:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value parameter"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "path"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String type, the path that needs to be copied to the sandbox."
              })]
            })
          })]
        })]
      }), _jsxs(TabsContent, {
        value: "ios",
        children: [_jsx(_components.h2, {
          id: "understand-the-tech-1",
          children: "Understand the tech"
        }), _jsxs(_components.p, {
          children: ["You use RTC SDK methods to pass the appropriate ", _jsx(_components.code, {
            children: "key"
          }), " and ", _jsx(_components.code, {
            children: "value"
          }), " parameters to the extension. The ", _jsx(_components.code, {
            children: "key"
          }), " parameter corresponds exactly to the Hongtu API name, and the ", _jsx(_components.code, {
            children: "value"
          }), " parameter wraps some or all API parameters in JSON format."]
        }), _jsx(_components.h2, {
          id: "prerequisites-1",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Xcode 12.0 or later."
          }), `
`, _jsx(_components.li, {
            children: "A physical iOS device."
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
            children: ["Download the ", _jsx(_components.a, {
              href: "https://github.com/Texeljoy/AgoraHTAvatarExtension/tree/master/iOS/ALL_ARCHITECTURE/Release",
              children: "iOS package"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["Copy the ", _jsx(_components.code, {
              children: ".framework"
            }), " library files to your project folder."]
          }), `
`, _jsxs(_components.li, {
            children: ["Save ", _jsx(_components.code, {
              children: "HTKey.h"
            }), " and ", _jsx(_components.code, {
              children: "HTEffect.bundle"
            }), " to the project folder."]
          }), `
`, _jsxs(_components.li, {
            children: ["Ensure the dynamic libraries are set to ", _jsx(_components.strong, {
              children: "Embed & Sign"
            }), "."]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "integrate-the-extension-1",
          children: "Integrate the extension"
        }), _jsx(_components.h3, {
          id: "enable-the-plug-in-1",
          children: "Enable the plug-in"
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
                  children: '@"Texeljoy"'
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
                  children: '@"HTAvatar"'
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
          id: "initialize-the-plug-in-1",
          children: "Initialize the plug-in"
        }), _jsxs(_components.p, {
          children: ["Use ", _jsx(_components.code, {
            children: "setExtensionPropertyWithVendor"
          }), " to call ", _jsx(_components.code, {
            children: "htARCopyResource"
          }), ", ", _jsx(_components.code, {
            children: "htARInitOffline"
          }), ", and optional image format configuration."]
        }), _jsx(_components.h3, {
          id: "set-up-a-3d-effect-1",
          children: "Set up a 3D effect"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setExtensionPropertyWithVendor"
          }), " with keys such as ", _jsx(_components.code, {
            children: "htARRenderEnable"
          }), " and ", _jsx(_components.code, {
            children: "htARSetModel"
          }), " to enable effects and switch models."]
        }), _jsx(_components.h2, {
          id: "reference-1",
          children: "Reference"
        }), _jsx(_components.h3, {
          id: "sample-project-1",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Run the sample project from ", _jsx(_components.a, {
            href: "https://github.com/Texeljoy/AgoraHTAvatarExtensionDemo/tree/master/iOS",
            children: "AgoraHTAvatarExtensionDemo"
          }), "."]
        }), _jsx(_components.h3, {
          id: "api-reference-1",
          children: "API reference"
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
        }), _jsx(_components.h3, {
          id: "interface-description-1",
          children: "Interface description"
        }), _jsxs(_components.p, {
          children: ["When you call ", _jsx(_components.code, {
            children: "setExtensionPropertyWithVendor"
          }), ", the following keys and their corresponding functions are supported:"]
        }), _jsx(_components.h4, {
          id: "initialization-1",
          children: "Initialization"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Key"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.a, {
                  href: "#htarinitoffline-1",
                  children: "htARInitOffline"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Initialization, offline authentication."
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "destroy-1",
          children: "Destroy"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Key"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.a, {
                  href: "#htarreleasebufferrenderer-1",
                  children: "htARReleaseBufferRenderer"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Resource release function."
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "functional-interface-1",
          children: "Functional interface"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Key"
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
                children: _jsx(_components.a, {
                  href: "#htarrenderenable-1",
                  children: "htARRenderEnable"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Turn on/off the AR special effects function."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.a, {
                  href: "#htarsetmodel-1",
                  children: "htARSetModel"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Switch AR model function."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.a, {
                  href: "#htarmirror-1",
                  children: "htARMirror"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Set whether the image has a mirror function."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.a, {
                  href: "#htarimageformat-1",
                  children: "htARImageFormat"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Set image format function."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.a, {
                  href: "#htarrotation-1",
                  children: "htARRotation"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Set image rotation angle function."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.a, {
                  href: "#htarmaxfaces-1",
                  children: "htARMaxFaces"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Set the maximum number of supported faces function."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.a, {
                  href: "#htarcopyresource-1",
                  children: "htARCopyResource"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Copy the resource path to the sandbox function."
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "value-description-of-method-keys-1",
          children: "Value description of method keys"
        }), _jsx(_components.h4, {
          id: "htarinitoffline-1",
          children: "htARInitOffline"
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "value"
          }), " contains the following parameters:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value parameter"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "license"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String type, AR offline authentication key."
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "htarreleasebufferrenderer-1",
          children: "htARReleaseBufferRenderer"
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "value"
          }), " contains the following parameters:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value parameter"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "enable"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "BOOL type, whether to confirm the release of resources."
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "htarrenderenable-1",
          children: "htARRenderEnable"
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "value"
          }), " contains the following parameters:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value parameter"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "enable"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "BOOL type, whether to enable the AR function."
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "htarsetmodel-1",
          children: "htARSetModel"
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "value"
          }), " contains the following parameters:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value parameter"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "name"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String type, the name of the model."
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "htarmirror-1",
          children: "htARMirror"
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "value"
          }), " contains the following parameters:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value parameter"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "isMirror"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["BOOL type, whether to set the mirror display of prop special effects. The default is ", _jsx(_components.code, {
                  children: "true"
                }), "."]
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "htarimageformat-1",
          children: "htARImageFormat"
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "value"
          }), " contains the following parameters:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value parameter"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "imageFormat"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Int type, enumeration value of image format. For details, see ", _jsx(_components.a, {
                  href: "https://gitee.com/htai-open/agora-htavatar-extension/blob/master/iOS/ALL_ARCHITECTURE/Release/HTEffectAR.framework/Headers/HTEffectARInterface.h",
                  children: "HTEARImageFormat"
                }), "."]
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "htarrotation-1",
          children: "htARRotation"
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "value"
          }), " contains the following parameters:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value parameter"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "rotation"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Int type, enumeration value of image rotation angle. For details, see ", _jsx(_components.a, {
                  href: "https://gitee.com/htai-open/agora-htavatar-extension/blob/master/iOS/ALL_ARCHITECTURE/Release/HTEffectAR.framework/Headers/HTEffectARInterface.h",
                  children: "HTEAROrientation"
                }), "."]
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "htarmaxfaces-1",
          children: "htARMaxFaces"
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "value"
          }), " contains the following parameters:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value parameter"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "maxFaces"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Int type, the maximum number of supported faces. The value range is ", _jsx(_components.code, {
                  children: "[1, 5]"
                }), "."]
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "htarcopyresource-1",
          children: "htARCopyResource"
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "value"
          }), " contains the following parameters:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value parameter"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "path"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String type, the path that needs to be copied to the sandbox."
              })]
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "interface-description-2",
      children: "Interface description"
    }), `
`, _jsxs(_components.p, {
      children: ["When calling ", _jsx(_components.code, {
        children: "setExtensionProperty"
      }), " on Android or ", _jsx(_components.code, {
        children: "setExtensionPropertyWithVendor"
      }), " on iOS, use the following keys to call the corresponding HTAvatar functions."]
    }), `
`, _jsx(_components.h3, {
      id: "initialization-2",
      children: "Initialization"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Key"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#htarinitoffline",
              children: _jsx(_components.code, {
                children: "htARInitOffline"
              })
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Initializes offline authentication."
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "destroy-2",
      children: "Destroy"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Key"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#htarreleasebufferrenderer",
              children: _jsx(_components.code, {
                children: "htARReleaseBufferRenderer"
              })
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Releases resources."
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "functional-interface-2",
      children: "Functional interface"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Key"
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
            children: _jsx(_components.a, {
              href: "#htarrenderenable",
              children: _jsx(_components.code, {
                children: "htARRenderEnable"
              })
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Turns AR special effects on or off."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#htarsetmodel",
              children: _jsx(_components.code, {
                children: "htARSetModel"
              })
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Switches the AR model."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#htarmirror",
              children: _jsx(_components.code, {
                children: "htARMirror"
              })
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sets whether the image uses mirroring."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#htarimageformat",
              children: _jsx(_components.code, {
                children: "htARImageFormat"
              })
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sets the image format."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#htarrotation",
              children: _jsx(_components.code, {
                children: "htARRotation"
              })
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sets the image rotation angle."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#htarmaxfaces",
              children: _jsx(_components.code, {
                children: "htARMaxFaces"
              })
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sets the maximum number of supported faces."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#htarcopyresource",
              children: _jsx(_components.code, {
                children: "htARCopyResource"
              })
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Copies the resource path to the sandbox."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "value-description-of-method-keys-2",
      children: "Value description of method keys"
    }), `
`, _jsx(_components.h3, {
      id: "htarinitoffline-2",
      children: "htARInitOffline"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "value"
      }), " contains the following parameter:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Value parameter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "license"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String. The AR offline authentication key."
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "htarreleasebufferrenderer-2",
      children: "htARReleaseBufferRenderer"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "value"
      }), " contains the following parameter:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Value parameter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "enable"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Boolean. Whether to confirm resource release."
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "htarrenderenable-2",
      children: "htARRenderEnable"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "value"
      }), " contains the following parameter:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Value parameter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "enable"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Boolean. Whether to enable AR."
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "htarsetmodel-2",
      children: "htARSetModel"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "value"
      }), " contains the following parameter:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Value parameter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "name"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String. The model name."
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "htarmirror-2",
      children: "htARMirror"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "value"
      }), " contains the following parameter:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Value parameter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "isMirror"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Boolean. Whether to mirror prop effects. The default value is ", _jsx(_components.code, {
              children: "true"
            }), "."]
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "htarimageformat-2",
      children: "htARImageFormat"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "value"
      }), " contains the following parameter:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Value parameter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "imageFormat"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Integer. The image format enumeration value. For specific values, see ", _jsx(_components.a, {
              href: "https://gitee.com/htai-open/agora-htavatar-extension/blob/master/iOS/ALL_ARCHITECTURE/Release/HTEffectAR.framework/Headers/HTEffectARInterface.h",
              children: "HTEARImageFormat"
            }), "."]
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "htarrotation-2",
      children: "htARRotation"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "value"
      }), " contains the following parameter:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Value parameter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "rotation"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Integer. The image rotation angle enumeration value. For specific values, see ", _jsx(_components.a, {
              href: "https://gitee.com/htai-open/agora-htavatar-extension/blob/master/iOS/ALL_ARCHITECTURE/Release/HTEffectAR.framework/Headers/HTEffectARInterface.h",
              children: "HTEAROrientation"
            }), "."]
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "htarmaxfaces-2",
      children: "htARMaxFaces"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "value"
      }), " contains the following parameter:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Value parameter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "maxFaces"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Integer. The maximum number of supported faces. The value range is ", _jsx(_components.code, {
              children: "[1, 5]"
            }), "."]
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "htarcopyresource-2",
      children: "htARCopyResource"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "value"
      }), " contains the following parameter:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Value parameter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "path"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String. The path to copy to the sandbox."
          })]
        })
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
