import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Connect with Cloud Proxy",
  description: "Implement Agora Cloud Proxy feature for reliable audio and video connectivity."
};
export let _markdown = `

Large enterprises, hospitals, universities, banks, and other institutions commonly deploy firewalls to meet their stringent security requirements. To ensure uninterrupted access to its services for enterprise users behind firewalls, Agora offers firewall whitelist and Cloud proxy services.

Admins enable users to use RTC SDK in network-restricted environments by adding specific IP addresses and ports to the firewall whitelist. Users make API calls to configure the Cloud proxy service.

## Understand the tech [#understand-the-tech]

Cloud proxy works as follows:

1. RTC SDK initiates a request to Cloud proxy.
2. Cloud proxy returns the corresponding proxy information.
3. Agora SDK sends data to Cloud proxy. Cloud proxy receives the data and transmits it to Agora SDRTN®.
4. SDRTN® returns data to Cloud proxy. Cloud proxy receives the data and sends it to the SDK.

<Accordions>
  <Accordion title="Cloud proxy workflow">
    ![](https://assets-docs.agora.io/images/video-sdk/cloud-proxy-tech.svg)
  </Accordion>
</Accordions>

## Prerequisites [#prerequisites]

Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

## Implement Cloud Proxy [#implement-cloud-proxy]

Take the following steps to use Cloud proxy in your app:

1. In [Agora Console](https://console.agora.io), select **RTC Services** from the sidebar, then locate the **Cloud Proxy** card and turn on its toggle.

2. Configure the enterprise firewall to allow traffic from the IP address and port ranges in the [Agora Allowed IP List](/en/realtime-media/rtc/reference/cloud-proxy-allowed-ips).

### Platform-specific steps [#platform-specific-steps]

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;,&#x22;unreal&#x22;,&#x22;blueprint&#x22;,&#x22;web&#x22;,&#x22;windows&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    3. Call \`setCloudProxy\` and set \`proxyType\` to \`TRANSPORT_TYPE_UDP_PROXY\` or \`TRANSPORT_TYPE_TCP_PROXY\` to enable Cloud proxy.

    4. Test if you can initiate audio and video calls or live broadcasts normally.

    5. To stop using Cloud proxy, call \`setCloudProxy\` and set \`proxyType\` to \`TRANSPORT_TYPE_NONE_PROXY\`.

    6. To update the current \`proxyType\`, call \`setCloudProxy(TRANSPORT_TYPE_NONE_PROXY)\` first, then call \`setCloudProxy\` again with the new \`proxyType\`.

    Call \`setCloudProxy\` outside the channel. Its settings are valid within the \`RtcEngine\` life cycle.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    3. Call \`setCloudProxy\` and set \`proxyType\` to \`UdpProxy\` or \`TcpProxy\` to enable Cloud proxy.

    4. Test if you can initiate audio and video calls or live broadcasts normally.

    5. To stop using Cloud proxy, call \`setCloudProxy\` and set \`proxyType\` to \`NoneProxy\`.

    6. To update the current cloud proxy type, call \`setCloudProxy(NoneProxy)\` first, then call \`setCloudProxy\` again and set the cloud proxy type.

    Call \`setCloudProxy\` outside the channel. Its settings are valid within the \`RtcEngine\` life cycle.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    3. Call \`setCloudProxy\` and set \`proxyType\` to \`udpProxy\` or \`tcpProxy\` to enable Cloud proxy.

    4. Test if you can initiate audio and video calls or live broadcasts normally.

    5. To stop using Cloud proxy, call \`setCloudProxy\` and set \`proxyType\` to \`noneProxy\`.

    6. To update the current cloud proxy type, call \`setCloudProxy(noneProxy)\` first, then call \`setCloudProxy\` again and set the cloud proxy type.

    Call \`setCloudProxy\` outside the channel. Its settings are valid within the \`RtcEngine\` life cycle.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    3. Call \`setCloudProxy\` and set \`proxyType\` to \`udpProxy\` or \`tcpProxy\` to enable Cloud proxy.

    4. Test if you can initiate audio and video calls or live broadcasts normally.

    5. To stop using Cloud proxy, call \`setCloudProxy\` and set \`proxyType\` to \`noneProxy\`.

    6. To update the current cloud proxy type, call \`setCloudProxy(noneProxy)\` first, then call \`setCloudProxy\` again and set the cloud proxy type.

    Call \`setCloudProxy\` outside the channel. Its settings are valid within the \`AgoraRtcEngineKit\` life cycle.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    3. Call \`setCloudProxy\` and set \`proxyType\` to \`udpProxy\` or \`tcpProxy\` to enable Cloud proxy.

    4. Test if you can initiate audio and video calls or live broadcasts normally.

    5. To stop using Cloud proxy, call \`setCloudProxy\` and set \`proxyType\` to \`noneProxy\`.

    6. To update the current cloud proxy type, call \`setCloudProxy(noneProxy)\` first, then call \`setCloudProxy\` again and set the cloud proxy type.

    Call \`setCloudProxy\` outside the channel. Its settings are valid within the \`AgoraRtcEngineKit\` life cycle.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    3. Call \`setCloudProxy\` and set \`proxyType\` to \`UdpProxy\` or \`TcpProxy\` to enable Cloud proxy.

    4. Test if you can initiate audio and video calls or live broadcasts normally.

    5. To stop using Cloud proxy, call \`setCloudProxy\` and set \`proxyType\` to \`NoneProxy\`.

    6. To update the current cloud proxy type, call \`setCloudProxy(NoneProxy)\` first, then call \`setCloudProxy\` again and set the cloud proxy type.

    Call \`setCloudProxy\` outside the channel. Its settings are valid within the \`RtcEngine\` life cycle.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    3. Call \`SetCloudProxy\` and set \`proxyType\` to \`UDP_PROXY\` or \`TCP_PROXY\` to enable Cloud proxy.

    4. Test if you can initiate audio and video calls or live broadcasts normally.

    5. To stop using Cloud proxy, call \`SetCloudProxy\` and set \`proxyType\` to \`NONE_PROXY\`.

    6. To update the current cloud proxy type, call \`SetCloudProxy(NONE_PROXY)\` first, then call \`SetCloudProxy\` again and set the cloud proxy type.

    Call \`SetCloudProxy\` outside the channel. Its settings are valid within the \`RtcEngine\` life cycle.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unreal">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unreal" />

    3. Call \`setCloudProxy\` and set \`proxyType\` to \`UDP_PROXY\` or \`TCP_PROXY\` to enable Cloud proxy.

    4. Test if you can initiate audio and video calls or live broadcasts normally.

    5. To stop using Cloud proxy, call \`setCloudProxy\` and set \`proxyType\` to \`NONE_PROXY\`.

    6. To update the current cloud proxy type, call \`setCloudProxy(NONE_PROXY)\` first, then call \`setCloudProxy\` again and set the cloud proxy type.

    Call \`setCloudProxy\` outside the channel. Its settings are valid within the \`RtcEngine\` life cycle.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="blueprint">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="blueprint" />

    3. Call \`setCloudProxy\` and set \`proxyType\` to \`UDP_PROXY\` or \`TCP_PROXY\` to enable Cloud proxy.

    4. Test if you can initiate audio and video calls or live broadcasts normally.

    5. To stop using Cloud proxy, call \`setCloudProxy\` and set \`proxyType\` to \`NONE_PROXY\`.

    6. To update the current cloud proxy type, call \`setCloudProxy(NONE_PROXY)\` first, then call \`setCloudProxy\` again and set the cloud proxy type.

    Call \`setCloudProxy\` outside the channel. Its settings are valid within the \`RtcEngine\` life cycle.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    Since Web SDK v4.3.0, Agora has optimized the Cloud proxy architecture, enhanced the connectivity of the SDK in environments with restricted network access, and supports restricted access areas. Agora recommends that you upgrade to v4.3.0 or above.

    Depending on the Web SDK version you are using, refer to the corresponding implementation method:

    ### v4.3.0 or above [#v430-or-above]

    In [Agora Console](https://console.agora.io), select **RTC Services** from the sidebar, then locate the **Cloud Proxy** card and turn on its toggle.

    Call the \`startProxyServer\` method and set the \`mode\` parameter before joining the channel:

    * **Force UDP cloud proxy mode**: Set \`mode\` to \`3\`. Cloud proxy using UDP protocol. In this mode, the SDK always transmits data using UDP protocol.
    * **Force TCP cloud proxy mode**: Set \`mode\` to \`5\`. Supported since v4.9.0. In this mode, the SDK always transmits data over TLS 443.

    Test if you can initiate audio and video calls or live broadcasts normally.

    RTC SDK provides a \`client.on("is-using-cloud-proxy")\` event that triggers the callback after the media stream is successfully published locally, to inform whether the current media stream is forwarded by the cloud proxy service.

    \`\`\`javascript
    const client = AgoraRTC.createClient({mode: 'live',codec: 'vp8'});
    // Enable cloud proxy
    client.startProxyServer(3);
    // Join channel
    client.join("<YOUR TOKEN>", "<YOUR CHANNEL>").then(() => {
    /** ... **/
    });
    \`\`\`

    To stop using the proxy server, call \`stopProxyServer\` after leaving the channel.

    \`\`\`javascript
    // Leave channel
    client.leave();

    // Turn off the cloud proxy service
    client.stopProxyServer();

    // Rejoin channel
    client.join("<YOUR TOKEN>", "<YOUR CHANNEL>").then(() => {
    /** ... **/
    });
    \`\`\`

    ### v4.0.0-v4.2.1 [#v400-v421]

    In [Agora Console](https://console.agora.io), select **RTC Services** from the sidebar, then locate the **Cloud Proxy** card and turn on its toggle.

    Configure the firewall whitelist.

    Add the following test IP addresses and ports to your corporate firewall whitelist. The source address is the client integrated with the Web SDK.

    **Domestic testing**

    | Protocol | Target Address | Port                   | Port Usage                                     |
    | -------- | -------------- | ---------------------- | ---------------------------------------------- |
    | TCP      | 150.138.153.78 | 443, 4000, 3433 - 3460 | Message data transmission, media data exchange |
    | TCP      | 47.74.211.17   | 443                    | Edge node communication                        |
    | TCP      | 52.80.192.229  | 443                    | Edge node communication                        |
    | TCP      | 52.52.84.170   | 443                    | Edge node communication                        |
    | TCP      | 47.96.234.219  | 443                    | Edge node communication                        |
    | UDP      | 150.138.153.78 | 3478-3500              | media data exchange                            |

    **Overseas testing**

    | Protocol | Target Address | Port                   | Port Usage                                     |
    | -------- | -------------- | ---------------------- | ---------------------------------------------- |
    | TCP      | 23.236.115.138 | 443, 4000, 3433 - 3460 | Message data transmission, media data exchange |
    | TCP      | 148.153.66.218 | 443, 4000, 3433 - 3460 | Message data transmission, media data exchange |
    | TCP      | 47.74.211.17   | 443                    | Edge node communication                        |
    | TCP      | 52.80.192.229  | 443                    | Edge node communication                        |
    | TCP      | 52.52.84.170   | 443                    | Edge node communication                        |
    | TCP      | 47.96.234.219  | 443                    | Edge node communication                        |
    | UDP      | 23.236.115.138 | 3478-3500              | media data exchange                            |
    | UDP      | 148.153.66.218 | 3478-3500              | media data exchange                            |

    :::information[Information]
    The above IPs are only meant for debugging during the test phase. Before official launch, apply for custom cloud proxy service resources from Agora.
    :::

    To turn on cloud proxy server before joining the channel, call:

    \`\`\`javascript
    client.startProxyServer();
    \`\`\`

    To turn off cloud proxy server after leaving the channel, call:

    \`\`\`javascript
    client.stopProxyServer();
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    3. Call \`setCloudProxy\` and set \`proxyType\` to \`UDP_PROXY\` or \`TCP_PROXY\` to enable Cloud proxy.

    4. Test if you can initiate audio and video calls or live broadcasts normally.

    5. To stop using Cloud proxy, call \`setCloudProxy\` and set \`proxyType\` to \`NONE_PROXY\`.

    6. To update the current cloud proxy type, call \`setCloudProxy(NONE_PROXY)\` first, then call \`setCloudProxy\` again and set the cloud proxy type.

    Call \`setCloudProxy\` outside the channel. Its settings are valid within the \`RtcEngine\` life cycle.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>

## Reference [#reference]

This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

### Pricing [#pricing]

Agora charges for use of Cloud Proxy as follows.

### Duration-based pricing [#duration-based-pricing]

Duration-based pricing is based on the total number of minutes used per month across all users.

| Duration                   | Price per 1000 minutes/month |
| :------------------------- | ---------------------------: |
| UDP Audio Duration         |                        $0.99 |
| UDP video HD Duration      |                        $3.99 |
| UDP video Full HD Duration |                        $8.99 |
| UDP video 2K Duration      |                       $15.99 |
| UDP video 2K+ Duration     |                       $35.99 |
| TCP Audio Duration         |                        $0.99 |
| TCP video HD Duration      |                        $3.99 |
| TCP video Full HD Duration |                        $8.99 |
| TCP video 2K Duration      |                       $15.99 |
| TCP video 2K+ Duration     |                       $35.99 |

For volume pricing discount, contact [Agora support](mailto\\:support@agora.io).

#### PCU-based pricing [#pcu-based-pricing]

PCU is the maximum number of simultaneous users connected to the Cloud Proxy service at any point during the billing cycle. For PCU-based usage, Agora charges $500.00 for each VID.

For volume pricing discount, contact [Agora support](mailto\\:support@agora.io).

### IP addresses for Cloud Proxy [#ip-addresses-for-cloud-proxy]

To use Agora Cloud Proxy, your end users must first configure their firewalls to trust the following [IP address and port ranges](/en/realtime-media/rtc/reference/cloud-proxy-allowed-ips).

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;,&#x22;unreal&#x22;,&#x22;blueprint&#x22;,&#x22;web&#x22;,&#x22;windows&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        * If a user is in an intranet firewall environment and uses \`TRANSPORT_TYPE_UDP_PROXY\`, the services for Media Push and Co-hosting across channels are not available.
      </CalloutDescription>
    </CalloutContainer>

    ### API reference [#api-reference]

    * [\`setCloudProxy\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setcloudproxy)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        * If a user is in an intranet firewall environment and uses \`UdpProxy\`, the services for Media Push and Co-hosting across channels are not available.
      </CalloutDescription>
    </CalloutContainer>

    ### API reference [#api-reference-1]

    * [\`setCloudProxy\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setcloudproxy)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        * If a user is in an intranet firewall environment and uses \`udpProxy\`, the services for Media Push and Co-hosting across channels are not available.
      </CalloutDescription>
    </CalloutContainer>

    ### API reference [#api-reference-2]

    * [\`setCloudProxy\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setcloudproxy)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        * If a user is in an intranet firewall environment and uses \`udpProxy\`, the services for Media Push and Co-hosting across channels are not available.
      </CalloutDescription>
    </CalloutContainer>

    ### API reference [#api-reference-3]

    * [\`setCloudProxy\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setcloudproxy\\(_:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        * If a user is in an intranet firewall environment and uses \`udpProxy\`, the services for Media Push and Co-hosting across channels are not available.
      </CalloutDescription>
    </CalloutContainer>

    ### API reference [#api-reference-4]

    * [\`setCloudProxy\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setcloudproxy\\(_:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        * If a user is in an intranet firewall environment and uses \`UdpProxy\`, the services for Media Push and Co-hosting across channels are not available.
      </CalloutDescription>
    </CalloutContainer>

    ### API reference [#api-reference-5]

    * [\`setCloudProxy\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setcloudproxy)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        * If a user is in an intranet firewall environment and uses \`UDP_PROXY\`, the services for Media Push and Co-hosting across channels are not available.
      </CalloutDescription>
    </CalloutContainer>

    ### API reference [#api-reference-6]

    * [\`SetCloudProxy\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setcloudproxy)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unreal">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unreal" />

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        * If a user is in an intranet firewall environment and uses \`UDP_PROXY\`, the services for Media Push and Co-hosting across channels are not available.
      </CalloutDescription>
    </CalloutContainer>

    ### API reference [#api-reference-7]

    * [\`setCloudProxy\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_setcloudproxy)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="blueprint">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="blueprint" />

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        * If a user is in an intranet firewall environment and uses \`UDP_PROXY\`, the services for Media Push and Co-hosting across channels are not available.
      </CalloutDescription>
    </CalloutContainer>

    ### API reference [#api-reference-8]

    * [\`setCloudProxy\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_setcloudproxy)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    ### Firewall whitelist [#firewall-whitelist]

    Alternatively, you can whitelist the following domains and ports to ensure seamless communication with Agora's services. For the complete and current Web SDK allowlist, see [Firewall requirements](/en/realtime-media/rtc/reference/firewall).

    <CodeBlockTabs defaultValue="v4.24.5 and above">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="v4.24.5 and above">
          v4.24.5 and above
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="v4.4.0 - v4.24.4">
          v4.4.0 - v4.24.4
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="v4.0.0 - v4.4.0">
          v4.0.0 - v4.4.0
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="v4.24.5 and above">
        \`\`\`text  tabGroup="web-sdk-version"
        *.agora.io
        *.edge.agora.io
        *.sd-rtn.com
        *.edge.sd-rtn.com
        *.rtnsvc.com
        *.edge.rtnsvc.com
        *.rtesvc.com
        *.edge.rtesvc.com
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="v4.4.0 - v4.24.4">
        \`\`\`text  tabGroup="web-sdk-version"
        *.agora.io
        *.edge.agora.io
        *.sd-rtn.com
        *.edge.sd-rtn.com
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="v4.0.0 - v4.4.0">
        \`\`\`text  tabGroup="web-sdk-version"
        *.agora.io
        *.edge.agora.io
        *.agoraio.cn
        *.edge.agoraio.cn
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    <CalloutContainer type="info">
      <CalloutDescription>
        To improve connectivity over public networks, we recommend adding the domains listed above to your firewall allowlist.
      </CalloutDescription>
    </CalloutContainer>

    | Target Ports                                                                                         | Protocol | Action |
    | :--------------------------------------------------------------------------------------------------- | -------- | ------ |
    | 80; 443; 3433; 4700 - 5000; 5668; 5669; 6080; 6443; 8667; 9667; 30011 - 30013 (for bypass push flow) | TCP      | allow  |
    | 3478; 4700 - 5000 (version 2.9.0 and later); 10000 - 65535 (version before 2.9.0)                    | UDP      | allow  |

    ### API reference [#api-reference-9]

    * [\`startProxyServer\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#startproxyserver)
    * [\`stopProxyServer\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#stopproxyserver)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        * If a user is in an intranet firewall environment and uses \`UDP_PROXY\`, the services for Media Push and Co-hosting across channels are not available.
      </CalloutDescription>
    </CalloutContainer>

    ### API reference [#api-reference-10]

    * [\`setCloudProxy\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setcloudproxy)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Large enterprises, hospitals, universities, banks, and other institutions commonly deploy firewalls to meet their stringent security requirements. To ensure uninterrupted access to its services for enterprise users behind firewalls, Agora offers firewall whitelist and Cloud proxy services."
  }, {
    heading: undefined,
    content: "Admins enable users to use RTC SDK in network-restricted environments by adding specific IP addresses and ports to the firewall whitelist. Users make API calls to configure the Cloud proxy service."
  }, {
    heading: "understand-the-tech",
    content: "Cloud proxy works as follows:"
  }, {
    heading: "understand-the-tech",
    content: "RTC SDK initiates a request to Cloud proxy."
  }, {
    heading: "understand-the-tech",
    content: "Cloud proxy returns the corresponding proxy information."
  }, {
    heading: "understand-the-tech",
    content: "Agora SDK sends data to Cloud proxy. Cloud proxy receives the data and transmits it to Agora SDRTN®."
  }, {
    heading: "understand-the-tech",
    content: "SDRTN® returns data to Cloud proxy. Cloud proxy receives the data and sends it to the SDK."
  }, {
    heading: "prerequisites",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-cloud-proxy",
    content: "Take the following steps to use Cloud proxy in your app:"
  }, {
    heading: "implement-cloud-proxy",
    content: "In Agora Console, select **RTC Services** from the sidebar, then locate the **Cloud Proxy** card and turn on its toggle."
  }, {
    heading: "implement-cloud-proxy",
    content: "Configure the enterprise firewall to allow traffic from the IP address and port ranges in the Agora Allowed IP List."
  }, {
    heading: "platform-specific-steps",
    content: "Call `setCloudProxy` and set `proxyType` to `TRANSPORT_TYPE_UDP_PROXY` or `TRANSPORT_TYPE_TCP_PROXY` to enable Cloud proxy."
  }, {
    heading: "platform-specific-steps",
    content: "Test if you can initiate audio and video calls or live broadcasts normally."
  }, {
    heading: "platform-specific-steps",
    content: "To stop using Cloud proxy, call `setCloudProxy` and set `proxyType` to `TRANSPORT_TYPE_NONE_PROXY`."
  }, {
    heading: "platform-specific-steps",
    content: "To update the current `proxyType`, call `setCloudProxy(TRANSPORT_TYPE_NONE_PROXY)` first, then call `setCloudProxy` again with the new `proxyType`."
  }, {
    heading: "platform-specific-steps",
    content: "Call `setCloudProxy` outside the channel. Its settings are valid within the `RtcEngine` life cycle."
  }, {
    heading: "platform-specific-steps",
    content: "Call `setCloudProxy` and set `proxyType` to `UdpProxy` or `TcpProxy` to enable Cloud proxy."
  }, {
    heading: "platform-specific-steps",
    content: "Test if you can initiate audio and video calls or live broadcasts normally."
  }, {
    heading: "platform-specific-steps",
    content: "To stop using Cloud proxy, call `setCloudProxy` and set `proxyType` to `NoneProxy`."
  }, {
    heading: "platform-specific-steps",
    content: "To update the current cloud proxy type, call `setCloudProxy(NoneProxy)` first, then call `setCloudProxy` again and set the cloud proxy type."
  }, {
    heading: "platform-specific-steps",
    content: "Call `setCloudProxy` outside the channel. Its settings are valid within the `RtcEngine` life cycle."
  }, {
    heading: "platform-specific-steps",
    content: "Call `setCloudProxy` and set `proxyType` to `udpProxy` or `tcpProxy` to enable Cloud proxy."
  }, {
    heading: "platform-specific-steps",
    content: "Test if you can initiate audio and video calls or live broadcasts normally."
  }, {
    heading: "platform-specific-steps",
    content: "To stop using Cloud proxy, call `setCloudProxy` and set `proxyType` to `noneProxy`."
  }, {
    heading: "platform-specific-steps",
    content: "To update the current cloud proxy type, call `setCloudProxy(noneProxy)` first, then call `setCloudProxy` again and set the cloud proxy type."
  }, {
    heading: "platform-specific-steps",
    content: "Call `setCloudProxy` outside the channel. Its settings are valid within the `RtcEngine` life cycle."
  }, {
    heading: "platform-specific-steps",
    content: "Call `setCloudProxy` and set `proxyType` to `udpProxy` or `tcpProxy` to enable Cloud proxy."
  }, {
    heading: "platform-specific-steps",
    content: "Test if you can initiate audio and video calls or live broadcasts normally."
  }, {
    heading: "platform-specific-steps",
    content: "To stop using Cloud proxy, call `setCloudProxy` and set `proxyType` to `noneProxy`."
  }, {
    heading: "platform-specific-steps",
    content: "To update the current cloud proxy type, call `setCloudProxy(noneProxy)` first, then call `setCloudProxy` again and set the cloud proxy type."
  }, {
    heading: "platform-specific-steps",
    content: "Call `setCloudProxy` outside the channel. Its settings are valid within the `AgoraRtcEngineKit` life cycle."
  }, {
    heading: "platform-specific-steps",
    content: "Call `setCloudProxy` and set `proxyType` to `udpProxy` or `tcpProxy` to enable Cloud proxy."
  }, {
    heading: "platform-specific-steps",
    content: "Test if you can initiate audio and video calls or live broadcasts normally."
  }, {
    heading: "platform-specific-steps",
    content: "To stop using Cloud proxy, call `setCloudProxy` and set `proxyType` to `noneProxy`."
  }, {
    heading: "platform-specific-steps",
    content: "To update the current cloud proxy type, call `setCloudProxy(noneProxy)` first, then call `setCloudProxy` again and set the cloud proxy type."
  }, {
    heading: "platform-specific-steps",
    content: "Call `setCloudProxy` outside the channel. Its settings are valid within the `AgoraRtcEngineKit` life cycle."
  }, {
    heading: "platform-specific-steps",
    content: "Call `setCloudProxy` and set `proxyType` to `UdpProxy` or `TcpProxy` to enable Cloud proxy."
  }, {
    heading: "platform-specific-steps",
    content: "Test if you can initiate audio and video calls or live broadcasts normally."
  }, {
    heading: "platform-specific-steps",
    content: "To stop using Cloud proxy, call `setCloudProxy` and set `proxyType` to `NoneProxy`."
  }, {
    heading: "platform-specific-steps",
    content: "To update the current cloud proxy type, call `setCloudProxy(NoneProxy)` first, then call `setCloudProxy` again and set the cloud proxy type."
  }, {
    heading: "platform-specific-steps",
    content: "Call `setCloudProxy` outside the channel. Its settings are valid within the `RtcEngine` life cycle."
  }, {
    heading: "platform-specific-steps",
    content: "Call `SetCloudProxy` and set `proxyType` to `UDP_PROXY` or `TCP_PROXY` to enable Cloud proxy."
  }, {
    heading: "platform-specific-steps",
    content: "Test if you can initiate audio and video calls or live broadcasts normally."
  }, {
    heading: "platform-specific-steps",
    content: "To stop using Cloud proxy, call `SetCloudProxy` and set `proxyType` to `NONE_PROXY`."
  }, {
    heading: "platform-specific-steps",
    content: "To update the current cloud proxy type, call `SetCloudProxy(NONE_PROXY)` first, then call `SetCloudProxy` again and set the cloud proxy type."
  }, {
    heading: "platform-specific-steps",
    content: "Call `SetCloudProxy` outside the channel. Its settings are valid within the `RtcEngine` life cycle."
  }, {
    heading: "platform-specific-steps",
    content: "Call `setCloudProxy` and set `proxyType` to `UDP_PROXY` or `TCP_PROXY` to enable Cloud proxy."
  }, {
    heading: "platform-specific-steps",
    content: "Test if you can initiate audio and video calls or live broadcasts normally."
  }, {
    heading: "platform-specific-steps",
    content: "To stop using Cloud proxy, call `setCloudProxy` and set `proxyType` to `NONE_PROXY`."
  }, {
    heading: "platform-specific-steps",
    content: "To update the current cloud proxy type, call `setCloudProxy(NONE_PROXY)` first, then call `setCloudProxy` again and set the cloud proxy type."
  }, {
    heading: "platform-specific-steps",
    content: "Call `setCloudProxy` outside the channel. Its settings are valid within the `RtcEngine` life cycle."
  }, {
    heading: "platform-specific-steps",
    content: "Call `setCloudProxy` and set `proxyType` to `UDP_PROXY` or `TCP_PROXY` to enable Cloud proxy."
  }, {
    heading: "platform-specific-steps",
    content: "Test if you can initiate audio and video calls or live broadcasts normally."
  }, {
    heading: "platform-specific-steps",
    content: "To stop using Cloud proxy, call `setCloudProxy` and set `proxyType` to `NONE_PROXY`."
  }, {
    heading: "platform-specific-steps",
    content: "To update the current cloud proxy type, call `setCloudProxy(NONE_PROXY)` first, then call `setCloudProxy` again and set the cloud proxy type."
  }, {
    heading: "platform-specific-steps",
    content: "Call `setCloudProxy` outside the channel. Its settings are valid within the `RtcEngine` life cycle."
  }, {
    heading: "platform-specific-steps",
    content: "Since Web SDK v4.3.0, Agora has optimized the Cloud proxy architecture, enhanced the connectivity of the SDK in environments with restricted network access, and supports restricted access areas. Agora recommends that you upgrade to v4.3.0 or above."
  }, {
    heading: "platform-specific-steps",
    content: "Depending on the Web SDK version you are using, refer to the corresponding implementation method:"
  }, {
    heading: "v430-or-above",
    content: "In Agora Console, select **RTC Services** from the sidebar, then locate the **Cloud Proxy** card and turn on its toggle."
  }, {
    heading: "v430-or-above",
    content: "Call the `startProxyServer` method and set the `mode` parameter before joining the channel:"
  }, {
    heading: "v430-or-above",
    content: "**Force UDP cloud proxy mode**: Set `mode` to `3`. Cloud proxy using UDP protocol. In this mode, the SDK always transmits data using UDP protocol."
  }, {
    heading: "v430-or-above",
    content: "**Force TCP cloud proxy mode**: Set `mode` to `5`. Supported since v4.9.0. In this mode, the SDK always transmits data over TLS 443."
  }, {
    heading: "v430-or-above",
    content: "Test if you can initiate audio and video calls or live broadcasts normally."
  }, {
    heading: "v430-or-above",
    content: 'RTC SDK provides a `client.on("is-using-cloud-proxy")` event that triggers the callback after the media stream is successfully published locally, to inform whether the current media stream is forwarded by the cloud proxy service.'
  }, {
    heading: "v430-or-above",
    content: "To stop using the proxy server, call `stopProxyServer` after leaving the channel."
  }, {
    heading: "v400-v421",
    content: "In Agora Console, select **RTC Services** from the sidebar, then locate the **Cloud Proxy** card and turn on its toggle."
  }, {
    heading: "v400-v421",
    content: "Configure the firewall whitelist."
  }, {
    heading: "v400-v421",
    content: "Add the following test IP addresses and ports to your corporate firewall whitelist. The source address is the client integrated with the Web SDK."
  }, {
    heading: "v400-v421",
    content: "**Domestic testing**"
  }, {
    heading: "v400-v421",
    content: "Protocol"
  }, {
    heading: "v400-v421",
    content: "Target Address"
  }, {
    heading: "v400-v421",
    content: "Port"
  }, {
    heading: "v400-v421",
    content: "Port Usage"
  }, {
    heading: "v400-v421",
    content: "TCP"
  }, {
    heading: "v400-v421",
    content: "150.138.153.78"
  }, {
    heading: "v400-v421",
    content: "443, 4000, 3433 - 3460"
  }, {
    heading: "v400-v421",
    content: "Message data transmission, media data exchange"
  }, {
    heading: "v400-v421",
    content: "TCP"
  }, {
    heading: "v400-v421",
    content: "47.74.211.17"
  }, {
    heading: "v400-v421",
    content: "443"
  }, {
    heading: "v400-v421",
    content: "Edge node communication"
  }, {
    heading: "v400-v421",
    content: "TCP"
  }, {
    heading: "v400-v421",
    content: "52.80.192.229"
  }, {
    heading: "v400-v421",
    content: "443"
  }, {
    heading: "v400-v421",
    content: "Edge node communication"
  }, {
    heading: "v400-v421",
    content: "TCP"
  }, {
    heading: "v400-v421",
    content: "52.52.84.170"
  }, {
    heading: "v400-v421",
    content: "443"
  }, {
    heading: "v400-v421",
    content: "Edge node communication"
  }, {
    heading: "v400-v421",
    content: "TCP"
  }, {
    heading: "v400-v421",
    content: "47.96.234.219"
  }, {
    heading: "v400-v421",
    content: "443"
  }, {
    heading: "v400-v421",
    content: "Edge node communication"
  }, {
    heading: "v400-v421",
    content: "UDP"
  }, {
    heading: "v400-v421",
    content: "150.138.153.78"
  }, {
    heading: "v400-v421",
    content: "3478-3500"
  }, {
    heading: "v400-v421",
    content: "media data exchange"
  }, {
    heading: "v400-v421",
    content: "**Overseas testing**"
  }, {
    heading: "v400-v421",
    content: "Protocol"
  }, {
    heading: "v400-v421",
    content: "Target Address"
  }, {
    heading: "v400-v421",
    content: "Port"
  }, {
    heading: "v400-v421",
    content: "Port Usage"
  }, {
    heading: "v400-v421",
    content: "TCP"
  }, {
    heading: "v400-v421",
    content: "23.236.115.138"
  }, {
    heading: "v400-v421",
    content: "443, 4000, 3433 - 3460"
  }, {
    heading: "v400-v421",
    content: "Message data transmission, media data exchange"
  }, {
    heading: "v400-v421",
    content: "TCP"
  }, {
    heading: "v400-v421",
    content: "148.153.66.218"
  }, {
    heading: "v400-v421",
    content: "443, 4000, 3433 - 3460"
  }, {
    heading: "v400-v421",
    content: "Message data transmission, media data exchange"
  }, {
    heading: "v400-v421",
    content: "TCP"
  }, {
    heading: "v400-v421",
    content: "47.74.211.17"
  }, {
    heading: "v400-v421",
    content: "443"
  }, {
    heading: "v400-v421",
    content: "Edge node communication"
  }, {
    heading: "v400-v421",
    content: "TCP"
  }, {
    heading: "v400-v421",
    content: "52.80.192.229"
  }, {
    heading: "v400-v421",
    content: "443"
  }, {
    heading: "v400-v421",
    content: "Edge node communication"
  }, {
    heading: "v400-v421",
    content: "TCP"
  }, {
    heading: "v400-v421",
    content: "52.52.84.170"
  }, {
    heading: "v400-v421",
    content: "443"
  }, {
    heading: "v400-v421",
    content: "Edge node communication"
  }, {
    heading: "v400-v421",
    content: "TCP"
  }, {
    heading: "v400-v421",
    content: "47.96.234.219"
  }, {
    heading: "v400-v421",
    content: "443"
  }, {
    heading: "v400-v421",
    content: "Edge node communication"
  }, {
    heading: "v400-v421",
    content: "UDP"
  }, {
    heading: "v400-v421",
    content: "23.236.115.138"
  }, {
    heading: "v400-v421",
    content: "3478-3500"
  }, {
    heading: "v400-v421",
    content: "media data exchange"
  }, {
    heading: "v400-v421",
    content: "UDP"
  }, {
    heading: "v400-v421",
    content: "148.153.66.218"
  }, {
    heading: "v400-v421",
    content: "3478-3500"
  }, {
    heading: "v400-v421",
    content: "media data exchange"
  }, {
    heading: "v400-v421",
    content: "Information"
  }, {
    heading: "v400-v421",
    content: "The above IPs are only meant for debugging during the test phase. Before official launch, apply for custom cloud proxy service resources from Agora."
  }, {
    heading: "v400-v421",
    content: "To turn on cloud proxy server before joining the channel, call:"
  }, {
    heading: "v400-v421",
    content: "To turn off cloud proxy server after leaving the channel, call:"
  }, {
    heading: "v400-v421",
    content: "Call `setCloudProxy` and set `proxyType` to `UDP_PROXY` or `TCP_PROXY` to enable Cloud proxy."
  }, {
    heading: "v400-v421",
    content: "Test if you can initiate audio and video calls or live broadcasts normally."
  }, {
    heading: "v400-v421",
    content: "To stop using Cloud proxy, call `setCloudProxy` and set `proxyType` to `NONE_PROXY`."
  }, {
    heading: "v400-v421",
    content: "To update the current cloud proxy type, call `setCloudProxy(NONE_PROXY)` first, then call `setCloudProxy` again and set the cloud proxy type."
  }, {
    heading: "v400-v421",
    content: "Call `setCloudProxy` outside the channel. Its settings are valid within the `RtcEngine` life cycle."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "pricing",
    content: "Agora charges for use of Cloud Proxy as follows."
  }, {
    heading: "duration-based-pricing",
    content: "Duration-based pricing is based on the total number of minutes used per month across all users."
  }, {
    heading: "duration-based-pricing",
    content: "Duration"
  }, {
    heading: "duration-based-pricing",
    content: "Price per 1000 minutes/month"
  }, {
    heading: "duration-based-pricing",
    content: "UDP Audio Duration"
  }, {
    heading: "duration-based-pricing",
    content: "$0.99"
  }, {
    heading: "duration-based-pricing",
    content: "UDP video HD Duration"
  }, {
    heading: "duration-based-pricing",
    content: "$3.99"
  }, {
    heading: "duration-based-pricing",
    content: "UDP video Full HD Duration"
  }, {
    heading: "duration-based-pricing",
    content: "$8.99"
  }, {
    heading: "duration-based-pricing",
    content: "UDP video 2K Duration"
  }, {
    heading: "duration-based-pricing",
    content: "$15.99"
  }, {
    heading: "duration-based-pricing",
    content: "UDP video 2K+ Duration"
  }, {
    heading: "duration-based-pricing",
    content: "$35.99"
  }, {
    heading: "duration-based-pricing",
    content: "TCP Audio Duration"
  }, {
    heading: "duration-based-pricing",
    content: "$0.99"
  }, {
    heading: "duration-based-pricing",
    content: "TCP video HD Duration"
  }, {
    heading: "duration-based-pricing",
    content: "$3.99"
  }, {
    heading: "duration-based-pricing",
    content: "TCP video Full HD Duration"
  }, {
    heading: "duration-based-pricing",
    content: "$8.99"
  }, {
    heading: "duration-based-pricing",
    content: "TCP video 2K Duration"
  }, {
    heading: "duration-based-pricing",
    content: "$15.99"
  }, {
    heading: "duration-based-pricing",
    content: "TCP video 2K+ Duration"
  }, {
    heading: "duration-based-pricing",
    content: "$35.99"
  }, {
    heading: "duration-based-pricing",
    content: "For volume pricing discount, contact Agora support."
  }, {
    heading: "pcu-based-pricing",
    content: "PCU is the maximum number of simultaneous users connected to the Cloud Proxy service at any point during the billing cycle. For PCU-based usage, Agora charges $500.00 for each VID."
  }, {
    heading: "pcu-based-pricing",
    content: "For volume pricing discount, contact Agora support."
  }, {
    heading: "ip-addresses-for-cloud-proxy",
    content: "To use Agora Cloud Proxy, your end users must first configure their firewalls to trust the following IP address and port ranges."
  }, {
    heading: "ip-addresses-for-cloud-proxy",
    content: "If a user is in an intranet firewall environment and uses `TRANSPORT_TYPE_UDP_PROXY`, the services for Media Push and Co-hosting across channels are not available."
  }, {
    heading: "api-reference",
    content: "`setCloudProxy`"
  }, {
    heading: "api-reference",
    content: "If a user is in an intranet firewall environment and uses `UdpProxy`, the services for Media Push and Co-hosting across channels are not available."
  }, {
    heading: "api-reference-1",
    content: "`setCloudProxy`"
  }, {
    heading: "api-reference-1",
    content: "If a user is in an intranet firewall environment and uses `udpProxy`, the services for Media Push and Co-hosting across channels are not available."
  }, {
    heading: "api-reference-2",
    content: "`setCloudProxy`"
  }, {
    heading: "api-reference-2",
    content: "If a user is in an intranet firewall environment and uses `udpProxy`, the services for Media Push and Co-hosting across channels are not available."
  }, {
    heading: "api-reference-3",
    content: "`setCloudProxy`"
  }, {
    heading: "api-reference-3",
    content: "If a user is in an intranet firewall environment and uses `udpProxy`, the services for Media Push and Co-hosting across channels are not available."
  }, {
    heading: "api-reference-4",
    content: "`setCloudProxy`"
  }, {
    heading: "api-reference-4",
    content: "If a user is in an intranet firewall environment and uses `UdpProxy`, the services for Media Push and Co-hosting across channels are not available."
  }, {
    heading: "api-reference-5",
    content: "`setCloudProxy`"
  }, {
    heading: "api-reference-5",
    content: "If a user is in an intranet firewall environment and uses `UDP_PROXY`, the services for Media Push and Co-hosting across channels are not available."
  }, {
    heading: "api-reference-6",
    content: "`SetCloudProxy`"
  }, {
    heading: "api-reference-6",
    content: "If a user is in an intranet firewall environment and uses `UDP_PROXY`, the services for Media Push and Co-hosting across channels are not available."
  }, {
    heading: "api-reference-7",
    content: "`setCloudProxy`"
  }, {
    heading: "api-reference-7",
    content: "If a user is in an intranet firewall environment and uses `UDP_PROXY`, the services for Media Push and Co-hosting across channels are not available."
  }, {
    heading: "api-reference-8",
    content: "`setCloudProxy`"
  }, {
    heading: "firewall-whitelist",
    content: "Alternatively, you can whitelist the following domains and ports to ensure seamless communication with Agora's services. For the complete and current Web SDK allowlist, see Firewall requirements."
  }, {
    heading: "firewall-whitelist",
    content: "To improve connectivity over public networks, we recommend adding the domains listed above to your firewall allowlist."
  }, {
    heading: "firewall-whitelist",
    content: "Target Ports"
  }, {
    heading: "firewall-whitelist",
    content: "Protocol"
  }, {
    heading: "firewall-whitelist",
    content: "Action"
  }, {
    heading: "firewall-whitelist",
    content: "80; 443; 3433; 4700 - 5000; 5668; 5669; 6080; 6443; 8667; 9667; 30011 - 30013 (for bypass push flow)"
  }, {
    heading: "firewall-whitelist",
    content: "TCP"
  }, {
    heading: "firewall-whitelist",
    content: "allow"
  }, {
    heading: "firewall-whitelist",
    content: "3478; 4700 - 5000 (version 2.9.0 and later); 10000 - 65535 (version before 2.9.0)"
  }, {
    heading: "firewall-whitelist",
    content: "UDP"
  }, {
    heading: "firewall-whitelist",
    content: "allow"
  }, {
    heading: "api-reference-9",
    content: "`startProxyServer`"
  }, {
    heading: "api-reference-9",
    content: "`stopProxyServer`"
  }, {
    heading: "api-reference-9",
    content: "If a user is in an intranet firewall environment and uses `UDP_PROXY`, the services for Media Push and Co-hosting across channels are not available."
  }, {
    heading: "api-reference-10",
    content: "`setCloudProxy`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implement-cloud-proxy",
    content: "Implement Cloud Proxy"
  }, {
    id: "platform-specific-steps",
    content: "Platform-specific steps"
  }, {
    id: "v430-or-above",
    content: "v4.3.0 or above"
  }, {
    id: "v400-v421",
    content: "v4.0.0-v4.2.1"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "pricing",
    content: "Pricing"
  }, {
    id: "duration-based-pricing",
    content: "Duration-based pricing"
  }, {
    id: "pcu-based-pricing",
    content: "PCU-based pricing"
  }, {
    id: "ip-addresses-for-cloud-proxy",
    content: "IP addresses for Cloud Proxy"
  }, {
    id: "api-reference",
    content: "API reference"
  }, {
    id: "api-reference-1",
    content: "API reference"
  }, {
    id: "api-reference-2",
    content: "API reference"
  }, {
    id: "api-reference-3",
    content: "API reference"
  }, {
    id: "api-reference-4",
    content: "API reference"
  }, {
    id: "api-reference-5",
    content: "API reference"
  }, {
    id: "api-reference-6",
    content: "API reference"
  }, {
    id: "api-reference-7",
    content: "API reference"
  }, {
    id: "api-reference-8",
    content: "API reference"
  }, {
    id: "firewall-whitelist",
    content: "Firewall whitelist"
  }, {
    id: "api-reference-9",
    content: "API reference"
  }, {
    id: "api-reference-10",
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
  url: "#implement-cloud-proxy",
  title: _jsx(_Fragment, {
    children: "Implement Cloud Proxy"
  })
}, {
  depth: 3,
  url: "#platform-specific-steps",
  title: _jsx(_Fragment, {
    children: "Platform-specific steps"
  })
}, {
  depth: 3,
  url: "#v430-or-above",
  title: _jsx(_Fragment, {
    children: "v4.3.0 or above"
  })
}, {
  depth: 3,
  url: "#v400-v421",
  title: _jsx(_Fragment, {
    children: "v4.0.0-v4.2.1"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#pricing",
  title: _jsx(_Fragment, {
    children: "Pricing"
  })
}, {
  depth: 3,
  url: "#duration-based-pricing",
  title: _jsx(_Fragment, {
    children: "Duration-based pricing"
  })
}, {
  depth: 4,
  url: "#pcu-based-pricing",
  title: _jsx(_Fragment, {
    children: "PCU-based pricing"
  })
}, {
  depth: 3,
  url: "#ip-addresses-for-cloud-proxy",
  title: _jsx(_Fragment, {
    children: "IP addresses for Cloud Proxy"
  })
}, {
  depth: 3,
  url: "#api-reference",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#api-reference-1",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#api-reference-2",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#api-reference-3",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#api-reference-4",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#api-reference-5",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#api-reference-6",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#api-reference-7",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#api-reference-8",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#firewall-whitelist",
  title: _jsx(_Fragment, {
    children: "Firewall whitelist"
  })
}, {
  depth: 3,
  url: "#api-reference-9",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#api-reference-10",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
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
  }, { Accordion, Accordions, CalloutContainer, CalloutDescription, CalloutTitle, CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!Accordion)
    _missingMdxReference("Accordion", true);
  if (!Accordions)
    _missingMdxReference("Accordions", true);
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
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Large enterprises, hospitals, universities, banks, and other institutions commonly deploy firewalls to meet their stringent security requirements. To ensure uninterrupted access to its services for enterprise users behind firewalls, Agora offers firewall whitelist and Cloud proxy services."
    }), `
