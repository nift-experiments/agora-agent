import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Client configuration",
  description: "Configure connection protocol, proxy, and log settings."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;web&#x22;,&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;windows&#x22;,&#x22;linux-cpp&#x22;,&#x22;linux-java&#x22;,&#x22;unity&#x22;]" showTabs="true">
  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements.

    ## Understand the tech [#understand-the-tech]

    When initializing a Signaling client instance, configure any or all of the following features:

    * **Geographical area access**
      When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.

    * **Enable proxy connection**
      You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.

    * **Private deployment**
      Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.

    * **Logging**
      Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.

    * **Data encryption**
      Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see [Data encryption](../secure-your-app-and-data/data-encryption).

    ## Prerequisites [#prerequisites]

    Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the [SDK quickstart](../../index) page.

    ## Configure the client instance [#configure-the-client-instance]

    This section explains how to set up and customize various features when you initialize a Signaling client instance.

    ### Geographical area configuration [#geographical-area-configuration]

    To specify a geographical area for Agora SDRTN® connections, refer to the following code:

    \`\`\`js
    // Set whitelist and blacklist areas
    AgoraRTM.setArea({ areaCodes: ["GLOBAL"], excludedArea: "CHINA" })
    \`\`\`

    ### Proxy configuration [#proxy-configuration]

    In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization.

    Since v2.3.0, the SDK no longer automatically falls back to Cloud Proxy. To use Cloud Proxy, you must explicitly set \`cloudProxy\` to \`true\` when initializing the RTM instance. Agora recommends that you give end users an option to enable Cloud Proxy based on your business needs.

    \`\`\`javascript
    const { RTM } = AgoraRTM;
    const appId = "your_appId";
    const userId = "your_userId";
    const rtmConfig = { cloudProxy: true };
    const rtm = new RTM(appId, userId, rtmConfig);
    \`\`\`

    <CalloutContainer type="info">
      <CalloutDescription>
        This feature is only available for Message channels and User channels.
      </CalloutDescription>
    </CalloutContainer>

    ### Private deployment configuration [#private-deployment-configuration]

    Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version \`2.2.0\`, Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems.

    Signaling provides \`MESSAGE\` and \`STREAM\` services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:

    \`\`\`js
    const appId = "your_appId";
    const userId = "your_userId";
    const rtmConfig = {
        privateConfig: {
            serviceType: ["MESSAGE", "STREAM"], // Service type for private deployment
            accessPointHosts: ["private.mynet.com"], // Private deployment server list, only domain name is supported
            domainMode: 2,
        }
    };
    const rtm = new RTM(appId, userId, rtmConfig);
    \`\`\`

    <CalloutContainer type="warning">
      <CalloutTitle>
        Note
      </CalloutTitle>

      <CalloutDescription>
        To upgrade the privately deployed Signaling Web SDK to v2.2.4 or later, set \`domainMode\` to \`2\` for compatibility. If you omit this parameter or use the default value \`1\`, the SDK may fail to connect to the Signaling server.
      </CalloutDescription>
    </CalloutContainer>

    <CalloutContainer type="info">
      <CalloutDescription>
        To deploy a private environment, you need to set up the backend service. For assistance, please contact [technical support](mailto\\:support@agora.io).
      </CalloutDescription>
    </CalloutContainer>

    ### Log configuration [#log-configuration]

    In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information level by configuring \`logLevel\` when initializing the Signaling client instance. You can view the log information in the browser console.

    \`\`\`javascript
    const { RTM } = AgoraRTM;
    const appId = "your_appId";
    const userId = "your_userId";
    const rtmConfig = { logLevel : "debug" };
    const rtm = new RTM(appId, userId, rtmConfig);
    \`\`\`

    Choose the log level from the following:

    | Enumeration Value | Description                                       |
    | ----------------- | ------------------------------------------------- |
    | \`debug\`           | Output all logs.                                  |
    | \`info\`            | Output logs of level \`error\`, \`warn\`, and \`info\`. |
    | \`warn\`            | Output logs of level \`error\`, and \`warn\`.         |
    | \`error\`           | Output logs of level \`error\`.                     |
    | \`none\`            | No log output.                                    |

    <CalloutContainer type="info">
      <CalloutDescription>
        When your app is released to production, set the log level to \`info\`.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    For firewall configuration, see [firewall requirements](../../reference/firewall)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements.

    ## Understand the tech [#understand-the-tech-1]

    When initializing a Signaling client instance, configure any or all of the following features:

    * **Geographical area access**
      When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.

    * **Enable proxy connection**
      You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.

    * **Private deployment**
      Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.

    * **Logging**
      Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.

    * **Data encryption**
      Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see [Data encryption](../secure-your-app-and-data/data-encryption).

    ## Prerequisites [#prerequisites-1]

    Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the [SDK quickstart](../../index) page.

    ## Configure the client instance [#configure-the-client-instance-1]

    This section explains how to set up and customize various features when you initialize a Signaling client instance.

    ### Geographical area configuration [#geographical-area-configuration-1]

    To specify a geographical area for Agora SDRTN® connections, refer to the following code:

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
        RtmConfig rtmConfig = new RtmConfig.Builder("appid", "userId")
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

    ### Proxy configuration [#proxy-configuration-1]

    In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization.

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
        RtmProxyConfig proxyConfig = new RtmProxyConfig();
        proxyConfig.setProxyType(RtmProxyType.HTTP);
        proxyConfig.setServer("your_proxy_server_ip");
        proxyConfig.setPort(8080);
        proxyConfig.setAccount("your_proxy_account");
        proxyConfig.setPassword("your_proxy_password");

        RtmConfig rtmConfig = new RtmConfig.Builder("appid", "userId")
            .proxyConfig(proxyConfig)
            .eventListener(eventListener)
            .build();
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Kotlin">
        \`\`\`kotlin
        val proxyConfig = RtmProxyConfig().apply {
            setProxyType(RtmProxyType.HTTP)
            server = "your_proxy_server_ip"
            port = 8080
            account = "your_proxy_account"
            password = "your_proxy_password"
        }

        val rtmConfig = RtmConfig.Builder("appid", "userId")
            .proxyConfig(proxyConfig)
            .eventListener(eventListener)
            .build()
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client.
      </CalloutDescription>
    </CalloutContainer>

    ### Private deployment configuration [#private-deployment-configuration-1]

    Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version \`2.2.0\`, Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems.

    Signaling provides \`MESSAGE\` and \`STREAM\` services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:

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
        ArrayList<String> hosts = new ArrayList<>();
        hosts.add("x.x.x.x"); // your access point hosts list.
        RtmPrivateConfig privateConfig = new RtmPrivateConfig();
        privateConfig.setServiceType(EnumSet.of(RtmServiceType.MESSAGE, RtmServiceType.STREAM));
        privateConfig.setAccessPointHosts(hosts);

        RtmConfig rtmConfig = new RtmConfig.Builder("appid", "userId")
            .privateConfig(privateConfig)
            .build();
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Kotlin">
        \`\`\`kotlin
        val hosts = arrayListOf("x.x.x.x") // your access point hosts list.
        val privateConfig = RtmPrivateConfig().apply {
            setServiceType(EnumSet.of(RtmServiceType.MESSAGE, RtmServiceType.STREAM))
            accessPointHosts = hosts
        }

        val rtmConfig = RtmConfig.Builder("appid", "userId")
            .privateConfig(privateConfig)
            .build()
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    <CalloutContainer type="info">
      <CalloutDescription>
        To deploy a private environment, you need to set up the backend service. For assistance, please contact [technical support](mailto\\:support@agora.io).
      </CalloutDescription>
    </CalloutContainer>

    ### Connection protocol [#connection-protocol]

    To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each service (\`MESSAGE\` service and \`STREAM\` service) when connecting to the edge server. By default, these links use the TCP and UDP protocols, respectively. This design ensures that network issues on one link do not affect the overall transmission. Compared to other WebSocket-based message transmission solutions, RTM's redundant link design maximizes transmission stability and message delivery rate.

    In some cases, users may find that their network does not support UDP port transmission, either temporarily or permanently. To ensure the dual-link design operates effectively, the SDK allows users to configure both links to use the TCP protocol. This can be done by setting the \`protocolType\` field in the \`RtmConfig\`. Below is a code example that configures both links to use the TCP protocol:

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
        RtmConfig rtmConfig = new RtmConfig.Builder("appid", "userId")
            .protocolType(RtmProtocolType.TCP_ONLY)
            .build();
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Kotlin">
        \`\`\`kotlin
        val rtmConfig = RtmConfig.Builder("appid", "userId")
            .protocolType(RtmProtocolType.TCP_ONLY)
            .build()
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    <CalloutContainer type="info">
      <CalloutTitle>
        Info
      </CalloutTitle>

      <CalloutDescription>
        The SDK does not support configuring both links to use the UDP protocol simultaneously.
      </CalloutDescription>
    </CalloutContainer>

    ### Log configuration [#log-configuration-1]

    In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information level by configuring \`RtmLogLevel\` when initializing the Signaling client instance.

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
        RtmLogConfig logConfig = new RtmLogConfig();
        // Set log file path
        logConfig.setFilePath("./logfile/");
        // Set log file size
        logConfig.setFileSize(512);
        // Set log report level
        logConfig.setLevel(RtmLogLevel.INFO);

        // Replace your_appId with your App ID and your_userId with your User ID
        RtmConfig rtmConfig = new RtmConfig.Builder("your_appId", "your_userId")
            .logConfig(logConfig) // Set log config
            .build();

        // Initialize the client instance
        try {
            mRtmClient = RtmClient.create(rtmConfig);
        } catch(Exception e) {
            log(INFO, "create rtm client failed with exception: " + e.toString());
        }
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Kotlin">
        \`\`\`kotlin
        val logConfig = RtmLogConfig().apply {
            filePath = "./logfile/" // Set log file path
            setFileSize(512) // Set log file size
            setLevel(RtmLogLevel.INFO) // Set log report level
        }

        // Replace your_appId with your App ID and your_userId with your User ID
        val rtmConfig = RtmConfig.Builder("your_appId", "your_userId")
            .logConfig(logConfig) // Set log config
            .build()

        // Initialize the client instance
        try {
            mRtmClient = RtmClient.create(rtmConfig)
        } catch (e: Exception) {
            log(INFO, "create rtm client failed with exception: " + e.toString())
        }
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    Choose the log level from the following:

    | Enumeration value | Description                                                                                                                 |
    | ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
    | \`NONE\`            | \`0x0000\`: Do not output any logs.                                                                                           |
    | \`INFO\`            | \`0x0001\`: Output logs of levels \`FATAL\`, \`ERROR\`, \`WARN\`, and \`INFO\`. Best practice is to set the log level to this option. |
    | \`WARN\`            | \`0x0002\`: Only output logs of levels \`FATAL\`, \`ERROR\`, and \`WARN\`.                                                          |
    | \`ERROR\`           | \`0x0004\`: Only output logs of levels \`FATAL\` and \`ERROR\`.                                                                   |
    | \`FATAL\`           | \`0x0008\`: Only output logs at the \`FATAL\` level.                                                                            |

    <CalloutContainer type="info">
      <CalloutDescription>
        When your app is released to production, set the log level to \`INFO\`.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-1]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    For firewall configuration, see [firewall requirements](../../reference/firewall)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements.

    ## Understand the tech [#understand-the-tech-2]

    When initializing a Signaling client instance, configure any or all of the following features:

    * **Geographical area access**
      When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.

    * **Enable proxy connection**
      You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.

    * **Private deployment**
      Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.

    * **Logging**
      Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.

    * **Data encryption**
      Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see [Data encryption](../secure-your-app-and-data/data-encryption).

    ## Prerequisites [#prerequisites-2]

    Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the [SDK quickstart](../../index) page.

    ## Configure the client instance [#configure-the-client-instance-2]

    This section explains how to set up and customize various features when you initialize a Signaling client instance.

    ### Geographical area configuration [#geographical-area-configuration-2]

    To specify a geographical area for Agora SDRTN® connections, refer to the following code:

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
        \`\`\`swift  tabGroup="rtm-client-language"
        let config = AgoraRtmClientConfig(appId: "yourAppId", userId: "yourUserId")
        config.areaCode = [.CN, .NA]
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Objective-C">
        \`\`\`objc  tabGroup="rtm-client-language"
        AgoraRtmClientConfig *rtm_cfg = [[AgoraRtmClientConfig alloc] initWithAppId:@"your_appid" userId:@"your_userid"];
        rtm_cfg.areaCode = AgoraRtmAreaCodeNA;
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ### Proxy configuration [#proxy-configuration-2]

    In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization.

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
        \`\`\`swift  tabGroup="rtm-client-language"
        let rtmConfig = AgoraRtmClientConfig(appId: "your_appid", userId: "your_userid")

        let proxyConfig = AgoraRtmProxyConfig()
        proxyConfig.proxyType = .http
        proxyConfig.server = "your_proxy_server_ip"
        proxyConfig.port = 8080
        proxyConfig.account = "your_proxy_account"
        proxyConfig.password = "your_proxy_password"

        rtmConfig.proxyConfig = proxyConfig
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Objective-C">
        \`\`\`objc  tabGroup="rtm-client-language"
        AgoraRtmClientConfig* rtm_config = [[AgoraRtmClientConfig alloc] initWithAppId:@"your_appid" userId:@"your_userid"];

        AgoraRtmProxyConfig* proxy_config = [[AgoraRtmProxyConfig alloc] init];
        proxy_config.proxyType = AgoraRtmProxyTypeHttp;
        proxy_config.server = @"your_proxy_server_ip";
        proxy_config.port = 8080;
        proxy_config.account = @"your_proxy_account";
        proxy_config.password = @"your_proxy_password";

        rtm_config.proxyConfig = proxy_config;
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client.
      </CalloutDescription>
    </CalloutContainer>

    ### Private deployment configuration [#private-deployment-configuration-2]

    Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version \`2.2.0\`, Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems.

    Signaling provides \`MESSAGE\` and \`STREAM\` services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:

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
        \`\`\`swift  tabGroup="rtm-client-language"
        let rtmConfig = AgoraRtmClientConfig(appId: "your_appid", userId: "your_userid")

        let privateConfig = AgoraRtmPrivateConfig()
        privateConfig.accessPointHosts = ["your_private_server"]
        privateConfig.serviceType = [.stream, .message]

        rtmConfig.privateConfig = privateConfig
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Objective-C">
        \`\`\`objc  tabGroup="rtm-client-language"
        AgoraRtmClientConfig* rtm_config = [[AgoraRtmClientConfig alloc] initWithAppId:@"your_appid" userId:@"your_userid"];

        AgoraRtmPrivateConfig* private_config = [[AgoraRtmPrivateConfig alloc] init];
        private_config.accessPointHosts = @[@"your_private_server"];
        private_config.serviceType = AgoraRtmServiceTypeStream | AgoraRtmServiceTypeMessage;
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    <CalloutContainer type="info">
      <CalloutTitle>
        Info
      </CalloutTitle>

      <CalloutDescription>
        To deploy a private environment, you need to set up the backend service. For assistance, please contact [technical support](mailto\\:support@agora.io).
      </CalloutDescription>
    </CalloutContainer>

    ### Connection protocol [#connection-protocol-1]

    To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each channel (\`MESSAGE\` service and \`STREAM\` service) when connecting to the edge server. By default, these links use the TCP and UDP protocols respectively. This design ensures that network issues in one link do not affect transmission performance. Compared to other WebSocket-based message transmission solutions, RTM's redundant link design maximizes transmission stability and message arrival rates.

    In some cases, users may find that their network does not support UDP port transmission, either temporarily or permanently. To ensure the dual-link design functions effectively, the SDK allows users to configure both links to use the TCP protocol by setting the \`protocolType\` field in the \`AgoraRtmClientConfig\`. Here is an example of configuring both links to use the TCP protocol:

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
        \`\`\`swift  tabGroup="rtm-client-language"
        let rtmConfig = AgoraRtmClientConfig(appId: "your_appid", userId: "your_userid")
        rtmConfig.protocolType = .tcpOnly
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Objective-C">
        \`\`\`objc  tabGroup="rtm-client-language"
        AgoraRtmClientConfig* rtm_config = [[AgoraRtmClientConfig alloc] initWithAppId:@"your_appid" userId:@"your_userid"];
        rtm_config.protocolType = AgoraRtmProtocolTypeTcpOnly;
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    <CalloutContainer type="info">
      <CalloutTitle>
        Info
      </CalloutTitle>

      <CalloutDescription>
        The SDK does not support configuring both links to use the UDP protocol simultaneously.
      </CalloutDescription>
    </CalloutContainer>

    ### Log configuration [#log-configuration-2]

    In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable SDK log output and configure the log level and file size when initializing the Signaling client instance.

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
        \`\`\`swift  tabGroup="rtm-client-language"
        do {
            let logConfig = AgoraRtmLogConfig()
            logConfig.level = .error
            logConfig.filePath = "your_path"
            logConfig.fileSizeInKB = 512

            let rtmConfig = AgoraRtmClientConfig(appId: "your_appid", userId: "your_userid")
            rtmConfig.logConfig = logConfig
            // Initializing the RTM client
            let rtmClient = try AgoraRtmClientKit(rtmConfig, delegate: nil)
            if rtmClient != nil {
                print("RTM Client initialized successfully!")
            }
        } catch let error {
            print("Failed to initialize RTM client. Error: \\\\(error)")
        }
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Objective-C">
        \`\`\`objc  tabGroup="rtm-client-language"
        AgoraRtmClientConfig* rtm_cfg = [[AgoraRtmClientConfig alloc] initWithAppId:@"your_appid" userId:@"your_userid"];

        // set log config
        AgoraRtmLogConfig* log_cfg = [[AgoraRtmLogConfig alloc] init];
        log_cfg.level= AgoraRtmLogLevelError;
        log_cfg.filePath= @"your_path";
        log_cfg.fileSizeInKB = 512;

        rtm_cfg.logConfig = log_cfg;

        NSError* initError = nil;
        AgoraRtmClientKit* rtm = [[AgoraRtmClientKit alloc] initWithConfig:rtm_cfg delegate:handler error:&initError];
        if (rtm != nil) {
            NSLog(@"init rtm success!!");
        } else {
            NSLog(@"init rtm failed!!");
        }
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    Choose the log level from the following:

    | Swift   | Objective-C             | Description                                                                                                                 |
    | ------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
    | \`none\`  | \`AgoraRtmLogLevelNone\`  | \`0x0000\`: Do not output any logs.                                                                                           |
    | \`info\`  | \`AgoraRtmLogLevelInfo\`  | \`0x0001\`: Output logs of levels \`fatal\`, \`error\`, \`warn\`, and \`info\`. Best practice is to set the log level to this option. |
    | \`warn\`  | \`AgoraRtmLogLevelWarn\`  | \`0x0002\`: Only output logs of levels \`fatal\`, \`error\`, and \`warn\`.                                                          |
    | \`error\` | \`AgoraRtmLogLevelError\` | \`0x0004\`: Only output logs of levels \`fatal\` and \`error\`.                                                                   |
    | \`fatal\` | \`AgoraRtmLogLevelFatal\` | \`0x0008\`: Only output logs at the \`fatal\` level.                                                                            |

    <CalloutContainer type="info">
      <CalloutDescription>
        When you release your app to production, set the log level to \`info\` in Swift or \`AgoraRtmLogLevelInfo\` in Objective-C.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-2]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    For firewall configuration, see [firewall requirements](../../reference/firewall)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements.

    ## Understand the tech [#understand-the-tech-3]

    When initializing a Signaling client instance, configure any or all of the following features:

    * **Geographical area access**
      When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.

    * **Enable proxy connection**
      You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.

    * **Private deployment**
      Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.

    * **Logging**
      Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.

    * **Data encryption**
      Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see [Data encryption](../secure-your-app-and-data/data-encryption).

    ## Prerequisites [#prerequisites-3]

    Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the [SDK quickstart](../../index) page.

    ## Configure the client instance [#configure-the-client-instance-3]

    This section explains how to set up and customize various features when you initialize a Signaling client instance.

    ### Geographical area configuration [#geographical-area-configuration-3]

    To specify a geographical area for Agora SDRTN® connections, refer to the following code:

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
        \`\`\`swift  tabGroup="rtm-client-language"
        let config = AgoraRtmClientConfig(appId: "yourAppId", userId: "yourUserId")
        config.areaCode = [.CN, .NA]
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Objective-C">
        \`\`\`objc  tabGroup="rtm-client-language"
        AgoraRtmClientConfig *rtm_cfg = [[AgoraRtmClientConfig alloc] initWithAppId:@"your_appid" userId:@"your_userid"];
        rtm_cfg.areaCode = AgoraRtmAreaCodeNA;
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ### Proxy configuration [#proxy-configuration-3]

    In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization.

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
        \`\`\`swift  tabGroup="rtm-client-language"
        let rtmConfig = AgoraRtmClientConfig(appId: "your_appid", userId: "your_userid")

        let proxyConfig = AgoraRtmProxyConfig()
        proxyConfig.proxyType = .http
        proxyConfig.server = "your_proxy_server_ip"
        proxyConfig.port = 8080
        proxyConfig.account = "your_proxy_account"
        proxyConfig.password = "your_proxy_password"

        rtmConfig.proxyConfig = proxyConfig
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Objective-C">
        \`\`\`objc  tabGroup="rtm-client-language"
        AgoraRtmClientConfig* rtm_config = [[AgoraRtmClientConfig alloc] initWithAppId:@"your_appid" userId:@"your_userid"];

        AgoraRtmProxyConfig* proxy_config = [[AgoraRtmProxyConfig alloc] init];
        proxy_config.proxyType = AgoraRtmProxyTypeHttp;
        proxy_config.server = @"your_proxy_server_ip";
        proxy_config.port = 8080;
        proxy_config.account = @"your_proxy_account";
        proxy_config.password = @"your_proxy_password";

        rtm_config.proxyConfig = proxy_config;
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client.
      </CalloutDescription>
    </CalloutContainer>

    ### Private deployment configuration [#private-deployment-configuration-3]

    Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version \`2.2.0\`, Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems.

    Signaling provides \`MESSAGE\` and \`STREAM\` services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:

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
        \`\`\`swift  tabGroup="rtm-client-language"
        let rtmConfig = AgoraRtmClientConfig(appId: "your_appid", userId: "your_userid")

        let privateConfig = AgoraRtmPrivateConfig()
        privateConfig.accessPointHosts = ["your_private_server"]
        privateConfig.serviceType = [.stream, .message]

        rtmConfig.privateConfig = privateConfig
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Objective-C">
        \`\`\`objc  tabGroup="rtm-client-language"
        AgoraRtmClientConfig* rtm_config = [[AgoraRtmClientConfig alloc] initWithAppId:@"your_appid" userId:@"your_userid"];

        AgoraRtmPrivateConfig* private_config = [[AgoraRtmPrivateConfig alloc] init];
        private_config.accessPointHosts = @[@"your_private_server"];
        private_config.serviceType = AgoraRtmServiceTypeStream | AgoraRtmServiceTypeMessage;
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    <CalloutContainer type="info">
      <CalloutTitle>
        Info
      </CalloutTitle>

      <CalloutDescription>
        To deploy a private environment, you need to set up the backend service. For assistance, please contact [technical support](mailto\\:support@agora.io).
      </CalloutDescription>
    </CalloutContainer>

    ### Connection protocol [#connection-protocol-2]

    To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each channel (\`MESSAGE\` service and \`STREAM\` service) when connecting to the edge server. By default, these links use the TCP and UDP protocols respectively. This design ensures that network issues in one link do not affect transmission performance. Compared to other WebSocket-based message transmission solutions, RTM's redundant link design maximizes transmission stability and message arrival rates.

    In some cases, users may find that their network does not support UDP port transmission, either temporarily or permanently. To ensure the dual-link design functions effectively, the SDK allows users to configure both links to use the TCP protocol by setting the \`protocolType\` field in the \`AgoraRtmClientConfig\`. Here is an example of configuring both links to use the TCP protocol:

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
        \`\`\`swift  tabGroup="rtm-client-language"
        let rtmConfig = AgoraRtmClientConfig(appId: "your_appid", userId: "your_userid")
        rtmConfig.protocolType = .tcpOnly
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Objective-C">
        \`\`\`objc  tabGroup="rtm-client-language"
        AgoraRtmClientConfig* rtm_config = [[AgoraRtmClientConfig alloc] initWithAppId:@"your_appid" userId:@"your_userid"];
        rtm_config.protocolType = AgoraRtmProtocolTypeTcpOnly;
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    <CalloutContainer type="info">
      <CalloutTitle>
        Info
      </CalloutTitle>

      <CalloutDescription>
        The SDK does not support configuring both links to use the UDP protocol simultaneously.
      </CalloutDescription>
    </CalloutContainer>

    ### Log configuration [#log-configuration-3]

    In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable SDK log output and configure the log level and file size when initializing the Signaling client instance.

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
        \`\`\`swift  tabGroup="rtm-client-language"
        do {
            let logConfig = AgoraRtmLogConfig()
            logConfig.level = .error
            logConfig.filePath = "your_path"
            logConfig.fileSizeInKB = 512

            let rtmConfig = AgoraRtmClientConfig(appId: "your_appid", userId: "your_userid")
            rtmConfig.logConfig = logConfig
            // Initializing the RTM client
            let rtmClient = try AgoraRtmClientKit(rtmConfig, delegate: nil)
            if rtmClient != nil {
                print("RTM Client initialized successfully!")
            }
        } catch let error {
            print("Failed to initialize RTM client. Error: \\\\(error)")
        }
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Objective-C">
        \`\`\`objc  tabGroup="rtm-client-language"
        AgoraRtmClientConfig* rtm_cfg = [[AgoraRtmClientConfig alloc] initWithAppId:@"your_appid" userId:@"your_userid"];

        // set log config
        AgoraRtmLogConfig* log_cfg = [[AgoraRtmLogConfig alloc] init];
        log_cfg.level= AgoraRtmLogLevelError;
        log_cfg.filePath= @"your_path";
        log_cfg.fileSizeInKB = 512;

        rtm_cfg.logConfig = log_cfg;

        NSError* initError = nil;
        AgoraRtmClientKit* rtm = [[AgoraRtmClientKit alloc] initWithConfig:rtm_cfg delegate:handler error:&initError];
        if (rtm != nil) {
            NSLog(@"init rtm success!!");
        } else {
            NSLog(@"init rtm failed!!");
        }
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    Choose the log level from the following:

    | Swift   | Objective-C             | Description                                                                                                                 |
    | ------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
    | \`none\`  | \`AgoraRtmLogLevelNone\`  | \`0x0000\`: Do not output any logs.                                                                                           |
    | \`info\`  | \`AgoraRtmLogLevelInfo\`  | \`0x0001\`: Output logs of levels \`fatal\`, \`error\`, \`warn\`, and \`info\`. Best practice is to set the log level to this option. |
    | \`warn\`  | \`AgoraRtmLogLevelWarn\`  | \`0x0002\`: Only output logs of levels \`fatal\`, \`error\`, and \`warn\`.                                                          |
    | \`error\` | \`AgoraRtmLogLevelError\` | \`0x0004\`: Only output logs of levels \`fatal\` and \`error\`.                                                                   |
    | \`fatal\` | \`AgoraRtmLogLevelFatal\` | \`0x0008\`: Only output logs at the \`fatal\` level.                                                                            |

    <CalloutContainer type="info">
      <CalloutDescription>
        When you release your app to production, set the log level to \`info\` in Swift or \`AgoraRtmLogLevelInfo\` in Objective-C.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-3]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    For firewall configuration, see [firewall requirements](../../reference/firewall)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements.

    ## Understand the tech [#understand-the-tech-4]

    When initializing a Signaling client instance, configure any or all of the following features:

    * **Geographical area access**
      When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.

    * **Enable proxy connection**
      You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.

    * **Private deployment**
      Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.

    * **Logging**
      Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.

    * **Data encryption**
      Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see [Data encryption](../secure-your-app-and-data/data-encryption).

    ## Prerequisites [#prerequisites-4]

    Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the [SDK quickstart](../../index) page.

    ## Configure the client instance [#configure-the-client-instance-4]

    This section explains how to set up and customize various features when you initialize a Signaling client instance.

    ### Geographical area configuration [#geographical-area-configuration-4]

    To specify geographical areas for Agora SDRTN® connections, refer to the following code:

    \`\`\`dart
    // Create a Set containing specific RtmAreaCode values
    Set<RtmAreaCode> areaCodes = {RtmAreaCode.na, RtmAreaCode.eu};

    // Use the areaCodes in RtmConfig
    RtmConfig config = RtmConfig(
      areaCode: areaCodes
    );
    \`\`\`

    ### Proxy configuration [#proxy-configuration-4]

    In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization.

    \`\`\`dart
    const proxyConfig = RtmProxyConfig(
        proxyType: RtmProxyType.http,
        server: "your_proxy_server_ip",
        port: 8080,
        account: "your_proxy_account",
        password: "your_proxy_password");

    const rtmConfig = RtmConfig( proxyConfig:proxyConfig );
    \`\`\`

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client.
      </CalloutDescription>
    </CalloutContainer>

    ### Private deployment configuration [#private-deployment-configuration-4]

    Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version \`2.2.0\`, Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems.

    Signaling provides \`MESSAGE\` and \`STREAM\` services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:

    \`\`\`dart
    final userId = 'your_userId';
    final appId = 'your_appId';
    late RtmClient rtmClient;

    var privateConfig = RtmPrivateConfig(
        serviceType: { RtmServiceType.message, RtmServiceType.stream },
        accessPointHosts: ['private.hostname.com']);

    var rtmConfig = RtmConfig( privateConfig:privateConfig );

    try {
        final (status,client) = await RTM(appId, userId, config:rtmConfig);
        if (status.error == true) {
            print(status);
        } else {
            rtmClient = client;
            print('Initialize success!');
        }
    } catch (e) {
        print('Failed to create RTM client: $e');
    }
    \`\`\`

    <CalloutContainer type="info">
      <CalloutDescription>
        To deploy a private environment, you need to set up the backend service. For assistance, please contact [technical support](mailto\\:support@agora.io).
      </CalloutDescription>
    </CalloutContainer>

    ### Connection protocol [#connection-protocol-3]

    To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each service (\`MESSAGE\` service and \`STREAM\` service) when connecting to the edge server. By default, these links use the TCP and UDP protocols, respectively. This design ensures that network issues on one link do not affect the overall transmission. Compared to other WebSocket-based message transmission solutions, RTM's redundant link design maximizes transmission stability and message delivery rate.

    In some cases, users may find that their network does not support UDP port transmission, either temporarily or permanently. To ensure the dual-link design operates effectively, the SDK allows users to configure both links to use the TCP protocol. This can be done by setting the \`protocolType\` field in the \`RtmConfig\`. Below is a code example that configures both links to use the TCP protocol:

    \`\`\`dart
    late RtmClient rtmClient;
    const protocolType = RtmProtocolType.tcpOnly;
    const rtmConfig = RtmConfig(protocolType:protocolType);
    try {
        final (status,client) = await RTM("myAppId", "Tony", config:rtmConfig);
        if (status.error == true) {
            print(status);
        } else {
            rtmClient = client;
            print('Initialization success!');
        }
    } catch (e) {
        print('Failed to create RTM client: $e');
    }
    \`\`\`

    <CalloutContainer type="info">
      <CalloutTitle>
        Info
      </CalloutTitle>

      <CalloutDescription>
        The SDK does not support configuring both links to use the UDP protocol simultaneously.
      </CalloutDescription>
    </CalloutContainer>

    ### Log configuration [#log-configuration-4]

    In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information level by configuring \`level\` when initializing the Signaling client instance.

    \`\`\`dart
    const logConfig = RtmLogConfig(
        filePath: './rtm_logfile/',
        fileSizeInKB: 1024,
        level: RtmLogLevel.warn );

    const rtmConfig = RtmConfig( logConfig:logConfig );
    \`\`\`

    Choose the log level from the following:

    | Enumeration value | Description                                                                                                                 |
    | ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
    | \`none\`            | \`0x0000\`: Do not output any logs.                                                                                           |
    | \`info\`            | \`0x0001\`: Output logs of levels \`fatal\`, \`error\`, \`warn\`, and \`info\`. Best practice is to set the log level to this option. |
    | \`warn\`            | \`0x0002\`: Only output logs of levels \`fatal\`, \`error\`, and \`warn\`.                                                          |
    | \`error\`           | \`0x0004\`: Only output logs of levels \`fatal\` and \`error\`.                                                                   |
    | \`fatal\`           | \`0x0008\`: Only output logs at the \`fatal\` level.                                                                            |

    <CalloutContainer type="info">
      <CalloutDescription>
        When your app is released to production, set the log level to \`info\`.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-4]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    For firewall configuration, see [firewall requirements](../../reference/firewall)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements.

    ## Understand the tech [#understand-the-tech-5]

    When initializing a Signaling client instance, configure any or all of the following features:

    * **Geographical area access**
      When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.

    * **Enable proxy connection**
      You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.

    * **Private deployment**
      Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.

    * **Logging**
      Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.

    * **Data encryption**
      Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see [Data encryption](../secure-your-app-and-data/data-encryption).

    ## Prerequisites [#prerequisites-5]

    Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the [SDK quickstart](../../index) page.

    ## Configure the client instance [#configure-the-client-instance-5]

    This section explains how to set up and customize various features when you initialize a Signaling client instance.

    ### Geographical area configuration [#geographical-area-configuration-5]

    To specify a geographical area for Agora SDRTN® connections, refer to the following code:

    \`\`\`tsx

    const client = createAgoraRtmClient(
     new RtmConfig({
       userId: 'your_userId',
       appId: 'your_appId',
       useStringUserId: true,
       areaCode: RtmAreaCode.as | RtmAreaCode.cn, // Multiple areas using bitwise OR
       // Or use a single area:
       // areaCode: RtmAreaCode.as,
     })
    );
    \`\`\`

    Available area codes:

    | Area Code          | Description                   |
    | ------------------ | ----------------------------- |
    | \`RtmAreaCode.na\`   | North America                 |
    | \`RtmAreaCode.eu\`   | Europe                        |
    | \`RtmAreaCode.as\`   | Asia excluding Mainland China |
    | \`RtmAreaCode.jp\`   | Japan                         |
    | \`RtmAreaCode.in\`   | India                         |
    | \`RtmAreaCode.cn\`   | Mainland China                |
    | \`RtmAreaCode.glob\` | Global (default)              |

    ### Proxy configuration [#proxy-configuration-5]

    In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization.

    \`\`\`tsx

    const client = createAgoraRtmClient(
     new RtmConfig({
       userId: 'your_userId',
       appId: 'your_appId',
       useStringUserId: true,
       proxyConfig: {
         proxyType: RtmProxyType.http,
         server: 'your_proxy_server_ip',
         port: 8080,
         account: 'your_proxy_account',
         password: 'your_proxy_password',
       },
     })
    );
    \`\`\`

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client.
      </CalloutDescription>
    </CalloutContainer>

    ### Connection protocol [#connection-protocol-4]

    To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each service (\`MESSAGE\` service and \`STREAM\` service) when connecting to the edge server. By default, these links use the TCP and UDP protocols, respectively. This design ensures that network issues on one link do not affect the overall transmission.

    In some cases, users may find that their network does not support UDP port transmission. To ensure the dual-link design operates effectively, the SDK allows users to configure both links to use the TCP protocol by setting the \`protocolType\` field in the \`RtmConfig\`:

    \`\`\`tsx

    const client = createAgoraRtmClient(
     new RtmConfig({
       userId: 'your_userId',
       appId: 'your_appId',
       useStringUserId: true,
       protocolType: RtmProtocolType.tcpOnly, // Use TCP only for both links
     })
    );
    \`\`\`

    Available protocol types:

    | Protocol Type             | Description                    |
    | ------------------------- | ------------------------------ |
    | \`RtmProtocolType.tcpUdp\`  | Use both TCP and UDP (default) |
    | \`RtmProtocolType.tcpOnly\` | Use TCP only for both links    |

    <CalloutContainer type="info">
      <CalloutTitle>
        Info
      </CalloutTitle>

      <CalloutDescription>
        The SDK does not support configuring both links to use the UDP protocol simultaneously.
      </CalloutDescription>
    </CalloutContainer>

    ### Presence timeout configuration [#presence-timeout-configuration]

    Configure the presence timeout to control how long the server waits before considering a client offline:

    \`\`\`tsx

    const client = createAgoraRtmClient(
     new RtmConfig({
       userId: 'your_userId',
       appId: 'your_appId',
       useStringUserId: true,
       presenceTimeout: 60, // Timeout in seconds (5-300 range)
     })
    );
    \`\`\`

    ### User ID type configuration [#user-id-type-configuration]

    Configure whether to use string or numeric user IDs:

    \`\`\`tsx

    // Using string user IDs (recommended)
    const clientString = createAgoraRtmClient(
     new RtmConfig({
       userId: 'user123',
       appId: 'your_appId',
       useStringUserId: true, // Use string user IDs
     })
    );

    // Using numeric user IDs
    const clientNumeric = createAgoraRtmClient(
     new RtmConfig({
       userId: '1234567', // Must be numeric string when useStringUserId is false
       appId: 'your_appId',
       useStringUserId: false, // Use numeric user IDs
     })
    );
    \`\`\`

    <CalloutContainer type="info">
      <CalloutDescription>
        When using both Agora RTC and RTM, ensure the \`userId\` type is consistent across both SDKs.
      </CalloutDescription>
    </CalloutContainer>

    ### Log configuration [#log-configuration-5]

    In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information level by configuring \`RtmLogConfig\` when initializing the Signaling client instance:

    \`\`\`tsx

    const logConfig = {
     filePath: './logfile/', // Log file path
     fileSizeInKB: 512, // Log file size in KB (128-1024 range)
     level: RtmLogLevel.info, // Log report level
    };

    const client = createAgoraRtmClient(
     new RtmConfig({
       userId: 'your_userId',
       appId: 'your_appId',
       useStringUserId: true,
       logConfig: logConfig, // Set log configuration
     })
    );
    \`\`\`

    Choose the log level from the following:

    | Enumeration value   | Description                                                                                                                 |
    | ------------------- | --------------------------------------------------------------------------------------------------------------------------- |
    | \`RtmLogLevel.none\`  | \`0x0000\`: Do not output any logs.                                                                                           |
    | \`RtmLogLevel.info\`  | \`0x0001\`: Output logs of levels \`FATAL\`, \`ERROR\`, \`WARN\`, and \`INFO\`. Best practice is to set the log level to this option. |
    | \`RtmLogLevel.warn\`  | \`0x0002\`: Only output logs of levels \`FATAL\`, \`ERROR\`, and \`WARN\`.                                                          |
    | \`RtmLogLevel.error\` | \`0x0004\`: Only output logs of levels \`FATAL\` and \`ERROR\`.                                                                   |
    | \`RtmLogLevel.fatal\` | \`0x0008\`: Only output logs at the \`FATAL\` level.                                                                            |

    <CalloutContainer type="info">
      <CalloutTitle>
        Info
      </CalloutTitle>

      <CalloutDescription>
        When your app is released to production, set the log level to \`RtmLogLevel.info\`.
      </CalloutDescription>
    </CalloutContainer>

    ### Encryption configuration [#encryption-configuration]

    For enhanced security, you can enable client-side encryption:

    \`\`\`tsx

    const encryptionConfig = {
     encryptionMode: RtmEncryptionMode.aes128Gcm, // or RtmEncryptionMode.aes256Gcm
     encryptionKey: 'your_encryption_key', // 32-character string
     encryptionSalt: new Uint8Array(32), // 32-byte salt
    };

    const client = createAgoraRtmClient(
     new RtmConfig({
       userId: 'your_userId',
       appId: 'your_appId',
       useStringUserId: true,
       encryptionConfig: encryptionConfig, // Set encryption configuration
     })
    );
    \`\`\`

    Available encryption modes:

    | Encryption Mode               | Description                |
    | ----------------------------- | -------------------------- |
    | \`RtmEncryptionMode.none\`      | No encryption (default)    |
    | \`RtmEncryptionMode.aes128Gcm\` | AES 128-bit GCM encryption |
    | \`RtmEncryptionMode.aes256Gcm\` | AES 256-bit GCM encryption |

    ### Complete configuration example [#complete-configuration-example]

    Here's a comprehensive example showing all configuration options:

    \`\`\`tsx

     createAgoraRtmClient,
     RtmConfig,
     RtmAreaCode,
     RtmProtocolType,
     RtmLogLevel,
     RtmEncryptionMode
    } from 'agora-react-native-rtm';

    const logConfig = {
     filePath: './logs/',
     fileSizeInKB: 1024,
     level: RtmLogLevel.info,
    };

    const encryptionConfig = {
     encryptionMode: RtmEncryptionMode.aes256Gcm,
     encryptionKey: 'your_32_character_encryption_key',
     encryptionSalt: new Uint8Array(32),
    };

    const client = createAgoraRtmClient(
     new RtmConfig({
       userId: 'your_userId',
       appId: 'your_appId',
       useStringUserId: true,
       areaCode: RtmAreaCode.as,
       protocolType: RtmProtocolType.tcpUdp,
       presenceTimeout: 300,
       logConfig: logConfig,
       encryptionConfig: encryptionConfig,
     })
    );
    \`\`\`

    ## Reference [#reference-5]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    For firewall configuration, see [firewall requirements](../../reference/firewall)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements.

    ## Understand the tech [#understand-the-tech-6]

    When initializing a Signaling client instance, configure any or all of the following features:

    * **Geographical area access**
      When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.

    * **Enable proxy connection**
      You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.

    * **Private deployment**
      Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.

    * **Logging**
      Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.

    * **Data encryption**
      Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see [Data encryption](../secure-your-app-and-data/data-encryption).

    ## Prerequisites [#prerequisites-6]

    Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the [SDK quickstart](../../index) page.

    ## Configure the client instance [#configure-the-client-instance-6]

    This section explains how to set up and customize various features when you initialize a Signaling client instance.

    ### Geographical area configuration [#geographical-area-configuration-6]

    To specify a geographical area for Agora SDRTN® connections, refer to the following code:

    \`\`\`cpp
    RtmConfig config;
    config.areaCode = RTM_AREA_CODE_NA;

    int errorCode = 0;
    IRtmClient* rtm_client = createAgoraRtmClient(config, errorCode);
    \`\`\`

    ### Proxy configuration [#proxy-configuration-6]

    In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization.

    \`\`\`cpp
    RtmConfig config;
    config.appId = "appid";
    config.userId = "userId";
    config.proxyConfig.proxyType = RTM_PROXY_TYPE_HTTP;
    config.proxyConfig.server = "your_proxy_server_ip";
    config.proxyConfig.port = 8080;
    config.proxyConfig.account = "your_proxy_account";
    config.proxyConfig.password = "your_proxy_password";
    \`\`\`

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client.
      </CalloutDescription>
    </CalloutContainer>

    ### Private deployment configuration [#private-deployment-configuration-5]

    Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version \`2.2.0\`, Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems.

    Signaling provides \`MESSAGE\` and \`STREAM\` services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:

    \`\`\`cpp
    std::vector<const char*> hosts;
    hosts.push_back("xxx");

    RtmConfig config;
    config.appId = "your_appid";
    config.userId = "your_name";
    config.privateConfig.serviceType =
        static_cast<RTM_SERVICE_TYPE>(RTM_SERVICE_TYPE_MESSAGE | RTM_SERVICE_TYPE_STREAM);
    config.privateConfig.accessPointHosts = hosts.data();
    config.privateConfig.accessPointHostsCount = hosts.size();
    \`\`\`

    <CalloutContainer type="info">
      <CalloutTitle>
        Info
      </CalloutTitle>

      <CalloutDescription>
        To deploy a private environment, you need to set up the backend service. For assistance, please contact [technical support](mailto\\:support@agora.io).
      </CalloutDescription>
    </CalloutContainer>

    ### Connection protocol [#connection-protocol-5]

    To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each service (\`MESSAGE\` service and \`STREAM\` service) when connecting to the edge server. By default, these links use the TCP and UDP protocols, respectively. This design ensures that network issues on one link do not affect the overall transmission. Compared to other WebSocket-based message transmission solutions, RTM's redundant link design maximizes transmission stability and message delivery rate.

    In some cases, users may find that their network does not support UDP port transmission, either temporarily or permanently. To ensure the dual-link design operates effectively, the SDK allows users to configure both links to use the TCP protocol. This can be done by setting the \`protocolType\` field in the \`RtmConfig\`. Below is a code example that configures both links to use the TCP protocol:

    \`\`\`cpp
    RtmConfig config;
    config.appId = "appid";
    config.userId = "userId";
    config.protocolType = RTM_PROTOCOL_TYPE_TCP_ONLY;
    \`\`\`

    <CalloutContainer type="info">
      <CalloutTitle>
        Info
      </CalloutTitle>

      <CalloutDescription>
        The SDK does not support configuring both links to use the UDP protocol simultaneously.
      </CalloutDescription>
    </CalloutContainer>

    ### Log configuration [#log-configuration-6]

    In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information level by configuring \`RTM_LOG_LEVEL\` when initializing the Signaling client instance.

    \`\`\`cpp
    RtmConfig config;
    config.appId = "your_appid";
    config.userId = "your_name";
    config.eventHandler = new RtmEventHandler();

    config.logConfig.level = RTM_LOG_LEVEL_INFO;
    config.logConfig.filePath = "your_path";
    config.logConfig.fileSizeInKB = 10 * 1024;

    int errorCode = 0;
    IRtmClient* rtmClient = createAgoraRtmClient(config, errorCode);
    if (!rtmClient || errorCode != 0) {
      // create rtm client failed
    }
    \`\`\`

    Choose the log level from the following:

    | Enumeration value | Description                                                                                                                 |
    | ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
    | \`NONE\`            | \`0x0000\`: Do not output any logs.                                                                                           |
    | \`INFO\`            | \`0x0001\`: Output logs of levels \`FATAL\`, \`ERROR\`, \`WARN\`, and \`INFO\`. Best practice is to set the log level to this option. |
    | \`WARN\`            | \`0x0002\`: Only output logs of levels \`FATAL\`, \`ERROR\`, and \`WARN\`.                                                          |
    | \`ERROR\`           | \`0x0004\`: Only output logs of levels \`FATAL\` and \`ERROR\`.                                                                   |
    | \`FATAL\`           | \`0x0008\`: Only output logs of levels \`FATAL\`.                                                                               |

    <CalloutContainer type="info">
      <CalloutDescription>
        When your app is released to production, set the log level to \`INFO\`.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-6]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    For firewall configuration, see [firewall requirements](../../reference/firewall)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="linux-cpp">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="linux-cpp" />

    Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements.

    ## Understand the tech [#understand-the-tech-7]

    When initializing a Signaling client instance, configure any or all of the following features:

    * **Geographical area access**
      When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.

    * **Enable proxy connection**
      You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.

    * **Private deployment**
      Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.

    * **Logging**
      Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.

    * **Data encryption**
      Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see [Data encryption](../secure-your-app-and-data/data-encryption).

    ## Prerequisites [#prerequisites-7]

    Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the [SDK quickstart](../../index) page.

    ## Configure the client instance [#configure-the-client-instance-7]

    This section explains how to set up and customize various features when you initialize a Signaling client instance.

    ### Geographical area configuration [#geographical-area-configuration-7]

    To specify a geographical area for Agora SDRTN® connections, refer to the following code:

    \`\`\`cpp
    RtmConfig config;
    config.areaCode = RTM_AREA_CODE_NA;

    int errorCode = 0;
    IRtmClient* rtm_client = createAgoraRtmClient(config, errorCode);
    \`\`\`

    ### Proxy configuration [#proxy-configuration-7]

    In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization.

    \`\`\`cpp
    RtmConfig config;
    config.appId = "appid";
    config.userId = "userId";
    config.proxyConfig.proxyType = RTM_PROXY_TYPE_HTTP;
    config.proxyConfig.server = "your_proxy_server_ip";
    config.proxyConfig.port = 8080;
    config.proxyConfig.account = "your_proxy_account";
    config.proxyConfig.password = "your_proxy_password";
    \`\`\`

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client.
      </CalloutDescription>
    </CalloutContainer>

    ### Private deployment configuration [#private-deployment-configuration-6]

    Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version \`2.2.0\`, Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems.

    Signaling provides \`MESSAGE\` and \`STREAM\` services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:

    \`\`\`cpp
    std::vector<const char*> hosts;
    hosts.push_back("xxx");

    RtmConfig config;
    config.appId = "your_appid";
    config.userId = "your_name";
    config.privateConfig.serviceType =
        static_cast<RTM_SERVICE_TYPE>(RTM_SERVICE_TYPE_MESSAGE | RTM_SERVICE_TYPE_STREAM);
    config.privateConfig.accessPointHosts = hosts.data();
    config.privateConfig.accessPointHostsCount = hosts.size();
    \`\`\`

    <CalloutContainer type="info">
      <CalloutTitle>
        Info
      </CalloutTitle>

      <CalloutDescription>
        To deploy a private environment, you need to set up the backend service. For assistance, please contact [technical support](mailto\\:support@agora.io).
      </CalloutDescription>
    </CalloutContainer>

    ### Connection protocol [#connection-protocol-6]

    To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each service (\`MESSAGE\` service and \`STREAM\` service) when connecting to the edge server. By default, these links use the TCP and UDP protocols, respectively. This design ensures that network issues on one link do not affect the overall transmission. Compared to other WebSocket-based message transmission solutions, RTM's redundant link design maximizes transmission stability and message delivery rate.

    In some cases, users may find that their network does not support UDP port transmission, either temporarily or permanently. To ensure the dual-link design operates effectively, the SDK allows users to configure both links to use the TCP protocol. This can be done by setting the \`protocolType\` field in the \`RtmConfig\`. Below is a code example that configures both links to use the TCP protocol:

    \`\`\`cpp
    RtmConfig config;
    config.appId = "appid";
    config.userId = "userId";
    config.protocolType = RTM_PROTOCOL_TYPE_TCP_ONLY;
    \`\`\`

    <CalloutContainer type="info">
      <CalloutTitle>
        Info
      </CalloutTitle>

      <CalloutDescription>
        The SDK does not support configuring both links to use the UDP protocol simultaneously.
      </CalloutDescription>
    </CalloutContainer>

    ### Log configuration [#log-configuration-7]

    In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information level by configuring \`RTM_LOG_LEVEL\` when initializing the Signaling client instance.

    \`\`\`cpp
    RtmConfig config;
    config.appId = "your_appid";
    config.userId = "your_name";
    config.eventHandler = new RtmEventHandler();

    config.logConfig.level = RTM_LOG_LEVEL_INFO;
    config.logConfig.filePath = "your_path";
    config.logConfig.fileSizeInKB = 10 * 1024;

    int errorCode = 0;
    IRtmClient* rtmClient = createAgoraRtmClient(config, errorCode);
    if (!rtmClient || errorCode != 0) {
      // create rtm client failed
    }
    \`\`\`

    Choose the log level from the following:

    | Enumeration value | Description                                                                                                                 |
    | ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
    | \`NONE\`            | \`0x0000\`: Do not output any logs.                                                                                           |
    | \`INFO\`            | \`0x0001\`: Output logs of levels \`FATAL\`, \`ERROR\`, \`WARN\`, and \`INFO\`. Best practice is to set the log level to this option. |
    | \`WARN\`            | \`0x0002\`: Only output logs of levels \`FATAL\`, \`ERROR\`, and \`WARN\`.                                                          |
    | \`ERROR\`           | \`0x0004\`: Only output logs of levels \`FATAL\` and \`ERROR\`.                                                                   |
    | \`FATAL\`           | \`0x0008\`: Only output logs of levels \`FATAL\`.                                                                               |

    <CalloutContainer type="info">
      <CalloutDescription>
        When your app is released to production, set the log level to \`INFO\`.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-7]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    For firewall configuration, see [firewall requirements](../../reference/firewall)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="linux-java">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="linux-java" />

    Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements.

    ## Understand the tech [#understand-the-tech-8]

    When initializing a Signaling client instance, configure any or all of the following features:

    * **Geographical area access**
      When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.

    * **Private deployment**
      Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.

    * **Logging**
      Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.

    * **Data encryption**
      Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see [Data encryption](../secure-your-app-and-data/data-encryption).

    ## Prerequisites [#prerequisites-8]

    Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the [SDK quickstart](../../index) page.

    ## Configure the client instance [#configure-the-client-instance-8]

    This section explains how to set up and customize various features when you initialize a Signaling client instance.

    ### Geographical area configuration [#geographical-area-configuration-8]

    To specify a geographical area for Agora SDRTN® connections, refer to the following code:

    \`\`\`java
    RtmConfig rtmConfig = new RtmConfig.Builder("appid", "userId")
        .areaCode(EnumSet.of(RtmConstants.RtmAreaCode.AS, RtmConstants.RtmAreaCode.CN))
        .eventListener(eventListener)
        .build();
    \`\`\`

    ### Private deployment configuration [#private-deployment-configuration-7]

    Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version \`2.2.0\`, Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems.

    Signaling provides \`MESSAGE\` and \`STREAM\` services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:

    \`\`\`java
    ArrayList<String> hosts = new ArrayList<>();
    hosts.add("x.x.x.x"); // your access point hosts list.
    RtmPrivateConfig privateConfig = new RtmPrivateConfig();
    privateConfig.setServiceType(EnumSet.of(RtmServiceType.MESSAGE, RtmServiceType.STREAM));
    privateConfig.setAccessPointHosts(hosts);

    RtmConfig rtmConfig = new RtmConfig.Builder("appid", "userId")
        .privateConfig(privateConfig)
        .build();
    \`\`\`

    <CalloutContainer type="info">
      <CalloutDescription>
        To deploy a private environment, you need to set up the backend service. For assistance, please contact [technical support](mailto\\:support@agora.io).
      </CalloutDescription>
    </CalloutContainer>

    ### Connection protocol [#connection-protocol-7]

    To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each service (\`MESSAGE\` service and \`STREAM\` service) when connecting to the edge server. By default, these links use the TCP and UDP protocols, respectively. This design ensures that network issues on one link do not affect the overall transmission. Compared to other WebSocket-based message transmission solutions, RTM's redundant link design maximizes transmission stability and message delivery rate.

    In some cases, users may find that their network does not support UDP port transmission, either temporarily or permanently. To ensure the dual-link design operates effectively, the SDK allows users to configure both links to use the TCP protocol. This can be done by setting the \`protocolType\` field in the \`RtmConfig\`. Below is a code example that configures both links to use the TCP protocol:

    \`\`\`java
    RtmConfig rtmConfig = new RtmConfig.Builder("appid", "userId")
        .protocolType(RtmProtocolType.TCP_ONLY)
        .build();
    \`\`\`

    <CalloutContainer type="info">
      <CalloutTitle>
        Info
      </CalloutTitle>

      <CalloutDescription>
        The SDK does not support configuring both links to use the UDP protocol simultaneously.
      </CalloutDescription>
    </CalloutContainer>

    ### Log configuration [#log-configuration-8]

    In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information level by configuring \`RtmLogLevel\` when initializing the Signaling client instance.

    \`\`\`java
    RtmLogConfig logConfig = new RtmLogConfig();
    // Set log file path
    logConfig.setFilePath("./logfile/");
    // Set log file size
    logConfig.setFileSize(512);
    // Set log report level
    logConfig.setLevel(RtmLogLevel.INFO);

    RtmConfig rtmConfig = new RtmConfig.Builder("your_appId", "your_userId")
        .logConfig(logConfig) // Set log config
        .build();

    // Initialize the client instance
    try {
        mRtmClient = RtmClient.create(rtmConfig);
    } catch(Exception e) {
        log(INFO, "create rtm client failed with exception: " + e.toString());
    }
    \`\`\`

    Choose the log level from the following:

    | Enumeration value | Description                                                                                                                 |
    | ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
    | \`NONE\`            | \`0x0000\`: Do not output any logs.                                                                                           |
    | \`INFO\`            | \`0x0001\`: Output logs of levels \`FATAL\`, \`ERROR\`, \`WARN\`, and \`INFO\`. Best practice is to set the log level to this option. |
    | \`WARN\`            | \`0x0002\`: Only output logs of levels \`FATAL\`, \`ERROR\`, and \`WARN\`.                                                          |
    | \`ERROR\`           | \`0x0004\`: Only output logs of levels \`FATAL\` and \`ERROR\`.                                                                   |
    | \`FATAL\`           | \`0x0008\`: Only output logs at the \`FATAL\` level.                                                                            |

    <CalloutContainer type="info">
      <CalloutDescription>
        When your app is released to production, set the log level to \`INFO\`.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-8]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    For firewall configuration, see [firewall requirements](../../reference/firewall)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements.

    ## Understand the tech [#understand-the-tech-9]

    When initializing a Signaling client instance, configure any or all of the following features:

    * **Geographical area access**
      When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.

    * **Enable proxy connection**
      You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.

    * **Logging**
      Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.

    * **Data encryption**
      Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see [Data encryption](../secure-your-app-and-data/data-encryption).

    ## Prerequisites [#prerequisites-9]

    Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the [SDK quickstart](../../index) page.

    ## Configure the client instance [#configure-the-client-instance-9]

    This section explains how to set up and customize various features when you initialize a Signaling client instance.

    ### Geographical area configuration [#geographical-area-configuration-9]

    To specify a geographical area for Agora SDRTN® connections, refer to the following code:

    \`\`\`csharp
    config.areaCode = Agora.Rtm.RTM_AREA_CODE.NA;
    \`\`\`

    ### Proxy configuration [#proxy-configuration-8]

    In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization.

    \`\`\`csharp
    using Agora.Rtm;

    private IRtmClient rtmClient;

    RtmProxyConfig proxyConfig = new RtmProxyConfig();
    // Set proxy type as HTTP.
    proxyConfig.proxyType = RTM_PROXY_TYPE.HTTP;
    // Set your proxy server address.
    proxyConfig.server = "your_proxy_server_ip";
    // Set your proxy listening port.
    proxyConfig.port = 8080;
    // Set your proxy account.
    proxyConfig.account = "your_proxy_account";
    // Set your proxy password.
    proxyConfig.password = "your_proxy_password";

    RtmConfig config = new RtmConfig();
    config.proxyConfig = proxyConfig;
    config.appId = "your_appId";
    config.userId = "your_userId";
    try
    {
        rtmClient = RtmClient.CreateAgoraRtmClient(config);
        Debug.Log("RTM Client Initialize Successful");
    }
    catch (RTMException e)
    {
        Debug.Log(string.Format("{0} is failed.", e.Status.Operation ));
        Debug.Log(string.Format("Error code: {0}, due to: {1}", e.Status.ErrorCode, e.Status.Reason));
    }
    \`\`\`

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client.
      </CalloutDescription>
    </CalloutContainer>

    ### Log configuration [#log-configuration-9]

    In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information \`level\` when initializing the Signaling client instance.

    \`\`\`csharp
    using Agora.Rtm;

    private IRtmClient rtmClient;

    RtmLogConfig logConfig = new RtmLogConfig();
    // Set log file path.
    logConfig.filePath = "./logfile/";
    // Set log file size.
    logConfig.fileSizeInKB = 512;
    // Set log report level.
    logConfig.level = RTM_LOG_LEVEL.INFO;

    RtmConfig config = new RtmConfig();
    // Initialize logConfig.
    config.logConfig = logConfig;
    config.appId = "your_appId";
    config.userId = "your_userId";
    try
    {
        rtmClient = RtmClient.CreateAgoraRtmClient(config);
        Debug.Log("RTM Client Initialize Successful");
    }
    catch (RTMException e)
    {
        Debug.Log(string.Format("{0} is failed.", e.Status.Operation ));
        Debug.Log(string.Format("Error code: {0}, due to: {1}", e.Status.ErrorCode, e.Status.Reason));
    }
    \`\`\`

    Choose the log level from the following:

    | Enumeration Value | Description                                                                                                                 |
    | ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
    | \`NONE\`            | \`0x0000\`: Do not output any logs.                                                                                           |
    | \`INFO\`            | \`0x0001\`: Output logs of levels \`FATAL\`, \`ERROR\`, \`WARN\`, and \`INFO\`. Best practice is to set the log level to this option. |
    | \`WARN\`            | \`0x0002\`: Only output logs of levels \`FATAL\`, \`ERROR\`, and \`WARN\`.                                                          |
    | \`ERROR\`           | \`0x0004\`: Only output logs of levels \`FATAL\` and \`ERROR\`.                                                                   |
    | \`FATAL\`           | \`0x0008\`: Only output logs at the \`FATAL\` level.                                                                            |

    <CalloutContainer type="info">
      <CalloutDescription>
        When your app is released to production, set the log level to \`INFO\`.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-9]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    For firewall configuration, see [firewall requirements](../../reference/firewall)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements."
  }, {
    heading: "understand-the-tech",
    content: "When initializing a Signaling client instance, configure any or all of the following features:"
  }, {
    heading: "understand-the-tech",
    content: `**Geographical area access**
