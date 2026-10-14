import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Restrict media zones",
  description: "Control and customize Signaling data routing in your app"
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;web&#x22;,&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;windows&#x22;,&#x22;linux-cpp&#x22;,&#x22;linux-java&#x22;,&#x22;unity&#x22;]" showTabs="true">
  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to.

    ## Understand the tech [#understand-the-tech]

    When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user.

    The following zones are available:

    * **GLOB**: Global (Default)
    * **NA**: North America
    * **CN**: Mainland China.
    * **AS**: Asia excluding mainland China.
    * **EU**: Europe
    * **IN**: India
    * **JP**: Japan

    ## Prerequisites [#prerequisites]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtm/quickstart) in your project.

    ## Configure geographical zones [#configure-geographical-zones]

    To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones.

    \`\`\`js
    // Set whitelist and blacklist areas
    AgoraRTM.setArea({ areaCodes: ["GLOBAL"], excludedArea: "CHINA" })
    \`\`\`

    ## Reference [#reference]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference]

    * [Initialization](/en/api-reference/api-ref/signaling/web#initialization)
    * [\`RtmConfig\`](/en/api-reference/api-ref/signaling/web#rtmconfig)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to.

    ## Understand the tech [#understand-the-tech-1]

    When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user.

    The following zones are available:

    * **GLOB**: Global (Default)
    * **NA**: North America
    * **CN**: Mainland China.
    * **AS**: Asia excluding mainland China.
    * **EU**: Europe
    * **IN**: India
    * **JP**: Japan

    ## Prerequisites [#prerequisites-1]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtm/quickstart) in your project.

    ## Configure geographical zones [#configure-geographical-zones-1]

    To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones.

    <CodeBlockTabs defaultValue="Java">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="Java">
          Java
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="Kotlin">
          Kotlin
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="Java">
        \`\`\`java
        RtmConfig rtmConfig = new RtmConfig.Builder("<your_app_id>", "<your_user_Id>")
            .areaCode(EnumSet.of(RtmConstants.RtmAreaCode.AS, RtmConstants.RtmAreaCode.CN))
            .eventListener(eventListener)
            .build();
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Kotlin">
        \`\`\`kotlin
        val rtmConfig = RtmConfig.Builder("appid", "userId")
            .areaCode(EnumSet.of(RtmConstants.RtmAreaCode.AS, RtmConstants.RtmAreaCode.CN))
            .eventListener(eventListener)
            .build()
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ## Reference [#reference-1]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-1]

    * [\`RtmConfig\`](/en/api-reference/api-ref/signaling/android#rtmconfig)
    * [\`RtmClient.create\`](/en/api-reference/api-ref/signaling/android#create)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to.

    ## Understand the tech [#understand-the-tech-2]

    When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user.

    The following zones are available:

    * **GLOB**: Global (Default)
    * **NA**: North America
    * **CN**: Mainland China.
    * **AS**: Asia excluding mainland China.
    * **EU**: Europe
    * **IN**: India
    * **JP**: Japan

    ## Prerequisites [#prerequisites-2]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtm/quickstart) in your project.

    ## Configure geographical zones [#configure-geographical-zones-2]

    To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones.

    <CodeBlockTabs defaultValue="Swift">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="Swift">
          Swift
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="Objective-C">
          Objective-C
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="Swift">
        \`\`\`swift
        {\`let config = AgoraRtmClientConfig(appId: "<your_app_id>", userId: "<your_user_id>")
        config.areaCode = [.CN, .NA]\`}
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Objective-C">
        \`\`\`cpp
        {\`AgoraRtmClientConfig *rtm_cfg = [[AgoraRtmClientConfig alloc] initWithAppId:@"<your_app_id>" userId:@"<your_user_id>"];
        rtm_cfg.areaCode = AgoraRtmAreaCodeNA;\`}
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ## Reference [#reference-2]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-2]

    <Tabs defaultValue="swift" groupId="language">
      <TabsList>
        <TabsTrigger value="swift">
          Swift
        </TabsTrigger>

        <TabsTrigger value="objc">
          Objective-C
        </TabsTrigger>
      </TabsList>

      <TabsContent value="swift">
        * [\`AgoraRtmClientConfig\`](/en/api-reference/api-ref/signaling/ios#agorartmclientconfig)
        * [Initialize](/en/api-reference/api-ref/signaling/ios#create-an-instance)
      </TabsContent>

      <TabsContent value="objc">
        * [\`AgoraRtmClientConfig\`](/en/api-reference/api-ref/signaling/ios#agorartmclientconfig)
        * [\`initWithConfig\`](/en/api-reference/api-ref/signaling/ios#create-an-instance)
      </TabsContent>
    </Tabs>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to.

    ## Understand the tech [#understand-the-tech-3]

    When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user.

    The following zones are available:

    * **GLOB**: Global (Default)
    * **NA**: North America
    * **CN**: Mainland China.
    * **AS**: Asia excluding mainland China.
    * **EU**: Europe
    * **IN**: India
    * **JP**: Japan

    ## Prerequisites [#prerequisites-3]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtm/quickstart) in your project.

    ## Configure geographical zones [#configure-geographical-zones-3]

    To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones.

    <CodeBlockTabs defaultValue="Swift">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="Swift">
          Swift
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="Objective-C">
          Objective-C
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="Swift">
        \`\`\`swift
        {\`let config = AgoraRtmClientConfig(appId: "<your_app_id>", userId: "<your_user_id>")
        config.areaCode = [.CN, .NA]\`}
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Objective-C">
        \`\`\`cpp
        {\`AgoraRtmClientConfig *rtm_cfg = [[AgoraRtmClientConfig alloc] initWithAppId:@"<your_app_id>" userId:@"<your_user_id>"];
        rtm_cfg.areaCode = AgoraRtmAreaCodeNA;\`}
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ## Reference [#reference-3]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-3]

    <Tabs defaultValue="swift" groupId="language">
      <TabsList>
        <TabsTrigger value="swift">
          Swift
        </TabsTrigger>

        <TabsTrigger value="objc">
          Objective-C
        </TabsTrigger>
      </TabsList>

      <TabsContent value="swift">
        * [\`AgoraRtmClientConfig\`](/en/api-reference/api-ref/signaling/macos#agorartmclientconfig)
        * [Initialize](/en/api-reference/api-ref/signaling/macos#create-an-instance)
      </TabsContent>

      <TabsContent value="objc">
        * [\`AgoraRtmClientConfig\`](/en/api-reference/api-ref/signaling/macos#agorartmclientconfig)
        * [\`initWithConfig\`](/en/api-reference/api-ref/signaling/macos#create-an-instance)
      </TabsContent>
    </Tabs>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to.

    ## Understand the tech [#understand-the-tech-4]

    When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user.

    The following zones are available:

    * **GLOB**: Global (Default)
    * **NA**: North America
    * **CN**: Mainland China.
    * **AS**: Asia excluding mainland China.
    * **EU**: Europe
    * **IN**: India
    * **JP**: Japan

    ## Prerequisites [#prerequisites-4]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtm/quickstart) in your project.

    ## Configure geographical zones [#configure-geographical-zones-4]

    To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones.

    \`\`\`dart
    // Create a Set containing specific RtmAreaCode values
    Set<RtmAreaCode> areaCodes = {RtmAreaCode.na, RtmAreaCode.eu};

    // Use the areaCodes in RtmConfig
    RtmConfig config = RtmConfig(
      areaCode: areaCodes
    );
    \`\`\`

    ## Reference [#reference-4]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-4]

    * [\`RtmConfig\`](/en/api-reference/api-ref/signaling/flutter#rtmconfig)
    * [\`RTM()\`](/en/api-reference/api-ref/signaling/flutter#initialization)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to.

    ## Understand the tech [#understand-the-tech-5]

    When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user.

    The following zones are available:

    * **GLOB**: Global (Default)
    * **NA**: North America
    * **CN**: Mainland China.
    * **AS**: Asia excluding mainland China.
    * **EU**: Europe
    * **IN**: India
    * **JP**: Japan

    ## Prerequisites [#prerequisites-5]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtm/quickstart) in your project.

    ## Configure geographical zones [#configure-geographical-zones-5]

    To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones.

    \`\`\`ts

    const client = createAgoraRtmClient(
     new RtmConfig({
       userId: '<your_user_id>',
       appId: '<your_app_id>',
       useStringUserId: true,
       areaCode: RtmAreaCode.as | RtmAreaCode.cn, // Multiple areas using bitwise OR
       // Or use a single area:
       // areaCode: RtmAreaCode.as,
     })
    );
    \`\`\`

    ## Reference [#reference-5]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-5]

    * [\`createAgoraRtmClient\`](https://api-ref.agora.io/en/signaling-sdk/react-native/2.x#createagorartmclient)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to.

    ## Understand the tech [#understand-the-tech-6]

    When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user.

    The following zones are available:

    * **GLOB**: Global (Default)
    * **NA**: North America
    * **CN**: Mainland China.
    * **AS**: Asia excluding mainland China.
    * **EU**: Europe
    * **IN**: India
    * **JP**: Japan

    ## Prerequisites [#prerequisites-6]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtm/quickstart) in your project.

    ## Configure geographical zones [#configure-geographical-zones-6]

    To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones.

    \`\`\`cpp
    RtmConfig config;
    config.areaCode = RTM_AREA_CODE_NA;

    int errorCode = 0;
    IRtmClient* rtm_client = createAgoraRtmClient(config, errorCode);
    \`\`\`

    ## Reference [#reference-6]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-6]

    * [\`createAgoraRtmClient\`](/en/api-reference/api-ref/signaling/windows-cpp#createagorartmclient)
    * [\`RtmConfig\`](/en/api-reference/api-ref/signaling/windows-cpp#rtmconfig)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="linux-cpp">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="linux-cpp" />

    To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to.

    ## Understand the tech [#understand-the-tech-7]

    When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user.

    The following zones are available:

    * **GLOB**: Global (Default)
    * **NA**: North America
    * **CN**: Mainland China.
    * **AS**: Asia excluding mainland China.
    * **EU**: Europe
    * **IN**: India
    * **JP**: Japan

    ## Prerequisites [#prerequisites-7]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtm/quickstart) in your project.

    ## Configure geographical zones [#configure-geographical-zones-7]

    To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones.

    \`\`\`cpp
    RtmConfig config;
    config.areaCode = RTM_AREA_CODE_NA;

    int errorCode = 0;
    IRtmClient* rtm_client = createAgoraRtmClient(config, errorCode);
    \`\`\`

    ## Reference [#reference-7]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-7]

    * [\`createAgoraRtmClient\`](/en/api-reference/api-ref/signaling/linux-cpp#createagorartmclient)
    * [\`RtmConfig\`](/en/api-reference/api-ref/signaling/linux-cpp#rtmconfig)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="linux-java">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="linux-java" />

    To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to.

    ## Understand the tech [#understand-the-tech-8]

    When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user.

    The following zones are available:

    * **GLOB**: Global (Default)
    * **NA**: North America
    * **CN**: Mainland China.
    * **AS**: Asia excluding mainland China.
    * **EU**: Europe
    * **IN**: India
    * **JP**: Japan

    ## Prerequisites [#prerequisites-8]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtm/quickstart) in your project.

    ## Configure geographical zones [#configure-geographical-zones-8]

    To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones.

    \`\`\`java
    RtmConfig rtmConfig = new RtmConfig.Builder("<your_app_id>", "<your_user_Id>")
        .areaCode(EnumSet.of(RtmConstants.RtmAreaCode.AS, RtmConstants.RtmAreaCode.CN))
        .eventListener(eventListener)
        .build();
    \`\`\`

    ## Reference [#reference-8]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-8]

    * [\`RtmConfig\`](/en/api-reference/api-ref/signaling/linux-java#rtmconfig)
    * [\`RtmClient.create\`](/en/api-reference/api-ref/signaling/linux-java#create)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to.

    ## Understand the tech [#understand-the-tech-9]

    When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user.

    The following zones are available:

    * **GLOB**: Global (Default)
    * **NA**: North America
    * **CN**: Mainland China.
    * **AS**: Asia excluding mainland China.
    * **EU**: Europe
    * **IN**: India
    * **JP**: Japan

    ## Prerequisites [#prerequisites-9]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtm/quickstart) in your project.

    ## Configure geographical zones [#configure-geographical-zones-9]

    To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones.

    \`\`\`csharp
    config.areaCode = Agora.Rtm.RTM_AREA_CODE.NA;
    \`\`\`

    ## Reference [#reference-9]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-9]

    * [\`RtmConfig\`](/en/api-reference/api-ref/signaling/unity#rtmconfig)
    * [\`CreateAgoraRtmClient\`](/en/api-reference/api-ref/signaling/unity#createagorartmclient)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to."
  }, {
    heading: "understand-the-tech",
    content: "When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user."
  }, {
    heading: "understand-the-tech",
    content: "The following zones are available:"
  }, {
    heading: "understand-the-tech",
    content: "**GLOB**: Global (Default)"
  }, {
    heading: "understand-the-tech",
    content: "**NA**: North America"
  }, {
    heading: "understand-the-tech",
    content: "**CN**: Mainland China."
  }, {
    heading: "understand-the-tech",
    content: "**AS**: Asia excluding mainland China."
  }, {
    heading: "understand-the-tech",
    content: "**EU**: Europe"
  }, {
    heading: "understand-the-tech",
    content: "**IN**: India"
  }, {
    heading: "understand-the-tech",
    content: "**JP**: Japan"
  }, {
    heading: "prerequisites",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "configure-geographical-zones",
    content: "To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference",
    content: "Initialization"
  }, {
    heading: "api-reference",
    content: "`RtmConfig`"
  }, {
    heading: "api-reference",
    content: "To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to."
  }, {
    heading: "understand-the-tech-1",
    content: "When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user."
  }, {
    heading: "understand-the-tech-1",
    content: "The following zones are available:"
  }, {
    heading: "understand-the-tech-1",
    content: "**GLOB**: Global (Default)"
  }, {
    heading: "understand-the-tech-1",
    content: "**NA**: North America"
  }, {
    heading: "understand-the-tech-1",
    content: "**CN**: Mainland China."
  }, {
    heading: "understand-the-tech-1",
    content: "**AS**: Asia excluding mainland China."
  }, {
    heading: "understand-the-tech-1",
    content: "**EU**: Europe"
  }, {
    heading: "understand-the-tech-1",
    content: "**IN**: India"
  }, {
    heading: "understand-the-tech-1",
    content: "**JP**: Japan"
  }, {
    heading: "prerequisites-1",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "configure-geographical-zones-1",
    content: "To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones."
  }, {
    heading: "reference-1",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-1",
    content: "`RtmConfig`"
  }, {
    heading: "api-reference-1",
    content: "`RtmClient.create`"
  }, {
    heading: "api-reference-1",
    content: "To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to."
  }, {
    heading: "understand-the-tech-2",
    content: "When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user."
  }, {
    heading: "understand-the-tech-2",
    content: "The following zones are available:"
  }, {
    heading: "understand-the-tech-2",
    content: "**GLOB**: Global (Default)"
  }, {
    heading: "understand-the-tech-2",
    content: "**NA**: North America"
  }, {
    heading: "understand-the-tech-2",
    content: "**CN**: Mainland China."
  }, {
    heading: "understand-the-tech-2",
    content: "**AS**: Asia excluding mainland China."
  }, {
    heading: "understand-the-tech-2",
    content: "**EU**: Europe"
  }, {
    heading: "understand-the-tech-2",
    content: "**IN**: India"
  }, {
    heading: "understand-the-tech-2",
    content: "**JP**: Japan"
  }, {
    heading: "prerequisites-2",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "configure-geographical-zones-2",
    content: "To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones."
  }, {
    heading: "reference-2",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-2",
    content: "`AgoraRtmClientConfig`"
  }, {
    heading: "api-reference-2",
    content: "Initialize"
  }, {
    heading: "api-reference-2",
    content: "`AgoraRtmClientConfig`"
  }, {
    heading: "api-reference-2",
    content: "`initWithConfig`"
  }, {
    heading: "api-reference-2",
    content: "To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to."
  }, {
    heading: "understand-the-tech-3",
    content: "When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user."
  }, {
    heading: "understand-the-tech-3",
    content: "The following zones are available:"
  }, {
    heading: "understand-the-tech-3",
    content: "**GLOB**: Global (Default)"
  }, {
    heading: "understand-the-tech-3",
    content: "**NA**: North America"
  }, {
    heading: "understand-the-tech-3",
    content: "**CN**: Mainland China."
  }, {
    heading: "understand-the-tech-3",
    content: "**AS**: Asia excluding mainland China."
  }, {
    heading: "understand-the-tech-3",
    content: "**EU**: Europe"
  }, {
    heading: "understand-the-tech-3",
    content: "**IN**: India"
  }, {
    heading: "understand-the-tech-3",
    content: "**JP**: Japan"
  }, {
    heading: "prerequisites-3",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "configure-geographical-zones-3",
    content: "To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones."
  }, {
    heading: "reference-3",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-3",
    content: "`AgoraRtmClientConfig`"
  }, {
    heading: "api-reference-3",
    content: "Initialize"
  }, {
    heading: "api-reference-3",
    content: "`AgoraRtmClientConfig`"
  }, {
    heading: "api-reference-3",
    content: "`initWithConfig`"
  }, {
    heading: "api-reference-3",
    content: "To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to."
  }, {
    heading: "understand-the-tech-4",
    content: "When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user."
  }, {
    heading: "understand-the-tech-4",
    content: "The following zones are available:"
  }, {
    heading: "understand-the-tech-4",
    content: "**GLOB**: Global (Default)"
  }, {
    heading: "understand-the-tech-4",
    content: "**NA**: North America"
  }, {
    heading: "understand-the-tech-4",
    content: "**CN**: Mainland China."
  }, {
    heading: "understand-the-tech-4",
    content: "**AS**: Asia excluding mainland China."
  }, {
    heading: "understand-the-tech-4",
    content: "**EU**: Europe"
  }, {
    heading: "understand-the-tech-4",
    content: "**IN**: India"
  }, {
    heading: "understand-the-tech-4",
    content: "**JP**: Japan"
  }, {
    heading: "prerequisites-4",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "configure-geographical-zones-4",
    content: "To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones."
  }, {
    heading: "reference-4",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-4",
    content: "`RtmConfig`"
  }, {
    heading: "api-reference-4",
    content: "`RTM()`"
  }, {
    heading: "api-reference-4",
    content: "To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to."
  }, {
    heading: "understand-the-tech-5",
    content: "When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user."
  }, {
    heading: "understand-the-tech-5",
    content: "The following zones are available:"
  }, {
    heading: "understand-the-tech-5",
    content: "**GLOB**: Global (Default)"
  }, {
    heading: "understand-the-tech-5",
    content: "**NA**: North America"
  }, {
    heading: "understand-the-tech-5",
    content: "**CN**: Mainland China."
  }, {
    heading: "understand-the-tech-5",
    content: "**AS**: Asia excluding mainland China."
  }, {
    heading: "understand-the-tech-5",
    content: "**EU**: Europe"
  }, {
    heading: "understand-the-tech-5",
    content: "**IN**: India"
  }, {
    heading: "understand-the-tech-5",
    content: "**JP**: Japan"
  }, {
    heading: "prerequisites-5",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "configure-geographical-zones-5",
    content: "To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones."
  }, {
    heading: "reference-5",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-5",
    content: "`createAgoraRtmClient`"
  }, {
    heading: "api-reference-5",
    content: "To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to."
  }, {
    heading: "understand-the-tech-6",
    content: "When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user."
  }, {
    heading: "understand-the-tech-6",
    content: "The following zones are available:"
  }, {
    heading: "understand-the-tech-6",
    content: "**GLOB**: Global (Default)"
  }, {
    heading: "understand-the-tech-6",
    content: "**NA**: North America"
  }, {
    heading: "understand-the-tech-6",
    content: "**CN**: Mainland China."
  }, {
    heading: "understand-the-tech-6",
    content: "**AS**: Asia excluding mainland China."
  }, {
    heading: "understand-the-tech-6",
    content: "**EU**: Europe"
  }, {
    heading: "understand-the-tech-6",
    content: "**IN**: India"
  }, {
    heading: "understand-the-tech-6",
    content: "**JP**: Japan"
  }, {
    heading: "prerequisites-6",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "configure-geographical-zones-6",
    content: "To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones."
  }, {
    heading: "reference-6",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-6",
    content: "`createAgoraRtmClient`"
  }, {
    heading: "api-reference-6",
    content: "`RtmConfig`"
  }, {
    heading: "api-reference-6",
    content: "To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to."
  }, {
    heading: "understand-the-tech-7",
    content: "When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user."
  }, {
    heading: "understand-the-tech-7",
    content: "The following zones are available:"
  }, {
    heading: "understand-the-tech-7",
    content: "**GLOB**: Global (Default)"
  }, {
    heading: "understand-the-tech-7",
    content: "**NA**: North America"
  }, {
    heading: "understand-the-tech-7",
    content: "**CN**: Mainland China."
  }, {
    heading: "understand-the-tech-7",
    content: "**AS**: Asia excluding mainland China."
  }, {
    heading: "understand-the-tech-7",
    content: "**EU**: Europe"
  }, {
    heading: "understand-the-tech-7",
    content: "**IN**: India"
  }, {
    heading: "understand-the-tech-7",
    content: "**JP**: Japan"
  }, {
    heading: "prerequisites-7",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "configure-geographical-zones-7",
    content: "To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones."
  }, {
    heading: "reference-7",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-7",
    content: "`createAgoraRtmClient`"
  }, {
    heading: "api-reference-7",
    content: "`RtmConfig`"
  }, {
    heading: "api-reference-7",
    content: "To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to."
  }, {
    heading: "understand-the-tech-8",
    content: "When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user."
  }, {
    heading: "understand-the-tech-8",
    content: "The following zones are available:"
  }, {
    heading: "understand-the-tech-8",
    content: "**GLOB**: Global (Default)"
  }, {
    heading: "understand-the-tech-8",
    content: "**NA**: North America"
  }, {
    heading: "understand-the-tech-8",
    content: "**CN**: Mainland China."
  }, {
    heading: "understand-the-tech-8",
    content: "**AS**: Asia excluding mainland China."
  }, {
    heading: "understand-the-tech-8",
    content: "**EU**: Europe"
  }, {
    heading: "understand-the-tech-8",
    content: "**IN**: India"
  }, {
    heading: "understand-the-tech-8",
    content: "**JP**: Japan"
  }, {
    heading: "prerequisites-8",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "configure-geographical-zones-8",
    content: "To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones."
  }, {
    heading: "reference-8",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-8",
    content: "`RtmConfig`"
  }, {
    heading: "api-reference-8",
    content: "`RtmClient.create`"
  }, {
    heading: "api-reference-8",
    content: "To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to."
  }, {
    heading: "understand-the-tech-9",
    content: "When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user."
  }, {
    heading: "understand-the-tech-9",
    content: "The following zones are available:"
  }, {
    heading: "understand-the-tech-9",
    content: "**GLOB**: Global (Default)"
  }, {
    heading: "understand-the-tech-9",
    content: "**NA**: North America"
  }, {
    heading: "understand-the-tech-9",
    content: "**CN**: Mainland China."
  }, {
    heading: "understand-the-tech-9",
    content: "**AS**: Asia excluding mainland China."
  }, {
    heading: "understand-the-tech-9",
    content: "**EU**: Europe"
  }, {
    heading: "understand-the-tech-9",
    content: "**IN**: India"
  }, {
    heading: "understand-the-tech-9",
    content: "**JP**: Japan"
  }, {
    heading: "prerequisites-9",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "configure-geographical-zones-9",
    content: "To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones."
  }, {
    heading: "reference-9",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-9",
    content: "`RtmConfig`"
  }, {
    heading: "api-reference-9",
    content: "`CreateAgoraRtmClient`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "configure-geographical-zones",
    content: "Configure geographical zones"
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
    id: "configure-geographical-zones-1",
    content: "Configure geographical zones"
  }, {
    id: "reference-1",
    content: "Reference"
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
    id: "configure-geographical-zones-2",
    content: "Configure geographical zones"
  }, {
    id: "reference-2",
    content: "Reference"
  }, {
    id: "api-reference-2",
    content: "API reference"
  }, {
    id: "understand-the-tech-3",
    content: "Understand the tech"
  }, {
    id: "prerequisites-3",
    content: "Prerequisites"
  }, {
    id: "configure-geographical-zones-3",
    content: "Configure geographical zones"
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
    id: "configure-geographical-zones-4",
    content: "Configure geographical zones"
  }, {
    id: "reference-4",
    content: "Reference"
  }, {
    id: "api-reference-4",
    content: "API reference"
  }, {
    id: "understand-the-tech-5",
    content: "Understand the tech"
  }, {
    id: "prerequisites-5",
    content: "Prerequisites"
  }, {
    id: "configure-geographical-zones-5",
    content: "Configure geographical zones"
  }, {
    id: "reference-5",
    content: "Reference"
  }, {
    id: "api-reference-5",
    content: "API reference"
  }, {
    id: "understand-the-tech-6",
    content: "Understand the tech"
  }, {
    id: "prerequisites-6",
    content: "Prerequisites"
  }, {
    id: "configure-geographical-zones-6",
    content: "Configure geographical zones"
  }, {
    id: "reference-6",
    content: "Reference"
  }, {
    id: "api-reference-6",
    content: "API reference"
  }, {
    id: "understand-the-tech-7",
    content: "Understand the tech"
  }, {
    id: "prerequisites-7",
    content: "Prerequisites"
  }, {
    id: "configure-geographical-zones-7",
    content: "Configure geographical zones"
  }, {
    id: "reference-7",
    content: "Reference"
  }, {
    id: "api-reference-7",
    content: "API reference"
  }, {
    id: "understand-the-tech-8",
    content: "Understand the tech"
  }, {
    id: "prerequisites-8",
    content: "Prerequisites"
  }, {
    id: "configure-geographical-zones-8",
    content: "Configure geographical zones"
  }, {
    id: "reference-8",
    content: "Reference"
  }, {
    id: "api-reference-8",
    content: "API reference"
  }, {
    id: "understand-the-tech-9",
    content: "Understand the tech"
  }, {
    id: "prerequisites-9",
    content: "Prerequisites"
  }, {
    id: "configure-geographical-zones-9",
    content: "Configure geographical zones"
  }, {
    id: "reference-9",
    content: "Reference"
  }, {
    id: "api-reference-9",
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
  url: "#configure-geographical-zones",
  title: _jsx(_Fragment, {
    children: "Configure geographical zones"
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
  url: "#configure-geographical-zones-1",
  title: _jsx(_Fragment, {
    children: "Configure geographical zones"
  })
}, {
  depth: 2,
  url: "#reference-1",
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
  url: "#configure-geographical-zones-2",
  title: _jsx(_Fragment, {
    children: "Configure geographical zones"
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
  url: "#configure-geographical-zones-3",
  title: _jsx(_Fragment, {
    children: "Configure geographical zones"
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
  url: "#configure-geographical-zones-4",
  title: _jsx(_Fragment, {
    children: "Configure geographical zones"
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
  url: "#configure-geographical-zones-5",
  title: _jsx(_Fragment, {
    children: "Configure geographical zones"
  })
}, {
  depth: 2,
  url: "#reference-5",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference-5",
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
  url: "#configure-geographical-zones-6",
  title: _jsx(_Fragment, {
    children: "Configure geographical zones"
  })
}, {
  depth: 2,
  url: "#reference-6",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference-6",
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
  url: "#configure-geographical-zones-7",
  title: _jsx(_Fragment, {
    children: "Configure geographical zones"
  })
}, {
  depth: 2,
  url: "#reference-7",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference-7",
  title: _jsx(_Fragment, {
    children: "API reference"
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
  url: "#configure-geographical-zones-8",
  title: _jsx(_Fragment, {
    children: "Configure geographical zones"
  })
}, {
  depth: 2,
  url: "#reference-8",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference-8",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-9",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-9",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#configure-geographical-zones-9",
  title: _jsx(_Fragment, {
    children: "Configure geographical zones"
  })
}, {
  depth: 2,
  url: "#reference-9",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference-9",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger, Tabs, TabsContent, TabsList, TabsTrigger, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!CodeBlockTab)
    _missingMdxReference("CodeBlockTab", true);
  if (!CodeBlockTabs)
    _missingMdxReference("CodeBlockTabs", true);
  if (!CodeBlockTabsList)
    _missingMdxReference("CodeBlockTabsList", true);
  if (!CodeBlockTabsTrigger)
    _missingMdxReference("CodeBlockTabsTrigger", true);
  if (!Tabs)
    _missingMdxReference("Tabs", true);
  if (!TabsContent)
    _missingMdxReference("TabsContent", true);
  if (!TabsList)
    _missingMdxReference("TabsList", true);
  if (!TabsTrigger)
    _missingMdxReference("TabsTrigger", true);
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_PlatformTabsGroup, {
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
      }), _jsx(_components.p, {
        children: "To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to."
      }), _jsx(_components.h2, {
        id: "understand-the-tech",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user."
      }), _jsx(_components.p, {
        children: "The following zones are available:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "GLOB"
          }), ": Global (Default)"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "NA"
          }), ": North America"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "CN"
          }), ": Mainland China."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "AS"
          }), ": Asia excluding mainland China."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "EU"
          }), ": Europe"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "IN"
          }), ": India"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "JP"
          }), ": Japan"]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have implemented the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtm/quickstart",
          children: "SDK quickstart"
        }), " in your project."]
      }), _jsx(_components.h2, {
        id: "configure-geographical-zones",
        children: "Configure geographical zones"
      }), _jsx(_components.p, {
        children: "To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones."
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
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set whitelist and blacklist areas"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraRTM."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setArea"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "({ areaCodes: ["
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"GLOBAL"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "], excludedArea: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"CHINA"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " })"
              })]
            })]
          })
        })
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
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/signaling/web#initialization",
            children: "Initialization"
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/signaling/web#rtmconfig",
            children: _jsx(_components.code, {
              children: "RtmConfig"
            })
          })
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
        children: "To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-1",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user."
      }), _jsx(_components.p, {
        children: "The following zones are available:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "GLOB"
          }), ": Global (Default)"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "NA"
          }), ": North America"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "CN"
          }), ": Mainland China."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "AS"
          }), ": Asia excluding mainland China."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "EU"
          }), ": Europe"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "IN"
          }), ": India"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "JP"
          }), ": Japan"]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-1",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have implemented the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtm/quickstart",
          children: "SDK quickstart"
        }), " in your project."]
      }), _jsx(_components.h2, {
        id: "configure-geographical-zones-1",
        children: "Configure geographical zones"
      }), _jsx(_components.p, {
        children: "To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones."
      }), _jsxs(CodeBlockTabs, {
        defaultValue: "Java",
        children: [_jsxs(CodeBlockTabsList, {
          children: [_jsx(CodeBlockTabsTrigger, {
            value: "Java",
            children: "Java"
          }), _jsx(CodeBlockTabsTrigger, {
            value: "Kotlin",
            children: "Kotlin"
          })]
        }), _jsx(CodeBlockTab, {
          value: "Java",
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
                    children: "RtmConfig rtmConfig "
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " RtmConfig."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "Builder"
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
                    children: '"<your_app_id>"'
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
                    children: '"<your_user_Id>"'
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
                    children: "    ."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "areaCode"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(EnumSet."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "of"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(RtmConstants.RtmAreaCode.AS, RtmConstants.RtmAreaCode.CN))"
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "eventListener"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(eventListener)"
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "build"
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
          })
        }), _jsx(CodeBlockTab, {
          value: "Kotlin",
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
                    children: " rtmConfig "
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
                    children: " RtmConfig."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "Builder"
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
                    children: '"appid"'
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
                    children: '"userId"'
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
                    children: "    ."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "areaCode"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(EnumSet."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "of"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(RtmConstants.RtmAreaCode.AS, RtmConstants.RtmAreaCode.CN))"
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "eventListener"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(eventListener)"
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "build"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "()"
                  })]
                })]
              })
            })
          })
        })]
      }), _jsx(_components.h2, {
        id: "reference-1",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference-1",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/signaling/android#rtmconfig",
            children: _jsx(_components.code, {
              children: "RtmConfig"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/signaling/android#create",
            children: _jsx(_components.code, {
              children: "RtmClient.create"
            })
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
        canonicalPlatform: "web",
        platform: "ios"
      }), _jsx(_components.p, {
        children: "To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-2",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user."
      }), _jsx(_components.p, {
        children: "The following zones are available:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "GLOB"
          }), ": Global (Default)"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "NA"
          }), ": North America"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "CN"
          }), ": Mainland China."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "AS"
          }), ": Asia excluding mainland China."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "EU"
          }), ": Europe"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "IN"
          }), ": India"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "JP"
          }), ": Japan"]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-2",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have implemented the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtm/quickstart",
          children: "SDK quickstart"
        }), " in your project."]
      }), _jsx(_components.h2, {
        id: "configure-geographical-zones-2",
        children: "Configure geographical zones"
      }), _jsx(_components.p, {
        children: "To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones."
      }), _jsxs(CodeBlockTabs, {
        defaultValue: "Swift",
        children: [_jsxs(CodeBlockTabsList, {
          children: [_jsx(CodeBlockTabsTrigger, {
            value: "Swift",
            children: "Swift"
          }), _jsx(CodeBlockTabsTrigger, {
            value: "Objective-C",
            children: "Objective-C"
          })]
        }), _jsx(CodeBlockTab, {
          value: "Swift",
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "{`"
                  }), _jsx(_components.span, {
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
                    children: " config "
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
                    children: " AgoraRtmClientConfig"
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
                    children: "appId"
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
                    children: '"<your_app_id>"'
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
                    children: "userId"
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
                    children: '"<your_user_id>"'
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
                    children: "config.areaCode "
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
                    children: " [.CN, .NA]`}"
                  })]
                })]
              })
            })
          })
        }), _jsx(CodeBlockTab, {
          value: "Objective-C",
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
              icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "{`AgoraRtmClientConfig "
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
                    children: "rtm_cfg "
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
                    children: " [["
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "AgoraRtmClientConfig"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "initWithAppId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: ':@"<'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "your_app_id"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: '>" '
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "userId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: ':@"<'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "your_user_id"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: '>"];'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "rtm_cfg"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "areaCode"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " = "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "AgoraRtmAreaCodeNA"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: ";`}"
                  })]
                })]
              })
            })
          })
        })]
      }), _jsx(_components.h2, {
        id: "reference-2",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference-2",
        children: "API reference"
      }), _jsxs(Tabs, {
        defaultValue: "swift",
        groupId: "language",
        persist: true,
        children: [_jsxs(TabsList, {
          children: [_jsx(TabsTrigger, {
            value: "swift",
            children: "Swift"
          }), _jsx(TabsTrigger, {
            value: "objc",
            children: "Objective-C"
          })]
        }), _jsx(TabsContent, {
          value: "swift",
          children: _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.a, {
                href: "/en/api-reference/api-ref/signaling/ios#agorartmclientconfig",
                children: _jsx(_components.code, {
                  children: "AgoraRtmClientConfig"
                })
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.a, {
                href: "/en/api-reference/api-ref/signaling/ios#create-an-instance",
                children: "Initialize"
              })
            }), `
`]
          })
        }), _jsx(TabsContent, {
          value: "objc",
          children: _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.a, {
                href: "/en/api-reference/api-ref/signaling/ios#agorartmclientconfig",
                children: _jsx(_components.code, {
                  children: "AgoraRtmClientConfig"
                })
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.a, {
                href: "/en/api-reference/api-ref/signaling/ios#create-an-instance",
                children: _jsx(_components.code, {
                  children: "initWithConfig"
                })
              })
            }), `
`]
          })
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
      }), _jsx(_components.p, {
        children: "To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-3",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user."
      }), _jsx(_components.p, {
        children: "The following zones are available:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "GLOB"
          }), ": Global (Default)"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "NA"
          }), ": North America"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "CN"
          }), ": Mainland China."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "AS"
          }), ": Asia excluding mainland China."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "EU"
          }), ": Europe"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "IN"
          }), ": India"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "JP"
          }), ": Japan"]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-3",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have implemented the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtm/quickstart",
          children: "SDK quickstart"
        }), " in your project."]
      }), _jsx(_components.h2, {
        id: "configure-geographical-zones-3",
        children: "Configure geographical zones"
      }), _jsx(_components.p, {
        children: "To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones."
      }), _jsxs(CodeBlockTabs, {
        defaultValue: "Swift",
        children: [_jsxs(CodeBlockTabsList, {
          children: [_jsx(CodeBlockTabsTrigger, {
            value: "Swift",
            children: "Swift"
          }), _jsx(CodeBlockTabsTrigger, {
            value: "Objective-C",
            children: "Objective-C"
          })]
        }), _jsx(CodeBlockTab, {
          value: "Swift",
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "{`"
                  }), _jsx(_components.span, {
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
                    children: " config "
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
                    children: " AgoraRtmClientConfig"
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
                    children: "appId"
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
                    children: '"<your_app_id>"'
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
                    children: "userId"
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
                    children: '"<your_user_id>"'
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
                    children: "config.areaCode "
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
                    children: " [.CN, .NA]`}"
                  })]
                })]
              })
            })
          })
        }), _jsx(CodeBlockTab, {
          value: "Objective-C",
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
              icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "{`AgoraRtmClientConfig "
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
                    children: "rtm_cfg "
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
                    children: " [["
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "AgoraRtmClientConfig"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "initWithAppId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: ':@"<'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "your_app_id"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: '>" '
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "userId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: ':@"<'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "your_user_id"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: '>"];'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "rtm_cfg"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "areaCode"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " = "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "AgoraRtmAreaCodeNA"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: ";`}"
                  })]
                })]
              })
            })
          })
        })]
      }), _jsx(_components.h2, {
        id: "reference-3",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference-3",
        children: "API reference"
      }), _jsxs(Tabs, {
        defaultValue: "swift",
        groupId: "language",
        persist: true,
        children: [_jsxs(TabsList, {
          children: [_jsx(TabsTrigger, {
            value: "swift",
            children: "Swift"
          }), _jsx(TabsTrigger, {
            value: "objc",
            children: "Objective-C"
          })]
        }), _jsx(TabsContent, {
          value: "swift",
          children: _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.a, {
                href: "/en/api-reference/api-ref/signaling/macos#agorartmclientconfig",
                children: _jsx(_components.code, {
                  children: "AgoraRtmClientConfig"
                })
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.a, {
                href: "/en/api-reference/api-ref/signaling/macos#create-an-instance",
                children: "Initialize"
              })
            }), `
`]
          })
        }), _jsx(TabsContent, {
          value: "objc",
          children: _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.a, {
                href: "/en/api-reference/api-ref/signaling/macos#agorartmclientconfig",
                children: _jsx(_components.code, {
                  children: "AgoraRtmClientConfig"
                })
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.a, {
                href: "/en/api-reference/api-ref/signaling/macos#create-an-instance",
                children: _jsx(_components.code, {
                  children: "initWithConfig"
                })
              })
            }), `
`]
          })
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
      }), _jsx(_components.p, {
        children: "To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-4",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user."
      }), _jsx(_components.p, {
        children: "The following zones are available:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "GLOB"
          }), ": Global (Default)"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "NA"
          }), ": North America"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "CN"
          }), ": Mainland China."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "AS"
          }), ": Asia excluding mainland China."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "EU"
          }), ": Europe"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "IN"
          }), ": India"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "JP"
          }), ": Japan"]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-4",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have implemented the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtm/quickstart",
          children: "SDK quickstart"
        }), " in your project."]
      }), _jsx(_components.h2, {
        id: "configure-geographical-zones-4",
        children: "Configure geographical zones"
      }), _jsx(_components.p, {
        children: "To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones."
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
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Create a Set containing specific RtmAreaCode values"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "Set"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "<"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "RtmAreaCode"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "> areaCodes "
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
                children: " {"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "RtmAreaCode"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".na, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "RtmAreaCode"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".eu};"
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
                children: "// Use the areaCodes in RtmConfig"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "RtmConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " config "
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
                children: " RtmConfig"
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
                children: "  areaCode"
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
                children: " areaCodes"
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
      }), _jsx(_components.h2, {
        id: "reference-4",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference-4",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/signaling/flutter#rtmconfig",
            children: _jsx(_components.code, {
              children: "RtmConfig"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/signaling/flutter#initialization",
            children: _jsx(_components.code, {
              children: "RTM()"
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
      }), _jsx(_components.p, {
        children: "To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-5",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user."
      }), _jsx(_components.p, {
        children: "The following zones are available:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "GLOB"
          }), ": Global (Default)"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "NA"
          }), ": North America"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "CN"
          }), ": Mainland China."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "AS"
          }), ": Asia excluding mainland China."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "EU"
          }), ": Europe"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "IN"
          }), ": India"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "JP"
          }), ": Japan"]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-5",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have implemented the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtm/quickstart",
          children: "SDK quickstart"
        }), " in your project."]
      }), _jsx(_components.h2, {
        id: "configure-geographical-zones-5",
        children: "Configure geographical zones"
      }), _jsx(_components.p, {
        children: "To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones."
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
            children: [_jsx(_components.span, {
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
                children: " client"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " createAgoraRtmClient"
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " RtmConfig"
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
                children: "   userId: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'<your_user_id>'"
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
                children: "   appId: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'<your_app_id>'"
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
                children: "   useStringUserId: "
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "   areaCode: RtmAreaCode.as "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "|"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " RtmAreaCode.cn, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Multiple areas using bitwise OR"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "   // Or use a single area:"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "   // areaCode: RtmAreaCode.as,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " })"
              })
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
      }), _jsx(_components.h2, {
        id: "reference-5",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference-5",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/signaling-sdk/react-native/2.x#createagorartmclient",
            children: _jsx(_components.code, {
              children: "createAgoraRtmClient"
            })
          })
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
        children: "To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-6",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user."
      }), _jsx(_components.p, {
        children: "The following zones are available:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "GLOB"
          }), ": Global (Default)"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "NA"
          }), ": North America"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "CN"
          }), ": Mainland China."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "AS"
          }), ": Asia excluding mainland China."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "EU"
          }), ": Europe"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "IN"
          }), ": India"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "JP"
          }), ": Japan"]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-6",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have implemented the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtm/quickstart",
          children: "SDK quickstart"
        }), " in your project."]
      }), _jsx(_components.h2, {
        id: "configure-geographical-zones-6",
        children: "Configure geographical zones"
      }), _jsx(_components.p, {
        children: "To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones."
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
          icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "RtmConfig config;"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config.areaCode "
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
                children: " RTM_AREA_CODE_NA;"
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
                children: "int"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " errorCode "
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
                children: " 0"
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
                children: "IRtmClient"
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
                children: " rtm_client "
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
                children: " createAgoraRtmClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(config, errorCode);"
              })]
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "reference-6",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference-6",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/signaling/windows-cpp#createagorartmclient",
            children: _jsx(_components.code, {
              children: "createAgoraRtmClient"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/signaling/windows-cpp#rtmconfig",
            children: _jsx(_components.code, {
              children: "RtmConfig"
            })
          })
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
        children: "To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-7",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user."
      }), _jsx(_components.p, {
        children: "The following zones are available:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "GLOB"
          }), ": Global (Default)"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "NA"
          }), ": North America"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "CN"
          }), ": Mainland China."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "AS"
          }), ": Asia excluding mainland China."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "EU"
          }), ": Europe"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "IN"
          }), ": India"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "JP"
          }), ": Japan"]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-7",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have implemented the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtm/quickstart",
          children: "SDK quickstart"
        }), " in your project."]
      }), _jsx(_components.h2, {
        id: "configure-geographical-zones-7",
        children: "Configure geographical zones"
      }), _jsx(_components.p, {
        children: "To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones."
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
          icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "RtmConfig config;"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config.areaCode "
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
                children: " RTM_AREA_CODE_NA;"
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
                children: "int"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " errorCode "
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
                children: " 0"
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
                children: "IRtmClient"
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
                children: " rtm_client "
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
                children: " createAgoraRtmClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(config, errorCode);"
              })]
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "reference-7",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference-7",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/signaling/linux-cpp#createagorartmclient",
            children: _jsx(_components.code, {
              children: "createAgoraRtmClient"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/signaling/linux-cpp#rtmconfig",
            children: _jsx(_components.code, {
              children: "RtmConfig"
            })
          })
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
        children: "To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-8",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user."
      }), _jsx(_components.p, {
        children: "The following zones are available:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "GLOB"
          }), ": Global (Default)"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "NA"
          }), ": North America"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "CN"
          }), ": Mainland China."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "AS"
          }), ": Asia excluding mainland China."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "EU"
          }), ": Europe"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "IN"
          }), ": India"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "JP"
          }), ": Japan"]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-8",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have implemented the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtm/quickstart",
          children: "SDK quickstart"
        }), " in your project."]
      }), _jsx(_components.h2, {
        id: "configure-geographical-zones-8",
        children: "Configure geographical zones"
      }), _jsx(_components.p, {
        children: "To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones."
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
                children: "RtmConfig rtmConfig "
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " RtmConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Builder"
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
                children: '"<your_app_id>"'
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
                children: '"<your_user_Id>"'
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
                children: "    ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "areaCode"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(EnumSet."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "of"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(RtmConstants.RtmAreaCode.AS, RtmConstants.RtmAreaCode.CN))"
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "eventListener"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(eventListener)"
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "build"
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
      }), _jsx(_components.h2, {
        id: "reference-8",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference-8",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/signaling/linux-java#rtmconfig",
            children: _jsx(_components.code, {
              children: "RtmConfig"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/signaling/linux-java#create",
            children: _jsx(_components.code, {
              children: "RtmClient.create"
            })
          })
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
        children: "To comply with local laws and regulations, you can restrict user connections to specific geographic zones. Agora enables you to control data routing in your app by specifying the Agora SDRTN® zones that users can connect to."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-9",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "When you set area codes in your client configuration, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user."
      }), _jsx(_components.p, {
        children: "The following zones are available:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "GLOB"
          }), ": Global (Default)"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "NA"
          }), ": North America"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "CN"
          }), ": Mainland China."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "AS"
          }), ": Asia excluding mainland China."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "EU"
          }), ": Europe"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "IN"
          }), ": India"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "JP"
          }), ": Japan"]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-9",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have implemented the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtm/quickstart",
          children: "SDK quickstart"
        }), " in your project."]
      }), _jsx(_components.h2, {
        id: "configure-geographical-zones-9",
        children: "Configure geographical zones"
      }), _jsx(_components.p, {
        children: "To configure geographical access, specify area codes in the configuration when you initialize a Signaling client instance. You can combine the codes to include or exclude specific zones."
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
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config.areaCode "
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
                children: " Agora.Rtm.RTM_AREA_CODE.NA;"
              })]
            })
          })
        })
      }), _jsx(_components.h2, {
        id: "reference-9",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference-9",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/signaling/unity#rtmconfig",
            children: _jsx(_components.code, {
              children: "RtmConfig"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/signaling/unity#createagorartmclient",
            children: _jsx(_components.code, {
              children: "CreateAgoraRtmClient"
            })
          })
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
