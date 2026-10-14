import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Restrict media zones",
  description: "Control and customize RTC SDK data routing in your app"
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;windows&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;web&#x22;,&#x22;javascript&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;,&#x22;unreal&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® media zone users connect to.

    <CalloutContainer type="info">
      <CalloutDescription>
        This is an advanced feature suitable only for use-cases with access security restrictions.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech]

    After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:

    | Designated access zone | User's location | Zone actually accessed by the SDK | User experience         |
    | ---------------------- | --------------- | --------------------------------- | ----------------------- |
    | North America          | North America   | North America                     | Normal                  |
    | North America          | China           | North America                     | Quality may be affected |

    <CalloutContainer type="info">
      <CalloutDescription>
        * If a server in the specified zone is not available, the SDK reports an error.
        * Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected.
      </CalloutDescription>
    </CalloutContainer>

    The following figure shows the workflow you implement to restrict access to media zones:

    **Restrict media zones**

    ![Restrict media zones](https://assets-docs.agora.io/images/video-sdk/restrict-media-zones.svg)

    ## Prerequisites [#prerequisites]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement restricted media zones [#implement-restricted-media-zones]

    This section shows you how to restrict access to media zones in your app.

    You specify the access zones by setting the \`RtcEngineConfig.mAreaCode\` parameter when calling the \`create\` method to create an \`RtcEngine\` instance. The available zones are:

    * \`AREA_CODE_GLOB\`: Global (Default)
    * \`AREA_CODE_CN\` : Mainland China
    * \`AREA_CODE_NA\` : North America
    * \`AREA_CODE_EU\` : Europe
    * \`AREA_CODE_AS\` : Asia excluding Mainland China
    * \`AREA_CODE_JP\` : Japan
    * \`AREA_CODE_IN\` : India

    <CalloutContainer type="info">
      <CalloutDescription>
        Media zones support bitwise operations.
      </CalloutDescription>
    </CalloutContainer>

    ### Include a media zone [#include-a-media-zone]

    To limit access to servers in only one zone, such as North America, set \`config.mAreaCode = AREA_CODE_NA;\` before creating the \`RtcEngine\` instance:

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
        // Initialize the App and join the channel
        private void initializeAndJoinChannel() {
          try {
            RtcEngineConfig config = new RtcEngineConfig();
            config.mAppId = appId;
            config.mContext = mContext;
            config.mEventHandler = mEngineEventHandler.mRtcEventHandler;
            // Restrict access to servers in North America only
            config.mAreaCode = AREA_CODE_NA;
            mRtcEngine = RtcEngine.create(config);
          } catch (Exception e) {
              throw new RuntimeException("Check the error.");
          }
        }
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="kotlin">
        \`\`\`kotlin
        // Initialize the App and join the channel
        private fun initializeAndJoinChannel() {
          try {
            val config = RtcEngineConfig()
            config.mAppId = appId
            config.mContext = mContext
            config.mEventHandler = mEngineEventHandler.mRtcEventHandler
            // Restrict access to servers in North America only
            config.mAreaCode = AREA_CODE_NA
            mRtcEngine = RtcEngine.create(config)
          } catch (e: Exception) {
              throw RuntimeException("Check the error.")
          }
        }
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ### Exclude a media zone [#exclude-a-media-zone]

    To exclude servers in a zone, such as Mainland China, set \`config.mAreaCode = AREA_CODE_GLOB ^ AREA_CODE_CN;\` before creating the \`RtcEngine\` instance:

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
        // Initialize the App and join the channel
        private void initializeAndJoinChannel() {
          try {
            RtcEngineConfig config = new RtcEngineConfig();
            config.mAppId = appId;
            config.mContext = mContext;
            config.mEventHandler = mEngineEventHandler.mRtcEventHandler;
            // Exclude Mainland China from access zones
            config.mAreaCode = AREA_CODE_GLOB ^ AREA_CODE_CN;
            mRtcEngine = RtcEngine.create(config);
          } catch (Exception e) {
              throw new RuntimeException("Check the error.");
          }
        }
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="kotlin">
        \`\`\`kotlin
        // Initialize the App and join the channel
        private fun initializeAndJoinChannel() {
          try {
            val config = RtcEngineConfig()
            config.mAppId = appId
            config.mContext = mContext
            config.mEventHandler = mEngineEventHandler.mRtcEventHandler
            // Exclude Mainland China from access zones
            config.mAreaCode = AREA_CODE_GLOB xor AREA_CODE_CN
            mRtcEngine = RtcEngine.create(config)
          } catch (e: Exception) {
              throw RuntimeException("Check the error.")
          }
        }
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ## Reference [#reference]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference]

    * [\`create\` \\[2/2\\]](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_initialize)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® media zone users connect to.

    <CalloutContainer type="info">
      <CalloutDescription>
        This is an advanced feature suitable only for use-cases with access security restrictions.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-1]

    After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:

    | Designated access zone | User's location | Zone actually accessed by the SDK | User experience         |
    | ---------------------- | --------------- | --------------------------------- | ----------------------- |
    | North America          | North America   | North America                     | Normal                  |
    | North America          | China           | North America                     | Quality may be affected |

    <CalloutContainer type="info">
      <CalloutDescription>
        * If a server in the specified zone is not available, the SDK reports an error.
        * Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected.
      </CalloutDescription>
    </CalloutContainer>

    The following figure shows the workflow you implement to restrict access to media zones:

    **Restrict media zones**

    ![Restrict media zones](https://assets-docs.agora.io/images/video-sdk/restrict-media-zones.svg)

    ## Prerequisites [#prerequisites-1]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement restricted media zones [#implement-restricted-media-zones-1]

    This section shows you how to restrict access to media zones in your app.

    You specify the access zones by setting the \`AgoraRtcEngineConfig.areaCode\` parameter when calling the \`sharedEngineWithConfig\` method to create an instance of \`AgoraRtcEngineKit\`.

    * \`AgoraAreaCodeType.global\`: Global (Default)
    * \`AgoraAreaCodeType.AS\` : Asia except Mainland China
    * \`AgoraAreaCodeType.CN\` : Mainland China
    * \`AgoraAreaCodeType.EUR\` : Europe
    * \`AgoraAreaCodeType.IN\` : India
    * \`AgoraAreaCodeType.JP\` : Japan
    * \`AgoraAreaCodeType.NA\` : North America

    <CalloutContainer type="info">
      <CalloutDescription>
        Media zones support bitwise operations.
      </CalloutDescription>
    </CalloutContainer>

    ### Include a media zone [#include-a-media-zone-1]

    To limit access to servers in only one zone, such as North America, set \`config.areaCode = .NA\` before creating the \`AgoraRtcEngineKit\` instance.

    \`\`\`swift
    // Initialize AgoraEngine
    func initializeAgoraEngine() {
       let config = AgoraRtcEngineConfig()
       // Pass in your App ID
       config.appId = "YourAppId"
       config.channelProfile = .liveBroadcasting
       // Specify access to only servers in North America
       config.areaCode = .NA
       agoraKit = AgoraRtcEngineKit.sharedEngine(with: config, delegate: self)
     }
    \`\`\`

    ### Exclude a media zone [#exclude-a-media-zone-1]

    To exclude servers in a zone, such as Mainland China, set \`config.areaCode = AgoraAreaCodeType(rawValue: AgoraAreaCodeType.global.rawValue ^ AgoraAreaCodeType.CN.rawValue)！\` before creating the \`AgoraRtcEngineKit\` instance.

    \`\`\`swift
    // Initialize AgoraEngine
    func initializeAgoraEngine() {
      let config = AgoraRtcEngineConfig()
      // Pass in your App ID
      config.appId = "YourAppId"
      config.channelProfile = .liveBroadcasting
      // Exclude Mainland China from access area
      config.areaCode = AgoraAreaCodeType(rawValue: AgoraAreaCodeType.global.rawValue ^ AgoraAreaCodeType.CN.rawValue)！
      agoraKit = AgoraRtcEngineKit.sharedEngine(with: config, delegate: self)
    }
    \`\`\`

    ## Reference [#reference-1]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-1]

    * [\`areaCode\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcengineconfig/areacode)
    * [\`AgoraRtcEngineConfig\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcengineconfig)
    * [\`AgoraAreaCodeType\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoraareacodetype)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® media zone users connect to.

    <CalloutContainer type="info">
      <CalloutDescription>
        This is an advanced feature suitable only for use-cases with access security restrictions.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-2]

    After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:

    | Designated access zone | User's location | Zone actually accessed by the SDK | User experience         |
    | ---------------------- | --------------- | --------------------------------- | ----------------------- |
    | North America          | North America   | North America                     | Normal                  |
    | North America          | China           | North America                     | Quality may be affected |

    <CalloutContainer type="info">
      <CalloutDescription>
        * If a server in the specified zone is not available, the SDK reports an error.
        * Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected.
      </CalloutDescription>
    </CalloutContainer>

    The following figure shows the workflow you implement to restrict access to media zones:

    **Restrict media zones**

    ![Restrict media zones](https://assets-docs.agora.io/images/video-sdk/restrict-media-zones.svg)

    ## Prerequisites [#prerequisites-2]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement restricted media zones [#implement-restricted-media-zones-2]

    This section shows you how to restrict access to media zones in your app.

    You specify the access zones by setting the \`AgoraRtcEngineConfig.areaCode\` parameter when calling the \`sharedEngineWithConfig\` method to create an instance of \`AgoraRtcEngineKit\`.

    * \`AgoraAreaCodeType.global\`: Global (Default)
    * \`AgoraAreaCodeType.AS\` : Asia except Mainland China
    * \`AgoraAreaCodeType.CN\` : Mainland China
    * \`AgoraAreaCodeType.EUR\` : Europe
    * \`AgoraAreaCodeType.IN\` : India
    * \`AgoraAreaCodeType.JP\` : Japan
    * \`AgoraAreaCodeType.NA\` : North America

    <CalloutContainer type="info">
      <CalloutDescription>
        Media zones support bitwise operations.
      </CalloutDescription>
    </CalloutContainer>

    ### Include a media zone [#include-a-media-zone-2]

    To limit access to servers in only one zone, such as North America, set \`config.areaCode = .NA\` before creating the \`AgoraRtcEngineKit\` instance.

    \`\`\`swift
    // Initialize AgoraEngine
    func initializeAgoraEngine() {
       let config = AgoraRtcEngineConfig()
       // Pass in your App ID
       config.appId = "YourAppId"
       config.channelProfile = .liveBroadcasting
       // Specify access to only servers in North America
       config.areaCode = .NA
       agoraKit = AgoraRtcEngineKit.sharedEngine(with: config, delegate: self)
     }
    \`\`\`

    ### Exclude a media zone [#exclude-a-media-zone-2]

    To exclude servers in a zone, such as Mainland China, set \`config.areaCode = AgoraAreaCodeType(rawValue: AgoraAreaCodeType.global.rawValue ^ AgoraAreaCodeType.CN.rawValue)！\` before creating the \`AgoraRtcEngineKit\` instance.

    \`\`\`swift
    // Initialize AgoraEngine
    func initializeAgoraEngine() {
      let config = AgoraRtcEngineConfig()
      // Pass in your App ID
      config.appId = "YourAppId"
      config.channelProfile = .liveBroadcasting
      // Exclude Mainland China from access area
      config.areaCode = AgoraAreaCodeType(rawValue: AgoraAreaCodeType.global.rawValue ^ AgoraAreaCodeType.CN.rawValue)！
      agoraKit = AgoraRtcEngineKit.sharedEngine(with: config, delegate: self)
    }
    \`\`\`

    ## Reference [#reference-2]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-2]

    * [\`areaCode\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcengineconfig/areacode)
    * [\`AgoraRtcEngineConfig\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcengineconfig)
    * [\`AgoraAreaCodeType\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoraareacodetype)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® media zone users connect to.

    <CalloutContainer type="info">
      <CalloutDescription>
        This is an advanced feature suitable only for use-cases with access security restrictions.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-3]

    After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:

    | Designated access zone | User's location | Zone actually accessed by the SDK | User experience         |
    | ---------------------- | --------------- | --------------------------------- | ----------------------- |
    | North America          | North America   | North America                     | Normal                  |
    | North America          | China           | North America                     | Quality may be affected |

    <CalloutContainer type="info">
      <CalloutDescription>
        * If a server in the specified zone is not available, the SDK reports an error.
        * Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected.
      </CalloutDescription>
    </CalloutContainer>

    The following figure shows the workflow you implement to restrict access to media zones:

    **Restrict media zones**

    ![Restrict media zones](https://assets-docs.agora.io/images/video-sdk/restrict-media-zones.svg)

    ## Prerequisites [#prerequisites-3]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement restricted media zones [#implement-restricted-media-zones-3]

    This section shows you how to restrict access to media zones in your app.

    You specify the media zone by setting the \`context.areaCode\` parameter before calling the \`initialize\` method to create an \`IRtcEngine\` instance. The available media zones are:

    * \`AREA_CODE_GLOB\`: Global (Default)
    * \`AREA_CODE_CN\` : Mainland China
    * \`AREA_CODE_NA\` : North America
    * \`AREA_CODE_EU\` : Europe
    * \`AREA_CODE_AS\` : Asia except Mainland China
    * \`AREA_CODE_JP\` : Japan
    * \`AREA_CODE_IN\` : India

    <CalloutContainer type="info">
      <CalloutDescription>
        Media zones support bitwise operations.
      </CalloutDescription>
    </CalloutContainer>

    ### Include a media zone [#include-a-media-zone-3]

    To limit access to servers in only one media zone, such as North America, set \`context.areaCode = AREA_CODE_NA;\` before calling the \`initialize\` method:

    \`\`\`cpp
    // Initialize Agora SDK
    bool CAgoraRegionConnDlg::InitAgora() {
      // Create AgoraRtcEngine instance
      m_rtcEngine = createAgoraRtcEngine();
      if (!m_rtcEngine) {
        m_lstInfo.InsertString(m_lstInfo.GetCount() - 1, _T("createAgoraRtcEngine failed"));
        return false;
      }
      m_eventHandler.SetMsgReceiver(m_hWnd);

      RtcEngineContext context;
      std::string strAppID = GET_APP_ID;
      context.appId = strAppID.c_str();
      CString area_code;
      m_cmbAreaCode.GetWindowText(area_code);

      // Restrict access to servers in North America
      context.areaCode = AREA_CODE_NA;

      // Initialize RtcEngineContext
      int ret = m_rtcEngine->initialize(context);
      if (ret != 0) {
        m_initialize = false;
        CString strInfo;
        strInfo.Format(_T("initialize failed: %d"), ret);
        m_lstInfo.InsertString(m_lstInfo.GetCount(), strInfo);
        return false;
      } else {
        m_initialize = true;
        m_lstInfo.InsertString(m_lstInfo.GetCount(), _T("initialize success"));
      }

      return true;
    }
    \`\`\`

    ### Exclude a media zone [#exclude-a-media-zone-3]

    To exclude servers in a region, such as Mainland China, set \`context.areaCode = AREA_CODE_GLOB ^ AREA_CODE_CN;\` before calling the \`initialize\` method:

    \`\`\`cpp
    // Initialize Agora SDK
    bool CAgoraRegionConnDlg::InitAgora() {
    	// Create AgoraRtcEngine instance
    	m_rtcEngine = createAgoraRtcEngine();
    	if (!m_rtcEngine) {
    		m_lstInfo.InsertString(m_lstInfo.GetCount() - 1,
    		            _T("createAgoraRtcEngine failed"));
    		return false;
    	}
    	m_eventHandler.SetMsgReceiver(m_hWnd);

    	RtcEngineContext context;
    	std::string strAppID = GET_APP_ID;
    	context.appId = strAppID.c_str();
    	CString area_code;
    	m_cmbAreaCode.GetWindowText(area_code);

    	// Exclude Mainland China from access area
      context.areaCode = AREA_CODE_GLOB ^ AREA_CODE_CN;

    	// Initialize RtcEngineContext
    	int ret = m_rtcEngine->initialize(context);
    	if (ret != 0) {
    		m_initialize = false;
    		CString strInfo;
    		strInfo.Format(_T("initialize failed: %d"), ret);
    		m_lstInfo.InsertString(m_lstInfo.GetCount(), strInfo);
    		return false;
    	} else
    		m_initialize = true;
    	m_lstInfo.InsertString(m_lstInfo.GetCount(), _T("initialize success"));
    }
    \`\`\`

    ## Reference [#reference-3]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-3]

    * [\`initialize\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_initialize)
    * [\`RtcEngineContext\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_rtcengineconfig.html)
    * [\`AREA_CODE\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/enum_areacode.html)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® media zone users connect to.

    <CalloutContainer type="info">
      <CalloutDescription>
        This is an advanced feature suitable only for use-cases with access security restrictions.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-4]

    After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:

    | Designated access zone | User's location | Zone actually accessed by the SDK | User experience         |
    | ---------------------- | --------------- | --------------------------------- | ----------------------- |
    | North America          | North America   | North America                     | Normal                  |
    | North America          | China           | North America                     | Quality may be affected |

    <CalloutContainer type="info">
      <CalloutDescription>
        * If a server in the specified zone is not available, the SDK reports an error.
        * Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected.
      </CalloutDescription>
    </CalloutContainer>

    The following figure shows the workflow you implement to restrict access to media zones:

    **Restrict media zones**

    ![Restrict media zones](https://assets-docs.agora.io/images/video-sdk/restrict-media-zones.svg)

    ## Prerequisites [#prerequisites-4]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement restricted media zones [#implement-restricted-media-zones-4]

    This section shows you how to restrict access to media zones in your app.

    By default, the SDK connects to the nearest Agora media zone. Set the \`areaCode\` parameter when calling the \`initialize\` method to specify the access zone(s). After you set the access zone, the SDK only connects to Agora servers in the specified zone.

    You can set the \`areaCode\` to:

    * \`AreaCodeGlob\`: Global (Default)
    * \`AreaCodeCn\` : Mainland China
    * \`AreaCodeNa\` : North America
    * \`AreaCodeEu\` : Europe
    * \`AreaCodeAs\` : Asia excluding Mainland China
    * \`AreaCodeJp\` : Japan
    * \`AreaCodeIn\` : India

    <CalloutContainer type="info">
      <CalloutDescription>
        Media zones support bitwise operations.
      </CalloutDescription>
    </CalloutContainer>

    Refer to the following sample code:

    \`\`\`javascript
    // Only connect to the Agora SDRTN® located in North America.
    agoraEngine.initialize(
    {
      appId: appID,
      areaCode: AreaCode.AreaCodeNa
    });
    \`\`\`

    ## Reference [#reference-4]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-4]

    * [\`RtcEngineContext\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_rtcengineconfig.html)
    * [\`AreaCode\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/enum_areacode.html)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® media zone users connect to.

    <CalloutContainer type="info">
      <CalloutDescription>
        This is an advanced feature suitable only for use-cases with access security restrictions.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-5]

    After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:

    | Designated access zone | User's location | Zone actually accessed by the SDK | User experience         |
    | ---------------------- | --------------- | --------------------------------- | ----------------------- |
    | North America          | North America   | North America                     | Normal                  |
    | North America          | China           | North America                     | Quality may be affected |

    <CalloutContainer type="info">
      <CalloutDescription>
        * If a server in the specified zone is not available, the SDK reports an error.
        * Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected.
      </CalloutDescription>
    </CalloutContainer>

    The following figure shows the workflow you implement to restrict access to media zones:

    **Restrict media zones**

    ![Restrict media zones](https://assets-docs.agora.io/images/video-sdk/restrict-media-zones.svg)

    ## Prerequisites [#prerequisites-5]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement restricted media zones [#implement-restricted-media-zones-5]

    This section shows you how to restrict access to media zones in your app.

    By default, the SDK connects to the nearest Agora server. Set the \`areaCode\` property of \`RtcEngineContext\` when calling the \`initialize\` method to specify the access area. After setting the access zone, the SDK only connects to Agora servers in the specified zone(s).

    You can set the area to:

    * \`areaCodeGlob\`: Global (Default)
    * \`areaCodeCn\` : Mainland China
    * \`areaCodeNa\` : North America
    * \`areaCodeEu\` : Europe
    * \`areaCodeAs\` : Asia excluding Mainland China
    * \`areaCodeJp\` : Japan
    * \`areaCodeIn\` : India

    <CalloutContainer type="info">
      <CalloutDescription>
        Media zones support bitwise operations.
      </CalloutDescription>
    </CalloutContainer>

    Refer to the following sample code:

    \`\`\`dart
    // Your app only connects to Agora SDRTN® located in North America.
    await agoraEngine.initialize(RtcEngineContext(
      areaCode: AreaCode.areaCodeNa.value(),
      appId: appId
    ));
    \`\`\`

    ## Reference [#reference-5]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-5]

    * [\`initialize\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_initialize)
    * [\`RtcEngineContext\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_rtcengineconfig.html)
    * [\`AreaCode\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/enum_areacode.html)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN(R) media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN(R) media zone users connect to.

    <CalloutContainer type="info">
      <CalloutDescription>
        This is an advanced feature suitable only for use-cases with access security restrictions.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-6]

    After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN(R) from North America and China respectively:

    | Designated access zone | User's location | Zone actually accessed by the SDK | User experience         |
    | ---------------------- | --------------- | --------------------------------- | ----------------------- |
    | North America          | North America   | North America                     | Normal                  |
    | North America          | China           | North America                     | Quality may be affected |

    <CalloutContainer type="info">
      <CalloutDescription>
        * If a server in the specified zone is not available, the SDK reports an error.
        * Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected.
      </CalloutDescription>
    </CalloutContainer>

    The following figure shows the workflow you implement to restrict access to media zones:

    **Restrict media zones**

    ![Restrict media zones](https://assets-docs.agora.io/images/video-sdk/restrict-media-zones.svg)

    ## Prerequisites [#prerequisites-6]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement restricted media zones [#implement-restricted-media-zones-6]

    This section shows you how to restrict access to media zones in your app.

    You call the \`AgoraRTC.setArea\` method to specify the media zone. By default, the SDK selects the nearest Agora server region to connect to. After you set the media zone, the SDK only connects to Agora servers in the specified zone.

    Use one of the following values for \`areaCode\` and \`excludedArea\`:

    * \`ASIA\`: Asia except Mainland China
    * \`CHINA\`: Mainland China
    * \`EUROPE\`: Europe
    * \`GLOBAL\`: Global (Default)
    * \`INDIA\`: India
    * \`JAPAN\`: Japan
    * \`NORTH_AMERICA\`: North America

    Refer to the following sample code:

    \`\`\`javascript
    AgoraRTC.setArea('ASIA');
    \`\`\`

    Use the \`excludedArea\` parameter to specify a smaller zone to be excluded from a larger zone. Currently, you can only set the larger zone to \`GLOBAL\`.

    \`\`\`js
    // Exclude Mainland China from media zones
    AgoraRTC.setArea({
      areaCode: 'GLOBAL',
      excludedArea: 'CHINA',
    });
    \`\`\`

    ## Reference [#reference-6]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-6]

    * [\`setArea\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#setarea)
    * [\`AREAS\`](https://api-ref.agora.io/en/video-sdk/web/4.x/enums/areas.html)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="javascript">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="javascript" />

    When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN(R) media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN(R) media zone users connect to.

    <CalloutContainer type="info">
      <CalloutDescription>
        This is an advanced feature suitable only for use-cases with access security restrictions.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-7]

    After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN(R) from North America and China respectively:

    | Designated access zone | User's location | Zone actually accessed by the SDK | User experience         |
    | ---------------------- | --------------- | --------------------------------- | ----------------------- |
    | North America          | North America   | North America                     | Normal                  |
    | North America          | China           | North America                     | Quality may be affected |

    <CalloutContainer type="info">
      <CalloutDescription>
        * If a server in the specified zone is not available, the SDK reports an error.
        * Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected.
      </CalloutDescription>
    </CalloutContainer>

    The following figure shows the workflow you implement to restrict access to media zones:

    **Restrict media zones**

    ![Restrict media zones](https://assets-docs.agora.io/images/video-sdk/restrict-media-zones.svg)

    ## Prerequisites [#prerequisites-7]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement restricted media zones [#implement-restricted-media-zones-7]

    This section shows you how to restrict access to media zones in your app.

    By default, the SDK connects to the nearest Agora server. You set the \`areaCode\` property by calling the \`setArea\` method to specify the media zone(s). After setting the access zone, the SDK only connects to Agora servers in the specified media zone.

    You can set the area to:

    * \`ASIA\`: Asia except Mainland China
    * \`CHINA\`: Mainland China
    * \`EUROPE\`: European region
    * \`GLOBAL\`: Global (Default)
    * \`INDIA\`: India
    * \`JAPAN\`: Japan
    * \`NORTH_AMERICA\`: North America

    <CalloutContainer type="info">
      <CalloutDescription>
        Media zones support bitwise operations.
      </CalloutDescription>
    </CalloutContainer>

    Refer to the following sample code:

    \`\`\`javascript
    const useMediaZones = () => {
      useEffect(() => {
        AgoraRTC.setArea({
          areaCode: [AREAS.NORTH_AMERICA, AREAS.ASIA],
        });
      }, []);
    };

    function EnableMediaZones() {
      useMediaZones();

      return (
        <div>
          <App />
        </div>
      );
    }
    \`\`\`

    ## Reference [#reference-7]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-7]

    * [\`setArea\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#setarea)
    * [\`AREAS\`](https://api-ref.agora.io/en/video-sdk/web/4.x/enums/areas.html)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® media zone users connect to.

    <CalloutContainer type="info">
      <CalloutDescription>
        This is an advanced feature suitable only for use-cases with access security restrictions.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-8]

    After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:

    | Designated access zone | User's location | Zone actually accessed by the SDK | User experience         |
    | ---------------------- | --------------- | --------------------------------- | ----------------------- |
    | North America          | North America   | North America                     | Normal                  |
    | North America          | China           | North America                     | Quality may be affected |

    <CalloutContainer type="info">
      <CalloutDescription>
        * If a server in the specified zone is not available, the SDK reports an error.
        * Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected.
      </CalloutDescription>
    </CalloutContainer>

    The following figure shows the workflow you implement to restrict access to media zones:

    **Restrict media zones**

    ![Restrict media zones](https://assets-docs.agora.io/images/video-sdk/restrict-media-zones.svg)

    ## Prerequisites [#prerequisites-8]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement restricted media zones [#implement-restricted-media-zones-8]

    This section shows you how to restrict access to media zones in your app.

    By default, the SDK connects to the nearest Agora server. Set the \`areaCode\` property of \`RTCEngineContext\` before passing it to the \`initialize\` method. After you set the media zone, the SDK only connects to servers in the specified zone.

    You can set the \`areaCode\` to:

    * \`AreaCodeGlob\`: Global (Default)
    * \`AreaCodeCn\` : Mainland China
    * \`AreaCodeNa\` : North America
    * \`AreaCodeEu\` : Europe
    * \`AreaCodeAs\` : Asia excluding Mainland China
    * \`AreaCodeJp\` : Japan
    * \`AreaCodeIn\` : India

    <CalloutContainer type="info">
      <CalloutDescription>
        Media zones support bitwise operations.
      </CalloutDescription>
    </CalloutContainer>

    Refer to the following sample code:

    \`\`\`javascript
    this._rtcContext.areaCode = AreaCode.AreaCodeNa;
    \`\`\`

    ## Reference [#reference-8]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-8]

    * [\`RtcEngineContext\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_rtcengineconfig.html)
    * [\`AreaCode\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/enum_areacode.html)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your game by specifying the Agora SDRTN® media zone users connect to.

    <CalloutContainer type="info">
      <CalloutDescription>
        This is an advanced feature suitable only for use-cases with access security restrictions.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-9]

    After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:

    | Designated access zone | User's location | Zone actually accessed by the SDK | User experience         |
    | ---------------------- | --------------- | --------------------------------- | ----------------------- |
    | North America          | North America   | North America                     | Normal                  |
    | North America          | China           | North America                     | Quality may be affected |

    <CalloutContainer type="info">
      <CalloutDescription>
        * If a server in the specified zone is not available, the SDK reports an error.
        * Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected.
      </CalloutDescription>
    </CalloutContainer>

    The following figure shows the workflow you implement to restrict access to media zones:

    **Restrict media zones**

    ![Restrict media zones](https://assets-docs.agora.io/images/video-sdk/restrict-media-zones.svg)

    ## Prerequisites [#prerequisites-9]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement restricted media zones [#implement-restricted-media-zones-9]

    This section shows you how to restrict access to media zones in your game.

    By default, the SDK connects to the nearest Agora server. Set the \`areaCode\` property of \`RtcEngineContext\` when calling the \`initialize\` method to specify the access zone(s). After setting the access zone, the SDK only connects to Agora servers in the specified zone(s).

    You can set the \`areaCode\` to:

    * \`AREA_CODE_GLOB\`: Global (Default)
    * \`AREA_CODE_CN\` : Mainland China
    * \`AREA_CODE_NA\` : North America
    * \`AREA_CODE_EU\` : Europe
    * \`AREA_CODE_AS\` : Asia except Mainland China
    * \`AREA_CODE_JP\` : Japan
    * \`AREA_CODE_IN\` : India

    <CalloutContainer type="info">
      <CalloutDescription>
        Media zones support bitwise operations.
      </CalloutDescription>
    </CalloutContainer>

    ### Include a media zone [#include-a-media-zone-4]

    To limit access to servers in only one media zone, such as North America, set \`context.areaCode = AREA_CODE_NA;\` before calling the \`initialize\` method:

    \`\`\`csharp
    // Initialize Agora SDK
    RtcEngine = Agora.Rtc.RtcEngine.CreateAgoraRtcEngine();
    RtcEngineContext context = new RtcEngineContext();
    context.appId = _appID;
    context.channelProfile = CHANNEL_PROFILE_TYPE.CHANNEL_PROFILE_LIVE_BROADCASTING;
    context.audioScenario = AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_DEFAULT;
    // Restrict access to servers in North America
    context.areaCode = AREA_CODE.AREA_CODE_NA;
    // Initialize RtcEngineContext
    RtcEngine.Initialize(context);
    \`\`\`

    ### Exclude a media zone [#exclude-a-media-zone-4]

    To exclude servers in a region, such as Mainland China, set \`context.areaCode = AREA_CODE.AREA_CODE_GLOB ^ AREA_CODE.AREA_CODE_CN;\` before calling the \`initialize\` method:

    \`\`\`csharp
    // Initialize Agora SDK
    RtcEngine = Agora.Rtc.RtcEngine.CreateAgoraRtcEngine();
    RtcEngineContext context = new RtcEngineContext();
    context.appId = _appID;
    context.channelProfile = CHANNEL_PROFILE_TYPE.CHANNEL_PROFILE_LIVE_BROADCASTING;
    context.audioScenario = AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_DEFAULT;
    // Exclude Mainland China from access area
    context.areaCode = AREA_CODE.AREA_CODE_GLOB ^ AREA_CODE.AREA_CODE_CN;
    // Initialize RtcEngineContext
    RtcEngine.Initialize(context);
    \`\`\`

    ## Reference [#reference-9]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-9]

    * [\`Initialize\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_initialize)
    * [\`RtcEngineContext\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_rtcengineconfig.html)
    * [\`AreaCode\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/enum_areacode.html)
    * [\`CreateAgoraRtcEngine\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_createagorartcengine)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unreal">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unreal" />

    When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN(R) media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN(R) media zone users connect to.

    <CalloutContainer type="info">
      <CalloutDescription>
        This is an advanced feature suitable only for use-cases with access security restrictions.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-10]

    After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN(R) from North America and China respectively:

    | Designated access zone | User's location | Zone actually accessed by the SDK | User experience         |
    | ---------------------- | --------------- | --------------------------------- | ----------------------- |
    | North America          | North America   | North America                     | Normal                  |
    | North America          | China           | North America                     | Quality may be affected |

    <CalloutContainer type="info">
      <CalloutDescription>
        * If a server in the specified zone is not available, the SDK reports an error.
        * Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected.
      </CalloutDescription>
    </CalloutContainer>

    The following figure shows the workflow you implement to restrict access to media zones:

    **Restrict media zones**

    ![Restrict media zones](https://assets-docs.agora.io/images/video-sdk/restrict-media-zones.svg)

    ## Prerequisites [#prerequisites-10]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement restricted media zones [#implement-restricted-media-zones-10]

    This section shows you how to restrict access to media zones in your app.

    By default, the SDK connects to the nearest Agora server. Set the \`areaCode\` property of \`RtcEngineContext\` when calling the \`initialize\` method to specify the media zones. After setting the media zone(s), the SDK only connects to Agora servers in the specified zone(s).

    You can set the \`areaCode\` to:

    * \`AREA_CODE_GLOB\`: Global (Default)
    * \`AREA_CODE_CN\`: Mainland China
    * \`AREA_CODE_NA\`: North America
    * \`AREA_CODE_EU\`: Europe
    * \`AREA_CODE_AS\`: Asia except Mainland China
    * \`AREA_CODE_JP\`: Japan
    * \`AREA_CODE_IN\`: India

    <CalloutContainer type="info">
      <CalloutDescription>
        Media zones support bitwise operations. To include a zone, use the \`|\` operator, to exclude a zone use \`^\`.
      </CalloutDescription>
    </CalloutContainer>

    Refer to the following code:

    \`\`\`cpp
    void UMyUserWidget::setupVideoSDKEngine()
    {
        // Create an engine instance.
        agoraEngine = agora::rtc::ue::createAgoraRtcEngine();
        // Specify a context for the engine.
        RtcEngineContext context;
        context.appId = appId.c_str();
        context.eventHandler = this;
        // Choose the communication profile for video calling.
        context.channelProfile = CHANNEL_PROFILE_TYPE::CHANNEL_PROFILE_COMMUNICATION;
        // Only connect to Agora SDRTN® located in North America.
        context.areaCode = AREA_CODE::AREA_CODE_NA;
        // Initialize the engine instance with the context.
        agoraEngine->initialize(context);
        // Enable the local audio capture to init the local video stream.
        agoraEngine->enableAudio();
        // Enable the local video capture to init the local video stream.
        agoraEngine->enableVideo();
    }
    \`\`\`

    ## Reference [#reference-10]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-10]

    * [\`initialize\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_initialize)
    * [\`RtcEngineContext\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_rtcengineconfig.html)
    * [\`AREA_CODE\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/enum_areacode.html)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® media zone users connect to."
  }, {
    heading: undefined,
    content: "This is an advanced feature suitable only for use-cases with access security restrictions."
  }, {
    heading: "understand-the-tech",
    content: "After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:"
  }, {
    heading: "understand-the-tech",
    content: "Designated access zone"
  }, {
    heading: "understand-the-tech",
    content: "User's location"
  }, {
    heading: "understand-the-tech",
    content: "Zone actually accessed by the SDK"
  }, {
    heading: "understand-the-tech",
    content: "User experience"
  }, {
    heading: "understand-the-tech",
    content: "North America"
  }, {
    heading: "understand-the-tech",
    content: "North America"
  }, {
    heading: "understand-the-tech",
    content: "North America"
  }, {
    heading: "understand-the-tech",
    content: "Normal"
  }, {
    heading: "understand-the-tech",
    content: "North America"
  }, {
    heading: "understand-the-tech",
    content: "China"
  }, {
    heading: "understand-the-tech",
    content: "North America"
  }, {
    heading: "understand-the-tech",
    content: "Quality may be affected"
  }, {
    heading: "understand-the-tech",
    content: "If a server in the specified zone is not available, the SDK reports an error."
  }, {
    heading: "understand-the-tech",
    content: "Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected."
  }, {
    heading: "understand-the-tech",
    content: "The following figure shows the workflow you implement to restrict access to media zones:"
  }, {
    heading: "understand-the-tech",
    content: "**Restrict media zones**"
  }, {
    heading: "prerequisites",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-restricted-media-zones",
    content: "This section shows you how to restrict access to media zones in your app."
  }, {
    heading: "implement-restricted-media-zones",
    content: "You specify the access zones by setting the `RtcEngineConfig.mAreaCode` parameter when calling the `create` method to create an `RtcEngine` instance. The available zones are:"
  }, {
    heading: "implement-restricted-media-zones",
    content: "`AREA_CODE_GLOB`: Global (Default)"
  }, {
    heading: "implement-restricted-media-zones",
    content: "`AREA_CODE_CN` : Mainland China"
  }, {
    heading: "implement-restricted-media-zones",
    content: "`AREA_CODE_NA` : North America"
  }, {
    heading: "implement-restricted-media-zones",
    content: "`AREA_CODE_EU` : Europe"
  }, {
    heading: "implement-restricted-media-zones",
    content: "`AREA_CODE_AS` : Asia excluding Mainland China"
  }, {
    heading: "implement-restricted-media-zones",
    content: "`AREA_CODE_JP` : Japan"
  }, {
    heading: "implement-restricted-media-zones",
    content: "`AREA_CODE_IN` : India"
  }, {
    heading: "implement-restricted-media-zones",
    content: "Media zones support bitwise operations."
  }, {
    heading: "include-a-media-zone",
    content: "To limit access to servers in only one zone, such as North America, set `config.mAreaCode = AREA_CODE_NA;` before creating the `RtcEngine` instance:"
  }, {
    heading: "exclude-a-media-zone",
    content: "To exclude servers in a zone, such as Mainland China, set `config.mAreaCode = AREA_CODE_GLOB ^ AREA_CODE_CN;` before creating the `RtcEngine` instance:"
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference",
    content: "`create` \\[2/2]"
  }, {
    heading: "api-reference",
    content: "When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® media zone users connect to."
  }, {
    heading: "api-reference",
    content: "This is an advanced feature suitable only for use-cases with access security restrictions."
  }, {
    heading: "understand-the-tech-1",
    content: "After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:"
  }, {
    heading: "understand-the-tech-1",
    content: "Designated access zone"
  }, {
    heading: "understand-the-tech-1",
    content: "User's location"
  }, {
    heading: "understand-the-tech-1",
    content: "Zone actually accessed by the SDK"
  }, {
    heading: "understand-the-tech-1",
    content: "User experience"
  }, {
    heading: "understand-the-tech-1",
    content: "North America"
  }, {
    heading: "understand-the-tech-1",
    content: "North America"
  }, {
    heading: "understand-the-tech-1",
    content: "North America"
  }, {
    heading: "understand-the-tech-1",
    content: "Normal"
  }, {
    heading: "understand-the-tech-1",
    content: "North America"
  }, {
    heading: "understand-the-tech-1",
    content: "China"
  }, {
    heading: "understand-the-tech-1",
    content: "North America"
  }, {
    heading: "understand-the-tech-1",
    content: "Quality may be affected"
  }, {
    heading: "understand-the-tech-1",
    content: "If a server in the specified zone is not available, the SDK reports an error."
  }, {
    heading: "understand-the-tech-1",
    content: "Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected."
  }, {
    heading: "understand-the-tech-1",
    content: "The following figure shows the workflow you implement to restrict access to media zones:"
  }, {
    heading: "understand-the-tech-1",
    content: "**Restrict media zones**"
  }, {
    heading: "prerequisites-1",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-restricted-media-zones-1",
    content: "This section shows you how to restrict access to media zones in your app."
  }, {
    heading: "implement-restricted-media-zones-1",
    content: "You specify the access zones by setting the `AgoraRtcEngineConfig.areaCode` parameter when calling the `sharedEngineWithConfig` method to create an instance of `AgoraRtcEngineKit`."
  }, {
    heading: "implement-restricted-media-zones-1",
    content: "`AgoraAreaCodeType.global`: Global (Default)"
  }, {
    heading: "implement-restricted-media-zones-1",
    content: "`AgoraAreaCodeType.AS` : Asia except Mainland China"
  }, {
    heading: "implement-restricted-media-zones-1",
    content: "`AgoraAreaCodeType.CN` : Mainland China"
  }, {
    heading: "implement-restricted-media-zones-1",
    content: "`AgoraAreaCodeType.EUR` : Europe"
  }, {
    heading: "implement-restricted-media-zones-1",
    content: "`AgoraAreaCodeType.IN` : India"
  }, {
    heading: "implement-restricted-media-zones-1",
    content: "`AgoraAreaCodeType.JP` : Japan"
  }, {
    heading: "implement-restricted-media-zones-1",
    content: "`AgoraAreaCodeType.NA` : North America"
  }, {
    heading: "implement-restricted-media-zones-1",
    content: "Media zones support bitwise operations."
  }, {
    heading: "include-a-media-zone-1",
    content: "To limit access to servers in only one zone, such as North America, set `config.areaCode = .NA` before creating the `AgoraRtcEngineKit` instance."
  }, {
    heading: "exclude-a-media-zone-1",
    content: "To exclude servers in a zone, such as Mainland China, set `config.areaCode = AgoraAreaCodeType(rawValue: AgoraAreaCodeType.global.rawValue ^ AgoraAreaCodeType.CN.rawValue)！` before creating the `AgoraRtcEngineKit` instance."
  }, {
    heading: "reference-1",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-1",
    content: "`areaCode`"
  }, {
    heading: "api-reference-1",
    content: "`AgoraRtcEngineConfig`"
  }, {
    heading: "api-reference-1",
    content: "`AgoraAreaCodeType`"
  }, {
    heading: "api-reference-1",
    content: "When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® media zone users connect to."
  }, {
    heading: "api-reference-1",
    content: "This is an advanced feature suitable only for use-cases with access security restrictions."
  }, {
    heading: "understand-the-tech-2",
    content: "After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:"
  }, {
    heading: "understand-the-tech-2",
    content: "Designated access zone"
  }, {
    heading: "understand-the-tech-2",
    content: "User's location"
  }, {
    heading: "understand-the-tech-2",
    content: "Zone actually accessed by the SDK"
  }, {
    heading: "understand-the-tech-2",
    content: "User experience"
  }, {
    heading: "understand-the-tech-2",
    content: "North America"
  }, {
    heading: "understand-the-tech-2",
    content: "North America"
  }, {
    heading: "understand-the-tech-2",
    content: "North America"
  }, {
    heading: "understand-the-tech-2",
    content: "Normal"
  }, {
    heading: "understand-the-tech-2",
    content: "North America"
  }, {
    heading: "understand-the-tech-2",
    content: "China"
  }, {
    heading: "understand-the-tech-2",
    content: "North America"
  }, {
    heading: "understand-the-tech-2",
    content: "Quality may be affected"
  }, {
    heading: "understand-the-tech-2",
    content: "If a server in the specified zone is not available, the SDK reports an error."
  }, {
    heading: "understand-the-tech-2",
    content: "Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected."
  }, {
    heading: "understand-the-tech-2",
    content: "The following figure shows the workflow you implement to restrict access to media zones:"
  }, {
    heading: "understand-the-tech-2",
    content: "**Restrict media zones**"
  }, {
    heading: "prerequisites-2",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-restricted-media-zones-2",
    content: "This section shows you how to restrict access to media zones in your app."
  }, {
    heading: "implement-restricted-media-zones-2",
    content: "You specify the access zones by setting the `AgoraRtcEngineConfig.areaCode` parameter when calling the `sharedEngineWithConfig` method to create an instance of `AgoraRtcEngineKit`."
  }, {
    heading: "implement-restricted-media-zones-2",
    content: "`AgoraAreaCodeType.global`: Global (Default)"
  }, {
    heading: "implement-restricted-media-zones-2",
    content: "`AgoraAreaCodeType.AS` : Asia except Mainland China"
  }, {
    heading: "implement-restricted-media-zones-2",
    content: "`AgoraAreaCodeType.CN` : Mainland China"
  }, {
    heading: "implement-restricted-media-zones-2",
    content: "`AgoraAreaCodeType.EUR` : Europe"
  }, {
    heading: "implement-restricted-media-zones-2",
    content: "`AgoraAreaCodeType.IN` : India"
  }, {
    heading: "implement-restricted-media-zones-2",
    content: "`AgoraAreaCodeType.JP` : Japan"
  }, {
    heading: "implement-restricted-media-zones-2",
    content: "`AgoraAreaCodeType.NA` : North America"
  }, {
    heading: "implement-restricted-media-zones-2",
    content: "Media zones support bitwise operations."
  }, {
    heading: "include-a-media-zone-2",
    content: "To limit access to servers in only one zone, such as North America, set `config.areaCode = .NA` before creating the `AgoraRtcEngineKit` instance."
  }, {
    heading: "exclude-a-media-zone-2",
    content: "To exclude servers in a zone, such as Mainland China, set `config.areaCode = AgoraAreaCodeType(rawValue: AgoraAreaCodeType.global.rawValue ^ AgoraAreaCodeType.CN.rawValue)！` before creating the `AgoraRtcEngineKit` instance."
  }, {
    heading: "reference-2",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-2",
    content: "`areaCode`"
  }, {
    heading: "api-reference-2",
    content: "`AgoraRtcEngineConfig`"
  }, {
    heading: "api-reference-2",
    content: "`AgoraAreaCodeType`"
  }, {
    heading: "api-reference-2",
    content: "When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® media zone users connect to."
  }, {
    heading: "api-reference-2",
    content: "This is an advanced feature suitable only for use-cases with access security restrictions."
  }, {
    heading: "understand-the-tech-3",
    content: "After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:"
  }, {
    heading: "understand-the-tech-3",
    content: "Designated access zone"
  }, {
    heading: "understand-the-tech-3",
    content: "User's location"
  }, {
    heading: "understand-the-tech-3",
    content: "Zone actually accessed by the SDK"
  }, {
    heading: "understand-the-tech-3",
    content: "User experience"
  }, {
    heading: "understand-the-tech-3",
    content: "North America"
  }, {
    heading: "understand-the-tech-3",
    content: "North America"
  }, {
    heading: "understand-the-tech-3",
    content: "North America"
  }, {
    heading: "understand-the-tech-3",
    content: "Normal"
  }, {
    heading: "understand-the-tech-3",
    content: "North America"
  }, {
    heading: "understand-the-tech-3",
    content: "China"
  }, {
    heading: "understand-the-tech-3",
    content: "North America"
  }, {
    heading: "understand-the-tech-3",
    content: "Quality may be affected"
  }, {
    heading: "understand-the-tech-3",
    content: "If a server in the specified zone is not available, the SDK reports an error."
  }, {
    heading: "understand-the-tech-3",
    content: "Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected."
  }, {
    heading: "understand-the-tech-3",
    content: "The following figure shows the workflow you implement to restrict access to media zones:"
  }, {
    heading: "understand-the-tech-3",
    content: "**Restrict media zones**"
  }, {
    heading: "prerequisites-3",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-restricted-media-zones-3",
    content: "This section shows you how to restrict access to media zones in your app."
  }, {
    heading: "implement-restricted-media-zones-3",
    content: "You specify the media zone by setting the `context.areaCode` parameter before calling the `initialize` method to create an `IRtcEngine` instance. The available media zones are:"
  }, {
    heading: "implement-restricted-media-zones-3",
    content: "`AREA_CODE_GLOB`: Global (Default)"
  }, {
    heading: "implement-restricted-media-zones-3",
    content: "`AREA_CODE_CN` : Mainland China"
  }, {
    heading: "implement-restricted-media-zones-3",
    content: "`AREA_CODE_NA` : North America"
  }, {
    heading: "implement-restricted-media-zones-3",
    content: "`AREA_CODE_EU` : Europe"
  }, {
    heading: "implement-restricted-media-zones-3",
    content: "`AREA_CODE_AS` : Asia except Mainland China"
  }, {
    heading: "implement-restricted-media-zones-3",
    content: "`AREA_CODE_JP` : Japan"
  }, {
    heading: "implement-restricted-media-zones-3",
    content: "`AREA_CODE_IN` : India"
  }, {
    heading: "implement-restricted-media-zones-3",
    content: "Media zones support bitwise operations."
  }, {
    heading: "include-a-media-zone-3",
    content: "To limit access to servers in only one media zone, such as North America, set `context.areaCode = AREA_CODE_NA;` before calling the `initialize` method:"
  }, {
    heading: "exclude-a-media-zone-3",
    content: "To exclude servers in a region, such as Mainland China, set `context.areaCode = AREA_CODE_GLOB ^ AREA_CODE_CN;` before calling the `initialize` method:"
  }, {
    heading: "reference-3",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-3",
    content: "`initialize`"
  }, {
    heading: "api-reference-3",
    content: "`RtcEngineContext`"
  }, {
    heading: "api-reference-3",
    content: "`AREA_CODE`"
  }, {
    heading: "api-reference-3",
    content: "When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® media zone users connect to."
  }, {
    heading: "api-reference-3",
    content: "This is an advanced feature suitable only for use-cases with access security restrictions."
  }, {
    heading: "understand-the-tech-4",
    content: "After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:"
  }, {
    heading: "understand-the-tech-4",
    content: "Designated access zone"
  }, {
    heading: "understand-the-tech-4",
    content: "User's location"
  }, {
    heading: "understand-the-tech-4",
    content: "Zone actually accessed by the SDK"
  }, {
    heading: "understand-the-tech-4",
    content: "User experience"
  }, {
    heading: "understand-the-tech-4",
    content: "North America"
  }, {
    heading: "understand-the-tech-4",
    content: "North America"
  }, {
    heading: "understand-the-tech-4",
    content: "North America"
  }, {
    heading: "understand-the-tech-4",
    content: "Normal"
  }, {
    heading: "understand-the-tech-4",
    content: "North America"
  }, {
    heading: "understand-the-tech-4",
    content: "China"
  }, {
    heading: "understand-the-tech-4",
    content: "North America"
  }, {
    heading: "understand-the-tech-4",
    content: "Quality may be affected"
  }, {
    heading: "understand-the-tech-4",
    content: "If a server in the specified zone is not available, the SDK reports an error."
  }, {
    heading: "understand-the-tech-4",
    content: "Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected."
  }, {
    heading: "understand-the-tech-4",
    content: "The following figure shows the workflow you implement to restrict access to media zones:"
  }, {
    heading: "understand-the-tech-4",
    content: "**Restrict media zones**"
  }, {
    heading: "prerequisites-4",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-restricted-media-zones-4",
    content: "This section shows you how to restrict access to media zones in your app."
  }, {
    heading: "implement-restricted-media-zones-4",
    content: "By default, the SDK connects to the nearest Agora media zone. Set the `areaCode` parameter when calling the `initialize` method to specify the access zone(s). After you set the access zone, the SDK only connects to Agora servers in the specified zone."
  }, {
    heading: "implement-restricted-media-zones-4",
    content: "You can set the `areaCode` to:"
  }, {
    heading: "implement-restricted-media-zones-4",
    content: "`AreaCodeGlob`: Global (Default)"
  }, {
    heading: "implement-restricted-media-zones-4",
    content: "`AreaCodeCn` : Mainland China"
  }, {
    heading: "implement-restricted-media-zones-4",
    content: "`AreaCodeNa` : North America"
  }, {
    heading: "implement-restricted-media-zones-4",
    content: "`AreaCodeEu` : Europe"
  }, {
    heading: "implement-restricted-media-zones-4",
    content: "`AreaCodeAs` : Asia excluding Mainland China"
  }, {
    heading: "implement-restricted-media-zones-4",
    content: "`AreaCodeJp` : Japan"
  }, {
    heading: "implement-restricted-media-zones-4",
    content: "`AreaCodeIn` : India"
  }, {
    heading: "implement-restricted-media-zones-4",
    content: "Media zones support bitwise operations."
  }, {
    heading: "implement-restricted-media-zones-4",
    content: "Refer to the following sample code:"
  }, {
    heading: "reference-4",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-4",
    content: "`RtcEngineContext`"
  }, {
    heading: "api-reference-4",
    content: "`AreaCode`"
  }, {
    heading: "api-reference-4",
    content: "When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® media zone users connect to."
  }, {
    heading: "api-reference-4",
    content: "This is an advanced feature suitable only for use-cases with access security restrictions."
  }, {
    heading: "understand-the-tech-5",
    content: "After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:"
  }, {
    heading: "understand-the-tech-5",
    content: "Designated access zone"
  }, {
    heading: "understand-the-tech-5",
    content: "User's location"
  }, {
    heading: "understand-the-tech-5",
    content: "Zone actually accessed by the SDK"
  }, {
    heading: "understand-the-tech-5",
    content: "User experience"
  }, {
    heading: "understand-the-tech-5",
    content: "North America"
  }, {
    heading: "understand-the-tech-5",
    content: "North America"
  }, {
    heading: "understand-the-tech-5",
    content: "North America"
  }, {
    heading: "understand-the-tech-5",
    content: "Normal"
  }, {
    heading: "understand-the-tech-5",
    content: "North America"
  }, {
    heading: "understand-the-tech-5",
    content: "China"
  }, {
    heading: "understand-the-tech-5",
    content: "North America"
  }, {
    heading: "understand-the-tech-5",
    content: "Quality may be affected"
  }, {
    heading: "understand-the-tech-5",
    content: "If a server in the specified zone is not available, the SDK reports an error."
  }, {
    heading: "understand-the-tech-5",
    content: "Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected."
  }, {
    heading: "understand-the-tech-5",
    content: "The following figure shows the workflow you implement to restrict access to media zones:"
  }, {
    heading: "understand-the-tech-5",
    content: "**Restrict media zones**"
  }, {
    heading: "prerequisites-5",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-restricted-media-zones-5",
    content: "This section shows you how to restrict access to media zones in your app."
  }, {
    heading: "implement-restricted-media-zones-5",
    content: "By default, the SDK connects to the nearest Agora server. Set the `areaCode` property of `RtcEngineContext` when calling the `initialize` method to specify the access area. After setting the access zone, the SDK only connects to Agora servers in the specified zone(s)."
  }, {
    heading: "implement-restricted-media-zones-5",
    content: "You can set the area to:"
  }, {
    heading: "implement-restricted-media-zones-5",
    content: "`areaCodeGlob`: Global (Default)"
  }, {
    heading: "implement-restricted-media-zones-5",
    content: "`areaCodeCn` : Mainland China"
  }, {
    heading: "implement-restricted-media-zones-5",
    content: "`areaCodeNa` : North America"
  }, {
    heading: "implement-restricted-media-zones-5",
    content: "`areaCodeEu` : Europe"
  }, {
    heading: "implement-restricted-media-zones-5",
    content: "`areaCodeAs` : Asia excluding Mainland China"
  }, {
    heading: "implement-restricted-media-zones-5",
    content: "`areaCodeJp` : Japan"
  }, {
    heading: "implement-restricted-media-zones-5",
    content: "`areaCodeIn` : India"
  }, {
    heading: "implement-restricted-media-zones-5",
    content: "Media zones support bitwise operations."
  }, {
    heading: "implement-restricted-media-zones-5",
    content: "Refer to the following sample code:"
  }, {
    heading: "reference-5",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-5",
    content: "`initialize`"
  }, {
    heading: "api-reference-5",
    content: "`RtcEngineContext`"
  }, {
    heading: "api-reference-5",
    content: "`AreaCode`"
  }, {
    heading: "api-reference-5",
    content: "When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN(R) media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN(R) media zone users connect to."
  }, {
    heading: "api-reference-5",
    content: "This is an advanced feature suitable only for use-cases with access security restrictions."
  }, {
    heading: "understand-the-tech-6",
    content: "After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN(R) from North America and China respectively:"
  }, {
    heading: "understand-the-tech-6",
    content: "Designated access zone"
  }, {
    heading: "understand-the-tech-6",
    content: "User's location"
  }, {
    heading: "understand-the-tech-6",
    content: "Zone actually accessed by the SDK"
  }, {
    heading: "understand-the-tech-6",
    content: "User experience"
  }, {
    heading: "understand-the-tech-6",
    content: "North America"
  }, {
    heading: "understand-the-tech-6",
    content: "North America"
  }, {
    heading: "understand-the-tech-6",
    content: "North America"
  }, {
    heading: "understand-the-tech-6",
    content: "Normal"
  }, {
    heading: "understand-the-tech-6",
    content: "North America"
  }, {
    heading: "understand-the-tech-6",
    content: "China"
  }, {
    heading: "understand-the-tech-6",
    content: "North America"
  }, {
    heading: "understand-the-tech-6",
    content: "Quality may be affected"
  }, {
    heading: "understand-the-tech-6",
    content: "If a server in the specified zone is not available, the SDK reports an error."
  }, {
    heading: "understand-the-tech-6",
    content: "Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected."
  }, {
    heading: "understand-the-tech-6",
    content: "The following figure shows the workflow you implement to restrict access to media zones:"
  }, {
    heading: "understand-the-tech-6",
    content: "**Restrict media zones**"
  }, {
    heading: "prerequisites-6",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-restricted-media-zones-6",
    content: "This section shows you how to restrict access to media zones in your app."
  }, {
    heading: "implement-restricted-media-zones-6",
    content: "You call the `AgoraRTC.setArea` method to specify the media zone. By default, the SDK selects the nearest Agora server region to connect to. After you set the media zone, the SDK only connects to Agora servers in the specified zone."
  }, {
    heading: "implement-restricted-media-zones-6",
    content: "Use one of the following values for `areaCode` and `excludedArea`:"
  }, {
    heading: "implement-restricted-media-zones-6",
    content: "`ASIA`: Asia except Mainland China"
  }, {
    heading: "implement-restricted-media-zones-6",
    content: "`CHINA`: Mainland China"
  }, {
    heading: "implement-restricted-media-zones-6",
    content: "`EUROPE`: Europe"
  }, {
    heading: "implement-restricted-media-zones-6",
    content: "`GLOBAL`: Global (Default)"
  }, {
    heading: "implement-restricted-media-zones-6",
    content: "`INDIA`: India"
  }, {
    heading: "implement-restricted-media-zones-6",
    content: "`JAPAN`: Japan"
  }, {
    heading: "implement-restricted-media-zones-6",
    content: "`NORTH_AMERICA`: North America"
  }, {
    heading: "implement-restricted-media-zones-6",
    content: "Refer to the following sample code:"
  }, {
    heading: "implement-restricted-media-zones-6",
    content: "Use the `excludedArea` parameter to specify a smaller zone to be excluded from a larger zone. Currently, you can only set the larger zone to `GLOBAL`."
  }, {
    heading: "reference-6",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-6",
    content: "`setArea`"
  }, {
    heading: "api-reference-6",
    content: "`AREAS`"
  }, {
    heading: "api-reference-6",
    content: "When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN(R) media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN(R) media zone users connect to."
  }, {
    heading: "api-reference-6",
    content: "This is an advanced feature suitable only for use-cases with access security restrictions."
  }, {
    heading: "understand-the-tech-7",
    content: "After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN(R) from North America and China respectively:"
  }, {
    heading: "understand-the-tech-7",
    content: "Designated access zone"
  }, {
    heading: "understand-the-tech-7",
    content: "User's location"
  }, {
    heading: "understand-the-tech-7",
    content: "Zone actually accessed by the SDK"
  }, {
    heading: "understand-the-tech-7",
    content: "User experience"
  }, {
    heading: "understand-the-tech-7",
    content: "North America"
  }, {
    heading: "understand-the-tech-7",
    content: "North America"
  }, {
    heading: "understand-the-tech-7",
    content: "North America"
  }, {
    heading: "understand-the-tech-7",
    content: "Normal"
  }, {
    heading: "understand-the-tech-7",
    content: "North America"
  }, {
    heading: "understand-the-tech-7",
    content: "China"
  }, {
    heading: "understand-the-tech-7",
    content: "North America"
  }, {
    heading: "understand-the-tech-7",
    content: "Quality may be affected"
  }, {
    heading: "understand-the-tech-7",
    content: "If a server in the specified zone is not available, the SDK reports an error."
  }, {
    heading: "understand-the-tech-7",
    content: "Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected."
  }, {
    heading: "understand-the-tech-7",
    content: "The following figure shows the workflow you implement to restrict access to media zones:"
  }, {
    heading: "understand-the-tech-7",
    content: "**Restrict media zones**"
  }, {
    heading: "prerequisites-7",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-restricted-media-zones-7",
    content: "This section shows you how to restrict access to media zones in your app."
  }, {
    heading: "implement-restricted-media-zones-7",
    content: "By default, the SDK connects to the nearest Agora server. You set the `areaCode` property by calling the `setArea` method to specify the media zone(s). After setting the access zone, the SDK only connects to Agora servers in the specified media zone."
  }, {
    heading: "implement-restricted-media-zones-7",
    content: "You can set the area to:"
  }, {
    heading: "implement-restricted-media-zones-7",
    content: "`ASIA`: Asia except Mainland China"
  }, {
    heading: "implement-restricted-media-zones-7",
    content: "`CHINA`: Mainland China"
  }, {
    heading: "implement-restricted-media-zones-7",
    content: "`EUROPE`: European region"
  }, {
    heading: "implement-restricted-media-zones-7",
    content: "`GLOBAL`: Global (Default)"
  }, {
    heading: "implement-restricted-media-zones-7",
    content: "`INDIA`: India"
  }, {
    heading: "implement-restricted-media-zones-7",
    content: "`JAPAN`: Japan"
  }, {
    heading: "implement-restricted-media-zones-7",
    content: "`NORTH_AMERICA`: North America"
  }, {
    heading: "implement-restricted-media-zones-7",
    content: "Media zones support bitwise operations."
  }, {
    heading: "implement-restricted-media-zones-7",
    content: "Refer to the following sample code:"
  }, {
    heading: "reference-7",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-7",
    content: "`setArea`"
  }, {
    heading: "api-reference-7",
    content: "`AREAS`"
  }, {
    heading: "api-reference-7",
    content: "When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® media zone users connect to."
  }, {
    heading: "api-reference-7",
    content: "This is an advanced feature suitable only for use-cases with access security restrictions."
  }, {
    heading: "understand-the-tech-8",
    content: "After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:"
  }, {
    heading: "understand-the-tech-8",
    content: "Designated access zone"
  }, {
    heading: "understand-the-tech-8",
    content: "User's location"
  }, {
    heading: "understand-the-tech-8",
    content: "Zone actually accessed by the SDK"
  }, {
    heading: "understand-the-tech-8",
    content: "User experience"
  }, {
    heading: "understand-the-tech-8",
    content: "North America"
  }, {
    heading: "understand-the-tech-8",
    content: "North America"
  }, {
    heading: "understand-the-tech-8",
    content: "North America"
  }, {
    heading: "understand-the-tech-8",
    content: "Normal"
  }, {
    heading: "understand-the-tech-8",
    content: "North America"
  }, {
    heading: "understand-the-tech-8",
    content: "China"
  }, {
    heading: "understand-the-tech-8",
    content: "North America"
  }, {
    heading: "understand-the-tech-8",
    content: "Quality may be affected"
  }, {
    heading: "understand-the-tech-8",
    content: "If a server in the specified zone is not available, the SDK reports an error."
  }, {
    heading: "understand-the-tech-8",
    content: "Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected."
  }, {
    heading: "understand-the-tech-8",
    content: "The following figure shows the workflow you implement to restrict access to media zones:"
  }, {
    heading: "understand-the-tech-8",
    content: "**Restrict media zones**"
  }, {
    heading: "prerequisites-8",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-restricted-media-zones-8",
    content: "This section shows you how to restrict access to media zones in your app."
  }, {
    heading: "implement-restricted-media-zones-8",
    content: "By default, the SDK connects to the nearest Agora server. Set the `areaCode` property of `RTCEngineContext` before passing it to the `initialize` method. After you set the media zone, the SDK only connects to servers in the specified zone."
  }, {
    heading: "implement-restricted-media-zones-8",
    content: "You can set the `areaCode` to:"
  }, {
    heading: "implement-restricted-media-zones-8",
    content: "`AreaCodeGlob`: Global (Default)"
  }, {
    heading: "implement-restricted-media-zones-8",
    content: "`AreaCodeCn` : Mainland China"
  }, {
    heading: "implement-restricted-media-zones-8",
    content: "`AreaCodeNa` : North America"
  }, {
    heading: "implement-restricted-media-zones-8",
    content: "`AreaCodeEu` : Europe"
  }, {
    heading: "implement-restricted-media-zones-8",
    content: "`AreaCodeAs` : Asia excluding Mainland China"
  }, {
    heading: "implement-restricted-media-zones-8",
    content: "`AreaCodeJp` : Japan"
  }, {
    heading: "implement-restricted-media-zones-8",
    content: "`AreaCodeIn` : India"
  }, {
    heading: "implement-restricted-media-zones-8",
    content: "Media zones support bitwise operations."
  }, {
    heading: "implement-restricted-media-zones-8",
    content: "Refer to the following sample code:"
  }, {
    heading: "reference-8",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-8",
    content: "`RtcEngineContext`"
  }, {
    heading: "api-reference-8",
    content: "`AreaCode`"
  }, {
    heading: "api-reference-8",
    content: "When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your game by specifying the Agora SDRTN® media zone users connect to."
  }, {
    heading: "api-reference-8",
    content: "This is an advanced feature suitable only for use-cases with access security restrictions."
  }, {
    heading: "understand-the-tech-9",
    content: "After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:"
  }, {
    heading: "understand-the-tech-9",
    content: "Designated access zone"
  }, {
    heading: "understand-the-tech-9",
    content: "User's location"
  }, {
    heading: "understand-the-tech-9",
    content: "Zone actually accessed by the SDK"
  }, {
    heading: "understand-the-tech-9",
    content: "User experience"
  }, {
    heading: "understand-the-tech-9",
    content: "North America"
  }, {
    heading: "understand-the-tech-9",
    content: "North America"
  }, {
    heading: "understand-the-tech-9",
    content: "North America"
  }, {
    heading: "understand-the-tech-9",
    content: "Normal"
  }, {
    heading: "understand-the-tech-9",
    content: "North America"
  }, {
    heading: "understand-the-tech-9",
    content: "China"
  }, {
    heading: "understand-the-tech-9",
    content: "North America"
  }, {
    heading: "understand-the-tech-9",
    content: "Quality may be affected"
  }, {
    heading: "understand-the-tech-9",
    content: "If a server in the specified zone is not available, the SDK reports an error."
  }, {
    heading: "understand-the-tech-9",
    content: "Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected."
  }, {
    heading: "understand-the-tech-9",
    content: "The following figure shows the workflow you implement to restrict access to media zones:"
  }, {
    heading: "understand-the-tech-9",
    content: "**Restrict media zones**"
  }, {
    heading: "prerequisites-9",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-restricted-media-zones-9",
    content: "This section shows you how to restrict access to media zones in your game."
  }, {
    heading: "implement-restricted-media-zones-9",
    content: "By default, the SDK connects to the nearest Agora server. Set the `areaCode` property of `RtcEngineContext` when calling the `initialize` method to specify the access zone(s). After setting the access zone, the SDK only connects to Agora servers in the specified zone(s)."
  }, {
    heading: "implement-restricted-media-zones-9",
    content: "You can set the `areaCode` to:"
  }, {
    heading: "implement-restricted-media-zones-9",
    content: "`AREA_CODE_GLOB`: Global (Default)"
  }, {
    heading: "implement-restricted-media-zones-9",
    content: "`AREA_CODE_CN` : Mainland China"
  }, {
    heading: "implement-restricted-media-zones-9",
    content: "`AREA_CODE_NA` : North America"
  }, {
    heading: "implement-restricted-media-zones-9",
    content: "`AREA_CODE_EU` : Europe"
  }, {
    heading: "implement-restricted-media-zones-9",
    content: "`AREA_CODE_AS` : Asia except Mainland China"
  }, {
    heading: "implement-restricted-media-zones-9",
    content: "`AREA_CODE_JP` : Japan"
  }, {
    heading: "implement-restricted-media-zones-9",
    content: "`AREA_CODE_IN` : India"
  }, {
    heading: "implement-restricted-media-zones-9",
    content: "Media zones support bitwise operations."
  }, {
    heading: "include-a-media-zone-4",
    content: "To limit access to servers in only one media zone, such as North America, set `context.areaCode = AREA_CODE_NA;` before calling the `initialize` method:"
  }, {
    heading: "exclude-a-media-zone-4",
    content: "To exclude servers in a region, such as Mainland China, set `context.areaCode = AREA_CODE.AREA_CODE_GLOB ^ AREA_CODE.AREA_CODE_CN;` before calling the `initialize` method:"
  }, {
    heading: "reference-9",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-9",
    content: "`Initialize`"
  }, {
    heading: "api-reference-9",
    content: "`RtcEngineContext`"
  }, {
    heading: "api-reference-9",
    content: "`AreaCode`"
  }, {
    heading: "api-reference-9",
    content: "`CreateAgoraRtcEngine`"
  }, {
    heading: "api-reference-9",
    content: "When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN(R) media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN(R) media zone users connect to."
  }, {
    heading: "api-reference-9",
    content: "This is an advanced feature suitable only for use-cases with access security restrictions."
  }, {
    heading: "understand-the-tech-10",
    content: "After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN(R) from North America and China respectively:"
  }, {
    heading: "understand-the-tech-10",
    content: "Designated access zone"
  }, {
    heading: "understand-the-tech-10",
    content: "User's location"
  }, {
    heading: "understand-the-tech-10",
    content: "Zone actually accessed by the SDK"
  }, {
    heading: "understand-the-tech-10",
    content: "User experience"
  }, {
    heading: "understand-the-tech-10",
    content: "North America"
  }, {
    heading: "understand-the-tech-10",
    content: "North America"
  }, {
    heading: "understand-the-tech-10",
    content: "North America"
  }, {
    heading: "understand-the-tech-10",
    content: "Normal"
  }, {
    heading: "understand-the-tech-10",
    content: "North America"
  }, {
    heading: "understand-the-tech-10",
    content: "China"
  }, {
    heading: "understand-the-tech-10",
    content: "North America"
  }, {
    heading: "understand-the-tech-10",
    content: "Quality may be affected"
  }, {
    heading: "understand-the-tech-10",
    content: "If a server in the specified zone is not available, the SDK reports an error."
  }, {
    heading: "understand-the-tech-10",
    content: "Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected."
  }, {
    heading: "understand-the-tech-10",
    content: "The following figure shows the workflow you implement to restrict access to media zones:"
  }, {
    heading: "understand-the-tech-10",
    content: "**Restrict media zones**"
  }, {
    heading: "prerequisites-10",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-restricted-media-zones-10",
    content: "This section shows you how to restrict access to media zones in your app."
  }, {
    heading: "implement-restricted-media-zones-10",
    content: "By default, the SDK connects to the nearest Agora server. Set the `areaCode` property of `RtcEngineContext` when calling the `initialize` method to specify the media zones. After setting the media zone(s), the SDK only connects to Agora servers in the specified zone(s)."
  }, {
    heading: "implement-restricted-media-zones-10",
    content: "You can set the `areaCode` to:"
  }, {
    heading: "implement-restricted-media-zones-10",
    content: "`AREA_CODE_GLOB`: Global (Default)"
  }, {
    heading: "implement-restricted-media-zones-10",
    content: "`AREA_CODE_CN`: Mainland China"
  }, {
    heading: "implement-restricted-media-zones-10",
    content: "`AREA_CODE_NA`: North America"
  }, {
    heading: "implement-restricted-media-zones-10",
    content: "`AREA_CODE_EU`: Europe"
  }, {
    heading: "implement-restricted-media-zones-10",
    content: "`AREA_CODE_AS`: Asia except Mainland China"
  }, {
    heading: "implement-restricted-media-zones-10",
    content: "`AREA_CODE_JP`: Japan"
  }, {
    heading: "implement-restricted-media-zones-10",
    content: "`AREA_CODE_IN`: India"
  }, {
    heading: "implement-restricted-media-zones-10",
    content: "Media zones support bitwise operations. To include a zone, use the `|` operator, to exclude a zone use `^`."
  }, {
    heading: "implement-restricted-media-zones-10",
    content: "Refer to the following code:"
  }, {
    heading: "reference-10",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-10",
    content: "`initialize`"
  }, {
    heading: "api-reference-10",
    content: "`RtcEngineContext`"
  }, {
    heading: "api-reference-10",
    content: "`AREA_CODE`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implement-restricted-media-zones",
    content: "Implement restricted media zones"
  }, {
    id: "include-a-media-zone",
    content: "Include a media zone"
  }, {
    id: "exclude-a-media-zone",
    content: "Exclude a media zone"
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
    id: "implement-restricted-media-zones-1",
    content: "Implement restricted media zones"
  }, {
    id: "include-a-media-zone-1",
    content: "Include a media zone"
  }, {
    id: "exclude-a-media-zone-1",
    content: "Exclude a media zone"
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
    id: "implement-restricted-media-zones-2",
    content: "Implement restricted media zones"
  }, {
    id: "include-a-media-zone-2",
    content: "Include a media zone"
  }, {
    id: "exclude-a-media-zone-2",
    content: "Exclude a media zone"
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
    id: "implement-restricted-media-zones-3",
    content: "Implement restricted media zones"
  }, {
    id: "include-a-media-zone-3",
    content: "Include a media zone"
  }, {
    id: "exclude-a-media-zone-3",
    content: "Exclude a media zone"
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
    id: "implement-restricted-media-zones-4",
    content: "Implement restricted media zones"
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
    id: "implement-restricted-media-zones-5",
    content: "Implement restricted media zones"
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
    id: "implement-restricted-media-zones-6",
    content: "Implement restricted media zones"
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
    id: "implement-restricted-media-zones-7",
    content: "Implement restricted media zones"
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
    id: "implement-restricted-media-zones-8",
    content: "Implement restricted media zones"
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
    id: "implement-restricted-media-zones-9",
    content: "Implement restricted media zones"
  }, {
    id: "include-a-media-zone-4",
    content: "Include a media zone"
  }, {
    id: "exclude-a-media-zone-4",
    content: "Exclude a media zone"
  }, {
    id: "reference-9",
    content: "Reference"
  }, {
    id: "api-reference-9",
    content: "API reference"
  }, {
    id: "understand-the-tech-10",
    content: "Understand the tech"
  }, {
    id: "prerequisites-10",
    content: "Prerequisites"
  }, {
    id: "implement-restricted-media-zones-10",
    content: "Implement restricted media zones"
  }, {
    id: "reference-10",
    content: "Reference"
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
  url: "#implement-restricted-media-zones",
  title: _jsx(_Fragment, {
    children: "Implement restricted media zones"
  })
}, {
  depth: 3,
  url: "#include-a-media-zone",
  title: _jsx(_Fragment, {
    children: "Include a media zone"
  })
}, {
  depth: 3,
  url: "#exclude-a-media-zone",
  title: _jsx(_Fragment, {
    children: "Exclude a media zone"
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
  url: "#implement-restricted-media-zones-1",
  title: _jsx(_Fragment, {
    children: "Implement restricted media zones"
  })
}, {
  depth: 3,
  url: "#include-a-media-zone-1",
  title: _jsx(_Fragment, {
    children: "Include a media zone"
  })
}, {
  depth: 3,
  url: "#exclude-a-media-zone-1",
  title: _jsx(_Fragment, {
    children: "Exclude a media zone"
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
  url: "#implement-restricted-media-zones-2",
  title: _jsx(_Fragment, {
    children: "Implement restricted media zones"
  })
}, {
  depth: 3,
  url: "#include-a-media-zone-2",
  title: _jsx(_Fragment, {
    children: "Include a media zone"
  })
}, {
  depth: 3,
  url: "#exclude-a-media-zone-2",
  title: _jsx(_Fragment, {
    children: "Exclude a media zone"
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
  url: "#implement-restricted-media-zones-3",
  title: _jsx(_Fragment, {
    children: "Implement restricted media zones"
  })
}, {
  depth: 3,
  url: "#include-a-media-zone-3",
  title: _jsx(_Fragment, {
    children: "Include a media zone"
  })
}, {
  depth: 3,
  url: "#exclude-a-media-zone-3",
  title: _jsx(_Fragment, {
    children: "Exclude a media zone"
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
  url: "#implement-restricted-media-zones-4",
  title: _jsx(_Fragment, {
    children: "Implement restricted media zones"
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
  url: "#implement-restricted-media-zones-5",
  title: _jsx(_Fragment, {
    children: "Implement restricted media zones"
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
  url: "#implement-restricted-media-zones-6",
  title: _jsx(_Fragment, {
    children: "Implement restricted media zones"
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
  url: "#implement-restricted-media-zones-7",
  title: _jsx(_Fragment, {
    children: "Implement restricted media zones"
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
  url: "#implement-restricted-media-zones-8",
  title: _jsx(_Fragment, {
    children: "Implement restricted media zones"
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
  url: "#implement-restricted-media-zones-9",
  title: _jsx(_Fragment, {
    children: "Implement restricted media zones"
  })
}, {
  depth: 3,
  url: "#include-a-media-zone-4",
  title: _jsx(_Fragment, {
    children: "Include a media zone"
  })
}, {
  depth: 3,
  url: "#exclude-a-media-zone-4",
  title: _jsx(_Fragment, {
    children: "Exclude a media zone"
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
}, {
  depth: 2,
  url: "#understand-the-tech-10",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-10",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-restricted-media-zones-10",
  title: _jsx(_Fragment, {
    children: "Implement restricted media zones"
  })
}, {
  depth: 2,
  url: "#reference-10",
  title: _jsx(_Fragment, {
    children: "Reference"
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
    h2: "h2",
    h3: "h3",
    img: "img",
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
  }, { CalloutContainer, CalloutDescription, CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
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
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "web",
    platforms: '["android","ios","macos","windows","electron","flutter","web","javascript","react-native","unity","unreal"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "android",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "android"
      }), _jsx(_components.p, {
        children: "When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® media zone users connect to."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "This is an advanced feature suitable only for use-cases with access security restrictions."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Designated access zone"
            }), _jsx(_components.th, {
              children: "User's location"
            }), _jsx(_components.th, {
              children: "Zone actually accessed by the SDK"
            }), _jsx(_components.th, {
              children: "User experience"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "Normal"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "China"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "Quality may be affected"
            })]
          })]
        })]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "If a server in the specified zone is not available, the SDK reports an error."
            }), `
`, _jsx(_components.li, {
              children: "Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected."
            }), `
`]
          })
        })
      }), _jsx(_components.p, {
        children: "The following figure shows the workflow you implement to restrict access to media zones:"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Restrict media zones"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/restrict-media-zones.svg",
          alt: "Restrict media zones"
        })
      }), _jsx(_components.h2, {
        id: "prerequisites",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have implemented the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/get-started-sdk",
          children: "SDK quickstart"
        }), " in your project."]
      }), _jsx(_components.h2, {
        id: "implement-restricted-media-zones",
        children: "Implement restricted media zones"
      }), _jsx(_components.p, {
        children: "This section shows you how to restrict access to media zones in your app."
      }), _jsxs(_components.p, {
        children: ["You specify the access zones by setting the ", _jsx(_components.code, {
          children: "RtcEngineConfig.mAreaCode"
        }), " parameter when calling the ", _jsx(_components.code, {
          children: "create"
        }), " method to create an ", _jsx(_components.code, {
          children: "RtcEngine"
        }), " instance. The available zones are:"]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_GLOB"
          }), ": Global (Default)"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_CN"
          }), " : Mainland China"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_NA"
          }), " : North America"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_EU"
          }), " : Europe"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_AS"
          }), " : Asia excluding Mainland China"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_JP"
          }), " : Japan"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_IN"
          }), " : India"]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Media zones support bitwise operations."
          })
        })
      }), _jsx(_components.h3, {
        id: "include-a-media-zone",
        children: "Include a media zone"
      }), _jsxs(_components.p, {
        children: ["To limit access to servers in only one zone, such as North America, set ", _jsx(_components.code, {
          children: "config.mAreaCode = AREA_CODE_NA;"
        }), " before creating the ", _jsx(_components.code, {
          children: "RtcEngine"
        }), " instance:"]
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
                    children: "// Initialize the App and join the channel"
                  })
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
                    children: " void"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " initializeAndJoinChannel"
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
                    children: "    RtcEngineConfig config "
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
                    children: " RtcEngineConfig"
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
                    children: "    config.mAppId "
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
                    children: " appId;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    config.mContext "
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
                    children: " mContext;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    config.mEventHandler "
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
                    children: " mEngineEventHandler.mRtcEventHandler;"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // Restrict access to servers in North America only"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    config.mAreaCode "
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
                    children: " AREA_CODE_NA;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    mRtcEngine "
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
                    children: " RtcEngine."
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
                    children: " (Exception "
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "      throw"
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
                    children: " RuntimeException"
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
                    children: '"Check the error."'
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
                    children: "// Initialize the App and join the channel"
                  })
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
                    children: " initializeAndJoinChannel"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    val"
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " RtcEngineConfig"
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
                    children: "    config.mAppId "
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
                    children: " appId"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    config.mContext "
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
                    children: " mContext"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    config.mEventHandler "
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
                    children: " mEngineEventHandler.mRtcEventHandler"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // Restrict access to servers in North America only"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    config.mAreaCode "
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
                    children: " AREA_CODE_NA"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    mRtcEngine "
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
                    children: " RtcEngine."
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
                    children: "(config)"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "      throw"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " RuntimeException"
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
                    children: '"Check the error."'
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
          })
        })]
      }), _jsx(_components.h3, {
        id: "exclude-a-media-zone",
        children: "Exclude a media zone"
      }), _jsxs(_components.p, {
        children: ["To exclude servers in a zone, such as Mainland China, set ", _jsx(_components.code, {
          children: "config.mAreaCode = AREA_CODE_GLOB ^ AREA_CODE_CN;"
        }), " before creating the ", _jsx(_components.code, {
          children: "RtcEngine"
        }), " instance:"]
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
                    children: "// Initialize the App and join the channel"
                  })
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
                    children: " void"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " initializeAndJoinChannel"
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
                    children: "    RtcEngineConfig config "
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
                    children: " RtcEngineConfig"
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
                    children: "    config.mAppId "
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
                    children: " appId;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    config.mContext "
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
                    children: " mContext;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    config.mEventHandler "
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
                    children: " mEngineEventHandler.mRtcEventHandler;"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // Exclude Mainland China from access zones"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    config.mAreaCode "
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
                    children: " AREA_CODE_GLOB "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "^"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " AREA_CODE_CN;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    mRtcEngine "
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
                    children: " RtcEngine."
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
                    children: " (Exception "
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "      throw"
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
                    children: " RuntimeException"
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
                    children: '"Check the error."'
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
                    children: "// Initialize the App and join the channel"
                  })
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
                    children: " initializeAndJoinChannel"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    val"
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " RtcEngineConfig"
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
                    children: "    config.mAppId "
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
                    children: " appId"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    config.mContext "
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
                    children: " mContext"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    config.mEventHandler "
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
                    children: " mEngineEventHandler.mRtcEventHandler"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // Exclude Mainland China from access zones"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    config.mAreaCode "
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
                    children: " AREA_CODE_GLOB xor AREA_CODE_CN"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    mRtcEngine "
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
                    children: " RtcEngine."
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
                    children: "(config)"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "      throw"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " RuntimeException"
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
                    children: '"Check the error."'
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
          })
        })]
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
          children: _jsxs(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_initialize",
            children: [_jsx(_components.code, {
              children: "create"
            }), " [2/2]"]
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
        children: "When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® media zone users connect to."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "This is an advanced feature suitable only for use-cases with access security restrictions."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-1",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Designated access zone"
            }), _jsx(_components.th, {
              children: "User's location"
            }), _jsx(_components.th, {
              children: "Zone actually accessed by the SDK"
            }), _jsx(_components.th, {
              children: "User experience"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "Normal"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "China"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "Quality may be affected"
            })]
          })]
        })]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "If a server in the specified zone is not available, the SDK reports an error."
            }), `
`, _jsx(_components.li, {
              children: "Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected."
            }), `
`]
          })
        })
      }), _jsx(_components.p, {
        children: "The following figure shows the workflow you implement to restrict access to media zones:"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Restrict media zones"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/restrict-media-zones.svg",
          alt: "Restrict media zones"
        })
      }), _jsx(_components.h2, {
        id: "prerequisites-1",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have implemented the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/get-started-sdk",
          children: "SDK quickstart"
        }), " in your project."]
      }), _jsx(_components.h2, {
        id: "implement-restricted-media-zones-1",
        children: "Implement restricted media zones"
      }), _jsx(_components.p, {
        children: "This section shows you how to restrict access to media zones in your app."
      }), _jsxs(_components.p, {
        children: ["You specify the access zones by setting the ", _jsx(_components.code, {
          children: "AgoraRtcEngineConfig.areaCode"
        }), " parameter when calling the ", _jsx(_components.code, {
          children: "sharedEngineWithConfig"
        }), " method to create an instance of ", _jsx(_components.code, {
          children: "AgoraRtcEngineKit"
        }), "."]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AgoraAreaCodeType.global"
          }), ": Global (Default)"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AgoraAreaCodeType.AS"
          }), " : Asia except Mainland China"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AgoraAreaCodeType.CN"
          }), " : Mainland China"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AgoraAreaCodeType.EUR"
          }), " : Europe"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AgoraAreaCodeType.IN"
          }), " : India"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AgoraAreaCodeType.JP"
          }), " : Japan"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AgoraAreaCodeType.NA"
          }), " : North America"]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Media zones support bitwise operations."
          })
        })
      }), _jsx(_components.h3, {
        id: "include-a-media-zone-1",
        children: "Include a media zone"
      }), _jsxs(_components.p, {
        children: ["To limit access to servers in only one zone, such as North America, set ", _jsx(_components.code, {
          children: "config.areaCode = .NA"
        }), " before creating the ", _jsx(_components.code, {
          children: "AgoraRtcEngineKit"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Initialize AgoraEngine"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "func"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " initializeAgoraEngine"
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
                children: "   let"
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
                children: " AgoraRtcEngineConfig"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "   // Pass in your App ID"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "   config.appId "
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
                children: ' "YourAppId"'
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "   config.channelProfile "
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
                children: " .liveBroadcasting"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "   // Specify access to only servers in North America"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "   config.areaCode "
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
                children: " .NA"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "   agoraKit "
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
                children: " AgoraRtcEngineKit."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "sharedEngine"
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
                children: "with"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": config, "
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
                children: "self"
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
                children: " }"
              })
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "exclude-a-media-zone-1",
        children: "Exclude a media zone"
      }), _jsxs(_components.p, {
        children: ["To exclude servers in a zone, such as Mainland China, set ", _jsx(_components.code, {
          children: "config.areaCode = AgoraAreaCodeType(rawValue: AgoraAreaCodeType.global.rawValue ^ AgoraAreaCodeType.CN.rawValue)！"
        }), " before creating the ", _jsx(_components.code, {
          children: "AgoraRtcEngineKit"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Initialize AgoraEngine"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "func"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " initializeAgoraEngine"
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
                children: "  let"
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
                children: " AgoraRtcEngineConfig"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Pass in your App ID"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  config.appId "
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
                children: ' "YourAppId"'
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  config.channelProfile "
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
                children: " .liveBroadcasting"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Exclude Mainland China from access area"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  config.areaCode "
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
                children: " AgoraAreaCodeType"
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
                children: "rawValue"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": AgoraAreaCodeType.global."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "rawValue"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " ^"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " AgoraAreaCodeType.CN."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "rawValue"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")！"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  agoraKit "
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
                children: " AgoraRtcEngineKit."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "sharedEngine"
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
                children: "with"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": config, "
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
                children: "self"
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
            href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcengineconfig/areacode",
            children: _jsx(_components.code, {
              children: "areaCode"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcengineconfig",
            children: _jsx(_components.code, {
              children: "AgoraRtcEngineConfig"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoraareacodetype",
            children: _jsx(_components.code, {
              children: "AgoraAreaCodeType"
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
      }), _jsx(_components.p, {
        children: "When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® media zone users connect to."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "This is an advanced feature suitable only for use-cases with access security restrictions."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-2",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Designated access zone"
            }), _jsx(_components.th, {
              children: "User's location"
            }), _jsx(_components.th, {
              children: "Zone actually accessed by the SDK"
            }), _jsx(_components.th, {
              children: "User experience"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "Normal"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "China"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "Quality may be affected"
            })]
          })]
        })]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "If a server in the specified zone is not available, the SDK reports an error."
            }), `
`, _jsx(_components.li, {
              children: "Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected."
            }), `
`]
          })
        })
      }), _jsx(_components.p, {
        children: "The following figure shows the workflow you implement to restrict access to media zones:"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Restrict media zones"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/restrict-media-zones.svg",
          alt: "Restrict media zones"
        })
      }), _jsx(_components.h2, {
        id: "prerequisites-2",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have implemented the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/get-started-sdk",
          children: "SDK quickstart"
        }), " in your project."]
      }), _jsx(_components.h2, {
        id: "implement-restricted-media-zones-2",
        children: "Implement restricted media zones"
      }), _jsx(_components.p, {
        children: "This section shows you how to restrict access to media zones in your app."
      }), _jsxs(_components.p, {
        children: ["You specify the access zones by setting the ", _jsx(_components.code, {
          children: "AgoraRtcEngineConfig.areaCode"
        }), " parameter when calling the ", _jsx(_components.code, {
          children: "sharedEngineWithConfig"
        }), " method to create an instance of ", _jsx(_components.code, {
          children: "AgoraRtcEngineKit"
        }), "."]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AgoraAreaCodeType.global"
          }), ": Global (Default)"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AgoraAreaCodeType.AS"
          }), " : Asia except Mainland China"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AgoraAreaCodeType.CN"
          }), " : Mainland China"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AgoraAreaCodeType.EUR"
          }), " : Europe"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AgoraAreaCodeType.IN"
          }), " : India"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AgoraAreaCodeType.JP"
          }), " : Japan"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AgoraAreaCodeType.NA"
          }), " : North America"]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Media zones support bitwise operations."
          })
        })
      }), _jsx(_components.h3, {
        id: "include-a-media-zone-2",
        children: "Include a media zone"
      }), _jsxs(_components.p, {
        children: ["To limit access to servers in only one zone, such as North America, set ", _jsx(_components.code, {
          children: "config.areaCode = .NA"
        }), " before creating the ", _jsx(_components.code, {
          children: "AgoraRtcEngineKit"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Initialize AgoraEngine"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "func"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " initializeAgoraEngine"
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
                children: "   let"
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
                children: " AgoraRtcEngineConfig"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "   // Pass in your App ID"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "   config.appId "
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
                children: ' "YourAppId"'
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "   config.channelProfile "
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
                children: " .liveBroadcasting"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "   // Specify access to only servers in North America"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "   config.areaCode "
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
                children: " .NA"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "   agoraKit "
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
                children: " AgoraRtcEngineKit."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "sharedEngine"
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
                children: "with"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": config, "
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
                children: "self"
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
                children: " }"
              })
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "exclude-a-media-zone-2",
        children: "Exclude a media zone"
      }), _jsxs(_components.p, {
        children: ["To exclude servers in a zone, such as Mainland China, set ", _jsx(_components.code, {
          children: "config.areaCode = AgoraAreaCodeType(rawValue: AgoraAreaCodeType.global.rawValue ^ AgoraAreaCodeType.CN.rawValue)！"
        }), " before creating the ", _jsx(_components.code, {
          children: "AgoraRtcEngineKit"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Initialize AgoraEngine"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "func"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " initializeAgoraEngine"
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
                children: "  let"
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
                children: " AgoraRtcEngineConfig"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Pass in your App ID"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  config.appId "
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
                children: ' "YourAppId"'
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  config.channelProfile "
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
                children: " .liveBroadcasting"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Exclude Mainland China from access area"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  config.areaCode "
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
                children: " AgoraAreaCodeType"
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
                children: "rawValue"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": AgoraAreaCodeType.global."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "rawValue"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " ^"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " AgoraAreaCodeType.CN."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "rawValue"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")！"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  agoraKit "
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
                children: " AgoraRtcEngineKit."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "sharedEngine"
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
                children: "with"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": config, "
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
                children: "self"
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
      }), _jsx(_components.h2, {
        id: "reference-2",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference-2",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcengineconfig/areacode",
            children: _jsx(_components.code, {
              children: "areaCode"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcengineconfig",
            children: _jsx(_components.code, {
              children: "AgoraRtcEngineConfig"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoraareacodetype",
            children: _jsx(_components.code, {
              children: "AgoraAreaCodeType"
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
        children: "When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® media zone users connect to."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "This is an advanced feature suitable only for use-cases with access security restrictions."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-3",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Designated access zone"
            }), _jsx(_components.th, {
              children: "User's location"
            }), _jsx(_components.th, {
              children: "Zone actually accessed by the SDK"
            }), _jsx(_components.th, {
              children: "User experience"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "Normal"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "China"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "Quality may be affected"
            })]
          })]
        })]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "If a server in the specified zone is not available, the SDK reports an error."
            }), `
`, _jsx(_components.li, {
              children: "Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected."
            }), `
`]
          })
        })
      }), _jsx(_components.p, {
        children: "The following figure shows the workflow you implement to restrict access to media zones:"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Restrict media zones"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/restrict-media-zones.svg",
          alt: "Restrict media zones"
        })
      }), _jsx(_components.h2, {
        id: "prerequisites-3",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have implemented the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/get-started-sdk",
          children: "SDK quickstart"
        }), " in your project."]
      }), _jsx(_components.h2, {
        id: "implement-restricted-media-zones-3",
        children: "Implement restricted media zones"
      }), _jsx(_components.p, {
        children: "This section shows you how to restrict access to media zones in your app."
      }), _jsxs(_components.p, {
        children: ["You specify the media zone by setting the ", _jsx(_components.code, {
          children: "context.areaCode"
        }), " parameter before calling the ", _jsx(_components.code, {
          children: "initialize"
        }), " method to create an ", _jsx(_components.code, {
          children: "IRtcEngine"
        }), " instance. The available media zones are:"]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_GLOB"
          }), ": Global (Default)"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_CN"
          }), " : Mainland China"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_NA"
          }), " : North America"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_EU"
          }), " : Europe"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_AS"
          }), " : Asia except Mainland China"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_JP"
          }), " : Japan"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_IN"
          }), " : India"]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Media zones support bitwise operations."
          })
        })
      }), _jsx(_components.h3, {
        id: "include-a-media-zone-3",
        children: "Include a media zone"
      }), _jsxs(_components.p, {
        children: ["To limit access to servers in only one media zone, such as North America, set ", _jsx(_components.code, {
          children: "context.areaCode = AREA_CODE_NA;"
        }), " before calling the ", _jsx(_components.code, {
          children: "initialize"
        }), " method:"]
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Initialize Agora SDK"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "bool"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " CAgoraRegionConnDlg"
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
                children: "InitAgora"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "() {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Create AgoraRtcEngine instance"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  m_rtcEngine "
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
                children: " createAgoraRtcEngine"
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
                children: "m_rtcEngine) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    m_lstInfo."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "InsertString"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(m_lstInfo."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "GetCount"
              }), _jsx(_components.span, {
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
                children: "-"
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
                children: ", "
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
                children: '"createAgoraRtcEngine failed"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "));"
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
                children: "  m_eventHandler."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "SetMsgReceiver"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(m_hWnd);"
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
                children: "  RtcEngineContext context;"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  std"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::string strAppID "
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
                children: " GET_APP_ID;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  context.appId "
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
                children: " strAppID."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "c_str"
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
                children: "  CString area_code;"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  m_cmbAreaCode."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "GetWindowText"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(area_code);"
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
                children: "  // Restrict access to servers in North America"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  context.areaCode "
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
                children: " AREA_CODE_NA;"
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
                children: "  // Initialize RtcEngineContext"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "  int"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ret "
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
                children: " m_rtcEngine->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "initialize"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(context);"
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
                children: " (ret "
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    m_initialize "
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
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    CString strInfo;"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    strInfo."
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
                children: '"initialize failed: '
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
                children: "), ret);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    m_lstInfo."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "InsertString"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(m_lstInfo."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "GetCount"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(), strInfo);"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    m_initialize "
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
                children: "    m_lstInfo."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "InsertString"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(m_lstInfo."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "GetCount"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(), "
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
                children: '"initialize success"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "));"
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
              className: "line"
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "  return"
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
        id: "exclude-a-media-zone-3",
        children: "Exclude a media zone"
      }), _jsxs(_components.p, {
        children: ["To exclude servers in a region, such as Mainland China, set ", _jsx(_components.code, {
          children: "context.areaCode = AREA_CODE_GLOB ^ AREA_CODE_CN;"
        }), " before calling the ", _jsx(_components.code, {
          children: "initialize"
        }), " method:"]
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Initialize Agora SDK"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "bool"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " CAgoraRegionConnDlg"
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
                children: "InitAgora"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "() {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "\t// Create AgoraRtcEngine instance"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "\tm_rtcEngine "
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
                children: " createAgoraRtcEngine"
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
                children: "\tif"
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
                children: "m_rtcEngine) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "\t\tm_lstInfo."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "InsertString"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(m_lstInfo."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "GetCount"
              }), _jsx(_components.span, {
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
                children: "-"
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
                children: "\t\t            _T"
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
                children: '"createAgoraRtcEngine failed"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "));"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "\t\treturn"
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
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "\t}"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "\tm_eventHandler."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "SetMsgReceiver"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(m_hWnd);"
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
                children: "\tRtcEngineContext context;"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "\tstd"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::string strAppID "
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
                children: " GET_APP_ID;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "\tcontext.appId "
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
                children: " strAppID."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "c_str"
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
                children: "\tCString area_code;"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "\tm_cmbAreaCode."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "GetWindowText"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(area_code);"
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
                children: "\t// Exclude Mainland China from access area"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  context.areaCode "
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
                children: " AREA_CODE_GLOB "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "^"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " AREA_CODE_CN;"
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
                children: "\t// Initialize RtcEngineContext"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "\tint"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ret "
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
                children: " m_rtcEngine->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "initialize"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(context);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "\tif"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (ret "
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "\t\tm_initialize "
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
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "\t\tCString strInfo;"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "\t\tstrInfo."
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
                children: '"initialize failed: '
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
                children: "), ret);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "\t\tm_lstInfo."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "InsertString"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(m_lstInfo."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "GetCount"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(), strInfo);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "\t\treturn"
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
                children: "\t} "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "else"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "\t\tm_initialize "
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
                children: "\tm_lstInfo."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "InsertString"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(m_lstInfo."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "GetCount"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(), "
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
                children: '"initialize success"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "));"
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
      }), _jsx(_components.h2, {
        id: "reference-3",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference-3",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_initialize",
            children: _jsx(_components.code, {
              children: "initialize"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_rtcengineconfig.html",
            children: _jsx(_components.code, {
              children: "RtcEngineContext"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/enum_areacode.html",
            children: _jsx(_components.code, {
              children: "AREA_CODE"
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
      }), _jsx(_components.p, {
        children: "When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® media zone users connect to."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "This is an advanced feature suitable only for use-cases with access security restrictions."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-4",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Designated access zone"
            }), _jsx(_components.th, {
              children: "User's location"
            }), _jsx(_components.th, {
              children: "Zone actually accessed by the SDK"
            }), _jsx(_components.th, {
              children: "User experience"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "Normal"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "China"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "Quality may be affected"
            })]
          })]
        })]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "If a server in the specified zone is not available, the SDK reports an error."
            }), `
`, _jsx(_components.li, {
              children: "Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected."
            }), `
`]
          })
        })
      }), _jsx(_components.p, {
        children: "The following figure shows the workflow you implement to restrict access to media zones:"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Restrict media zones"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/restrict-media-zones.svg",
          alt: "Restrict media zones"
        })
      }), _jsx(_components.h2, {
        id: "prerequisites-4",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have implemented the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/get-started-sdk",
          children: "SDK quickstart"
        }), " in your project."]
      }), _jsx(_components.h2, {
        id: "implement-restricted-media-zones-4",
        children: "Implement restricted media zones"
      }), _jsx(_components.p, {
        children: "This section shows you how to restrict access to media zones in your app."
      }), _jsxs(_components.p, {
        children: ["By default, the SDK connects to the nearest Agora media zone. Set the ", _jsx(_components.code, {
          children: "areaCode"
        }), " parameter when calling the ", _jsx(_components.code, {
          children: "initialize"
        }), " method to specify the access zone(s). After you set the access zone, the SDK only connects to Agora servers in the specified zone."]
      }), _jsxs(_components.p, {
        children: ["You can set the ", _jsx(_components.code, {
          children: "areaCode"
        }), " to:"]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AreaCodeGlob"
          }), ": Global (Default)"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AreaCodeCn"
          }), " : Mainland China"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AreaCodeNa"
          }), " : North America"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AreaCodeEu"
          }), " : Europe"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AreaCodeAs"
          }), " : Asia excluding Mainland China"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AreaCodeJp"
          }), " : Japan"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AreaCodeIn"
          }), " : India"]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Media zones support bitwise operations."
          })
        })
      }), _jsx(_components.p, {
        children: "Refer to the following sample code:"
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
                children: "// Only connect to the Agora SDRTN® located in North America."
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
                children: "initialize"
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
                children: "  appId: appID,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  areaCode: AreaCode.AreaCodeNa"
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
            href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_rtcengineconfig.html",
            children: _jsx(_components.code, {
              children: "RtcEngineContext"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/enum_areacode.html",
            children: _jsx(_components.code, {
              children: "AreaCode"
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
      }), _jsx(_components.p, {
        children: "When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® media zone users connect to."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "This is an advanced feature suitable only for use-cases with access security restrictions."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-5",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Designated access zone"
            }), _jsx(_components.th, {
              children: "User's location"
            }), _jsx(_components.th, {
              children: "Zone actually accessed by the SDK"
            }), _jsx(_components.th, {
              children: "User experience"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "Normal"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "China"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "Quality may be affected"
            })]
          })]
        })]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "If a server in the specified zone is not available, the SDK reports an error."
            }), `
`, _jsx(_components.li, {
              children: "Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected."
            }), `
`]
          })
        })
      }), _jsx(_components.p, {
        children: "The following figure shows the workflow you implement to restrict access to media zones:"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Restrict media zones"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/restrict-media-zones.svg",
          alt: "Restrict media zones"
        })
      }), _jsx(_components.h2, {
        id: "prerequisites-5",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have implemented the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/get-started-sdk",
          children: "SDK quickstart"
        }), " in your project."]
      }), _jsx(_components.h2, {
        id: "implement-restricted-media-zones-5",
        children: "Implement restricted media zones"
      }), _jsx(_components.p, {
        children: "This section shows you how to restrict access to media zones in your app."
      }), _jsxs(_components.p, {
        children: ["By default, the SDK connects to the nearest Agora server. Set the ", _jsx(_components.code, {
          children: "areaCode"
        }), " property of ", _jsx(_components.code, {
          children: "RtcEngineContext"
        }), " when calling the ", _jsx(_components.code, {
          children: "initialize"
        }), " method to specify the access area. After setting the access zone, the SDK only connects to Agora servers in the specified zone(s)."]
      }), _jsx(_components.p, {
        children: "You can set the area to:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "areaCodeGlob"
          }), ": Global (Default)"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "areaCodeCn"
          }), " : Mainland China"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "areaCodeNa"
          }), " : North America"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "areaCodeEu"
          }), " : Europe"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "areaCodeAs"
          }), " : Asia excluding Mainland China"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "areaCodeJp"
          }), " : Japan"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "areaCodeIn"
          }), " : India"]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Media zones support bitwise operations."
          })
        })
      }), _jsx(_components.p, {
        children: "Refer to the following sample code:"
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
                children: "// Your app only connects to Agora SDRTN® located in North America."
              })
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
                children: " agoraEngine."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "initialize"
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
                children: "RtcEngineContext"
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " AreaCode"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".areaCodeNa."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "value"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(),"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  appId"
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
                children: " appId"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "));"
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
            href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_initialize",
            children: _jsx(_components.code, {
              children: "initialize"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_rtcengineconfig.html",
            children: _jsx(_components.code, {
              children: "RtcEngineContext"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/enum_areacode.html",
            children: _jsx(_components.code, {
              children: "AreaCode"
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
      }), _jsx(_components.p, {
        children: "When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN(R) media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN(R) media zone users connect to."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "This is an advanced feature suitable only for use-cases with access security restrictions."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-6",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN(R) from North America and China respectively:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Designated access zone"
            }), _jsx(_components.th, {
              children: "User's location"
            }), _jsx(_components.th, {
              children: "Zone actually accessed by the SDK"
            }), _jsx(_components.th, {
              children: "User experience"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "Normal"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "China"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "Quality may be affected"
            })]
          })]
        })]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "If a server in the specified zone is not available, the SDK reports an error."
            }), `
`, _jsx(_components.li, {
              children: "Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected."
            }), `
`]
          })
        })
      }), _jsx(_components.p, {
        children: "The following figure shows the workflow you implement to restrict access to media zones:"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Restrict media zones"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/restrict-media-zones.svg",
          alt: "Restrict media zones"
        })
      }), _jsx(_components.h2, {
        id: "prerequisites-6",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have implemented the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/get-started-sdk",
          children: "SDK quickstart"
        }), " in your project."]
      }), _jsx(_components.h2, {
        id: "implement-restricted-media-zones-6",
        children: "Implement restricted media zones"
      }), _jsx(_components.p, {
        children: "This section shows you how to restrict access to media zones in your app."
      }), _jsxs(_components.p, {
        children: ["You call the ", _jsx(_components.code, {
          children: "AgoraRTC.setArea"
        }), " method to specify the media zone. By default, the SDK selects the nearest Agora server region to connect to. After you set the media zone, the SDK only connects to Agora servers in the specified zone."]
      }), _jsxs(_components.p, {
        children: ["Use one of the following values for ", _jsx(_components.code, {
          children: "areaCode"
        }), " and ", _jsx(_components.code, {
          children: "excludedArea"
        }), ":"]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "ASIA"
          }), ": Asia except Mainland China"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "CHINA"
          }), ": Mainland China"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "EUROPE"
          }), ": Europe"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "GLOBAL"
          }), ": Global (Default)"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "INDIA"
          }), ": India"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "JAPAN"
          }), ": Japan"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "NORTH_AMERICA"
          }), ": North America"]
        }), `
`]
      }), _jsx(_components.p, {
        children: "Refer to the following sample code:"
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
                children: "AgoraRTC."
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
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'ASIA'"
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
      }), _jsxs(_components.p, {
        children: ["Use the ", _jsx(_components.code, {
          children: "excludedArea"
        }), " parameter to specify a smaller zone to be excluded from a larger zone. Currently, you can only set the larger zone to ", _jsx(_components.code, {
          children: "GLOBAL"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Exclude Mainland China from media zones"
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
                children: "setArea"
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
                children: "  areaCode: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'GLOBAL'"
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
                children: "  excludedArea: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'CHINA'"
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
                children: "});"
              })
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
            href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#setarea",
            children: _jsx(_components.code, {
              children: "setArea"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/web/4.x/enums/areas.html",
            children: _jsx(_components.code, {
              children: "AREAS"
            })
          })
        }), `
`]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "javascript",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "javascript"
      }), _jsx(_components.p, {
        children: "When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN(R) media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN(R) media zone users connect to."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "This is an advanced feature suitable only for use-cases with access security restrictions."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-7",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN(R) from North America and China respectively:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Designated access zone"
            }), _jsx(_components.th, {
              children: "User's location"
            }), _jsx(_components.th, {
              children: "Zone actually accessed by the SDK"
            }), _jsx(_components.th, {
              children: "User experience"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "Normal"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "China"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "Quality may be affected"
            })]
          })]
        })]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "If a server in the specified zone is not available, the SDK reports an error."
            }), `
`, _jsx(_components.li, {
              children: "Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected."
            }), `
`]
          })
        })
      }), _jsx(_components.p, {
        children: "The following figure shows the workflow you implement to restrict access to media zones:"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Restrict media zones"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/restrict-media-zones.svg",
          alt: "Restrict media zones"
        })
      }), _jsx(_components.h2, {
        id: "prerequisites-7",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have implemented the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/get-started-sdk",
          children: "SDK quickstart"
        }), " in your project."]
      }), _jsx(_components.h2, {
        id: "implement-restricted-media-zones-7",
        children: "Implement restricted media zones"
      }), _jsx(_components.p, {
        children: "This section shows you how to restrict access to media zones in your app."
      }), _jsxs(_components.p, {
        children: ["By default, the SDK connects to the nearest Agora server. You set the ", _jsx(_components.code, {
          children: "areaCode"
        }), " property by calling the ", _jsx(_components.code, {
          children: "setArea"
        }), " method to specify the media zone(s). After setting the access zone, the SDK only connects to Agora servers in the specified media zone."]
      }), _jsx(_components.p, {
        children: "You can set the area to:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "ASIA"
          }), ": Asia except Mainland China"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "CHINA"
          }), ": Mainland China"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "EUROPE"
          }), ": European region"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "GLOBAL"
          }), ": Global (Default)"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "INDIA"
          }), ": India"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "JAPAN"
          }), ": Japan"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "NORTH_AMERICA"
          }), ": North America"]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Media zones support bitwise operations."
          })
        })
      }), _jsx(_components.p, {
        children: "Refer to the following sample code:"
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " useMediaZones"
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  useEffect"
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    AgoraRTC."
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
                children: "      areaCode: ["
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "AREAS"
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
                children: "NORTH_AMERICA"
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
                children: "AREAS"
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
                children: "ASIA"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "],"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    });"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  }, []);"
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
                children: "function"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " EnableMediaZones"
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  useMediaZones"
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "  return"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ("
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "div"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "      <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "App"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " />"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    </"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "div"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
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
                children: "}"
              })
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
            href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#setarea",
            children: _jsx(_components.code, {
              children: "setArea"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/web/4.x/enums/areas.html",
            children: _jsx(_components.code, {
              children: "AREAS"
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
        children: "When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN® media zone users connect to."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "This is an advanced feature suitable only for use-cases with access security restrictions."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-8",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Designated access zone"
            }), _jsx(_components.th, {
              children: "User's location"
            }), _jsx(_components.th, {
              children: "Zone actually accessed by the SDK"
            }), _jsx(_components.th, {
              children: "User experience"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "Normal"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "China"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "Quality may be affected"
            })]
          })]
        })]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "If a server in the specified zone is not available, the SDK reports an error."
            }), `
`, _jsx(_components.li, {
              children: "Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected."
            }), `
`]
          })
        })
      }), _jsx(_components.p, {
        children: "The following figure shows the workflow you implement to restrict access to media zones:"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Restrict media zones"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/restrict-media-zones.svg",
          alt: "Restrict media zones"
        })
      }), _jsx(_components.h2, {
        id: "prerequisites-8",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have implemented the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/get-started-sdk",
          children: "SDK quickstart"
        }), " in your project."]
      }), _jsx(_components.h2, {
        id: "implement-restricted-media-zones-8",
        children: "Implement restricted media zones"
      }), _jsx(_components.p, {
        children: "This section shows you how to restrict access to media zones in your app."
      }), _jsxs(_components.p, {
        children: ["By default, the SDK connects to the nearest Agora server. Set the ", _jsx(_components.code, {
          children: "areaCode"
        }), " property of ", _jsx(_components.code, {
          children: "RTCEngineContext"
        }), " before passing it to the ", _jsx(_components.code, {
          children: "initialize"
        }), " method. After you set the media zone, the SDK only connects to servers in the specified zone."]
      }), _jsxs(_components.p, {
        children: ["You can set the ", _jsx(_components.code, {
          children: "areaCode"
        }), " to:"]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AreaCodeGlob"
          }), ": Global (Default)"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AreaCodeCn"
          }), " : Mainland China"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AreaCodeNa"
          }), " : North America"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AreaCodeEu"
          }), " : Europe"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AreaCodeAs"
          }), " : Asia excluding Mainland China"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AreaCodeJp"
          }), " : Japan"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AreaCodeIn"
          }), " : India"]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Media zones support bitwise operations."
          })
        })
      }), _jsx(_components.p, {
        children: "Refer to the following sample code:"
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "this"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "._rtcContext.areaCode "
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
                children: " AreaCode.AreaCodeNa;"
              })]
            })
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
            href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_rtcengineconfig.html",
            children: _jsx(_components.code, {
              children: "RtcEngineContext"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/enum_areacode.html",
            children: _jsx(_components.code, {
              children: "AreaCode"
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
        children: "When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN® media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your game by specifying the Agora SDRTN® media zone users connect to."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "This is an advanced feature suitable only for use-cases with access security restrictions."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-9",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN® from North America and China respectively:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Designated access zone"
            }), _jsx(_components.th, {
              children: "User's location"
            }), _jsx(_components.th, {
              children: "Zone actually accessed by the SDK"
            }), _jsx(_components.th, {
              children: "User experience"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "Normal"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "China"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "Quality may be affected"
            })]
          })]
        })]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "If a server in the specified zone is not available, the SDK reports an error."
            }), `
`, _jsx(_components.li, {
              children: "Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected."
            }), `
`]
          })
        })
      }), _jsx(_components.p, {
        children: "The following figure shows the workflow you implement to restrict access to media zones:"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Restrict media zones"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/restrict-media-zones.svg",
          alt: "Restrict media zones"
        })
      }), _jsx(_components.h2, {
        id: "prerequisites-9",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have implemented the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/get-started-sdk",
          children: "SDK quickstart"
        }), " in your project."]
      }), _jsx(_components.h2, {
        id: "implement-restricted-media-zones-9",
        children: "Implement restricted media zones"
      }), _jsx(_components.p, {
        children: "This section shows you how to restrict access to media zones in your game."
      }), _jsxs(_components.p, {
        children: ["By default, the SDK connects to the nearest Agora server. Set the ", _jsx(_components.code, {
          children: "areaCode"
        }), " property of ", _jsx(_components.code, {
          children: "RtcEngineContext"
        }), " when calling the ", _jsx(_components.code, {
          children: "initialize"
        }), " method to specify the access zone(s). After setting the access zone, the SDK only connects to Agora servers in the specified zone(s)."]
      }), _jsxs(_components.p, {
        children: ["You can set the ", _jsx(_components.code, {
          children: "areaCode"
        }), " to:"]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_GLOB"
          }), ": Global (Default)"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_CN"
          }), " : Mainland China"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_NA"
          }), " : North America"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_EU"
          }), " : Europe"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_AS"
          }), " : Asia except Mainland China"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_JP"
          }), " : Japan"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_IN"
          }), " : India"]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Media zones support bitwise operations."
          })
        })
      }), _jsx(_components.h3, {
        id: "include-a-media-zone-4",
        children: "Include a media zone"
      }), _jsxs(_components.p, {
        children: ["To limit access to servers in only one media zone, such as North America, set ", _jsx(_components.code, {
          children: "context.areaCode = AREA_CODE_NA;"
        }), " before calling the ", _jsx(_components.code, {
          children: "initialize"
        }), " method:"]
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
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Initialize Agora SDK"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "RtcEngine "
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
                children: " Agora.Rtc.RtcEngine."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "CreateAgoraRtcEngine"
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
                children: "RtcEngineContext"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " context"
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
                children: " RtcEngineContext"
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
                children: "context.appId "
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
                children: " _appID;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "context.channelProfile "
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
                children: " CHANNEL_PROFILE_TYPE.CHANNEL_PROFILE_LIVE_BROADCASTING;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "context.audioScenario "
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
                children: " AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_DEFAULT;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Restrict access to servers in North America"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "context.areaCode "
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
                children: " AREA_CODE.AREA_CODE_NA;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Initialize RtcEngineContext"
              })
            }), `
`, _jsxs(_components.span, {
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
                children: "Initialize"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(context);"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "exclude-a-media-zone-4",
        children: "Exclude a media zone"
      }), _jsxs(_components.p, {
        children: ["To exclude servers in a region, such as Mainland China, set ", _jsx(_components.code, {
          children: "context.areaCode = AREA_CODE.AREA_CODE_GLOB ^ AREA_CODE.AREA_CODE_CN;"
        }), " before calling the ", _jsx(_components.code, {
          children: "initialize"
        }), " method:"]
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
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Initialize Agora SDK"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "RtcEngine "
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
                children: " Agora.Rtc.RtcEngine."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "CreateAgoraRtcEngine"
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
                children: "RtcEngineContext"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " context"
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
                children: " RtcEngineContext"
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
                children: "context.appId "
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
                children: " _appID;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "context.channelProfile "
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
                children: " CHANNEL_PROFILE_TYPE.CHANNEL_PROFILE_LIVE_BROADCASTING;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "context.audioScenario "
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
                children: " AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_DEFAULT;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Exclude Mainland China from access area"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "context.areaCode "
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
                children: " AREA_CODE.AREA_CODE_GLOB "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "^"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " AREA_CODE.AREA_CODE_CN;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Initialize RtcEngineContext"
              })
            }), `
`, _jsxs(_components.span, {
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
                children: "Initialize"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(context);"
              })]
            })]
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
            href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_initialize",
            children: _jsx(_components.code, {
              children: "Initialize"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_rtcengineconfig.html",
            children: _jsx(_components.code, {
              children: "RtcEngineContext"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/enum_areacode.html",
            children: _jsx(_components.code, {
              children: "AreaCode"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_createagorartcengine",
            children: _jsx(_components.code, {
              children: "CreateAgoraRtcEngine"
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
      }), _jsx(_components.p, {
        children: "When a user joins a channel, RTC SDK automatically connects them to the Agora SDRTN(R) media zone that is geographically closest to the user. However, to meet the laws and regulations of the user's country, you may need to specify, or filter out connections to a specific geographical zone. Agora enables you to control and customize data routing in your app by specifying the Agora SDRTN(R) media zone users connect to."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "This is an advanced feature suitable only for use-cases with access security restrictions."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-10",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "After you turn on the restricted media zones feature, the SDK only accesses the Agora server in the specified zone(s), irrespective of the geographical location of the user. As an example, the following table shows the outcome if you specify North America as the access zone, and users connect to Agora SDRTN(R) from North America and China respectively:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Designated access zone"
            }), _jsx(_components.th, {
              children: "User's location"
            }), _jsx(_components.th, {
              children: "Zone actually accessed by the SDK"
            }), _jsx(_components.th, {
              children: "User experience"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "Normal"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "China"
            }), _jsx(_components.td, {
              children: "North America"
            }), _jsx(_components.td, {
              children: "Quality may be affected"
            })]
          })]
        })]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "If a server in the specified zone is not available, the SDK reports an error."
            }), `
`, _jsx(_components.li, {
              children: "Due to cross-regional public internet between the designated zone and the geographical location where the app user is located, the audio and video experience may be affected."
            }), `
`]
          })
        })
      }), _jsx(_components.p, {
        children: "The following figure shows the workflow you implement to restrict access to media zones:"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Restrict media zones"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/restrict-media-zones.svg",
          alt: "Restrict media zones"
        })
      }), _jsx(_components.h2, {
        id: "prerequisites-10",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Ensure that you have implemented the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/get-started-sdk",
          children: "SDK quickstart"
        }), " in your project."]
      }), _jsx(_components.h2, {
        id: "implement-restricted-media-zones-10",
        children: "Implement restricted media zones"
      }), _jsx(_components.p, {
        children: "This section shows you how to restrict access to media zones in your app."
      }), _jsxs(_components.p, {
        children: ["By default, the SDK connects to the nearest Agora server. Set the ", _jsx(_components.code, {
          children: "areaCode"
        }), " property of ", _jsx(_components.code, {
          children: "RtcEngineContext"
        }), " when calling the ", _jsx(_components.code, {
          children: "initialize"
        }), " method to specify the media zones. After setting the media zone(s), the SDK only connects to Agora servers in the specified zone(s)."]
      }), _jsxs(_components.p, {
        children: ["You can set the ", _jsx(_components.code, {
          children: "areaCode"
        }), " to:"]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_GLOB"
          }), ": Global (Default)"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_CN"
          }), ": Mainland China"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_NA"
          }), ": North America"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_EU"
          }), ": Europe"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_AS"
          }), ": Asia except Mainland China"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_JP"
          }), ": Japan"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AREA_CODE_IN"
          }), ": India"]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["Media zones support bitwise operations. To include a zone, use the ", _jsx(_components.code, {
              children: "|"
            }), " operator, to exclude a zone use ", _jsx(_components.code, {
              children: "^"
            }), "."]
          })
        })
      }), _jsx(_components.p, {
        children: "Refer to the following code:"
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " UMyUserWidget"
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
                children: "setupVideoSDKEngine"
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
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    // Create an engine instance."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    agoraEngine "
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
                children: "rtc"
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
                children: "ue"
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
                children: "createAgoraRtcEngine"
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
                children: "    // Specify a context for the engine."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    RtcEngineContext context;"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    context.appId "
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
                children: " appId."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "c_str"
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
                children: "    context.eventHandler "
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
                children: " this"
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
                children: "    // Choose the communication profile for video calling."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    context.channelProfile "
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
                children: " CHANNEL_PROFILE_TYPE"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::CHANNEL_PROFILE_COMMUNICATION;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    // Only connect to Agora SDRTN® located in North America."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    context.areaCode "
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
                children: " AREA_CODE"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::AREA_CODE_NA;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    // Initialize the engine instance with the context."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    agoraEngine->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "initialize"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(context);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    // Enable the local audio capture to init the local video stream."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    agoraEngine->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "enableAudio"
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
                children: "    // Enable the local video capture to init the local video stream."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    agoraEngine->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "enableVideo"
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
                children: "}"
              })
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "reference-10",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference-10",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_initialize",
            children: _jsx(_components.code, {
              children: "initialize"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_rtcengineconfig.html",
            children: _jsx(_components.code, {
              children: "RtcEngineContext"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/enum_areacode.html",
            children: _jsx(_components.code, {
              children: "AREA_CODE"
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