When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.`
  }, {
    heading: "understand-the-tech",
    content: `**Enable proxy connection**
You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.`
  }, {
    heading: "understand-the-tech",
    content: `**Private deployment**
Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.`
  }, {
    heading: "understand-the-tech",
    content: `**Logging**
Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.`
  }, {
    heading: "understand-the-tech",
    content: `**Data encryption**
Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see Data encryption.`
  }, {
    heading: "prerequisites",
    content: "Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the SDK quickstart page."
  }, {
    heading: "configure-the-client-instance",
    content: "This section explains how to set up and customize various features when you initialize a Signaling client instance."
  }, {
    heading: "geographical-area-configuration",
    content: "To specify a geographical area for Agora SDRTN® connections, refer to the following code:"
  }, {
    heading: "proxy-configuration",
    content: "In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization."
  }, {
    heading: "proxy-configuration",
    content: "Since v2.3.0, the SDK no longer automatically falls back to Cloud Proxy. To use Cloud Proxy, you must explicitly set `cloudProxy` to `true` when initializing the RTM instance. Agora recommends that you give end users an option to enable Cloud Proxy based on your business needs."
  }, {
    heading: "proxy-configuration",
    content: "This feature is only available for Message channels and User channels."
  }, {
    heading: "private-deployment-configuration",
    content: "Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version `2.2.0`, Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems."
  }, {
    heading: "private-deployment-configuration",
    content: "Signaling provides `MESSAGE` and `STREAM` services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:"
  }, {
    heading: "private-deployment-configuration",
    content: "To upgrade the privately deployed Signaling Web SDK to v2.2.4 or later, set `domainMode` to `2` for compatibility. If you omit this parameter or use the default value `1`, the SDK may fail to connect to the Signaling server."
  }, {
    heading: "private-deployment-configuration",
    content: "To deploy a private environment, you need to set up the backend service. For assistance, please contact technical support."
  }, {
    heading: "log-configuration",
    content: "In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information level by configuring `logLevel` when initializing the Signaling client instance. You can view the log information in the browser console."
  }, {
    heading: "log-configuration",
    content: "Choose the log level from the following:"
  }, {
    heading: "log-configuration",
    content: "Enumeration Value"
  }, {
    heading: "log-configuration",
    content: "Description"
  }, {
    heading: "log-configuration",
    content: "`debug`"
  }, {
    heading: "log-configuration",
    content: "Output all logs."
  }, {
    heading: "log-configuration",
    content: "`info`"
  }, {
    heading: "log-configuration",
    content: "Output logs of level `error`, `warn`, and `info`."
  }, {
    heading: "log-configuration",
    content: "`warn`"
  }, {
    heading: "log-configuration",
    content: "Output logs of level `error`, and `warn`."
  }, {
    heading: "log-configuration",
    content: "`error`"
  }, {
    heading: "log-configuration",
    content: "Output logs of level `error`."
  }, {
    heading: "log-configuration",
    content: "`none`"
  }, {
    heading: "log-configuration",
    content: "No log output."
  }, {
    heading: "log-configuration",
    content: "When your app is released to production, set the log level to `info`."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference",
    content: "For firewall configuration, see firewall requirements"
  }, {
    heading: "reference",
    content: "Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements."
  }, {
    heading: "understand-the-tech-1",
    content: "When initializing a Signaling client instance, configure any or all of the following features:"
  }, {
    heading: "understand-the-tech-1",
    content: `**Geographical area access**