`, _jsx(_components.p, {
      children: "Admins enable users to use RTC SDK in network-restricted environments by adding specific IP addresses and ports to the firewall whitelist. Users make API calls to configure the Cloud proxy service."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: "Cloud proxy works as follows:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "RTC SDK initiates a request to Cloud proxy."
      }), `
`, _jsx(_components.li, {
        children: "Cloud proxy returns the corresponding proxy information."
      }), `
`, _jsx(_components.li, {
        children: "Agora SDK sends data to Cloud proxy. Cloud proxy receives the data and transmits it to Agora SDRTN®."
      }), `
`, _jsx(_components.li, {
        children: "SDRTN® returns data to Cloud proxy. Cloud proxy receives the data and sends it to the SDK."
      }), `
`]
    }), `
`, _jsx(Accordions, {
      children: _jsx(Accordion, {
        title: "Cloud proxy workflow",
        children: _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/cloud-proxy-tech.svg",
            alt: ""
          })
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.p, {
      children: ["Ensure that you have implemented the ", _jsx(_components.a, {
        href: "/en/realtime-media/rtc/get-started-sdk",
        children: "SDK quickstart"
      }), " in your project."]
    }), `
`, _jsx(_components.h2, {
      id: "implement-cloud-proxy",
      children: "Implement Cloud Proxy"
    }), `