When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.`
  }, {
    heading: "understand-the-tech-1",
    content: `**Enable proxy connection**
You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.`
  }, {
    heading: "understand-the-tech-1",
    content: `**Private deployment**
Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.`
  }, {
    heading: "understand-the-tech-1",
    content: `**Logging**
Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.`
  }, {
    heading: "understand-the-tech-1",
    content: `**Data encryption**
Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see Data encryption.`
  }, {
    heading: "prerequisites-1",
    content: "Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the SDK quickstart page."
  }, {
    heading: "configure-the-client-instance-1",
    content: "This section explains how to set up and customize various features when you initialize a Signaling client instance."
  }, {
    heading: "geographical-area-configuration-1",
    content: "To specify a geographical area for Agora SDRTN® connections, refer to the following code:"
  }, {
    heading: "proxy-configuration-1",
    content: "In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization."
  }, {
    heading: "proxy-configuration-1",
    content: "Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client."
  }, {
    heading: "private-deployment-configuration-1",
    content: "Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version `2.2.0`, Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems."
  }, {
    heading: "private-deployment-configuration-1",
    content: "Signaling provides `MESSAGE` and `STREAM` services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:"
  }, {
    heading: "private-deployment-configuration-1",
    content: "To deploy a private environment, you need to set up the backend service. For assistance, please contact technical support."
  }, {
    heading: "connection-protocol",
    content: "To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each service (`MESSAGE` service and `STREAM` service) when connecting to the edge server. By default, these links use the TCP and UDP protocols, respectively. This design ensures that network issues on one link do not affect the overall transmission. Compared to other WebSocket-based message transmission solutions, RTM's redundant link design maximizes transmission stability and message delivery rate."
  }, {
    heading: "connection-protocol",
    content: "In some cases, users may find that their network does not support UDP port transmission, either temporarily or permanently. To ensure the dual-link design operates effectively, the SDK allows users to configure both links to use the TCP protocol. This can be done by setting the `protocolType` field in the `RtmConfig`. Below is a code example that configures both links to use the TCP protocol:"
  }, {
    heading: "connection-protocol",
    content: "The SDK does not support configuring both links to use the UDP protocol simultaneously."
  }, {
    heading: "log-configuration-1",
    content: "In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information level by configuring `RtmLogLevel` when initializing the Signaling client instance."
  }, {
    heading: "log-configuration-1",
    content: "Choose the log level from the following:"
  }, {
    heading: "log-configuration-1",
    content: "Enumeration value"
  }, {
    heading: "log-configuration-1",
    content: "Description"
  }, {
    heading: "log-configuration-1",
    content: "`NONE`"
  }, {
    heading: "log-configuration-1",
    content: "`0x0000`: Do not output any logs."
  }, {
    heading: "log-configuration-1",
    content: "`INFO`"
  }, {
    heading: "log-configuration-1",
    content: "`0x0001`: Output logs of levels `FATAL`, `ERROR`, `WARN`, and `INFO`. Best practice is to set the log level to this option."
  }, {
    heading: "log-configuration-1",
    content: "`WARN`"
  }, {
    heading: "log-configuration-1",
    content: "`0x0002`: Only output logs of levels `FATAL`, `ERROR`, and `WARN`."
  }, {
    heading: "log-configuration-1",
    content: "`ERROR`"
  }, {
    heading: "log-configuration-1",
    content: "`0x0004`: Only output logs of levels `FATAL` and `ERROR`."
  }, {
    heading: "log-configuration-1",
    content: "`FATAL`"
  }, {
    heading: "log-configuration-1",
    content: "`0x0008`: Only output logs at the `FATAL` level."
  }, {
    heading: "log-configuration-1",
    content: "When your app is released to production, set the log level to `INFO`."
  }, {
    heading: "reference-1",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference-1",
    content: "For firewall configuration, see firewall requirements"
  }, {
    heading: "reference-1",
    content: "Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements."
  }, {
    heading: "understand-the-tech-2",
    content: "When initializing a Signaling client instance, configure any or all of the following features:"
  }, {
    heading: "understand-the-tech-2",
    content: `**Geographical area access**
When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.`
  }, {
    heading: "understand-the-tech-2",
    content: `**Enable proxy connection**
You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.`
  }, {
    heading: "understand-the-tech-2",
    content: `**Private deployment**
Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.`
  }, {
    heading: "understand-the-tech-2",
    content: `**Logging**
Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.`
  }, {
    heading: "understand-the-tech-2",
    content: `**Data encryption**
Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see Data encryption.`
  }, {
    heading: "prerequisites-2",
    content: "Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the SDK quickstart page."
  }, {
    heading: "configure-the-client-instance-2",
    content: "This section explains how to set up and customize various features when you initialize a Signaling client instance."
  }, {
    heading: "geographical-area-configuration-2",
    content: "To specify a geographical area for Agora SDRTN® connections, refer to the following code:"
  }, {
    heading: "proxy-configuration-2",
    content: "In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization."
  }, {
    heading: "proxy-configuration-2",
    content: "Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client."
  }, {
    heading: "private-deployment-configuration-2",
    content: "Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version `2.2.0`, Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems."
  }, {
    heading: "private-deployment-configuration-2",
    content: "Signaling provides `MESSAGE` and `STREAM` services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:"
  }, {
    heading: "private-deployment-configuration-2",
    content: "To deploy a private environment, you need to set up the backend service. For assistance, please contact technical support."
  }, {
    heading: "connection-protocol-1",
    content: "To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each channel (`MESSAGE` service and `STREAM` service) when connecting to the edge server. By default, these links use the TCP and UDP protocols respectively. This design ensures that network issues in one link do not affect transmission performance. Compared to other WebSocket-based message transmission solutions, RTM's redundant link design maximizes transmission stability and message arrival rates."
  }, {
    heading: "connection-protocol-1",
    content: "In some cases, users may find that their network does not support UDP port transmission, either temporarily or permanently. To ensure the dual-link design functions effectively, the SDK allows users to configure both links to use the TCP protocol by setting the `protocolType` field in the `AgoraRtmClientConfig`. Here is an example of configuring both links to use the TCP protocol:"
  }, {
    heading: "connection-protocol-1",
    content: "The SDK does not support configuring both links to use the UDP protocol simultaneously."
  }, {
    heading: "log-configuration-2",
    content: "In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable SDK log output and configure the log level and file size when initializing the Signaling client instance."
  }, {
    heading: "log-configuration-2",
    content: "Choose the log level from the following:"
  }, {
    heading: "log-configuration-2",
    content: "Swift"
  }, {
    heading: "log-configuration-2",
    content: "Objective-C"
  }, {
    heading: "log-configuration-2",
    content: "Description"
  }, {
    heading: "log-configuration-2",
    content: "`none`"
  }, {
    heading: "log-configuration-2",
    content: "`AgoraRtmLogLevelNone`"
  }, {
    heading: "log-configuration-2",
    content: "`0x0000`: Do not output any logs."
  }, {
    heading: "log-configuration-2",
    content: "`info`"
  }, {
    heading: "log-configuration-2",
    content: "`AgoraRtmLogLevelInfo`"
  }, {
    heading: "log-configuration-2",
    content: "`0x0001`: Output logs of levels `fatal`, `error`, `warn`, and `info`. Best practice is to set the log level to this option."
  }, {
    heading: "log-configuration-2",
    content: "`warn`"
  }, {
    heading: "log-configuration-2",
    content: "`AgoraRtmLogLevelWarn`"
  }, {
    heading: "log-configuration-2",
    content: "`0x0002`: Only output logs of levels `fatal`, `error`, and `warn`."
  }, {
    heading: "log-configuration-2",
    content: "`error`"
  }, {
    heading: "log-configuration-2",
    content: "`AgoraRtmLogLevelError`"
  }, {
    heading: "log-configuration-2",
    content: "`0x0004`: Only output logs of levels `fatal` and `error`."
  }, {
    heading: "log-configuration-2",
    content: "`fatal`"
  }, {
    heading: "log-configuration-2",
    content: "`AgoraRtmLogLevelFatal`"
  }, {
    heading: "log-configuration-2",
    content: "`0x0008`: Only output logs at the `fatal` level."
  }, {
    heading: "log-configuration-2",
    content: "When you release your app to production, set the log level to `info` in Swift or `AgoraRtmLogLevelInfo` in Objective-C."
  }, {
    heading: "reference-2",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference-2",
    content: "For firewall configuration, see firewall requirements"
  }, {
    heading: "reference-2",
    content: "Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements."
  }, {
    heading: "understand-the-tech-3",
    content: "When initializing a Signaling client instance, configure any or all of the following features:"
  }, {
    heading: "understand-the-tech-3",
    content: `**Geographical area access**
When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.`
  }, {
    heading: "understand-the-tech-3",
    content: `**Enable proxy connection**
You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.`
  }, {
    heading: "understand-the-tech-3",
    content: `**Private deployment**
Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.`
  }, {
    heading: "understand-the-tech-3",
    content: `**Logging**
Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.`
  }, {
    heading: "understand-the-tech-3",
    content: `**Data encryption**
Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see Data encryption.`
  }, {
    heading: "prerequisites-3",
    content: "Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the SDK quickstart page."
  }, {
    heading: "configure-the-client-instance-3",
    content: "This section explains how to set up and customize various features when you initialize a Signaling client instance."
  }, {
    heading: "geographical-area-configuration-3",
    content: "To specify a geographical area for Agora SDRTN® connections, refer to the following code:"
  }, {
    heading: "proxy-configuration-3",
    content: "In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization."
  }, {
    heading: "proxy-configuration-3",
    content: "Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client."
  }, {
    heading: "private-deployment-configuration-3",
    content: "Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version `2.2.0`, Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems."
  }, {
    heading: "private-deployment-configuration-3",
    content: "Signaling provides `MESSAGE` and `STREAM` services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:"
  }, {
    heading: "private-deployment-configuration-3",
    content: "To deploy a private environment, you need to set up the backend service. For assistance, please contact technical support."
  }, {
    heading: "connection-protocol-2",
    content: "To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each channel (`MESSAGE` service and `STREAM` service) when connecting to the edge server. By default, these links use the TCP and UDP protocols respectively. This design ensures that network issues in one link do not affect transmission performance. Compared to other WebSocket-based message transmission solutions, RTM's redundant link design maximizes transmission stability and message arrival rates."
  }, {
    heading: "connection-protocol-2",
    content: "In some cases, users may find that their network does not support UDP port transmission, either temporarily or permanently. To ensure the dual-link design functions effectively, the SDK allows users to configure both links to use the TCP protocol by setting the `protocolType` field in the `AgoraRtmClientConfig`. Here is an example of configuring both links to use the TCP protocol:"
  }, {
    heading: "connection-protocol-2",
    content: "The SDK does not support configuring both links to use the UDP protocol simultaneously."
  }, {
    heading: "log-configuration-3",
    content: "In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable SDK log output and configure the log level and file size when initializing the Signaling client instance."
  }, {
    heading: "log-configuration-3",
    content: "Choose the log level from the following:"
  }, {
    heading: "log-configuration-3",
    content: "Swift"
  }, {
    heading: "log-configuration-3",
    content: "Objective-C"
  }, {
    heading: "log-configuration-3",
    content: "Description"
  }, {
    heading: "log-configuration-3",
    content: "`none`"
  }, {
    heading: "log-configuration-3",
    content: "`AgoraRtmLogLevelNone`"
  }, {
    heading: "log-configuration-3",
    content: "`0x0000`: Do not output any logs."
  }, {
    heading: "log-configuration-3",
    content: "`info`"
  }, {
    heading: "log-configuration-3",
    content: "`AgoraRtmLogLevelInfo`"
  }, {
    heading: "log-configuration-3",
    content: "`0x0001`: Output logs of levels `fatal`, `error`, `warn`, and `info`. Best practice is to set the log level to this option."
  }, {
    heading: "log-configuration-3",
    content: "`warn`"
  }, {
    heading: "log-configuration-3",
    content: "`AgoraRtmLogLevelWarn`"
  }, {
    heading: "log-configuration-3",
    content: "`0x0002`: Only output logs of levels `fatal`, `error`, and `warn`."
  }, {
    heading: "log-configuration-3",
    content: "`error`"
  }, {
    heading: "log-configuration-3",
    content: "`AgoraRtmLogLevelError`"
  }, {
    heading: "log-configuration-3",
    content: "`0x0004`: Only output logs of levels `fatal` and `error`."
  }, {
    heading: "log-configuration-3",
    content: "`fatal`"
  }, {
    heading: "log-configuration-3",
    content: "`AgoraRtmLogLevelFatal`"
  }, {
    heading: "log-configuration-3",
    content: "`0x0008`: Only output logs at the `fatal` level."
  }, {
    heading: "log-configuration-3",
    content: "When you release your app to production, set the log level to `info` in Swift or `AgoraRtmLogLevelInfo` in Objective-C."
  }, {
    heading: "reference-3",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference-3",
    content: "For firewall configuration, see firewall requirements"
  }, {
    heading: "reference-3",
    content: "Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements."
  }, {
    heading: "understand-the-tech-4",
    content: "When initializing a Signaling client instance, configure any or all of the following features:"
  }, {
    heading: "understand-the-tech-4",
    content: `**Geographical area access**
When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.`
  }, {
    heading: "understand-the-tech-4",
    content: `**Enable proxy connection**
You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.`
  }, {
    heading: "understand-the-tech-4",
    content: `**Private deployment**
Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.`
  }, {
    heading: "understand-the-tech-4",
    content: `**Logging**
Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.`
  }, {
    heading: "understand-the-tech-4",
    content: `**Data encryption**
Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see Data encryption.`
  }, {
    heading: "prerequisites-4",
    content: "Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the SDK quickstart page."
  }, {
    heading: "configure-the-client-instance-4",
    content: "This section explains how to set up and customize various features when you initialize a Signaling client instance."
  }, {
    heading: "geographical-area-configuration-4",
    content: "To specify geographical areas for Agora SDRTN® connections, refer to the following code:"
  }, {
    heading: "proxy-configuration-4",
    content: "In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization."
  }, {
    heading: "proxy-configuration-4",
    content: "Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client."
  }, {
    heading: "private-deployment-configuration-4",
    content: "Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version `2.2.0`, Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems."
  }, {
    heading: "private-deployment-configuration-4",
    content: "Signaling provides `MESSAGE` and `STREAM` services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:"
  }, {
    heading: "private-deployment-configuration-4",
    content: "To deploy a private environment, you need to set up the backend service. For assistance, please contact technical support."
  }, {
    heading: "connection-protocol-3",
    content: "To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each service (`MESSAGE` service and `STREAM` service) when connecting to the edge server. By default, these links use the TCP and UDP protocols, respectively. This design ensures that network issues on one link do not affect the overall transmission. Compared to other WebSocket-based message transmission solutions, RTM's redundant link design maximizes transmission stability and message delivery rate."
  }, {
    heading: "connection-protocol-3",
    content: "In some cases, users may find that their network does not support UDP port transmission, either temporarily or permanently. To ensure the dual-link design operates effectively, the SDK allows users to configure both links to use the TCP protocol. This can be done by setting the `protocolType` field in the `RtmConfig`. Below is a code example that configures both links to use the TCP protocol:"
  }, {
    heading: "connection-protocol-3",
    content: "The SDK does not support configuring both links to use the UDP protocol simultaneously."
  }, {
    heading: "log-configuration-4",
    content: "In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information level by configuring `level` when initializing the Signaling client instance."
  }, {
    heading: "log-configuration-4",
    content: "Choose the log level from the following:"
  }, {
    heading: "log-configuration-4",
    content: "Enumeration value"
  }, {
    heading: "log-configuration-4",
    content: "Description"
  }, {
    heading: "log-configuration-4",
    content: "`none`"
  }, {
    heading: "log-configuration-4",
    content: "`0x0000`: Do not output any logs."
  }, {
    heading: "log-configuration-4",
    content: "`info`"
  }, {
    heading: "log-configuration-4",
    content: "`0x0001`: Output logs of levels `fatal`, `error`, `warn`, and `info`. Best practice is to set the log level to this option."
  }, {
    heading: "log-configuration-4",
    content: "`warn`"
  }, {
    heading: "log-configuration-4",
    content: "`0x0002`: Only output logs of levels `fatal`, `error`, and `warn`."
  }, {
    heading: "log-configuration-4",
    content: "`error`"
  }, {
    heading: "log-configuration-4",
    content: "`0x0004`: Only output logs of levels `fatal` and `error`."
  }, {
    heading: "log-configuration-4",
    content: "`fatal`"
  }, {
    heading: "log-configuration-4",
    content: "`0x0008`: Only output logs at the `fatal` level."
  }, {
    heading: "log-configuration-4",
    content: "When your app is released to production, set the log level to `info`."
  }, {
    heading: "reference-4",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference-4",
    content: "For firewall configuration, see firewall requirements"
  }, {
    heading: "reference-4",
    content: "Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements."
  }, {
    heading: "understand-the-tech-5",
    content: "When initializing a Signaling client instance, configure any or all of the following features:"
  }, {
    heading: "understand-the-tech-5",
    content: `**Geographical area access**
When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.`
  }, {
    heading: "understand-the-tech-5",
    content: `**Enable proxy connection**
You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.`
  }, {
    heading: "understand-the-tech-5",
    content: `**Private deployment**
Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.`
  }, {
    heading: "understand-the-tech-5",
    content: `**Logging**
Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.`
  }, {
    heading: "understand-the-tech-5",
    content: `**Data encryption**
Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see Data encryption.`
  }, {
    heading: "prerequisites-5",
    content: "Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the SDK quickstart page."
  }, {
    heading: "configure-the-client-instance-5",
    content: "This section explains how to set up and customize various features when you initialize a Signaling client instance."
  }, {
    heading: "geographical-area-configuration-5",
    content: "To specify a geographical area for Agora SDRTN® connections, refer to the following code:"
  }, {
    heading: "geographical-area-configuration-5",
    content: "Available area codes:"
  }, {
    heading: "geographical-area-configuration-5",
    content: "Area Code"
  }, {
    heading: "geographical-area-configuration-5",
    content: "Description"
  }, {
    heading: "geographical-area-configuration-5",
    content: "`RtmAreaCode.na`"
  }, {
    heading: "geographical-area-configuration-5",
    content: "North America"
  }, {
    heading: "geographical-area-configuration-5",
    content: "`RtmAreaCode.eu`"
  }, {
    heading: "geographical-area-configuration-5",
    content: "Europe"
  }, {
    heading: "geographical-area-configuration-5",
    content: "`RtmAreaCode.as`"
  }, {
    heading: "geographical-area-configuration-5",
    content: "Asia excluding Mainland China"
  }, {
    heading: "geographical-area-configuration-5",
    content: "`RtmAreaCode.jp`"
  }, {
    heading: "geographical-area-configuration-5",
    content: "Japan"
  }, {
    heading: "geographical-area-configuration-5",
    content: "`RtmAreaCode.in`"
  }, {
    heading: "geographical-area-configuration-5",
    content: "India"
  }, {
    heading: "geographical-area-configuration-5",
    content: "`RtmAreaCode.cn`"
  }, {
    heading: "geographical-area-configuration-5",
    content: "Mainland China"
  }, {
    heading: "geographical-area-configuration-5",
    content: "`RtmAreaCode.glob`"
  }, {
    heading: "geographical-area-configuration-5",
    content: "Global (default)"
  }, {
    heading: "proxy-configuration-5",
    content: "In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization."
  }, {
    heading: "proxy-configuration-5",
    content: "Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client."
  }, {
    heading: "connection-protocol-4",
    content: "To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each service (`MESSAGE` service and `STREAM` service) when connecting to the edge server. By default, these links use the TCP and UDP protocols, respectively. This design ensures that network issues on one link do not affect the overall transmission."
  }, {
    heading: "connection-protocol-4",
    content: "In some cases, users may find that their network does not support UDP port transmission. To ensure the dual-link design operates effectively, the SDK allows users to configure both links to use the TCP protocol by setting the `protocolType` field in the `RtmConfig`:"
  }, {
    heading: "connection-protocol-4",
    content: "Available protocol types:"
  }, {
    heading: "connection-protocol-4",
    content: "Protocol Type"
  }, {
    heading: "connection-protocol-4",
    content: "Description"
  }, {
    heading: "connection-protocol-4",
    content: "`RtmProtocolType.tcpUdp`"
  }, {
    heading: "connection-protocol-4",
    content: "Use both TCP and UDP (default)"
  }, {
    heading: "connection-protocol-4",
    content: "`RtmProtocolType.tcpOnly`"
  }, {
    heading: "connection-protocol-4",
    content: "Use TCP only for both links"
  }, {
    heading: "connection-protocol-4",
    content: "The SDK does not support configuring both links to use the UDP protocol simultaneously."
  }, {
    heading: "presence-timeout-configuration",
    content: "Configure the presence timeout to control how long the server waits before considering a client offline:"
  }, {
    heading: "user-id-type-configuration",
    content: "Configure whether to use string or numeric user IDs:"
  }, {
    heading: "user-id-type-configuration",
    content: "When using both Agora RTC and RTM, ensure the `userId` type is consistent across both SDKs."
  }, {
    heading: "log-configuration-5",
    content: "In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information level by configuring `RtmLogConfig` when initializing the Signaling client instance:"
  }, {
    heading: "log-configuration-5",
    content: "Choose the log level from the following:"
  }, {
    heading: "log-configuration-5",
    content: "Enumeration value"
  }, {
    heading: "log-configuration-5",
    content: "Description"
  }, {
    heading: "log-configuration-5",
    content: "`RtmLogLevel.none`"
  }, {
    heading: "log-configuration-5",
    content: "`0x0000`: Do not output any logs."
  }, {
    heading: "log-configuration-5",
    content: "`RtmLogLevel.info`"
  }, {
    heading: "log-configuration-5",
    content: "`0x0001`: Output logs of levels `FATAL`, `ERROR`, `WARN`, and `INFO`. Best practice is to set the log level to this option."
  }, {
    heading: "log-configuration-5",
    content: "`RtmLogLevel.warn`"
  }, {
    heading: "log-configuration-5",
    content: "`0x0002`: Only output logs of levels `FATAL`, `ERROR`, and `WARN`."
  }, {
    heading: "log-configuration-5",
    content: "`RtmLogLevel.error`"
  }, {
    heading: "log-configuration-5",
    content: "`0x0004`: Only output logs of levels `FATAL` and `ERROR`."
  }, {
    heading: "log-configuration-5",
    content: "`RtmLogLevel.fatal`"
  }, {
    heading: "log-configuration-5",
    content: "`0x0008`: Only output logs at the `FATAL` level."
  }, {
    heading: "log-configuration-5",
    content: "When your app is released to production, set the log level to `RtmLogLevel.info`."
  }, {
    heading: "encryption-configuration",
    content: "For enhanced security, you can enable client-side encryption:"
  }, {
    heading: "encryption-configuration",
    content: "Available encryption modes:"
  }, {
    heading: "encryption-configuration",
    content: "Encryption Mode"
  }, {
    heading: "encryption-configuration",
    content: "Description"
  }, {
    heading: "encryption-configuration",
    content: "`RtmEncryptionMode.none`"
  }, {
    heading: "encryption-configuration",
    content: "No encryption (default)"
  }, {
    heading: "encryption-configuration",
    content: "`RtmEncryptionMode.aes128Gcm`"
  }, {
    heading: "encryption-configuration",
    content: "AES 128-bit GCM encryption"
  }, {
    heading: "encryption-configuration",
    content: "`RtmEncryptionMode.aes256Gcm`"
  }, {
    heading: "encryption-configuration",
    content: "AES 256-bit GCM encryption"
  }, {
    heading: "complete-configuration-example",
    content: "Here's a comprehensive example showing all configuration options:"
  }, {
    heading: "reference-5",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference-5",
    content: "For firewall configuration, see firewall requirements"
  }, {
    heading: "reference-5",
    content: "Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements."
  }, {
    heading: "understand-the-tech-6",
    content: "When initializing a Signaling client instance, configure any or all of the following features:"
  }, {
    heading: "understand-the-tech-6",
    content: `**Geographical area access**
When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.`
  }, {
    heading: "understand-the-tech-6",
    content: `**Enable proxy connection**
You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.`
  }, {
    heading: "understand-the-tech-6",
    content: `**Private deployment**
Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.`
  }, {
    heading: "understand-the-tech-6",
    content: `**Logging**
Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.`
  }, {
    heading: "understand-the-tech-6",
    content: `**Data encryption**
Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see Data encryption.`
  }, {
    heading: "prerequisites-6",
    content: "Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the SDK quickstart page."
  }, {
    heading: "configure-the-client-instance-6",
    content: "This section explains how to set up and customize various features when you initialize a Signaling client instance."
  }, {
    heading: "geographical-area-configuration-6",
    content: "To specify a geographical area for Agora SDRTN® connections, refer to the following code:"
  }, {
    heading: "proxy-configuration-6",
    content: "In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization."
  }, {
    heading: "proxy-configuration-6",
    content: "Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client."
  }, {
    heading: "private-deployment-configuration-5",
    content: "Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version `2.2.0`, Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems."
  }, {
    heading: "private-deployment-configuration-5",
    content: "Signaling provides `MESSAGE` and `STREAM` services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:"
  }, {
    heading: "private-deployment-configuration-5",
    content: "To deploy a private environment, you need to set up the backend service. For assistance, please contact technical support."
  }, {
    heading: "connection-protocol-5",
    content: "To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each service (`MESSAGE` service and `STREAM` service) when connecting to the edge server. By default, these links use the TCP and UDP protocols, respectively. This design ensures that network issues on one link do not affect the overall transmission. Compared to other WebSocket-based message transmission solutions, RTM's redundant link design maximizes transmission stability and message delivery rate."
  }, {
    heading: "connection-protocol-5",
    content: "In some cases, users may find that their network does not support UDP port transmission, either temporarily or permanently. To ensure the dual-link design operates effectively, the SDK allows users to configure both links to use the TCP protocol. This can be done by setting the `protocolType` field in the `RtmConfig`. Below is a code example that configures both links to use the TCP protocol:"
  }, {
    heading: "connection-protocol-5",
    content: "The SDK does not support configuring both links to use the UDP protocol simultaneously."
  }, {
    heading: "log-configuration-6",
    content: "In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information level by configuring `RTM_LOG_LEVEL` when initializing the Signaling client instance."
  }, {
    heading: "log-configuration-6",
    content: "Choose the log level from the following:"
  }, {
    heading: "log-configuration-6",
    content: "Enumeration value"
  }, {
    heading: "log-configuration-6",
    content: "Description"
  }, {
    heading: "log-configuration-6",
    content: "`NONE`"
  }, {
    heading: "log-configuration-6",
    content: "`0x0000`: Do not output any logs."
  }, {
    heading: "log-configuration-6",
    content: "`INFO`"
  }, {
    heading: "log-configuration-6",
    content: "`0x0001`: Output logs of levels `FATAL`, `ERROR`, `WARN`, and `INFO`. Best practice is to set the log level to this option."
  }, {
    heading: "log-configuration-6",
    content: "`WARN`"
  }, {
    heading: "log-configuration-6",
    content: "`0x0002`: Only output logs of levels `FATAL`, `ERROR`, and `WARN`."
  }, {
    heading: "log-configuration-6",
    content: "`ERROR`"
  }, {
    heading: "log-configuration-6",
    content: "`0x0004`: Only output logs of levels `FATAL` and `ERROR`."
  }, {
    heading: "log-configuration-6",
    content: "`FATAL`"
  }, {
    heading: "log-configuration-6",
    content: "`0x0008`: Only output logs of levels `FATAL`."
  }, {
    heading: "log-configuration-6",
    content: "When your app is released to production, set the log level to `INFO`."
  }, {
    heading: "reference-6",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference-6",
    content: "For firewall configuration, see firewall requirements"
  }, {
    heading: "reference-6",
    content: "Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements."
  }, {
    heading: "understand-the-tech-7",
    content: "When initializing a Signaling client instance, configure any or all of the following features:"
  }, {
    heading: "understand-the-tech-7",
    content: `**Geographical area access**
When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.`
  }, {
    heading: "understand-the-tech-7",
    content: `**Enable proxy connection**
You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.`
  }, {
    heading: "understand-the-tech-7",
    content: `**Private deployment**
Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.`
  }, {
    heading: "understand-the-tech-7",
    content: `**Logging**
Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.`
  }, {
    heading: "understand-the-tech-7",
    content: `**Data encryption**
Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see Data encryption.`
  }, {
    heading: "prerequisites-7",
    content: "Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the SDK quickstart page."
  }, {
    heading: "configure-the-client-instance-7",
    content: "This section explains how to set up and customize various features when you initialize a Signaling client instance."
  }, {
    heading: "geographical-area-configuration-7",
    content: "To specify a geographical area for Agora SDRTN® connections, refer to the following code:"
  }, {
    heading: "proxy-configuration-7",
    content: "In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization."
  }, {
    heading: "proxy-configuration-7",
    content: "Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client."
  }, {
    heading: "private-deployment-configuration-6",
    content: "Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version `2.2.0`, Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems."
  }, {
    heading: "private-deployment-configuration-6",
    content: "Signaling provides `MESSAGE` and `STREAM` services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:"
  }, {
    heading: "private-deployment-configuration-6",
    content: "To deploy a private environment, you need to set up the backend service. For assistance, please contact technical support."
  }, {
    heading: "connection-protocol-6",
    content: "To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each service (`MESSAGE` service and `STREAM` service) when connecting to the edge server. By default, these links use the TCP and UDP protocols, respectively. This design ensures that network issues on one link do not affect the overall transmission. Compared to other WebSocket-based message transmission solutions, RTM's redundant link design maximizes transmission stability and message delivery rate."
  }, {
    heading: "connection-protocol-6",
    content: "In some cases, users may find that their network does not support UDP port transmission, either temporarily or permanently. To ensure the dual-link design operates effectively, the SDK allows users to configure both links to use the TCP protocol. This can be done by setting the `protocolType` field in the `RtmConfig`. Below is a code example that configures both links to use the TCP protocol:"
  }, {
    heading: "connection-protocol-6",
    content: "The SDK does not support configuring both links to use the UDP protocol simultaneously."
  }, {
    heading: "log-configuration-7",
    content: "In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information level by configuring `RTM_LOG_LEVEL` when initializing the Signaling client instance."
  }, {
    heading: "log-configuration-7",
    content: "Choose the log level from the following:"
  }, {
    heading: "log-configuration-7",
    content: "Enumeration value"
  }, {
    heading: "log-configuration-7",
    content: "Description"
  }, {
    heading: "log-configuration-7",
    content: "`NONE`"
  }, {
    heading: "log-configuration-7",
    content: "`0x0000`: Do not output any logs."
  }, {
    heading: "log-configuration-7",
    content: "`INFO`"
  }, {
    heading: "log-configuration-7",
    content: "`0x0001`: Output logs of levels `FATAL`, `ERROR`, `WARN`, and `INFO`. Best practice is to set the log level to this option."
  }, {
    heading: "log-configuration-7",
    content: "`WARN`"
  }, {
    heading: "log-configuration-7",
    content: "`0x0002`: Only output logs of levels `FATAL`, `ERROR`, and `WARN`."
  }, {
    heading: "log-configuration-7",
    content: "`ERROR`"
  }, {
    heading: "log-configuration-7",
    content: "`0x0004`: Only output logs of levels `FATAL` and `ERROR`."
  }, {
    heading: "log-configuration-7",
    content: "`FATAL`"
  }, {
    heading: "log-configuration-7",
    content: "`0x0008`: Only output logs of levels `FATAL`."
  }, {
    heading: "log-configuration-7",
    content: "When your app is released to production, set the log level to `INFO`."
  }, {
    heading: "reference-7",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference-7",
    content: "For firewall configuration, see firewall requirements"
  }, {
    heading: "reference-7",
    content: "Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements."
  }, {
    heading: "understand-the-tech-8",
    content: "When initializing a Signaling client instance, configure any or all of the following features:"
  }, {
    heading: "understand-the-tech-8",
    content: `**Geographical area access**
When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.`
  }, {
    heading: "understand-the-tech-8",
    content: `**Private deployment**
Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.`
  }, {
    heading: "understand-the-tech-8",
    content: `**Logging**
Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.`
  }, {
    heading: "understand-the-tech-8",
    content: `**Data encryption**
Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see Data encryption.`
  }, {
    heading: "prerequisites-8",
    content: "Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the SDK quickstart page."
  }, {
    heading: "configure-the-client-instance-8",
    content: "This section explains how to set up and customize various features when you initialize a Signaling client instance."
  }, {
    heading: "geographical-area-configuration-8",
    content: "To specify a geographical area for Agora SDRTN® connections, refer to the following code:"
  }, {
    heading: "private-deployment-configuration-7",
    content: "Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version `2.2.0`, Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems."
  }, {
    heading: "private-deployment-configuration-7",
    content: "Signaling provides `MESSAGE` and `STREAM` services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:"
  }, {
    heading: "private-deployment-configuration-7",
    content: "To deploy a private environment, you need to set up the backend service. For assistance, please contact technical support."
  }, {
    heading: "connection-protocol-7",
    content: "To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each service (`MESSAGE` service and `STREAM` service) when connecting to the edge server. By default, these links use the TCP and UDP protocols, respectively. This design ensures that network issues on one link do not affect the overall transmission. Compared to other WebSocket-based message transmission solutions, RTM's redundant link design maximizes transmission stability and message delivery rate."
  }, {
    heading: "connection-protocol-7",
    content: "In some cases, users may find that their network does not support UDP port transmission, either temporarily or permanently. To ensure the dual-link design operates effectively, the SDK allows users to configure both links to use the TCP protocol. This can be done by setting the `protocolType` field in the `RtmConfig`. Below is a code example that configures both links to use the TCP protocol:"
  }, {
    heading: "connection-protocol-7",
    content: "The SDK does not support configuring both links to use the UDP protocol simultaneously."
  }, {
    heading: "log-configuration-8",
    content: "In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information level by configuring `RtmLogLevel` when initializing the Signaling client instance."
  }, {
    heading: "log-configuration-8",
    content: "Choose the log level from the following:"
  }, {
    heading: "log-configuration-8",
    content: "Enumeration value"
  }, {
    heading: "log-configuration-8",
    content: "Description"
  }, {
    heading: "log-configuration-8",
    content: "`NONE`"
  }, {
    heading: "log-configuration-8",
    content: "`0x0000`: Do not output any logs."
  }, {
    heading: "log-configuration-8",
    content: "`INFO`"
  }, {
    heading: "log-configuration-8",
    content: "`0x0001`: Output logs of levels `FATAL`, `ERROR`, `WARN`, and `INFO`. Best practice is to set the log level to this option."
  }, {
    heading: "log-configuration-8",
    content: "`WARN`"
  }, {
    heading: "log-configuration-8",
    content: "`0x0002`: Only output logs of levels `FATAL`, `ERROR`, and `WARN`."
  }, {
    heading: "log-configuration-8",
    content: "`ERROR`"
  }, {
    heading: "log-configuration-8",
    content: "`0x0004`: Only output logs of levels `FATAL` and `ERROR`."
  }, {
    heading: "log-configuration-8",
    content: "`FATAL`"
  }, {
    heading: "log-configuration-8",
    content: "`0x0008`: Only output logs at the `FATAL` level."
  }, {
    heading: "log-configuration-8",
    content: "When your app is released to production, set the log level to `INFO`."
  }, {
    heading: "reference-8",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference-8",
    content: "For firewall configuration, see firewall requirements"
  }, {
    heading: "reference-8",
    content: "Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements."
  }, {
    heading: "understand-the-tech-9",
    content: "When initializing a Signaling client instance, configure any or all of the following features:"
  }, {
    heading: "understand-the-tech-9",
    content: `**Geographical area access**