`, _jsx(_components.p, {
      children: "Take the following steps to use Cloud proxy in your app:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In ", _jsx(_components.a, {
            href: "https://console.agora.io",
            children: "Agora Console"
          }), ", select ", _jsx(_components.strong, {
            children: "RTC Services"
          }), " from the sidebar, then locate the ", _jsx(_components.strong, {
            children: "Cloud Proxy"
          }), " card and turn on its toggle."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Configure the enterprise firewall to allow traffic from the IP address and port ranges in the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/reference/cloud-proxy-allowed-ips",
            children: "Agora Allowed IP List"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "platform-specific-steps",
      children: "Platform-specific steps"
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","electron","flutter","ios","macos","react-native","unity","unreal","blueprint","web","windows"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsxs(_components.ol, {
          start: "3",
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " and set ", _jsx(_components.code, {
                children: "proxyType"
              }), " to ", _jsx(_components.code, {
                children: "TRANSPORT_TYPE_UDP_PROXY"
              }), " or ", _jsx(_components.code, {
                children: "TRANSPORT_TYPE_TCP_PROXY"
              }), " to enable Cloud proxy."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Test if you can initiate audio and video calls or live broadcasts normally."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To stop using Cloud proxy, call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " and set ", _jsx(_components.code, {
                children: "proxyType"
              }), " to ", _jsx(_components.code, {
                children: "TRANSPORT_TYPE_NONE_PROXY"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To update the current ", _jsx(_components.code, {
                children: "proxyType"
              }), ", call ", _jsx(_components.code, {
                children: "setCloudProxy(TRANSPORT_TYPE_NONE_PROXY)"
              }), " first, then call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " again with the new ", _jsx(_components.code, {
                children: "proxyType"
              }), "."]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setCloudProxy"
          }), " outside the channel. Its settings are valid within the ", _jsx(_components.code, {
            children: "RtcEngine"
          }), " life cycle."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "electron",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "electron"
        }), _jsxs(_components.ol, {
          start: "3",
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " and set ", _jsx(_components.code, {
                children: "proxyType"
              }), " to ", _jsx(_components.code, {
                children: "UdpProxy"
              }), " or ", _jsx(_components.code, {
                children: "TcpProxy"
              }), " to enable Cloud proxy."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Test if you can initiate audio and video calls or live broadcasts normally."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To stop using Cloud proxy, call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " and set ", _jsx(_components.code, {
                children: "proxyType"
              }), " to ", _jsx(_components.code, {
                children: "NoneProxy"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To update the current cloud proxy type, call ", _jsx(_components.code, {
                children: "setCloudProxy(NoneProxy)"
              }), " first, then call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " again and set the cloud proxy type."]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setCloudProxy"
          }), " outside the channel. Its settings are valid within the ", _jsx(_components.code, {
            children: "RtcEngine"
          }), " life cycle."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "flutter",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "flutter"
        }), _jsxs(_components.ol, {
          start: "3",
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " and set ", _jsx(_components.code, {
                children: "proxyType"
              }), " to ", _jsx(_components.code, {
                children: "udpProxy"
              }), " or ", _jsx(_components.code, {
                children: "tcpProxy"
              }), " to enable Cloud proxy."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Test if you can initiate audio and video calls or live broadcasts normally."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To stop using Cloud proxy, call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " and set ", _jsx(_components.code, {
                children: "proxyType"
              }), " to ", _jsx(_components.code, {
                children: "noneProxy"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To update the current cloud proxy type, call ", _jsx(_components.code, {
                children: "setCloudProxy(noneProxy)"
              }), " first, then call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " again and set the cloud proxy type."]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setCloudProxy"
          }), " outside the channel. Its settings are valid within the ", _jsx(_components.code, {
            children: "RtcEngine"
          }), " life cycle."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "ios",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "ios"
        }), _jsxs(_components.ol, {
          start: "3",
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " and set ", _jsx(_components.code, {
                children: "proxyType"
              }), " to ", _jsx(_components.code, {
                children: "udpProxy"
              }), " or ", _jsx(_components.code, {
                children: "tcpProxy"
              }), " to enable Cloud proxy."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Test if you can initiate audio and video calls or live broadcasts normally."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To stop using Cloud proxy, call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " and set ", _jsx(_components.code, {
                children: "proxyType"
              }), " to ", _jsx(_components.code, {
                children: "noneProxy"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To update the current cloud proxy type, call ", _jsx(_components.code, {
                children: "setCloudProxy(noneProxy)"
              }), " first, then call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " again and set the cloud proxy type."]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setCloudProxy"
          }), " outside the channel. Its settings are valid within the ", _jsx(_components.code, {
            children: "AgoraRtcEngineKit"
          }), " life cycle."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "macos",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "macos"
        }), _jsxs(_components.ol, {
          start: "3",
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " and set ", _jsx(_components.code, {
                children: "proxyType"
              }), " to ", _jsx(_components.code, {
                children: "udpProxy"
              }), " or ", _jsx(_components.code, {
                children: "tcpProxy"
              }), " to enable Cloud proxy."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Test if you can initiate audio and video calls or live broadcasts normally."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To stop using Cloud proxy, call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " and set ", _jsx(_components.code, {
                children: "proxyType"
              }), " to ", _jsx(_components.code, {
                children: "noneProxy"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To update the current cloud proxy type, call ", _jsx(_components.code, {
                children: "setCloudProxy(noneProxy)"
              }), " first, then call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " again and set the cloud proxy type."]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setCloudProxy"
          }), " outside the channel. Its settings are valid within the ", _jsx(_components.code, {
            children: "AgoraRtcEngineKit"
          }), " life cycle."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "react-native",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "react-native"
        }), _jsxs(_components.ol, {
          start: "3",
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " and set ", _jsx(_components.code, {
                children: "proxyType"
              }), " to ", _jsx(_components.code, {
                children: "UdpProxy"
              }), " or ", _jsx(_components.code, {
                children: "TcpProxy"
              }), " to enable Cloud proxy."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Test if you can initiate audio and video calls or live broadcasts normally."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To stop using Cloud proxy, call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " and set ", _jsx(_components.code, {
                children: "proxyType"
              }), " to ", _jsx(_components.code, {
                children: "NoneProxy"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To update the current cloud proxy type, call ", _jsx(_components.code, {
                children: "setCloudProxy(NoneProxy)"
              }), " first, then call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " again and set the cloud proxy type."]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setCloudProxy"
          }), " outside the channel. Its settings are valid within the ", _jsx(_components.code, {
            children: "RtcEngine"
          }), " life cycle."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "unity",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "unity"
        }), _jsxs(_components.ol, {
          start: "3",
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "SetCloudProxy"
              }), " and set ", _jsx(_components.code, {
                children: "proxyType"
              }), " to ", _jsx(_components.code, {
                children: "UDP_PROXY"
              }), " or ", _jsx(_components.code, {
                children: "TCP_PROXY"
              }), " to enable Cloud proxy."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Test if you can initiate audio and video calls or live broadcasts normally."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To stop using Cloud proxy, call ", _jsx(_components.code, {
                children: "SetCloudProxy"
              }), " and set ", _jsx(_components.code, {
                children: "proxyType"
              }), " to ", _jsx(_components.code, {
                children: "NONE_PROXY"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To update the current cloud proxy type, call ", _jsx(_components.code, {
                children: "SetCloudProxy(NONE_PROXY)"
              }), " first, then call ", _jsx(_components.code, {
                children: "SetCloudProxy"
              }), " again and set the cloud proxy type."]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "SetCloudProxy"
          }), " outside the channel. Its settings are valid within the ", _jsx(_components.code, {
            children: "RtcEngine"
          }), " life cycle."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "unreal",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "unreal"
        }), _jsxs(_components.ol, {
          start: "3",
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " and set ", _jsx(_components.code, {
                children: "proxyType"
              }), " to ", _jsx(_components.code, {
                children: "UDP_PROXY"
              }), " or ", _jsx(_components.code, {
                children: "TCP_PROXY"
              }), " to enable Cloud proxy."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Test if you can initiate audio and video calls or live broadcasts normally."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To stop using Cloud proxy, call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " and set ", _jsx(_components.code, {
                children: "proxyType"
              }), " to ", _jsx(_components.code, {
                children: "NONE_PROXY"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To update the current cloud proxy type, call ", _jsx(_components.code, {
                children: "setCloudProxy(NONE_PROXY)"
              }), " first, then call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " again and set the cloud proxy type."]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setCloudProxy"
          }), " outside the channel. Its settings are valid within the ", _jsx(_components.code, {
            children: "RtcEngine"
          }), " life cycle."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "blueprint",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "blueprint"
        }), _jsxs(_components.ol, {
          start: "3",
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " and set ", _jsx(_components.code, {
                children: "proxyType"
              }), " to ", _jsx(_components.code, {
                children: "UDP_PROXY"
              }), " or ", _jsx(_components.code, {
                children: "TCP_PROXY"
              }), " to enable Cloud proxy."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Test if you can initiate audio and video calls or live broadcasts normally."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To stop using Cloud proxy, call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " and set ", _jsx(_components.code, {
                children: "proxyType"
              }), " to ", _jsx(_components.code, {
                children: "NONE_PROXY"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To update the current cloud proxy type, call ", _jsx(_components.code, {
                children: "setCloudProxy(NONE_PROXY)"
              }), " first, then call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " again and set the cloud proxy type."]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setCloudProxy"
          }), " outside the channel. Its settings are valid within the ", _jsx(_components.code, {
            children: "RtcEngine"
          }), " life cycle."]
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
          children: "Since Web SDK v4.3.0, Agora has optimized the Cloud proxy architecture, enhanced the connectivity of the SDK in environments with restricted network access, and supports restricted access areas. Agora recommends that you upgrade to v4.3.0 or above."
        }), _jsx(_components.p, {
          children: "Depending on the Web SDK version you are using, refer to the corresponding implementation method:"
        }), _jsx(_components.h3, {
          id: "v430-or-above",
          children: "v4.3.0 or above"
        }), _jsxs(_components.p, {
          children: ["In ", _jsx(_components.a, {
            href: "https://console.agora.io",
            children: "Agora Console"
          }), ", select ", _jsx(_components.strong, {
            children: "RTC Services"
          }), " from the sidebar, then locate the ", _jsx(_components.strong, {
            children: "Cloud Proxy"
          }), " card and turn on its toggle."]
        }), _jsxs(_components.p, {
          children: ["Call the ", _jsx(_components.code, {
            children: "startProxyServer"
          }), " method and set the ", _jsx(_components.code, {
            children: "mode"
          }), " parameter before joining the channel:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Force UDP cloud proxy mode"
            }), ": Set ", _jsx(_components.code, {
              children: "mode"
            }), " to ", _jsx(_components.code, {
              children: "3"
            }), ". Cloud proxy using UDP protocol. In this mode, the SDK always transmits data using UDP protocol."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Force TCP cloud proxy mode"
            }), ": Set ", _jsx(_components.code, {
              children: "mode"
            }), " to ", _jsx(_components.code, {
              children: "5"
            }), ". Supported since v4.9.0. In this mode, the SDK always transmits data over TLS 443."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "Test if you can initiate audio and video calls or live broadcasts normally."
        }), _jsxs(_components.p, {
          children: ["RTC SDK provides a ", _jsx(_components.code, {
            children: 'client.on("is-using-cloud-proxy")'
          }), " event that triggers the callback after the media stream is successfully published locally, to inform whether the current media stream is forwarded by the cloud proxy service."]
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
                  children: " client"
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
                  children: " AgoraRTC."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "createClient"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({mode: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'live'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ",codec: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'vp8'"
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
                  children: "// Enable cloud proxy"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "client."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "startProxyServer"
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
                  children: "3"
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
                  children: "// Join channel"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "client."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "join"
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
                  children: '"<YOUR TOKEN>"'
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
                  children: '"<YOUR CHANNEL>"'
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
                  children: "then"
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
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "/** ... **/"
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
        }), _jsxs(_components.p, {
          children: ["To stop using the proxy server, call ", _jsx(_components.code, {
            children: "stopProxyServer"
          }), " after leaving the channel."]
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
                  children: "// Leave channel"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "client."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "leave"
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
                  children: "// Turn off the cloud proxy service"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "client."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "stopProxyServer"
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
                  children: "// Rejoin channel"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "client."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "join"
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
                  children: '"<YOUR TOKEN>"'
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
                  children: '"<YOUR CHANNEL>"'
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
                  children: "then"
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
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "/** ... **/"
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
        }), _jsx(_components.h3, {
          id: "v400-v421",
          children: "v4.0.0-v4.2.1"
        }), _jsxs(_components.p, {
          children: ["In ", _jsx(_components.a, {
            href: "https://console.agora.io",
            children: "Agora Console"
          }), ", select ", _jsx(_components.strong, {
            children: "RTC Services"
          }), " from the sidebar, then locate the ", _jsx(_components.strong, {
            children: "Cloud Proxy"
          }), " card and turn on its toggle."]
        }), _jsx(_components.p, {
          children: "Configure the firewall whitelist."
        }), _jsx(_components.p, {
          children: "Add the following test IP addresses and ports to your corporate firewall whitelist. The source address is the client integrated with the Web SDK."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Domestic testing"
          })
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Protocol"
              }), _jsx(_components.th, {
                children: "Target Address"
              }), _jsx(_components.th, {
                children: "Port"
              }), _jsx(_components.th, {
                children: "Port Usage"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "TCP"
              }), _jsx(_components.td, {
                children: "150.138.153.78"
              }), _jsx(_components.td, {
                children: "443, 4000, 3433 - 3460"
              }), _jsx(_components.td, {
                children: "Message data transmission, media data exchange"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "TCP"
              }), _jsx(_components.td, {
                children: "47.74.211.17"
              }), _jsx(_components.td, {
                children: "443"
              }), _jsx(_components.td, {
                children: "Edge node communication"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "TCP"
              }), _jsx(_components.td, {
                children: "52.80.192.229"
              }), _jsx(_components.td, {
                children: "443"
              }), _jsx(_components.td, {
                children: "Edge node communication"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "TCP"
              }), _jsx(_components.td, {
                children: "52.52.84.170"
              }), _jsx(_components.td, {
                children: "443"
              }), _jsx(_components.td, {
                children: "Edge node communication"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "TCP"
              }), _jsx(_components.td, {
                children: "47.96.234.219"
              }), _jsx(_components.td, {
                children: "443"
              }), _jsx(_components.td, {
                children: "Edge node communication"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "UDP"
              }), _jsx(_components.td, {
                children: "150.138.153.78"
              }), _jsx(_components.td, {
                children: "3478-3500"
              }), _jsx(_components.td, {
                children: "media data exchange"
              })]
            })]
          })]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Overseas testing"
          })
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Protocol"
              }), _jsx(_components.th, {
                children: "Target Address"
              }), _jsx(_components.th, {
                children: "Port"
              }), _jsx(_components.th, {
                children: "Port Usage"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "TCP"
              }), _jsx(_components.td, {
                children: "23.236.115.138"
              }), _jsx(_components.td, {
                children: "443, 4000, 3433 - 3460"
              }), _jsx(_components.td, {
                children: "Message data transmission, media data exchange"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "TCP"
              }), _jsx(_components.td, {
                children: "148.153.66.218"
              }), _jsx(_components.td, {
                children: "443, 4000, 3433 - 3460"
              }), _jsx(_components.td, {
                children: "Message data transmission, media data exchange"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "TCP"
              }), _jsx(_components.td, {
                children: "47.74.211.17"
              }), _jsx(_components.td, {
                children: "443"
              }), _jsx(_components.td, {
                children: "Edge node communication"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "TCP"
              }), _jsx(_components.td, {
                children: "52.80.192.229"
              }), _jsx(_components.td, {
                children: "443"
              }), _jsx(_components.td, {
                children: "Edge node communication"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "TCP"
              }), _jsx(_components.td, {
                children: "52.52.84.170"
              }), _jsx(_components.td, {
                children: "443"
              }), _jsx(_components.td, {
                children: "Edge node communication"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "TCP"
              }), _jsx(_components.td, {
                children: "47.96.234.219"
              }), _jsx(_components.td, {
                children: "443"
              }), _jsx(_components.td, {
                children: "Edge node communication"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "UDP"
              }), _jsx(_components.td, {
                children: "23.236.115.138"
              }), _jsx(_components.td, {
                children: "3478-3500"
              }), _jsx(_components.td, {
                children: "media data exchange"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "UDP"
              }), _jsx(_components.td, {
                children: "148.153.66.218"
              }), _jsx(_components.td, {
                children: "3478-3500"
              }), _jsx(_components.td, {
                children: "media data exchange"
              })]
            })]
          })]
        }), _jsxs(_components.div, {
          children: [_jsx(_components.p, {
            children: "Information"
          }), _jsx(_components.p, {
            children: "The above IPs are only meant for debugging during the test phase. Before official launch, apply for custom cloud proxy service resources from Agora."
          })]
        }), _jsx(_components.p, {
          children: "To turn on cloud proxy server before joining the channel, call:"
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
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "client."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "startProxyServer"
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
        }), _jsx(_components.p, {
          children: "To turn off cloud proxy server after leaving the channel, call:"
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
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "client."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "stopProxyServer"
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
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "windows",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "windows"
        }), _jsxs(_components.ol, {
          start: "3",
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " and set ", _jsx(_components.code, {
                children: "proxyType"
              }), " to ", _jsx(_components.code, {
                children: "UDP_PROXY"
              }), " or ", _jsx(_components.code, {
                children: "TCP_PROXY"
              }), " to enable Cloud proxy."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Test if you can initiate audio and video calls or live broadcasts normally."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To stop using Cloud proxy, call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " and set ", _jsx(_components.code, {
                children: "proxyType"
              }), " to ", _jsx(_components.code, {
                children: "NONE_PROXY"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To update the current cloud proxy type, call ", _jsx(_components.code, {
                children: "setCloudProxy(NONE_PROXY)"
              }), " first, then call ", _jsx(_components.code, {
                children: "setCloudProxy"
              }), " again and set the cloud proxy type."]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setCloudProxy"
          }), " outside the channel. Its settings are valid within the ", _jsx(_components.code, {
            children: "RtcEngine"
          }), " life cycle."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
    }), `
`, _jsx(_components.h3, {
      id: "pricing",
      children: "Pricing"
    }), `
`, _jsx(_components.p, {
      children: "Agora charges for use of Cloud Proxy as follows."
    }), `
`, _jsx(_components.h3, {
      id: "duration-based-pricing",
      children: "Duration-based pricing"
    }), `
`, _jsx(_components.p, {
      children: "Duration-based pricing is based on the total number of minutes used per month across all users."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Duration"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Price per 1000 minutes/month"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "UDP Audio Duration"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "$0.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "UDP video HD Duration"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "$3.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "UDP video Full HD Duration"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "$8.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "UDP video 2K Duration"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "$15.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "UDP video 2K+ Duration"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "$35.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "TCP Audio Duration"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "$0.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "TCP video HD Duration"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "$3.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "TCP video Full HD Duration"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "$8.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "TCP video 2K Duration"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "$15.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "TCP video 2K+ Duration"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "$35.99"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For volume pricing discount, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "Agora support"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "pcu-based-pricing",
      children: "PCU-based pricing"
    }), `
`, _jsx(_components.p, {
      children: "PCU is the maximum number of simultaneous users connected to the Cloud Proxy service at any point during the billing cycle. For PCU-based usage, Agora charges $500.00 for each VID."
    }), `