When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.`
  }, {
    heading: "understand-the-tech-9",
    content: `**Enable proxy connection**
You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.`
  }, {
    heading: "understand-the-tech-9",
    content: `**Logging**
Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.`
  }, {
    heading: "understand-the-tech-9",
    content: `**Data encryption**
Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see Data encryption.`
  }, {
    heading: "prerequisites-9",
    content: "Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the SDK quickstart page."
  }, {
    heading: "configure-the-client-instance-9",
    content: "This section explains how to set up and customize various features when you initialize a Signaling client instance."
  }, {
    heading: "geographical-area-configuration-9",
    content: "To specify a geographical area for Agora SDRTN® connections, refer to the following code:"
  }, {
    heading: "proxy-configuration-8",
    content: "In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization."
  }, {
    heading: "proxy-configuration-8",
    content: "Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client."
  }, {
    heading: "log-configuration-9",
    content: "In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information `level` when initializing the Signaling client instance."
  }, {
    heading: "log-configuration-9",
    content: "Choose the log level from the following:"
  }, {
    heading: "log-configuration-9",
    content: "Enumeration Value"
  }, {
    heading: "log-configuration-9",
    content: "Description"
  }, {
    heading: "log-configuration-9",
    content: "`NONE`"
  }, {
    heading: "log-configuration-9",
    content: "`0x0000`: Do not output any logs."
  }, {
    heading: "log-configuration-9",
    content: "`INFO`"
  }, {
    heading: "log-configuration-9",
    content: "`0x0001`: Output logs of levels `FATAL`, `ERROR`, `WARN`, and `INFO`. Best practice is to set the log level to this option."
  }, {
    heading: "log-configuration-9",
    content: "`WARN`"
  }, {
    heading: "log-configuration-9",
    content: "`0x0002`: Only output logs of levels `FATAL`, `ERROR`, and `WARN`."
  }, {
    heading: "log-configuration-9",
    content: "`ERROR`"
  }, {
    heading: "log-configuration-9",
    content: "`0x0004`: Only output logs of levels `FATAL` and `ERROR`."
  }, {
    heading: "log-configuration-9",
    content: "`FATAL`"
  }, {
    heading: "log-configuration-9",
    content: "`0x0008`: Only output logs at the `FATAL` level."
  }, {
    heading: "log-configuration-9",
    content: "When your app is released to production, set the log level to `INFO`."
  }, {
    heading: "reference-9",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference-9",
    content: "For firewall configuration, see firewall requirements"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "configure-the-client-instance",
    content: "Configure the client instance"
  }, {
    id: "geographical-area-configuration",
    content: "Geographical area configuration"
  }, {
    id: "proxy-configuration",
    content: "Proxy configuration"
  }, {
    id: "private-deployment-configuration",
    content: "Private deployment configuration"
  }, {
    id: "log-configuration",
    content: "Log configuration"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "understand-the-tech-1",
    content: "Understand the tech"
  }, {
    id: "prerequisites-1",
    content: "Prerequisites"
  }, {
    id: "configure-the-client-instance-1",
    content: "Configure the client instance"
  }, {
    id: "geographical-area-configuration-1",
    content: "Geographical area configuration"
  }, {
    id: "proxy-configuration-1",
    content: "Proxy configuration"
  }, {
    id: "private-deployment-configuration-1",
    content: "Private deployment configuration"
  }, {
    id: "connection-protocol",
    content: "Connection protocol"
  }, {
    id: "log-configuration-1",
    content: "Log configuration"
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
    id: "configure-the-client-instance-2",
    content: "Configure the client instance"
  }, {
    id: "geographical-area-configuration-2",
    content: "Geographical area configuration"
  }, {
    id: "proxy-configuration-2",
    content: "Proxy configuration"
  }, {
    id: "private-deployment-configuration-2",
    content: "Private deployment configuration"
  }, {
    id: "connection-protocol-1",
    content: "Connection protocol"
  }, {
    id: "log-configuration-2",
    content: "Log configuration"
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
    id: "configure-the-client-instance-3",
    content: "Configure the client instance"
  }, {
    id: "geographical-area-configuration-3",
    content: "Geographical area configuration"
  }, {
    id: "proxy-configuration-3",
    content: "Proxy configuration"
  }, {
    id: "private-deployment-configuration-3",
    content: "Private deployment configuration"
  }, {
    id: "connection-protocol-2",
    content: "Connection protocol"
  }, {
    id: "log-configuration-3",
    content: "Log configuration"
  }, {
    id: "reference-3",
    content: "Reference"
  }, {
    id: "understand-the-tech-4",
    content: "Understand the tech"
  }, {
    id: "prerequisites-4",
    content: "Prerequisites"
  }, {
    id: "configure-the-client-instance-4",
    content: "Configure the client instance"
  }, {
    id: "geographical-area-configuration-4",
    content: "Geographical area configuration"
  }, {
    id: "proxy-configuration-4",
    content: "Proxy configuration"
  }, {
    id: "private-deployment-configuration-4",
    content: "Private deployment configuration"
  }, {
    id: "connection-protocol-3",
    content: "Connection protocol"
  }, {
    id: "log-configuration-4",
    content: "Log configuration"
  }, {
    id: "reference-4",
    content: "Reference"
  }, {
    id: "understand-the-tech-5",
    content: "Understand the tech"
  }, {
    id: "prerequisites-5",
    content: "Prerequisites"
  }, {
    id: "configure-the-client-instance-5",
    content: "Configure the client instance"
  }, {
    id: "geographical-area-configuration-5",
    content: "Geographical area configuration"
  }, {
    id: "proxy-configuration-5",
    content: "Proxy configuration"
  }, {
    id: "connection-protocol-4",
    content: "Connection protocol"
  }, {
    id: "presence-timeout-configuration",
    content: "Presence timeout configuration"
  }, {
    id: "user-id-type-configuration",
    content: "User ID type configuration"
  }, {
    id: "log-configuration-5",
    content: "Log configuration"
  }, {
    id: "encryption-configuration",
    content: "Encryption configuration"
  }, {
    id: "complete-configuration-example",
    content: "Complete configuration example"
  }, {
    id: "reference-5",
    content: "Reference"
  }, {
    id: "understand-the-tech-6",
    content: "Understand the tech"
  }, {
    id: "prerequisites-6",
    content: "Prerequisites"
  }, {
    id: "configure-the-client-instance-6",
    content: "Configure the client instance"
  }, {
    id: "geographical-area-configuration-6",
    content: "Geographical area configuration"
  }, {
    id: "proxy-configuration-6",
    content: "Proxy configuration"
  }, {
    id: "private-deployment-configuration-5",
    content: "Private deployment configuration"
  }, {
    id: "connection-protocol-5",
    content: "Connection protocol"
  }, {
    id: "log-configuration-6",
    content: "Log configuration"
  }, {
    id: "reference-6",
    content: "Reference"
  }, {
    id: "understand-the-tech-7",
    content: "Understand the tech"
  }, {
    id: "prerequisites-7",
    content: "Prerequisites"
  }, {
    id: "configure-the-client-instance-7",
    content: "Configure the client instance"
  }, {
    id: "geographical-area-configuration-7",
    content: "Geographical area configuration"
  }, {
    id: "proxy-configuration-7",
    content: "Proxy configuration"
  }, {
    id: "private-deployment-configuration-6",
    content: "Private deployment configuration"
  }, {
    id: "connection-protocol-6",
    content: "Connection protocol"
  }, {
    id: "log-configuration-7",
    content: "Log configuration"
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
    id: "configure-the-client-instance-8",
    content: "Configure the client instance"
  }, {
    id: "geographical-area-configuration-8",
    content: "Geographical area configuration"
  }, {
    id: "private-deployment-configuration-7",
    content: "Private deployment configuration"
  }, {
    id: "connection-protocol-7",
    content: "Connection protocol"
  }, {
    id: "log-configuration-8",
    content: "Log configuration"
  }, {
    id: "reference-8",
    content: "Reference"
  }, {
    id: "understand-the-tech-9",
    content: "Understand the tech"
  }, {
    id: "prerequisites-9",
    content: "Prerequisites"
  }, {
    id: "configure-the-client-instance-9",
    content: "Configure the client instance"
  }, {
    id: "geographical-area-configuration-9",
    content: "Geographical area configuration"
  }, {
    id: "proxy-configuration-8",
    content: "Proxy configuration"
  }, {
    id: "log-configuration-9",
    content: "Log configuration"
  }, {
    id: "reference-9",
    content: "Reference"
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
  url: "#configure-the-client-instance",
  title: _jsx(_Fragment, {
    children: "Configure the client instance"
  })
}, {
  depth: 3,
  url: "#geographical-area-configuration",
  title: _jsx(_Fragment, {
    children: "Geographical area configuration"
  })
}, {
  depth: 3,
  url: "#proxy-configuration",
  title: _jsx(_Fragment, {
    children: "Proxy configuration"
  })
}, {
  depth: 3,
  url: "#private-deployment-configuration",
  title: _jsx(_Fragment, {
    children: "Private deployment configuration"
  })
}, {
  depth: 3,
  url: "#log-configuration",
  title: _jsx(_Fragment, {
    children: "Log configuration"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
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
  url: "#configure-the-client-instance-1",
  title: _jsx(_Fragment, {
    children: "Configure the client instance"
  })
}, {
  depth: 3,
  url: "#geographical-area-configuration-1",
  title: _jsx(_Fragment, {
    children: "Geographical area configuration"
  })
}, {
  depth: 3,
  url: "#proxy-configuration-1",
  title: _jsx(_Fragment, {
    children: "Proxy configuration"
  })
}, {
  depth: 3,
  url: "#private-deployment-configuration-1",
  title: _jsx(_Fragment, {
    children: "Private deployment configuration"
  })
}, {
  depth: 3,
  url: "#connection-protocol",
  title: _jsx(_Fragment, {
    children: "Connection protocol"
  })
}, {
  depth: 3,
  url: "#log-configuration-1",
  title: _jsx(_Fragment, {
    children: "Log configuration"
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
  url: "#configure-the-client-instance-2",
  title: _jsx(_Fragment, {
    children: "Configure the client instance"
  })
}, {
  depth: 3,
  url: "#geographical-area-configuration-2",
  title: _jsx(_Fragment, {
    children: "Geographical area configuration"
  })
}, {
  depth: 3,
  url: "#proxy-configuration-2",
  title: _jsx(_Fragment, {
    children: "Proxy configuration"
  })
}, {
  depth: 3,
  url: "#private-deployment-configuration-2",
  title: _jsx(_Fragment, {
    children: "Private deployment configuration"
  })
}, {
  depth: 3,
  url: "#connection-protocol-1",
  title: _jsx(_Fragment, {
    children: "Connection protocol"
  })
}, {
  depth: 3,
  url: "#log-configuration-2",
  title: _jsx(_Fragment, {
    children: "Log configuration"
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
  url: "#configure-the-client-instance-3",
  title: _jsx(_Fragment, {
    children: "Configure the client instance"
  })
}, {
  depth: 3,
  url: "#geographical-area-configuration-3",
  title: _jsx(_Fragment, {
    children: "Geographical area configuration"
  })
}, {
  depth: 3,
  url: "#proxy-configuration-3",
  title: _jsx(_Fragment, {
    children: "Proxy configuration"
  })
}, {
  depth: 3,
  url: "#private-deployment-configuration-3",
  title: _jsx(_Fragment, {
    children: "Private deployment configuration"
  })
}, {
  depth: 3,
  url: "#connection-protocol-2",
  title: _jsx(_Fragment, {
    children: "Connection protocol"
  })
}, {
  depth: 3,
  url: "#log-configuration-3",
  title: _jsx(_Fragment, {
    children: "Log configuration"
  })
}, {
  depth: 2,
  url: "#reference-3",
  title: _jsx(_Fragment, {
    children: "Reference"
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
  url: "#configure-the-client-instance-4",
  title: _jsx(_Fragment, {
    children: "Configure the client instance"
  })
}, {
  depth: 3,
  url: "#geographical-area-configuration-4",
  title: _jsx(_Fragment, {
    children: "Geographical area configuration"
  })
}, {
  depth: 3,
  url: "#proxy-configuration-4",
  title: _jsx(_Fragment, {
    children: "Proxy configuration"
  })
}, {
  depth: 3,
  url: "#private-deployment-configuration-4",
  title: _jsx(_Fragment, {
    children: "Private deployment configuration"
  })
}, {
  depth: 3,
  url: "#connection-protocol-3",
  title: _jsx(_Fragment, {
    children: "Connection protocol"
  })
}, {
  depth: 3,
  url: "#log-configuration-4",
  title: _jsx(_Fragment, {
    children: "Log configuration"
  })
}, {
  depth: 2,
  url: "#reference-4",
  title: _jsx(_Fragment, {
    children: "Reference"
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
  url: "#configure-the-client-instance-5",
  title: _jsx(_Fragment, {
    children: "Configure the client instance"
  })
}, {
  depth: 3,
  url: "#geographical-area-configuration-5",
  title: _jsx(_Fragment, {
    children: "Geographical area configuration"
  })
}, {
  depth: 3,
  url: "#proxy-configuration-5",
  title: _jsx(_Fragment, {
    children: "Proxy configuration"
  })
}, {
  depth: 3,
  url: "#connection-protocol-4",
  title: _jsx(_Fragment, {
    children: "Connection protocol"
  })
}, {
  depth: 3,
  url: "#presence-timeout-configuration",
  title: _jsx(_Fragment, {
    children: "Presence timeout configuration"
  })
}, {
  depth: 3,
  url: "#user-id-type-configuration",
  title: _jsx(_Fragment, {
    children: "User ID type configuration"
  })
}, {
  depth: 3,
  url: "#log-configuration-5",
  title: _jsx(_Fragment, {
    children: "Log configuration"
  })
}, {
  depth: 3,
  url: "#encryption-configuration",
  title: _jsx(_Fragment, {
    children: "Encryption configuration"
  })
}, {
  depth: 3,
  url: "#complete-configuration-example",
  title: _jsx(_Fragment, {
    children: "Complete configuration example"
  })
}, {
  depth: 2,
  url: "#reference-5",
  title: _jsx(_Fragment, {
    children: "Reference"
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
  url: "#configure-the-client-instance-6",
  title: _jsx(_Fragment, {
    children: "Configure the client instance"
  })
}, {
  depth: 3,
  url: "#geographical-area-configuration-6",
  title: _jsx(_Fragment, {
    children: "Geographical area configuration"
  })
}, {
  depth: 3,
  url: "#proxy-configuration-6",
  title: _jsx(_Fragment, {
    children: "Proxy configuration"
  })
}, {
  depth: 3,
  url: "#private-deployment-configuration-5",
  title: _jsx(_Fragment, {
    children: "Private deployment configuration"
  })
}, {
  depth: 3,
  url: "#connection-protocol-5",
  title: _jsx(_Fragment, {
    children: "Connection protocol"
  })
}, {
  depth: 3,
  url: "#log-configuration-6",
  title: _jsx(_Fragment, {
    children: "Log configuration"
  })
}, {
  depth: 2,
  url: "#reference-6",
  title: _jsx(_Fragment, {
    children: "Reference"
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
  url: "#configure-the-client-instance-7",
  title: _jsx(_Fragment, {
    children: "Configure the client instance"
  })
}, {
  depth: 3,
  url: "#geographical-area-configuration-7",
  title: _jsx(_Fragment, {
    children: "Geographical area configuration"
  })
}, {
  depth: 3,
  url: "#proxy-configuration-7",
  title: _jsx(_Fragment, {
    children: "Proxy configuration"
  })
}, {
  depth: 3,
  url: "#private-deployment-configuration-6",
  title: _jsx(_Fragment, {
    children: "Private deployment configuration"
  })
}, {
  depth: 3,
  url: "#connection-protocol-6",
  title: _jsx(_Fragment, {
    children: "Connection protocol"
  })
}, {
  depth: 3,
  url: "#log-configuration-7",
  title: _jsx(_Fragment, {
    children: "Log configuration"
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
  url: "#configure-the-client-instance-8",
  title: _jsx(_Fragment, {
    children: "Configure the client instance"
  })
}, {
  depth: 3,
  url: "#geographical-area-configuration-8",
  title: _jsx(_Fragment, {
    children: "Geographical area configuration"
  })
}, {
  depth: 3,
  url: "#private-deployment-configuration-7",
  title: _jsx(_Fragment, {
    children: "Private deployment configuration"
  })
}, {
  depth: 3,
  url: "#connection-protocol-7",
  title: _jsx(_Fragment, {
    children: "Connection protocol"
  })
}, {
  depth: 3,
  url: "#log-configuration-8",
  title: _jsx(_Fragment, {
    children: "Log configuration"
  })
}, {
  depth: 2,
  url: "#reference-8",
  title: _jsx(_Fragment, {
    children: "Reference"
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
  url: "#configure-the-client-instance-9",
  title: _jsx(_Fragment, {
    children: "Configure the client instance"
  })
}, {
  depth: 3,
  url: "#geographical-area-configuration-9",
  title: _jsx(_Fragment, {
    children: "Geographical area configuration"
  })
}, {
  depth: 3,
  url: "#proxy-configuration-8",
  title: _jsx(_Fragment, {
    children: "Proxy configuration"
  })
}, {
  depth: 3,
  url: "#log-configuration-9",
  title: _jsx(_Fragment, {
    children: "Log configuration"
  })
}, {
  depth: 2,
  url: "#reference-9",
  title: _jsx(_Fragment, {
    children: "Reference"
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle, CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  if (!CodeBlockTab)
    _missingMdxReference("CodeBlockTab", true);
  if (!CodeBlockTabs)
    _missingMdxReference("CodeBlockTabs", true);
  if (!CodeBlockTabsList)
    _missingMdxReference("CodeBlockTabsList", true);
  if (!CodeBlockTabsTrigger)
    _missingMdxReference("CodeBlockTabsTrigger", true);
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
        children: "Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements."
      }), _jsx(_components.h2, {
        id: "understand-the-tech",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "When initializing a Signaling client instance, configure any or all of the following features:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Geographical area access"
            }), `
When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Enable proxy connection"
            }), `
You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Private deployment"
            }), `
Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Logging"
            }), `
Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Data encryption"
            }), `
Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see `, _jsx(_components.a, {
              href: "../secure-your-app-and-data/data-encryption",
              children: "Data encryption"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the ", _jsx(_components.a, {
          href: "../../index",
          children: "SDK quickstart"
        }), " page."]
      }), _jsx(_components.h2, {
        id: "configure-the-client-instance",
        children: "Configure the client instance"
      }), _jsx(_components.p, {
        children: "This section explains how to set up and customize various features when you initialize a Signaling client instance."
      }), _jsx(_components.h3, {
        id: "geographical-area-configuration",
        children: "Geographical area configuration"
      }), _jsx(_components.p, {
        children: "To specify a geographical area for Agora SDRTN® connections, refer to the following code:"
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
      }), _jsx(_components.h3, {
        id: "proxy-configuration",
        children: "Proxy configuration"
      }), _jsx(_components.p, {
        children: "In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization."
      }), _jsxs(_components.p, {
        children: ["Since v2.3.0, the SDK no longer automatically falls back to Cloud Proxy. To use Cloud Proxy, you must explicitly set ", _jsx(_components.code, {
          children: "cloudProxy"
        }), " to ", _jsx(_components.code, {
          children: "true"
        }), " when initializing the RTM instance. Agora recommends that you give end users an option to enable Cloud Proxy based on your business needs."]
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " { "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "RTM"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " } "
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
                children: " AgoraRTM;"
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
                children: " appId"
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
                children: ' "your_appId"'
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
                children: " userId"
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
                children: ' "your_userId"'
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
                children: " rtmConfig"
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
                children: " { cloudProxy: "
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
                children: " };"
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
                children: " rtm"
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
                children: " RTM"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(appId, userId, rtmConfig);"
              })]
            })]
          })
        })
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "This feature is only available for Message channels and User channels."
          })
        })
      }), _jsx(_components.h3, {
        id: "private-deployment-configuration",
        children: "Private deployment configuration"
      }), _jsxs(_components.p, {
        children: ["Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version ", _jsx(_components.code, {
          children: "2.2.0"
        }), ", Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems."]
      }), _jsxs(_components.p, {
        children: ["Signaling provides ", _jsx(_components.code, {
          children: "MESSAGE"
        }), " and ", _jsx(_components.code, {
          children: "STREAM"
        }), " services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:"]
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
                children: " appId"
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
                children: ' "your_appId"'
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
                children: " userId"
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
                children: ' "your_userId"'
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
                children: " rtmConfig"
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
                children: " {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    privateConfig: {"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        serviceType: ["
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"MESSAGE"'
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
                children: '"STREAM"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "], "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Service type for private deployment"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        accessPointHosts: ["
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"private.mynet.com"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "], "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Private deployment server list, only domain name is supported"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        domainMode: "
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
                children: "};"
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
                children: " rtm"
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
                children: " RTM"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(appId, userId, rtmConfig);"
              })]
            })]
          })
        })
      }), _jsxs(CalloutContainer, {
        type: "warning",
        children: [_jsx(CalloutTitle, {
          children: "Note"
        }), _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["To upgrade the privately deployed Signaling Web SDK to v2.2.4 or later, set ", _jsx(_components.code, {
              children: "domainMode"
            }), " to ", _jsx(_components.code, {
              children: "2"
            }), " for compatibility. If you omit this parameter or use the default value ", _jsx(_components.code, {
              children: "1"
            }), ", the SDK may fail to connect to the Signaling server."]
          })
        })]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["To deploy a private environment, you need to set up the backend service. For assistance, please contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "technical support"
            }), "."]
          })
        })
      }), _jsx(_components.h3, {
        id: "log-configuration",
        children: "Log configuration"
      }), _jsxs(_components.p, {
        children: ["In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information level by configuring ", _jsx(_components.code, {
          children: "logLevel"
        }), " when initializing the Signaling client instance. You can view the log information in the browser console."]
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " { "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "RTM"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " } "
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
                children: " AgoraRTM;"
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
                children: " appId"
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
                children: ' "your_appId"'
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
                children: " userId"
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
                children: ' "your_userId"'
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
                children: " rtmConfig"
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
                children: " { logLevel : "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"debug"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " };"
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
                children: " rtm"
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
                children: " RTM"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(appId, userId, rtmConfig);"
              })]
            })]
          })
        })
      }), _jsx(_components.p, {
        children: "Choose the log level from the following:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Enumeration Value"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "debug"
              })
            }), _jsx(_components.td, {
              children: "Output all logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "info"
              })
            }), _jsxs(_components.td, {
              children: ["Output logs of level ", _jsx(_components.code, {
                children: "error"
              }), ", ", _jsx(_components.code, {
                children: "warn"
              }), ", and ", _jsx(_components.code, {
                children: "info"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "warn"
              })
            }), _jsxs(_components.td, {
              children: ["Output logs of level ", _jsx(_components.code, {
                children: "error"
              }), ", and ", _jsx(_components.code, {
                children: "warn"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "error"
              })
            }), _jsxs(_components.td, {
              children: ["Output logs of level ", _jsx(_components.code, {
                children: "error"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "none"
              })
            }), _jsx(_components.td, {
              children: "No log output."
            })]
          })]
        })]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["When your app is released to production, set the log level to ", _jsx(_components.code, {
              children: "info"
            }), "."]
          })
        })
      }), _jsx(_components.h2, {
        id: "reference",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsxs(_components.p, {
        children: ["For firewall configuration, see ", _jsx(_components.a, {
          href: "../../reference/firewall",
          children: "firewall requirements"
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
      }), _jsx(_components.p, {
        children: "Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-1",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "When initializing a Signaling client instance, configure any or all of the following features:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Geographical area access"
            }), `