`, _jsxs(_components.p, {
      children: ["For volume pricing discount, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "Agora support"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "ip-addresses-for-cloud-proxy",
      children: "IP addresses for Cloud Proxy"
    }), `
`, _jsxs(_components.p, {
      children: ["To use Agora Cloud Proxy, your end users must first configure their firewalls to trust the following ", _jsx(_components.a, {
        href: "/en/realtime-media/rtc/reference/cloud-proxy-allowed-ips",
        children: "IP address and port ranges"
      }), "."]
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","electron","flutter","ios","macos","react-native","unity","unreal","blueprint","web","windows"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Caution"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["If a user is in an intranet firewall environment and uses ", _jsx(_components.code, {
                  children: "TRANSPORT_TYPE_UDP_PROXY"
                }), ", the services for Media Push and Co-hosting across channels are not available."]
              }), `
`]
            })
          })]
        }), _jsx(_components.h3, {
          id: "api-reference",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setcloudproxy",
              children: _jsx(_components.code, {
                children: "setCloudProxy"
              })
            })
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
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Caution"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["If a user is in an intranet firewall environment and uses ", _jsx(_components.code, {
                  children: "UdpProxy"
                }), ", the services for Media Push and Co-hosting across channels are not available."]
              }), `
`]
            })
          })]
        }), _jsx(_components.h3, {
          id: "api-reference-1",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setcloudproxy",
              children: _jsx(_components.code, {
                children: "setCloudProxy"
              })
            })
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
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Caution"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["If a user is in an intranet firewall environment and uses ", _jsx(_components.code, {
                  children: "udpProxy"
                }), ", the services for Media Push and Co-hosting across channels are not available."]
              }), `
`]
            })
          })]
        }), _jsx(_components.h3, {
          id: "api-reference-2",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setcloudproxy",
              children: _jsx(_components.code, {
                children: "setCloudProxy"
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
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Caution"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["If a user is in an intranet firewall environment and uses ", _jsx(_components.code, {
                  children: "udpProxy"
                }), ", the services for Media Push and Co-hosting across channels are not available."]
              }), `
`]
            })
          })]
        }), _jsx(_components.h3, {
          id: "api-reference-3",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setcloudproxy(_:)",
              children: _jsx(_components.code, {
                children: "setCloudProxy"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "macos",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "macos"
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Caution"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["If a user is in an intranet firewall environment and uses ", _jsx(_components.code, {
                  children: "udpProxy"
                }), ", the services for Media Push and Co-hosting across channels are not available."]
              }), `
`]
            })
          })]
        }), _jsx(_components.h3, {
          id: "api-reference-4",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setcloudproxy(_:)",
              children: _jsx(_components.code, {
                children: "setCloudProxy"
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
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Caution"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["If a user is in an intranet firewall environment and uses ", _jsx(_components.code, {
                  children: "UdpProxy"
                }), ", the services for Media Push and Co-hosting across channels are not available."]
              }), `
`]
            })
          })]
        }), _jsx(_components.h3, {
          id: "api-reference-5",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setcloudproxy",
              children: _jsx(_components.code, {
                children: "setCloudProxy"
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
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Caution"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["If a user is in an intranet firewall environment and uses ", _jsx(_components.code, {
                  children: "UDP_PROXY"
                }), ", the services for Media Push and Co-hosting across channels are not available."]
              }), `