When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Enable proxy connection"
            }), `
You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Private deployment"
            }), `
Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Logging"
            }), `
Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Data encryption"
            }), `
Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see `, _jsx(_components.a, {
              href: "../secure-your-app-and-data/data-encryption",
              children: "Data encryption"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-1",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the ", _jsx(_components.a, {
          href: "../../index",
          children: "SDK quickstart"
        }), " page."]
      }), _jsx(_components.h2, {
        id: "configure-the-client-instance-1",
        children: "Configure the client instance"
      }), _jsx(_components.p, {
        children: "This section explains how to set up and customize various features when you initialize a Signaling client instance."
      }), _jsx(_components.h3, {
        id: "geographical-area-configuration-1",
        children: "Geographical area configuration"
      }), _jsx(_components.p, {
        children: "To specify a geographical area for Agora SDRTN® connections, refer to the following code:"
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
      }), _jsx(_components.h3, {
        id: "proxy-configuration-1",
        children: "Proxy configuration"
      }), _jsx(_components.p, {
        children: "In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization."
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
                    children: "RtmProxyConfig proxyConfig "
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
                    children: " RtmProxyConfig"
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
                    children: "proxyConfig."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setProxyType"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(RtmProxyType.HTTP);"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "proxyConfig."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setServer"
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
                    children: '"your_proxy_server_ip"'
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
                    children: "proxyConfig."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setPort"
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
                    children: "8080"
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
                    children: "proxyConfig."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setAccount"
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
                    children: '"your_proxy_account"'
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
                    children: "proxyConfig."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setPassword"
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
                    children: '"your_proxy_password"'
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
`, _jsxs(_components.span, {
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
                    children: "proxyConfig"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(proxyConfig)"
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
                    children: " proxyConfig "
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
                    children: " RtmProxyConfig"
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    setProxyType"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(RtmProxyType.HTTP)"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    server "
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
                    children: ' "your_proxy_server_ip"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    port "
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
                    children: " 8080"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    account "
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
                    children: ' "your_proxy_account"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    password "
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
                    children: ' "your_proxy_password"'
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
                    children: "proxyConfig"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(proxyConfig)"
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
      }), _jsxs(CalloutContainer, {
        type: "warning",
        children: [_jsx(CalloutTitle, {
          children: "Caution"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client."
          })
        })]
      }), _jsx(_components.h3, {
        id: "private-deployment-configuration-1",
        children: "Private deployment configuration"
      }), _jsxs(_components.p, {
        children: ["Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version ", _jsx(_components.code, {
          children: "2.2.0"
        }), ", Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems."]
      }), _jsxs(_components.p, {
        children: ["Signaling provides ", _jsx(_components.code, {
          children: "MESSAGE"
        }), " and ", _jsx(_components.code, {
          children: "STREAM"
        }), " services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:"]
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
                    children: "ArrayList<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "String"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "> hosts "
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
                    children: " ArrayList<>();"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "hosts."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "add"
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
                    children: '"x.x.x.x"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "); "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// your access point hosts list."
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "RtmPrivateConfig privateConfig "
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
                    children: " RtmPrivateConfig"
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
                    children: "privateConfig."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setServiceType"
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
                    children: "(RtmServiceType.MESSAGE, RtmServiceType.STREAM));"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "privateConfig."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setAccessPointHosts"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(hosts);"
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
                    children: "privateConfig"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(privateConfig)"
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
                    children: " hosts "
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
                    children: " arrayListOf"
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
                    children: '"x.x.x.x"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ") "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// your access point hosts list."
                  })]
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
                    children: " privateConfig "
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
                    children: " RtmPrivateConfig"
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    setServiceType"
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
                    children: "(RtmServiceType.MESSAGE, RtmServiceType.STREAM))"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    accessPointHosts "
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
                    children: " hosts"
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
                    children: "privateConfig"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(privateConfig)"
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
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["To deploy a private environment, you need to set up the backend service. For assistance, please contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "technical support"
            }), "."]
          })
        })
      }), _jsx(_components.h3, {
        id: "connection-protocol",
        children: "Connection protocol"
      }), _jsxs(_components.p, {
        children: ["To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each service (", _jsx(_components.code, {
          children: "MESSAGE"
        }), " service and ", _jsx(_components.code, {
          children: "STREAM"
        }), " service) when connecting to the edge server. By default, these links use the TCP and UDP protocols, respectively. This design ensures that network issues on one link do not affect the overall transmission. Compared to other WebSocket-based message transmission solutions, RTM's redundant link design maximizes transmission stability and message delivery rate."]
      }), _jsxs(_components.p, {
        children: ["In some cases, users may find that their network does not support UDP port transmission, either temporarily or permanently. To ensure the dual-link design operates effectively, the SDK allows users to configure both links to use the TCP protocol. This can be done by setting the ", _jsx(_components.code, {
          children: "protocolType"
        }), " field in the ", _jsx(_components.code, {
          children: "RtmConfig"
        }), ". Below is a code example that configures both links to use the TCP protocol:"]
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
                    children: "protocolType"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(RtmProtocolType.TCP_ONLY)"
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
                    children: "protocolType"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(RtmProtocolType.TCP_ONLY)"
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
      }), _jsxs(CalloutContainer, {
        type: "info",
        children: [_jsx(CalloutTitle, {
          children: "Info"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "The SDK does not support configuring both links to use the UDP protocol simultaneously."
          })
        })]
      }), _jsx(_components.h3, {
        id: "log-configuration-1",
        children: "Log configuration"
      }), _jsxs(_components.p, {
        children: ["In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information level by configuring ", _jsx(_components.code, {
          children: "RtmLogLevel"
        }), " when initializing the Signaling client instance."]
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
                    children: "RtmLogConfig logConfig "
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
                    children: " RtmLogConfig"
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
                    children: "// Set log file path"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "logConfig."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setFilePath"
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
                    children: '"./logfile/"'
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
                    children: "// Set log file size"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "logConfig."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setFileSize"
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
                    children: "512"
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
                    children: "// Set log report level"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "logConfig."
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
                    children: "(RtmLogLevel.INFO);"
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
                    children: "// Replace your_appId with your App ID and your_userId with your User ID"
                  })
                }), `
`, _jsxs(_components.span, {
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
                    children: '"your_appId"'
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
                    children: '"your_userId"'
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
                    children: "logConfig"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(logConfig) "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Set log config"
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
                    children: "// Initialize the client instance"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    mRtmClient "
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
                    children: " RtmClient."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "create"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(rtmConfig);"
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
                    children: "(Exception "
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    log"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(INFO, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"create rtm client failed with exception: "'
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
                    children: " e."
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
                    children: "}"
                  })
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
                    children: " logConfig "
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
                    children: " RtmLogConfig"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    filePath "
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
                    children: ' "./logfile/"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: " // Set log file path"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    setFileSize"
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
                    children: "512"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ") "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Set log file size"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    setLevel"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(RtmLogLevel.INFO) "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Set log report level"
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
                    children: "// Replace your_appId with your App ID and your_userId with your User ID"
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
                    children: '"your_appId"'
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
                    children: '"your_userId"'
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
                    children: "logConfig"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(logConfig) "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Set log config"
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
                    children: "// Initialize the client instance"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    mRtmClient "
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
                    children: " RtmClient."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "create"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(rtmConfig)"
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
                    children: " (e: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "Exception"
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
                    children: "    log"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(INFO, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"create rtm client failed with exception: "'
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
                    children: " e."
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
                    children: "())"
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
          })
        })]
      }), _jsx(_components.p, {
        children: "Choose the log level from the following:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Enumeration value"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "NONE"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0000"
              }), ": Do not output any logs."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "INFO"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0001"
              }), ": Output logs of levels ", _jsx(_components.code, {
                children: "FATAL"
              }), ", ", _jsx(_components.code, {
                children: "ERROR"
              }), ", ", _jsx(_components.code, {
                children: "WARN"
              }), ", and ", _jsx(_components.code, {
                children: "INFO"
              }), ". Best practice is to set the log level to this option."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "WARN"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0002"
              }), ": Only output logs of levels ", _jsx(_components.code, {
                children: "FATAL"
              }), ", ", _jsx(_components.code, {
                children: "ERROR"
              }), ", and ", _jsx(_components.code, {
                children: "WARN"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "ERROR"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0004"
              }), ": Only output logs of levels ", _jsx(_components.code, {
                children: "FATAL"
              }), " and ", _jsx(_components.code, {
                children: "ERROR"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "FATAL"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0008"
              }), ": Only output logs at the ", _jsx(_components.code, {
                children: "FATAL"
              }), " level."]
            })]
          })]
        })]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["When your app is released to production, set the log level to ", _jsx(_components.code, {
              children: "INFO"
            }), "."]
          })
        })
      }), _jsx(_components.h2, {
        id: "reference-1",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsxs(_components.p, {
        children: ["For firewall configuration, see ", _jsx(_components.a, {
          href: "../../reference/firewall",
          children: "firewall requirements"
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
      }), _jsx(_components.p, {
        children: "Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-2",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "When initializing a Signaling client instance, configure any or all of the following features:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Geographical area access"
            }), `
When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Enable proxy connection"
            }), `
You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Private deployment"
            }), `
Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Logging"
            }), `
Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Data encryption"
            }), `
Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see `, _jsx(_components.a, {
              href: "../secure-your-app-and-data/data-encryption",
              children: "Data encryption"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-2",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the ", _jsx(_components.a, {
          href: "../../index",
          children: "SDK quickstart"
        }), " page."]
      }), _jsx(_components.h2, {
        id: "configure-the-client-instance-2",
        children: "Configure the client instance"
      }), _jsx(_components.p, {
        children: "This section explains how to set up and customize various features when you initialize a Signaling client instance."
      }), _jsx(_components.h3, {
        id: "geographical-area-configuration-2",
        children: "Geographical area configuration"
      }), _jsx(_components.p, {
        children: "To specify a geographical area for Agora SDRTN® connections, refer to the following code:"
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
                    children: '"yourAppId"'
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
                    children: '"yourUserId"'
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
                    children: " [.CN, .NA]"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "AgoraRtmClientConfig "
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " [[AgoraRtmClientConfig "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "initWithAppId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"your_appid"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " userId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"your_userid"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "rtm_cfg.areaCode "
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
                    children: " AgoraRtmAreaCodeNA;"
                  })]
                })]
              })
            })
          })
        })]
      }), _jsx(_components.h3, {
        id: "proxy-configuration-2",
        children: "Proxy configuration"
      }), _jsx(_components.p, {
        children: "In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization."
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "let"
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
                    children: '"your_appid"'
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
                    children: '"your_userid"'
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "let"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " proxyConfig "
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
                    children: " AgoraRtmProxyConfig"
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
                    children: "proxyConfig.proxyType "
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
                    children: " .http"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "proxyConfig.server "
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
                    children: ' "your_proxy_server_ip"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "proxyConfig.port "
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
                    children: " 8080"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "proxyConfig.account "
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
                    children: ' "your_proxy_account"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "proxyConfig.password "
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
                    children: ' "your_proxy_password"'
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
                    children: "rtmConfig.proxyConfig "
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
                    children: " proxyConfig"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "AgoraRtmClientConfig"
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
                    children: " rtm_config "
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
                    children: " [[AgoraRtmClientConfig "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "initWithAppId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"your_appid"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " userId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"your_userid"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
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
                    children: "AgoraRtmProxyConfig"
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
                    children: " proxy_config "
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
                    children: " [[AgoraRtmProxyConfig "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "init"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "proxy_config.proxyType "
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
                    children: " AgoraRtmProxyTypeHttp;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "proxy_config.server "
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
                    children: ' @"your_proxy_server_ip"'
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
                    children: "proxy_config.port "
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
                    children: " 8080"
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
                    children: "proxy_config.account "
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
                    children: ' @"your_proxy_account"'
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
                    children: "proxy_config.password "
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
                    children: ' @"your_proxy_password"'
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
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "rtm_config.proxyConfig "
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
                    children: " proxy_config;"
                  })]
                })]
              })
            })
          })
        })]
      }), _jsxs(CalloutContainer, {
        type: "warning",
        children: [_jsx(CalloutTitle, {
          children: "Caution"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client."
          })
        })]
      }), _jsx(_components.h3, {
        id: "private-deployment-configuration-2",
        children: "Private deployment configuration"
      }), _jsxs(_components.p, {
        children: ["Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version ", _jsx(_components.code, {
          children: "2.2.0"
        }), ", Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems."]
      }), _jsxs(_components.p, {
        children: ["Signaling provides ", _jsx(_components.code, {
          children: "MESSAGE"
        }), " and ", _jsx(_components.code, {
          children: "STREAM"
        }), " services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:"]
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "let"
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
                    children: '"your_appid"'
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
                    children: '"your_userid"'
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "let"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " privateConfig "
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
                    children: " AgoraRtmPrivateConfig"
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
                    children: "privateConfig.accessPointHosts "
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
                    children: " ["
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"your_private_server"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "]"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "privateConfig.serviceType "
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
                    children: " [.stream, .message]"
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
                    children: "rtmConfig.privateConfig "
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
                    children: " privateConfig"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "AgoraRtmClientConfig"
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
                    children: " rtm_config "
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
                    children: " [[AgoraRtmClientConfig "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "initWithAppId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"your_appid"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " userId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"your_userid"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
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
                    children: "AgoraRtmPrivateConfig"
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
                    children: " private_config "
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
                    children: " [[AgoraRtmPrivateConfig "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "init"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "private_config.accessPointHosts "
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
                    children: " @["
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"your_private_server"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "private_config.serviceType "
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
                    children: " AgoraRtmServiceTypeStream "
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
                    children: " AgoraRtmServiceTypeMessage;"
                  })]
                })]
              })
            })
          })
        })]
      }), _jsxs(CalloutContainer, {
        type: "info",
        children: [_jsx(CalloutTitle, {
          children: "Info"
        }), _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["To deploy a private environment, you need to set up the backend service. For assistance, please contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "technical support"
            }), "."]
          })
        })]
      }), _jsx(_components.h3, {
        id: "connection-protocol-1",
        children: "Connection protocol"
      }), _jsxs(_components.p, {
        children: ["To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each channel (", _jsx(_components.code, {
          children: "MESSAGE"
        }), " service and ", _jsx(_components.code, {
          children: "STREAM"
        }), " service) when connecting to the edge server. By default, these links use the TCP and UDP protocols respectively. This design ensures that network issues in one link do not affect transmission performance. Compared to other WebSocket-based message transmission solutions, RTM's redundant link design maximizes transmission stability and message arrival rates."]
      }), _jsxs(_components.p, {
        children: ["In some cases, users may find that their network does not support UDP port transmission, either temporarily or permanently. To ensure the dual-link design functions effectively, the SDK allows users to configure both links to use the TCP protocol by setting the ", _jsx(_components.code, {
          children: "protocolType"
        }), " field in the ", _jsx(_components.code, {
          children: "AgoraRtmClientConfig"
        }), ". Here is an example of configuring both links to use the TCP protocol:"]
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "let"
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
                    children: '"your_appid"'
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
                    children: '"your_userid"'
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
                    children: "rtmConfig.protocolType "
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
                    children: " .tcpOnly"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "AgoraRtmClientConfig"
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
                    children: " rtm_config "
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
                    children: " [[AgoraRtmClientConfig "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "initWithAppId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"your_appid"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " userId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"your_userid"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "rtm_config.protocolType "
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
                    children: " AgoraRtmProtocolTypeTcpOnly;"
                  })]
                })]
              })
            })
          })
        })]
      }), _jsxs(CalloutContainer, {
        type: "info",
        children: [_jsx(CalloutTitle, {
          children: "Info"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "The SDK does not support configuring both links to use the UDP protocol simultaneously."
          })
        })]
      }), _jsx(_components.h3, {
        id: "log-configuration-2",
        children: "Log configuration"
      }), _jsx(_components.p, {
        children: "In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable SDK log output and configure the log level and file size when initializing the Signaling client instance."
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "do"
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
                    children: " logConfig "
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
                    children: " AgoraRtmLogConfig"
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
                    children: "    logConfig.level "
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
                    children: " ."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "error"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    logConfig.filePath "
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
                    children: ' "your_path"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    logConfig.fileSizeInKB "
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
                    children: " 512"
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
                    children: "    let"
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
                    children: '"your_appid"'
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
                    children: '"your_userid"'
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
                    children: "    rtmConfig.logConfig "
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
                    children: " logConfig"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // Initializing the RTM client"
                  })
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
                    children: " rtmClient "
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
                    children: " try"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " AgoraRtmClientKit"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(rtmConfig, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "delegate"
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
                    children: "nil"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    if"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " rtmClient "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "!="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " nil"
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
                    children: "        print"
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
                    children: '"RTM Client initialized successfully!"'
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " let"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " error"
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
                    children: "    print"
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
                    children: '"Failed to initialize RTM client. Error: '
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "\\\\"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '(error)"'
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
              icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "AgoraRtmClientConfig"
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
                    children: " rtm_cfg "
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
                    children: " [[AgoraRtmClientConfig "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "initWithAppId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"your_appid"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " userId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"your_userid"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
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
                    children: "// set log config"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "AgoraRtmLogConfig"
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
                    children: " log_cfg "
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
                    children: " [[AgoraRtmLogConfig "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "init"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "log_cfg.level"
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
                    children: " AgoraRtmLogLevelError;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "log_cfg.filePath"
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
                    children: ' @"your_path"'
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
                    children: "log_cfg.fileSizeInKB "
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
                    children: " 512"
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
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "rtm_cfg.logConfig "
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
                    children: " log_cfg;"
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
                    children: "NSError"
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
                    children: " initError "
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
                    children: " nil"
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
                    children: "AgoraRtmClientKit"
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
                    children: " rtm "
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
                    children: " [[AgoraRtmClientKit "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "initWithConfig:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "rtm_cfg "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "delegate:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "handler "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "error:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "&"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "initError];"
                  })]
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
                    children: " (rtm "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "!="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " nil"
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "    NSLog"
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
                    children: '@"init rtm success!!"'
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "    NSLog"
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
                    children: '@"init rtm failed!!"'
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
          })
        })]
      }), _jsx(_components.p, {
        children: "Choose the log level from the following:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Swift"
            }), _jsx(_components.th, {
              children: "Objective-C"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "none"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "AgoraRtmLogLevelNone"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0000"
              }), ": Do not output any logs."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "info"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "AgoraRtmLogLevelInfo"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0001"
              }), ": Output logs of levels ", _jsx(_components.code, {
                children: "fatal"
              }), ", ", _jsx(_components.code, {
                children: "error"
              }), ", ", _jsx(_components.code, {
                children: "warn"
              }), ", and ", _jsx(_components.code, {
                children: "info"
              }), ". Best practice is to set the log level to this option."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "warn"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "AgoraRtmLogLevelWarn"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0002"
              }), ": Only output logs of levels ", _jsx(_components.code, {
                children: "fatal"
              }), ", ", _jsx(_components.code, {
                children: "error"
              }), ", and ", _jsx(_components.code, {
                children: "warn"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "error"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "AgoraRtmLogLevelError"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0004"
              }), ": Only output logs of levels ", _jsx(_components.code, {
                children: "fatal"
              }), " and ", _jsx(_components.code, {
                children: "error"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "fatal"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "AgoraRtmLogLevelFatal"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0008"
              }), ": Only output logs at the ", _jsx(_components.code, {
                children: "fatal"
              }), " level."]
            })]
          })]
        })]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["When you release your app to production, set the log level to ", _jsx(_components.code, {
              children: "info"
            }), " in Swift or ", _jsx(_components.code, {
              children: "AgoraRtmLogLevelInfo"
            }), " in Objective-C."]
          })
        })
      }), _jsx(_components.h2, {
        id: "reference-2",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsxs(_components.p, {
        children: ["For firewall configuration, see ", _jsx(_components.a, {
          href: "../../reference/firewall",
          children: "firewall requirements"
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
        children: "Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-3",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "When initializing a Signaling client instance, configure any or all of the following features:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Geographical area access"
            }), `
When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Enable proxy connection"
            }), `
You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Private deployment"
            }), `
Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Logging"
            }), `
Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Data encryption"
            }), `
Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see `, _jsx(_components.a, {
              href: "../secure-your-app-and-data/data-encryption",
              children: "Data encryption"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-3",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the ", _jsx(_components.a, {
          href: "../../index",
          children: "SDK quickstart"
        }), " page."]
      }), _jsx(_components.h2, {
        id: "configure-the-client-instance-3",
        children: "Configure the client instance"
      }), _jsx(_components.p, {
        children: "This section explains how to set up and customize various features when you initialize a Signaling client instance."
      }), _jsx(_components.h3, {
        id: "geographical-area-configuration-3",
        children: "Geographical area configuration"
      }), _jsx(_components.p, {
        children: "To specify a geographical area for Agora SDRTN® connections, refer to the following code:"
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
                    children: '"yourAppId"'
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
                    children: '"yourUserId"'
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
                    children: " [.CN, .NA]"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "AgoraRtmClientConfig "
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " [[AgoraRtmClientConfig "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "initWithAppId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"your_appid"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " userId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"your_userid"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "rtm_cfg.areaCode "
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
                    children: " AgoraRtmAreaCodeNA;"
                  })]
                })]
              })
            })
          })
        })]
      }), _jsx(_components.h3, {
        id: "proxy-configuration-3",
        children: "Proxy configuration"
      }), _jsx(_components.p, {
        children: "In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization."
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "let"
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
                    children: '"your_appid"'
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
                    children: '"your_userid"'
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "let"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " proxyConfig "
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
                    children: " AgoraRtmProxyConfig"
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
                    children: "proxyConfig.proxyType "
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
                    children: " .http"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "proxyConfig.server "
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
                    children: ' "your_proxy_server_ip"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "proxyConfig.port "
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
                    children: " 8080"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "proxyConfig.account "
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
                    children: ' "your_proxy_account"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "proxyConfig.password "
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
                    children: ' "your_proxy_password"'
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
                    children: "rtmConfig.proxyConfig "
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
                    children: " proxyConfig"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "AgoraRtmClientConfig"
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
                    children: " rtm_config "
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
                    children: " [[AgoraRtmClientConfig "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "initWithAppId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"your_appid"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " userId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"your_userid"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
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
                    children: "AgoraRtmProxyConfig"
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
                    children: " proxy_config "
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
                    children: " [[AgoraRtmProxyConfig "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "init"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "proxy_config.proxyType "
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
                    children: " AgoraRtmProxyTypeHttp;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "proxy_config.server "
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
                    children: ' @"your_proxy_server_ip"'
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
                    children: "proxy_config.port "
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
                    children: " 8080"
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
                    children: "proxy_config.account "
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
                    children: ' @"your_proxy_account"'
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
                    children: "proxy_config.password "
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
                    children: ' @"your_proxy_password"'
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
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "rtm_config.proxyConfig "
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
                    children: " proxy_config;"
                  })]
                })]
              })
            })
          })
        })]
      }), _jsxs(CalloutContainer, {
        type: "warning",
        children: [_jsx(CalloutTitle, {
          children: "Caution"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client."
          })
        })]
      }), _jsx(_components.h3, {
        id: "private-deployment-configuration-3",
        children: "Private deployment configuration"
      }), _jsxs(_components.p, {
        children: ["Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version ", _jsx(_components.code, {
          children: "2.2.0"
        }), ", Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems."]
      }), _jsxs(_components.p, {
        children: ["Signaling provides ", _jsx(_components.code, {
          children: "MESSAGE"
        }), " and ", _jsx(_components.code, {
          children: "STREAM"
        }), " services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:"]
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "let"
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
                    children: '"your_appid"'
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
                    children: '"your_userid"'
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "let"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " privateConfig "
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
                    children: " AgoraRtmPrivateConfig"
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
                    children: "privateConfig.accessPointHosts "
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
                    children: " ["
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"your_private_server"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "]"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "privateConfig.serviceType "
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
                    children: " [.stream, .message]"
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
                    children: "rtmConfig.privateConfig "
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
                    children: " privateConfig"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "AgoraRtmClientConfig"
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
                    children: " rtm_config "
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
                    children: " [[AgoraRtmClientConfig "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "initWithAppId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"your_appid"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " userId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"your_userid"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
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
                    children: "AgoraRtmPrivateConfig"
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
                    children: " private_config "
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
                    children: " [[AgoraRtmPrivateConfig "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "init"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "private_config.accessPointHosts "
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
                    children: " @["
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"your_private_server"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "private_config.serviceType "
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
                    children: " AgoraRtmServiceTypeStream "
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
                    children: " AgoraRtmServiceTypeMessage;"
                  })]
                })]
              })
            })
          })
        })]
      }), _jsxs(CalloutContainer, {
        type: "info",
        children: [_jsx(CalloutTitle, {
          children: "Info"
        }), _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["To deploy a private environment, you need to set up the backend service. For assistance, please contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "technical support"
            }), "."]
          })
        })]
      }), _jsx(_components.h3, {
        id: "connection-protocol-2",
        children: "Connection protocol"
      }), _jsxs(_components.p, {
        children: ["To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each channel (", _jsx(_components.code, {
          children: "MESSAGE"
        }), " service and ", _jsx(_components.code, {
          children: "STREAM"
        }), " service) when connecting to the edge server. By default, these links use the TCP and UDP protocols respectively. This design ensures that network issues in one link do not affect transmission performance. Compared to other WebSocket-based message transmission solutions, RTM's redundant link design maximizes transmission stability and message arrival rates."]
      }), _jsxs(_components.p, {
        children: ["In some cases, users may find that their network does not support UDP port transmission, either temporarily or permanently. To ensure the dual-link design functions effectively, the SDK allows users to configure both links to use the TCP protocol by setting the ", _jsx(_components.code, {
          children: "protocolType"
        }), " field in the ", _jsx(_components.code, {
          children: "AgoraRtmClientConfig"
        }), ". Here is an example of configuring both links to use the TCP protocol:"]
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "let"
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
                    children: '"your_appid"'
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
                    children: '"your_userid"'
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
                    children: "rtmConfig.protocolType "
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
                    children: " .tcpOnly"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "AgoraRtmClientConfig"
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
                    children: " rtm_config "
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
                    children: " [[AgoraRtmClientConfig "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "initWithAppId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"your_appid"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " userId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"your_userid"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "rtm_config.protocolType "
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
                    children: " AgoraRtmProtocolTypeTcpOnly;"
                  })]
                })]
              })
            })
          })
        })]
      }), _jsxs(CalloutContainer, {
        type: "info",
        children: [_jsx(CalloutTitle, {
          children: "Info"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "The SDK does not support configuring both links to use the UDP protocol simultaneously."
          })
        })]
      }), _jsx(_components.h3, {
        id: "log-configuration-3",
        children: "Log configuration"
      }), _jsx(_components.p, {
        children: "In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable SDK log output and configure the log level and file size when initializing the Signaling client instance."
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "do"
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
                    children: " logConfig "
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
                    children: " AgoraRtmLogConfig"
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
                    children: "    logConfig.level "
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
                    children: " ."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "error"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    logConfig.filePath "
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
                    children: ' "your_path"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    logConfig.fileSizeInKB "
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
                    children: " 512"
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
                    children: "    let"
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
                    children: '"your_appid"'
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
                    children: '"your_userid"'
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
                    children: "    rtmConfig.logConfig "
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
                    children: " logConfig"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // Initializing the RTM client"
                  })
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
                    children: " rtmClient "
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
                    children: " try"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " AgoraRtmClientKit"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(rtmConfig, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "delegate"
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
                    children: "nil"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    if"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " rtmClient "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "!="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " nil"
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
                    children: "        print"
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
                    children: '"RTM Client initialized successfully!"'
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " let"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " error"
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
                    children: "    print"
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
                    children: '"Failed to initialize RTM client. Error: '
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "\\\\"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '(error)"'
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
              icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "AgoraRtmClientConfig"
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
                    children: " rtm_cfg "
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
                    children: " [[AgoraRtmClientConfig "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "initWithAppId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"your_appid"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " userId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"your_userid"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
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
                    children: "// set log config"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "AgoraRtmLogConfig"
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
                    children: " log_cfg "
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
                    children: " [[AgoraRtmLogConfig "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "init"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "log_cfg.level"
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
                    children: " AgoraRtmLogLevelError;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "log_cfg.filePath"
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
                    children: ' @"your_path"'
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
                    children: "log_cfg.fileSizeInKB "
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
                    children: " 512"
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
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "rtm_cfg.logConfig "
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
                    children: " log_cfg;"
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
                    children: "NSError"
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
                    children: " initError "
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
                    children: " nil"
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
                    children: "AgoraRtmClientKit"
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
                    children: " rtm "
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
                    children: " [[AgoraRtmClientKit "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "initWithConfig:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "rtm_cfg "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "delegate:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "handler "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "error:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "&"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "initError];"
                  })]
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
                    children: " (rtm "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "!="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " nil"
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "    NSLog"
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
                    children: '@"init rtm success!!"'
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "    NSLog"
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
                    children: '@"init rtm failed!!"'
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
          })
        })]
      }), _jsx(_components.p, {
        children: "Choose the log level from the following:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Swift"
            }), _jsx(_components.th, {
              children: "Objective-C"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "none"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "AgoraRtmLogLevelNone"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0000"
              }), ": Do not output any logs."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "info"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "AgoraRtmLogLevelInfo"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0001"
              }), ": Output logs of levels ", _jsx(_components.code, {
                children: "fatal"
              }), ", ", _jsx(_components.code, {
                children: "error"
              }), ", ", _jsx(_components.code, {
                children: "warn"
              }), ", and ", _jsx(_components.code, {
                children: "info"
              }), ". Best practice is to set the log level to this option."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "warn"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "AgoraRtmLogLevelWarn"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0002"
              }), ": Only output logs of levels ", _jsx(_components.code, {
                children: "fatal"
              }), ", ", _jsx(_components.code, {
                children: "error"
              }), ", and ", _jsx(_components.code, {
                children: "warn"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "error"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "AgoraRtmLogLevelError"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0004"
              }), ": Only output logs of levels ", _jsx(_components.code, {
                children: "fatal"
              }), " and ", _jsx(_components.code, {
                children: "error"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "fatal"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "AgoraRtmLogLevelFatal"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0008"
              }), ": Only output logs at the ", _jsx(_components.code, {
                children: "fatal"
              }), " level."]
            })]
          })]
        })]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["When you release your app to production, set the log level to ", _jsx(_components.code, {
              children: "info"
            }), " in Swift or ", _jsx(_components.code, {
              children: "AgoraRtmLogLevelInfo"
            }), " in Objective-C."]
          })
        })
      }), _jsx(_components.h2, {
        id: "reference-3",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsxs(_components.p, {
        children: ["For firewall configuration, see ", _jsx(_components.a, {
          href: "../../reference/firewall",
          children: "firewall requirements"
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
        children: "Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-4",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "When initializing a Signaling client instance, configure any or all of the following features:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Geographical area access"
            }), `
When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Enable proxy connection"
            }), `
You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Private deployment"
            }), `
Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Logging"
            }), `
Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Data encryption"
            }), `
Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see `, _jsx(_components.a, {
              href: "../secure-your-app-and-data/data-encryption",
              children: "Data encryption"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-4",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the ", _jsx(_components.a, {
          href: "../../index",
          children: "SDK quickstart"
        }), " page."]
      }), _jsx(_components.h2, {
        id: "configure-the-client-instance-4",
        children: "Configure the client instance"
      }), _jsx(_components.p, {
        children: "This section explains how to set up and customize various features when you initialize a Signaling client instance."
      }), _jsx(_components.h3, {
        id: "geographical-area-configuration-4",
        children: "Geographical area configuration"
      }), _jsx(_components.p, {
        children: "To specify geographical areas for Agora SDRTN® connections, refer to the following code:"
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
      }), _jsx(_components.h3, {
        id: "proxy-configuration-4",
        children: "Proxy configuration"
      }), _jsx(_components.p, {
        children: "In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization."
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
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " proxyConfig "
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
                children: " RtmProxyConfig"
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
                children: "    proxyType"
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
                children: " RtmProxyType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".http,"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    server"
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
                children: ' "your_proxy_server_ip"'
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
                children: "    port"
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
                children: " 8080"
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
                children: "    account"
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
                children: ' "your_proxy_account"'
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
                children: "    password"
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
                children: ' "your_proxy_password"'
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " RtmConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "( proxyConfig"
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
                children: "proxyConfig );"
              })]
            })]
          })
        })
      }), _jsxs(CalloutContainer, {
        type: "warning",
        children: [_jsx(CalloutTitle, {
          children: "Caution"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client."
          })
        })]
      }), _jsx(_components.h3, {
        id: "private-deployment-configuration-4",
        children: "Private deployment configuration"
      }), _jsxs(_components.p, {
        children: ["Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version ", _jsx(_components.code, {
          children: "2.2.0"
        }), ", Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems."]
      }), _jsxs(_components.p, {
        children: ["Signaling provides ", _jsx(_components.code, {
          children: "MESSAGE"
        }), " and ", _jsx(_components.code, {
          children: "STREAM"
        }), " services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:"]
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
                children: "final"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " userId "
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
                children: " 'your_userId'"
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
                children: "final"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " appId "
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
                children: " 'your_appId'"
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
                children: "late"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " RtmClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " rtmClient;"
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
                children: "var"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " privateConfig "
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
                children: " RtmPrivateConfig"
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
                children: "    serviceType"
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
                children: " { "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "RtmServiceType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".message, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "RtmServiceType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".stream },"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    accessPointHosts"
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
                children: "'private.hostname.com'"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "]);"
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
                children: "var"
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " RtmConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "( privateConfig"
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
                children: "privateConfig );"
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
                children: "    final"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (status,client) "
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
                children: " await"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " RTM"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(appId, userId, config"
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
                children: "rtmConfig);"
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
                children: " (status.error "
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
                children: " true"
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
                children: "        print"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(status);"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        rtmClient "
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
                children: " client;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "        print"
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
                children: "'Initialize success!'"
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
                children: " (e) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "    print"
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
                children: "'Failed to create RTM client: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "$"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "e"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'"
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
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["To deploy a private environment, you need to set up the backend service. For assistance, please contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "technical support"
            }), "."]
          })
        })
      }), _jsx(_components.h3, {
        id: "connection-protocol-3",
        children: "Connection protocol"
      }), _jsxs(_components.p, {
        children: ["To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each service (", _jsx(_components.code, {
          children: "MESSAGE"
        }), " service and ", _jsx(_components.code, {
          children: "STREAM"
        }), " service) when connecting to the edge server. By default, these links use the TCP and UDP protocols, respectively. This design ensures that network issues on one link do not affect the overall transmission. Compared to other WebSocket-based message transmission solutions, RTM's redundant link design maximizes transmission stability and message delivery rate."]
      }), _jsxs(_components.p, {
        children: ["In some cases, users may find that their network does not support UDP port transmission, either temporarily or permanently. To ensure the dual-link design operates effectively, the SDK allows users to configure both links to use the TCP protocol. This can be done by setting the ", _jsx(_components.code, {
          children: "protocolType"
        }), " field in the ", _jsx(_components.code, {
          children: "RtmConfig"
        }), ". Below is a code example that configures both links to use the TCP protocol:"]
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
                children: "late"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " RtmClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " rtmClient;"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " protocolType "
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
                children: " RtmProtocolType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".tcpOnly;"
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " RtmConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(protocolType"
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
                children: "protocolType);"
              })]
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
                children: "    final"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (status,client) "
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
                children: " await"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " RTM"
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
                children: '"myAppId"'
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
                children: '"Tony"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", config"
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
                children: "rtmConfig);"
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
                children: " (status.error "
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
                children: " true"
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
                children: "        print"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(status);"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        rtmClient "
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
                children: " client;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "        print"
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
                children: "'Initialization success!'"
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
                children: " (e) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "    print"
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
                children: "'Failed to create RTM client: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "$"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "e"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'"
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
      }), _jsxs(CalloutContainer, {
        type: "info",
        children: [_jsx(CalloutTitle, {
          children: "Info"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "The SDK does not support configuring both links to use the UDP protocol simultaneously."
          })
        })]
      }), _jsx(_components.h3, {
        id: "log-configuration-4",
        children: "Log configuration"
      }), _jsxs(_components.p, {
        children: ["In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information level by configuring ", _jsx(_components.code, {
          children: "level"
        }), " when initializing the Signaling client instance."]
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
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " logConfig "
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
                children: " RtmLogConfig"
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
                children: "    filePath"
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
                children: " './rtm_logfile/'"
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
                children: "    fileSizeInKB"
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
                children: " 1024"
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
                children: "    level"
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
                children: " RtmLogLevel"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".warn );"
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " RtmConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "( logConfig"
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
                children: "logConfig );"
              })]
            })]
          })
        })
      }), _jsx(_components.p, {
        children: "Choose the log level from the following:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Enumeration value"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "none"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0000"
              }), ": Do not output any logs."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "info"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0001"
              }), ": Output logs of levels ", _jsx(_components.code, {
                children: "fatal"
              }), ", ", _jsx(_components.code, {
                children: "error"
              }), ", ", _jsx(_components.code, {
                children: "warn"
              }), ", and ", _jsx(_components.code, {
                children: "info"
              }), ". Best practice is to set the log level to this option."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "warn"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0002"
              }), ": Only output logs of levels ", _jsx(_components.code, {
                children: "fatal"
              }), ", ", _jsx(_components.code, {
                children: "error"
              }), ", and ", _jsx(_components.code, {
                children: "warn"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "error"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0004"
              }), ": Only output logs of levels ", _jsx(_components.code, {
                children: "fatal"
              }), " and ", _jsx(_components.code, {
                children: "error"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "fatal"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0008"
              }), ": Only output logs at the ", _jsx(_components.code, {
                children: "fatal"
              }), " level."]
            })]
          })]
        })]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["When your app is released to production, set the log level to ", _jsx(_components.code, {
              children: "info"
            }), "."]
          })
        })
      }), _jsx(_components.h2, {
        id: "reference-4",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsxs(_components.p, {
        children: ["For firewall configuration, see ", _jsx(_components.a, {
          href: "../../reference/firewall",
          children: "firewall requirements"
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
      }), _jsx(_components.p, {
        children: "Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-5",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "When initializing a Signaling client instance, configure any or all of the following features:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Geographical area access"
            }), `
When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Enable proxy connection"
            }), `
You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Private deployment"
            }), `
Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Logging"
            }), `
Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Data encryption"
            }), `
Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see `, _jsx(_components.a, {
              href: "../secure-your-app-and-data/data-encryption",
              children: "Data encryption"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-5",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the ", _jsx(_components.a, {
          href: "../../index",
          children: "SDK quickstart"
        }), " page."]
      }), _jsx(_components.h2, {
        id: "configure-the-client-instance-5",
        children: "Configure the client instance"
      }), _jsx(_components.p, {
        children: "This section explains how to set up and customize various features when you initialize a Signaling client instance."
      }), _jsx(_components.h3, {
        id: "geographical-area-configuration-5",
        children: "Geographical area configuration"
      }), _jsx(_components.p, {
        children: "To specify a geographical area for Agora SDRTN® connections, refer to the following code:"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" fill="currentColor" /></svg>',
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
                children: "'your_userId'"
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
                children: "'your_appId'"
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
      }), _jsx(_components.p, {
        children: "Available area codes:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Area Code"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RtmAreaCode.na"
              })
            }), _jsx(_components.td, {
              children: "North America"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RtmAreaCode.eu"
              })
            }), _jsx(_components.td, {
              children: "Europe"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RtmAreaCode.as"
              })
            }), _jsx(_components.td, {
              children: "Asia excluding Mainland China"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RtmAreaCode.jp"
              })
            }), _jsx(_components.td, {
              children: "Japan"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RtmAreaCode.in"
              })
            }), _jsx(_components.td, {
              children: "India"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RtmAreaCode.cn"
              })
            }), _jsx(_components.td, {
              children: "Mainland China"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RtmAreaCode.glob"
              })
            }), _jsx(_components.td, {
              children: "Global (default)"
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "proxy-configuration-5",
        children: "Proxy configuration"
      }), _jsx(_components.p, {
        children: "In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization."
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
          icon: '<svg viewBox="0 0 24 24"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" fill="currentColor" /></svg>',
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
                children: "'your_userId'"
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
                children: "'your_appId'"
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
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "   proxyConfig: {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "     proxyType: RtmProxyType.http,"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "     server: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'your_proxy_server_ip'"
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
                children: "     port: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "8080"
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
                children: "     account: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'your_proxy_account'"
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
                children: "     password: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'your_proxy_password'"
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
                children: "   },"
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
      }), _jsxs(CalloutContainer, {
        type: "warning",
        children: [_jsx(CalloutTitle, {
          children: "Caution"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client."
          })
        })]
      }), _jsx(_components.h3, {
        id: "connection-protocol-4",
        children: "Connection protocol"
      }), _jsxs(_components.p, {
        children: ["To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each service (", _jsx(_components.code, {
          children: "MESSAGE"
        }), " service and ", _jsx(_components.code, {
          children: "STREAM"
        }), " service) when connecting to the edge server. By default, these links use the TCP and UDP protocols, respectively. This design ensures that network issues on one link do not affect the overall transmission."]
      }), _jsxs(_components.p, {
        children: ["In some cases, users may find that their network does not support UDP port transmission. To ensure the dual-link design operates effectively, the SDK allows users to configure both links to use the TCP protocol by setting the ", _jsx(_components.code, {
          children: "protocolType"
        }), " field in the ", _jsx(_components.code, {
          children: "RtmConfig"
        }), ":"]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" fill="currentColor" /></svg>',
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
                children: "'your_userId'"
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
                children: "'your_appId'"
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
                children: "   protocolType: RtmProtocolType.tcpOnly, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Use TCP only for both links"
              })]
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
      }), _jsx(_components.p, {
        children: "Available protocol types:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Protocol Type"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RtmProtocolType.tcpUdp"
              })
            }), _jsx(_components.td, {
              children: "Use both TCP and UDP (default)"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RtmProtocolType.tcpOnly"
              })
            }), _jsx(_components.td, {
              children: "Use TCP only for both links"
            })]
          })]
        })]
      }), _jsxs(CalloutContainer, {
        type: "info",
        children: [_jsx(CalloutTitle, {
          children: "Info"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "The SDK does not support configuring both links to use the UDP protocol simultaneously."
          })
        })]
      }), _jsx(_components.h3, {
        id: "presence-timeout-configuration",
        children: "Presence timeout configuration"
      }), _jsx(_components.p, {
        children: "Configure the presence timeout to control how long the server waits before considering a client offline:"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" fill="currentColor" /></svg>',
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
                children: "'your_userId'"
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
                children: "'your_appId'"
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
                children: "   presenceTimeout: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "60"
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
                children: "// Timeout in seconds (5-300 range)"
              })]
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
      }), _jsx(_components.h3, {
        id: "user-id-type-configuration",
        children: "User ID type configuration"
      }), _jsx(_components.p, {
        children: "Configure whether to use string or numeric user IDs:"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Using string user IDs (recommended)"
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
                children: " clientString"
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
                children: "'user123'"
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
                children: "'your_appId'"
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
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Use string user IDs"
              })]
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
                children: "// Using numeric user IDs"
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
                children: " clientNumeric"
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
                children: "'1234567'"
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
                children: "// Must be numeric string when useStringUserId is false"
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
                children: "'your_appId'"
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
                children: "// Use numeric user IDs"
              })]
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
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["When using both Agora RTC and RTM, ensure the ", _jsx(_components.code, {
              children: "userId"
            }), " type is consistent across both SDKs."]
          })
        })
      }), _jsx(_components.h3, {
        id: "log-configuration-5",
        children: "Log configuration"
      }), _jsxs(_components.p, {
        children: ["In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information level by configuring ", _jsx(_components.code, {
          children: "RtmLogConfig"
        }), " when initializing the Signaling client instance:"]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" fill="currentColor" /></svg>',
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
                children: " logConfig"
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
                children: " filePath: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'./logfile/'"
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
                children: "// Log file path"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " fileSizeInKB: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "512"
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
                children: "// Log file size in KB (128-1024 range)"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " level: RtmLogLevel.info, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Log report level"
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
                children: "'your_userId'"
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
                children: "'your_appId'"
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
                children: "   logConfig: logConfig, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set log configuration"
              })]
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
      }), _jsx(_components.p, {
        children: "Choose the log level from the following:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Enumeration value"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RtmLogLevel.none"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0000"
              }), ": Do not output any logs."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RtmLogLevel.info"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0001"
              }), ": Output logs of levels ", _jsx(_components.code, {
                children: "FATAL"
              }), ", ", _jsx(_components.code, {
                children: "ERROR"
              }), ", ", _jsx(_components.code, {
                children: "WARN"
              }), ", and ", _jsx(_components.code, {
                children: "INFO"
              }), ". Best practice is to set the log level to this option."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RtmLogLevel.warn"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0002"
              }), ": Only output logs of levels ", _jsx(_components.code, {
                children: "FATAL"
              }), ", ", _jsx(_components.code, {
                children: "ERROR"
              }), ", and ", _jsx(_components.code, {
                children: "WARN"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RtmLogLevel.error"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0004"
              }), ": Only output logs of levels ", _jsx(_components.code, {
                children: "FATAL"
              }), " and ", _jsx(_components.code, {
                children: "ERROR"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RtmLogLevel.fatal"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0008"
              }), ": Only output logs at the ", _jsx(_components.code, {
                children: "FATAL"
              }), " level."]
            })]
          })]
        })]
      }), _jsxs(CalloutContainer, {
        type: "info",
        children: [_jsx(CalloutTitle, {
          children: "Info"
        }), _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["When your app is released to production, set the log level to ", _jsx(_components.code, {
              children: "RtmLogLevel.info"
            }), "."]
          })
        })]
      }), _jsx(_components.h3, {
        id: "encryption-configuration",
        children: "Encryption configuration"
      }), _jsx(_components.p, {
        children: "For enhanced security, you can enable client-side encryption:"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" fill="currentColor" /></svg>',
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
                children: " encryptionConfig"
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
                children: " encryptionMode: RtmEncryptionMode.aes128Gcm, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// or RtmEncryptionMode.aes256Gcm"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " encryptionKey: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'your_encryption_key'"
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
                children: "// 32-character string"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " encryptionSalt: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " Uint8Array"
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
                children: "32"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "), "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// 32-byte salt"
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
                children: "'your_userId'"
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
                children: "'your_appId'"
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
                children: "   encryptionConfig: encryptionConfig, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set encryption configuration"
              })]
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
      }), _jsx(_components.p, {
        children: "Available encryption modes:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Encryption Mode"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RtmEncryptionMode.none"
              })
            }), _jsx(_components.td, {
              children: "No encryption (default)"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RtmEncryptionMode.aes128Gcm"
              })
            }), _jsx(_components.td, {
              children: "AES 128-bit GCM encryption"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RtmEncryptionMode.aes256Gcm"
              })
            }), _jsx(_components.td, {
              children: "AES 256-bit GCM encryption"
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "complete-configuration-example",
        children: "Complete configuration example"
      }), _jsx(_components.p, {
        children: "Here's a comprehensive example showing all configuration options:"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " createAgoraRtmClient,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " RtmConfig,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " RtmAreaCode,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " RtmProtocolType,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " RtmLogLevel,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " RtmEncryptionMode"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "} from "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'agora-react-native-rtm'"
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
                children: " logConfig"
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
                children: " filePath: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'./logs/'"
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
                children: " fileSizeInKB: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "1024"
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
                children: " level: RtmLogLevel.info,"
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
                children: " encryptionConfig"
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
                children: " {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " encryptionMode: RtmEncryptionMode.aes256Gcm,"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " encryptionKey: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'your_32_character_encryption_key'"
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
                children: " encryptionSalt: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " Uint8Array"
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
                children: "32"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "),"
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
                children: "'your_userId'"
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
                children: "'your_appId'"
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
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "   areaCode: RtmAreaCode.as,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "   protocolType: RtmProtocolType.tcpUdp,"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "   presenceTimeout: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "300"
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
                children: "   logConfig: logConfig,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "   encryptionConfig: encryptionConfig,"
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
      }), _jsxs(_components.p, {
        children: ["For firewall configuration, see ", _jsx(_components.a, {
          href: "../../reference/firewall",
          children: "firewall requirements"
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
      }), _jsx(_components.p, {
        children: "Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-6",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "When initializing a Signaling client instance, configure any or all of the following features:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Geographical area access"
            }), `
When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Enable proxy connection"
            }), `
You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Private deployment"
            }), `
Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Logging"
            }), `
Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Data encryption"
            }), `
Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see `, _jsx(_components.a, {
              href: "../secure-your-app-and-data/data-encryption",
              children: "Data encryption"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-6",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the ", _jsx(_components.a, {
          href: "../../index",
          children: "SDK quickstart"
        }), " page."]
      }), _jsx(_components.h2, {
        id: "configure-the-client-instance-6",
        children: "Configure the client instance"
      }), _jsx(_components.p, {
        children: "This section explains how to set up and customize various features when you initialize a Signaling client instance."
      }), _jsx(_components.h3, {
        id: "geographical-area-configuration-6",
        children: "Geographical area configuration"
      }), _jsx(_components.p, {
        children: "To specify a geographical area for Agora SDRTN® connections, refer to the following code:"
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
      }), _jsx(_components.h3, {
        id: "proxy-configuration-6",
        children: "Proxy configuration"
      }), _jsx(_components.p, {
        children: "In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization."
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
                children: "config.appId "
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
                children: ' "appid"'
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
                children: "config.userId "
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
                children: ' "userId"'
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
                children: "config.proxyConfig.proxyType "
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
                children: " RTM_PROXY_TYPE_HTTP;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config.proxyConfig.server "
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
                children: ' "your_proxy_server_ip"'
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
                children: "config.proxyConfig.port "
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
                children: " 8080"
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
                children: "config.proxyConfig.account "
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
                children: ' "your_proxy_account"'
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
                children: "config.proxyConfig.password "
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
                children: ' "your_proxy_password"'
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
      }), _jsxs(CalloutContainer, {
        type: "warning",
        children: [_jsx(CalloutTitle, {
          children: "Caution"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client."
          })
        })]
      }), _jsx(_components.h3, {
        id: "private-deployment-configuration-5",
        children: "Private deployment configuration"
      }), _jsxs(_components.p, {
        children: ["Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version ", _jsx(_components.code, {
          children: "2.2.0"
        }), ", Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems."]
      }), _jsxs(_components.p, {
        children: ["Signaling provides ", _jsx(_components.code, {
          children: "MESSAGE"
        }), " and ", _jsx(_components.code, {
          children: "STREAM"
        }), " services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:"]
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
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "std"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::vector"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "<const"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " char*>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " hosts;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "hosts."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "push_back"
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
                children: '"xxx"'
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
                children: "config.appId "
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
                children: ' "your_appid"'
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
                children: "config.userId "
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
                children: ' "your_name"'
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
                children: "config.privateConfig.serviceType "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    static_cast<"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "RTM_SERVICE_TYPE"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ">"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(RTM_SERVICE_TYPE_MESSAGE "
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
                children: " RTM_SERVICE_TYPE_STREAM);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config.privateConfig.accessPointHosts "
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
                children: " hosts."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "data"
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
                children: "config.privateConfig.accessPointHostsCount "
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
                children: " hosts."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "size"
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
      }), _jsxs(CalloutContainer, {
        type: "info",
        children: [_jsx(CalloutTitle, {
          children: "Info"
        }), _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["To deploy a private environment, you need to set up the backend service. For assistance, please contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "technical support"
            }), "."]
          })
        })]
      }), _jsx(_components.h3, {
        id: "connection-protocol-5",
        children: "Connection protocol"
      }), _jsxs(_components.p, {
        children: ["To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each service (", _jsx(_components.code, {
          children: "MESSAGE"
        }), " service and ", _jsx(_components.code, {
          children: "STREAM"
        }), " service) when connecting to the edge server. By default, these links use the TCP and UDP protocols, respectively. This design ensures that network issues on one link do not affect the overall transmission. Compared to other WebSocket-based message transmission solutions, RTM's redundant link design maximizes transmission stability and message delivery rate."]
      }), _jsxs(_components.p, {
        children: ["In some cases, users may find that their network does not support UDP port transmission, either temporarily or permanently. To ensure the dual-link design operates effectively, the SDK allows users to configure both links to use the TCP protocol. This can be done by setting the ", _jsx(_components.code, {
          children: "protocolType"
        }), " field in the ", _jsx(_components.code, {
          children: "RtmConfig"
        }), ". Below is a code example that configures both links to use the TCP protocol:"]
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
                children: "config.appId "
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
                children: ' "appid"'
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
                children: "config.userId "
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
                children: ' "userId"'
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
                children: "config.protocolType "
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
                children: " RTM_PROTOCOL_TYPE_TCP_ONLY;"
              })]
            })]
          })
        })
      }), _jsxs(CalloutContainer, {
        type: "info",
        children: [_jsx(CalloutTitle, {
          children: "Info"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "The SDK does not support configuring both links to use the UDP protocol simultaneously."
          })
        })]
      }), _jsx(_components.h3, {
        id: "log-configuration-6",
        children: "Log configuration"
      }), _jsxs(_components.p, {
        children: ["In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information level by configuring ", _jsx(_components.code, {
          children: "RTM_LOG_LEVEL"
        }), " when initializing the Signaling client instance."]
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
                children: "config.appId "
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
                children: ' "your_appid"'
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
                children: "config.userId "
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
                children: ' "your_name"'
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
                children: "config.eventHandler "
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
                children: " RtmEventHandler"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
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
                children: "config.logConfig.level "
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
                children: " RTM_LOG_LEVEL_INFO;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config.logConfig.filePath "
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
                children: ' "your_path"'
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
                children: "config.logConfig.fileSizeInKB "
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
                children: " 10"
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
                children: ";"
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
                children: " rtmClient "
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
                children: "rtmClient "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "||"
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
                children: "!="
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
                children: "  // create rtm client failed"
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
        children: "Choose the log level from the following:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Enumeration value"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "NONE"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0000"
              }), ": Do not output any logs."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "INFO"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0001"
              }), ": Output logs of levels ", _jsx(_components.code, {
                children: "FATAL"
              }), ", ", _jsx(_components.code, {
                children: "ERROR"
              }), ", ", _jsx(_components.code, {
                children: "WARN"
              }), ", and ", _jsx(_components.code, {
                children: "INFO"
              }), ". Best practice is to set the log level to this option."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "WARN"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0002"
              }), ": Only output logs of levels ", _jsx(_components.code, {
                children: "FATAL"
              }), ", ", _jsx(_components.code, {
                children: "ERROR"
              }), ", and ", _jsx(_components.code, {
                children: "WARN"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "ERROR"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0004"
              }), ": Only output logs of levels ", _jsx(_components.code, {
                children: "FATAL"
              }), " and ", _jsx(_components.code, {
                children: "ERROR"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "FATAL"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0008"
              }), ": Only output logs of levels ", _jsx(_components.code, {
                children: "FATAL"
              }), "."]
            })]
          })]
        })]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["When your app is released to production, set the log level to ", _jsx(_components.code, {
              children: "INFO"
            }), "."]
          })
        })
      }), _jsx(_components.h2, {
        id: "reference-6",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsxs(_components.p, {
        children: ["For firewall configuration, see ", _jsx(_components.a, {
          href: "../../reference/firewall",
          children: "firewall requirements"
        })]
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
        children: "Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-7",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "When initializing a Signaling client instance, configure any or all of the following features:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Geographical area access"
            }), `
When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Enable proxy connection"
            }), `
You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Private deployment"
            }), `
Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Logging"
            }), `
Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Data encryption"
            }), `
Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see `, _jsx(_components.a, {
              href: "../secure-your-app-and-data/data-encryption",
              children: "Data encryption"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-7",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the ", _jsx(_components.a, {
          href: "../../index",
          children: "SDK quickstart"
        }), " page."]
      }), _jsx(_components.h2, {
        id: "configure-the-client-instance-7",
        children: "Configure the client instance"
      }), _jsx(_components.p, {
        children: "This section explains how to set up and customize various features when you initialize a Signaling client instance."
      }), _jsx(_components.h3, {
        id: "geographical-area-configuration-7",
        children: "Geographical area configuration"
      }), _jsx(_components.p, {
        children: "To specify a geographical area for Agora SDRTN® connections, refer to the following code:"
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
      }), _jsx(_components.h3, {
        id: "proxy-configuration-7",
        children: "Proxy configuration"
      }), _jsx(_components.p, {
        children: "In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization."
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
                children: "config.appId "
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
                children: ' "appid"'
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
                children: "config.userId "
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
                children: ' "userId"'
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
                children: "config.proxyConfig.proxyType "
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
                children: " RTM_PROXY_TYPE_HTTP;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config.proxyConfig.server "
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
                children: ' "your_proxy_server_ip"'
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
                children: "config.proxyConfig.port "
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
                children: " 8080"
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
                children: "config.proxyConfig.account "
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
                children: ' "your_proxy_account"'
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
                children: "config.proxyConfig.password "
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
                children: ' "your_proxy_password"'
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
      }), _jsxs(CalloutContainer, {
        type: "warning",
        children: [_jsx(CalloutTitle, {
          children: "Caution"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client."
          })
        })]
      }), _jsx(_components.h3, {
        id: "private-deployment-configuration-6",
        children: "Private deployment configuration"
      }), _jsxs(_components.p, {
        children: ["Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version ", _jsx(_components.code, {
          children: "2.2.0"
        }), ", Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems."]
      }), _jsxs(_components.p, {
        children: ["Signaling provides ", _jsx(_components.code, {
          children: "MESSAGE"
        }), " and ", _jsx(_components.code, {
          children: "STREAM"
        }), " services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:"]
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
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "std"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::vector"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "<const"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " char*>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " hosts;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "hosts."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "push_back"
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
                children: '"xxx"'
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
                children: "config.appId "
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
                children: ' "your_appid"'
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
                children: "config.userId "
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
                children: ' "your_name"'
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
                children: "config.privateConfig.serviceType "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    static_cast<"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "RTM_SERVICE_TYPE"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ">"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(RTM_SERVICE_TYPE_MESSAGE "
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
                children: " RTM_SERVICE_TYPE_STREAM);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config.privateConfig.accessPointHosts "
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
                children: " hosts."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "data"
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
                children: "config.privateConfig.accessPointHostsCount "
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
                children: " hosts."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "size"
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
      }), _jsxs(CalloutContainer, {
        type: "info",
        children: [_jsx(CalloutTitle, {
          children: "Info"
        }), _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["To deploy a private environment, you need to set up the backend service. For assistance, please contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "technical support"
            }), "."]
          })
        })]
      }), _jsx(_components.h3, {
        id: "connection-protocol-6",
        children: "Connection protocol"
      }), _jsxs(_components.p, {
        children: ["To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each service (", _jsx(_components.code, {
          children: "MESSAGE"
        }), " service and ", _jsx(_components.code, {
          children: "STREAM"
        }), " service) when connecting to the edge server. By default, these links use the TCP and UDP protocols, respectively. This design ensures that network issues on one link do not affect the overall transmission. Compared to other WebSocket-based message transmission solutions, RTM's redundant link design maximizes transmission stability and message delivery rate."]
      }), _jsxs(_components.p, {
        children: ["In some cases, users may find that their network does not support UDP port transmission, either temporarily or permanently. To ensure the dual-link design operates effectively, the SDK allows users to configure both links to use the TCP protocol. This can be done by setting the ", _jsx(_components.code, {
          children: "protocolType"
        }), " field in the ", _jsx(_components.code, {
          children: "RtmConfig"
        }), ". Below is a code example that configures both links to use the TCP protocol:"]
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
                children: "config.appId "
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
                children: ' "appid"'
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
                children: "config.userId "
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
                children: ' "userId"'
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
                children: "config.protocolType "
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
                children: " RTM_PROTOCOL_TYPE_TCP_ONLY;"
              })]
            })]
          })
        })
      }), _jsxs(CalloutContainer, {
        type: "info",
        children: [_jsx(CalloutTitle, {
          children: "Info"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "The SDK does not support configuring both links to use the UDP protocol simultaneously."
          })
        })]
      }), _jsx(_components.h3, {
        id: "log-configuration-7",
        children: "Log configuration"
      }), _jsxs(_components.p, {
        children: ["In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information level by configuring ", _jsx(_components.code, {
          children: "RTM_LOG_LEVEL"
        }), " when initializing the Signaling client instance."]
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
                children: "config.appId "
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
                children: ' "your_appid"'
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
                children: "config.userId "
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
                children: ' "your_name"'
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
                children: "config.eventHandler "
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
                children: " RtmEventHandler"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
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
                children: "config.logConfig.level "
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
                children: " RTM_LOG_LEVEL_INFO;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config.logConfig.filePath "
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
                children: ' "your_path"'
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
                children: "config.logConfig.fileSizeInKB "
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
                children: " 10"
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
                children: ";"
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
                children: " rtmClient "
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
                children: "rtmClient "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "||"
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
                children: "!="
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
                children: "  // create rtm client failed"
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
        children: "Choose the log level from the following:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Enumeration value"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "NONE"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0000"
              }), ": Do not output any logs."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "INFO"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0001"
              }), ": Output logs of levels ", _jsx(_components.code, {
                children: "FATAL"
              }), ", ", _jsx(_components.code, {
                children: "ERROR"
              }), ", ", _jsx(_components.code, {
                children: "WARN"
              }), ", and ", _jsx(_components.code, {
                children: "INFO"
              }), ". Best practice is to set the log level to this option."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "WARN"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0002"
              }), ": Only output logs of levels ", _jsx(_components.code, {
                children: "FATAL"
              }), ", ", _jsx(_components.code, {
                children: "ERROR"
              }), ", and ", _jsx(_components.code, {
                children: "WARN"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "ERROR"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0004"
              }), ": Only output logs of levels ", _jsx(_components.code, {
                children: "FATAL"
              }), " and ", _jsx(_components.code, {
                children: "ERROR"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "FATAL"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0008"
              }), ": Only output logs of levels ", _jsx(_components.code, {
                children: "FATAL"
              }), "."]
            })]
          })]
        })]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["When your app is released to production, set the log level to ", _jsx(_components.code, {
              children: "INFO"
            }), "."]
          })
        })
      }), _jsx(_components.h2, {
        id: "reference-7",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsxs(_components.p, {
        children: ["For firewall configuration, see ", _jsx(_components.a, {
          href: "../../reference/firewall",
          children: "firewall requirements"
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
      }), _jsx(_components.p, {
        children: "Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-8",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "When initializing a Signaling client instance, configure any or all of the following features:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Geographical area access"
            }), `
When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Private deployment"
            }), `
Private deployment enables you to deploy and manage the Signaling environment on your own infrastructure rather than using Agora services. This feature is fully supported since version 2.2.0.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Logging"
            }), `
Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Data encryption"
            }), `
Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see `, _jsx(_components.a, {
              href: "../secure-your-app-and-data/data-encryption",
              children: "Data encryption"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-8",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the ", _jsx(_components.a, {
          href: "../../index",
          children: "SDK quickstart"
        }), " page."]
      }), _jsx(_components.h2, {
        id: "configure-the-client-instance-8",
        children: "Configure the client instance"
      }), _jsx(_components.p, {
        children: "This section explains how to set up and customize various features when you initialize a Signaling client instance."
      }), _jsx(_components.h3, {
        id: "geographical-area-configuration-8",
        children: "Geographical area configuration"
      }), _jsx(_components.p, {
        children: "To specify a geographical area for Agora SDRTN® connections, refer to the following code:"
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
                children: "();"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "private-deployment-configuration-7",
        children: "Private deployment configuration"
      }), _jsxs(_components.p, {
        children: ["Agora is committed to offering its customers flexible, secure, and customizable solutions. Since version ", _jsx(_components.code, {
          children: "2.2.0"
        }), ", Signaling supports private deployments. This feature enables you to deploy and manage the Signaling environment yourself, giving you more control over your data and systems."]
      }), _jsxs(_components.p, {
        children: ["Signaling provides ", _jsx(_components.code, {
          children: "MESSAGE"
        }), " and ", _jsx(_components.code, {
          children: "STREAM"
        }), " services. Choose one or both services based on your needs and budget. The following code shows you how to configure a private environment that deploys both services simultaneously:"]
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
                children: "ArrayList<"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "String"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "> hosts "
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
                children: " ArrayList<>();"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "hosts."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "add"
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
                children: '"x.x.x.x"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "); "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// your access point hosts list."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "RtmPrivateConfig privateConfig "
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
                children: " RtmPrivateConfig"
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
                children: "privateConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setServiceType"
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
                children: "(RtmServiceType.MESSAGE, RtmServiceType.STREAM));"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "privateConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setAccessPointHosts"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(hosts);"
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
                children: "privateConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(privateConfig)"
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
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["To deploy a private environment, you need to set up the backend service. For assistance, please contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "technical support"
            }), "."]
          })
        })
      }), _jsx(_components.h3, {
        id: "connection-protocol-7",
        children: "Connection protocol"
      }), _jsxs(_components.p, {
        children: ["To ensure connection stability and continuous service availability, the RTM client establishes two transmission links for each service (", _jsx(_components.code, {
          children: "MESSAGE"
        }), " service and ", _jsx(_components.code, {
          children: "STREAM"
        }), " service) when connecting to the edge server. By default, these links use the TCP and UDP protocols, respectively. This design ensures that network issues on one link do not affect the overall transmission. Compared to other WebSocket-based message transmission solutions, RTM's redundant link design maximizes transmission stability and message delivery rate."]
      }), _jsxs(_components.p, {
        children: ["In some cases, users may find that their network does not support UDP port transmission, either temporarily or permanently. To ensure the dual-link design operates effectively, the SDK allows users to configure both links to use the TCP protocol. This can be done by setting the ", _jsx(_components.code, {
          children: "protocolType"
        }), " field in the ", _jsx(_components.code, {
          children: "RtmConfig"
        }), ". Below is a code example that configures both links to use the TCP protocol:"]
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
                children: "protocolType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(RtmProtocolType.TCP_ONLY)"
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
      }), _jsxs(CalloutContainer, {
        type: "info",
        children: [_jsx(CalloutTitle, {
          children: "Info"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "The SDK does not support configuring both links to use the UDP protocol simultaneously."
          })
        })]
      }), _jsx(_components.h3, {
        id: "log-configuration-8",
        children: "Log configuration"
      }), _jsxs(_components.p, {
        children: ["In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information level by configuring ", _jsx(_components.code, {
          children: "RtmLogLevel"
        }), " when initializing the Signaling client instance."]
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
                children: "RtmLogConfig logConfig "
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
                children: " RtmLogConfig"
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
                children: "// Set log file path"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "logConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setFilePath"
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
                children: '"./logfile/"'
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
                children: "// Set log file size"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "logConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setFileSize"
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
                children: "512"
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
                children: "// Set log report level"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "logConfig."
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
                children: "(RtmLogLevel.INFO);"
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
                children: '"your_appId"'
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
                children: '"your_userId"'
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
                children: "logConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(logConfig) "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set log config"
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
                children: "// Initialize the client instance"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    mRtmClient "
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
                children: " RtmClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "create"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(rtmConfig);"
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
                children: "(Exception "
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "    log"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(INFO, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"create rtm client failed with exception: "'
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
                children: " e."
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
                children: "}"
              })
            })]
          })
        })
      }), _jsx(_components.p, {
        children: "Choose the log level from the following:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Enumeration value"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "NONE"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0000"
              }), ": Do not output any logs."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "INFO"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0001"
              }), ": Output logs of levels ", _jsx(_components.code, {
                children: "FATAL"
              }), ", ", _jsx(_components.code, {
                children: "ERROR"
              }), ", ", _jsx(_components.code, {
                children: "WARN"
              }), ", and ", _jsx(_components.code, {
                children: "INFO"
              }), ". Best practice is to set the log level to this option."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "WARN"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0002"
              }), ": Only output logs of levels ", _jsx(_components.code, {
                children: "FATAL"
              }), ", ", _jsx(_components.code, {
                children: "ERROR"
              }), ", and ", _jsx(_components.code, {
                children: "WARN"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "ERROR"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0004"
              }), ": Only output logs of levels ", _jsx(_components.code, {
                children: "FATAL"
              }), " and ", _jsx(_components.code, {
                children: "ERROR"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "FATAL"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0008"
              }), ": Only output logs at the ", _jsx(_components.code, {
                children: "FATAL"
              }), " level."]
            })]
          })]
        })]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["When your app is released to production, set the log level to ", _jsx(_components.code, {
              children: "INFO"
            }), "."]
          })
        })
      }), _jsx(_components.h2, {
        id: "reference-8",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsxs(_components.p, {
        children: ["For firewall configuration, see ", _jsx(_components.a, {
          href: "../../reference/firewall",
          children: "firewall requirements"
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
      }), _jsx(_components.p, {
        children: "Client configuration enables you to customize the behavior of your Signaling client instance according to your app's requirements."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-9",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "When initializing a Signaling client instance, configure any or all of the following features:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Geographical area access"
            }), `
When a user joins a channel, Signaling SDK automatically connects them to the closest geographical region of Agora SDRTN®. However, to comply with local laws and regulations, you may want to specify or restrict connections to a specific geographical area. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® region users connect to.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Enable proxy connection"
            }), `
You use a proxy connection to ensure reliable connectivity for your users when they connect from an environment with a restricted network. This helps in maintaining a stable connection even in environments with network restrictions.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Logging"
            }), `
Logging enables you to output detailed information from the SDK for locating and fixing problems during the development and testing phases. By configuring logging settings, you can control the amount and type of information logged by the SDK.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Data encryption"
            }), `
Enabling encryption ensures that only authorized users are able to read messages sent through Signaling. Signaling provides built-in encryption methods that guarantee data confidentiality during transmission. For implementation details, see `, _jsx(_components.a, {
              href: "../secure-your-app-and-data/data-encryption",
              children: "Data encryption"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-9",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have integrated the Signaling SDK in your project and implemented the framework functionality from the ", _jsx(_components.a, {
          href: "../../index",
          children: "SDK quickstart"
        }), " page."]
      }), _jsx(_components.h2, {
        id: "configure-the-client-instance-9",
        children: "Configure the client instance"
      }), _jsx(_components.p, {
        children: "This section explains how to set up and customize various features when you initialize a Signaling client instance."
      }), _jsx(_components.h3, {
        id: "geographical-area-configuration-9",
        children: "Geographical area configuration"
      }), _jsx(_components.p, {
        children: "To specify a geographical area for Agora SDRTN® connections, refer to the following code:"
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
      }), _jsx(_components.h3, {
        id: "proxy-configuration-8",
        children: "Proxy configuration"
      }), _jsx(_components.p, {
        children: "In some environments with restricted network services, you may need to set up a proxy service to access external resources. Signaling supports configuring a proxy service. You enable this feature during the Signaling instance initialization."
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "using"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " Agora"
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
                children: "Rtm"
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " IRtmClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " rtmClient"
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "RtmProxyConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " proxyConfig"
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
                children: " RtmProxyConfig"
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
                children: "// Set proxy type as HTTP."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "proxyConfig.proxyType "
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
                children: " RTM_PROXY_TYPE.HTTP;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set your proxy server address."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "proxyConfig.server "
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
                children: ' "your_proxy_server_ip"'
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
                children: "// Set your proxy listening port."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "proxyConfig.port "
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
                children: " 8080"
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
                children: "// Set your proxy account."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "proxyConfig.account "
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
                children: ' "your_proxy_account"'
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
                children: "// Set your proxy password."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "proxyConfig.password "
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
                children: ' "your_proxy_password"'
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "RtmConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " config"
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
                children: " RtmConfig"
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
                children: "config.proxyConfig "
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
                children: " proxyConfig;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config.appId "
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
                children: ' "your_appId"'
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
                children: "config.userId "
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
                children: ' "your_userId"'
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "try"
              })
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
                children: "    rtmClient "
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
                children: " RtmClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "CreateAgoraRtmClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(config);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    Debug."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Log"
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
                children: '"RTM Client Initialize Successful"'
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
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
                children: " ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "RTMException"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " e"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    Debug."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Log"
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
                children: "string"
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
                children: "Format"
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
                children: '"{0} is failed."'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", e.Status.Operation ));"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    Debug."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Log"
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
                children: "string"
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
                children: "Format"
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
                children: '"Error code: {0}, due to: {1}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", e.Status.ErrorCode, e.Status.Reason));"
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
      }), _jsxs(CalloutContainer, {
        type: "warning",
        children: [_jsx(CalloutTitle, {
          children: "Caution"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Keep your proxy username and password safe. The Signaling SDK does not parse, store, or forward your credentials. If you change proxy settings while the app is running, the new settings take effect only after you restart the Signaling client."
          })
        })]
      }), _jsx(_components.h3, {
        id: "log-configuration-9",
        children: "Log configuration"
      }), _jsxs(_components.p, {
        children: ["In the development and testing phase of your app, you may need to output more detailed information to locate and fix problems. Enable log output of the SDK and set the log information ", _jsx(_components.code, {
          children: "level"
        }), " when initializing the Signaling client instance."]
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "using"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " Agora"
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
                children: "Rtm"
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " IRtmClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " rtmClient"
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "RtmLogConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " logConfig"
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
                children: " RtmLogConfig"
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
                children: "// Set log file path."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "logConfig.filePath "
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
                children: ' "./logfile/"'
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
                children: "// Set log file size."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "logConfig.fileSizeInKB "
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
                children: " 512"
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
                children: "// Set log report level."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "logConfig.level "
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
                children: " RTM_LOG_LEVEL.INFO;"
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
                children: "RtmConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " config"
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
                children: " RtmConfig"
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
                children: "// Initialize logConfig."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config.logConfig "
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
                children: " logConfig;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config.appId "
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
                children: ' "your_appId"'
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
                children: "config.userId "
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
                children: ' "your_userId"'
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "try"
              })
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
                children: "    rtmClient "
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
                children: " RtmClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "CreateAgoraRtmClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(config);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    Debug."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Log"
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
                children: '"RTM Client Initialize Successful"'
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
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
                children: " ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "RTMException"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " e"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    Debug."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Log"
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
                children: "string"
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
                children: "Format"
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
                children: '"{0} is failed."'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", e.Status.Operation ));"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    Debug."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Log"
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
                children: "string"
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
                children: "Format"
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
                children: '"Error code: {0}, due to: {1}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", e.Status.ErrorCode, e.Status.Reason));"
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
        children: "Choose the log level from the following:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Enumeration Value"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "NONE"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0000"
              }), ": Do not output any logs."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "INFO"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0001"
              }), ": Output logs of levels ", _jsx(_components.code, {
                children: "FATAL"
              }), ", ", _jsx(_components.code, {
                children: "ERROR"
              }), ", ", _jsx(_components.code, {
                children: "WARN"
              }), ", and ", _jsx(_components.code, {
                children: "INFO"
              }), ". Best practice is to set the log level to this option."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "WARN"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0002"
              }), ": Only output logs of levels ", _jsx(_components.code, {
                children: "FATAL"
              }), ", ", _jsx(_components.code, {
                children: "ERROR"
              }), ", and ", _jsx(_components.code, {
                children: "WARN"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "ERROR"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0004"
              }), ": Only output logs of levels ", _jsx(_components.code, {
                children: "FATAL"
              }), " and ", _jsx(_components.code, {
                children: "ERROR"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "FATAL"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "0x0008"
              }), ": Only output logs at the ", _jsx(_components.code, {
                children: "FATAL"
              }), " level."]
            })]
          })]
        })]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["When your app is released to production, set the log level to ", _jsx(_components.code, {
              children: "INFO"
            }), "."]
          })
        })
      }), _jsx(_components.h2, {
        id: "reference-9",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsxs(_components.p, {
        children: ["For firewall configuration, see ", _jsx(_components.a, {
          href: "../../reference/firewall",
          children: "firewall requirements"
        })]
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