`]
            })
          })]
        }), _jsx(_components.h3, {
          id: "api-reference-6",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setcloudproxy",
              children: _jsx(_components.code, {
                children: "SetCloudProxy"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "unreal",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "unreal"
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Caution"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["If a user is in an intranet firewall environment and uses ", _jsx(_components.code, {
                  children: "UDP_PROXY"
                }), ", the services for Media Push and Co-hosting across channels are not available."]
              }), `
`]
            })
          })]
        }), _jsx(_components.h3, {
          id: "api-reference-7",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_setcloudproxy",
              children: _jsx(_components.code, {
                children: "setCloudProxy"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "blueprint",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "blueprint"
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Caution"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["If a user is in an intranet firewall environment and uses ", _jsx(_components.code, {
                  children: "UDP_PROXY"
                }), ", the services for Media Push and Co-hosting across channels are not available."]
              }), `
`]
            })
          })]
        }), _jsx(_components.h3, {
          id: "api-reference-8",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_setcloudproxy",
              children: _jsx(_components.code, {
                children: "setCloudProxy"
              })
            })
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
        }), _jsx(_components.h3, {
          id: "firewall-whitelist",
          children: "Firewall whitelist"
        }), _jsxs(_components.p, {
          children: ["Alternatively, you can whitelist the following domains and ports to ensure seamless communication with Agora's services. For the complete and current Web SDK allowlist, see ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/reference/firewall",
            children: "Firewall requirements"
          }), "."]
        }), _jsxs(CodeBlockTabs, {
          defaultValue: "v4.24.5 and above",
          children: [_jsxs(CodeBlockTabsList, {
            children: [_jsx(CodeBlockTabsTrigger, {
              value: "v4.24.5 and above",
              children: "v4.24.5 and above"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "v4.4.0 - v4.24.4",
              children: "v4.4.0 - v4.24.4"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "v4.0.0 - v4.4.0",
              children: "v4.0.0 - v4.4.0"
            })]
          }), _jsx(CodeBlockTab, {
            value: "v4.24.5 and above",
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
                      children: "*"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".agora.io"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
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
                      children: ".edge.agora.io"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
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
                      children: ".sd-rtn.com"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
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
                      children: ".edge.sd-rtn.com"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
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
                      children: ".rtnsvc.com"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
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
                      children: ".edge.rtnsvc.com"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
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
                      children: ".rtesvc.com"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
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
                      children: ".edge.rtesvc.com"
                    })]
                  })]
                })
              })
            })
          }), _jsx(CodeBlockTab, {
            value: "v4.4.0 - v4.24.4",
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
                      children: "*"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".agora.io"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
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
                      children: ".edge.agora.io"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
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
                      children: ".sd-rtn.com"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
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
                      children: ".edge.sd-rtn.com"
                    })]
                  })]
                })
              })
            })
          }), _jsx(CodeBlockTab, {
            value: "v4.0.0 - v4.4.0",
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
                      children: "*"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".agora.io"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
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
                      children: ".edge.agora.io"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
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
                      children: ".agoraio.cn"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
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
                      children: ".edge.agoraio.cn"
                    })]
                  })]
                })
              })
            })
          })]
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "To improve connectivity over public networks, we recommend adding the domains listed above to your firewall allowlist."
            })
          })
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Target Ports"
              }), _jsx(_components.th, {
                children: "Protocol"
              }), _jsx(_components.th, {
                children: "Action"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "80; 443; 3433; 4700 - 5000; 5668; 5669; 6080; 6443; 8667; 9667; 30011 - 30013 (for bypass push flow)"
              }), _jsx(_components.td, {
                children: "TCP"
              }), _jsx(_components.td, {
                children: "allow"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "3478; 4700 - 5000 (version 2.9.0 and later); 10000 - 65535 (version before 2.9.0)"
              }), _jsx(_components.td, {
                children: "UDP"
              }), _jsx(_components.td, {
                children: "allow"
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "api-reference-9",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#startproxyserver",
              children: _jsx(_components.code, {
                children: "startProxyServer"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#stopproxyserver",
              children: _jsx(_components.code, {
                children: "stopProxyServer"
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
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Caution"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["If a user is in an intranet firewall environment and uses ", _jsx(_components.code, {
                  children: "UDP_PROXY"
                }), ", the services for Media Push and Co-hosting across channels are not available."]
              }), `
`]
            })
          })]
        }), _jsx(_components.h3, {
          id: "api-reference-10",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setcloudproxy",
              children: _jsx(_components.code, {
                children: "setCloudProxy"
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
